import type { Hotel } from "./types";

/**
 * The six houses. Rates are published in euros, per night, for two guests,
 * and include breakfast — one convention, held across the whole collection.
 */
export const hotels: Hotel[] = [
  {
    slug: "montreval-verane",
    name: "Montreval Verane",
    destinationSlug: "verane",
    location: "Lake Verane, the Verane Valley",
    standfirst: "The first house. A farmhouse, a boathouse and a long wall of glass facing the water.",
    summary:
      "Thirty-eight rooms and suites on the eastern shore, built into a restored dairy farm. Larch, limestone, wool and water.",
    body: [
      {
        type: "paragraph",
        text: "Montreval Verane began as a dairy farm that had stopped being a dairy farm. Camille Ferrand bought the buildings in 1998 with no clear intention beyond stopping them falling down, and spent three years finding out what they wanted to be. The answer turned out to be a hotel with thirty-eight rooms, a working kitchen garden and an unreasonable number of fireplaces.",
      },
      {
        type: "paragraph",
        text: "The original farmhouse holds the drawing rooms, the library and eleven of the rooms. A low modern wing added in 2006 runs south along the shore and holds the rest, each opening onto the water through a full wall of glass that can be slid entirely away between May and September. The boathouse at the end of the terrace is where breakfast is served in summer and where the rowing boats live all year.",
      },
      {
        type: "heading",
        text: "Materials",
      },
      {
        type: "paragraph",
        text: "Everything you can touch here came from within sixty kilometres, with three exceptions we are happy to name: the glass, the taps and the mattresses. Floors are local larch, oiled rather than lacquered, so they mark and then recover. Walls are lime plaster over stone. Beds are wool over horsehair, made up in linen woven at the mill at Sevrey and replaced, honestly, more often than we would like.",
      },
      {
        type: "heading",
        text: "How the days go",
      },
      {
        type: "paragraph",
        text: "Breakfast runs from seven until eleven and nobody will hurry you. The lake is swimmable from late May, sharply, and from July with pleasure. Cimaise serves dinner from seven; Le Batelier serves lunch on the water whenever the weather permits, which our staff assess each morning and post on the board by the library door.",
      },
    ],
    opened: 2001,
    keys: "38 rooms and suites",
    rateFrom: 780,
    address: ["Montreval Verane", "Route du Lac 4", "Verane 1893"],
    director: { name: "Léa Bertrand", role: "Director, Montreval Verane" },
    amenities: [
      "Sérène Verane spa and thermal bath",
      "Two restaurants and a lake pavilion",
      "Heated indoor pool and lake swimming",
      "Library with 4,000 volumes",
      "Rowing boats and a wooden launch",
      "Kitchen garden and glasshouse",
      "Ski room with drying racks",
      "Step-free access to all public rooms",
    ],
    arrival: [
      { label: "Check-in", value: "From 15:00" },
      { label: "Check-out", value: "Until 12:00" },
      { label: "Transfer", value: "95 minutes from Ostrelle International" },
      { label: "Parking", value: "Covered, no charge" },
    ],
    image: {
      src: "/images/destinations/verane-editorial.webp",
      alt: "Montreval Verane at dusk, its long glazed wing lit above the still surface of the lake.",
    },
    gallery: [
      {
        src: "/images/hotels/montreval-verane-larch-room.webp",
        alt: "A larch-floored guest room at Montreval Verane opening onto the lake terrace.",
      },
      {
        src: "/images/hotels/montreval-verane-boathouse-breakfast.webp",
        alt: "The boathouse terrace at Montreval Verane set for breakfast in early light.",
      },
    ],
  },
  {
    slug: "montreval-calanera",
    name: "Montreval Calanera",
    destinationSlug: "calanera",
    location: "Above Manda Cove, the Calanera Coast",
    standfirst: "Four terraces cut into the cliff, and a staircase of two hundred and eleven steps down to the sea.",
    summary:
      "Forty-one rooms on the cliff above Manda, arranged over four terraces so that no room looks onto another. Lemon, lime plaster and salt.",
    body: [
      {
        type: "paragraph",
        text: "The house sits on four terraces of a working lemon farm, ninety metres above the water. It was a convent until 1911, a farm until 2006, and has been ours since 2009. The rebuilding took three years, most of which was spent on the terraces themselves — a cliff that has been held up by dry stone for four hundred years does not take kindly to concrete.",
      },
      {
        type: "paragraph",
        text: "Rooms are stepped so that no room overlooks another and every one of the forty-one has a private outdoor space of some kind: a loggia, a terrace, or a walled garden with a lemon tree in it. The public rooms are on the second terrace, the pool on the third, and the sea at the bottom of a staircase of two hundred and eleven steps. There is a lift for the first hundred and forty. The last seventy-one are yours.",
      },
      {
        type: "heading",
        text: "The lemons",
      },
      {
        type: "paragraph",
        text: "Two hundred and forty trees, most of them older than the building. They are farmed by the Rasetti family, who farmed them before we arrived and will farm them after we are gone. The kitchen takes what it needs; the rest goes to the co-operative at Manda, as it always has.",
      },
      {
        type: "heading",
        text: "The sea",
      },
      {
        type: "paragraph",
        text: "The cove below the house is ours in practice but not in law, which is the correct arrangement. There is a small stone jetty, a boatman, and a flat-bottomed launch that will take you into the caves at Vinca when the sea allows. Nino decides. Nino has always decided.",
      },
    ],
    opened: 2009,
    keys: "41 rooms and suites",
    rateFrom: 690,
    address: ["Montreval Calanera", "Strada di Manda 2", "Calanera 5040"],
    director: { name: "Matteo Sarnelli", role: "Director, Montreval Calanera" },
    amenities: [
      "Two restaurants, one on the water",
      "Cliff-edge swimming pool, unheated",
      "Private cove, jetty and launch",
      "Treatment rooms and a steam cave",
      "Lemon terraces open to guests",
      "Sea kayaks and swimming lines",
      "Cellar of 600 coastal wines",
      "Lift to the third terrace",
    ],
    arrival: [
      { label: "Check-in", value: "From 15:00" },
      { label: "Check-out", value: "Until 12:00" },
      { label: "Transfer", value: "40 minutes from Porto Sella" },
      { label: "Parking", value: "Terrace level, no charge" },
    ],
    image: {
      src: "/images/destinations/calanera-editorial.webp",
      alt: "Montreval Calanera stepped down the cliff above Manda Cove, its terraces lit at dusk.",
    },
    gallery: [
      {
        src: "/images/hotels/montreval-calanera-cliff-room.webp",
        alt: "A lime-plastered room at Montreval Calanera opening onto a private loggia above the sea.",
      },
      {
        src: "/images/hotels/montreval-calanera-cliff-pool.webp",
        alt: "The cliff-edge swimming pool at Montreval Calanera in late afternoon.",
      },
    ],
  },
  {
    slug: "maison-aubris",
    name: "Maison Aubris",
    destinationSlug: "aubris",
    location: "Aubris village, the Aubris Downs",
    standfirst: "A vineyard house with twenty-two rooms, a working cellar and a very good baker.",
    summary:
      "The smallest house in the collection. Eleven hectares of vines, a cellar cut into chalk, and a kitchen built around one long table.",
    body: [
      {
        type: "paragraph",
        text: "Maison Aubris is a vineyard first and a hotel second, and the order matters. The estate came to us in 2013 with its vines half-abandoned and its buildings entirely so. We restored the cellar before we restored the roof, which tells you something about how the decision was made.",
      },
      {
        type: "paragraph",
        text: "There are twenty-two rooms across three buildings around a gravel courtyard: the main house, the old press, and a row of four cottages that were once the pickers' quarters. Nothing is more than two storeys. Nothing has a view of anything except vines, and that is the point.",
      },
      {
        type: "heading",
        text: "The cellar",
      },
      {
        type: "paragraph",
        text: "Cut into chalk in 1804 and extended twice since, the cellar holds a constant twelve degrees without any mechanical help at all. Hugo Vasseur, who runs the house, was a winemaker before he was a hotelier and still spends September in the press house rather than the front hall. Guests are welcome down there at any hour, which is unusual, and occasionally regretted.",
      },
      {
        type: "heading",
        text: "The table",
      },
      {
        type: "paragraph",
        text: "Table d'Aubris seats twenty-eight at one long oak table and serves one menu each evening, decided in the afternoon. There is no choice, there is no à la carte, and we ask about allergies at booking because there is no second option. It is the most divisive thing we do and the thing guests write about most.",
      },
    ],
    opened: 2013,
    keys: "22 rooms and suites",
    rateFrom: 640,
    address: ["Maison Aubris", "Chemin des Vignes 1", "Aubris 3320"],
    director: { name: "Hugo Vasseur", role: "Director and winemaker, Maison Aubris" },
    amenities: [
      "One long table, one menu each evening",
      "Chalk cellar open to guests",
      "Eleven hectares of vines to walk",
      "Bakehouse and daily bread table",
      "Two treatment rooms",
      "Bicycles and a set of maps",
      "Library and courtyard fire",
      "Step-free rooms in the old press",
    ],
    arrival: [
      { label: "Check-in", value: "From 15:00" },
      { label: "Check-out", value: "Until 11:00" },
      { label: "Transfer", value: "8 minutes from Aubris-Village station" },
      { label: "Parking", value: "Courtyard, no charge" },
    ],
    image: {
      src: "/images/destinations/aubris-editorial.webp",
      alt: "Maison Aubris seen across its vines at dusk, the courtyard lit through an archway.",
    },
    gallery: [
      {
        src: "/images/hotels/maison-aubris-chalk-cellar.webp",
        alt: "The chalk cellar at Maison Aubris, barrels lit by a single low lamp.",
      },
      {
        src: "/images/hotels/maison-aubris-dining-table.webp",
        alt: "The long oak table at Table d'Aubris laid for the evening's single menu.",
      },
    ],
  },
  {
    slug: "montreval-sabaia",
    name: "Montreval Sabaia",
    destinationSlug: "sabaia",
    location: "Below the escarpment, the Sabaia Sands",
    standfirst: "Twenty-nine tented suites, one fire, and no light after ten except the sky.",
    summary:
      "A permanent camp beneath the escarpment. Canvas, cedar and wool, built to be taken down without leaving a mark.",
    body: [
      {
        type: "paragraph",
        text: "Sabaia is the only house in the collection built to be removed. Every structure sits on screw piles rather than foundations; every tent can be struck, and the site returned to sand, in eleven weeks. This was a condition of the lease from the Adeem families and it turned out to be the best design brief we have ever been given.",
      },
      {
        type: "paragraph",
        text: "Twenty-nine tented suites are strung along the base of the escarpment, far enough apart that you cannot hear your neighbour and close enough that nobody has to walk more than four minutes to dinner. Each is canvas over a cedar frame, floored in wool rugs over sealed board, with a wood stove, an outdoor bath and a bed positioned so you wake facing the rock.",
      },
      {
        type: "heading",
        text: "Light and power",
      },
      {
        type: "paragraph",
        text: "A solar array behind the ridge covers about sixty per cent of the camp's demand across the year; a generator covers the rest and runs between six in the morning and ten at night. After ten there is firelight, lamplight and the sky, which at Sabaia is not a romantic way of saying darkness. It is genuinely enough to walk by.",
      },
      {
        type: "heading",
        text: "Closing season",
      },
      {
        type: "paragraph",
        text: "We close from mid-June to the end of August. The camp is unpleasant in that heat and we would rather say so than sell it. Staff who wish to work through the closure move to Verane or Lindhavn for the summer; most do.",
      },
    ],
    opened: 2017,
    keys: "29 tented suites",
    rateFrom: 1150,
    address: ["Montreval Sabaia", "Piste d'Adeem, km 41", "Sabaia 8811"],
    director: { name: "Rania Adnani", role: "Director, Montreval Sabaia" },
    amenities: [
      "Twenty-nine tented suites with wood stoves",
      "Sérène Sabaia hammam and cold room",
      "Nour, one dining tent, one seating",
      "Outdoor bath in every suite",
      "Horses and desert guides",
      "Observatory platform and telescope",
      "Transfers included in every stay",
      "Two step-free suites near the main tent",
    ],
    arrival: [
      { label: "Check-in", value: "From 14:00" },
      { label: "Check-out", value: "Until 11:00" },
      { label: "Transfer", value: "2 hours 15 minutes from Adeem, included" },
      { label: "Season", value: "September to mid-June" },
    ],
    image: {
      src: "/images/destinations/sabaia-editorial.webp",
      alt: "Tented suites at Montreval Sabaia glowing beneath the red escarpment after sunset.",
    },
    gallery: [
      {
        src: "/images/hotels/montreval-sabaia-tented-suite.webp",
        alt: "The interior of a tented suite at Montreval Sabaia, wool rugs and a lit wood stove.",
      },
      {
        src: "/images/hotels/montreval-sabaia-fire-circle.webp",
        alt: "The fire circle at Montreval Sabaia under a full night sky.",
      },
    ],
  },
  {
    slug: "montreval-tamerin",
    name: "Montreval Tamerin",
    destinationSlug: "tamerin",
    location: "Motu Rea, Tamerin Atoll",
    standfirst: "Twenty-four villas over water and sand, and a marine team who will explain exactly what you are looking at.",
    summary:
      "Timber villas on the leeward shore and over the lagoon shallows, built by the boatyard at Manda and shipped in pieces.",
    body: [
      {
        type: "paragraph",
        text: "Everything at Tamerin arrived by sea. The villas were cut and jointed at the boatyard at Manda, shipped in pieces, and assembled on site by the same eleven people who built them — an approach that took four months longer than building in place and produced something considerably better made.",
      },
      {
        type: "paragraph",
        text: "Fourteen villas sit over the shallows on the leeward side, each with a ladder into water about a metre and a half deep. Ten sit back among the palms with private sand. All twenty-four are timber, louvred rather than glazed, and cooled by the trade wind and a ceiling fan rather than air conditioning — with the honest exception of the bedroom, which is conditioned, because nobody sleeps well at twenty-nine degrees.",
      },
      {
        type: "heading",
        text: "The marine team",
      },
      {
        type: "paragraph",
        text: "Three full-time marine staff run the reef survey with the district fisheries office. They are not an activity desk. They will take you out, and they will tell you what is happening to the coral in terms that are neither reassuring nor theatrical, which is rarer than it should be.",
      },
      {
        type: "heading",
        text: "Getting about",
      },
      {
        type: "paragraph",
        text: "There are no vehicles on Motu Rea. Everything is walkable within eleven minutes and there are bicycles for people who would rather not walk it. Luggage is moved by the house; guests are not expected to carry anything anywhere.",
      },
    ],
    opened: 2019,
    keys: "24 villas",
    rateFrom: 1890,
    address: ["Montreval Tamerin", "Motu Rea", "Tamerin Atoll 9002"],
    director: { name: "Teva Manuera", role: "Director, Montreval Tamerin" },
    amenities: [
      "Fourteen over-water and ten beach villas",
      "Sérène Tamerin over the shallows",
      "Hali, open to the lagoon on three sides",
      "Reef survey and guided snorkelling",
      "Sailing dinghies and outriggers",
      "Freshwater pool and shaded reading pavilion",
      "No vehicles on the island",
      "Boat transfer from the airstrip, included",
    ],
    arrival: [
      { label: "Check-in", value: "From 14:00" },
      { label: "Check-out", value: "Until 11:00" },
      { label: "Transfer", value: "15 minutes by boat from Tamerin airstrip, included" },
      { label: "Minimum stay", value: "Four nights" },
    ],
    image: {
      src: "/images/destinations/tamerin-editorial.webp",
      alt: "Timber villas at Montreval Tamerin standing over the pale shallows of the lagoon.",
    },
    gallery: [
      {
        src: "/images/hotels/montreval-tamerin-lagoon-villa.webp",
        alt: "The louvred interior of an over-water villa at Montreval Tamerin.",
      },
      {
        src: "/images/hotels/montreval-tamerin-reef-deck.webp",
        alt: "A ladder from a Tamerin villa deck into clear shallow lagoon water.",
      },
    ],
  },
  {
    slug: "montreval-lindhavn",
    name: "Montreval Lindhavn",
    destinationSlug: "lindhavn",
    location: "Northern shore, Lindhavn Fjord",
    standfirst: "Thirty-one rooms on black water, and a bathhouse that is the real reason people come.",
    summary:
      "A timber house on the northern shore, built low and long against the weather, with a bathhouse standing out over four hundred metres of water.",
    body: [
      {
        type: "paragraph",
        text: "The newest house, and the one that took longest to get right. Lindhavn is built low and long against the northern shore in tarred pine, with a turf roof that has already stopped looking new. From the water it is difficult to see at all, which was the intention.",
      },
      {
        type: "paragraph",
        text: "Thirty-one rooms face the fjord across a single corridor. There are no rooms on the landward side; we built fewer rather than build some that were worse. Windows are triple-glazed and enormous, and every room has a window seat deep enough to sleep in, which several guests have.",
      },
      {
        type: "heading",
        text: "The bathhouse",
      },
      {
        type: "paragraph",
        text: "Sérène Lindhavn stands on piles out over the water. Two saunas, a steam room, a cold plunge cut straight through the deck into four hundred metres of fjord, and a long unheated room with nothing in it but benches and the view. It is open from six in the morning until midnight and is, by a wide margin, where guests spend their time.",
      },
      {
        type: "heading",
        text: "The kitchen",
      },
      {
        type: "paragraph",
        text: "Fyr writes its menu after the morning boats land, which means it is written at about a quarter past eight and printed at nine. If the boats do not go out, the menu is different. We think this is the correct way to run a kitchen on a working fjord, and we accept that it occasionally disappoints someone who had their heart set on halibut.",
      },
    ],
    opened: 2022,
    keys: "31 rooms and suites",
    rateFrom: 720,
    address: ["Montreval Lindhavn", "Nordstrandveien 12", "Lindhavn 7710"],
    director: { name: "Sigrid Aaland", role: "Director, Montreval Lindhavn" },
    amenities: [
      "Sérène Lindhavn bathhouse over the fjord",
      "Fyr, written each morning from the boats",
      "Cold plunge into open water",
      "Two boats and a licensed skipper",
      "Drying room, boots and outer layers provided",
      "Aurora call service, November to March",
      "Reading room with the fire lit from four",
      "Step-free throughout, including the bathhouse",
    ],
    arrival: [
      { label: "Check-in", value: "From 15:00" },
      { label: "Check-out", value: "Until 12:00" },
      { label: "Transfer", value: "35 minutes from Lindhavn regional airport" },
      { label: "Parking", value: "Covered and heated, no charge" },
    ],
    image: {
      src: "/images/destinations/lindhavn-editorial.webp",
      alt: "Montreval Lindhavn, a low tarred timber house lit against black fjord water and snow.",
    },
    gallery: [
      {
        src: "/images/hotels/montreval-lindhavn-window-seat.webp",
        alt: "A window seat in a Lindhavn room looking out across the fjord in blue light.",
      },
      {
        src: "/images/hotels/montreval-lindhavn-bathhouse.webp",
        alt: "The bathhouse at Montreval Lindhavn standing on piles over the water at dusk.",
      },
    ],
  },
];
