## TicketScan Daily Dashboard — 2026-06-18

**Data source:** Live admin API (`/api/admin/*`), pulled 2026-06-18. Admin key authenticated (HTTP 200, ~0.3–0.5s responses).
**What's measurable:** Platform/database counts only. **Not measurable:** traffic, bounce, conversion-by-source — see Anomalies.

### Key Metrics (platform counts)
| Metric                    | Value | Note |
|---------------------------|-------|------|
| New Signups (today)       | 0     | stats.usersToday = 0; last signup 06-16 |
| New Signups (7-day)       | 8     | stats.usersThisWeek (was 10 on 06-17 — rolling window) |
| Watchlist Items (today)   | 0     | no adds since 06-17 00:01 (Chris Stapleton) |
| Price Comparisons Run     | n/a   | no analytics/event tracking accessible |
| Newsletter Subs (today)   | 0     | total still 3 |
| Price Alerts Triggered    | 0     | none ever (see below) |
| Drip Emails Sent          | 0     | none ever (see below) |

### Totals
- Total registered users: **121** (no change vs 06-17)
- Total active watchlist items: **149**
- Total newsletter subscribers (active): **3** (2 test — `test@example.com`, `samir.sgpatel@gmail.com`; **1 real**: `roos_leeuwen@eaglesmail.net`)
- Total price history records: **0**
- Active alerts armed: **0** · Alerts triggered (all time): **0**
- User favorites: **0**

### Traffic Sources (24h)
**n/a — no analytics access.** GTM is installed but no GA4 read access / conversion-event feed is reachable by this agent. Reporting source/visitor/bounce numbers would be fabrication. Blank by design.

### Top Pages (24h)
**n/a — same reason.** No page-level traffic data is accessible.

### Popular Events Being Tracked (by watch count)
1. Harry Styles: Together, Together — Madison Square Garden, NYC (multiple event_ids, 2 watchers each)
2. Flyleaf w/ Lacey Sturm — House of Blues Chicago (2)
3. World Cup Round of 16: W83 vs W84 (Match 93) — AT&T Stadium, Arlington (2)
4. (long tail) Santana & Doobie Brothers, Malcolm Todd, JOJI, Chris Stapleton — 1 watcher each

Note: **every tracked event has `target_price = null`.** No watcher has set a target.

### Recent Activity (last signups/adds)
- 06-17 watchlist add — Chris Stapleton's All-American Road Show (kondadz@)
- 06-16 signup ×2 + watchlist (Santana & Doobie Brothers, lukew@)
- 06-15 signup + watchlist (Malcolm Todd)
- 06-14 signup + watchlist (JOJI: Solaris)
- **Quiet 48h:** no signups or watchlist adds on 06-17 or 06-18 (through pull time).

### 🚨 Anomalies & Alerts
1. **`/api/admin/alerts` still returns HTTP 500** ("Failed to get alerts"). Endpoint broken ≥2 days — flag to backend. (Unchanged from 06-17.)
2. **Core value loop remains severed at the source.** price_history = 0 rows, 0 alerts ever armed, 0 triggered, 0 of 149 watchlist items have a `target_price`. Price tracking + alerts are inert platform-wide. Any "savings/alert" metric anywhere is fabricated until fixed. (Known, not new.)
3. **Drip campaign has sent 0 emails ever.** drip-stats.stats = []; ~20 users past Day-3+ window (up to 12+ days overdue), all `last_email_sent = 0`. Do **not** blind-trigger drip-run (real gmail/yahoo/live addresses at risk).
4. **Signups paused 2 days.** usersToday = 0 and no adds since 06-17 — within normal variance for this volume, but worth watching if it extends past ~3 days.
5. **Newsletter is effectively 1 real subscriber** (3 total, 2 test). Flat.

### Tracking Validation
- `analytics-tracking` skill is **not available in this environment** — scripted spot-check not run.
- Manual assessment: conversion events (signup/watchlist/compare/subscribe) are **not observable** from any endpoint exposed to this agent; cannot confirm they fire. GTM container loads per prior checks, but no event/GA4 data is reachable. **Tracking remains unverifiable → treat funnel %s as unmeasurable, not zero.**

### Competitor Quick Check
No scan run today (not data-backed from available tools). Nothing to report.

### For Other Agents (what's usable today)
- **Real, usable:** signups (121 total / 8 this week / 0 today), watchlist (149 items), top tracked events (above), ~20 overdue drip users.
- **Do NOT use (no data exists):** traffic sources, bounce, conversion rates, price/savings figures, email open/CTR.
- **Shipping priorities surfaced by data (unchanged):** (a) arm alerts — nobody sets target_price; (b) fix `/api/admin/alerts` 500; (c) drip delivery is dead; (d) acquisition went quiet 48h.
