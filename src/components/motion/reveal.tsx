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
    : { initial: "hidden", whileInView: "visible", viewport: { once, amount: 0.2 } };
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
