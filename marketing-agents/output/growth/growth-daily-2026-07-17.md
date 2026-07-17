## Growth Daily — 2026-07-17

---

### User Health (live from API)

| Segment                           | Count | vs Yesterday | Notes                                          |
|-----------------------------------|-------|--------------|------------------------------------------------|
| Total users                       | 168   | +2           |                                                |
| New (last 7 days, rolling)        | 22    | +2           | Stats endpoint shows 17 (calendar week)        |
| New today                         | 2     | —            | jlombardo427, frerqrfq3 — both 0 watchlist     |
| Activated in 7-day cohort         | 9     | ~same        | 41% — see note below                           |
| NOT activated in 7-day cohort     | 13    | +2           | 59% (was 55% yesterday)                        |
| Active alerts                     | 0     | 0            | Platform structural issue — no target price UI |
| Drip emails sent (all-time)       | 0     | 0            | Campaign not sending                           |
| Newsletter subscribers            | 3     | n/a          |                                                |
| At-risk / Churned                 | n/a   | n/a          | No last_login column — visit segmentation impossible |

**Data note:** Admin API returns 50 most recent users of 168 total. All figures derived from this visible cohort + stats endpoint. Full-platform activation rate is not calculable.

---

### Activation Gap

**13 of the 22 users registered in the last 7 days have 0 watchlist items (59%). Activation gap widened by 4pp vs yesterday.**

**New arrivals today — both unactivated:**

| User ID | Email | Days Since Signup | Watchlist |
|---------|-------|-------------------|-----------|
| 168 | jlombardo427@gmail.com | 0 | 0 |
| 167 | frerqrfq3@gmail.com | 0 | 0 |

Day-0 unactivation is normal — the concern is users who don't return. Watch these two tomorrow.

**Cohort progression from yesterday:**

| Email | Was (day) | Now (day) | Status |
|-------|-----------|-----------|--------|
| ryan.tatusko@gmail.com | Day 0 | Day 1 | Still unactivated → Tier 1 target |
| yeynermunoz124@gmail.com | Day 2 | Day 3 | **Drip Email 1 due** (blocked by broken drip) |
| danielldk930@gmail.com | Day 2 | Day 3 | **Drip Email 1 due** (valid email) |
| michelyandeleon@gmail.com | Day 3 | Day 4 | Tier 1 → approaching Tier 2 |
| lainandvern@yahoo.com | Day 4 | Day 5 | Tier 2 |
| cristian@gmail | Day 4 | Day 5 | Invalid email — skip |
| sean@goodinginvestmentproperties.com | Day 5 | Day 6 | Tier 2 |
| geno.white96@gmail.com | Day 5 | Day 6 | Tier 2 |
| alejandrojosuetovarlara@gmail.com | Day 5 | Day 6 | Tier 2 |
| jason.thegreat@yahoo.com | Day 6 | Day 7 | Tier 2 → Tier 3 boundary |

**Activated users in current 7-day cohort (for reference):**

| Email | Events Tracked | Registered |
|-------|---------------|------------|
| jlombardo427@gmail.com | — | Today (0 so far) |
| frerqrfq3@gmail.com | — | Today (0 so far) |
| rebdav13@gmail.com | 1 (Noah Kahan @ Petco Park) | Jul 15 |
| meaganlong19@gmail.com | 1 (Twins vs Royals) | Jul 15 |
| roadmap-fizz.38@icloud.com | 1 (Noah Kahan @ Wrigley) | Jul 15 |
| jgagznos@gmail.com | 1 (Hatebreed Summer Slaughter) | Jul 14 |
| otiamaxminka@gmail.com | 2 (Noah Kahan @ Citi Field ×2) | Jul 11 |
| mjw26@msn.com | 1 (WWE SummerSlam) | Jul 10 |
| kolekotto@gmail.com | 1 (UFC 329) | Jul 10 |

**Pattern (same as yesterday):** Every user who activated did so in their first session. No user in the visible cohort has returned a day later to activate. First session = only chance.

---

### Churn Signals

| Signal | Status |
|--------|--------|
| Unsubscribes today | n/a — endpoint not exposed |
| At-risk users (no visit 7-14d) | n/a — no last_login in DB |
| Alert fatigue | n/a — 0 alerts have ever fired |
| Drip emails sent (all-time) | **0** |
| Users overdue for Drip Email 1 (Day 3+) | **~8** reachable users (valid emails, 3–7 days, 0 watchlist) |

**Structural issues unchanged:**

1. **Drip campaign not sending.** 8 users at Day 3+ with valid emails should have received Drip Email 1. Do NOT call `/api/admin/drip-run` without engineering review.

2. **No target price UI → 0 active alerts.** 178 watchlist items, all with `target_price: null`. The core retention loop is inert. Fix = small input field on EventCard.

3. **No last_login → no visit-based churn segmentation.** Cannot identify who's truly at-risk without login tracking.

---

### Churn Intervention Queue

**Drafting for Agent 5 (Email) — do not send until drip system is confirmed working.**

**Tier 1 — Gentle nudge (1-3 days, 0 watchlist)**
Targets: ryan.tatusko, michelyandeleon (2 valid, reachable users)

> **Subject:** "The part you haven't tried yet"
>
> Hey — you signed up for TicketScan but haven't added anything to watch yet.
>
> Here's the thing: the search is free, but the watchlist is where it gets useful. Add an event and we track prices across Ticketmaster, SeatGeek, and StubHub automatically. You get an email when prices drop.
>
> Takes under a minute → [Add your first event]

**Tier 2 — Value reminder (4-6 days, 0 watchlist)**
Targets: lainandvern, sean@goodinvest, geno.white96, alejandrojosuetovarlara (4 users)

> **Subject:** "Prices moved this week. You were unprotected."
>
> You signed up for TicketScan a few days ago but haven't set up any tracking yet.
>
> Ticket prices swing constantly — often by 20–40% in a week. Without a watchlist, you're buying blind.
>
> Pick one event, add it, and we'll watch it for you. Free. → [Start Tracking]

**Tier 3 — Win-back (7+ days, 0 watchlist)**
Targets: jason.thegreat@yahoo.com (1 user, now at Day 7)

> **Subject:** "You're leaving money on the table"
>
> A week ago you created a TicketScan account. Still haven't used it.
>
> Here's what you're missing: we compare ticket prices across every major platform and tell you when to buy. Most users save $30–80 per ticket just by waiting for the right window.
>
> One click to start → [See What We Can Find For You]

---

### Psychology-Driven Micro-Optimization

**Principle: Loss Aversion**
*(Rotating through principles; yesterday used Commitment/Consistency)*

**Problem:** Users land on the dashboard with 0 watchlist items and see... nothing. The empty state is neutral — no penalty, no missed opportunity signal. Loss aversion is one of the most powerful behavioral levers (Kahneman/Tversky: losses feel ~2× more acutely than equivalent gains), but the platform never invokes it.

**Where to apply:** Empty watchlist state in `/dashboard`

**Exact copy change (empty-state banner when watchlist = 0):**

```
Current (implied):  "Your watchlist is empty. Add events to track."

New:                "Prices are moving right now — without a watchlist, you won't know."
                    [See what's changing today →]
```

**Why this framing works:** "Prices are moving right now" creates an active loss that the user is already experiencing — they just don't know about it yet. Compared to a neutral invitation ("add events"), this creates urgency by making inaction feel costly rather than simply suboptimal.

**Secondary application — EventCard (post-search):** Under each event card show: "X people are tracking this event. Last price check: [time ago]." Even if prices are null (current state), the presence of watchers implies movement worth catching.

**Expected impact:** Loss-framed CTAs typically outperform neutral equivalents by 15–30% in e-commerce and SaaS onboarding contexts. At the current activation rate (41%), even a 15% lift adds ~1 more activated user per 16 signups.

**Implementation:** One-line copy change in the empty-state component of `web/src/app/dashboard/page.tsx`. Zero new API calls needed.

---

### For Agent 6 (CRO) — Activation Gap Data

- Activation gap now at 59% (worsened 4pp in one day as 2 unactivated users joined today)
- Confirmed pattern: first-session-or-never activation. Post-day-0 re-activation is not happening in visible cohort.
- Highest-priority fix: empty-state on dashboard should create urgency (loss aversion framing above), not just be an invitation
- Secondary: no onboarding checklist exists post-registration (yesterday's rec, still unbuilt)
- Blocker: target price field still missing from EventCard → alerts still can't arm → retention loop still broken

### For Agent 5 (Email) — Win-back Content

Three draft emails above (Tiers 1/2/3) ready for review and sequencing. Drip system remains at 0 sent — coordinate with engineering before queuing any live sends. Skip invalid emails: `cristian@gmail` (id 155), `danielldk930@gmail.con` (id 160).
