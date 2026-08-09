import Image from "next/image";

import { site } from "@/config/site";
import { cn } from "@/utils/cn";

interface WordmarkProps {
  tone?: "ink" | "inverse";
  /** `full` is the wordmark; `mark` is the monogram for compact contexts. */
  variant?: "full" | "mark";
  className?: string;
  priority?: boolean;
}

const dimensions = {
  full: { width: 168, height: 28 },
  mark: { width: 28, height: 28 },
} as const;

/**
 * The brand mark, resolved from configuration rather than a hardcoded path,
 * so re-branding the blueprint means replacing files and `site.assets` — not
 * editing components. See `.hubzero/experience/branding.md`.
 */
export function Wordmark({
  tone = "ink",
  variant = "full",
  className,
  priority = false,
}: WordmarkProps) {
  const { width, height } = dimensions[variant];

  const src =
    variant === "mark"
      ? tone === "ink"
        ? site.assets.mark
        : site.assets.markLight
      : tone === "ink"
        ? site.assets.logo
        : site.assets.logoLight;

  return (
    <Image
      src={src}
      alt={site.name}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
    />
  );
}
