## Psychology-Driven Optimization — 2026-08-04

### Recommendation: Commitment / consistency

**Where:** post-signup onboarding state and the first event detail/watchlist CTA.

**Exact copy / UX change:**

Show a compact progress indicator:

> **You’re 1 step from your first price alert**  
> Add an event to your watchlist and TicketScan will keep an eye on the price for you.

Primary CTA: **Find an event**  
Secondary link: **See how alerts work**

After the first watchlist add, change the state to:

> **Nice. Your first event is being watched.**  
> Add one more event to compare your options.

**Why this principle:** a visible, nearly completed commitment makes the next action concrete and preserves momentum after registration. It also frames the watchlist as a user-owned asset without inventing social-proof numbers or scarcity.

**Expected impact:** improve registration-to-first-watchlist conversion, especially in the current activation-gap cohort (3 of 7 recent signups unactivated). Measure `activation_step_viewed → watchlist_added_after_signup` and compare against the existing onboarding flow over a 14-day holdout. Do not claim a lift until the event instrumentation exists.
