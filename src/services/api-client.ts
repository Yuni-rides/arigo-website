/**
 * Thin typed fetch wrapper for external / backend APIs.
 * Feature-level services (e.g. features/contact/services/contact.service.ts)
 * should call `apiFetch` rather than `fetch` directly so headers, base URL,
 * and error handling stay consistent.
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
  });

  if (!res.ok) {
    throw new ApiError(res.status, `Request to ${path} failed with ${res.status}`);
  }

  return res.json() as Promise<T>;
}
