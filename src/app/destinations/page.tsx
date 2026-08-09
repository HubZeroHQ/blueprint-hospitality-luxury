import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { destinationCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { destinations } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Destinations", href: "/destinations" },
];

export const metadata = createMetadata({
  title: "Destinations",
  description:
    "Six places Montreval has built in — an alpine lake, a limestone coast, vineyard downland, high desert, an atoll and a northern fjord — and the months we think you should see them.",
  canonical: "/destinations",
  keywords: [
    "hotel destinations",
    "where to stay",
    "best time to visit",
    "luxury travel destinations",
  ],
});

export default function DestinationsPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Destinations"
        title="Six places, and when to see them"
        standfirst="Each house was bought because of where it stands. These are the six places, described as honestly as we can manage — including the months we would rather you did not come."
        image={{
          src: "/images/destinations/aubris-editorial.webp",
          alt: "First light along the limestone cliffs of the Calanera coast.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <CollectionGrid
            ratio="portrait"
            priorityFirst
            items={destinations.map(destinationCard)}
          />
        </Container>
      </Section>

      <EnquiryBand
        title="Not sure which of the six?"
        body="Tell our reservations team what you want from the week rather than which country you fancy, and let them answer. It is the question they are best at."
      />
    </Page>
  );
}
