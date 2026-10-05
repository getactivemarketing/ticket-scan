# CRO Handoff → Analytics Agent — 2026-10-05

## Required event schema

Emit a consistent event object to `dataLayer`:

```json
{
  "event": "save_event_success",
  "event_id": "source-event-id",
  "page": "/dashboard",
  "source_page": "/venues/metlife-stadium",
  "auth_state": "authenticated",
  "experiment": "first-session-save",
  "variant": "control"
}
```

Required events: `page_view`, `search_submit`, `search_results`, `search_zero_results`, `event_card_view`, `save_event_click`, `save_event_success`, `signup_start`, `signup_success`, `login_success`, `watchlist_view`, `seller_outbound_click`, `newsletter_submit`, `onboarding_step_view`, `onboarding_step_complete`, `onboarding_skip`, `popup_impression`, `popup_primary_click`, `popup_dismiss`.

## Reporting requirements

- Compute signup→first save within 24 hours and 7 days.
- Report denominators and unique users, not raw duplicate rows.
- Segment by landing page, source/UTM, device class, new vs returning, category, and city where available.
- For the first-session A/B test, report intent-to-treat assignment, exposure, primary metric, guardrails, and sample size confidence intervals.
- Do not report price movement, alert engagement, target-price adoption, or buy/wait outcomes while the product-status section remains active.

## Current baseline

The October 2 snapshot provides only a directional 3/8 signup→watchlist proxy (37.5%) and 110 registered users with no watchlist row. Treat it as pre-instrumentation context, not as an experiment baseline.

