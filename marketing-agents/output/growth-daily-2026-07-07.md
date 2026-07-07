## Growth Daily — 2026-07-07

_Source: live admin API. No last_login column exists — "at-risk" proxied by days_since_signup. Traffic/funnel % unavailable (no analytics)._

---

### User Health

| Segment                              | Count | Notes                              |
|--------------------------------------|-------|------------------------------------|
| Total registered                     | 146   | +11 this week, +3 today            |
| Activated (has ≥1 watchlist item)    | ~73   | ~50% rate from 20-user sample      |
| New last 7 days                      | 11    | 4 of 10 sampled have 0 watchlist   |
| Drip campaign emails sent (ever)     | 0     | Confirmed: all users at email 0    |
| Active alerts                        | 0     | No target-price input exists in UI |
| Newsletter subscribers               | 3     | Extremely low relative to 146 users|

---

### Activation Gap

- **4 of 11** new signups this week have 0 watchlist items (no activation)
- Likely cause: target-price input still missing from EventCard — users can track events but can't arm alerts, reducing perceived value of the watchlist
- **Root cause fix (blocked):** Add target price input to EventCard → sends to `/api/watchlist` → enables alert arming

Users in gap (signed up last 7 days, 0 watchlist):
- lori.r.sabet@gmail.com (3 days since signup)
- thellrung@hotmail.com (4 days)
- ambeargram@gmail.com (6 days)
- dreasommers@gmail.com (8 days — just outside 7d window)

---

### Drip Pipeline — Overdue Queue

The drip campaign has never sent a single email. Overdue by tier today:

| Drip Email | Due after | Users overdue |
|------------|-----------|---------------|
| Email 1    | Day 3     | ~11 (all week's signups) |
| Email 2    | Day 7     | ~4-6 users    |
| Email 3    | Day 14    | ~4 users      |
| Email 4    | Day 21    | Unknown       |
| Email 5    | Day 30    | Unknown       |

**Do not trigger drip-run without verifying it won't blast all 146 users at once.**

---

### Churn Signals

Alert fatigue: n/a — 0 alerts have ever been sent.  
Unsubscribes today: n/a — no endpoint available.  
At-risk proxy (signed up 7–14 days, haven't progressed):

**Tier 1 — Gentle nudge (7-10 days):**
- sameerqure@gmail.com — 10 days, 0 watchlist
- britishcpa@gmail.com — 10 days, 2 watchlist items ← best nudge candidate

**Tier 2 — Value reminder (10-14 days):**
- gimlithepirate@gmail.com — 12 days, 1 watchlist item
- areola3@sbcglobal.net — 12 days, 0 watchlist
- allyleblanc@gmail.com — 13 days, 0 watchlist
- wvolz8926@gmail.com — 13 days, 0 watchlist

**Tier 3 — Win-back (14+ days):**
- meghanheindel1@gmail.com — 14 days, 1 watchlist item
- vince12000000@gmail.com — 14 days, 2 watchlist items ← best win-back candidate

---

### Churn Intervention — Email Templates

#### Tier 1 Subject: "Quick question about your ticket search"
```
Subject: Quick question about your ticket search

Hey — you signed up for TicketScan [X] days ago. Have you had a chance
to add events to your watchlist?

It takes 30 seconds: search for any event → click "Track" → we watch
prices and email you when they drop.

→ Add your first event: https://www.ticketscan.io/dashboard

— TicketScan
```

#### Tier 2 Subject: "Your watchlist is set up — here's what to do next"
```
Subject: Your watchlist is set up — here's what to do next

You've got events on your watchlist. Nice.

The next step is setting a target price so we know when to alert you.
Right now alerts aren't armed — which means you're tracking but not
catching drops.

[Known issue: target price UI not yet shipped — hold this email until fix lands]

→ https://www.ticketscan.io/watchlist
```

#### Tier 3 Subject: "We saved your watchlist — come see what's changed"
```
Subject: We saved your watchlist — come see what's changed

It's been a couple weeks. Your watchlist is still there.

The World Cup is underway. Prices on secondary market events are moving.
A lot of people are tracking the same events you saved.

Worth a look: https://www.ticketscan.io/watchlist

— TicketScan
```

---

### Psychology-Driven Optimization — Today's Recommendation

**Principle: Loss Aversion**  
**Where:** Search results / EventCard  
**Current state:** Cards show lowest available price (positive framing)  
**Change:** Add a secondary line showing the *highest* price listed on any platform

```
[Event Title]
Best price found: $89
Other sites: up to $142
```

**Why it works:** Users anchor to the $142 (highest seen) and feel the $89 as money *saved* rather than money *spent*. The threat of leaving money on the table activates loss aversion — a stronger motivator than a comparable gain frame.

**Exact copy change in EventCard.tsx:**
- Below the green min-price badge, add a gray line: `"Other platforms: up to $[maxPrice]"`
- Source: already have `max_price` in the price comparison API response

**Expected impact:** Higher watchlist add-rate and compare-click rate. Low implementation cost — data already exists.

---

### Actions for Other Agents

**→ CRO Agent (Agent 6):**
- Activation gap = 4 of 11 new users didn't add watchlist items
- Root fix: target-price input on EventCard (confirmed missing, confirmed as top P0)
- Secondary fix: onboarding empty-state on /dashboard that explains the watchlist value prop

**→ Email Agent (Agent 5):**
- Tier 1–3 email templates above are ready for review
- Tier 2 template is gated on target-price UI shipping — flag it
- Drip pipeline is still at 0 sends; needs investigation before triggering

---

### Actions Triggered Today
- Win-back emails queued: 0 (templates ready, not wired to send endpoint)
- Re-engagement nudges sent: 0
- Psychology recommendation: Loss aversion on EventCard (ready to ship)
