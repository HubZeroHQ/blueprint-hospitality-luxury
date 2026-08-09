import { site } from "@/config/site";
import type {
  Faq,
  Hotel,
  JournalArticle,
  Restaurant,
  Stay,
} from "@/content/types";

export type JsonLdObject = Record<string, unknown>;

function absolute(path: string): string {
  return new URL(path, site.url).toString();
}

/**
 * Organization schema applies to every HubZero blueprint regardless of
 * architecture. Architecture-specific schema (Product, Article, LocalBusiness,
 * etc.) belongs in the blueprint that needs it, not here.
 */
export function organizationJsonLd(
  overrides: JsonLdObject = {}
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absolute(site.assets.logo),
    description: site.description,
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: site.contact.reservations.phone,
      email: site.contact.reservations.email,
      availableLanguage: ["English"],
    },
    ...overrides,
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: site.locale.lang,
    publisher: { "@type": "Organization", name: site.name },
  };
}

/**
 * `Hotel` is a subtype of `LodgingBusiness` and therefore of `LocalBusiness`,
 * which is what the hospitality SEO guidance asks for. Location, rates and
 * amenities are published because they are the information a guest is
 * searching for.
 *
 * Deliberately absent: `aggregateRating` and `Review`. The guest letters on
 * this site are fictional, and structured data must describe reality — see
 * `.hubzero/seo/principles.md`, Structured Data Should Reflect Reality.
 */
export function hotelJsonLd(hotel: Hotel, stays: Stay[] = []): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description: hotel.summary,
    url: absolute(`/hotels/${hotel.slug}`),
    image: absolute(hotel.image.src),
    parentOrganization: { "@type": "Organization", name: site.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address[1],
      addressLocality: hotel.address[2],
    },
    telephone: site.contact.reservations.phone,
    email: site.contact.reservations.email,
    amenityFeature: hotel.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    priceRange: `From ${site.locale.currencySymbol}${hotel.rateFrom} per night`,
    containsPlace: stays.map((stay) => ({
      "@type": "HotelRoom",
      name: stay.name,
      url: absolute(`/suites/${stay.slug}`),
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: stay.sleeps,
        unitText: "guests",
      },
      floorSize: {
        "@type": "QuantitativeValue",
        value: stay.size,
        unitCode: "MTK",
      },
    })),
  };
}

export function restaurantJsonLd(
  restaurant: Restaurant,
  hotel: Hotel
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: restaurant.summary,
    url: absolute(`/dining/${restaurant.slug}`),
    image: absolute(restaurant.image.src),
    servesCuisine: restaurant.kitchen,
    telephone: site.contact.reservations.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address[1],
      addressLocality: hotel.address[2],
    },
    containedInPlace: {
      "@type": "Hotel",
      name: hotel.name,
      url: absolute(`/hotels/${hotel.slug}`),
    },
  };
}

export function articleJsonLd(article: JournalArticle): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.standfirst,
    url: absolute(`/journal/${article.slug}`),
    image: absolute(article.image.src),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: absolute(site.assets.logo),
      },
    },
  };
}

export function faqJsonLd(faqs: Faq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { label: string; href: string }[]
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absolute(item.href),
    })),
  };
}
