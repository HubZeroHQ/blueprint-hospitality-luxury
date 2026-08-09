# Changelog

All notable changes to this blueprint are recorded here.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.0 — 2026-08-09

First release of the HubZero Hospitality / Luxury blueprint, demonstrated through Montreval Hotels — a fictional collection of six houses.

### Architecture

- Complete Hospitality journey: destinations → houses → rooms → enquiry, with dining, wellness, experiences, celebrations, gatherings, journal, questions and legal pages alongside it.
- Twenty-five routes, all statically generated, including six destinations, six houses, twelve rooms, eight kitchens, four spas, eight experiences and six journal entries.
- Content model in `src/content/`, typed against `src/content/types.ts`, with a single access layer in `src/content/index.ts`.

### Design

- The Luxury design language applied across all ten subsystems — typography, motion, photography, corners, borders, shadow, spacing, interaction, components and visual rhythm — expressed in `src/styles/theme.css`.
- Floating navigation with two named appearance states derived from scroll position alone, and a full-screen menu that is the same surface at every breakpoint.
- **The Hour** — the homepage light sequence, the blueprint's one signature interaction: the collection introduced as a single day. Pausable, and it does not auto-advance under `prefers-reduced-motion`.
- Designed loading, error and not-found routes.

### Brand and content

- Montreval identity: arch mark, wordmark, favicon, apple touch icon, and raster Open Graph plates — one per destination and per house, plus the brand plate.
- Original landscape and interior imagery in one visual language, one palette per place.
- Editorially consistent throughout: British English, euros, metric, one date format, one telephone convention, one address convention.

### Engineering

- `Hotel`, `Restaurant`, `Article`, `FAQPage`, `BreadcrumbList`, `Organization` and `WebSite` structured data. No `aggregateRating` or `Review`, because the guest letters are fictional.
- Deterministic date and currency formatters instead of `Intl`, so server and client render identically.
- Sitemap generated from the same content the pages render.
- No horizontal overflow at any viewport width on any route.

### Honest demonstration

- No booking engine, form handler, account, analytics or cookies. Every enquiry route opens the visitor's own telephone or email application, and the site says so on `/reservations`, `/contact`, `/faqs`, `/privacy`, `/terms` and the About page.
