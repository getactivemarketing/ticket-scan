## TicketScan Daily Dashboard — 2026-06-05

_Generated 06:00 UTC by Agent 7 (Analytics & Intelligence). All figures pulled live from the admin API. Windows: "Today" = trailing 24h (since 06-04 06:00 UTC), "Yesterday" = 06-03 06:00 → 06-04 06:00 UTC, "7-Day Avg" = trailing 7 days ÷ 7._

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| Unique Visitors           | n/a   | n/a       | n/a       | —     |
| New Signups               | 6     | 2         | 2.0       | ↑     |
| Watchlist Items Added     | 11    | 1         | 2.6       | ↑     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 0     | 0         | 0.0       | →     |
| Price Alerts Triggered    | 0     | 0         | 0.0       | →     |
| Drip Emails Sent          | 0     | 0         | 0.0       | →     |

**Why some cells are `n/a`:** The admin API exposes platform/DB metrics only. Unique visitors and price-comparisons-run live in GTM/Google Analytics, which is **not queryable from this agent** — there is no analytics read endpoint and no GA API credential wired up. Reporting these as real numbers would be fabrication, so they are left blank. See Anomalies for the tracking gap.

### Totals
- Total registered users: **104** (+14 this week, +6 today)
- Total active watchlist items: **127**
- Total newsletter subscribers (active): **3** (unchanged since Feb; 2 of 3 are test addresses)
- Total price history records: **0** ⚠️ (see anomaly #1)

### Traffic Sources (24h)
Not available — requires GA/GTM API access, which this agent does not have. Do not infer source splits from signup counts; attribution is not captured in the DB. **Action item:** wire a GA Data API service-account key into the admin layer so this table can be populated. Until then, this section stays blank by design.

### Top Pages (24h)
Not available — same GA/GTM limitation as above. Server-side page-view logging is not exposed via the admin API.

### Popular Events Being Tracked
Top watched events (from `/api/admin/popular-events`, by watch_count; note TM lists each tour date as a separate event_id, so a single tour shows up across rows):
1. **Harry Styles: Together, Together** — Madison Square Garden, NYC (2 watchers, multiple dates)
2. **Flyleaf — 20th Anniversary Tour** — House of Blues Chicago (2)
3. **NBA Finals: Knicks RD4 HM GM3** — Madison Square Garden, NYC (2)
4. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn (5 dates added today by one user)
5. **World Cup Group-stage matches** — Hard Rock (Miami), Mercedes-Benz (Atlanta), Estadio Akron, AT&T — multiple single-watcher adds

**Demand signal for downstream agents:** Today's adds skew **World Cup group stage** (Spain/Cabo Verde, Saudi/Uruguay, Korea/Czechia) + **Ariana Grande Barclays run**. Tournament kicks off **June 11** — six days out. Content/Social/SEO should lean into WC group-stage and the Ariana NYC run.

### 🚨 Anomalies & Alerts
1. **Price-history table is empty (0 records).** ⚠️ HIGH. The 4-hour price-tracking cron is supposed to write to `price_history`, but the table returns 0 rows. Consequences cascade: no price trends, no buy/wait recommendations, and **price alerts can never fire** (explains the flat 0 on alerts). This is the single most material data gap on the platform — the core "track prices, alert on drops" value prop is currently inert. Flagging for engineering; not something marketing can fix.
2. **`/api/admin/alerts` returns `{"success":false,"error":"Failed to get alerts"}`.** Endpoint is erroring (likely a query/route bug), not just empty. Alert counts in this dashboard are sourced from `/stats` (activeAlerts=0, triggeredAlerts=0) as a fallback. Engineering should check this route.
3. **Signups +200% vs 7-day avg (6 today vs 2.0).** Positive anomaly, >20% threshold. Real but small-N — driven by World Cup proximity (tournament starts June 11). Worth riding, not worth over-reading.
4. **Watchlist adds +328% vs 7-day avg (11 today vs 2.6).** Positive, but **5 of the 11 are one user adding the full Ariana Grande Barclays run** — concentrated, not broad. Net of that single user, adds are ~6, still above trend on WC interest.
5. **Drip campaign: 0 emails sent, ever.** Unchanged known issue (see memory: drip-campaign-never-sends). 7+ users are past the Day-3/Day-7/Day-14 thresholds with `last_email_sent=0`. Do **not** blind-trigger `/drip-run` to "fix" the metric — it risks blasting real inboxes. This is a build/QA item for the email owner, not an analytics action.
6. **Newsletter growth flat at 3 (2 are test addresses).** No new subscribers in 24h or this week. Consistent with the known funnel issue: signup→subscribe is effectively dead because the only working form is on the homepage (see memory: newsletter-conversion-rootcause).

### Tracking Validation
- **Signup event** — ✅ firing. New users appear in `/users` and `/activity` in real time (104 → confirmed id 104 at 00:18 UTC).
- **Watchlist-add event** — ✅ firing. 11 adds today all present in `/activity` with user attribution.
- **Newsletter-subscribe event** — ⚠️ cannot validate a *successful* path: 0 new subs to observe, and prior root-cause analysis shows the CTA paths outside the homepage are dead-ends. Server-side write path appears intact (3 historical rows persisted).
- **Price-comparison event** — ❌ cannot validate. No server-side log and no GA access; whether the front-end comparison event fires is unverifiable from here.
- **GTM presence / UTM capture** — ❌ unverifiable from this agent. GTM is client-side; without GA API access I can't confirm container load or UTM capture. Recommend a manual browser spot-check or a GA service-account key.

### Competitor Quick Check
No live competitor-news source is wired into this agent, so no scan was performed today (reporting "nothing notable" would be unverified). If competitor monitoring is wanted, it needs a news/API feed — flagging as a capability gap rather than asserting a clean check.

---
**For downstream agents today:** lean into **World Cup group stage (starts June 11)** and the **Ariana Grande Barclays run** — that's where real demand is. Do **not** cite price-drop / savings figures: price-history is empty, so any dollar/trend number is fabricated (see memory: social-agent-price-ledger-fabrication). Email/drip is still blocked at the build level — don't force-send to hit a metric.
