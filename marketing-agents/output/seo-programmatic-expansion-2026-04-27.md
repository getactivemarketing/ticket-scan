# Programmatic SEO Expansion Plan — 2026-04-27 (Week 3)

**Agent:** SEO Specialist (Agent 2)
**Prior plan:** 2026-04-20 — [seo-programmatic-expansion-2026-04-20.md](./seo-programmatic-expansion-2026-04-20.md)
**Status:** STILL GATED on bundle deploy + canonical-domain P0. See [seo-audit-week-2026-04-27.md](./seo-audit-week-2026-04-27.md) §1.

**World Cup countdown:** 45 days to opening match (was 52 last week).

---

## What changed this week

1. **Phase 1a hubs (`/venues`, `/tickets`) did not start.** `test -f web/src/app/{venues,tickets}/page.tsx` returns false. The 2026-04-20 plan had them landing this week (target ship 2026-05-04). They now slip into the 2026-05-04 sprint at earliest.
2. **Phase 1b (10 WC country pages) is content-pacing OK.** Content Agent confirmed in their 2026-04-27 handoff: "Ask 3, On track. Will outline in 5/04 week's plan." Briefs due 2026-05-10. Route work can begin as early as 5/03.
3. **Phase 1c (best-time-to-buy × 8) is BACKEND-BLOCKED.** Content Agent's status: "**Blocked** on backend price-history endpoint. No movement." Aggregation request was filed 2026-04-20. **First unanswered week.** Re-filing as `2026-04-27-backend-price-aggregation-followup.md`.
4. **One inventory addition:** Venues count moved 23 → 24 (Ball Arena commit 2026-04-22). `tickets/[slug]` namespace unchanged at 24+13.
5. **Architecture insight from this week's read:** the ongoing refactor of `world-cup-2026/page.tsx` (extracting `WorldCupSchedule.tsx` as a child component, server-rendered shell with client island) is a clean reference pattern for the upcoming `/venues` and `/tickets` hubs. Mirror it once it ships.

---

## Updated rollout calendar

```
Week of 2026-04-27 (THIS WEEK)
  ├── Land bundle + canonical-domain P0 (8-item commit) ← BLOCKING EVERYTHING
  ├── Backend: price-history aggregation endpoint — first status check filed
  └── Content: WC country brief outline begins

Week of 2026-05-04 (one-week slip from 2026-04-20 plan)
  ├── Ship /venues + /tickets hub pages (Phase 1a) ← NEW SLIP TARGET
  ├── Backend: aggregation endpoint in review
  └── Content: WC country copy 60% drafted

Week of 2026-05-11
  ├── Ship /tickets/[country]-world-cup-2026 × 10 (Phase 1b) ← UNCHANGED
  └── Content: best-time-to-buy briefs delivered

Week of 2026-05-18
  ├── Ship /best-time-to-buy/* × 8 + hub (Phase 1c) ← UNCHANGED if backend lands by 5/04
  └── Total Tier 1 launched: 20 new pages

Week of 2026-05-25 — World Cup 17 days out
  └── (free week to amplify Phase 1b indexation; build internal links from blog posts)
```

**Phase 1b (WC country pages) ship target unchanged at 5/11–5/15.** That's the load-bearing date in the plan: opening match is 6/11, so Phase 1b needs four full weeks of indexation runway before peak demand. **45 days countdown today; pages go live Day 14 of countdown.** Not a comfortable buffer; can't slip.

**Phase 1a slips one week** to 2026-05-04. Acceptable — hubs are PageRank-distribution infrastructure, not user-facing demand drivers, so a 7-day delay doesn't materially affect Phase 1b indexation.

**Phase 1c slips one week** if and only if backend aggregation lands by 2026-05-04. **If backend slips two weeks, Phase 1c slips out of Q2.** That's the cliff.

---

## Plan re-confirmation (no changes from 2026-04-20)

The Phase 1a / 1b / 1c specs are unchanged from last week's [seo-programmatic-expansion-2026-04-20.md](./seo-programmatic-expansion-2026-04-20.md). No re-spec'ing here — re-read that doc for:

- `/venues/page.tsx` template (CollectionPage + BreadcrumbList, 23-venue grid by type, city chips)
- `/tickets/page.tsx` template (24 cities + 13 categories, popular-now curation, country chips after Phase 1b)
- 10 WC country slugs + `worldCupTeams.ts` data shape + `getPageData()` integration
- 8 best-time-to-buy slugs + Recharts chart spec + aggregation endpoint contract

**Two micro-corrections to last week's plan, found in this week's re-read:**

1. **Slug listing for WC country pages:** the spec listed `usmnt-world-cup-2026`. **`USMNT` is the men's team only.** If we want to capture US-host-country demand including the women's team's hypothetical (no women's WC in 2026, but generic-US-fan queries), the slug should probably be `usa-world-cup-2026` with a tertiary `usmnt-world-cup-2026` redirect for safety. **Decision filed in next-week-plan; do not block on this — go with `usa-world-cup-2026` as the primary.**

2. **Hub page `CollectionPage.hasPart` listing — verify schema.org guidance:** The plan calls for listing all 24 venue URLs in `/venues/page.tsx`'s JSON-LD `hasPart`. Schema.org allows this but Google's structured-data guidelines recommend `ItemList` over `CollectionPage.hasPart` for ranked or unranked link lists. **Switching the hub-page schema spec from `CollectionPage` to `CollectionPage` + an `ItemList` block in `@graph`** (so we get both for safety). Same effort, more eligibility coverage.

---

## Tier 2 — no changes

Per 2026-04-20 plan: `/compare/[event-slug]`, non-WC artist/team pages, `/tickets/[city]/[venue]` combos. All Q3. Not touched this quarter.

---

## Tier 3 — added one entry

Festival pages — moved from "Maybe — 5–10 major festivals as a test" to **"Skip Q2; revisit after Phase 1c data."** Reason: Phase 1c is producing data on category-level price-curve quality. If `concert-tickets` performs well (>500 organic clicks/mo by 2026-06-30), festival pages are a sub-vertical that benefits. If it doesn't, festivals are a thin-content trap.

---

## Success metrics — re-baselined for 2026-04-27

Last week's table assumed P0 deploys by 2026-04-21. They didn't. Pulling the indexation baseline measurement window forward to whenever the deploy *does* land.

| Metric | Baseline (target) | Target by 2026-06-20 |
|--------|----------|----------------------|
| Indexation rate (GSC coverage) | Capture on Day 1 post-deploy | 60%+ of 109+20=129 pages |
| Organic clicks/week (GSC) | Capture on Day 1 post-deploy | +30% wk-over-wk for 4 wks |
| "world cup 2026 [country] tickets" SERP rank | Not ranking | Top 20 for 5+ countries |
| "best time to buy [category] tickets" SERP rank | Not ranking | Top 30 for 3+ categories |
| AI-assistant citation rate (manual check, 12 queries) | 0 cited | 2+ assistants cite for WC queries |
| Auth-walled-route durability check | Already noindexed (fragile) | Source-controlled noindex confirmed across 2 deploys |

---

## Cross-agent dependencies — current state

| Dep | Owner | Status | Risk |
|-----|-------|--------|------|
| Phase 1a — hub copy | Internal (no agent) | Reusable from existing data | LOW |
| Phase 1b — WC country briefs | Content Agent (Ask 3) | On track, due 5/10 | LOW |
| Phase 1b — backend (none) | — | — | — |
| Phase 1c — best-time copy | Content Agent (Ask 4) | Blocked behind backend | MED |
| Phase 1c — backend aggregation | Backend Agent | **No movement, week 1 silent** | **HIGH** |

**The single highest-leverage status-check this week is the backend aggregation endpoint.** Filed as `2026-04-27-backend-price-aggregation-followup.md`. If we don't get a status by Friday, escalate to Lead Architect — Phase 1c slips to Q3 otherwise.

---

*Next review: 2026-05-04 — pending bundle ship and backend status reply.*
