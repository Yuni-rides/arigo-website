"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { blogListContent } from "../content/blog-list.content";
import { BlogCard } from "./blog-card";

const pad = (page: number) => String(page).padStart(2, "0");

export function BlogList() {
  const { title, highlight, description, allLabel, categories, pageSize, posts } = blogListContent;
  const [category, setCategory] = useState<string>(allLabel);
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (category === allLabel ? posts : posts.filter((post) => post.category === category)),
    [category, allLabel, posts],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pageCount);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);

  function selectCategory(next: string) {
    setCategory(next);
    setPage(1);
  }

  const pages = [...new Set([1, 2, 3, pageCount].filter((n) => n >= 1 && n <= pageCount))];

  return (
    <section id="blog-list" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-[48px]">
            <span className="text-brand-primary">{title}</span>{" "}
            <span className="text-brand-secondary">{highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-tertiary sm:text-base">
            {description}
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[allLabel, ...categories].map((item) => {
            const active = item === category;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => selectCategory(item)}
                className={cn(
                  "h-11 rounded-full border border-brand-primary px-6 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-primary text-white"
                    : "bg-white text-brand-primary hover:bg-brand-primary-soft",
                )}
              >
                {item}
              </button>
            );
          })}
        </div>

        <Stagger
          key={`${category}-${current}`}
          className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.04}
        >
          {visible.map((post) => (
            <RevealItem key={post.id} className="h-full">
              <BlogCard {...post} />
            </RevealItem>
          ))}
        </Stagger>

        <nav aria-label="Blog pages" className="mt-14 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous page"
            disabled={current === 1}
            onClick={() => setPage(current - 1)}
            className="grid size-10 place-items-center rounded-full border border-brand-primary text-brand-primary transition-colors hover:bg-brand-primary hover:text-white disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft className="size-4" />
          </button>

          {pages.map((number, index) => (
            <span key={number} className="flex items-center gap-3">
              {index > 0 && number !== pages[index - 1] + 1 && (
                <span className="text-sm text-brand-tertiary">{pad(number)}</span>
              )}
              {(index === 0 || number === pages[index - 1] + 1) && (
                <button
                  type="button"
                  aria-current={number === current ? "page" : undefined}
                  onClick={() => setPage(number)}
                  className={cn(
                    "grid size-10 place-items-center rounded-full text-sm font-medium transition-colors",
                    number === current
                      ? "bg-brand-primary text-white"
                      : "text-brand-tertiary hover:text-brand-primary",
                  )}
                >
                  {pad(number)}
                </button>
              )}
            </span>
          ))}

          <button
            type="button"
            aria-label="Next page"
            disabled={current === pageCount}
            onClick={() => setPage(current + 1)}
            className="grid size-10 place-items-center rounded-full bg-brand-primary text-white transition-colors hover:bg-brand-primary-hover disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowRight className="size-4" />
          </button>
        </nav>
      </Container>
    </section>
  );
}
