## CRO handoff — activation gap — 2026-10-12

### Observed signal

- 1 user registered in the last 7 days.
- 0 of those users has a watchlist item.
- Across all 265 users, 153 have at least one watchlist item and 112 have none.
- The API does not expose signup source, searches, comparison views, onboarding completion, or bounce data, so the cause is unknown.

### Recommendation

After registration, show a single next step:

> Save an event to your ticket list so you can quickly find its onsale details, venue tips, and ticket links later.

CTA: **Find an event**

On successful save:

> Saved to **your ticket list**. Review it anytime, or find another event.

Do not describe this as price tracking or promise alerts.

### Measurement request

Instrument `signup_completed`, `event_viewed`, `watchlist_added`, `watchlist_reviewed`, and `session_returned_7d`, with source and event identifiers. Report the funnel by signup cohort before judging the one-user sample.
