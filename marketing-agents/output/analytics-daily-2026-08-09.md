## TicketScan Daily Dashboard — 2026-08-09

**Run:** 2026-08-09, UTC. Admin API snapshot; “today” means 2026-08-09 00:00–06:00 UTC at collection time. Seven-day average covers 2026-08-02 through 2026-08-08 UTC. Traffic metrics require GA4/GTM reporting and are not exposed by the admin API.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 2 | 0.86 | ↓ |
| Watchlist Items Added | 2 | 1 | 0.71 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0* | 0* | N/A | → |
| Drip Emails Sent | 0 recorded | 0 recorded | N/A | → |

\* `/api/admin/stats` reports zero triggered alerts. `/api/admin/alerts` itself returned `Failed to get alerts`, so the alert figure needs backend repair before it can be treated as fully validated.

### Totals

- Total registered users: **203**
- Total active watchlist items: **206**
- Total newsletter subscribers (active): **4**
- Total price history records: **202** (latest record: 2026-07-24 20:01 UTC; no records since then)

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GA4 source/medium and UTM data are not available from the admin API or local application instrumentation.

### Top Pages (24h)

Unavailable: no page-view, visit, or bounce-rate dataset is exposed by the admin API. GTM is present in the HTML for all five spot-checked routes, but presence of the container does not prove that page-view tags are firing.

### Popular Events Being Tracked

Top five grouped records from `/api/admin/popular-events`:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — **2 watches**
2. Harry Styles: Together, Together — Madison Square Garden, New York — **2 watches**
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago — **2 watches**
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — **2 watches**
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — **2 watches**

### 🚨 Anomalies & Alerts

- **Watchlist adds are 180% above the seven-day daily average** (2 today vs. 0.71), driven by two additions from one new user. Useful activation signal, but too small a sample to call a trend.
- **Price tracking has a data gap:** the newest price-history record is 2026-07-24, despite 206 active watchlist records. Check the cron job, provider credentials, and scheduler logs before relying on price content.
- **Alert API failure:** `/api/admin/alerts` returns a 500-style failure while `/api/admin/stats` says zero triggered alerts. Investigate the endpoint/schema mismatch.
- **Conversion instrumentation is incomplete in source:** GTM bootstrap exists, but no explicit `dataLayer.push` calls or named conversion events were found for signup, watchlist add, comparison, newsletter signup, or UTM capture. Treat these events as unverified.
- **All 206 watchlist rows sampled from the endpoint had `target_price: null` in the recent records**, consistent with zero active alerts; verify whether the UI is setting target prices or whether this is an adoption problem.

### Competitor Quick Check

- SeatGeek’s current public materials highlight **Smart Pricing** for sellers and an AI-driven pricing/recommendation workflow; its newsroom also lists a ChatGPT launch (March 31, 2026) and Spotify concert-discovery integration (February 18, 2026). TicketScan’s comparison angle should emphasize independent cross-market checking rather than seller-side pricing automation. [SeatGeek Smart Pricing](https://support.seatgeek.com/hc/en-us/articles/50928255187603-What-is-Smart-Pricing), [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom)
- StubHub’s newsroom shows a July 30, 2026 strategic partnership with Chicago Stars FC. No clear consumer pricing change was surfaced in the quick scan. [StubHub newsroom](https://newsroom.stubhub.com/)
- Vivid Seats continues to promote all-in pricing and Rewards; no newly launched consumer feature was confirmed in this scan. [Vivid Seats all-in pricing](https://www.vividseats.com/blog/vivid-seats-goes-all-in-on-all-in-pricing), [Vivid Seats Rewards](https://www.vividseats.com/rewards)

### Handoff Notes

- Content/SEO: use the event list above, but do not claim traffic or content winners until GA4 reporting is connected.
- Social/Paid/Email/CRO/Growth: conversion, attribution, retention, and funnel metrics are currently unavailable; use signup/watchlist records only as directional product signals.
- Engineering priority: restore price tracking, repair `/api/admin/alerts`, and instrument named GTM conversion events with UTM persistence.

