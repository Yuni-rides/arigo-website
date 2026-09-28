import type { Metadata } from "next";

import { DriversView, driversMetadata } from "@/features/drivers";

export const metadata: Metadata = driversMetadata;

export default function DriversPage() {
  return <DriversView />;
}
