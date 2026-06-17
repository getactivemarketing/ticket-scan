## TicketScan Daily Dashboard — 2026-06-17

**Data source:** Live admin API (`/api/admin/*`), pulled 2026-06-17. Admin key authenticated successfully (HTTP 200, ~0.3s responses).
**What's measurable:** Platform/database counts only. **Not measurable:** traffic, bounce, conversion-by-source — see note in Anomalies.

### Key Metrics (platform counts)
| Metric                    | Value | Note |
|---------------------------|-------|------|
| New Signups (today)       | 2     | from stats.usersToday |
| New Signups (7-day)       | 10    | from stats.usersThisWeek |
| Watchlist Items (today)   | 1     | activity log (Chris Stapleton, kondadz@) |
| Price Comparisons Run     | n/a   | no analytics/event tracking accessible |
| Newsletter Subs (today)   | 0     | no new subs; total still 3 |
| Price Alerts Triggered    | 0     | none ever (see below) |
| Drip Emails Sent          | 0     | none ever (see below) |

### Totals
- Total registered users: **121**
- Total active watchlist items: **149**
- Total newsletter subscribers (active): **3** (2 are test addresses — `test@example.com`, `samir.sgpatel@gmail.com`; **1 real**: `roos_leeuwen@eaglesmail.net`)
- Total price history records: **0**
- Active alerts armed: **0** · Alerts triggered (all time): **0**
- User favorites: **0**

### Traffic Sources (24h)
**n/a — no analytics access.** GTM is installed but there is no GA4 read access or conversion-event feed available to this agent. Reporting source/visitor/bounce numbers would be fabrication. Leaving blank by design.

### Top Pages (24h)
**n/a — same reason.** No page-level traffic data is accessible.

### Popular Events Being Tracked (by watch count)
1. Harry Styles: Together, Together — Madison Square Garden, NYC (multiple event_ids, 2 watchers each)
2. Flyleaf w/ Lacey Sturm — House of Blues Chicago (2)
3. World Cup Round of 16: W83 vs W84 (Match 93) — AT&T Stadium, Arlington (2)
4. Noah Kahan: The Great Divide Tour — Kia Center, Orlando (2)
5. NBA Finals: TBD at New York Knicks RD4 GM3 — MSG, NYC (2)

Note: **every tracked event has `target_price = null`** across the popular-events list.

### Recent Activity (last signups/adds)
- 06-17 watchlist add — Chris Stapleton (kondadz@)
- 06-16 signup ×2 + watchlist (Santana & Doobie Brothers)
- 06-15 signup + watchlist (Malcolm Todd)
- 06-14 signup + watchlist (JOJI: Solaris)

### 🚨 Anomalies & Alerts
1. **GOOD / CHANGED: admin API now authenticates** with the key provided in this task (HTTP 200). Prior runs logged 401s — that blocker is resolved for count-based metrics. (Traffic/funnel analytics still unavailable — that's a GA4-access gap, not an auth gap.)
2. **`/api/admin/alerts` returns HTTP 500** ("Failed to get alerts"). Endpoint is broken — flag to backend.
3. **Core value loop is severed at the source.** price_history = 0 rows, 0 alerts ever armed, 0 triggered, and 0 of 149 watchlist items have a `target_price`. Price tracking + alerts are inert platform-wide. Any "savings/alert" metric anywhere is fabricated until this is fixed. (Consistent with prior findings — not new.)
4. **Drip campaign has sent 0 emails ever.** drip-stats.stats = []; 20 users are past their Day-3+ window (up to 12 days overdue) with `last_email_sent = 0`. Do **not** blind-trigger drip-run (risks blasting real inboxes — several are real gmail/icloud addresses).
5. **Newsletter is effectively 1 real subscriber** (3 total, 2 test). Growth here is flat.

### Tracking Validation
- `analytics-tracking` skill is **not available in this environment** — could not run the scripted spot-check.
- Manual assessment: conversion events (signup/watchlist/compare/subscribe) are **not observable** from any endpoint exposed to this agent; cannot confirm they fire. GTM container loads per prior checks, but no event/GA4 data is reachable. **Tracking remains unverifiable → treat funnel %s as unmeasurable, not zero.**

### Competitor Quick Check
No scan run today (no significant prompt; competitor monitoring not data-backed from available tools). No notable items to report.

### For Other Agents (what's usable today)
- **Real, usable:** signups (121 total / 10 wk / 2 today), watchlist (149), top tracked events (list above), 20 overdue drip users.
- **Do NOT use (no data exists):** traffic sources, bounce, conversion rates, price/savings figures, open/CTR.
- **Shipping priorities surfaced by data:** (a) arm alerts — nobody sets target_price; (b) fix `/api/admin/alerts` 500; (c) drip campaign delivery is dead.
