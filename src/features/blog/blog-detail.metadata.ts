import { createMetadata } from "@/lib/seo/metadata";

import type { BlogArticle } from "./types";

export function buildBlogDetailMetadata(article: BlogArticle) {
  return createMetadata({
    title: article.title,
    description: article.intro.slice(0, 155),
    path: `/blog/${article.slug}`,
    keywords: ["Arigo blog", article.category],
  });
}
