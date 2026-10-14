import Image from "next/image";

import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";

import { careSolutionsContent } from "../content/care-solutions.content";
import { CareSolutionCard } from "./care-solution-card";

export function CareSolutionsSection() {
  const { title, description, solutions } = careSolutionsContent;

  return (
    <section
      id="care-solutions"
      className="relative isolate scroll-mt-24 overflow-hidden bg-background py-24"
    >
      {/* Soft blue shapes + dot grid from the design */}
      <Image
        src="/images/arigo-care-solutions-transportation.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-top select-none"
      />

      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-secondary sm:text-[52px]">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-secondary/85">
            {description}
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.1}>
          {solutions.map((solution) => (
            <RevealItem key={solution.id} className="h-full">
              <CareSolutionCard {...solution} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
