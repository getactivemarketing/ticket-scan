# TicketNetwork affiliate — follow-ups

## Before this earns anything

1. **Confirm a TicketNetwork link ID permits deep linking.** CJ deep links only work through
   a creative that allows them. If none does, every link falls back to the category level and
   the per-row placement loses most of its value.
2. **Set `CJ_PID` and `CJ_TN_AID`** on the **`web`** Vercel project (`prj_GKAPI3uzA7IASFRHTl9RMYpaDWrB`),
   which owns `www.ticketscan.io` and `ticketscan.io` — verified 2026-09-02. Not `tickethawk`,
   which is the git-linked project and owns only `.vercel.app` URLs.
3. **Deploy `web` explicitly** or wait for the daily agent run. A git push does not update the
   live site. See the `ticketscan-deploy-split` note.
4. **Verify a real click registers in CJ** before trusting any of the reporting.

## Known and accepted

- **Match rate is now measured, not unknown.** Sampled at merge:
  - venue guide `/venues/msg`: 10/10 rows linked (3 via performer match, 7 via the venue-name
    fallback).
  - city page `/tickets/chicago`: 2/4 rows linked (50%), performer matches only.
  - category pages `/tickets/nba`: 12/12, `/tickets/comedy`: 11/11 — the category fallback
    carries these.
  - combo page `/tickets/atlanta/comedy`: 23/23 (100%).

  The pattern: wherever a venue or category fallback applies, coverage is effectively total.
  City pages depend on performer matching alone and land near half. The spec's worry about match
  rate turned out to matter only for city pages — venue guides, category pages and combo pages
  are all fine as built. If city-page coverage matters more than it does today, the CJ data feed
  moves up the list.
- **The index goes stale between refreshes.** A performer page TicketNetwork retires becomes a
  404 that still renders until the next daily run. `npm run smoke:tn` is how you find out.
- **`marketing-agents/scripts/run-daily.sh` carries a stale comment** claiming the `web` project
  "no longer owns the live domain". It does own it, confirmed against the Vercel API on
  2026-09-02. The comment should be corrected; it was left alone here to keep this change
  focused.
- **`CATEGORY_MAP` in `web/src/lib/tn-slug.mjs` is hardcoded** and is not covered by the daily
  index refresh, which rebuilds only performers and venues. It is the one documented exception to
  "never construct a slug we have not seen in the index" — the category pages depend on it
  entirely (`/tickets/nba` 12/12, `/tickets/comedy` 11/11), and only the manually-run
  `npm run smoke:tn` would catch drift if TicketNetwork ever renames or retires one of those
  category slugs.
- **`AffiliateDisclosure` still carries a `navy` surface variant that no caller uses.** It is the
  branch that measured roughly 2.4:1 on the combo page before that page was switched to the
  legacy surface colors (see the correction below). Whoever does the Design 2.0 content pass
  should either use it correctly on an actual navy surface or delete it.

## Correction to the plan

- **The plan wrongly asserted the combo pages are Design 2.0.** They are not:
  `web/src/app/tickets/[slug]/[category]/page.tsx` line 234 is `min-h-screen bg-gray-50` with
  `bg-white` cards — the legacy 1.0 surface. Only the `OnsaleRow` cards on that page are navy
  Design 2.0. This mattered here because the affiliate disclosure was originally styled for a
  navy surface and failed WCAG AA at roughly 2.4:1 contrast until it was switched to the legacy
  surface's colors, which measure 4.63:1. Anyone doing a Design 2.0 content pass over combo pages
  should know going in that this page is a 1.0 page rendering 2.0 rows, not a fully 2.0 page.
- **The plan's rollout step overstates ISR's role.** It said links "appear as ISR revalidates.
  Combo pages sit on a 6-hour window, so allow up to a day for full coverage." Only
  `web/src/app/tickets/[slug]/[category]/page.tsx` (the combo route) exports `revalidate`.
  `/tickets`, `/venues`, `/venues/[slug]` and `/tickets/[slug]` are fully static pages — they pick
  up the new links from the redeploy itself, not from any ISR revalidation window.

## Next

The CJ **data feed**: real TicketNetwork inventory and prices, event-level deep links instead of
performer-level, and the path to TicketNetwork as a fourth priced source in compare. Explicitly
out of scope for this pass.

## Reviewed, deliberately not fixed

Each of these was raised by a code review during implementation, judged, and left alone on
purpose. Recorded so nobody "fixes" one by accident, and so the reasoning is not lost.

- **The combo-page resale link drops to 4.03:1 on row hover.** `TicketNetworkLink`'s navy
  surface is Beacon Blue, which measures 4.54:1 on Raised Navy and 4.03:1 on Raised Navy Hover
  (the row lifts whenever the link itself is hovered). Left as-is because the site's existing
  hero body copy sits at 4.02:1, so fixing only this one link would impose a standard the rest
  of the site does not meet. Worth solving site-wide in the Design 2.0 content pass, not here.
- **`build-tn-index.mjs` writes non-atomically** (no temp file plus rename). Inherited unchanged
  from `build-combo-index.mjs`, which has the same pattern. The narrow risk is a process death
  mid-write truncating a good index; since the JSON is a static import, a truncated file breaks
  every build. A cheaper guard than temp+rename would be a `JSON.parse` sanity check in
  `run-daily.sh` before the commit block.
- **Both index pages link to `category="concerts"`.** Defensible on `/tickets`, arbitrary on
  `/venues` — TicketNetwork has no all-venues landing page. The visible label is generic
  ("Browse resale tickets"), so the choice is invisible to visitors.
- **`/terms` §13 renders even while the feature is dark.** It states the site uses affiliate
  links, which is not yet true with no credentials set. Harmless, and arguably better to state
  early than late.
- **`smoke-tn-links.mjs` samples with replacement**, so a 50-sample run may test fewer than 50
  distinct slugs. Immaterial for a health check.
