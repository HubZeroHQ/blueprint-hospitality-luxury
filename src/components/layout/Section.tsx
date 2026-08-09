import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

/**
 * Vertical rhythm is a Design Language decision, so it is expressed as named
 * options here rather than improvised per page. `default` is Blueprint Base's
 * original spacing; the others exist for languages — like Luxury — whose
 * spacing is deliberately more generous than a typical commercial interface.
 */
const spacing = {
  default: "py-16 md:py-24",
  compact: "py-12 md:py-16",
  spacious: "py-20 md:py-32",
  none: "",
} as const;

interface SectionProps extends HTMLAttributes<HTMLElement> {
  space?: keyof typeof spacing;
}

export function Section({
  space = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacing[space], className)} {...props}>
      {children}
    </section>
  );
}
