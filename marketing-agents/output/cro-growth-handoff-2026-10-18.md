# CRO Handoff — Growth Activation Gap — 2026-10-18

## Finding

The live admin API reports 2 users registered in the last 7 days and both have 0 saved events. Current cohort activation is therefore **0% (0/2)**. Across all 266 users, 153 have at least one saved event (**57.5%**).

## Recommended change

After signup, take the user directly to a useful search state and make the first save the primary next step:

> Save one event so it’s ready when you are. We’ll keep the date, venue, and official ticket links together in your saved events.

Primary button: **Save this event**

Empty state: **Your first saved event is one search away — try a team, artist, venue, or city.**

## Measurement

Instrument: `signup_complete`, `search_submitted`, `event_viewed`, `saved_event_added`, and `first_saved_event_completed`, with a privacy-safe anonymous session/user identifier. Report signup-to-first-save rate by cohort and first-session save rate.

## Caveat

The API cannot determine whether these users searched, saw no suitable events, bounced, or misunderstood the feature. Treat the two-user result as a signal for instrumentation and onboarding work, not as a diagnosed cause.
