import Image from "next/image";

import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { BrandText, Container } from "@/components/ui";
import { fadeIn, scaleIn } from "@/lib/motion/variants";

import { whyChoosingContent } from "../content/why-choosing.content";

/*
 * Figma proportions (card = 100% width):
 *  - copy column ~47%, images column ~47%
 *  - back image 67% of images column, pinned top-right, overflowing ~8% above the card
 *  - front image 70%, pinned bottom-left, overlapping the back image
 */
export function WhyChoosingSection() {
  const { title, highlight, paragraphs, images } = whyChoosingContent;

  return (
    <section id="why-arigo" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        {/* Top padding = room for the back image to overflow above the card */}
        <div className="pt-8 lg:pt-14">
          <Reveal
            variants={fadeIn}
            className="rounded-[28px] bg-[linear-gradient(100deg,#1B2038_0%,#33283E_22%,#7E4449_45%,#BE5549_62%,#C65A48_100%)] text-white"
          >
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[47fr_47fr] lg:justify-between lg:gap-[6%] lg:px-10 lg:py-9">
              {/* Copy */}
              <Stagger className="self-center" stagger={0.1}>
                <RevealItem>
                  <h2 className="flex items-center gap-4 text-[28px] leading-tight font-normal text-white lg:text-[32px]">
                    <span className="whitespace-nowrap">{title}</span>
                    <span aria-hidden className="mt-1 h-px flex-1 bg-white/60" />
                  </h2>
                  <p className="text-[28px] leading-tight font-bold text-white lg:text-[32px]">{highlight}</p>
                </RevealItem>

                <RevealItem className="mt-5 space-y-1 text-[13.5px] leading-[1.45] text-white/90 lg:text-[15px]">
                  {paragraphs.map((text) => (
                    <p key={text}>
                      <BrandText text={text} />
                    </p>
                  ))}
                </RevealItem>
              </Stagger>

              {/* Overlapping images */}
              <div className="relative mx-auto aspect-[1.06/1] w-full max-w-[560px] lg:mx-0 lg:-mt-[120px] lg:mb-8 lg:max-w-none">
                <Reveal
                  variants={scaleIn}
                  className="absolute top-0 right-0 aspect-square w-[67%] overflow-hidden rounded-[18px]"
                >
                  <Image
                    src={images.back.src}
                    alt={images.back.alt}
                    fill
                    sizes="(min-width: 1024px) 32vw, 60vw"
                    className="object-cover"
                  />
                </Reveal>
                <Reveal
                  variants={scaleIn}
                  className="absolute bottom-0 left-0 aspect-square w-[70%] overflow-hidden rounded-[18px] shadow-[0_18px_40px_-12px_rgb(0_0_0/0.45)]"
                >
                  <Image
                    src={images.front.src}
                    alt={images.front.alt}
                    fill
                    sizes="(min-width: 1024px) 34vw, 64vw"
                    className="object-cover"
                  />
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
