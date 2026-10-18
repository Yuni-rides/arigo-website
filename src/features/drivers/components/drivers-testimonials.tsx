"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

import { driversTestimonialsContent } from "../content/drivers-testimonials.content";

export function DriversTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const reduceMotion = useReducedMotion();
  const total = driversTestimonialsContent.length;

  const autoplay = total > 1 && !reduceMotion && !isHovered && !isFocused;

  useEffect(() => {
    if (!autoplay) return;

    const timer = window.setTimeout(() => {
      setCurrentIndex((index) => (index + 1) % total);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [autoplay, currentIndex, total]);

  if (total === 0) return null;

  return (
    <section className="bg-[#FFC6BC] py-12 lg:py-[60px]">
      <Container>
        <Reveal>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonials"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsFocused(false);
              }
            }}
            className="relative  overflow-hidden rounded-[32px] bg-brand-secondary px-6 pt-6 pb-14 sm:px-10 sm:pt-10 lg:px-12"
          >
            {/* Overlapping slides keep the carousel height stable. */}
            <div aria-live={autoplay ? "off" : "polite"} aria-atomic="true" className="grid">
              {driversTestimonialsContent.map((testimonial, index) => {
                const isActive = currentIndex === index;

                return (
                  <motion.div
                    key={index}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${total}`}
                    aria-hidden={!isActive}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`col-start-1 row-start-1 grid items-start gap-7 sm:grid-cols-[40%_1fr] sm:gap-10 lg:gap-14 ${
                      isActive ? "relative z-10" : "pointer-events-none z-0"
                    }`}
                  >
                    {/* Portrait */}
                    <div className="relative aspect-[189/209] w-full overflow-hidden rounded-[16px]">
                      <Image
                        src={testimonial.image.src}
                        alt={testimonial.image.alt}
                        fill
                        sizes="(min-width: 1280px) 378px, (min-width: 640px) 36vw, 85vw"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Quote and author */}
                    <motion.div
                      initial={false}
                      animate={{
                        y: isActive || reduceMotion ? 0 : 12,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="min-w-0 sm:pt-1"
                    >
                      <blockquote className="max-w-[420px] text-[20px] leading-[1.18] font-normal tracking-[-0.025em] text-brand-secondary-foreground sm:text-[24px] lg:text-[32px]">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      <div className="mt-6 lg:mt-9">
                        <p className="text-[14px] font-medium text-brand-primary lg:text-[18px]">
                          {testimonial.author}
                        </p>

                        <p className="mt-2 text-[11px] leading-relaxed font-light text-brand-secondary-foreground/75 lg:text-[14px]">
                          {testimonial.role}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation dots */}
            {total > 1 && (
              <div
                role="group"
                aria-label="Choose testimonial"
                className="absolute right-5 bottom-3 z-20 flex items-center sm:right-8 sm:bottom-4"
              >
                {driversTestimonialsContent.map((testimonial, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Show testimonial from ${testimonial.author}`}
                    aria-pressed={currentIndex === index}
                    className="flex h-8 w-6 items-center justify-center rounded-full"
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                        currentIndex === index ? "bg-brand-primary" : "bg-brand-secondary-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
