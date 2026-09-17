import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import { scaleIn } from "@/lib/motion/variants";

import { storiesContent } from "../content/stories.content";
import { StoriesCarousel } from "./stories-carousel";

export function StoriesSection() {
  return (
    <section id="stories" className="scroll-mt-24 bg-[#DB6650] py-14 sm:py-20">
      <Container>
        <Reveal variants={scaleIn}>
          <StoriesCarousel {...storiesContent} />
        </Reveal>
      </Container>
    </section>
  );
}
