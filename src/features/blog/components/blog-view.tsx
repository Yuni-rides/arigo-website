import { BlogHero } from "./blog-hero";
import { BlogList } from "./blog-list";

/** Composes the /blog page: banner, then the filterable, paginated post list. */
export function BlogView() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  );
}
