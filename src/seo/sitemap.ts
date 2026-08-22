import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import {
  destinations,
  experiences,
  hotels,
  journalArticles,
  legalDocuments,
  restaurants,
  spas,
  stays,
} from "@/content";
import { seoDefaults } from "./defaults";

/**
 * Every route the site serves, generated from the same content the pages
 * render — so a new house or article cannot be added without appearing here.
 *
 * Freshness is authored, never taken from the build clock. `new Date()` would
 * report every page as modified on every build, which is untrue and makes the
 * output of two builds of identical content differ. Records that carry their
 * own date use it; the rest fall back to `site.contentUpdated`. See
 * `.hubzero/content/principles.md` — Temporal State Is Authored.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = new Date(site.contentUpdated);

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
    lastModified: Date = siteUpdated
  ) => ({
    url: new URL(path, seoDefaults.url).toString(),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),

    /* The booking journey: discover, evaluate, enquire. */
    entry("/destinations", 0.9),
    entry("/hotels", 0.9),
    entry("/suites", 0.9),
    entry("/reservations", 0.9, "weekly"),

    entry("/dining", 0.8),
    entry("/wellness", 0.8),
    entry("/experiences", 0.8),

    entry("/celebrations", 0.7),
    entry("/meetings", 0.7),
    entry("/journal", 0.7, "weekly"),

    entry("/about", 0.6),
    entry("/sustainability", 0.6),
    entry("/faqs", 0.6),
    entry("/contact", 0.6),

    ...destinations.map((item) => entry(`/destinations/${item.slug}`, 0.8)),
    ...hotels.map((item) => entry(`/hotels/${item.slug}`, 0.9)),
    ...stays.map((item) => entry(`/suites/${item.slug}`, 0.7)),
    ...restaurants.map((item) => entry(`/dining/${item.slug}`, 0.6)),
    ...spas.map((item) => entry(`/wellness/${item.slug}`, 0.6)),
    ...experiences.map((item) => entry(`/experiences/${item.slug}`, 0.6)),
    ...journalArticles.map((item) =>
      entry(`/journal/${item.slug}`, 0.5, "monthly", new Date(item.publishedAt))
    ),

    ...legalDocuments.map((item) =>
      entry(`/${item.slug}`, 0.3, "yearly", new Date(item.updated))
    ),
  ];
}
