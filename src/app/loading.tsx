import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Type";
import { site } from "@/config/site";

/**
 * The loading state is a route a real visitor reaches, so it is designed
 * rather than left as a spinner: the same ink surface every page opens on, an
 * accessible live region, and one hairline that fills.
 *
 * The bar is decoration; `role="status"` and the text inside it are what a
 * screen reader announces. Under `prefers-reduced-motion` the global rule in
 * `globals.css` collapses the animation and the message remains.
 */
export default function Loading() {
  return (
    <main
      id="main-content"
      className="flex min-h-[70svh] items-end bg-ink pb-20 pt-[calc(var(--header-height)+6rem)] text-paper"
    >
      <Container>
        <div role="status" aria-live="polite">
          <Eyebrow tone="inverse" className="mb-8">
            {site.shortName}
          </Eyebrow>

          <p className="display display-lg text-paper/80">One moment.</p>

          <p className="mt-6 text-[0.9375rem] font-light text-paper/50">
            Loading this page.
          </p>
        </div>

        <div
          aria-hidden
          className="mt-14 h-px w-full max-w-md overflow-hidden bg-line-inverse"
        >
          <div className="h-px w-1/3 animate-[montreval-sweep_1.6s_var(--ease-standard)_infinite] bg-paper/70" />
        </div>
      </Container>
    </main>
  );
}
