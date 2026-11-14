import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui";

import type { ServiceArea } from "../types";

/** Photo crop from the design - inline so a missing utility class can never collapse it. */
const PHOTO_CROP = { aspectRatio: "314 / 172" };

/**
 * State card (Figma):
 *  - city photo at the top of the card
 *  - a white panel with rounded top corners pulled up over the photo
 *  - a navy name plate sitting on the panel's top edge, flush with the card's left
 *  - served cities in three columns, each pin inside a soft peach circle
 */
export function AreaCard({ state, cities, href, photo, ctaLabel }: ServiceArea & { ctaLabel: string }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] bg-white text-brand-secondary shadow-[0_18px_40px_-18px_rgb(21_29_50/0.45)]">
      <div className="relative w-full shrink-0" style={PHOTO_CROP}>
        <Image
          src={photo.src}
          alt={`${state} skyline`}
          fill
          sizes="(min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />

        {/* Name plate: its bottom slides under the white panel, so only the top shows */}
        <div className="absolute bottom-0 left-0 rounded-t-[24px] bg-brand-secondary pt-[18px] pr-14 pb-[42px] pl-10">
          <h3 className="text-[26px] leading-none font-medium text-white sm:text-[38px]">{state}</h3>
        </div>
      </div>

      {/* White panel rides up over the photo so its rounded top corners show the city behind them */}
      <div className="relative -mt-6 flex flex-1 flex-col rounded-t-[24px] bg-white px-5 pt-10 pb-6 sm:px-7">
        {/*
          The column count follows the card's own width, not the viewport: the cards go
          two-up partway through the range, so a breakpoint here would put three columns
          in a 276px card and clip names like "Federal Way". `auto-fit` lands on three
          columns at the design's width and drops to two, then one, as the card narrows.
        */}
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-x-3 gap-y-5 xl:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] xl:gap-y-6">
          {cities.map((city, i) => (
            <li key={`${city}-${i}`} className="flex items-center gap-2.5 text-[15px] xl:gap-3 xl:text-[18px]">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-primary-soft xl:size-10">
                <MapPin className="size-4 fill-brand-primary text-white xl:size-5" aria-hidden />
              </span>
              {city}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          {/* <Button href={href} variant="secondary" className="h-[68px] rounded-[16px] px-12 text-[18px]">
            {ctaLabel}
            <ArrowUpRight className="size-5" />
          </Button> */}
        </div>
      </div>
    </article>
  );
}
