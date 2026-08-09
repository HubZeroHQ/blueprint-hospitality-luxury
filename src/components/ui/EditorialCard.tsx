import Link from "next/link";

import { Figure } from "@/components/ui/Figure";
import type { ImageAsset } from "@/content/types";
import { cn } from "@/utils/cn";

interface EditorialCardProps {
  href: string;
  image: ImageAsset;
  eyebrow?: string;
  title: string;
  summary?: string;
  /** A short factual line — a rate, a season, a duration. Never a sentence. */
  meta?: string;
  ratio?: "wide" | "landscape" | "portrait" | "tall" | "square";
  tone?: "ink" | "inverse";
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * The one card used across the site — hotels, destinations, suites, kitchens,
 * experiences, journal articles.
 *
 * A single card component is what makes six index pages read as one system
 * rather than six designs. Hover is expressed as a rule drawing itself under
 * the title and a slight settling of the image, in keeping with Luxury's
 * interaction language: understated, and never a scale or colour inversion.
 */
export function EditorialCard({
  href,
  image,
  eyebrow,
  title,
  summary,
  meta,
  ratio = "landscape",
  tone = "ink",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  className,
}: EditorialCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block focus-visible:outline-offset-8",
        className
      )}
    >
      <Figure
        image={image}
        ratio={ratio}
        sizes={sizes}
        priority={priority}
        imageClassName="transition-opacity duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:opacity-90"
      />

      <div className="pt-7">
        {eyebrow ? (
          <p
            className={cn(
              "eyebrow mb-4",
              tone === "ink" ? "text-mist" : "text-paper/55"
            )}
          >
            {eyebrow}
          </p>
        ) : null}

        <h3
          className={cn(
            "display display-sm",
            tone === "ink" ? "text-ink" : "text-paper"
          )}
        >
          <span className="relative inline">
            {title}
            <span
              aria-hidden
              className={cn(
                "absolute -bottom-1 left-0 h-px w-0 transition-[width] duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:w-full",
                tone === "ink" ? "bg-ink" : "bg-paper"
              )}
            />
          </span>
        </h3>

        {summary ? (
          <p
            className={cn(
              "mt-4 max-w-[46ch] text-[0.9375rem] font-light leading-relaxed",
              tone === "ink" ? "text-ink-muted" : "text-paper/70"
            )}
          >
            {summary}
          </p>
        ) : null}

        {meta ? (
          <p
            className={cn(
              "mt-5 text-[0.8125rem] font-light",
              tone === "ink" ? "text-mist" : "text-paper/55"
            )}
          >
            {meta}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
