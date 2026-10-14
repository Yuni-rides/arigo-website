import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import type { CareSolution } from "../types";

const PHOTO_CROP = { aspectRatio: "380 / 305" };

export function CareSolutionCard({ title, description, features, accent, cta, image }: CareSolution) {
  return (
    <article className="flex h-full flex-col rounded-[14px] bg-white p-3.5 shadow-[0_16px_36px_-20px_rgb(21_29_50/0.4)]">
      <div className="relative w-full overflow-hidden rounded-[10px]" style={PHOTO_CROP}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 30vw, 90vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pt-6 pb-2">
        <h3
          className={cn(
            "text-[22px] leading-snug font-semibold",
            accent === "primary" ? "text-brand-primary" : "text-brand-secondary",
          )}
        >
          {title}
        </h3>

        <p className="mt-3 text-base leading-relaxed text-brand-secondary/85">{description}</p>

        <ul className="mt-6 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-snug text-brand-secondary/85">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#F3E8F5]">
                <Check className="size-3.5 text-brand-primary" strokeWidth={3} aria-hidden />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <Button
            href={cta.href}
            variant={accent === "primary" ? "primary" : "secondary"}
            className={cn(
              "h-14 w-[68%] rounded-[8px] text-sm",
              // The design uses a muted slate here, not the deep brand navy.
              accent === "secondary" && "bg-brand-slate hover:bg-brand-slate-hover",
            )}
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </article>
  );
}
