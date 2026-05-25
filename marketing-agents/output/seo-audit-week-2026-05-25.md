# SEO Weekly Deep-Dive — Week of 2026-05-25

**Agent:** SEO Specialist (Agent 2)
**Site:** https://www.ticketscan.io
**Date:** Monday, May 25, 2026 (Memorial Day; weekly Tuesday cadence absorbed into Monday window due to discovery cycle)
**Prior weekly:** [seo-audit-week-2026-05-18.md](./seo-audit-week-2026-05-18.md) — single-sentence terminal-form note
**Active escalation:** [seo-requests/2026-05-25-production-divergence-escalation.md](./seo-requests/2026-05-25-production-divergence-escalation.md) — Memo #5, supersedes #1–#4
**WC opening match:** 17 days out (2026-06-11)

---

## Why this audit is not single-sentence

The 2026-05-18 commitment (per escalation #4) was: "weekly audit #5 collapses to a one-sentence pointer at the Friday strategic-planning handoff if memo #4 stays silent through EOD Friday 2026-05-22." Memo #4 was silent. The Friday handoff fired as committed.

**Then this morning's daily discovered Memo #4's premise was wrong.** The deployed Vercel artifact and `origin/main` HEAD disagree: the in-bundle blog Article-schema patches are live in production despite the matching commit not existing in git. The `lowPrice` patch in the same working tree is **not** live. Production has been accepting **file-level partial deploys via a path that bypasses git main** for some unknown number of weeks.

That finding nullifies the framing of all four prior escalations. The audit-track wasn't blocked by an "unanswered architect ship decision" — it was blocked by an audit cadence asking the wrong question. The right question, filed in Memo #5, is: **what is production actually built from, and who has push rights to the path that bypassed git?**

This audit resumes substance because (a) the deploy path is no longer the binary "ship the bundle or don't" frame, (b) file-level fixes can ship without bundle approval if we can identify the path, and (c) the work I was triaging on the assumption of frozen-bundle constraints needs to be re-triaged on the assumption of file-level mobility.

**Severity scale:** P0 (Critical) > P1 (High) > P2 (Medium) > P3 (Low)

---

## Executive Summary

1. **Production divergence is the new top P0.** Source-of-truth cannot be derived from git, which breaks every downstream audit's ability to compare expected-vs-actual. Memo #5 is open, awaiting architect/deploy-owner reply.
2. **The 16-file working-tree bundle no longer reads as a single deploy unit.** It splits into "shipped" (blog Article schema, possibly others) and "not shipped" (`lowPrice` patch, canonical-domain fix, `/llms.txt`, layout files, hub pages). The not-shipped set is the new ground truth for the audit.
3. **Canonical-host mismatch, Day 4 of escalation.** `https://ticketscan.io` 307s to `https://www.ticketscan.io`, but the sitemap still serializes the apex. The partial-deploy path that fixed blog schema did **not** include this fix. Now an explicit P0 ask for the partial-deploy path owner: "ship this single file too."
4. **`lowPrice` four-digit schema regression, Day 16.** Same logic: the partial-deploy path can ship this single file. Per Content Agent handoff (5/25), seven additional WC stadium refreshes are queued (NRG 5/29, Arrowhead 5/30, BMO Field 6/5, BC Place 6/6, plus 3 Mexico venues) and will compound the regression until absorbed.
5. **Content Agent's 22-publish backlog ships via the same partial-deploy path.** That backlog includes 4 new blog slugs this week and a proposed new landing page `/world-cup-2026/cheapest-tickets` (lead magnet anchor). Sitemap additions are queued behind partial-deploy-path identification.
6. **AI SEO and site architecture work is unblocked file-by-file** once the path is identified. The bundle-frame inhibitor on Phase 1a/1b/1c is dead.

---

## 1. Full Technical SEO Audit

### Current sitemap inventory (re-counted today)

| Page type | Count | Source |
|-----------|-------|--------|
| Static | 10 | `web/src/app/sitemap.ts` lines 15–76 |
| Blog posts | 19 | `web/src/data/blog.ts` |
| Venues `/venues/[slug]` | 24 | `venues.ts` |
| City pages `/tickets/[slug]` | 24 | `cities.ts` |
| Category pages `/tickets/[slug]` | 13 | `categories.ts` |
| World Cup main | 1 | `sitemap.ts` line 113 |
| World Cup stadiums | 16 | `worldcup.ts` |
| **Sitemap total emitted** | **107** | |
| Production sitemap (curl-verified 5/25) | **104** | 3 fewer than emitted total — Next.js dedup of city/category slug collisions per `tickets/[slug]` route |

Note: today's curl-verified production sitemap shows 104 URLs, vs the data-file-derived 107. The 3-URL gap matches the city/category slug-collision risk flagged 2026-04-20 §P3. Three category slugs are likely shadowed by city slugs in `getPageData()` — needs explicit reconciliation now that the namespace has grown. **New P2 (item below).**

### P0 — CRITICAL: Production divergence between deployed artifact and main (NEW today)

**Evidence:** `git show HEAD:web/src/app/blog/[slug]/page.tsx` returns pre-patch flat `articleJsonLd`; live HTML at three blog URLs returns post-patch `@graph` structure. `git rev-parse HEAD origin/main` returns identical SHA. Working-tree blob hash (`274227f5`) matches the deployed structure. Reproducible via `curl -s 'https://www.ticketscan.io/blog/<slug>?_cb='$(date +%s)`. Partial: `lowPrice` patch in the same working tree is not live.

**Why this is P0 above the prior P0s:**
- Every schema-rotation audit from now backward relies on `git show HEAD:<path>` as the comparator. That comparator is no longer ground truth.
- Future SEO recommendations cannot be reasoned about — we don't know what production will look like after a hypothetical ship because we don't know which path ships.
- The 5-week "bundle is frozen" framing was wrong; downstream agents (Content, CRO) coordinated around an incorrect premise.

**Fix path:** Memo #5 asks the four owner-level questions. No code-side fix lives on the SEO side.

### P0 — CRITICAL: Canonical-host mismatch, Day 4 (UNRESOLVED, REFRAMED)

**Evidence (re-verified 5/25 10:09 UTC):**
- `curl -sI https://ticketscan.io/` → `HTTP/2 307 → https://www.ticketscan.io/`
- `web/src/app/sitemap.ts` line 8 still `const BASE_URL = 'https://ticketscan.io';`
- Live sitemap line 4 still `<loc>https://ticketscan.io</loc>` (apex, no `www`)
- Every JSON-LD `@id`, OG `url`, and BreadcrumbList item URL on the live site still emits apex

**Reframe via Memo #5:** This is now a 3-file file-level ship request, not a bundle ship request. Three constants:

```ts
// web/src/app/sitemap.ts line 8
const BASE_URL = 'https://www.ticketscan.io';

// web/src/app/robots.ts line 17
sitemap: 'https://www.ticketscan.io/sitemap.xml',

// web/src/app/layout.tsx line 41
metadataBase: new URL("https://www.ticketscan.io"),
```

Plus the hard-coded sweep across `venues/[slug]/page.tsx`, `tickets/[slug]/page.tsx`, `world-cup-2026/[stadium]/page.tsx`, `blog/[slug]/page.tsx`. The hard-coded count is ~35 references after this week's WC stadium refreshes (per escalation #4 §"Sweep cost").

**Effort if shipped via the partial-deploy path:** 30 min. Identical to the spec since 2026-04-13.
**Re-escalation ask:** Same partial-deploy path that shipped blog Article schema can ship these 3 file edits. Why was it excluded? — pending answer to Memo #5 §Ask 1.

### P0 — CRITICAL: `lowPrice` schema regression, Day 16 (UNRESOLVED, REFRAMED)

**Live values re-verified 5/25:**

| URL | Live `lowPrice` | Expected |
|-----|-----------------|----------|
| `/world-cup-2026/att-stadium` | `15000` | ~`150` |
| `/world-cup-2026/mercedes-benz-stadium` | `10000` | ~`100` |
| `/world-cup-2026/lumen-field` | `8000` | ~`80` |
| `/world-cup-2026/levis-stadium` | `6000` | ~`60` |

**Reframe via Memo #5:** Same logic. Single-file patch (`web/src/app/world-cup-2026/[stadium]/page.tsx`) sitting in the same working tree as the blog template that did ship. Patch is the `extractLowestPrice` correction filed 2026-05-10. Day 15 of unabsorbed. Per Content Agent handoff today, every remaining stadium refresh (NRG 5/29, Arrowhead 5/30, BMO Field 6/5, BC Place 6/6, 3 Mexico venues) ships into the bug until absorbed.

### P1 — HIGH: Sitemap city/category slug collision (NEW from today's URL count)

**Evidence:** Sitemap emits 24 cities + 13 categories on the `/tickets/[slug]` route, but production sitemap returns 104 URLs. Math: 10 static + 19 blog + 24 venues + 24 cities + 13 categories + 1 WC main + 16 WC stadiums = 107 emitted. Production = 104. 3-URL gap.

`tickets/[slug]/page.tsx` `getPageData()` checks `cities` first, then `categories`. Three category slugs are silently shadowed. The shadowed pages are also being deindexed if their slugs aren't in the sitemap (they're not — they're being deduped).

**Fix:**
1. Diff `Object.keys(cities)` ∩ `Object.keys(categories)` to identify the 3 colliding slugs.
2. Rename the category slugs (lower migration cost than renaming city slugs — categories have less inbound link equity).
3. Add 301 redirects from old category slugs to new ones via `next.config.ts` `redirects()`.

**Effort:** 30 min (identify + rename + redirects).
**Impact:** Up to 3 category pages currently unindexable. With 13 categories and the playoffs-driven `nba-tickets` / `nhl-tickets` slugs in the high-traffic set, the exposure could be material.

**Required first step:** I'll run the slug-collision check tomorrow morning (5/26) and update the audit with the specific colliding slugs.

### P1 — HIGH: `/dashboard` still has naked metadata, Day 36

`web/src/app/dashboard/page.tsx` first line: `'use client'`. No `dashboard/layout.tsx`. Same problem `/compare` had before its 2026-04-19 fix. Has been in the audit since 2026-04-20.

**Reframe via Memo #5:** `dashboard/layout.tsx` is a single new file in the bundle. The partial-deploy path that shipped blog schema can also create this file. Identical effort: 45 min. Identical spec: mirror `compare/layout.tsx` shape.

### P1 — HIGH: BreadcrumbList missing from 60+ pages

Unchanged from prior weeks. Grep for `BreadcrumbList`:
- `compare/layout.tsx` ✓
- `blog/[slug]/page.tsx` ✓ (now live in production per today's discovery)
- `world-cup-2026/page.tsx` ✓

Missing from 24 venues, 37 city/category, 16 WC stadiums, plus `/faq`, `/how-it-works`, `/blog` list.

**Reframe via Memo #5:** Per-template addition. Shippable file-by-file via the partial-deploy path. Effort: 2 hr for all four templates. **Top file-level candidate** for the partial-deploy path's next ship after canonical-host fix — single, well-bounded diff with clear post-deploy verification.

### P1 — HIGH: `/llms.txt` still missing, Day 36

Spec frozen in 2026-04-20 audit §3. Effort: 5 min (create `web/public/llms.txt`). Static file under `web/public/`, single-file new-file ship. Trivial for the partial-deploy path.

### P2 — MEDIUM: Hub pages `/venues` and `/tickets` still don't exist

Status unchanged from 2026-04-13 audit. Breadcrumbs on 60+ child pages reference middle hubs that 404. With the city/category slug-collision issue (P1 above), the hub pages also become the natural place to expose the full namespace cleanly.

**Reframe via Memo #5:** Two new files in `web/src/app/venues/page.tsx` and `web/src/app/tickets/page.tsx`. New-file creates ship cleanly via the partial-deploy path. Effort: 3 hr. Full spec in 2026-04-20 §4.

### P2 — MEDIUM: WC main page still `'use client'`

Unchanged. Layout file exists, metadata is fine, but body content is client-rendered. Refactor to server component remains queued. Lower priority while higher-leverage file-level items remain.

### P2 — MEDIUM: OG image fallback (per Content Agent ask)

Content Agent's 5/25 handoff (§5) re-flagged Phase 1 site-default 1200×630 OG fallback as Day 37 urgent. **Amplification:** 22-publish backlog from Content means the OG-image-missing post count goes from 22 to ~44 if the queue clears this week. Single-file change in `web/src/app/layout.tsx` + one new asset in `web/public/`. Spec ready.

### P3 — LOW: Login/Register still in sitemap

Two-minute fix; unchanged from 2026-04-13. Defer until next partial-deploy.

---

## 2. Programmatic SEO Expansion — Phase 1a/1b/1c status

See [seo-programmatic-expansion-2026-05-25.md](./seo-programmatic-expansion-2026-05-25.md) for full detail. Summary:

- **Phase 1a (10 WC team pages):** No longer bundle-blocked. Reframe: each of the 10 country pages is a single file build (`/tickets/[country]-world-cup-2026` or new `/world-cup/[country]/` route) — partial-deploy path can ship them one at a time. WC at 17 days; window is small but non-zero.
- **Phase 1b (8 best-time-to-buy):** Still blocked on backend price-history aggregation endpoint (separate dependency, not Memo #5).
- **Phase 1c (8 long-form briefs):** Acknowledged by Content Agent 2026-05-14, in their Q2 backlog. Independent of Memo #5.
- **New (this week, from Content handoff):** `/world-cup-2026/cheapest-tickets` landing page (lead-magnet anchor). Single new file. Sitemap addition needed.

---

## 3. AI Search Optimization — status

See [seo-ai-optimization-2026-05-25.md](./seo-ai-optimization-2026-05-25.md) for full detail. Summary:

- `/llms.txt` still missing — partial-deploy candidate this week.
- Blog Article schema is now live (per today's discovery) — improves AI extractability on `/blog/*`. First positive baseline shift since 2026-04-19.
- FAQ answer-expansion (Content Agent ask from 2026-04-20) still queued — independent of Memo #5.
- AI-presence baseline check deferred again pending canonical-host resolution (apex/www mismatch confuses citation tracking).

---

## 4. Site Architecture Review

See [seo-architecture-review-2026-05-25.md](./seo-architecture-review-2026-05-25.md) for full detail. Summary:

- No structural changes shipped since 2026-05-18 baseline. Two content refreshes added page weight (Lumen Field, Levi's Stadium) but no new routes.
- Hub pages (`/venues`, `/tickets`) remain unbuilt — now reframed as single-file new-creates rather than bundle dependencies.
- Proposed new route `/world-cup-2026/cheapest-tickets` per Content Agent handoff — single landing page, new file, sitemap addition required.
- Internal-linking topology unchanged; the venue→city Link wrap from 2026-04-20 §4 remains queued.

---

## 5. Content Agent — outbound replies to today's handoff

The Content Agent's 5/25 handoff (`seo-requests/2026-05-25-content-calendar-handoff.md`) raised 6 asks. Replies below.

### Ask 1: Re-escalate Memo #5 to Lead Architect priority-1
**Acknowledged.** Memo #5 was filed at 06:06 today addressed to Lead Architect / Deploy Pipeline Owner. The escalation tier is already priority-1 (it supersedes the four prior memos and is explicitly framed as "supersedes Memos #1–#4"). The Friday 5/22 strategic-planning handoff fired as committed and remains an open thread; that surface is the highest-leverage cross-agent decision-forcing channel I have. No additional escalation lever available beyond the one already fired.

### Ask 2: File sitemap.ts addition recommendations for `/world-cup-2026/cheapest-tickets`
**Filed.** Spec:

```ts
// web/src/app/sitemap.ts — add to worldCupMainPage block, or as new entry alongside it
{
  url: `${BASE_URL}/world-cup-2026/cheapest-tickets`,
  lastModified,
  changeFrequency: 'weekly' as const,
  priority: 0.9,
}
```

Priority 0.9 to match `/world-cup-2026` main hub (it's a tournament-window conversion landing page, not a child stadium page). Change frequency `weekly` since the underlying pricing data refreshes with each scheduled price-tracking cron cycle.

Additional ask: confirm with Content whether the landing page will use the existing `/world-cup-2026/layout.tsx` metadata or whether it needs its own metadata file. If standalone, also build `web/src/app/world-cup-2026/cheapest-tickets/layout.tsx` with FAQPage + WebPage JSON-LD on the same template shape as the existing stadium pages. Defer to Content Agent's build spec; SEO sign-off ready when the build lands.

### Ask 3: Coordinate `extractLowestPrice` patch absorption with Memo #5 reconciliation
**Acknowledged + reframed.** The patch is exactly the right next file for the partial-deploy path's second ship. Single file, narrow diff, immediate live-state verification (`curl 'https://www.ticketscan.io/world-cup-2026/att-stadium?_cb=...' | grep lowPrice` returns `~150` instead of `15000`). I've added this to Memo #5's Ask 3 thread; awaiting reply.

### Ask 4: Phase 1 OG image fallback
**Acknowledged.** Single-file edit in `web/src/app/layout.tsx` + new asset `web/public/og-default-1200x630.png`. ~30 min Lead Architect work. The asset already needs to exist; we have `web/public/logo.png` (square) but no rectangular OG default. Recommend Content Agent or design ship the 1200×630 PNG; SEO will file the layout.tsx integration when the asset is in.

### Ask 5: GSC API connection (Day 40 flagged)
**Status:** still pending Ops. Tracking continues; daily SEO reports continue noting Day-N. Nothing new to do on the SEO side beyond what's already filed.

### Ask 6: Sitemap entries for publishes that ship this week
**Acknowledged.** When Content's 4 new blog posts this week ship through the partial-deploy path, the slugs will auto-pick-up via `getAllBlogPosts()` in sitemap.ts lines 79–84. No manual sitemap intervention needed as long as the slugs land in `web/src/data/blog.ts`. If publishes ship without the corresponding `blog.ts` entries (which would itself be a partial-deploy anomaly worth flagging), the sitemap won't reflect them; flag back if that happens.

---

## 6. CRO Agent — outbound this week

1. **Navbar: still missing "How It Works"** — request from 2026-04-20 stands unchanged. Now reframed as a partial-deploy file-level ship: `web/src/components/Navbar.tsx` lines 87–107 + 167–190 diff, ~15 min. Single-file ship. Re-file in `seo-requests/` if the path identification produces a yes.
2. **`/world-cup-2026/cheapest-tickets` landing page** (per Content handoff) — coordinate CTA shape and form behavior. The lead magnet's email-capture form should hit the existing `/api/newsletter/subscribe` endpoint with `source: 'wc-cheapest-tickets-landing'`. Build coordination request when the page is built.
3. **A/B test deferral** — the post-canonical-host A/B test heads-up from 2026-04-20 §6 stays deferred until canonical-host resolves.

---

## 7. Action Priority Matrix (rolling — refreshed for partial-deploy reality)

| # | Priority | Issue | Ship channel | Effort | Status |
|---|----------|-------|--------------|--------|--------|
| 1 | P0 | Memo #5 reply — what path produced the partial deploy? | Architect/Deploy-owner | — | Open, filed today |
| 2 | P0 | Canonical-host fix (3 constants + sweep) | Partial-deploy path | 30 min | Spec ready since 4/13 |
| 3 | P0 | `lowPrice` extractLowestPrice patch | Partial-deploy path | 5 min | Spec ready since 5/10 |
| 4 | P1 | `/dashboard/layout.tsx` create | Partial-deploy path | 45 min | Spec ready since 4/20 |
| 5 | P1 | `/llms.txt` publish | Partial-deploy path | 5 min | Spec ready since 4/20 |
| 6 | P1 | Slug-collision identification + rename + redirects | Partial-deploy path | 30 min | NEW — verify slugs tomorrow |
| 7 | P1 | BreadcrumbList JSON-LD on 4 templates | Partial-deploy path | 2 hr | Spec ready |
| 8 | P1 | Sitemap addition for `/world-cup-2026/cheapest-tickets` | Partial-deploy path | 5 min | NEW from Content ask |
| 9 | P2 | OG image 1200×630 fallback | Partial-deploy path | 30 min | NEW priority from Content ask amplification |
| 10 | P2 | Hub pages `/venues` + `/tickets` create | Partial-deploy path | 3 hr | Spec ready since 4/13 |
| 11 | P2 | WC team pages (10 × `/tickets/[country]-world-cup-2026`) | Partial-deploy path | 8 hr | Now unblocked file-by-file |
| 12 | P2 | Remove `/login` + `/register` from sitemap | Partial-deploy path | 2 min | Trivial — bundle with next ship |
| 13 | P3 | Refactor WC main page to Server Component | Standard | 3 hr | Deferred |
| 14 | ONGOING | GSC API connection | Ops | — | Day 40 |
| 15 | ONGOING | Phase 1b backend aggregation endpoint | Backend | 2 hr | Day 35 |

**This week's recommended ship train** (assuming partial-deploy path is identified mid-week): items 2, 3, 5, 6, 8 in one ship pass. Items 4, 7, 9 in the next pass. Items 10, 11, 12 the following week.

---

## 8. Verification commands

```bash
# P0.1 — production divergence (already failed, evidence in Memo #5)
diff <(git show HEAD:web/src/app/blog/[slug]/page.tsx | grep -A3 articleJsonLd) \
     <(curl -s 'https://www.ticketscan.io/blog/avoid-ticket-scams?_cb='$(date +%s) | grep -oE '"@graph"')

# P0.2 — canonical host
curl -sI https://ticketscan.io/ | grep -i location           # currently 307 → www
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c 'https://www.ticketscan.io'  # expect 104
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c '>https://ticketscan.io<'    # currently 1 (apex)

# P0.3 — lowPrice
for s in att-stadium mercedes-benz-stadium lumen-field levis-stadium; do
  echo -n "$s: "; curl -s "https://www.ticketscan.io/world-cup-2026/$s?_cb=$(date +%s)" | grep -oE '"lowPrice":"?[0-9]+"?' | head -1
done

# P1 — slug collision identification (tomorrow)
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web && \
  node -e "const c=require('./src/data/cities.ts'); const k=require('./src/data/categories.ts'); \
           const a=Object.keys(c.cities); const b=Object.keys(k.categories); \
           console.log(a.filter(x=>b.includes(x)))"

# P1 — /llms.txt absence
curl -sI https://www.ticketscan.io/llms.txt | head -1   # currently 404
```

---

## 9. Next rotation: Week of 2026-06-01

Conditional planning. Three forks:

**Fork A — Memo #5 answered, partial-deploy path identified, items 2/3/5/6/8 shipped:**
- Re-baseline weekly audit on the new ground-truth.
- Resume normal cadence: indexation telemetry (GSC depending), Phase 1a kickoff (WC team pages), AI-presence baseline check, hub-page builds.
- Strategic-planning handoff thread closes.

**Fork B — Memo #5 partially answered (path identified but not all items shipped):**
- Refile the unshipped items as individual file-level ship requests rather than a list.
- Re-attempt the explicit "ship this single file" ask format.
- Strategic-planning handoff thread stays open as backup.

**Fork C — Memo #5 silent through EOD Friday 2026-05-29:**
- The 5/22 strategic-planning handoff is the active escalation path; nothing new to file from SEO.
- Audit continues to track live state via the cache-busted curl rotation introduced today.
- Acknowledge that 5+ weeks of audit-track has produced 1 partial ship (blog Article schema) via a path the SEO surface doesn't have visibility into. The audit cadence's productive output is now the live-state verification commands, not the recommendation queue.

WC is at 17 days. Phase 1b runway minimum is 13 days past breach. The next two weeks are the last actionable window before the tournament makes most WC SEO recommendations moot.

— SEO Agent
