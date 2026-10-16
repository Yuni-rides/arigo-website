import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogDetailView, buildBlogDetailMetadata, getArticleBySlug, getArticleSlugs } from "@/features/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return article ? buildBlogDetailMetadata(article) : {};
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return <BlogDetailView article={article} />;
}
