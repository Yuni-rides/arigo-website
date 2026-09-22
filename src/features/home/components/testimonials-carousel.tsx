"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { brandEase } from "@/lib/motion/variants";

import type { Testimonial } from "../types";
import { TestimonialCard } from "./testimonial-card";

const GAP = 24;
/** Seconds each review stays before auto-advancing. */
const AUTOPLAY_SECONDS = 5;

/**
 * Centre-focused infinite carousel. The list is rendered three times; the middle
 * copy is the "real" one. When the pointer drifts into a clone we snap back
 * (without animation) to the equivalent card in the middle copy.
 */
export function TestimonialsCarousel({
  items,
  autoplay = AUTOPLAY_SECONDS,
}: {
  items: Testimonial[];
  autoplay?: number;
}) {
  const count = items.length;
  const track = [...items, ...items, ...items];

  const [position, setPosition] = useState(count); // index into `track`
  const [instant, setInstant] = useState(true); // true on first paint and while snapping back
  const [metrics, setMetrics] = useState({ container: 0, card: 0 });
  const [paused, setPaused] = useState(false); // hover / focus pauses autoplay

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLLIElement>(null);

  const measure = useCallback(() => {
    setMetrics({
      container: containerRef.current?.offsetWidth ?? 0,
      card: cardRef.current?.offsetWidth ?? 0,
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [measure]);

  // After a snap, re-enable animation on the next frame.
  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  const go = (dir: 1 | -1) => setPosition((p) => p + dir);

  // Autoplay: restarts whenever the position changes (so manual clicks reset the timer).
  useEffect(() => {
    if (paused || autoplay <= 0 || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => go(1), autoplay * 1000);
    return () => window.clearTimeout(id);
  }, [position, paused, autoplay, count]);

  const onSettled = () => {
    if (position >= count * 2) {
      setInstant(true);
      setPosition(position - count);
    } else if (position < count) {
      setInstant(true);
      setPosition(position + count);
    }
  };

  const step = metrics.card + GAP;
  const x = metrics.container / 2 - metrics.card / 2 - position * step;
  const activeIndex = ((position % count) + count) % count;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div ref={containerRef} className="overflow-hidden">
        <motion.ul
          className="flex items-stretch"
          style={{ gap: GAP }}
          animate={{ x }}
          transition={instant ? { duration: 0 } : { duration: 0.55, ease: brandEase }}
          onAnimationComplete={onSettled}
          aria-live="polite"
        >
          {track.map((item, i) => (
            <li
              key={`${item.id}-${i}`}
              ref={i === 0 ? cardRef : undefined}
              className="w-[min(300px,80vw)] shrink-0"
              aria-hidden={i !== position}
            >
              <TestimonialCard {...item} active={i === position} />
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="grid size-10 place-items-center rounded-md bg-brand-primary-soft text-brand-secondary transition-colors hover:bg-brand-primary hover:text-white"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="grid size-10 place-items-center rounded-md bg-brand-primary-soft text-brand-secondary transition-colors hover:bg-brand-primary hover:text-white"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>

      <p className="sr-only">
        Showing testimonial {activeIndex + 1} of {count}
      </p>
    </div>
  );
}
