import type { CoreValue } from "../types";

/** Placeholder image for every card until the designer delivers individual assets. */
const placeholderImage = {
  src: "/images/safety-first.png",
  alt: "An Arigo driver fastening the seat belt of a smiling child",
};

const description =
  "The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.";

const cta = { label: "View More", href: "/#core-values" };

export const coreValuesIntro = {
  title: "About Our",
  highlight: "Core Values",
  description: "The principles that guide every journey, every child, and every family we serve.",
};

export const coreValues: CoreValue[] = [
  { id: "safety", title: "Safety", highlight: "First", description, image: placeholderImage, cta },
  { id: "trust", title: "", highlight: "Trust", description, image: placeholderImage, cta },
  { id: "care", title: "Care and", highlight: "Compassion", description, image: placeholderImage, cta },
  { id: "reliability", title: "", highlight: "Reliability", description, image: placeholderImage, cta },
  { id: "integrity", title: "", highlight: "Integrity", description, image: placeholderImage, cta },
  {
    id: "professionalism",
    title: "",
    highlight: "Professionalism",
    description,
    image: placeholderImage,
    cta,
  },
];
