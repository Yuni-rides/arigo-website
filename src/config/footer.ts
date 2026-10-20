import { siteConfig } from "@/config/site";
import type { NavItem } from "@/types";

export const footerDescription =
  "Arigo provides safe, reliable and compassionate transportation for students. We help families, schools, and communities move forward together.";

export const footerColumns: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about-us" },
      { label: "Become a Driver", href: "/#drivers" },
      { label: "Blogs", href: "/blog" },
      { label: "Contact us", href: "/contact-us" },
    ],
  },
  {
    heading: "Our Services",
    // The trips we cover - every one of them opens the services page.
    items: [
      { label: "Dialysis", href: "/services" },
      { label: "Radiation & chemotherapy", href: "/services" },
      { label: "Physical therapy", href: "/services" },
      { label: "Doctor and dental visits", href: "/services" },
      { label: "Hospital discharge", href: "/services" },
      { label: "Longer trips for care", href: "/services" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Privacy Policy", href: "/#" },
      { label: "Terms of Service", href: "/#" },
    ],
  },
];

export const footerContact = {
  phone: { label: "415-531-6769", href: "tel:+14155316769" },
  email: { label: "admin@arigooo.com", href: "mailto:admin@arigooo.com" },
};

export const footerNewsletter = {
  heading: "Stay Connected",
  description: "Get updates, stories and community highlights delivered to your inbox.",
  placeholder: "Email",
};

export const socialLinks = [
  { id: "facebook", label: "Facebook", href: siteConfig.links.facebook },
  { id: "instagram", label: "Instagram", href: siteConfig.links.instagram },
  { id: "linkedin", label: "LinkedIn", href: siteConfig.links.linkedin },
  { id: "youtube", label: "YouTube", href: siteConfig.links.youtube },
] as const;

export const appLinks = {
  googlePlay: "https://play.google.com/store/apps",
  appStore: "https://apps.apple.com",
};

export const footerBottom = {
  copyright: (year: number) => `${year} Arigo. All rights reserved.`,
  tagline: "Proudly providing NEMT and delivery services across California and Washington.",
};
