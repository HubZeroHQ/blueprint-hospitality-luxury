import { site } from "@/config/site";

/**
 * Deterministic formatters.
 *
 * `Intl` resolves against the runtime's locale and time zone, which differ
 * between the server render and the visitor's browser and are a recurring
 * source of hydration mismatches. These functions take the same input to the
 * same output everywhere — see `.hubzero/principles.md`, Predictable
 * Client/Server Rendering.
 */

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/**
 * Formats an ISO date (`YYYY-MM-DD`) as `14 April 2026` — the single date
 * format used across the blueprint.
 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);

  if (!year || !month || !day || month < 1 || month > 12) {
    return iso;
  }

  return `${day} ${MONTHS[month - 1]} ${year}`;
}

/** Formats a whole number of euros as `€1,150`. Rates are never quoted with cents. */
export function formatCurrency(amount: number): string {
  const grouped = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${site.locale.currencySymbol}${grouped}`;
}

/** `From €780` — the collection's one convention for expressing a rate. */
export function formatRateFrom(amount: number): string {
  return `From ${formatCurrency(amount)}`;
}

/** `1 h 30` for 90, `45 min` for 45. Used by spa treatments. */
export function formatMinutes(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  return rest === 0 ? `${hours} h` : `${hours} h ${rest}`;
}
