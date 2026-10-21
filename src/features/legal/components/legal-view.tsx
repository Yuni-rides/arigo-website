import type { LegalContent } from "../types";
import { LegalBody } from "./legal-body";
import { LegalHero } from "./legal-hero";

/** One layout for every legal page; the content file decides what it says. */
export function LegalView({ content }: { content: LegalContent }) {
  const { title, description, banner, tocTitle, sections, cta } = content;

  return (
    <>
      <LegalHero title={title} description={description} banner={banner} />
      <LegalBody tocTitle={tocTitle} sections={sections} cta={cta} />
    </>
  );
}
