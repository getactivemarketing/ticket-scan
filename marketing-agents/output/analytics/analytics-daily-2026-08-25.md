# TicketScan Daily Dashboard — 2026-08-25

Reporting window: **2026-08-24 06:00 UTC–2026-08-25 06:00 UTC**. “Yesterday” is the preceding 24-hour UTC window. Seven-day averages use the seven complete windows ending at the reporting cutoff. Visitor, attribution, pageview, bounce-rate, and comparison-event metrics are not exposed by the supplied admin API and are marked `N/A`.

## Headline

**A real activation spike, with a suspiciously broad instrumentation blind spot.** The latest window produced **4 new signups** and **11 watchlist adds**, up from 2 and 4 yesterday. One user account generated 9 of the 11 adds, so the volume is encouraging but concentrated. The platform remains unable to report visitors, sources, page performance, or comparison conversions, and price tracking is stale.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | **4** | 2 | 2.43 | ↑ (+65%) |
| Watchlist Items Added | **11** | 4 | 2.71 | ↑ (+306%) |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.14 | ↓ (-100%) |
| Price Alerts Triggered | 0 reported | N/A | N/A | — |
| Drip Emails Sent | 0 reported | N/A | N/A | — |

## Totals

- Total registered users: **239**
- Total active watchlist items: **238** (**all 238 have `target_price = null`**)
- Total newsletter subscribers (active): **5**
- Total price history records: **50**
- Total triggered alerts: **0** (the detail endpoint failed; count comes from `/api/admin/stats`)
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

The admin API exposes no GA/GTM event query, source breakdown, or UTM report.

## Top Pages (24h)

1. N/A — pageviews and bounce rate unavailable
2. N/A — pageviews and bounce rate unavailable
3. N/A — pageviews and bounce rate unavailable
4. N/A — pageviews and bounce rate unavailable
5. N/A — pageviews and bounce rate unavailable

## Popular Events Being Tracked

The endpoint returned a seven-way tie at 2 watches. The first five rows returned were:

1. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando — 2 watches
2. **Flyleaf with Lacey Sturm — 20th Anniversary Tour** — House of Blues Chicago — 2 watches
3. **World Cup Round of 16: W83 vs. W84 (Match 93)** — AT&T Stadium, Arlington — 2 watches
4. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2 watches
5. **Noah Kahan: The Great Divide Tour** — Citi Field, Queens — 2 watches

Harry Styles, additional World Cup, and additional Flyleaf listings also tied at 2; the endpoint ranks separate event IDs separately.

## Competitor Quick Check

- **SeatGeek:** Its official blog is actively publishing timely August 2026 fan guides, including NBA onsale guidance, concert presale guides, and venue/event guides. [SeatGeek blog](https://seatgeek.com/blog)
- **StubHub:** Its newsroom is promoting consumer-facing trust/guarantee education, including a ticket-guarantees explainer dated August 20, 2026, plus a Spektrix arts-venue partnership dated August 19. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** No verified first-party product launch or promotion surfaced in this quick check. Third-party coupon coverage exists, but it is not treated as an official Vivid campaign.

## 🚨 Anomalies & Alerts

- **High-priority tracking gap:** Unique visitors, traffic sources, UTM capture, top pages, bounce rate, and price-comparison events are unavailable. GTM is present in the app shell, but the frontend has no explicit `dataLayer.push` conversion events for signup, watchlist add, comparison, or newsletter subscription.
- **Price tracking outage/staleness:** `/api/admin/price-history` returns 50 records, but the latest is **2026-07-24 20:01 UTC**—more than a month before this report despite the documented four-hour cadence.
- **Alerts endpoint failure:** `/api/admin/alerts` returns `{ success: false, error: "Failed to get alerts" }`. Do not interpret the stats endpoint’s zero as a validated alert-detail result.
- **Concentrated watchlist spike:** 9 of today’s 11 watchlist adds came from `jordan.c.silberman@gmail.com`, all for Garth Brooks listings. Validate whether this is organic bulk tracking or test/import behavior.
- **Activation quality:** 4 signups generated 11 watchlist adds, but every watchlist item still has no target price; target-price alert setup is currently 0% of watchlist records.
- **Drip reporting gap:** `/api/admin/drip-stats` returned an empty sent-statistics array. No email sends are verifiable from this endpoint.

## Feed Notes for Other Agents

- Content/Social: current demand signals are Noah Kahan, Flyleaf, World Cup matches, Ariana Grande, and Harry Styles; Garth Brooks is the strongest fresh activity cluster.
- SEO/Paid/CRO: visitor, attribution, comparison, page-performance, and bounce metrics remain unavailable until event-level analytics are queryable.
- Email: active subscriber base is only 5; one new subscriber was recorded in the seven-day window, with none today.
- Growth: 17 users registered in the seven-day window; 19 watchlist records were added. Treat the latest spike as concentrated until another day confirms breadth.

