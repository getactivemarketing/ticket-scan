# Popup and Modal Strategy — 2026-08-24

The repository has inline/card/footer newsletter forms, but no configured timed, exit-intent, return-visitor, or price-alert popup. Roll out one high-intent alert modal first, then test newsletter timing.

| Popup | Trigger | Copy | Frequency / mobile | Expected planning rate |
|---|---|---|---|---|
| Price alert | Anonymous user views comparison result or clicks watchlist | **Want to know when this drops?** Set a free target-price alert for [event] and we’ll email you when it reaches your budget. CTA: **Set my free alert**. Dismiss: Not now. | Once per event per 30 days; bottom sheet, full-width CTA | 8–15% of exposed users |
| Newsletter | 45 seconds or 60% scroll on blog/content pages, if no alert prompt shown | **Know the price before you buy.** One useful deal or price insight a week. No spam. CTA: **Get ticket deals**. Dismiss: No thanks. | Once per 14 days, max 2/30 days; inline card on mobile | 2–5% |
| Exit intent | Desktop pointer exit after results load and no prior CTA | **Before you go: save this price.** Track [event] and check back when your budget is met. CTA: **Track this event**. Dismiss: I’ll check back myself. | Once/session and 30 days; no pointer exit on mobile | 3–8% |
| Return visitor | Recognized user returns with changed watchlist prices | **Welcome back — [X] prices changed.** Review what moved. CTA: **Review price changes**. Dismiss: Later. | Once per return session, suppress 7 days after dismiss; compact top banner on mobile | 10–20% CTR |

## Rules

Never stack newsletter and alert prompts. Suppress all prompts for subscribers, alert creators, recent dismissals, and reduced-motion users as appropriate. Use focus trapping, Escape, an accessible close button, consent copy, and preserved form input. Log impression, click, dismiss, completion, downstream activation, and outbound purchase click.

## Rollout

1. Price-alert modal on comparison results.
2. Return banner after trustworthy price-change data exists.
3. Newsletter timing test on content pages.
4. Desktop exit intent only if incremental conversion is proven without reducing ticket clicks.

