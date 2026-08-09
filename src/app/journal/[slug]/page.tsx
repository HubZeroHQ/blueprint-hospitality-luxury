import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { articleCard } from "@/components/sections/cards";
import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Figure } from "@/components/ui/Figure";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getJournalArticle,
  getRelatedArticles,
  journalArticles,
} from "@/content";
import { articleJsonLd, breadcrumbJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";
import { formatDate } from "@/utils/format";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    return createMetadata({ title: "Entry not found" });
  }

  return createMetadata({
    title: article.title,
    description: article.standfirst,
    canonical: `/journal/${article.slug}`,
    keywords: [article.category, "hotel journal", "travel writing"],
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article.slug, 3);

  const crumbs = [
    { label: "Montreval", href: "/" },
    { label: "Journal", href: "/journal" },
    { label: article.title, href: `/journal/${article.slug}` },
  ];

  return (
    <Page>
      <JsonLd data={[articleJsonLd(article), breadcrumbJsonLd(crumbs)]} />

      <PageHero
        eyebrow={article.category}
        title={article.title}
        standfirst={article.standfirst}
        crumbs={crumbs}
        size="short"
      >
        <p className="text-[0.9375rem] font-light text-paper/60">
          {article.author}
          <span className="mx-3 text-paper/30">/</span>
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          <span className="mx-3 text-paper/30">/</span>
          {article.readingMinutes} minutes
        </p>
      </PageHero>

      <Section space="spacious">
        <Container>
          <Reveal className="mx-auto max-w-4xl">
            <Figure image={article.image} ratio="wide" sizes="(min-width: 1024px) 64rem, 100vw" priority />
          </Reveal>

          <Reveal>
            <article className="mx-auto mt-16 max-w-[42rem]">
              <Prose blocks={article.body} />
            </article>
          </Reveal>
        </Container>
      </Section>

      <Section space="spacious" className="bg-paper-warm">
        <Container>
          <SectionHeading
            eyebrow="Also in the journal"
            title="More from the houses"
            action={
              <Button href="/journal" variant="quiet">
                Every entry
              </Button>
            }
            className="mb-16"
          />

          <CollectionGrid
            emptyState="This is the only entry we have published so far."
            items={related.map(articleCard)}
          />
        </Container>
      </Section>

      <EnquiryBand />
    </Page>
  );
}
