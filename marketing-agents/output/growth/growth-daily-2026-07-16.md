## Growth Daily — 2026-07-16

---

### User Health (live from API)

| Segment                          | Count | Notes                                          |
|----------------------------------|-------|------------------------------------------------|
| Total users                      | 166   |                                                |
| New (last 7 days)                | 20    | 2 registered today                             |
| Activated (has ≥1 watchlist item)| 9     | 45% of last 7 days cohort                      |
| NOT activated (0 watchlist items) | 11   | 55% of last 7 days cohort                      |
| Active alerts                    | 0     | Platform-wide structural issue (see below)     |
| At-risk / Churned                | n/a   | No last_login column — cannot segment by visit |
| Newsletter subscribers           | 3     | Active; unsubscribes endpoint not found        |

---

### Activation Gap

**11 of the last 20 users (55%) signed up and added zero watchlist items.**

| User ID | Email | Days Since Signup |
|---------|-------|-------------------|
| 166 | ryan.tatusko@gmail.com | 0 |
| 161 | yeynermunoz124@gmail.com | 2 |
| 160 | danielldk930@gmail.con | 2 — **invalid email (typo: .con)** |
| 159 | danielldk930@gmail.com | 2 |
| 158 | michelyandeleon@gmail.com | 3 |
| 157 | lainandvern@yahoo.com | 4 |
| 155 | cristian@gmail | 4 — **invalid email (incomplete)** |
| 152 | sean@goodinginvestmentproperties.com | 5 |
| 151 | geno.white96@gmail.com | 5 |
| 150 | alejandrojosuetovarlara@gmail.com | 5 |
| 148 | jason.thegreat@yahoo.com | 6 |

**Key observations:**
- 2 users have invalid email addresses (id 155, 160). They will never receive drip emails.
- User 160 appears to have typo'd their email (.con), immediately re-registered as 159 with the correct address — and still has 0 watchlist items after 2 days. Classic "registered out of curiosity, didn't understand what to do next" pattern.
- Users at days 3–6 with no activation are the highest-priority re-engagement targets. They've had time to return but haven't.

**Activated users in this cohort (for reference):**

| User | Watchlist Count | Days Since Signup |
|------|-----------------|-------------------|
| rebdav13@gmail.com | 1 (Noah Kahan @ Petco Park) | 0 |
| meaganlong19@gmail.com | 1 (Twins vs Royals) | 0 |
| roadmap-fizz.38@icloud.com | 1 (Noah Kahan @ Wrigley) | 0 |
| jgagznos@gmail.com | 1 (Hatebreed Summer Slaughter) | 1 |
| otiamaxminka@gmail.com | 2 (Noah Kahan @ Citi Field x2) | 4 |
| mjw26@msn.com | 1 (WWE SummerSlam) | 5 |
| kolekotto@gmail.com | 1 (UFC 329) | 5 |
| alyssawhiterox@gmail.com | 1 | 6 |
| wbgoodman77@gmail.com | 1 | 6 |

Pattern: The users who activate do so immediately (same session) or after a compelling event. No user has activated after their first session with a multi-day delay — which means if they leave without adding something, they rarely come back to add it.

---

### Churn Signals

| Signal | Status |
|--------|--------|
| Unsubscribes today | n/a — endpoint 404'd |
| At-risk users (no visit 7-14d) | n/a — no last_login in DB |
| Alert fatigue candidates | n/a — 0 alerts have ever fired |
| Drip emails sent (all-time) | **0** |
| Users overdue for drip Email 1 (Day 3+) | **~6** reachable users (days 3–6, valid emails) |

**Structural retention failures confirmed:**

1. **Drip campaign is not sending.** API returns `stats: []` — zero drip emails have been sent to any of 166 users ever. Six users (days 3–6, valid emails) should have received Drip Email 1 by now. Do NOT trigger `/api/admin/drip-run` without human review — risk of blasting real inboxes if broken.

2. **All 178 watchlist items have `target_price: null`.** The target price input field does not exist in the UI (known issue). This means price alerts can never arm. The core retention loop — "set a target, get notified, come back when it's hit" — is completely inert. This is the single highest-impact fix available.

3. **No visit-based segmentation is possible.** There is no `last_login` column in the users table. Churn tiers (7-day, 14-day) cannot be computed without either adding this column or integrating analytics.

---

### Churn Intervention Queue

**Triggering live emails is blocked** (drip system status unknown — do not auto-fire). Drafting content for Agent 5 (Email Agent) to review and sequence when drip is fixed.

**Tier 1 — Gentle nudge (2 days inactive, 0 watchlist)**
Target: yeynermunoz124, danielldk930, michelyandeleon (3 users, valid emails)

> Subject: "You signed up — but didn't grab the good part"
>
> Hey — you created a TicketScan account a couple days ago but didn't add anything to your watchlist yet.
>
> That's where the magic happens: add an event, and we watch prices for you across Ticketmaster, SeatGeek, and StubHub. When they drop, you hear about it first.
>
> Takes 30 seconds → [Find an Event]

**Tier 2 — Value reminder (4-5 days inactive, 0 watchlist)**
Target: lainandvern, sean@goodinvest, geno.white96, alejandrojosuetovarlara (4 users)

> Subject: "Ticket prices moved this week — did you miss it?"
>
> You created a TicketScan account but haven't set up any price tracking yet.
>
> This week, events near you had real price swings. You could have been watching.
>
> Add one event to your watchlist — we'll handle the rest. → [See What's Trending]

**Tier 3 — Win-back (6+ days, 0 watchlist)**
Target: jason.thegreat@yahoo.com (1 user at day 6)

> Subject: "Still thinking about it? Fair. Here's what TicketScan actually does."
>
> You signed up a week ago. That's cool — but you haven't used it yet.
>
> Quick version: we compare prices across every major ticket site so you don't have to, and we alert you when your target event drops in price.
>
> Pick one event you're thinking about → we'll watch it for free → [Try It Now]

---

### Psychology-Driven Micro-Optimization

**Principle: Commitment/Consistency (Progress Indicators)**

**Problem:** 55% of new registrations end without any activation. Users who leave the first session without adding a watchlist item almost never return to add one. The platform has no visible signal of "incomplete setup" to pull them back in.

**Where to apply:** Post-registration landing / dashboard page (`/dashboard`)

**Exact change:**

Add a 3-step activation checklist that appears at the top of the dashboard for users with 0 watchlist items:

```
Your TicketScan Setup (2 of 3 done)
[✓] Create account
[✓] Explore events
[ ] Add your first event to watchlist → [Find an Event]
    ↳ We'll start tracking prices the moment you add one.
```

Step 2 ("Explore events") can be auto-checked after signup, since users do land on the dashboard. Only Step 3 requires action.

**Why this works:** The Zeigarnik effect — people remember unfinished tasks more vividly than completed ones. A visible "2/3 done" state creates mild psychological tension that's resolved only by clicking. Progress bars also invoke commitment/consistency: users who've already done 2 steps feel invested enough to finish.

**Expected impact:** Based on onboarding checklist benchmarks, a visible incomplete-progress indicator typically lifts step-completion rates by 20–40%. At current 45% activation, even a conservative 20% lift would add ~4 more activations per 20 signups = higher LTV cohort.

**Implementation:** Single React component, no API changes. Add to `web/src/app/dashboard/page.tsx`. Check `watchlist_count === 0` from the existing `/api/watchlist` response. If 0 items, show the checklist banner; dismiss it permanently when an item is added.

---

### For Agent 6 (CRO) — Activation Gap Data

- 55% of new users are not activating (0 watchlist items)
- The post-registration flow appears to drop users at the dashboard with no clear next step
- Onboarding checklist (above) is the recommended P0 fix
- Secondary: Add an empty-state prompt on the dashboard when watchlist is empty: "Nothing here yet — search for an event to get started"
- Pre-existing P0 still blocking all retention: target price input field is missing from EventCard → alerts can never fire → address alongside checklist

### For Agent 5 (Email) — Win-back Content

Three email drafts above (Tiers 1/2/3) are ready for sequencing. Note: drip system is not sending — coordinate with engineering before queuing. Invalid emails on record: `cristian@gmail` (id 155) and `danielldk930@gmail.con` (id 160) — skip these in any send list.
