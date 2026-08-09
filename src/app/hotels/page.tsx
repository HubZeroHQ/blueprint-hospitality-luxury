import Link from "next/link";

import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { hotelCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hotels } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";
import { formatCurrency } from "@/utils/format";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Hotels", href: "/hotels" },
];

export const metadata = createMetadata({
  title: "Hotels",
  description:
    "Six houses between twenty-two and forty-one rooms — Verane, Calanera, Aubris, Sabaia, Tamerin and Lindhavn — with rates, room counts and seasons published in full.",
  canonical: "/hotels",
  keywords: [
    "luxury hotels",
    "boutique hotels",
    "hotel collection",
    "hotel rates",
    "small hotels",
  ],
});

export default function HotelsPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="The houses"
        title="Six houses, owned outright"
        standfirst="No management contracts, no outside investment, and nobody in a head office deciding how a bed is turned down. Each house is run by someone who lives in the place it stands."
        image={{
          src: "/images/destinations/verane-editorial.webp",
          alt: "The Verane Valley at dusk, the lake holding the last of the light.",
        }}
        crumbs={crumbs}
        priority
      />

      {/* Rates in the open. Hidden pricing is the first mistake the
          architecture guidance names for this category. */}
      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="At a glance"
            title="What each house costs, and how big it is"
            standfirst="Rates are per night for two, including breakfast and every applicable tax. They fall on the fourth night and again on the seventh."
            className="mb-14"
          />

          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[42rem] border-collapse text-left">
                <caption className="sr-only">
                  Rooms, opening year and nightly rates across the six Montreval
                  houses
                </caption>
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="eyebrow py-4 pr-6 text-mist">
                      House
                    </th>
                    <th scope="col" className="eyebrow py-4 pr-6 text-mist">
                      Where
                    </th>
                    <th scope="col" className="eyebrow py-4 pr-6 text-mist">
                      Rooms
                    </th>
                    <th scope="col" className="eyebrow py-4 pr-6 text-mist">
                      Since
                    </th>
                    <th scope="col" className="eyebrow py-4 text-right text-mist">
                      From
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hotels.map((hotel) => (
                    <tr key={hotel.slug} className="border-b border-line">
                      <th scope="row" className="py-5 pr-6 font-normal">
                        <Link
                          href={`/hotels/${hotel.slug}`}
                          className="display display-sm text-ink underline decoration-transparent underline-offset-[0.35em] transition-[text-decoration-color] duration-[var(--duration-fast)] hover:decoration-ink"
                        >
                          {hotel.name}
                        </Link>
                      </th>
                      <td className="py-5 pr-6 text-[0.9375rem] font-light text-ink-muted">
                        {hotel.location}
                      </td>
                      <td className="py-5 pr-6 text-[0.9375rem] font-light text-ink-muted">
                        {hotel.keys}
                      </td>
                      <td className="py-5 pr-6 text-[0.9375rem] font-light text-ink-muted">
                        {hotel.opened}
                      </td>
                      <td className="py-5 text-right text-[0.9375rem] font-light text-ink">
                        {formatCurrency(hotel.rateFrom)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="In full"
            title="The six houses"
            className="mb-16"
          />

          <CollectionGrid
            columns={2}
            items={hotels.map(hotelCard)}
          />
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
