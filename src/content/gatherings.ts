import type { ContentBlock, Offering, Venue } from "./types";

/**
 * Weddings, celebrations and working gatherings. Both pages share the venue
 * list, which is why it lives here rather than in either of them.
 */

export const venues: Venue[] = [
  {
    slug: "the-hayloft",
    name: "The Hayloft",
    hotelSlug: "montreval-verane",
    capacitySeated: 60,
    capacityStanding: 90,
    area: 180,
    summary:
      "Cimaise's room, taken privately. Five-metre ceilings, the original beam structure, and the lake along one entire side.",
    features: [
      "Available privately from November to April",
      "Open kitchen at one end",
      "Step-free from the terrace",
      "Wool acoustics; speech carries without amplification",
    ],
  },
  {
    slug: "the-boathouse",
    name: "The Boathouse",
    hotelSlug: "montreval-verane",
    capacitySeated: 30,
    capacityStanding: 45,
    area: 95,
    summary:
      "The lake pavilion at the end of the terrace, open on three sides, with the water directly beneath the deck.",
    features: [
      "May to early October",
      "Charcoal grill and a service counter",
      "Weather-dependent; a covered alternative is always held",
      "Boats can be moved out for the evening",
    ],
  },
  {
    slug: "the-second-terrace",
    name: "The Second Terrace",
    hotelSlug: "montreval-calanera",
    capacitySeated: 80,
    capacityStanding: 120,
    area: 240,
    summary:
      "The full terrace at Marena, under the original vine pergola, ninety metres above the sea.",
    features: [
      "April to early November",
      "Exclusive use requires the whole house",
      "Lift access to terrace level",
      "Lemon terraces open to guests through the evening",
    ],
  },
  {
    slug: "the-long-room",
    name: "The Long Room",
    hotelSlug: "maison-aubris",
    capacitySeated: 28,
    capacityStanding: 40,
    area: 70,
    summary:
      "The nine-metre oak table at Table d'Aubris, and the courtyard outside it. One room, one table, one sitting.",
    features: [
      "All year",
      "One menu, written the same afternoon",
      "Chalk cellar available for the aperitif",
      "Step-free from the courtyard",
    ],
  },
  {
    slug: "the-fire-circle",
    name: "The Fire Circle",
    hotelSlug: "montreval-sabaia",
    capacitySeated: 50,
    capacityStanding: 70,
    area: 300,
    summary:
      "Open sand below the escarpment, lit entirely by fire and lanterns. No power, no amplification, no roof.",
    features: [
      "September to mid-June",
      "Wind-dependent; the dining tent is always held in reserve",
      "No electric light after ten in the evening",
      "Sand is level and firm; wheelchairs are workable with notice",
    ],
  },
  {
    slug: "the-sail-pavilion",
    name: "The Sail Pavilion",
    hotelSlug: "montreval-tamerin",
    capacitySeated: 60,
    capacityStanding: 90,
    area: 200,
    summary:
      "A canvas pavilion on the sand at the northern end of the beach, rigged by the boat crew and struck the following morning.",
    features: [
      "All year, subject to season",
      "Rigged and struck for each event",
      "Power limited to lighting and one sound point",
      "Exclusive use of the island requires all 24 villas",
    ],
  },
];

export const celebrations: Offering[] = [
  {
    slug: "the-small-wedding",
    name: "The Small Wedding",
    summary:
      "Up to thirty guests, one room, one long table, and a house that does not have to be cleared of anybody else.",
    detail: [
      "Thirty guests is the number at which a wedding is still a dinner. Everyone can hear the speeches without amplification, everyone meets everyone, and nobody spends the evening at a table of strangers on the far side of a marquee.",
      "We hold the room, the menu is written with you over two conversations rather than chosen from a folder, and the rest of the house carries on around you. Most of our weddings are this one.",
    ],
    meta: [
      { label: "Guests", value: "Up to 30" },
      { label: "Houses", value: "All six" },
      { label: "From", value: "€8,400 for the room and dinner" },
      { label: "Notice", value: "Four months is comfortable" },
    ],
  },
  {
    slug: "the-whole-house",
    name: "The Whole House",
    summary:
      "Exclusive use of one of the six. Every room, every terrace, both kitchens, and no other guests for the duration.",
    detail: [
      "Taking a house entirely is the only way to have a celebration that spills into corridors, runs past midnight and starts again at breakfast without anyone being inconvenienced by it.",
      "Aubris is the easiest at twenty-two rooms and the one we most often recommend. Tamerin requires all twenty-four villas and, in practice, a party of about fifty. Verane in February is the quiet extravagance: thirty-eight rooms, snow, and the thermal bath to yourselves.",
    ],
    meta: [
      { label: "Guests", value: "44 to 90, by house" },
      { label: "Minimum stay", value: "Three nights" },
      { label: "From", value: "€21,000 per night, all rooms" },
      { label: "Notice", value: "Nine months for summer dates" },
    ],
  },
  {
    slug: "the-return",
    name: "The Return",
    summary:
      "For anniversaries, vow renewals and the birthdays nobody wants a party for. A dinner, a room, and one thing arranged privately.",
    detail: [
      "Not everything worth marking wants an event. The Return is a dinner for between two and twelve, in a room of your own, with one experience arranged around it — the boat at dawn, the cellar at six, the bathhouse held empty for an hour.",
      "There is no package, no cake decision and nobody singing. We ask what the occasion is and then, mostly, leave you to it.",
    ],
    meta: [
      { label: "Guests", value: "2 to 12" },
      { label: "Houses", value: "All six" },
      { label: "From", value: "€180 per person" },
      { label: "Notice", value: "Two weeks" },
    ],
  },
];

export const celebrationsIntro: ContentBlock[] = [
  {
    type: "paragraph",
    text: "We host about forty weddings a year across six houses, which is roughly seven each, which is deliberate. A house that hosts a wedding every Saturday is a venue with rooms attached, and that is a different business from ours.",
  },
  {
    type: "paragraph",
    text: "There is no events team. You will deal with the director of the house you have chosen, and with the same two people from the first conversation to the last. Menus are written rather than chosen. There is no folder.",
  },
];

export const meetings: Offering[] = [
  {
    slug: "the-working-week",
    name: "The Working Week",
    summary:
      "Four days, one room, up to twenty-eight people, and an afternoon each day when nothing is scheduled at all.",
    detail: [
      "Our view, formed by watching a great many of these, is that the useful part of an offsite happens in the gaps. So the format we recommend holds mornings for work, keeps afternoons genuinely empty, and puts everyone at one table in the evening.",
      "The room is yours for the duration and is not turned over for anybody else. Screens, boards and a decent connection are provided as a matter of course rather than as a line item.",
    ],
    meta: [
      { label: "Group size", value: "8 to 28" },
      { label: "Houses", value: "Aubris, Verane, Lindhavn" },
      { label: "From", value: "€310 per person per day, full board" },
      { label: "Includes", value: "Room, all meals, equipment, one experience" },
    ],
  },
  {
    slug: "the-board-day",
    name: "The Board Day",
    summary:
      "One day, one table, up to fourteen. Arrive the evening before, work until three, and leave when it suits you.",
    detail: [
      "For groups that need a room, a table and no interruptions for a single day. Arrival the previous evening is included because a board that has slept badly in transit is not a board that decides anything well.",
      "Lunch is served in the room rather than the restaurant, which saves about forty minutes and is the most appreciated part of the arrangement.",
    ],
    meta: [
      { label: "Group size", value: "6 to 14" },
      { label: "Houses", value: "All six" },
      { label: "From", value: "€2,900 for the day" },
      { label: "Includes", value: "Room, lunch, dinner, overnight before" },
    ],
  },
  {
    slug: "the-quiet-commission",
    name: "The Quiet Commission",
    summary:
      "A house, or part of one, taken for a piece of work that needs uninterrupted weeks rather than days.",
    detail: [
      "Writers, small research groups and, twice now, an orchestra section preparing a recording. Long stays in low season, at a rate that reflects the season honestly, with meals at fixed times and nothing else asked of you.",
      "We do not publish a price for this because it depends entirely on the house, the season and the length. Write to us and we will answer with a number rather than a brochure.",
    ],
    meta: [
      { label: "Group size", value: "1 to 20" },
      { label: "Season", value: "November to March" },
      { label: "Minimum stay", value: "Ten nights" },
      { label: "Rate", value: "By arrangement" },
    ],
  },
];

export const meetingsIntro: ContentBlock[] = [
  {
    type: "paragraph",
    text: "We are not a conference hotel and none of the six houses has a ballroom. What they have is rooms that seat between fourteen and sixty at one table, kitchens that will feed a group without turning it into catering, and enough distance from everything else that nobody slips away at four.",
  },
  {
    type: "paragraph",
    text: "Everything below is priced per person per day, full board, because splitting a gathering into room hire, coffee breaks and delegate rates is a way of making a simple number look smaller than it is.",
  },
];
