# Email Daily — 2026-10-17

Checked the deployed admin API on 2026-10-17 (America/New_York). No send, drip-run, blast, or social-post endpoint was triggered.

## Drip Campaign

- Emails sent (24h): **0**
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0**
- Failures/bounces: **Not exposed**; no sends are recorded
- `/api/admin/drip-stats` returned an empty `stats` array and 20 pending users, all with `last_email_sent: 0`.
- Among those 20 visible pending users, overdue counts are: E1 **20**, E2 **18**, E3 **18**, E4 **9**, E5 **5**. The endpoint is capped at 20, so these are lower bounds for the full user base.

**Escalation:** The drip campaign still has no recorded sends. Do not trigger `/api/admin/drip-run` blindly: it performs real sends and has no preview or dry-run option. Verify SMTP and next-due behavior with an approved test recipient first.

## Price Alerts

- Alerts triggered (24h): **Not measurable**; `/api/admin/alerts` returns HTTP 200 with `{success:false,error:"Failed to get alerts"}`.
- Events with drops: **Not available**. Price tracking is down and no price movement should be represented in email copy.
- Delivery failures: **Not measurable** because the alert endpoint fails and no delivery telemetry is exposed.
- Platform stats: active alerts **0**, triggered alerts ever **0**.

## Subscriber Growth

- New subscribers (24h): **0** (the newest subscriber is 2026-10-12)
- New-subscriber sources: **none today**
- Unsubscribes (24h): **0** (all 7 records are active)
- Net: **0**
- Total active: **7**
- All-time active source mix: site-footer **3**, homepage **1**, onsales **1**, test **1**, api-test **1**.

## Watchlist Digest Readiness

- Watchlist items: **256**
- Upcoming items from 2026-10-17 through 2026-10-31: **9 items across 8 users**
- Available personalization: event name, date, venue, city
- Unavailable: current price, price delta, target comparison, recommendation, and price-alert status
- Send-ready date-based drafts: [watchlist-digest-2026-10-17.md](watchlist-digest-2026-10-17.md)

## Subject Line & CTA A/B Test

No email is approved for sending today, so no live A/B test is running.

- Version A: `Your TicketScan watchlist update — [X] events coming up`
- Version B: `Your next ticket date is getting closer`
- Version C: `[X] events on your watchlist — dates and venues inside`
- Recommended first test: **A vs. B** for a date-urgency versus direct-update comparison.
- Primary CTA: `Review my watchlist` → `https://www.ticketscan.io/watchlist`
- Keep one CTA above the fold. Do not use “set a price alert,” “buy now,” or price-movement language.

## Delivery Issues to Escalate

1. Drip sends remain at zero with no failure telemetry.
2. `/api/admin/alerts` remains broken, so alert delivery cannot be audited.
3. Price tracking is down; no digest should contain prices, trends, alerts, or buy/wait recommendations.
4. Add a read-only, user-grouped digest endpoint so personalized sends do not require exposing admin watchlist data to the email agent.

## Analytics Handoff

- Registered users: **266**; users today: **0**; users this week: **2**
- Watchlist items: **256**
- Active subscribers: **7**; new today: **0**; net today: **0**
- Active alerts: **0**; triggered alerts ever: **0**
- Drip emails recorded: **0**
