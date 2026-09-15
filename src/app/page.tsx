import type { Metadata } from "next";

import { HomeView, homeMetadata } from "@/features/home";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return <HomeView />;
}
