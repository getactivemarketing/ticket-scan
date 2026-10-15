# CRO Handoff — 2026-10-15

## Finding

Both users in the current seven-day signup cohort have zero saved events. Across the full base, 113 of 266 users have zero saved events. The live admin API does not expose onboarding completion, search-result views, bounce, or feature comprehension, so the cause is unknown.

## Recommended test

Add a single activation prompt after a successful search and in the empty saved-events state:

> Save one event so it’s ready when you are. We’ll keep the date, venue, and official ticket links together in your saved events.

Primary CTA: **Save this event**

Empty state: **Your first saved event is one search away — try a team, artist, venue, or city.**

## Measurement

- Signup → first saved event conversion
- First-session saved-event conversion
- Search → saved-event conversion
- 7-day return rate, once visit instrumentation exists

Do not frame this test around price tracking or alerts while those features are unavailable.
