/**
 * Montreval Hotels — site configuration.
 *
 * Every brand-owned value the implementation renders lives here or in
 * `src/content/`. Components never hardcode a brand name, contact detail,
 * or asset path: replacing this file (and the assets it points at) is all
 * that should be required to re-brand the blueprint.
 *
 * Montreval Hotels is a fictional company created for this HubZero Blueprint.
 */
export const site = {
  name: "Montreval Hotels",
  shortName: "Montreval",
  legalName: "Montreval Hotels S.A.",
  tagline: "The art of the unhurried stay.",

  description:
    "Montreval Hotels is a collection of six privately held houses in the Verane Valley, on the Calanera Coast, and beyond — kept small, staffed generously, and designed for guests who are in no hurry.",

  url: "https://montrevalhotels.com",

  /** Fictional company, founded for this blueprint. */
  founded: 1998,

  /**
   * Authored date of the last meaningful content change (`YYYY-MM-DD`).
   *
   * Sitemap freshness derives from this rather than from the build clock, so
   * the output of two builds of the same content is identical. Records that
   * carry their own authored date — journal entries, legal documents — use
   * theirs; everything else falls back to this. See
   * `.hubzero/content/principles.md` — Temporal State Is Authored, and
   * `.hubzero/rendering.md` — Current time.
   */
  contentUpdated: "2026-08-09",

  themeColor: "#14120F",
  icon: "/favicon.ico",

  /**
   * Brand assets. Referenced by configuration everywhere they are used —
   * metadata, navigation, footer, manifest — so replacing a mark never
   * requires editing a component.
   */
  assets: {
    logo: "/brand/montreval-logo.svg",
    logoLight: "/brand/montreval-logo-light.svg",
    mark: "/brand/montreval-mark.svg",
    markLight: "/brand/montreval-mark-light.svg",
    openGraph: "/brand/montreval-og.png",
    appleTouchIcon: "/apple-icon.png",
  },

  /**
   * Editorial conventions, held constant across every page.
   * Locale: British English. Currency: EUR. Measurements: metric.
   * Dates: `D MMMM YYYY`. Telephone: international, `+44 20 7946 01xx`.
   */
  locale: {
    lang: "en-GB",
    openGraph: "en_GB",
    currency: "EUR",
    currencySymbol: "€",
  },

  contact: {
    reservations: {
      label: "Reservations",
      phone: "+44 20 7946 0139",
      /** Digits only, for `tel:` links. */
      phoneHref: "+442079460139",
      email: "reservations@montrevalhotels.com",
      hours: "Every day, 07:00 – 22:00 CET",
    },
    press: {
      label: "Press",
      email: "press@montrevalhotels.com",
    },
    celebrations: {
      label: "Weddings & celebrations",
      email: "celebrations@montrevalhotels.com",
    },
    meetings: {
      label: "Meetings & gatherings",
      email: "meetings@montrevalhotels.com",
    },
    careers: {
      label: "Careers",
      email: "careers@montrevalhotels.com",
    },
  },

  /** Registered office of the fictional group. */
  address: {
    street: "14 Rue de Saverne",
    locality: "Ostrelle",
    postalCode: "2100",
    region: "Ostrelle",
    /** Written as one line wherever an address appears inline. */
    inline: "14 Rue de Saverne, Ostrelle 2100",
  },

  author: {
    name: "HubZero",
    url: "https://hubzero.in",
  },

  /** Provenance. Rendered in the footer, the About page and the README. */
  attribution: {
    label: "A HubZero Blueprint demonstration",
    note: "Montreval Hotels is a fictional company. Every property, person, rate and review on this site was written for a HubZero Blueprint demonstration.",
    href: "https://hubzero.in",
  },
} as const;
