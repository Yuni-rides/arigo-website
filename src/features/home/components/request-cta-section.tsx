import { Reveal } from "@/components/motion";
import { Button, Container } from "@/components/ui";
import { scaleIn } from "@/lib/motion/variants";

import { requestCtaContent } from "../content/request-cta.content";
import { CollagePhoto } from "./collage-photo";

/*
 * Figma proportions, as percentages of the navy card's width:
 *  - padding: 5% top, 3.6% bottom, 4.7% left/right
 *  - text column 38.2% of the card (42.2% of its content box)
 *  - button 23% wide, 5.7% tall
 *  - photo 40.6% wide, inset 3.8% from the card's right, hanging 6.3% above its top
 */
export function RequestCtaSection() {
  const { title, cta, photo } = requestCtaContent;

  return (
    <section id="request-transportation" className="scroll-mt-24 bg-background py-24">
      <Container>
        <div className="relative">
          <Reveal className="rounded-[24px] bg-brand-secondary px-7 py-10 sm:px-[4.7%] sm:pt-[5%] sm:pb-[3.6%]">
            <div className="lg:w-[42.2%]">
              <h2 className="text-[26px] leading-[1.35] font-medium text-white sm:text-[34px] lg:text-[46px]">
                {title}
              </h2>
              <Button href={cta.href} className="mt-8 h-[70px] rounded-md px-16 text-[13px] lg:mt-10">
                {cta.label}
              </Button>
            </div>
          </Reveal>

          {/* Photo hangs above the card's top edge, inset slightly from its right */}
          <Reveal
            variants={scaleIn}
            className="mt-8 w-full max-w-[18rem] lg:absolute lg:-top-[16%] lg:right-[3.8%] lg:mt-0 lg:w-[40.6%] lg:max-w-none"
          >
            <CollagePhoto {...photo} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
