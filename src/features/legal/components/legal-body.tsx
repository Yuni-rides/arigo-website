"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

import type { LegalContent } from "../types";

export function LegalBody({
  tocTitle,
  sections,
  cta,
}: Pick<LegalContent, "tocTitle" | "sections" | "cta">) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const headings = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const onScreen = entries.filter((entry) => entry.isIntersecting);
        if (onScreen.length > 0) setActiveId(onScreen[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="bg-background py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,275px)_minmax(0,1fr)] lg:gap-10">
          {/* Table of contents */}
          <nav
            aria-label={tocTitle}
            className="rounded-[14px] bg-white p-5 shadow-[0_10px_30px_-18px_rgb(21_29_50/0.35)] lg:sticky lg:top-28 lg:self-start"
          >
            <p className="px-2 text-[17px] font-semibold text-brand-secondary">{tocTitle}</p>

            <ol className="mt-4 space-y-1">
              {sections.map((section, index) => {
                const active = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "flex gap-2 rounded-r-md border-l-[3px] py-2 pr-2 pl-3 text-[13px] leading-snug transition-colors",
                        active
                          ? "border-brand-primary bg-brand-primary/10 font-medium text-brand-primary"
                          : "border-transparent text-brand-secondary/80 hover:bg-brand-secondary/5",
                      )}
                    >
                      <span aria-hidden>{index + 1}.</span>
                      {section.heading}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Sections */}
          <div>
            <div className="space-y-5">
              {sections.map((section, index) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-[14px] bg-white p-6 shadow-[0_10px_30px_-18px_rgb(21_29_50/0.35)] sm:p-7"
                >
                  <h2 className="text-[19px] font-semibold text-brand-secondary sm:text-[22px]">
                    {index + 1}. {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-3.5 text-[13.5px] leading-relaxed text-brand-tertiary">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-3.5 space-y-2.5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet.text} className="flex gap-2.5">
                          <span
                            aria-hidden
                            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand-primary"
                          />
                          <p className="text-[13.5px] leading-relaxed text-brand-tertiary">
                            {bullet.label && (
                              <span className="font-semibold text-brand-secondary">{bullet.label} </span>
                            )}
                            {bullet.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            {/* Closing call to action */}
            <div className="mt-6 flex flex-col gap-4 rounded-[14px] bg-[#FDE0D8] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="text-[15px] font-semibold text-brand-secondary">{cta.title}</p>
                <p className="mt-1.5 text-[13px] text-brand-tertiary">{cta.description}</p>
              </div>

              <Link
                href={cta.href}
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-brand-primary px-8 text-[13px] font-medium text-white transition-colors hover:bg-brand-primary-hover"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
