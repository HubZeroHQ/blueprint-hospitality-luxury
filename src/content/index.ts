/**
 * Content access layer.
 *
 * Pages import from here rather than from the individual data modules, so
 * lookups, ordering and cross-references are defined once. Every `get*`
 * helper returns `undefined` for an unknown slug; callers are expected to
 * call `notFound()` rather than render an empty page.
 */

import { destinations } from "./destinations";
import { experiences } from "./experiences";
import { hotels } from "./hotels";
import { journalArticles } from "./journal";
import { legalDocuments } from "./legal";
import { restaurants } from "./dining";
import { spas } from "./wellness";
import { stays } from "./stays";
import { testimonials } from "./testimonials";

export * from "./types";

export { destinations } from "./destinations";
export { experiences } from "./experiences";
export { hotels } from "./hotels";
export { journalArticles } from "./journal";
export { legalDocuments } from "./legal";
export { restaurants } from "./dining";
export { spas } from "./wellness";
export { stays } from "./stays";
export { testimonials } from "./testimonials";
export { faqs } from "./faqs";
export {
  celebrations,
  celebrationsIntro,
  meetings,
  meetingsIntro,
  venues,
} from "./gatherings";
export {
  awards,
  milestones,
  positioning,
  press,
  story,
  team,
  voice,
} from "./brand";
export {
  commitments,
  sustainabilityBody,
  sustainabilityIntro,
} from "./sustainability";

/* Destinations */

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getHotelsByDestination(slug: string) {
  return hotels.filter((hotel) => hotel.destinationSlug === slug);
}

/* Hotels */

export function getHotel(slug: string) {
  return hotels.find((hotel) => hotel.slug === slug);
}

/** Every house except the one given — used for "elsewhere in the collection". */
export function getOtherHotels(slug: string) {
  return hotels.filter((hotel) => hotel.slug !== slug);
}

/* Stays */

export function getStay(slug: string) {
  return stays.find((stay) => stay.slug === slug);
}

export function getStaysByHotel(slug: string) {
  return stays.filter((stay) => stay.hotelSlug === slug);
}

/* Dining */

export function getRestaurant(slug: string) {
  return restaurants.find((restaurant) => restaurant.slug === slug);
}

export function getRestaurantsByHotel(slug: string) {
  return restaurants.filter((restaurant) => restaurant.hotelSlug === slug);
}

/* Wellness */

export function getSpa(slug: string) {
  return spas.find((spa) => spa.slug === slug);
}

export function getSpaByHotel(slug: string) {
  return spas.find((spa) => spa.hotelSlug === slug);
}

/* Experiences */

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export function getExperiencesByHotel(slug: string) {
  return experiences.filter((experience) => experience.hotelSlug === slug);
}

/* Journal */

/** Newest first. Sorted here rather than relying on the array's order. */
export function getJournalArticles() {
  return [...journalArticles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
}

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 2) {
  const current = getJournalArticle(slug);

  if (!current) {
    return [];
  }

  const sorted = getJournalArticles().filter(
    (article) => article.slug !== slug
  );

  const sameCategory = sorted.filter(
    (article) => article.category === current.category
  );

  return [...sameCategory, ...sorted.filter((a) => a.category !== current.category)]
    .slice(0, limit);
}

/* Testimonials */

export function getTestimonialByHotel(slug: string) {
  return testimonials.find((testimonial) => testimonial.hotelSlug === slug);
}

/* Legal */

export function getLegalDocument(slug: string) {
  return legalDocuments.find((document) => document.slug === slug);
}
