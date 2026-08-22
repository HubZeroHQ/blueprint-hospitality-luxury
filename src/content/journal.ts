import type { JournalArticle } from "./types";

/**
 * The Journal. Ordered newest first; `getJournalArticles` in `index.ts`
 * sorts defensively rather than relying on this array's order.
 */
export const journalArticles: JournalArticle[] = [
  {
    slug: "what-we-mean-by-quiet",
    title: "What we mean by quiet",
    standfirst:
      "Quiet is not the absence of noise. It is the absence of things asking for your attention — and most of those things are decisions.",
    category: "The houses",
    author: "Adèle Ronsard",
    publishedAt: "2026-06-18",
    readingMinutes: 6,
    body: [
      {
        type: "paragraph",
        text: "Guests use the word quiet about our houses more than any other, and for a long time we assumed they meant sound. We spent a considerable amount of money on that assumption: acoustic wool in the hayloft at Verane, triple glazing at Lindhavn, a door closer at Aubris that cost more than the door.",
      },
      {
        type: "paragraph",
        text: "Those were the right decisions for the wrong reason. When we finally sat down with four years of guest letters and read them properly, the pattern was not about sound at all. It was about decisions. People were not describing rooms in which they could hear less. They were describing days in which they had to choose less.",
      },
      {
        type: "heading",
        text: "The cost of a menu",
      },
      {
        type: "paragraph",
        text: "The single most divisive thing we do is the table at Aubris: one menu, one sitting, no choice. It is also, by a distance, the thing guests write to us about most warmly. We understand why, now. A menu with thirty items on it asks you to make a decision you have no information with which to make. A menu with one asks you to make none.",
      },
      {
        type: "paragraph",
        text: "That is not a reason to remove every choice from a hotel — a hotel that decides everything for you is not restful, it is presumptuous. It is a reason to be careful about which decisions you hand a guest, and to be honest that handing someone a decision is a cost, not a courtesy.",
      },
      {
        type: "heading",
        text: "Where we get it wrong",
      },
      {
        type: "paragraph",
        text: "We still get it wrong. The spa menu at Verane ran to nineteen treatments for years and we defended it as generosity; it was, in fact, a way of avoiding the harder work of knowing what to recommend. It is four now, one of which is not a treatment at all.",
      },
      {
        type: "quote",
        text: "A menu with thirty items asks you to make a decision you have no information with which to make. A menu with one asks you to make none.",
      },
      {
        type: "paragraph",
        text: "The test we now use, when someone proposes adding something to a house, is not whether it is good. Most proposals are good. It is whether it will require a guest to think about it. If it will, it has to be considerably better than good to earn its place.",
      },
    ],
    image: {
      src: "/images/journal/what-we-mean-by-quiet.webp",
      alt: "An empty reading room at Montreval Verane in late afternoon light, one chair by the window.",
    },
  },
  {
    slug: "nine-weeks-of-lemon",
    title: "Nine weeks of lemon",
    standfirst:
      "The lemon terraces above Calanera give us about nine usable weeks a year. Here is what the kitchen does with the other forty-three.",
    category: "Kitchens",
    author: "Elio Ventresca",
    publishedAt: "2026-05-02",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "There are two hundred and forty lemon trees above the house and they fruit, in a serious way, for about nine weeks. Everything else you will taste that has lemon in it — and at Marena that is most things — comes from work done during those nine weeks and stored.",
      },
      {
        type: "heading",
        text: "Salt first",
      },
      {
        type: "paragraph",
        text: "The bulk of the crop goes into salt within two days of picking. Whole fruit, coarse salt, glass jars, cellar. They are usable after six weeks and better after six months, and they are the backbone of the kitchen from January onward. We put up about four hundred kilos a year and run out in September, every year, without fail.",
      },
      {
        type: "heading",
        text: "Then leaves",
      },
      {
        type: "paragraph",
        text: "The leaves are the part visitors are surprised by. They are picked continuously — the trees do not stop making them — and they carry a flavour that is more floral and much less sharp than the fruit. The ice cream at Marena is made with leaves and no juice at all, and about one guest a week asks the kitchen to confirm that.",
      },
      {
        type: "heading",
        text: "What we do not do",
      },
      {
        type: "paragraph",
        text: "We do not buy lemons in. It would be easy, it would be cheap, and nobody would notice for about a fortnight. But the arrangement with the Rasetti family, who farmed these terraces before we existed, is that we take what the terraces give and work around it. If the crop is poor, the menu changes. In 2024 it was poor, and it did.",
      },
    ],
    image: {
      src: "/images/journal/nine-weeks-of-lemon.webp",
      alt: "Freshly harvested Calanera lemons being sorted into a wooden crate above the sea.",
    },
  },
  {
    slug: "the-case-for-staying-longer",
    title: "The case for staying longer",
    standfirst:
      "Our average stay is 3.4 nights. Almost everything we are proud of only happens after the fourth.",
    category: "Travel",
    author: "Yusuf Barre",
    publishedAt: "2026-03-24",
    readingMinutes: 7,
    body: [
      {
        type: "paragraph",
        text: "The average stay across our six houses is 3.4 nights. That number has been stubborn for a decade and it is, quietly, the thing we would most like to change — not for the obvious commercial reason, but because the first two nights of any stay are spent on logistics and the third is usually the first honest one.",
      },
      {
        type: "heading",
        text: "What the first two nights are",
      },
      {
        type: "paragraph",
        text: "Night one is arrival, and arrival is work: unpacking, orienting, deciding about dinner, sleeping badly in a bed that is not yours. Night two is when people do the thing they came to do — the walk, the boat, the dinner they booked three months ago. Only on the third morning does anyone wake up without a plan, and a third morning without a plan is the whole product.",
      },
      {
        type: "quote",
        text: "A third morning without a plan is the whole product.",
      },
      {
        type: "heading",
        text: "What changes on the fourth",
      },
      {
        type: "paragraph",
        text: "By the fourth day guests know the staff's names, which changes the register of every interaction in the building. They have found the chair they like. They order the thing they had yesterday. At Tamerin, where we have a four-night minimum, letters from guests are markedly different in tone from letters written anywhere else in the collection, and the four-night minimum is the only obvious variable.",
      },
      {
        type: "heading",
        text: "What we have changed",
      },
      {
        type: "list",
        items: [
          "Rates fall on the fourth night at every house, and again on the seventh.",
          "Tamerin has a four-night minimum and Sabaia a three-night minimum, in both cases because a shorter stay is dominated by the transfer.",
          "We no longer sell a one-night stay at Aubris at all — the cellar hours, the bakehouse and the table cannot be fitted into a single evening without turning them into a schedule.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is generosity. A longer stay is better for us in every respect: fewer arrivals to service, fewer rooms to turn, and guests who leave having actually had the experience we designed rather than a compressed sample of it.",
      },
    ],
    image: {
      src: "/images/journal/the-case-for-staying-longer.webp",
      alt: "A guest reading alone in the Aubris courtyard during a long late afternoon.",
    },
  },
  {
    slug: "how-a-bed-gets-made",
    title: "How a bed gets made at Montreval",
    standfirst:
      "Eleven minutes, four people involved before it is slept in, and one decision we have reversed twice.",
    category: "The houses",
    author: "Léa Bertrand",
    publishedAt: "2026-01-29",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "A bed at Verane takes about eleven minutes to make properly, which is roughly twice the industry figure, and the difference is almost entirely in the linen rather than the technique.",
      },
      {
        type: "heading",
        text: "The linen",
      },
      {
        type: "paragraph",
        text: "Woven at the mill at Sevrey, forty kilometres down the valley, in a weight that is heavier than most hotels use and slower to dry. It is washed at sixty degrees, without softener, and pressed damp on a roller iron — the last part being the reason it feels the way it does and the reason our laundry costs what it does.",
      },
      {
        type: "heading",
        text: "The decision we have reversed twice",
      },
      {
        type: "paragraph",
        text: "Whether to change linen daily. We began with daily, moved to every third night in 2015 on environmental grounds, moved back to daily in 2018 after guest feedback, and moved to on-request in 2021, where it has stayed. Roughly one guest in nine asks for a daily change. The card in the room says exactly what the options are and does not editorialise about the planet, because a hotel that lectures a guest about towels while running a heated pool has not thought hard enough.",
      },
      {
        type: "heading",
        text: "Four people",
      },
      {
        type: "paragraph",
        text: "The mill, the laundry, the housekeeper who makes it, and the housekeeper who checks it — not the same person, and never on the same day, which is the only reliable quality control we have found in twenty-five years of trying.",
      },
    ],
    image: {
      src: "/images/pages/montreval-verane-linen-craft.webp",
      alt: "Pressed linen folded on a housekeeping trolley in a corridor at Montreval Verane.",
    },
  },
  {
    slug: "reading-water",
    title: "Reading water: a season on the fjord",
    standfirst:
      "Our skipper at Lindhavn has been on this water for thirty-one years. She reads it the way other people read a room.",
    category: "Places",
    author: "Sigrid Aaland",
    publishedAt: "2025-11-11",
    readingMinutes: 6,
    body: [
      {
        type: "paragraph",
        text: "Britt Halden has skippered on Lindhavn fjord since she was nineteen. She now takes our guests out, six days a week, and the most valuable thing she does is not navigate. It is decide.",
      },
      {
        type: "paragraph",
        text: "The fjord is eighty kilometres long and four hundred metres deep at our jetty, which means the weather at the mouth and the weather at the head are frequently different weather. Britt can look at the water for about four seconds and tell you which one you are going to get.",
      },
      {
        type: "heading",
        text: "What she looks at",
      },
      {
        type: "list",
        items: [
          "The colour of the surface against the northern shore, which shows wind before you can feel it.",
          "Where the birds are working, which shows where the fish are, which shows where the boats will be.",
          "The line of the cloud on the eastern ridge — if it is flat, the day is settled; if it is torn, it is not.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is mystical and Britt is impatient with anyone who suggests it is. It is thirty-one years of paying attention to the same eighty kilometres of water, which is a form of expertise we do not have a good word for and undervalue accordingly.",
      },
      {
        type: "heading",
        text: "The days she says no",
      },
      {
        type: "paragraph",
        text: "About one day in nine between November and March, she cancels. Guests are occasionally disappointed and once, memorably, argued. She does not argue back; she simply does not go. It is the single most important safety arrangement at that house and it consists of one person being allowed to say no without needing anyone's agreement.",
      },
    ],
    image: {
      src: "/images/journal/reading-water.webp",
      alt: "A marine field notebook held above the shallow Tamerin reef at first light.",
    },
  },
  {
    slug: "the-vines-that-were-nearly-lost",
    title: "The vines that were nearly lost",
    standfirst:
      "Four hectares of old plantings at Aubris survived because the previous owner ran out of money before he ran out of vines.",
    category: "Kitchens",
    author: "Hugo Vasseur",
    publishedAt: "2025-09-30",
    readingMinutes: 6,
    body: [
      {
        type: "paragraph",
        text: "In 1987 the then-owner of this estate began grubbing up the old plantings on the western slope. They were low-yielding, awkward to work, and worth less per hectare than what he intended to replant. He cleared seven hectares over two winters. He then ran out of money, and four hectares survived by pure accident of timing.",
      },
      {
        type: "paragraph",
        text: "Those four hectares are now the only wine we bottle under our own label. They are still low-yielding and still awkward to work — the rows are too narrow for a modern tractor and the slope is too steep for a comfortable one — and they make about nine hundred bottles a year.",
      },
      {
        type: "heading",
        text: "What old vines actually give you",
      },
      {
        type: "paragraph",
        text: "Less than the romance suggests and more than the accountancy does. The fruit is smaller, the skins thicker, and the crop far more consistent between a difficult year and an easy one — which is the real argument for them, and a distinctly unromantic one.",
      },
      {
        type: "heading",
        text: "What we are doing about it",
      },
      {
        type: "paragraph",
        text: "Replanting the western slope, using cuttings taken from the surviving four hectares, at the original spacing. The first block went in during 2021 and will produce something worth drinking around 2032. Neither Perrine nor I will be running this estate by the time it is any good, which is more or less the definition of the job.",
      },
      {
        type: "quote",
        text: "The first block will produce something worth drinking around 2032. Neither of us will be running this estate by then, which is more or less the definition of the job.",
        attribution: "Hugo Vasseur",
      },
    ],
    image: {
      src: "/images/journal/the-vines-that-were-nearly-lost.webp",
      alt: "A viticulturist tying a gnarled heritage vine to its stake at Maison Aubris.",
    },
  },
];
