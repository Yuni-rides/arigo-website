export interface DriversHeroContent {
  /** Headline lines; `highlight` is rendered in brand orange. */
  lines: { text?: string; highlight?: string }[];
  description: string;
  cta: { label: string; href: string };
  images: {
    back: { src: string; alt: string };
    front: { src: string; alt: string };
  };
}

export const driversHeroContent: DriversHeroContent = {
  lines: [{ text: "Built for drivers ", highlight: "who" }, { highlight: "put safety first" }],
  description: "Confident drivers, backed by tools that give them full transparency and support.",
  cta: { label: "Get started", href: "/careers" },
  images: {
    back: { src: "/images/driverBanner1.png", alt: "Two Arigo drivers standing beside a vehicle" },
    front: { src: "/images/driverBanner2.png", alt: "An Arigo driver helping a student into the car" },
  },
};
