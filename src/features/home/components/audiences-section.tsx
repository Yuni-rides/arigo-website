import Image from "next/image";

import { Reveal } from "@/components/motion";
import { BrandText, Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

import { audiences } from "../content/audiences.content";

/** Zig-zag rows: image / copy alternate sides on desktop, stack on mobile. */
export function AudiencesSection() {
  return (
    <section id="who-we-serve" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="space-y-20 lg:space-y-24">
        {audiences.map((item, i) => {
          const imageRight = i % 2 === 1;
          return (
            <Reveal key={item.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div
                className={cn(
                  "relative aspect-[646/520] overflow-hidden rounded-[18px] ring-1 ring-brand-primary/50",
                  imageRight && "lg:order-2",
                )}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className={cn("max-w-md", imageRight && "lg:order-1")}>
                <h2 className="text-[26px] leading-tight font-semibold text-brand-primary sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-[13.5px] leading-relaxed text-brand-tertiary sm:text-sm">
                  <BrandText text={item.description} />
                </p>

                {item.cta && (
                  <div className="mt-10">
                    <p className="text-[15px] font-semibold text-brand-secondary">{item.cta.prompt}</p>
                    <Button href={item.cta.href} size="sm" className="mt-5 rounded-md px-5 text-[13px]">
                      {item.cta.label}
                    </Button>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
