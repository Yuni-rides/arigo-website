import { blogArticle } from "./content/blog-article.content";
import { blogListContent } from "./content/blog-list.content";
import type { BlogArticle } from "./types";

/** Slug is derived from the title the same way the list builds its hrefs. */
function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Every slug the blog can serve, de-duplicated. */
export function getArticleSlugs() {
  return [...new Set(blogListContent.posts.map((post) => slugify(post.title)))];
}

/**
 * Builds the article for a slug: the title, date, category and banner come from
 * the matching post, while the body is the shared placeholder until each post
 * has real copy of its own.
 */
export function getArticleBySlug(slug: string): BlogArticle | null {
  const post = blogListContent.posts.find((item) => slugify(item.title) === slug);
  if (!post) return null;

  return {
    ...blogArticle,
    slug,
    title: post.title,
    category: post.category,
    date: post.date,
    banner: { src: post.image.src, alt: post.title },
  };
}
