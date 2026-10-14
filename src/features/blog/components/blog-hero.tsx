import { PageHero } from "@/components/sections/page-hero";

import { blogHeroContent } from "../content/blog-hero.content";

export function BlogHero() {
  return <PageHero {...blogHeroContent} />;
}
