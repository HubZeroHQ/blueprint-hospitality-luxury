import type { LegalDocument } from "./types";

import { site } from "@/config/site";

/**
 * Privacy and terms. Both open by stating what this website actually is and
 * what it actually does, which for a blueprint with no backend is nothing.
 */
export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy",
    title: "Privacy",
    description: `How ${site.name} handles personal information, and what this particular website does and does not collect.`,
    updated: "2026-04-14",
    body: [
      {
        type: "heading",
        text: "About this website",
      },
      {
        type: "paragraph",
        text: `This site is a HubZero Blueprint demonstration and ${site.name} is a fictional company. There is no reservation system, no account, no analytics and no server-side processing behind these pages. Nothing you do here is recorded, stored or transmitted anywhere, because there is nowhere for it to go. Enquiry links open your own email application or telephone; whatever you write in them stays with you until you choose to send it.`,
      },
      {
        type: "paragraph",
        text: "The policy below is the one a hotel group of this kind would publish. It is included so the blueprint is complete rather than because any of it is currently in force.",
      },
      {
        type: "heading",
        text: "What we would collect",
      },
      {
        type: "paragraph",
        text: `${site.legalName} collects only what is required to hold a reservation and to look after a guest during a stay: name, contact details, dates of travel, payment details for the guarantee, and anything you choose to tell us about how you would like to be looked after — dietary requirements, mobility, a preference for a particular room.`,
      },
      {
        type: "list",
        items: [
          "Reservation details, kept for seven years for accounting purposes.",
          "Preferences you have shared, kept until you ask us to remove them.",
          "Correspondence with our reservations team, kept for two years.",
          "Payment guarantees, held by our payment provider and never on our own systems.",
        ],
      },
      {
        type: "heading",
        text: "What we would never do",
      },
      {
        type: "list",
        items: [
          "Sell, rent or share guest information with anybody for marketing.",
          "Add a guest to a mailing list because they stayed with us.",
          "Retain payment card details after a stay has been settled.",
          "Use guest photography without asking first, in writing, each time.",
        ],
      },
      {
        type: "heading",
        text: "Your rights",
      },
      {
        type: "paragraph",
        text: `You may ask what we hold, ask for it to be corrected, or ask for it to be deleted, and we will answer within thirty days. Write to ${site.contact.reservations.email} or to ${site.legalName}, ${site.address.inline}.`,
      },
      {
        type: "heading",
        text: "Cookies",
      },
      {
        type: "paragraph",
        text: "This website sets no cookies of any kind and there is no consent banner because there is nothing to consent to. A production deployment of this blueprint that added analytics or a booking engine would need both, and would need this section rewritten to describe them honestly.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms",
    description: `The terms on which ${site.name} accepts reservations, and the status of this website.`,
    updated: "2026-04-14",
    body: [
      {
        type: "heading",
        text: "About this website",
      },
      {
        type: "paragraph",
        text: `This site is a HubZero Blueprint demonstration. ${site.name}, its six houses, its staff, its rates, its awards and its guest letters are fictional and were written for this blueprint. No reservation can be made here and no agreement of any kind is formed by using these pages.`,
      },
      {
        type: "heading",
        text: "Reservations",
      },
      {
        type: "paragraph",
        text: `A reservation is confirmed when ${site.legalName} issues a written confirmation, and not before. Rates are quoted per night for two guests, in euros, and include breakfast and all applicable taxes. Rates quoted for a stay are held for that stay and do not change after confirmation.`,
      },
      {
        type: "heading",
        text: "Cancellation",
      },
      {
        type: "list",
        items: [
          "More than 14 days before arrival: no charge.",
          "Within 14 days of arrival: the first night is charged.",
          "Within 48 hours of arrival, or in the event of no arrival: half the stay is charged.",
          "Exclusive-use bookings and celebrations carry separate terms, set out in writing at the time of booking.",
        ],
      },
      {
        type: "paragraph",
        text: "Where travel is disrupted by something outside a guest's control, we ask that you speak to us. These terms exist to make planning possible, not to be enforced against someone whose flight was cancelled.",
      },
      {
        type: "heading",
        text: "What we ask of guests",
      },
      {
        type: "paragraph",
        text: "That children are supervised near water, that the cold plunge at Lindhavn is never entered alone, that the lemon terraces at Calanera are walked rather than picked, and that anyone with a medical condition affected by heat, cold or altitude tells us before arrival rather than after.",
      },
      {
        type: "heading",
        text: "Liability",
      },
      {
        type: "paragraph",
        text: `${site.legalName} is responsible for the safety of its premises and the conduct of its staff. It is not responsible for weather, sea conditions, or the decisions of the skipper, boatman or guides, all of whom have absolute discretion to cancel an excursion and regularly exercise it.`,
      },
      {
        type: "heading",
        text: "Governing terms",
      },
      {
        type: "paragraph",
        text: `These terms are issued by ${site.legalName}, ${site.address.inline}. Questions about them should go to ${site.contact.reservations.email}.`,
      },
    ],
  },
];
