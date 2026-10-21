import { NextResponse } from "next/server";

import { bookingContent } from "@/features/booking";
import type { BookingField, ServiceId } from "@/features/booking";
import { asLine, asText, EMAIL_RE, rowsToHtml, rowsToText, sendMail, type EmailRow } from "@/lib/mail";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
// SMTP handshakes can be slow on a cold start; the Hobby default of 10s is not always enough.
export const maxDuration = 30;

/** Accepts either the id ("medical-ride") or the visible label ("Medical Ride"). */
function resolveService(raw: string): ServiceId | null {
  const option = bookingContent.serviceField.options.find(
    (candidate) => candidate.id === raw || candidate.label.toLowerCase() === raw.toLowerCase(),
  );
  return option?.id ?? null;
}

function fieldsFor(service: ServiceId): BookingField[] {
  return bookingContent.fields.filter((field) => !field.services || field.services.includes(service));
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const service = resolveService(asLine(payload[bookingContent.serviceField.name]));
  if (!service) {
    const labels = bookingContent.serviceField.options.map((option) => option.label).join(", ");
    return NextResponse.json({ ok: false, error: `Please choose one of: ${labels}.` }, { status: 400 });
  }

  const serviceLabel = bookingContent.serviceField.options.find((option) => option.id === service)!.label;

  // The form itself is the schema: required flags and option lists come from the content file,
  // so the route can never drift from what the user was actually shown.
  const rows: EmailRow[] = [];
  const missing: string[] = [];

  for (const field of fieldsFor(service)) {
    const value = field.name === "notes" ? asText(payload[field.name]) : asLine(payload[field.name]);

    if (!value) {
      if (field.required) missing.push(field.label);
      continue;
    }

    if (field.options && !field.options.includes(value)) {
      return NextResponse.json(
        { ok: false, error: `${field.label} must be one of: ${field.options.join(", ")}.` },
        { status: 400 },
      );
    }

    rows.push({ label: field.label, value });
  }

  if (missing.length) {
    return NextResponse.json({ ok: false, error: `Please fill in: ${missing.join(", ")}.` }, { status: 400 });
  }

  const name = rows.find((row) => row.label === "Full Name")?.value ?? "";
  const email = rows.find((row) => row.label === "Email")?.value ?? "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  rows.unshift({ label: bookingContent.serviceField.label, value: serviceLabel });

  try {
    await sendMail({
      toEnv: "BOOKING_TO_EMAIL",
      fromName: "Arigo Booking",
      subject: `Booking request - ${serviceLabel}${name ? ` - ${name}` : ""}`,
      replyTo: email,
      text: rowsToText("New booking request from the Arigo website", rows),
      html: rowsToHtml("New booking request", "Submitted through the Arigo website booking form.", rows),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/booking] send failed:", error);
    return NextResponse.json(
      { ok: false, error: "We could not send your request right now. Please try again or call us." },
      { status: 500 },
    );
  }
}
