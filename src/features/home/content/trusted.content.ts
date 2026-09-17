import type { TrustedContent } from "../types";

export const trustedContent: TrustedContent = {
  highlight: "Trusted",
  heading: "by school districts and healthcare partners across 7 states.",
  partners: [
    {
      id: "roanoke",
      name: "Roanoke City Public Schools",
      logo: { src: "/images/trustedIcon1.png", width: 202, height: 72 },
    },
    {
      id: "spokane",
      name: "Spokane Public Schools",
      logo: { src: "/images/trustedIcon2.png", width: 238, height: 65 },
    },
    {
      id: "howard",
      name: "Howard County Public School System",
      logo: { src: "/images/trustedIcon3.png", width: 181, height: 66 },
    },
    {
      id: "boston",
      name: "Boston Public Schools",
      logo: { src: "/images/trustedIcon4.png", width: 189, height: 75 },
    },
    {
      id: "cas",
      name: "California Academy of Sciences",
      logo: { src: "/images/trustedIcon5.png", width: 167, height: 64 },
    },
  ],
};
