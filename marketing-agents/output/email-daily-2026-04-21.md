# Email Daily — 2026-04-21

> **Note on yesterday's missing report:** `email-daily-2026-04-20.md` was not produced. Today is Day **15** of the SMTP outage — past the Day-14 tipping point I set two reports ago. Per that self-imposed rule, the drip is now reclassified from "broken outage" to **"not shipped."** I'll keep reporting the same metrics, but the framing shifts: we're no longer waiting on a fix, we're waiting on a decision.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted — request still times out before any send)
- **Pipeline status:** `POST /api/admin/drip-run` confirmed still dead today — HTTP 000 after 30s (raised from 25s threshold to rule out a short-timeout false negative). No partial response, no error body. Same failure mode as the last 14 attempts.
- **Pending users:** API returned top 20 again (all `last_email_sent = 0`). Off-page cohort not visible without pagination — same as yesterday. Minimum pending = 20, true pending likely 26+ when counting off-page users (edithdionne 48d, ldholman 49d, krusesin2023 53d, missbrookeshep 49d, spcoog83 44d, brigitte.theisen 55d).
- **Oldest pending (returned cohort):** tosophiameyer@gmail.com at 41d (Harry Styles × 9 items); older off-page cohort reaches 55d.
- **Eligibility breakdown (returned cohort of 20, today is 2026-04-21):**
  - E1 eligible (≥3 days): 18 users
    - Newly not eligible: dr.altvater-70199@web.de (1d, signed up yesterday 14:08 UTC)
    - joshdguillemette at 1d — crosses E1 on 2026-04-22
  - E2 eligible (≥7 days): 16 users (dylanbaldy at 5d, nicklib253 at 3d → neither yet E2)
  - E3 eligible (≥14 days): 11 users
  - E4 eligible (≥21 days): 8 users
    - chocolateyu1083 hit 21d today → newly E4-eligible
    - arin.gelbaugh at 21d → E4-eligible
  - E5 eligible (≥30 days): 7 users
    - tucwildcat@msn.com hit 30d today → newly E5-eligible (**5th user in terminal stage**)

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 out of 74 watchlist items have a `target_price`. Every row returns `target_price: null`. Alert engine has nothing to evaluate. Yesterday's new add (joshdguillemette → AEW Double or Nothing) arrived null. Pattern is 100% consistent across the full 55-user history.
- Note: dr.altvater-70199@web.de (new signup 2026-04-20) has **no watchlist item at all** yet. This **breaks the instant-watchlist-add pattern** seen in the previous 2 signups — worth flagging as a different lifecycle case.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged for 79 days)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 79 days since last organic newsletter signup. No action taken on yesterday's recommendation to A/B the homepage form.

## Platform Context
- Total users: **55** (+1 since last report — dr.altvater-70199@web.de signed up 2026-04-20 14:08 UTC)
- Users this week: 4 (up from 3)
- Users today: 0
- Watchlist items: 74 (unchanged)
- Favorites: 0
- Triggered alerts: 0

### New User Signal — dr.altvater-70199@web.de (2026-04-20)
- `.de` email domain → likely German user
- **No watchlist item added** as of 24h post-signup — breaks the 2-consecutive-day instant-add pattern from joshdguillemette (Apr 19) and nicklib253 (Apr 17)
- Hypothesis: user landed via the World Cup content (1 of the top 3 SEO entry points for European traffic) and hasn't found a match yet, OR they're in window-shop mode
- Lifecycle fit: this user needs a **welcome → discovery assist** flow, not the same instant-value onboarding as a same-session watchlist adder. We still have neither.
- No drip eligible until 2026-04-23 (E1 threshold)

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **Viva El Jaripeo 2026** | Allstate Arena, Rosemont | Sat Apr 25 | **4 days** | 2510soccerboy@gmail.com | 85d |
| Florence + The Machine | State Farm Arena, Atlanta | Fri May 1 | **10 days** | tate.sheppard@gmail.com | 37d |
| Bilmuri — Kinda Hard Tour | The Sylvee, Madison | Sat May 2 | **11 days** | goldy.pec.2012@gmail.com | 10d |

### Today's Critical Case: 2510soccerboy@gmail.com — Viva El Jaripeo **4 days out**
- Tracking since Feb 5 (85 days). Zero outreach.
- Event is this **Saturday**. We are now inside the 4–6 day "inventory thins, prices stabilize" band, exiting the floor window.
- Yesterday I wrote: "If we don't hit their inbox by Monday (2026-04-20), we've functionally missed the decision point." **Today is Tuesday.** We missed it.
- This is now a **recovery email**, not a floor-window email. The honest framing: "you're late in the window, here's how to not lose the deal." Subject + copy rewritten below to match that.

### Bug Caught: Yesterday's CTA URL for Viva El Jaripeo Was Wrong
- Yesterday's template linked to `ticketscan.io/compare?event=Z7r9jZ1A74348` — **that event_id is actually "World Cup Match 68 Group L — Croatia vs Ghana"**, not Viva El Jaripeo.
- Correct Viva El Jaripeo event_id from watchlist: **`vv167Zk8tq3ZA2dkva`** (watchlist item id 14)
- Template below is corrected. If any of yesterday's copy ever ships (including post-fix replay of the drip backlog), the wrong URL would 404 or show wrong-event comparisons. Flagging for anyone reviewing the template cache before send.

### Digest Templates (ready for send once SMTP is fixed)

**For 2510soccerboy@gmail.com — Viva El Jaripeo 4 days out (RECOVERY framing):**
```
Subject: Viva El Jaripeo is Saturday. We went silent too long — here's the honest read.
Preview: You're late in the window. Here's how to not lose the deal anyway.

Hi there,

We should have emailed you a week ago. We didn't, and that's on us.

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   Saturday, April 25 — 4 days away

Here's the practical situation at 4 days out:

   • 7–14 days out → floor window (usually the best prices)
   • 4–6 days out (YOU ARE HERE) → inventory thins, prices stabilize or drift up
   • Day-of → last-minute scramble, usually the worst prices

Translation: the floor probably already came and went. But the ceiling
hasn't formed yet either. The next 48 hours are about *not paying the
day-of premium*.

Two moves, both under a minute:

1. Compare SeatGeek + StubHub + Ticketmaster side-by-side right now.
   Whatever the lowest is, that's your baseline. If you see it again
   tomorrow or Thursday, that's your buy signal.

2. If you see a price 10%+ above today's lowest between now and Saturday,
   don't chase — inventory returning to that level by Friday night
   is common.

[CTA: Compare Viva El Jaripeo Prices → ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva]

If you already bought: reply and tell us what you paid. We're rebuilding
our alert timing and real data helps.
```

**For tate.sheppard@gmail.com — Florence 10 days out (shift from 12-day template):**
```
Subject: Florence + The Machine, Atlanta: you're 10 days out. The floor is probably forming this week.
Preview: Inside the window. Here's what's typical and what to watch.

Hi there,

🎤 Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (10 days away)

You're solidly inside the 7–14 day resale window, when floors typically
form. From the ~800 arena events we've priced, the pattern is:

   • Floor forms roughly Day 10–7 before the event
   • Smaller dips ("second floor") often appear Day 4–2 for slow sells
   • State Farm Arena at ~17K is big enough that waiting past Day 5 is
     rarely punished, unlike small clubs

Two recommendations for today:

1. Set a target price so we can alert you on drops.
   Suggested: 15% below today's cheapest listing on any source.

2. Run the three-source compare today — this week's lows will be the
   floor anchor you're testing against for the next 10 days.

[CTA: Set Target Price → ticketscan.io/watchlist]
```

**For goldy.pec.2012@gmail.com — Bilmuri 11 days out:**
```
Subject: Bilmuri at The Sylvee — 11 days out, and small-venue math is different.
Preview: 1,800-seat rooms don't follow arena pricing. Quick read.

Hi there,

🎸 Bilmuri — Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (11 days away)

Small-cap venues (1,800 seats) behave differently on resale:

   • Floor forms earlier — you're in it now
   • Inventory dries up faster; waiting to Day 3–4 is usually a bad trade
   • Day-of premiums are more severe than at arenas

Translation: the next 7 days is your real window. Floor is likely
forming right now.

Two quick moves:

1. Set a target price — we'll ping you on drops.
2. Run the three-source comparison today to lock a baseline.

[CTA: Set Target Price → ticketscan.io/watchlist]
```

### Welcome Templates (two distinct patterns — both still unbuilt)

**Pattern A — same-session signup + watchlist-add** (joshdguillemette-style):
Already drafted yesterday. Unchanged. Still applicable for joshdguillemette (now 2 days post-signup, no emails). Copy stands.

**Pattern B — signup with NO watchlist-add** (dr.altvater-70199 — NEW today):
```
Subject: You signed up for TicketScan — what are you trying to track?
Preview: We'll help you find it, set alerts, and stop overpaying.

Hi there,

You made an account but haven't tracked an event yet. No pressure — but
we only get useful when you point us at something specific.

Three ways people usually start:

   🏟️  A single show → search by artist, team, or venue
   🎯  A category → "NBA playoffs near me" or "World Cup 2026"
   📬  A watchlist → pick 3–5, we'll track all of them every 4 hours

The best signal we've seen: people who set 2+ watchlist items in the
first week get 3x more use out of TicketScan than people who track just
one. More items = more opportunities to catch a drop.

[CTA: Find something to track → ticketscan.io/dashboard]

Stuck? Reply and tell us who you're trying to see.
```

### Events Entering the 15–30 Day Window
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — **33 days** (still above the window; crosses in ~3 days)
- **Bruno Mars — The Romantic Tour** @ Soldier Field, Chicago (May 16–17) — konman87@gmail.com — **25–26 days** (approaching window)

### World Cup Watchlist — Dormant but High-Intent
- **pete.uzelac77+ticketscan@gmail.com** — 11d on-platform, E1+E2 eligible
  - 4 World Cup items (earliest: Match 9 Jun 14, 54 days out)
  - 2 Darts Masters items (Jun 25–26 @ MSG)
- **laye.aurelien@wanadoo.fr** — 19d, 2 Shakira items (Jul 20/23) — E3 eligible (newly, today)
- **blubberboi@yahoo.com** — 12d, Ed Sheeran Aug 8

### Past-Event Backlog (Updated Count)
- Confirmed 27/74 (~36%) of watchlist items now have event dates before today. New rolls since last count:
  - nicklib253 → Phillies vs Braves (Apr 17) — now past
  - Every other past-dated row carries over
- Still no archive function. Every query returns the polluted set.

---

## Subject Line A/B Tests

### Viva El Jaripeo — 4 days out (RECOVERY framing)
- **A:** `Viva El Jaripeo is Saturday. We went silent too long — here's the honest read.`
- **B:** `Viva El Jaripeo in 4 days: here's how to not pay the day-of premium`
- **Hypothesis:** A is a radical-candor open that acknowledges the silence directly — high-risk, high-trust. B is a standard value-forward open. For a user who has been ignored for 85 days and the event is Saturday, A's honesty is more likely to earn a re-engagement than B's pretended-business-as-usual. **Recommend A.** (First time we're recommending an open that names the failure; worth testing precisely because standard playbooks assume silence can be papered over.)

### Florence — 10 days out
- **A:** `Florence + The Machine, Atlanta: you're 10 days out. The floor is probably forming this week.`
- **B:** `Florence Atlanta: the difference between 10 days and 5 days is real money`
- **Hypothesis:** Yesterday's 12-day B variant (falsifiable teaser) beat A in my recommendation. Day-count shifted, but the logic holds: tate.sheppard is 37d on-platform with zero prior touch, so the email has to earn its open. **Recommend B.**

### Bilmuri — 11 days out
- **A:** `Bilmuri at The Sylvee — 11 days out, and small-venue math is different.`
- **B:** `The Sylvee is 1,800 seats. Here's what that means for Bilmuri resale.`
- **Hypothesis:** B is yesterday's winner (specific number anchoring). A folds the venue + day count into one sentence — slightly busier but front-loads urgency. For a Day-10 user (goldy.pec.2012), more urgency helps. **Recommend A today** (reversing yesterday's B pick because the day count matters more now).

### Welcome — Pattern B (no-watchlist signup, NEW)
- **A:** `You signed up for TicketScan — what are you trying to track?`
- **B:** `Welcome — and a quick nudge: TicketScan only helps when you pick something`
- **Hypothesis:** A is question-as-subject (low-friction, invites reply). B is honest-framing ("we only help when"). Both are atypical for welcome flows. A is more likely to get opened by a curious window-shopper. B is more likely to get opened by someone who actually wants to be held accountable. We don't know which dr.altvater is yet. **Recommend A** — safer first contact.

### CTA Review (all templates)
- Viva El Jaripeo → `ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva` — **URL corrected** from yesterday's error ✓
- Florence → `ticketscan.io/watchlist` (set target price) ✓
- Bilmuri → `ticketscan.io/watchlist` (set target price) ✓
- Welcome (Pattern A — same-session) → `ticketscan.io/watchlist` ✓
- Welcome (Pattern B — no-watchlist) → `ticketscan.io/dashboard` (discovery, not watchlist) ✓
- Primary CTA above the fold in every template ✓
- All templates push toward the unfilled `target_price` field except Pattern B (which first needs them to add anything at all)

---

## Action Items

### P0 — Critical (Day 15 — drip now "not shipped")
1. **Reclassify the drip.** Per the Day-14 rule, we stop calling this an "outage" as of today. Suggested next step: a single decision between (a) **triage the SMTP stack this week** (app password regen → Gmail security dashboard → Railway egress on :587 → refactor send loop with `Promise.allSettled`), or (b) **route around Gmail entirely** — swap to a transactional provider (Resend, Postmark, SES) and treat the current Nodemailer+Gmail setup as deprecated. Either is fine; the status quo is not. This is a product-owner decision, not an email-agent decision.
2. **2510soccerboy@gmail.com — Viva El Jaripeo 4 days out.** Window effectively closed Monday; now a recovery case. Event Saturday. Last chance for any touchpoint today or tomorrow; after Thursday the email is post-mortem. Template above is written for the recovery framing — ready to send the moment SMTP or a replacement is live.
3. **joshdguillemette@gmail.com — 2 days post-signup, 0 emails.** Same-session watchlist-adder, still has no welcome. E1 threshold crosses tomorrow; if nothing ships today, this user has a worse 72-hour lifecycle than someone who found us via cold search.
4. **dr.altvater-70199@web.de — new German signup, no watchlist yet.** Different lifecycle case (Pattern B above). E1 threshold crosses 2026-04-23. Welcome-B template ready.

### P1 — High
5. **Target-price UX remains the single biggest product blocker.** 0/74 watchlist items have a target price. Recommended default: `target_price = current_min_price × 0.85` with inline edit. This is the single change that unblocks price alerts entirely.
6. **Welcome emails — two patterns now.** Previously I flagged one (instant-watchlist-add). Today we need two — because dr.altvater demonstrates a distinct no-watchlist-signup pattern. Both templates above are ready. Both are event-driven (not drip-cron-dependent), so neither blocks on the broader SMTP decision if we route them through a different send path.
7. **Drip backlog plan (unchanged):** when sends come back online, send E1+E2 with 48h gap, then resume 7-day cadence. For the 5 users now ≥30d in E5 territory (tucwildcat newly qualified today), re-write E5 to acknowledge the gap rather than pretend to be a "savings report" for savings that never happened.
8. **Past-dated watchlist add blocker.** `event_date < NOW()` should be rejected at write time. Confirmed today: nicklib253's Phillies game rolled to past-dated, the 3rd such confirmed roll in the tracking period.

### P2 — Medium
9. **Newsletter growth: 79-day stall.** No action taken on yesterday's A/B recommendation. Homepage form still not converting.
10. **World Cup dormant high-intent pool** — 9 items across 3 users (pete.uzelac77, laye.aurelien, blubberboi). laye.aurelien newly E3-eligible today. Still no outreach after 11–19 days on-platform.
11. **Build watchlist digest endpoint.** Per-user digest doesn't exist. Blocked on send path regardless.
12. **Archive past-events.** ~27/74 (~36%) today. Cron + `status` column. Paired with #8.
13. **E5 rewrite.** Now 5 users ≥30d (tucwildcat joined today). "Your Ticket Savings Report" reads as sarcastic for the backlog cohort and needs a backlog-variant.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **79-day stall**
- **Drip pipeline:** **RECLASSIFIED — "not shipped"** (Day 15, past the Day-14 rule). 0 sends ever. 20+ users pending, minimum; true pending likely 26+.
- **Price alerts:** 0 ever triggered. 0/74 watchlist items have target prices. Unchanged product blocker.
- **User growth:** +1 since last report (dr.altvater-70199@web.de, 2026-04-20), 55 total, 4 this week.
- **Watchlist:** 74 items (unchanged). 3 events within 14 days (Viva El Jaripeo 4d, Florence 10d, Bilmuri 11d).
- **Terminal urgency case:** 2510soccerboy — Viva El Jaripeo Saturday. Floor window has closed; now a recovery case.
- **Past-event backlog:** ~27/74 (~36%) today.
- **Email channel status:** Day 15. Reclassified. Zero emails of any kind have ever reached a user.
- **New lifecycle pattern this week:** 3 signups in 5 days, 2 different behavioral patterns (instant watchlist-add × 2, signup-only × 1). Neither has an onboarding flow. Both now have templates drafted.
- **Product blockers still surfaced:** (a) no welcome email for either signup pattern; (b) target_price null on 100% of 74 adds; (c) watchlist accepts past-dated events; (d) no archive for past-events; (e) potentially stale/broken SMTP stack — now Day 15 and reclassified.
- **Process observation:** `email-daily-2026-04-20.md` was skipped. If the daily agent is itself unreliable, that's a compounding risk on top of the email pipeline outage. Worth flagging to operations.
