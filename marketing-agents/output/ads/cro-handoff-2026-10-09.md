# CRO Handoff — Paid Ads — 2026-10-09

## Measurement blocker

Paid traffic cannot be evaluated: no ad-platform reporting is connected, and
the live site has GTM but no validated conversion events or UTM persistence.

## Landing-page recommendations

- Use `/dashboard` for event-discovery tests and align the hero CTA with **Find events** or **See where to buy**.
- Surface verified event dates, onsale/presale timing, venue facts, and seller links early.
- Add: **Confirm fees, delivery, section, and final checkout total on the seller site.**
- Add `search_submit`, `signup_complete`, `watchlist_add`, `newsletter_success`, `compare_view`, and `outbound_ticket_click`; persist UTMs through signup/newsletter.
- Do not use price-led, alert-led, or recommendation-led acquisition copy while those product surfaces are unavailable.

## Proposed test

- Control: **Search tickets**
- Variant: **Find events and where to buy**
- Primary metric: `outbound_ticket_click` rate
- Secondary metrics: signup and watchlist-add rate

Do not call a winner until exposure and outcome events are implemented and a
real paid data window exists.
