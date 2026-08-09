import { notFound } from "next/navigation";

import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { experienceCard, hotelCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Figure } from "@/components/ui/Figure";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecList } from "@/components/ui/SpecList";
import { Eyebrow } from "@/components/ui/Type";
import {
  destinations,
  getDestination,
  getExperiencesByHotel,
  getHotelsByDestination,
} from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";
import { destinationShareImage } from "@/seo/openGraph";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return createMetadata({ title: "Destination not found" });
  }

  return createMetadata({
    title: `${destination.name}, ${destination.region}`,
    description: destination.summary,
    image: destinationShareImage(destination.slug),
    canonical: `/destinations/${destination.slug}`,
    keywords: [
      destination.name,
      destination.region,
      "where to stay",
      "best time to visit",
    ],
  });
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  const houses = getHotelsByDestination(destination.slug);
  const experiences = houses.flatMap((hotel) => getExperiencesByHotel(hotel.slug));

  const crumbs = [
    { label: "Montreval", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: destination.name, href: `/destinations/${destination.slug}` },
  ];

  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow={destination.region}
        title={destination.name}
        standfirst={destination.standfirst}
        image={destination.image}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <Reveal>
              <Prose blocks={destination.body} />
            </Reveal>

            <Reveal>
              <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
                <Eyebrow className="mb-6">The place, in short</Eyebrow>
                <SpecList items={destination.facts} />

                <div className="mt-12 space-y-8">
                  <div className="border-t border-line pt-6">
                    <Eyebrow className="mb-3">When to come</Eyebrow>
                    <p className="text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                      {destination.bestMonths}
                    </p>
                  </div>

                  <div className="border-t border-line pt-6">
                    <Eyebrow className="mb-3">Getting there</Eyebrow>
                    <p className="text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                      {destination.gettingThere}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Where to stay"
            title={
              houses.length === 1
                ? "Our house here"
                : `Our houses in ${destination.name}`
            }
            className="mb-16"
          />

          <CollectionGrid
            columns={2}
            emptyState={`We have no house in ${destination.name} at present.`}
            items={houses.map(hotelCard)}
          />
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Experiences"
            title={`What people do in ${destination.name}`}
            className="mb-16"
          />

          <CollectionGrid
            emptyState={`Nothing is scheduled in ${destination.name} at the moment. Our reservations team can arrange something privately.`}
            items={experiences.map(experienceCard)}
          />
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <Reveal>
            <Figure
              image={destination.portrait}
              ratio="wide"
              sizes="100vw"
              caption={`${destination.name}, ${destination.region}.`}
            />
          </Reveal>
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
