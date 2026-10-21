"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/ui";
import { transitions } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

import { whatToExpectContent, type Expectation } from "../content/what-to-expect.content";

/** Soft purple bloom in the bottom-right corner, as in the design. */
const CORNER_GLOW = {
  backgroundImage:
    "radial-gradient(ellipse 45% 70% at 100% 100%, rgb(80 50 110 / 0.55) 0%, rgb(80 50 110 / 0) 70%)",
};

function Items({ marker, items }: Pick<Expectation, "marker" | "items">) {
  if (marker === "none") {
    return (
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p key={item.text} className="text-[13px] leading-relaxed text-brand-tertiary">
            {item.text}
          </p>
        ))}
      </div>
    );
  }

  return (
    <ol className="mt-4 space-y-3.5">
      {items.map((item, index) => (
        <li key={item.text} className="flex gap-3">
          <span
            aria-hidden
            className={cn(
              "mt-0.5 grid shrink-0 place-items-center rounded-full bg-brand-primary/20 text-[11px] font-semibold text-brand-primary",
              marker === "number" ? "size-5" : "mt-2 size-1.5",
            )}
          >
            {marker === "number" ? index + 1 : null}
          </span>

          <p className="text-[13px] leading-relaxed text-brand-tertiary">
            {item.lead && <span className="font-semibold text-brand-secondary">{item.lead}</span>}
            {item.lead && (marker === "number" ? " " : ": ")}
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function WhatToExpectSection() {
  const { title, titleUnderlined, expectations } = whatToExpectContent;
  const [activeId, setActiveId] = useState(expectations[0].id);
  const active = expectations.find((item) => item.id === activeId) ?? expectations[0];

  // The last word of the heading carries the underline.
  const titleLead = title.replace(titleUnderlined, "").trim();

  return (
    <section
      id="what-to-expect"
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
          {/* Tab list */}
          <ul className="flex flex-col gap-1.5" role="tablist" aria-label={title}>
            {expectations.map((item) => {
              const current = item.id === active.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={current}
                    aria-controls="what-to-expect-panel"
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      "w-full cursor-pointer rounded-[10px] px-5 py-3.5 text-left text-[15px] transition-colors sm:text-base",
                      current
                        ? "bg-white font-semibold text-brand-secondary"
                        : "font-medium text-white/95 hover:bg-white/10",
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          <div
            id="what-to-expect-panel"
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
              <h3 className="text-[17px] font-semibold text-brand-secondary sm:text-lg">
                {active.label}
              </h3>

              <Items marker={active.marker} items={active.items} />

              <a
                href={active.cta.href}
                className="mt-8 inline-flex h-11 items-center rounded-md bg-brand-primary/35 px-7 text-[13px] font-medium text-brand-secondary transition-colors hover:bg-brand-primary/50"
              >
                {active.cta.label}
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
