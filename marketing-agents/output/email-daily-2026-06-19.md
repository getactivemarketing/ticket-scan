## Email Daily — 2026-06-19

All figures pulled live from admin API (HTTP 200, ~0.3s). No estimates.

### Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 (none attempted — `drip-stats.stats` is empty; 0 drip emails sent ever)
- **Overdue users: 20** (all `last_email_sent: 0`), oldest 14 days past signup (ids 103–104). Day-3 trigger threshold long crossed for 18 of them.

### Price Alerts
- Alerts triggered (24h): **0**
- Events with drops: none
- Delivery failures: 0
- Root cause unchanged: `activeAlerts: 0` / `triggeredAlerts: 0` — no watchlist item has a target price, so alerts physically cannot arm (150 watchlist items, 0 armed). See [[watchlist-no-targets-alerts-cant-arm]].

### Subscriber Growth
- New subscribers: **0**
- Unsubscribes: 0
- Net: **0**
- Total active: **3** (roos_leeuwen [homepage], samir.sgpatel [test], test@example.com [api-test]) — 2 of 3 are test addresses; only 1 organic, dated Feb 1.

### Platform context (live `/admin/stats`)
- Total users: 122 (+8 this week, +1 today)
- Watchlist items: 150 | Active alerts: 0 | Favorites: 0

### Status / Escalation
Two systemic blockers persist — both are **engineering tickets, not content problems**, and I am not re-speccing them:
1. **Drip pipeline inert.** 20 users overdue, 0 ever delivered. Do NOT blind-trigger `/drip-run` — it risks blasting 20 real inboxes (incl. live gmail/icloud addresses) with a never-tested sequence. Needs a verified dry-run path before any send. See [[drip-campaign-never-sends]].
2. **Alerts can't arm.** No target-price input exists in the UI; price-drop emails (the core value prop) can never fire. Front-end fix owned by web team. See [[watchlist-no-targets-alerts-cant-arm]].

No watchlist digest prepared today: with `activeAlerts: 0` and no real price history ([[price-history-empty-alerts-broken]]), every "🟢 price DOWN $X" line would be fabricated. Digest stays blocked on the same alert-arming fix — sending invented price movements would be worse than sending nothing.

No A/B subject test run: no email is going out today, so there's nothing to test.
