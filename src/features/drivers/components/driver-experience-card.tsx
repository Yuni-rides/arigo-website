import Image from "next/image";

import type { DriverExperience } from "../content/drivers-experience.content";

export function DriverExperienceCard({ title, image, points }: DriverExperience) {
  return (
    <article className="grid gap-8 rounded-[28px] bg-brand-primary p-5 sm:p-6 lg:min-h-[460px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-5">
      <div className="flex flex-col px-2 py-3 lg:px-6 lg:py-6">
        <h3 className="max-w-[390px] text-[24px] leading-[1.3] font-normal tracking-[-0.02em] text-brand-primary-foreground lg:text-[32px]">
          {title}
        </h3>

        <ul className="mt-10 space-y-4 lg:mt-auto lg:pt-12">
          {points.map((point) => (
            <li key={point.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand-primary-soft">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-brand-primary"
                >
                  <path
                    d="m3.5 8 3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <h4 className="text-[16px] leading-[1.25] font-normal tracking-normal text-brand-primary-foreground lg:text-[18px]">
                  {point.title}
                </h4>

                <p className="mt-1 max-w-[370px] text-[13px] leading-[1.3] font-light text-brand-primary-foreground/90 lg:text-[14px]">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative aspect-square overflow-hidden rounded-[20px] lg:aspect-auto lg:min-h-[420px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1280px) 520px, (min-width: 1024px) 45vw, 90vw"
          className="object-cover object-center"
        />
      </div>
    </article>
  );
}
