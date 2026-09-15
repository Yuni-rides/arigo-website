import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container, SectionHeading } from "@/components/ui";

import { featureItems } from "../content/home.content";
import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-muted py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Everything you need to launch with confidence"
            description="A complete toolkit for teams who care about craft, speed, and long-term maintainability."
          />
        </Reveal>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureItems.map((item) => (
            <RevealItem key={item.id}>
              <FeatureCard {...item} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
