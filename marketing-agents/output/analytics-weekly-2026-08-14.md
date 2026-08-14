# TicketScan Weekly Report — Week of 2026-08-08

**Prepared:** 2026-08-14 UTC  
**Data basis:** live/admin snapshots and repository inspection available in the workspace. Visitor, pageview, channel, comparison, paid-media, and email-engagement metrics are **N/A** because the current product does not expose them. Product totals below are the latest verified snapshot, not a complete event export.

## Executive Summary

- Registered users reached **212** from 200 last Friday (+6.0%); the current seven-day cohort contains **12 signups**.
- Activation is mixed: **124 users have at least one watchlist item** (58.5%), while **7 of the 12 newest users remain unactivated**. The first-value/onboarding path is the clearest growth opportunity.
- Watchlist rows reached **209** from 203 (+3.0%), but **0 rows has a target price**. The alert loop is not active.
- Price history remains stale after **2026-07-24 20:01 UTC** and `/api/admin/alerts` is still failing. Do not publish live price movement or alert claims.
- GTM is present, but named conversion events, UTM persistence, and session-level reporting remain unverified; no defensible channel or funnel winner can be named.

## Growth Metrics

| Metric | This Week | Last Week | WoW Change | MoM Change |
|---|---:|---:|---:|---:|
| Unique Visitors | N/A | N/A | N/A | N/A |
| New Signups | 12 rolling 7-day cohort | 4 observed snapshot delta* | Directional increase | N/A |
| Total Registered Users | 212 | 200 | +6.0% | +8.7% vs. Jul 31 (195) |
| Watchlist Items Added | 6 net rows* | 4 net rows* | +50.0%* | +5.6% vs. Jul 31 (198) |
| Active Watchlist Users | 124 | 117 | +6.0% | +8.8% vs. Jul 31 (114) |
| Price Comparisons | N/A | N/A | N/A | N/A |
| Newsletter Subscribers | 4 active | 4 active | 0% | +33.3% vs. Jul 31 (3) |
| Price Alerts Triggered | 0 reported; detail endpoint broken | 0 reported; endpoint broken | Unverified | Unverified |

\* Net snapshot movement, not a complete event-level count. The signup comparison uses incompatible snapshot windows and is directional only.

## Funnel Conversion Rates

| Step | This Week | Last Week | Change |
|---|---:|---:|---:|
| Visit → Search | N/A | N/A | N/A |
| Search → Compare | N/A | N/A | N/A |
| Compare → Signup | N/A | N/A | N/A |
| Signup → Watchlist Add | 5/12 = 41.7% new-cohort activation proxy | 6/6 = 100% prior observed cohort proxy | -58.3 pp* |
| Watchlist → Return Visit | N/A | N/A | N/A |

\* Cohorts are snapshot-derived and should not be treated as a production conversion rate until signup, session, and watchlist events are stored.

## Traffic by Channel

| Channel | Visitors | Signups | Conversion | Quality conclusion |
|---|---:|---:|---:|---|
| Organic | N/A | N/A | N/A | Cannot rank |
| Direct | N/A | N/A | N/A | Cannot rank |
| Paid | N/A | N/A | N/A | Hold scaling until attribution works |
| Social | N/A | N/A | N/A | UTM capture absent |
| Email | N/A | N/A | N/A | Open/click telemetry absent |
| Referral | N/A | N/A | N/A | Referral attribution absent |

## Content Performance

Top pages, top-converting pages, and high-traffic/low-conversion pages are **N/A**. No pageview or conversion export is available. Watchlist demand signals remain non-traffic proxies: Harry Styles, Backstreet Boys, Ariana Grande, Noah Kahan, and Bruno Mars are the strongest repeated event-name clusters in the latest available data.

## Event Trends

- Most repeated watchlist clusters: Harry Styles, Backstreet Boys, Ariana Grande, Noah Kahan, and Bruno Mars.
- Latest popular-events results include Noah Kahan at Kia Center and Citi Field, Harry Styles at Madison Square Garden, Flyleaf at House of Blues Chicago, and Ariana Grande at Barclays Center, generally tied at two watches.
- The current data cannot establish biggest price movements because price history stopped on July 24. Treat upcoming-event queue items in `watchlist-digest-2026-08-14.md` as demand signals only.

## Email Performance

- Active newsletter subscribers: **4**. Opens, clicks, bounces, unsubscribes, and conversions are N/A.
- Drip delivery: no reliable sent-statistics rows are exposed; the endpoint’s pending list is capped and is not a delivery log.
- Price-alert engagement: unmeasurable; no verified alert history or click events.

## Paid Media Summary

Spend, CPA, ROAS, campaign ranking, and platform-level conversion data are **N/A**. Do not scale paid acquisition into an unmeasured activation and alert loop.

## Key Insights

1. **Acquisition is ahead of activation.** Twelve recent signups produced only five users with a watchlist item, leaving seven users for a targeted first-value intervention.
2. **The product’s core promise is currently unprovable.** Zero target prices, stale price history, and a broken alerts endpoint prevent a trustworthy “track and notify” experience.
3. **Vivid Seats raises the transparency bar.** Its public offer combines all-in pricing, Buyer Guarantee, Rewards, and a lowest-price guarantee. TicketScan should win on neutral multi-market context, but only after data freshness and instrumentation are restored.

## Recommendations for Next Week

- **Content team:** Publish the Vivid Seats comparison page and an all-in-price methodology explainer; label all examples with timestamp and source.
- **SEO team:** Target “Vivid Seats alternative,” “compare Vivid Seats vs StubHub,” and “ticket fees explained,” linking to `/compare` and the comparison spec.
- **Paid team:** Keep conversion spend on hold; after event/UTM QA, test comparison-intent search at controlled budget.
- **Email team:** Suppress test/API-test records, add provider delivery events, and delay price-movement sends until the feed is current.
- **CRO team:** Ship the one-CTA post-signup checklist: Find event → Add to watchlist → Set target price; test against the current empty state.
- **Growth team:** Segment the seven unactivated users in the current cohort for a 24-hour activation nudge; do not call them churned.
- **Engineering:** P0 repair `/api/admin/alerts` and investigate the tracker outage; P1 add named events, UTM persistence, and daily metric snapshots.

## Deliverables and Handoffs

- [Customer behavior analysis](customer-behavior-2026-08-14.md)
- [Vivid Seats competitor deep-dive](competitor-vivid-seats-2026-08-14.md)
- [Tracking audit](tracking-audit-2026-08-14.md)
- [Comparison page spec](compare-ticketscan-vs-vivid-seats-spec-2026-08-14.md)
- [Channel recommendations](channel-recommendations-2026-08-14.md)
