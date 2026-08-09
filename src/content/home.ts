import type { ContentBlock, ImageAsset } from "./types";

/**
 * The homepage's own composition. The light sequence is the blueprint's one
 * signature interaction, so what it shows is content rather than something
 * assembled inside the component.
 */

export interface SequenceFrame {
  /** The hour the frame is standing in — the sequence's organising idea. */
  hour: string;
  place: string;
  caption: string;
  href: string;
  image: ImageAsset;
}

export const lightSequence: SequenceFrame[] = [
  {
    hour: "05:40",
    place: "Verane",
    caption: "The lake, before the wind comes over the eastern ridge.",
    href: "/destinations/verane",
    image: {
      src: "/images/destinations/verane-editorial.webp",
      alt: "Lake Verane before sunrise, mist lying flat on the water beneath dark ridges.",
    },
  },
  {
    hour: "12:10",
    place: "Calanera",
    caption: "Midday on the cliff, when the sea goes the colour of glass.",
    href: "/destinations/calanera",
    image: {
      src: "/images/destinations/calanera-editorial.webp",
      alt: "Clear midday water below the limestone cliffs of the Calanera coast.",
    },
  },
  {
    hour: "18:25",
    place: "Sabaia",
    caption: "The escarpment taking the whole of the last light.",
    href: "/destinations/sabaia",
    image: {
      src: "/images/destinations/sabaia-editorial.webp",
      alt: "The Sabaia escarpment lit red above grey desert sand at sunset.",
    },
  },
  {
    hour: "23:50",
    place: "Lindhavn",
    caption: "Four hundred metres of black water, and no other light.",
    href: "/destinations/lindhavn",
    image: {
      src: "/images/destinations/lindhavn-editorial.webp",
      alt: "Night over Lindhavn fjord, mountains barely visible above still black water.",
    },
  },
];

export const introduction: ContentBlock[] = [
  {
    type: "paragraph",
    text: "Six houses, in six places we would go anyway. Each was bought because of where it stands, restored with the materials of that place, and is run by someone who lives there. Nothing is rolled out across the collection because it happened to work somewhere else.",
  },
  {
    type: "paragraph",
    text: "We are not looking for a seventh with any urgency. When we describe ourselves as a small collection, that is a decision rather than a stage we are passing through.",
  },
];

export const collectionAside = {
  image: {
    src: "/images/destinations/aubris-editorial.webp",
    alt: "Vine rows on the Aubris Downs under a low evening sky.",
  } satisfies ImageAsset,
  caption: "Maison Aubris, the western slope, late September.",
};
