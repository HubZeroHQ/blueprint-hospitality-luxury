import Image from "next/image";
import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { Display, Eyebrow } from "@/components/ui/Type";
import type { ImageAsset } from "@/content/types";
import { cn } from "@/utils/cn";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  standfirst?: string;
  image?: ImageAsset;
  crumbs?: Crumb[];
  /** Rendered beneath the standfirst — rates, capacities, a call to action. */
  children?: ReactNode;
  size?: "full" | "tall" | "short";
  priority?: boolean;
}

const heights = {
  /** The homepage only. */
  full: "min-h-[86svh]",
  /** Index and detail pages that carry an image. */
  tall: "min-h-[68svh] md:min-h-[74svh]",
  /** Pages without an image — questions, legal, contact. */
  short: "min-h-[42svh] md:min-h-[46svh]",
} as const;

/**
 * Every page opens on ink.
 *
 * That is a design decision with an engineering consequence: because the
 * surface behind the floating navigation is the same on every route, the
 * navigation's appearance can be derived from scroll position alone rather
 * than from whether some hero happens to be in view. Independent state,
 * composed — see `.hubzero/principles.md`.
 */
export function PageHero({
  eyebrow,
  title,
  standfirst,
  image,
  crumbs,
  children,
  size = "tall",
  priority = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex flex-col justify-end overflow-hidden bg-ink pb-14 pt-[calc(var(--header-height)+4rem)] md:pb-20",
        heights[size]
      )}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            loading={priority ? "eager" : undefined}
            sizes="100vw"
            className="-z-10 object-cover"
          />
          {/*
            Two overlays rather than one: a vertical gradient that keeps the
            text legible at the foot, and a flat wash that holds contrast on
            unusually pale images. Both are ink, never black.
          */}
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/10"
          />
          <span aria-hidden className="absolute inset-0 -z-10 bg-ink/15" />
        </>
      ) : null}

      <Container>
        <div className="max-w-3xl">
          {crumbs && crumbs.length > 0 ? (
            <Breadcrumbs items={crumbs} className="mb-10" />
          ) : null}

          {eyebrow ? (
            <Eyebrow tone="inverse" className="mb-6">
              {eyebrow}
            </Eyebrow>
          ) : null}

          <Display as="h1" size={size === "full" ? "xl" : "lg"} className="text-paper">
            {title}
          </Display>

          {standfirst ? (
            <p className="lede mt-7 max-w-[52ch] text-paper/75">
              {standfirst}
            </p>
          ) : null}

          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
