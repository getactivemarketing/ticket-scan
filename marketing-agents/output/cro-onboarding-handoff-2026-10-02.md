# CRO Handoff — Onboarding Improvements — 2026-10-02

## Goal

Move a new account from signup to a useful event or venue action in under 60 seconds, without depending on unavailable price data or alert delivery.

## Recommended flow

1. Select an interest: sports, concerts, theater, festivals, comedy, or World Cup 2026.
2. Select a city or skip.
3. Search for one event, venue, or team and save it to the watchlist.
4. Confirm with a useful next action: view event details, see onsale information, or open the venue guide.

Keep every step skippable. If the user skips, land on a populated dashboard rather than a blank state.

## Copy constraint

Confirmation should say: “Saved to your TicketScan watchlist. We’ll keep the event details handy while you plan.” Do not say that TicketScan will monitor prices or send an alert.

## Instrumentation

Track `onboarding_started`, `onboarding_step_view`, `onboarding_interest_saved`, `onboarding_city_saved`, `onboarding_event_selected`, `watchlist_add`, `onboarding_completed`, and `onboarding_skipped`, with anonymous/user id, route, timestamp, and experiment variant.

