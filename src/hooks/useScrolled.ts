"use client";

import { useEffect, useState } from "react";

/**
 * Whether the page has been scrolled past `threshold` pixels.
 *
 * Deliberately the only input to the navigation's appearance. Deriving the bar
 * from scroll position alone — rather than from hero visibility, route, or
 * some combination — keeps the two interface states independent and means the
 * bar cannot end up in a combination nobody tested. See
 * `.hubzero/principles.md`, Interface State Should Be Independently Derived.
 *
 * Starts `false` on the server and on the first client render, then updates
 * after mount, so the markup on both sides of hydration matches.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);

    update();

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return scrolled;
}
