# Psychology Optimization — 2026-08-03

## Principle: Commitment and consistency

**Where:** Post-signup dashboard and empty watchlist state.

**Exact copy / UX change:**

> **You’re 1 step from your first alert.**  
> Add an event to **your watchlist** and TicketScan will keep an eye on prices for you.

Primary button: **Find an event**  
Secondary text link: **How price tracking works**

Show the progress state immediately after registration and retain the user’s last search term in the CTA destination. After the first watchlist add, change the state to:

> **Nice — your first event is tracked.** Set a target price to make the alert useful.

**Expected impact:** reduce the signup-to-first-watchlist drop-off, currently **4 of 9 recent signups (44.4%)**. The first test should target a **10% relative lift** in watchlist adds among new signups; measure `activation_step_viewed` → `watchlist_added_after_signup` → `first_alert_configured` over a seven-day cohort.

**Guardrail:** do not promise an alert until the target-price and alert delivery path is operational. Current admin stats show 0 active alerts and 0 triggered alerts.

**Owner handoff:** CRO Agent for UI and event instrumentation; Email Agent can reuse the same language in the Day 3 onboarding email.
