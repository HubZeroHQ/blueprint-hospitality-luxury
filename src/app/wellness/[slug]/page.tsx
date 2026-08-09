import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { spaCard } from "@/components/sections/cards";
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
import { getHotel, getSpa, spas } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";
import { formatCurrency, formatMinutes } from "@/utils/format";

interface SpaPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return spas.map((spa) => ({ slug: spa.slug }));
}

export async function generateMetadata({ params }: SpaPageProps) {
  const { slug } = await params;
  const spa = getSpa(slug);

  if (!spa) {
    return createMetadata({ title: "Spa not found" });
  }

  return createMetadata({
    title: spa.name,
    description: spa.summary,
    canonical: `/wellness/${spa.slug}`,
    keywords: [spa.name, "spa", "sauna", "treatments", "thermal bath"],
  });
}

export default async function SpaPage({ params }: SpaPageProps) {
  const { slug } = await params;
  const spa = getSpa(slug);

  if (!spa) {
    notFound();
  }

  const hotel = getHotel(spa.hotelSlug);

  if (!hotel) {
    notFound();
  }

  const elsewhere = spas.filter((item) => item.slug !== spa.slug);

  const crumbs = [
    { label: "Montreval", href: "/" },
    { label: "Wellness", href: "/wellness" },
    { label: spa.name, href: `/wellness/${spa.slug}` },
  ];

  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow={hotel.name}
        title={spa.name}
        standfirst={spa.standfirst}
        image={spa.image}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <Reveal>
              <Prose blocks={spa.body} />
            </Reveal>

            <Reveal>
              <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
                <Eyebrow className="mb-6">What is here</Eyebrow>
                <ul className="space-y-4">
                  {spa.facilities.map((facility) => (
                    <li
                      key={facility}
                      className="border-t border-line pt-4 text-[0.9375rem] font-light text-ink-muted"
                    >
                      {facility}
                    </li>
                  ))}
                </ul>

                <div className="mt-12 border-t border-line pt-6">
                  <Eyebrow className="mb-3">Open</Eyebrow>
                  <p className="text-[0.9375rem] font-light text-ink-muted">
                    {spa.hours}
                  </p>
                  <p className="mt-4 text-[0.875rem] font-light text-mist">
                    Use of the baths, saunas and pools is included in every stay.
                    Treatments are charged.
                  </p>
                </div>

                <Button
                  href={`/hotels/${hotel.slug}`}
                  variant="quiet"
                  className="mt-8"
                >
                  {hotel.name}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Treatments"
            title="The short list"
            standfirst="Four rather than nineteen. A long menu is usually a way of avoiding the harder work of knowing what to recommend."
            className="mb-14"
          />

          <Reveal>
            <ul className="grid gap-x-14 gap-y-10 md:grid-cols-2">
              {spa.treatments.map((treatment) => (
                <li key={treatment.name} className="border-t border-line pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="display display-sm text-ink">
                      {treatment.name}
                    </h3>
                    <p className="eyebrow text-mist">
                      {formatMinutes(treatment.minutes)}
                      <span className="mx-2 text-stone">/</span>
                      {treatment.price === 0
                        ? "No charge"
                        : formatCurrency(treatment.price)}
                    </p>
                  </div>
                  <p className="mt-4 max-w-[52ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                    {treatment.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Elsewhere"
            title="Sérène at the other houses"
            action={
              <Button href="/wellness" variant="quiet">
                All four
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            emptyState="This is the only Sérène in the collection at present."
            items={elsewhere.map(spaCard)}
          />
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
