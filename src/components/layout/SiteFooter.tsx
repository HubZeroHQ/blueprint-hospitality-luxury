import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Type";
import { Wordmark } from "@/components/layout/Wordmark";
import { footerNavigation } from "@/config/navigation";
import { site } from "@/config/site";

/**
 * The footer carries the collection's second navigation, the group's real
 * contact details, and the HubZero attribution required by
 * `.hubzero/experience/branding.md` — kept in the same understated register as
 * a printing credit rather than competing with the brand above it.
 */
export function SiteFooter() {
  const year = site.founded;

  return (
    <footer className="bg-ink text-paper">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-[1fr_2fr] lg:gap-24 lg:py-28">
          <div>
            <Wordmark tone="inverse" className="h-6" />

            <p className="mt-8 max-w-[34ch] text-[0.9375rem] font-light leading-relaxed text-paper/65">
              {site.tagline} Six houses, held privately since {year}.
            </p>

            <div className="mt-10 space-y-3">
              <Eyebrow tone="inverse">{site.contact.reservations.label}</Eyebrow>
              <p className="text-[0.9375rem] font-light">
                <a
                  href={`tel:${site.contact.reservations.phoneHref}`}
                  className="underline decoration-paper/25 underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:decoration-paper"
                >
                  {site.contact.reservations.phone}
                </a>
              </p>
              <p className="text-[0.9375rem] font-light">
                <a
                  href={`mailto:${site.contact.reservations.email}`}
                  className="underline decoration-paper/25 underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:decoration-paper"
                >
                  {site.contact.reservations.email}
                </a>
              </p>
              <p className="text-[0.875rem] font-light text-paper/50">
                {site.contact.reservations.hours}
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4"
          >
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <Eyebrow
                  tone="inverse"
                  as="h2"
                  className="border-t border-line-inverse pt-5"
                >
                  {group.title}
                </Eyebrow>

                <ul className="mt-6 space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.9375rem] font-light text-paper/70 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-paper"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-line-inverse py-10 text-[0.8125rem] font-light text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>
            {site.legalName}, {site.address.inline}
          </p>

          <p>
            {site.attribution.label} —{" "}
            <a
              href={site.attribution.href}
              className="underline decoration-paper/20 underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:text-paper/70 hover:decoration-paper/50"
              rel="noreferrer"
            >
              HubZero
            </a>
            . {site.name} is a fictional company.
          </p>
        </div>
      </Container>
    </footer>
  );
}
