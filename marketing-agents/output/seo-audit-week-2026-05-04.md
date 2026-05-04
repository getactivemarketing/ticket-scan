# SEO Weekly Status Note — Week of 2026-05-04

**Agent:** SEO Specialist (Agent 2)
**Site:** https://www.ticketscan.io
**Date:** Monday, May 4, 2026 (weekly cadence)
**Prior audit:** 2026-04-27 — [seo-audit-week-2026-04-27.md](./seo-audit-week-2026-04-27.md)
**Format:** Consolidated status note per the commitment in the 2026-04-27 §8 escalation rule
**World Cup countdown:** 38 days to opening match (was 45 last week)

---

## Why this audit is one page

The 2026-04-27 audit closed with: *"If the bundle does NOT ship by 2026-05-04, the next weekly audit consolidates to a 1-page status note. There is no value in a 5,000-word audit when the conclusion is 'the same two P0s, again.' The space saved gets routed to a Lead-Architect escalation memo."*

The bundle did not ship. Honoring the commitment.

**The escalation memo lives at [seo-requests/2026-05-04-bundle-deploy-lead-architect-escalation.md](./seo-requests/2026-05-04-bundle-deploy-lead-architect-escalation.md).** That is where the substantive ask sits this week. Read that, not this.

---

## Status snapshot (verified 2026-05-04)

| Item | State | Δ vs 2026-04-27 |
|---|---|---|
| **P0.1** — `sitemap.ts` / `robots.ts` / `layout.tsx` `metadataBase` use non-www | UNFIXED, **Day 22** | No change. 12 hard-coded `https://ticketscan.io` references remain in those three files. |
| **P0.1b** — Hard-coded non-www URLs in JSON-LD on `venues/[slug]/page.tsx` (7 refs) and `tickets/[slug]/page.tsx` (7 refs) | UNFIXED, **Day 22** | No change. Plus Wrigley Field shipped today through this same code path — **another sitemap/JSON-LD entry pointing at the wrong canonical**. |
| **P0.2** — Working-tree bundle | UNCOMMITTED, **Day 22** | One file extracted: `web/src/data/venues.ts` was committed in `636e40b` for the Wrigley refresh. Remaining 11 modified + 6 untracked = **17 files** (was 18). Bundle effectively unchanged in substance. |
| **P0.3** — `/llms.txt` | MISSING, Day 22 | `test -f web/public/llms.txt` returns false. |
| **Page inventory** | 110 (was 109) | +1 from `web/src/data/venues.ts` Wrigley Field entry shipped 06:13 ET today via `636e40b`. |
| **Daily SEO reports** | LAST = `seo-daily-2026-04-29.md` | **5-day gap.** No daily SEO output for 2026-04-30, 05-01, 05-02, 05-03, 05-04. Process gap, will reconcile separately — not a content gap (the daily would just have re-flagged the same P0s). |

**Verification (one-liners, run from repo root):**

```bash
grep -c "https://ticketscan.io" web/src/app/{sitemap,robots,layout}.ts                # 12 (was 12)
grep -c "https://ticketscan.io" web/src/app/{venues,tickets}/\[slug\]/page.tsx        # 14 (was 14)
git status --short web/src/                                                            # 11 mod + 6 untracked
test -f web/public/llms.txt && echo present || echo missing                            # missing
```

---

## What changed this week (substance, not status)

### One thing got *worse* — the Wrigley Field commit
`636e40b` (Mon 2026-05-04 06:13 ET) shipped a new `/venues/wrigley-field` route through the same broken canonical pipeline that's been on the docket for 22 days. **The fact that this commit went out cleanly proves the team can ship single-file commits independently of the bundle.** The blocker is not the team's ability to commit — it's a decision-allocation problem on the bundle review.

This also means: every venue/city/world-cup refresh shipped while the bundle waits adds another sitemap entry pointing at `https://ticketscan.io` (non-www) instead of `https://www.ticketscan.io`. The longer the bundle waits, the more cleanup the canonical-domain fix has to sweep when it does land. **Not a P0 escalation, but a slow-bleed cost.**

### One thing improved — `web/src/data/venues.ts` left the bundle
The bundle drops from 18 files to 17 (one of the modified files was committed via `636e40b`). The remaining set is:

```
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
?? web/public/logo.png                       (NEW: bundle-adjacent — Organization JSON-LD logo target)
?? web/src/app/admin/layout.tsx
?? web/src/app/compare/layout.tsx
?? web/src/app/dashboard/layout.tsx
?? web/src/app/favorites/layout.tsx
?? web/src/app/watchlist/layout.tsx
?? web/src/app/world-cup-2026/WorldCupSchedule.tsx
```

**New:** `web/public/logo.png` is now in the working tree (untracked). The `Organization` schema in `layout.tsx` references `https://ticketscan.io/logo.png`. Prior to the file existing, that URL would have 404'd — Google soft-flags missing logo assets for `Organization` schema. **Fold into the same bundle commit.** No spec change needed.

### Inbound queue (today)
- `seo-requests/2026-05-04-content-calendar-handoff.md` from Content Agent — keyword opportunities, schema validation requests for this week's publishes. Will action after escalation memo lands.
- `seo-requests/2026-05-03-content-replies-bundle.md` from Content (filed yesterday) — pending review.

---

## The four sub-files this week

Per the standard weekly format, each sub-file ships short status updates only:

- [seo-programmatic-expansion-2026-05-04.md](./seo-programmatic-expansion-2026-05-04.md) — Phase 1a still bundle-blocked (Day 22). Phase 1b briefs landed from Content Agent on time. Phase 1c backend dependency still unmoved. **Recommendation: split Phase 1b from the bundle dependency** — it's *additive code* that does not require the canonical-domain fix to be live before it can be coded.
- [seo-ai-optimization-2026-05-04.md](./seo-ai-optimization-2026-05-04.md) — `/llms.txt` still missing. AI presence checks still deferred until the canonical-domain fix lands. FAQ expansion delivered by Content (Ask 2) and signed off; awaiting bundle ship for end-to-end deploy.
- [seo-architecture-review-2026-05-04.md](./seo-architecture-review-2026-05-04.md) — No structural changes shipped. Hub pages still architectural prereqs. WC hub remains the pending reference template for `/venues` and `/tickets` hubs.

Each sub-file is intentionally short. The escalation memo is the substantive deliverable this week.

---

## Action priority — abbreviated

The full 21-row matrix from 2026-04-27 carries forward unchanged in priority order. Three rows changed state:

| # | Δ | Item |
|---|---|---|
| — | **NEW** | Add `web/public/logo.png` to the bundle commit (it's already in the working tree, no spec change). |
| 19 | RESOLVED — already noted last week | City/category slug-collision check. |
| — | **NEW** | Decision request: ship Phase 1b code (10 WC country pages) ahead of the bundle? Independent of canonical domain at the code level. |

Everything else: same priority, same effort estimates, same blockers. Re-typing the matrix adds no new signal.

---

## Audit ceiling — held

**Carrying from 2026-04-20:** until P0.1 lands, no downstream finding can be elevated above MEDIUM in priority because the bottleneck is Google's canonical selection, not our schema.

**Three weekly audits and 14 daily reports have flagged the same P0s.** The audit cadence has done its job. The remaining work is decision-allocation, which is what the escalation memo addresses.

---

## Next rotation: Week of 2026-05-11

**If the bundle ships this week:**
- Resume normal weekly cadence and audit depth.
- Run Lighthouse pass on top 10 pages; first credible CWV baseline.
- Run AI-presence checks (ChatGPT, Perplexity, Gemini, Google AI Overviews) — the post-fix indexation window is the right time to baseline.
- Verify GSC re-crawl uplift via 10–15 sample URLs.

**If the bundle does NOT ship by 2026-05-11:**
- World Cup is then at 31 days. Phase 1b indexation runway falls below the 4-week minimum.
- The next weekly audit becomes a single line: *"Same two P0s. Day 29. Escalation memo at [link]."* Plus the four sub-files reduce to single-line files.
- Filed: a second escalation memo, this time copy-cc'd to Daily Marketing rotation for cross-agent visibility.
- I will *not* third-rev the canonical-domain spec. The spec has been correct since 2026-04-13.
