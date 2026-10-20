import nodemailer from "nodemailer";

const SEND_TIMEOUT_MS = 20_000;

/** Reads the first env var that is set; names are listed most specific first. */
function requiredEnv(...names: string[]): string {
  for (const name of names) {
    const value = process.env[name];
    if (value) return value;
  }
  throw new Error(`Missing environment variable: ${names.join(" or ")}`);
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms),
    ),
  ]);
}

export interface MailOptions {
  /** Env var(s) holding the recipient inbox; the first one that is set wins. */
  toEnv: string | string[];
  /** Shown as the sender name; the address is always the authenticated SMTP user. */
  fromName: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

/** Sends through the site's SMTP account. Throws if the SMTP env vars are missing. */
export async function sendMail({ toEnv, fromName, subject, text, html, replyTo }: MailOptions) {
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = requiredEnv("SMTP_USER");

  const transporter = nodemailer.createTransport({
    host: requiredEnv("SMTP_HOST"),
    port,
    secure: port === 465,
    auth: { user, pass: requiredEnv("SMTP_PASS") },
  });

  await withTimeout(
    transporter.sendMail({
      from: `"${fromName}" <${user}>`,
      to: requiredEnv(...(Array.isArray(toEnv) ? toEnv : [toEnv])),
      replyTo,
      subject,
      text,
      html,
    }),
    SEND_TIMEOUT_MS,
    "sendMail",
  );
}
