import { LegalPage } from "@/components/sections/LegalPage";
import { getLegalDocument } from "@/content";
import { createMetadata } from "@/seo/createMetadata";

const document = getLegalDocument("privacy");

export const metadata = createMetadata({
  title: document?.title ?? "Privacy",
  description: document?.description,
  canonical: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage slug="privacy" />;
}
