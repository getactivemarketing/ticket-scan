# Watchlist Digest — content ready for send (2026-06-04)

**Status:** Drafted, NOT sent. Hold until drip/transactional sending is confirmed
working (see email-daily-2026-06-04.md escalation).

**Data rule:** No price figures or up/down deltas are included. Every tracked item
has `target_price: null` and the price feed returns null prices, so the only
verified, honest hook is **event proximity (urgency)**. Do not bolt on invented
price movement before sending.

---

## Segment A — Urgency: event ≤ 14 days out (5 users)

These are the only users with a real, defensible reason to email today. Each has a
tracked event inside two weeks. The CTA is "set a price target so we can alert
you" — which also fixes the dormant-alert problem (no targets = no alerts).

| User | Event | Venue | Date | Days out |
|---|---|---|---|---|
| coleesparrago@yahoo.com | Don Toliver: Octane Tour | Scotiabank Arena, Toronto | 2026-06-05 | 1 |
| officialrizk72@gmail.com | NBA Finals GM1 (Knicks) | Madison Square Garden | 2026-06-08 | 4 |
| officialrizk72@gmail.com | NBA Finals GM3 (Knicks) | Madison Square Garden | 2026-06-16 | 12 |
| samvirsujan@gmail.com | NBA Finals GM3 (Knicks) | Madison Square Garden | 2026-06-16 | 12 |
| joseph.g.nicolosi@gmail.com | NBA Finals GM3 (Knicks) | Madison Square Garden | 2026-06-16 | 12 |
| lisallam@hotmail.com | JOJI: SOLARIS | Prudential Center, Newark | 2026-06-16 | 12 |

### Template (urgency variant)

```
Subject A: Your [Event] is [X] days away — lock in your price target
Subject B: [X] days until [Event]. Here's how to not overpay.
Preview: You're tracking it. Set a target and we'll watch the price for you.

Hi there,

[Event] at [Venue] is coming up on [Date] — just [X] days out.

You're tracking this on TicketScan, but you haven't set a target price yet,
which means we can't ping you when it drops. Takes 10 seconds:

⚪ [Event] — [Date] — [X] days out — set your target price

As the event gets closer, resale prices on these tend to move fast in the last
two weeks. Tell us your number and we'll do the watching.

[CTA button: Set my price target →  /watchlist]
```

CTA target: `/watchlist`. Primary CTA above the fold. Single clear action
("set my price target") — no competing links.

---

## Segment B — Tracking, event >14 days out

Don't send today (no urgency hook, no price hook). Examples: Twenty One Pilots
(Oct 17), Harry Styles MSG run (Sep), WC/US Open Round of 16 (Sep). Hold for a
price-target onboarding nudge once sending works, or for a genuine price move once
price data exists.

---

## Segment C — Expired events still on watchlists (data hygiene)

Several watchlist rows are for events whose date has already passed and should be
cleaned, not emailed:
- "Tigers Jaw w/ Pool Kids" — 2026-06-03 (paradajoseph41) — passed
- "West Conf Finals: Thunder at Spurs Rd 3 Game 3" — 2026-05-22 (zhouyilinbest) — passed

Flag to backend: stale watchlist rows aren't being pruned. Low priority but worth
a ticket.

---

## A/B test plan (ready when sending is unblocked)
- **Subject A (deadline framing):** "Your [Event] is [X] days away — lock in your price target"
- **Subject B (loss-aversion framing):** "[X] days until [Event]. Here's how to not overpay."
- Split Segment A 50/50; measure open rate, then click-through to /watchlist,
  then % who actually set a target. Volume is tiny (6 sends) — treat as directional
  signal only, not significance.
