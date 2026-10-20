import Image from "next/image";
import Link from "next/link";

import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";

import { careersBenefitsContent } from "../content/careers-benefits.content";

export function CareersBenefitsSection() {
  const { title, highlight, description, cta, benefits } =
    careersBenefitsContent;

  return (
    <section
      id="careers-benefits"
      className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[30px] leading-[1.25] font-medium tracking-[-0.025em] text-brand-secondary sm:text-[40px] lg:text-[44px]">
            {title}{" "}
            <span className="inline-block border-b border-brand-secondary pb-1">
              <span className="text-brand-primary">{highlight}</span>?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-[15px] leading-[1.5] font-light text-brand-secondary/80 lg:text-[18px]">
            {description}
          </p>
        </Reveal>

        <Stagger
          stagger={0.1}
          className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
        >
          {benefits.map((benefit) => (
            <RevealItem key={benefit.id} className="h-full">
              <article className="group flex h-full min-h-[390px] flex-col rounded-[20px] border border-border/50 bg-background p-2 text-center shadow-[0_5px_8px_rgb(0_0_0/0.22)] transition-colors duration-300 hover:border-brand-secondary hover:bg-brand-secondary focus-within:border-brand-secondary focus-within:bg-brand-secondary lg:min-h-[450px]">
                <div className="flex flex-1 flex-col items-center px-3 pt-6 pb-7 lg:px-4 lg:pt-7">
                  <div className="relative h-[100px] w-[110px] shrink-0">
                    <Image
                      src={benefit.icon.src}
                      alt={benefit.icon.alt}
                      aria-hidden="true"
                      fill
                      sizes="110px"
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-6 flex min-h-[52px] max-w-[200px] items-start justify-center text-[18px] leading-[1.35] font-normal tracking-normal text-brand-primary transition-colors duration-300 group-hover:text-brand-secondary-foreground group-focus-within:text-brand-secondary-foreground">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-[210px] text-[14px] leading-[1.8] font-light text-brand-secondary/85 transition-colors duration-300 group-hover:text-brand-secondary-foreground/85 group-focus-within:text-brand-secondary-foreground/85">
                    {benefit.description}
                  </p>
                </div>

                <Link
                  href={cta.href}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] bg-[#FFC6BC] px-4 text-[12px] font-normal text-brand-secondary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-brand-primary-foreground group-focus-within:bg-brand-primary group-focus-within:text-brand-primary-foreground"
                >
                  {cta.label}
                </Link>
              </article>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}