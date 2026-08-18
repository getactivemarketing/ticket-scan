# Churn Intervention Queue — 2026-08-18

Status: **draft queue only**. No messages were sent. The admin API has no approved churn-email endpoint, and visit recency is not available for eligibility or suppression. Do not send until those controls exist.

## Tier 1 — Gentle nudge (7–10 days inactive)

Subject: Prices moved on your TicketScan watchlist

Hi there,

Quick heads-up: prices can move while you’re away. TicketScan is ready to compare your watchlist across marketplaces so you don’t have to keep refreshing tabs like it’s a part-time job.

Come take another look at your saved events and set a target price for the ones you still want. We’ll do the watching.

CTA: Review my watchlist

Timing: send at 10:00 AM recipient local time, with a 24-hour quiet period after any price alert.

## Tier 2 — Value reminder (10–14 days inactive)

Subject: You may be missing ticket price changes

Hi there,

While you were away, the prices on your saved events may have changed. TicketScan compares available listings and keeps the useful signal in one place: what moved, where it moved, and whether it’s close to the price you said you’d pay.

Your watchlist is still there. Take a look before your next ticket purchase and let the data do the haggling.

CTA: Check price changes

Timing: send at 10:00 AM recipient local time; suppress if no watchlist item has a fresh price observation.

## Tier 3 — Win-back (14+ days inactive)

Subject: We miss you — here’s what happened while you were away

Hi there,

Ticket prices are wonderfully predictable in one way: they change when you’re not looking. Your TicketScan watchlist is ready for a fresh check, and new events and price movement may be waiting.

Come back when you’re shopping. We’ll help you compare the options and skip the inflated “trust us” price tag.

CTA: Reopen TicketScan

Timing: send once at 10:00 AM recipient local time; suppress after one send for 30 days and honor all unsubscribes.

## Required before launch

- Add last-seen instrumentation and calculate tiers server-side.
- Add unsubscribe/suppression checks and idempotency keys.
- Personalize only with verified watchlist events and measured price movement; never claim a drop without a price observation.
- A/B test subject lines against a holdout and report return-to-site, watchlist interaction, and unsubscribe rate.
