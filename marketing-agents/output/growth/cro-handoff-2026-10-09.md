# CRO handoff — 2026-10-09

## Finding

The production admin API shows **1 new user** in the rolling seven-day window and **0** watchlist additions in that cohort. Overall, **153 of 264 users (58.0%)** have at least one watchlist row, unchanged from yesterday’s report.

## Recommended test

For newly registered users with an empty list, make the next action a single **Find an event** button and show the three-step cue documented in [psychology-optimization-2026-10-09.md](psychology-optimization-2026-10-09.md). Preserve the existing search flow; this is a copy and navigation experiment, not a new framework.

## Instrumentation needed

- `signup_completed`
- `dashboard_empty_state_viewed`
- `find_event_clicked`
- `event_viewed`
- `watchlist_add_completed`
- `watchlist_add_7d_return`

Report cohort counts and conversion by signup date. Do not label watchlist activity as price tracking.

## Limitation

The current admin API cannot reveal why the one user did not activate. Search history, onboarding completion, event-result quality, and bounce data are not available.
