import type { AreasContent } from "../types";

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
      cities: [
        "Seattle",
        "Everett",
        "Lynnwood",
        "Renton",
        "Edmonds",
        "Tukwila",
        "Shoreline",
        "Kent",
        "Redmond",
        "Federal Way",
        "Bellevue",
        "Tacoma",
      ],
      href: "/areas/washington",
      // The two files are named the wrong way round: california.png is the Seattle skyline.
      photo: { src: "/images/california.webp", width: 563, height: 352 },
    },
    {
      id: "california",
      state: "California",
      cities: [
        "Richmond",
        "San Pablo",
        "Berkeley",
        "Alameda",
        "San Leandro",
        "Fremont",
        "Livermore",
        "Dublin",
        "Sunnyvale",
        "San Francisco",
        "San Rafael",
        "Santa Rosa",
        "Sacramento",
        "Vacaville",
        "Dixon",
        "Fairfield",
        "Oakland",
      ],
      href: "/areas/california",
      photo: { src: "/images/washington.webp", width: 563, height: 352 },
    },
  ],
};
