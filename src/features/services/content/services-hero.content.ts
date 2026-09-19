import type { ServicesHeroContent } from "../types";

export const servicesHeroContent: ServicesHeroContent = {
  lines: [{ text: "Transportation" }, { text: "Designed Around" }, { highlight: "Care, Safety & Trust" }],
  description:
    "Reliable, technology-powered transportation services built to support children, families, schools, and healthcare communities.",
  image: {
    src: "/images/serviceBanner.png",
    alt: "An Arigo driver helping a child into a van while a mother and daughter look on",
  },
  primaryCta: { label: "Request a Ride", href: "/#request" },
  secondaryCta: { label: "Get Started", href: "/#drivers" },
};
