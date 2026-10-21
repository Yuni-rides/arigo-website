import { Phone } from "lucide-react";
import Image from "next/image";

import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Button, Container } from "@/components/ui";
import { scaleIn } from "@/lib/motion/variants";

import { whyTrustedContent } from "../content/why-trusted.content";

/** The photo assets carry a ~3% white frame; scaling past the crop hides it. */
const FRAME_CROP = "scale-[1.08] object-cover";

/*
 * Figma proportions (composition width = 100%):
 *  - photo cluster 41%, copy column 49%, 10% gap between them
 *  - back photo 74% of the cluster at the top-left, front photo 77% overlapping
 *    it from 23% across and 30% down
 */
export function WhyTrustedSection() {
  const { title, highlight, titleEnd, description, cta, phone, photos } = whyTrustedContent;

  return (
    <section id="why-arigo-trusted" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,41%)_minmax(0,49%)] lg:justify-between lg:gap-0">
          {/* Overlapping photos */}
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <Reveal
              variants={scaleIn}
              className="relative w-[74%] overflow-hidden rounded-[18px] shadow-card"
              style={{ aspectRatio: photos.back.aspectRatio }}
            >
              <Image
                src={photos.back.src}
                alt={photos.back.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 70vw"
                className={FRAME_CROP}
              />
            </Reveal>

            <Reveal
              variants={scaleIn}
              className="relative -mt-[18%] ml-[23%] w-[77%] overflow-hidden rounded-[18px] shadow-card-hover"
              style={{ aspectRatio: photos.front.aspectRatio }}
            >
              <Image
                src={photos.front.src}
                alt={photos.front.alt}
                fill
                sizes="(min-width: 1024px) 32vw, 72vw"
                className={FRAME_CROP}
              />
            </Reveal>
          </div>

          {/* Copy */}
          <Stagger stagger={0.1}>
            <RevealItem>
              <h2 className="text-3xl leading-tight font-semibold text-brand-secondary sm:text-4xl lg:text-[48px]">
                {title} <span className="text-brand-primary"></span> {titleEnd}
              </h2>
            </RevealItem>

            <RevealItem>
              <p className="mt-6 text-justify text-[15px] leading-relaxed text-brand-secondary/85 lg:text-[17px]">
                {description}
              </p>
            </RevealItem>

            <RevealItem className="mt-9 flex flex-wrap items-center gap-4">
              <Button href={cta.href} className="h-[52px] rounded-md px-9 text-sm">
                {cta.label}
              </Button>

              <a
                href={phone.href}
                className="inline-flex h-[52px] items-center gap-2.5 rounded-md bg-brand-primary/25 px-7 text-sm font-medium text-brand-primary transition-colors hover:bg-brand-primary/35"
              >
                <Phone className="size-4 fill-current" aria-hidden />
                {phone.label}
              </a>
            </RevealItem>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
