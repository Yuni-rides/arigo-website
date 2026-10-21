import Image from "next/image";
import Link from "next/link";

import { RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";
import { siteConfig } from "@/config/site";

import type { BlogArticle } from "../types";
import { BlogShare } from "./blog-share";

const BANNER_WASH = {
  backgroundImage: "linear-gradient(to right, rgb(21 29 50 / 1) 0%, rgb(21 29 50 / 0) 55%)",
};

const BANNER_CROP = { aspectRatio: "984 / 532" };

export function BlogDetailHero({ slug, title, author, date, banner }: BlogArticle) {
  const url = new URL(`/blog/${slug}`, siteConfig.url).toString();

  return (
    <section className="bg-background pt-28 pb-4">
      <Container>
        <div className="relative isolate w-full overflow-hidden rounded-[36px]" style={BANNER_CROP}>
          <Image src={banner.src} alt={banner.alt} fill priority sizes="100vw" className="object-cover" />
          <span aria-hidden className="absolute inset-0" style={BANNER_WASH} />

          {/* Logo, top-left - back to the home page */}
          {/* z-20: the title block below is full-height and would otherwise swallow the click. */}
          <Link href="/" aria-label={`${siteConfig.name} home`} className="absolute top-[10%] left-[7%] z-20">
            {/*
              max-w-none: inside an absolutely positioned link, `max-width: 100%` resolves against
              a width that is itself derived from this image, which collapses the clickable area.
            */}
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={175}
              height={94}
              className="h-12 w-auto max-w-none transition-opacity hover:opacity-85 sm:h-16 lg:h-[88px]"
            />
          </Link>

          {/* Byline + share, top-right */}
          <div className="absolute top-[8%] right-[2%] rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-md">
            <p className="text-sm text-white sm:text-base lg:text-[20px]">
              Written by <span className="font-semibold text-brand-primary">{author}</span>
              <span className="mx-2 text-white/60">|</span>
              {date}
            </p>
            <BlogShare url={url} title={title} />
          </div>

          {/* Title, vertically centred on the left */}
          <Stagger
            className="absolute inset-y-0 left-[7%] flex max-w-[45%] flex-col justify-center"
            immediate
          >
            <RevealItem>
              <h1 className="text-[28px] leading-[1.28] font-semibold text-white sm:text-[40px] lg:text-[56px]">
                {title}
              </h1>
            </RevealItem>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
