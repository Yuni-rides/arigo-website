import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

import { testimonialsContent } from "../content/testimonials.content";
import { TestimonialsCarousel } from "./testimonials-carousel";

export function TestimonialsSection() {
  const { title, items } = testimonialsContent;

  return (
    <section id="testimonials" className="scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <Container>
        <Reveal className="text-center">
          <h2 className="inline-block text-3xl font-semibold text-brand-secondary sm:text-4xl">
            {title}
            {/* Short underline anchored to the right of the heading (Figma) */}
            <span aria-hidden className="mt-3 ml-auto block h-0.5 w-[45%] bg-brand-primary" />
          </h2>
        </Reveal>
      </Container>

      <Reveal className="mt-12">
        <TestimonialsCarousel items={items} />
      </Reveal>
    </section>
  );
}
