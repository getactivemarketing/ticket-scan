# CRO Handoff — Activation Gap — 2026-10-16

## Observed signal

- 2 users registered in the last 7 days.
- 0 of those 2 users has a saved event.
- Current activation rate for the seven-day cohort: **0%**.
- The API cannot tell us whether they searched, saw no relevant events, bounced, or misunderstood the save action.

## Recommended experiment

Use commitment and consistency at the first useful result and in the empty saved-events state.

Copy:

> Save one event so it’s ready when you are. We’ll keep the date, venue, and official ticket links together in your saved events.

Button: **Save this event**

Empty state: **Your first saved event is one search away — try a team, artist, venue, or city.**

## Measurement needed

Instrument `search_started`, `search_results_viewed`, `event_saved`, `signup_completed`, and `saved_events_opened`, with anonymous-to-user stitching after signup. Report signup-to-first-save and first-session save rates by cohort.

Do not use price-alert or price-change language in this experiment while price tracking is down.
