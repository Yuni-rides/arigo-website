export type BlogCategory =
  | "Safety & Trust"
  | "Patients & Families"
  | "Drivers"
  | "Healthcare Partners"
  | "Medication Delivery";

export interface BlogPost {
  id: string;
  title: string;
  category: BlogCategory;
  date: string;
  href: string;
  excerpt: string;
  /** Set on driver spotlight posts - the person being quoted. */
  author?: string;
  image: { src: string; width: number; height: number };
}

export interface BlogShowcaseContent {
  title: string;
  subtitle: string;
  subtitleHighlight: string;
  slideDuration: number;
}

export interface BlogListContent {
  title: string;
  highlight: string;
  description: string;
  allLabel: string;
  categories: BlogCategory[];
  pageSize: number;
  posts: BlogPost[];
}

export interface BlogSection {
  id: string;
  heading: string;
  lead?: string;
  paragraphs?: string[];
  /** `label` is a bold lead-in; leave it out for a plain bullet. */
  bullets?: { label?: string; text: string }[];
  /** Numbered list instead of dots, for steps that happen in order. */
  ordered?: boolean;
  /** Paragraphs that come after the bullets. */
  outro?: string[];
  faqs?: { question: string; answer: string }[];
  cta?: { label: string; href: string };
}

export interface BlogArticle {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string;
  author: string;
  banner: { src: string; alt: string };
  /** Opening paragraph, and the fallback meta description. */
  intro: string;
  /** Further opening paragraphs, before the first heading. */
  introParagraphs?: string[];
  sections: BlogSection[];
  /** SEO overrides for posts that ship with their own copy. */
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}
