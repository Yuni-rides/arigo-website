import Image from "next/image";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

import { trustedContent } from "../content/trusted.content";
import type { TrustedPartner } from "../types";

function PartnerPill({ name, logo }: TrustedPartner) {
  return (
    <li
      title={name}
      className="group flex h-[74px] w-[190px] shrink-0 items-center justify-center rounded-full border border-brand-primary/60 bg-white px-6 transition-colors duration-300 hover:border-brand-primary hover:bg-brand-primary"
    >
      <Image
        src={logo.src}
        alt={name}
        width={logo.width}
        height={logo.height}
        className="h-11 w-auto max-w-full object-contain transition-[filter,opacity] duration-300 group-hover:opacity-85 group-hover:brightness-0"
      />
    </li>
  );
}

/** Heading + infinite logo marquee. The list is rendered twice so the loop is seamless. */
export function TrustedSection() {
  const { highlight, heading, partners } = trustedContent;

  return (
    <section id="trusted" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="mx-auto max-w-[28rem] text-center text-[22px] leading-[1.4] font-normal text-brand-secondary sm:text-[26px]">
            <span className="font-semibold text-brand-primary underline decoration-brand-primary decoration-[1.5px] underline-offset-[6px]">
              {highlight}
            </span>{" "}
            {heading}
          </h2>
        </Reveal>
      </Container>

      <div
        className="group/marquee mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-label="Trusted partners"
      >
        <ul className="flex w-max animate-marquee gap-6 group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          {[...partners, ...partners].map((partner, i) => (
            <PartnerPill key={`${partner.id}-${i}`} {...partner} />
          ))}
        </ul>
      </div>
    </section>
  );
}
