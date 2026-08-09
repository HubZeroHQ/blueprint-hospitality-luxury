import type { ElementType, ReactNode } from "react";

import { cn } from "@/utils/cn";

/**
 * The typographic primitives the whole site is set in.
 *
 * Keeping them here means the display face, the eyebrow tracking and the lede
 * measure are decided once. A section that needs a different rhythm changes a
 * prop; it never reaches for a one-off font size.
 */

interface EyebrowProps {
  children: ReactNode;
  tone?: "ink" | "inverse";
  className?: string;
  as?: ElementType;
}

/** Small tracked capitals. The only place capitals appear in the design. */
export function Eyebrow({
  children,
  tone = "ink",
  className,
  as: Component = "p",
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "eyebrow",
        tone === "ink" ? "text-mist" : "text-paper/60",
        className
      )}
    >
      {children}
    </Component>
  );
}

interface DisplayProps {
  children: ReactNode;
  size?: "xl" | "lg" | "md" | "sm";
  as?: ElementType;
  className?: string;
}

/** The display serif, at one of four sizes. Nothing else uses it. */
export function Display({
  children,
  size = "lg",
  as: Component = "h2",
  className,
}: DisplayProps) {
  return (
    <Component className={cn("display", `display-${size}`, className)}>
      {children}
    </Component>
  );
}

interface LedeProps {
  children: ReactNode;
  className?: string;
}

/** A standfirst. Wider than body copy, lighter, and never more than four lines. */
export function Lede({ children, className }: LedeProps) {
  return <p className={cn("lede max-w-[46ch]", className)}>{children}</p>;
}

interface RuleProps {
  tone?: "ink" | "inverse";
  className?: string;
}

/** The single divider used across the site. */
export function Rule({ tone = "ink", className }: RuleProps) {
  return (
    <hr className={cn("rule", tone === "inverse" && "rule-inverse", className)} />
  );
}
