import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Type";
import { hotels } from "@/content";
import { site } from "@/config/site";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Contact", href: "/contact" },
];

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Who to write to at Montreval — reservations, celebrations, gatherings, press and careers — and the address of each of the six houses.",
  canonical: "/contact",
  keywords: ["contact", "hotel reservations", "press office", "addresses"],
});

const desks = [
  {
    ...site.contact.reservations,
    note: "Stays, rates, transfers and anything to do with arriving.",
  },
  {
    ...site.contact.celebrations,
    note: "Weddings, anniversaries and taking a house exclusively.",
  },
  {
    ...site.contact.meetings,
    note: "Working weeks, board days and long low-season commissions.",
  },
  {
    ...site.contact.press,
    note: "Images, interviews and anything for publication.",
  },
  {
    ...site.contact.careers,
    note: "We hire year-round and keep people between houses through closures.",
  },
];

export default function ContactPage() {
  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Contact"
        title="Who to write to"
        standfirst="Five addresses and one telephone number, all of them answered by people who work here. Nothing routes through an agency or a call centre."
        image={{
          src: "/images/pages/contact.svg",
          alt: "Daylight on the northern shore of Lindhavn fjord.",
        }}
        crumbs={crumbs}
        priority
      />

      {/* Honest about what these links do — they open your own applications. */}
      <Section space="compact" className="bg-ink text-paper">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl border-l border-line-inverse pl-6 md:pl-10">
              <Eyebrow tone="inverse" className="mb-4">
                About this page
              </Eyebrow>
              <p className="text-[1.0625rem] font-light leading-relaxed text-paper/75">
                {site.name} is a fictional company and this site is a HubZero
                Blueprint demonstration. There is no contact form here because
                there is no server to receive one; every address below opens
                your own email application, and nothing you write is collected
                or sent anywhere unless you choose to send it.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <Reveal>
              <SectionHeading eyebrow="Desks" title="By subject" size="sm" />

              <ul className="mt-10">
                {desks.map((desk) => (
                  <li key={desk.email} className="border-t border-line py-6">
                    <Eyebrow className="mb-3">{desk.label}</Eyebrow>
                    <p className="text-[1.0625rem] font-light">
                      <a
                        href={`mailto:${desk.email}`}
                        className="underline decoration-stone underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:decoration-ink"
                      >
                        {desk.email}
                      </a>
                    </p>
                    <p className="mt-2 max-w-[46ch] text-[0.9375rem] font-light leading-relaxed text-mist">
                      {desk.note}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <SectionHeading eyebrow="By telephone" title="One number" size="sm" />

              <div className="mt-10 border-t border-line pt-6">
                <p className="display display-md text-ink">
                  <a
                    href={`tel:${site.contact.reservations.phoneHref}`}
                    className="underline decoration-stone underline-offset-[0.3em] transition-colors duration-[var(--duration-fast)] hover:decoration-ink"
                  >
                    {site.contact.reservations.phone}
                  </a>
                </p>
                <p className="mt-4 text-[0.9375rem] font-light text-mist">
                  {site.contact.reservations.hours}
                </p>
                <p className="mt-6 max-w-[48ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                  Every house is reached on this number. Reservations are held
                  centrally so that a guest is never passed between six switchboards
                  to change a date.
                </p>
              </div>

              <div className="mt-12 border-t border-line pt-6">
                <Eyebrow className="mb-4">Registered office</Eyebrow>
                <address className="space-y-1 text-[0.9375rem] font-light not-italic leading-relaxed text-ink-muted">
                  <span className="block">{site.legalName}</span>
                  <span className="block">{site.address.street}</span>
                  <span className="block">
                    {site.address.locality} {site.address.postalCode}
                  </span>
                </address>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="The houses"
            title="Where each one is"
            standfirst="Post reaches the houses directly. Reservations do not — those come to the number above."
            className="mb-14"
          />

          <Reveal>
            <ul className="grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {hotels.map((hotel) => (
                <li key={hotel.slug} className="border-t border-line pt-6">
                  <h3 className="display display-sm text-ink">{hotel.name}</h3>
                  <address className="mt-4 space-y-1 text-[0.9375rem] font-light not-italic leading-relaxed text-ink-muted">
                    {hotel.address.slice(1).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>
    </Page>
  );
}
