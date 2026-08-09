import type { Metadata } from "next";

import { seoDefaults } from "@/seo/defaults";
import { site } from "./site";

/**
 * Root metadata. Page-level metadata is produced by `createMetadata`, which
 * already appends the site name — so no `title.template` is declared here; one
 * would append it a second time.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: seoDefaults.title,
    absolute: seoDefaults.title,
  },

  description: site.description,

  applicationName: site.name,

  authors: [
    {
      name: site.author.name,
      url: site.author.url,
    },
  ],

  creator: site.author.name,
  publisher: site.legalName,

  /* Fictional contact details should not be linkified by mobile browsers. */
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  icons: {
    icon: [
      { url: site.icon, sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: site.assets.appleTouchIcon,
  },

  alternates: {
    canonical: site.url,
  },

  openGraph: {
    type: "website",
    locale: site.locale.openGraph,
    siteName: site.name,
    title: seoDefaults.title,
    description: site.description,
    url: site.url,
    images: [
      {
        url: site.assets.openGraph,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seoDefaults.title,
    description: site.description,
    images: [site.assets.openGraph],
  },
};
