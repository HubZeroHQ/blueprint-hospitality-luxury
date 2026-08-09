import type { ContentBlock } from "./types";

/**
 * Sustainability. The figures below include the ones that are not improving,
 * which is the only version of this page worth publishing.
 */

export const sustainabilityIntro: ContentBlock[] = [
  {
    type: "paragraph",
    text: "We publish these numbers annually, including the two that are going the wrong way. A hotel group that only reports the metrics it is winning is not reporting, it is advertising.",
  },
  {
    type: "paragraph",
    text: "All six houses were certified to Verdant Standard Level II in 2025 after a two-year assessment. Level III requires a fifty per cent reduction in operational emissions against our 2019 baseline and we are, on current progress, unlikely to reach it before 2029 rather than the 2028 we announced. That is our error and we are not moving the date quietly.",
  },
];

export const commitments: {
  title: string;
  body: string;
  figure: string;
  figureLabel: string;
  trend: "improving" | "holding" | "worsening";
}[] = [
  {
    title: "Food within sixty kilometres",
    body: "Across the six kitchens, measured by spend rather than by number of lines, which is the harder measure and the honest one. Sabaia and Tamerin pull the average down for reasons of geography that will not change.",
    figure: "74%",
    figureLabel: "of food spend sourced within 60 km",
    trend: "improving",
  },
  {
    title: "Energy generated on site",
    body: "Solar at Sabaia and Calanera, ground-source at Lindhavn and Verane. Aubris and Tamerin generate almost nothing and both are constrained — one by a listed roof, the other by salt.",
    figure: "48%",
    figureLabel: "of annual demand generated on site",
    trend: "improving",
  },
  {
    title: "Operational emissions",
    body: "Against a 2019 baseline, per occupied room-night. Progress has slowed since 2023 as occupancy has risen; the absolute figure has fallen while the rate of improvement has not held.",
    figure: "−31%",
    figureLabel: "per occupied room-night since 2019",
    trend: "holding",
  },
  {
    title: "Guest air travel",
    body: "The largest part of our total footprint by a very wide margin, and the part we influence least. Longer stays are the only lever that has measurably worked, which is one reason rates fall on the fourth night.",
    figure: "3.4",
    figureLabel: "average nights per stay, unchanged in a decade",
    trend: "worsening",
  },
  {
    title: "Water at Calanera",
    body: "A cliff-top house on a coast with a summer water deficit. Closed-loop laundry went in during 2024; the pool remains unheated and is filled once each season rather than topped continuously.",
    figure: "−22%",
    figureLabel: "water use per guest since 2022",
    trend: "improving",
  },
  {
    title: "Permanent staff",
    body: "Seasonal contracts are the industry's default and they are corrosive. Staff who wish to work through a closure move between houses; most do. This costs more than seasonal hiring and we consider it non-negotiable.",
    figure: "91%",
    figureLabel: "of staff on permanent contracts",
    trend: "holding",
  },
];

export const sustainabilityBody: ContentBlock[] = [
  {
    type: "heading",
    text: "Building to be removed",
  },
  {
    type: "paragraph",
    text: "Sabaia sits on screw piles rather than foundations and can be struck, with the ground returned to sand, in eleven weeks. This was a condition of the lease from the Adeem families rather than our idea, and it turned out to be the most useful design constraint we have ever worked to. Tamerin was built the same way for the same reason.",
  },
  {
    type: "heading",
    text: "What we have stopped doing",
  },
  {
    type: "list",
    items: [
      "Single-use plastic anywhere in the six houses, since 2021.",
      "Air-freighted food, without exception, since 2022. This is why there are no berries at Lindhavn in January.",
      "Heating the pool at Calanera, since 2023. It is now cold, and we say so at booking.",
      "Daily linen changes as a default, since 2021. Roughly one guest in nine asks for them.",
    ],
  },
  {
    type: "heading",
    text: "The reef survey",
  },
  {
    type: "paragraph",
    text: "The Tamerin reef has been surveyed on the same transects since 1996, jointly with the district fisheries office since 2019. Coral cover on the northern arm has risen from 31 to 46 per cent. We would like to claim this and cannot: the survey predates us by twenty-three years and our marine team is clear that the causes are not fully understood.",
  },
  {
    type: "heading",
    text: "Where the money goes",
  },
  {
    type: "paragraph",
    text: "Two per cent of room revenue funds the Verdant programme across the six houses. It is not a guest donation, it does not appear on your bill, and there is no box to tick at checkout. It comes out of the rate you were quoted.",
  },
  {
    type: "quote",
    text: "A hotel group that only reports the metrics it is winning is not reporting, it is advertising.",
    attribution: "Noor Halvani, Director of Sustainability",
  },
];
