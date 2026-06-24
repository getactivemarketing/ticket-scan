## TicketScan Daily Dashboard — 2026-06-24

> Scope note: Only platform DB metrics are real (pulled live from `/api/admin/*`).
> Traffic, sources, top pages, bounce, and funnel conversion are **n/a** — no GA4
> read access and GTM has no conversion events wired. Not estimated, not fabricated.

### Key Metrics (live from DB)
| Metric                     | Value | Notes                                  |
|----------------------------|-------|----------------------------------------|
| Total registered users     | 130   | +2 today, +9 this week                 |
| New signups (today)        | 2     |                                        |
| New signups (7-day)        | 9     |                                        |
| Total watchlist items      | 159   |                                        |
| Active price alerts armed  | 0     | no targets set → alerts can't fire     |
| Price alerts triggered     | 0     | (ever)                                 |
| Active newsletter subs     | 3     | 2 are test rows; ~1 real subscriber    |
| User favorites             | 0     |                                        |
| Drip emails sent (ever)    | 0     | 20 users overdue, 0 delivered          |
| Price-history rows         | 19    | all for ONE event (see anomaly)        |

### Traffic Sources (24h)
n/a — no analytics read access. Do not report source/conversion splits.

### Top Pages (24h)
n/a — no GA4 / page-view data available.

### Top Watched Events (live)
1. Harry Styles: Together, Together — Madison Square Garden (multiple listings, 2 each)
2. Ariana Grande – Eternal Sunshine Tour — Barclays Center (2)
3. NBA Finals RD4 — Madison Square Garden (2)
4. Flyleaf 20th Anniversary — House of Blues Chicago (2)
5. Noah Kahan: The Great Divide Tour — Kia Center, Orlando (2)
6. World Cup Round of 16 (Match 93) — AT&T Stadium, Arlington (2)

Note: every popular event has `min/avg/max_target = null` — confirms the
watchlist-has-no-targets issue persists; nothing can arm an alert.

### 🚨 Anomalies & Alerts
- **NEW (good): price tracking cron is producing real rows.** `/api/admin/price-history`
  returned 19 rows with actual prices (e.g. SELENA Tribute, $30.07 + fees $38.19),
  timestamped on the 4-hour cadence (04:01, 08:01 UTC). This is a change from the
  prior "price-history empty" state. **Caveat: all 19 rows are for a single event**
  out of 159 watchlist items — coverage is ~0.6%. Most events still return null prices,
  so price/savings figures remain unreportable platform-wide.
- **`/api/admin/alerts` returns HTTP 500** (0.31s) — endpoint still broken. Alert
  reporting impossible until fixed.
- **Drip campaign: 0 emails sent, ever.** 20 users pending, oldest 14 days overdue
  (email #1 due at day 3). Pipeline is inert. Do NOT blind-trigger drip-run (risks
  blasting real inboxes).
- **0 active alerts despite 159 watchlist items** — no target-price UI control exists,
  so the alert/savings feature is non-functional regardless of cron health.
- **Newsletter: only 1 genuine subscriber** (2 of 3 are test@/api-test rows).

### Tracking Validation
- `analytics-tracking` skill not available in this environment — could not run the
  automated spot-check.
- Manual status: no GA4 property wired for read access; GTM container has no
  conversion events configured (signup / watchlist-add / compare / subscribe all
  unmeasured). Until events are added, all funnel/source metrics stay n/a.
- **Unlock for funnel reporting:** add GA4 read access + wire conversion events in GTM.

### Competitor Quick Check
No notable SeatGeek / StubHub / Vivid Seats feature or pricing news surfaced this run.

### Feed to Other Agents (what's real today)
- Content/SEO/Social: top watched events list above is real; no traffic data.
- Email: drip = 0 sent / 20 overdue; 1 real subscriber. Don't invent open/CTR.
- CRO/Growth: 130 users (+9/wk), 159 watchlist, 0 alerts armed. No funnel %s exist.
- Price/Savings claims: still unreportable — 1 of 159 events has price data.
