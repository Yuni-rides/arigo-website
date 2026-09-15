import Image from "next/image";

import { Button } from "@/components/ui";

import type { CoreValue } from "../types";

/** Static card face. Stacking/scroll behaviour lives in value-card-stack.tsx. */
export function ValueCard({ title, highlight, description, image, cta }: CoreValue) {
  return (
    <article className="grid gap-8 rounded-[28px] bg-brand-secondary p-7 text-white sm:p-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:p-12">
      <div>
        <h3 className="text-3xl font-medium text-white sm:text-4xl">
          {title && <>{title} </>}
          <span className="text-brand-primary">{highlight}</span>
        </h3>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">{description}</p>
        <Button href={cta.href} className="mt-10 rounded-lg px-8">
          {cta.label}
        </Button>
      </div>

      <div className="relative aspect-[551/498] overflow-hidden rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
