export { cn } from "./cn";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path: string, base: string) {
  return new URL(path, base).toString();
}
