# Growth Daily — 2026-08-06

Source: live production admin API queried 2026-08-06. Percentages use 200 registered users unless noted. The API exposes signup and watchlist timestamps, but it does not expose last login/session activity, alert clicks, or an unsubscribe event feed.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 9 | 4.5% | 9 vs 12 in the preceding 7-day cohort (-25.0%) |
| Activated (has watchlist) | 119 | 59.5% | 7 of 9 new users activated; preceding cohort was 8 of 12 |
| Active (visited in 7 days) | N/A | N/A | Not measurable: no login/activity timestamp in admin API |
| At-risk (no visit 7–14d) | N/A | N/A | Not measurable |
| Churned (no visit 14d+) | N/A | N/A | Not measurable |

Additional platform counters: 203 watchlist items, 4 active newsletter subscribers, 0 triggered alerts reported by `/api/admin/stats`.

## Activation Gap

- **2** users signed up in the last 7 days with 0 watchlist items (**22.2%** of the new cohort).
- The two records are the July 30–August 5 signups with no watchlist row. No behavioral reason is determinable from the current API.
- Working hypotheses for CRO testing: the user did not find a relevant event, did not understand that watchlist tracking is the core value, or encountered signup-to-first-watch friction. These are hypotheses, not observed reasons.

## Churn Signals

- Unsubscribes today: **N/A**. The newsletter endpoint returns current subscriber state, not an unsubscribe event history.
- Users entering “at-risk” today: **N/A**. No last-login or visit field is exposed.
- Alert-fatigue candidates: **0 observable**, because the stats endpoint reports 0 triggered alerts. The alerts endpoint returned `Failed to get alerts`; this should be treated as a telemetry/schema issue, not proof that no alerts were sent.

## Actions Triggered

- Win-back emails queued: **0**. There is no production admin endpoint for churn email enqueue/send, and no reliable at-risk recipient list.
- Re-engagement nudges sent: **0**.
- Intervention drafts prepared below for Email Agent implementation once recipient eligibility and suppression rules are available.

## Churn Intervention Queue (handoff-ready, not sent)

Eligibility must be evaluated server-side using `last_seen_at`, email consent, prior send history, and a suppression window. Send at 10:00 AM recipient local time; use the next available timezone-aware send slot.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on {{watchlist_event_count}} events you’re tracking

Hi {{first_name}},

Your TicketScan watchlist is doing the boring work: prices on {{changed_event_count}} of your tracked events changed while you were away. {{best_event_name}} moved from {{old_price}} to {{new_price}} across the marketplaces we monitor.

Take a 30-second look before you buy—or before the price moves again. Your wallet remains invited.

**CTA:** Review my watchlist

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed {{savings_amount}} in ticket-price movement

Hi {{first_name}},

{{changed_event_count}} events on your watchlist had price changes since your last visit. The biggest move was {{best_event_name}}, where the lowest tracked price changed by {{price_change}}.

TicketScan is built for one simple job: compare the market and help you avoid paying the “I should have checked” tax.

**CTA:** See the latest prices

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We kept watching. Here’s what changed.

Hi {{first_name}},

While you were away, {{changed_event_count}} events on your watchlist changed price. {{best_event_name}} is the clearest reason to come back: {{trend_summary}}.

No guilt trip, no confetti cannon—just current prices across Ticketmaster, SeatGeek, and StubHub so you can decide with better information.

**CTA:** Reopen my watchlist

If no tracked event has a meaningful change, substitute: “Nothing dramatic moved yet—which is useful to know. Your watchlist is still monitoring it.”

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** The post-signup dashboard empty state and first-watchlist flow.

**Exact UX change:** Add a small progress indicator: “You’re 1 step from your first price alert” followed by “Search an event → Add it to your watchlist → Set a target price.” After the first watchlist add, change the copy to “Nice. One more step: set the price you’d actually pay.” Keep the CTA “Find an event to track.”

**Why this fits the data:** 2 of 9 recent signups stopped at zero watchlist items, while 7 completed the first activation step. Making the next action concrete should reduce ambiguity without manufacturing scarcity. Expected impact: improve signup-to-first-watchlist conversion by 5–10% relative in an initial A/B test; validate against a 14-day activation window.

## Handoffs

### To CRO Agent (Agent 6)

Recent cohort: 9 signups, 7 activated, 2 unactivated (22.2% activation gap). Test the three-step progress indicator above, instrument `signup_completed`, `first_search`, `watchlist_added`, and `target_price_set`, and capture a one-question exit reason for users who leave without a watchlist item.

### To Email Agent (Agent 5)

Use the three tier drafts above only after adding: `last_seen_at`, event-level price-change data, consent status, and a deduplicated send log. Do not send generic win-back mail to the full 200-user database.

## Instrumentation Blockers

1. Add `last_seen_at` (or a privacy-conscious equivalent) and record authenticated activity.
2. Add alert delivery, open/click, and unsubscribe event records with timestamps.
3. Repair `/api/admin/alerts` schema/query failure before using alert-fatigue reporting.
4. Add an internal, idempotent churn-email queue endpoint with suppression and audit fields.
