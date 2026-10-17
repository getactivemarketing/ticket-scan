# CRO Handoff — Activation Gap — 2026-10-17

## Observed signal

- Live admin API: 266 registered users, 153 with at least one saved event, 256 saved-event rows.
- The current 7-day signup cohort contains 2 users; both have 0 saved events.
- This is a cohort observation, not a diagnosis. Search completion, result quality, onboarding exposure, bounce, and session-level conversion are not instrumented.

## Recommended test

On the first successful search result, make the next action explicit:

> Save one event so it’s ready when you are. We’ll keep the date, venue, and official ticket links together in your saved events.

Primary CTA: **Save this event**

Empty saved-events state:

> Your first saved event is one search away — try a team, artist, venue, or city.

## Measurement needed

Instrument `search_started`, `search_results_viewed`, `saved_event_added`, and `signup_completed`, with a privacy-safe session or cohort key. Report signup-to-first-save conversion and time-to-first-save before and after the change.

Do not use price-alert, price-history, or price-savings language in this test while product tracking is down.
