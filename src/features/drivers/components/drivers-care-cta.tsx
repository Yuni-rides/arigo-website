import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

import { driversCareCtaContent } from "../content/drivers-care-cta.content";

export function DriversCareCta() {
  const { title, description, cta, images } = driversCareCtaContent;

  return (
    <section className="overflow-hidden bg-background pt-14 pb-10 lg:pt-[90px]">
      <Container>
        <Reveal>
          <div className="relative isolate mx-auto max-w-[1120px] rounded-driver-cta bg-driver-cta-background shadow-driver-cta lg:min-h-[380px]">
            <div className="relative z-20 px-6 py-7 sm:px-9 lg:w-[46%] lg:px-9 lg:py-[30px]">
              <h2 className="max-w-[420px] text-[22px] leading-[1.5] font-normal tracking-[-0.025em] text-driver-cta-heading lg:text-[26px]">
                {title}
              </h2>

              <p className="mt-3 max-w-[440px] text-[16px] leading-[1.28] font-light tracking-[-0.015em] text-driver-cta-description lg:text-[21px]">
                {description}
              </p>

              <Link
                href={cta.href}
                className="mt-[30px] inline-flex h-[61px] w-[176px] items-center justify-center rounded-driver-cta-button bg-brand-primary text-[15px] font-normal text-brand-primary-foreground transition-colors hover:bg-brand-primary-hover active:bg-brand-primary-active"
              >
                {cta.label}
              </Link>
            </div>

            <div className="hidden lg:absolute lg:-top-[44px] lg:right-[4%] lg:block lg:h-[370px] lg:w-[49%]">
              <div className="absolute top-0 right-0 z-0 h-[89%] w-[60%] rotate-[9deg] overflow-hidden rounded-card">
                <Image
                  src={images.back.src}
                  alt={images.back.alt}
                  fill
                  sizes="(min-width: 1280px) 330px, (min-width: 1024px) 30vw, 53vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="absolute top-[9%] left-0 z-10 h-[89%] w-[60%] -rotate-[7deg] overflow-hidden rounded-card">
                <Image
                  src={images.front.src}
                  alt={images.front.alt}
                  fill
                  sizes="(min-width: 1280px) 330px, (min-width: 1024px) 30vw, 53vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
