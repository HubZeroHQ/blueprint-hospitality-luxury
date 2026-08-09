import type { CollectionItem } from "@/components/sections/CollectionGrid";
import { getHotel } from "@/content";
import type {
  Destination,
  Experience,
  Hotel,
  JournalArticle,
  Restaurant,
  Spa,
  Stay,
} from "@/content/types";
import { formatCurrency, formatDate, formatRateFrom } from "@/utils/format";

/**
 * How each kind of content is summarised on a card.
 *
 * These live in one place because a house is described the same way on the
 * homepage, on the hotels index, on a destination page and at the foot of
 * another house. Repeating the mapping per page is how six index pages
 * slowly stop agreeing with each other.
 */

export function destinationCard(destination: Destination): CollectionItem {
  return {
    key: destination.slug,
    href: `/destinations/${destination.slug}`,
    image: destination.portrait,
    eyebrow: destination.region,
    title: destination.name,
    summary: destination.standfirst,
    meta: `Best months — ${destination.bestMonths}`,
  };
}

export function hotelCard(hotel: Hotel): CollectionItem {
  return {
    key: hotel.slug,
    href: `/hotels/${hotel.slug}`,
    image: hotel.image,
    eyebrow: hotel.location,
    title: hotel.name,
    summary: hotel.standfirst,
    meta: `${hotel.keys} — ${formatRateFrom(hotel.rateFrom)} a night`,
  };
}

export function stayCard(stay: Stay): CollectionItem {
  return {
    key: stay.slug,
    href: `/suites/${stay.slug}`,
    image: stay.image,
    eyebrow: `${stay.category} — ${stay.size} m²`,
    title: stay.name,
    summary: stay.summary,
    meta: `${formatRateFrom(stay.rateFrom)} a night, for ${stay.sleeps}`,
  };
}

export function restaurantCard(restaurant: Restaurant): CollectionItem {
  return {
    key: restaurant.slug,
    href: `/dining/${restaurant.slug}`,
    image: restaurant.image,
    eyebrow: getHotel(restaurant.hotelSlug)?.name ?? restaurant.kitchen,
    title: restaurant.name,
    summary: restaurant.standfirst,
    meta: `${restaurant.kitchen} — ${restaurant.seats} seats`,
  };
}

export function spaCard(spa: Spa): CollectionItem {
  return {
    key: spa.slug,
    href: `/wellness/${spa.slug}`,
    image: spa.image,
    eyebrow: getHotel(spa.hotelSlug)?.location ?? "",
    title: spa.name,
    summary: spa.standfirst,
    meta: spa.hours,
  };
}

export function experienceCard(experience: Experience): CollectionItem {
  return {
    key: experience.slug,
    href: `/experiences/${experience.slug}`,
    image: experience.image,
    eyebrow: getHotel(experience.hotelSlug)?.name ?? experience.duration,
    title: experience.name,
    summary: experience.standfirst,
    meta:
      experience.price === null
        ? `${experience.duration} — included in every stay`
        : `${experience.duration} — ${formatCurrency(experience.price)} a person`,
  };
}

export function articleCard(article: JournalArticle): CollectionItem {
  return {
    key: article.slug,
    href: `/journal/${article.slug}`,
    image: article.image,
    eyebrow: `${article.category} — ${formatDate(article.publishedAt)}`,
    title: article.title,
    summary: article.standfirst,
    meta: `${article.author} — ${article.readingMinutes} minutes`,
  };
}
