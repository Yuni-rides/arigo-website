"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { HeroSlide } from "../types";

type HeroTabsProps = {
  slides: HeroSlide[];
  activeIndex: number;
  cycle: number;
  durationSec: number;
  onSelect: (index: number) => void;
};

export function HeroTabs({ slides, activeIndex, cycle, durationSec, onSelect }: HeroTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Hero slides"
      className="mb-5 grid w-full grid-cols-2 gap-x-4 sm:grid-cols-4 sm:gap-x-5 lg:w-[62%] lg:max-w-3xl"
    >
      {slides.map((slide, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`hero-slide-${slide.id}`}
            onClick={() => onSelect(i)}
            className={cn(
              "relative pt-2 pb-3 text-center text-[13px] leading-none tracking-wide transition-colors",
              isActive ? "font-semibold text-white" : "font-medium text-white/70 hover:text-white",
            )}
          >
            {slide.tab}

            <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/25" />

            {isActive && (
              <motion.span
                key={cycle}
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: durationSec, ease: "linear" }}
                className="absolute inset-x-0 bottom-0 h-[1.5px] origin-left bg-white"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
