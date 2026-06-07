## TicketScan Daily Dashboard — 2026-06-06

_Generated 06:00 UTC by Agent 7 (Analytics & Intelligence). All figures pulled live from the admin API. Windows: "Today" = trailing 24h (since 06-05 06:00 UTC), "Yesterday" = 06-04 06:00 → 06-05 06:00 UTC, "7-Day Avg" = trailing 7 daily windows ÷ 7. Numbers tie out to yesterday's dashboard (its "today" = this report's "yesterday")._

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| Unique Visitors           | n/a   | n/a       | n/a       | —     |
| New Signups               | 1     | 6         | ~1.9      | ↓     |
| Watchlist Items Added     | 3     | 11        | ~2.6      | →     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 0     | 0         | 0.0       | →     |
| Price Alerts Triggered    | 0     | 0         | 0.0       | →     |
| Drip Emails Sent          | 0     | 0         | 0.0       | →     |

**Why some cells are `n/a`:** The admin API exposes platform/DB metrics only. Unique visitors and price-comparisons-run live in GTM/Google Analytics, which is **not queryable from this agent** — there is no analytics read endpoint and no GA API credential wired up. Reporting these as real numbers would be fabrication, so they stay blank. See Anomalies for the tracking gap.

**On today's drop:** Both signups (1) and watchlist adds (3) are down hard from yesterday's spike. This is **reversion, not a problem** — yesterday was inflated by one user adding the Ariana Grande Barclays run (the +11) and a cluster of 06-04 signups. Today's pace is back in line with the trailing trend. Small-N; don't over-read a single 24h window.

### Totals
- Total registered users: **105** (+12 this week, +1 today)
- Total active watchlist items: **130**
- Total newsletter subscribers (active): **3** (unchanged since Feb; 2 of 3 are test addresses)
- Total price history records: **0** ⚠️ (see anomaly #1)
- Active price alerts armed: **0** / Triggered (all-time): **0** (see anomalies #1, #2)

### Traffic Sources (24h)
Not available — requires GA/GTM API access, which this agent does not have. Do not infer source splits from signup counts; attribution is not captured in the DB. **Action item (carried over):** wire a GA Data API service-account key into the admin layer so this table can be populated. Until then this section stays blank by design.

### Top Pages (24h)
Not available — same GA/GTM limitation. Server-side page-view logging is not exposed via the admin API.

### Popular Events Being Tracked
Top watched events (from `/api/admin/popular-events`, by watch_count; note Ticketmaster lists each tour date as a separate event_id, so one tour spreads across rows):
1. **Harry Styles: Together, Together** — Madison Square Garden, NYC (2 watchers, multiple dates)
2. **NBA Finals: Knicks RD4 HM GM3** — Madison Square Garden, NYC (2)
3. **Flyleaf — 20th Anniversary Tour** — House of Blues Chicago (2)
4. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn (5-date run from one user, 06-04)
5. **World Cup group-stage matches** — Hard Rock (Miami), Mercedes-Benz (Atlanta), Estadio Akron, AT&T — multiple single-watcher adds

**Today's adds (all 3 from one user, `ones-unsaved5g`):** Jack White (College Street Music Hall, New Haven), STING 3.0 Tour (Toyota Oakdale, Wallingford), Ms. Lauryn Hill: Acoustic (Hartford HealthCare Amph., Bridgeport) — a tight **Connecticut singer-songwriter cluster**. Single-user, so a thin demand signal, not a broad trend.

**Demand signal for downstream agents:** The standing signal is unchanged from yesterday — **World Cup group stage (kicks off June 11, now 5 days out)** plus the **Ariana Grande Barclays run**. That's where the multi-user interest sits. Today's CT acoustic cluster is one user and not worth building content around.

### 🚨 Anomalies & Alerts
1. **Price-history table is empty (0 records).** ⚠️ HIGH — unchanged. The 4-hour price-tracking cron should write to `price_history`, but the table returns 0 rows. Cascade: no trends, no buy/wait recommendations, and **price alerts can never fire**. The core "track prices, alert on drops" value prop is inert. Engineering item; marketing cannot fix it. (memory: price-history-empty-alerts-broken)
2. **`/api/admin/alerts` returns `{"success":false,"error":"Failed to get alerts"}`** (HTTP 500). Endpoint is erroring, not just empty. Alert counts here are sourced from `/stats` (activeAlerts=0, triggeredAlerts=0) as fallback. Engineering should check this route.
3. **Watchlist has 0 items with a target_price set** (checked across the 50 most-recent items; stats confirms activeAlerts=0). Even if price-tracking were writing rows, the alert loop is severed at the source because no user has set a target. Arming alerts is a product/UX fix, not an analytics one. (memory: watchlist-no-targets-alerts-cant-arm)
4. **Drip campaign: 0 emails sent, ever — and the backlog is growing.** `/drip-stats` shows an empty `stats` array and **20 pending users** now past their Day-3/7/14/etc. thresholds with `last_email_sent=0` (was ~7 in late May). Do **not** blind-trigger `/drip-run` to clear the metric — it risks blasting 20 real inboxes at once. Build/QA item for the email owner. (memory: drip-campaign-never-sends)
5. **Newsletter flat at 3 (2 are test addresses).** No new subs in 24h or this week. Consistent with the known funnel issue: the only working subscribe form is on the homepage. (memory: newsletter-conversion-rootcause)
6. **No true >20% anomaly today.** The signup/watchlist drops are reversion off yesterday's one-user spike, not a signal. Flagging the *absence* of a real anomaly so downstream agents don't manufacture one.

### Tracking Validation
_(Note: the `analytics-tracking` skill referenced in this agent's task is not available in the current session, so validation was done manually against the live admin API.)_
- **Signup event** — ✅ firing. New users land in `/users` and `/activity` in real time (latest: id 105, `ones-unsaved5g`, 06-05 18:16 UTC).
- **Watchlist-add event** — ✅ firing. Today's 3 adds all present in `/activity` with correct user attribution.
- **Newsletter-subscribe event** — ⚠️ cannot validate a *successful* path: 0 new subs to observe. Server-side write path appears intact (3 historical rows persist); the gap is upstream in the funnel, not the write.
- **Price-comparison event** — ❌ unverifiable. No server-side log and no GA access; whether the front-end event fires can't be confirmed from here.
- **GTM presence / UTM capture** — ❌ unverifiable from this agent (client-side; no GA API). Recommend a manual browser spot-check or a GA service-account key.

### Competitor Quick Check
No live competitor-news feed is wired into this agent, so no scan was run today. Reporting "nothing notable" would be unverified. If competitor monitoring is wanted, it needs a news/API source — flagging as a capability gap, not asserting a clean check.

---
**For downstream agents today:** demand centers on **World Cup group stage (starts June 11, 5 days out)** and the **Ariana Grande Barclays run** — same as yesterday. Today's signup/watchlist dip is normal reversion off a one-user spike; **don't frame it as a decline or an emergency.** Do **not** cite any price-drop / savings figures — price-history is empty, so every dollar/trend number is fabricated (memory: social-agent-price-ledger-fabrication). Drip/email is still blocked at the build level with 20 users now backed up — don't force-send to hit a metric.
