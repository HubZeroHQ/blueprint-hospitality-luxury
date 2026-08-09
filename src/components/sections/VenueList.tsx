import { Eyebrow } from "@/components/ui/Type";
import { Reveal } from "@/components/shared/Reveal";
import { getHotel, venues } from "@/content";

interface VenueListProps {
  /** Standing capacity matters for a celebration and not for a board day. */
  showStanding?: boolean;
  /** The features list is useful on the celebrations page and noise on meetings. */
  showFeatures?: boolean;
}

/** The rooms a gathering can actually happen in, shared by both pages. */
export function VenueList({
  showStanding = false,
  showFeatures = false,
}: VenueListProps) {
  return (
    <Reveal>
      <ul className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {venues.map((venue) => {
          const hotel = getHotel(venue.hotelSlug);

          return (
            <li key={venue.slug} className="border-t border-line pt-6">
              <Eyebrow className="mb-4">{hotel?.name}</Eyebrow>
              <h3 className="display display-sm text-ink">{venue.name}</h3>
              <p className="mt-4 text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                {venue.summary}
              </p>

              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[0.875rem] font-light text-mist">
                <div className="flex gap-2">
                  <dt>Seated</dt>
                  <dd className="text-ink">{venue.capacitySeated}</dd>
                </div>
                {showStanding ? (
                  <div className="flex gap-2">
                    <dt>Standing</dt>
                    <dd className="text-ink">{venue.capacityStanding}</dd>
                  </div>
                ) : null}
                <div className="flex gap-2">
                  <dt>Area</dt>
                  <dd className="text-ink">{venue.area} m²</dd>
                </div>
              </dl>

              {showFeatures ? (
                <ul className="mt-6 space-y-2">
                  {venue.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative pl-6 text-[0.875rem] font-light leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.8em] block h-px w-2.5 bg-stone"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
