import type { Award, ContentBlock, PressMention, TeamMember } from "./types";

/**
 * The brand's own narrative: how Montreval describes itself, what it says it
 * stands for, who runs it, and what has been said about it. Rendered by the
 * About page and reused in the footer and metadata.
 */

export const positioning = {
  /** One sentence, used in metadata and wherever the brand introduces itself. */
  statement:
    "Six privately held houses, kept small and staffed generously, for guests who are in no hurry.",
  /** The three-line version used on the About page and in the footer column. */
  pillars: [
    {
      title: "Six houses, not a chain",
      body: "Each house was bought because of the place it stands in, restored with the materials of that place, and run by someone who lives there. Nothing is rolled out across the collection because it worked somewhere else.",
    },
    {
      title: "Staffed generously",
      body: "We run about 2.4 staff per room, roughly twice the figure for our category. It is the most expensive decision we have made and the only one we have never revisited.",
    },
    {
      title: "Honest about the weather",
      body: "We close Sabaia in summer, we tell you when the sea is cold, and we say which rooms we would choose ourselves. A house that oversells itself only does it once.",
    },
  ],
};

export const voice = {
  summary:
    "Composed, warm and specific. Montreval speaks in plain sentences about small things — light, water, bread, linen — and never in the language of luxury marketing.",
  rules: [
    "Say the number. 'Two hundred and eleven steps', not 'a short descent'.",
    "Name the person. Nino decides. Britt cancels. Hugo is in the press house in September.",
    "Admit the limit before the guest finds it.",
    "No superlatives. The house does not need them and they date within a year.",
  ],
};

export const story: ContentBlock[] = [
  {
    type: "paragraph",
    text: "Montreval began in 1998 with a dairy farm in the Verane Valley that had stopped being a dairy farm, and an owner who had no particular intention of running a hotel. Camille Ferrand bought the buildings to stop them falling down. It took three years to work out what they wanted to be, and the answer arrived slowly enough to be right.",
  },
  {
    type: "paragraph",
    text: "Montreval Verane opened in 2001 with nineteen rooms and eleven staff. It has thirty-eight rooms now and ninety-one staff, and the ratio between those two numbers is the closest thing we have to a strategy.",
  },
  {
    type: "heading",
    text: "What we look for in a place",
  },
  {
    type: "paragraph",
    text: "Five houses have followed, at roughly four-year intervals, and each was bought for the same three reasons: the place had to be somewhere you would go even if we were not there, the building had to be worth restoring rather than replacing, and there had to be someone locally who wanted to run it. We have turned down more sites than we have bought, almost always on the third condition.",
  },
  {
    type: "paragraph",
    text: "We are not looking for a seventh with any urgency. When we describe ourselves as a small collection, that is a decision rather than a stage we are passing through.",
  },
  {
    type: "heading",
    text: "How the houses are run",
  },
  {
    type: "paragraph",
    text: "Each director runs their own house. There is no group standard for how a bed is turned down, what music plays where, or whether there is music at all — at Aubris there is not. What is shared is a set of commitments about staffing levels, sourcing, pay, and being straightforward with guests about what a place is and is not.",
  },
  {
    type: "quote",
    text: "We would rather tell you the sea is cold than have you find out at eleven o'clock in the morning with your shoes already off.",
    attribution: "Camille Ferrand, founder",
  },
  {
    type: "heading",
    text: "Ownership",
  },
  {
    type: "paragraph",
    text: "Montreval Hotels remains privately held, with no outside investment and no management contracts. We own the six buildings we operate. This is neither a virtue nor a business model — it is simply the arrangement that lets us close a hotel for the summer because it is too hot to enjoy it.",
  },
];

export const milestones: { year: number; title: string; detail: string }[] = [
  {
    year: 1998,
    title: "A farm in the Verane Valley",
    detail: "Camille Ferrand buys a disused dairy farm on the eastern shore of Lake Verane.",
  },
  {
    year: 2001,
    title: "Montreval Verane opens",
    detail: "Nineteen rooms and eleven staff. The lake wing and Cimaise follow in 2006.",
  },
  {
    year: 2009,
    title: "Montreval Calanera",
    detail: "A convent, then a lemon farm, reopens on four terraces above Manda Cove.",
  },
  {
    year: 2013,
    title: "Maison Aubris",
    detail: "Eleven hectares of vines and a chalk cellar. The cellar is restored before the roof.",
  },
  {
    year: 2017,
    title: "Montreval Sabaia",
    detail: "A camp designed to be struck and the ground returned to sand within eleven weeks.",
  },
  {
    year: 2019,
    title: "Montreval Tamerin",
    detail: "Villas cut at the Manda boatyard, shipped in pieces, and assembled by the people who built them.",
  },
  {
    year: 2022,
    title: "Montreval Lindhavn",
    detail: "Thirty-one rooms on the northern shore, and a bathhouse standing over the fjord.",
  },
  {
    year: 2025,
    title: "Verdant Standard, Level II",
    detail: "All six houses certified after a two-year assessment. Level III is the target for 2028.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Camille Ferrand",
    role: "Founder",
    based: "Verane",
    biography:
      "Bought the farm at Verane in 1998 without intending to open a hotel. Still lives in the valley and still reads every guest letter, which takes her most of a Tuesday.",
  },
  {
    name: "Adèle Ronsard",
    role: "Managing Director",
    based: "Ostrelle",
    biography:
      "Joined in 2011 from a group four times our size, and has spent fourteen years arguing successfully against growing to match it.",
  },
  {
    name: "Yusuf Barre",
    role: "Director of Houses",
    based: "Ostrelle",
    biography:
      "Responsible for how the six houses are run and, more particularly, for how differently they are allowed to be run. Spends about two hundred nights a year in them.",
  },
  {
    name: "Tomás Reguera",
    role: "Culinary Director",
    based: "Calanera",
    biography:
      "Oversees eight kitchens without writing a single menu. His role, as he describes it, is to hire well and then get out of the way at about four in the afternoon.",
  },
  {
    name: "Ingrid Falk",
    role: "Director of Sérène",
    based: "Lindhavn",
    biography:
      "Built the wellness programme around four treatments per house rather than nineteen, and defends that number annually.",
  },
  {
    name: "Noor Halvani",
    role: "Director of Sustainability",
    based: "Sabaia",
    biography:
      "Runs the Verdant Standard programme and publishes the figures that are not going well alongside the ones that are.",
  },
];

export const awards: Award[] = [
  {
    title: "House of the Year",
    awarder: "Voyage & Verdure Awards",
    year: 2025,
    hotelSlug: "montreval-lindhavn",
  },
  {
    title: "The Fifty Quiet Places",
    awarder: "The Slow Travel Index",
    year: 2025,
  },
  {
    title: "Kitchen of the Year, for Table d'Aubris",
    awarder: "Continental Review",
    year: 2024,
    hotelSlug: "maison-aubris",
  },
  {
    title: "Restoration Prize, for the Manda terraces",
    awarder: "Atlas Architecture Council",
    year: 2023,
    hotelSlug: "montreval-calanera",
  },
  {
    title: "Verdant Standard, Level II",
    awarder: "The Verdant Standard",
    year: 2025,
  },
];

export const press: PressMention[] = [
  {
    publication: "Continental Review",
    quote:
      "A collection that has worked out something most of its competitors have not: that the luxury guests actually want is having fewer things to decide.",
    year: 2026,
  },
  {
    publication: "The Quiet Traveller",
    quote:
      "Lindhavn's bathhouse is the best room built anywhere in hospitality this decade, and it contains a bench, a window and a hole in the floor.",
    year: 2025,
  },
  {
    publication: "Marque",
    quote:
      "Montreval publishes the months it thinks you should not visit. It is disarming, and it works.",
    year: 2025,
  },
];
