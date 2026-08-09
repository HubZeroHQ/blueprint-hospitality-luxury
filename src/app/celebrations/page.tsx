import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { OfferingList } from "@/components/sections/OfferingList";
import { Reveal } from "@/components/shared/Reveal";
import { VenueList } from "@/components/sections/VenueList";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { celebrations, celebrationsIntro } from "@/content";
import { site } from "@/config/site";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Weddings & celebrations", href: "/celebrations" },
];

export const metadata = createMetadata({
  title: "Weddings & celebrations",
  description:
    "About forty weddings a year across six houses — roughly seven each, deliberately. Thirty guests at one table, or the whole house taken exclusively.",
  canonical: "/celebrations",
  keywords: [
    "hotel weddings",
    "small wedding venue",
    "exclusive use",
    "anniversary",
    "celebration venue",
  ],
});

export default function CelebrationsPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Weddings & celebrations"
        title="Seven weddings a house, a year"
        standfirst="A house that hosts a wedding every Saturday is a venue with rooms attached, which is a different business from ours. There is no events team; you will deal with the director of the house from the first conversation to the last."
        image={{
          src: "/images/pages/montreval-calanera-celebration-terrace.webp",
          alt: "A long wedding table beneath the vine pergola on Calanera's Second Terrace at blue hour.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Prose blocks={celebrationsIntro} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Three ways"
            title="How celebrations are held here"
            className="mb-16"
          />

          <OfferingList offerings={celebrations} />
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Rooms"
            title="Where a celebration actually happens"
            standfirst="Capacities are the number of people who can sit down and hear each other, not the number who can physically be fitted in."
            className="mb-14"
          />

          <VenueList showStanding showFeatures />
        </Container>
      </Section>

      <EnquiryBand
        eyebrow="Celebrations"
        title="Start with a conversation, not a brochure"
        body={`Write to ${site.contact.celebrations.email} with roughly when, roughly how many, and which house you are drawn to. The director of that house will answer.`}
      />
    </Page>
  );
}
