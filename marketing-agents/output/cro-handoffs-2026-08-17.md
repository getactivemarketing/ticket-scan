# CRO Handoffs — 2026-08-17

## Agent 1 — Content

Needed copy:

- Homepage search-first hero: “Compare ticket prices before you buy.” CTA: “Search events.” Secondary: “See how it works.”
- Signup reassurance: “Free forever. No ticket markups. Set a price ceiling and we’ll watch it.”
- Empty dashboard: “You’re one event away from your first price alert.” CTA: “Find an event to track.”
- Track modal: “Want to know when this drops?” CTA: “Create my free alert.”
- Onboarding completion: “Your first alert is ready.”
- Three short tooltips: Compare prices, Add to watchlist, Set your price ceiling.

Avoid unverified savings numbers, live-drop claims, or “24/7” language until price freshness and alert delivery are repaired.

## Agent 8 — Growth and Retention

- Segment new users with no watchlist item at 24 hours; send one activation nudge, not a churn message.
- Use the checklist language: “Account created ✓ → Pick an event → Set your price ceiling.”
- For activated users with no target price, prompt “Set your number before the market sets it for you.”
- Return-visitor banner should only claim changed prices when data is fresh. Otherwise invite a new search.
- Do not build win-back audiences from signup age; last-visit telemetry is absent.

## Agent 7 — Analytics

Implement and expose the funnel events: `page_view`, `landing_cta_click`, `search_submit`, `search_results`, `compare_started`, `compare_completed`, `signup_started`, `signup_complete`, `watchlist_add`, `target_price_set`, `onboarding_step_view`, `onboarding_completed`, `newsletter_subscribe`, `outbound_ticket_click`, `return_session`.

Required dimensions: anonymous ID, user ID after auth, route, landing page, referrer, first/last UTM fields, event ID, experiment ID/variant, timestamp, and API success/error. Report denominators by landing page and device. Also repair `/api/admin/alerts`, add price-freshness status, and expose email sent/delivered/clicked data.

