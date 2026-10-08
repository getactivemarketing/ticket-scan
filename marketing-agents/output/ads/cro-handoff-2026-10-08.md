# CRO Handoff — Paid Ads — 2026-10-08

## Measurement blocker

Paid traffic cannot be evaluated: no ad-platform reporting is connected, and the live site has GTM but no validated conversion events or UTM persistence.

## Landing-page recommendations

- Use `/dashboard` for event-discovery tests. Keep `/compare` out of cold acquisition until its price-led copy and behavior are reconciled with current product status.
- Align the hero CTA with the supported job: **Find events** or **See where to buy**.
- Surface verified event dates, onsale/presale timing, venue facts, and seller links early.
- Add a concise expectation line: **Confirm fees, delivery, section, and final checkout total on the seller site.**
- Instrument `search_submit`, `signup_complete`, `watchlist_add`, `newsletter_success`, and `outbound_ticket_click`; persist UTMs through signup/newsletter.

## Proposed test

- Control: **Search tickets**
- Variant: **Find events and where to buy**
- Primary metric: `outbound_ticket_click` rate
- Secondary metrics: signup and watchlist-add rate

Do not call a winner until exposure and outcome events are implemented and a real paid data window exists.
