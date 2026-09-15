import type { Transition, Variants } from "framer-motion";

/** Shared easing so all brand motion feels consistent. */
export const brandEase = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  base: { duration: 0.6, ease: brandEase } satisfies Transition,
  fast: { duration: 0.3, ease: brandEase } satisfies Transition,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.base },
};

/** Parent variant: staggers any child that uses fadeUp / fadeIn / scaleIn. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
