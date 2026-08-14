# Growth Daily — 2026-08-14

Source: live production admin API queried 2026-08-14. The API exposes signup and watchlist timestamps, but not last-login/session activity, alert clicks, unsubscribe event history, or a working detailed alert endpoint. Percentages use 212 registered users unless noted.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 12 | 5.7% | N/A — no prior-day snapshot available; +6 users vs the preceding 7-day cohort (6) |
| Activated (has watchlist) | 124 | 58.5% | N/A — no prior-day snapshot; current new-cohort activation is 5/12 vs 6/6 preceding |
| Active (visited in 7 days) | N/A | N/A | Not measurable: no login or session timestamp is exposed |
| At-risk (no visit 7–14d) | N/A | N/A | Not measurable |
| Churned (no visit 14d+) | N/A | N/A | Not measurable |

Additional counters: 209 total watchlist items, 0 active target-price alerts, 4 active newsletter subscribers, and 0 triggered alerts reported by `/api/admin/stats`.

## Activation Gap

- **7** users signed up in the last 7 days with 0 watchlist items (**58.3%** of the new cohort).
- **5** of 12 new users activated. The preceding 7-day cohort was 6 users, all activated; current cohort activation is therefore down 58.3 percentage points, though the comparison is small-sample.
- Reasons are not determinable from available data. Working CRO hypotheses: no relevant event found, watchlist value unclear, or signup-to-first-watch friction. These are hypotheses, not observed reasons.

## Churn Signals

- Unsubscribes today: **0 currently inactive records observed**. This is not a complete event count because the newsletter endpoint exposes current state, not unsubscribe history.
- Users entering “at-risk” today: **N/A**. No last-login or visit field is exposed.
- Alert-fatigue candidates: **N/A**. The stats endpoint reports 0 triggered alerts, but `/api/admin/alerts` fails with `Failed to get alerts` (HTTP 500); there is no click/open data. Do not interpret this as proof that no alerts were delivered.

## Actions Triggered

- Win-back emails queued: **0**. No production churn-email queue/send endpoint exists, and reliable at-risk recipient eligibility cannot be established.
- Re-engagement nudges sent: **0**.
- Tiered intervention drafts are prepared below for Email Agent implementation; they are not sent.

## Churn Intervention Queue — Handoff-Ready, Not Sent

Eligibility must be evaluated server-side using `last_seen_at`, consent, unsubscribe/bounce status, price-history movement, and a deduplicated send log. Suggested timing is 10:00 AM recipient local time.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices moved on your watchlist

Hi {{first_name}},

Your TicketScan watchlist is doing the boring work so you don’t have to. Prices changed on {{changed_event_count}} tracked event(s), including {{best_event_name}}, which moved from {{old_price}} to {{new_price}}.

Take a quick look before the market changes again. Ticket prices have the emotional stability of a group chat.

**CTA:** Review my watchlist

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed {{changed_event_count}} price changes

Hi {{first_name}},

{{changed_event_count}} event(s) on your watchlist changed while you were away. The biggest move was {{best_event_name}} at {{current_price}}, down {{savings_amount}} from the prior check.

You set the list up once. Let it keep doing its job—and skip the “I should have checked” tax.

**CTA:** See the latest prices

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We kept watching. Here’s what changed.

Hi {{first_name}},

While you were away, {{changed_event_count}} tracked event(s) changed price. {{best_event_name}} is the clearest reason to come back: {{trend_summary}}.

No guilt trip, no confetti cannon—just current prices across the marketplaces we monitor so you can decide with better information.

**CTA:** Reopen my watchlist

Suppress all sends when there is no verified price movement, no consent, a bounce, a recent send, or an unsubscribe.

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Post-signup dashboard empty state and first-watchlist flow.

**Exact copy/UX change:** Show a compact progress indicator: **“You’re 1 step from your first price alert”** followed by **“Search an event → Add it to your watchlist → Set a target price.”** After the first watchlist add, change the message to **“Nice. One more step: set the price you’d actually pay.”** Keep one primary CTA: **“Find an event to track.”**

**Expected impact:** Improve signup-to-first-watchlist conversion by 5–10% relative in an initial A/B test. Primary metric: watchlist add within 24 hours; secondary: target price set within 7 days. The 58.3% activation gap makes this the highest-leverage touchpoint today.

## Handoffs

### CRO Agent (Agent 6)

New cohort: 12 signups, 5 activated, 7 unactivated (58.3% gap). Test the progress indicator and one-CTA flow. Instrument `signup_completed`, `first_search`, `watchlist_added_after_signup`, `target_price_set`, and a one-question exit reason for users who leave without a watchlist item.

### Email Agent (Agent 5)

Use the three drafts above only after adding `last_seen_at`, event-level price deltas, consent/suppression status, and delivery/open/click/unsubscribe records. Do not send generic win-back email to the 212-user database.

## Instrumentation Blockers

1. Add a privacy-conscious `last_seen_at` or equivalent authenticated activity timestamp.
2. Add alert delivery, click, and unsubscribe event records.
3. Repair `/api/admin/alerts` (current HTTP 500/schema mismatch).
4. Add an idempotent internal churn-email queue endpoint with campaign, recipient, suppression, and audit fields.

Requested `churn-prevention` and `marketing-psychology` skills were unavailable in this environment; the intervention tiers and commitment/consistency recommendation follow the task specification directly.
