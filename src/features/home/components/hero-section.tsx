"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { RevealItem, Stagger } from "@/components/motion";
import { Button } from "@/components/ui";
import { transitions } from "@/lib/motion/variants";
import { heroContent } from "../content/home.content";
import { useAutoplay } from "../hooks/use-autoplay";
import { HeroTabs } from "./hero-tabs";

const { slides, slideDuration } = heroContent;

export function HeroSection() {
  const { index, cycle, goTo } = useAutoplay(slides.length, slideDuration);
  const slide = slides[index];

  return (
    <section aria-roledescription="carousel" aria-label="Arigo highlights">
      <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden bg-brand-secondary lg:min-h-[680px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 -z-20"
          >
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-[62%_center]"
            />
          </motion.div>
        </AnimatePresence>

        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-secondary/45 via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-brand-secondary/50 to-transparent"
        />

        <div
          id={`hero-slide-${slide.id}`}
          role="tabpanel"
          className="flex flex-1 items-center px-6 pt-32 pb-10 sm:px-12 sm:pt-36 lg:px-16"
        >
          <Stagger key={slide.id} className="max-w-xl" stagger={0.1} immediate>
            <RevealItem>
              <h1 className="text-4xl leading-[1.15] font-semibold text-white sm:text-5xl lg:text-[3.5rem]">
                {slide.title}
                <br />
                <span className="text-brand-primary">{slide.highlight}</span>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="mt-6 max-w-md text-base text-white/90 sm:text-lg">{slide.description}</p>
            </RevealItem>

            <RevealItem className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={slide.primaryCta.href} size="lg" className="rounded-lg">
                {slide.primaryCta.label}
              </Button>
              <Button
                href={slide.secondaryCta.href}
                size="lg"
                className="rounded-lg border border-brand-primary bg-transparent text-white hover:bg-brand-primary/15"
              >
                {slide.secondaryCta.label}
              </Button>
            </RevealItem>
          </Stagger>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.base, delay: 0.5 }}
          className="px-6 pb-6 sm:px-12 sm:pb-7 lg:px-16"
        >
          <HeroTabs
            slides={slides}
            activeIndex={index}
            cycle={cycle}
            durationSec={slideDuration}
            onSelect={goTo}
          />
        </motion.div>
      </div>
    </section>
  );
}
