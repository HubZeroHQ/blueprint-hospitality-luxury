import type { Metadata } from "next";

import { seoDefaults } from "./defaults";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  image,
  canonical,
  keywords = [],
}: CreateMetadataOptions = {}): Metadata {
  /*
   * Social platforms render SVG inconsistently or not at all, so a vector
   * image is never published as a share image. Falling back rather than
   * failing keeps a mistake here from producing a link preview with no
   * image at all.
   */
  const shareImage =
    image && !image.endsWith(".svg") ? image : seoDefaults.image;

  const pageTitle = title
    ? `${title} | ${seoDefaults.siteName}`
    : seoDefaults.title;

  const pageDescription =
    description ?? seoDefaults.description;

  const url = canonical
    ? new URL(canonical, seoDefaults.url).toString()
    : seoDefaults.url;

  return {
    title: pageTitle,

    description: pageDescription,

    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: seoDefaults.type,
      locale: seoDefaults.locale,
      url,
      siteName: seoDefaults.siteName,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: shareImage,
          width: 1200,
          height: 630,
          alt: seoDefaults.siteName,
        },
      ],
    },

    twitter: {
      card: seoDefaults.twitterCard,
      title: pageTitle,
      description: pageDescription,
      images: [shareImage],
    },
  };
}
