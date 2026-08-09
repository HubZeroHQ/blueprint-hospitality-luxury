import { Reveal } from "@/components/shared/Reveal";
import { SpecList } from "@/components/ui/SpecList";
import type { Offering } from "@/content/types";

interface OfferingListProps {
  offerings: Offering[];
}

/**
 * The three ways a celebration is held, and the three ways a group uses a
 * house. Both pages present the same shape — a name, a standfirst, a couple
 * of paragraphs and a specification — so they share one component.
 */
export function OfferingList({ offerings }: OfferingListProps) {
  return (
    <Reveal>
      <ul className="space-y-16">
        {offerings.map((offering) => (
          <li key={offering.slug} className="border-t border-line pt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
              <div>
                <h3 className="display display-md text-ink">{offering.name}</h3>
                <p className="lede mt-5 text-ink-muted">{offering.summary}</p>
              </div>

              <div>
                {offering.detail.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-5 max-w-[60ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted"
                  >
                    {paragraph}
                  </p>
                ))}

                <SpecList items={offering.meta} layout="columns" className="mt-8" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
