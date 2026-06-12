## Email Daily — 2026-06-12

_All figures pulled live from admin API (HTTP 200, admin key now works). No estimated/invented metrics. We have no ESP open/click tracking (Gmail SMTP, no pixels) — open/CTR are intentionally marked n/a, not fabricated._

### Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 (nothing attempted)
- Open / CTR: n/a (no tracking instrumented)
- **Root issue (recurring):** `/api/admin/drip-stats` → `stats: []`. The drip campaign has sent **0 emails, ever**. All listed pending users have `last_email_sent: 0`. The daily 10am UTC drip cron is not delivering.
- **Backlog:** of the 20 pending users returned, **~16 are past the Day-3 E1 threshold** and **10 are past the Day-7 E2 threshold**. With `stats: []`, effectively every user past day 3 (most of the 114) is overdue.

### Price Alerts
- Alerts triggered (24h): **0**
- Events with drops: none detected (price_history inert — see below)
- Delivery failures: 0
- **Root issue:** `activeAlerts: 0` / `triggeredAlerts: 0` across 145 watchlist items. Nobody sets a `target_price`, so the price-alert loop has nothing to arm against. Price history is also empty platform-wide, so no drop signal exists even if targets were set.

### Subscriber Growth
- New subscribers: **0**
- Unsubscribes: 0
- Net: **0**
- Total active (newsletter): **3** (2 are test addresses → ~1 real subscriber)
- Separately: **1 new account registration today** (user id 114) — accounts ≠ newsletter; registrants are not opted into the list (the /register opt-in is still TODO).

### Watchlist Digest Prep
- Status: **blocked.** A personalized digest needs price movement + target context per user. With `activeAlerts: 0`, no targets, and empty price_history, there is no real "prices DOWN/UP" data to populate — sending a digest today would mean inventing numbers. Template held, not sent.

### Subject Line / CTA A/B
- No send today, so no live A/B test. Nothing to log.

### Escalation (what would actually move email metrics)
1. **Fix the drip cron — highest leverage.** 0 sends ever vs. a ~16-user E1 / 10-user E2 backlog. Do NOT blast the full backlog at once (real Gmail/iCloud inboxes → spam-flag risk). Recommend: confirm SMTP creds load in prod, then send to the *most overdue cohort first* (a handful), verify delivery, then ramp.
2. **Arm alerts at the source:** add a `target_price` capture step in the watchlist add flow + backfill price_history, otherwise price-alert emails can never fire.
3. **Add /register newsletter opt-in:** 114 accounts vs. 3 (≈1 real) subscribers is the conversion gap. Registrants should be offered the list.

### Verification notes
- Source: `GET /api/admin/drip-stats`, `/api/admin/stats`, `/api/admin/newsletter` — all HTTP 200, ~0.3s.
- Admin key in this run is valid (prior runs had none → this corrects the "unauthable locally" caveat in memory).
