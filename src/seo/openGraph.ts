import { site } from "@/config/site";

/**
 * Share images.
 *
 * Social platforms render SVG inconsistently, so Open Graph metadata always
 * uses dedicated raster plates rather than a page's display image. Places and
 * houses have their own plate; every other page shares the brand plate. See
 * `.hubzero/experience/branding.md`.
 */

export const OG_DIRECTORY = "/brand/og";

export function destinationShareImage(slug: string): string {
  return `${OG_DIRECTORY}/destination-${slug}.png`;
}

export function hotelShareImage(slug: string): string {
  return `${OG_DIRECTORY}/hotel-${slug}.png`;
}

/** The brand plate, used wherever a page has no plate of its own. */
export const defaultShareImage = site.assets.openGraph;
