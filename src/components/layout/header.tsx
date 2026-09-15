"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui";
import { mainNav } from "@/config/navigation";
import { useScrolled } from "@/hooks";
import { transitions } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

/**
 * Floating glass navbar (Figma: centred pill over the hero).
 * Logo | "Request a ride" | hamburger. The hamburger opens the full menu at every breakpoint.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <div className="relative w-full max-w-[520px]">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-colors duration-300 sm:rounded-[20px] sm:px-6",
            scrolled
              ? "border-white/10 bg-brand-secondary/90 shadow-lg"
              : "border-white/20 bg-brand-secondary/35 shadow-[0_8px_32px_-8px_rgb(0_0_0/0.35)]",
          )}
        >
          <Logo priority />

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              href="/#request"
              size="sm"
              className="rounded-full bg-white px-4 text-xs font-semibold tracking-wide text-brand-secondary uppercase hover:bg-brand-primary-soft sm:px-5"
            >
              Request a ride
            </Button>

            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-lg bg-brand-primary text-white transition-colors hover:bg-brand-primary-hover"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="site-menu"
              aria-label="Primary"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={transitions.fast}
              className="absolute inset-x-0 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-brand-secondary/95 p-2 shadow-xl backdrop-blur-xl"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
