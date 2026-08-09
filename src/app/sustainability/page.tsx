import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Type";
import {
  commitments,
  sustainabilityBody,
  sustainabilityIntro,
} from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Sustainability", href: "/sustainability" },
];

export const metadata = createMetadata({
  title: "Sustainability",
  description:
    "The figures across all six houses, published annually — including the two that are going the wrong way, and the target date we have had to move.",
  canonical: "/sustainability",
  keywords: [
    "sustainable hotels",
    "hotel emissions",
    "responsible travel",
    "local sourcing",
  ],
});

/** A word rather than a colour, so the trend does not rely on hue alone. */
const trendLabel = {
  improving: "Improving",
  holding: "Not improving",
  worsening: "Going the wrong way",
} as const;

export default function SustainabilityPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Sustainability"
        title="Including the figures that are not improving"
        standfirst="A hotel group that only reports the metrics it is winning is not reporting, it is advertising. All six houses were certified to Verdant Standard Level II in 2025."
        image={{
          src: "/images/hotels/montreval-tamerin-reef-deck.webp",
          alt: "Early light across the shallow flats of the Tamerin lagoon.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Prose blocks={sustainabilityIntro} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="The numbers"
            title="Where we are, honestly"
            standfirst="Measured across all six houses for the 2025 financial year, against a 2019 baseline where a baseline applies."
            className="mb-16"
          />

          <Reveal>
            <ul className="grid gap-x-14 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {commitments.map((commitment) => (
                <li key={commitment.title} className="border-t border-line pt-7">
                  <p className="display display-lg text-ink">
                    {commitment.figure}
                  </p>
                  <p className="mt-3 text-[0.9375rem] font-light text-mist">
                    {commitment.figureLabel}
                  </p>

                  <h3 className="mt-8 text-[0.9375rem] font-normal text-ink">
                    {commitment.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                    {commitment.body}
                  </p>

                  <p className="eyebrow mt-6 text-mist">
                    {trendLabel[commitment.trend]}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <div className="mx-auto max-w-[42rem]">
            <Reveal>
              <Eyebrow className="mb-8">In practice</Eyebrow>
              <Prose blocks={sustainabilityBody} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <EnquiryBand
        eyebrow="Sustainability"
        title="Questions about any of these figures?"
        body="Our director of sustainability answers them herself, including the awkward ones. Ask reservations to pass a message on and she will reply."
      />
    </Page>
  );
}
