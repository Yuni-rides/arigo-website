import type { BlogArticle } from "../types";
import { BlogArticleBody } from "./blog-article-body";
import { BlogDetailHero } from "./blog-detail-hero";
import { LatestArticles } from "./latest-articles";

export function BlogDetailView({ article }: { article: BlogArticle }) {
  return (
    <>
      <BlogDetailHero {...article} />
      <BlogArticleBody {...article} />
      <LatestArticles />
    </>
  );
}
