# Feature Launch Plan — Target Price + Price Alerts — 2026-08-07

## Readiness gate

Target price must persist; cron must evaluate it; email delivery must be provider-confirmed; duplicate alerts must be prevented; `/api/admin/alerts` must pass regression tests; and events must cover target set, alert sent, alert click, and outbound ticket click.

## Launch sequence

- **T-14 to T-1:** ship the target-price UI, fix stale price tracking, add instrumentation, publish a target-price guide, and tease activated users.
- **Launch day:** email activated users first, publish a demo, add dashboard/event-detail placement, and hold paid acquisition until data is clean.
- **T+1 to T+14:** interview 10 users, monitor target adoption/delivery/clicks/duplicates/return, and publish a usage guide.

## Success metrics

70% search/compare within 24 hours; 50% watchlist within 24 hours; 35% target-price setup; ≥98% delivery; <1% duplicate alerts; establish seven-day return baseline.
