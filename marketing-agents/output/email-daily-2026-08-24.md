## Email Daily — 2026-08-24

Data checked against the production admin API on 2026-08-24. The API does not currently expose opens, clicks, bounces, or per-send timestamps for drip/alert delivery, so unavailable fields are marked rather than estimated.

### Drip Campaign

- Emails sent (24h): **0 observed / not independently time-windowed** — `/api/admin/drip-stats` returned an empty aggregate `stats` array.
- By email #: E1: 0 observed, E2: 0 observed, E3: 0 observed, E4: 0 observed, E5: 0 observed.
- Pending users returned: 20; users at or beyond the Day 3 threshold in the returned sample: 13.
- Failures/bounces: **Not exposed by the endpoint**.
- Open/click rates: **Not tracked/exposed by the endpoint**.
- Action: verify the daily cron/provider configuration before sending a campaign; do not manually trigger a blast from this report.

### Price Alerts

- Alerts triggered (24h): **0 recorded** in aggregate stats.
- Events with drops: **None verifiable**. Price history has 202 records, but the latest check is 2026-07-24 20:01 UTC; there were 0 records in the last 24 hours.
- Delivery failures: **Not exposed**.
- Reporting issue: `/api/admin/alerts` returns HTTP 500 because the route requests `triggered_at` and `email_sent`, while the initialized table uses `sent_at`. This blocks independent alert auditing.

### Subscriber Growth

- New subscribers today: **0** (2026-08-24 UTC; sources: none).
- Unsubscribes today: **0 observed**; no unsubscribe activity is exposed in the returned subscriber data.
- Net: **0**.
- Total active: **5**.
- Source mix, all active: site-footer 2, homepage 1, test 1, api-test 1.

### Watchlist Digest Readiness

- Active/future watchlist items: 227 total platform items; 29 events fall within the next 14 days (Aug 24–Sep 7) across 17 users.
- Events with a target price in that 14-day cohort: **0**.
- Price status and recommendation changes: **Unavailable** because current price history is stale and no target prices are set for the cohort.
- Personalized digest copy is ready in `watchlist-digest-2026-08-24.md`. It uses an honest “tracking paused / set a target” state instead of fabricated price movement.

### Subject-Line A/B Test

- Version A: `Your Ticket Watchlist Update — [X] events tracked`
- Version B: `Your tickets are being watched — here’s what needs attention`
- Recommended primary CTA: **Open my watchlist** → `https://www.ticketscan.io/watchlist`
- Secondary CTA: **Set a target price** → `https://www.ticketscan.io/watchlist`
- Test note: volume is too low for a meaningful statistical A/B test today (17 digest-ready users). If testing anyway, split 50/50 and log opens/clicks once instrumentation exists.

### Escalation

1. **P1:** Restore price tracking; the latest data is 31 days old, making price alerts and digest recommendations stale.
2. **P1:** Fix `/api/admin/alerts` schema mismatch (`sent_at` vs. `triggered_at`/`email_sent`).
3. **P2:** Add delivery, bounce, open, click, and per-24-hour aggregation to admin reporting.
4. **P2:** Confirm the daily drip scheduler and email provider health; aggregate campaign stats are currently empty.

### Analytics Handoff

The subscriber growth result for Agent 7 is: **0 new, 0 unsubscribes, net 0, 5 active total**. Source mix: site-footer 2, homepage 1, test 1, api-test 1.
