import { EditorialCard } from "@/components/ui/EditorialCard";
import { Reveal } from "@/components/shared/Reveal";
import type { ImageAsset } from "@/content/types";
import { cn } from "@/utils/cn";

export interface CollectionItem {
  key: string;
  href: string;
  image: ImageAsset;
  eyebrow?: string;
  title: string;
  summary?: string;
  meta?: string;
}

interface CollectionGridProps {
  items: CollectionItem[];
  columns?: 2 | 3;
  ratio?: "wide" | "landscape" | "portrait" | "tall" | "square";
  tone?: "ink" | "inverse";
  /** Rendered when `items` is empty — a filtered list must never render nothing. */
  emptyState?: string;
  priorityFirst?: boolean;
  className?: string;
}

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
} as const;

const columnSizes = {
  2: "(min-width: 640px) 50vw, 100vw",
  3: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
} as const;

/**
 * Every index page on the site renders through this grid, which is what keeps
 * six listings reading as one system. Gaps are generous — spacing is the
 * Luxury language's primary separator, in place of borders and boxes.
 */
export function CollectionGrid({
  items,
  columns = 3,
  ratio = "landscape",
  tone = "ink",
  emptyState = "Nothing here at the moment.",
  priorityFirst = false,
  className,
}: CollectionGridProps) {
  if (items.length === 0) {
    return (
      <p
        className={cn(
          "lede border-t pt-8",
          tone === "ink" ? "border-line text-mist" : "border-line-inverse text-paper/60",
          className
        )}
      >
        {emptyState}
      </p>
    );
  }

  return (
    <Reveal>
      <ul
        className={cn(
          "grid grid-cols-1 gap-x-10 gap-y-16 md:gap-y-20",
          columnClasses[columns],
          className
        )}
      >
        {items.map((item, index) => (
          <li key={item.key}>
            <EditorialCard
              href={item.href}
              image={item.image}
              eyebrow={item.eyebrow}
              title={item.title}
              summary={item.summary}
              meta={item.meta}
              ratio={ratio}
              tone={tone}
              sizes={columnSizes[columns]}
              priority={priorityFirst && index === 0}
            />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
