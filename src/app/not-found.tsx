import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { navigation } from "@/config/navigation";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "Page not found",
  description:
    "The page you were looking for is not here. The six houses, their rooms and their kitchens are all one link away.",
});

export default function NotFound() {
  return (
    <Page>
      <PageHero
        eyebrow="404"
        title="This page is not here"
        standfirst="Which is our fault rather than yours. Everything the collection publishes is one link below, and reservations will happily find whatever you were after."
        image={{
          src: "/images/pages/not-found.webp",
          alt: "The Sabaia sands at night, the escarpment barely visible under stars.",
        }}
        size="tall"
        priority
      >
        <Button href="/" tone="inverse">
          Return to the collection
        </Button>
      </PageHero>

      <Section space="spacious">
        <Container>
          <SectionHeading
            eyebrow="Where you may have been going"
            title="The six things most people are looking for"
            className="mb-14"
          />

          <ul className="grid gap-x-14 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {navigation.map((item) => (
              <li key={item.href} className="border-t border-line pt-6">
                <Button href={item.href} variant="quiet">
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </Page>
  );
}
