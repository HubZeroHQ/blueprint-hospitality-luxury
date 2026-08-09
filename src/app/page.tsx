import Link from "next/link";
import type { CSSProperties } from "react";

import { Button } from "@/components/ui/Button";
import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { destinationCard, experienceCard, hotelCard, stayCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Figure } from "@/components/ui/Figure";
import { GuestLetter } from "@/components/sections/GuestLetter";
import { LightSequence } from "@/components/home/LightSequence";
import { Page } from "@/components/layout/Page";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Type";
import { collectionAside, introduction } from "@/content/home";
import {
  commitments,
  destinations,
  experiences,
  getJournalArticles,
  hotels,
  positioning,
  restaurants,
  spas,
  stays,
  testimonials,
} from "@/content";
import { createMetadata } from "@/seo/createMetadata";
import { formatDate } from "@/utils/format";

export const metadata = createMetadata({
  description:
    "Six privately held houses — in the Verane Valley, on the Calanera Coast, at Aubris, Sabaia, Tamerin and Lindhavn — kept small and staffed generously.",
  canonical: "/",
  keywords: [
    "luxury hotels",
    "small hotel collection",
    "hotel group",
    "boutique hotels",
    "hotel reservations",
  ],
});

export default function HomePage() {
  const journal = getJournalArticles().slice(0, 3);
  const featuredDestinations = destinations.slice(0, 3);
  const featuredStays = stays.filter((stay) =>
    ["lake-suite", "limonaia-suite", "lagoon-villa"].includes(stay.slug)
  );
  const featuredExperiences = experiences.filter((experience) =>
    ["the-dawn-crossing", "cellar-hours", "ice-and-steam"].includes(
      experience.slug
    )
  );

  return (
    <Page>
      <LightSequence />

      {/* Who the collection is, in the fewest words it can be said in. */}
      <Section space="spacious">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
            <Reveal>
              <Eyebrow className="mb-8">The collection</Eyebrow>
              <Prose blocks={introduction} className="max-w-[52ch]" />

              <ul className="mt-14 space-y-10">
                {positioning.pillars.map((pillar, pillarIndex) => (
                  <li
                    key={pillar.title}
                    data-reveal-step
                    style={{ "--reveal-step": pillarIndex } as CSSProperties}
                    className="border-t border-line pt-6"
                  >
                    <h2 className="display display-sm text-ink">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 max-w-[48ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                      {pillar.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="lg:pt-4">
              <Figure
                image={collectionAside.image}
                ratio="tall"
                caption={collectionAside.caption}
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Destinations"
            title="Six places, and when to see them"
            standfirst="We publish the months we think you should not come, which is the least a hotel can do for someone planning a year ahead."
            action={
              <Button href="/destinations" variant="quiet">
                All six destinations
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            ratio="portrait"
            items={featuredDestinations.map(destinationCard)}
          />
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="The houses"
            title="Signature hotels"
            standfirst="Between twenty-two and forty-one rooms each. All six are owned outright and run by someone who lives in the place they stand."
            action={
              <Button href="/hotels" variant="quiet">
                Compare the houses
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            items={hotels.map(hotelCard)}
          />
        </Container>
      </Section>

      <Section space="spacious" className="bg-ink text-paper">
        <Container>
          <SectionHeading
            tone="inverse"
            eyebrow="Suites & villas"
            title="Rooms we would choose ourselves"
            standfirst="Rates are per night for two, including breakfast and every tax, at every house. There is no second number later."
            action={
              <Button href="/suites" variant="quiet" tone="inverse">
                Every room and villa
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            tone="inverse"
            items={featuredStays.map(stayCard)}
          />
        </Container>
      </Section>

      {/* Table and bath: the two things guests write to us about most. */}
      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Figure
                image={restaurants[0].image}
                ratio="landscape"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <Eyebrow className="mt-9 mb-5">Dining</Eyebrow>
              <h2 className="display display-md text-ink">
                Eight kitchens, none of them interchangeable
              </h2>
              <p className="lede mt-6 text-ink-muted">
                A five-course room under a hayloft at Verane. One long table and
                no choice at all at Aubris. A menu at Lindhavn written at a
                quarter past eight each morning, after the boats land.
              </p>
              <Button href="/dining" variant="quiet" className="mt-8">
                {`All ${restaurants.length} kitchens`}
              </Button>
            </Reveal>

            <Reveal className="lg:pt-24">
              <Figure
                image={spas[3].image}
                ratio="landscape"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <Eyebrow className="mt-9 mb-5">Wellness</Eyebrow>
              <h2 className="display display-md text-ink">
                Sérène, in four of the six
              </h2>
              <p className="lede mt-6 text-ink-muted">
                A spring-fed bath cut into limestone. A hammam heated by wood. A
                cold plunge that is not a pool but a hole in a deck, opening
                into four hundred metres of fjord.
              </p>
              <Button href="/wellness" variant="quiet" className="mt-8">
                {`All ${spas.length} spas`}
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Experiences"
            title="Led by the people who work here"
            standfirst="Not an activity desk. The forester, the boatman, the winemaker and the marine team, doing on your morning what they were going to do anyway."
            action={
              <Button href="/experiences" variant="quiet">
                All experiences
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            items={featuredExperiences.map(experienceCard)}
          />
        </Container>
      </Section>

      <GuestLetter testimonial={testimonials[0]} />

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <Reveal>
              <Eyebrow className="mb-8">Sustainability</Eyebrow>
              <h2 className="display display-md text-ink">
                We publish the figures that are not improving
              </h2>
              <p className="lede mt-6 max-w-[46ch] text-ink-muted">
                A hotel group that only reports the metrics it is winning is not
                reporting, it is advertising.
              </p>

              <dl className="mt-12 grid grid-cols-2 gap-x-10 gap-y-10">
                {commitments.slice(0, 4).map((commitment) => (
                  <div key={commitment.title} className="border-t border-line pt-5">
                    <dt className="display display-sm text-ink">
                      {commitment.figure}
                    </dt>
                    <dd className="mt-2 text-[0.875rem] font-light leading-relaxed text-mist">
                      {commitment.figureLabel}
                    </dd>
                  </div>
                ))}
              </dl>

              <Button href="/sustainability" variant="quiet" className="mt-12">
                The full report
              </Button>
            </Reveal>

            <Reveal>
              <SectionHeading
                eyebrow="Journal"
                title="Notes from the houses"
                size="sm"
                className="mb-10"
              />

              <ul className="space-y-8">
                {journal.map((article) => (
                  <li key={article.slug} className="border-t border-line pt-6">
                    <Link href={`/journal/${article.slug}`} className="group block">
                      <p className="eyebrow mb-3 text-mist">
                        {article.category} — {formatDate(article.publishedAt)}
                      </p>
                      <h3 className="display display-sm text-ink transition-opacity duration-[var(--duration-fast)] group-hover:opacity-70">
                        {article.title}
                      </h3>
                      <p className="mt-3 max-w-[52ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                        {article.standfirst}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>

              <Button href="/journal" variant="quiet" className="mt-10">
                Every entry
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
