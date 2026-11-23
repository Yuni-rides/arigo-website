"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion/variants";

type TriggerProps = {
  once?: boolean;
  immediate?: boolean;
};

function triggerProps({ once = true, immediate = false }: TriggerProps) {
  return immediate
    ? { initial: "hidden", animate: "visible" }
    : /*
       * `amount: "some"` reveals as soon as any part of the block enters the viewport.
       * A fraction cannot be used here: a one-column grid on a phone is taller than the
       * screen, so a threshold like 0.2 asks for more pixels than the viewport has and
       * never fires, leaving the whole section stuck at opacity 0.
       */
      { initial: "hidden", whileInView: "visible", viewport: { once, amount: "some" as const } };
}

type RevealProps = HTMLMotionProps<"div"> & TriggerProps & { variants?: Variants };

export function Reveal({ variants = fadeUp, once, immediate, ...props }: RevealProps) {
  return <motion.div {...triggerProps({ once, immediate })} variants={variants} {...props} />;
}

type StaggerProps = HTMLMotionProps<"div"> & TriggerProps & { stagger?: number; delay?: number };

export function Stagger({ stagger = 0.08, delay = 0, once, immediate, ...props }: StaggerProps) {
  return (
    <motion.div
      {...triggerProps({ once, immediate })}
      variants={staggerContainer(stagger, delay)}
      {...props}
    />
  );
}

export function RevealItem({
  variants = fadeUp,
  ...props
}: HTMLMotionProps<"div"> & { variants?: Variants }) {
  return <motion.div variants={variants} {...props} />;
}
