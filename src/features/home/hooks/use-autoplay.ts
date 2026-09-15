"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Cycles `index` through `count` items every `durationSec` seconds.
 * `goTo` jumps to a slide and restarts the timer.
 */
export function useAutoplay(count: number, durationSec: number) {
  const [index, setIndex] = useState(0);
  // Bumping this key restarts the timer (and the progress bar) after a manual jump.
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (count < 2) return;
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % count);
      setCycle((c) => c + 1);
    }, durationSec * 1000);
    return () => window.clearTimeout(id);
  }, [index, cycle, count, durationSec]);

  const goTo = useCallback((next: number) => {
    setIndex(next);
    setCycle((c) => c + 1);
  }, []);

  return { index, cycle, goTo };
}
