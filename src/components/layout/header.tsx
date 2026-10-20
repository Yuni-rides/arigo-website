"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui";
import { mainNav } from "@/config/navigation";
import { useScrolled } from "@/hooks";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

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
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-overlay"
            aria-hidden
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-secondary/60"
          />
        )}
        {open && (
          <motion.nav
            key="menu-panel"
            id="site-menu"
            aria-label="Primary"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 flex w-[85%] flex-col items-center border-l border-white/20 bg-white/20 pt-10 backdrop-blur-2xl sm:w-[26%] sm:min-w-[340px]"
          >
            <Logo />

            <ul className="mt-12 flex flex-col items-center">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3.5 text-[15px] font-medium tracking-[0.15em] text-white transition-colors hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="mt-14 grid size-12 cursor-pointer place-items-center text-white transition-opacity hover:opacity-80"
            >
              <X className="size-7" />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
