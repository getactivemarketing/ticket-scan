# CRO handoff — activation gap — 2026-10-23

## Finding

The current seven-day signup cohort is 1 user, and that user has 0 saved events. Across the full base, 114 of 267 users (42.7%) have no saved event. The available data cannot tell us whether the cause is weak event discovery, unclear onboarding, or an immediate bounce.

## Recommended test

After registration, make saving an event the single obvious next step:

> Save an event to your ticket list
>
> Keep the event, onsale timing, venue tips, and buying links together so you don’t have to hunt through six tabs later.

Primary CTA: **Find an event to save**. Secondary link: **I’ll do this later**.

## Instrumentation needed

- `signup_completed`
- `onboarding_viewed`
- `event_search_submitted`
- `event_detail_viewed`
- `saved_event_added`
- `saved_event_list_viewed`
- `outbound_ticket_link_clicked`

Measure signup → first save, first save within 24 hours, and seven-day return. Do not describe the saved-event list as price tracking or an alert feature while those systems are down.
