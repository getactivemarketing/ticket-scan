# Onboarding Improvement Spec — CRO Agent 6 — 2026-08-07

Replace the post-signup dead end with: **Find an event → Track it → Set a target price**. Route to populated results, preserve the search query, and show a single primary CTA to users without a watchlist.

Instrument `activation_step_viewed`, `event_search_after_signup`, `watchlist_added_after_signup`, and `first_alert_configured`. Primary metric: signup → first watchlist within 24 hours. Secondary: target price within seven days. Test one CTA/copy variable at a time.
