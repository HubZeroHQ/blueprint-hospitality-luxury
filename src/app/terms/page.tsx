import { LegalPage } from "@/components/sections/LegalPage";
import { getLegalDocument } from "@/content";
import { createMetadata } from "@/seo/createMetadata";

const document = getLegalDocument("terms");

export const metadata = createMetadata({
  title: document?.title ?? "Terms",
  description: document?.description,
  canonical: "/terms",
});

export default function TermsPage() {
  return <LegalPage slug="terms" />;
}
