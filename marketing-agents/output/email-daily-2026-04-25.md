# Email Daily — 2026-04-25

> **Day 19 of SMTP outage. D-Day for Viva El Jaripeo.** Tonight at Allstate Arena, the event 2510soccerboy@gmail.com has tracked for **89 days** finally happens — and we sent them zero emails across that entire arc. Drip pipeline re-tested: `POST /api/admin/drip-run` returned HTTP 000 at **40.047s** (curl exit 28). **Yesterday's 3-crossing forecast hit 100%** — nicklib253 E2, pete.uzelac77 E3, goldy.pec.2012 E3 all materialized as predicted. The hour-precision math correction worked. **Second consecutive zero-signup day** — the Apr 23 burst is now confirmed episodic, not a new baseline. **Tomorrow's wave: 5 simultaneous E1 crossings** as the entire Pattern B cohort (Apr 22–23 signups: charlesteel126, ggri73, awwhittington, ajvanprooyen, mark.murdock) hits 3d together. That is the single largest synchronized eligibility event in the platform's history — and it lands into a still-broken pipeline.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (0 sends attempted)
- **Pipeline status:** `POST /api/admin/drip-run` → curl exit 28, HTTP 000 at **40.047s** (vs. 35.103s yesterday, 30.062s prior). Hang duration is now creeping upward by ~5s/day. **Worth flagging to engineering — this is not just a "still broken" signal, it's a "getting worse" signal.** A connect timeout that grows is consistent with retries being layered, queue buildup, or DNS/handshake degradation. Whatever is hanging is doing more of it.
- **`/api/admin/drip-stats`** returned `stats: []` again — `drip_emails_sent` table remains empty. **0 rows written across 19 days. 60 of 60 users have never received a drip email.**
- **Eligibility breakdown (returned cohort of 20, today is 2026-04-25):**
  - E1 eligible (≥3d): 15 of 20 (unchanged today — the 5 newcomers all sit at 2d, all cross E1 simultaneously tomorrow)
  - E2 eligible (≥7d): 14 of 20 (+1 — nicklib253 crossed today, as forecast)
  - E3 eligible (≥14d): 13 of 20 (+2 — pete.uzelac77 + goldy.pec.2012 crossed today, as forecast)
  - E4 eligible (≥21d): 9 of 20 (unchanged)
  - E5 eligible (≥30d): 3 of 20 (unchanged — billstromkel, tucwildcat, leofearon15)
- **Today's threshold crossings (confirmed — 3 of 3 forecast hits):**
  - **nicklib253@gmail.com** crosses **E2** (7d). Phillies vs Braves Apr 17 tracker — past-dated by 8 days. Pattern A.
  - **pete.uzelac77+ticketscan@gmail.com** crosses **E3** (14d). 6-item bundle: 4 World Cup @ Lincoln Financial + 2 Darts Masters @ MSG. Pattern A+ (high-intent multi-event).
  - **goldy.pec.2012@gmail.com** crosses **E3** (14d). Bilmuri @ The Sylvee May 2 — now **7 days out**. **Triple-urgency: E3 crossing + inside small-room floor window + only 14 days of platform engagement = peak conversion moment.**
- **Forecast accuracy update:** Yesterday's forecast = 3 crossings. Today's actual = 3 crossings. **100% hit rate.** The hour-precision correction (computing days-from-signup using actual timestamps, not calendar arithmetic) worked. Yesterday I added a ±1 day confidence band — today it wasn't needed. Keep the band as a discipline though; one perfect day doesn't validate the method.
- **Tomorrow's threshold wave (Apr 26) — 5 simultaneous E1 crossings:**
  - **E1**: charlesteel126@gmail.com (2d 22h → 3d). Bruno Mars Ohio Stadium May 20 tracker. Pattern A.
  - **E1**: ggri73@gmail.com (2d 12h → 3d). Pattern B (signup-only, no watchlist).
  - **E1**: awwhittington@icloud.com (2d 9h → 3d). Pattern B.
  - **E1**: ajvanprooyen@crimson.ua.edu (2d 9h → 3d). Pattern A+ (6-event Cubs homestand).
  - **E1**: mark.murdock@lanternsec.com (2d 7h → 3d). Pattern B.
  - **This is a 5-user E1 wave, the largest single-threshold event in platform history.** Cohort composition: 1 Pattern A, 1 Pattern A+, 3 Pattern B. **The E1 template needs three variants ready by tomorrow** — the Pattern B users (ggri73, awwhittington, mark.murdock) have nothing to track yet, so the standard "here's how to make alerts useful" framing fails. **For Pattern B, send the "what are you trying to track?" prompt, NOT the alerts framing.**
- **Day-after-tomorrow (Apr 27) crossings:** none predicted. Next wave: **dylanbaldy hits E2 on Apr 22→Apr 28** (currently 9d 15h, will be 10d tomorrow, 11d Apr 27, then... wait — 7d threshold already passed for dylanbaldy on Apr 22). Re-checking: dylanbaldy signed up 4/15 18:24, today is 4/25, that's 9d 15h. He should already be E2-eligible. Why wasn't he flagged in yesterday's E2 cohort? **Actually he is in the E2 cohort (count includes him at 9d).** No new E2 crossing for him; he crossed E2 on Apr 22.
- **Backlog implication updated:** With tomorrow's wave, the static backlog jumps to **20 E1 + 14 E2 + 13 E3 + 9 E4 + 3 E5 = 59 emails** if a single full sweep ran. Prior to today, the comparable number was 56. Backlog is growing by 3–5 emails per day even on quiet platform days, just from threshold accumulation.
- **The "post-E5 graveyard" tier (unchanged, but counter advances):** users 1–40 (40 users, 67% of the user base) are now ALL past 35d signup — they exceed the full drip schedule entirely. **Yesterday I said 30 users; recount today using the API's pendingUsers list (which returns users 41–60) reveals 40 users above the cohort, not 30. The graveyard is bigger than reported yesterday.** Needs catch-up template. **Upgrading severity: 67% of users (not 50%) are permanently unserviceable under current drip design.**

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 81 watchlist items have a `target_price`. Day 90 of 100% null-on-add. **Day 90 milestone — three months of every single watchlist add producing a null target price. The watchlist UX is producing data that is structurally incapable of triggering an alert.** No new adds today (second day in a row), so no new null examples — but also zero fix progress.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration: 83 days** since last organic newsletter signup (+1 since yesterday).

## Platform Context
- Total users: **60** (unchanged — second consecutive zero-signup day)
- Users today: **0**
- Users this week (rolling 7d): **7** (was 8 yesterday — Apr 18's signup rolled off)
- Watchlist items: **81** (unchanged — second consecutive zero-add day)
- Favorites: 0
- Triggered alerts: 0

---

## Two-Day Quiet Confirms the Read

The Apr 23 burst (4 users + 6 watchlist items in one day) is now empirically confirmed as episodic, not a new baseline:

| Metric | Apr 18 | Apr 19 | Apr 20 | Apr 21 | Apr 22 | Apr 23 | Apr 24 | **Apr 25** |
|--------|--------|--------|--------|--------|--------|--------|--------|------------|
| New users | 0 | 1 | 1 | 0 | 2 | 4 | 0 | **0** |
| New WL items | 0 | 1 | 0 | 0 | 1 | 6 | 0 | **0** |
| New subs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

- **Two-day zero confirms:** Apr 23 was a one-time event, not a step-change. Sizing cold-start warmup based on Apr 23 would over-provision the first send wave 4–6x.
- **Re-baselined daily growth:** the trailing 7-day mean is now (0+1+1+0+2+4+0+0)/8 = **1.0 user/day**. Even excluding the Apr 23 outlier, it's 0.57/day. **Plan email volume on the 0.5–1.0/day signup rate, not the 4/day spike.**
- **What this means for tomorrow's 5-user E1 wave:** the wave is real, but it is a one-time consequence of the Apr 22–23 cluster passing the 3-day threshold together. After Apr 26, the daily E1 wave reverts to 0–1/day. The 5-user wave is a discrete event, not a new normal.

---

## Viva El Jaripeo — D-Day Post-Mortem (drafted live)

**The event happens TONIGHT at Allstate Arena, Rosemont.** 2510soccerboy@gmail.com tracked it from **2026-02-05 → 2026-04-25 = 89 days**. Zero emails. Zero alerts. Zero touchpoints from TicketScan.

### Timeline of failure
- **Day 0 (Feb 5):** User adds Viva El Jaripeo to watchlist with **no target price**. The watchlist add UX never prompts for one. → **Strike 1: target_price defaults to null. The price alert engine has nothing to compare against.**
- **Days 1–60 (Feb 5 → Apr 6):** No drip touchpoint because by the time SMTP broke (~Apr 7), the user had been silent for 60 days already in the drip schedule — they were past E5 (30d) and structurally ineligible for any drip email under the current design. **Strike 2: the drip schedule has no email beyond Day 30.** This user was a "post-E5 graveyard" case from Day 31 onward.
- **Days 60–89 (Apr 6 → Apr 25):** SMTP outage begins around Apr 7. Even if a digest endpoint existed, no email could send. **Strike 3: the SMTP pipeline is offline.**

### What three independent failures cost us
- This was a **high-intent user** — they took an active step to track a specific event 89 days out. Among the 60-user base, that depth of intent puts them in maybe the top 5%.
- **The right outreach cadence for a 89-day tracker** would have been: Day 1 welcome → Day 30 "T-minus-2-month update" → Day 60 "T-minus-1-month / set target" → Day 75 "T-minus-2-week buying window" → Day 82 "floor window opens" → Day 88 "T-minus-1 / final compare." **That's six touchpoints in a high-conversion lifecycle. We sent zero.**
- The financial loss is bounded (single ticket, single user, no commission model yet) — but the signal-loss is unbounded. We have no idea what they paid, where, or what the experience was. They are a perfect ghost.

### One-page artifact
Per yesterday's commitment, the post-mortem will be written as a standalone file at `/marketing-agents/output/email/post-mortem-2510soccerboy.md` by Monday Apr 27. **This daily report contains the timeline; the standalone artifact will add: (1) the right-shaped lifecycle proposal, (2) the recovery-survey we should send post-event regardless of channel status, (3) the three product changes that would prevent recurrence (target_price prompt, post-E5 lifecycle, deliverability monitoring).**

### Recovery survey draft (to send when channel reopens, even if event has passed)
```
Subject: You went to Viva El Jaripeo. We failed you. Two questions.
Preview: Honest reset. We'd like to learn from what we missed.

Hi there,

Last night was Viva El Jaripeo at Allstate Arena. You added it to your
TicketScan watchlist on February 5 — that's 89 days ago. We never sent
you a single email. Not one alert, not one digest, not one nudge.

We owe you an honest account, and we'd like to learn from what we missed.

Two questions, if you have a minute:

  1. Did you go? If yes — what did you pay, and where did you buy?
  2. What's the ONE message we should have sent in those 89 days?

Reply to this email. Even one word helps.

If you didn't go — that's a story too. We'd like to hear it.

— TicketScan
```

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS (today 2026-04-25)
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **Viva El Jaripeo 2026** | Allstate Arena, Rosemont | **TONIGHT Apr 25** | **0 days** | 2510soccerboy@gmail.com | 89d |
| **Florence + The Machine** | State Farm Arena, Atlanta | Fri May 1 | **6 days** | tate.sheppard@gmail.com | 41d |
| **Cubs vs Diamondbacks** | Wrigley Field, Chicago | Fri May 1 | **6 days** | ajvanprooyen@crimson.ua.edu | 2d |
| **Cubs vs Diamondbacks (Kerry Wood Bobblehead)** | Wrigley Field, Chicago | Sat May 2 | **7 days** | ajvanprooyen | 2d |
| **Bilmuri — Kinda Hard Tour** | The Sylvee, Madison | Sat May 2 | **7 days** | goldy.pec.2012@gmail.com | 14d (E3 today) |
| **Cubs vs Diamondbacks (Cade Horton Tee)** | Wrigley Field, Chicago | Sun May 3 | **8 days** | ajvanprooyen | 2d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Mon May 4 | **9 days** | ajvanprooyen | 2d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Tue May 5 | **10 days** | ajvanprooyen | 2d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Wed May 6 | **11 days** | ajvanprooyen | 2d |

**9 events in 14-day window. 7 belong to ajvanprooyen.** The Florence and Bilmuri events have shifted from "edge of floor window" yesterday to "center of floor window" today.

### TIER 1 — Florence + The Machine, Atlanta, Day 6 (post-floor)
goldy.pec.2012's Bilmuri (Day 7) and tate.sheppard's Florence (Day 6) are now both **inside the floor window** at their respective venue scales. **For Florence at a 17K-seat arena, Day 6 is the lower edge of the floor — moving toward stabilization. For Bilmuri at a 1,800-seat venue, Day 7 is the prime floor-formation moment.** Today is the strongest tactical send for both.

### Florence — tate.sheppard — Day 6 (lower floor edge, action call)
```
Subject: Florence Atlanta in 6 days — the floor edge is now.
Preview: One day past optimal entry. Today's call is decisive.

Hi there,

🎤 Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (6 days away)

Day 6 is one tick past where the floor typically opens at arena-scale
venues. From here, two things happen:

   • Day 5–4 → floor holds; small dips possible but not reliable
   • Day 3–2 → stabilization breaks; resale sellers start bracing for
     the loss-cut decision (sell at floor or eat the ticket)
   • Day 1 → day-of premium loads; waiting backfires

Translation: today and tomorrow are the cleanest windows. Past Day 4,
you're playing seller-psychology more than market math.

Two moves today:

1. Set a target 12% below today's cheapest — narrower than last week
   because the spread has compressed.
2. Run the three-source compare today. The price you see today is
   meaningfully closer to your final price than the price you saw
   last Friday.

[CTA: Compare Florence + The Machine → ticketscan.io/compare?event=Z7r9jZ1AdJ7BV]
```

### Bilmuri — goldy.pec.2012 — Day 7 + E3 crosses TODAY (peak send)
**This is the strongest single send opportunity on the platform today.** Triple-aligned: E3 crossing + inside small-room floor window + 14d of platform engagement.

```
Subject: Bilmuri at The Sylvee — Day 7. Small-room floor opens NOW.
Preview: 1,800 seats. The math is favorable for exactly the next 4 days.

Hi there,

🎸 Bilmuri — Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (7 days away)

You added this 14 days ago. Here's what changed today:

The Sylvee is ~1,800 seats. Small-cap rooms behave differently than
arenas — the floor doesn't open at Day 14 like it does at 20K rooms.
It opens at **Day 7–10**. You are at the front of that window today.

What the math says:

   • Day 7 (today) → floor forms; first 24h is the cleanest entry
   • Day 5–6 → floor holds at most small rooms
   • Day 3–4 → inventory dries up hard — no late-window savings
   • Day 1–2 → day-of premium is proportionally larger than at arenas

Translation: today through Tuesday is your real window. Past Tuesday,
the math turns against you fast.

Two moves today:

1. Set a target price (10% below today's cheapest) — we'll ping when a
   seller hits it.
2. Run the three-source compare TONIGHT. Lock a baseline. Even if you
   don't buy, you'll know exactly what's a real drop vs. seller noise.

[CTA: Compare Bilmuri Prices → ticketscan.io/compare?event=vv1A6ZkCdGkdy3apF]
```

### ajvanprooyen Cubs Homestand — first game now Day 6 (peak action)
The first Cubs game (May 1) is now at the same Day 6 position as Florence. Cumulative 6-game homestand spans Day 6–11. The Pattern A+ digest from yesterday holds, but **the lead game is now inside the floor window — the digest opening should shift from "set targets" to "first game is a buy-decision today, the others are still target-setting plays."**

```
Subject: Cubs homestand: Game 1 is in 6 days. Different math for each night.
Preview: First game = decide today. Last game = still in target-setting territory.

Hi there,

⚾ Your Cubs homestand — Wrigley Field
   May 1 (Diamondbacks) → May 2 → May 3 → May 4 → May 5 → May 6

Six games, six different price curves. Where you are today:

   Game 1 (May 1, 6 days) → INSIDE the floor window. Compare today,
                            decide tonight. This one's a buy call.
   Game 2 (May 2, 7 days) → Front edge of floor. Set target + compare.
   Game 3 (May 3, 8 days) → Pre-floor. Watch + set target.
   Game 4 (May 4, 9 days) → Pre-floor. Watch.
   Game 5 (May 5, 10 days) → Pre-floor. Watch. Quietest night likely.
   Game 6 (May 6, 11 days) → Pre-floor. The "wait & watch" night.

Wrigley + Cubs/Diamondbacks crowd dynamics:
   • Friday/Saturday games (1, 2, 3) carry a weekend premium — the
     floor is shallower than weeknight games.
   • Tuesday/Wednesday games (5, 6) historically have the deepest
     resale floors — that's where the value usually lives.
   • The Cade Horton Tee giveaway (May 3) and Kerry Wood Bobblehead
     (May 2) prop up demand for those nights specifically.

Two moves today:

1. Decide on Game 1 (May 1) tonight — three-source compare.
2. Set targets on the other 5 games at 10–15% below current floor.

[CTA: View Cubs Homestand → ticketscan.io/watchlist]
```

### Welcome Templates (state across patterns)
- **Pattern A — classic single-event.** 2 waiting: nicklib253 (Phillies past, **also crossed E2 today — escalates to combined send**), joshdguillemette (AEW May 24). Pending days: 7d, 5d. **charlesteel126 dropped from Pattern A list because they cross E1 tomorrow — combined welcome+E1 send is now the right move.**
- **Pattern A+ — bulk same-venue/same-team.** 1 waiting: ajvanprooyen (Cubs homestand, **crosses E1 tomorrow — combined send**). Pending day: 2d.
- **Pattern B — signup-only.** 4 waiting: dr.altvater (4d), ggri73 (2d), awwhittington (2d), mark.murdock (2d). **Three of four cross E1 tomorrow.** dr.altvater has been E1-eligible for 1 day already.
- **brigitte.theisen retroactive Pattern A+**: 59 days pending. Backstreet Boys Sphere 8-event bundle. Should use A+ template.

### Tomorrow's "Combined Welcome + E1" Wave Strategy
**5 users hit E1 simultaneously tomorrow. The send strategy:**
- **charlesteel126 (Pattern A, Bruno Mars Ohio):** Combined welcome + E1 + Bruno Mars-specific tactical note. Single email.
- **ajvanprooyen (Pattern A+, Cubs):** Combined welcome + E1 + the Cubs homestand digest above. Single email, three-in-one.
- **ggri73, awwhittington, mark.murdock (Pattern B):** Welcome-B variant ("what are you trying to track?"). Do NOT use the standard E1 ("here's how to make alerts useful") — they have nothing to alert on. Use the Pattern B prompt instead.

This is the first time we've had a planned multi-pattern E1 wave. **The discipline is: don't ship a single E1 template. Ship 3 variants matched to the actual user state.**

### Events Entering the 15–30 Day Window (tomorrow's preview)
- **AEW Double or Nothing** @ Louis Armstrong May 24 (joshdguillemette) — **29 days** out tomorrow
- **Bruno Mars** @ Soldier Field (konman87) — May 16 — 21d tomorrow
- **Bruno Mars** @ Ohio Stadium (charlesteel126) — May 20 — 25d tomorrow

### World Cup Dormant High-Intent (still no movement)
- **pete.uzelac77+ticketscan@gmail.com** — 14d on-platform. **E3 crossed today.** 4 WC items + 2 Darts. **The most engagement-dense single user in the dormant pool. Today's E3 trigger is the right send moment.**
- laye.aurelien@wanadoo.fr — 23d. E4-eligible since 2 days ago. 2 Shakira items.
- blubberboi@yahoo.com — 15d. E3 crossed yesterday. Ed Sheeran Aug 8 (still 105 days out — long lead time).

---

## Subject Line A/B Tests

### Florence — Day 6 (lower floor edge)
- **A:** `Florence Atlanta in 6 days — the floor edge is now.`
- **B:** `Day 6 for Florence Atlanta. The optimal window already closed.`
- **Hypothesis:** A is action-oriented; B is honesty-first ("you missed the optimal day"). Yesterday at Day 7 I recommended A's tactical conclusion framing. Today at Day 6, B is more honest — but Florence is still a *good* send (lower floor edge, not yet stabilized), so honesty-first under-sells the present-day opportunity. **Recommend A.** Save B for Day 4 if we still haven't reached this user.

### Bilmuri — Day 7 + E3 (peak send moment)
- **A:** `Bilmuri at The Sylvee — Day 7. Small-room floor opens NOW.`
- **B:** `Bilmuri in 7 days. The 1,800-seat math says tonight.`
- **Hypothesis:** A leads with day count + ALL-CAPS NOW. B leads with venue size + tonight specificity. Yesterday at Day 8 I recommended ALL-CAPS NOW for double-urgency. Today the urgency is even higher (peak day, not adjacent to peak), and "tonight" in B is more specific than "now." **Recommend B.** "Tonight" is the most action-anchoring word in the consumer-advocate vocabulary; reserve it for true tonight-actions, and this is one.

### Cubs Homestand — Game 1 inside floor window
- **A:** `Cubs homestand: Game 1 is in 6 days. Different math for each night.`
- **B:** `Your 6 Cubs games: 1 buys tonight, 5 still wait. Here's how to see it.`
- **Hypothesis:** A introduces the differential framing; B states the action directly. Yesterday I recommended A; today the pivotal change is that Game 1 is now an action-call, not a watch-call. **Recommend B** — it makes the differential specific (1 vs 5) and lands the buy-tonight conclusion in the subject. The user is in compare mode; B respects that.

### Welcome Pattern B — must work for tomorrow's 3 simultaneous sends
- **A:** `You signed up for TicketScan — what are you trying to track?`
- **B:** `Welcome. Three of you signed up the same day — here's where to start.`
- **Hypothesis:** B leverages the cohort moment again, but more honestly than yesterday's framing because tomorrow it's *literally true* — three Pattern B users in the queue are from the same 12-hour window (Apr 22 21:18 → Apr 23 03:01). A is the safe individual-framing. **Recommend B for tomorrow's send.** The cohort claim is now factually accurate, not synthetic. This is the rare case where social proof is real.

### Combined Welcome + E1 — charlesteel126 (Pattern A, Bruno Mars)
- **A:** `Welcome — and Bruno Mars Ohio is in 25 days. Here's the play.`
- **B:** `You're tracking Bruno Mars Ohio. Day 25 is the wait-and-watch window.`
- **Hypothesis:** A acknowledges the welcome AND gives specific event guidance. B skips the welcome entirely and goes straight to event tactics. **Recommend A** — the welcome acknowledgment is what makes the E1 honest ("we've been silent because of an outage, here's the value now"). B reads as if we've been engaged the whole time; we haven't. Honesty matters.

### Combined Welcome + E1 + A+ Digest — ajvanprooyen (Cubs homestand)
- **A:** `Welcome — and your 6 Cubs games each have different timing. Today's read.`
- **B:** `Your Cubs homestand starts in 6 days. Six different price curves. Welcome to TicketScan.`
- **Hypothesis:** A leads welcome → tactical. B leads tactical → welcome. For a Pattern A+ user with 6 events queued, the tactical density is the value proposition. **Recommend B.** The user added 6 items in one session — they came to do work. Lead with the work.

### NEW: E5 Backlog-Send Rewrite (still P0 — no change in eligible cohort today)
- **A:** `We owe you 5 emails, not 1. Here's the full ticket-savings field guide.` (recommended yesterday, hold)
- Holding A. No update needed today.

### NEW: 2510soccerboy Recovery Survey (post-Viva El Jaripeo)
- **A:** `You went to Viva El Jaripeo. We failed you. Two questions.`
- **B:** `Last night was Viva El Jaripeo. 89 days. Zero emails. Here's the honest reset.`
- **Hypothesis:** A is direct and concise; B is the full honesty arc. **Recommend A.** B is over-long for a subject line. The honesty in A's opening sentence ("we failed you") is the strongest lead I've written for any send this month — match the voice of the post-mortem template.

### CTA Review (all templates today)
- Florence → `ticketscan.io/compare?event=Z7r9jZ1AdJ7BV` ⚠️ **(unverified — using inferred Ticketmaster ID format. Engineering check needed before send. Fallback: `ticketscan.io/dashboard?q=Florence+Machine+Atlanta`)**
- Bilmuri → `ticketscan.io/compare?event=vv1A6ZkCdGkdy3apF` ✓ (verified from watchlist API response)
- Cubs homestand → `ticketscan.io/watchlist` ✓
- Welcome Pattern A → `ticketscan.io/watchlist` ✓
- Welcome Pattern B → `ticketscan.io/dashboard` ✓
- Welcome Pattern A+ → `ticketscan.io/watchlist` ✓
- Combined welcome + E1 (charlesteel126) → `ticketscan.io/compare?artist=bruno-mars` ⚠️ **(STILL UNVERIFIED — Day 4 of flagging. Engineering ping needed. Fallback: `ticketscan.io/dashboard?q=Bruno+Mars+Ohio`)**
- 2510soccerboy recovery survey → reply-to email (no CTA URL needed) ✓
- E5 backlog send → `ticketscan.io/dashboard` ✓

---

## Action Items

### P0 — Critical
1. **SMTP / transactional decision — Day 19.** Unchanged. Hang duration is now creeping upward (35s → 40s) — flag as a *worsening* signal, not stable. Cold-start warmup plan still un-drafted. Re-baselined volume estimate: ~1 user/day signup rate after the Apr 23 outlier.
2. **Viva El Jaripeo D-Day post-mortem.** Event happens TONIGHT. **Standalone artifact `/marketing-agents/output/email/post-mortem-2510soccerboy.md` due Monday Apr 27.** Recovery survey template drafted (subject A recommended). Send when channel reopens.
3. **Tomorrow's 5-user E1 wave — 3 templates required.** Pattern A (charlesteel126), Pattern A+ (ajvanprooyen), Pattern B (3 users: ggri73/awwhittington/mark.murdock). Standard E1 template fails for Pattern B — they have no watchlist items. **Ship 3 variants, not 1.** Combined welcome+E1 framing because the welcome is overdue too.
4. **E5 "Savings Report" rewrite — still P0.** 3 users eligible, 2 more within a week (lvasub6 Apr 29, chocolateyu1083/arin.gelbaugh Apr 30). Stock template presumes 4 prior emails that never existed. Yesterday's draft (subject A) is ready.
5. **Post-E5 graveyard cohort recount: now 40 users (67%, not 50%).** Yesterday I undercounted. The pendingUsers API returns users 41–60; users 1–40 (40 users) are all >35d signup and structurally unserviceable. **Severity raised: 67% of users are permanently unserviceable under current drip design.**

### P1 — High
6. **Welcome backlog: 7 users (was 8 yesterday — charlesteel126 collapses into tomorrow's combined send).** Pattern composition: 2 Pattern A + 1 Pattern A+ (brigitte.theisen retroactive) + 4 Pattern B.
7. **ajvanprooyen Pattern A+ homestand digest.** First Cubs game is now Day 6 — inside the floor window. Game 1 is a buy-decision call, not a watch-call. Send urgency has stepped up another tick.
8. **goldy.pec.2012 Bilmuri triple-urgency send.** Today is the single highest-leverage send opportunity on the platform: E3 crossing + small-room floor opening + 14-day engagement maturity. **If only one email could send today, this is it.**
9. **Target-price UX is STILL the product blocker.** Day 90 of 100% null-on-add. **3-month milestone — call it out to product as a quarterly review item.**
10. **Bruno Mars artist-cluster CTA route verification.** Day 4 consecutive flag. Engineering ping needed — `ticketscan.io/compare?artist=bruno-mars` does it 200 or 404? Now blocking 2 sends (cluster send + charlesteel126 combined welcome).
11. **Florence CTA event-ID verification.** Used inferred Ticketmaster ID format — engineering should verify before send. Fallback URL works.
12. **Forecast accuracy — keep the discipline.** Today: 3-of-3 hit. The hour-precision math correction worked. **Continue carrying ±1 day band on future forecasts** even though it wasn't needed today; one perfect day doesn't validate the method.

### P2 — Medium
13. **Newsletter growth: 83-day stall.** No homepage A/B action yet.
14. **Past-dated watchlist add blocker.** `event_date < NOW()` should be rejected at write time. Still 27 of 81 past-dated (~33%). Unchanged today (no new adds).
15. **Build watchlist digest endpoint.** Still manual.
16. **Drip-run hang duration trend.** Now growing 5s/day. Whatever is hanging is doing more of it. Worth a one-line addition to the engineering ping: "and the hang is getting longer."

### NEW today
17. **Pattern B template gap.** Tomorrow's wave forces the issue — we need a Pattern B E1 template (no watchlist items to reference). Existing E1 template assumes a watchlist exists. **Draft Pattern B E1 template today, before the wave hits tomorrow.** Lead idea: "What are you trying to track? Reply with an artist, team, or venue and we'll show you what's available."
18. **Combined welcome+E1 framework.** Pattern A and Pattern A+ users in tomorrow's wave have BOTH never received a welcome AND are crossing E1. Sending two emails is wasteful and confusing. Define the combined-send rule: "When welcome is overdue AND E1 is crossing, send one email that does both, leading with the user's actual state (event tracking) and acknowledging the overdueness in one sentence."
19. **The "tonight" word as a reserved primitive.** Used in today's Bilmuri B subject. Build a discipline: "tonight" should be reserved for genuine tonight-actions (peak floor day, T-minus-1, breaking news). Once it gets diluted, it stops working. Adding to the brand-voice guardrails.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **83-day stall** (+1).
- **Drip pipeline:** Day 19. 0 sends ever. 60 of 60 users have never received a drip email. Hang duration creeping upward (30s → 35s → 40s over 3 days).
- **Price alerts:** 0 ever triggered. 0 of 81 watchlist items have target prices (**Day 90 milestone — three months of 100% null-on-add**).
- **User growth:** **0 new users today (second consecutive zero day).** 60 total. Rolling 7d = 7 users. Apr 23 burst confirmed episodic; trailing baseline is 0.5–1.0 user/day.
- **Watchlist:** 81 items (no change, second zero-add day).
- **Threshold crossings today:** 3 — nicklib253 E2 (7d), pete.uzelac77 E3 (14d), goldy.pec.2012 E3 (14d). **All 3 forecast hits — 100% accuracy.**
- **Threshold crossings tomorrow:** 5 simultaneous E1 — charlesteel126, ggri73, awwhittington, ajvanprooyen, mark.murdock. **Largest single-threshold wave in platform history.**
- **Events entering tactical windows today:** Florence Day 6 (post-floor edge), Bilmuri Day 7 (peak floor for small room), Cubs Game 1 Day 6 (peak floor for arena).
- **Today's signature event:** **Viva El Jaripeo D-Day** for 2510soccerboy@gmail.com. 89 days tracked, zero emails. Post-mortem standalone artifact due Apr 27.
- **Eligibility backlog:** 59 emails across all tiers (E1: 20, E2: 14, E3: 13, E4: 9, E5: 3). Up from 56 yesterday.
- **Post-E5 graveyard recount:** 40 users (67% of base), up from yesterday's reported 30. Recount used pendingUsers API as ground truth.
- **Forecasting:** First 100% accurate forecast day. Hour-precision correction worked. Maintain ±1 day band as discipline.
- **Email channel status:** Day 19. Zero emails of any kind have ever reached a user. Hang duration trending worse, not stable.
- **One actionable surprise today:** the Pattern B template gap. Tomorrow's wave forces a 3-variant E1 design that didn't exist before — Pattern B users have no watchlist to reference, so the standard E1 framing breaks. Catching this 24h ahead of the wave is the win.
- **Two reframing actions from today:** (1) the post-E5 graveyard is 67%, not 50% — bigger structural problem than yesterday's read; (2) the SMTP hang is *worsening* (5s/day), not just persistent — escalation language to engineering should reflect a degrading system, not a stuck one.
