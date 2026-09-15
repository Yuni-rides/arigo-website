"use client";

import { useCountUp } from "../hooks/use-count-up";
import type { StatItem } from "../types";

export function StatCounter({ value, suffix, label }: StatItem) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div className="text-center">
      <p className="font-display text-5xl font-bold text-brand-primary sm:text-6xl">
        <span ref={ref}>{current}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium tracking-wide text-brand-tertiary uppercase">{label}</p>
    </div>
  );
}
