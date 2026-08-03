# Popup and Modal Strategy — 2026-08-03

The inspected frontend currently uses inline/card/footer newsletter forms. No time-delay, scroll-depth, exit-intent, price-alert, or return-visitor modal implementation was found. Add one intent-based popup at a time and instrument exposure, submit, dismiss, and suppression.

| Popup | Trigger | Copy | Frequency | Mobile treatment | Expected conversion target |
| --- | --- | --- | --- | --- | --- |
| Newsletter | 45 seconds or 60% scroll on content pages; never during an active search | **Ticket deals worth opening.** Get price drops, buying windows, and practical ticket tips. **Get deals** / “No thanks” | Once per user per 14 days; suppress for 30 days after submit/dismiss twice | Bottom sheet, 16px safe-area padding, no blocking the search CTA | 2–5% of eligible exposures |
| Price alert | After a user opens an event/compare result or spends 20 seconds on price data | **Want to know when this drops?** Set a free target price and we’ll watch it across ticket sites. **Set a price alert** / “Keep browsing” | Once per event per session; suppress after dismiss for 7 days | Inline card beneath price summary preferred; sheet only after explicit CTA | 8–15% of eligible high-intent exposures |
| Exit intent | Desktop pointer exits after search/compare interaction and before outbound click | **Before you go—keep watching this price.** Set a free alert so you don’t have to check manually. **Save this event** / “Leave” | Once per session; max once per 7 days | Do not use pointer exit on mobile; use back-navigation only after meaningful interaction, capped once per 14 days | 3–7% of eligible exposures |
| Return visitor | Returning user has a prior tracked event and new price history since last visit | **Welcome back — prices changed.** See what moved in your watchlist. **View changes** / “Not now” | Once per 24 hours; never for a first-time visitor | Non-blocking banner at top of watchlist/dashboard | 10–20% click-through among eligible returners |

## Rules

- Never stack newsletter and alert popups. Contextual alert intent wins.
- Suppress popups for authenticated users who already have an active alert for the event.
- Respect `prefers-reduced-motion`, keyboard focus trapping, Escape, clear close labels, and screen-reader announcements.
- Store frequency caps with versioned keys so copy/tests can be changed without trapping users.
- Do not claim “prices changed” without a verified server comparison and a timestamp.
- Expected conversion values are planning ranges, not observed baselines; Analytics must replace them with measured exposure and conversion rates.

## Recommended rollout

Start with the price-alert inline card on event detail/compare. It is closest to user intent and least disruptive. Add newsletter timing only after the existing inline forms have source attribution. Add exit intent last, with a holdout to monitor annoyance, bounce, and outbound purchase clicks.
