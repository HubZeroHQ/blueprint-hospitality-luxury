import type { Stay } from "./types";

/**
 * Rooms, suites and villas across the collection. Rates are per night, for
 * two guests, including breakfast — the same convention as `hotels.ts`.
 */
export const stays: Stay[] = [
  {
    slug: "larch-room",
    name: "Larch Room",
    hotelSlug: "montreval-verane",
    category: "Room",
    size: 32,
    sleeps: 2,
    view: "Lake or garden",
    bed: "One king, or two singles on request",
    rateFrom: 780,
    summary:
      "The room the house was designed around. Oiled larch, lime plaster, a wool bed and a window that opens fully onto the water.",
    body: [
      {
        type: "paragraph",
        text: "Sixteen of the thirty-eight rooms at Verane are Larch Rooms, and they are the ones we would choose ourselves. Thirty-two square metres is not large by the standards of the category, and it is not meant to be: the proportion is right, the ceiling is high, and nothing in the room is there to fill space.",
      },
      {
        type: "paragraph",
        text: "Floors are local larch, oiled rather than lacquered. The bed is wool over horsehair, made up in linen from the mill at Sevrey. The window is a single pane two and a half metres wide that slides entirely into the wall, which between May and September turns the room into a covered terrace.",
      },
      {
        type: "paragraph",
        text: "Nine of the sixteen face the lake directly. The remaining seven face the kitchen garden and the ridge behind it, are quieter in high summer, and cost the same. We will tell you honestly which we think you would prefer.",
      },
    ],
    features: [
      "Full-width sliding window onto the lake or garden",
      "Wool and horsehair bed, Sevrey linen",
      "Limestone bathroom with a deep single bath",
      "Wood-burning stove in eleven of the sixteen",
      "Writing desk facing the window",
      "No television; one is available on request",
    ],
    image: {
      src: "/images/hotels/montreval-verane-larch-room.webp",
      alt: "A Larch Room at Montreval Verane, its sliding window open onto the lake terrace.",
    },
  },
  {
    slug: "lake-suite",
    name: "Lake Suite",
    hotelSlug: "montreval-verane",
    category: "Suite",
    size: 68,
    sleeps: 3,
    view: "Lake, west",
    bed: "One king, plus a daybed",
    rateFrom: 1480,
    summary:
      "Two rooms and a private stretch of terrace at the southern end of the wing, where the light lasts longest.",
    body: [
      {
        type: "paragraph",
        text: "There are four Lake Suites, all at the southern end of the modern wing where the terrace widens and the valley opens. Each has a sitting room, a bedroom, and eleven metres of private terrace with steps down to the shore path.",
      },
      {
        type: "paragraph",
        text: "The sitting room has an open fire that is laid every afternoon between October and April, whether or not you have asked for it. The bath is cut from a single block of local limestone and takes eleven minutes to fill, which we mention because guests always ask.",
      },
    ],
    features: [
      "Separate sitting room with an open fire",
      "Eleven metres of private terrace",
      "Limestone bath cut from one block",
      "Dressing room and separate shower",
      "Daybed suitable for a third guest",
      "Direct steps to the shore path",
    ],
    image: {
      src: "/images/stays/lake-suite.svg",
      alt: "The sitting room of a Lake Suite at Montreval Verane with its fire lit at dusk.",
    },
  },
  {
    slug: "cliff-room",
    name: "Cliff Room",
    hotelSlug: "montreval-calanera",
    category: "Room",
    size: 28,
    sleeps: 2,
    view: "Sea, east or south",
    bed: "One king",
    rateFrom: 690,
    summary:
      "Lime plaster, a stone floor kept cool through August, and a loggia with a lemon tree in a pot older than the room.",
    body: [
      {
        type: "paragraph",
        text: "Twenty-six of the forty-one rooms at Calanera are Cliff Rooms, arranged across the second and third terraces so that no two look onto each other. They are small by intention: at twenty-eight square metres the room is a place to sleep and dress, and the loggia is where you will actually be.",
      },
      {
        type: "paragraph",
        text: "Walls are lime plaster, which is why they stay cool. Floors are the pale local stone laid over sand rather than mortar, in the manner the convent used, so the whole building breathes and the rooms hold about twenty-three degrees through the worst of August without mechanical cooling. Air conditioning is fitted in all of them regardless; most guests never turn it on.",
      },
    ],
    features: [
      "Private loggia with a lemon tree",
      "Lime plaster and cool stone floors",
      "Shuttered doors rather than glazing",
      "Walk-in shower cut into the rock wall",
      "Ceiling fan, and air conditioning if wanted",
      "Steps directly to the terrace pool",
    ],
    image: {
      src: "/images/hotels/montreval-calanera-cliff-room.webp",
      alt: "A Cliff Room at Montreval Calanera with shuttered doors open to a private loggia above the sea.",
    },
  },
  {
    slug: "limonaia-suite",
    name: "Limonaia Suite",
    hotelSlug: "montreval-calanera",
    category: "Suite",
    size: 74,
    sleeps: 4,
    view: "Sea and lemon terraces",
    bed: "One king, plus one twin room",
    rateFrom: 1620,
    summary:
      "The old lemon house on the fourth terrace, with a walled garden, a plunge pool and two hundred and forty trees for a neighbour.",
    body: [
      {
        type: "paragraph",
        text: "The Limonaia was the building where the lemon crop was stored through winter, and it kept its arched openings, its stone benches and its two-metre-thick northern wall. There is one of it. It sits alone on the fourth terrace with the lemon grove on three sides and the sea on the fourth.",
      },
      {
        type: "paragraph",
        text: "Inside are a bedroom, a twin room suitable for children or a second couple, and a single tall living room under the original vault. Outside is a walled garden with a plunge pool four metres long and a stone table that seats eight. It is the most private accommodation we have anywhere in the collection.",
      },
    ],
    features: [
      "Walled private garden and four-metre plunge pool",
      "Vaulted living room under the original roof",
      "Second twin bedroom with its own bathroom",
      "Outdoor stone table seating eight",
      "Direct gate into the lemon terraces",
      "Kitchenette for coffee and cold things only",
    ],
    image: {
      src: "/images/stays/limonaia-suite.svg",
      alt: "The vaulted living room of the Limonaia Suite at Montreval Calanera opening to a walled garden.",
    },
  },
  {
    slug: "vigneron-room",
    name: "Vigneron Room",
    hotelSlug: "maison-aubris",
    category: "Room",
    size: 30,
    sleeps: 2,
    view: "Vines or courtyard",
    bed: "One king, or two singles on request",
    rateFrom: 640,
    summary:
      "Chalk-washed walls, a plain oak bed, and a window that frames nothing but rows of vines.",
    body: [
      {
        type: "paragraph",
        text: "Fourteen of the twenty-two rooms at Aubris are Vigneron Rooms, spread across the main house and the four cottages. They are deliberately plain. Walls are chalk-washed and repainted every February; furniture is oak, made in the district; there is one picture in each room and it is always a map.",
      },
      {
        type: "paragraph",
        text: "The eight in the cottages have their own doors onto the gravel, which people with early trains and late nights both appreciate. The six in the main house are warmer in winter and closer to the fire.",
      },
    ],
    features: [
      "Chalk-washed walls, repainted each February",
      "Oak bed and writing table made in the district",
      "Cast-iron bath in nine of the fourteen",
      "Own door onto the courtyard in eight",
      "A carafe of the house wine, replaced daily",
      "No television anywhere at Aubris",
    ],
    image: {
      src: "/images/stays/vigneron-room.svg",
      alt: "A Vigneron Room at Maison Aubris, chalk-washed walls and a window framing vine rows.",
    },
  },
  {
    slug: "the-old-press",
    name: "The Old Press",
    hotelSlug: "maison-aubris",
    category: "Suite",
    size: 86,
    sleeps: 4,
    view: "Vines, west",
    bed: "One king, plus one twin room",
    rateFrom: 1750,
    summary:
      "The 1804 press house, with its beam still in place, a private cellar door and the best west light on the estate.",
    body: [
      {
        type: "paragraph",
        text: "The press house stopped pressing in 1971 and stood empty until 2013. The beam press itself is still there, cleaned and left exactly where it was, running the length of the living room five metres above the floor. Everything else in the building was rebuilt around it.",
      },
      {
        type: "paragraph",
        text: "There are two bedrooms, a living room the full height of the original building, and a door in the corner that goes directly down into the chalk cellar. Guests staying here may go down whenever they like, which is a privilege we extend nowhere else and which we ask people to use thoughtfully.",
      },
    ],
    features: [
      "The original 1804 beam press, in place",
      "Private door into the chalk cellar",
      "Two bedrooms, two bathrooms",
      "Double-height living room facing west",
      "Wood-burning stove and a laid fire",
      "Step-free from the courtyard throughout",
    ],
    image: {
      src: "/images/stays/the-old-press.svg",
      alt: "The double-height living room of The Old Press at Maison Aubris beneath its original beam press.",
    },
  },
  {
    slug: "escarpment-tent",
    name: "Escarpment Tent",
    hotelSlug: "montreval-sabaia",
    category: "Tented suite",
    size: 52,
    sleeps: 2,
    view: "Escarpment, east",
    bed: "One king",
    rateFrom: 1150,
    summary:
      "Canvas over cedar, a wood stove, an outdoor bath, and a bed placed so that you wake facing four hundred metres of rock.",
    body: [
      {
        type: "paragraph",
        text: "Twenty-three of the twenty-nine suites at Sabaia are Escarpment Tents. Each is a cedar frame under two layers of canvas, floored in sealed board and covered in wool rugs woven by the co-operative at Adeem. There is a wood stove, which you will need from October, and a ceiling fan, which you will need in May.",
      },
      {
        type: "paragraph",
        text: "The bath is outside, on a private stretch of deck behind a screen wall, and is filled by hand by someone who will ask you first what time you would like it. Hot water is solar through the day and boiler-heated after dark.",
      },
    ],
    features: [
      "Cedar frame under double canvas",
      "Wood stove, laid each afternoon",
      "Outdoor bath on private deck",
      "Wool rugs from the Adeem co-operative",
      "Lantern light after ten in the evening",
      "Two of the twenty-three are step-free",
    ],
    image: {
      src: "/images/hotels/montreval-sabaia-tented-suite.webp",
      alt: "An Escarpment Tent at Montreval Sabaia, canvas walls open toward the rock face at dawn.",
    },
  },
  {
    slug: "oasis-suite-tent",
    name: "Oasis Suite Tent",
    hotelSlug: "montreval-sabaia",
    category: "Tented suite",
    size: 96,
    sleeps: 3,
    view: "Palm gardens and escarpment",
    bed: "One king, plus a daybed",
    rateFrom: 2400,
    summary:
      "Six suites set apart at the northern end of the camp, each with a sitting tent, a private fire and a view down into the palm gardens.",
    body: [
      {
        type: "paragraph",
        text: "The six Oasis Suite Tents sit at the northern end of the camp, where the ground falls away toward the spring and the palm gardens. Each is two connected tents — one for sleeping, one for sitting — joined by a covered deck with its own fire bowl.",
      },
      {
        type: "paragraph",
        text: "They are the only suites at Sabaia with a plunge pool, which is small, unheated, and extremely welcome in April. They also have the shortest walk to the observatory platform, which is either an advantage or the reason you will not sleep.",
      },
    ],
    features: [
      "Two tents joined by a covered deck",
      "Private fire bowl, lit at dusk",
      "Small unheated plunge pool",
      "Daybed suitable for a third guest",
      "Outdoor bath and separate shower",
      "Nearest suites to the observatory platform",
    ],
    image: {
      src: "/images/stays/oasis-suite-tent.svg",
      alt: "An Oasis Suite Tent at Montreval Sabaia with its fire bowl lit above the palm gardens.",
    },
  },
  {
    slug: "lagoon-villa",
    name: "Lagoon Villa",
    hotelSlug: "montreval-tamerin",
    category: "Villa",
    size: 110,
    sleeps: 2,
    view: "Lagoon, west",
    bed: "One king",
    rateFrom: 1890,
    summary:
      "Timber over water, louvred on three sides, with a ladder into a metre and a half of lagoon.",
    body: [
      {
        type: "paragraph",
        text: "Fourteen Lagoon Villas stand over the shallows on the leeward side of Motu Rea, each on piles, each reached by its own short walkway. They are built entirely of timber, jointed rather than screwed, by the boatyard that made them.",
      },
      {
        type: "paragraph",
        text: "Three walls are louvred rather than glazed, so the trade wind runs straight through and the villa is cooled by air rather than machinery. The bedroom is the exception: it is conditioned, because it is the one room where being honest about comfort matters more than being pure about method.",
      },
    ],
    features: [
      "Over-water deck with a ladder into the lagoon",
      "Louvred on three sides; conditioned bedroom",
      "Freshwater outdoor shower",
      "Shaded day bed facing the sunset",
      "Snorkelling equipment fitted on arrival",
      "Timber jointed by the Manda boatyard",
    ],
    image: {
      src: "/images/hotels/montreval-tamerin-lagoon-villa.webp",
      alt: "A Lagoon Villa at Montreval Tamerin standing on timber piles above pale shallow water.",
    },
  },
  {
    slug: "reef-house",
    name: "Reef House",
    hotelSlug: "montreval-tamerin",
    category: "Villa",
    size: 165,
    sleeps: 5,
    view: "Lagoon and reef edge",
    bed: "One king, plus two singles",
    rateFrom: 3600,
    summary:
      "Two bedrooms, a kitchen, a boat mooring and the last stretch of beach before the reef edge.",
    body: [
      {
        type: "paragraph",
        text: "There are two Reef Houses, at the far northern end of the beach where the sand narrows and the reef edge comes closest to shore. Each has two bedrooms, a proper kitchen, a covered outdoor room and about forty metres of beach that nobody else has any reason to walk along.",
      },
      {
        type: "paragraph",
        text: "A mooring in front of each takes a small boat, which the house will arrange. The northern arm of the reef — the stretch the survey shows recovering — is a two-hundred-metre swim from the beach and the best snorkelling on the atoll.",
      },
    ],
    features: [
      "Two bedrooms and two bathrooms",
      "Full kitchen and covered outdoor room",
      "Private mooring for a small boat",
      "Forty metres of private beach",
      "Two hundred metres from the northern reef",
      "Suitable for a family of five",
    ],
    image: {
      src: "/images/stays/reef-house.svg",
      alt: "A Reef House at Montreval Tamerin among palms at the northern end of the beach.",
    },
  },
  {
    slug: "fjord-room",
    name: "Fjord Room",
    hotelSlug: "montreval-lindhavn",
    category: "Room",
    size: 29,
    sleeps: 2,
    view: "Fjord, south",
    bed: "One king, or two singles on request",
    rateFrom: 720,
    summary:
      "Tarred pine, a triple-glazed window the width of the room, and a seat in it deep enough to sleep in.",
    body: [
      {
        type: "paragraph",
        text: "Twenty-four of the thirty-one rooms at Lindhavn are Fjord Rooms. Every one faces the water; there are no landward rooms in the house. Walls and ceiling are pine, tarred outside and left pale inside, so the room gets steadily warmer in colour as the light goes.",
      },
      {
        type: "paragraph",
        text: "The window runs the full width of the room and is triple-glazed against a wind that in February is a serious proposition. Beneath it is a window seat nine hundred millimetres deep, with a wool blanket on it, and it is where most guests end up spending the afternoon.",
      },
    ],
    features: [
      "Full-width triple-glazed window",
      "Window seat, 900 mm deep, with wool blankets",
      "Underfloor heating throughout",
      "Deep bath facing the fjord",
      "Outer layers and boots provided in your size",
      "Aurora call to your room on request",
    ],
    image: {
      src: "/images/hotels/montreval-lindhavn-window-seat.webp",
      alt: "A Fjord Room at Montreval Lindhavn, its window seat looking out over the water in blue light.",
    },
  },
  {
    slug: "boathouse-suite",
    name: "Boathouse Suite",
    hotelSlug: "montreval-lindhavn",
    category: "Suite",
    size: 78,
    sleeps: 3,
    view: "Fjord, west",
    bed: "One king, plus a daybed",
    rateFrom: 1690,
    summary:
      "The rebuilt boathouse at the western end, standing over the water, with its own sauna and a door into the fjord.",
    body: [
      {
        type: "paragraph",
        text: "The boathouse predates the hotel by about ninety years and was the only structure on the site when we bought it. It has been rebuilt on its original piles, in the original timber where the original timber survived, and it now holds one suite.",
      },
      {
        type: "paragraph",
        text: "There is a bedroom, a living room with a stove, a sauna of its own, and a door in the western wall that opens directly onto a ladder into four hundred metres of water. Guests use it more than we expected, at hours we did not anticipate.",
      },
    ],
    features: [
      "Standing on the original boathouse piles",
      "Private sauna and cold-water ladder",
      "Wood stove and a laid fire",
      "Living room with west-facing glazing",
      "Daybed suitable for a third guest",
      "Ninety seconds' walk from the bathhouse",
    ],
    image: {
      src: "/images/stays/boathouse-suite.svg",
      alt: "The Boathouse Suite at Montreval Lindhavn standing over black water at blue hour.",
    },
  },
];
