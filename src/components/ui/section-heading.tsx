import { cn } from "@/lib/utils";
import type { WithClassName } from "@/types";

type SectionHeadingProps = WithClassName<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-widest text-brand-primary uppercase">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-brand-tertiary">{description}</p>}
    </div>
  );
}
