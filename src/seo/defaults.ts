import { site } from "@/config/site";

export const seoDefaults = {
  title: `${site.name} — ${site.tagline}`,

  description: site.description,

  siteName: site.name,

  url: site.url,

  locale: site.locale.openGraph,

  type: "website",

  twitterCard: "summary_large_image",

  /**
   * The default share image. A raster format, because social platforms render
   * SVG inconsistently or not at all — see `.hubzero/experience/branding.md`.
   */
  image: site.assets.openGraph,

  robots: {
    index: true,
    follow: true,
  },
} as const;
