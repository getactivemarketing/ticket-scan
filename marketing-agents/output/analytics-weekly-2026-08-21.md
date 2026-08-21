# TicketScan Weekly Report — Week of 2026-08-15

**Prepared:** 2026-08-21 UTC  
**Data basis:** production admin snapshot and repository/live-site inspection on 2026-08-21. N/A means the system does not currently expose the metric; it is not zero.

## Executive Summary

- Registered users reached **228**; the rolling seven-day cohort is **16 users**. Watchlist rows total **221**.
- Activation is the main measurable opportunity: **0/221 watchlist rows has a target price**, so the alert loop is not producing a usable signal.
- The price feed remains stale at **2026-07-24 20:01 UTC**, and `/api/admin/alerts` is not reliable. Do not publish current price-movement or alert-performance claims.
- GTM is installed site-wide, but named conversion events, UTM persistence, traffic reporting, and pageview reporting are not verifiable.
- Gametime is a strong last-minute marketplace competitor; TicketScan’s defensible wedge remains neutral, multi-market pre-purchase intelligence once freshness and instrumentation are restored.

## Growth Metrics

| Metric | This Week | Last Week | WoW Change | MoM Change |
|---|---:|---:|---:|---:|
| Unique Visitors | N/A | N/A | N/A | N/A |
| New Signups | 16 rolling 7-day | 16 rolling 7-day* | 0%* | N/A |
| Total Registered Users | 228 | 212 | +7.5% | +16.9% vs. Jul 31 |
| Watchlist Items Added | 11 net rows* | 6 net rows* | +83.3%* | +11.6% vs. Jul 31 |
| Active Watchlist Users | N/A; 221 rows total | 124 last verified | N/A | N/A |
| Price Comparisons | N/A | N/A | N/A | N/A |
| Newsletter Subscribers | 4 active | 4 active | 0% | +33.3% vs. Jul 31 |
| Price Alerts Triggered | 0 reported; detail endpoint unreliable | 0 reported | Unverified | Unverified |

\* Snapshot-derived directional proxy, not a complete event-level export. The current daily dashboard reports 1 watchlist add in the latest 24h and 1.6/day over Aug 14–20.

## Funnel Conversion Rates

| Step | This Week | Last Week | Change |
|---|---:|---:|---:|
| Visit → Search | N/A | N/A | N/A |
| Search → Compare | N/A | N/A | N/A |
| Compare → Signup | N/A | N/A | N/A |
| Signup → Watchlist Add | N/A; no cohort event series | 41.7% proxy | N/A |
| Watchlist → Return Visit | N/A | N/A | N/A |

## Traffic by Channel

Organic, direct, paid, social, email, and referral visitors/conversions are all **N/A**. No channel-quality winner can be named. UTM fields are not persisted in the reviewed signup/watchlist path.

## Content Performance

Top pages, top-converting pages, and high-traffic/low-conversion pages are **N/A** because no pageview or conversion export is available. The strongest available demand proxy is watchlist clustering: Noah Kahan, Flyleaf, World Cup Round of 16 Match 93, and Ariana Grande each have two rows in the latest popular-events result. These are not traffic rankings.

## Event Trends

- Current leaders are tied at two watches: Noah Kahan at Kia Center, Flyleaf at House of Blues Chicago, World Cup Match 93 at AT&T Stadium, and Ariana Grande at Barclays Center.
- Price movements cannot be computed because the newest price-history row is July 24.
- Sixteen new users in the rolling seven-day window is a stable acquisition signal, but only watchlist creation—not comparison or return behavior—is observable.

## Email Performance

- Active newsletter records: **4**; sources include site-footer, homepage, test, and api-test.
- Drip sent rows: **0 reported**; opens, clicks, deliveries, bounces, complaints, and conversions are unavailable.
- Price-alert engagement: unmeasurable; target-price coverage is zero and alert detail is failing.

## Paid Media Summary

Spend, CPA, ROAS, and campaign ranking are **N/A**. Keep conversion-focused spend controlled until UTMs and conversion events are live.

## Key Insights

1. **The acquisition-to-activation gap is widening.** User growth is visible, but the product’s highest-value action—setting a target price—has zero recorded adoption.
2. **Freshness is the product trust dependency.** A four-hour tracker design with a July 24 last row cannot support recommendations, alerts, newsletters, or paid landing-page claims.
3. **Gametime owns urgency; TicketScan should own context.** Compete on “check the market before you buy,” not on checkout, guarantees, or last-minute inventory.

## Recommendations for Next Week

- **Content:** Ship the Gametime comparison page and a transparent “all-in ticket price check” explainer with timestamps and source labels.
- **SEO:** Target “Gametime alternative,” “Gametime vs SeatGeek,” “last-minute ticket prices,” and “ticket fees explained.”
- **Paid:** Hold scale; run only a small QA campaign after event/UTM validation.
- **Email:** Keep price-movement messaging gated on fresh data; add delivery/provider telemetry and exclude test records.
- **CRO:** Make target price a required or strongly prompted second step after watchlist creation; measure completion.
- **Growth:** Message the 16-user new cohort for first watchlist/target-price activation; do not label users churned without return events.

## Handoffs

- [Customer behavior analysis](customer-behavior-2026-08-21.md)
- [Gametime competitor deep-dive](competitor-gametime-2026-08-21.md)
- [Tracking audit](tracking-audit-2026-08-21.md)
- [Comparison page spec](compare-ticketscan-vs-gametime-spec-2026-08-21.md)
- [Channel recommendations](channel-recommendations-2026-08-21.md)

