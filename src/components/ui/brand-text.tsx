import { Fragment } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandTextProps = { text: string; className?: string };

/** Renders text, swapping every `{brand}` token for the accent-coloured brand name. */
export function BrandText({ text, className }: BrandTextProps) {
  const parts = text.split("{brand}");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className={cn("font-semibold text-brand-primary", className)}>{siteConfig.name}</span>
          )}
        </Fragment>
      ))}
    </>
  );
}
