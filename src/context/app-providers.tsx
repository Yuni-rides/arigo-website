"use client";

import { MotionConfig } from "framer-motion";

import type { WithChildren } from "@/types";

/**
 * Single client boundary for all global providers.
 * Add theme, analytics, query-client, etc. here - never in app/layout.tsx directly.
 */
export function AppProviders({ children }: WithChildren) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
