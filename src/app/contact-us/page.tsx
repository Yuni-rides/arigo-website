import type { Metadata } from "next";

import { ContactView, contactMetadata } from "@/features/contact";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return <ContactView />;
}
