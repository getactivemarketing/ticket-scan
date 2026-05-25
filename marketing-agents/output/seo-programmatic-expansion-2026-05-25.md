# Programmatic SEO Expansion — Status 2026-05-25

**Prior:** [seo-programmatic-expansion-2026-05-18.md](./seo-programmatic-expansion-2026-05-18.md) — single-sentence terminal-form note
**WC opening match:** 17 days
**Active reframe:** Memo #5 ([seo-requests/2026-05-25-production-divergence-escalation.md](./seo-requests/2026-05-25-production-divergence-escalation.md)) — partial-deploy reality changes the ship model from "bundle blocked" to "file-level shippable if path is identified"

---

## Resuming substance

The 2026-05-18 weekly collapsed Phase 1a/1b/1c into one sentence per the escalation #4 commitment. That commitment assumed the bundle was a single deploy unit waiting on the architect. **Today's production-divergence finding falsifies that assumption.** Production accepts file-level ships via a path that bypasses git main. Phase 1a in particular is a 10-page programmatic build that ships file-by-file under the new reality, not all-at-once.

Resuming the cadence on a refreshed basis.

---

## Phase 1a — World Cup country pages (10 pages)

**Status:** No longer bundle-blocked. Reframed as a per-file build.
**Slug pattern:** `/tickets/[country]-world-cup-2026` (reuses existing `/tickets/[slug]` route — see "Route decision" below).
**Slugs (10):** `usmnt`, `mexico`, `canada`, `brazil`, `argentina`, `england`, `france`, `germany`, `spain`, `portugal`.

### Route decision (re-evaluated under Memo #5)

The 2026-04-20 plan put these on the `/tickets/[slug]` route. With today's slug-collision finding (3 city/category collisions on the same route — see weekly audit §1 P1), adding 10 more entries to that namespace without first resolving the collisions is now risky. Two options:

1. **Wait until slug-collision is resolved**, then ship Phase 1a on `/tickets/[slug]` as planned. Slug-collision fix is 30 min; doesn't materially delay Phase 1a.
2. **Carve a new namespace** — `/world-cup/[country]/` or `/tickets/world-cup-2026/[country]/`. Cleaner long-term but breaks the existing `/tickets/[slug]` reuse story.

**Recommendation:** Option 1. Resolve slug-collision first (it's the smallest standalone P1 in the audit), then ship Phase 1a on the existing route. Net 30-min delay, materially cleaner ship.

### Template spec (unchanged from 2026-04-20 §2)

Per-page structure ~800 words unique:
- H1: "[Country] World Cup 2026 Tickets"
- 150-word intro: WC history, recent form, fan-base context
- **Group stage schedule table** sourced from `worldcup.ts`
- **Price expectations by phase** (group, R16, QF, SF, Final)
- **How to buy** (FIFA official + resale + lottery context)
- **Stadiums where [country] plays** — internal-link grid to `/world-cup-2026/[stadium]`
- **FAQ with FAQPage schema** — 5–7 Q&A
- **CTA:** Watchlist signup with country-specific alerts

### Effort under file-level partial-deploy

- Data scaffold: 30 min — extend `categories.ts` with a `team` shape or add `worldCupTeams.ts` data file
- Per-page rendering hooks in `tickets/[slug]/page.tsx` `getPageData()` switch: 45 min — single file edit
- 10 country FAQ + intro content (Content Agent): already in their Q2 backlog per 2026-05-14 acknowledgment
- Sitemap addition: auto-picks-up via `getPageData()` if pattern matches; verify on first ship

**Total Lead-Architect time:** ~75 min for the scaffold + first-page ship, then near-zero marginal cost per additional country page.

### Ship sequencing

Now feasible to ship country-by-country as Content delivers per-country copy:

1. **First ship (USA — `usmnt`):** Scaffold + first page. Verify live rendering + sitemap pickup.
2. **Hosts 2 + 3 (mexico, canada):** No scaffold work, just data entry + Content copy.
3. **Top 4 favorites (brazil, argentina, france, england):** Same pattern.
4. **Remaining 3 (germany, spain, portugal):** Same pattern.

Under file-level mobility, this is a 5–7-day delivery if Content has copy ready. Pre-Memo #5, the same work was a 5-week wait on bundle approval.

### Risk

WC at 17 days. By the time Phase 1a's first page indexes and starts ranking, the tournament will be inside two weeks. Indexation lag eats most of the SEO value window. The pages still have value (a) for late-tournament searches (R16 onward), (b) as the structural anchor for the 2030 / future-WC playbook, and (c) for the lead magnet's country-specific email-capture sequence to land. The strategic case for shipping despite the late window stands.

---

## Phase 1b — Best Time to Buy (8 categories)

**Status:** Still blocked on backend price-history aggregation endpoint. Independent of Memo #5.
**Spec:** Unchanged from 2026-04-20 §2 (`/best-time-to-buy/[category]`).
**Slugs (8):** `concert-tickets`, `nfl-tickets`, `nba-tickets`, `mlb-tickets`, `nhl-tickets`, `broadway-tickets`, `world-cup-2026-tickets`, `college-football-tickets`.

### Backend dependency

`GET /api/public/price-history/aggregate?category=<cat>&group_by=days_until_event` — spec frozen 2026-04-20 §7. Day 35 of no progress. Filing under "ONGOING" in the action matrix.

**Reframe under Memo #5:** The backend is its own deployment path (Railway, not Vercel). Memo #5's findings don't affect the Railway side. Phase 1b runway can't recover before WC even if every Vercel-side blocker resolves tomorrow.

**Decision held over:** Should Phase 1b ship with placeholder data instead of waiting for the aggregation endpoint? Same question as 2026-05-11. Recommendation continues to be **no** — the entire SEO value proposition of Phase 1b is the original-data citation play for AI assistants, and shipping with placeholder data corrodes that on first publication.

---

## Phase 1c — Long-form briefs (8 articles)

**Status:** Content Agent has these in their Q2 backlog, acknowledged 2026-05-14.
**Independent of Memo #5.**
**Action:** None this week from SEO. Content will surface drafts on their cadence. SEO sign-off / cross-link review on each as they land.

---

## New this week — `/world-cup-2026/cheapest-tickets` landing page (from Content handoff)

Content Agent's 5/25 handoff (§"Lead magnet asset") proposes a new landing page anchored on their lead-magnet PDF ("The FIFA Category 4 Floor Comparison Chart"). This is **not Phase 1a/1b/1c** — it's a tactical late-window WC conversion surface, not a programmatic-category build.

### SEO sign-off

**Approved.** Adds:
- 1 new URL with structured WC conversion content
- Cross-links to all 11 US stadium pages and `/compare`
- An email-capture form feeding the existing `/api/newsletter/subscribe` endpoint with new source tag
- A second WC entry-point alongside `/world-cup-2026` main

### Spec items routed back to Content

1. **Page render decision** — server component vs client. Recommend server (the lead-magnet form can be a small client island). Hero + chart embed + per-venue micro-section + footer-CTA are all server-renderable.
2. **Metadata file** — needs its own `web/src/app/world-cup-2026/cheapest-tickets/layout.tsx` (the parent `world-cup-2026/layout.tsx` won't supply slug-specific title/description).
3. **JSON-LD** — recommend `WebPage` + `FAQPage` (3–5 Q on cheapest WC tickets) + `Product` with `offers.price: 0` for the free PDF download. The chart-as-Product pattern matches the post-patch blog `@graph` shape that's now live in production.

### Spec items for SEO action

1. **Sitemap.ts addition.** Append to `worldCupMainPage` block:
   ```ts
   {
     url: `${BASE_URL}/world-cup-2026/cheapest-tickets`,
     lastModified,
     changeFrequency: 'weekly' as const,
     priority: 0.9,
   }
   ```
   Single-line addition. Ships through the partial-deploy path. **File-level ship request: queued behind Memo #5 reply.**
2. **Cross-link audit when the page lands.** Every existing US-stadium `/world-cup-2026/[stadium]/page.tsx` should add a "Cheapest US WC tickets" link to the new landing page. Per-template addition; queues with the BreadcrumbList template work.
3. **Canonical-host attention.** The new page's metadata block will inherit from `metadataBase` — meaning it'll emit apex (`https://ticketscan.io/world-cup-2026/cheapest-tickets`) until the canonical-host fix lands. If Content ships this landing page before canonical resolves, the new URL inherits the canonical-host mismatch. Recommend Content sequence the landing-page ship **after** canonical fix lands.

---

## Three queued opportunities (status unchanged from 2026-05-04)

1. **`/compare/[event-slug]` per-event comparison pages** — still ISR-plumbing-blocked.
2. **City + venue combo pages (`/tickets/[city]/[venue]`)** — cannibalization risk vs. venue pages; re-evaluate after hub pages ship.
3. **Festival pages** — low priority, deferred.

---

## Summary

| Phase | Pre-Memo-#5 status | Post-Memo-#5 status |
|-------|--------------------|--------------------|
| 1a — WC country pages | Bundle-blocked, code not started | File-level shippable; ~75 min for scaffold + first page once partial-deploy path identified |
| 1b — Best Time to Buy | Backend-blocked | Unchanged — Railway dependency, not Memo #5 |
| 1c — Long-form briefs | Content's queue | Unchanged — independent |
| New: `/world-cup-2026/cheapest-tickets` | — | Approved; sitemap addition queued behind partial-deploy path |

Phase 1a is the file-level highest-leverage build available this week if Memo #5 resolves. Phase 1b stays Railway-blocked. Phase 1c stays Content-paced.

— SEO Agent
