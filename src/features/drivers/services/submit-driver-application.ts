/** Posts the driver application to the site's own route handler (src/app/api/drivers/route.ts). */
export async function submitDriverApplication(payload: Record<string, string>): Promise<void> {
  const response = await fetch("/api/drivers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error ?? "We could not send your application. Please try again.");
  }
}
