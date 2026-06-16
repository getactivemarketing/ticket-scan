## TicketScan Daily Dashboard — 2026-06-16

_Source: live `/api/admin/*` (admin key works, HTTP 200). Traffic/funnel rows marked `n/a` are genuinely unmeasurable — GTM is installed but there is no GA4 read access and no conversion events configured. Not fabricated._

### Key Metrics (24h)
| Metric                    | Today (06-16) | Yesterday (06-15) | 7-Day Avg | Trend |
|---------------------------|---------------|-------------------|-----------|-------|
| Unique Visitors           | n/a           | n/a               | n/a       | —     |
| New Signups               | 0             | 1                 | ~1.4/day  | →     |
| Watchlist Items Added     | 0             | 1                 | ~1/day    | →     |
| Price Comparisons Run     | n/a           | n/a               | n/a       | —     |
| Newsletter Subscribers    | 0             | 0                 | 0         | →     |
| Price Alerts Triggered    | 0             | 0                 | 0         | →     |
| Drip Emails Sent          | 0             | 0                 | 0         | →     |

_"Today" = the 06-16 UTC window as of the 06:00 run; no events yet today. Latest signup = user #119 (webbercycle@gmail.com, 06-15 08:00 UTC); latest watchlist add = #157 (Malcolm Todd, same timestamp). `stats.usersToday` = 0, consistent with the activity feed._

### Totals (verified from `/api/admin/stats`)
- Total registered users: **119** (+1 vs yesterday; 10 this week)
- Total active watchlist items: **147** (+1 vs yesterday)
- Total newsletter subscribers (active): **3**
- Total price history records: **0**
- Active alerts armed: **0** | Triggered alerts (all time): **0** | Favorites: **0**

### Traffic Sources (24h)
| Source          | Visitors | Signups | Conversion |
|-----------------|----------|---------|------------|
| Organic Search  | n/a      | n/a     | n/a        |
| Direct          | n/a      | n/a     | n/a        |
| Social          | n/a      | n/a     | n/a        |
| Paid            | n/a      | n/a     | n/a        |
| Email           | n/a      | n/a     | n/a        |
| Referral        | n/a      | n/a     | n/a        |

No GA4 read access → per-source attribution cannot be measured. The API exposes registrations but not their referral source.

### Top Pages (24h)
n/a — requires GA4/analytics page-view data, which is not accessible. Do not fabricate.

### Popular Events Being Tracked (from `/api/admin/popular-events`)
1. **Harry Styles: Together, Together** — Madison Square Garden, NYC (multiple date listings, 2 watchers each) — clearly the top demand signal
2. **Flyleaf w/ Lacey Sturm – 20th Anniversary Tour** — House of Blues Chicago (2)
3. **NBA Finals: TBD at New York Knicks RD4 GM3** — Madison Square Garden, NYC (2)
4. World Cup group-stage matches (Belgium v Iran @ SoFi, Ecuador v Curacao @ Arrowhead) — recent adds
5. JOJI: SOLARIS — Kia Center, Orlando

All `target_price` values are **null** → no alert can arm off these (see anomalies).

### 🚨 Anomalies & Alerts
- **[CHANGED vs memory] Admin API key now authenticates.** All `/api/admin/*` endpoints returned HTTP 200 with the key in the daily task prompt. Prior runs recorded a 401 / "no real key in repo." Funnel/platform counts are now directly readable. (Traffic-source & page-level data still blocked — that needs GA4, not the admin key.)
- **`/api/admin/alerts` returns HTTP 500** (`"Failed to get alerts"`). Endpoint is broken, not empty. Long-standing.
- **Price tracking inert:** `price-history` = 0 rows. Any price/savings/recommendation figure remains unbacked — do not publish dollar claims.
- **Alerts severed at source:** 147 watchlist items, every `target_price = null` → `activeAlerts = 0`. Nobody is setting targets, so the price-drop loop can never fire. This is the #1 product gap behind the empty metrics.
- **Drip campaign has sent 0 emails ever:** 20 users pending (`last_email_sent = 0` for all), several 8–11 days overdue. Do not blind-trigger a drip run (risk of blasting real inboxes); fix is for the Email agent/owner to verify SMTP + send path first.
- **No new activity in the 06-16 window yet** (run is at 06:00 UTC). Normal, not an anomaly.

### Tracking Validation
See `tracking-validation-2026-06-16.md`. Summary: `analytics-tracking` skill is not installed in this environment; GTM container present but conversion events unconfigured and unverifiable without GA4 access.

### Competitor Quick Check
No new verifiable competitor launches/promotions observed via available sources today. (No automated competitor feed is wired up; this line is a manual-scan placeholder, not a data pull.)
