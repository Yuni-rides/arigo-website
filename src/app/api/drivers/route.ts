import { NextResponse } from "next/server";

import { driverApplicationFields } from "@/features/drivers";
import { asLine, asText, EMAIL_RE, rowsToHtml, rowsToText, sendMail, type EmailRow } from "@/lib/mail";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_EXPERIENCE_YEARS = 70;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const rows: EmailRow[] = [];
  const missing: string[] = [];

  for (const field of driverApplicationFields) {
    const value = field.type === "textarea" ? asText(payload[field.name]) : asLine(payload[field.name]);

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

    if (field.type === "number") {
      const years = Number(value);
      if (!Number.isInteger(years) || years < 0 || years > MAX_EXPERIENCE_YEARS) {
        return NextResponse.json(
          {
            ok: false,
            error: `${field.label} must be a whole number between 0 and ${MAX_EXPERIENCE_YEARS}.`,
          },
          { status: 400 },
        );
      }
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

  try {
    await sendMail({
      toEnv: ["DRIVER_TO_EMAIL", "BOOKING_TO_EMAIL"],
      fromName: "Arigo Driver Applications",
      subject: `Driver application${name ? ` - ${name}` : ""}`,
      replyTo: email,
      text: rowsToText("New driver application from the Arigo website", rows),
      html: rowsToHtml(
        "New driver application",
        "Submitted through the Become a Driver form on the Arigo website.",
        rows,
      ),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/drivers] send failed:", error);
    return NextResponse.json(
      { ok: false, error: "We could not send your application right now. Please try again or call us." },
      { status: 500 },
    );
  }
}
