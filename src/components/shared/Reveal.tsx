import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type RevealProps = HTMLAttributes<HTMLDivElement>;

/**
 * Reveal is a mechanism, not an aesthetic. It marks a block as a scroll-entrance
 * target with `data-reveal` and leaves every visual decision — distance, timing,
 * easing, or no motion at all — to the design language's own CSS.
 *
 * It is a server component and renders no client JavaScript. That is the whole
 * point: content inside it is present and visible in the server's markup, and
 * motion is layered on top by CSS. Per `.hubzero/rendering.md` — Progressive
 * Enhancement, content must never start in a hidden state it can only escape
 * via JavaScript. An observer-driven reveal has two independent ways to leave
 * content invisible forever (scripting that never runs, and reduced motion),
 * and neither is caught by visual review or a component test.
 *
 * Drive it with a scroll-driven animation, which needs no script and degrades
 * to plain visible content wherever it is unsupported:
 *
 *   [data-reveal] {
 *     animation: reveal-rise linear both;
 *     animation-timeline: view();
 *     animation-range: entry 0% entry 60%;
 *   }
 *
 *   @keyframes reveal-rise {
 *     from { opacity: 0; transform: translateY(1rem); }
 *     to   { opacity: 1; transform: translateY(0); }
 *   }
 *
 * The degradation is load-bearing: with no `animation-timeline` support the
 * duration defaults to `0s` and `both` settles the element on its `to` frame,
 * so the content is simply visible. Reduced motion is handled globally in
 * `globals.css`; a language wanting a different composition rather than merely
 * a static one should say so explicitly in its own media query.
 *
 * The one rule a design language must not break: no selector may leave a
 * `[data-reveal]` block hidden in a state that only script can exit.
 */
export function Reveal({ className, children, ...props }: RevealProps) {
  return (
    <div data-reveal className={cn(className)} {...props}>
      {children}
    </div>
  );
}
