import Image from "next/image";

import type { ImageAsset } from "@/content/types";
import { cn } from "@/utils/cn";

const ratios = {
  /** Full-bleed heroes and wide editorial plates. */
  wide: "aspect-[16/9]",
  /** The collection's default landscape crop. */
  landscape: "aspect-[4/3]",
  /** Mobile storytelling and standing figures. */
  portrait: "aspect-[3/4]",
  /** Taller still — used where a single image carries a whole section. */
  tall: "aspect-[2/3]",
  square: "aspect-square",
  /** Fills whatever the parent gives it, for full-height compositions. */
  fill: "h-full",
} as const;

interface FigureProps {
  image: ImageAsset;
  ratio?: keyof typeof ratios;
  /** Passed to `next/image`; set on the first image of a page only. */
  priority?: boolean;
  sizes?: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
}

/**
 * Every image on the site goes through here, so the frame — a hairline, a 2px
 * corner, a consistent crop — is decided once. Luxury's border language asks
 * for a frame that is barely there, and its photography language asks for
 * intentional crops rather than whatever aspect the source happens to be.
 */
export function Figure({
  image,
  ratio = "landscape",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  caption,
  className,
  imageClassName,
}: FigureProps) {
  const frame = (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-md)] bg-paper-warm",
        ratios[ratio],
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : undefined}
        className={cn("object-cover", imageClassName)}
      />
      {/* A hairline drawn inside the frame rather than a border on it, so the
          image is never inset by a pixel and the corner stays exact. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-md)] ring-1 ring-inset ring-ink/[0.07]"
      />
    </div>
  );

  if (!caption) {
    return frame;
  }

  return (
    <figure className="space-y-4">
      {frame}
      <figcaption className="text-sm font-light text-mist">{caption}</figcaption>
    </figure>
  );
}
