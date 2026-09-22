import type { PageHeroProps } from "@/components/sections/page-hero";

export const careersHeroContent: PageHeroProps = {
  highlightColor: "primary",
  primaryCtaVariant: "primary",
  lines: [{ text: "Open Positions" }, { text: "at ", highlight: "Arigo" }],
  description:
    "Join a team that gets kids where they need to be safely, on time, every day. Discover a career built on care.",
  image: {
    src: "/images/careerBanner.png",
    alt: "Arigo drivers in orange uniforms talking and laughing together",
  },
  primaryCta: { label: "Learn more", href: "/careers#positions" },
};
