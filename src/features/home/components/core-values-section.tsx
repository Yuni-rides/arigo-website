import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

import { coreValues, coreValuesIntro } from "../content/core-values.content";
import { ValueCard } from "./value-card";

export function CoreValuesSection() {
  return (
    <section id="core-values" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h2 className="shrink-0 border-l-[3px] border-brand-primary pl-6 text-4xl leading-tight font-medium sm:text-5xl">
            {coreValuesIntro.title}
            <br />
            <span className="text-brand-primary">{coreValuesIntro.highlight}</span>
          </h2>
          <p className="max-w-xs pt-1 text-brand-tertiary md:pt-3">{coreValuesIntro.description}</p>
        </Reveal>

        <div className="mt-10 sm:mt-14">
          {coreValues.map((value, i) => (
            <div key={value.id} style={{ zIndex: i + 1 }} className="sticky top-24 pb-10 last:pb-0 sm:top-28">
              <ValueCard {...value} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
