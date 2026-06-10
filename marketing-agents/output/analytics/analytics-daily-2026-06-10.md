## TicketScan Daily Dashboard — 2026-06-10

_Generated 06:00 UTC. All figures below are pulled live from `/api/admin/*`. Anything the API cannot supply (traffic sources, page-level visits, bounce rates) is marked **n/a — no query-accessible analytics** rather than estimated. See Tracking Validation for why._

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| Unique Visitors           | n/a   | n/a       | n/a       | —     |
| New Signups               | 2     | 0         | ~2.0      | ↑     |
| Watchlist Items Added     | 2     | 0         | ~1.9      | ↑     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 0     | 0         | 0         | →     |
| Price Alerts Triggered    | 0     | 0         | 0         | →     |
| Drip Emails Sent          | 0     | 0         | 0         | →     |

**Read on today:** Back to the baseline ~2/day pace after yesterday's flat window. Two signups landed in the trailing 24h — `haileybug1751@gmail.com` (2026-06-09 11:24 UTC, user #110) and `brickin8tor@gmail.com` (2026-06-09 14:04 UTC, user #111) — each immediately followed by one watchlist add (Noah Kahan → Kia Center; Ye → Raymond James). Both adds are independently confirmed by `totalWatchlistItems` moving 134 → 136 and `usersToday=2`. `usersThisWeek` reads 15. Small-N as always; one on-pace day is noise, not signal.

### Totals
- Total registered users: **111** (+15 this week, +2 today)
- Total active watchlist items: **136**
- Total newsletter subscribers (active): **3** (all dated Jan–Feb; 2 are test/seed addresses — no organic newsletter growth)
- Total price history records: **0** (`/api/admin/price-history` → `total: 0`)

### Traffic Sources (24h)
**n/a — no query-accessible analytics.** GTM (`GTM-T476F9S4`) is installed site-wide but there is no analytics API or reporting integration the agent can read, and no source/UTM attribution is captured in-app. Reporting source/conversion splits here would be fabrication. To unblock: grant a GA4/GTM reporting read path, or log referrer+UTM server-side on signup.

### Top Pages (24h)
**n/a — no query-accessible analytics.** Same cause as above — pageview/bounce data lives only in GTM, which the agent cannot query.

### Popular Events Being Tracked
From `/api/admin/popular-events` (max watch_count = 2; long tail of 1s — small dataset):
1. **Harry Styles: Together, Together** — Madison Square Garden, New York (multiple TM listing IDs, 2 each)
2. **Flyleaf w/ Lacey Sturm — 20th Anniversary Tour** — House of Blues Chicago (2)
3. **NBA Finals — Knicks (RD4)** — Madison Square Garden, New York (2)
4. **World Cup Round of 16: W83 vs. W84 (Match 93)** — AT&T Stadium, Arlington (2)
5. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando (newest add)

_Note: `min_target`/`max_target`/`avg_target` are `null` across every popular event — consistent with the standing issue that no watchlist item carries a `target_price`._

### 🚨 Anomalies & Alerts
- **Price alerts structurally dead (ongoing).** `activeAlerts=0`, `triggeredAlerts=0`, and **all 136 watchlist items have `target_price=null`** — the alert loop has nothing to arm against. `/api/admin/alerts` also returns **HTTP 500 `Failed to get alerts`**. Any price-drop/savings activity reported anywhere is fabricated. [see memory: watchlist-no-targets-alerts-cant-arm, price-history-empty-alerts-broken]
- **Price history empty (ongoing).** `/api/admin/price-history` returns 0 rows — price tracking is not persisting data, so no trend/recommendation engine output is real.
- **Drip campaign has never sent (ongoing).** `/api/admin/drip-stats` → `stats: []`; every pending user shows `last_email_sent: 0`, including users now 6+ days past signup. 0 drip emails delivered, ever. Do **not** blind-trigger drip-run (real inboxes). [see memory: drip-campaign-never-sends]
- **Newsletter flat.** 3 active subscribers, unchanged for months; 2 are test/seed. No organic subscribe events are reaching the list despite forms now being live on blog/footer.
- **Conversion event tracking absent (see Tracking Validation).** Not a regression — it has never existed.

### Competitor Quick Check
No automated competitor data source is wired up; nothing verified to report today. Not fabricating headlines.

---
_Data integrity note: this dashboard reports only what the admin API returns. Visitor/traffic/conversion-rate rows are left n/a by design — the platform has no analytics query layer, so those numbers cannot be sourced. Downstream agents should treat any visit-based segmentation as unavailable._
