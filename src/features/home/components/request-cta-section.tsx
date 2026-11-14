import { Reveal } from "@/components/motion";
import { Button, Container } from "@/components/ui";
import { scaleIn } from "@/lib/motion/variants";

import { requestCtaContent } from "../content/request-cta.content";
import { CollagePhoto } from "./collage-photo";

export function RequestCtaSection() {
  const { title, cta, photo } = requestCtaContent;

  return (
    <section id="request-transportation" className="scroll-mt-24 bg-background md:py-24 py-12">
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

          {/*
            Photo hangs above the card's top edge, inset slightly from its right.
            Below `lg` there is nowhere for it to hang, so it is dropped entirely
            rather than stacked under the card.
          */}
          <Reveal
            variants={scaleIn}
            className="hidden lg:absolute lg:-top-[16%] lg:right-[3.8%] lg:block lg:w-[40.6%]"
          >
            <CollagePhoto {...photo} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
