import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { stayCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getHotel, hotels, stays } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Suites & villas", href: "/suites" },
];

export const metadata = createMetadata({
  title: "Suites & villas",
  description:
    "Every room, suite, tented suite and villa across the six houses, with sizes in square metres, occupancy and nightly rates published in full.",
  canonical: "/suites",
  keywords: [
    "hotel suites",
    "luxury villas",
    "hotel rooms",
    "room rates",
    "overwater villas",
  ],
});

export default function SuitesPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Suites & villas"
        title="Twelve ways to sleep"
        standfirst="Rates are per night for two, including breakfast and every applicable tax. Sizes are in square metres, measured inside the walls rather than generously."
        image={{
          src: "/images/hotels/montreval-verane-larch-room.webp",
          alt: "Timber villas standing over the shallows of the Tamerin lagoon at dusk.",
        }}
        crumbs={crumbs}
        priority
      />

      {/*
        Grouped by house rather than listed flat: a guest chooses the place
        first and the room second, and the page should follow that order.
      */}
      {hotels.map((hotel, index) => {
        const rooms = stays.filter((stay) => stay.hotelSlug === hotel.slug);
        const house = getHotel(hotel.slug);

        return (
          <Section
            key={hotel.slug}
            space="spacious"
            className={index % 2 === 1 ? "bg-paper-warm" : undefined}
          >
            <Container>
              <SectionHeading
                eyebrow={hotel.location}
                title={hotel.name}
                standfirst={house?.standfirst}
                className="mb-16"
              />

              <CollectionGrid
                columns={2}
                emptyState="Rooms at this house are being reworked and will be published shortly."
                items={rooms.map(stayCard)}
              />
            </Container>
          </Section>
        );
      })}

      <EnquiryBand
        title="Which room would we choose?"
        body="We will tell you, honestly, including when the cheaper one is the better one. It happens more often than you would expect."
      />
    </Page>
  );
}
