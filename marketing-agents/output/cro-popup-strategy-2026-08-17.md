# Popup and Modal Strategy — 2026-08-17

Use intent-based overlays sparingly. There is no evidence in code that the current newsletter form is a timed or exit-intent popup; it is an inline/card/footer form. Treat popup exposure and dismissal as new events, and cap frequency by anonymous ID/user ID.

| Surface | Trigger | Copy | Frequency | Mobile treatment | Initial target |
|---|---|---|---|---|---:|
| Price-alert modal | User clicks Track on a comparison/search result while anonymous | **Want to know when this drops?** Save this event and set a price ceiling. **Create my free alert** / “Maybe later” | Once per event; max 2 per session | Bottom sheet, event name and current price visible | 8–15% signup start |
| Newsletter card | 45s on page or 60% scroll on content/landing pages, only if no signup/subscriber | **Ticket deals worth opening.** Get practical buying tips and selected price-watch updates. **Get the free updates** / “No thanks” | Once every 14 days; suppress after subscribe | Inline card after article intro; no full-screen takeover | 2–5% subscribe |
| Exit intent | Desktop pointer leaves viewport after search or compare interaction | **Before you go: save one event.** We’ll keep watch while prices move. **Set a free price alert** / “I’ll check later” | Once per 30 days; never on first paint | Do not use pointer exit on mobile; replace with back-navigation only after meaningful interaction | 3–7% alert starts |
| Return visitor | Known anonymous ID or user returns after 7+ days; only if data is fresh | **Welcome back.** See what changed on the events you checked. **Review my watchlist** / “Dismiss” | Once per 30 days | Compact banner, not modal | 5–10% click |

## Rules

- Never show newsletter and price-alert overlays simultaneously.
- Never claim a price dropped unless the tracker has fresh verified data.
- Suppress all marketing popups for users in registration/onboarding and for users who dismissed twice.
- Respect reduced-motion, keyboard escape, focus trap, and screen-reader labels.
- Start with the price-alert modal. It is closest to purchase intent and gives the visitor a product-specific reason to register.

