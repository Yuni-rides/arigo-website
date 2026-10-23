"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

import type { BlogArticle } from "../types";
import { RichText } from "./rich-text";

export function BlogArticleBody({ intro, introParagraphs, sections }: BlogArticle) {
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
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <ul className="space-y-4">
              {sections.map((section) => {
                const active = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "flex items-start gap-2.5 text-sm transition-colors",
                        active
                          ? "font-medium text-brand-secondary"
                          : "text-brand-tertiary hover:text-brand-secondary",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "mt-2.5 h-px w-4 shrink-0 transition-colors",
                          active ? "bg-brand-primary" : "bg-transparent",
                        )}
                      />
                      {section.heading}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article className="max-w-5xl">
            <p className="text-[15px] leading-relaxed text-brand-secondary/85"><RichText text={intro} /></p>

            {introParagraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-[15px] leading-relaxed text-brand-secondary/85">
                <RichText text={paragraph} />
              </p>
            ))}

            {sections.map((section) => (
              <div key={section.id} className="mt-12 scroll-mt-28" id={section.id}>
                <h2 className="text-2xl font-semibold text-brand-secondary sm:text-[28px]">
                  {section.heading}
                </h2>

                {section.lead && (
                  <p className="mt-4 text-[15px] leading-relaxed text-brand-secondary/85"><RichText text={section.lead} /></p>
                )}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[15px] leading-relaxed text-brand-secondary/85">
                    <RichText text={paragraph} />
                  </p>
                ))}

                {section.bullets && (
                  <ol className="mt-4 space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bullet.text}
                        className="flex gap-2.5 text-[15px] leading-relaxed text-brand-secondary/85"
                      >
                        {section.ordered ? (
                          <span className="mt-px shrink-0 font-semibold text-brand-primary">
                            {bulletIndex + 1}.
                          </span>
                        ) : (
                          <span
                            aria-hidden
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-secondary/60"
                          />
                        )}
                        <span>
                          {bullet.label && (
                            <strong className="font-semibold text-brand-secondary">
                              {bullet.label}{" "}
                            </strong>
                          )}
                          <RichText text={bullet.text} />
                        </span>
                      </li>
                    ))}
                  </ol>
                )}

                {section.outro?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[15px] leading-relaxed text-brand-secondary/85">
                    <RichText text={paragraph} />
                  </p>
                ))}

                {section.faqs && (
                  <dl className="mt-6 space-y-5">
                    {section.faqs.map((faq) => (
                      <div key={faq.question}>
                        <dt className="text-[17px] font-semibold text-brand-secondary">{faq.question}</dt>
                        <dd className="mt-2 text-[15px] leading-relaxed text-brand-secondary/85">
                          <RichText text={faq.answer} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.cta && (
                  <Link
                    href={section.cta.href}
                    className="mt-6 inline-flex h-12 items-center rounded-md bg-brand-primary px-8 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover"
                  >
                    {section.cta.label}
                  </Link>
                )}
              </div>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
}
