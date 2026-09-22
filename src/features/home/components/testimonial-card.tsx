import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import type { Testimonial } from "../types";

type TestimonialCardProps = Testimonial & { active?: boolean };

export function TestimonialCard({ name, location, quote, rating, active = false }: TestimonialCardProps) {
  return (
    <article
      aria-current={active ? "true" : undefined}
      className={cn(
        "flex h-full flex-col rounded-[22px] p-7 transition-colors duration-500 sm:p-8",
        active ? "bg-[#DB6650] text-white" : "bg-[#FAF6F0] text-brand-secondary",
      )}
    >
      <header className="flex items-center gap-4">
        <span
          aria-hidden
          className={cn(
            "grid size-12 shrink-0 place-items-center rounded-full text-xl font-medium transition-colors duration-500",
            active ? "bg-brand-secondary text-white" : "bg-brand-primary text-white",
          )}
        >
          {name.charAt(0)}
        </span>
        <div>
          <h3 className="text-xl font-medium text-current sm:text-2xl">{name}</h3>
          <p className={cn("text-xs", active ? "text-white/85" : "text-brand-secondary/80")}>{location}</p>
        </div>
      </header>

      <p
        className={cn(
          "mt-5 flex-1 text-[13px] leading-relaxed",
          active ? "text-white/90" : "text-brand-secondary/85",
        )}
      >
        {quote}
      </p>

      <div className="mt-6 flex gap-1.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={cn(
              "size-[18px]",
              i < rating ? "fill-[#FFD400] text-[#FFD400]" : "fill-transparent text-current/30",
            )}
          />
        ))}
      </div>
    </article>
  );
}
