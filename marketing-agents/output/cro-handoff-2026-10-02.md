# CRO Handoff — 2026-10-02

## Activation gap

The production snapshot contains **8** signups in the last seven days. **3** have a watchlist item and **5** have none, for a **37.5%** cohort activation rate. Affected internal user IDs: **262, 261, 259, 258, and 256**.

## Recommended onboarding fix

On the first authenticated dashboard view with an empty watchlist, show:

> **You’re one event away from a useful watchlist.** Find a show, game, or concert you care about and save it here.

Primary CTA: **Find an event**. Use the three-step progress indicator in [psychology-optimization-2026-10-02.md](psychology-optimization-2026-10-02.md).

## Instrumentation requested

- `signup_completed`
- `dashboard_empty_viewed`
- `dashboard_empty_cta_clicked`
- `event_search_submitted`
- `event_detail_viewed`
- `watchlist_created`
- `return_visit_7d`

Include a privacy-safe user ID, timestamp, source, and landing page. This will distinguish “no interesting events found” from “didn’t understand the feature.”
