export const siteConfig = {
  name: "Arigo",
  title: "Arigo - Care in Every Mile",
  tagline: "Care in every mile.",
  description: "Arigo helps modern teams move faster with thoughtfully designed products and services.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  ogImage: "/opengraph-image",
  twitterHandle: "@arigo",
  /** Official Arigo profiles - the single source for the footer icons and the JSON-LD sameAs list. */
  links: {
    facebook: "https://www.facebook.com/people/Arigoo/61594506308474/",
    instagram: "https://www.instagram.com/arigoofficial/",
    linkedin: "https://www.linkedin.com/company/143926260/",
    youtube: "https://www.youtube.com/@Arigo-Ride",
    email: "admin@arigooo.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
