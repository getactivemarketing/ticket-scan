## TicketScan Daily Dashboard — 2026-08-14

**Run time:** 2026-08-14 UTC  
**Data note:** Admin API data is authoritative for platform totals. The activity endpoint is capped at 20 records, and no admin endpoint exposes GA/GTM visitor, page, bounce, source, comparison, or UTM data. Missing values are marked unavailable rather than estimated.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | Unavailable | Unavailable | Unavailable | — |
| New Signups | 4 | 3* | 1.7 | ↑ |
| Watchlist Items Added | 0 | 1 | 0.9 | ↓ |
| Price Comparisons Run | Unavailable | Unavailable | Unavailable | — |
| Newsletter Subscribers | 0 | 0 | 0.0 | → |
| Price Alerts Triggered | 0 | 0 | 0.0 | → |
| Drip Emails Sent | 0 | 0 | 0.0 | → |

\* Yesterday and the 7-day watchlist/signup breakdown are calculated from the paginated users/watchlist endpoints using UTC calendar days. The `/api/admin/stats` `usersToday` value is 4; the user records currently visible for 2026-08-14 contain one signup, indicating a server-timezone or endpoint-window mismatch that should be resolved.

### Totals

- Total registered users: **212**
- Total active watchlist items: **209**
- Total newsletter subscribers (active): **4**
- Price history records: **50 returned by the admin endpoint** (the endpoint reports page size, not the database total; latest returned record: 2026-07-24)

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | Unavailable | Unavailable | Unavailable |
| Direct | Unavailable | Unavailable | Unavailable |
| Social | Unavailable | Unavailable | Unavailable |
| Paid | Unavailable | Unavailable | Unavailable |
| Email | Unavailable | Unavailable | Unavailable |
| Referral | Unavailable | Unavailable | Unavailable |

### Top Pages (24h)

Unavailable. No page-view or bounce-rate data is exposed by the admin API, and the GTM/analytics reporting layer was not accessible from this workspace.

### Popular Events Being Tracked

The API returns a tie-heavy list; the top five returned records all have two watches:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago — 2 watches
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

World Cup matches also appear repeatedly in the broader top-20 response, so World Cup discovery remains a useful content angle even though no single match breaks the two-watch tie.

### 🚨 Anomalies & Alerts

- **Critical measurement gap:** GTM loads on the live homepage, but source inspection found no explicit `dataLayer.push` conversion events for signup, watchlist add, price comparison, or newsletter subscription. GTM container configuration and live event firing could not be verified here. See [tracking-validation-2026-08-14.md](tracking-validation-2026-08-14.md).
- **Data freshness gap:** The newest price-history record returned is 2026-07-24, despite the daily price-tracking job being expected every four hours. Investigate the cron/API integration before using price-trend content in campaigns.
- **Admin alerts endpoint failure:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). Stats reports zero active and triggered alerts, but the alert log itself cannot be independently validated.
- **Signup time-window mismatch:** `/api/admin/stats` reports 4 users today while UTC record filtering finds 1. Normalize the API's timezone/window definition.
- Drip campaign stats are empty; no sent emails are reported. There are pending users at days 3, 7, and 14, so verify the scheduler and SMTP delivery before the next run.

### Competitor Activity Notes

- SeatGeek is actively emphasizing transparent pricing, Deal Score, interactive seat maps, and price-drop updates in its current August 2026 ticket content. This reinforces TicketScan's consumer-advocate positioning: compare the same section across marketplaces and check all-in totals. [SeatGeek August 2026 tickets](https://seatgeek.com/august-tickets)
- StubHub announced conversational ticket discovery and purchase through Claude in April 2026, a meaningful discovery UX move rather than a pricing promotion. [StubHub launches on Claude](https://newsroom.stubhub.com/2026/04/23/stubhub-launches-on-claude/)
- Vivid Seats recently promoted a mobile-app upgrade featuring map discovery and venue-specific seat previews. This is relevant competitive pressure on our event discovery and seat context. [Vivid Seats app upgrade](https://www.linkedin.com/posts/vividseats_today-vivid-seats-has-introduced-an-upgrade-activity-7404170159025762304-AFMU)
- No verified, material competitor-wide pricing promotion was found in the quick check.

### Feed-Forward Notes

- **Content:** Use Noah Kahan, Harry Styles, Ariana Grande, and World Cup tracking as timely examples; lead with all-in price comparison and avoid unsupported live price claims.
- **SEO:** Organic landing-page performance is unavailable until GA/GTM reporting is connected to this agent.
- **Social:** No social-attributed traffic is measurable today; use the tied popular-event list for creative prioritization.
- **Paid/CRO:** Do not calculate CAC, ROAS, funnel conversion, or page-level CRO winners until conversion events and UTM capture are verified.
- **Email/Growth:** Subscriber base is 4 active; drip stats show no sends, and alert delivery cannot be validated.

