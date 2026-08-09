import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { getLegalDocument } from "@/content";
import { breadcrumbJsonLd } from "@/seo/jsonLd";
import { formatDate } from "@/utils/format";

interface LegalPageProps {
  slug: string;
}

/**
 * Privacy and terms are the same page with different words, so they are the
 * same component. Both open by stating what this website actually is.
 */
export function LegalPage({ slug }: LegalPageProps) {
  const document = getLegalDocument(slug);

  if (!document) {
    notFound();
  }

  const crumbs = [
    { label: "Montreval", href: "/" },
    { label: document.title, href: `/${document.slug}` },
  ];

  return (
    <Page>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Legal"
        title={document.title}
        standfirst={document.description}
        crumbs={crumbs}
        size="short"
      >
        <p className="text-[0.9375rem] font-light text-paper/60">
          Last updated{" "}
          <time dateTime={document.updated}>{formatDate(document.updated)}</time>
        </p>
      </PageHero>

      <Section space="spacious">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[42rem]">
              <Prose blocks={document.body} />
            </div>
          </Reveal>
        </Container>
      </Section>
    </Page>
  );
}
