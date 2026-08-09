/**
 * Content model for the Montreval blueprint.
 *
 * Every page renders from these structures rather than from copy embedded in
 * components, so the blueprint can be re-pointed at a different hotel group by
 * replacing `src/content/` and `src/config/site.ts` alone.
 */

export interface ImageAsset {
  src: string;
  /** Written for a visitor using a screen reader, not for search engines. */
  alt: string;
}

/**
 * A small block model shared by every piece of long-form copy — journal
 * articles, About, sustainability, legal pages — so one renderer covers all
 * of them and formatting stays identical across the site.
 */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] };

export interface Destination {
  slug: string;
  name: string;
  /** The wider area, as it appears beneath the name. */
  region: string;
  standfirst: string;
  summary: string;
  body: ContentBlock[];
  /** Short factual pairs shown as a specification list. */
  facts: { label: string; value: string }[];
  bestMonths: string;
  gettingThere: string;
  image: ImageAsset;
  portrait: ImageAsset;
}

export interface Hotel {
  slug: string;
  name: string;
  destinationSlug: string;
  /** One line of place, e.g. "Lake Verane, the Verane Valley". */
  location: string;
  standfirst: string;
  summary: string;
  body: ContentBlock[];
  opened: number;
  /** Written as it should read in prose, e.g. "38 rooms and suites". */
  keys: string;
  rateFrom: number;
  address: string[];
  director: { name: string; role: string };
  amenities: string[];
  /** Practical arrival information, kept factual. */
  arrival: { label: string; value: string }[];
  image: ImageAsset;
  gallery: ImageAsset[];
}

export type StayCategory = "Room" | "Suite" | "Villa" | "Tented suite";

export interface Stay {
  slug: string;
  name: string;
  hotelSlug: string;
  category: StayCategory;
  /** Square metres. The blueprint is metric throughout. */
  size: number;
  sleeps: number;
  view: string;
  bed: string;
  rateFrom: number;
  summary: string;
  body: ContentBlock[];
  features: string[];
  image: ImageAsset;
}

export interface Restaurant {
  slug: string;
  name: string;
  hotelSlug: string;
  kitchen: string;
  chef: string;
  seats: number;
  service: { label: string; value: string }[];
  standfirst: string;
  summary: string;
  body: ContentBlock[];
  signatures: { name: string; description: string }[];
  image: ImageAsset;
}

export interface SpaTreatment {
  name: string;
  minutes: number;
  price: number;
  description: string;
}

export interface Spa {
  slug: string;
  name: string;
  hotelSlug: string;
  standfirst: string;
  summary: string;
  body: ContentBlock[];
  facilities: string[];
  treatments: SpaTreatment[];
  hours: string;
  image: ImageAsset;
}

export interface Experience {
  slug: string;
  name: string;
  hotelSlug: string;
  duration: string;
  season: string;
  groupSize: string;
  /** Per person, in euros. `null` where the experience is included in the stay. */
  price: number | null;
  standfirst: string;
  summary: string;
  body: ContentBlock[];
  includes: string[];
  image: ImageAsset;
}

export interface JournalArticle {
  slug: string;
  title: string;
  standfirst: string;
  category: string;
  author: string;
  /** ISO 8601. Formatted for display through `formatDate`. */
  publishedAt: string;
  readingMinutes: number;
  body: ContentBlock[];
  image: ImageAsset;
}

export interface Testimonial {
  quote: string;
  name: string;
  origin: string;
  hotelSlug: string;
  stay: string;
}

export interface Faq {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  based: string;
  biography: string;
}

export interface Award {
  title: string;
  awarder: string;
  year: number;
  hotelSlug?: string;
}

export interface PressMention {
  publication: string;
  quote: string;
  year: number;
}

export interface Venue {
  slug: string;
  name: string;
  hotelSlug: string;
  capacitySeated: number;
  capacityStanding: number;
  area: number;
  summary: string;
  features: string[];
}

export interface Offering {
  slug: string;
  name: string;
  summary: string;
  detail: string[];
  meta: { label: string; value: string }[];
}

export interface LegalDocument {
  slug: string;
  title: string;
  description: string;
  updated: string;
  body: ContentBlock[];
}
