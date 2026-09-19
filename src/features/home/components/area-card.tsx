import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { ServiceArea } from "../types";

/**
 * State card. Default: orange card, white map, white text.
 * Hover: white card, navy map with a blue offset shadow, navy text, filled arrow.
 * Map + icon are CSS masks so their colour is driven by classes, not extra image files.
 */
export function AreaCard({ state, cities, href, map }: ServiceArea) {
  const mapMask = { maskImage: `url(${map.src})`, WebkitMaskImage: `url(${map.src})` };
  const iconMask = { maskImage: "url(/images/ArigoIcon.png)", WebkitMaskImage: "url(/images/ArigoIcon.png)" };

  return (
    <Link
      href={href}
      className="group relative flex items-center gap-4 rounded-2xl border border-white/70 bg-transparent py-6 pr-6 pl-4 text-white transition-[background-color,color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-brand-secondary hover:shadow-[0_20px_40px_-16px_rgb(0_0_0/0.45)] sm:gap-6 sm:pl-6"
    >
      {/* Map (pokes slightly outside the card on the left, as in Figma) */}
      <div className="relative -ml-8 aspect-square w-[92px] shrink-0 sm:-ml-10 sm:w-[104px]">
        <div
          aria-hidden
          style={mapMask}
          className="absolute inset-0 -translate-x-1 -translate-y-1 bg-[#2E6BB5] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div
          aria-hidden
          style={mapMask}
          className="absolute inset-0 bg-white [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] transition-colors duration-300 group-hover:bg-brand-secondary"
        />
        <div
          aria-hidden
          style={iconMask}
          className="absolute top-1/2 left-1/2 size-7 -translate-x-1/2 -translate-y-1/2 bg-brand-secondary [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] transition-colors duration-300 group-hover:bg-white"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-medium text-current sm:text-2xl">{state}</h3>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5 text-[11px] text-current/85">
          {cities.map((city, i) => (
            <li key={`${city}-${i}`} className="flex items-center gap-1.5">
              <span aria-hidden className="size-0.5 rounded-full bg-current" />
              {city}
            </li>
          ))}
        </ul>
      </div>

      <span
        aria-hidden
        className="absolute right-4 bottom-4 grid size-7 place-items-center rounded-md border border-current transition-colors duration-300 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white"
      >
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}
