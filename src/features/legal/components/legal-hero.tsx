import Image from "next/image";

import { RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";

import type { LegalContent } from "../types";

/** Navy fades in from the left so the headline stays readable over the photo. */
const BANNER_WASH = {
  backgroundImage: "linear-gradient(to right, rgb(21 29 50 / 0.92) 0%, rgb(21 29 50 / 0.35) 70%)",
};

export function LegalHero({ title, description, banner }: Pick<LegalContent, "title" | "description" | "banner">) {
  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden pt-28 pb-10 sm:min-h-[400px] sm:pb-14 lg:min-h-[440px]">
      <Image src={banner.src} alt={banner.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
      <span aria-hidden className="absolute inset-0 -z-10" style={BANNER_WASH} />

      <Container>
        <Stagger className="max-w-xl" stagger={0.1} immediate>
          <RevealItem>
            <h1 className="text-[32px] leading-[1.15] font-semibold text-white sm:text-[42px] lg:text-[48px]">
              {title}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              {description}
            </p>
          </RevealItem>
        </Stagger>
      </Container>
    </section>
  );
}
