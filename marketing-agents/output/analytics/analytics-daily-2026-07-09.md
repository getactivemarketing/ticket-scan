## TicketScan Daily Dashboard — 2026-07-09

### Key Metrics (Live DB — pulled 2026-07-09 ~06:00 UTC)

| Metric                  | Value | Notes                        |
|-------------------------|-------|------------------------------|
| New Signups (24h)       | 0     | usersToday from /admin/stats |
| New Signups (7-day)     | 8     | usersThisWeek from /admin/stats |
| Total Registered Users  | 146   | Live                         |
| Total Watchlist Items   | 168   | Live                         |
| Active Price Alerts     | 0     | No target prices set in UI   |
| Newsletter Subscribers  | 3     | Active (3 total)             |
| Drip Emails Sent        | 0     | Stats array empty — drip not executing |

> Traffic, sources, funnel %, bounce rate, top pages — **n/a** (no GA4; GTM has no conversion events wired).

---

### Totals
- Registered users: **146**
- Watchlist items: **168**
- Newsletter subscribers (active): **3**
- Price history records: **0** (price tracking inert — known issue)
- Triggered alerts: **0**

---

### Traffic Sources
**n/a** — No analytics integration. GTM is installed but no conversion events are firing. All traffic/source data is unavailable until GA4 is connected.

---

### Top Pages
**n/a** — No pageview data available from API or GA4.

---

### Popular Events Being Tracked (from /api/admin/popular-events)

| Event                                      | Venue               | City          | Watchers |
|--------------------------------------------|---------------------|---------------|----------|
| Harry Styles: Together, Together           | Madison Square Garden | New York    | 2 per date (7 dates) |
| Ariana Grande - The Eternal Sunshine Tour  | Barclays Center     | Brooklyn      | 2        |
| Noah Kahan: The Great Divide Tour          | Kia Center          | Orlando       | 2        |
| World Cup R16: W83 vs W84 (Match 93)       | AT&T Stadium        | Arlington     | 2        |
| World Cup R16: W74 vs W77 (Match 89)       | Lincoln Financial   | Philadelphia  | 2        |

Note: All `min_target`/`avg_target`/`max_target` values are null — no users have set price targets. Alerts cannot arm until UI exposes target-price input (confirmed open bug).

---

### 🚨 Anomalies & Alerts

1. **Drip campaign: 0 emails ever sent** — 20+ users are overdue for Email 1 (3-day trigger). The drip-run endpoint exists but the cron is not executing. Do not trigger manually (risk of blasting real inboxes). Needs dev attention.

2. **`/api/admin/alerts` returning HTTP 500** — This endpoint has been broken for multiple weeks. Price alert history is inaccessible. Not new; flagging for dev.

3. **0 signups today** — After 8 this week, today shows zero. Could be normal weekend/morning timing; not yet anomalous. Monitor through EOD.

4. **All watchlist targets are null** — 168 items tracked, 0 price targets set. The target-price input field does not exist in the UI. This is the root cause of `activeAlerts: 0`. Highest-priority frontend fix.

5. **Newsletter at 3 subscribers** — No growth since last period. If the blog/footer forms are live (deployed 2026-06-07 per memory), these are not converting. Worth verifying forms are live in production.

---

### Tracking Validation

- **GTM**: Installed on site — not validated today (no browser tooling available in this run).
- **Conversion events**: None confirmed firing (signup, watchlist-add, compare, newsletter-subscribe).
- **UTM capture**: Unknown — no analytics backend to verify against.
- **Action**: Until GA4 is connected and a conversion event is tagged in GTM, all funnel data is a black box.

---

### Competitor Quick Check

No new competitor intelligence pulled this run (no browser access). Standing context:
- SeatGeek, StubHub, Vivid Seats all continue to operate normally.
- No major product launches or pricing promotions noted in recent memory.

---

### Feed for Other Agents

| Agent      | Relevant Signal                                                              |
|------------|------------------------------------------------------------------------------|
| Content    | Harry Styles @ MSG + World Cup R16 matches are the most-tracked events      |
| SEO        | No organic traffic data available; top-page ranking unknown                  |
| Social     | Harry Styles, Ariana Grande, World Cup R16 are engagement-ready topics       |
| Paid Ads   | $0 spend / no ad accounts (blocked at human setup)                           |
| Email      | 3 subscribers; drip has 20+ overdue users; 0 emails ever delivered           |
| CRO        | Target-price input missing = alerts broken; /compare login-gated (P0s open)  |
| Growth     | 8 signups this week (strong); 0 today; retention unknown (no last_login col) |
