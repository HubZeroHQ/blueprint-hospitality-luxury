import type { Experience } from "./types";

/**
 * Eight experiences, each led by someone who works at the house rather than
 * by a booked-in guide. Prices are per person in euros; `null` means the
 * experience is included in every stay at that house.
 */
export const experiences: Experience[] = [
  {
    slug: "the-dawn-crossing",
    name: "The Dawn Crossing",
    hotelSlug: "montreval-verane",
    duration: "2 hours 30 minutes",
    season: "May to October",
    groupSize: "Two to six guests",
    price: 140,
    standfirst: "Row six kilometres of flat water before the valley is awake, and have breakfast at the far end.",
    summary:
      "Out at half past five, across the lake by rowing boat, breakfast on the northern shore, and back under the first proper sun of the day.",
    body: [
      {
        type: "paragraph",
        text: "The lake is at its stillest between four and seven in the morning. Wind arrives with the sun over the eastern ridge and the flat water is gone within twenty minutes of it. The Dawn Crossing exists to use that window.",
      },
      {
        type: "paragraph",
        text: "You are woken at five with coffee, on the water by half past, and rowing north with one of the house boatmen. It takes about seventy minutes to reach the northern shore, more if you are talking. Breakfast is laid out on the stones at the far end — bread, butter, cheese, fruit, more coffee — and eaten while the light comes over the ridge behind you.",
      },
      {
        type: "paragraph",
        text: "The row back is downwind and takes half as long. You will be at the house by eight, which most guests find is the best eight o'clock they have had in some time.",
      },
      {
        type: "heading",
        text: "What it asks of you",
      },
      {
        type: "paragraph",
        text: "Nothing athletic. The boats are heavy and forgiving and the boatman does as much of the rowing as you would like — including all of it. It is cold on the water before sunrise even in July; we provide the layers.",
      },
    ],
    includes: [
      "Coffee brought to your room at 05:00",
      "Wooden rowing boat and a house boatman",
      "Breakfast laid on the northern shore",
      "Wool layers and blankets",
      "Return by eight in the morning",
    ],
    image: {
      src: "/images/experiences/the-dawn-crossing.svg",
      alt: "A wooden rowing boat crossing flat water on Lake Verane before sunrise.",
    },
  },
  {
    slug: "larch-and-stone",
    name: "Larch and Stone",
    hotelSlug: "montreval-verane",
    duration: "4 hours",
    season: "May to November",
    groupSize: "Two to eight guests",
    price: 95,
    standfirst: "A morning in a working forest with the four families who work it.",
    summary:
      "Up through the larch to the limestone line at 1,400 metres, with a forester explaining a fourteen-year thinning cycle and why it makes the forest quiet.",
    body: [
      {
        type: "paragraph",
        text: "The forest above the eastern shore has been worked continuously for longer than anyone has kept records, and is thinned on a fourteen-year rotation by four families who hold the licence between them. It is not a protected forest and it is not a wild one. It is a crop, on a very long timescale.",
      },
      {
        type: "paragraph",
        text: "The walk climbs about four hundred metres over two hours, to where the larch gives out and the limestone begins, and comes down a different way. Whoever is working that week walks with you. They will show you which trees are marked, explain why, and — if you ask — be quite direct about what the last three warm winters have done to the cycle.",
      },
    ],
    includes: [
      "Four hours with a working forester",
      "Boots and poles in your size",
      "Bread, cheese and fruit at the limestone line",
      "Return to the house by one o'clock",
      "Suitable for anyone comfortable walking four hours",
    ],
    image: {
      src: "/images/experiences/larch-and-stone.svg",
      alt: "A worked larch forest above Lake Verane, marked trunks and limestone showing through above.",
    },
  },
  {
    slug: "the-salt-path",
    name: "The Salt Path",
    hotelSlug: "montreval-calanera",
    duration: "5 hours",
    season: "June to October",
    groupSize: "Two to six guests",
    price: 180,
    standfirst: "The cliff path to Vinca, then into the sea caves, then lunch on the boat.",
    summary:
      "Six kilometres of cliff path, a two-hundred-metre swim into the caves at Vinca, and lunch on the launch on the way home.",
    body: [
      {
        type: "paragraph",
        text: "You walk out and come back by sea. The path leaves from the fourth terrace and runs north above the water for about six kilometres, dropping twice to sea level at Sella and at the small cove nobody has bothered to name.",
      },
      {
        type: "paragraph",
        text: "At Vinca the launch meets you. From there it is a swim of about two hundred metres into the caves, which are large, cold and quite dark at the back. Nino decides in the morning which of them is going to be pleasant, and his judgement on this has never once been wrong.",
      },
      {
        type: "paragraph",
        text: "Lunch is on the boat on the way back — bread, tomatoes, cheese, cold wine — and the whole thing is finished by about three.",
      },
      {
        type: "heading",
        text: "What it asks of you",
      },
      {
        type: "paragraph",
        text: "You need to be able to swim two hundred metres without hurrying, and to be comfortable in deep water with no floor visible. If either of those is a stretch, the walk on its own is worth doing and the boat will simply meet you.",
      },
    ],
    includes: [
      "Guided cliff walk, six kilometres",
      "Launch, boatman and the caves at Vinca",
      "Lunch and cold wine on the boat",
      "Masks, fins and dry bags",
      "Back at the house by three o'clock",
    ],
    image: {
      src: "/images/experiences/the-salt-path.svg",
      alt: "The mouth of a sea cave at Vinca on the Calanera coast, light striking clear water inside.",
    },
  },
  {
    slug: "cellar-hours",
    name: "Cellar Hours",
    hotelSlug: "maison-aubris",
    duration: "2 hours",
    season: "All year",
    groupSize: "Two to ten guests",
    price: null,
    standfirst: "Down into the chalk with the winemaker, at six, with a glass and a torch.",
    summary:
      "Two hours in an 1804 chalk cellar with Hugo Vasseur, tasting out of barrel, including the things that are not working.",
    body: [
      {
        type: "paragraph",
        text: "At six o'clock most evenings, Hugo Vasseur takes whoever is interested down into the cellar. It holds twelve degrees without any help, it is lit by about nine bulbs across ninety metres, and it smells the way a chalk cellar smells, which is not something that reproduces in a bottle.",
      },
      {
        type: "paragraph",
        text: "You taste out of barrel — including, deliberately, at least one barrel that is not going the way it should. Hugo's view is that a tasting where everything is excellent teaches you nothing, and having sat through a great many of both kinds, we agree with him.",
      },
      {
        type: "paragraph",
        text: "Included in every stay at Aubris. No charge, no booking, and no obligation to buy anything at the end — there is very little to buy, since the four hectares of old vines make about nine hundred bottles a year and most of them are drunk at the table upstairs.",
      },
    ],
    includes: [
      "Two hours in the 1804 chalk cellar",
      "Tasting from barrel with the winemaker",
      "Included in every stay at Maison Aubris",
      "No booking required; meet in the courtyard at 18:00",
      "Warm layers advisable — it is twelve degrees",
    ],
    image: {
      src: "/images/hotels/maison-aubris-chalk-cellar.webp",
      alt: "Barrels in the chalk cellar at Maison Aubris lit by a single low bulb.",
    },
  },
  {
    slug: "the-silver-hour",
    name: "The Silver Hour",
    hotelSlug: "montreval-sabaia",
    duration: "3 hours",
    season: "September to mid-June",
    groupSize: "Two to six guests",
    price: 165,
    standfirst: "Ride out at four, reach the escarpment at five, and watch it take the whole of the last light.",
    summary:
      "Three hours on horseback to the base of the escarpment and back after dark, with the fire lit when you return.",
    body: [
      {
        type: "paragraph",
        text: "The escarpment faces west and takes the last hour of light entirely to itself: the sand below goes grey while the rock above stays lit, which is where the name comes from and why the ride leaves at four rather than five.",
      },
      {
        type: "paragraph",
        text: "You ride out with two of the camp's guides, across about seven kilometres of open sand, to the base of the rock. There is tea. There is a period of about forty minutes where nobody says very much. Then you ride back in the dark, which takes longer and is the better half.",
      },
      {
        type: "heading",
        text: "If you do not ride",
      },
      {
        type: "paragraph",
        text: "Take the vehicle. It leaves at the same time, arrives at the same place, and the forty quiet minutes are identical. We would rather you saw it than felt you had to earn it.",
      },
    ],
    includes: [
      "Horses and two guides, or the vehicle",
      "Tea at the base of the escarpment",
      "Return after dark with lamps",
      "Fire lit at the camp on your return",
      "Suitable for beginners; the horses are calm",
    ],
    image: {
      src: "/images/experiences/the-silver-hour.svg",
      alt: "Riders crossing open sand toward the Sabaia escarpment as it catches the last light.",
    },
  },
  {
    slug: "reading-the-reef",
    name: "Reading the Reef",
    hotelSlug: "montreval-tamerin",
    duration: "3 hours",
    season: "All year",
    groupSize: "Two to six guests",
    price: 120,
    standfirst: "Three hours on the northern arm with the people who run the survey.",
    summary:
      "Out to the survey transects with the marine team, in the water for ninety minutes, and a straight answer about what you are looking at.",
    body: [
      {
        type: "paragraph",
        text: "The northern arm of the Tamerin reef has been surveyed on the same transects since 1996. Coral cover there has risen from thirty-one per cent to forty-six over that period, which is unusual, and which nobody can fully account for.",
      },
      {
        type: "paragraph",
        text: "You go out with the marine team on a working morning, swim the transect lines with them, and are shown what recovery actually looks like on the seabed — including the parts that are not recovering. There is no script. If you ask a question they cannot answer, they will say so.",
      },
      {
        type: "paragraph",
        text: "Guests who want to do something more than look can help count, using the same slate and the same method as the team. The data goes to the district fisheries office with everything else.",
      },
    ],
    includes: [
      "Boat and three hours with the marine team",
      "Ninety minutes in the water on the transects",
      "Masks, fins and reef-safe sun protection",
      "The option to help record the count",
      "Suitable for competent swimmers",
    ],
    image: {
      src: "/images/experiences/reading-the-reef.svg",
      alt: "A survey transect line laid across coral on the northern arm of the Tamerin reef.",
    },
  },
  {
    slug: "ice-and-steam",
    name: "Ice and Steam",
    hotelSlug: "montreval-lindhavn",
    duration: "2 hours",
    season: "All year",
    groupSize: "One to four guests",
    price: 220,
    standfirst: "Four rounds of ninety degrees and two degrees, with someone keeping the intervals honest.",
    summary:
      "The bathhouse sequence, led: hot sauna, open fjord, long room, four times over, in the order that actually works.",
    body: [
      {
        type: "paragraph",
        text: "Guests use the bathhouse freely and most of them do it wrong — too long in the heat, too short in the water, and no time at all in the long room, which is where the whole thing actually happens.",
      },
      {
        type: "paragraph",
        text: "Ice and Steam is the same facilities with a therapist deciding the intervals. Four rounds over two hours: sauna, fjord, long room, repeat. The water is between two and fourteen degrees depending on the month. In February the first entry lasts about eleven seconds and the fourth lasts a minute, which is the point of doing it four times.",
      },
      {
        type: "heading",
        text: "Before you book",
      },
      {
        type: "paragraph",
        text: "Cold water at two degrees is a real physiological event. If you have a heart condition, are pregnant, or are unsure for any reason, speak to us — genuinely, not as a disclaimer. We will happily run the sequence warm, without the fjord, and it is still worth the two hours.",
      },
    ],
    includes: [
      "Two hours with a Sérène therapist",
      "Four rounds of sauna, fjord and long room",
      "Robes, towels and wool blankets",
      "A warm sequence available on request",
      "Staffed cold-water entry at all times",
    ],
    image: {
      src: "/images/experiences/ice-and-steam.svg",
      alt: "Steam rising from the cold plunge cut through the bathhouse deck at Lindhavn.",
    },
  },
  {
    slug: "the-bread-table",
    name: "The Bread Table",
    hotelSlug: "maison-aubris",
    duration: "3 hours",
    season: "All year",
    groupSize: "Two to eight guests",
    price: 110,
    standfirst: "Four in the afternoon in the bakehouse, with the loaves that go on the table at eight.",
    summary:
      "Three hours with the house baker making the bread that everyone in the building will eat that evening, which raises the stakes considerably.",
    body: [
      {
        type: "paragraph",
        text: "The bakehouse in the courtyard bakes once a day, at four, for the table at eight. There is no second bake and no shop-bought fallback. What comes out of that oven is what twenty-eight people eat.",
      },
      {
        type: "paragraph",
        text: "You work the afternoon bake with the baker: shaping, proving, scoring, loading. Most of the three hours is spent waiting, which is what bread is, and which is why there is a chair, a fire and a glass of the house wine in the bakehouse.",
      },
      {
        type: "paragraph",
        text: "At eight your loaves go on the table and are cut in front of everybody. Nobody is told whose they are unless you would like them to be.",
      },
    ],
    includes: [
      "Three hours in the courtyard bakehouse",
      "A glass of the estate wine and a chair by the fire",
      "Your loaves served at the table that evening",
      "The starter recipe, written out by hand",
      "No experience needed at all",
    ],
    image: {
      src: "/images/experiences/the-bread-table.svg",
      alt: "Loaves proving on a floured bench in the courtyard bakehouse at Maison Aubris.",
    },
  },
];
