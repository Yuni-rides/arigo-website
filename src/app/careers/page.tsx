import type { Metadata } from "next";

import { CareersView, careersMetadata } from "@/features/careers";

export const metadata: Metadata = careersMetadata;

export default function CareersPage() {
  return <CareersView />;
}
