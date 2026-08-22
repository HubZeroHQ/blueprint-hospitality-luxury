import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecList } from "@/components/ui/SpecList";
import { Eyebrow } from "@/components/ui/Type";
import { hotels } from "@/content";
import { site } from "@/config/site";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";
import { formatCurrency } from "@/utils/format";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Reservations", href: "/reservations" },
];

export const metadata = createMetadata({
  title: "Reservations",
  description:
    "How to reserve a stay at Montreval: what a rate includes, minimum stays, cancellation terms, and the telephone number and address our own team answers.",
  canonical: "/reservations",
  keywords: [
    "hotel reservations",
    "how to book",
    "cancellation policy",
    "hotel rates",
    "minimum stay",
  ],
});

const included = [
  "Breakfast, every morning, unhurried and without a time limit.",
  "All applicable taxes. The number we quote is the number you pay.",
  "Use of the baths, saunas, steam rooms and pools at the four houses with a Sérène.",
  "Transfers at Sabaia and Tamerin, because there is no sensible alternative.",
  "Cellar Hours at Maison Aubris, every evening at six.",
  "Outer layers, boots and drying at Lindhavn, in your size.",
];

const notIncluded = [
  "Dinner, wine and anything from the cellar.",
  "Spa treatments, though use of the baths is not charged.",
  "Experiences, unless the experience page says otherwise.",
  "Transfers at the other four houses, charged at cost rather than marked up.",
];

export default function ReservationsPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Reservations"
        title="How to reserve a stay"
        standfirst="Reservations are taken by our own team rather than an agency. We ask three questions before quoting: which house, roughly when, and how long you can stay. The third changes the answer more than people expect."
        image={{
          src: "/images/pages/reservations.webp",
          alt: "Lake Verane before sunrise, the far shore still in shadow.",
        }}
        crumbs={crumbs}
        priority
      />

      {/*
        The honest-demonstration notice sits first, above the rates, because a
        visitor deciding whether to enquire deserves to know before they read
        anything else. See `.hubzero/principles.md`.
      */}
      <Section space="compact" className="bg-ink text-paper">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl border-l border-line-inverse pl-6 md:pl-10">
              <Eyebrow tone="inverse" className="mb-4">
                Before you write to us
              </Eyebrow>
              <p className="text-[1.0625rem] font-light leading-relaxed text-paper/75">
                This website is a HubZero Blueprint demonstration and {site.name}{" "}
                is a fictional company. There is no booking engine behind these
                pages and no reservation would reach anyone. The telephone number
                and address below open your own applications rather than
                collecting anything — nothing here is stored, sent or received.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Rates"
            title="What a night costs at each house"
            standfirst="Per night, for two guests, including breakfast and every applicable tax. Rates fall on the fourth night and again on the seventh."
            className="mb-14"
          />

          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <caption className="sr-only">
                  Nightly rates and minimum stays across the six Montreval houses
                </caption>
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="eyebrow py-4 pr-6 text-mist">
                      House
                    </th>
                    <th scope="col" className="eyebrow py-4 pr-6 text-mist">
                      Season
                    </th>
                    <th scope="col" className="eyebrow py-4 pr-6 text-mist">
                      Minimum stay
                    </th>
                    <th scope="col" className="eyebrow py-4 text-right text-mist">
                      From
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hotels.map((hotel) => {
                    const minimum =
                      hotel.slug === "montreval-tamerin"
                        ? "Four nights"
                        : hotel.slug === "montreval-sabaia"
                          ? "Three nights"
                          : hotel.slug === "maison-aubris"
                            ? "Two nights"
                            : "One night";

                    const season =
                      hotel.slug === "montreval-sabaia"
                        ? "September to mid-June"
                        : "All year";

                    return (
                      <tr key={hotel.slug} className="border-b border-line">
                        <th scope="row" className="py-5 pr-6 font-normal">
                          <span className="display display-sm text-ink">
                            {hotel.name}
                          </span>
                        </th>
                        <td className="py-5 pr-6 text-[0.9375rem] font-light text-ink-muted">
                          {season}
                        </td>
                        <td className="py-5 pr-6 text-[0.9375rem] font-light text-ink-muted">
                          {minimum}
                        </td>
                        <td className="py-5 text-right text-[0.9375rem] font-light text-ink">
                          {formatCurrency(hotel.rateFrom)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <SectionHeading
                eyebrow="Included"
                title="What the rate covers"
                size="sm"
              />
              <ul className="mt-10 space-y-4">
                {included.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line pt-4 text-[0.9375rem] font-light leading-relaxed text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <SectionHeading
                eyebrow="Charged separately"
                title="What it does not"
                size="sm"
              />
              <ul className="mt-10 space-y-4">
                {notIncluded.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line pt-4 text-[0.9375rem] font-light leading-relaxed text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <Reveal>
              <SectionHeading
                eyebrow="Terms"
                title="Cancellation, plainly"
                size="sm"
              />
              <SpecList
                className="mt-10"
                items={[
                  { label: "More than 14 days before", value: "No charge" },
                  { label: "Within 14 days", value: "First night charged" },
                  { label: "Within 48 hours", value: "Half the stay charged" },
                  { label: "Exclusive use", value: "Separate written terms" },
                ]}
              />
              <p className="mt-8 max-w-[52ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                If your travel is disrupted by something genuinely outside your
                control, speak to us. These terms exist to make planning
                possible, not to be enforced against someone whose flight was
                cancelled.
              </p>
            </Reveal>

            <Reveal>
              <SectionHeading
                eyebrow="Reach us"
                title="Who answers"
                size="sm"
              />

              <div className="mt-10 space-y-8">
                <div className="border-t border-line pt-6">
                  <Eyebrow className="mb-3">By telephone</Eyebrow>
                  <p className="text-[1.0625rem] font-light">
                    <a
                      href={`tel:${site.contact.reservations.phoneHref}`}
                      className="underline decoration-stone underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:decoration-ink"
                    >
                      {site.contact.reservations.phone}
                    </a>
                  </p>
                  <p className="mt-2 text-[0.875rem] font-light text-mist">
                    {site.contact.reservations.hours}
                  </p>
                </div>

                <div className="border-t border-line pt-6">
                  <Eyebrow className="mb-3">In writing</Eyebrow>
                  <p className="text-[1.0625rem] font-light">
                    <a
                      href={`mailto:${site.contact.reservations.email}`}
                      className="underline decoration-stone underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:decoration-ink"
                    >
                      {site.contact.reservations.email}
                    </a>
                  </p>
                  <p className="mt-2 text-[0.875rem] font-light text-mist">
                    Answered within one working day, by a person.
                  </p>
                </div>

                <Button href="/faqs" variant="outline">
                  Questions we are asked often
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
