import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Figure } from "@/components/ui/Figure";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Type";
import { awards, milestones, positioning, press, story, team } from "@/content";
import { site } from "@/config/site";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "About", href: "/about" },
];

export const metadata = createMetadata({
  title: "About",
  description:
    "Montreval began in 1998 with a dairy farm that had stopped being a dairy farm. Six houses later, it is still privately held, with no outside investment and no management contracts.",
  canonical: "/about",
  keywords: [
    "about",
    "hotel group",
    "family owned hotels",
    "hotel company history",
  ],
});

export default function AboutPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="About"
        title="Six houses, and no plans for a seventh"
        standfirst={positioning.statement}
        image={{
          src: "/images/destinations/aubris-editorial.webp",
          alt: "The Verane Valley in flat daylight, the lake pale beneath worked forest.",
        }}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <Reveal>
              <Prose blocks={story} />
            </Reveal>

            <Reveal>
              <Figure
                image={{
                  src: "/images/destinations/verane-editorial.webp",
                  alt: "Vine rows on the Aubris Downs under a low evening sky.",
                }}
                ratio="tall"
                sizes="(min-width: 1024px) 40vw, 100vw"
                caption="Maison Aubris, the western slope, late September."
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="What we hold to"
            title="Three decisions we have never revisited"
            className="mb-16"
          />

          <Reveal>
            <ul className="grid gap-x-14 gap-y-12 md:grid-cols-3">
              {positioning.pillars.map((pillar) => (
                <li key={pillar.title} className="border-t border-line pt-7">
                  <h3 className="display display-sm text-ink">{pillar.title}</h3>
                  <p className="mt-4 text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Since 1998"
            title="How the collection arrived"
            className="mb-14"
          />

          <Reveal>
            <ol className="space-y-0">
              {milestones.map((milestone) => (
                <li
                  key={milestone.year}
                  className="grid gap-3 border-t border-line py-7 sm:grid-cols-[7rem_1fr] sm:gap-10"
                >
                  <p className="eyebrow text-mist sm:pt-1.5">{milestone.year}</p>
                  <div>
                    <h3 className="display display-sm text-ink">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                      {milestone.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Who we are"
            title="The people who decide things"
            standfirst="Six people run the group. Everyone else runs a house, which is the more consequential job."
            className="mb-16"
          />

          <Reveal>
            <ul className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <li key={member.name} className="border-t border-line pt-7">
                  <h3 className="display display-sm text-ink">{member.name}</h3>
                  <p className="eyebrow mt-3 text-mist">
                    {member.role} — {member.based}
                  </p>
                  <p className="mt-5 text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                    {member.biography}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <SectionHeading eyebrow="Recognition" title="Awards" size="sm" />
              <ul className="mt-10">
                {awards.map((award) => (
                  <li
                    key={`${award.title}-${award.year}`}
                    className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-line py-5"
                  >
                    <div>
                      <p className="text-[0.9375rem] font-light text-ink">
                        {award.title}
                      </p>
                      <p className="text-[0.875rem] font-light text-mist">
                        {award.awarder}
                      </p>
                    </div>
                    <p className="eyebrow text-mist">{award.year}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <SectionHeading eyebrow="Written about" title="Press" size="sm" />
              <ul className="mt-10 space-y-8">
                {press.map((mention) => (
                  <li
                    key={mention.publication}
                    className="border-t border-line pt-6"
                  >
                    <blockquote>
                      <p className="display display-sm text-ink">
                        “{mention.quote}”
                      </p>
                    </blockquote>
                    <p className="eyebrow mt-4 text-mist">
                      {mention.publication}, {mention.year}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/*
        HubZero attribution. Required in the footer, here, and in the README —
        unobtrusive, but plain enough that nobody could mistake this company
        for a real one. See `.hubzero/experience/branding.md`.
      */}
      <Section space="spacious" className="bg-ink text-paper">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow tone="inverse" className="mb-8">
              About this website
            </Eyebrow>

            <h2 className="display display-md text-paper">
              {site.name} does not exist
            </h2>

            <div className="mt-8 space-y-5 text-[1.0625rem] font-light leading-relaxed text-paper/70">
              <p>
                This site is a HubZero Blueprint — a reference implementation of
                the Hospitality architecture in the Luxury design language. Every
                house, person, rate, award, guest letter and telephone number on
                it was written for the demonstration. None of it is real, and
                none of it is adapted from any real company, person or place.
              </p>
              <p>
                There is no booking engine and no server behind these pages.
                Every enquiry route on the site opens your own telephone or
                email application rather than collecting anything, because a form
                that quietly discards what it is given would be the one dishonest
                thing on an otherwise honest website.
              </p>
              <p>
                <a
                  href={site.attribution.href}
                  rel="noreferrer"
                  className="underline decoration-paper/30 underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:decoration-paper"
                >
                  HubZero
                </a>{" "}
                builds blueprints like this one as production-ready foundations
                for real businesses.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
