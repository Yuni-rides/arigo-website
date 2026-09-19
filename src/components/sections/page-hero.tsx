import Image from "next/image";

import { RevealItem, Stagger } from "@/components/motion";
import { Button } from "@/components/ui";

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
}

export function PageHero({ image, lines, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="">
      <div className="relative isolate flex min-h-[600px] flex-col items-center justify-center overflow-hidden bg-brand-primary px-6 py-32 text-center sm:py-36 lg:min-h-[680px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[60%_center]"
        />

        <Stagger className="max-w-3xl" stagger={0.1} immediate>
          <RevealItem>
            <h1 className="text-4xl leading-[1.15] font-semibold text-white sm:text-5xl lg:text-[56px]">
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {line.text}
                  {line.highlight && <span className="text-brand-secondary">{line.highlight}</span>}
                </span>
              ))}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mx-auto mt-6 max-w-xl text-base text-white sm:text-lg">{description}</p>
          </RevealItem>

          {(primaryCta || secondaryCta) && (
            <RevealItem className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <Button href={primaryCta.href} variant="secondary" size="lg" className="rounded-lg px-7">
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
