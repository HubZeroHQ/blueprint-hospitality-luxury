import { Container } from "@/components/layout/Container";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { Page } from "@/components/layout/Page";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content";
import { breadcrumbJsonLd, faqJsonLd } from "@/seo/jsonLd";
import { createMetadata } from "@/seo/createMetadata";

const crumbs = [
  { label: "Montreval", href: "/" },
  { label: "Questions", href: "/faqs" },
];

export const metadata = createMetadata({
  title: "Questions",
  description:
    "What a rate includes, whether children and dogs are welcome, how accessible each house is, how cold the water at Lindhavn actually is, and why Sabaia closes in summer.",
  canonical: "/faqs",
  keywords: [
    "hotel FAQ",
    "cancellation policy",
    "accessibility",
    "children",
    "dogs",
  ],
});

export default function FaqsPage() {
  /* Grouped in the order the categories first appear, not alphabetically. */
  const categories = faqs.reduce<string[]>((all, faq) => {
    return all.includes(faq.category) ? all : [...all, faq.category];
  }, []);

  return (
    <Page>
      <JsonLd data={[faqJsonLd(faqs), breadcrumbJsonLd(crumbs)]} />

      <PageHero
        eyebrow="Questions"
        title="Answered plainly"
        standfirst="Including the ones with awkward answers: which house is difficult to get around, which months we would rather you avoided, and whether you can actually book on this website."
        crumbs={crumbs}
        size="short"
      />

      {categories.map((category, index) => (
        <Section
          key={category}
          space="spacious"
          className={index % 2 === 1 ? "bg-paper-warm" : undefined}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-20">
              <SectionHeading eyebrow="Questions about" title={category} size="sm" />

              <Reveal>
                <ul>
                  {faqs
                    .filter((faq) => faq.category === category)
                    .map((faq) => (
                      <li key={faq.question} className="border-t border-line">
                        {/*
                          A native disclosure element: keyboard-operable,
                          announced correctly, and it works before any
                          JavaScript has loaded.
                        */}
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-baseline justify-between gap-8 py-6 text-left [&::-webkit-details-marker]:hidden">
                            <span className="display display-sm text-ink transition-opacity duration-[var(--duration-fast)] group-hover:opacity-70">
                              {faq.question}
                            </span>
                            <span
                              aria-hidden
                              className="relative mt-3 block h-3 w-3 shrink-0"
                            >
                              <span className="absolute left-0 top-1/2 block h-px w-3 bg-ink" />
                              <span className="absolute left-1/2 top-0 block h-3 w-px bg-ink transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)] group-open:rotate-90" />
                            </span>
                          </summary>

                          <p className="max-w-[62ch] pb-8 text-[1rem] font-light leading-relaxed text-ink-muted">
                            {faq.answer}
                          </p>
                        </details>
                      </li>
                    ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      <EnquiryBand
        title="Something we have not answered?"
        body="Our reservations team would rather answer a question before you book than explain something after you arrive."
      />
    </Page>
  );
}
