import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Display, Eyebrow } from "@/components/ui/Type";
import { Section } from "@/components/layout/Section";
import { site } from "@/config/site";

interface EnquiryBandProps {
  eyebrow?: string;
  title?: string;
  body?: string;
}

/**
 * The single conversion moment, repeated at the foot of every page.
 *
 * It is honest about what it is: two links, one to a telephone and one to an
 * email client. There is no form here because there is no backend behind this
 * blueprint to receive one — see `.hubzero/principles.md`, Honest
 * Demonstration Over Simulated Functionality.
 */
export function EnquiryBand({
  eyebrow = "Reservations",
  title = "Tell us roughly when, and how long you can stay.",
  body = "Our own team answers, not an agency. Rates fall on the fourth night and again on the seventh, which tells you what we would prefer.",
}: EnquiryBandProps) {
  return (
    <Section space="spacious" className="bg-ink text-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-24">
          <div>
            <Eyebrow tone="inverse" className="mb-6">
              {eyebrow}
            </Eyebrow>

            <Display size="md" className="text-paper">
              {title}
            </Display>

            <p className="lede mt-7 max-w-[48ch] text-paper/70">{body}</p>
          </div>

          <div className="space-y-8">
            <div className="space-y-3 border-t border-line-inverse pt-7">
              <p className="text-[1.0625rem] font-light">
                <a
                  href={`tel:${site.contact.reservations.phoneHref}`}
                  className="underline decoration-paper/25 underline-offset-[0.45em] transition-colors duration-[var(--duration-fast)] hover:decoration-paper"
                >
                  {site.contact.reservations.phone}
                </a>
              </p>
              <p className="text-[1.0625rem] font-light">
                <a
                  href={`mailto:${site.contact.reservations.email}`}
                  className="underline decoration-paper/25 underline-offset-[0.45em] transition-colors duration-[var(--duration-fast)] hover:decoration-paper"
                >
                  {site.contact.reservations.email}
                </a>
              </p>
              <p className="text-[0.875rem] text-paper/50">
                {site.contact.reservations.hours}
              </p>
            </div>

            <Button href="/reservations" tone="inverse">
              How to reserve
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
