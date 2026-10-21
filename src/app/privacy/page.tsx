import type { Metadata } from "next";

import { LegalView, privacyContent, privacyMetadata } from "@/features/legal";

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPage() {
  return <LegalView content={privacyContent} />;
}
