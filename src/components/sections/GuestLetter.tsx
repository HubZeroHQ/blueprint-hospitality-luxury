import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Type";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { getHotel } from "@/content";
import type { Testimonial } from "@/content/types";

interface GuestLetterProps {
  testimonial: Testimonial;
  tone?: "ink" | "inverse";
}

/**
 * One guest letter, set large. Trust in hospitality comes from specificity —
 * a moved chair, a cold sea — so the quotes are presented one at a time
 * rather than as a wall of praise.
 */
export function GuestLetter({ testimonial, tone = "ink" }: GuestLetterProps) {
  const hotel = getHotel(testimonial.hotelSlug);
  const inverse = tone === "inverse";

  return (
    <Section
      space="spacious"
      className={inverse ? "bg-ink text-paper" : "bg-paper-warm"}
    >
      <Container>
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <Eyebrow tone={tone} className="mb-10">
              A guest letter
            </Eyebrow>

            <blockquote>
              <p
                className={`display display-md ${inverse ? "text-paper" : "text-ink"}`}
              >
                “{testimonial.quote}”
              </p>
            </blockquote>

            <figcaption
              className={`mt-10 space-y-1.5 text-[0.9375rem] font-light ${
                inverse ? "text-paper/60" : "text-mist"
              }`}
            >
              <p className={inverse ? "text-paper" : "text-ink"}>
                {testimonial.name}, {testimonial.origin}
              </p>
              <p>{testimonial.stay}</p>
              {hotel ? (
                <p>
                  <Link
                    href={`/hotels/${hotel.slug}`}
                    className={`underline underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] ${
                      inverse
                        ? "decoration-paper/30 hover:decoration-paper"
                        : "decoration-stone hover:decoration-ink"
                    }`}
                  >
                    {hotel.name}
                  </Link>
                </p>
              ) : null}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
