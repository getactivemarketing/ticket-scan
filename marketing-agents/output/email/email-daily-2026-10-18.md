# Email Daily — 2026-10-18

Checked the deployed admin API on 2026-10-18 (America/New_York). Checks were read-only; no drip run, blast, or email send was triggered.

## Drip Campaign

- Emails sent (24h): **0 recorded**
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0 recorded**
- Failures, bounces, opens, and clicks: **Not measurable**; the API exposes no provider-delivery or engagement fields.
- `/api/admin/drip-stats` returned an empty `stats` array and 20 pending users. The endpoint is capped at 20; every visible pending user has `last_email_sent: 0`.
- The 20 visible pending users include 5 who are at least 30 days from signup, so the campaign remains materially behind schedule.

**Escalation:** Do not trigger `/api/admin/drip-run` blindly. It sends real email and has no preview or dry-run option. Verify SMTP and next-due behavior with an approved test recipient first.

## Price Alerts

- Alerts triggered (24h): **Not measurable**; `GET /api/admin/alerts` returned HTTP 500 (`Failed to get alerts`).
- Events with drops: **Unavailable**. Price tracking is down and no price movement should be represented in email copy.
- Delivery failures: **Not measurable** because the alert endpoint fails and no delivery telemetry is exposed.
- Platform stats report active alerts **0** and triggered alerts ever **0 recorded**; the stats endpoint has no 24-hour breakdown.

## Subscriber Growth

- New subscribers (24h): **0**
- New-subscriber sources: **none today**
- Unsubscribes (24h): **0 observed**; all 7 returned subscriber records are active
- Net: **0**
- Total active: **7**
- All-time active source mix: site-footer **3**, homepage **1**, onsales **1**, test **1**, api-test **1**

## Watchlist Digest Readiness

- Watchlist items: **256**
- Upcoming items from 2026-10-18 through 2026-11-01: **8 items across 7 users**
- Available personalization: event name, date, venue, city
- Unavailable: current price, price delta, target comparison, recommendation, and price-alert status
- Send-ready date-based drafts: [watchlist-digest-2026-10-18.md](watchlist-digest-2026-10-18.md)

## Subject Line & CTA A/B Test

No email is approved for sending today, so no live A/B test is running.

- Version A: `Your TicketScan watchlist update — [X] events coming up`
- Version B: `Your next ticket date is getting closer`
- Version C: `[X] events on your watchlist — dates and venues inside`
- Recommended first test: **A vs. B** for a direct utility versus light urgency comparison.
- Preview A: `Your next watchlist dates and venues, in one quick scan.`
- Preview B: `A few dates worth keeping on your radar.`
- Primary CTA: `Review my watchlist` → `https://www.ticketscan.io/watchlist`
- Keep one CTA above the fold. Do not use price, alert, or buy/wait language.

## Delivery Issues to Escalate

1. Drip sends remain at zero with no failure telemetry despite pending users.
2. `/api/admin/alerts` returns HTTP 500, so alert delivery cannot be audited.
3. Price tracking is down; no digest should contain prices, trends, alerts, or buy/wait recommendations.
4. Add explicit sent, bounced, opened, and clicked events so deliverability can be measured.
5. Suppress test addresses (`test@example.com` and the `api-test` / `test` sources) before any production newsletter send.

## Analytics Handoff

- Registered users: **266**; users today: **0**; users this week: **2**
- Watchlist items: **256**
- Active subscribers: **7**; new today: **0**; net today: **0**
- Active alerts: **0**; triggered alerts ever: **0 recorded**
- Drip emails recorded: **0**
