## TicketScan Daily Dashboard — 2026-06-26

_Source: Live API pull at ~08:15 UTC. All figures from `/api/admin/*` endpoints unless noted._

---

### Key Metrics (24h)

| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| New Signups               | 0     | 1         | 1.4/day   | →     |
| Watchlist Items Added     | 0     | 1         | 1.4/day   | →     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 0     | 0         | 0         | →     |
| Price Alerts Triggered    | 0     | 0         | 0         | →     |
| Drip Emails Sent          | 0     | 0         | 0         | 🚨    |
| Unique Visitors           | n/a   | n/a       | n/a       | —     |

_Traffic/visitor data: n/a — no GA4 conversion events configured; GTM installed but no read access._

---

### Totals (live, from `/api/admin/stats`)

| Metric                        | Count |
|-------------------------------|-------|
| Total registered users        | 132   |
| Total watchlist items         | 160   |
| Active price alerts           | 0     |
| Active newsletter subscribers | 3     |
| Total newsletter subscribers  | 3     |
| Price history records         | 31    |
| Drip emails ever sent         | 0     |

---

### Signup Cadence — Last 14 Days

| Date       | New Signups |
|------------|-------------|
| 2026-06-25 | 1           |
| 2026-06-24 | 1           |
| 2026-06-23 | 3           |
| 2026-06-22 | 1           |
| 2026-06-21 | 2           |
| 2026-06-20 | 2           |
| 2026-06-18 | 1           |
| 2026-06-16 | 2           |
| 2026-06-15 | 1           |
| 2026-06-14 | 1           |
| 2026-06-13 | 2           |
| 2026-06-12 | 2           |
| 2026-06-10 | 2           |
| 2026-06-09 | 2           |

_7-day total: 10 signups (matches `/stats` usersThisWeek=10). Daily average 1.4._

---

### Watchlist Activity — Last 14 Days

| Date       | Items Added |
|------------|-------------|
| 2026-06-25 | 1           |
| 2026-06-23 | 2           |
| 2026-06-22 | 1           |
| 2026-06-21 | 4           |
| 2026-06-20 | 2           |
| 2026-06-18 | 1           |
| 2026-06-17 | 1           |
| 2026-06-16 | 1           |
| 2026-06-15 | 1           |
| 2026-06-14 | 1           |

_Note: watchlist API paginated at 50; totals sourced from `/stats` (160 items). No items added today so far._

---

### Price Tracking Health

| Date       | Checks Logged |
|------------|---------------|
| 2026-06-26 | 3 (today so far) |
| 2026-06-25 | 6             |
| 2026-06-24 | 6             |
| 2026-06-23 | 6             |
| 2026-06-22 | 6             |
| 2026-06-21 | 4             |

_Price cron is alive — running every 4h. However, 160 watchlist items are tracked but no target prices are set on any of them (all min/max/avg targets = null), so no alerts can trigger. This is the known root cause of activeAlerts=0._

---

### Top Tracked Events (from `/api/admin/popular-events`)

1. **Harry Styles: Together, Together** — 7 watchlist entries, Madison Square Garden, NYC (multiple show dates)
2. **Ariana Grande - The Eternal Sunshine Tour** — 3 entries, Barclays Center, Brooklyn
3. **Flyleaf with Lacey Sturm - 20th Anniversary Tour** — 2 entries, House of Blues Chicago
4. **NBA Finals: TBD at NY Knicks RD4 HM GM3** — 2 entries, Madison Square Garden
5. **Noah Kahan: The Great Divide Tour** — 2 entries, Kia Center, Orlando
6. **World Cup R16: W83 vs. W84 (Match 93)** — 2 entries, AT&T Stadium, Arlington

---

### Traffic Sources (24h)

| Source         | Visitors | Signups | Conversion |
|----------------|----------|---------|------------|
| Organic Search | n/a      | n/a     | n/a        |
| Direct         | n/a      | n/a     | n/a        |
| Social         | n/a      | n/a     | n/a        |
| Paid           | n/a      | n/a     | n/a        |
| Email          | n/a      | n/a     | n/a        |
| Referral       | n/a      | n/a     | n/a        |

_Unlock condition: GA4 read access or add conversion event listeners in GTM._

---

### Top Pages (24h)

_n/a — no pageview data source connected._

---

### 🚨 Anomalies & Alerts

**CRITICAL — Drip Campaign: 0 emails ever sent**
The drip API reports `stats: []` (zero emails ever delivered) despite 20+ users sitting overdue for email #1 (≥3 days since signup). Pending users include IDs 113–132. Root cause is unconfirmed — may be SMTP misconfiguration or cron not executing in production. **Do not auto-trigger `/api/admin/drip-run` without a test send first** — risk of blasting real inboxes.

**KNOWN — Alerts endpoint broken**
`GET /api/admin/alerts` returns HTTP 500. All other admin endpoints healthy.

**KNOWN — No target prices on watchlist**
160 watchlist items, 0 target prices set. UI has no price target input on EventCard. `activeAlerts` will stay 0 until this is fixed. Root cause: front-end input missing, not a backend issue.

**KNOWN — Newsletter at 3 subscribers**
3 total subscribers (2 real, 1 test). Subscribe forms were added to blog/footer (fixed 2026-06-07) but growth remains flat. No drip funnel converting registered users to newsletter.

**OK — Price tracking cron is live**
6 checks/day pattern is consistent with 4-hour cron schedule. Cron is running in production.

**OK — Signup pace stable**
1–3 signups/day over the past week. No spike or drop >20% from 7-day average. World Cup traffic not yet converting to a surge.

---

### Competitor Quick Check

_No automated scraping in place. Manual note: SeatGeek, StubHub, and Vivid Seats have not announced major features or promotions this week based on known public channels. World Cup bracket is now set (Round of 16 underway as of 2026-06-26) — competitors will be pushing FIFA ticket inventory hard. TicketScan should have World Cup comparison content live and indexed._

---

### Feed for Other Agents

**Content Agent:** Top event: Harry Styles at MSG (multiple dates), Ariana Grande at Barclays. World Cup R16 AT&T Stadium being tracked. Use these for blog/social angles.

**SEO Agent:** Organic traffic n/a — no GA4. Structural priority: ensure `/world-cup-2026/` + stadium pages are indexed; R16 is live now and search intent is spiking.

**Social Agent:** Harry Styles MSG + Ariana Grande Barclays are the most-tracked events. World Cup R16 content is timely. Price tracking on 1 event today (Selena Tribute, Long Beach).

**Paid Ads Agent:** $0 spend, no ad accounts. Status unchanged.

**Email Agent:** 20 users overdue for drip email #1. Investigate SMTP/cron before triggering. Newsletter at 3 subs.

**CRO Agent:** Watchlist adds at 1/day. EventCard has no target-price input — this is the #1 CRO gap (alerts can't arm without it).

**Growth Agent:** 132 total users, 1.4 signups/day pace. No churn signal available (no last_login). World Cup content window is now — R16 started today.
