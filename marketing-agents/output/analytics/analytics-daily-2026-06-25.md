## TicketScan Daily Dashboard — 2026-06-25

> **Scope note:** Only platform DB metrics are real (pulled live from `/api/admin/*`).
> Traffic, sources, top pages, bounce rates, and funnel conversion are **n/a** — no GA4
> read access and GTM has no conversion events wired. Not estimated, not fabricated.

---

### Key Metrics (live from DB)

| Metric                       | Today | Yesterday | vs Yesterday | 7-Day      |
|------------------------------|-------|-----------|--------------|------------|
| Total registered users       | 132   | 130       | +2           | +11        |
| New signups (today)          | 2     | 2         | →            | —          |
| Total watchlist items        | 160   | 159       | +1           | +11        |
| Watchlist items added (24h)  | 1     | —         | —            | 11         |
| Active price alerts armed    | 0     | 0         | →            | 0          |
| Price alerts triggered       | 0     | 0         | →            | 0 (ever)   |
| Active newsletter subs       | 3     | 3         | →            | —          |
| User favorites               | 0     | 0         | →            | —          |
| Drip emails sent (ever)      | 0     | 0         | →            | 0          |
| Price-history rows           | 25    | 19        | +6           | —          |

### Traffic Sources (24h)
n/a — no analytics read access. Do not report source/conversion splits.

### Top Pages (24h)
n/a — no GA4 / page-view data available.

---

### Top Watched Events (live from `/api/admin/popular-events`)

1. **Ariana Grande – The Eternal Sunshine Tour** — Barclays Center, Brooklyn (2 watching)
2. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, New York (2 watching)
3. **Harry Styles: Together, Together** — Madison Square Garden, New York (2 watching, multiple date listings)
4. **Flyleaf with Lacey Sturm – 20th Anniversary Tour** — House of Blues Chicago (2 watching)
5. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando (2 watching)

Note: every popular event has `target_price = null` — confirms the watchlist-no-targets
bug persists. No alert can ever arm on any of these events.

---

### 🚨 Anomalies & Alerts

**Price tracking cron is running but coverage is tiny.**
`/api/admin/price-history` returned 25 rows (+6 since yesterday), all for a single
event (SELENA Tribute DREAMING OF YOU — Gaslamp Long Beach, $30.07 base / $38.19 w/fees).
Out of 160 watchlist items, that's ~0.6% price coverage. All other events return null
prices, so no price/savings figures are reportable platform-wide.

**`/api/admin/alerts` endpoint returns HTTP 500.** Alert data completely unavailable.
Still broken as of today.

**Drip pipeline: 0 emails delivered ever.** From the drip-stats pending list, users are
accumulating: id 132 registered 2026-06-25 01:24 UTC (due email #1 in 3 days); id 131
registered 2026-06-24 17:20 UTC; several others 1–2 days old. Do NOT blind-trigger
`/api/admin/drip-run` — risks blasting real inboxes. Needs investigation before enabling.

**Newsletter: 1 genuine subscriber.** The 3-subscriber total includes `test@example.com`
(api-test) and `samir.sgpatel@gmail.com` (test source). One real external subscriber:
`roos_leeuwen@eaglesmail.net` (homepage, 2026-02-01).

**watchlist-no-targets confirmed again.** All 160 watchlist items have no target price set.
The UI has no target-price input. Until that one-field fix ships, alert/savings features
remain non-functional regardless of cron health.

---

### Tracking Validation

- `analytics-tracking` skill not available in this environment.
- GTM container installed but **no conversion events wired**: signup, watchlist-add,
  price-compare, and newsletter-subscribe are all unmeasured.
- No GA4 property connected for read access.
- **Unlock funnel reporting:** add GA4 read access + configure conversion events in GTM.

---

### Feed Summary for Other Agents

| Agent           | What's available                                         | What's n/a                        |
|-----------------|----------------------------------------------------------|------------------------------------|
| Content         | Top 5 watched events (see above)                         | Page views, content performance    |
| SEO             | 132 users, 160 watchlist items growing                   | Organic traffic, landing page data |
| Social          | Trending: Ariana Grande, Harry Styles, NBA Finals        | Social traffic, referral %         |
| Paid Ads        | $0 spend confirmed (no ad accounts)                      | Paid conversions, ROAS             |
| Email           | 3 subs (1 real), 0 drip emails ever sent                 | Open rates, CTR, attribution       |
| CRO             | Key CRO blockers: no-target UI, compare login gate       | Funnel %, bounce rate              |
| Growth          | +2 signups today, +11 this week, 132 total               | Retention, churn, last_login data  |
