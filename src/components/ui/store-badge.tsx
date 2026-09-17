import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StoreBadgeProps = { href: string; small: string; name: string; children: ReactNode; className?: string };

/** App-store style black badge (Google Play / App Store). */
export function StoreBadge({ href, small, name, children, className }: StoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-2 rounded-md border border-white/40 bg-black px-3 py-1.5 text-white transition-colors hover:border-white",
        className,
      )}
    >
      {children}
      <span className="flex flex-col leading-none">
        <span className="text-[9px] uppercase">{small}</span>
        <span className="text-sm font-semibold">{name}</span>
      </span>
    </a>
  );
}
