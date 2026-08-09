"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { Wordmark } from "@/components/layout/Wordmark";
import { navigation, primaryAction } from "@/config/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/utils/cn";
import { isActivePath } from "@/utils/navigation";

/**
 * The floating navigation — this blueprint's expression of the HubZero
 * signature described in `.hubzero/design/principles.md`.
 *
 * Two named appearance states, each derived independently:
 *
 *   over      Sitting on the ink hero every page opens with. Transparent,
 *             paper type, no rule.
 *   settled   Past the first fold. A bone surface, ink type, one hairline
 *             beneath, and the collection's only shadow.
 *
 * The state depends on scroll position and nothing else — not on route, not on
 * whether a hero is in view — so it cannot end up in an untested combination.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const settled = useScrolled(24);

  /*
   * The menu remembers which route it was opened on, and is only open while
   * the visitor is still there. That makes "a navigation closes the menu"
   * derived state rather than an effect that fires after the fact — including
   * when the route changes through the browser's own back button.
   */
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const menuOpen = menu.open && menu.path === pathname;

  const openMenu = useCallback(
    () => setMenu({ open: true, path: pathname }),
    [pathname]
  );
  const closeMenu = useCallback(
    () => setMenu({ open: false, path: pathname }),
    [pathname]
  );

  const tone = settled ? "ink" : "inverse";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[var(--z-fixed)]",
          "transition-[background-color,box-shadow,border-color] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
          "border-b",
          settled
            ? "border-line bg-paper/95 shadow-raised backdrop-blur-[6px]"
            : "border-transparent bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-[var(--header-height)] items-center justify-between gap-6">
            <Link href="/" className="shrink-0 py-3">
              {/* The mark's alt text names the brand, which is the link's
                  accessible name; an aria-label here would only duplicate it. */}
              <Wordmark tone={tone} priority className="h-[1.375rem]" />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-9">
                {navigation.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "eyebrow relative block py-2 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                          settled
                            ? active
                              ? "text-ink"
                              : "text-mist hover:text-ink"
                            : active
                              ? "text-paper"
                              : "text-paper/65 hover:text-paper"
                        )}
                      >
                        {item.label}
                        {/*
                          Active state is a hairline, not a colour block — the
                          quietest signal that still reads at a glance.
                        */}
                        <span
                          aria-hidden
                          className={cn(
                            "absolute -bottom-0.5 left-0 h-px transition-[width] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
                            active ? "w-full" : "w-0",
                            settled ? "bg-ink" : "bg-paper"
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-5 sm:gap-7">
              <Button
                href={primaryAction.href}
                variant="outline"
                tone={tone}
                size="sm"
                className="hidden sm:inline-flex"
              >
                {primaryAction.label}
              </Button>

              <button
                type="button"
                onClick={openMenu}
                aria-expanded={menuOpen}
                aria-haspopup="dialog"
                className={cn(
                  "eyebrow -mr-2 flex min-h-11 items-center gap-3 px-2 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                  settled ? "text-mist hover:text-ink" : "text-paper/70 hover:text-paper"
                )}
              >
                Menu
                <span aria-hidden className="flex flex-col gap-1.5">
                  <span className="block h-px w-5 bg-current" />
                  <span className="block h-px w-5 bg-current" />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MenuOverlay open={menuOpen} onClose={closeMenu} />
    </>
  );
}
