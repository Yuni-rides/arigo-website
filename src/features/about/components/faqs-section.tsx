"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button, Container } from "@/components/ui";
import { transitions } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";
import { faqsContent } from "../content/faqs.content";

export function FaqsSection() {
  const { title, highlight, cta, faqs } = faqsContent;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faqs" className="scroll-mt-24 bg-[#FFC6BC] py-16 sm:py-20">
      <Container>
        <h2 className="text-center text-3xl font-medium text-brand-secondary sm:text-[44px]">
          {title}{" "}
          <span className="font-semibold text-brand-primary underline decoration-brand-primary decoration-2 underline-offset-[12px]">
            {highlight}
          </span>
        </h2>

        <ul className="mx-auto mt-14 grid max-w-5xl items-start gap-x-7 gap-y-6 sm:grid-cols-2">
          {faqs.map((faq) => {
            const open = faq.id === openId;
            const Icon = open ? Minus : Plus;

            return (
              <li key={faq.id} className="overflow-hidden rounded-[14px] bg-white shadow-sm">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-${faq.id}`}
                  onClick={() => setOpenId(open ? null : faq.id)}
                  className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left"
                >
                  <Icon className="size-5 shrink-0 text-brand-primary" strokeWidth={2.5} aria-hidden />
                  <span
                    className={cn(
                      "text-[15px] text-brand-secondary sm:text-[17px]",
                      open ? "font-semibold" : "font-normal",
                    )}
                  >
                    {faq.question}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={transitions.fast}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pl-15 text-sm leading-relaxed text-brand-tertiary">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <Button href={cta.href} className="h-[56px] rounded-md px-10 text-sm">
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
