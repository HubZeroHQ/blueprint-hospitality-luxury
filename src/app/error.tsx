"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Type";
import { logger } from "@/lib/logger";
import { site } from "@/config/site";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * The error boundary is a route a real visitor reaches, so it gets a heading
 * hierarchy, a keyboard-reachable recovery action, and a way to reach a
 * person — not just a caught exception.
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    logger.error("Unhandled error boundary", error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="flex min-h-[80svh] items-end bg-ink pb-24 pt-[calc(var(--header-height)+6rem)] text-paper"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="inverse" className="mb-8">
            Something went wrong
          </Eyebrow>

          <h1 className="display display-lg text-paper">
            This page did not load
          </h1>

          <p className="lede mt-7 text-paper/70">
            Not something you did. Try again, and if it keeps happening our
            reservations team can tell you anything this page was going to.
          </p>

          {error.digest ? (
            <p className="mt-6 text-[0.875rem] font-light text-paper/40">
              Reference {error.digest}
            </p>
          ) : null}

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button onClick={reset} tone="inverse">
              Try again
            </Button>

            <Button href="/" variant="quiet" tone="inverse">
              Return to the collection
            </Button>

            <a
              href={`tel:${site.contact.reservations.phoneHref}`}
              className="text-[0.9375rem] font-light text-paper/60 underline decoration-paper/25 underline-offset-[0.4em] transition-colors duration-[var(--duration-fast)] hover:text-paper hover:decoration-paper"
            >
              {site.contact.reservations.phone}
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
