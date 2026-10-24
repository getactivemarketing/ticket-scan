# CRO Handoff — 2026-10-24

## Finding

The live admin API shows 1 signup in the October 17–24 calendar-date window, and that user has 0 saved events. Across the full 267-user base, 153 users have at least one saved event (57.3%). The reason for the activation gap cannot be determined because search completion, result quality, onboarding exposure, and bounce events are not instrumented.

## Recommended experiment

Apply commitment and consistency immediately after a successful search:

- Primary CTA: **Save this event**
- Supporting copy: “Save this event so it’s ready when you are. We’ll keep the date, venue, onsale details, venue guide, and official ticket links together in your saved events.”
- Empty-state copy: “Your first saved event is one search away — try a team, artist, venue, or city.”
- Preserve the user’s search context after signup so the first save is one click away.

## Measurement

Instrument `search_started`, `search_results_loaded`, `signup_completed`, `save_event_clicked`, `save_event_completed`, and `return_visit`. Primary metric: signup-to-first-saved-event within 24 hours. Secondary metrics: first-session save rate and 7-day return rate. Do not claim an uplift until a baseline and experiment result exist.

## Guardrails

Do not frame saved events as active price tracking or promise alerts. Use only event details, onsale/presale timing, venue guidance, and official ticket links in the onboarding copy.
