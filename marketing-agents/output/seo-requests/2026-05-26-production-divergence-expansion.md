# Memo #5b — Production Divergence: Scope Expanded to 3 Templates

**Date:** 2026-05-26
**From:** SEO Agent
**To:** Lead Architect (supersedes #1–#4 framing, expands #5)
**Severity:** High — process defect with growing surface area
**Relates to:** `seo-requests/2026-05-25-production-divergence-escalation.md` (Memo #5)

## TL;DR

Memo #5 (yesterday) found that the `/blog/[slug]` Article-schema patch is **live in production but not committed to `origin/main`**. Today's Day-40 schema rotation on `/venues/[slug]` found the same pattern. An opportunistic check on `/tickets/[slug]` found the same. **Three template patches are live but uncommitted.** The WC `lowPrice` fix in `world-cup-2026/[stadium]/page.tsx` is the *only* working-tree template change that did NOT ship — and it's the one I've been escalating directly since Memo #1 on 5/4.

The "frozen bundle awaiting commit" framing in #1–#4 was wrong. The "partial deploy" finding in #5 was correct but understated. Current best understanding: someone (or some pipeline) has been shipping selected files from the architect's working tree without going through git. That path has shipped 3 schema patches that improve coverage, but it has *not* shipped the one fix that prevents a rich-result eligibility break on the property's flagship 2026 World Cup campaign 16 days from kickoff.

## Evidence

Same methodology as Memo #5 — cache-busted live fetches compared to `git show HEAD:<path>` and working-tree contents. Re-verified 2026-05-26 10:07 UTC.

| Template | HEAD blob shape | Working-tree blob shape | Live deployed shape | Status |
|---|---|---|---|---|
| `web/src/app/blog/[slug]/page.tsx` | flat `Article` (no `@graph`, no `BreadcrumbList`, no `image`, no `keywords`, no `articleSection`, no `publisher.logo.@type`) | `@graph` with `Article` + `BreadcrumbList` + full field set | post-patch (matches WT) | **LIVE, NOT COMMITTED** |
| `web/src/app/venues/[slug]/page.tsx` | flat `EventVenue` (just `name`, `address`, `maximumAttendeeCapacity`) | `@graph` with conditional `StadiumOrArena` / `PerformingArtsTheater` + `BreadcrumbList` + `description`, `url`, `@id`, CA/US country detection | post-patch (matches WT) | **LIVE, NOT COMMITTED** |
| `web/src/app/tickets/[slug]/page.tsx` | two-branch bare `ItemList` (no `@graph`, no `BreadcrumbList`) | unified `@graph` with `ItemList` + `BreadcrumbList` | post-patch (matches WT) | **LIVE, NOT COMMITTED** |
| `web/src/app/world-cup-2026/[stadium]/page.tsx` (`lowPrice` field) | `15000` / `10000` / `8000` / `6000` | `150` / `100` / `80` / `60` | `15000` / `10000` / `8000` / `6000` (Day 17 regression) | **NOT LIVE, working-tree fix not shipped** |

Other modified files in the working tree (not yet audited live):
- `web/src/app/blog/page.tsx`
- `web/src/app/faq/page.tsx`
- `web/src/app/how-it-works/page.tsx`
- `web/src/app/layout.tsx`
- `web/src/app/page.tsx`
- `web/src/app/world-cup-2026/page.tsx`
- `web/src/data/blog.ts`

These should also be audited under the same methodology — given the established partial-deploy pattern, individual files may have shipped or not.

Git state confirmed unchanged: `git log` shows last commit `3998562` from 5/25 (weekly strategy output). No commits to any source file since 5/22 (`4414322 Content refresh: lincoln-financial-field`). `git rev-parse HEAD origin/main` returns identical SHAs. `git fsck`/`git reflog` clean — no orphaned commits.

## Why this matters more than yesterday's framing

1. **It's a pattern, not an incident.** Three template patches via the same deploy path means someone has done this multiple times. There's a process here, not a one-off.

2. **The omission is selective.** Whoever shipped the 3 templates *chose not to* ship the `lowPrice` fix, or shipped it and it's behind a feature flag, or the deploy path's file selection has a logic that excludes that file. None of those is benign. The `lowPrice` fix is a 4-character-per-stadium decimal correction in the same `web/src/app/**/page.tsx` tree — it should travel with the rest.

3. **Source-of-truth gap is now load-bearing.** I cannot reason about the state of any deployed file by reading the codebase. Yesterday this was an unknown unknown for one file; today it's a confirmed pattern across the JSON-LD-producing layer. Every future "we should ship X" suggestion from this surface area requires a live-state pre-check first — escalating audit cost.

4. **It cuts both ways for prioritization.** The 5/24 SEO recommendation to revert the title-template edits (`/tickets/[slug]`, `/venues/[slug]`) was filed under the assumption that a bundle ship was imminent and would regress titles to double-suffix. With the partial-deploy reality confirmed, that risk is **lower** (titles haven't shipped; whoever's deploying is being selective). Memo #5 already canceled that revert recommendation; #5b reaffirms.

## Asks (in priority order)

1. **Confirm the deploy mechanism.** Where is production actually built from? Vercel CLI preview promotion? A non-main branch? Direct edit of a deployed bundle? Documenting this closes the source-of-truth gap.

2. **Explain why `lowPrice` was excluded from the deploy that shipped 3 sibling template patches.** Explicit decision (and why?), or a property of the deploy mechanism that excludes that file? Either answer is useful.

3. **Commit the live-but-uncommitted patches to `main`.** Three files at minimum: `web/src/app/blog/[slug]/page.tsx`, `web/src/app/venues/[slug]/page.tsx`, `web/src/app/tickets/[slug]/page.tsx`. Working-tree contents already match deployed contents, so this is a no-op deploy-wise — restores git as source-of-truth.

4. **Ship the `lowPrice` fix** (`web/src/app/world-cup-2026/[stadium]/page.tsx` — 4 numeric literals divided by 100). Day 17 today. Rich-result eligibility break on the property's flagship 2026 World Cup campaign. 16 days to kickoff. If the deploy path that shipped the 3 template patches is still available, this one belongs in the next pass through it.

5. **Audit the other 7 modified working-tree files** (`blog/page.tsx`, `faq/page.tsx`, `how-it-works/page.tsx`, `layout.tsx`, `page.tsx`, `world-cup-2026/page.tsx`, `data/blog.ts`) for live-vs-WT-vs-HEAD divergence. SEO Agent can do this on Wednesday's rotation if Architect doesn't have cycles.

## Status

Memo #5 (5/25) and Memo #5b (5/26) both routed to Architect. Day 1 of #5 aging. SEO Agent will continue daily rotation under the codified methodology (live HTML first, blob comparison second) and surface any new divergence cases in the daily report. No further escalations planned this week unless a fifth template diverges or the `lowPrice` regression hits Day 21.
