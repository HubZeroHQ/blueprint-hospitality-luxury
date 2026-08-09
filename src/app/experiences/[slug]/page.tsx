import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { experienceCard } from "@/components/sections/cards";
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
import { experiences, getExperience, getHotel } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";
import { formatCurrency } from "@/utils/format";

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperience(slug);

  if (!experience) {
    return createMetadata({ title: "Experience not found" });
  }

  return createMetadata({
    title: experience.name,
    description: experience.summary,
    canonical: `/experiences/${experience.slug}`,
    keywords: [experience.name, "hotel experience", "things to do"],
  });
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperience(slug);

  if (!experience) {
    notFound();
  }

  const hotel = getHotel(experience.hotelSlug);

  if (!hotel) {
    notFound();
  }

  const elsewhere = experiences
    .filter((item) => item.slug !== experience.slug)
    .slice(0, 3);

  const crumbs = [
    { label: "Montreval", href: "/" },
    { label: "Experiences", href: "/experiences" },
    { label: experience.name, href: `/experiences/${experience.slug}` },
  ];

  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow={hotel.name}
        title={experience.name}
        standfirst={experience.standfirst}
        image={experience.image}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <Reveal>
              <Prose blocks={experience.body} />
            </Reveal>

            <Reveal>
              <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
                <Eyebrow className="mb-6">In short</Eyebrow>
                <SpecList
                  items={[
                    { label: "Duration", value: experience.duration },
                    { label: "Season", value: experience.season },
                    { label: "Group", value: experience.groupSize },
                    {
                      label: "Price",
                      value:
                        experience.price === null
                          ? "Included in every stay"
                          : `${formatCurrency(experience.price)} a person`,
                    },
                  ]}
                />

                <div className="mt-12 border-t border-line pt-6">
                  <Eyebrow className="mb-5">What is included</Eyebrow>
                  <ul className="space-y-3">
                    {experience.includes.map((item) => (
                      <li
                        key={item}
                        className="relative pl-6 text-[0.9375rem] font-light leading-relaxed text-ink-muted"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[0.85em] block h-px w-2.5 bg-stone"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/reservations" className="mt-10">
                  Enquire about this
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Elsewhere"
            title="Other experiences"
            action={
              <Button href="/experiences" variant="quiet">
                All eight
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            items={elsewhere.map(experienceCard)}
          />
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
