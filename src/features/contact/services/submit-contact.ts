/** Posts the contact form to the site's own route handler (src/app/api/contact/route.ts). */
export async function submitContact(payload: Record<string, string>): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error ?? "We could not send your message. Please try again.");
  }
}
