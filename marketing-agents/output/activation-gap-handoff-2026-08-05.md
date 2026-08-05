## CRO Handoff — Activation Gap — 2026-08-05

Live cohort: **8** signups in the rolling seven-day window; **5 activated** and **3 unactivated** (**37.5% gap**).

Unactivated records:

- `alexalcole@gmail.com` — signup 2026-07-30; 0 watchlist items
- `dbrenterprises1@gmail.com` — signup 2026-07-30; 0 watchlist items
- `dlosie@me.com` — signup 2026-07-29; 0 watchlist items

Do not message these users from this handoff alone: consent, last visit, and suppression status are not available in the admin API.

Recommended onboarding test:

1. After signup, show “You’re 1 step from your first alert.”
2. Use one primary `Find an event` CTA and preserve the previous search query.
3. Add: “We compare ticket sources and track changes for you.”
4. Instrument `activation_step_viewed`, `event_search_after_signup`, `watchlist_added_after_signup`, and `first_alert_configured`.

Success metric: signup → first watchlist add within 24 hours. Secondary metric: first alert configured within 7 days.
