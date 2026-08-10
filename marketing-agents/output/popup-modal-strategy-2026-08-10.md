# Popup and Modal Strategy — 2026-08-10

The repository contains inline, card, and footer newsletter forms but no configured timed, exit-intent, return-visitor, or price-alert popup. Treat the following as a staged implementation plan. Start with one high-intent alert modal and one newsletter treatment; do not launch all overlays at once.

| Popup | Trigger | Copy | CTA / dismiss | Frequency | Mobile treatment | Planning conversion |
|---|---|---|---|---|---|---|
| Price alert modal | Anonymous visitor clicks “Get a price-drop alert” on a comparison result | **Want to know when this drops?** Set a free target-price alert for this event and we’ll email you when it reaches your budget. | CTA: “Set my free alert”; dismiss: “Not now” | Once per event per 30 days; suppress after signup or alert creation | Bottom sheet, event name and price visible above the fold; full-width CTA | 8–15% of exposed users; validate |
| Newsletter prompt | After 45 seconds or 60% scroll on content pages, only if no alert intent was shown | **Get smarter ticket-buying tips** Weekly price insights, deal alerts, and timing tips. No spam. | CTA: “Get weekly ticket tips”; dismiss: “No thanks” | Once per 14 days; cap at 2 exposures per 30 days | Inline card after article intro or bottom sheet; avoid keyboard obstruction | 2–5% of exposed users; validate |
| Exit intent | Desktop pointer exit after a search or comparison result has loaded and no CTA was clicked | **Before you go: save this price** Get notified if [event] reaches your target instead of checking again later. | CTA: “Track this event”; dismiss: “I’ll check back myself” | Once per session and once per 30 days | Do not use pointer exit on mobile; use back-navigation only after explicit opt-in testing | 3–8% of exposed users; validate |
| Return visitor | Recognized browser returns with changed watched prices | **Welcome back — [X] prices changed** Review your tracked events and see what moved. | CTA: “Review price changes”; dismiss: “Later” | Once per return session; suppress for 7 days after dismissal | Compact top banner, not a blocking modal | 10–20% click-through of exposed users; validate |

## Rules

- Never show newsletter and price-alert overlays at the same time.
- Do not interrupt the first search before results render.
- Respect newsletter subscription status, alert creation, dismissals, reduced-motion preference, and consent requirements.
- Focus the first field, trap focus, support Escape, and expose an accessible close button.
- Measure impression, CTA click, dismiss, completion, downstream activation, and outbound purchase click.

## Rollout order

1. Price alert modal on comparison results.
2. Return-visitor summary after price-change data exists.
3. Newsletter timing test on blog/content pages.
4. Desktop exit intent only if it adds incremental subscribers without harming ticket clicks.
