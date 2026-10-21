import type { PageHeroProps } from "@/components/sections/page-hero";

export const aboutHeroContent: PageHeroProps = {
  lines: [
    { text: "Driven by ", highlight: "Care." },
    { text: "Growing with ", highlight: "Purpose." },
  ],
  description: "Arigo helps people get to their medical appointments when getting there isn’t always easy—and get home with the same care and attention.",
  image: {
    src: "/images/aboutBanner.png",
    alt: "An Arigo driver helping a child into a van while a mother and daughter look on",
  },
};
