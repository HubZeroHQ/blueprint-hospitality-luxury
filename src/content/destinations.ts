import type { Destination } from "./types";

/**
 * The six places Montreval has chosen to build in. Every place named on this
 * site is fictional; none is intended to correspond to a real location.
 */
export const destinations: Destination[] = [
  {
    slug: "verane",
    name: "Verane",
    region: "The Verane Valley",
    standfirst: "A glacial lake, a larch forest and eleven months of weather.",
    summary:
      "Six kilometres of still water held between limestone shoulders, with a single road along the eastern shore and no through traffic. Where Montreval began.",
    body: [
      {
        type: "paragraph",
        text: "The valley runs north to south, which is why the light lasts so long here. Lake Verane holds it — pewter at six in the morning, green by noon, and by early evening a colour our first head gardener described in his notebooks as \"the inside of a shell\". Guests who arrive intending to walk often spend the first day watching instead.",
      },
      {
        type: "paragraph",
        text: "There is one road. It ends at the northern boathouses, so nothing passes through Verane on its way to somewhere else. The village holds a bakery, a school of thirty-one children, a chapel with an unreliable bell, and the co-operative dairy that supplies our kitchens with the butter guests write to us about.",
      },
      {
        type: "heading",
        text: "The forest",
      },
      {
        type: "paragraph",
        text: "Above the eastern shore, larch gives way to limestone at around 1,400 metres. The forest is worked, not preserved: thinned on a fourteen-year cycle by four families who have held the licence for longer than anyone has kept records. Our foresters walk guests through it most mornings from May, which is the only honest way to explain why a working forest is quieter than a protected one.",
      },
      {
        type: "heading",
        text: "When to come",
      },
      {
        type: "paragraph",
        text: "June and September are the valley at its most generous — long light, warm water, and the paths dry underfoot. February is the valley at its most itself: the lake steaming at dawn, the road salted before six, and almost nobody in it.",
      },
    ],
    facts: [
      { label: "Elevation", value: "1,080 m" },
      { label: "Lake length", value: "6.2 km" },
      { label: "Nearest airport", value: "Ostrelle, 95 minutes" },
      { label: "Montreval house", value: "Montreval Verane, since 2001" },
    ],
    bestMonths: "May to October, and February for the ice",
    gettingThere:
      "Ostrelle International, then 95 minutes by road. We meet every arrival; the last stretch is a single-track pass and better driven by someone who knows it.",
    image: {
      src: "/images/destinations/verane-editorial.webp",
      alt: "Lake Verane at first light, larch forest rising into limestone ridges beyond the far shore.",
    },
    portrait: {
      src: "/images/destinations/verane-editorial.webp",
      alt: "Mist lifting off the surface of Lake Verane, with the eastern ridge in silhouette.",
    },
  },
  {
    slug: "calanera",
    name: "Calanera",
    region: "The Calanera Coast",
    standfirst: "Limestone cliffs, terraced lemons, and water you can see the bottom of.",
    summary:
      "Eighteen kilometres of cliff broken by four coves, three of which can only be reached by sea. Lemon terraces above, caves below, and a swimming season that runs to November.",
    body: [
      {
        type: "paragraph",
        text: "Calanera is a coast of edges. The cliffs fall two hundred metres into water clear enough that the shadow of a boat lands visibly on the sand beneath it. Between them sit four coves — Sella, Manda, Vinca and the small unnamed one below the house, which the staff call the Fifth and which appears on no map.",
      },
      {
        type: "paragraph",
        text: "Above the cliff line the land was terraced for lemons some four centuries ago and has been maintained, more or less unbroken, ever since. Nine growers still work the terraces above our house. Our kitchen buys from six of them, which is a matter of proximity rather than preference.",
      },
      {
        type: "heading",
        text: "The water",
      },
      {
        type: "paragraph",
        text: "The sea here is cold until late June and then warm until the middle of November. There is no tide to speak of and very little swell, which is what makes the sea caves navigable by anyone who can swim two hundred metres without hurrying. Our boatman, Nino, decides each morning which of the caves is going to be pleasant and which is going to be memorable for the wrong reasons.",
      },
      {
        type: "heading",
        text: "When to come",
      },
      {
        type: "paragraph",
        text: "May for the lemon blossom, which is overwhelming and lasts about eleven days. September and October for water at its warmest and the terraces at their quietest. July and August are beautiful and busy; we say so plainly.",
      },
    ],
    facts: [
      { label: "Coastline", value: "18 km" },
      { label: "Swimming season", value: "Late June to mid-November" },
      { label: "Nearest airport", value: "Porto Sella, 40 minutes" },
      { label: "Montreval house", value: "Montreval Calanera, since 2009" },
    ],
    bestMonths: "May, then September to early November",
    gettingThere:
      "Porto Sella, then 40 minutes by road along the cliff. Arrival by sea can be arranged from the harbour at Manda and takes about an hour.",
    image: {
      src: "/images/destinations/calanera-editorial.webp",
      alt: "Limestone cliffs falling into clear turquoise water along the Calanera coast.",
    },
    portrait: {
      src: "/images/destinations/calanera-editorial.webp",
      alt: "A lemon terrace cut into the cliff above the sea at Calanera.",
    },
  },
  {
    slug: "aubris",
    name: "Aubris",
    region: "The Aubris Downs",
    standfirst: "Chalk ridges, old vines, and a village that eats at one o'clock.",
    summary:
      "Low chalk country planted with vines for eight hundred years. Slow, agricultural, and almost entirely without a view — which is precisely the point.",
    body: [
      {
        type: "paragraph",
        text: "Aubris has no spectacle. It is chalk downland, planted in long shallow curves, with hedgerows where the slope is too steep to work and beech where the chalk gives out. People arrive expecting a landscape and find instead a working agricultural district that happens to be beautiful in the way a well-kept tool is beautiful.",
      },
      {
        type: "paragraph",
        text: "There are eleven growers within walking distance of the house and one co-operative press that all of them use. The village keeps a single restaurant, which opens for lunch at one and closes when the last table leaves. We have never persuaded them to open for dinner and have stopped asking.",
      },
      {
        type: "heading",
        text: "The vines",
      },
      {
        type: "paragraph",
        text: "Our own eleven hectares surround the house on three sides. Four of those hectares are old plantings that were nearly grubbed up in the 1980s and were saved, more or less by accident, because the previous owner ran out of money before he ran out of vines. They now make the only wine we bottle under our own label, in quantities too small to sell beyond the house.",
      },
      {
        type: "heading",
        text: "When to come",
      },
      {
        type: "paragraph",
        text: "Late September for the harvest, when the whole district works and the house smells of fermenting fruit for three weeks. April and May for the green. January, if you want the fire, the cellar and nobody else at all.",
      },
    ],
    facts: [
      { label: "Elevation", value: "180 m" },
      { label: "House vineyard", value: "11 hectares" },
      { label: "Nearest airport", value: "Ostrelle, 2 hours" },
      { label: "Montreval house", value: "Maison Aubris, since 2013" },
    ],
    bestMonths: "April to June, and late September for the harvest",
    gettingThere:
      "Ostrelle International, then two hours by road, or the regional line to Aubris-Village and eight minutes from there. We meet every train.",
    image: {
      src: "/images/destinations/aubris-editorial.webp",
      alt: "Vine rows curving across chalk downland at Aubris in late afternoon light.",
    },
    portrait: {
      src: "/images/destinations/aubris-editorial.webp",
      alt: "A hedgerow between two vineyard blocks on the Aubris Downs.",
    },
  },
  {
    slug: "sabaia",
    name: "Sabaia",
    region: "The Sabaia Sands",
    standfirst: "High desert, a red escarpment, and the quietest nights we know of.",
    summary:
      "A cold high desert at 1,300 metres, edged by a forty-kilometre escarpment and watered by a single spring that has never been recorded dry.",
    body: [
      {
        type: "paragraph",
        text: "Sabaia is not the desert of photographs. It is high, it is cold at night for most of the year, and the sand is the colour of dried blood rather than gold. The escarpment runs north-east for forty kilometres and takes the last hour of light entirely to itself, which is the reason our house faces the way it does.",
      },
      {
        type: "paragraph",
        text: "The spring at Adeem has fed the oasis below the escarpment for as long as there have been written records of the district, and it is the reason anyone has ever lived here. Eleven families still farm the palm gardens. Their dates arrive at our kitchen in October, in crates, unannounced.",
      },
      {
        type: "heading",
        text: "The silence",
      },
      {
        type: "paragraph",
        text: "Guests remark on it before anything else. There is no flight path, no road within eleven kilometres, and no generator running after ten in the evening. On a still night at Sabaia you can hear your own pulse, which some people find restful and others find alarming. We warn everyone in advance.",
      },
      {
        type: "heading",
        text: "When to come",
      },
      {
        type: "paragraph",
        text: "October to April. Daytime temperatures sit comfortably in the low twenties and nights fall to around four degrees, which is what the fires are for. We close the camp entirely from mid-June to the end of August; it would be dishonest to sell a stay in that heat.",
      },
    ],
    facts: [
      { label: "Elevation", value: "1,300 m" },
      { label: "Escarpment", value: "40 km" },
      { label: "Nearest airport", value: "Adeem, 2 hours 15 minutes" },
      { label: "Montreval house", value: "Montreval Sabaia, since 2017" },
    ],
    bestMonths: "October to April. Closed mid-June to end of August",
    gettingThere:
      "Adeem regional airfield, then 2 hours 15 minutes by road, the last 40 minutes unsurfaced. Transfers are included in every stay because there is no sensible alternative.",
    image: {
      src: "/images/destinations/sabaia-editorial.webp",
      alt: "The Sabaia escarpment catching the last light above red desert sand.",
    },
    portrait: {
      src: "/images/destinations/sabaia-editorial.webp",
      alt: "Palm gardens at the Adeem spring below the Sabaia escarpment.",
    },
  },
  {
    slug: "tamerin",
    name: "Tamerin",
    region: "Tamerin Atoll",
    standfirst: "A lagoon eleven kilometres across, and a reef doing well.",
    summary:
      "Nineteen islets around a shallow lagoon, four of them inhabited. The reef has been under continuous survey since 1996 and is, unusually, improving.",
    body: [
      {
        type: "paragraph",
        text: "Tamerin is a ring of nineteen islets enclosing a lagoon eleven kilometres at its widest point. Four islets are inhabited; the rest are sandbars, bird colonies, or too low to build on. Our villas sit on the leeward side of Motu Rea, which is the second largest and the only one with fresh groundwater.",
      },
      {
        type: "paragraph",
        text: "The lagoon is shallow — rarely more than nine metres — and almost entirely enclosed, which makes it flat in nearly all weather and extraordinarily clear. It also makes it warm, which is a mixed blessing, and the reason the reef survey exists.",
      },
      {
        type: "heading",
        text: "The reef",
      },
      {
        type: "paragraph",
        text: "The Tamerin reef has been surveyed continuously since 1996, first by the district fisheries office and, since 2019, jointly with our own marine team. Coral cover on the northern arm has risen from 31 per cent to 46 per cent over that period. This is unusual and is not entirely explained. Our marine biologist, Vaea Tumanu, will tell you exactly how much of it is management and how much is luck.",
      },
      {
        type: "heading",
        text: "When to come",
      },
      {
        type: "paragraph",
        text: "May to October is the dry season: less rain, steadier trade winds, and the best visibility in the lagoon. November to April is warmer and wetter, with afternoon storms that clear within the hour and the year's best light.",
      },
    ],
    facts: [
      { label: "Lagoon width", value: "11 km" },
      { label: "Islets", value: "19, four inhabited" },
      { label: "Nearest airport", value: "Tamerin Motu Rea, 15 minutes by boat" },
      { label: "Montreval house", value: "Montreval Tamerin, since 2019" },
    ],
    bestMonths: "May to October for the dry season",
    gettingThere:
      "Tamerin airstrip on Motu Rea, then fifteen minutes across the lagoon by the house boat. There is no road to the villas and never will be.",
    image: {
      src: "/images/destinations/tamerin-editorial.webp",
      alt: "The Tamerin lagoon at midday, pale sandbars showing through shallow water.",
    },
    portrait: {
      src: "/images/destinations/tamerin-editorial.webp",
      alt: "Shallow reef flats and a distant motu across the Tamerin lagoon.",
    },
  },
  {
    slug: "lindhavn",
    name: "Lindhavn",
    region: "Lindhavn Fjord",
    standfirst: "Deep water, low birch, and four hours of winter daylight.",
    summary:
      "A working fjord eighty kilometres long, with a fishing harbour at its mouth, sea ice from January, and light that behaves unlike light anywhere else we build.",
    body: [
      {
        type: "paragraph",
        text: "Lindhavn is eighty kilometres of deep water with mountains standing directly out of it. There is no shelf and no shallows; the fjord is four hundred metres deep two boat-lengths from the shore, which is why the water is black rather than blue and why the whole place is so quiet.",
      },
      {
        type: "paragraph",
        text: "The harbour at the mouth still lands fish six days a week. Our kitchen buys from the morning boats, which means the menu at Fyr is written after eight in the morning and printed after nine. Guests find this either delightful or inconvenient, and we have made our peace with both responses.",
      },
      {
        type: "heading",
        text: "The light",
      },
      {
        type: "paragraph",
        text: "In December there are just under four hours between sunrise and sunset, and the sun never rises far. The result is a long horizontal light — pink, then blue, then nothing — that lasts most of the short day. In June there is no night at all. Both are worth seeing, and neither is a substitute for the other.",
      },
      {
        type: "heading",
        text: "When to come",
      },
      {
        type: "paragraph",
        text: "February and March for sea ice, clear air and the best chance of the aurora. June and July for light that does not end. September for the birch turning, which takes about ten days and is the reason half our returning guests come back.",
      },
    ],
    facts: [
      { label: "Fjord length", value: "80 km" },
      { label: "Depth at the house", value: "410 m" },
      { label: "Nearest airport", value: "Lindhavn, 35 minutes" },
      { label: "Montreval house", value: "Montreval Lindhavn, since 2022" },
    ],
    bestMonths: "February to March, June to July, and September",
    gettingThere:
      "Lindhavn regional airport, then 35 minutes by road along the northern shore. In February and March the last kilometre is driven on packed snow.",
    image: {
      src: "/images/destinations/lindhavn-editorial.webp",
      alt: "Black fjord water beneath snow-covered mountains at Lindhavn in low winter light.",
    },
    portrait: {
      src: "/images/destinations/lindhavn-editorial.webp",
      alt: "Birch scrub and still water at the edge of Lindhavn fjord.",
    },
  },
];
