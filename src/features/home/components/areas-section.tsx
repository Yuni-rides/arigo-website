import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Button, Container } from "@/components/ui";

import { areasContent } from "../content/areas.content";
import { AreaCard } from "./area-card";

export function AreasSection() {
  const { title, titleUnderlined, description, moreLabel, moreHref, areas } = areasContent;

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
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {title}{" "}
            <span className="underline decoration-white decoration-2 underline-offset-[10px]">
              {titleUnderlined}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/85">{description}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-x-8 gap-y-8 pl-6 sm:grid-cols-2 sm:pl-8" stagger={0.1}>
          {areas.map((area) => (
            <RevealItem key={area.id}>
              <AreaCard {...area} />
            </RevealItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 text-center">
          <Button
            href={moreHref}
            size="sm"
            className="rounded-md bg-white px-6 text-brand-secondary hover:bg-brand-primary-soft"
          >
            {moreLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
