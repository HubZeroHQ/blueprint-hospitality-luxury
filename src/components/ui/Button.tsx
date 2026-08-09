import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

/**
 * The blueprint's only button.
 *
 * Luxury's interaction language asks for feedback that is immediate and
 * understated: a shift in tone, never a scale transform or a colour
 * inversion. Every variant below changes surface tone only, over
 * `--duration-fast`, and every one carries the same 2px corner.
 *
 * `tone="inverse"` is the same button on an ink surface rather than a second
 * set of variants, so the two can never drift apart.
 */
const button = cva(
  [
    "inline-flex items-center justify-center gap-3 text-center",
    "border border-transparent",
    "rounded-[var(--radius-md)]",
    "text-[0.6875rem] uppercase tracking-[0.2em] font-normal leading-none",
    "transition-[background-color,border-color,text-decoration-color]",
    "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  ],
  {
    variants: {
      variant: {
        /* Comfortable touch targets on handheld; `quiet` is inline text. */
        solid: "min-h-11",
        outline: "min-h-11",
        quiet: "border-0 underline underline-offset-[0.5em] decoration-1",
      },
      tone: {
        ink: "",
        inverse: "",
      },
      size: {
        md: "px-7 py-4",
        sm: "px-5 py-3 text-[0.625rem]",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        tone: "ink",
        class: "bg-ink text-paper hover:bg-ink-soft",
      },
      {
        variant: "solid",
        tone: "inverse",
        class: "bg-paper text-ink hover:bg-stone",
      },
      {
        variant: "outline",
        tone: "ink",
        class: "border-line text-ink hover:border-ink/40 hover:bg-ink/[0.04]",
      },
      {
        variant: "outline",
        tone: "inverse",
        class:
          "border-line-inverse text-paper hover:border-paper/45 hover:bg-paper/[0.07]",
      },
      {
        variant: "quiet",
        tone: "ink",
        class: "text-ink decoration-stone hover:decoration-ink",
      },
      {
        variant: "quiet",
        tone: "inverse",
        class: "text-paper decoration-paper/40 hover:decoration-paper",
      },
      /* `quiet` is a line of text, not a box: it never carries padding. */
      { variant: "quiet", size: "md", class: "px-0 py-0" },
      { variant: "quiet", size: "sm", class: "px-0 py-0" },
    ],
    defaultVariants: {
      variant: "solid",
      tone: "ink",
      size: "md",
    },
  }
);

type SharedAttributes = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>,
  "color" | "href" | "type" | "children" | "className"
>;

export interface ButtonProps
  extends VariantProps<typeof button>,
    SharedAttributes {
  /** Renders an anchor. Internal paths route through `next/link`. */
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: ReactNode;
}

export function Button({
  variant,
  tone,
  size,
  href,
  type,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(button({ variant, tone, size }), className);

  if (href === undefined) {
    return (
      <button type={type ?? "button"} className={classes} {...rest}>
        {children}
      </button>
    );
  }

  // `mailto:`, `tel:` and absolute URLs bypass the router.
  const isRouted = href.startsWith("/") || href.startsWith("#");

  if (!isRouted) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
