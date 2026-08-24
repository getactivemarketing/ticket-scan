# Email Handoff — Ticket Buyer’s Cheat Sheet — 2026-08-24

**Lead magnet:** [Ticket Buyer’s Cheat Sheet](lead-magnet-ticket-buyers-cheat-sheet-2026-08-24.md)  
**Goal:** email capture → first comparison → first watchlist add.  
**Guardrail:** do not promise a price drop, lowest price, or savings amount.

## Delivery email — immediately

**Subject:** Your Ticket Buyer’s Cheat Sheet is ready

**Preview:** Set your ceiling, compare equivalent listings, and choose a check-in window.

Hi {{first_name}},

Here’s your [Ticket Buyer’s Cheat Sheet]({{download_url}}). It gives you a simple way to decide when to check, what to compare, and when a listing is not really comparable.

Start with one event:

1. Write down your all-in price ceiling.
2. Compare the same event, seat tier, quantity, and delivery terms.
3. Save the event to your [TicketScan watchlist]({{watchlist_url}}).

Ticket prices move. The cheat sheet does not promise a drop—it helps you make the next check more useful.

— The TicketScan team

## Day 2 — methodology

**Subject:** The first ticket price is an anchor, not a verdict

One marketplace can show you one slice of the market. Before calling a listing a deal, match the event, seat area, quantity, delivery, fee treatment, and timestamp. [Run a comparison]({{compare_url}}).

## Day 4 — activation branch

**If no `watchlist_added`:**

**Subject:** Pick one event to watch in under a minute

You do not need to track every event. Pick the one you are most likely to buy, set your ceiling, and let your next check be intentional. [Find an event and save it]({{dashboard_url}}).

**If `watchlist_added`:**

**Subject:** Your next ticket check has a plan

You already saved an event. Add the price you would actually pay, then compare the same seat details again at your chosen check-in time. [Review your watchlist]({{watchlist_url}}).

## Day 8 — fees

**Subject:** A lower listing is not always a lower total

Headline prices and checkout totals are different numbers. Record what is shown, what is unknown, and what the seller confirms at checkout. [Compare options side by side]({{compare_url}}).

## Day 14 — timing

**Subject:** Choose your check-in window before the event gets urgent

Concerts, sports, theater, festivals, and tennis sessions do not share one perfect buying rule. Use the event-type table in your cheat sheet, then decide your deadline. [Read the timing guide]({{timing_guide_url}}).

## Day 30 — re-engagement

**Subject:** Your ticket plan is still useful

If your event changed, update the date, quantity, or ceiling. If you are still shopping, run one fresh comparison and record the time checked. [Open TicketScan]({{compare_url}}).

## Suppression and measurement

- Send delivery only after confirmed form success; log `lead_magnet_delivered`.
- Suppress Day 4 activation email when `watchlist_added` exists.
- Suppress all sends after unsubscribe or hard bounce.
- Log `email_open`, `email_click`, `compare_started`, `price_comparison_completed`, `signup_completed`, `watchlist_added`, and `target_price_set`.
- Do not send a price-alert email without a fresh verified snapshot and working delivery log.
