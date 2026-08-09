import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { experienceCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Experiences", href: "/experiences" },
];

export const metadata = createMetadata({
  title: "Experiences",
  description:
    "Eight experiences across the six houses, led by the forester, the boatman, the winemaker and the marine team — not by an activity desk.",
  canonical: "/experiences",
  keywords: [
    "hotel experiences",
    "guided walks",
    "wine tasting",
    "snorkelling",
    "things to do",
  ],
});

export default function ExperiencesPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Experiences"
        title="Led by the people who work here"
        standfirst="Nothing on this page was invented for a brochure. Each of these is something somebody at the house was going to do that morning anyway, with room for you in the boat."
        image={{
          src: "/images/hotels/montreval-sabaia-fire-circle.webp",
          alt: "Dawn over the Sabaia sands, the escarpment still in shadow.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="All eight"
            title="What you can join"
            standfirst="Prices are per person. Where an experience is included in the stay, it says so rather than quietly appearing on the bill."
            className="mb-16"
          />

          <CollectionGrid
            priorityFirst
            items={experiences.map(experienceCard)}
          />
        </Container>
      </Section>

      <EnquiryBand
        title="Something not on this list?"
        body="Ask. Most of what is on this page began as a guest asking a member of staff whether they could come along, which is still the best way to arrange anything here."
      />
    </Page>
  );
}
