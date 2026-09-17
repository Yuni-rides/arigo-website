"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode } from "react";

import { AppleIcon, GooglePlayIcon } from "@/components/icons/brand-icons";
import { StoreBadge } from "@/components/ui";
import { transitions } from "@/lib/motion/variants";

import type { AppShowcase } from "../types";

type DownloadAppShowcaseProps = {
  titlePrefix: string;
  downloadHeading: string;
  downloadText: string;
  apps: AppShowcase[];
  /** Server-rendered QR code per app id. */
  qrCodes: Record<string, ReactNode>;
};

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: 24 * dir }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: -24 * dir }),
};

const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

export function DownloadAppShowcase({
  titlePrefix,
  downloadHeading,
  downloadText,
  apps,
  qrCodes,
}: DownloadAppShowcaseProps) {
  const [[index, direction], setState] = useState([0, 1]);
  const app = apps[index];

  const go = (dir: 1 | -1) => setState(([i]) => [(i + dir + apps.length) % apps.length, dir]);

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-center lg:gap-16">
      {/* ---------- Left: heading, steps, download ---------- */}
      <div className="min-w-0">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={app.id}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transitions.fast}
          >
            <h2 className="text-3xl font-semibold text-brand-secondary sm:text-4xl">
              {titlePrefix} <span className="text-brand-primary">{app.name}</span>
            </h2>

            <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {app.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="grid size-11 place-items-center rounded-full bg-brand-primary text-lg font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-[17px] font-medium text-brand-secondary">{step.title}</h3>
                  <p className="mt-3 max-w-[200px] text-sm leading-relaxed text-brand-tertiary">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-wrap items-end gap-6 sm:gap-8">
          <div className="flex items-center gap-5">
            <div className="size-24 shrink-0 rounded-lg border border-border bg-white p-1.5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={app.id} {...fade} transition={transitions.fast} className="size-full">
                  {qrCodes[app.id]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-secondary">{downloadHeading}</h3>
              <p className="mt-1 max-w-[220px] text-sm leading-relaxed text-brand-tertiary">{downloadText}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <StoreBadge
                  href={app.stores.googlePlay}
                  small="GET IT ON"
                  name="Google Play"
                  className="border-transparent px-2.5 py-1"
                >
                  <GooglePlayIcon className="size-5" />
                </StoreBadge>
                <StoreBadge
                  href={app.stores.appStore}
                  small="Download on the"
                  name="App Store"
                  className="border-transparent px-2.5 py-1"
                >
                  <AppleIcon className="size-5" />
                </StoreBadge>
              </div>
            </div>
          </div>

          {/* Prev / next app */}
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous app"
              onClick={() => go(-1)}
              className="grid size-10 place-items-center rounded-md bg-brand-primary-soft text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next app"
              onClick={() => go(1)}
              className="grid size-10 place-items-center rounded-md bg-brand-primary-soft text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Right: phone mockup ---------- */}
      <div className="mx-auto w-[260px] lg:w-full">
        <div className="relative rounded-[44px] bg-brand-secondary p-2.5 shadow-[0_30px_60px_-20px_rgb(21_29_50/0.45)]">
          <div
            aria-hidden
            className="absolute top-2.5 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-brand-secondary"
          />
          <div className="relative aspect-[312/675] overflow-hidden rounded-[36px] bg-brand-secondary">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={app.id} {...fade} transition={transitions.fast} className="absolute inset-0">
                <Image src={app.image.src} alt={app.image.alt} fill sizes="300px" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
