import type { ElementType } from "react";

import { cn } from "@/lib/utils";
import type { WithChildren, WithClassName } from "@/types";

type ContainerProps = WithChildren<WithClassName<{ as?: ElementType; size?: "content" | "narrow" }>>;

/** Centred, gutter-padded layout wrapper. */
export function Container({ as: Tag = "div", size = "content", className, children }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "page-gutter mx-auto w-full",
        size === "content" ? "max-w-content" : "max-w-prose-narrow",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
