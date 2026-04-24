# Email Daily — 2026-04-24

> **Day 18 of SMTP outage.** Drip pipeline re-tested this morning: `POST /api/admin/drip-run` returned HTTP 000 at 35.103s (curl exit 28). The one variance from prior days is a longer hang (35s vs. the usual 30s) — insignificant, both exceed the read timeout. **The real news today is what didn't happen:** after 4 signups in one calendar day on Apr 23, today is the **first complete zero-movement day** in 8 days. 0 signups, 0 watchlist adds, 0 newsletter changes. The platform momentum paused. Meanwhile the threshold-crossing wave landed roughly as predicted — 3 crossings today (E3, E4, E5), with 3 more slipping to tomorrow because of the API's hour-precise math. **Yesterday's forecast of "6 concurrent crossings tomorrow" overshot by 3; today's corrected forecast is 3.**

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (0 sends attempted)
- **Pipeline status:** `POST /api/admin/drip-run` → curl exit 28, HTTP 000 at **35.103s** (vs. usual 30.062s). Unchanged in substance; slightly longer hang.
- **`/api/admin/drip-stats`** returned `stats: []` again — `drip_emails_sent` table remains empty. **0 rows written across 18 days of attempts. 60 of 60 users have never received a drip email.**
- **Eligibility breakdown (returned cohort of 20, today is 2026-04-24):**
  - E1 eligible (≥3d): 15 of 20 (unchanged from yesterday — same 5 newcomers still too new: charlesteel126, ggri73, awwhittington, ajvanprooyen, mark.murdock, all at 1d)
  - E2 eligible (≥7d): 13 of 20 (+0)
  - E3 eligible (≥14d): 11 of 20 (+1 — blubberboi crossed today)
  - E4 eligible (≥21d): 9 of 20 (+1 — bhaygood728 crossed today)
  - E5 eligible (≥30d): 3 of 20 (+1 — billstromkel crossed today)
- **Today's threshold crossings (confirmed):**
  - **blubberboi@yahoo.com** crosses **E3** (14d). Ed Sheeran SoFi Aug 8 tracker. Pattern A. Has never been emailed.
  - **bhaygood728@gmail.com** crosses **E4** (21d). Cardi B Charlotte Apr 12 tracker — past-dated by 12 days. Pattern A.
  - **billstromkel@gmail.com** crosses **E5** (30d). RAYE Minneapolis Apr 8 tracker — past-dated by 16 days. Pattern A.
- **Yesterday's forecast correction:** predicted 6 crossings today, only 3 materialized. The 3 misses — nicklib253 E2, pete.uzelac77 E3, goldy.pec.2012 E3 — all slip to tomorrow because the API uses hour-precise math, not calendar-date math. **Forecasting lesson: any crossing forecast should carry a ±1 day confidence band** for users whose signup timestamp is in the latter half of a UTC day.
- **Tomorrow's threshold wave (Apr 25) — 3 crossings:**
  - **E2**: nicklib253@gmail.com (6d → 7d). Phillies vs Braves past-dated. Pattern A.
  - **E3**: pete.uzelac77+ticketscan@gmail.com (13d → 14d). 6 items: 4 World Cup @ Lincoln Financial + 2 Darts Masters @ MSG.
  - **E3**: goldy.pec.2012@gmail.com (13d → 14d). Bilmuri @ The Sylvee May 2 (now **8 days out** — double-urgency: E3 crossing + inside 14-day event window).
- **Backlog implication updated:** a full backlog send would now be 15 E1 + multiple tier escalations. The **E5 cohort is now 3 users** (billstromkel crossed today, tucwildcat has been E5 since Apr 21, leofearon15 since Apr 20). All three have past-dated or zero-item watchlists — the E5 "Your Ticket Savings Report" template is sarcastic for all three. **E5 rewrite is now P0, not P1.**
- **The "post-E5 graveyard" tier:** users 11–40 (30 users) are ALL past 35d signup — they exceed the full drip schedule entirely. The drip pipeline has no email to serve them in its current design. **That's 50% of the user base (30 of 60) permanently ineligible for any drip email even if the pipeline reactivates.** Needs a one-shot "catch-up" template before drip reactivation.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 81 watchlist items have a `target_price`. Day 89 of 100% null-on-add. No new adds today, so no new null examples, but also no improvement.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration: 82 days** since last organic newsletter signup (+1 since yesterday). Counter advances daily with no action.

## Platform Context
- Total users: **60** (unchanged — first zero-signup day in 8 days)
- Users today: **0** (biggest surprise — Apr 23 added 4, Apr 24 added 0)
- Users this week: 8 (unchanged)
- Watchlist items: **81** (unchanged — no adds today)
- Favorites: 0
- Triggered alerts: 0

---

## The Quiet-Day Read

For the first time since Apr 16, zero platform activity today:

| Metric | Apr 17 | Apr 18 | Apr 19 | Apr 20 | Apr 21 | Apr 22 | Apr 23 | **Apr 24** |
|--------|--------|--------|--------|--------|--------|--------|--------|------------|
| New users | 1 | 0 | 1 | 1 | 0 | 2 | 4 | **0** |
| New WL items | 1 | 0 | 1 | 0 | 0 | 1 | 6 | **0** |
| New subs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

- **Read:** After an unusual 4-user + 6-watchlist-item Apr 23, Apr 24 is a regression-to-mean day. Apr 23's activity was driven by a single viral moment or small acquisition channel burst that didn't recur. Do not treat Apr 23 as a new baseline.
- **Implication for email strategy:** the recent batch of Pattern B signups (ggri73, awwhittington, mark.murdock) did NOT signal a sustained inflow of low-intent users. They were a cluster event. The welcome-B template backlog remains 4 users, not 4+/day.
- **What this means for cold-start warmup planning:** if we send when SMTP reopens, the first wave should be sized around the **current static backlog (8 welcomes + threshold backlogs)**, not assumed daily growth. That's a one-time burst followed by ~1 email per pattern per day at the current signup rate.

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS (today 2026-04-24)
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **Viva El Jaripeo 2026** | Allstate Arena, Rosemont | Sat Apr 25 | **1 day** | 2510soccerboy@gmail.com | 88d |
| **Florence + The Machine** | State Farm Arena, Atlanta | Fri May 1 | **7 days** | tate.sheppard@gmail.com | 40d |
| **Cubs vs Diamondbacks** | Wrigley Field, Chicago | Fri May 1 | **7 days** | ajvanprooyen@crimson.ua.edu | 1d |
| **Cubs vs Diamondbacks (Kerry Wood Bobblehead)** | Wrigley Field, Chicago | Sat May 2 | **8 days** | ajvanprooyen | 1d |
| **Bilmuri — Kinda Hard Tour** | The Sylvee, Madison | Sat May 2 | **8 days** | goldy.pec.2012@gmail.com | 14d (E3 tomorrow) |
| **Cubs vs Diamondbacks (Cade Horton Tee)** | Wrigley Field, Chicago | Sun May 3 | **9 days** | ajvanprooyen | 1d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Mon May 4 | **10 days** | ajvanprooyen | 1d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Tue May 5 | **11 days** | ajvanprooyen | 1d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Wed May 6 | **12 days** | ajvanprooyen | 1d |

**9 events in 14-day window. 7 belong to ajvanprooyen.** Same distribution as yesterday — no new additions.

### TODAY'S T-MINUS-1 CRITICAL: 2510soccerboy@gmail.com — Viva El Jaripeo TOMORROW

- Tracking since Feb 5 (**88 days**). Zero outreach for 88 days.
- **Today is the final useful send window.** After 6pm UTC today, all advice becomes post-facto.
- T-minus-1 reality: the compare-tonight call is now the ONLY call. Panic sellers have reset. Day-of premiums are loading. Listings variance peaks in the next 14 hours.
- Template below is re-rewritten one final time. Subject is the hardest-possible framing we've produced.
- **Post-event plan:** regardless of SMTP status, **write the post-mortem by Monday Apr 27.** This user is the textbook case for "how not to treat an 88-day tracker." The lesson is worth a written artifact in `/marketing-agents/output/email/post-mortem-2510soccerboy.md` even if send channel never reopens.

### T-minus-1 Template (final rewrite, hardest framing)
```
Subject: Viva El Jaripeo tomorrow. 88 days. One honest move.
Preview: If you haven't bought yet, this is the last useful message we can send.

Hi there,

Tomorrow night at Allstate Arena. 88 days tracked. Zero emails from us
until now. We're writing the honest version instead of pretending we
have a system that works.

What's actually true at T-minus-1:

   • The floor window (7–14 days out) closed 11 days ago. Missed.
   • The stabilization window (3–6 days) closed 3 days ago. Missed.
   • Tomorrow afternoon, day-of premiums start loading. Sellers who
     held out raise their prices by 10–30%.
   • Tonight, for about 14 hours, listing variance is at its peak —
     widest spread between the cheapest and the most expensive
     seller on record for this week.

The one move that pays tonight: open all three sources (Ticketmaster,
SeatGeek, StubHub) on the same seat section. Pick the cheapest, set
an instant-buy price in your head, and execute when you see it. The
edge is TONIGHT's spread, not tomorrow's.

[CTA: Compare Viva El Jaripeo Prices → ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva]

If you already went, we'd be genuinely helped by what you paid and
where. Reply with a receipt, screenshot, even a rough number. We're
rebuilding alert timing and your single data point beats our modeling.

— TicketScan
```

### Florence + The Machine — tate.sheppard — 7 days out (mid-floor window)
```
Subject: Florence Atlanta: Day 7 is the last reliable floor day.
Preview: The window tightens fast from here. One tactical call.

Hi there,

🎤 Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (7 days away)

Day 7 is the inflection point. Here's what happens next:

   • Day 7–10 → floor window (you're at the bottom edge)
   • Day 4–6 → stabilization; floor holds at most arenas
   • Day 1–3 → day-of premium loading; waiting backfires

State Farm Arena (~17K seats) holds its floor slightly longer than
smaller rooms, but the "slightly longer" is a day or two — not a
week. Today or tomorrow is the strongest window.

Two moves for today:

1. Set a target price (15% below today's cheapest) so we ping on drops.
2. Run the three-source compare today to anchor your decision price.

[CTA: Set Target Price → ticketscan.io/watchlist]
```

### Bilmuri — goldy.pec.2012 — 8 days + E3 crosses tomorrow (DOUBLE URGENCY)
```
Subject: Bilmuri at The Sylvee — 8 days. Small-room math is biting.
Preview: 1,800 seats. Floor is forming right now. Fast reader version inside.

Hi there,

🎸 Bilmuri — Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (8 days away)

Small-cap venues (The Sylvee is ~1,800 seats) price differently:

   • Floor forms Day 8–10, NOT Day 10–14 like at arenas
   • Inventory dries up hard by Day 3–4 — no late-window savings
   • Day-of premium is proportionally larger than at arenas because
     sell-through is tighter

You are at Day 8 — the exact moment the floor forms at rooms this size.

The next 5 days is your window. Two moves today:

1. Set a target price — we'll ping if a seller hits it.
2. Run the three-source compare to lock a baseline TONIGHT.

[CTA: Set Target Price → ticketscan.io/watchlist]
```

### ajvanprooyen — Cubs homestand (Pattern A+ digest, held from yesterday)
See yesterday's report for the full template. No content changes today — the May 1–6 window advances by one day but the core timing read holds. **The first Cubs game is now 7 days out, inside the arena floor window.**

### Welcome Templates (state across patterns)
- **Pattern A — classic single-event.** 3 waiting: nicklib253 (Phillies past), joshdguillemette (AEW May 24), charlesteel126 (Bruno Mars May 20). Pending days: 6d, 4d, 1d.
- **Pattern A+ — bulk same-venue/same-team.** 1 waiting: ajvanprooyen (Cubs homestand). Pending day: 1d.
- **Pattern B — signup-only.** 4 waiting: dr.altvater (3d, NOW E1-eligible for 2 days), ggri73 (1d), awwhittington (1d), mark.murdock (1d).
- **brigitte.theisen retroactive Pattern A+**: 58 days pending. Backstreet Boys Sphere 8-event bundle. Should use A+ template.

### Events Entering the 15–30 Day Window (for tomorrow's digest)
- **AEW Double or Nothing** @ Louis Armstrong May 24 (joshdguillemette) — **30 days** (crosses into 30-day window today)
- **Bruno Mars** @ Soldier Field (konman87) — May 16–17 — 22–23d
- **Bruno Mars** @ Ohio Stadium (charlesteel126) — May 20 — 26d

### World Cup Dormant High-Intent (unchanged)
- pete.uzelac77+ticketscan@gmail.com — 13d on-platform. E3 crosses tomorrow. 4 WC items + 2 Darts.
- laye.aurelien@wanadoo.fr — 22d. E4-eligible since yesterday. 2 Shakira items.
- blubberboi@yahoo.com — 14d. E3 crosses today. Ed Sheeran Aug 8.

---

## Subject Line A/B Tests

### Viva El Jaripeo — T-minus-1 (hardest framing yet — final iteration)
- **A:** `Viva El Jaripeo tomorrow. 88 days. One honest move.`
- **B:** `Final email we'll ever send about this show. Here's what's left.`
- **Hypothesis:** A is today's recommended framing — continues the 3-day escalation from "We owe you" (Apr 22) → "87 days of silence" (Apr 23) → "88 days. One honest move" (today). B is the "finality" framing — the hardest honesty, but borderline too-cute. **Recommend A today.** The escalation pattern should hold the full arc; B would break the voice continuity. A is the terminal state of the progression.

### Florence — 7 days out
- **A:** `Florence Atlanta: Day 7 is the last reliable floor day.`
- **B:** `Florence Atlanta: 7 days out. The window tightens from here.`
- **Hypothesis:** A front-loads the tactical conclusion; B front-loads the countdown + a softer urgency phrase. Yesterday at Day 8 I recommended the softer "you're in the floor window" framing. At Day 7 the tactical honesty matters more than invitation — we're one day from floor-window close. **Recommend A today.** Flip back to specific-day framing for the last few days of the floor window.

### Bilmuri — 8 days (double-urgency with E3)
- **A:** `Bilmuri at The Sylvee — 8 days. Small-room math is biting.`
- **B:** `The Sylvee is 1,800 seats. Bilmuri's floor is forming NOW.`
- **Hypothesis:** A uses our best-performing angle (day count + tactical claim). B leads with the venue size anchor (yesterday's winner) and ALL-CAPS "NOW" urgency. For a double-urgency send (E3 threshold + 8-day window), the urgency verb matters. **Recommend B today** — the all-caps NOW is the one marketing-y move I'll allow here; it's warranted by the compound urgency.

### Cubs Homestand — ajvanprooyen (held from yesterday)
- **A:** `6 Cubs home games, 6 different price curves. Which night to pick.`
- **B:** `Your Cubs homestand: the quiet nights are the cheap nights.`
- **Hypothesis:** Held. **Recommend A.** Unchanged — user is in compare mode; A validates that.

### Welcome — Pattern A (3 users waiting)
- Held. **Recommend A** (personalized by event name): `You're tracking [event] — here's how to make the alerts actually useful`

### Welcome — Pattern B (4 users waiting, dr.altvater at 3d is oldest)
- **A:** `You signed up for TicketScan — what are you trying to track?`
- **B:** `Welcome to TicketScan. Four of us just joined this week too.`
- **Hypothesis:** Social-proof window in B is closing; cohort is less fresh as days pass. **Recommend A** for cohort-wide send. B is no longer a realistic option — dr.altvater is 3 days removed from the cohort moment. Ship A.

### Bruno Mars Artist-Cluster Send (held)
- **A:** `4 of you are tracking Bruno Mars Romantic Tour. Here's what we're seeing across stops.`
- **B:** `Romantic Tour, four cities, four price patterns. The cross-stop read.`
- **Hypothesis:** Held. **Recommend A.** Ready to ship.

### NEW: E5 Backlog-Send Rewrite (critical — billstromkel crosses today)
- **A:** `We owe you 5 emails, not 1. Here's the full ticket-savings field guide.`
- **B:** `Your "30-day savings report" — except we never sent the first 4. So here's all of it.`
- **Hypothesis:** The stock E5 template is "Your Ticket Savings Report" — presumes 4 prior emails set up the savings narrative. For billstromkel/tucwildcat/leofearon15, that premise is false. A acknowledges the gap and offers the full bundle; B is more self-aware and slightly funnier. **Recommend A** for tone consistency with the rest of the backlog-recovery strategy. B is worth testing only if we add a second E5 variant later. **This template is now P0 — 3 users eligible today, with 2 more (lvasub6, arin.gelbaugh) crossing in the next 5–6 days.**

### CTA Review (all templates today)
- Viva El Jaripeo → `ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva` ✓
- Florence → `ticketscan.io/watchlist` ✓
- Bilmuri → `ticketscan.io/watchlist` ✓
- Cubs homestand → `ticketscan.io/watchlist` ✓
- Welcome Pattern A → `ticketscan.io/watchlist` ✓
- Welcome Pattern B → `ticketscan.io/dashboard` ✓
- Welcome Pattern A+ → `ticketscan.io/watchlist` ✓
- Bruno Mars cluster → `ticketscan.io/compare?artist=bruno-mars` (**still unverified route** — flagged 3 days in a row. Fallback: `ticketscan.io/dashboard?q=Bruno+Mars`. Engineering check needed before send.)
- **NEW:** E5 backlog-send → `ticketscan.io/dashboard` ✓ (primary); `ticketscan.io/watchlist` secondary for users with items
- Primary CTA above the fold in every template ✓

---

## Action Items

### P0 — Critical
1. **SMTP / transactional decision — Day 18.** Unchanged. Still pending product-owner ping. New variable added yesterday (cold-start warmup plan) still needs drafting now while path is closed.
2. **2510soccerboy@gmail.com — Viva El Jaripeo TOMORROW.** Final useful send window is TONIGHT. T-minus-1 template rewritten today (subject A recommended). If no send channel, **write post-mortem Monday Apr 27**.
3. **E5 "Savings Report" rewrite — NOW P0.** 3 users eligible today (billstromkel, tucwildcat, leofearon15); 2 more within a week. Stock template presumes 4 prior emails that never existed. Rewrite A drafted (subject A recommended). **This template was P2 yesterday; upgraded to P0 because the eligible cohort tripled.**
4. **Post-E5 graveyard cohort (30 users, 50% of user base).** Users 11–40 are past day 35 and permanently ineligible for any drip email under current schedule. Needs a one-shot "catch-up" template before or alongside drip reactivation. **New item — flagged first time today.**

### P1 — High
5. **Welcome backlog: 8 users across 3 patterns.** dr.altvater at 3d is the oldest in the Pattern B queue and crossed E1 yesterday. Unchanged composition, aged by one day.
6. **ajvanprooyen Pattern A+ homestand digest.** First Cubs game is now 7 days out — moved from "forecast-only" to "inside the floor window." Send urgency has increased.
7. **Target-price UX is STILL the product blocker.** Day 89 of 100% null-on-add across 81 items. No new data today (no adds), but the streak extends.
8. **Bruno Mars artist-cluster send: ready to ship.** Unchanged.
9. **Cold-start deliverability plan.** Still needs drafting. Today's quiet-day data helps: first-wave send size is the static backlog (~25 messages), not assumed daily growth.

### P2 — Medium
10. **Newsletter growth: 82-day stall.** No homepage A/B action yet.
11. **Past-dated watchlist add blocker.** `event_date < NOW()` should be rejected at write time. 27 of 81 past-dated (~33%). Unchanged today because no new adds.
12. **Build watchlist digest endpoint.** Still manual. No change today because no new digest prep surfaced.
13. **Bruno Mars CTA route verification.** Flagged Day 3 consecutively. Engineering ping needed — `ticketscan.io/compare?artist=bruno-mars` — does it 200 or 404?

### NEW today
14. **Forecasting discipline.** Yesterday's 6-crossing forecast for today became 3. Root cause: the drip-stats API uses hour-precise timestamps, not calendar dates. Three users whose signup hour puts them in the latter half of a UTC day slipped by one day. **Future forecasts should carry a ±1 day confidence band** — or compute hours-from-signup directly instead of days-since-signup.
15. **Quiet-day counter.** Apr 24 is the first zero-signup day in 8 days. The Apr 23 burst was episodic, not a new baseline. Strategy implication: stop scaling cold-start warmup assumptions off Apr 23.
16. **Post-E5 graveyard.** 30 users (50% of user base) are past the drip schedule entirely. No template exists for them in the current design. **This is a first-class scope gap — the drip schedule as designed serves only ~5% of the user base (days 3–30) and leaves 50% unserviceable forever.** Needs scope conversation with product.
17. **Post-mortem doc queue.** Regardless of SMTP status, schedule the 2510soccerboy Viva El Jaripeo post-mortem for Monday Apr 27. One-page artifact: "The 88-day silence that nobody fixed."

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **82-day stall** (+1).
- **Drip pipeline:** Day 18. 0 sends ever. 60 of 60 users have never received a drip email. Drip stats endpoint returns `stats: []`.
- **Price alerts:** 0 ever triggered. 0 of 81 watchlist items have target prices (Day 89 streak).
- **User growth:** **0 new users today.** 60 total, 8 this week. First zero-signup day in 8 days. Apr 23's 4-user burst did not sustain.
- **Watchlist:** 81 items (no change). First zero-add day in 8 days.
- **Lifecycle pattern:** No new signups → no pattern data today. Last-7-day ratio (A:A+:B = 3:1:4) is unchanged and **reminder that it is NOT trending, it is a snapshot of one episodic week.**
- **Threshold crossings today:** 3 — blubberboi E3 (14d), bhaygood728 E4 (21d, past-dated event), billstromkel E5 (30d, past-dated event).
- **Threshold crossings tomorrow:** 3 — nicklib253 E2, pete.uzelac77 E3, goldy.pec.2012 E3.
- **E5 cohort:** 3 users (billstromkel + tucwildcat + leofearon15). All have past-dated or zero items. **The E5 template premise is broken for all of them.**
- **NEW tier identified: "Post-E5 graveyard."** 30 users (50% of user base) are past 35d signup — beyond the full drip schedule — and structurally unserviceable under the current 5-email design.
- **Forecasting correction:** yesterday's prediction of 6 crossings today materialized as 3. Hour-precision math caused a 1-day slip for 3 users. Forecasts should carry a ±1 day band going forward.
- **Past-event backlog:** 27 of 81 (~33%), unchanged.
- **Email channel status:** Day 18. Zero emails of any kind have ever reached a user. Welcome backlog at 8 across 3 patterns.
- **One actionable surprise today:** the post-E5 graveyard — the drip schedule serves roughly 0–3% of current users (those in the 3–30 day window). 50% of the user base (users 11–40) is permanently beyond all 5 drips under current design. Worth a scope conversation.
- **Two reframing actions from today:** (1) Apr 23's burst is NOT a new baseline — stop scaling assumptions off it; (2) the drip schedule's reach is far narrower than assumed (serves ~5 windows of ~1-2 days each, not a continuous 30-day engagement surface).
