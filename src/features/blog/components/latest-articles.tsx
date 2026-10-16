import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";

import { blogListContent } from "../content/blog-list.content";
import { latestArticlesTitle } from "../content/blog-article.content";
import { BlogCard } from "./blog-card";

export function LatestArticles({ excludeId }: { excludeId?: string }) {
  const posts = blogListContent.posts.filter((post) => post.id !== excludeId).slice(0, 4);

  return (
    <section className="bg-background pb-24">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-semibold text-brand-secondary sm:text-[32px]">
            {latestArticlesTitle}
          </h2>
        </Reveal>

        <Stagger className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {posts.map((post) => (
            <RevealItem key={post.id} className="h-full">
              <BlogCard {...post} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
