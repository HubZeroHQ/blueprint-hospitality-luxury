import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { spaCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hotels, spas } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Wellness", href: "/wellness" },
];

export const metadata = createMetadata({
  title: "Wellness",
  description:
    "Sérène, Montreval's bathhouse, in four of the six houses — a spring-fed thermal bath, a wood-fired hammam, two rooms over a lagoon, and a cold plunge into an open fjord.",
  canonical: "/wellness",
  keywords: ["hotel spa", "thermal bath", "hammam", "sauna", "spa treatments"],
});

export default function WellnessPage() {
  const withoutSerene = hotels.filter(
    (hotel) => !spas.some((spa) => spa.hotelSlug === hotel.slug)
  );

  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Wellness"
        title="Sérène, in four of the six"
        standfirst="Four treatments per house rather than nineteen, and a number our director of Sérène defends annually. Use of the baths, saunas and pools is included in every stay at the four houses that have one."
        image={{
          src: "/images/hotels/montreval-lindhavn-bathhouse.webp",
          alt: "First light over still fjord water at Lindhavn.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="The four"
            title="Where Sérène is"
            className="mb-16"
          />

          <CollectionGrid
            columns={2}
            priorityFirst
            items={spas.map(spaCard)}
          />
        </Container>
      </Section>

      {/*
        Naming the two houses without a spa is the point of this section.
        Implying a facility that is not there is the failure this page exists
        to avoid.
      */}
      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="And the two that are not"
                title="Calanera and Aubris have treatment rooms, not a Sérène"
                size="sm"
              />

              <p className="lede mt-8 text-ink-muted">
                Two rooms and a therapist is not a spa, and calling it one would
                be the kind of thing we would rather a guest did not discover on
                arrival.
              </p>

              <ul className="mt-12 space-y-6">
                {withoutSerene.map((hotel) => (
                  <li key={hotel.slug} className="border-t border-line pt-6">
                    <h3 className="display display-sm text-ink">{hotel.name}</h3>
                    <p className="mt-3 max-w-[56ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                      {hotel.slug === "montreval-calanera"
                        ? "Two treatment rooms and a steam cave cut into the rock behind the second terrace. Therapists visit from Verane through the summer."
                        : "Two treatment rooms above the old press, and a therapist three days a week. What Aubris has instead is a cellar, a bakehouse and eleven hectares to walk."}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      <EnquiryBand
        title="Booking a treatment"
        body="Treatments are reserved through the house rather than a central desk, because the therapist's diary lives where the therapist does. Ask us and we will pass it on the same day."
      />
    </Page>
  );
}
