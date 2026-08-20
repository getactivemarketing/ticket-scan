# TicketScan Anomaly Alerts — 2026-08-20

## Critical

- **Price history stale:** newest record returned is 2026-07-24 20:01 UTC. The scheduled four-hour tracker has no visible August output.
- **Analytics attribution unavailable:** no visitor, source, page, bounce, UTM, or comparison telemetry can be queried.

## High

- `/api/admin/alerts` returns HTTP 500, so the zero-alert reading is not independently trustworthy.
- No explicit frontend conversion events were found for signup, watchlist add, comparison, or newsletter subscribe.
- Drip stats show 20 pending users and no sent-email rows; day-3+ users still have `last_email_sent: 0`.

## Watch

- Three Aug 19 signups had no watchlist item at the snapshot. Recheck activation over the next 24–72 hours.
- Watchlist adds were 0 today versus a 1.57/day average across the prior seven completed UTC days.

## Recommended owner queue

1. Backend: diagnose price-tracking cron/read path and alerts endpoint.
2. Frontend/analytics: implement named dataLayer events and UTM persistence.
3. Lifecycle: inspect cron initialization and SMTP/send logs for the drip queue.
