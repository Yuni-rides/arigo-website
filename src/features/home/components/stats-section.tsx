import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

import { statItems } from "../content/home.content";
import { StatCounter } from "./stat-counter";

export function StatsSection() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <Reveal className="grid gap-12 sm:grid-cols-3">
          {statItems.map((stat) => (
            <StatCounter key={stat.id} {...stat} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
