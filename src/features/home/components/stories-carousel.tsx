"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui";
import { transitions } from "@/lib/motion/variants";

import type { StoriesContent } from "../types";

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: 28 * dir }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: -28 * dir }),
};

export function StoriesCarousel({ eyebrow, watchLabel, stories }: StoriesContent) {
  const [[index, direction], setState] = useState([0, 1]);
  const story = stories[index];

  const go = (dir: 1 | -1) => setState(([i]) => [(i + dir + stories.length) % stories.length, dir]);

  return (
    <div className="relative overflow-hidden rounded-[22px] bg-[#FAF6F0] px-6 pt-10 pb-24 sm:px-12 sm:pt-12 lg:px-14 lg:py-16">
      <Image
        src="/images/story_vector.png"
        alt=""
        aria-hidden
        width={300}
        height={170}
        className="pointer-events-none absolute bottom-0 left-0 w-[46%] max-w-[300px] select-none"
      />
      <div aria-hidden className="absolute -right-8 -bottom-8 size-24 rounded-full bg-brand-secondary" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:mx-0 lg:max-w-none">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={transitions.fast}
              className="absolute inset-0"
            >
              <Image
                src={story.image.src}
                alt={story.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div>
          <p className="inline-block border-b border-brand-primary pb-1 text-sm font-medium text-brand-primary">
            {eyebrow}
          </p>

          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.h2
              key={story.id}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitions.fast}
              className="mt-5 text-3xl leading-[1.25] font-semibold text-brand-secondary sm:text-4xl lg:text-[40px]"
            >
              {story.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>
          </AnimatePresence>

          <Button
            href={story.videoUrl}
            external
            size="lg"
            className="mt-10 rounded-lg px-6 text-sm shadow-[0_10px_24px_-8px_rgb(216_90_68/0.6)]"
          >
            <Play className="size-4 fill-current" />
            {watchLabel}
          </Button>
        </div>
      </div>

      <div className="absolute right-6 bottom-6 flex gap-3 sm:right-12 lg:right-14 lg:bottom-10">
        <button
          type="button"
          aria-label="Previous story"
          onClick={() => go(-1)}
          className="grid size-10 place-items-center rounded-md bg-brand-primary-soft text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next story"
          onClick={() => go(1)}
          className="grid size-10 place-items-center rounded-md bg-brand-primary-soft text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
