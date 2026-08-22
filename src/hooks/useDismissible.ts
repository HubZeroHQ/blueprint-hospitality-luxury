"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Scroll locking is process-wide, not per-component, so the lock is
 * reference-counted here rather than owned by whichever surface opened last.
 *
 * The naive version — set `overflow: hidden` on open, set it to `""` on close —
 * breaks as soon as two surfaces overlap: closing a cart drawer that was opened
 * over an already-open navigation drawer unlocks the whole page. Restoring the
 * value captured by the *first* lock, once the *last* one releases, is the only
 * behaviour that composes.
 */
let lockDepth = 0;
let restoreOverflowTo: string | null = null;

function acquireScrollLock() {
  if (lockDepth === 0) {
    restoreOverflowTo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  lockDepth += 1;
}

function releaseScrollLock() {
  lockDepth = Math.max(0, lockDepth - 1);

  if (lockDepth === 0 && restoreOverflowTo !== null) {
    document.body.style.overflow = restoreOverflowTo;
    restoreOverflowTo = null;
  }
}

export interface UseDismissibleOptions {
  /** Whether the surface is currently open. */
  open: boolean;

  /** Called when the surface should close. */
  onDismiss: () => void;

  /**
   * Element that receives focus on close — normally the trigger. When omitted,
   * focus returns to whatever was focused at the moment the surface opened.
   */
  restoreFocusTo?: RefObject<HTMLElement | null>;

  /** Disable for a surface that should not lock page scroll, such as a dropdown. */
  lockScroll?: boolean;

  /** Disable where the platform already closes on Escape, such as a modal `<dialog>`. */
  closeOnEscape?: boolean;
}

/**
 * The behaviour every dismissible overlay needs, and nothing else.
 *
 * Owns three things: Escape-to-dismiss, a composable page-scroll lock, and
 * focus restoration on close. It renders nothing, sets no ARIA attributes,
 * applies no styling, and knows nothing about transitions — a drawer, a modal,
 * a menu, and a native `<dialog>` are all free to differ above it, which is
 * where a Design Language does its work.
 *
 * Prefer the platform where it already provides this: a `<dialog>` opened with
 * `showModal()` handles Escape, focus containment, and focus restoration
 * itself, so pass `closeOnEscape: false` and use this only for the scroll lock.
 * See `.hubzero/principles.md` — Native Before Custom.
 *
 * Focus *containment* is deliberately not included. A correct trap depends on
 * the markup it is trapping, and the platform already provides one for modal
 * `<dialog>` and `inert`; a generic implementation here would be a worse
 * version of both.
 */
export function useDismissible({
  open,
  onDismiss,
  restoreFocusTo,
  lockScroll = true,
  closeOnEscape = true,
}: UseDismissibleOptions): void {
  // Kept in a ref so a caller passing an inline arrow does not re-run the
  // effect on every render, which would release and re-acquire the lock.
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;

    if (lockScroll) {
      acquireScrollLock();
    }

    let onKeyDown: ((event: KeyboardEvent) => void) | undefined;

    if (closeOnEscape) {
      onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onDismissRef.current();
        }
      };

      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      if (onKeyDown) {
        document.removeEventListener("keydown", onKeyDown);
      }

      if (lockScroll) {
        releaseScrollLock();
      }

      // Read deliberately at close time rather than snapshotting at open time:
      // the trigger is the caller's, and if it re-rendered into a different
      // node while the surface was open, the current node is the correct
      // target and a snapshot would be stale.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const target = restoreFocusTo?.current ?? previouslyFocused;
      const active = document.activeElement;

      // Closing usually unmounts whatever held focus, which drops it to the
      // body — that is the case worth repairing. If something else has since
      // claimed focus deliberately, stealing it back is the worse outcome.
      const focusWasLost =
        !active || active === document.body || active === document.documentElement;

      if (focusWasLost && target?.isConnected) {
        target.focus();
      }
    };
  }, [open, lockScroll, closeOnEscape, restoreFocusTo]);
}
