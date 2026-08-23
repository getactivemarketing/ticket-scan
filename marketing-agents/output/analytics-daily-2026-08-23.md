## TicketScan Daily Dashboard — 2026-08-23

**Run window:** 2026-08-22 06:00 UTC–2026-08-23 06:00 UTC. **Collected:** 2026-08-23. Platform metrics came from the live admin API; visitor, page, comparison, and attribution metrics require GA4/GTM reporting access and are not exposed by the admin API.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 2 | N/A | 2.43/day | → |
| Watchlist Items Added | 0 | N/A | 1.14/day | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | N/A | 0.14/day* | → |
| Price Alerts Triggered | 0** | N/A | N/A | — |
| Drip Emails Sent | 0*** | N/A | N/A | — |

\* Based on one subscriber added in the trailing seven days; the API has no historical daily series.  
\*\* The stats endpoint reports zero triggered alerts, but `/api/admin/alerts` failed, so this number is provisional.  
\*\* Drip stats has no sent rows; 20 users are pending and the oldest eligible cohort is at day 8.

### Totals

- Total registered users: **233**
- Total active watchlist items: **223**
- Total newsletter subscribers (active): **4**
- Total price history records: **202**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GA4/source attribution is not available through the configured admin endpoints. No UTM capture could be verified from the frontend source.

### Top Pages (24h)

Unavailable: no page-view or bounce-rate report is exposed by the admin API.

### Popular Events Being Tracked

The popular-events endpoint returns ties at two watches; the first five records are:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — **2 watches**
2. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago — **2 watches**
3. World Cup Round of 16: W83 vs. W84 (Match 93) — AT&T Stadium — **2 watches**
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center — **2 watches**
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — **2 watches**

### Tracking Validation

- **GTM loading:** Present in `web/src/app/layout.tsx` with container `GTM-T476F9S4`, including the noscript iframe.
- **Signup event:** Not found in frontend source; backend activity records signups, but no client-side conversion push was found.
- **Watchlist-add event:** Not found as a client-side analytics push. Backend activity records watchlist additions.
- **Price-comparison event:** No analytics event found.
- **Newsletter-subscribe event:** No analytics event found.
- **UTM capture:** No UTM parsing or persistence found in the frontend source.
- **New-page coverage:** Root layout means GTM is inherited by App Router pages; dynamic event instrumentation is not present.

### 🚨 Anomalies & Alerts

- **CRITICAL — Price data stale:** latest price-history record is 2026-07-24 20:01 UTC, approximately 30 days old. The 4-hour tracking job is not producing current records.
- **CRITICAL — Alerts endpoint broken:** `/api/admin/alerts` returned `{"success":false,"error":"Failed to get alerts"}`. Alert reporting cannot be trusted until fixed.
- **HIGH — Drip delivery gap:** drip stats contains zero sent records, while users have reached the day-3/day-7 eligibility windows. Verify the scheduler and SMTP delivery before triggering a campaign.
- **HIGH — Conversion instrumentation gap:** the site loads GTM but no signup, watchlist, comparison, newsletter, or UTM events were found in the frontend source. GA4 cannot report the requested funnel reliably.
- **Watchlist activation:** 223 watchlist items across 233 users (~0.96 items/user); only 8 were added in the trailing seven days and none in the run window.

### Competitor Quick Check

- **SeatGeek:** its newsroom lists the March 2026 launch of SeatGeek in ChatGPT and February 2026 Spotify concert-discovery integration; no newer major product launch surfaced in the current check. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom)
- **StubHub:** reported Q2 2026 record GMS of $3.1B, revenue of $573.1M, and raised full-year GMS guidance; its newsroom also highlights recent partnerships. [StubHub Q2 results](https://investors.stubhub.com/news/news-details/2026/StubHub-Announces-Second-Quarter-2026-Results/default.aspx) · [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** reported Q2 2026 results citing sequential growth driven by World Cup demand. Third-party coverage also shows active August discount-code promotion activity; treat coupon details as campaign monitoring, not verified universal offers. [Vivid Seats Q2 results](https://www.globenewswire.com/news-release/2026/08/04/3338110/0/en/vivid-seats-reports-second-quarter-2026-results.html) · [Wired promotion coverage](https://www.wired.com/story/vivid-seats-promo-code/)

### Feed to Other Agents

- Content: use the tied popular-event list, but avoid live price claims until tracking freshness is restored.
- SEO: organic landing-page performance is unavailable; do not infer it from registrations.
- Social/Paid/Email: channel attribution and conversion data are unavailable.
- CRO/Growth: prioritize instrumentation repair, drip delivery verification, and watchlist activation.
