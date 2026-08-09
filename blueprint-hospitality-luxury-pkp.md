# Identity

- **Blueprint name:** HubZero Blueprint — Hospitality / Luxury
- **Demonstration brand:** Montreval Hotels
- **Repository:** `HubZeroHQ/blueprint-hospitality-luxury`
- **Package name:** `blueprint-hospitality-luxury`
- **Version:** `1.0.0`
- **Blueprint Core version:** `1.6.0`
- **Release tag:** `v1.0.0`
- **Release commit:** `1bb3c7adb98a742ce3bfb5dc09af4c83cf72b1ea`
- **Status:** Released; production-ready reference implementation
- **Architecture:** Hospitality
- **Design language:** Luxury
- **Primary framework:** Next.js App Router
- **License:** MIT
- **Purpose:** Provide a canonical HubZero reference implementation for a multi-property hospitality group, including discovery, property evaluation, accommodation selection, dining, wellness, experiences, enquiry, editorial content, structured data, lifecycle states, and a complete fictional brand system.

Montreval Hotels is entirely fictional. Its properties, destinations, people, contact details, addresses, rates, awards, testimonials, and editorial material exist only to demonstrate the blueprint.

# Executive Summary

This blueprint implements the public website of a fictional international hotel group comprising six small properties. It demonstrates how the HubZero Hospitality architecture can be expressed through the Luxury design language without depending on a CMS, booking platform, API, or real business data.

The product represented is a content-led hotel group website. Its primary journey is:

```text
Discover destination
    → evaluate property
        → compare room or villa
            → understand rate and terms
                → contact reservations
```

Supporting journeys cover dining, wellness, experiences, weddings, meetings, brand information, sustainability, journal content, FAQs, contact information, and legal documents.

The implementation solves several recurring hospitality engineering problems:

- Representing related destinations, properties, rooms, restaurants, spas, experiences, and editorial content without duplicating relationship logic in pages.
- Generating all public routes, metadata, sitemaps, breadcrumbs, and structured data from one typed content graph.
- Making practical information such as rates, capacities, seasons, dimensions, arrival details, and opening hours visible without weakening an editorial design.
- Maintaining a coherent multi-property visual system across heterogeneous destinations.
- Supporting luxury-brand presentation without excessive component variation, animation, ornament, or interaction complexity.
- Preserving deterministic server/client rendering.
- Providing an honest demonstration without implementing forms or workflows that appear functional but discard user input.
- Producing fully static output while retaining rich navigation, animation, metadata, and responsive image behavior.

The release contains 67 public sitemap URLs and produces 75 static Next.js build outputs when technical routes and generated assets are included.

# Technical Overview

## Application architecture

The implementation uses a layered architecture:

```text
src/config/             Brand, contact, navigation, metadata defaults
src/content/            Typed fictional domain records and long-form copy
        ↓
src/content/index.ts    Central lookup, filtering, sorting, and export layer
        ↓
src/components/         Layout, UI primitives, sections, card adapters
        ↓
src/app/                Static and parameterized App Router pages
        ↓
src/seo/                Metadata, JSON-LD, sitemap, robots, manifest, OG rules
```

Pages consume domain content through `src/content/index.ts`. Components generally do not import individual content modules and do not own business copy.

The content model and UI model are intentionally separate. Domain records are converted to reusable `CollectionItem` objects by card adapter functions such as `hotelCard`, `stayCard`, `restaurantCard`, and `experienceCard`.

## Technologies

- Next.js 16.2
- React 19.2
- TypeScript 5
- Tailwind CSS 4
- PostCSS
- `next/image`
- `next/font`
- Class Variance Authority
- `clsx`
- `tailwind-merge`
- ESLint 9 with Next.js Core Web Vitals and TypeScript rules

There is no runtime database, CMS SDK, API client, state-management library, form library, analytics package, or remote image provider.

## Routing

The site uses the Next.js App Router.

Static public routes include:

- `/`
- `/about`
- `/celebrations`
- `/contact`
- `/destinations`
- `/dining`
- `/experiences`
- `/faqs`
- `/hotels`
- `/journal`
- `/meetings`
- `/privacy`
- `/reservations`
- `/suites`
- `/sustainability`
- `/terms`
- `/wellness`

Parameterized route families are statically generated:

| Route family | Records |
|---|---:|
| `/destinations/[slug]` | 6 |
| `/hotels/[slug]` | 6 |
| `/suites/[slug]` | 12 |
| `/dining/[slug]` | 8 |
| `/wellness/[slug]` | 4 |
| `/experiences/[slug]` | 8 |
| `/journal/[slug]` | 6 |

Every dynamic route implements static parameter generation. Unknown slugs call `notFound()` rather than rendering partial or empty content.

Technical routes include:

- `robots.txt`
- `sitemap.xml`
- `manifest.webmanifest`
- favicon, SVG icon, and Apple icon
- global loading, error, and not-found states

## Rendering model

Server Components are the default. Client Components are limited to behavior that requires browser state:

- Floating header and route-aware menu state
- Full-screen menu focus management
- Homepage light sequence
- Viewport reveal behavior
- Reduced-motion subscription
- Scroll-position subscription
- Error boundary
- Root provider boundary

All domain records are local TypeScript data, so route generation and rendering are deterministic.

The release is fully statically generated. Content changes require a rebuild and redeployment.

## Data model

The domain model includes:

- `Destination`
- `Hotel`
- `Stay`
- `Restaurant`
- `Spa`
- `SpaTreatment`
- `Experience`
- `JournalArticle`
- `Testimonial`
- `Faq`
- `TeamMember`
- `Award`
- `PressMention`
- `Venue`
- `Offering`
- `LegalDocument`
- `ImageAsset`
- `ContentBlock`

Relationships use stable slugs:

```text
Destination.slug
    ← Hotel.destinationSlug
        ← Stay.hotelSlug
        ← Restaurant.hotelSlug
        ← Spa.hotelSlug
        ← Experience.hotelSlug
        ← Testimonial.hotelSlug
        ← Venue.hotelSlug
```

The central content module provides lookup and relationship helpers such as:

- `getDestination`
- `getHotelsByDestination`
- `getHotel`
- `getOtherHotels`
- `getStay`
- `getStaysByHotel`
- `getRestaurant`
- `getRestaurantsByHotel`
- `getSpa`
- `getSpaByHotel`
- `getExperience`
- `getExperiencesByHotel`
- `getJournalArticles`
- `getJournalArticle`
- `getRelatedArticles`
- `getTestimonialByHotel`
- `getLegalDocument`

Journal ordering is derived from ISO publication dates rather than source-array order.

## Long-form content

Long-form copy uses a small discriminated union:

- Paragraph
- Heading
- Subheading
- Quote with optional attribution
- List

One `Prose` renderer handles journal articles, property narratives, About content, sustainability content, and legal documents. This prevents per-page typographic drift and avoids storing JSX in content files.

## Component organization

```text
components/
  home/       Homepage-specific signature experience
  layout/     Page shell, container, section, header, menu, footer, wordmark
  sections/   Reusable composed sections and domain-to-card adapters
  shared/     Blueprint Base mechanisms: Reveal, JsonLd, SkipLink
  ui/         Buttons, typography, figures, cards, heroes, breadcrumbs,
              prose, section headings, specification lists
```

## Styling

Tailwind CSS supplies utility composition. CSS custom properties define system-level decisions.

The styling stack is:

```text
globals.css
    imports Tailwind CSS
    imports Blueprint Base tokens
    imports Montreval Luxury theme
```

`tokens.css` contains neutral Blueprint Base values. `theme.css` overrides and extends them with Luxury-specific color, typography, motion, corner, line, shadow, and container decisions.

Brand values use a `--montreval-*` namespace and are mapped into Tailwind’s theme.

## Accessibility

Accessibility is structural rather than added after component design.

Implemented behaviors include:

- Skip link to `#main-content`
- One main landmark per page
- One `h1` per route
- Semantic headings, lists, description lists, addresses, and time elements
- Visible `:focus-visible` outlines
- Minimum 44-pixel interactive targets where controls are boxed
- Meaningful alternative text for informative imagery
- Consistent page-title and breadcrumb hierarchy
- `aria-current` on navigation and sequence controls
- Live regions for loading and homepage sequence changes
- Pause control for auto-updating homepage content
- Reduced-motion support in both JavaScript and global CSS
- Full-screen menu focus trapping
- Escape-key menu dismissal
- Focus restoration when the menu closes
- Scroll locking while the modal menu is open
- `inert` and `aria-hidden` behavior while the menu is closed
- Designed loading, error, and not-found states
- No placeholder-only form labels because the implementation contains no forms

## Animation philosophy

Motion is deliberately restricted.

The system uses:

- Opacity and small vertical translation for content reveals
- Cross-fades for the homepage light sequence
- Surface and hairline transitions for navigation and controls
- One linear loading hairline animation
- Staggered menu-group entrances

It avoids:

- Bounce
- Overshoot
- Scale-on-hover
- Parallax
- Image zoom
- Decorative continuous motion
- Scroll-linked hero transformations

The `Reveal` component exposes only `data-state`. It does not own visual timing or transforms. The active design language defines those in CSS. This keeps the viewport-detection mechanism reusable across other design languages.

## Responsive strategy

The layout is mobile-first.

Key behaviors include:

- One-column grids expanding to two and then three columns
- An 82rem maximum page container
- `1.5rem` handheld and `2rem` large-screen horizontal padding
- Section spacing variants rather than page-specific vertical padding
- Responsive typography based on `clamp()`
- `svh` hero heights for mobile browser stability
- Full-screen menu using the same information architecture and surface at every breakpoint
- Primary navigation hidden below the large breakpoint
- Header enquiry action hidden on very narrow screens
- Responsive `sizes` supplied to `next/image`
- Fixed aspect-ratio image frames to prevent layout shift
- `overflow-x: clip` and media maximum-width safeguards
- Stable scrollbar gutter to prevent layout movement when the menu locks scrolling

# Design System

## Typography

The design uses two font roles loaded through `next/font`:

- **Cormorant Garamond:** light-weight display serif
- **Jost:** geometric sans-serif for body text, navigation, labels, and metadata

Display sizes:

- `display-xl`: fluid from 2.75rem to 6rem
- `display-lg`: fluid from 2.125rem to 4.25rem
- `display-md`: fluid from 1.75rem to 2.875rem
- `display-sm`: fluid from 1.375rem to 2rem

Other roles:

- `eyebrow`: 0.6875rem, uppercase, 0.22em tracking
- `lede`: fluid 1.0625rem to 1.25rem, 1.65 line height
- Long-form body: weight 300, 1.78 line height
- Display typography uses weight 300 and minimal negative tracking

Uppercase text is restricted to short labels, controls, and eyebrows.

## Color

The palette is intentionally small:

| Token | Value | Role |
|---|---|---|
| Ink | `#14120f` | Primary dark surface and text |
| Ink soft | `#26221d` | Hovered dark control |
| Ink muted | `#4b453c` | Secondary body text |
| Paper | `#f8f5f0` | Primary light surface |
| Paper warm | `#f0ebe2` | Alternate section and image fallback |
| Stone | `#ddd5c8` | Rules and quiet accents |
| Mist | `#6d675c` | Labels and tertiary text |
| Brass | `#a3854f` | Restricted accent |

Brass is not used as a large fill. Black and pure white are avoided in favor of warm ink and paper.

## Spacing

Spacing is a primary separator. Boxed sections and dense card chrome are avoided.

Named section spacing:

- `compact`: `py-12`, expanding to `py-16`
- `default`: `py-16`, expanding to `py-24`
- `spacious`: `py-20`, expanding to `py-32`
- `none`: no vertical padding

Collection grids use generous horizontal and vertical gaps. Long-form text is constrained to readable measures rather than allowed to span the main container.

## Corners and borders

All radii resolve to 2px. The system never mixes sharp and heavily rounded elements.

Borders are typically one-pixel, low-contrast hairlines. Image frames use an inset ring so the asset itself is not displaced by a border.

## Elevation

A single subtle raised shadow is available. It is used only on the settled floating header and overlay-related surfaces.

The design does not use card shadows or stacked elevation levels.

## Layout language

- Wide editorial container
- Large areas of negative space
- Alternating paper, warm-paper, and ink sections
- Consistent dark page heroes
- Image-led sections with controlled aspect ratios
- Hairline-separated factual information
- No nested card surfaces
- No dashboard-style chrome

## Component language

The visual system is built from a small number of repeated patterns:

- Dark editorial hero
- Eyebrow plus display heading
- Standfirst
- Hairline-separated facts
- Image plus caption
- Editorial card
- Spacious collection grid
- Quiet text action
- Ink enquiry band
- Long-form prose column

## Interaction patterns

Buttons support:

- Solid
- Outline
- Quiet underlined text
- Ink and inverse tones
- Medium and small sizes

Hover feedback changes tone, opacity, border color, or underline extent. Controls do not scale or move.

# Features

## Typed hospitality content graph

**Purpose:** Represent a complete multi-property group and its related offerings.

**Implementation:** Typed arrays under `src/content`, joined through slug fields and queried through one access layer.

**Engineering considerations:** This makes the reference implementation portable and deterministic but requires a build for content changes. Referential integrity depends on matching slugs.

## Destination discovery

Each destination has:

- Region
- Standfirst and summary
- Long-form body
- Best months
- Arrival guidance
- Factual specification pairs
- Primary and portrait imagery
- Related properties and experiences

Destination detail pages connect geographic discovery to properties and activities.

## Property evaluation

Each hotel page combines:

- Editorial hero
- Rate and room-count summary
- Breadcrumbs
- Long-form description
- Arrival facts
- Address and director
- Amenities
- Gallery
- Rooms and villas
- Restaurants
- Optional spa
- Experiences
- Guest letter
- Other properties

Optional relations have explicit empty or alternative states. A property without a spa says so rather than inventing one.

## Rooms, suites, villas, and tents

The accommodation model includes:

- Category
- Size
- Occupancy
- View
- Bed
- Rate
- Features
- Narrative content
- Related property

Rates are shown as inclusive fictional “from” prices using a deterministic formatter.

## Dining

Eight restaurants are represented as independent detail pages. Each carries:

- Property relationship
- Kitchen description
- Chef
- Seat count
- Service schedule
- Signature dishes
- Structured restaurant data

## Wellness

Four spas include:

- Facilities
- Opening hours
- Treatment names
- Treatment duration
- Price
- Treatment descriptions
- Related hotel

Duration formatting is deterministic and does not depend on browser locale.

## Experiences

Eight experiences include duration, season, group size, price or included status, inclusions, and related property.

The model permits `null` prices for experiences included with a stay.

## Homepage “The Hour”

The signature interaction introduces the collection as a sequence of four moments across one day.

Implementation details:

- Four full-bleed frames
- Seven-second automatic interval
- Manual frame selection
- Pause/resume control
- Cross-fade only
- No auto-advance under reduced motion
- First frame is identical on the server and first client render
- Active caption uses an `aria-live` region
- First image is eagerly loaded; subsequent frames are lazy

This is the only high-profile atmospheric interaction.

## Floating navigation

The header has two states:

- **Over:** transparent surface, light wordmark and links
- **Settled:** paper surface, ink text, hairline, subtle shadow

State is based only on whether scroll position exceeds 24 pixels. It does not depend on route or hero intersection state.

The uniform ink hero at the top of every page makes this simplification possible.

## Full-screen menu

The overlay provides the complete information architecture.

It includes:

- Four navigation groups
- Route descriptions
- Reservations contact information
- Enquiry action
- Focus trap
- Escape handling
- Initial focus
- Focus restoration
- Scroll locking
- Modal semantics
- Staggered, reduced-motion-aware entrance

Menu-open state is associated with the route on which it was opened. A route change therefore closes it through derived state rather than a delayed effect.

## Editorial card and collection system

One card component renders destinations, hotels, rooms, dining, experiences, wellness, and journal entries.

Card adapters convert domain records into a stable UI shape. This prevents route pages from duplicating title, metadata, URL, and summary formatting logic.

`CollectionGrid` handles:

- Two- or three-column layouts
- Responsive image sizing
- Light or inverse tones
- Image ratio selection
- First-image priority
- Explicit empty states

## Enquiry and contact behavior

The blueprint has no reservation form or simulated booking flow.

Reservation and contact routes explain that the demonstration has no backend. Actions use fictional `tel:` and `mailto:` links.

This is an explicit product and engineering decision: the application does not collect information it cannot process.

## Weddings and meetings

Celebrations and meeting pages use:

- Typed offering records
- Venue capacity and floor-area data
- Shared offering and venue components
- Dedicated enquiry destinations
- Editorial hero imagery

The pages demonstrate group-event information architecture without implementing event-planning workflows.

## Journal

Six articles demonstrate long-form hospitality editorial content.

Features include:

- Category
- Author
- ISO publication date
- Reading time
- Hero image
- Structured article data
- Related article selection
- Deterministic newest-first ordering

## About and brand content

The About route renders:

- Positioning
- Brand history
- Milestones
- Team members
- Awards
- Press references
- Explicit HubZero and fictional-brand disclosure

Brand content is data-driven rather than embedded in the layout components.

## Sustainability reporting

The sustainability model combines narrative blocks with explicit commitments and figures. It intentionally supports non-improving metrics rather than presenting sustainability only as promotional claims.

## FAQs and legal content

FAQs are rendered visibly and as `FAQPage` structured data.

Privacy and terms share the `LegalPage` component and the same `ContentBlock` renderer. Both state the actual behavior of the demonstration, including the absence of collection, analytics, cookies, and server-side submission.

## Lifecycle states

- Loading state uses a live region and reduced-motion-safe hairline animation.
- Error state logs the error, exposes a retry action, links home, and provides a reservations contact path.
- Not-found state uses the standard visual system and presents recovery links to the six primary navigation areas.

## Image system

The released asset system contains:

- 21 optimized WebP editorial photographs
- 32 supporting SVG editorial illustrations
- 4 brand SVGs
- 13 raster Open Graph PNGs
- Favicon, Apple icon, and application SVG icon

All UI images have stable frames and responsive sizing. Primary hero imagery is explicitly eager when appropriate. Supporting images use normal Next.js lazy loading.

## SEO and discovery

SEO infrastructure includes:

- Root metadata defaults
- Per-page canonical URLs
- Open Graph and Twitter metadata
- Dedicated 1200×630 raster share assets
- Route-specific destination and hotel share plates
- Generated sitemap
- Generated robots rules
- Web application manifest
- Organization and WebSite JSON-LD
- Hotel JSON-LD with room information
- Restaurant JSON-LD
- Article JSON-LD
- FAQPage JSON-LD
- BreadcrumbList JSON-LD

Fictional guest letters are not emitted as `Review`, and no `aggregateRating` is fabricated.

# Engineering Decisions

## Local typed data instead of a CMS

The project is intended to be inspectable and portable, so all content is committed as TypeScript.

Advantages:

- Compile-time domain validation
- Deterministic builds
- No network dependency
- Simple static generation
- Relationships visible in code

Tradeoffs:

- Editors cannot update content independently
- Content changes require deployment
- No runtime validation against an external source
- Referential integrity remains convention-based

## App Router with static generation

The App Router supplies metadata APIs, lifecycle routes, route-level components, and static parameters.

The application gets modern Next.js behavior without introducing server runtime requirements.

## Server-first component boundaries

Most rendering remains on the server. Client boundaries exist only for browser-dependent interaction.

This reduces JavaScript cost and limits hydration risk, but interactive behaviors must remain carefully isolated.

## Uniform hero surface

Every route begins on an ink hero. This is partly visual and partly architectural: it lets the header’s appearance depend on one input—scroll position.

The tradeoff is that future routes cannot casually introduce a light opening surface without revisiting header behavior.

## Deterministic formatting instead of `Intl`

Dates, euro prices, and treatment durations are formatted by small deterministic functions.

This avoids runtime locale and timezone differences between server and browser. The tradeoff is intentional lack of broad locale and currency support.

## Honest demonstration over simulated functionality

No form is rendered without a real handler. No reservation availability or account workflow is fabricated.

This limits interactive scope but keeps the blueprint behavior truthful.

## One content-block renderer

A constrained block model avoids arbitrary rich-text rendering and keeps typography consistent.

The tradeoff is that content requiring tables, embedded media, nested lists, or custom components needs a schema extension.

## Separate display and social imagery

Display assets may be WebP or SVG. Social metadata always uses raster PNG plates because social platforms handle SVG inconsistently.

This duplicates some visual assets but produces predictable previews.

## Explicit SVG security policy

Supporting illustrations are first-party SVGs served through Next.js image optimization. The Next.js configuration:

- Allows SVG optimization
- Serves direct SVG requests as attachments
- Applies a restrictive content security policy
- Sandboxes SVG execution

## One card system

A single editorial card reduces variation across collection routes.

The tradeoff is less freedom for route-specific listing designs, which is intentional for this reference implementation.

## Motion mechanism separated from motion design

`Reveal` owns observation state; CSS owns visual behavior.

This allows another design language to retain the mechanism while replacing timing, distance, or even the presence of animation.

# Reusable Patterns

- Typed slug-linked content graph for multi-entity static sites
- Central content access layer
- Domain-to-card adapter functions
- `generateStaticParams` driven directly by content arrays
- Sitemaps generated from the same arrays as route parameters
- Shared visible and JSON-LD breadcrumb data
- Deterministic date and currency formatting
- Scroll-only floating-header state
- Route-associated overlay state
- Accessible modal menu with focus restoration
- Mechanism-only viewport reveal component
- CSS-variable motion vocabulary
- Unified long-form content block renderer
- Empty states built into reusable list components
- Inverse-tone variants rather than duplicated dark components
- One responsive figure component for image ratios and loading policy
- Dedicated raster social plates for vector-heavy sites
- Honest contact actions instead of nonfunctional forms
- Lifecycle routes designed as part of the product
- Data-driven navigation grouped differently for header, menu, and footer
- Optional-domain-relation handling without fake fallback content

# Lessons Learned

- Hospitality sites need factual data and editorial narrative simultaneously. A useful system must support both prose and compact specification lists.
- A coherent visual constraint can simplify state management. The universal dark hero eliminates route-specific header logic.
- Static content does not require duplicated page code. Typed data plus generic route families can produce a large site with a small number of rendering patterns.
- Structured data should describe what the application can substantiate, not every visible marketing element.
- Reduced-motion behavior must change interaction logic, not merely shorten CSS transitions.
- Empty states should be designed before a dataset becomes empty.
- A luxury language is achieved primarily through typography, rhythm, restraint, and image treatment—not gold, shadows, or excessive animation.
- Social-preview requirements differ from browser image requirements and deserve a separate asset strategy.
- Deterministic formatting is valuable even in apparently simple static applications.
- Demonstrations are more credible when missing backend behavior is stated plainly.

# Notable Components

## `LightSequence`

Homepage signature experience. Manages frame index, automatic progression, pause state, reduced-motion behavior, manual selection, accessible live captions, and loading priority.

## `SiteHeader`

Fixed navigation shell. Derives its appearance from scroll position, marks active routes, exposes the enquiry action, and coordinates the full-screen menu.

## `MenuOverlay`

Accessible modal navigation. Owns focus trapping, Escape handling, root scroll locking, focus restoration, inert closed state, and staged navigation-group presentation.

## `PageHero`

Defines the universal route opening. Supports three height modes, image and non-image variants, breadcrumbs, standfirsts, child metadata/actions, responsive hero imagery, and layered contrast protection.

## `Figure`

Central image primitive. Owns aspect ratios, `next/image` sizing, eager-loading policy, cropping, optional captions, fallback surface, corner treatment, and inset hairline.

## `EditorialCard`

Shared linked content card used across all major domain types. Provides consistent title, summary, metadata, tone, figure behavior, and restrained hover feedback.

## `CollectionGrid`

Shared responsive listing surface. Handles two- and three-column layouts, image sizing, empty states, inverse presentation, and first-card priority.

## `Prose`

Exhaustive renderer for the `ContentBlock` union. Ensures journal, legal, brand, sustainability, and property narratives use one typographic implementation.

## `SpecList`

Semantic description-list renderer for rates, dimensions, capacities, schedules, seasons, and arrival information.

## `SectionHeading`

Normalizes section openings, title hierarchy, standfirst measure, optional actions, responsive alignment, and inverse tone.

## `Button`

Single control abstraction for buttons and links. Uses CVA for solid, outline, quiet, size, and tone variants. Correctly bypasses the Next.js router for telephone, email, and external URLs.

## `Reveal`

SSR-safe viewport detection bridge. Exposes visual state without embedding a design language.

## `LegalPage`

Shared privacy and terms composition. Resolves content by slug, invokes not-found behavior, emits breadcrumbs, formats update dates, and renders the standard prose system.

## `JsonLd`

Serializes structured data generated by the SEO layer into page output.

## `cards.ts`

Maps domain records into the generic collection-card model and centralizes rate, date, duration, property, and link formatting.

# Developer Notes

- Treat `.hubzero/` as managed Blueprint Core. Do not modify it locally.
- Brand-owned constants belong in `src/config/site.ts`.
- Navigation changes belong in `src/config/navigation.ts`.
- Business content belongs in `src/content/`.
- Pages should normally import domain content from `src/content/index.ts`.
- Adding a dynamic entity requires a unique slug and valid related slugs.
- Route parameters and sitemap entries are derived from content arrays.
- New detail routes should call `notFound()` for an unresolved slug.
- Use `Figure` or `PageHero` for imagery so aspect ratio, responsive sizes, loading, and framing remain consistent.
- Set `priority` only for the principal above-the-fold image.
- Destination OG files follow `/brand/og/destination-{slug}.png`.
- Hotel OG files follow `/brand/og/hotel-{slug}.png`.
- All other routes use the group-level Open Graph plate unless given an intentional raster override.
- Do not point social metadata at SVG assets.
- Keep British English, euros, metric units, and `D MMMM YYYY` dates consistent unless rebranding the entire blueprint.
- Avoid `Intl` unless the rendering strategy is changed to guarantee server/client equivalence.
- Preserve the dark opening surface or revise the header-state design at the same time.
- New animations must use the tokenized motion vocabulary and account for reduced motion.
- Keep client components narrowly scoped.
- The global horizontal-overflow safeguards are intentional.
- Tailwind CSS 4 is imported directly from `globals.css`; brand tokens are exposed through `@theme inline`.
- There are no required environment variables or secrets.
- Validation commands are:

```bash
npm run lint
npm run typecheck
npm run build
```

The release build produces 75 static outputs.

# Interesting Engineering

## Independent header state

The header avoids a route-by-route appearance matrix. A common hero surface allows one Boolean—whether the document has crossed a 24-pixel scroll threshold—to determine presentation.

## Route-associated menu state

The menu stores the pathname on which it opened. Its visible state is:

```text
menu.open && menu.path === currentPath
```

A route transition closes the menu naturally without an effect that reacts after navigation.

## Shared breadcrumb source

Detail pages use the same breadcrumb array for visible navigation and `BreadcrumbList` JSON-LD. Visual and machine-readable trails cannot silently diverge.

## Hydration-safe motion state

Viewport and scroll hooks start with server-compatible values and update after mount. The homepage sequence also starts at frame zero on both server and initial client render.

## Reduced motion as behavioral change

The homepage sequence does not merely cross-fade faster under reduced motion; it stops automatic progression and removes the irrelevant pause control.

## Structured-data restraint

Hotel testimonials remain visible editorial content but are excluded from review schema because they are fictional. This is an explicit example of schema reflecting substantiated reality rather than page appearance.

## Content-driven sitemap

The sitemap and dynamic routes depend on the same domain arrays. Adding a property, room, restaurant, spa, experience, or article automatically affects both routing and discovery output.

## Honest absence states

Properties without a spa or dining collection receive truthful copy or an explicit empty state rather than invented inventory.

# Limitations

The blueprint intentionally does not provide:

- A booking engine
- Live availability
- Inventory or rate management
- Payment processing
- Reservation submission
- Server-side forms
- User accounts
- Authentication
- Customer profiles
- Saved stays or wish lists
- Search
- Filtering or sorting controls
- Maps or geocoding
- Real-time localization
- Multiple currencies
- CMS integration
- API integration
- Database persistence
- Analytics
- Advertising or marketing pixels
- Cookie consent tooling
- Reviews or ratings
- Real hospitality data
- Dynamic Open Graph generation
- Offline service-worker behavior
- Full PWA installation logic beyond the manifest
- Automated unit, integration, or end-to-end test suites
- Editorial preview or draft workflows
- Runtime content validation
- Image focal-point metadata
- Automatic image art direction using `<picture>` source variants

The contact details and URLs in the content are fictional demonstration data. They must be replaced before adapting the implementation for a real organization.

The static TypeScript content architecture is appropriate for a reference implementation but is not a substitute for a CMS where nontechnical editors need independent publishing control.

# Suggested Tags

- hubzero
- blueprint
- hospitality
- luxury
- hotel-group
- multi-property
- travel
- destination-discovery
- accommodation
- dining
- wellness
- experiences
- meetings
- weddings
- editorial
- static-site-generation
- nextjs
- react
- typescript
- tailwind-css
- app-router
- structured-data
- seo
- accessibility
- responsive-design
- reduced-motion
- design-system
- fictional-brand
- content-modeling
- image-optimization

# Structured Summary

```yaml
name: "HubZero Blueprint — Hospitality / Luxury"
type: "HubZero Blueprint reference implementation"
status: "released"
repository: "https://github.com/HubZeroHQ/blueprint-hospitality-luxury"
technologies:
  - "Next.js 16.2"
  - "React 19.2"
  - "TypeScript 5"
  - "Tailwind CSS 4"
  - "PostCSS"
  - "Class Variance Authority"
  - "next/image"
  - "next/font"
architecture: "Hospitality"
design_language: "Luxury"
domains:
  - "multi-property hospitality"
  - "destinations"
  - "hotels"
  - "rooms and villas"
  - "dining"
  - "wellness"
  - "experiences"
  - "weddings and celebrations"
  - "meetings and gatherings"
  - "editorial journal"
  - "sustainability"
  - "reservations enquiry"
primary_language: "TypeScript"
platforms:
  - "responsive web"
  - "server-rendered HTML"
  - "statically generated deployment"
difficulty: "advanced"
maturity: "production-ready reference implementation"
key_features:
  - "67 public URLs generated from typed content"
  - "75 static Next.js build outputs"
  - "typed relational hospitality content model"
  - "static dynamic-route generation"
  - "destination, hotel, suite, dining, wellness, experience, and journal detail pages"
  - "accessible floating navigation and modal menu"
  - "reduced-motion-aware homepage light sequence"
  - "responsive editorial photography system"
  - "centralized metadata and canonical URL generation"
  - "Hotel, Restaurant, Article, FAQPage, BreadcrumbList, Organization, and WebSite JSON-LD"
  - "generated sitemap, robots rules, and manifest"
  - "designed loading, error, empty, and not-found states"
  - "honest enquiry behavior without simulated backend functionality"
engineering_highlights:
  - "server-first component architecture"
  - "single content access layer"
  - "domain-to-card adapters"
  - "content-driven routing and sitemap generation"
  - "deterministic date, rate, and duration formatting"
  - "scroll-only header state"
  - "route-associated menu state"
  - "mechanism-only Reveal component with CSS-owned motion"
  - "shared visible and structured-data breadcrumbs"
  - "raster social assets separated from browser display imagery"
  - "explicit omission of fictional review schema"
related_projects:
  - "HubZero Blueprint Core"
  - "HubZero Blueprint Base"
  - "HubZero Studio AI"
keywords:
  - "hospitality blueprint"
  - "luxury design system"
  - "hotel website architecture"
  - "multi-property content model"
  - "Next.js App Router"
  - "static generation"
  - "structured data"
  - "responsive editorial design"
  - "accessibility"
  - "reduced motion"
  - "fictional brand demonstration"
```
