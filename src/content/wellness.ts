import type { Spa } from "./types";

/**
 * Sérène is Montreval's wellness house, present in four of the six hotels.
 * Calanera and Aubris have treatment rooms but no Sérène, and the site says
 * so rather than implying a facility that is not there.
 */
export const spas: Spa[] = [
  {
    slug: "serene-verane",
    name: "Sérène Verane",
    hotelSlug: "montreval-verane",
    standfirst: "A thermal bath cut into the hillside, and a cold pool fed straight from the lake.",
    summary:
      "Six treatment rooms, a thermal bath at thirty-six degrees, and an outdoor cold pool that in February is a genuinely serious proposition.",
    body: [
      {
        type: "paragraph",
        text: "Sérène Verane is built into the hillside behind the farmhouse, which means three of its four walls are limestone and it holds temperature without much help. The main bath is thirty-six degrees, fed from a spring the farm has used since the 1890s, and it is deep enough to stand in up to the collarbone.",
      },
      {
        type: "paragraph",
        text: "Outside, a cold pool sits open to the lake and takes the lake's temperature: twenty-one degrees in August, four in February. There is no chiller and no heater. What the valley provides is what you get, and the February version is the one guests remember.",
      },
      {
        type: "heading",
        text: "How it is used",
      },
      {
        type: "paragraph",
        text: "The spa is open to house guests only and never charges for use of the baths, sauna or steam room. Treatments are charged. The quiet room holds eleven people and there is no music in it, which is deliberate and occasionally requires explaining.",
      },
    ],
    facilities: [
      "Thermal bath, 36°C, spring-fed",
      "Outdoor cold pool at lake temperature",
      "Wood-fired sauna and steam room",
      "Six treatment rooms, two for couples",
      "Quiet room with no music",
      "Heated indoor swimming pool, 18 m",
    ],
    treatments: [
      {
        name: "The Long Bath",
        minutes: 120,
        price: 210,
        description:
          "A guided sequence through the thermal bath, sauna and cold pool with a therapist setting the intervals. The most-booked thing we do.",
      },
      {
        name: "Larch and Wool",
        minutes: 90,
        price: 245,
        description:
          "A firm full-body treatment using larch resin oil pressed in the valley, finished under warmed wool rather than towels.",
      },
      {
        name: "Mountain Legs",
        minutes: 60,
        price: 165,
        description:
          "For guests who have walked further than they meant to. Legs and feet only, cold then warm, in that order.",
      },
      {
        name: "Two Hours, Nothing Booked",
        minutes: 120,
        price: 0,
        description:
          "Not a treatment. A therapist reserves the quiet room and the bath for you and no one asks you anything for two hours. No charge, by arrangement at the desk.",
      },
    ],
    hours: "07:00 – 21:00 daily. Treatments from 09:00.",
    image: {
      src: "/images/wellness/serene-verane.svg",
      alt: "The spring-fed thermal bath at Sérène Verane cut into limestone, steam rising in low light.",
    },
  },
  {
    slug: "serene-sabaia",
    name: "Sérène Sabaia",
    hotelSlug: "montreval-sabaia",
    standfirst: "A hammam under canvas, and a cold room at eleven degrees when the desert is at thirty.",
    summary:
      "Three treatment tents, a stone hammam built into the escarpment, and a cold room kept at eleven degrees without mechanical cooling.",
    body: [
      {
        type: "paragraph",
        text: "The hammam at Sabaia is the only permanent stone structure in the camp, built into a fissure in the escarpment where the rock is already cool. It is heated by a wood furnace behind the wall, in the way the district has heated bathhouses for a very long time, and it takes four hours to bring up to temperature.",
      },
      {
        type: "paragraph",
        text: "Next to it, cut deeper into the same fissure, is the cold room. There is no machinery in it. It sits at about eleven degrees year-round because it is eleven metres into rock, and on a thirty-degree afternoon it is the most extraordinary room in the collection.",
      },
    ],
    facilities: [
      "Stone hammam, wood-fired",
      "Cold room at 11°C, cut into rock",
      "Three treatment tents",
      "Outdoor rinsing court",
      "Shaded rest deck facing the palm gardens",
      "Cold plunge, filled each morning",
    ],
    treatments: [
      {
        name: "The Hammam Hour",
        minutes: 60,
        price: 190,
        description:
          "Steam, black soap, a rough glove and a great deal of water, in the order the district has always done it.",
      },
      {
        name: "Sand and Oil",
        minutes: 90,
        price: 235,
        description:
          "An exfoliation using fine escarpment sand, followed by argan and date-kernel oil pressed at Adeem.",
      },
      {
        name: "After the Ride",
        minutes: 45,
        price: 140,
        description: "Shoulders, back and hips, for guests who have spent four hours on a horse and regret it.",
      },
    ],
    hours: "08:00 – 20:00 daily. Hammam heated from 14:00.",
    image: {
      src: "/images/wellness/serene-sabaia.svg",
      alt: "The wood-fired stone hammam at Sérène Sabaia built into a fissure in the escarpment.",
    },
  },
  {
    slug: "serene-tamerin",
    name: "Sérène Tamerin",
    hotelSlug: "montreval-tamerin",
    standfirst: "Two treatment rooms over the shallows, with the floor open to the water.",
    summary:
      "A small pavilion standing over the lagoon, with cut-outs in the floor so that the water is directly beneath the table.",
    body: [
      {
        type: "paragraph",
        text: "Sérène Tamerin is deliberately the smallest spa in the collection: two treatment rooms and a rest deck, standing on piles over the shallows. Each room has a glazed cut-out in the floor beneath the treatment table, which sounds like a gimmick and is, in practice, the reason people book a second treatment.",
      },
      {
        type: "paragraph",
        text: "There is no sauna, no steam room and no pool. The lagoon is thirty degrees for most of the year and the freshwater pool is ninety seconds' walk away; building a heat facility here would have been an exercise in filling a brochure.",
      },
    ],
    facilities: [
      "Two treatment rooms over the shallows",
      "Glazed floor cut-outs above the water",
      "Shaded rest deck and hammocks",
      "Freshwater outdoor showers",
      "Oils blended on the motu",
      "No sauna or steam room, by design",
    ],
    treatments: [
      {
        name: "Coconut and Salt",
        minutes: 75,
        price: 205,
        description:
          "Salt from the eastern pans, coconut oil pressed on the motu, and firm pressure through the shoulders.",
      },
      {
        name: "After the Reef",
        minutes: 50,
        price: 155,
        description:
          "For necks and lower backs that have spent three hours face-down in a lagoon. More common than you would think.",
      },
      {
        name: "The Slow Hour",
        minutes: 60,
        price: 180,
        description: "Very light pressure, very little conversation, directly above the water.",
      },
    ],
    hours: "09:00 – 19:00 daily.",
    image: {
      src: "/images/wellness/serene-tamerin.svg",
      alt: "A treatment pavilion at Sérène Tamerin standing over the lagoon with light off the water.",
    },
  },
  {
    slug: "serene-lindhavn",
    name: "Sérène Lindhavn",
    hotelSlug: "montreval-lindhavn",
    standfirst: "Two saunas, a steam room, and a hole in the deck into four hundred metres of fjord.",
    summary:
      "A bathhouse on piles over the water. The reason most guests come to Lindhavn, and the reason many of them return.",
    body: [
      {
        type: "paragraph",
        text: "The bathhouse stands out over the fjord on its own piles, reached by a covered walk from the main house. Two saunas — one hot and dry at ninety degrees, one lower and longer at seventy — a steam room, and a cold plunge that is not a plunge pool but a square hole cut through the deck into open water.",
      },
      {
        type: "paragraph",
        text: "The fjord runs between two and fourteen degrees across the year. In February it is two. There is a ladder, a rope, a member of staff within sight at all times, and a rule that nobody goes in alone. Guests with heart conditions are asked, sincerely rather than as a formality, to speak to us first.",
      },
      {
        type: "heading",
        text: "The long room",
      },
      {
        type: "paragraph",
        text: "At the western end is a room with benches, blankets, no heating and a window the width of the building. Most of the time spent in the bathhouse is spent in there, wrapped up, looking at the water and saying very little.",
      },
    ],
    facilities: [
      "Hot sauna at 90°C, wood-fired",
      "Long sauna at 70°C, for sitting an hour",
      "Steam room and rinsing showers",
      "Cold plunge cut into open fjord water",
      "Unheated long room with blankets",
      "Open 06:00 to midnight, staffed throughout",
    ],
    treatments: [
      {
        name: "Ice and Steam",
        minutes: 120,
        price: 220,
        description:
          "A guided sequence of sauna, fjord, long room, repeated four times with a therapist keeping the intervals honest.",
      },
      {
        name: "Birch and Oil",
        minutes: 90,
        price: 250,
        description:
          "A firm treatment using birch oil from the head of the fjord, finished with twenty minutes in the long room.",
      },
      {
        name: "The Quiet Sauna",
        minutes: 60,
        price: 0,
        description:
          "The long sauna, reserved for you alone, for an hour, at no charge. Book at the desk; mornings are easiest.",
      },
    ],
    hours: "06:00 – 24:00 daily. Treatments 09:00 – 20:00.",
    image: {
      src: "/images/hotels/montreval-lindhavn-bathhouse.webp",
      alt: "The bathhouse at Sérène Lindhavn standing on piles over black fjord water in blue light.",
    },
  },
];
