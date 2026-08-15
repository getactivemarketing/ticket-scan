# Churn Interventions — 2026-08-15

Status: **prepared, not queued or sent**. Production does not expose last-visit eligibility, consent/suppression history, verified per-user price movement, or an approved churn-email send route.

Use recipient-local send time, ideally **10:00 AM local time**, with a minimum seven-day campaign cooldown. Suppress on recent activity, watchlist change, alert send, unsubscribe, bounce, missing consent, no verified price movement, or completed sequence.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices moved on your watchlist

Hi `{{first_name}}`,

Your TicketScan watchlist is doing the boring work so you don’t have to. Prices changed on `{{changed_event_count}}` tracked event(s), including `{{best_event_name}}`, which moved from `{{old_price}}` to `{{new_price}}`.

Take a quick look before the market changes again. Ticket prices have the emotional stability of a group chat.

**CTA:** Review my watchlist

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed `{{changed_event_count}}` price changes

Hi `{{first_name}}`,

`{{changed_event_count}}` event(s) on your watchlist changed while you were away. The biggest move was `{{best_event_name}}` at `{{current_price}}`, down `{{savings_amount}}` from the prior check.

You set the list up once. Let it keep doing its job—and skip the “I should have checked” tax.

**CTA:** See the latest prices

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We kept watching. Here’s what changed.

Hi `{{first_name}}`,

While you were away, `{{changed_event_count}}` tracked event(s) changed price. `{{best_event_name}}` is the clearest reason to come back: `{{trend_summary}}`.

No guilt trip, no confetti cannon—just current prices across the marketplaces we monitor so you can decide with better information.

**CTA:** Reopen my watchlist

## Queue specification for Email Agent

Before implementation, join users to watchlist and price history, compute a verified delta, evaluate consent/suppression, and write an idempotent campaign send record. Success metric: watchlist revisit or comparison within seven days. Guardrails: unsubscribe, complaint, bounce, and duplicate-send rates.
