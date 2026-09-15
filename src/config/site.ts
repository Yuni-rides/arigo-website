/**
 * Site-wide constants. Anything that appears in metadata, the footer,
 * structured data, or the sitemap should be sourced from here.
 */
export const siteConfig = {
  name: "Arigo",
  title: "Arigo - Care in Every Mile",
  tagline: "Care in every mile.",
  description: "Arigo helps modern teams move faster with thoughtfully designed products and services.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  ogImage: "/opengraph-image",
  twitterHandle: "@arigo",
  links: {
    twitter: "https://twitter.com/arigo",
    linkedin: "https://linkedin.com/company/arigo",
    email: "hello@arigo.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
