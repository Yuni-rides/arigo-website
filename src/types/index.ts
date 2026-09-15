import type { ReactNode } from "react";

export type WithChildren<P = unknown> = P & { children: ReactNode };

export type WithClassName<P = unknown> = P & { className?: string };

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
