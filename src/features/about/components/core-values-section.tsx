"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/ui";
import { transitions } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

import { coreValuesContent } from "../content/core-values.content";

/** Soft purple bloom in the bottom-right corner, as in the design. */
const CORNER_GLOW = {
  backgroundImage:
    "radial-gradient(ellipse 45% 70% at 100% 100%, rgb(80 50 110 / 0.55) 0%, rgb(80 50 110 / 0) 70%)",
};

export function CoreValuesSection() {
  const { title, titleUnderlined, readMoreLabel, values } = coreValuesContent;
  const [activeId, setActiveId] = useState(values[0].id);
  const active = values.find((value) => value.id === activeId) ?? values[0];

  // "Our Core Values" -> the last word carries the underline.
  const titleLead = title.replace(titleUnderlined, "").trim();

  return (
    <section
      id="core-values"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#D9583F] py-16 sm:py-20"
    >
      <span aria-hidden className="absolute inset-0 -z-10" style={CORNER_GLOW} />

      <Container>
        <h2 className="text-center text-3xl font-bold text-white sm:text-[40px]">
          {titleLead}{" "}
          <span className="underline decoration-white decoration-2 underline-offset-[14px]">
            {titleUnderlined}
          </span>
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,34%)_minmax(0,60%)] lg:justify-between lg:gap-0">
          {/* Value list */}
          <ul className="flex flex-col gap-1.5" role="tablist" aria-label="Core values">
            {values.map((value) => {
              const current = value.id === active.id;
              return (
                <li key={value.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={current}
                    aria-controls="core-value-panel"
                    onClick={() => setActiveId(value.id)}
                    className={cn(
                      "w-full cursor-pointer rounded-[10px] px-5 py-3.5 text-left text-[15px] transition-colors sm:text-base",
                      current
                        ? "bg-white font-semibold text-brand-secondary"
                        : "font-medium text-white/95 hover:bg-white/10",
                    )}
                  >
                    {value.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          <div
            id="core-value-panel"
            role="tabpanel"
            className="self-start rounded-[14px] bg-white p-7 shadow-[0_18px_40px_-20px_rgb(21_29_50/0.4)] sm:p-8"
          >
            {/* Keyed, fade-in only: the new panel is in the DOM immediately, so it
                never blanks out if animations are throttled or reduced. */}
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitions.fast}
            >
              <h3 className="text-[17px] font-semibold text-brand-secondary sm:text-lg">{active.title}</h3>

              <p className="mt-4 max-w-md text-justify text-[13px] leading-relaxed text-brand-tertiary">
                {active.description}
              </p>

              <a
                href={active.href}
                className="mt-8 inline-flex h-11 items-center rounded-md bg-brand-primary/35 px-7 text-[13px] font-medium text-brand-secondary transition-colors hover:bg-brand-primary/50"
              >
                {readMoreLabel}
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
