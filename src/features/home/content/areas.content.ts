import type { AreasContent } from "../types";

/** Same list on both cards in the design. */
const cities = ["Everett", "Edmonds", "Edmonds", "Lynwood", "Shoreline", "Shoreline", "Everett"];

export const areasContent: AreasContent = {
  title: "Areas we",
  titleUnderlined: "Serve in",
  description:
    "From ride planning to medication delivery, we help patients reach care and get what they need to stay healthy",
  cardCtaLabel: "Learn more",
  areas: [
    {
      id: "washington",
      state: "Washington",
      cities,
      href: "/areas/washington",
      photo: { src: "/images/washington.png", width: 563, height: 352 },
    },
    {
      id: "california",
      state: "California",
      cities,
      href: "/areas/california",
      photo: { src: "/images/california.png", width: 563, height: 352 },
    },
  ],
};
