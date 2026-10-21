import { createMetadata } from "@/lib/seo/metadata";

export const privacyMetadata = createMetadata({
  title: "Privacy Policy",
  description: "How Arigo collects, uses, shares and protects rider and driver information.",
  path: "/privacy",
  keywords: ["Arigo privacy policy", "NEMT privacy", "rider data"],
});

export const termsMetadata = createMetadata({
  title: "Terms of Service",
  description: "The terms that apply when you book or take a ride with Arigo.",
  path: "/terms",
  keywords: ["Arigo terms of service", "NEMT terms", "ride terms"],
});
