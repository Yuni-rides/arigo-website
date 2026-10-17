import Image from "next/image";
import { Fragment } from "react";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { welcomeContent } from "../content/welcome.content";

/** Warm bloom in the top-left corner, as in the design. */
const CORNER_GLOW = {
  backgroundImage:
    "radial-gradient(ellipse 28% 30% at 0% 0%, rgb(216 90 68 / 0.45) 0%, rgb(216 90 68 / 0) 70%)",
};

/** Renders the body text, swapping `{brand}` for a bold brand name. */
function BoldBrand({ text }: { text: string }) {
  const parts = text.split("{brand}");
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <strong className="font-semibold text-brand-secondary">{siteConfig.name}</strong>
          )}
        </Fragment>
      ))}
    </>
  );
}

export function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="relative isolate scroll-mt-24 overflow-hidden bg-background py-16 sm:py-20"
    >
      <span aria-hidden className="absolute inset-0 -z-10" style={CORNER_GLOW} />

      <Container className="space-y-16 lg:space-y-20">
        {welcomeContent.blocks.map((block) => (
          <Reveal key={block.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className={cn("relative w-full", block.imageSide === "right" && "lg:order-2")}>
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={646}
                height={520}
                sizes="(min-width: 1024px) 600px, 90vw"
                className="h-auto w-full rounded-[18px] object-cover"
              />
            </div>

            <div className={cn("max-w-xl", block.imageSide === "right" && "lg:order-1")}>
              <h2
                className={cn(
                  "leading-tight font-bold text-brand-primary",
                  block.titleSize === "lg" ? "text-3xl sm:text-[40px]" : "text-2xl sm:text-[34px]",
                )}
              >
                {block.title}
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-brand-secondary/85 lg:text-[17px]">
                <BoldBrand text={block.body} />
              </p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
