## TicketScan Daily Dashboard — 2026-06-07

_Generated 06:00 UTC by Agent 7 (Analytics & Intelligence). All figures pulled live from the admin API (`x-admin-key`). Windows: "Today" = trailing 24h (since 06-06 06:00 UTC), "Yesterday" = 06-05 06:00 → 06-06 06:00 UTC, "7-Day Avg" = trailing 7 daily windows ÷ 7. Numbers tie out to yesterday's dashboard (its "today" = this report's "yesterday"). API health at run: all endpoints HTTP 200 in ~0.5s **except `/api/admin/alerts` → HTTP 500** (see anomaly #3)._

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| Unique Visitors           | n/a   | n/a       | n/a       | —     |
| New Signups               | 2     | 1         | ~2.0      | ↑     |
| Watchlist Items Added     | 2     | 3         | ~2.5      | →     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 0     | 0         | 0.0       | →     |
| Price Alerts Triggered    | 0     | 0         | 0.0       | →     |
| Drip Emails Sent          | 0     | 0         | 0.0       | →     |

**Why some cells are `n/a`:** The admin API exposes platform/DB metrics only. Unique visitors and price-comparisons-run live in GTM/Google Analytics, which is **not queryable from this agent** — there is no analytics read endpoint and no GA API credential wired up. Reporting these as real numbers would be fabrication, so they stay blank. See Anomalies for the tracking gap.

**Read on today:** Signups (2) and watchlist adds (2) are both squarely on the trailing trend — no spike, no collapse. `totalWatchlistItems` moved 130 → 132 (net +2), which independently confirms the 2 adds. usersThisWeek=14 holds the ~2.0/day signup pace. This is a normal, quiet day. Small-N throughout; don't over-read any single 24h window.

### Totals
- Total registered users: **107** (+14 this week, +2 today)
- Total active watchlist items: **132**
- Total newsletter subscribers (active): **3** (unchanged since Feb; 2 of 3 are test addresses — `test@example.com`, `samir.sgpatel@gmail.com` source=test)
- Total price history records: **0** ⚠️ (see anomaly #1)
- Active price alerts armed: **0** / Triggered (all-time): **0** (see anomalies #1, #2)
- Total favorites: **0**

### Traffic Sources (24h)
Not available — requires GA/GTM API access, which this agent does not have. Do not infer source splits from signup counts; attribution is not captured in the DB. **Action item (carried over):** wire a GA Data API service-account key into the admin layer so this table can be populated. Until then this section stays blank by design.

### Top Pages (24h)
Not available — same GA/GTM limitation. Server-side page-view logging is not exposed via the admin API.

### Popular Events Being Tracked
From `/api/admin/popular-events` (by watch_count). Note: Ticketmaster lists each tour date as a separate `event_id`, so one tour spreads across many rows; every `min/max/avg_target` is `null` — i.e. **nobody is setting target prices** (root of anomaly #2).
1. **Harry Styles: Together, Together** — Madison Square Garden, NYC (multiple dates, 2 watchers each)
2. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, NYC (2)
3. **Flyleaf with Lacey Sturm — 20th Anniversary Tour** — House of Blues Chicago (2)
4. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn (5-date run from one user, 06-04)
5. Single-watcher long tail: Jack White, STING 3.0 Tour, Ms. Lauryn Hill: Acoustic (latest adds, all by user #105)

**Newest activity (last 24h):** NBA Finals: Spurs at Knicks Game 4 (user #107), Harry Styles: Together, Together (user #106).

### 🚨 Anomalies & Alerts
1. **Price history is empty (0 records) — platform-wide.** `/api/admin/price-history` returns `total: 0`. The price-tracking cron is producing nothing, so trends, history charts, and the buy/wait recommendation engine have no data to run on. **Any price or "savings" figure anywhere on the platform or in agent output is fabricated.** Long-standing; unchanged today.
2. **0 alerts armed against 132 watchlist items.** Every `target_price` is null (confirmed again via popular-events). The price-drop alert loop is severed at the source — no targets means nothing can ever trigger, independent of #1. Arming alerts (prompting users to set a target at add-time) is higher leverage than adding more watchlist volume.
3. **`/api/admin/alerts` returns HTTP 500 ("Failed to get alerts") — NEW today / regression to watch.** The endpoint itself is erroring, not just returning empty. `triggeredAlerts: 0` from `/stats` still resolves, so this is an endpoint-level bug, not total alert-subsystem death — but it should be checked. Flagging for whoever owns `index.js`; do not report alert activity as healthy.
4. **Drip campaign has sent 0 emails, ever.** `/api/admin/drip-stats` → `stats: []` with a full `pendingUsers` backlog (users at 2–3+ days since signup, `last_email_sent: 0`). Consistent with the known "drip never sends" issue. **Do not blind-trigger `drip-run`** — these are real inboxes and the backlog would blast at once.
5. **Newsletter flat at 3 since February**, 2 of which are test addresses. Signup→subscribe conversion remains effectively 0 (107 users, 1 real-ish subscriber). Known root cause: subscribe form only exists on the homepage.

### Tracking Validation
- `analytics-tracking` skill: **not available in this environment** (not in the loaded skill set), so no automated event-fire spot-check was run. Doing manual reasoning instead:
- Server-side conversion events that the DB *can* confirm are firing: **signup** (2 new user rows today) and **watchlist add** (+2 items today) — both writing correctly.
- **newsletter subscribe**, **price comparison**, and any client-side GTM events are **unverifiable from here** — no GA/GTM read path. Cannot confirm GTM loads on all pages or that UTM params are captured. This is a standing gap, not a same-day failure.

### Competitor Quick Check
No automated competitor feed is wired to this agent, and no live web scan was performed this run — so **nothing is reported rather than invented.** If competitor monitoring is wanted as a real daily input, it needs a dedicated source (web search/news API) rather than being asserted here.

### Notes for downstream agents (consume before running)
- **Content / SEO:** Top organic-intent events right now are Harry Styles @ MSG, NBA Finals (Knicks), Ariana Grande @ Barclays. No GA top-pages data available — don't claim page-level traffic.
- **Social:** Post only verified facts (teams/dates/venues). **Price feed returns null prices — do not invent dollar figures or "price drop" arcs.** (See anomaly #1.)
- **Email:** Drip backlog exists but is **inert and must not be blind-triggered** (#4). Newsletter list is 3 (mostly test) — no real audience to blast.
- **CRO / Growth:** Highest-leverage fix remains **target-price capture at watchlist-add** (#2) — it unblocks the entire alerts→retention loop. No funnel %s available (no analytics); report shipping status, not invented conversion rates.
- **Paid:** $0 spend / no ad accounts as of last check — no paid traffic to attribute.
