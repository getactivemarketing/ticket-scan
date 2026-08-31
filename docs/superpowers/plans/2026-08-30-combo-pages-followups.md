# City × category combo pages — follow-ups

Written 2026-08-31 at merge. Everything here was found during the build, judged non-blocking,
and deliberately not fixed. The plan and spec live alongside this file.

## Fix when convenient — real, small, on every page

1. **Ungrammatical metadata on all 160 pages.** `web/src/app/tickets/[slug]/[category]/page.tsx`
   still builds `Upcoming ${category.name} events` in two places: the `<meta description>`
   (~line 146) and the JSON-LD `ItemList.description` (~line 214). `category.name` is a display
   label, so this renders "Upcoming Comedy Shows events in Atlanta" in the Google snippet and in
   structured data. The on-page prose was fixed by switching to the `noun` field added to
   `src/data/categories.ts`; these two strings were missed. Same fix: use `category.noun` and
   drop the appended "events".
2. **No singular guard.** "Showing the next {n} {noun}" reads "Showing the next 1 comedy shows"
   if a combo ever displays exactly one event. Plausible — the index gate is 5 *raw* events and
   `cleanEvents` can reduce that — though not observed on any combo sampled at merge.
3. **`web/CLAUDE.md`** is a stale duplicate of the root `CLAUDE.md` and still carries the
   pre-combo page descriptions. Never in scope; the root file was corrected.

## Known and accepted, documented so nobody "fixes" them by accident

- **The index counts raw API results; pages count cleaned ones.** A combo can clear the ≥5 gate
  and display fewer, because `cleanEvents` strips parking, hospitality and lounge listings and
  collapses duplicate names. This is why the pages say "Showing the next N" rather than
  asserting a total. Do not chase the two numbers into alignment: `denver/festivals` was checked
  and cleaning would not reconcile it either, and `capPerVenue` would gut `chicago/nfl` from 9
  Bears games to 2.
- **Three categories have no combo pages.** `ufc`, `wwe` and `tennis` had under 5 events in every
  one of the 24 cities. The gate working, not a bug. Their `noun` fields are populated so they
  work automatically if inventory grows.
- **Venue guides attach on exact name match only**, deliberately stricter than `findVenue`'s
  substring matching, which would have let "The Theater at Madison Square Garden" render MSG's
  20,789 capacity. Verified at merge that Miami, New York and LA combos still link their guides.
- **`getEvents` rethrows on failure.** Swallowing it made ISR cache a wrong "no events" page for
  six hours. A sustained outage now fails the build instead — loudly, which is the point.

## What the build is sensitive to

A cold build prerenders 160 pages, each firing an API call, against a feed with a documented
5 req/s spike arrest. That combination already caused one rate-limited failure during
development. It is now mitigated by a module-level pacer (220ms spacing), 4 retries with
exponential backoff and jitter, and `experimental: { cpus: 1, workerThreads: false }` in
`next.config.ts` so parallel prerender workers cannot defeat the pacer. **If you ever raise the
worker count or remove the pacer, expect deploys to start failing** — the 6-hour ISR window is
shorter than the daily deploy cadence, so every deploy refetches all 160.

## Next expansions

Team and artist pages — keyed on who is playing rather than where. The natural next surface, and
the one this plan deliberately did not build.
