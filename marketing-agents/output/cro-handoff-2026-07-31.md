## CRO Handoff — Activation Gap — 2026-07-31

The last-7-day signup cohort is 13 users; 5 (38.5%) have no watchlist item. The current API cannot tell whether they failed to find an event, misunderstood tracking, or bounced.

Recommendation: after signup, show a compact three-step state:

1. Search for an event
2. Add it to **your watchlist**
3. Get notified when the price moves

Use a one-click “Find an event” CTA, preserve the user’s last search, and show “1 step from your first alert” above the search results. Instrument `activation_step_viewed`, `event_search_after_signup`, `watchlist_added_after_signup`, and `first_alert_configured` with a 7-day cohort report.

Primary success metric: signup → first watchlist add within 24 hours. Secondary: signup → first alert configuration within 7 days.

