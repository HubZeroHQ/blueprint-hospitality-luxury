import { cn } from "@/utils/cn";

interface Spec {
  label: string;
  value: string;
}

interface SpecListProps {
  items: Spec[];
  tone?: "ink" | "inverse";
  /** `columns` lays the pairs out across the page; `stacked` keeps one column. */
  layout?: "stacked" | "columns";
  className?: string;
}

/**
 * Label-and-value pairs — rates, capacities, arrival times, dimensions.
 *
 * Hospitality lives on this kind of information and hiding it is one of the
 * common mistakes the architecture guidance names. A description list is the
 * correct element for it, and hairlines rather than boxes keep it quiet.
 */
export function SpecList({
  items,
  tone = "ink",
  layout = "stacked",
  className,
}: SpecListProps) {
  const line = tone === "ink" ? "border-line" : "border-line-inverse";

  return (
    <dl
      className={cn(
        layout === "columns"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10"
          : "",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col gap-1.5 border-t py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8",
            layout === "columns" && "sm:flex-col sm:justify-start sm:gap-2",
            line
          )}
        >
          <dt
            className={cn(
              "eyebrow",
              tone === "ink" ? "text-mist" : "text-paper/55"
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "text-[0.9375rem] font-light",
              layout === "stacked" && "sm:text-right",
              tone === "ink" ? "text-ink" : "text-paper"
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
