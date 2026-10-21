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
  bullets?: { label: string; text: string }[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string;
  author: string;
  banner: { src: string; alt: string };
  intro: string;
  sections: BlogSection[];
}
