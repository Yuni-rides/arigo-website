import type { Metadata } from "next";

import { BlogView, blogMetadata } from "@/features/blog";

export const metadata: Metadata = blogMetadata;

export default function BlogPage() {
  return <BlogView />;
}
