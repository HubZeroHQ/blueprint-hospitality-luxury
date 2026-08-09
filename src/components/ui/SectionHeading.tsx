import type { ReactNode } from "react";

import { Display, Eyebrow } from "@/components/ui/Type";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  standfirst?: string;
  /** A single link, set to the right on desktop and beneath on handheld. */
  action?: ReactNode;
  tone?: "ink" | "inverse";
  size?: "lg" | "md" | "sm";
  as?: "h2" | "h3";
  className?: string;
}

/**
 * The opening of every section. Holding it in one component is what keeps the
 * vertical rhythm identical from the homepage to a spa detail page.
 */
export function SectionHeading({
  eyebrow,
  title,
  standfirst,
  action,
  tone = "ink",
  size = "md",
  as = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16",
        className
      )}
    >
      <div className="max-w-2xl">
        {eyebrow ? (
          <Eyebrow tone={tone} className="mb-6">
            {eyebrow}
          </Eyebrow>
        ) : null}

        <Display
          as={as}
          size={size}
          className={tone === "ink" ? "text-ink" : "text-paper"}
        >
          {title}
        </Display>

        {standfirst ? (
          <p
            className={cn(
              "lede mt-6 max-w-[52ch]",
              tone === "ink" ? "text-ink-muted" : "text-paper/70"
            )}
          >
            {standfirst}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0 md:pb-2">{action}</div> : null}
    </div>
  );
}
