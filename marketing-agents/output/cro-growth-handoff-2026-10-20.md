# CRO Handoff — Growth & Retention — 2026-10-20

## Signal

The live admin API reports 267 users and 153 users with at least one saved event. The rolling last-seven-day cohort is 1 user, with 0 saved events. A calendar-date review of Oct 13–20 finds 2 signups, both with 0 saved events. The newest signup today also has 0 saved events.

The API cannot tell us whether these users searched, saw no useful result, misunderstood saved events, or bounced. Treat this as an activation gap, not a diagnosis.

## Recommended onboarding change

After signup, return the user directly to a search context and make the next action explicit:

> Save your first event to keep its date, venue, onsale details, and official ticket links together.

Primary button: **Find an event to save**

Empty saved-events state:

> Your first saved event is one search away — try a team, artist, venue, or city.

Do not reference price tracking, alerts, price history, or buy/wait recommendations while those systems are unavailable.

## Instrumentation request

Add privacy-safe events for:

1. `signup_completed`
2. `search_submitted`
3. `search_results_viewed`
4. `saved_event_added`
5. `official_ticket_link_clicked`
6. `onboarding_prompt_shown`
7. `onboarding_prompt_dismissed`

Report the funnel by signup cohort and device type. The first useful baseline is signup → first search → first saved event within 24 hours.
