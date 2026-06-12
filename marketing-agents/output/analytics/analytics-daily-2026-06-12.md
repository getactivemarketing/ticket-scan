## TicketScan Daily Dashboard — 2026-06-12

_Generated 06:00 UTC. All figures below are pulled live from `/api/admin/*` (HTTP 200, ~0.3s each). Anything the API cannot supply (traffic sources, page-level visits, bounce rates) is marked **n/a — no query-accessible analytics** rather than estimated. See Tracking Validation for why._

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| Unique Visitors           | n/a   | n/a       | n/a       | —     |
| New Signups               | 1     | 2         | ~1.4      | ↓     |
| Watchlist Items Added     | 0     | 9         | ~2.3      | ↓     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 0     | 0         | 0         | →     |
| Price Alerts Triggered    | 0     | 0         | 0         | →     |
| Drip Emails Sent          | 0     | 0         | 0         | →     |

**Read on today:** A quiet day. One new signup in the trailing 24h — `kellileeriach@yahoo.com` (2026-06-12 03:42 UTC, user #114), who has added 0 watchlist items so far. **Zero watchlist adds** in the window (`totalWatchlistItems` flat at 145; newest item is still #155 from 06-10). Yesterday's "+9" was a single power user (#112) bulk-loading World Cup matches in ~5 minutes — that did not repeat, so the drop to 0 is reversion to baseline, not a regression. `usersToday=1` and the activity log corroborate (no watchlist/signup events logged on 06-11; last activity is the 06-12 signup). Small-N as always — treat single-day moves as noise.

### Totals
- Total registered users: **114** (+10 this week, +1 today) — `usersThisWeek=10`
- Total active watchlist items: **145** (unchanged vs yesterday)
- Total newsletter subscribers (active): **3** (all dated Jan–Feb; 2 are test/seed addresses — no organic newsletter growth)
- Total price history records: **0** (`/api/admin/price-history` → `total: 0`)

### Traffic Sources (24h)
**n/a — no query-accessible analytics.** GTM (`GTM-T476F9S4`) is installed site-wide but there is no GA4/GTM reporting API the agent can read, and no source/UTM attribution is captured in-app. Reporting source/conversion splits here would be fabrication. To unblock: grant a GA4/GTM reporting read path, or log referrer+UTM server-side on signup.

### Top Pages (24h)
**n/a — no query-accessible analytics.** Same cause — pageview/bounce data lives only in GTM, which the agent cannot query.

### Popular Events Being Tracked
From `/api/admin/popular-events` (max `watch_count` = 2; long tail of 1s — small dataset):
1. **Harry Styles: Together, Together** — Madison Square Garden, New York (multiple TM listing IDs, 2 each — the MSG residency dominates the list)
2. **Flyleaf w/ Lacey Sturm — 20th Anniversary Tour** — House of Blues Chicago (2)
3. **NBA Finals — Knicks (RD4)** — Madison Square Garden, New York (2)
4. **World Cup Round of 16: W83 vs. W84 (Match 93)** — AT&T Stadium, Arlington (2)
5. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando (2)

_Note: `min_target`/`max_target`/`avg_target` are `null` across every popular event — consistent with the standing issue that no watchlist item carries a `target_price`._

### 🚨 Anomalies & Alerts
- **Quiet day, baseline reversion (today).** Signups 1, watchlist adds 0. Nothing alarming — yesterday's +9 was a one-user spike that didn't recur. Downstream agents should not read the 0 as a demand collapse.
- **Price alerts structurally dead (ongoing).** `activeAlerts=0`, `triggeredAlerts=0`, and **all 145 watchlist items carry `target_price=null`** — the alert loop has nothing to arm against. `/api/admin/alerts` also returns **HTTP 500 `Failed to get alerts`** (broken endpoint, not just empty). Any price-drop/savings activity reported anywhere is fabricated. [memory: watchlist-no-targets-alerts-cant-arm, price-history-empty-alerts-broken]
- **Price history empty (ongoing).** `/api/admin/price-history` returns 0 rows — price tracking is not persisting data, so no trend/recommendation output is real.
- **Drip campaign has never sent (ongoing).** `/api/admin/drip-stats` → `stats: []`; every pending user shows `last_email_sent: 0`, including users now 7–10 days past signup (e.g. #95 `griffin@griffinli.com`, 10 days). 0 drip emails delivered, ever. Do **not** blind-trigger drip-run (real inboxes). [memory: drip-campaign-never-sends]
- **Newsletter flat.** 3 active subscribers, unchanged for months; 2 are test/seed. No organic subscribe events reaching the list despite forms live on blog/footer.
- **Conversion event tracking absent (see Tracking Validation).** Not a regression — it has never existed.

### Competitor Quick Check
No automated competitor data source is wired up; nothing verified to report today. Not fabricating headlines.

---
_Data integrity note: this dashboard reports only what the admin API returns. Visitor/traffic/conversion-rate rows are left n/a by design — the platform has no analytics query layer, so those numbers cannot be sourced. Downstream agents should treat any visit-based segmentation as unavailable._
