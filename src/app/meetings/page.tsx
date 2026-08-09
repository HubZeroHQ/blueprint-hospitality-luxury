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
import { meetings, meetingsIntro } from "@/content";
import { site } from "@/config/site";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Meetings & gatherings", href: "/meetings" },
];

export const metadata = createMetadata({
  title: "Meetings & gatherings",
  description:
    "No ballrooms. Rooms that seat between fourteen and sixty at one table, priced per person per day, full board, with the afternoons deliberately left empty.",
  canonical: "/meetings",
  keywords: [
    "offsite venue",
    "board meeting venue",
    "corporate retreat",
    "private dining",
    "meeting rooms",
  ],
});

export default function MeetingsPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Meetings & gatherings"
        title="One room, one table, four days"
        standfirst="Our view, formed by watching a great many of these, is that the useful part of an offsite happens in the gaps. So we hold mornings for work and keep the afternoons genuinely empty."
        image={{
          src: "/images/pages/montreval-verane-hayloft-meeting.webp",
          alt: "The Hayloft at Montreval Verane set for a working session beside the lake.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Prose blocks={meetingsIntro} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Three formats"
            title="How groups use the houses"
            className="mb-16"
          />

          <OfferingList offerings={meetings} />
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Rooms"
            title="What a room here actually is"
            standfirst="No partition walls, no syndicate rooms, and no delegate rate. Every one of these is a room the house also uses for something else."
            className="mb-14"
          />

          <VenueList />
        </Container>
      </Section>

      <EnquiryBand
        eyebrow="Gatherings"
        title="Tell us what the group is for"
        body={`Write to ${site.contact.meetings.email} with the number of people, the season and what the days need to achieve. We will answer with a number rather than a brochure.`}
      />
    </Page>
  );
}
