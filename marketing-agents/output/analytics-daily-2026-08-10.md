## TicketScan Daily Dashboard — 2026-08-10

Snapshot taken 2026-08-10. Admin API timestamps are UTC. “Today” below means 2026-08-09 00:00–23:59 UTC, the latest complete day available at run time.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 2 | 2 | 1.14 | → |
| Watchlist Items Added | 2 | 1 | 1.00 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | N/A | → |
| Price Alerts Triggered | 0 reported; endpoint failing | 0 reported; endpoint failing | N/A | ⚠ |
| Drip Emails Sent | 0 | 0 | N/A | → |

Notes: Signup and watchlist counts are derived from the authenticated admin activity/user/watchlist snapshots. Seven-day averages use complete UTC dates 2026-08-03 through 2026-08-09. Visitor, comparison, channel, pageview, and bounce data are not exposed by the current admin API. Drip stats returned an empty sent-statistics array.

### Totals

- Total registered users: **204**
- Total active watchlist items: **206**
- Total newsletter subscribers (active): **4**
- Total price history records visible: **202** (admin endpoint returns a limited snapshot, not a database count)

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GA4/GTM reporting is not connected to the admin dashboard, and UTM values are not persisted by the frontend.

### Top Pages (24h)

Unavailable. The admin API provides no pageview or bounce-rate data, and no local analytics export was available.

### Popular Events Being Tracked

The popular-events endpoint returned multiple event IDs tied at two watches. Top returned entries:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago — 2 watches
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

World Cup matches and additional Harry Styles, Flyleaf, Ariana Grande, and Noah Kahan dates also returned at two watches.

### 🚨 Anomalies & Alerts

- **P0 — Price tracking is stale:** newest `price_history` row is 2026-07-24 20:01:07 UTC, over two weeks old. The 4-hour tracking promise is not reflected in the database.
- **P0 — Alert reporting is broken:** `GET /api/admin/alerts` returns `{ success: false, error: "Failed to get alerts" }`, so the reported zero cannot be treated as a verified zero.
- **P1 — Conversion measurement gap:** no explicit signup, watchlist-add, price-comparison, or newsletter `dataLayer` event was found in `web/src`.
- **P1 — Attribution gap:** no UTM capture or persistence was found; all traffic-source and campaign conversion fields are unavailable.
- **P1 — Funnel visibility gap:** visitors, pageviews, comparisons, bounce rate, retention, and churn are not available through the current admin API.
- **P2 — Drip telemetry gap:** drip sent statistics are empty and there is no delivery/open/click telemetry.

### Competitor Quick Check

- **SeatGeek:** notable product positioning remains all-in pricing and Deal Score; its 2026 summer concert report is a useful demand signal. SeatGeek’s newsroom also lists its March 2026 ChatGPT launch and February Spotify discovery integration. See [all-in pricing](https://seatgeek.com/blog/seatgeek-all-in-pricing-explained-how-to-avoid-hidden-ticket-fees), [2026 concert report](https://seatgeek.com/press/SeatGeek%20Summer%20Concert%20Report%202026), and [newsroom](https://seatgeek.com/enterprise/newsroom).
- **StubHub:** the notable fresh item found was a July 30, 2026 strategic partnership with Chicago Stars FC, not a consumer pricing promotion. See the [StubHub newsroom](https://newsroom.stubhub.com/).
- **Vivid Seats:** no clearly new August 2026 consumer feature or promotion was verified in the quick check; its public positioning continues to emphasize its Buyer Guarantee and rewards/value messaging. See [Vivid Seats press](https://www.vividseats.com/press).

No competitor move found today changes TicketScan’s immediate priorities: restore price freshness, repair alert reporting, and instrument the funnel.

### Feed Status

This dashboard is written to `marketing-agents/output` and is ready for the other marketing agents. The companion tracking validation log is `tracking-validation-2026-08-10.md`.
