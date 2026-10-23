import { articles } from "./content/articles";
import { blogArticle } from "./content/blog-article.content";
import { blogListContent } from "./content/blog-list.content";
import type { BlogArticle, BlogPost } from "./types";

/** The slug a listing card links to. Written posts carry their own; placeholders use the title. */
function slugOf(post: BlogPost) {
  return post.href.replace(/^\/blog\//, "");
}

/** Every slug the blog can serve, de-duplicated. */
export function getArticleSlugs() {
  return [...new Set(blogListContent.posts.map(slugOf))];
}

/**
 * Real posts are served as written. Everything else still falls back to the shared
 * placeholder body, with the list supplying the title, date, category and banner.
 */
export function getArticleBySlug(slug: string): BlogArticle | null {
  const written = articles.find((article) => article.slug === slug);
  if (written) return written;

  const post = blogListContent.posts.find((item) => slugOf(item) === slug);
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
