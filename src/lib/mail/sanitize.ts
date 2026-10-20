/** Hard cap so a single field can never blow up the email or the log. */
export const MAX_LEN = 5000;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function asText(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_LEN) : "";
}

/** Single line - keeps header-ish values (name, subject, email) free of newlines. */
export function asLine(value: unknown): string {
  return asText(value).replace(/[\r\n]+/g, " ");
}

export function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
