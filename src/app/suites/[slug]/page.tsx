import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { stayCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecList } from "@/components/ui/SpecList";
import { Eyebrow } from "@/components/ui/Type";
import { getHotel, getStay, getStaysByHotel, stays } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";
import { formatCurrency, formatRateFrom } from "@/utils/format";

interface StayPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return stays.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({ params }: StayPageProps) {
  const { slug } = await params;
  const stay = getStay(slug);

  if (!stay) {
    return createMetadata({ title: "Room not found" });
  }

  const hotel = getHotel(stay.hotelSlug);

  return createMetadata({
    title: `${stay.name}, ${hotel?.name ?? "Montreval"}`,
    description: stay.summary,
    canonical: `/suites/${stay.slug}`,
    keywords: [stay.name, stay.category, hotel?.name ?? "", "room rates"],
  });
}

export default async function StayPage({ params }: StayPageProps) {
  const { slug } = await params;
  const stay = getStay(slug);

  if (!stay) {
    notFound();
  }

  const hotel = getHotel(stay.hotelSlug);

  if (!hotel) {
    notFound();
  }

  const siblings = getStaysByHotel(hotel.slug).filter(
    (item) => item.slug !== stay.slug
  );

  const crumbs = [
    { label: "Montreval", href: "/" },
    { label: "Suites & villas", href: "/suites" },
    { label: stay.name, href: `/suites/${stay.slug}` },
  ];

  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow={`${hotel.name} — ${stay.category}`}
        title={stay.name}
        standfirst={stay.summary}
        image={stay.image}
        crumbs={crumbs}
        priority
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/reservations" tone="inverse">
            Enquire about this room
          </Button>
          <p className="text-[0.9375rem] font-light text-paper/70">
            {formatRateFrom(stay.rateFrom)} a night, including breakfast
          </p>
        </div>
      </PageHero>

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <Reveal>
              <Prose blocks={stay.body} />

              <div className="mt-14">
                <Eyebrow className="mb-6">What is in it</Eyebrow>
                <ul className="space-y-4">
                  {stay.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-t border-line pt-4 text-[0.9375rem] font-light text-ink-muted"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
                <Eyebrow className="mb-6">The room</Eyebrow>
                <SpecList
                  items={[
                    { label: "Category", value: stay.category },
                    { label: "Size", value: `${stay.size} m²` },
                    { label: "Sleeps", value: `${stay.sleeps}` },
                    { label: "Bed", value: stay.bed },
                    { label: "Outlook", value: stay.view },
                    {
                      label: "Rate from",
                      value: `${formatCurrency(stay.rateFrom)} a night`,
                    },
                  ]}
                />

                <div className="mt-12 border-t border-line pt-6">
                  <Eyebrow className="mb-4">The house</Eyebrow>
                  <p className="text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                    {hotel.summary}
                  </p>
                  <Button
                    href={`/hotels/${hotel.slug}`}
                    variant="quiet"
                    className="mt-6"
                  >
                    {hotel.name}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Also at this house"
            title={`Other rooms at ${hotel.name}`}
            action={
              <Button href="/suites" variant="quiet">
                Every room in the collection
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            columns={2}
            emptyState={`${stay.name} is the only category at ${hotel.name}.`}
            items={siblings.map(stayCard)}
          />
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
