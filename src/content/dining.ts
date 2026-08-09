import type { Restaurant } from "./types";

/** Eight kitchens across six houses. */
export const restaurants: Restaurant[] = [
  {
    slug: "cimaise",
    name: "Cimaise",
    hotelSlug: "montreval-verane",
    kitchen: "Alpine, vegetable-led",
    chef: "Anaïs Dupleix",
    seats: 44,
    service: [
      { label: "Dinner", value: "19:00 – 21:30, daily" },
      { label: "Menu", value: "Five courses, €135" },
      { label: "Wine pairing", value: "€85, five glasses" },
      { label: "Booking", value: "Residents from booking; others 30 days ahead" },
    ],
    standfirst: "Forty-four seats, five courses, and a kitchen garden eleven metres from the pass.",
    summary:
      "Anaïs Dupleix cooks the valley — its dairy, its garden, its forest — in five courses that change more or less weekly.",
    body: [
      {
        type: "paragraph",
        text: "Cimaise occupies the old hayloft, which gives it a five-metre ceiling, a beam structure nobody was willing to hide, and acoustics that took two attempts and a great deal of wool to solve. Forty-four seats, all of them facing either the lake or the open kitchen.",
      },
      {
        type: "paragraph",
        text: "Anaïs Dupleix has run the kitchen since 2016. Her cooking is vegetable-led rather than vegetarian — there is fish from the lake and meat from the two farms above the village — and it is unapologetically local, which in the Verane Valley means a short list of ingredients treated very carefully rather than a long list treated casually.",
      },
      {
        type: "heading",
        text: "The garden",
      },
      {
        type: "paragraph",
        text: "The kitchen garden is eleven metres from the pass and supplies about seventy per cent of the vegetables on the menu between May and October. In February that figure is closer to fifteen per cent and the menu says so. We do not pretend to a growing season the valley does not have.",
      },
      {
        type: "heading",
        text: "Booking",
      },
      {
        type: "paragraph",
        text: "Residents may reserve at the time of booking their stay. Tables for guests not staying in the house open thirty days ahead and go quickly in July, August and February. Dietary requirements are straightforward for us if we have them a day in advance and difficult if we have them at the table.",
      },
    ],
    signatures: [
      {
        name: "Lake char, cured nine hours, cucumber and dill oil",
        description:
          "Char from the lake, cured briefly rather than heavily, with cucumber from the garden and an oil made from the dill that bolts every July.",
      },
      {
        name: "Salt-baked celeriac, aged Verane butter, hazelnut",
        description:
          "A whole celeriac baked in a salt crust for two hours and served with butter from the village dairy, aged four weeks in the cellar.",
      },
      {
        name: "Larch honey and buttermilk, frozen at the table",
        description:
          "Honey from the hives above the boathouse, buttermilk from the same dairy, frozen in front of you because it is better in the first ninety seconds.",
      },
    ],
    image: {
      src: "/images/dining/cimaise.svg",
      alt: "The dining room at Cimaise beneath the original hayloft beams, tables lit low at dusk.",
    },
  },
  {
    slug: "le-batelier",
    name: "Le Batelier",
    hotelSlug: "montreval-verane",
    kitchen: "Lakeside, simple",
    chef: "Anaïs Dupleix",
    seats: 30,
    service: [
      { label: "Lunch", value: "12:30 – 15:00, weather permitting" },
      { label: "Menu", value: "À la carte, €18 – €42" },
      { label: "Season", value: "May to early October" },
      { label: "Booking", value: "Not taken; first come" },
    ],
    standfirst: "Lunch on the boathouse deck, decided each morning by the weather board.",
    summary:
      "Thirty seats on the water, open whenever the weather allows. Bread, cheese, fish from the lake, and one thing on a grill.",
    body: [
      {
        type: "paragraph",
        text: "Le Batelier is a deck, a grill and a counter. It opens when the weather allows and closes when it does not, and the decision is posted on the board by the library door at around ten each morning. In a good July it opens twenty-eight days out of thirty-one. In May, considerably fewer.",
      },
      {
        type: "paragraph",
        text: "The food is deliberately plain: bread from the bakehouse, cheese from the co-operative, tomatoes when there are tomatoes, and whatever is on the grill that day. It is the meal guests most often ask us to reproduce at home and the one that resists it most successfully.",
      },
    ],
    signatures: [
      {
        name: "Bread, butter, salt",
        description:
          "Baked at six, salted butter from the dairy, and coarse salt. Ordered by nearly every table and finished by all of them.",
      },
      {
        name: "Whole grilled char, lemon, olive oil",
        description: "One fish, split, grilled over larch, and nothing else on the plate.",
      },
      {
        name: "Apricots in the coals",
        description:
          "Apricots from the valley, buried in the embers at the end of service and eaten with a spoon.",
      },
    ],
    image: {
      src: "/images/dining/le-batelier.svg",
      alt: "The boathouse deck at Le Batelier set for lunch above the surface of Lake Verane.",
    },
  },
  {
    slug: "marena",
    name: "Marena",
    hotelSlug: "montreval-calanera",
    kitchen: "Coastal, fish-led",
    chef: "Elio Ventresca",
    seats: 52,
    service: [
      { label: "Dinner", value: "19:30 – 22:30, daily" },
      { label: "Menu", value: "À la carte, €26 – €58" },
      { label: "Wine", value: "600 coastal labels, 40 by the glass" },
      { label: "Booking", value: "Residents from booking; others 30 days ahead" },
    ],
    standfirst: "Fifty-two seats on the second terrace, ninety metres above the water they are cooking.",
    summary:
      "Elio Ventresca cooks what the day boats at Manda bring in, over charcoal, with the lemons growing above the room.",
    body: [
      {
        type: "paragraph",
        text: "Marena sits on the second terrace under a pergola of the original vines, open on three sides, with the sea ninety metres below and the lemon terraces directly above. It is the loudest room in the collection and we have stopped apologising for it.",
      },
      {
        type: "paragraph",
        text: "Elio Ventresca buys from the day boats at Manda six mornings a week. What arrives, arrives; the menu is printed at five in the afternoon. Almost everything goes over charcoal, and almost everything has lemon on it, which is what happens when you build a restaurant inside a lemon farm.",
      },
      {
        type: "heading",
        text: "The cellar",
      },
      {
        type: "paragraph",
        text: "Six hundred labels, all of them from within four hundred kilometres of the house, forty of them open by the glass at any time. The list is organised by proximity rather than grape, which confuses people for about a minute and then makes complete sense.",
      },
    ],
    signatures: [
      {
        name: "Red prawns, raw, lemon and oil",
        description: "Landed that morning at Manda, split, and dressed with nothing but the two things growing above the room.",
      },
      {
        name: "Whole fish over charcoal, for two",
        description: "Whatever came in. Weighed at the table before it is cooked, so nobody is surprised by the bill.",
      },
      {
        name: "Lemon leaf ice cream",
        description: "Made with leaves rather than fruit, which tastes far less obvious and considerably better.",
      },
    ],
    image: {
      src: "/images/dining/marena.svg",
      alt: "Tables at Marena under a vine pergola on the terrace at Montreval Calanera, sea below.",
    },
  },
  {
    slug: "limonaia",
    name: "Limonaia",
    hotelSlug: "montreval-calanera",
    kitchen: "Breakfast and long lunches",
    chef: "Elio Ventresca",
    seats: 34,
    service: [
      { label: "Breakfast", value: "07:30 – 11:00, daily" },
      { label: "Lunch", value: "13:00 – 16:00, daily" },
      { label: "Menu", value: "À la carte, €14 – €36" },
      { label: "Booking", value: "Not taken; first come" },
    ],
    standfirst: "Breakfast among two hundred and forty lemon trees, which smells exactly as you would hope.",
    summary:
      "The old lemon store on the fourth terrace, opened out on two sides, serving breakfast and lunch to anyone who has climbed that far.",
    body: [
      {
        type: "paragraph",
        text: "Limonaia is the second of the two lemon buildings on the fourth terrace — the smaller one, which was not suitable for a suite and turned out to be perfect for a breakfast room. Two of its walls are gone; the other two are a metre thick.",
      },
      {
        type: "paragraph",
        text: "Breakfast runs to eleven and is worth the four minutes of steps. Lunch is longer, slower and mostly eaten by people who have swum in the morning and have no further plans. In May, when the trees flower, the room is close to overwhelming.",
      },
    ],
    signatures: [
      {
        name: "Ricotta, lemon, honey, warm bread",
        description: "Ricotta made at the co-operative that morning, lemon from four metres away, honey from the terraces.",
      },
      {
        name: "Tomatoes and bread, in August only",
        description: "Available for about six weeks. We do not serve it outside them, and we are asked constantly.",
      },
      {
        name: "Granita di limone",
        description: "The house version, less sweet than most, served in the afternoon to anyone who asks.",
      },
    ],
    image: {
      src: "/images/dining/limonaia.svg",
      alt: "The open-sided Limonaia breakfast room among lemon trees at Montreval Calanera.",
    },
  },
  {
    slug: "table-daubris",
    name: "Table d'Aubris",
    hotelSlug: "maison-aubris",
    kitchen: "One menu, one table",
    chef: "Perrine Gaudet",
    seats: 28,
    service: [
      { label: "Dinner", value: "20:00, one sitting, daily" },
      { label: "Menu", value: "Four courses, €96. No choice" },
      { label: "Wine", value: "Estate and district, €60 with the menu" },
      { label: "Booking", value: "Residents only" },
    ],
    standfirst: "Twenty-eight seats at one oak table. One menu, decided in the afternoon.",
    summary:
      "Perrine Gaudet writes the menu after the morning deliveries and cooks it for everyone at once, at eight, at one table.",
    body: [
      {
        type: "paragraph",
        text: "There is one table at Aubris. It is oak, it is nine metres long, and everybody staying in the house eats at it at eight o'clock. There is no à la carte, no second sitting and no choice of dish. This is the most divisive decision in the collection and the one we are least likely to change.",
      },
      {
        type: "paragraph",
        text: "Perrine Gaudet writes the menu in the afternoon, after the deliveries, and it is posted in the courtyard at five. Four courses. If you have an allergy or something you genuinely will not eat, tell us when you book and we will cook for you specifically — but we need to know before the day, because there is no alternative kitchen running in parallel.",
      },
      {
        type: "heading",
        text: "What it is like",
      },
      {
        type: "paragraph",
        text: "Strangers sit next to each other. Some guests find this the best thing about Aubris and some find it the reason they will not return. We say so plainly at the point of booking rather than at the door, because being surprised by a communal table at eight in the evening is nobody's idea of hospitality.",
      },
    ],
    signatures: [
      {
        name: "The bread, cut at the table",
        description: "Baked in the courtyard bakehouse at four each afternoon and cut in front of you at eight.",
      },
      {
        name: "Whatever the growers brought",
        description: "Eleven growers within walking distance. The menu is a report on their week.",
      },
      {
        name: "Cheese from the cellar door",
        description: "Kept in the chalk at twelve degrees and brought up an hour before service, never earlier.",
      },
    ],
    image: {
      src: "/images/hotels/maison-aubris-dining-table.webp",
      alt: "The nine-metre oak table at Table d'Aubris laid with candles for a single sitting.",
    },
  },
  {
    slug: "nour",
    name: "Nour",
    hotelSlug: "montreval-sabaia",
    kitchen: "Desert, fire-led",
    chef: "Karim Belhadj",
    seats: 40,
    service: [
      { label: "Dinner", value: "19:30 – 22:00, daily" },
      { label: "Menu", value: "Four courses, €110" },
      { label: "Breakfast", value: "06:30 – 10:30 in the dining tent" },
      { label: "Booking", value: "Residents only" },
    ],
    standfirst: "One dining tent, one fire pit, and bread baked in the sand.",
    summary:
      "Karim Belhadj cooks over wood and coals, with dates from the Adeem gardens and grain milled at the camp.",
    body: [
      {
        type: "paragraph",
        text: "Nour is a single tent with forty seats, open on the escarpment side, and a fire pit that is lit at four in the afternoon and not allowed to go out until the last guest leaves. Almost everything is cooked over it or in it.",
      },
      {
        type: "paragraph",
        text: "Karim Belhadj came to Sabaia from a restaurant with rather more equipment and describes the adjustment as the most useful thing that has happened to his cooking. There is no gas at the camp. There is wood, coals, sand and a mill.",
      },
      {
        type: "heading",
        text: "Dinner under the sky",
      },
      {
        type: "paragraph",
        text: "Between October and April, and whenever the wind allows, dinner moves outside to the fire circle. There is no lighting there beyond the fire and lanterns, which means the food arrives in near darkness. Guests are warned. Nobody has yet complained.",
      },
    ],
    signatures: [
      {
        name: "Bread baked in the sand",
        description: "Dough buried under coals in the sand and dug up at the table, brushed off, and torn.",
      },
      {
        name: "Lamb, four hours in the pit",
        description: "From the flock at Adeem, cooked in a covered pit from mid-afternoon and served at eight.",
      },
      {
        name: "Dates, cream and salt",
        description: "October dates from the palm gardens below the camp, split, with cream and a great deal of salt.",
      },
    ],
    image: {
      src: "/images/dining/nour.svg",
      alt: "The dining tent at Nour opened toward the escarpment, lit by fire and lanterns.",
    },
  },
  {
    slug: "hali",
    name: "Hali",
    hotelSlug: "montreval-tamerin",
    kitchen: "Lagoon, raw and grilled",
    chef: "Vaea Tumanu",
    seats: 46,
    service: [
      { label: "All day", value: "07:00 – 22:00, daily" },
      { label: "Menu", value: "À la carte, €16 – €48" },
      { label: "Fishing", value: "Line-caught only, within the lagoon" },
      { label: "Booking", value: "Residents only" },
    ],
    standfirst: "Open on three sides to the lagoon, and closed to everything the survey says to leave alone.",
    summary:
      "A single all-day room over the water. Line-caught fish, fruit from the motu, and a list of what the kitchen will not serve.",
    body: [
      {
        type: "paragraph",
        text: "Hali is one room, open on three sides, standing where the sand ends and the shallows begin. It serves from seven in the morning until ten at night, which on an island with no other restaurant is less a style decision than a practical necessity.",
      },
      {
        type: "paragraph",
        text: "Everything from the lagoon is line-caught. There is a printed list on every table of the species the kitchen will not buy this season, decided with the district fisheries office and updated twice a year. It is short, it is specific, and it changes — which is the point of having it.",
      },
    ],
    signatures: [
      {
        name: "Raw fish, coconut, lime",
        description: "The atoll's own dish, made the way the four inhabited motu make it, which is with more lime than visitors expect.",
      },
      {
        name: "Whole fish in banana leaf",
        description: "Wrapped, buried, and dug up at the table. Whatever the line brought in that morning.",
      },
      {
        name: "Green mango and salt",
        description: "From the two trees behind the kitchen, cut thin, salted heavily, eaten at four in the afternoon.",
      },
    ],
    image: {
      src: "/images/dining/hali.svg",
      alt: "The open-sided dining room at Hali standing over the shallows of the Tamerin lagoon.",
    },
  },
  {
    slug: "fyr",
    name: "Fyr",
    hotelSlug: "montreval-lindhavn",
    kitchen: "Fjord, written each morning",
    chef: "Mikkel Storhaug",
    seats: 38,
    service: [
      { label: "Dinner", value: "18:30 – 21:00, daily" },
      { label: "Menu", value: "Five courses, €125" },
      { label: "Menu written", value: "08:15, after the boats land" },
      { label: "Booking", value: "Residents from booking; others 14 days ahead" },
    ],
    standfirst: "The menu is written at a quarter past eight in the morning and printed at nine.",
    summary:
      "Mikkel Storhaug cooks what the morning boats land, in a room facing four hundred metres of black water.",
    body: [
      {
        type: "paragraph",
        text: "Fyr faces south across the fjord through a wall of glass, with thirty-eight seats and a fire at the western end that is lit at four in the afternoon from October. In December, dinner is served in the dark; the last light has gone by half past two.",
      },
      {
        type: "paragraph",
        text: "The menu is written after the morning boats land, at about a quarter past eight, and printed at nine. When the boats do not go out — which in February is perhaps one day in six — the menu is a different menu, built from the cellar, the smokehouse and the root store. Some guests specifically hope for that day.",
      },
      {
        type: "heading",
        text: "The smokehouse",
      },
      {
        type: "paragraph",
        text: "Behind the kitchen, over birch and juniper. It runs most of the year and supplies the house through the weeks when the weather decides the fjord is not open for business.",
      },
    ],
    signatures: [
      {
        name: "Whatever landed, cured that morning",
        description: "Cured for four hours rather than overnight, which keeps it closer to raw than most kitchens dare.",
      },
      {
        name: "Cod, brown butter, winter roots",
        description: "The dish the house is asked for by name, available on roughly five days in six.",
      },
      {
        name: "Birch sap and cream",
        description: "Sap tapped in April, kept through the year, and served with cream from the farm at the head of the fjord.",
      },
    ],
    image: {
      src: "/images/dining/fyr.svg",
      alt: "The dining room at Fyr facing the fjord through full-height glass with a fire lit at one end.",
    },
  },
];
