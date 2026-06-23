## TicketScan Daily Dashboard — 2026-06-23

_All figures pulled live from `/api/admin/*`. Traffic/source/funnel rows are marked **n/a** — GTM (GTM-T476F9S4) loads but there is no GA4 tag or conversion events wired, so we have no visitor-level data. Do not infer these numbers._

### Key Metrics
| Metric                    | Today | This Week | Source / Notes |
|---------------------------|-------|-----------|----------------|
| New Signups               | 2     | 9         | stats: usersToday / usersThisWeek |
| Watchlist Items Added     | 2     | —         | both Ariana Grande, user vince12000000 |
| Newsletter Subscribers    | 0     | 0         | still 3 total (no growth) |
| Price Alerts Triggered    | 0     | 0         | activeAlerts=0; no targets set anywhere |
| Drip Emails Sent          | 0     | 0         | drip-stats empty; all pending users last_email_sent=0 |
| Unique Visitors           | n/a   | n/a       | no GA4 / analytics destination |
| Price Comparisons Run     | n/a   | n/a       | not instrumented |

### Totals (live)
- Total registered users: **128** (+2 today)
- Total active watchlist items: **159**
- Active newsletter subscribers: **3** (all 3 are test/seed-era; only 1 organic-ish "homepage" signup, Feb)
- Total favorites: **0**
- Price-history records: **13** (see note below)

### Traffic Sources / Top Pages
**n/a — no analytics.** GTM container fires but no GA4 tag (`G-…`) and no conversion events are configured. Cannot report visitors, sources, bounce, or page-level data. Unlocking this requires a GA4 property + conversion event wiring (signup, watchlist_add, newsletter_subscribe).

### Popular Events Being Tracked (by watch_count)
1. Ariana Grande — The Eternal Sunshine Tour — Barclays Center, Brooklyn (2)
2. Harry Styles: Together, Together — Madison Square Garden, NYC (multiple listings, 2 each)
3. NBA Finals (Knicks RD4) — Madison Square Garden, NYC (2)
4. Flyleaf w/ Lacey Sturm — House of Blues Chicago (2)
5. Noah Kahan: The Great Divide Tour — Kia Center, Orlando (2)

(No event has a target price set — `avg_target` null across the board.)

### 🚨 Anomalies & Status Flags

**NEW / positive — price tracking is now writing data.**
`/api/admin/price-history` returned **13 rows** (previously 0 platform-wide). The 4-hour cron is running and logging on schedule (06-22 08:01 → 06-23 08:01, every 4h). **Caveat:** all 13 rows are for a single event ("SELENA Tribute DREAMING OF YOU"), price flat at $30.07 the whole window. So tracking is alive but covering ~1 of 159 watchlist items. Not yet enough history on any event to power a real trend/recommendation. Worth a follow-up on why coverage is so narrow.

**Unchanged blockers (do not re-litigate, just status):**
- **Alerts inert.** `activeAlerts=0`, `triggeredAlerts=0`. Root cause is upstream, not tracking: no watchlist item has a `target_price` (no UI input control exists to set one). Alerts cannot arm regardless of price data. Any "savings/alerts working" claim is false.
- **`/api/admin/alerts` returns HTTP 500** ("Failed to get alerts"). Endpoint still broken.
- **Drip campaign has sent 0 emails, ever.** `drip-stats.stats` empty; pending queue includes users up to ~13+ days since signup with `last_email_sent=0`. Do NOT blind-trigger drip-run (risk of blasting real inboxes).
- **Newsletter flat at 3** subscribers, all test/seed-era. No organic growth.

### Tracking Validation
- GTM-T476F9S4: ✅ loads on homepage.
- GA4 / conversion events: ❌ none. signup / watchlist_add / newsletter_subscribe / comparison events are NOT firing to any analytics destination. This is the single biggest data gap — every funnel/source metric is blind until it's fixed.

### Competitor Check
No scan run today (no new signal; skipping to avoid manufactured notes).

---
_Feeds for other agents: real signups (+2 today, 128 total) and watchlist (159) are usable. Traffic/source/funnel/conversion-% are n/a everywhere — agents must not fabricate them. New: price-history has live data but only for 1 event._
