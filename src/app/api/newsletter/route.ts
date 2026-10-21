import { NextResponse } from "next/server";

import { asLine, EMAIL_RE, rowsToHtml, rowsToText, sendMail, type EmailRow } from "@/lib/mail";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
// SMTP handshakes can be slow on a cold start; the Hobby default of 10s is not always enough.
export const maxDuration = 30;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const email = asLine(payload.email);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const rows: EmailRow[] = [
    { label: "Email", value: email },
    { label: "Subscribed at", value: new Date().toUTCString() },
  ];

  try {
    await sendMail({
      toEnv: ["NEWSLETTER_TO_EMAIL", "BOOKING_TO_EMAIL"],
      fromName: "Arigo Newsletter",
      subject: `Newsletter subscription - ${email}`,
      replyTo: email,
      text: rowsToText("New newsletter subscription from the Arigo website", rows),
      html: rowsToHtml(
        "New newsletter subscription",
        "Submitted through the footer subscribe box on the Arigo website.",
        rows,
      ),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/newsletter] send failed:", error);
    return NextResponse.json(
      { ok: false, error: "We could not subscribe you right now. Please try again later." },
      { status: 500 },
    );
  }
}
