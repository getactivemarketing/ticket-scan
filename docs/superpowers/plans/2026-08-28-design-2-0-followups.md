# Design 2.0 — follow-up work and carried findings

Written 2026-08-28, at the close of the foundation-and-app-surface rollout
(`docs/superpowers/plans/2026-08-28-design-2-0-rollout.md`). Everything here was
found during that work, judged safe to carry, and deliberately not fixed.

## The next pass: the content surface

1. **Content surface migration** — venue guides, city and category pages, blog. Navy for
   chrome, hero and interstitial bands; the reading column stays light, capped at a
   68-character measure. `DESIGN.md` §7.6: do not put 170 words of venue guide on navy.
2. **Homepage rebuild** around The Concourse.
3. **`OnsaleRow` into the homepage, venue guides, the watchlist and the weekly email** — the
   remaining four of the five places it must render identically. Only the onsale calendar
   renders the component itself today; the dashboard card and watchlist row match its
   construction without sharing its code, because their data shapes differ.
4. **A shared row primitive** behind `OnsaleRow`, `EventCard` and the watchlist row. All
   three render the same construction and were verified not to have drifted, but unifying
   them means agreeing one row shape first (`FeedEvent` vs the dashboard `Event` vs
   `WatchlistItem`).
5. **Nav IA reduction** to Events · Venues · Onsales · Blog, dropping Compare and World Cup.
   Deferred deliberately: it changes site-wide internal linking and carries SEO weight.
6. **Retire the 1.0 tokens** once nothing references them, and add a checker rule that fails
   if they reappear.

## Carried findings, triaged safe to merge

- **`bg-brand` is still the flat-fill primary across ~20 unmigrated 1.0 pages**, including
  `NewsletterSignup.tsx` — which `Footer` renders on *every* page, carrying `rounded-lg`,
  `bg-gray-800`, `text-green-400` directly against freshly-2.0 chrome. This is the most
  visible 1.0/2.0 seam on the site and the content pass should take it first.
- **Two pre-existing contrast failures** left untouched because they were outside the
  rollout's scope: `EventCard`'s event-type badge and `event/[id]`'s source pill, both
  `bg-brand/NN text-beacon` at 4.13:1 (AA needs 4.5).
- **`role="alert"` is on conditionally-mounted containers.** This is the standard toast
  pattern and announces reliably on most current browser/AT pairings, but a persistently
  mounted live region would be more robust.
- **`PriceChart` has no reduced-motion escape** — Recharts animates on mount by default —
  and the file is not in the checker's motion rule's list.
- **Navbar is `fixed` with `h-16` while `<main>` has no top offset**, so the first 64px of
  every page sits under the nav. Pre-existing, confirmed on unmigrated pages too.
- Minor: `Navbar.tsx` keeps a redundant `border-t` on the mobile menu; `EventCard` uses
  `bg-black/70` where `bg-deep-void/80` belongs; `BuyRecommendation` nests `bg-navy` inside
  `bg-navy-raised` (reversed tonal order, used deliberately as an inset well);
  `event/[id]`'s table has no `<caption>` or `scope` on its `<th>`.

## Verification that was never performed

Recorded so nobody assumes it was:

- A true 375px viewport. Verified structurally instead — the one wide table is wrapped in
  `overflow-x-auto` and no fixed `w-[NNNpx]` exists anywhere in `src`.
- OS-level reduced-motion behaviour, and focus rings under real keyboard modality. The ring
  CSS is confirmed present in the compiled output and the checker guards `motion-reduce`
  across every app-surface file.
- The auth round-trip: register, log out, log in, protected-route redirect.

## Two mechanisms worth remembering

Both caused Critical defects in this rollout and neither is obvious:

1. **Tailwind v4 uses real cascade layers.** An unlayered rule beats a layered one no matter
   the specificity, so v3-era "a class outranks an element selector" reasoning is wrong here.
   Project CSS that must lose to utilities belongs in `@layer base`.
2. **A `background-color` replaces a ground, it does not overlay it.** A translucent hover
   token on an opaque row lets the *page* show through, not the row — which inverted the
   intended tonal lift and made rows unreadable on a light page. Hover grounds are opaque
   (`--color-navy-raised-hover`).
