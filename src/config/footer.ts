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
      { label: "Contact us", href: "/#contact" },
    ],
  },
  {
    heading: "Our Services",
    items: [
      { label: "General Education Transportation", href: "/services/general-education" },
      { label: "IEP Transportation", href: "/services/iep" },
      { label: "Specialised Support", href: "/services/specialised-support" },
      { label: "Safety & Training", href: "/services/safety-training" },
      { label: "Areas We Serve", href: "/areas" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Driver Requirements", href: "/drivers/requirements" },
      { label: "Onboarding Process", href: "/drivers/onboarding" },
      { label: "Safety Guidelines", href: "/safety" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const footerContact = {
  phone: { label: "415-535-2155", href: "tel:+14155352155" },
  email: { label: "info@arigo.com", href: "mailto:info@arigo.com" },
};

export const footerNewsletter = {
  heading: "Stay Connected",
  description: "Get updates, stories and community highlights delivered to your inbox.",
  placeholder: "Email",
};

export const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://facebook.com/arigo" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com/arigo" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/arigo" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com/@arigo" },
] as const;

export const appLinks = {
  googlePlay: "https://play.google.com/store/apps",
  appStore: "https://apps.apple.com",
};

export const footerBottom = {
  copyright: (year: number) => `${year} Arigo. All rights reserved.`,
  tagline: "Proudly serving students and communities across California and Illinois.",
};
