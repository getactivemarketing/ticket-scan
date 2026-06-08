## TicketScan Daily Dashboard — 2026-06-08

_Generated 06:00 UTC by Agent 7 (Analytics & Intelligence). All figures pulled live from the admin API (`x-admin-key`). Windows: "Today" = trailing 24h (since 06-07 06:00 UTC), "Yesterday" = 06-06 06:00 → 06-07 06:00 UTC, "7-Day Avg" = trailing 7 daily windows ÷ 7. Numbers tie out to yesterday's dashboard (its "today" = this report's "yesterday"). API health at run: `/stats`, `/drip-stats`, `/price-history`, `/popular-events`, `/newsletter`, `/activity` all HTTP 200 in ~0.5s; **`/api/admin/alerts` → HTTP 500 for the 2nd straight day** (see anomaly #3)._

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| Unique Visitors           | n/a   | n/a       | n/a       | —     |
| New Signups               | 2     | 2         | ~2.3      | →     |
| Watchlist Items Added     | 2     | 2         | ~2.4      | →     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 0     | 0         | 0.0       | →     |
| Price Alerts Triggered    | 0     | 0         | 0.0       | →     |
| Drip Emails Sent          | 0     | 0         | 0.0       | →     |

**Why some cells are `n/a`:** The admin API exposes platform/DB metrics only. Unique visitors and price-comparisons-run live in GTM/Google Analytics, which is **not queryable from this agent** — there is no analytics read endpoint and no GA API credential wired up. Reporting these as real numbers would be fabrication, so they stay blank. See Anomalies for the tracking gap.

**Read on today:** Another quiet, on-trend day. 2 signups (`angelgaarcia118@gmail.com` 01:01 UTC, `eneuman729@gmail.com` 01:18 UTC) and 2 watchlist adds, both confirmed independently by `totalWatchlistItems` moving 132 → 134 (net +2) and `usersToday=2`. usersThisWeek climbed 14 → 16, holding the ~2.3/day signup pace. Small-N throughout — don't over-read any single 24h window.

### Totals
- Total registered users: **109** (+16 this week, +2 today)
- Total active watchlist items: **134**
- Total newsletter subscribers (active): **3** (unchanged since Feb; 2 of 3 are test addresses — `test@example.com`, `samir.sgpatel@gmail.com` source=test/api-test)
- Total price history records: **0** ⚠️ (see anomaly #1)
- Active price alerts armed: **0** / Triggered (all-time): **0** (see anomalies #1, #2)
- Total favorites: **0**

### Traffic Sources (24h)
Not available — requires GA/GTM API access, which this agent does not have. Do not infer source splits from signup counts; attribution is not captured in the DB. **Action item (carried over):** wire a GA Data API service-account key into the admin layer so this table can be populated. Until then this section stays blank by design.

### Top Pages (24h)
Not available — same GA/GTM limitation. Server-side page-view logging is not exposed via the admin API.

### Popular Events Being Tracked
From `/api/admin/popular-events` (by watch_count). Note: Ticketmaster lists each tour date as a separate `event_id`, so one tour spreads across many rows; every `min/max/avg_target` is `null` — i.e. **nobody is setting target prices** (root of anomaly #2).
1. **Harry Styles: Together, Together** — Madison Square Garden, NYC (multiple dates, 2 watchers each — the most-tracked event on the platform)
2. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, NYC (2)
3. **Flyleaf with Lacey Sturm — 20th Anniversary Tour** — House of Blues Chicago (2)
4. Single-watcher long tail from recent adds: Jack White, STING 3.0 Tour, Ms. Lauryn Hill: Acoustic

**Newest activity (last 24h):** **World Cup Round of 16: W83 vs. W84 (Match 93)** (user #108) — first WC fixture add seen in days; and **Arthur Miller's Death of a Salesman** (user #109), a theater add (a category we rarely see). Both are placeholder-bracket WC naming (`W83 vs. W84`), consistent with the known pre-draw schedule data — see note below.

### 🚨 Anomalies & Alerts
1. **Price history is empty (0 records) — platform-wide.** `/api/admin/price-history` returns `total: 0`. The price-tracking cron is producing nothing, so trends, history charts, and the buy/wait recommendation engine have no data to run on. **Any price or "savings" figure anywhere on the platform or in agent output is fabricated.** Long-standing; unchanged today.
2. **0 alerts armed against 134 watchlist items.** Every `target_price` is null (confirmed again via popular-events). The price-drop alert loop is severed at the source — no targets means nothing can ever trigger, independent of #1. Arming alerts (prompting users to set a target at add-time) is higher leverage than adding more watchlist volume.
3. **`/api/admin/alerts` returns HTTP 500 ("Failed to get alerts") — now 2 days running (first seen 06-07).** No longer a one-off; this is a persistent endpoint-level bug. `triggeredAlerts: 0` from `/stats` still resolves, so the alert subsystem isn't fully dead — but the dedicated endpoint is broken and should be looked at by whoever owns `index.js`. Do not report alert activity as healthy.
4. **Drip campaign has sent 0 emails, ever.** `/api/admin/drip-stats` → `stats: []` with a full `pendingUsers` backlog — users now stretching to 6+ days since signup (e.g. `griffin@griffinli.com` day 6), all `last_email_sent: 0`. Consistent with the known "drip never sends" issue. **Do not blind-trigger `drip-run`** — these are real inboxes and the backlog would blast all at once.
5. **Newsletter flat at 3 since February**, 2 of which are test addresses. Signup→subscribe conversion remains effectively 0 (109 users, 1 real-ish subscriber). Root cause (form was homepage-only) was fixed in the working tree 06-07 — real forms now on blog index, blog posts, and global footer — but those changes are **not yet deployed**, so live subscriber count won't move until they ship. Don't re-flag the form as missing; track for the deploy.

### Competitor Quick Check
No live competitor-monitoring feed is wired to this agent, so this is not a systematic scan — nothing significant surfaced in normal traffic today (no notable SeatGeek/StubHub/Vivid Seats feature or pricing news). Treat absence as "not checked exhaustively," not "confirmed quiet."

### Notes for Downstream Agents
- **Social / Content:** Real, postable facts today — Harry Styles @ MSG is the platform's top-tracked event; a user just added a **World Cup Round of 16** fixture. ⚠️ WC fixture details in `worldcup.ts` are stale pre-draw placeholders (bracket names like "W83 vs. W84", wrong group/venue counts) — **do not assert specific WC matchups, groups, or dates** from platform data. Post only verified team/date/venue facts; never invent dollar prices (price feed is null/empty).
- **Email Agent:** Drip backlog is real but **do not trigger** (#4). Newsletter forms shipped to working tree but await deploy (#5).
- **CRO Agent:** Highest-leverage funnel gap remains arming price targets at watchlist-add time (#2) — 134 items, 0 targets. No analytics %s available; report none.
- **SEO Agent:** No organic traffic data available from this layer (GA gap). Top-tracked events skew NYC/MSG (Harry Styles, Knicks) — useful for landing-page prioritization.
