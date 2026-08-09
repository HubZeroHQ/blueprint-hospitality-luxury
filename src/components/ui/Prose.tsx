import type { ContentBlock } from "@/content/types";
import { cn } from "@/utils/cn";

interface ProseProps {
  blocks: ContentBlock[];
  tone?: "ink" | "inverse";
  className?: string;
}

/**
 * One renderer for every piece of long-form copy on the site — journal
 * articles, hotel descriptions, legal pages, the About story. Formatting is
 * decided in `.prose-montreval`, so an article and a privacy policy are set
 * identically and cannot drift.
 */
export function Prose({ blocks, tone = "ink", className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose-montreval",
        tone === "ink" ? "text-ink-muted" : "text-paper/75",
        className
      )}
    >
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className={tone === "ink" ? "text-ink" : "text-paper"}
              >
                {block.text}
              </h2>
            );

          case "subheading":
            return (
              <h3
                key={index}
                className={tone === "ink" ? "text-mist" : "text-paper/60"}
              >
                {block.text}
              </h3>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className={cn(
                  "my-12 border-l pl-6 md:pl-8",
                  tone === "ink" ? "border-stone" : "border-paper/25"
                )}
              >
                <p
                  className={cn(
                    "display display-sm",
                    tone === "ink" ? "text-ink" : "text-paper"
                  )}
                >
                  {block.text}
                </p>
                {block.attribution ? (
                  <footer
                    className={cn(
                      "eyebrow mt-5",
                      tone === "ink" ? "text-mist" : "text-paper/55"
                    )}
                  >
                    {block.attribution}
                  </footer>
                ) : null}
              </blockquote>
            );

          case "list":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );

          default:
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}
