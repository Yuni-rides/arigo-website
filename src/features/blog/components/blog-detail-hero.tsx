import Image from "next/image";
import Link from "next/link";

import { RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";
import { siteConfig } from "@/config/site";

import type { BlogArticle } from "../types";
import { BlogShare } from "./blog-share";

/**
 * Desktop: the copy sits on the left half, so the photo is darkened from the
 * left and clears by mid-frame.
 */
const BANNER_WASH_WIDE = {
  backgroundImage: "linear-gradient(to right, rgb(21 29 50 / 1) 0%, rgb(21 29 50 / 0) 55%)",
};

/**
 * Narrow screens: the copy is stacked over the full width, so the photo is
 * darkened top and bottom instead, where the logo, title and byline sit.
 */
const BANNER_WASH_NARROW = {
  backgroundImage:
    "linear-gradient(to bottom, rgb(21 29 50 / 0.88) 0%, rgb(21 29 50 / 0.55) 42%, rgb(21 29 50 / 0.92) 100%)",
};

export function BlogDetailHero({ slug, title, author, date, banner }: BlogArticle) {
  const url = new URL(`/blog/${slug}`, siteConfig.url).toString();

  return (
    <section className="bg-background pt-28 pb-4">
      <Container>
        {/*
          Narrow screens stack the three blocks in normal flow and let the banner
          grow with the title; from `lg` the blocks are absolutely placed over a
          fixed 984x532 crop, as in the design.
        */}
        <div className="relative isolate flex min-h-[420px] w-full flex-col overflow-hidden rounded-[24px] p-6 sm:min-h-[480px] sm:rounded-[36px] sm:p-8 lg:block lg:aspect-[984/532] lg:min-h-0 lg:p-0">
          <Image src={banner.src} alt={banner.alt} fill priority sizes="100vw" className="object-cover" />
          <span aria-hidden className="absolute inset-0 lg:hidden" style={BANNER_WASH_NARROW} />
          <span aria-hidden className="absolute inset-0 hidden lg:block" style={BANNER_WASH_WIDE} />

          {/* Logo - back to the home page */}
          {/* z-20: the title block is full-height on desktop and would otherwise swallow the click. */}
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="relative z-20 self-start lg:absolute lg:top-[10%] lg:left-[7%]"
          >
            {/*
              max-w-none: inside an absolutely positioned link, `max-width: 100%` resolves against
              a width that is itself derived from this image, which collapses the clickable area.
            */}
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={175}
              height={94}
              className="h-11 w-auto max-w-none transition-opacity hover:opacity-85 sm:h-16 lg:h-[88px]"
            />
          </Link>

          {/* Title - pushed to the bottom of the stack on narrow screens, centred on the left on desktop */}
          <Stagger
            className="relative z-10 mt-auto pt-8 lg:absolute lg:inset-y-0 lg:left-[7%] lg:mt-0 lg:flex lg:max-w-[45%] lg:flex-col lg:justify-center lg:pt-0"
            immediate
          >
            <RevealItem>
              <h1 className="text-[26px] leading-[1.28] font-semibold text-white sm:text-[36px] lg:text-[56px]">
                {title}
              </h1>
            </RevealItem>
          </Stagger>

          {/* Byline + share */}
          <div className="relative z-10 mt-5 self-start rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md sm:px-6 sm:py-4 lg:absolute lg:top-[8%] lg:right-[2%] lg:mt-0">
            <p className="text-sm text-white sm:text-base lg:text-[20px]">
              Written by <span className="font-semibold text-brand-primary">{author}</span>
              <span className="mx-2 text-white/60">|</span>
              {date}
            </p>
            <BlogShare url={url} title={title} />
          </div>
        </div>
      </Container>
    </section>
  );
}
