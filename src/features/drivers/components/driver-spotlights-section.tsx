"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import { driverSpotlightPosts } from "@/features/blog";

import { driverSpotlightsContent } from "../content/driver-spotlights.content";

/** Same warm wash the blog cards use, so a spotlight reads as part of the blog. */
const IMAGE_WASH = {
  backgroundImage:
    "radial-gradient(ellipse 90% 120% at 0% 20%, rgba(216, 90, 68, 0.75) 0%, rgba(216, 90, 68, 0.15) 70%, rgba(0, 0, 0, 0) 100%)",
};

const IMAGE_CROP = { aspectRatio: "213 / 136" };

/** Reads the rendered track so the step matches whatever width the breakpoint gives a card. */
function measure(track: HTMLUListElement) {
  const first = track.firstElementChild as HTMLElement | null;
  if (!first) return null;

  const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
  const step = first.offsetWidth + gap;
  const perView = Math.max(1, Math.round((track.clientWidth + gap) / step));

  return { step, perView };
}

/**
 * Eases scrollLeft by hand instead of `scrollTo({ behavior: "smooth" })`, which some
 * embedded browsers ignore outright. Returns a canceller for the next slide.
 */
function slideTo(track: HTMLUListElement, left: number, instant: boolean) {
  const start = track.scrollLeft;
  const distance = left - start;

  if (instant || distance === 0) {
    track.scrollLeft = left;
    return undefined;
  }

  const DURATION = 600;
  const startedAt = performance.now();
  let frame = 0;

  // Animation frames are throttled in background tabs and in some embedded browsers,
  // so a timer guarantees the slide lands even if no frame ever runs.
  const settle = window.setTimeout(() => {
    cancelAnimationFrame(frame);
    track.scrollLeft = left;
  }, DURATION + 150);

  const step = (now: number) => {
    const progress = Math.min(1, (now - startedAt) / DURATION);
    track.scrollLeft = start + distance * (1 - Math.pow(1 - progress, 3));
    if (progress < 1) frame = requestAnimationFrame(step);
    else window.clearTimeout(settle);
  };

  frame = requestAnimationFrame(step);

  return () => {
    cancelAnimationFrame(frame);
    window.clearTimeout(settle);
  };
}

export function DriverSpotlightsSection() {
  const { title, label, slideDuration } = driverSpotlightsContent;
  const posts = driverSpotlightPosts;

  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const autoplay = posts.length > 1 && !paused && !reduceMotion;

  useEffect(() => {
    if (!autoplay) return;

    // An interval, not a chain of timeouts: a tick that cannot measure the track must not
    // leave the carousel stopped for good.
    const id = window.setInterval(() => {
      const track = trackRef.current;
      const sizes = track && measure(track);
      if (!sizes) return;

      // Stop where the last card is flush with the right edge, then start over.
      const maxIndex = Math.max(0, posts.length - sizes.perView);
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, slideDuration * 1000);

    return () => window.clearInterval(id);
  }, [autoplay, posts.length, slideDuration]);

  useEffect(() => {
    const track = trackRef.current;
    const sizes = track && measure(track);
    if (!track || !sizes) return;

    return slideTo(track, index * sizes.step, Boolean(reduceMotion));
  }, [index, reduceMotion]);

  if (posts.length === 0) return null;

  return (
    <section id="driver-spotlights" className="scroll-mt-24 bg-background py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-center text-3xl font-medium text-brand-secondary sm:text-[40px]">{title}</h2>
        </Reveal>

        <Reveal
          className="mt-10 sm:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <ul
            ref={trackRef}
            aria-label={title}
            className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {posts.map((post) => (
              <li
                key={post.id}
                className="w-[78%] shrink-0 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.34px)]"
              >
                <Link
                  href={post.href}
                  className="group block h-full rounded-[18px] bg-white p-2 shadow-[0_10px_25px_-5px_rgba(21,29,50,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_32px_-8px_rgba(21,29,50,0.18)]"
                >
                  <div className="relative w-full overflow-hidden rounded-[13px]" style={IMAGE_CROP}>
                    <Image
                      src={post.image.src}
                      alt={post.author ?? post.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 78vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span aria-hidden className="absolute inset-0" style={IMAGE_WASH} />
                  </div>

                  <div className="px-2 pt-4 pb-3">
                    <p className="text-[12px] text-brand-tertiary">
                      {label} · {post.date}
                    </p>

                    <blockquote className="mt-2.5 text-[14px] leading-[1.45] text-brand-secondary">
                      &ldquo;{post.title}&rdquo;
                    </blockquote>

                    <p className="mt-4 text-[13px] font-semibold text-brand-secondary">{post.author}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
