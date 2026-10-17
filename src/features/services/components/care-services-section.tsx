"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Container } from "@/components/ui";
import { transitions } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

import { careServicesContent } from "../content/care-services.content";

const CARD_CROP = { aspectRatio: "864 / 440" };
const PHOTO_CROP = { aspectRatio: "405 / 380" };

export function CareServicesSection() {
  const { title, highlight, description, cta, slideDuration, services } = careServicesContent;
  const [index, setIndex] = useState(0);
  const active = services[index];

  useEffect(() => {
    if (services.length < 2) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % services.length), slideDuration * 1000);
    return () => window.clearTimeout(id);
  }, [index, services.length, slideDuration]);

  return (
    <section id="care-services" className="scroll-mt-24 bg-background py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-normal text-brand-secondary sm:text-[42px]">
            {title}{" "}
            <span className="font-semibold text-brand-primary underline decoration-brand-primary decoration-2 underline-offset-[14px]">
              {highlight}
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-brand-secondary/85 sm:text-[17px]">
            {description}
          </p>
        </div>

        <div
          className="mt-12 w-full overflow-hidden rounded-[28px] bg-brand-secondary p-6 sm:p-[3.7%]"
          style={CARD_CROP}
        >
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitions.fast}
            className="grid h-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,47%)] lg:gap-10"
          >
            {/* Copy */}
            <div className="flex h-full flex-col">
              <h3 className="max-w-md text-2xl leading-tight font-medium text-white sm:text-[34px] lg:text-[44px]">
                {active.title}
              </h3>

              <ul className="mt-8 space-y-3">
                {active.features.map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="grid size-14 shrink-0 place-items-center rounded-[14px] bg-[#FFC6BC]">
                      <span
                        aria-hidden
                        style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
                        className="size-10 bg-brand-secondary [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
                      />
                    </span>
                    <span className="max-w-[17rem] text-[15px] leading-snug text-white sm:text-[19px]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex w-full items-center justify-between pt-8 lg:w-[80%]">
                <Button href={cta.href} className="h-[60px] rounded-md px-9 text-[15px]">
                  {cta.label}
                </Button>

                <div className="flex items-center gap-2.5" role="tablist" aria-label="Services">
                  {services.map((service, i) => (
                    <button
                      key={service.id}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      aria-label={service.title}
                      onClick={() => setIndex(i)}
                      className={cn(
                        "size-4 cursor-pointer rounded-full transition-colors",
                        i === index ? "bg-brand-primary" : "bg-white hover:bg-white/80",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-[18px] lg:h-full" style={PHOTO_CROP}>
              <Image
                src={active.image.src}
                alt={active.image.alt}
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
