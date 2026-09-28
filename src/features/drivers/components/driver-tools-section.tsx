import Image from "next/image";

import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";

import { driverToolsContent } from "../content/driver-tools.content";

export function DriverToolsSection() {
  const { title, highlight, description, tools } = driverToolsContent;

  return (
    <section id="driver-tools" className="scroll-mt-24 bg-brand-secondary py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] leading-[1.25] font-medium text-white sm:text-[34px]">
            {title}
            <span className="block text-brand-primary">{highlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/85">{description}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12" stagger={0.1}>
          {tools.map((tool) => (
            <RevealItem key={tool.id} className="h-full">
              <article className="flex h-full flex-col items-center rounded-[18px] bg-[#FAF6F0] px-7 py-10 text-center">
                {/* Icons ship at different sizes: fix the height so the row reserves
                    space before they load, and let the width follow the artwork. */}
                <span className="flex h-[72px] items-center justify-center">
                  <Image
                    src={tool.icon.src}
                    alt=""
                    aria-hidden
                    width={tool.icon.width}
                    height={tool.icon.height}
                    className="h-[64px] w-auto object-contain"
                  />
                </span>

                <h3 className="mt-8 text-lg font-medium text-brand-primary">{tool.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-brand-secondary/85">{tool.description}</p>
              </article>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
