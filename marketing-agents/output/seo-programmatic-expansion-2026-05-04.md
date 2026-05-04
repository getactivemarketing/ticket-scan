# Programmatic SEO Expansion — Status Update 2026-05-04

**Format:** Short status note. Full plan still lives in [seo-programmatic-expansion-2026-04-27.md](./seo-programmatic-expansion-2026-04-27.md).
**Why short:** Per the audit's consolidation commitment while the bundle is unshipped.

---

## Phase 1a — `/venues` + `/tickets` hub pages
**Status:** NOT STARTED. Bundle-blocked. Day 22.
**Original target ship:** 2026-05-04.
**Slip:** ≥1 week.
**Note:** WC hub refactor in the bundle (`world-cup-2026/page.tsx` + `WorldCupSchedule.tsx`) is the reference template. Hubs cannot be templated against an unshipped reference, so this remains gated.

## Phase 1b — 10 World Cup country pages
**Status:** Briefs received from Content Agent (Ask 3 deliverable due 2026-05-10, **delivered early** in `2026-05-04-content-calendar-handoff.md`). Code not started.
**Target ship:** 2026-05-15. **Risk:** Will slip by 2–3 days if bundle blocks Phase 1a past 2026-05-11.
**Recommendation (NEW this week):** **Decouple Phase 1b from the bundle dependency.** Phase 1b is purely additive routes under `/world-cup-2026/[country]/[slug]` — the data model, page template, and content pipeline do not require the canonical-domain fix to be live before they can be coded. They will *render against the wrong canonical domain at first*, but that is true of every page on the site today and gets swept when the bundle ships.
**Owner ask:** Eng to begin Phase 1b implementation in parallel with bundle escalation. Surfacing this in the [Lead-Architect escalation memo](./seo-requests/2026-05-04-bundle-deploy-lead-architect-escalation.md) §"Risk if not shipped."

## Phase 1c — 8 best-time-to-buy pages
**Status:** BLOCKED on backend price-history aggregation endpoint.
**First check-in filed:** 2026-04-27 (`seo-requests/2026-04-27-backend-price-aggregation-followup.md`).
**Reply received:** None.
**Action this week:** Second follow-up to Backend Agent. Filing as `seo-requests/2026-05-04-backend-price-aggregation-2nd-followup.md`. If unanswered by 2026-05-11, demote Phase 1c from Q2 plan and reroute the keyword set to long-form blog content owned by Content Agent.

---

## New programmatic opportunities (queued, not green-lit)

Three opportunities surfaced from the 2026-04-27 plan that remain in the "evaluate" column. None are starting this week — capacity is consumed by the bundle escalation and Phase 1b prep.

| Opportunity | Search-volume case | Template feasibility | Decision |
|-------------|--------------------|-----------------------|----------|
| `/artist/[slug]` (top 100 touring artists) | High; "Taylor Swift tickets" + variants are seven-figure monthly | Strong; uses existing event-search API | **Hold** until Phase 1c decision lands. |
| `/tickets/[city]/[venue]` combo | Medium; long-tail aggregation | Strong; data already in `venues.ts` + `cities.ts` | **Hold** until Phase 1a ships. Combo pages without hub pages are an internal-link orphan trap. |
| `/best-time-to-buy/[category]` | Medium-high; "buy [team] tickets when" is a high-intent query | Strong if Phase 1c data lands | **Hold pending Phase 1c.** |

---

## What needs no change this week

- Template specs from 2026-04-27 are still correct; nothing in the inventory or competitive set has invalidated them.
- 110-page inventory (was 109) — Wrigley Field added today via `636e40b` is the only change. No new programmatic page types went live.

---

## Next rotation actions
1. If bundle ships → resume Phase 1a build, retain Phase 1b on schedule.
2. If bundle does not ship → green-light Phase 1b code in parallel; reroute Phase 1c keywords to Content Agent if backend is still silent.
3. AI/artist programmatic pages remain held; revisit 2026-05-18 once the bundle situation is resolved either way.
