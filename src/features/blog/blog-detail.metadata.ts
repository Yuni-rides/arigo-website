import { createMetadata } from "@/lib/seo/metadata";

import type { BlogArticle } from "./types";

export function buildBlogDetailMetadata(article: BlogArticle) {
  return createMetadata({
    // A written post brings its own SEO copy; placeholders fall back to the body.
    title: article.metaTitle ?? article.title,
    description: article.metaDescription ?? article.intro.slice(0, 155),
    path: `/blog/${article.slug}`,
    image: article.banner.src,
    keywords: article.keywords ?? ["Arigo blog", article.category],
  });
}
