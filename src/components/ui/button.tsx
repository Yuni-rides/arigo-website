import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-button font-medium whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-brand-primary-foreground shadow-sm hover:bg-brand-primary-hover active:bg-brand-primary-active",
        secondary: "bg-brand-secondary text-brand-secondary-foreground hover:bg-brand-secondary-hover",
        outline:
          "border border-brand-secondary/20 bg-transparent text-brand-secondary hover:border-brand-secondary hover:bg-brand-secondary-soft",
        ghost: "bg-transparent text-brand-secondary hover:bg-brand-secondary-soft",
        link: "h-auto p-0 text-brand-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps & { href: string; external?: boolean };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Brand button. Renders a Next Link when `href` is supplied, otherwise a native button.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, ...props },
  ref,
) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, external, children } = props;
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button ref={ref} type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
});

export { buttonVariants };
