## Email Daily — 2026-08-15

Audit window: 2026-08-14 10:09 UTC to 2026-08-15 10:09 UTC. Production admin API checked read-only at 2026-08-15 10:09 UTC.

### Drip Campaign

- Emails sent (24h): **0 observed**
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0**
- Failures: **Not instrumented**. `/api/admin/drip-stats` exposes sent counts only; it returned `stats: []`.
- Pending users returned by the endpoint: **20** (the route caps this list at 20). All returned users have `last_email_sent: 0`; the oldest shown is at day 14.
- Campaign performance: **No open-rate or click-rate telemetry is exposed by the admin API.**

Operational note: I did **not** trigger `POST /api/admin/drip-run`; that endpoint sends email and this audit did not authorize a live send.

### Price Alerts

- Alerts triggered (24h): **0 observed**; platform stats report `triggeredAlerts: 0` overall.
- Events with drops: **None observable**.
- Delivery failures: **Unable to verify**. `GET /api/admin/alerts` returned HTTP 500 (`Failed to get alerts`).
- Price data freshness: the newest record from `GET /api/admin/price-history?limit=500` is **2026-07-24 20:01 UTC**, so no current price movement can be trusted for today’s digest.

### Subscriber Growth

- New subscribers: **0 today** (active list has 4 records; newest subscription is 2026-07-21). Sources today: **none**.
- Unsubscribes today: **0 observed**. All 4 subscriber rows are active; the endpoint exposes no unsubscribe event stream.
- Net: **0**
- Total active: **4**

### Platform Context

- Total users: **215**; users today: **3**
- Watchlist items: **214** across **126 users**
- Watchlist targets set: **0 of the 214 rows** (`target_price` is null throughout the returned dataset)
- Current price comparisons completed: **0 verifiable**

### Watchlist Digest Prep — ready for send after live price refresh

The API returned 214 watchlist items, but does not return current prices, prior comparison prices, or recommendation state. The price-history feed is stale and does not overlap with today’s active watchlist in a trustworthy way. Therefore, no `$X`, `$Y`, BUY NOW, HOLD, or DOWN/UP claims are populated below.

There are **18 watchlist items for 12 users with events between 2026-08-15 and 2026-08-29**. These are the urgency segment for a live refresh:

| Recipient | Event | Date | Venue | Digest treatment |
|---|---|---:|---|---|
| rebdav13@gmail.com | Noah Kahan: The Great Divide Tour | Aug 17 | Petco Park | Urgent: 2 days; refresh price before send |
| chungvungocminh@gmail.com | MAMAMOO 2026 US TOUR | Aug 18 | Dickies Arena | Urgent: 3 days; refresh price before send |
| taranimeramaro@gmail.com | Bruno Mars - The Romantic Tour | Aug 21, 22, 25 | MetLife Stadium | Three-date urgency cluster; refresh price before send |
| spcoog83@gmail.com | Olivia Dean: The Art Of Loving Live | Aug 25 | Toyota Center | Urgent: 10 days; refresh price before send |
| taranimeramaro@gmail.com | Bruno Mars Wed 8/26/26 | Aug 26 | MetLife Stadium Suites | Urgent: 11 days; verify suite/resale classification |
| cutekitten1234@icloud.com | Harry Styles: Together, Together | Aug 26 | Madison Square Garden | Urgent: 11 days; refresh price before send |
| tosophiameyer@gmail.com | Harry Styles: Together, Together | Aug 26 | Madison Square Garden | Urgent: 11 days; refresh price before send |
| savsaurusrex@gmail.com | My Chemical Romance The Black Parade 2026 | Aug 27 | Coors Field | Urgent: 12 days; refresh price before send |
| fnziman@gmail.com | Ishay Ribo with The Israel Philharmonic Orchestra | Aug 27 | Radio City Music Hall | Urgent: 12 days; refresh price before send |
| eemorkeviciute@gmail.com | Preseason Game 2: Buffalo Bills v Pittsburgh Steelers | Aug 27 | Highmark Stadium | Urgent: 12 days; refresh price before send |
| tosophiameyer@gmail.com | Harry Styles: Together, Together | Aug 28 | Madison Square Garden | Urgent: 13 days; refresh price before send |
| tosophiameyer@gmail.com | Harry Styles: Together, Together | Aug 28 | MSG Suites | Urgent: 13 days; verify hospitality exclusion |
| ginacmccarty@gmail.com | Jason Aldean: Songs About Us Tour 2026 | Aug 29 | The Wharf Amphitheater | Urgent: 14 days; refresh price before send |
| cutekitten1234@icloud.com | Harry Styles: Together, Together | Aug 28 | Madison Square Garden | Urgent: 13 days; refresh price before send |
| cutekitten1234@icloud.com | Harry Styles: Together, Together | Aug 29 | Madison Square Garden | Urgent: 14 days; refresh price before send |
| tosophiameyer@gmail.com | Harry Styles: Together, Together | Aug 29 | Madison Square Garden | Urgent: 14 days; refresh price before send |
| — | — | — | — | Remaining 196 items are outside the 14-day urgency window or require pagination-level digest generation |

Reusable personalized template:

**Subject:** Your Ticket Watchlist Update — [X] events tracked  
**Preview:** [Event Name] is [moving / approaching fast]. Here’s what to do.

Hi [Name],

Here’s today’s update on the tickets you’re watching:

🟡 **[Event]** — Live price check pending — [X] days until the event — **Refresh prices**

We’re refreshing marketplace data before making a buy/wait call. Ticket prices are slippery little creatures; a stale number is worse than no number.

**CTA:** View your watchlist on TicketScan → `https://www.ticketscan.io/watchlist`

### Subject-Line and CTA A/B Test

No live email send was authorized, so these variants are prepared for the next eligible send:

- **A — personalization:** `Your Ticket Watchlist Update: [X] events need a look`
- **B — urgency:** `[Event] is [X] days away — check prices before they move`
- **Preview A:** `Your tracked events, the latest price moves, and what to do next.`
- **Preview B:** `We’re checking the market so you don’t have to guess.`
- **Primary CTA:** `View my watchlist`
- CTA destination: `https://www.ticketscan.io/watchlist`

Recommendation: use **B** for the 14-day urgency segment and **A** for the general digest. Keep the CTA above the fold. Do not claim a price movement until the price-tracking job produces a fresh observation.

### Delivery Issue Escalation

**P0 — Engineering / email platform:** investigate the 500 from `GET /api/admin/alerts`. The route’s SQL selects `triggered_at` and `email_sent`; verify those columns against the production `price_alerts` schema and restore alert observability.

**P0 — Price tracking:** latest price history is 22 days stale as of this audit. Check the 4-hour cron, provider credentials, and insert errors before sending any price-based email.

**P1 — Lifecycle marketing:** drip stats show zero sends and 20 pending users, with no failure telemetry. Inspect SMTP configuration and the drip handler logs; do not assume “zero sent” means “zero eligible.”

**P1 — Analytics:** add delivery, bounce, open, click, unsubscribe, and per-send failure fields/endpoints. Current admin responses cannot produce reliable open rate, click rate, or bounce rate.

### Handoff to Analytics Agent (Agent 7)

- Funnel snapshot: **215 users**, **214 watchlist rows**, **4 active newsletter subscribers**, **0 recorded price alerts**, **0 recorded drip sends**.
- Today: **3 new users**, **0 new newsletter subscribers**, **0 observed unsubscribes**.
- Attribution: subscriber sources are `site-footer` (1), `homepage` (1), `test` (1), and `api-test` (1); no source growth today.
- Data-quality flags: stale price history, null target prices across watchlist, alerts endpoint HTTP 500, and absent email engagement telemetry.

### Sources and limitations

- `GET /api/admin/stats`
- `GET /api/admin/users`
- `GET /api/admin/watchlist?limit=500&offset=0`
- `GET /api/admin/newsletter`
- `GET /api/admin/alerts` (HTTP 500)
- `GET /api/admin/drip-stats`
- `GET /api/admin/price-history?limit=500&offset=0`
