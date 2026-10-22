# CRO Handoff — Activation Gap — 2026-10-22

## Observed cohort

- Total users: 267
- Signups in the rolling last-7-day API window: 1
- New users with a saved event: 0
- Activation gap: 1 user, 100% of the cohort
- Current overall activation: 153 of 267 users (57.3%)

The API does not expose the individual user’s searches, onboarding completion, result quality, or bounce. Do not infer a reason from the email address or signup timestamp.

## Recommended experiment

On the post-signup empty state, make the next action explicit:

> Your saved events list is empty. Save one event to keep its date, venue, onsale details, and official ticket links together.

Primary button: **Find an event to save**

Measure signup → first saved event within 24 hours, first-session save rate, and return visit within 7 days. Keep a control variant and do not claim an uplift until events are instrumented.
