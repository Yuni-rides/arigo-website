"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

import type { CoreValue } from "../types";
import { ValueCard } from "./value-card";

/** Sticky offset in px - must match `top-28` (7rem) on the wrapper. */
const STICKY_TOP = 112;
/** How far each card behind the front one moves up / shrinks / lightens. */
const LAYER_RISE = 14;
const LAYER_SHRINK = 0.035;
const LAYER_LIGHTEN = 0.22;

type StackCardProps = {
  value: CoreValue;
  index: number;
  /** Written by this card: 0 = still below the viewport, 1 = pinned at the top. */
  ownProgress: MotionValue<number>;
  /** Progress of every card that comes after this one. */
  laterProgress: MotionValue<number>[];
};

function StackCard({ value, index, ownProgress, laterProgress }: StackCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fallback = useMotionValue(0);

  // 0 -> 1 while this card travels from the lower part of the viewport (where it starts
  // covering the previous card) up to its sticky position.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", `start ${STICKY_TOP}px`] });
  useMotionValueEvent(scrollYProgress, "change", (v) => ownProgress.set(v));

  // depth = how many later cards have stacked on top of this one (fractional while scrolling).
  const depth = useTransform(laterProgress.length ? laterProgress : [fallback], (values: number[]) =>
    values.reduce((sum, v) => sum + v, 0),
  );

  const y = useTransform(depth, (d) => -d * LAYER_RISE);
  const scale = useTransform(depth, (d) => 1 - d * LAYER_SHRINK);
  const orange = useTransform(depth, (d) => Math.min(d, 1) ** 1.5); // eases in so the tint lands late
  const white = useTransform(depth, (d) => Math.min(Math.max(d - 1, 0) * LAYER_LIGHTEN, 0.75));

  return (
    <div ref={ref} style={{ zIndex: index + 1 }} className="sticky top-28 pb-10 last:pb-0">
      <motion.div
        style={{ y, scale, transformOrigin: "top center" }}
        className="relative overflow-hidden rounded-[28px]"
      >
        <ValueCard {...value} />

        {/* Tints that turn a card into an orange deck layer as it goes to the back */}
        <motion.div
          aria-hidden
          style={{ opacity: orange }}
          className="pointer-events-none absolute inset-0 bg-brand-primary"
        />
        <motion.div
          aria-hidden
          style={{ opacity: white }}
          className="pointer-events-none absolute inset-0 bg-white"
        />
      </motion.div>
    </div>
  );
}

export function ValueCardStack({ values }: { values: CoreValue[] }) {
  // One progress value per card, shared so each card can read the ones after it.
  const p0 = useMotionValue(0);
  const p1 = useMotionValue(0);
  const p2 = useMotionValue(0);
  const p3 = useMotionValue(0);
  const p4 = useMotionValue(0);
  const p5 = useMotionValue(0);
  const p6 = useMotionValue(0);
  const p7 = useMotionValue(0);
  const progress = [p0, p1, p2, p3, p4, p5, p6, p7].slice(0, values.length);

  return (
    <div className="relative">
      {values.map((value, i) => (
        <StackCard
          key={value.id}
          value={value}
          index={i}
          ownProgress={progress[i]}
          laterProgress={progress.slice(i + 1)}
        />
      ))}
    </div>
  );
}
