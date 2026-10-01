# CRO Handoff — 2026-10-01

## Activation gap

The production snapshot contains **7** signups in the last seven days. Only **2** have a watchlist item; **5** have none. Cohort activation is **28.6%**. The affected internal user IDs are **262, 261, 259, 258, and 256**.

## Recommended onboarding fix

On the first authenticated dashboard view with an empty watchlist, show:

> **You’re 1 step from your first price alert.** Search for an event and tap **Track price**.

Primary CTA: **Find an event to track**. Show the three-step progress indicator described in [psychology-optimization-2026-10-01.md](psychology-optimization-2026-10-01.md).

## Instrumentation requested

- `signup_completed`
- `dashboard_empty_viewed`
- `dashboard_empty_cta_clicked`
- `event_search_submitted`
- `event_detail_viewed`
- `watchlist_created`
- `price_alert_created`
- `return_visit_7d`

Include a privacy-safe user ID and timestamps, plus source/landing page. This will let the growth agent distinguish “no interesting events found” from “didn’t understand the feature” rather than guessing.
