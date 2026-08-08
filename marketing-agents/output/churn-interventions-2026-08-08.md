## Churn Intervention Drafts — 2026-08-08

No emails were sent or queued. The production API does not expose last-visit timestamps, price-change eligibility per user, unsubscribe history suitable for suppression, or a safe intervention-send endpoint.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** A quick price check on your TicketScan watchlist

**Timing:** Next weekday at 10:00 AM in the recipient’s local time.

Hi there — prices move, sometimes quietly and sometimes like they’ve had three espressos. Your TicketScan watchlist is ready for a quick check. Compare current prices across marketplaces and see whether anything improved before you buy.

[View my watchlist]

— TicketScan

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed a price move on your watchlist

**Timing:** Next weekday at 10:00 AM in the recipient’s local time.

Your watchlist has been waiting while ticket prices did their usual little dance. We found **[X] event(s)** with a price change since your last visit, including **[event name]** at **[current price / change]**. Take a look before the market changes again.

[Review price changes]

TicketScan compares the marketplaces so you do not have to open twelve tabs and lose the will to live.

### Tier 3 — Win-back (14+ days inactive)

**Subject:** Here’s what changed while you were away

**Timing:** Tuesday or Thursday at 10:00 AM in the recipient’s local time; suppress another win-back for 14 days.

We missed you — the ticket market did not. While you were away, **[X] event(s)** on your watchlist changed price, including **[event name]** at **[current price / change]**. Come back for a fresh comparison and decide whether to buy, wait, or hold.

[Open TicketScan]

No fake countdowns. No “trust us, it’s a deal.” Just the data.

### Sending guardrails

Only send after verifying recent activity, active consent, valid watchlist membership, and a real price movement. Exclude unsubscribed, bounced, recently contacted, and already-converted users. Personalize from current price-history data; do not fill placeholders with guesses.
