## CRO Handoff — Activation Gap — 2026-08-01

The last-7-day signup cohort is 13 users; 5 (38.5%) have no watchlist item and 8 (61.5%) are activated. The current API cannot distinguish “no interesting event,” feature confusion, or immediate bounce.

Recommendation: after signup, show a compact three-step state:

1. Search for an event
2. Add it to **your watchlist**
3. Get notified when the price moves

Use a one-click “Find an event” CTA, preserve the last search, and show “1 step from your first alert” above results.

Instrument `activation_step_viewed`, `event_search_after_signup`, `watchlist_added_after_signup`, and `first_alert_configured`. Primary metric: signup → first watchlist add within 24 hours. Secondary metric: signup → first alert configuration within 7 days.
