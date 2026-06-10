# Email Daily — 2026-06-10

All figures pulled live from admin API (`/api/admin/drip-stats`, `/newsletter`, `/stats`, `/price-history`, `/alerts`) at run time. Endpoints that returned no data or errors are reported as such — no estimated or invented numbers.

## Drip Campaign
- Emails sent (24h): **0** — `drip-stats.stats` is an empty array; drip has delivered nothing to date.
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: none attempted (nothing sent → nothing to bounce)
- **Overdue (past Email-1 due date, ≥3 days since signup, 0 emails sent): 16 users.** Oldest at 11 days (would already be due for E1+E2). 4 more users at 0–2 days are not yet due.
- Open/click rates: **not available** — no sends, and no open/click tracking exists in the system.

## Price Alerts
- Alerts triggered (24h): **0** (`activeAlerts: 0`, `triggeredAlerts: 0`)
- Events with drops: none detectable — `price-history` returns **0 rows**; price tracking is not recording data, so no drop can be computed.
- Delivery failures: `/api/admin/alerts` returns **HTTP 500** ("Failed to get alerts") — endpoint itself is erroring.
- Root cause unchanged: 136 watchlist items but **0 have a target_price**, so the alert loop has nothing to arm against even if price history were populating.

## Subscriber Growth
- New newsletter subscribers: **0** today
- Unsubscribes: 0
- Net: **0**
- Total active newsletter subscribers: **3** (ids 1–3, sources `api-test`/`test`/`homepage`; newest real signup Feb 1, 2026 — list is effectively dormant)
- For contrast: **registered users grew +2 today, +15 this week (111 total).** Account signups work; they simply don't feed the newsletter list. The gap (111 users vs 3 subscribers) is the headline conversion problem, not a deliverability problem.

## Watchlist Digest
- **Cannot be generated with real data today.** A digest requires per-event price movement vs. target. Both inputs are missing: `price-history` is empty and 0 watchlist items carry a target_price. Sending a digest now would mean fabricating price arcs — not doing that. Digest is blocked until price tracking writes rows and/or users set targets.

## Subject Line / CTA A/B
- No sends today, so no live A/B test ran. Variants held until there is an actual send path.

## Escalations (for human, not auto-action)
1. **Drip never fires (16 users overdue).** Do **not** blind-trigger `/api/admin/drip-run` — these are real Gmail/iCloud inboxes and a bulk catch-up send could deliver 2–3 stale emails per overdue user at once. Needs a human to (a) confirm SMTP creds are live and (b) decide whether overdue users get backfilled or only go-forward. The fix is the scheduler not running, not the content.
2. **Price tracking inert** (`price-history` empty, `/alerts` 500). Blocks both price-drop alerts and the watchlist digest. Owned upstream (price cron) but it's the gating dependency for every email this agent could send.
3. **Newsletter capture broken at source.** 111 users / 3 subscribers. The on-site signup forms (blog/footer) were rebuilt in the working tree but the live list shows no new real subscribers — confirm the forms are deployed and POSTing to `/api/newsletter/subscribe`, and add a `/register` opt-in.

## Bottom line
Nothing was sent today and nothing should have been auto-sent. Every email channel this agent owns is blocked on upstream issues (no scheduler run, no price data, no subscriber inflow). Honest status > activity theater.
