# TicketScan Daily Dashboard — 2026-08-26

Reporting window: **2026-08-25 06:30 UTC–2026-08-26 06:30 UTC**. Yesterday is the preceding 24-hour window. Seven-day averages use the rolling seven-day window ending at the reporting cutoff. The admin activity feed currently exposes signup and watchlist activity only; visitor, pageview, source, comparison, and bounce metrics are unavailable.

## Headline

**Signup pace is healthy; measurement and price intelligence are not.** The latest window produced 4 signups and 5 watchlist adds—signups are 40% above the 7-day average, while watchlist adds are 55% below yesterday’s burst. The platform still cannot validate conversion events, attribution, or current price movement.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | **4** | 4 | 2.86 | ↑ (+40%) |
| Watchlist Items Added | **5** | 11 | 3.43 | ↑ (+46%) |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.14 | ↓ (-100%) |
| Price Alerts Triggered | 0 reported | N/A | N/A | — |
| Drip Emails Sent | 0 reported | 0 reported | 0 reported | → |

Trend compares today with the 7-day average. A reported zero is not treated as a validated zero when the supporting endpoint is failing or not instrumented.

## Totals

- Total registered users: **243**
- Total active watchlist items: **243** (**0 have a target price**)
- Total newsletter subscribers (active): **5**
- Total price history records: **50**
- Total triggered alerts: **0 reported**; `/api/admin/alerts` returns `Failed to get alerts`
- Total favorites: **1**

## Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No GA4/GTM event export, UTM persistence, or source-attribution report is exposed by the application or admin API.

## Top Pages (24h)

1. N/A — pageviews and bounce rate unavailable
2. N/A — pageviews and bounce rate unavailable
3. N/A — pageviews and bounce rate unavailable
4. N/A — pageviews and bounce rate unavailable
5. N/A — pageviews and bounce rate unavailable

## Popular Events Being Tracked

The endpoint returned a five-way tie at 2 watches:

1. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando — 2 watches
2. **Flyleaf with Lacey Sturm - 20th Anniversary Tour** — House of Blues Chicago, Chicago — 2 watches
3. **World Cup Round of 16: W83 vs. W84 (Match 93)** — AT&T Stadium, Arlington — 2 watches
4. **Ariana Grande - The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2 watches
5. **Noah Kahan: The Great Divide Tour** — Citi Field, Queens — 2 watches

The endpoint ranks event IDs separately, so the two Noah Kahan rows may represent separate venue listings rather than distinct demand.

## Competitor Quick Check

- No verified first-party feature launch, major price change, or official promotion was found for SeatGeek, StubHub, or Vivid Seats in the current quick check.
- Search results were dominated by third-party ticket-deal and discount coverage, not attributable product announcements. Treat this as **no verified signal**, not proof that competitors made no changes.
- Evidence snapshot: `.firecrawl/search-competitor-2026-08-26.json`; official-source searches returned no results.

## 🚨 Anomalies & Alerts

- **Critical instrumentation gap:** visitors, traffic sources, UTM capture, top pages, bounce rate, and price-comparison events are unavailable. GTM is present in the root layout, but explicit conversion pushes are absent from the frontend.
- **Price-tracking outage/staleness:** the newest price-history row is **2026-07-24 20:01 UTC**, despite the documented four-hour schedule. Current price or buy-timing claims should not be made.
- **Alerts endpoint failure:** `/api/admin/alerts` fails with `Failed to get alerts`; the stats endpoint’s zero cannot be independently validated.
- **Activation gap:** all 243 watchlist rows have `target_price = null`, so the target-price alert path is currently unused.
- **Drip reporting gap:** `/api/admin/drip-stats` returns an empty sent-statistics array; no drip sends are verifiable.
- **Watchlist volatility:** today’s 5 adds are below yesterday’s 11, though still above the 7-day average. Only three distinct user emails appear in today’s activity window.

## Feed Notes for Other Agents

- Content/Social: use Noah Kahan, Flyleaf, World Cup, Ariana Grande, and Harry Styles as current tracked-event signals; avoid interpreting tied rows as unique franchises without deduplication.
- SEO/Paid/CRO: organic, paid, source, page, comparison, and funnel metrics are not decision-grade until event telemetry is queryable.
- Email: active subscriber base is **5**; no new subscriber was observed in the latest 24-hour window.
- Growth: 20 signups and 24 watchlist adds were observed in the rolling seven-day feed; treat this as an application-activity sample, not full-funnel traffic.

## Data Sources and Limitations

- Admin endpoints queried with the required `x-admin-key`: stats, users, watchlist, newsletter, activity, popular-events, drip-stats, price-history, and alerts.
- Raw response snapshots are in `marketing-agents/output/analytics/raw-*.json`.
- Requested `analytics-tracking` skill was unavailable in this environment; validation used source inspection plus a live homepage fetch. See [tracking-validation-2026-08-26.md](tracking-validation-2026-08-26.md).
