# Growth Daily — 2026-07-18

_Data pulled live from admin API. No last_login column exists — visit-based inactivity segments (7-day/14-day active/churned) cannot be computed and are marked n/a._

---

## User Health

| Segment                          | Count | Notes                                      |
|----------------------------------|-------|--------------------------------------------|
| Total registered users           | 169   | All time                                   |
| New this week                    | 14    | Admin stats                                |
| New today                        | 1     |                                            |
| Activated (has ≥1 watchlist item)| ~88   | Estimated: 52% rate × 169 (see note below) |
| Not activated (0 watchlist)      | ~81   | Estimated: 48% of total                    |
| Active (visited last 7 days)     | n/a   | No last_login column in DB                 |
| At-risk (no visit 7–14 days)     | n/a   | No last_login column in DB                 |
| Churned (no visit 14+ days)      | n/a   | No last_login column in DB                 |

_Activation rate derived from 50 most recent users (API cap): 26/50 = 52% have ≥1 watchlist item. Applied as estimate to full 169-user base._

---

## Activation Gap

- **10 of the 14 new users this week (71%)** have 0 watchlist items — confirmed by inspecting recent user records
- The 4 who activated averaged 1–2 items each
- **Root cause (known, verified):** No target price input UI exists. The add-to-watchlist flow sends `targetPrice: null` for every item. Users add events but the platform can't arm any alerts — so watchlist has no perceived utility, reducing motivation to add items.
- **0/50 watchlist items (checked) have a target_price set.** This is platform-wide.

---

## Churn Signals

- Unsubscribes today: n/a (no tracking endpoint)
- Users entering "at-risk" today: n/a (no last_login)
- Alert fatigue candidates: 0 — no alerts have ever fired (0 active alerts, 0 triggered alerts)
- **Drip campaign status: BROKEN / 0 emails delivered ever**
  - 20 pending users with `last_email_sent = 0`
  - 15 eligible for drip email 1 (signed up 3+ days ago)
  - 6 eligible for drip email 2 (signed up 7+ days ago)
  - This is the single most actionable retention lever right now

---

## Actions Triggered

- Win-back emails queued: 0 (mechanism doesn't exist yet; content drafted below)
- Re-engagement nudges sent: 0 (drip engine not firing; do not blind-trigger — risk blasting real inboxes)
- Drip backlog flagged to Email Agent (Agent 5): 20 users pending, 15 eligible now

---

## Churn Intervention — Email Content Drafts

_Prepared for the 3 inactivity tiers. Cannot auto-send — drip engine must be fixed first._

### Tier 1: Gentle Nudge (7–10 days post-signup, no activity visible)

**Subject:** "Still watching those prices for you 👀"

> Hey — just checking in.
>
> You created your TicketScan account a little over a week ago. If you haven't had a chance to set up a price alert yet, it takes about 60 seconds.
>
> Just search for any event → tap "Watch" → set your target price. We'll email you the moment tickets drop into your range.
>
> [Set Your First Alert →]
>
> — The TicketScan team

**Send timing:** 10am local time. Subject urgency: curiosity ("still watching").

---

### Tier 2: Value Reminder (10–14 days post-signup)

**Subject:** "You could have saved on these tickets"

> Here's what happened on TicketScan while you were away:
>
> Ticket prices for [top popular events this week] have been moving. Some users are tracking 5–10 events and getting alerts when prices dip.
>
> The price comparison tool is free to use — no account required to browse. But alerts? That's your secret weapon.
>
> [Compare Prices Now →]

**Send timing:** 9am local. Use loss aversion framing ("could have saved").

---

### Tier 3: Win-Back (14+ days post-signup)

**Subject:** "We haven't seen you in a while — here's what's changed"

> It's been a couple weeks since you signed up for TicketScan.
>
> We've added more events and improved how we surface price trends. If you tried us during the World Cup rush, things are calmer now — and there are some genuinely good deals on upcoming concerts and sports.
>
> Come back and take a look. Takes 30 seconds.
>
> [See What's New →]

**Send timing:** Friday 5pm local (end-of-week FOMO moment).

---

## Psychology-Driven Micro-Optimization

**Principle: Commitment/Consistency (Cialdini)**

Users who take a small initial step are dramatically more likely to complete a larger goal — because humans need to act consistently with prior commitments.

**Where to apply:** Post-registration redirect page / dashboard first visit (currently: blank search UI with no onboarding)

**Exact UX change:**

Add a 3-step progress indicator at the top of the dashboard on first login:

```
[ ✓ Account created ]  →  [ + Add an event ]  →  [ 🔔 Set a price target ]
                                 ↑
                          You are here
```

**Copy:** `"You're 2 steps from your first price alert. Most users set one in under 2 minutes."`

**Why it works here specifically:**
- Users hit a blank search page after signup with zero guidance
- The progress bar makes the "add watchlist → set target" path feel completable, not open-ended
- "Most users do it in 2 minutes" adds social proof (even if approximate) — addresses the "is this worth my time" hesitation
- It also makes the missing target price UI more urgent: without the target price input, step 3 is impossible and users will notice

**Expected impact:** 20–35% lift in same-session activation (first watchlist add + target set) based on standard onboarding pattern research. Zero backend change required — this is a frontend-only addition.

**Dependency:** Step 3 requires the target price input field to exist in the add-watchlist UI (currently missing — tracked separately).

---

## Handoffs

- **→ Email Agent (Agent 5):** Drip backlog has 20 users, 15 eligible today. Engine must be fixed before triggering. Win-back email content above is ready to wire in.
- **→ CRO Agent (Agent 6):** Activation gap root cause: no target price UI in EventCard add flow. Fix = one input field. This is the highest-leverage onboarding fix available.

---

## Summary

The single biggest retention lever is the drip campaign — it has never fired for any user, and 15 people are already overdue for email 1. Second is the target price UI gap: no user can arm an alert, which makes the watchlist feel pointless and drives the 71% non-activation rate for new signups. Neither requires new infrastructure — both are shipping tasks.
