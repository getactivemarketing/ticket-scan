## TicketScan Daily Dashboard — 2026-08-19

Measurement window: 2026-08-18 06:00–2026-08-19 06:00 UTC. “Unavailable” means the current admin API or repository instrumentation does not expose a reliable value; it is not a zero.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | Unavailable | Unavailable | Unavailable | — |
| New Signups | 1 | 4 | 2.1 | ↓ |
| Watchlist Items Added | 0 | 4 | 1.6 | ↓ |
| Price Comparisons Run | Unavailable | Unavailable | Unavailable | — |
| Newsletter Subscribers | 0 | 0 | 0 | → |
| Price Alerts Triggered | 0* | 0* | 0* | → |
| Drip Emails Sent | 0 | 0 | 0 | → |

\* The stats endpoint reports zero triggered alerts, but `/api/admin/alerts` currently returns `Failed to get alerts`; treat the alert metric as provisional until that endpoint is repaired.

### Totals

- Total registered users: **223**
- Total active watchlist items: **219**
- Total newsletter subscribers (active): **4**
- Total price history records: **202**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | Unavailable | Unavailable | Unavailable |
| Direct | Unavailable | Unavailable | Unavailable |
| Social | Unavailable | Unavailable | Unavailable |
| Paid | Unavailable | Unavailable | Unavailable |
| Email | Unavailable | Unavailable | Unavailable |
| Referral | Unavailable | Unavailable | Unavailable |

The admin API exposes no visitor, referrer, UTM, or source-attributed signup data.

### Top Pages (24h)

Unavailable. No pageview or bounce-rate report is exposed by the admin API.

### Popular Events Being Tracked

Top rows returned by `/api/admin/popular-events` (all counts are database watchlist counts):

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — **2 watches**
2. Harry Styles: Together, Together — Madison Square Garden, New York — **2 watches**
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago — **2 watches**
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — **2 watches**
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — **2 watches**

The endpoint returns event instances rather than a normalized artist/event roll-up, so repeated tour names remain separate.

### 🚨 Anomalies & Alerts

- **Critical data gap:** latest price-history record is `2026-07-24T20:01:07Z`; no records are visible for roughly 25 days. Price tracking, recommendations, and alert eligibility may be stale.
- **Tracking endpoint failure:** `/api/admin/alerts` returns HTTP 500 / `Failed to get alerts`, preventing alert-history verification.
- **Conversion instrumentation gap:** GTM container `GTM-T476F9S4` is present site-wide, but the repository contains no named `dataLayer.push` conversion events for signup, watchlist add, price comparison, newsletter subscribe, or UTM capture.
- New signups are **53% below yesterday** (1 vs 4) and approximately **53% below the 7-day average** (1 vs 2.1).
- Watchlist adds are **100% below yesterday** (0 vs 4) and below the 7-day average (1.6).
- Active newsletter base is only **4**, with no new subscribers in the window.
- Drip stats are empty: no sent-email records are currently reported.

### Tracking Validation

- GTM loading: **Pass in source review** — root layout injects `https://www.googletagmanager.com/gtm.js?id=GTM-T476F9S4` and the noscript iframe on every app route.
- Signup event: **Unverified / likely missing** — registration calls the API, but no local dataLayer event exists.
- Watchlist-add event: **Unverified / likely missing** — `EventCard` calls the API, but no local dataLayer event exists.
- Price-comparison event: **Unverified / likely missing** — compare page calls the API, but no local dataLayer event exists.
- Newsletter-subscribe event: **Unverified / likely missing** — `NewsletterSignup` posts to the API, but no local dataLayer event exists.
- New-page coverage: **GTM source coverage passes globally**; live browser tag firing was not available in this run.
- UTM capture: **Not implemented in repository** — no UTM persistence or dataLayer mapping found.

### Competitor Activity Notes

- SeatGeek’s current blog is emphasizing event/venue guides, last-minute buying advice, and fan planning. It also reports an earlier 2026 ChatGPT app launch, making conversational ticket discovery a notable product benchmark. [SeatGeek blog](https://seatgeek.com/blog) · [SeatGeek ChatGPT launch](https://seatgeek.com/press/SeatGeek%20Launches%20in%20ChatGPT)
- StubHub’s late-July newsroom activity highlights group ticket buying, FanProtect education, and major sports/event partnerships. Its August 12 Q2 release reported $3.1B in GMS and $573.1M revenue, useful context for competitor scale. [StubHub newsroom](https://newsroom.stubhub.com/) · [Q2 2026 results](https://finance.yahoo.com/markets/stocks/articles/stubhub-announces-second-quarter-2026-201500377.html)
- Vivid Seats has active August coupon/rewards messaging in consumer press, including a reported $20-off-$200 offer. Verify any offer before using it in TicketScan creative. [Condé Nast Traveler offer coverage](https://www.cntraveler.com/story/vivid-seats-promo-code)

### Agent Handoff

- Content: lean into Harry Styles, Noah Kahan, Ariana Grande, Flyleaf, and World Cup watchlist interest; avoid claiming live price movement until tracking resumes.
- SEO: organic landing-page performance is unavailable; repair GA/GTM event and pageview reporting before using traffic claims.
- Social/Paid: source-attributed traffic and conversion are unavailable; use platform-native reporting rather than inventing UTM results.
- Email/Growth/CRO: prioritize newsletter instrumentation and alert reliability; the 4-subscriber base and zero drip records are not enough for performance conclusions.
