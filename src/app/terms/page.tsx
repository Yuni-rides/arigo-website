import type { Metadata } from "next";

import { LegalView, termsContent, termsMetadata } from "@/features/legal";

export const metadata: Metadata = termsMetadata;

export default function TermsPage() {
  return <LegalView content={termsContent} />;
}
