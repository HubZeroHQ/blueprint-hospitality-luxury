import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { restaurantCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { restaurants } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Dining", href: "/dining" },
];

export const metadata = createMetadata({
  title: "Dining",
  description:
    "Eight kitchens across six houses — from a five-course room under a hayloft at Verane to one long table and no choice at all at Aubris.",
  canonical: "/dining",
  keywords: [
    "hotel restaurants",
    "fine dining",
    "tasting menu",
    "restaurant reservations",
  ],
});

export default function DiningPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Dining"
        title="Eight kitchens, none of them interchangeable"
        standfirst="There is no group menu and no culinary blueprint. Our culinary director oversees eight kitchens without writing a single menu, which he describes as the entire job."
        image={{
          src: "/images/hotels/maison-aubris-dining-table.webp",
          alt: "Vines under a night sky at Maison Aubris, the courtyard lit beyond.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="The kitchens"
            title="Where you will eat"
            standfirst="Residents may reserve at the time of booking a stay. Table d'Aubris and Nour serve house guests only; Le Batelier and Limonaia take no bookings at all."
            className="mb-16"
          />

          <CollectionGrid
            priorityFirst
            columns={2}
            items={restaurants.map(restaurantCard)}
          />
        </Container>
      </Section>

      <EnquiryBand
        title="Eating with us without staying?"
        body="Cimaise, Marena and Fyr keep tables for guests who are not staying in the house. They open thirty days ahead, or fourteen at Lindhavn, and go quickly."
      />
    </Page>
  );
}
