import Image from "next/image";

import { RevealItem, Stagger } from "@/components/motion";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface HeroLine {
  text?: string;
  highlight?: string;
}

export interface PageHeroProps {
  image: { src: string; alt: string };
  lines: HeroLine[];
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Centred (default) or left-aligned copy, e.g. the Contact banner. */
  align?: "center" | "left";
  /** Colour of the highlighted headline words. Default navy; Careers uses brand orange. */
  highlightColor?: "secondary" | "primary";
  /** Style of the primary button. Default navy; Careers uses brand orange. */
  primaryCtaVariant?: "secondary" | "primary";
}

export function PageHero({
  image,
  lines,
  description,
  primaryCta,
  secondaryCta,
  align = "center",
  highlightColor = "secondary",
  primaryCtaVariant = "secondary",
}: PageHeroProps) {
  const centered = align === "center";
  return (
    <section className="">
      <div
        className={cn(
          "relative isolate flex min-h-[600px] flex-col justify-center overflow-hidden bg-brand-primary px-6 py-32 sm:py-36 lg:min-h-[680px]",
          centered ? "items-center text-center" : "items-start text-left sm:px-12 lg:px-16",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[60%_center]"
        />

        <Stagger className={centered ? "max-w-3xl" : "max-w-xl"} stagger={0.1} immediate>
          <RevealItem>
            <h1 className="text-4xl leading-[1.15] font-semibold text-white sm:text-5xl lg:text-[56px]">
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {line.text}
                  {line.highlight && (
                    <span
                      className={highlightColor === "primary" ? "text-brand-primary" : "text-brand-secondary"}
                    >
                      {line.highlight}
                    </span>
                  )}
                </span>
              ))}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className={cn("mt-6 max-w-xl text-base text-white sm:text-lg", centered && "mx-auto")}>
              {description}
            </p>
          </RevealItem>

          {(primaryCta || secondaryCta) && (
            <RevealItem
              className={cn(
                "mt-10 flex flex-col gap-4 sm:flex-row",
                centered ? "items-center justify-center" : "items-start",
              )}
            >
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  variant={primaryCtaVariant}
                  size="lg"
                  className="rounded-lg px-7"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  size="lg"
                  className="rounded-lg border border-white/80 bg-transparent px-8 text-white hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </RevealItem>
          )}
        </Stagger>
      </div>
    </section>
  );
}
