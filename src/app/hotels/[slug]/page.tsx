import { notFound } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { experienceCard, hotelCard, restaurantCard, stayCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Figure } from "@/components/ui/Figure";
import { GuestLetter } from "@/components/sections/GuestLetter";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecList } from "@/components/ui/SpecList";
import { Eyebrow } from "@/components/ui/Type";
import {
  getDestination,
  getExperiencesByHotel,
  getHotel,
  getOtherHotels,
  getRestaurantsByHotel,
  getSpaByHotel,
  getStaysByHotel,
  getTestimonialByHotel,
  hotels,
} from "@/content";
import { site } from "@/config/site";
import { breadcrumbJsonLd, hotelJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";
import { hotelShareImage } from "@/seo/openGraph";
import { formatRateFrom } from "@/utils/format";

interface HotelPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return hotels.map((hotel) => ({ slug: hotel.slug }));
}

export async function generateMetadata({ params }: HotelPageProps) {
  const { slug } = await params;
  const hotel = getHotel(slug);

  if (!hotel) {
    return createMetadata({ title: "House not found" });
  }

  return createMetadata({
    title: hotel.name,
    description: hotel.summary,
    image: hotelShareImage(hotel.slug),
    canonical: `/hotels/${hotel.slug}`,
    keywords: [hotel.name, hotel.location, "luxury hotel", "rooms", "rates"],
  });
}

export default async function HotelPage({ params }: HotelPageProps) {
  const { slug } = await params;
  const hotel = getHotel(slug);

  if (!hotel) {
    notFound();
  }

  const destination = getDestination(hotel.destinationSlug);
  const stays = getStaysByHotel(hotel.slug);
  const restaurants = getRestaurantsByHotel(hotel.slug);
  const spa = getSpaByHotel(hotel.slug);
  const experiences = getExperiencesByHotel(hotel.slug);
  const testimonial = getTestimonialByHotel(hotel.slug);
  const others = getOtherHotels(hotel.slug).slice(0, 3);

  const crumbs = [
    { label: "Montreval", href: "/" },
    { label: "Hotels", href: "/hotels" },
    { label: hotel.name, href: `/hotels/${hotel.slug}` },
  ];

  return (
    <Page>
      <JsonLd data={[hotelJsonLd(hotel, stays), breadcrumbJsonLd(crumbs)]} />

      <PageHero
        eyebrow={hotel.location}
        title={hotel.name}
        standfirst={hotel.standfirst}
        image={hotel.image}
        crumbs={crumbs}
        priority
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/reservations" tone="inverse">
            Enquire about a stay
          </Button>
          <p className="text-[0.9375rem] font-light text-paper/70">
            {hotel.keys} — {formatRateFrom(hotel.rateFrom)} a night
          </p>
        </div>
      </PageHero>

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <Reveal>
              <Prose blocks={hotel.body} />
            </Reveal>

            <Reveal>
              <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
                <Eyebrow className="mb-6">Arrival</Eyebrow>
                <SpecList items={hotel.arrival} />

                <div className="mt-12 border-t border-line pt-6">
                  <Eyebrow className="mb-4">The house</Eyebrow>
                  <address className="space-y-1 text-[0.9375rem] font-light not-italic leading-relaxed text-ink-muted">
                    {hotel.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <p className="mt-5 text-[0.9375rem] font-light text-ink-muted">
                    Reservations for every house are taken centrally on{" "}
                    <a
                      href={`tel:${site.contact.reservations.phoneHref}`}
                      className="underline decoration-stone underline-offset-[0.35em] transition-colors duration-[var(--duration-fast)] hover:decoration-ink"
                    >
                      {site.contact.reservations.phone}
                    </a>
                    .
                  </p>
                </div>

                <div className="mt-12 border-t border-line pt-6">
                  <Eyebrow className="mb-4">Who runs it</Eyebrow>
                  <p className="text-[0.9375rem] font-light text-ink">
                    {hotel.director.name}
                  </p>
                  <p className="text-[0.875rem] font-light text-mist">
                    {hotel.director.role}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="What is here"
                title="In the house"
                size="sm"
              />
              <ul className="mt-10 space-y-4">
                {hotel.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="border-t border-line pt-4 text-[0.9375rem] font-light text-ink-muted"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="grid gap-10 sm:grid-cols-2 lg:pt-4">
              {hotel.gallery.map((image) => (
                <Figure
                  key={image.src}
                  image={image}
                  ratio="portrait"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Suites & villas"
            title={`Where you sleep at ${hotel.name.replace("Montreval ", "").replace("Maison ", "")}`}
            action={
              <Button href="/suites" variant="quiet">
                Every room in the collection
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            columns={2}
            emptyState="Rooms at this house are being reworked and will be published shortly."
            items={stays.map(stayCard)}
          />
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="The table"
            title={restaurants.length === 1 ? "The kitchen" : "The kitchens"}
            className="mb-16"
          />

          <CollectionGrid
            columns={2}
            emptyState="Dining at this house is served privately and arranged with the director."
            items={restaurants.map(restaurantCard)}
          />

          {spa ? (
            <div className="mt-20">
              <SectionHeading
                eyebrow="The bath"
                title={spa.name}
                size="sm"
                className="mb-12"
              />
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal>
                  <Figure
                    image={spa.image}
                    ratio="landscape"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </Reveal>
                <Reveal className="lg:pt-6">
                  <p className="lede text-ink-muted">{spa.standfirst}</p>
                  <p className="mt-6 max-w-[52ch] text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                    {spa.summary}
                  </p>
                  <Button
                    href={`/wellness/${spa.slug}`}
                    variant="quiet"
                    className="mt-8"
                  >
                    {spa.name}
                  </Button>
                </Reveal>
              </div>
            </div>
          ) : (
            <p className="mt-16 max-w-[56ch] border-t border-line pt-8 text-[0.9375rem] font-light leading-relaxed text-ink-muted">
              There is no Sérène at this house — treatment rooms, yes, but we
              would rather say so than call two rooms a spa. The nearest is at{" "}
              <Link
                href="/wellness"
                className="underline decoration-stone underline-offset-[0.35em] transition-colors duration-[var(--duration-fast)] hover:decoration-ink"
              >
                one of the other four houses
              </Link>
              .
            </p>
          )}
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Experiences"
            title="What people do here"
            className="mb-16"
          />

          <CollectionGrid
            emptyState="Nothing is scheduled here at present. Our reservations team can arrange something privately."
            items={experiences.map(experienceCard)}
          />
        </Container>
      </Section>

      {testimonial ? <GuestLetter testimonial={testimonial} /> : null}

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Elsewhere"
            title={
              destination
                ? `Beyond ${destination.name}`
                : "Elsewhere in the collection"
            }
            action={
              <Button href="/hotels" variant="quiet">
                All six houses
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            items={others.map(hotelCard)}
          />
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
