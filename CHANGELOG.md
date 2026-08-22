# Changelog

All notable changes to this blueprint are recorded here.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.1.0 — 2026-08-22

Migration of the blueprint onto the current HubZero ecosystem baseline, followed by a focused visual refinement and production-photography release. Blueprint Core moves from 1.6.0 to 2.1.0, Blueprint Base moves from its pre-2.x generation to 2.1.0, and the Montreval experience remains Hospitality × Luxury.

### Photography and visual refinement

- Replaced all 32 SVG-backed photographic placements with original, placement-specific Montreval photography: seven stays, seven restaurants, seven experiences, three wellness spaces, five journal features, and three lifecycle/support heroes.
- Art-directed every photograph to its property identity and composed focal subjects to survive the existing desktop, tablet, and narrow-mobile crops.
- Optimized all generated finals to WebP and removed the 32 superseded photographic SVGs. Existing strong photography and intentional brand SVG assets remain unchanged.
- Preserved the established page composition, content graph, alt text, image sizing, and eager/lazy loading strategy while materially improving depth, atmosphere, and property continuity.

### Blueprint Core

- Synchronized `.hubzero` to Blueprint Core 2.1.0 and moved `@hubzero/blueprint` to `^2.1.0`. The knowledge package now carries the architecture and design-language registries, the composable-module contract, the content contract, the rendering and runtime contract, the asset contract, and the Project Knowledge Package schema. `seo/technical.md` was removed upstream; nothing referenced it.

### Dependencies

- Advanced the shared dependency baseline to Blueprint Base 2.1.0's: Next.js and `eslint-config-next` 16.2.10 → 16.3.2.

### Reveal — breaking API change

- `Reveal` is Blueprint Base 2.1.0's server component. It ships no client JavaScript, renders no `data-state`, and no longer accepts `root`, `rootMargin`, `threshold` or `once` — none of which this blueprint passed.
- The Luxury entrance moved from `data-state` transitions to a scroll-driven animation on `[data-reveal]`, keeping the same movement: opacity and a 1.25rem rise, unhurried, no scale and no bounce. Its length is a scroll distance (`--reveal-distance`) rather than a duration, so a tall section rises over the same distance as a short one. Where `animation-timeline` is unsupported the content is simply visible, which is what `.hubzero/rendering.md` — Progressive Enhancement requires; reduced motion removes the entrance outright rather than shortening it.

### Styles

- `src/styles/tokens.css` now holds only the infrastructure tokens Blueprint Base's own components read — the container width and the z-index scale. Radius, duration and easing are declared outright in `theme.css`, so Blueprint Base's `design-language.css` is not carried.

### Hooks

- `useScrolled` is Blueprint Base 2.1.0's implementation, built on `useSyncExternalStore`. The floating navigation's two appearance states and its 24px threshold are unchanged; the scrolled value is now read during the hydration commit rather than one paint later.
- Added Blueprint Base 2.1.0's `useDismissible`, and the menu overlay now takes Escape-to-dismiss from it. Its page-scroll lock is declined: `globals.css` sets `overflow-x: clip` on the root element, which makes the root the scroll container, so the menu keeps its own root-level lock. Focus containment stays local, as Base deliberately excludes it.

### SEO

- Sitemap freshness is authored rather than taken from the build clock. Journal entries use their published date and legal documents their updated date; everything else falls back to a new `site.contentUpdated`. Two builds of the same content now produce the same sitemap. See `.hubzero/content/principles.md` — Temporal State Is Authored.

---

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
