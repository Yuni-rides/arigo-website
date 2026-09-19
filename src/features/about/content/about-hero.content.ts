import type { PageHeroProps } from "@/components/sections/page-hero";

export const aboutHeroContent: PageHeroProps = {
  lines: [
    { text: "Driven by ", highlight: "Care." },
    { text: "Growing with ", highlight: "Purpose." },
  ],
  description: "Technology driven, caring transportation service trusted by families across the U.S.",
  image: {
    src: "/images/aboutBanner.png",
    alt: "An Arigo driver helping a child into a van while a mother and daughter look on",
  },
};
