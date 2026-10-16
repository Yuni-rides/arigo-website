"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Container } from "@/components/ui";
import { brandEase, transitions } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

import { blogListContent } from "../content/blog-list.content";
import { blogShowcaseContent } from "../content/blog-showcase.content";

const PANEL_WASH = {
  backgroundImage:
    "radial-gradient(ellipse 80% 100% at 0% 0%, rgb(216 90 68 / 1) 12%, rgb(216 90 68 / 0) 100%)",
};

const PANEL_CROP = { aspectRatio: "848 / 585" };

const VISIBLE = 4;

const CARD_CROP = { aspectRatio: "194 / 180" };

export function BlogShowcase() {
  const { title, subtitle, subtitleHighlight, slideDuration } = blogShowcaseContent;

  const posts = useMemo(() => {
    const seen = new Set<string>();
    return blogListContent.posts.filter((post) => {
      if (seen.has(post.title)) return false;
      seen.add(post.title);
      return true;
    });
  }, []);

  const [index, setIndex] = useState(0);
  const active = posts[index];

  useEffect(() => {
    if (posts.length < 2) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % posts.length), slideDuration * 1000);
    return () => window.clearTimeout(id);
  }, [index, posts.length, slideDuration]);

  const offset = Math.min(index, Math.max(posts.length - VISIBLE, 0));

  return (
    <section id="blogs" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <Container>
        <div className="text-center">
          <h2 className="inline-block text-3xl font-bold text-brand-primary sm:text-[40px]">
            {title}
            <span aria-hidden className="mt-2 block h-0.5 w-full bg-brand-primary" />
          </h2>
          <p className="mt-4 text-sm text-brand-secondary sm:text-base">
            {subtitle} <span className="font-medium text-brand-primary">{subtitleHighlight}</span>
          </p>
        </div>

        <div
          className="relative mt-10 w-full overflow-hidden rounded-[20px] bg-brand-secondary"
          style={PANEL_CROP}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image src={active.image.src} alt="" aria-hidden fill sizes="100vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>

          <span aria-hidden className="absolute inset-0" style={PANEL_WASH} />

          <div className="relative flex h-full flex-col px-6 pt-8 sm:px-10 sm:pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={transitions.fast}
                className="max-w-[54%]"
              >
                <h3 className="text-xl leading-[1.25] font-semibold text-white sm:text-3xl lg:text-[52px]">
                  {active.title}
                </h3>

                <span className="mt-5 inline-flex items-center gap-1.5 rounded-[5px] bg-brand-secondary px-2.5 py-1 text-[11px] font-medium text-white">
                  <CalendarDays className="size-3" aria-hidden />
                  {active.date}
                </span>

                <p className="mt-4 hidden max-w-[80%] text-[15px] leading-relaxed text-white/80 sm:block lg:text-[17px]">
                  {active.excerpt}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-3 pb-3 sm:px-6 sm:pb-6">
            <div className="overflow-hidden">
              <motion.ul
                className="flex"
                style={{ width: `${(posts.length / VISIBLE) * 100}%` }}
                animate={{ x: `-${(offset * 100) / posts.length}%` }}
                transition={{ duration: 0.6, ease: brandEase }}
              >
                {posts.map((post, i) => {
                  const current = i === index;
                  return (
                    <li
                      key={post.id}
                      style={{ flex: `0 0 ${100 / posts.length}%` }}
                      className="px-1.5 sm:px-2"
                    >
                      <button
                        type="button"
                        aria-current={current ? "true" : undefined}
                        onClick={() => setIndex(i)}
                        style={CARD_CROP}
                        className={cn(
                          "flex w-full cursor-pointer flex-col rounded-[13px] p-3 text-left transition-colors sm:p-4",
                          current ? "bg-brand-primary" : "bg-white/15 backdrop-blur-sm hover:bg-white/25",
                        )}
                      >
                        <span className="line-clamp-3 text-[13px] leading-snug font-medium text-white lg:text-[17px]">
                          {post.title}
                        </span>

                        <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-[4px] bg-brand-secondary px-2 py-1 text-[11px] font-medium text-white">
                          <CalendarDays className="size-2.5" aria-hidden />
                          {post.date}
                        </span>

                        <Link
                          href={post.href}
                          aria-label={`Read ${post.title}`}
                          onClick={(event) => event.stopPropagation()}
                          className={cn(
                            "mt-auto grid size-10 place-items-center rounded-[8px] transition-colors lg:size-12",
                            current
                              ? "bg-brand-secondary text-white hover:bg-brand-secondary-hover"
                              : "bg-brand-primary text-white hover:bg-brand-primary-hover",
                          )}
                        >
                          <ArrowUpRight className="size-5" />
                        </Link>
                      </button>
                    </li>
                  );
                })}
              </motion.ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
