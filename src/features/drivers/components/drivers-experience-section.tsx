"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

import {
  driversExperienceContent,
  driversExperienceIntro,
  type DriverExperience,
} from "../content/drivers-experience.content";

import { DriverExperienceCard } from "./driver-experience-card";

const STICKY_TOP = 112;

interface StackCardProps {
  value: DriverExperience;
  index: number;
  ownProgress: MotionValue<number>;
  laterProgress: MotionValue<number>[];
}

function ExperienceStackCard({
  value,
  index,
  ownProgress,
  laterProgress,
}: StackCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fallback = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", `start ${STICKY_TOP}px`],
  });

  useEffect(() => {
    ownProgress.set(scrollYProgress.get());
  }, [ownProgress, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    ownProgress.set(progress);
  });

  const depth = useTransform(
    laterProgress.length ? laterProgress : [fallback],
    (values: number[]) => values.reduce((sum, value) => sum + value, 0),
  );

  const y = useTransform(depth, (value) => -value * 20);
  const scale = useTransform(depth, (value) => 1 - value * 0.035);

  const navyOpacity = useTransform(depth, (value) =>
    Math.min(Math.max(value, 0), 1),
  );

  const slateOpacity = useTransform(depth, (value) =>
    Math.min(Math.max(value - 1, 0), 1),
  );

  return (
    <div
      ref={ref}
      style={{ zIndex: index + 1 }}
      className="sticky top-28 pb-10 last:pb-0"
    >
      <motion.div
        style={{
          y,
          scale,
          transformOrigin: "top center",
        }}
        className="relative overflow-hidden rounded-[28px]"
      >
        <DriverExperienceCard {...value} />

        <motion.div
          aria-hidden="true"
          style={{ opacity: navyOpacity }}
          className="pointer-events-none absolute inset-0 bg-brand-secondary"
        />

        <motion.div
          aria-hidden="true"
          style={{ opacity: slateOpacity }}
          className="pointer-events-none absolute inset-0 bg-brand-slate"
        />
      </motion.div>
    </div>
  );
}

export function DriversExperienceSection() {
  const reduceMotion = useReducedMotion();

  const firstProgress = useMotionValue(0);
  const secondProgress = useMotionValue(0);
  const thirdProgress = useMotionValue(0);

  const progress = [
    firstProgress,
    secondProgress,
    thirdProgress,
  ];

  const { title, subtitle, highlight, description } =
    driversExperienceIntro;

  return (
    <section
      id="drivers-experience"
      className="scroll-mt-24 bg-background py-16 sm:py-24"
    >
      <Container>
        <Reveal className="mx-auto flex max-w-[1120px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <h2 className="text-[30px] leading-[1.2] font-normal tracking-[-0.025em] text-brand-secondary sm:text-[40px] lg:text-[44px]">
            {title}
            <br />
            {subtitle}{" "}
            <span className="font-medium text-brand-primary">
              {highlight}
            </span>
          </h2>

          <p className="max-w-[300px] text-[15px] leading-[1.35] font-light text-brand-secondary lg:mr-12 lg:text-[18px]">
            {description}
          </p>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-[1120px] sm:mt-20">
          {reduceMotion ? (
            <div className="space-y-6">
              {driversExperienceContent.map((value) => (
                <DriverExperienceCard key={value.id} {...value} />
              ))}
            </div>
          ) : (
            <>
              {driversExperienceContent.map((value, index) => (
                <ExperienceStackCard
                  key={value.id}
                  value={value}
                  index={index}
                  ownProgress={progress[index]!}
                  laterProgress={progress.slice(index + 1)}
                />
              ))}

              <div aria-hidden="true" className="h-[35vh]" />
            </>
          )}
        </div>
      </Container>
    </section>
  );
}