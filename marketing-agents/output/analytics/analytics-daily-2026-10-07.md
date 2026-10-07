# TicketScan Daily Dashboard — 2026-10-07

Internal analytics report. Counts are from the deployed admin API unless noted. Calendar-day comparisons use UTC dates; the API's rolling `usersToday`/`usersThisWeek` fields are also reported where useful.

## Key Metrics (calendar day)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.4 | ↓ |
| Watchlist Items Added | 0 | 0 | 0.3 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.0 | → |
| Price Alerts Triggered | N/A | N/A | N/A | — |
| Drip Emails Sent | 0* | 0* | 0* | → |

`7-Day Avg` is the Oct 1–7 calendar total divided by seven. Signup total was 3 and watchlist-add total was 2. The activity endpoint exposes only the 20 most recent activity records, so these event counts are subject to that API limitation; no activity was present for Oct 6–7.

\* `/api/admin/drip-stats` returned an empty sent-statistics array. This is treated as zero observed sends, not proof that delivery infrastructure is healthy.

## Totals

- Total registered users: **264**
- Total active watchlist items: **256**
- Total newsletter subscribers (active): **6**
- Total price history records: **202** returned with `limit=10000`; latest record is **2026-07-24 20:01 UTC**. No price record exists in the reporting week.

## Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No GA4/Search Console/ads reporting endpoint is connected to this agent. GTM loading alone does not provide source or visitor counts.

## Top Pages (24h)

Unavailable. No page-view or bounce-rate dataset is exposed through the current admin API.

## Popular Events Being Tracked

The API returned a five-way tie at 2 watchlist rows each:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2

These are watchlist rows, not price-tracking records.

## 🚨 Anomalies & Alerts

- **Conversion tracking is not validated:** GTM container `GTM-T476F9S4` loaded on `/`, `/dashboard`, `/watchlist`, and `/newsletter`, but no explicit `dataLayer.push` conversion events for signup, watchlist add, comparison, newsletter subscribe, or outbound click were found in the deployed JavaScript bundle. See the tracking validation log.
- **Price tracking remains down:** latest price history is July 24, 2026. Do not use price-history, price-alert, trend, or buy/wait/hold claims in public marketing.
- **Alerts endpoint is broken:** `/api/admin/alerts` returns `{success:false,error:"Failed to get alerts"}`. The stats endpoint reports 0 triggered alerts, but 24-hour alert activity cannot be verified.
- **Drip delivery requires investigation:** drip stats are empty and 20 pending users were returned, including users at or beyond the scheduled send windows. The campaign still contains price-alert messaging and should not be promoted publicly while price tracking is down.
- **Low recent activity:** 0 signups and 0 watchlist additions on both Oct 6 and Oct 7; the prior seven-day comparison was 6 signups and 2 watchlist additions.

## Competitor quick check

- SeatGeek's newsroom currently highlights **Ask SeatGeek**, a conversational AI search launch announced Aug 26, 2026, and a Manchester City ticketing technology partnership announced Sep 17. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom) · [Ask SeatGeek announcement](https://seatgeek.com/press/seatgeek-launches-ask-seatgeek-bringing-conversational-ai-search-to-its-marketplace)
- No material new StubHub feature or promotion was confirmed in the quick check. [StubHub newsroom](https://newsroom.stubhub.com/)
- No material Vivid Seats product announcement was confirmed. Third-party coupon pages were not treated as verified promotions.

## Source and method notes

- Admin endpoints queried: `stats`, `users?limit=1000`, `watchlist?limit=1000`, `newsletter?limit=1000`, `alerts`, `activity`, `popular-events`, `drip-stats`, and `price-history?limit=10000`.
- No write or posting endpoints were called.
- The requested `analytics-tracking` skill is not installed in this workspace; validation was performed by fetching the deployed HTML and JavaScript directly.
