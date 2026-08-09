"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Display, Eyebrow } from "@/components/ui/Type";
import { lightSequence } from "@/content/home";
import { primaryAction } from "@/config/navigation";
import { site } from "@/config/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

const INTERVAL_MS = 7000;

/**
 * The Hour — this blueprint's signature experience.
 *
 * One idea, executed once: the collection introduced as a single day moving
 * through four of its places, from before sunrise at Verane to midnight on the
 * fjord. Nothing moves except light; frames cross-fade over
 * `--duration-slow` with no pan, zoom or parallax, because Luxury's motion
 * language asks for the movement of a mechanism rather than of software.
 *
 * Accessibility is part of the design rather than a concession to it:
 *
 *   - The sequence can be paused, as auto-updating content must be.
 *   - It does not auto-advance at all under `prefers-reduced-motion`; the
 *     frames remain browsable by hand.
 *   - Each frame is reachable directly, and the caption is a live region so a
 *     screen reader hears the place change rather than only seeing it.
 *
 * The index starts at 0 on the server and on the first client render, so the
 * markup either side of hydration is identical.
 */
export function LightSequence() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const advancing = !paused && !reducedMotion;

  useEffect(() => {
    if (!advancing) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % lightSequence.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [advancing]);

  const select = useCallback((next: number) => {
    setIndex(next);
    setPaused(true);
  }, []);

  const active = lightSequence[index];

  return (
    <section
      aria-label="The collection, through one day"
      className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink pb-10 pt-[calc(var(--header-height)+3rem)] md:pb-14"
    >
      {lightSequence.map((frame, frameIndex) => (
        <div
          key={frame.href}
          aria-hidden={frameIndex !== index}
          className={cn(
            "absolute inset-0 -z-10 transition-opacity ease-[var(--ease-standard)]",
            "duration-[var(--duration-slow)]",
            frameIndex === index ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={frame.image.src}
            alt={frame.image.alt}
            fill
            priority={frameIndex === 0}
            loading={frameIndex === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/10"
      />

      <Container>
        <div className="max-w-4xl">
          <Eyebrow tone="inverse" className="mb-8">
            {site.name} — six houses
          </Eyebrow>

          <Display as="h1" size="xl" className="text-paper">
            The art of the
            <br />
            unhurried stay.
          </Display>

          <p className="lede mt-8 max-w-[46ch] text-paper/75">
            Six privately held houses, kept small and staffed generously, for
            guests who are in no hurry.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/hotels" tone="inverse">
              See the houses
            </Button>
            <Button href={primaryAction.href} variant="quiet" tone="inverse">
              {primaryAction.label}
            </Button>
          </div>
        </div>

        {/* The sequence's own controls, set apart from the page's navigation. */}
        <div className="mt-16 border-t border-line-inverse pt-6 md:mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
            <p
              aria-live="polite"
              className="text-[0.9375rem] font-light text-paper/70"
            >
              <span className="text-paper">{active.hour}</span>
              <span className="mx-3 text-paper/30">/</span>
              <Link
                href={active.href}
                className="underline decoration-paper/30 underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:decoration-paper"
              >
                {active.place}
              </Link>
              <span className="mx-3 text-paper/30">—</span>
              <span>{active.caption}</span>
            </p>

            <div className="flex items-center gap-6">
              <ul className="flex items-center gap-3">
                {lightSequence.map((frame, frameIndex) => (
                  <li key={frame.href}>
                    <button
                      type="button"
                      onClick={() => select(frameIndex)}
                      aria-current={frameIndex === index ? "true" : undefined}
                      className="group flex h-11 w-11 items-center justify-center"
                    >
                      <span className="sr-only">
                        {`Show ${frame.place} at ${frame.hour}`}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "block h-px w-8 transition-colors duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                          frameIndex === index
                            ? "bg-paper"
                            : "bg-paper/25 group-hover:bg-paper/60"
                        )}
                      />
                    </button>
                  </li>
                ))}
              </ul>

              {/*
                Hidden from reduced-motion visitors: nothing is advancing for
                them, so a pause control would be a control over nothing.
              */}
              {reducedMotion ? null : (
                <button
                  type="button"
                  onClick={() => setPaused((current) => !current)}
                  aria-pressed={paused}
                  className="eyebrow min-h-11 px-1 text-paper/60 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-paper"
                >
                  {paused ? "Resume" : "Pause"}
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
