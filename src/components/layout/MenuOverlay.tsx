"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties, type RefObject } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Type";
import { menuNavigation, primaryAction } from "@/config/navigation";
import { site } from "@/config/site";
import { useDismissible } from "@/hooks/useDismissible";
import { cn } from "@/utils/cn";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  /** The control that opened the menu. Focus returns to it on close. */
  triggerRef: RefObject<HTMLButtonElement | null>;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * The full index of the site, on one ink surface.
 *
 * The same surface at every breakpoint: on handheld it is the navigation, on
 * desktop it is the way to reach everything the six-link bar deliberately
 * leaves out. Content is staged in with `--reveal-step` so the groups arrive
 * in sequence rather than all at once, which is the only place in the
 * blueprint motion is used for atmosphere rather than feedback — and it
 * collapses entirely under `prefers-reduced-motion`.
 */
export function MenuOverlay({ open, onClose, triggerRef }: MenuOverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;

    root.style.overflow = "hidden";
    closeRef.current?.focus();

    /*
     * Focus containment stays local: Base deliberately excludes it, because a
     * correct trap depends on the markup being trapped. This panel is a `div`
     * dialog kept in the tree so it can fade, rather than a modal `<dialog>`,
     * so the platform does not provide one here.
     */
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      root.style.overflow = previousOverflow;

      /*
       * Focus is returned here as well as by Base. `useDismissible` restores
       * focus only where it finds focus was lost, which is right for a
       * surface that unmounts; this panel stays mounted and merely becomes
       * `inert`, so the browser has not moved focus out of it yet when that
       * check runs and the hook correctly declines. Both target the trigger,
       * so the two compose rather than compete.
       *
       * Read at close time rather than snapshotted at open: if the header
       * re-rendered the trigger into a different node while the menu was
       * open, the current node is the one to return focus to.
       */
      // eslint-disable-next-line react-hooks/exhaustive-deps
      triggerRef.current?.focus();
    };
  }, [open, triggerRef]);

  /*
   * Escape-to-dismiss and focus restoration are Blueprint Base's, not this
   * blueprint's.
   *
   * `lockScroll` is declined because Base locks the body, and `globals.css`
   * sets `overflow-x: clip` on the root element — which makes the root the
   * scroll container, so a body lock would leave the page scrolling behind
   * the menu. The root-level lock above is the replacement.
   *
   * The trigger is named explicitly rather than left to Base's default of
   * "whatever was focused when the menu opened", because the effect above
   * moves focus into the panel and runs first.
   */
  useDismissible({
    open,
    onDismiss: onClose,
    restoreFocusTo: triggerRef,
    lockScroll: false,
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${site.name} menu`}
      aria-hidden={!open}
      // Kept in the tree so the panel can fade rather than appear, and made
      // inert to pointer and assistive technology when closed.
      inert={!open}
      className={cn(
        "fixed inset-0 z-[var(--z-modal)] overflow-y-auto overscroll-contain bg-ink",
        "transition-opacity duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div
        ref={panelRef}
        data-stage
        data-state={open ? "visible" : "hidden"}
        className="min-h-full py-8 md:py-10"
      >
        <Container>
          <div className="flex items-center justify-between">
            <Eyebrow tone="inverse">{site.shortName}</Eyebrow>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="eyebrow -mr-2 flex min-h-11 items-center gap-3 px-2 text-paper/70 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-paper"
            >
              Close
              <span aria-hidden className="block h-px w-6 bg-current" />
            </button>
          </div>

          <nav
            aria-label="Site"
            className="mt-14 grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:mt-20"
          >
            {menuNavigation.map((group, groupIndex) => (
              <div
                key={group.title}
                data-reveal-step
                style={{ "--reveal-step": groupIndex } as CSSProperties}
              >
                <Eyebrow tone="inverse" className="border-t border-line-inverse pt-5">
                  {group.title}
                </Eyebrow>

                <ul className="mt-7 space-y-6">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group block"
                      >
                        <span className="display display-sm block text-paper transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:opacity-70">
                          {item.label}
                        </span>
                        {item.description ? (
                          <span className="mt-1.5 block text-[0.875rem] font-light text-paper/50">
                            {item.description}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-16 flex flex-col gap-8 border-t border-line-inverse pt-10 md:flex-row md:items-center md:justify-between lg:mt-24">
            <div className="space-y-2">
              <Eyebrow tone="inverse">{site.contact.reservations.label}</Eyebrow>
              <p className="text-paper/75">
                <a
                  href={`tel:${site.contact.reservations.phoneHref}`}
                  className="underline decoration-paper/30 underline-offset-[0.4em] transition-colors hover:decoration-paper"
                >
                  {site.contact.reservations.phone}
                </a>
                <span className="mx-3 text-paper/25">/</span>
                <a
                  href={`mailto:${site.contact.reservations.email}`}
                  className="underline decoration-paper/30 underline-offset-[0.4em] transition-colors hover:decoration-paper"
                >
                  {site.contact.reservations.email}
                </a>
              </p>
            </div>

            <Button href={primaryAction.href} tone="inverse" onClick={onClose}>
              {primaryAction.label}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
