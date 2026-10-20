import { NextResponse } from "next/server";

import { contactSupportContent } from "@/features/contact";
import { asLine, asText, EMAIL_RE, rowsToHtml, rowsToText, sendMail, type EmailRow } from "@/lib/mail";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  // The content file is the schema: labels and required flags come from the same place the form
  // renders from, so the route can never drift from the visible form.
  const rows: EmailRow[] = [];
  const missing: string[] = [];

  for (const field of contactSupportContent.fields) {
    const value = field.type === "textarea" ? asText(payload[field.name]) : asLine(payload[field.name]);

    if (!value) {
      if (field.required) missing.push(field.label);
      continue;
    }

    rows.push({ label: field.label, value });
  }

  if (missing.length) {
    return NextResponse.json({ ok: false, error: `Please fill in: ${missing.join(", ")}.` }, { status: 400 });
  }

  const name = [asLine(payload.firstName), asLine(payload.lastName)].filter(Boolean).join(" ");
  const email = rows.find((row) => row.label === "Email")?.value ?? "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await sendMail({
      toEnv: ["CONTACT_TO_EMAIL", "BOOKING_TO_EMAIL"],
      fromName: "Arigo Contact Form",
      subject: `Support enquiry${name ? ` - ${name}` : ""}`,
      replyTo: email,
      text: rowsToText("New support enquiry from the Arigo website", rows),
      html: rowsToHtml(
        "New support enquiry",
        "Submitted through the Contact Support form on the Arigo website.",
        rows,
      ),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact] send failed:", error);
    return NextResponse.json(
      { ok: false, error: "We could not send your message right now. Please try again or call us." },
      { status: 500 },
    );
  }
}
