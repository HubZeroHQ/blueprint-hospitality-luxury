import type { Faq } from "./types";

import { site } from "@/config/site";

/**
 * Questions guests actually ask, plus one about this website itself.
 *
 * The last entry is not decoration: this blueprint has no booking engine and
 * no backend, and saying so where a visitor will look for it is the honest
 * alternative to a reservation form that quietly discards what it collects.
 * See `.hubzero/principles.md` — Honest Demonstration Over Simulated
 * Functionality.
 */
export const faqs: Faq[] = [
  {
    category: "Booking",
    question: "Can I reserve a room on this website?",
    answer: `Not on this site. This is a HubZero Blueprint demonstration and Montreval Hotels is a fictional company, so there is no booking engine behind these pages and no reservation would reach anyone. Every enquiry route on the site opens your own email application or telephone instead, so that nothing is collected and nothing is lost.`,
  },
  {
    category: "Booking",
    question: "How do I reserve a stay?",
    answer: `Reservations are taken by our own team rather than an agency, on ${site.contact.reservations.phone} and at ${site.contact.reservations.email}. We ask three questions before we quote: which house, roughly when, and how long you can stay. The third one changes the answer more than people expect.`,
  },
  {
    category: "Booking",
    question: "What is included in the rate?",
    answer:
      "Breakfast, all taxes, and use of every facility in the house including the spa baths, saunas and pools. Treatments, dinner, wine and experiences are charged separately, with two exceptions: transfers at Sabaia and Tamerin are included because there is no sensible alternative, and Cellar Hours at Aubris is included in every stay.",
  },
  {
    category: "Booking",
    question: "Is there a minimum stay?",
    answer:
      "Four nights at Tamerin and three at Sabaia, in both cases because a shorter stay is dominated by the transfer. Aubris does not sell single nights. Everywhere else, one night is welcome — although rates fall on the fourth night and again on the seventh, which tells you what we would prefer.",
  },
  {
    category: "Booking",
    question: "What are your cancellation terms?",
    answer:
      "Free cancellation until 14 days before arrival. Within 14 days, the first night is charged. Within 48 hours, half the stay is charged. If your travel is disrupted by something genuinely outside your control, speak to us — we have never enforced these terms against someone whose flight was cancelled.",
  },
  {
    category: "The houses",
    question: "Which house should I choose?",
    answer:
      "Tell our reservations team what you want from the week rather than which country you fancy, and let them answer. If you want water and long light, Verane in June or Tamerin in September. If you want to do nothing at all, Aubris in January. If you want to be genuinely somewhere else, Sabaia in November or Lindhavn in February.",
  },
  {
    category: "The houses",
    question: "Are children welcome?",
    answer:
      "Yes, at every house. Aubris is the honest exception in practice rather than policy: dinner is one sitting at one table at eight o'clock, which suits some children and very few under about ten. Tamerin and Verane are the two most children are happiest in. Cots and extra beds are free.",
  },
  {
    category: "The houses",
    question: "Can I bring a dog?",
    answer:
      "At Verane, Aubris and Lindhavn, yes, with no charge and no restriction on size. Not at Calanera, where the terraces and the two hundred and eleven steps make it unkind to the dog, nor at Tamerin or Sabaia, where local wildlife rules prevent it.",
  },
  {
    category: "The houses",
    question: "How accessible are the houses?",
    answer:
      "Lindhavn is step-free throughout, including the bathhouse. Verane is step-free across all public rooms and has six adapted rooms. Aubris has three step-free rooms in the old press. Sabaia has two step-free tented suites. Calanera is built on a cliff in four terraces and is genuinely difficult; we will describe it honestly before you book rather than after.",
  },
  {
    category: "Dining",
    question: "Do I need to book a table?",
    answer:
      "Residents can reserve at the time of booking their stay, which we recommend for Cimaise, Marena and Fyr. Table d'Aubris and Nour serve residents only and need no booking. Le Batelier and Limonaia do not take bookings at all.",
  },
  {
    category: "Dining",
    question: "Can you cook for dietary requirements?",
    answer:
      "Yes, at every house, if we know in advance. At Aubris this matters more than elsewhere: there is one menu and no second kitchen running in parallel, so an allergy told to us at the table is a problem and an allergy told to us at booking is not.",
  },
  {
    category: "Wellness",
    question: "Is the spa included?",
    answer:
      "Use of the baths, saunas, steam rooms and pools is included in every stay at the four houses with a Sérène — Verane, Sabaia, Tamerin and Lindhavn. Treatments are charged. Calanera and Aubris have treatment rooms but no Sérène, and we would rather say so than call two rooms a spa.",
  },
  {
    category: "Wellness",
    question: "How cold is the water at Lindhavn?",
    answer:
      "Between two and fourteen degrees depending on the month, and in February it is two. There is always a staff member within sight and nobody goes in alone. If you have a heart condition, are pregnant, or are simply unsure, speak to us first — we will run the whole sequence warm and it is still worth doing.",
  },
  {
    category: "Getting there",
    question: "Do you arrange transfers?",
    answer:
      "Yes, at every house. They are included at Sabaia and Tamerin. Elsewhere they are charged at cost and arranged with drivers we have used for years rather than through an agency.",
  },
  {
    category: "Getting there",
    question: "Why is Sabaia closed in summer?",
    answer:
      "Because it is a tented camp in a desert and the heat between mid-June and the end of August makes it genuinely unpleasant. We could sell those weeks. We would rather not have to explain them afterwards.",
  },
];
