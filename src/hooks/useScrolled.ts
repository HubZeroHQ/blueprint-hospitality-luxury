"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });

  return () => window.removeEventListener("scroll", callback);
}

/**
 * Answers exactly one question: has the viewport scrolled past `threshold`?
 *
 * Derived independently of every other piece of interface state. A header's
 * appearance, a drawer's visibility, and the current route are separate values
 * that get composed at the point of use — chaining one off another produces
 * state that breaks in combinations nobody tested. See `.hubzero/rendering.md`
 * (Deriving Interface State).
 *
 * `useSyncExternalStore` rather than an effect: the server snapshot is `false`,
 * so the first client render agrees with the server, and the real value is read
 * during the same commit as hydration rather than one paint later. That
 * matters on a restored scroll position, where an effect-based read shows the
 * un-scrolled treatment for a frame before correcting itself.
 */
export function useScrolled(threshold = 0): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false
  );
}
