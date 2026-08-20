## TicketScan Daily Dashboard — 2026-08-20

**Reporting window:** 2026-08-19 06:00 UTC–2026-08-20 06:00 UTC  
**Data note:** Platform metrics come from the live admin API. Visitor, page, bounce, source, UTM, and comparison-event reporting is not available through the current API, so those fields are marked unavailable rather than estimated. Seven-day averages use the seven completed UTC calendar days before today.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | Unavailable | Unavailable | Unavailable | — |
| New Signups | 3 | 0 | 2.14 | ↑ |
| Watchlist Items Added | 0 | 0 | 1.57 | ↓ |
| Price Comparisons Run | Unavailable | Unavailable | Unavailable | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | Unavailable | Unavailable | Unavailable | — |
| Drip Emails Sent | 0 | 0 | 0.00 | → |

Signups came from three records on Aug 19. The API's `usersToday: 3` agrees with the UTC record count for this reporting window; the prior day's signup count was 0.

### Totals

- Total registered users: **226**
- Total active watchlist items: **219**
- Total newsletter subscribers (active): **4**
- Total price history records: **50 returned** (endpoint-reported total is capped/limited at 50; this is not a reliable lifetime total)
- Triggered alerts: **not independently verifiable**; `/api/admin/alerts` is failing

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | Unavailable | Unattributed | Unavailable |
| Direct | Unavailable | Unattributed | Unavailable |
| Social | Unavailable | Unattributed | Unavailable |
| Paid | Unavailable | Unattributed | Unavailable |
| Email | Unavailable | Unattributed | Unavailable |
| Referral | Unavailable | Unattributed | Unavailable |

No GA4/GTM reporting export or server-side UTM persistence is available to this agent.

### Top Pages (24h)

Unavailable. The current admin API exposes no page-view or bounce-rate data.

### Popular Events Being Tracked

The popular-events endpoint returns event instances, not a normalized event rollup. The strongest normalized watchlist signals are:

1. **Harry Styles: Together, Together** — 20 watchlist items across Madison Square Garden instances
2. **Backstreet Boys: Into The Millennium** — 11
3. **Ariana Grande - The Eternal Sunshine Tour** — 8
4. **Noah Kahan: The Great Divide Tour** — 7
5. **Bruno Mars - The Romantic Tour** — 6

The API's current top event instances at watch count 2 also include World Cup matches, Flyleaf, Harry Styles, Noah Kahan, Ariana Grande, and an NBA Finals listing.

### 🚨 Anomalies & Alerts

- **High — alert log broken:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). Stats reports 0 active/triggered alerts, but that cannot be independently validated.
- **Critical — price tracking stale:** `/api/admin/price-history` returned 50 records, with the newest record at **2026-07-24 20:01 UTC**. No August records are present; the four-hour tracker or its read path needs investigation.
- **High — measurement blackout:** visitor counts, traffic sources, top pages, bounce rates, comparison volume, and UTM attribution are unavailable. GTM presence is confirmed, but that is not equivalent to analytics collection.
- **High — conversion events unverified:** source inspection found API calls for signup, watchlist, compare, and newsletter flows but no explicit `dataLayer.push` conversion events for those actions.
- **Watch — activation gap:** all three Aug 19 signups had 0 watchlist items at the snapshot. This is a same-day activation signal, not yet a retention conclusion.
- **Watch — drip campaign inactive:** `/api/admin/drip-stats` reports no sent-email stats and 20 pending users; users at day 3+ remain at `last_email_sent: 0`.

### Competitor Activity

- **StubHub:** Axios reports that Sixers demand became the NBA's hottest ticket after the schedule release; searches were reported up more than 12× year over year. This is a useful demand-surge example for TicketScan's trend content. [Axios, Aug. 18, 2026](https://www.axios.com/local/philadelphia/2026/08/18/sixers-tickets-stubhub-demand-nba)
- **SeatGeek:** Its current August ticket pages emphasize interactive seat maps, Deal Score, price alerts, and upfront pricing. [SeatGeek August tickets](https://seatgeek.com/august-tickets)
- **Vivid Seats:** Current consumer coverage highlights August promo-code offers and its loyalty/rewards mechanics, including Double Stamp days. [Condé Nast Traveler, Aug. 2026](https://www.cntraveler.com/story/vivid-seats-promo-code)
- **Positioning implication:** keep leaning into same-seat cross-market comparison, all-in fee math, and evidence-based timing. Resellers are competing on convenience and promotions; TicketScan can be the skeptical friend checking the receipt.

### Feed to Other Agents

- **Content:** Harry Styles, Backstreet Boys, Ariana Grande, Noah Kahan, and Bruno Mars are the clearest current demand themes.
- **SEO:** organic/page performance is unavailable; do not infer landing-page winners from watchlist counts alone.
- **Social:** use the StubHub Sixers demand surge as a timely consumer-advocate angle, with attribution to the source.
- **Paid Ads:** no paid-source or conversion data is available; campaign optimization is blocked.
- **Email:** 4 active subscribers; 0 new subscribers in the window; drip stats show 20 pending and no sent rows.
- **CRO:** investigate the three signup → zero-watchlist journeys and add event instrumentation.
- **Growth:** 3 signups today versus a 2.14/day prior-week average; activation is the immediate quality check.

**Sources checked:** `/api/admin/{stats,users,watchlist,newsletter,alerts,activity,popular-events,drip-stats,price-history}`, live frontend route probes, and local frontend source inspection.
