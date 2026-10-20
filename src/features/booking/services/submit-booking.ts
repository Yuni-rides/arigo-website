/** Posts the booking form to the site's own route handler (src/app/api/booking/route.ts). */
export async function submitBooking(payload: Record<string, string>): Promise<void> {
  const response = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error ?? "We could not send your request. Please try again.");
  }
}
