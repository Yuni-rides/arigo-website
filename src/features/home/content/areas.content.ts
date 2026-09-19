import type { AreasContent } from "../types";

export const areasContent: AreasContent = {
  title: "Areas we",
  titleUnderlined: "Serve in",
  description:
    "From fleet maintenance and routing logistics to onboard bus technologies that keep everyone safe, we deliver care with every practice, setting each student up for a brighter future.",
  moreLabel: "More states",
  moreHref: "/areas",
  areas: [
    {
      id: "washington",
      state: "Washington",
      cities: ["Everett", "Lynwood", "Edmonds", "Shoreline"],
      href: "/areas/washington",
      map: { src: "/images/washingtonMap.png", width: 223, height: 157 },
    },
    {
      id: "illinois",
      state: "Illinois",
      cities: ["Everett", "Lynwood", "Edmonds", "Shoreline"],
      href: "/areas/illinois",
      map: { src: "/images/illioniosMap.png", width: 119, height: 204 },
    },
    {
      id: "california",
      state: "California",
      cities: ["Edmonds", "Shoreline", "Edmonds", "Shoreline"],
      href: "/areas/california",
      map: { src: "/images/californiaMap.png", width: 132, height: 219 },
    },
    {
      id: "texas",
      state: "Texas",
      cities: ["Edmonds", "Shoreline", "Edmonds", "Shoreline"],
      href: "/areas/texas",
      map: { src: "/images/texasMap.png", width: 232, height: 220 },
    },
  ],
};
