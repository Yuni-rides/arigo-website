import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Button, Container } from "@/components/ui";
import { scaleIn } from "@/lib/motion/variants";

import { ctaContent } from "../content/home.content";

export function CtaSection() {
  const { title, description, cta } = ctaContent;

  return (
    <section id="contact" className="scroll-mt-20 pb-24 sm:pb-32">
      <Container>
        <Reveal variants={scaleIn}>
          <div className="relative overflow-hidden rounded-card bg-brand-secondary px-8 py-16 text-center text-brand-secondary-foreground sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-brand-primary/30 blur-3xl"
            />
            <h2 className="relative text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/70">{description}</p>
            <div className="relative mt-8">
              <Button href={cta.href} size="lg">
                {cta.label}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
