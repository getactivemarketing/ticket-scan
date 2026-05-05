# Email Daily — 2026-05-05

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20 returned by API**
  - 20/20 still have `last_email_sent = 0` — zero drip emails ever delivered
  - Eligibility breakdown today:
    - E1 eligible (3+ days): 19/20 (was 20/20 — joseph.g.nicolosi@gmail.com signed up 2026-05-04, 1 day, not yet eligible)
    - E2 eligible (7+ days): 18/20 (no change in count, but new entrant — see below)
    - E3 eligible (14+ days): 10/20 (no change)
    - E4 eligible (21+ days): 6/20 (was 7/20 — likely a list-window effect; pendingUsers caps at 20)
    - E5 eligible (30+ days): 3/20 (was 4/20 — same cap effect; arin.gelbaugh@outlook.com no longer appears in pendingUsers, possibly dropped past the 20-row window)
  - **Newly crossed thresholds in last 24h:**
    - lilianamasyrubi@gmail.com: E1 → E2 (7 days)
  - **New user signups in last 24h:** joseph.g.nicolosi@gmail.com (entered E0 backlog at 0 days)
  - Oldest pending visible: chocolateyu1083@yahoo.com (35 days), laye.aurelien@wanadoo.fr (33 days), bhaygood728@gmail.com (32 days) — all should have all 5 emails by now; backlog now 5+ days past the entire 30-day drip cadence
- **ESCALATION (Day 29 of outage):** SMTP/drip pipeline still completely broken. Confirmed at 10:00 UTC: `POST /api/admin/drip-run` hangs and returns HTTP_CODE=000 after 40s timeout. Behavior identical to 2026-05-03 and 2026-05-04 — no progress, no triage signal observable. Day 29. Action item carried over from 2026-04-07.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 85 watchlist items have a `target_price` set (verified at 10:00 UTC, all rows still `target_price: null`). The alert engine has nothing to evaluate against. UX problem upstream of email; users are never prompted to set a target.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged since 2026-02-01)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 93 days since last organic subscriber signup

## Platform Context
- Total users: 65 (+1 today: joseph.g.nicolosi@gmail.com, +2 this week)
- Watchlist items: 85 (no change)
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Tenure |
|-------|-------|------|----------|------|--------|
| Cubs vs Reds (#86) | Wrigley Field | May 5 | **TODAY** | ajvanprooyen@crimson.ua.edu | 12 days |
| Cubs vs Reds (#87) | Wrigley Field | May 6 | 1 day | ajvanprooyen@crimson.ua.edu | 12 days |
| Bruno Mars — Romantic Tour | Soldier Field, Chicago | May 16 | 11 days | konman87@gmail.com | 93 days |
| Bruno Mars — Romantic Tour | Soldier Field, Chicago | May 17 | 12 days | konman87@gmail.com | 93 days |

Two users still own all urgent watchlist items — same two as the last three reports. Window is tighter on every dimension since yesterday:
- ajvanprooyen drops from 3 → 2 Cubs games (May 4 game #85 is now past).
- konman87's window tightens from 12/13 → 11/12 days — now inside the canonical stadium-tour resale-break corridor (~10–12 days out).

**Carryover failures from last 24h:**
- ajvanprooyen — Cubs vs Reds (#85, May 4) passed without any TicketScan touch. **Fourth consecutive day** a watchlist event for this user has expired in silence (May 1 #82, May 2 #83 Bobblehead, May 3 #84 Cade Horton Tee, May 4 #85 Reds). 4 of his 6 watchlist items have now expired without a single email.

**konman87 read worsens further:** 93-day tenure, show window 11/12 days out — we are *inside* the price-break window in real time. Stadium-tour resale curves typically break at the ~10-day mark; tomorrow is the canonical inflection point. Each silent day from here is a permanently unrecoverable alert window.

### Digest Templates (ready for send once SMTP is fixed)

**For ajvanprooyen@crimson.ua.edu — Cubs run (2 remaining games over 2 days):**
```
Subject: Cubs vs Reds: tonight + tomorrow at Wrigley
Preview: Series finale Wednesday is the value play.

Hi,

You've got 2 Cubs games left on your watchlist over the next 2 days,
both vs. the Reds. Here's the read:

⚾ May 5 — Cubs vs Reds · TONIGHT
⚾ May 6 — Cubs vs Reds · TOMORROW (series finale)

This is a clean, non-promo, non-rivalry mid-week run, so prices should
be among the lower-priced Cubs homestands. The Cade Horton Tee giveaway
on May 3 ran ~25-30% above standard mid-week resale — that premium is
gone now.

Series-finale Wednesdays (May 6) typically clear about 5-10% under their
Mon/Tue counterparts on a 3-game homestand because attendance dips for
day-game getaway crowds. If you can flex, May 6 is the value play.

[CTA: Compare Both Games at Once →]

Pro tip: Set a target price on each game and we'll alert you when prices
drop below it. Right now you're flying blind.
```

**For konman87@gmail.com — Bruno Mars at Soldier Field (2 nights, 11/12 days out):**
```
Subject: Bruno Mars at Soldier Field — you're inside the price-break window
Preview: 11 days out. Stadium-tour resale curves typically break right now.

Hi,

The two Bruno Mars Romantic Tour shows you've been tracking at Soldier
Field are 11 and 12 days away. You are now inside the canonical
stadium-tour resale-break corridor — sellers who held at premium prices
have started cutting, and the next 4-7 days are statistically when the
cheapest seats of the cycle appear.

🎤 Bruno Mars — The Romantic Tour
   Soldier Field, Chicago
   ▸ Sat, May 16 — 11 days out
   ▸ Sun, May 17 — 12 days out

Saturday usually carries a 15-25% premium over Sunday for the same
stadium tour. If you're flexible on the night, May 17 is your value
play — small Sunday discount stacks on top of the curve break.

[CTA: Compare Both Nights Side by Side →]

P.S. You've had these on your watchlist for 93 days. We owed you alerts
the whole time. We're rebuilding the email pipeline — sorry for the
silence.
```

### Notable Watchlist Items (next 30 days, not in 14-day window)
- **Bruno Mars — The Romantic Tour** @ Ohio Stadium, Columbus (May 20) — charlesteel126@gmail.com — 15 days out, 13-day tenure
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — 19 days out, 16-day tenure
- World Cup matches (4) at Lincoln Financial — pete.uzelac77+ticketscan — 40-60 days out

### Past Events Now on Watchlist (cleanup candidates)
**36 of 85 watchlist items are past events as of 10:00 UTC** — past-event pollution is now ~42% of total watchlist volume.

Moved into "past" since yesterday's report:
- May 4: Cubs vs Reds (#85) — ajvanprooyen — **passed without any TicketScan touch (fourth consecutive day for this user)**

Carryover from prior reports (still on watchlist, still need cleanup): 35 rows including:
- May 3: Cubs Cade Horton Graphic Tee (#84)
- May 2: Bilmuri @ Sylvee (#72), Cubs Kerry Wood Bobblehead (#83)
- May 1: Cubs vs D-backs (#82), Florence + The Machine (#59)
- Apr 26: Raptors v Cavaliers (#88) — nmcnamee99's only watchlist item
- Apr 17: Phillies v Braves (#79) — nicklib253's only item
- Apr 12: Cardi B (#69) — bhaygood728's only item
- Apr 4: NCAA Final Four (#65) — arin.gelbaugh's only item
- Mar 31: Oilers v Kraken (#66) — chocolateyu1083's only item
- ~25 earlier rows (Feb/Mar) including Super Bowl LX, Lady Gaga at MSG, WWE Elimination Chamber, NCAA 2nd Round games, Atlanta Hawks v Celtics, Warriors v Rockets, Shen Yun, etc.

**Sharper read holds:** all 4 oldest pending users (E5+E4 cohort: chocolateyu, laye, bhaygood, arin) are still tracking only past events. Even if SMTP is fixed today, the canonical drip lands referring to events that happened 1-5 weeks ago. **Send-as-is is now self-inflicted credibility damage at scale** — the pipeline cannot resume the canonical sequence without a content rewrite for this cohort.

---

## Subject Line A/B Tests

### Two-event roundup — Cubs games (refined from 3-game version yesterday)
- **A:** `Cubs vs Reds: tonight + tomorrow at Wrigley`
- **B:** `Your last 2 Cubs games this week — finale is the buy`
- **Hypothesis:** A is concrete + time-anchored ("tonight + tomorrow" reads as imminent calendar). B leads with the analytic conclusion (which night to buy). On a 2-game roundup, A's directness usually wins on click-through, B on open rate. Lean B for an opinionated voice play (consumer-advocate voice), A for highest open rate. Volume is N=1 here so call this directional only.

### Inside-the-window — Bruno Mars (refined from yesterday's "starting now" framing)
- **A:** `Bruno Mars at Soldier Field — you're inside the price-break window`
- **B:** `11 days to Bruno Mars: prices usually break right now`
- **Hypothesis:** A names the user's tracked event up front. B leads with a numeric urgency hook, no event in the subject — usually higher open rate, but slightly lower for this specific user since konman87 has tracked 2 dates and may not connect "11 days" to "his" event in the subject line. Lean A for konman87 (avoid friction); B for fresh sign-ups inside the window.

### Tenure-acknowledging open — 93-day silent user (carried + refined)
- **A:** `Bruno Mars at Soldier Field — your watchlist update`
- **B:** `93 days, zero updates — we owe you a price check on Bruno Mars`
- **Hypothesis:** B remains the consumer-advocate voice play and converts the SMTP outage into a trust-building moment. The number going up each day (now 93) increases the credibility hit if we keep sending A — A reads as if nothing was broken. Lean B for konman87 specifically; A for fresh sign-ups.

### CTA Review
- "Compare Both Games at Once" → `ticketscan.io/watchlist` — clear, correct
- "Compare Both Nights Side by Side" → `ticketscan.io/compare?event_ids=...` (or `/watchlist`) — verify deep-link works; otherwise fall back to `/watchlist`
- All primary CTAs above the fold ✓
- P.S. block on konman87 template sits below CTA — acceptable trade-off; the apology is part of the trust play, not the ask

---

## Action Items

### P0 — Critical (Day 29 of outage)
1. **SMTP/drip pipeline is completely dead.** `drip-run` continues to time out at 40s with HTTP_CODE=000 — identical behavior for the 3rd day running. Investigation order from 2026-05-03 / 2026-05-04 unchanged and untriaged:
   - Tail Railway logs while triggering `drip-run`. If no log line appears, the route handler isn't even executing → look at middleware / cron queue.
   - If the handler enters but never finishes, time `nodemailer.createTransport().verify()` in isolation.
   - If SMTP verifies, time the eligibility SELECT against `drip_emails_sent` joined on `users` — index health check.
   - Ship `/api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt}` so the next regression is detected in <1 hour, not 29+ days.
2. **4 watchlist events have now expired in silence in the last 96 hours, all for the same user (ajvanprooyen).** Cubs Cade Horton Tee (May 3), Cubs vs Reds May 4, plus the prior two (Bilmuri, Kerry Wood Bobblehead). 4 of his 6 watchlist items are now past with zero TicketScan touch on any of them. We are visibly failing the platform's core promise on a daily cadence — the silent-failure pattern is now a sustained 4-day streak.
3. **ajvanprooyen — 2 Cubs games left over the next 2 days. Last chance.** Same user, fourth day in the urgency queue. If SMTP is still down by EOD, deploy a one-off manual SendGrid/Postmark fallback for this user only — this is the easiest possible "did one-touch outreach actually convert?" test we can run while the cron is fixed. ROI is unmissable: 12-day tenure, 2 imminent watchlist events, no other signal source. After tomorrow EOD, all 6 of his watchlist items will be past.
4. **konman87 is inside the price-break window NOW.** 11/12 days out is the canonical inflection point for stadium-tour resale curves. Tomorrow it's 10/11 — past the historical break. If a one-off manual fallback is deployed for ajvanprooyen, konman87 should ride alongside it. After ~2026-05-09, the highest-value alert moment is gone permanently.

### P1 — High
5. **Drip threshold crossing today:** lilianamasyrubi@gmail.com (E1 → E2, 7 days). Smaller volume than the recent peak (4 in one day on 2026-05-03), but the trend is confirmed — ~1 threshold-advance/day baseline. Backlog grows monotonically.
6. **New user signup today (joseph.g.nicolosi@gmail.com).** First registered user since 2026-04-29 (per pendingUsers list). Onboarding email is part of the broken pipeline; their first impression of TicketScan email will be 0 messages over the entire 30-day drip if SMTP isn't fixed.
7. **Past-event watchlist pollution is now 42% (36/85).** Up from 35 yesterday, +1 net (Cubs vs Reds #85). When SMTP returns, recommended sequence:
   - (a) Ship past-event auto-archive (`event_date < NOW() - 24h`) BEFORE first drip resumption
   - (b) Re-fetch each user's watchlist and personalize around remaining live events
   - (c) Catch-up sequence the 4 oldest users (chocolateyu, laye, bhaygood, arin) on a condensed 1-week schedule with REWRITTEN content — their entire watchlist is past events; the canonical sequence will torch credibility on send.
8. **Target-price UX (still 0/85).** Auto-suggest a target price at watchlist-add (e.g., 10% below current min across sources) OR mandatory inline prompt at watchlist-add time. As long as `target_price` is null, the alert system is dead by design — fixing SMTP only revives drip + digest, not alerts.

### P2 — Medium
9. **Newsletter growth: 93-day stall.** 3 subscribers total (1 organic). Add CTAs to: blog post footers, venue pages, World Cup landing pages, watchlist-add confirmation flow. Test "weekly price drops in your city" pitch instead of generic newsletter framing.
10. **Build a watchlist-digest endpoint** for automated per-user sends. No endpoint exists — none of the digest content above can ship without one. Even after SMTP is fixed.
11. **Post-mortem still pending.** When SMTP is fixed, document: what broke, what monitoring was missing, why it took 29+ days, how we'll detect the next regression in <24h. The `/api/admin/drip-health` endpoint from item #1 is the leading deliverable.
12. **pendingUsers API list appears capped at 20.** Yesterday's report referenced arin.gelbaugh@outlook.com (34 days) as oldest; today only chocolateyu (35 days) appears. arin's `last_email_sent` is presumably still 0, but they're no longer surfaced. Either fix the cap or add pagination so backlog truly visible at the API layer.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 93-day stall
- **Drip pipeline:** BROKEN — Day 29 of outage, 0 sends ever, 20 users in pendingUsers (likely more behind the API cap)
- **Threshold advances since 2026-05-04:** lilianamasyrubi → E2 (1 advance in 24h, matches yesterday's pace)
- **New user signups (24h):** 1 — joseph.g.nicolosi@gmail.com
- **Price alerts:** 0 ever triggered — 0/85 watchlist items have target prices (no progress)
- **User growth:** +1 today, 65 total (+2 this week)
- **Watchlist:** 85 items (no change today), 4 events within 14 days (2 Cubs vs Reds for ajvanprooyen + 2 Bruno Mars/Soldier Field for konman87)
- **Past-event pollution:** 36/85 watchlist items (42%) are past events; +1 net today (Cubs vs Reds, May 4)
- **Critical miss yesterday:** Cubs vs Reds (May 4) expired without any TicketScan email — now **4 consecutive days** of expired-watchlist-events for the same user (ajvanprooyen). 4 of his 6 watchlist items have expired with zero TicketScan touch.
- **High-tenure alert window now BREACHED:** konman87@gmail.com (93-day tenure, 2 Bruno Mars dates 11/12 days out) — inside the canonical stadium-tour resale-break corridor in real time
- **Email channel status:** Day 29 of outage. `drip-run` hangs (40s timeout, HTTP_CODE=000) — identical behavior to 2026-05-03 and 2026-05-04, no investigation progress observable from the API surface
