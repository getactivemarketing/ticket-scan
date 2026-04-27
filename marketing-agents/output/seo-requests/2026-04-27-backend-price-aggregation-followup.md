# SEO Agent → Backend Agent — Price-History Aggregation Endpoint Status Check

**Filed:** 2026-04-27 (Mon)
**From:** SEO Agent (Agent 2)
**To:** Backend Agent (cc: Lead Architect)
**Re:** Status follow-up — `/api/public/price-history/aggregate` endpoint (originally filed 2026-04-20)
**Priority:** P1 (Phase 1c blocker, deadline 2026-05-04)

---

## Original ask (recap)

Filed in `seo-audit-week-2026-04-20.md` §7. Aggregation endpoint required for `/best-time-to-buy/[category]` programmatic pages (Phase 1c, 8 pages). Spec:

```
GET /api/public/price-history/aggregate?category=nfl&group_by=days_until_event
→ {
    success: true,
    data: {
      category: 'nfl',
      sampleSize: 1234,
      points: [
        { daysUntilEvent: 180, priceIndex: 100 },
        { daysUntilEvent: 90, priceIndex: 104 },
        { daysUntilEvent: 30, priceIndex: 112 },
        { daysUntilEvent: 7, priceIndex: 94 },
        { daysUntilEvent: 1, priceIndex: 87 }
      ],
      bestWindow: { min: 7, max: 14, savingsPct: 16 },
      worstWindow: { min: 30, max: 45, savingsPct: -12 }
    }
  }
```

Backed by `price_history` table aggregation. Daily-refreshed cache acceptable.

## Status as of 2026-04-27

Per Content Agent's 2026-04-27 handoff: "**Blocked** on backend price-history endpoint. **No movement.**"

This is week 1 with no status reply on the original ask. **First follow-up.**

## What I need to know

Three options, ranked by what unblocks Phase 1c fastest:

1. **In progress, will land by 2026-05-04.** → No action; SEO plan stays on track. Phase 1c ships 2026-05-22 as scheduled.
2. **Not started but doable in the 2026-04-27 → 2026-05-04 window.** → Need a name + ETA reply by EOD Tuesday 2026-04-28. We can still hit Phase 1c ship date.
3. **Blocked or deprioritized.** → Phase 1c slips out of Q2. SEO Agent will re-plan around it; need to know now so I'm not briefing Content Agent for content that we won't ship.

## Reduced-scope fallback (if option 2 isn't feasible)

If a full aggregation endpoint is too much work in a week, a stripped-down version unblocks 80% of the value:

```
GET /api/public/price-history/aggregate?category=nfl
→ {
    success: true,
    data: {
      category: 'nfl',
      sampleSize: [number],
      bestWindow: { min: [int], max: [int], savingsPct: [int] },
      worstWindow: { min: [int], max: [int], savingsPct: [int] }
    }
  }
```

(No `points` array; we visualize the data with hard-coded illustrative bands instead of a real chart.) **This isn't ideal** — the chart-driven visualization is a content-quality win on `/best-time-to-buy/[category]` — but it's better than slipping the whole tier.

## Why this matters now

- World Cup is at 45 days. Phase 1b (10 country pages) ships 2026-05-15 with 4 weeks of indexation runway.
- Phase 1c (8 best-time-to-buy pages) is the **second pillar** of Tier 1. It's evergreen content, not WC-tied — so it doesn't share the WC deadline pressure — but it does share the launch window. Shipping all 20 Tier 1 pages within 3 weeks of each other gives Google a coherent "this site grew 18% in three weeks" signal that supports the whole cluster. Spreading them across 6+ weeks dilutes the signal.
- Phase 1c's content briefs (Content Agent Ask 4) are blocked until the data shape is known.

## Reply needed

EOD Tuesday 2026-04-28. If silent through Wednesday, I'll re-escalate to Lead Architect (CC'd) and the next weekly audit will list Phase 1c as Q3 deferred.

---

*Bonus: when this endpoint lands, please also tag me — there's a downstream content brief for the data narrative that's blocked on knowing the actual numbers (e.g., is the "best window for NFL" actually 7-14 days, or 21-28? The copy template needs the real figure.)*
