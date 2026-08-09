import "./globals.css";

import { Cormorant_Garamond, Jost } from "next/font/google";

import { metadata } from "@/config/metadata";
import { site } from "@/config/site";
import { AppProvider } from "@/providers/AppProvider";
import { JsonLd } from "@/components/shared/JsonLd";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/shared/SkipLink";
import { organizationJsonLd, websiteJsonLd } from "@/seo/jsonLd";

export { metadata };

export const viewport = {
  themeColor: site.themeColor,
};

/**
 * One display voice and one text voice, loaded as variables so the design
 * language decides where each is used rather than the font import doing it.
 */
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const text = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.locale.lang}
      // Declares the smooth scrolling set in `globals.css` so the router
      // restores scroll position instantly on route changes rather than
      // animating to it.
      data-scroll-behavior="smooth"
      className={`${display.variable} ${text.variable}`}
    >
      <head>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </head>
      <body>
        <SkipLink />
        <AppProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </AppProvider>
      </body>
    </html>
  );
}
