"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion/variants";

type TriggerProps = {
  /** Trigger once when 20% of the element is visible (default) or every time. */
  once?: boolean;
  /** Animate on mount instead of on scroll - use for above-the-fold (LCP) content. */
  immediate?: boolean;
};

function triggerProps({ once = true, immediate = false }: TriggerProps) {
  return immediate
    ? { initial: "hidden", animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once, amount: 0.2 } };
}

type RevealProps = HTMLMotionProps<"div"> & TriggerProps & { variants?: Variants };

/** Animates children into view when scrolled into the viewport. */
export function Reveal({ variants = fadeUp, once, immediate, ...props }: RevealProps) {
  return <motion.div {...triggerProps({ once, immediate })} variants={variants} {...props} />;
}

type StaggerProps = HTMLMotionProps<"div"> & TriggerProps & { stagger?: number; delay?: number };

/** Parent that staggers direct RevealItem children. */
export function Stagger({ stagger = 0.08, delay = 0, once, immediate, ...props }: StaggerProps) {
  return (
    <motion.div
      {...triggerProps({ once, immediate })}
      variants={staggerContainer(stagger, delay)}
      {...props}
    />
  );
}

/** Child of Stagger. Inherits the animation state from the parent. */
export function RevealItem({
  variants = fadeUp,
  ...props
}: HTMLMotionProps<"div"> & { variants?: Variants }) {
  return <motion.div variants={variants} {...props} />;
}
