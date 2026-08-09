export interface NavigationItem {
  label: string;
  href: string;
  /** Shown beneath the label in the full-screen menu, never in the bar. */
  description?: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

/**
 * The primary bar. Six links: what a guest is choosing between, in the order
 * they usually choose. Everything else lives in the full menu and the footer.
 */
export const navigation: NavigationItem[] = [
  { label: "Destinations", href: "/destinations" },
  { label: "Hotels", href: "/hotels" },
  { label: "Suites & villas", href: "/suites" },
  { label: "Dining", href: "/dining" },
  { label: "Wellness", href: "/wellness" },
  { label: "Experiences", href: "/experiences" },
];

/** The single call to action, repeated in the bar, the menu and the footer. */
export const primaryAction: NavigationItem = {
  label: "Enquire",
  href: "/reservations",
};

/**
 * The full-screen menu. Grouped so the menu reads as an index of the site
 * rather than a longer version of the bar.
 */
export const menuNavigation: NavigationGroup[] = [
  {
    title: "Stay",
    items: [
      {
        label: "Destinations",
        href: "/destinations",
        description: "Six places, and when to see them",
      },
      {
        label: "Hotels",
        href: "/hotels",
        description: "The six houses",
      },
      {
        label: "Suites & villas",
        href: "/suites",
        description: "Rooms, suites, tents and villas",
      },
      {
        label: "Reservations",
        href: "/reservations",
        description: "Rates, terms and how to reach us",
      },
    ],
  },
  {
    title: "Table & bath",
    items: [
      {
        label: "Dining",
        href: "/dining",
        description: "Eight kitchens",
      },
      {
        label: "Wellness",
        href: "/wellness",
        description: "Sérène, in four of the six",
      },
      {
        label: "Experiences",
        href: "/experiences",
        description: "Led by the people who work here",
      },
    ],
  },
  {
    title: "Gather",
    items: [
      {
        label: "Weddings & celebrations",
        href: "/celebrations",
        description: "Thirty guests, or the whole house",
      },
      {
        label: "Meetings & gatherings",
        href: "/meetings",
        description: "One room, one table, four days",
      },
    ],
  },
  {
    title: "Montreval",
    items: [
      { label: "About", href: "/about", description: "How the collection is run" },
      { label: "Journal", href: "/journal", description: "Notes from the houses" },
      {
        label: "Sustainability",
        href: "/sustainability",
        description: "The figures, including the poor ones",
      },
      { label: "Questions", href: "/faqs", description: "Answered plainly" },
      { label: "Contact", href: "/contact", description: "Who to write to" },
    ],
  },
];

/** The footer. Deliberately a different cut of the site from the menu. */
export const footerNavigation: NavigationGroup[] = [
  {
    title: "The collection",
    items: [
      { label: "Destinations", href: "/destinations" },
      { label: "Hotels", href: "/hotels" },
      { label: "Suites & villas", href: "/suites" },
      { label: "Experiences", href: "/experiences" },
    ],
  },
  {
    title: "In the houses",
    items: [
      { label: "Dining", href: "/dining" },
      { label: "Wellness", href: "/wellness" },
      { label: "Weddings & celebrations", href: "/celebrations" },
      { label: "Meetings & gatherings", href: "/meetings" },
    ],
  },
  {
    title: "Montreval",
    items: [
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Planning a stay",
    items: [
      { label: "Reservations", href: "/reservations" },
      { label: "Questions", href: "/faqs" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
