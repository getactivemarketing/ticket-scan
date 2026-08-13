## TicketScan Daily Dashboard — 2026-08-13

**Run time:** 2026-08-13, UTC-based API snapshot  
**Data quality note:** The supplied admin API does not expose GA/GTM visitor, source, pageview, bounce-rate, comparison-event, or UTM reports. Those fields are marked **N/A**, not zero. Counts below use UTC calendar dates; Aug 13 is the current partial day.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | ? |
| New Signups | 0 | 3 | 1.14 | ↓ |
| Watchlist Items Added | 0 | 1 | 0.71 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | ? |
| Newsletter Subscribers | 0 observed | 0 observed | 0.00 | → |
| Price Alerts Triggered | 0 reported; endpoint failed | 0 reported; endpoint failed | 0 reported; endpoint failed | ? |
| Drip Emails Sent | 0 reported | 0 reported | 0 reported | → |

**Seven-day calculation window:** Aug 6–12, including zero-activity days. Signup counts were 0, 0, 2, 2, 1, 0, 3. Watchlist-add counts were 0, 0, 1, 2, 1, 0, 1. “Today” is not a complete day.

### Totals

- Total registered users: **208**
- Total active watchlist items: **208**
- Total newsletter subscribers (active): **4**
- Total price history records: **202**
- Active target-price alerts: **0 reported**
- Triggered price alerts: **0 reported**, but the detail endpoint is unhealthy

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No acquisition report or UTM persistence data is available through the current admin API.

### Top Pages (24h)

Not available. No pageview or bounce-rate feed is exposed by the current admin API.

### Popular Events Being Tracked

The popular-events endpoint returned a five-way top tier at **2 watches**. The first five rows are:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm — 20th Anniversary Tour — House of Blues Chicago — 2 watches
4. Ariana Grande: The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

The feed is event/date-level, so Noah Kahan appears twice and there is no single uncontested leader.

### Competitor Quick Check

- **SeatGeek:** Its newsroom lists the March 31 launch of its ChatGPT app and the May 19 “Game Day Your Way” product suite, connecting ticketing, entry, concessions, and payments for teams. These are notable product/AI distribution moves, though not new today. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom) · [ChatGPT launch](https://seatgeek.com/press/SeatGeek%20Launches%20in%20ChatGPT) · [Game Day Your Way](https://seatgeek.com/press/SeatGeek%20Launches%20Game%20Day%20Your%20Way)
- **StubHub:** The newsroom’s latest visible July items include group ticket buying, FanProtect education, World Racing Group, Chicago Stars FC, and summer event trends. No Aug 13 feature launch or promotion was confirmed in the quick check. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** No clearly dated current product launch was confirmed. A recent editorial comparison surfaced a first-time-customer $20-off-$200 code, but it is event-specific and should not be treated as a verified standing offer. TicketScan should keep leaning into all-in price comparison and buyer verification. [Example promotion coverage](https://www.syracuse.com/live-entertainment/2026/07/last-minute-tickets-for-usher-chris-brown-jma-dome-concert-start-as-low-as-90.html)

### 🚨 Anomalies & Alerts

- **Critical — price tracking stale:** The newest price-history record is July 24, 2026 at 20:01 UTC; no August records are present. The four-hour tracking job appears not to be writing current data.
- **Critical — alerts endpoint unhealthy:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The stats endpoint reports zero alerts, but the detail count and delivery state cannot be independently verified.
- **High — drip delivery unverified:** `/api/admin/drip-stats` returned an empty sent-statistics array while 20 users are pending eligibility. No sends are evidenced.
- **High — conversion tracking incomplete:** The available activity feed contains signup and watchlist records only. No comparison, newsletter-subscribe, or price-alert analytics events are exposed.
- **Medium — acquisition/page analytics unavailable:** Unique visitors, traffic sources, UTM capture, top pages, and bounce rate cannot be reported.
- **Medium — partial-day softness:** Aug 13 currently has no signup or watchlist activity, but this is an incomplete UTC day and should not be treated as a full-day decline.

### Agent Handoff

- **Content:** Use Noah Kahan, Harry Styles, Flyleaf, Ariana Grande, and World Cup/event comparison angles; demand is tied, so avoid declaring one event the winner.
- **SEO:** Organic landing-page performance is unavailable; do not infer SEO winners from popular-events data.
- **Social:** Social-attributed traffic and conversion are unavailable.
- **Paid Ads:** Hold performance conclusions until source/UTM reporting is restored.
- **Email:** Four active subscribers total; verify drip delivery before sending another campaign.
- **CRO:** Funnel conversion rates cannot be calculated from current instrumentation.
- **Growth:** Aug 12 produced 3 signups, above the 1.14 seven-day daily average; retention/churn signals remain unavailable.

