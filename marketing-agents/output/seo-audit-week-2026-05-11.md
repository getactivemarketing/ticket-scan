# SEO Weekly Status Note — Week of 2026-05-11

**Agent:** SEO Specialist (Agent 2)
**Date:** Monday, May 11, 2026
**Prior:** [seo-audit-week-2026-05-04.md](./seo-audit-week-2026-05-04.md)
**World Cup countdown:** 31 days to opening match (was 38 last week) — **trigger threshold reached**

---

## The audit, per the 2026-05-04 commitment

> *"If the bundle does NOT ship by 2026-05-11... the next weekly audit becomes a single line: 'Same two P0s. Day 29. Escalation memo at [link].' Plus the four sub-files reduce to single-line files. Filed: a second escalation memo, this time copy-cc'd to Daily Marketing rotation for cross-agent visibility."*

**Same two P0s. Day 29. Plus a new P0 surfaced 2026-05-10 (`lowPrice` ~100× over-statement on 16 WC stadium pages — bundle-blind, must absorb into bundle commit before push). Escalation memo #3 at [seo-requests/2026-05-11-bundle-deploy-escalation-3.md](./seo-requests/2026-05-11-bundle-deploy-escalation-3.md).**

---

## Verification (one-liners, run from repo root, 2026-05-11)

```bash
grep -c "https://ticketscan.io" web/src/app/{sitemap,robots,layout}.ts                # 12 (was 12)
grep -c "https://ticketscan.io" web/src/app/{venues,tickets}/\[slug\]/page.tsx        # 14 (was 14)
git status --short web/src/                                                            # 11 mod + 6 untracked (= 17 files, unchanged)
test -f web/public/llms.txt && echo present || echo missing                            # missing
test -f web/public/logo.png && echo present || echo missing                            # present (untracked)
```

**Inventory:** 112 pages (+2 from `mercedes-benz-stadium` and `att-stadium` content refreshes shipped through the same broken canonical pipeline this week).

---

## Sub-files

- [seo-programmatic-expansion-2026-05-11.md](./seo-programmatic-expansion-2026-05-11.md)
- [seo-ai-optimization-2026-05-11.md](./seo-ai-optimization-2026-05-11.md)
- [seo-architecture-review-2026-05-11.md](./seo-architecture-review-2026-05-11.md)

Each is one paragraph or less. Substance is in the escalation memo.

---

## What's new this week (one paragraph, not five)

The bundle gained a third P0 it has to ship: the `extractLowestPrice` backwards-iteration bug in `web/src/app/world-cup-2026/[stadium]/page.tsx:55–60` is emitting suite-floor values (`$15,000` AT&T, `$10,000` Mercedes-Benz) into AggregateOffer schema instead of true cheapest-tier floors (`$150` / `$100`). Bundle deploy without the patch ships the bug verbatim across all 16 WC stadium pages. Patch documented in [seo-requests/2026-05-10-seo-replies-bundle.md](./seo-requests/2026-05-10-seo-replies-bundle.md) §Reply 1 — 6/-3 line rewrite, no new dependencies, type-checks under TS strict. **Bundle scope is now P0×3 + P1×6, ~98 min total ship effort (was 95).** The countdown crossed the 31-day threshold today; Phase 1b indexation runway is now below the 4-week minimum for the first time.

---

## Audit ceiling — held

Carrying from 2026-04-20: until P0.1 lands, no downstream finding can be elevated above MEDIUM in priority. Four weekly audits and 19 daily reports have flagged the same P0s. The audit cadence has done its job.

---

## Next rotation: Week of 2026-05-18

If the bundle ships this week → resume normal cadence; the post-fix indexation window is the right moment for AI-presence baselines, Lighthouse on top 10 pages, GSC re-crawl uplift verification. **If the bundle does not ship by 2026-05-18:** WC at 24 days, Phase 1b runway at ~24 days from a hypothetical 5/18 ship — half the original target. The fifth weekly audit reduces further to a single sentence + a one-line link to escalation #4. I will not third-rev any spec; the work is correct and has been since 2026-04-13.
