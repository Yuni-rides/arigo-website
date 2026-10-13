import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";

import { areasContent } from "../content/areas.content";
import { AreaCard } from "./area-card";

export function AreasSection() {
  const { title, titleUnderlined, description, cardCtaLabel, areas } = areasContent;

  return (
    <section
      id="areas"
      className="relative scroll-mt-24 overflow-hidden bg-[#DB6650] py-20 text-white sm:py-24"
    >
      {/* Dark glow along the bottom edge (Figma) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-40 h-72 bg-[radial-gradient(ellipse_at_center,rgb(21_29_50/0.75),transparent_65%)]"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-[38rem] text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-[52px]">
            {title}{" "}
            <span className="font-bold underline decoration-white decoration-[3px] underline-offset-[14px]">
              {titleUnderlined}
            </span>
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-white/90 sm:text-xl">{description}</p>
        </Reveal>

        <Stagger className="mt-20 grid gap-10 sm:grid-cols-2 lg:gap-28" stagger={0.1}>
          {areas.map((area) => (
            <RevealItem key={area.id} className="h-full">
              <AreaCard {...area} ctaLabel={cardCtaLabel} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
