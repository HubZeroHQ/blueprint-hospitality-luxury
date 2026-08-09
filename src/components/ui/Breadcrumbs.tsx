import Link from "next/link";

import { cn } from "@/utils/cn";

export interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  tone?: "ink" | "inverse";
  className?: string;
}

/**
 * Trail navigation for detail pages. The same `items` array is handed to
 * `breadcrumbJsonLd`, so the structured data and what a visitor can see are
 * always the same trail.
 */
export function Breadcrumbs({
  items,
  tone = "inverse",
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-3">
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    "eyebrow",
                    tone === "ink" ? "text-ink" : "text-paper"
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className={cn(
                      "eyebrow transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                      tone === "ink"
                        ? "text-mist hover:text-ink"
                        : "text-paper/55 hover:text-paper"
                    )}
                  >
                    {item.label}
                  </Link>
                  <span
                    aria-hidden
                    className={cn(
                      "block h-px w-4",
                      tone === "ink" ? "bg-stone" : "bg-paper/30"
                    )}
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
