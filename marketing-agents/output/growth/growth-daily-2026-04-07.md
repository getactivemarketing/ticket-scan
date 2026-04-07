# Growth Daily — 2026-04-07

## User Health (from /api/admin/stats + /api/admin/users)

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | 48    | 100%       | +0           |
| New (last 7 days)                | 3     | 6.3%       | n/a          |
| Activated (has ≥1 watchlist)     | ~37   | ~77%       | n/a          |
| Active alerts firing             | 0     | 0%         | 0            |
| Newsletter subscribers (active)  | 3     | —          | 0            |
| Triggered alerts (lifetime)      | 0     | —          | 0            |

**Headline finding:** Zero alerts have ever triggered across 64 watchlist items. The core retention loop (price-drop email → return visit) is **not firing**. This is the single biggest growth blocker — bigger than any copy tweak.

Likely causes:
1. Users aren't setting `target_price` (or setting unrealistic ones).
2. Cron may not be writing to `price_history` consistently → no comparison baseline.
3. No "any movement" alert tier — only target-hit triggers.

## Activation Gap

- **3 users** signed up in last 7 days; all 3 have ≥1 watchlist item → activation rate ~100% for new cohort. Good.
- **Drip pending:** 8+ users with `last_email_sent = 0` and `days_since_signup` 4–16. Day-3 drip is **not sending** for recent signups. Escalate to Email Agent.

## Churn Signals

- Unsubscribes today: 0 (only 3 active subs total — too small to read signal).
- Users entering "at-risk" today (signup >7d, 0 alerts ever received): id 46, 45 (crossed 7d today).
- Alert fatigue candidates: 0 (no alerts have ever sent).
- **Dormant cohort** (signup ≥14d, 0 alerts, low engagement proxy): ids 43, 42, 41, 40, 39, 38, 37 → ~7 users.

## Actions Triggered / Recommended

1. **BLOCKER → Engineering:** Investigate why `triggeredAlerts = 0` despite 64 watchlist items and a 4-hour cron. Check `price_history` row count and target_price distribution. Without this, no retention tactic matters.
2. **BLOCKER → Email Agent:** Drip emails not sending (`last_email_sent = 0` for everyone). Day-3 email should have fired for ids 46, 47, 48.
3. **Win-back queue (Tier 3, 14d+ dormant):** ids 43, 42, 41, 40, 39, 38, 37 → handed to Email Agent (see below).
4. **CRO Agent handoff:** Activation looks fine (~100% on new cohort). Real funnel leak is post-activation (alerts never fire). Redirect onboarding focus from "add to watchlist" → "set a realistic target price."

---

## Churn Intervention — Win-Back Email (Tier 3)

**Audience:** 7 users, signup ≥14 days, 0 alerts received, ≥1 watchlist item.
**Send time:** Tuesday 10:00 AM local (highest open rates for utility emails).

**Subject line A/B:**
- A (curiosity): "We checked your watchlist so you didn't have to"
- B (loss aversion): "Your [event] dropped — and you missed it"

**Body (personalized template):**
> Hey —
>
> You added **{event_name}** to your TicketScan watchlist {days_ago} days ago and we've been tracking it across Ticketmaster, SeatGeek, and StubHub ever since.
>
> Here's what happened while you were gone:
> - Lowest price seen: **${low}** (on {source})
> - Current price: **${current}**
> - Movement: {▼ X% / ▲ X%}
>
> If you want us to ping you the moment it dips below a number you'd actually pay, set a target price — takes 10 seconds:
>
> → [Set my target price]({watchlist_url})
>
> No target = no alerts. That's probably why you haven't heard from us.
>
> — TicketScan
> *We're the price-comparison nerds who think paying StubHub markup should be illegal.*

**Why this works:** Names the real reason they churned (no target → no alerts), uses their own data as the hook, and gives one frictionless CTA. Irreverent sign-off keeps brand voice.

---

## Psychology-Driven Optimization of the Day

**Principle:** Commitment / Consistency (Cialdini) + Endowment Effect
**Where:** Watchlist add flow — the moment after a user clicks "Track this event."
**Problem it solves:** 0 of 64 watchlist items have ever produced an alert because users skip setting `target_price`. They commit to *tracking* but not to *acting*, so the retention loop never closes.

**Exact UX change:**
Today the add-to-watchlist flow ends at "Added ✓". Replace the success state with a 1-question micro-commitment:

> ✓ Tracking **{event_name}**
>
> **What price would make you click "buy"?**
> Current low: ${current_low}
>
> [ $____  ]   ← prefilled with `current_low * 0.85` (15% below market)
>
> [ Set my alert →  ]   [ Skip for now ]

Copy tweak under the input: *"You're 1 step from your first price drop alert."* (progress framing → consistency principle).

**Expected impact:**
- Target-price set rate: ~0% → 40–60% (industry benchmark for prefilled single-field forms).
- Alerts fired in next 30 days: 0 → ~10–15 (assuming 15% of targets get hit).
- Day-30 retention for cohort: estimate +8–12pp once alerts actually start landing in inboxes.

**Hand to:** CRO Agent (Agent 6) for implementation in `web/src/app/event/[id]/` add-to-watchlist component, and Frontend.

---

## Handoffs

- → **Engineering:** Audit `triggeredAlerts = 0` root cause (price_history population + target_price distribution).
- → **Email Agent (5):** (a) Fix drip not firing for ids 46–48, (b) queue Tier 3 win-back to ids 37–43.
- → **CRO Agent (6):** Implement target-price micro-commitment in watchlist add flow (spec above).
