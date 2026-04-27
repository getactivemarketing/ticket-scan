# SEO Weekly Deep-Dive — Week of 2026-04-27

**Agent:** SEO Specialist (Agent 2)
**Site:** https://www.ticketscan.io
**Date:** Monday, April 27, 2026 (weekly cadence; nominally Tuesdays at 08:00 UTC)
**Prior audit:** 2026-04-20 — [seo-audit-week-2026-04-20.md](./seo-audit-week-2026-04-20.md)
**Severity scale:** P0 (Critical) > P1 (High) > P2 (Medium) > P3 (Low)
**World Cup countdown:** 45 days to opening match (was 52 last week)

---

## Executive Summary

**Two consecutive weekly audits and 11 daily reports have flagged the same two P0s. Both remain unshipped.**

1. **P0.1** — `sitemap.ts` / `robots.ts` / `layout.tsx` `metadataBase` still emit `https://ticketscan.io` (non-www) while Vercel serves `https://www.ticketscan.io`. **Three one-line constants.** No code change since 2026-04-13.
2. **P0.2** — The 11-day SEO bundle (12 modified files + 6 untracked layouts including the `noindex` fixes for `/admin`, `/watchlist`, `/favorites`) is still uncommitted. HEAD = `97bf7138` (today's marketing-output commit, no SEO content). One `git commit && git push && vercel deploy` clears it.

**The new fact this week** — disclosed in yesterday's daily after a direct production HTML fetch — is that the auth-walled-route `noindex` mitigation is *currently live in production* via an out-of-band `vercel deploy` from CLI that uploaded the working tree. **This is not a fix. It is a fragility.** The next clean-git rebuild (any push to `main`, any project re-link, any ISR revalidation that re-renders these route segments) regresses them to `index, follow`. Until the bundle is committed, the `noindex` lives at the edge and not in source.

**What changed this week vs. last week:**
- World Cup countdown ticked from 52 → 45 days. Tier 1b ship deadline gets sharper.
- Nothing in last week's Tier 1 Phase 1a shipped (`/venues` hub, `/tickets` hub, `/llms.txt` — all still missing on disk; verified `test -f` on all three).
- One new MEDIUM finding from competitor delta-check (Vivid Seats, in 2026-04-27 daily): missing `eventStatus` + `eventAttendanceMode` on `/tickets/[slug]` — required for Google Event rich-result eligibility under the 2024 spec.
- One MEDIUM finding from this audit's deeper read of working-tree state: the bundle's untracked `dashboard/layout.tsx` exists (closes the P1 from last week's §1) but its canonical and JSON-LD content has not been verified end-to-end yet.

**This audit is intentionally short.** Re-stating the same P0s in the same depth a third time adds no signal. Every week the canonical-domain fix doesn't ship, the audit ceiling is capped — every other finding is downstream of indexation working.

---

## 1. Technical SEO — Status Delta

### Inventory (verified 2026-04-27)

| Page type | Count | Δ vs 2026-04-20 | Notes |
|-----------|-------|------|------|
| Static (sitemap-listed) | 10 | — | `/login` + `/register` still in sitemap (P2 carry) |
| Blog posts | 21 | — | 6+ planned publishes 4/27–5/02 per Content Agent handoff (filed 2026-04-27) |
| Venues `/venues/[slug]` | 24 | +1 | Includes Ball Arena refresh shipped 2026-04-22 |
| City `/tickets/[city]` | 24 | — | |
| Category `/tickets/[category]` | 13 | — | |
| World Cup main + stadium | 17 | — | Stadium copy refreshes scheduled (MetLife done; SoFi 5/01, AT&T 5/02) |
| **Total** | **109** | +1 | |

### Findings (this week's delta only — see 2026-04-20 audit for full P0/P1 detail)

#### P0 — REAFFIRMED, NO CHANGE: www/non-www canonical mismatch

`grep -n "ticketscan.io" web/src/app/{sitemap,robots,layout}.ts` shows 11 `https://ticketscan.io` references across the three files. All are still non-www. Hard-coded full-URL references in `venues/[slug]/page.tsx`, `tickets/[slug]/page.tsx`, and the JSON-LD blocks across the working-tree bundle are also still non-www.

**Fix unchanged from 2026-04-13 and 2026-04-20.** Three constant changes + a sweep. 30-min ticket.

**Verification commands** (unchanged from last week's §9):
```bash
curl -sI https://ticketscan.io/ | grep -i location           # expect 301 → www
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c 'https://www.ticketscan.io'   # expect 109 (+1 from last week)
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c '>https://ticketscan.io<'     # expect 0
```

#### P0 — REAFFIRMED, NO CHANGE: 11-day uncommitted bundle

```
$ git status --short web/src/
 M web/src/app/blog/[slug]/page.tsx
 M web/src/app/blog/page.tsx
 M web/src/app/faq/page.tsx
 M web/src/app/how-it-works/page.tsx
 M web/src/app/layout.tsx
 M web/src/app/page.tsx
 M web/src/app/tickets/[slug]/page.tsx
 M web/src/app/venues/[slug]/page.tsx
 M web/src/app/world-cup-2026/[stadium]/page.tsx
 M web/src/app/world-cup-2026/page.tsx
 M web/src/data/blog.ts
 M web/src/data/venues.ts
?? web/src/app/admin/layout.tsx
?? web/src/app/compare/layout.tsx
?? web/src/app/dashboard/layout.tsx
?? web/src/app/favorites/layout.tsx
?? web/src/app/watchlist/layout.tsx
?? web/src/app/world-cup-2026/WorldCupSchedule.tsx
```

12 modified + 6 untracked = 18 files of pending SEO/architecture work, identical to yesterday and to 2026-04-20. Daily reports have escalated this 11 days running.

**Reframed urgency from yesterday's correction:** the auth-walled-route `noindex` (one of the bundle's most user-facing wins) **is already on production** via a side-channel CLI deploy that baked the untracked layouts into the live edge cache (`x-vercel-cache: HIT`, `age: 98`, `x-matched-path: /admin`, `<meta name="robots" content="noindex, nofollow, nocache"/>` on all three auth-walled paths). **But the source of truth disagrees with the edge.** Any rebuild from `main` regresses the routes to `index, follow`. The bundle commit is now load-bearing for the *durability* of an existing fix, not just the delivery of a new one. That's a sharper escalation, not a softer one.

#### P1 — DEMOTED FROM P1 (NEW THIS WEEK): `/dashboard` naked metadata

Last week's audit §1 P1 #4 was: "`/dashboard` is the new `/compare` (naked metadata)". `dashboard/layout.tsx` now exists in the working tree (untracked, in the bundle). **Status: bundle-blocked, not unbuilt.** Removing from the standalone P1 list — folds into the P0.2 commit.

I have not yet verified the file's content end-to-end (canonical, BreadcrumbList, SearchAction JSON-LD per spec). Spot-check task scheduled before the bundle ships — see Action Items #4 below.

#### P1 — REAFFIRMED: explicit canonical tags missing on most templates

`grep -rn "alternates" web/src/app/` still shows the only explicit canonical lives in `compare/layout.tsx`. The bundle adds layouts for `dashboard`, `compare` (already tracked), `admin`, `favorites`, `watchlist`, `world-cup-2026/[stadium]` — auth-walled routes shouldn't have canonicals (they're noindexed). But the **public** programmatic templates — `venues/[slug]`, `tickets/[slug]`, `world-cup-2026/page.tsx`, `world-cup-2026/[stadium]`, `blog/page.tsx`, `blog/[slug]`, `faq`, `how-it-works`, `page.tsx` — still need explicit `alternates.canonical` per template.

**Effort unchanged: ~1 hr.** Defer the build until after the canonical-domain P0 lands so we don't write canonicals against the wrong base.

#### P1 — REAFFIRMED: BreadcrumbList schema missing on most templates

`grep -rn "BreadcrumbList" web/src/app/` matches in the working tree only inside `compare/layout.tsx`, `blog/[slug]/page.tsx`, and `world-cup-2026/page.tsx`. `world-cup-2026/[stadium]` has been called out as bundle-pending for BreadcrumbList; the daily action item "Add `BreadcrumbList` to `/world-cup-2026/[stadium]`" is queued for the same commit. Other public templates are still bare.

#### P1 — REAFFIRMED: `/llms.txt` still absent

`test -f web/public/llms.txt` returns false. Specified in last week's §3 with a copy-paste-ready body. **5-minute task.** Should ship in the same release as the bundle.

#### P2 — NEW: `Event` schema missing rich-result-eligibility fields

Per yesterday's competitor delta-check on Vivid Seats: the `Event`/`AggregateOffer` block on `/tickets/[slug]` lacks two fields Google now requires for rich-result eligibility under the 2024 Event-schema spec update:
- `eventStatus: "https://schema.org/EventScheduled"`
- `eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode"`

Three competitors checked (SeatGeek, StubHub, Vivid Seats); Vivid Seats emits both fields, the other two emit at least one. We emit neither.

**Fix:** ~4-line addition in `web/src/app/tickets/[slug]/page.tsx` to the existing JSON-LD block. Flag as **post-bundle** — do not expand the current 12-file change set; ship it in the next deploy after the bundle.

#### P2 — REAFFIRMED: hub pages, navbar additions, sitemap hygiene

All three from last week (build `/venues` and `/tickets` hubs, add `/how-it-works` to navbar, drop `/login`+`/register` from sitemap) are unchanged. Bundle-blocked.

#### P3 — RESOLVED: city/category slug-collision check

Ran the dedupe sweep last week's §1 P3 specified:
```bash
grep -E "^\s+slug:" web/src/data/{cities,categories}.ts | awk -F\' '{print $2}' | sort | uniq -d
```
Returned empty. **No collisions.** Marking resolved; remove from rolling action items.

#### P3 — DEFERRED: image alt-text + Core Web Vitals

Still requires Lighthouse runs against the Vercel deploy. Scheduled for next weekly assuming bundle has shipped and there's a fresh production build to measure.

---

## 2. Programmatic SEO Expansion — Status Update

**See [seo-programmatic-expansion-2026-04-27.md](./seo-programmatic-expansion-2026-04-27.md) for the full plan.**

**TL;DR vs 2026-04-20 plan:**
- Phase 1a (`/venues` + `/tickets` hubs) was scheduled to *land* this week (target ship 2026-05-04). **Not started.** Nothing on disk.
- Phase 1b (10 World Cup country pages, target ship 2026-05-15) is content-blocked on briefs from Content Agent (Ask 3, due 5/10 per their handoff). Slip risk: low.
- Phase 1c (8 best-time-to-buy pages, target ship 2026-05-22) is backend-blocked. Aggregation endpoint request was filed last week (audit §7); per Content Agent's 4/27 handoff, "**Blocked** on backend price-history endpoint. No movement." **First check-in needed.**

**One-week slip is tolerable. Two-week slip on Phase 1b means we miss the opening-match indexation curve.**

---

## 3. AI Search Optimization — Status Update

**See [seo-ai-optimization-2026-04-27.md](./seo-ai-optimization-2026-04-27.md) for the full file.**

**TL;DR:**
- `/llms.txt` still absent. Highest-leverage AI-citation surface change. Spec is in last week's audit §3 — copy-paste-ready.
- 16-question FAQ audit (Content Agent Ask 2) due **today**; will expand short answers to 40–100 words each. SEO sign-off needed when delivered.
- Bracketed-comparison blog series in flight: TM-vs-SG drafted, publishing Thu 4/30; SH-vs-VS pulled forward to 4/30 publish; All-In Pricing slot 5/04 week.
- Manual presence checks across ChatGPT/Perplexity/Gemini/Google AI Overviews: **deferred** — checking presence before the canonical-domain fix lands and indexation propagates would just measure the broken-state baseline. Schedule for the post-deploy week.

---

## 4. Site Architecture Review — Status Update

**See [seo-architecture-review-2026-04-27.md](./seo-architecture-review-2026-04-27.md) for the full file.**

**TL;DR vs 2026-04-20:**
- No structural changes shipped. Bundle still includes the `dashboard/layout.tsx` and other layout files that begin to fix the architecture, but they're untracked.
- Recommended hub pages (`/venues`, `/tickets`, `/best-time-to-buy`) are still architectural prereqs.
- One **new architectural concern** surfaced in this week's reading: `/world-cup-2026/page.tsx` is being heavily refactored in the bundle (pulling in `WorldCupSchedule.tsx` as a child component). Once it lands, the WC hub will be a strong template to mirror for `/venues` and `/tickets` hubs. **Use it as the reference implementation.**

---

## 5. Cross-Agent Handoffs (this week)

Filed in `marketing-agents/output/seo-requests/`:

1. **2026-04-27-bundle-deploy-escalation.md** — to Lead Architect, via CRO Agent if needed. Day 11. Highest urgency.
2. **2026-04-27-event-schema-2024-fields.md** — to Eng (post-bundle). Adds `eventStatus` + `eventAttendanceMode` to `/tickets/[slug]`. ~4-line change.
3. **2026-04-27-content-faq-signoff.md** — to Content Agent. SEO sign-off promised for today's FAQ-expansion delivery (Content Agent Ask 2).
4. **2026-04-27-content-comparison-schema.md** — to Content Agent. Schema specs for Thu 4/30 dual-publish (TM-vs-SG + SH-vs-VS): `Article` + comparison-table structured data + AggregateRating if/when applicable.
5. **2026-04-27-backend-price-aggregation-followup.md** — to Backend Agent. Aggregation endpoint requested 2026-04-20. **Status check.** Phase 1c blocked.

(Inbound from Content Agent today: see `2026-04-27-content-calendar-handoff.md` — keyword opportunities, schema validation requests, GSC API re-flag.)

---

## 6. Action Priority Matrix (rolling — minor reshuffle from 2026-04-20)

| # | Priority | Issue | Owner | Effort | Bundle? |
|---|----------|-------|-------|--------|---------|
| 1 | P0 | Fix www/non-www canonical (3 constants + URL sweep) | Eng | 30 min | **Yes — same commit** |
| 2 | P0 | Commit & deploy 18-file bundle | Eng | 15 min | THIS IS the bundle |
| 3 | P0 | Publish `/llms.txt` | Eng | 5 min | **Yes — same commit** |
| 4 | P1 | Verify `dashboard/layout.tsx` content (canonical + SearchAction JSON-LD) before bundle ships | SEO | 15 min | Pre-flight |
| 5 | P1 | Explicit canonical tags on 9 public templates | Eng | 1 hr | Post-bundle |
| 6 | P1 | BreadcrumbList schema on `/venues/[slug]`, `/tickets/[slug]`, `/faq`, `/how-it-works`, `/blog` (list), `/world-cup-2026/[stadium]` | Eng | 2 hrs | Mostly post-bundle (stadium one is in-bundle per daily) |
| 7 | P1 | Move `WebSite` entity from homepage to root layout; bind `WebSite.publisher` `@id` | Eng | 15 min | **Yes — same commit per 2026-04-26 daily** |
| 8 | P1 | Fix HowTo step anchor bug on `/how-it-works` (`#step-1` etc. lack matching `id` attrs) | Eng | 5 min | **Yes — same commit** |
| 9 | P1 | Reconcile social-handle drift (`ticketscan_io` vs `ticketscan` + add Threads) | Eng | 10 min | **Yes — same commit** |
| 10 | P1 | Add `highPrice` + `sport: 'Soccer'` to SportsEvent on WC hub + stadium pages | Eng | 15 min | **Yes — same commit** |
| 11 | P2 | Build `/venues` and `/tickets` hub pages | Eng | 3 hrs | Post-bundle (next sprint) |
| 12 | P2 | **NEW** `eventStatus` + `eventAttendanceMode` on `/tickets/[slug]` | Eng | 5 min | Post-bundle |
| 13 | P2 | Add "How It Works" to navbar (CRO ask filed 2026-04-20) | CRO | 15 min | Post-bundle |
| 14 | P2 | Remove `/login` + `/register` from sitemap | Eng | 2 min | Post-bundle |
| 15 | P2 | `X-Robots-Tag: noindex` HTTP header in `vercel.json` for auth-walled routes (belt-and-suspenders) | Eng | 5 min | **Yes — same commit** (durability fix per yesterday's correction) |
| 16 | P2 | Backend: price-history aggregation endpoint | Backend | 2 hrs | Phase 1c prereq |
| 17 | P2 | Generate 1200×630 OG images for 21 blog posts (Day 9 of Content ask) | Content | — | Independent |
| 18 | P2 | Refactor WC main page to Server Component | Eng | 3 hrs | After bundle (relevant files are mid-refactor in bundle) |
| 19 | P3 | ~~City/category slug collision check~~ | — | — | **RESOLVED — uniq -d empty** |
| 20 | P3 | Lighthouse on top-10 pages | Ops | — | Post-bundle (need fresh build to measure) |
| 21 | ONGOING | GSC API connection for rank tracking | Ops | — | Day 13 flagged |

**This week's release train (recommended, unchanged):** Items 1, 2, 3, 7, 8, 9, 10, 15 in one PR. **Eight items, one commit, one deploy, all the P0/P1 schema and architecture work lands.** Items 5, 6, 12, 13, 14 in a follow-up PR.

---

## 7. Verification Commands (post-deploy — same as 2026-04-20 §9 + new this week)

```bash
# P0.1 — canonical-domain fix
curl -sI https://ticketscan.io/ | grep -i location
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c 'https://www.ticketscan.io'  # expect 109
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c '>https://ticketscan.io<'    # expect 0

# P0.2 — bundle verification
curl -s https://www.ticketscan.io/compare       | grep -c 'WebApplication'   # expect 1
curl -s https://www.ticketscan.io/              | grep -c 'FAQPage'          # expect 1
curl -s https://www.ticketscan.io/how-it-works  | grep -c 'HowTo'            # expect 1
curl -s https://www.ticketscan.io/blog/any      | grep -c 'Article'          # expect 1+

# P0.3 — llms.txt
curl -sI https://www.ticketscan.io/llms.txt | head -1   # expect 200

# P1 — auth-walled noindex (durability check after committed deploy — should still hold)
curl -sL https://www.ticketscan.io/admin     | grep -i 'name="robots"' | head -1   # expect noindex
curl -sL https://www.ticketscan.io/watchlist | grep -i 'name="robots"' | head -1   # expect noindex
curl -sL https://www.ticketscan.io/favorites | grep -i 'name="robots"' | head -1   # expect noindex

# P1 — WebSite schema relocated to root layout
curl -s https://www.ticketscan.io/                | grep -c '"@type":"WebSite"'   # expect 1
curl -s https://www.ticketscan.io/blog/any        | grep -c '"@type":"WebSite"'   # expect 1 (now on every page)

# P1 — HowTo step anchors resolve
curl -s https://www.ticketscan.io/how-it-works | grep -c 'id="step-1"'  # expect 1
```

---

## 8. Next Rotation: Week of 2026-05-04

**If the bundle ships this week (Days 11–13):**
1. Run full Lighthouse pass on top 10 pages — first credible CWV baseline.
2. Drop the bundle-tracking framing from weekly audits; resume normal cadence.
3. Verify GSC re-crawl uplift over the post-deploy week (manual sample of 10–15 sitemap URLs).
4. Ship Tier 1 Phase 1a hubs (`/venues`, `/tickets`) — no longer blocked.
5. Run AI-presence check across ChatGPT/Perplexity/Gemini.

**If the bundle does NOT ship by 2026-05-04:**
1. The next weekly audit consolidates to a 1-page status note. There is no value in a 5,000-word audit when the conclusion is "the same two P0s, again." The space saved gets routed to a Lead-Architect escalation memo.
2. World Cup is at 38 days; Tier 1b briefing kickoff (Phase 1b is content-blocked on Content Agent Ask 3 due 2026-05-10) gets accelerated independently of the bundle since the route additions to `tickets/[slug]/page.tsx` are *additive* and do not depend on the canonical-domain fix being live to be coded.

**Audit-ceiling rule (carrying from 2026-04-20):** until P0.1 lands, no downstream finding can be elevated above MEDIUM in priority because the bottleneck is Google's canonical selection, not our schema. Holding that line.
