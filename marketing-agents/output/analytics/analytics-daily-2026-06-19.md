## TicketScan Daily Dashboard — 2026-06-19

**Data source:** Live admin API (`/api/admin/*`), pulled 2026-06-19. Admin key is now working — all endpoints return 200 except `/alerts` (see anomalies). Traffic/funnel rows are marked **n/a**: GTM is installed but there is no GA4 read access and no in-app analytics, so visitors/bounce/source/conversion are genuinely unmeasurable. Numbers below are from the platform DB only.

### Key Metrics (from platform DB)
| Metric                  | Today (06-19) | Yesterday (06-18) | 7-Day (06-12→18) | Trend |
|-------------------------|---------------|-------------------|------------------|-------|
| New Signups             | 0 so far      | 1                 | 8 (~1.1/day)     | →     |
| Watchlist Items Added   | 0 so far      | 1                 | ~4               | →     |
| Unique Visitors         | n/a           | n/a               | n/a              | —     |
| Price Comparisons Run   | n/a           | n/a               | n/a              | —     |
| Newsletter Subscribers  | 0             | 0                 | 0                | →     |
| Price Alerts Triggered  | 0             | 0                 | 0                | →     |
| Drip Emails Sent        | 0             | 0                 | 0                | →     |

### Totals (live)
- **Registered users:** 122 (8 this week, 1 today per stats)
- **Active watchlist items:** 150
- **Active alerts armed:** 0
- **Triggered alerts (all-time):** 0
- **Newsletter subscribers (active):** 3 — of which 2 are test rows (`test@example.com`, `samir...test`); **1 real external subscriber** (`roos_leeuwen@…`, signed up 2026-02-01). No new subs since Feb.
- **Price history records:** 0
- **User favorites:** 0

### Recent Signup Trend (DB)
06-18: 1 · 06-17: 0 · 06-16: 2 · 06-15: 1 · 06-14: 1 · 06-13: 2 · 06-12: 2. Steady ~1/day organic trickle; no spike or drop-off worth flagging.

### Traffic Sources / Top Pages (24h)
**n/a — not measurable.** GTM (GTM-T476F9S4) fires page views but there is no GA4 property we can read and no server-side event capture. Until a GA4 read connection or server event log exists, these tables cannot be filled with real data. Not estimating.

### Popular Events Being Tracked (live, by watch_count)
1. Harry Styles: Together, Together — Madison Square Garden, NYC (multiple event IDs, 2 each)
2. Flyleaf 20th Anniversary Tour — House of Blues Chicago (2)
3. World Cup Round of 16: W83 vs W84 (Match 93) — AT&T Stadium, Arlington (2)
4. NE-YO & AKON: Nights Like This Tour 2026 (latest add, 06-18)
5. Mix of WC group-stage matches + Santana/Doobie Brothers, Chris Stapleton, JOJI
- **All popular events show `target` = null** → confirms alerts can't arm (see below).

### 🚨 Anomalies & Structural Issues (all verified against live API today)
1. **`/api/admin/alerts` returns HTTP 500** ("Failed to get alerts"). Broken endpoint — flag to backend. Every other admin route is 200.
2. **0 alerts armed across 150 watchlist items.** Root cause unchanged: no target-price input in the add-to-watchlist UI, so every item is saved with null target. The alert/savings feature cannot function. (Front-end fix, not analysis.)
3. **price_history is empty (0 rows).** Price tracking cron is producing no data; any price/savings figure anywhere is fabricated. Inert platform-wide.
4. **Drip campaign: 0 emails sent ever.** 20 users are past-due (oldest 14 days since signup, `last_email_sent=0` for all). Drip is not firing.
5. **Newsletter flat at 3 (effectively 1 real).** No signups since Feb 1; consistent with the known homepage-only/dead-end-CTA history (forms since added but not converting).

### Competitor Quick Check
No notable SeatGeek/StubHub/Vivid Seats feature or pricing news surfaced today. Nothing significant to report.

### Notes for Other Agents
- **Content / SEO / Social / Paid:** No traffic, source, or page-level data available (no GA4). Do not invent visitor or conversion numbers.
- **Email:** Drip is sending 0; newsletter is flat at 1 real subscriber. Subscriber growth = 0 this week.
- **CRO:** Funnel %s are unmeasurable (no analytics). The actionable P0s are shipping tasks: target-price input, drip activation, the `/alerts` 500.
- **Growth:** Signups steady ~1/day organic; no churn signal available (no last_login column).
