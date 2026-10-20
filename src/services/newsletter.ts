/** Posts the footer subscribe box to the site's own route handler (src/app/api/newsletter/route.ts). */
export async function subscribeToNewsletter(email: string): Promise<void> {
  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error ?? "We could not subscribe you. Please try again.");
  }
}
