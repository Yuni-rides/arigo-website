import { articles } from "./content/articles";
import type { BlogArticle } from "./types";

/** Every slug the blog can serve. */
export function getArticleSlugs() {
  return articles.map((article) => article.slug);
}

export function getArticleBySlug(slug: string): BlogArticle | null {
  return articles.find((article) => article.slug === slug) ?? null;
}
