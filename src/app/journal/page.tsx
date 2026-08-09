import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { articleCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getJournalArticles } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Journal", href: "/journal" },
];

export const metadata = createMetadata({
  title: "Journal",
  description:
    "Notes from the six houses — how a bed gets made, what nine weeks of lemon are for, why our average stay of 3.4 nights is the thing we would most like to change.",
  canonical: "/journal",
  keywords: [
    "hotel journal",
    "travel writing",
    "hospitality notes",
    "slow travel",
  ],
});

export default function JournalPage() {
  const articles = getJournalArticles();

  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Journal"
        title="Notes from the houses"
        standfirst="Written by the people who run them, about the things they actually spend their days on: linen, water, bread, light, and the occasional decision we have reversed twice."
        image={{
          src: "/images/destinations/aubris-editorial.webp",
          alt: "Vine rows and a restored press house on the Aubris Downs beneath a low September sky.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow={`${articles.length} entries`}
            title="Everything we have published"
            className="mb-16"
          />

          <CollectionGrid
            priorityFirst
            items={articles.map(articleCard)}
          />
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
