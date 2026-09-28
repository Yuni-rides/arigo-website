import Image from "next/image";

import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Button, Container } from "@/components/ui";
import { scaleIn } from "@/lib/motion/variants";

import { driversHeroContent } from "../content/drivers-hero.content";

/*
 * Figma proportions (measured off the design, cluster width = 100%):
 *  - tall photo  : 75% wide, 268x395 crop, pinned top-right - it sets the cluster height
 *  - small photo : 50% wide, 180x222 crop, pinned bottom-left, sharing the bottom edge
 *
 * The crops are inline `aspectRatio` styles on purpose: the geometry must not
 * depend on an arbitrary Tailwind class being generated, otherwise a missed
 * class collapses the whole cluster to zero height.
 */
const BACK_CROP = { aspectRatio: "268 / 395" };
const FRONT_CROP = { aspectRatio: "180 / 222" };

export function DriversHero() {
  const { lines, description, cta, images } = driversHeroContent;

  return (
    <section className="relative isolate overflow-hidden bg-background pt-28 pb-20 lg:pt-12 lg:pb-24">
      {/* Decorative orange wave across the bottom, behind everything */}
      <Image
        src="/images/layer.png"
        alt=""
        aria-hidden
        width={1440}
        height={796}
        priority
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 w-full select-none"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)] lg:gap-6">
          {/* Copy */}
          <Stagger className="max-w-xl" stagger={0.1} immediate>
            <RevealItem>
              <h1 className="text-[32px] leading-[1.22] font-semibold text-brand-secondary sm:text-5xl lg:text-[52px] lg:whitespace-nowrap">
                {lines.map((line, i) => (
                  <span key={i} className="block">
                    {line.text}
                    {line.highlight && <span className="text-brand-primary">{line.highlight}</span>}
                  </span>
                ))}
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="mt-7 max-w-[29rem] text-base leading-relaxed text-brand-secondary/90">
                {description}
              </p>
            </RevealItem>

            <RevealItem className="mt-9">
              <Button href={cta.href} variant="secondary" className="rounded-md px-8">
                {cta.label}
              </Button>
            </RevealItem>
          </Stagger>

          {/* Overlapping photos, bottom-aligned */}
          <div className="relative mx-auto w-full max-w-[720px] lg:mx-0 lg:ml-auto">
            {/* Tall photo sits in flow, so it gives the cluster its height */}
            <div className="relative ml-auto w-[75%]" style={BACK_CROP}>
              <Reveal
                variants={scaleIn}
                className="absolute inset-0 overflow-hidden rounded-[22px] shadow-card"
              >
                <Image
                  src={images.back.src}
                  alt={images.back.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 29vw, 60vw"
                  className="object-cover"
                />
              </Reveal>
            </div>

            {/* Small photo overlaps it from the bottom-left */}
            <div className="absolute bottom-0 left-0 w-[50%]" style={FRONT_CROP}>
              <Reveal
                variants={scaleIn}
                className="absolute inset-0 overflow-hidden rounded-[22px] shadow-card-hover"
              >
                <Image
                  src={images.front.src}
                  alt={images.front.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 19vw, 40vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
