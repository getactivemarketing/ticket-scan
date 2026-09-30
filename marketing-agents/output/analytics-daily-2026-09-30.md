# TicketScan Daily Dashboard — 2026-09-30

Reporting window: **2026-09-29 00:00 UTC–2026-09-30 00:00 UTC**. The admin activity feed's newest record is 2026-09-28 20:01 UTC, so current-window zeros below are product-activity zeros, not evidence of zero site visitors. Seven-day averages use the available activity sample through the reporting cutoff.

## Headline

**The product has users, but the measurement layer is still flying blind.** The API reports 260 registered users, 254 watchlist items, and 6 active newsletter subscribers. The latest price-history record is July 24, so price intelligence and alert performance are not decision-grade. The only recent activity sample shows 5 signups and 2 watchlist adds in seven days, with no activity in the current window.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.71 | ↓ |
| Watchlist Items Added | 0 | 0 | 0.29 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 reported | N/A | N/A | — |
| Price Alerts Triggered | 0 reported; endpoint failing | N/A | N/A | — |
| Drip Emails Sent | 0 reported | 0 reported | 0 reported | → |

The signup and watchlist averages are based on 5 signup and 2 watchlist activity records in the available rolling seven-day feed. A reported zero is not treated as a validated zero when the underlying endpoint is unavailable or uninstrumented.

## Totals

- Total registered users: **260**
- Total active watchlist items: **254**
- Total newsletter subscribers (active): **6**
- Total price history records: **50**
- Total triggered alerts: **0 reported**, not independently validated
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

No GA4/GTM export, UTM persistence report, or source-attribution endpoint is exposed by the application.

## Top Pages (24h)

1. N/A — pageviews and bounce rate unavailable
2. N/A — pageviews and bounce rate unavailable
3. N/A — pageviews and bounce rate unavailable
4. N/A — pageviews and bounce rate unavailable
5. N/A — pageviews and bounce rate unavailable

## Popular Events Being Tracked

The endpoint returned a tie at 2 watches. It ranks separate event IDs separately, so these are inventory records rather than necessarily unique franchises:

1. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
2. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
3. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2 watches
4. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, New York — 2 watches
5. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches

World Cup Philadelphia listings, Noah Kahan, and Flyleaf also appear in the tied results. Deduplicate by normalized event name plus venue before using this as a demand ranking.

## Competitor Quick Check

- **SeatGeek:** launched **Ask SeatGeek**, a conversational AI search experience, on Aug. 26. It is a meaningful product signal: SeatGeek is positioning seat-level data and natural-language discovery as a marketplace feature. [SeatGeek announcement](https://seatgeek.com/press/seatgeek-launches-ask-seatgeek-bringing-conversational-ai-search-to-its-marketplace)
- **StubHub:** published a Sep. 28 explainer on why ticket prices fluctuate, emphasizing all-in pricing and real-time market dynamics. This is content/positioning activity, not a confirmed pricing change. [StubHub newsroom](https://newsroom.stubhub.com/2026/09/28/the-psychology-of-ticket-pricing-why-prices-fluctuate/)
- **Vivid Seats:** no verified Sep. 2026 feature launch or major promotion surfaced in the quick check.

## 🚨 Anomalies & Alerts

- **Critical tracking gap:** the live homepage loads GTM container **GTM-T476F9S4**, but source inspection found no explicit custom `dataLayer` pushes for signup, watchlist add, price comparison, or newsletter subscription. GTM presence is not conversion tracking.
- **Price-tracking outage/staleness:** `/api/admin/price-history` reports 50 rows, newest **2026-07-24 20:01:07 UTC**. The documented four-hour tracker is not producing current data.
- **Alerts endpoint failure:** `/api/admin/alerts` returns HTTP 500 with `Failed to get alerts`; the stats endpoint's zero cannot be independently validated.
- **Activation gap:** all returned watchlist rows have `target_price = null`; the target-price alert path appears unused.
- **Drip reporting gap:** `/api/admin/drip-stats` returns an empty sent-statistics array while listing pending users, so sends are not verifiable.
- **Low recent activity:** 0 signups and 0 watchlist adds in the current 24-hour window versus 5 and 2 respectively over the available seven-day sample. This could be a real lull or a timestamp/feed freshness issue.

## Feed Notes for Other Agents

- Content/Social: Harry Styles, Ariana Grande, NBA Finals, World Cup, Noah Kahan, and Flyleaf are the strongest current watchlist signals, but event IDs must be deduplicated.
- SEO/Paid/CRO: do not use traffic, landing-page, attribution, or funnel claims until GA4/GTM events are queryable.
- Email: active subscriber base is **6**; no new subscriber is verifiable in the current window.
- Growth: treat the 5 signup / 2 watchlist seven-day sample as application activity, not full-funnel demand.

## Data Sources and Limitations

- Queried with the required admin header: stats, users, watchlist, newsletter, alerts, activity, popular-events, drip-stats, and price-history.
- Live homepage fetch confirmed GTM container loading. Source inspection covered the frontend source tree; no explicit conversion-event pushes were found.
- The requested `analytics-tracking` skill is unavailable in this environment; the tracking validation fallback is documented in [analytics-tracking-validation-2026-09-30.md](analytics/analytics-tracking-validation-2026-09-30.md).
