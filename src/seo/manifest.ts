import type { MetadataRoute } from "next";

import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    lang: site.locale.lang,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5f0",
    theme_color: site.themeColor,
    icons: [
      {
        src: site.icon,
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: site.assets.appleTouchIcon,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
