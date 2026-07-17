## TicketScan Daily Dashboard — 2026-07-17

**Generated:** 2026-07-17 06:00 UTC  
**Data sources:** Live API (`/api/admin/*`) — all figures verified. No GA4/GTM data available.

---

### Key Metrics (24h)

| Metric                 | Today | This Week | Notes                        |
|------------------------|-------|-----------|------------------------------|
| New Signups            | 2     | 18        | ↑ On pace (avg ~2.6/day)     |
| Watchlist Items Added  | 0     | ~5        | Last add: 7/15               |
| Newsletter Subscribers | n/a   | n/a       | No new subs today            |
| Price Alerts Triggered | 0     | 0         | Alerts endpoint HTTP 500     |
| Drip Emails Sent       | 0     | 0         | 0 ever sent — see anomalies  |

> Unique Visitors, Price Comparisons, Traffic Sources, Bounce Rates: **n/a** — no GA4 integration, GTM has no conversion events wired.

---

### Totals (verified from API)

| Metric                          | Count |
|---------------------------------|-------|
| Total registered users          | 168   |
| Total watchlist items           | 178   |
| Active price alerts             | 0     |
| Active newsletter subscribers   | 3     |
| Total price history records     | 0     |
| Drip emails ever sent           | 0     |

---

### Traffic Sources (24h)

**n/a** — No GA4 integration. GTM installed but no conversion events configured. Traffic source breakdown, top pages, and funnel conversion rates are unavailable until GA4 read access is provisioned.

---

### Top Pages (24h)

**n/a** — Same as above. No analytics instrumentation returning page-level data.

---

### Popular Events Being Tracked

All events have watch_count = 2 (tied). Top 5 distinct events:

1. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando
2. **Harry Styles: Together, Together** — Madison Square Garden, New York (multiple date IDs)
3. **World Cup Round of 16: W83 vs W84 (Match 93)** — AT&T Stadium, Arlington
4. **Ariana Grande – The Eternal Sunshine Tour** — Barclays Center, Brooklyn
5. **World Cup: Match 68 Group L – Croatia vs Ghana** — Lincoln Financial Field, Philadelphia

Note: All 178 watchlist items have null target prices. Price alerts cannot arm — there is no target-price input in the UI.

---

### 🚨 Anomalies & Alerts

**P0 — Drip campaign has sent 0 emails, ever**
- 168 registered users. Drip stats array is empty (zero entries).
- 13+ users are overdue for Email 1 (day 3+ since signup, no emails sent):
  - Day 3: 1 user | Day 4: 2 users | Day 5: 3 users | Day 6: 5 users | Day 7: 2 users
- 2 users (IDs 149, 150) overdue for both Email 1 AND Email 2.
- **Do not blind-trigger `/api/admin/drip-run` without confirming SMTP is functional** — risk of blasting 168 real inboxes with out-of-sequence emails.

**P1 — `/api/admin/alerts` returns HTTP 500**
- Has been broken for multiple reporting cycles.
- Price alerts feature is inoperable at both API and UI levels.

**P1 — Zero target prices across all 178 watchlist items**
- Root cause: no target-price input field in UI (EventCard add flow sends no `targetPrice`).
- Core value prop (alerts when price drops) is non-functional until fixed.

**P2 — Price history: 0 records**
- Price tracking cron is not accumulating data. Cannot support trend analysis, recommendations, or the buy/wait/hold algorithm.

**INFO — Signup velocity holding**
- 18 signups this week (Jul 10–16). Strong days: Jul 10 (5), Jul 15 (4).
- Today: 2 signups. On trend, no anomaly.

---

### Tracking Validation

| Check                          | Status          |
|--------------------------------|-----------------|
| GTM installed                  | Yes (confirmed) |
| GA4 conversion events          | Not configured  |
| Signup event firing            | Unknown — no GA4|
| Watchlist add event            | Unknown — no GA4|
| Newsletter subscribe event     | Unknown — no GA4|
| UTM parameter capture          | Unknown — no GA4|

**Action required:** Wire GA4 conversion events for signup, watchlist add, and newsletter subscribe before funnel metrics can be reported.

---

### Competitor Activity

No competitor monitoring tooling in place. Manual check not performed. Flag if significant SeatGeek/StubHub/Vivid Seats announcements surface.

---

### Agent Feed Notes

| Agent         | What's available today                                    |
|---------------|-----------------------------------------------------------|
| Content       | Top events: Noah Kahan, Harry Styles, World Cup knockouts |
| SEO           | Organic traffic: n/a (no GA4)                             |
| Social        | Social traffic: n/a (no GA4)                             |
| Paid Ads      | $0 spend, no ad accounts active                           |
| Email         | 168 users never drip-emailed; 3 newsletter subs           |
| CRO           | Funnel %: n/a (no analytics). Known P0: target-price UI missing |
| Growth        | 18 signups/week; retention: n/a (no last_login column)    |
