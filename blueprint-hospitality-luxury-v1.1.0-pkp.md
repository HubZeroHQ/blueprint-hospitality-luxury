# Project Knowledge Package: v1.1.0

## Identity

- **Blueprint:** HubZero Blueprint — Hospitality / Luxury
- **Demonstration brand:** Montreval Hotels
- **Repository:** `HubZeroHQ/blueprint-hospitality-luxury`
- **Package and release:** `1.1.0` / `v1.1.0`
- **Blueprint Core:** `2.1.0`
- **Blueprint Base:** `2.1.0`
- **Architecture ID:** `hospitality`
- **Design-language ID:** `luxury`
- **Architecture parent:** `services`
- **Composed architectures:** `booking`, `events`
- **Modules:** `locations`, `editorial`, `faq`, `about`, `contact`, `legal`
- **Framework:** Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS 4
- **Status:** Verified release candidate

Montreval Hotels and every property, person, address, rate, testimonial, award,
and editorial claim in this repository are fictional.

## Executive Summary

This release preserves the complete multi-property hospitality product introduced
in v1.0.0 while moving its shared engineering baseline to Blueprint Core and Base
2.1.0. It also completes the intended photographic expression of the Luxury
design language. Thirty-two placements that previously used restrained SVG
plates now use original, optimized editorial photography commissioned for their
exact room, restaurant, experience, wellness, journal, or lifecycle role.

The primary journey remains destination discovery, property evaluation,
accommodation comparison, rate understanding, and honest enquiry. Dining,
wellness, experiences, celebrations, meetings, journal, FAQs, contact, and legal
content continue to derive from the same typed content graph.

## Technical Overview

The application is statically generated through the App Router. Domain records
live in `src/content/`; routes, cards, metadata, sitemap entries, breadcrumbs,
and JSON-LD derive from those records. Shared configuration lives in `src/config/`,
SEO infrastructure in `src/seo/`, and design-language ownership in
`src/styles/theme.css`.

Browser interactivity is limited to bounded client islands. The shared `Reveal`
mechanism is now a server component. CSS scroll-driven motion enhances the
server-visible final state, so unsupported browsers, no-script visitors, and
reduced-motion visitors retain complete content.

## Architecture and Design Language

The canonical architecture ID is `hospitality`, a profile of `services`, composed
with `booking` and `events`. The blueprint carries the `locations`, `editorial`,
`faq`, `about`, `contact`, and `legal` modules.

The canonical design-language ID is `luxury`. Its Token Contract is satisfied in
`src/styles/theme.css`:

- a generous spacing scale and wide display type scale;
- a narrow, restrained Montreval palette;
- precise 2px radii used consistently;
- near-absent shadow and hairline borders;
- slow, symmetrical motion with no bounce or overshoot;
- an authored reveal distance for scroll-driven entrances.

`src/styles/tokens.css` retains only Blueprint Base infrastructure tokens for
container width and z-index. Luxury-owned tokens have one source of truth in the
theme layer.

## Content Model

The core entities are destinations, hotels, stays, restaurants, spas,
experiences, journal articles, gatherings, FAQs, testimonials, legal documents,
and brand/configuration records. Stays, restaurants, spas, and experiences refer
to hotels by stable slug; hotels refer to destinations in the same way.

Every photographic content record owns its source and meaningful alternative
text. The v1.1.0 generation brief additionally treated aspect ratio, focal safety,
and mobile crop survival as part of each media decision. Existing component-level
`sizes`, aspect frames, and loading priority remain unchanged.

## Engineering Decisions

### Photography replaced photographic illustration, not the illustration system

The alternative was to preserve every SVG because it was already available.
That would have left high-value hospitality proof in a placeholder-like medium.
Only the 32 SVGs occupying photographic roles were replaced. Brand marks, icons,
and other intentional vector assets remain SVG.

### One generated image per placement

Reusing a small set of generic hotel images would have reduced production work
but broken property identity and produced duplicate imagery. Each placement
received its own subject, lighting, material palette, and center-safe composition.

### WebP finals only

Generated PNG sources were kept outside the repository and converted to WebP.
This avoids shipping temporary generation artifacts while retaining sufficient
source resolution for Next.js responsive optimization.

### Server-visible reveal state

The former observer-driven Reveal client component was replaced by Base 2.1.0's
server component. The rejected alternative was to preserve a JavaScript-only
hidden state, which could strand content under no-script or reduced-motion
conditions.

### Authored sitemap freshness

Sitemap dates now derive from authored content dates rather than build time.
This makes equal builds deterministic and prevents false freshness signals.

## Notable Components and Engineering

- `LightSequence` remains the single signature experience: the collection shown
  over one day, pausable and reduced-motion aware.
- `Figure` centralizes responsive image sizing, stable aspect frames, cropping,
  lazy/eager behavior, and the restrained Luxury hairline.
- `PageHero` applies one consistent image/text hierarchy across index, detail,
  support, and lifecycle routes.
- `useDismissible` and `MenuOverlay` provide Escape dismissal, focus containment,
  trigger-focus restoration, and the existing root-level scroll lock.
- Sitemap, JSON-LD, Open Graph selection, breadcrumbs, and canonical metadata
  derive from the same canonical records rendered on each route.

## Reusable Patterns

- Treat generated media as content: brief it from the record, not from the page's
  decoration.
- Establish property-level visual identities before generating placement-level
  assets; continuity is easier to verify than to repair afterward.
- Compose the primary subject inside a mobile-safe center region when one source
  must serve several responsive frames.
- Keep generated sources outside the product tree and admit only selected,
  optimized finals.
- Render animation endpoints on the server and layer motion declaratively.
- Derive sitemap freshness from authored content state, never the build clock.

## Limitations

- The site has no booking engine, availability service, payment system, CMS,
  accounts, analytics, cookies, or persistence.
- Telephone and email links open the visitor's own applications; no enquiry is
  collected, sent, or stored by the blueprint.
- Rates, availability language, people, awards, testimonials, and contact details
  are fictional demonstration content.
- A client deployment must replace the fictional content and connect a real,
  accessible reservation service.
- The generated photographs are fictional editorial representations, not records
  of buildable or existing properties.
- Content changes require a rebuild.

## Lessons Learned

**A photographic count must come from semantic use, not file extension alone.**
The repository contained exactly 32 qualifying SVG-backed `ImageAsset` placements;
brand SVGs were not candidates. Searching references before generating prevented
both invented work and accidental replacement of intentional vectors.

**Property continuity is the useful unit of art direction.** A global luxury
prompt was insufficient on its own. Material and landscape constraints for each
house produced a collection that still reads as one commission without blending
lake, coast, vineyard, escarpment, atoll, and fjord into generic resort imagery.

**Mobile crop safety starts in generation.** CSS cannot recover a subject placed
at an extreme edge. Holding the architectural or human anchor inside the central
field allowed the existing responsive frames to remain simple.

**Migration and redesign should remain separately auditable.** Recovering the
working tree first made it possible to preserve Base/Core changes while measuring
the visual release independently.

## Developer Notes

- Run `npm install`, `npm run lint`, `npm run typecheck`, and `npm run build`
  before release.
- Do not edit `.hubzero`; it is synchronized Blueprint Core content.
- Keep `package.json` and `package-lock.json` on the same package version.
- Add or replace domain content in `src/content/`; do not hardcode it in page
  components.
- Generated production images live under `public/images/<domain>/` as WebP.
- Preserve meaningful alt text and mark only the first page image eager.

## Release Verification

This section was completed from the final release candidate, not inferred.

- Package, Core, and Base versions: `1.1.0`, `2.1.0`, and `2.1.0`; package and lockfile agree
- Install: completed; npm reports two high-severity advisories in the inherited dependency tree
- Lint: passed
- Typecheck: passed
- Tests: no test suite is configured
- Production build: passed; 75 static pages generated
- Runtime: 28 production route/viewport combinations passed with no broken images, overflow, or console errors
- Responsive: 35 development checks across 320, 360, 375, 390, 430, 768, and 1440 pixels passed without horizontal overflow
- Accessibility: SkipLink focus, menu keyboard operation, Escape dismissal, and trigger-focus restoration verified
- SEO: 67 sitemap URLs; robots, manifest, and sitemap return 200; representative routes expose canonical, Open Graph, Twitter, and JSON-LD metadata
- Assets: 53 production WebP images, zero unreferenced images, zero byte-identical duplicates, and zero photographic SVG references
- Git diff check: passed before release staging

## Structured Summary

```yaml
blueprint: blueprint-hospitality-luxury
brand: Montreval Hotels
version: 1.1.0
core: 2.1.0
base: 2.1.0
architecture: hospitality
architecture_parent: services
composed_architectures: [booking, events]
design_language: luxury
modules: [locations, editorial, faq, about, contact, legal]
rendering: static App Router with bounded client islands
photography:
  generated_assets: 32
  format: webp
  superseded_svg_assets: 32
fictional_content: true
```

## Tags

`hospitality`, `luxury`, `booking`, `events`, `locations`, `editorial`, `faq`,
`multi-property`, `static-generation`, `responsive-photography`, `webp`,
`json-ld`, `accessibility`, `reduced-motion`, `fictional-brand`
