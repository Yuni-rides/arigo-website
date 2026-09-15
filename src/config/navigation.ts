import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Safety", href: "/#safety" },
  { label: "Ride", href: "/#ride" },
  { label: "Our Heroes", href: "/#heroes" },
  { label: "Arigo Community", href: "/#community" },
  { label: "Become a Driver", href: "/#drivers" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Company",
    items: [
      { label: "Safety", href: "/#safety" },
      { label: "Our Heroes", href: "/#heroes" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
