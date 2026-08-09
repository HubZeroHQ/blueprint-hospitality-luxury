import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { restaurantCard } from "@/components/sections/cards";
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
import { getHotel, getRestaurant, restaurants } from "@/content";
import { breadcrumbJsonLd, restaurantJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({ slug: restaurant.slug }));
}

export async function generateMetadata({ params }: RestaurantPageProps) {
  const { slug } = await params;
  const restaurant = getRestaurant(slug);

  if (!restaurant) {
    return createMetadata({ title: "Restaurant not found" });
  }

  const hotel = getHotel(restaurant.hotelSlug);

  return createMetadata({
    title: `${restaurant.name}, ${hotel?.name ?? "Montreval"}`,
    description: restaurant.summary,
    canonical: `/dining/${restaurant.slug}`,
    keywords: [
      restaurant.name,
      restaurant.kitchen,
      "restaurant",
      "hotel dining",
    ],
  });
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;
  const restaurant = getRestaurant(slug);

  if (!restaurant) {
    notFound();
  }

  const hotel = getHotel(restaurant.hotelSlug);

  if (!hotel) {
    notFound();
  }

  const elsewhere = restaurants.filter(
    (item) => item.slug !== restaurant.slug
  ).slice(0, 3);

  const crumbs = [
    { label: "Montreval", href: "/" },
    { label: "Dining", href: "/dining" },
    { label: restaurant.name, href: `/dining/${restaurant.slug}` },
  ];

  return (
    <Page>
      <JsonLd
        data={[restaurantJsonLd(restaurant, hotel), breadcrumbJsonLd(crumbs)]}
      />

      <PageHero
        eyebrow={`${hotel.name} — ${restaurant.kitchen}`}
        title={restaurant.name}
        standfirst={restaurant.standfirst}
        image={restaurant.image}
        crumbs={crumbs}
        priority
      />

      <Section space="spacious">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <Reveal>
              <Prose blocks={restaurant.body} />
            </Reveal>

            <Reveal>
              <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
                <Eyebrow className="mb-6">Service</Eyebrow>
                <SpecList items={restaurant.service} />

                <div className="mt-12 border-t border-line pt-6">
                  <Eyebrow className="mb-4">In the kitchen</Eyebrow>
                  <p className="text-[0.9375rem] font-light text-ink">
                    {restaurant.chef}
                  </p>
                  <p className="text-[0.875rem] font-light text-mist">
                    {restaurant.seats} seats
                  </p>
                </div>

                <div className="mt-12 border-t border-line pt-6">
                  <Eyebrow className="mb-4">The house</Eyebrow>
                  <p className="text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                    {hotel.summary}
                  </p>
                  <Button
                    href={`/hotels/${hotel.slug}`}
                    variant="quiet"
                    className="mt-6"
                  >
                    {hotel.name}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="On the menu"
            title="Three things the kitchen is known for"
            standfirst="Menus change. These do not, or not much, and they are the dishes guests write to us about."
            className="mb-14"
          />

          <Reveal>
            <ol className="grid gap-12 md:grid-cols-3">
              {restaurant.signatures.map((dish, index) => (
                <li key={dish.name} className="border-t border-line pt-6">
                  <p className="eyebrow mb-4 text-mist">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display display-sm text-ink">{dish.name}</h3>
                  <p className="mt-4 text-[0.9375rem] font-light leading-relaxed text-ink-muted">
                    {dish.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Elsewhere"
            title="Other kitchens in the collection"
            action={
              <Button href="/dining" variant="quiet">
                All eight kitchens
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            items={elsewhere.map(restaurantCard)}
          />
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
