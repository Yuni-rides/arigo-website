import type { BlogCategory, BlogListContent, BlogPost } from "../types";

import { articles } from "./articles";

/** One listing card per written article; the article file is the only source. */
const posts: BlogPost[] = articles.map((article, index) => ({
  id: `article-${index + 1}`,
  title: article.title,
  category: article.category,
  date: article.date,
  href: `/blog/${article.slug}`,
  excerpt: article.metaDescription ?? article.intro,
  image: { src: article.banner.src, width: 293, height: 187 },
}));

/** Every category stays in the filter bar, including the ones still waiting for posts. */
const categories: BlogCategory[] = [
  "Safety & Trust",
  "Patients & Families",
  "Drivers",
  "Healthcare Partners",
  "Medication Delivery",
];

export const blogListContent: BlogListContent = {
  title: "Arigo",
  highlight: "Blogs",
  description: "Stories, tips and updates on medical rides and medication delivery, straight from Arigo.",
  allLabel: "All",
  categories,
  pageSize: 16,
  posts,
};
