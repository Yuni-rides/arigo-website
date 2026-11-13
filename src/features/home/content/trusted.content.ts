import type { TrustedContent } from "../types";

export const trustedContent: TrustedContent = {
  highlight: "Trusted",
  heading: "by school districts and healthcare partners across states.",
  partners: [
    {
      id: "roanoke",
      name: "Roanoke City Public Schools",
      logo: { src: "/images/trustedIcon1.webp", width: 202, height: 72 },
    },
    {
      id: "spokane",
      name: "Spokane Public Schools",
      logo: { src: "/images/trustedIcon2.webp", width: 238, height: 65 },
    },
    {
      id: "howard",
      name: "Howard County Public School System",
      logo: { src: "/images/trustedIcon3.webp", width: 181, height: 66 },
    },
    {
      id: "boston",
      name: "Boston Public Schools",
      logo: { src: "/images/trustedIcon4.webp", width: 189, height: 75 },
    },
    {
      id: "cas",
      name: "California Academy of Sciences",
      logo: { src: "/images/trustedIcon5.webp", width: 167, height: 64 },
    },
  ],
};
