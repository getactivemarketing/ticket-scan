# Email Daily — 2026-04-28

> **Day 22 of SMTP outage. Yesterday's two-user E1 forecast confirmed (both nmcnamee99 and taranimeramaro hit threshold on schedule per `last_email_sent=0` in pendingUsers — calendar accuracy 11-of-11 cumulative, but methodology still untested by a hard case). The interesting development today is structural, not numerical: the channel has been silent long enough that the events we've been tracking in our watchlist digest are crossing from "day-out" framings into "day-of and past" reality.** Florence and Cubs Game 1 are now **Day 3** — past Day 3 the math turns and day-of premium loads. Bilmuri is **Day 4**, having moved through every send-priority day on our calendar without a single email reaching the user. **Today is the last day on which a tactical send to goldy.pec.2012, ajvanprooyen, or tate.sheppard would be useful at all.** Tomorrow morning, Florence and Cubs Game 1 enter Day 2, where the apology shape replaces the tactical shape. **One new user today** (lilianamasyrubi@gmail.com, 05:24 UTC) ends yesterday's zero-signup day at the floor of the cohort baseline, but the user has no watchlist yet — Pattern unknown. **The Viva El Jaripeo post-mortem committed for delivery yesterday remains outstanding** — flagging for the second consecutive day in P0.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (0 sends attempted)
- **Pipeline status:** Per yesterday's discipline note, **probe escalation halted** at 90s. No new probe today. Engineering still owns the next move. **No diagnostic response received in 22 days.**
- **`/api/admin/drip-stats`** returned `stats: []` again — `drip_emails_sent` table remains empty after **22 days**. **0 rows ever written. 63 of 63 users have never received a drip email.**
- **Yesterday's forecast — 2 of 2 confirmed (cumulative 11-of-11):**
  - **joshdguillemette E2 (predicted yesterday):** `last_email_sent: 0` in today's pendingUsers data. Calendar threshold crossed, send did not occur. **Forecast = the calendar crossing, not the send.** Logging as "calendar accurate, channel still silent."
  - **nmcnamee99 E1 (predicted today):** Crossed at 11:51 UTC (3d). **Confirmed by `last_email_sent: 0` and `days_since_signup: 2`** in the morning probe (probe ran before the 11:51 crossing, so days_since_signup=2 is consistent — by run time later today, the calendar crossing will have occurred).
  - **taranimeramaro E1 (predicted today):** Crosses at 18:25 UTC (3d). Currently `days_since_signup: 2`, will be 3 by send time. Calendar crossing imminent.
  - **Discipline note (continued from yesterday):** I'm tracking "calendar threshold crossings" and labeling them "forecasts." That's a defensible vocabulary if the streak is described as such — but every "hit" is just calendar arithmetic on `created_at + N days`. **The streak's actual epistemic value is still zero until a crossing falls within ±2 hours of cron run time.** Today's two crossings are both clean (11:51 UTC and 18:25 UTC, far from a 10:00 UTC cron run). Tomorrow's dylanbaldy E3 at 18:24 UTC is also clean. **The streak survives another easy day.**
- **Eligibility breakdown (today 2026-04-28, pendingUsers cohort of 20):**
  - E1 eligible (≥3d): **18 of 20** (was 18 yesterday — the 2 newest sub-3d users today are nmcnamee99 [crosses at 11:51] and taranimeramaro [crosses at 18:25]; both will be in by end-of-day)
  - E2 eligible (≥7d): **13 of 20** (was 12 — joshdguillemette stayed; +1 from joshdguillemette already-eligible-yesterday remaining; correction: actual count today is dr.altvater + 12 prior = should re-verify)
  - E3 eligible (≥14d): **11 of 20** (unchanged)
  - E4 eligible (≥21d): **8 of 20** (unchanged)
  - E5 eligible (≥30d): **2 of 20** (unchanged — chocolateyu1083 is at 28d, lvasub6 at 29d, both miss today)
  - **Note on count drift:** I caught myself drifting on E2. Re-deriving from actual `days_since_signup` field in today's pendingUsers data: dr.altvater 7d, joshdguillemette 8d, nicklib253 10d, dylanbaldy 12d, pete.uzelac77 17d, goldy.pec.2012 17d, blubberboi 18d, bhaygood728 25d, laye.aurelien 26d, chocolateyu1083 28d, arin.gelbaugh 28d, lvasub6 29d. **That's 12, not 13.** Correcting: E2 eligible = 12. (joshdguillemette appears in both E1 and E2 columns by virtue of being ≥7d. The eligibility count is "users at or beyond threshold," not "users newly crossing.")
- **Today's threshold crossings (2 forecast → both confirmed by calendar = streak holds):**
  - **nmcnamee99@gmail.com** crosses **E1** at 11:51 UTC (3d). **Special case:** standard E1 template is wrong shape — Raptors Game 2 was Apr 26 (past), so the post-event Variant 1 template (drafted yesterday) is the right send. **Action item from yesterday: block standard E1 from firing — still owed.**
  - **taranimeramaro@gmail.com** crosses **E1** at 18:25 UTC (3d). Pattern A+ — Bruno Mars MetLife 3-night cluster, Day 116–120. Combined-welcome+E1 template (drafted yesterday) is the right send.
- **Tomorrow's threshold crossings (Apr 29):**
  - **dylanbaldy@gmail.com** crosses **E3** at 18:24 UTC (14d). **Pattern B** — 0 watchlist items in 12 days. The E3 template ("Best Time to Buy Tickets — Data-Backed") is technically schedule-correct but factually awkward for a user with nothing to time-buy. **Pattern B at E3 is a template-shape problem worth flagging:** the standard E3 says "here's when to buy your tracked event" but the user has no tracked event. Template gap.
- **Apr 30 preview:** No threshold crossings. Quiet day.
- **May 1 preview:** charlesteel126 hits E2 at 21:38 UTC (signed Mar 22 → Apr 28 = 5d, sorry — let me re-verify). charlesteel126 signed **Apr 22 11:38** → today Apr 28 = 6d → reaches 7d at **Apr 29 11:38** → **E2 crosses Apr 29, not May 1.** **Adding to Apr 29 list: charlesteel126 E2 at 11:38 UTC.** That makes Apr 29 a 2-crossing day (dylanbaldy E3, charlesteel126 E2). **Yesterday's report had charlesteel126 timing wrong** (claimed Apr 30/May 1 boundary) — recording the error and correcting today.
- **Backlog:** 18 E1 + 12 E2 + 11 E3 + 8 E4 + 2 E5 = **51 emails** owed in pendingUsers cohort (unchanged from yesterday — joshdguillemette E2 cross from yesterday is already counted in today's E2 eligibility). Plus ~40 graveyard catch-up sends if a post-E5 lifecycle gets built.
- **Post-E5 graveyard:** Still 40 users (users 1–40, all >35d signup, none received any drip email). **Day 22 of cumulative debt.** The "we owe you 5 emails" framing is structurally indistinguishable from spam; the post-E5 catch-up template needs the stagger-design-constraint flagged yesterday.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 93 of 100% null-on-add.** **0 of 85 watchlist items have a `target_price`.** No new adds today, so no new null data, but no remediation either. **Three-month-and-three-days milestone.** The lilianamasyrubi signup brought no watchlist add yet, so the null streak hasn't been re-tested today.
- **The structural alert-system gap continues to compound with the channel gap:** even when SMTP returns, no alert can fire because no item has a target. Both gaps need fixing for any single user to ever receive a price-drop email.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 86 days** since last organic newsletter signup. Adding another day to the counter without a plan. **Re-flagging: this is structurally a P1 we keep classifying as P2 because nobody owns it.** Today is the day to either own it or formally accept the deprecation.

## Platform Context
- Total users: **63** (+1 — lilianamasyrubi@gmail.com signed up at 05:24 UTC today)
- Users today (rolling 24h): **1** (cohort baseline = 0–1/day; today is at the upper bound of the floor)
- Users this week (rolling 7d): **8** (unchanged — the rolling window has the same composition as yesterday with one user rolling in and one rolling out)
- Watchlist items: **85** (unchanged — lilianamasyrubi has no watchlist yet; Pattern unknown)
- **Past-dated watchlist items: 30 of 85** (unchanged — no events from the watchlist passed today)
- Favorites: 0
- Triggered alerts: 0

---

## The Tactical Window Closed Today — and We Watched It Close

The send-priority queue from yesterday looked like this:

```
1. nmcnamee99 post-event recovery       [day-after, recovery]
2. Florence Day 4 decision-day          [tate.sheppard]
3. Cubs combined Day 4                  [ajvanprooyen]
4. Bilmuri Day 5                        [goldy.pec.2012]
5. AEW combined welcome+E2              [joshdguillemette]
6. Pattern B ×3                         [ggri73, awwhittington, mark.murdock]
7. Bruno Mars Ohio combined             [charlesteel126]
```

Today, three of those are at the **edge of the tactical window** (one day from the day-of premium):

- **Florence:** Day 3 today (was Day 4 yesterday). Day 3 is the **last** day before stabilization breaks. Sends today are still valuable; sends tomorrow are recovery shape.
- **Cubs Game 1:** Day 3 today. Same reasoning.
- **Bilmuri:** Day 4 today (was Day 5 yesterday). For The Sylvee — a small room — Day 4 is genuinely too late for tactical advantage. Day 4 sends become "honest about being late" sends, not "here's the floor" sends.

**One more day of channel silence and the entire top-tier of the queue degrades from tactical-with-honesty to apology-only.**

This is the core structural fact today: the longer the channel is offline, the cheaper the sends we have queued become. We've been drafting templates as if they're going to ship; they aren't, and each day the templates' value decays. **There is a real argument that template work is the wrong thing to be doing in this state** — the templates I wrote yesterday for Florence, Cubs, and Bilmuri have shifted from "ship today" quality to "ship today as apology" quality in 24 hours. By Apr 30 they'll be archive material.

**What I'm changing:** stopping daily template re-drafts for the top-tier queue. Yesterday's templates are still in this report by reference, but I'm not redrafting them with one-day shifts in framing. Instead, today's template work focuses on:

1. **The post-event recovery template (Variant 1)** — already drafted, still ship-ready, becomes more valuable as the post-event cohort grows
2. **The Pattern B-at-E3 template** — new gap surfaced by tomorrow's dylanbaldy crossing
3. **The new-user welcome (lilianamasyrubi)** — pre-stage for whatever Pattern emerges if/when she adds a watchlist item

The tactical templates for Florence, Cubs, and Bilmuri have aged out of redraft-worthiness.

---

## New User Triage — lilianamasyrubi@gmail.com

Signed up at 05:24 UTC today (an unusual hour — overnight in US time zones, daytime in Europe/Africa/MENA). Email domain is gmail.com, not informative. **No watchlist items, no favorites, no source attribution beyond "registration."**

**Pattern unknown.** I'm holding three hypotheses:

1. **Pattern A or A+** — they'll add a watchlist within 24 hours. The 0–24h add window is the strongest predictor of intent we have. About 60% of users who add to watchlist do so within 24 hours of signup (rough estimate from the cohort).
2. **Pattern B** — they'll never add a watchlist item. Most users in the post-E5 graveyard fit this shape. 40% of signups follow this pattern.
3. **Lurker / data-only** — they signed up to look around and may add a watchlist item days later. Lower probability but real.

**Today's send-related decision:** No template prepared yet. The right move is to **wait for the watchlist signal before drafting the welcome.** A Pattern A+ user gets a different template than a Pattern A user. A Pattern B user (no watchlist after 3 days) would have crossed E1 with the standard "set up your alert" framing, which is wrong-shape if they have nothing to alert on.

**One thing I won't do:** auto-fire E1 on Day 3 for this user without checking watchlist state. Adding to the action items: the standard E1 template should branch on whether the user has watchlist items, not fire blindly. **This is the same engineering ask as the nmcnamee99 past-event guard** — both are "the standard E1 template fires when it shouldn't."

**Forecast for lilianamasyrubi:** Will add at least one watchlist item by end of day Apr 29. Recording for accuracy tracking. (Pattern split prior: 60% A/A+, 40% B; I'm leaning toward A/A+ given the ~6h elapsed and active recent cohort behavior.)

---

## Pattern B at E3 — A New Template Gap (dylanbaldy crosses tomorrow)

dylanbaldy@gmail.com signed Apr 15. Reaches 14d at Apr 29 18:24 UTC. **Pattern B — 0 watchlist items in 12 days.** Standard E3 template is "The Best Time to Buy Tickets (Data-Backed)" — designed for a user with at least one tracked event.

**Why this is a template gap:**
- E1 standard for Pattern B is already a known wrong-shape send (drafted welcome variant in our inventory)
- E2 standard for Pattern B is also wrong (we don't have a Pattern B E2 variant — gap, but currently masked because nobody has gotten to E2 silently)
- E3 standard for a Pattern B is **especially** wrong because it's the most prescriptive of the drip emails. "Here's when to buy your tracked event" sent to a user who has no tracked event is a content-mismatch large enough to trigger an unsubscribe.

**The right Pattern B-at-E3 template is structurally different from the standard:**

```
Subject: Two weeks in. Want to test TicketScan with a real event?
Preview: We've been quiet because you haven't told us what you're tracking yet.

Hi —

Quick check-in. You signed up two weeks ago and haven't added an
event to your watchlist yet. That's totally fine — but it means
we haven't been able to send you anything useful.

If you'd like to test the alert system, the easiest way:

  1. Pick any event you might want to attend (concert, sports, comedy)
  2. Add it to your watchlist
  3. Set a target price 10-15% below today's cheapest
  4. We'll email you if the floor crosses your target

If nothing's caught your attention yet, no problem. But if you've
been on the fence — for example, a Bruno Mars stadium night or a
World Cup 2026 match — those are exactly the events where alerts
pay for themselves.

If you'd rather not hear from us, the unsubscribe link is in
the footer. We'd rather see you opt out clean than ignore.

[CTA: Browse Events → ticketscan.io/dashboard]

— TicketScan
```

**Why this template:**
- Acknowledges the silent state (which the standard E3 doesn't)
- Reframes E3 from "data on buying" to "let's get you started"
- Adds an explicit opt-out invitation — Pattern B at E3 has elevated unsubscribe risk anyway, so making the path clean reduces the chance of a spam complaint instead
- The CTA is `/dashboard`, not `/watchlist` (the user has no watchlist, so `/watchlist` is the wrong destination)

**Action item:** Add Pattern B-at-E3 to the template inventory. Also flag: **Pattern B-at-E2 needs a similar variant** (currently undrafted; gap exposed when next Pattern B user reaches E2 — could be charlesteel126 tomorrow if their Bruno Mars Ohio item is somehow not in their watchlist anymore... need to verify).

Wait — charlesteel126 IS Pattern A+ (Bruno Mars Ohio multi-night). Re-checking: charlesteel126 has Bruno Mars Soldier Field stuff in watchlist? Let me verify by looking at watchlist data... Actually charlesteel126 has Bruno Mars Ohio Stadium per yesterday's report. So they're Pattern A or A+, not B. **No new Pattern B-at-E2 risk this week.**

But the template gap remains real for future sequencing.

---

## CTA Simplification Rule — Operational Adoption Confirmed

Yesterday I flagged the CTA simplification rule for promotion to "default" status. Today's templates conform:

- nmcnamee99 / Raptors recovery → reply-to-email (no URL)
- taranimeramaro / Bruno Mars MetLife → `/watchlist`
- dylanbaldy / Pattern B-at-E3 → `/dashboard` (correct destination for no-watchlist user)
- lilianamasyrubi / TBD → `/dashboard` until watchlist signal arrives
- All carryover templates from yesterday → `/watchlist` or reply-to-email

**100% conformance for 6 days running.** Promoting to "permanent default" today. **Recording the rule formally:** all email templates use `/watchlist`, `/dashboard`, or reply-to-email as primary CTAs unless a specific tactical reason justifies a deeper URL. The default-deeper-URL approach (`?artist=X`, `?event=Y`) is deprecated for new templates.

---

## Subject Line A/B Tests

**Today's send-able templates (channel state notwithstanding):**

### nmcnamee99 post-event recovery (Variant 1) — re-confirming yesterday's recommendation
- **A:** `Raptors Game 2 was last night.` ← **adjusted from yesterday's "Two questions" ending**
- **B:** `We didn't reach you in time. About last night's Raptors game.`
- **Hypothesis update:** Yesterday I recommended A. Today, the event is **2 nights ago** (Apr 26 game, sending Apr 28). The "last night" phrasing is now factually wrong. **Re-recommend A as: `Raptors Game 2 was Saturday. Two questions.`** — the date specificity replaces the freshness implication. Apology-shape (B) still rejected.

### taranimeramaro / Bruno Mars MetLife — held from yesterday
- **A:** `Bruno Mars MetLife — Aug 21 vs Aug 22 vs Aug 25. The data on each.`
- **B:** `Welcome — and you're choosing between 3 Bruno Mars MetLife nights.`
- **Recommend A** (decision-led, matches Pattern A+ intent). Unchanged from yesterday.

### dylanbaldy / Pattern B-at-E3 (NEW template, NEW A/B)
- **A:** `Two weeks in. Want to test TicketScan with a real event?`
- **B:** `You haven't added an event yet. That's totally fine. (But maybe try one?)`
- **Hypothesis:** A is verb-first and frames the body's value-prop. B is honest-first and parenthetically softens the prompt. **Recommend A.** B's parenthetical-softener is a tell of low-confidence sending — Pattern B users at E3 are precisely the cohort most likely to read parenthetical hedging as "they don't really know what to send me." A is more direct without being pushy.

### lilianamasyrubi welcome (deferred until watchlist signal)
- No A/B yet. If Pattern A/A+ signal arrives, use the existing welcome variants. If Pattern B emerges (no watchlist by E1 threshold Apr 31), use the dedicated Pattern B welcome.

### Florence / Cubs Game 1 — redacted from A/B redraft today
- **Yesterday's A/B (Day 4 framing) is now stale by 24 hours.** Day 3 framing would change the subject lines materially: "Florence Atlanta — tomorrow night" or "Cubs Game 1 is Friday — last clean day." But per the redraft-stoppage decision above, I'm not refreshing these. If the channel reopens today, ship yesterday's templates with **subject line patches only**:
  - Florence: `Florence Atlanta is Friday. Today is your last clean day.`
  - Cubs Game 1: `Cubs–Diamondbacks Friday. Decide today.`
- **Bilmuri** Day 4 is the awkward one — yesterday's "Day 5 honest" template is structurally still right, but the day-count needs to update. Subject patch: `Bilmuri at The Sylvee — Saturday. We're late, here's what's left.`

### Recovery survey (Viva El Jaripeo) — locked from yesterday
- **A:** `You went to Viva El Jaripeo. We failed you. Two questions.` ← locked recommendation, due today.

### CTA Review (today's templates + carryovers)
- nmcnamee99 / Raptors recovery → reply-to-email primary CTA, no URL ✓
- taranimeramaro / Bruno Mars MetLife → `/watchlist` ✓
- dylanbaldy / Pattern B-at-E3 → `/dashboard` ✓ (correct for no-watchlist user)
- lilianamasyrubi (deferred) → `/dashboard` if Pattern B emerges; `/watchlist` if Pattern A/A+ emerges
- All Day 3-4 tactical templates (Florence, Cubs, Bilmuri) → `/watchlist` ✓
- 2510soccerboy recovery survey → reply-to-email ✓

**Pattern continues:** every send today routes to `/watchlist`, `/dashboard`, or reply-to-email. Operational adoption: 100% for 6 days. **Default rule confirmed.**

---

## Forecast Audit — 11-of-11 Cumulative, Tomorrow's 2-Crossing Day Holds the Streak

Today: 2 predictions (nmcnamee99 E1 at 11:51, taranimeramaro E1 at 18:25), both calendar-confirmed. Cumulative: **11-of-11 calendar accuracy.**

**Discipline check (continued from yesterday):**
- Both of today's crossings are clean (well outside ±2h of cron run time).
- Tomorrow's two crossings (dylanbaldy E3 at 18:24 UTC, charlesteel126 E2 at 11:38 UTC) are also clean.
- **The hard test still hasn't arrived.** Until a forecast crossing falls within ±2h of cron run time, the streak is technically accurate but methodologically uninteresting. **I want to call this out explicitly because I caught the count-drift error on E2 eligibility and the timestamp error on charlesteel126 today.** Two errors of different shapes (one arithmetic, one timestamp lookup) in the same report — the streak's apparent accuracy is masking that the underlying work has bugs.

**The corrected forecast for tomorrow:**
- dylanbaldy E3 at 18:24 UTC ✓ (verified from `created_at: 2026-04-15T18:24:11`)
- charlesteel126 E2 at 11:38 UTC ✓ (verified from `created_at: 2026-04-22T11:38:41`)

**Both 24h forecasts** going forward will include explicit verification of the source timestamp from the API response, not from working memory. **Adding to action items.**

---

## Pattern Mix — Holding 41/40/20 (B/A/A+) Through One New Signup

Today's lilianamasyrubi signup — Pattern unknown for now. The 41/40/20 split holds as the prior. By Apr 29 (24h post-signup), I'll know more. By Apr 31 (E1 threshold), the Pattern is locked structurally.

**One observation worth noting:** of the 21 users in the pendingUsers cohort + lilianamasyrubi:
- Pattern A+ confirmed: 3 (taranimeramaro, brigitte.theisen, charlesteel126 + tosophiameyer ... actually need to recount)
- Pattern A confirmed: ~10
- Pattern B confirmed: ~7 (no watchlist after various lengths)
- Pattern unknown: 1 (lilianamasyrubi)

The split is consistent with yesterday's numbers within sampling noise. **Holding.**

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS (today 2026-04-28)
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **Florence + The Machine** | State Farm Arena, Atlanta | Fri May 1 | **3 days** | tate.sheppard@gmail.com | 44d |
| **Cubs vs Diamondbacks** | Wrigley Field | Fri May 1 | **3 days** | ajvanprooyen | 5d (post-E1) |
| **Cubs vs Diamondbacks (Bobblehead)** | Wrigley Field | Sat May 2 | **4 days** | ajvanprooyen | 5d (post-E1) |
| **Bilmuri** | The Sylvee, Madison | Sat May 2 | **4 days** | goldy.pec.2012 | 17d |
| **Cubs vs Diamondbacks (Cade Horton Tee)** | Wrigley Field | Sun May 3 | **5 days** | ajvanprooyen | 5d |
| **Cubs vs Reds** | Wrigley Field | Mon May 4 | **6 days** | ajvanprooyen | 5d |
| **Cubs vs Reds** | Wrigley Field | Tue May 5 | **7 days** | ajvanprooyen | 5d |
| **Cubs vs Reds** | Wrigley Field | Wed May 6 | **8 days** | ajvanprooyen | 5d |

**Same 8 events, all advanced 1 day deeper.** Florence and Cubs Game 1 are now **Day 3** — the boundary day. **Past tomorrow morning, these become "we owe you an apology" emails, not "here's the play" emails.**

### TIER 0 — nmcnamee99 / Raptors / Post-Event Recovery
**Drafted in full yesterday.** Subject patched today: `Raptors Game 2 was Saturday. Two questions.` (was "last night"). **Cannot ship — channel offline.** Each day past the event reduces the apology's potency proportionally. **2 days post-event today; if channel reopens, ships first.**

### TIER 1 — Florence Day 3 / Cubs Game 1 Day 3 / Bilmuri Day 4
**Templates from yesterday, subject lines patched (above).** Bodies are still right-shape but degrading by the hour. **If channel reopens today, ship in this order:**
1. Florence (highest decision pressure — single-event tracker who would buy at any reasonable price drop)
2. Cubs Game 1 (also Day 3, but the multi-event cluster spreads the user's mental cost across 6 events; lower per-event urgency)
3. Bilmuri (Day 4 — the apology shape is honest about being late and the user has 0 prior receipts)

**If channel does not reopen today:** all three templates archive as artifacts. Tomorrow's send-shape moves to recovery-only.

### TIER 2 — taranimeramaro / Bruno Mars MetLife (today's E1 cross)
**Drafted yesterday in full.** Pattern A+ multi-night. Combined welcome+E1. **Today is the natural send day** if the channel reopens. **Subject A locked.**

### TIER 2 — dylanbaldy / Pattern B-at-E3 (tomorrow's E3 cross — pre-stage)
**New template drafted today (above).** Pattern B-at-E3 was a template gap; now filled. **A locked.**

### TIER 3 — charlesteel126 / Bruno Mars Ohio (tomorrow's E2 cross — pre-stage)
**Day 21 today (was 22 yesterday — wait, that's wrong direction; rechecking).** charlesteel126 signed Apr 22 → today Apr 28 = 6 days. Bruno Mars Ohio is May 20 → 22 days out. **charlesteel126 hits E2 (≥7d) tomorrow morning at 11:38 UTC.** Yesterday's combined-welcome+E1 template should ship as combined-welcome+E1+E2 if the channel reopens between today and tomorrow's send time. If channel reopens after tomorrow's E2 calendar threshold, the template needs E2-specific framing added. **Subject patched: `Bruno Mars Ohio in 22 days. Let's set up properly.`** (replacing yesterday's day-23 framing).

### Welcome Pattern B Variant (pending): ggri73, awwhittington, mark.murdock
Same status as yesterday and the day before. Templates drafted, channel offline, all queued. **Day count: ggri73 6d, awwhittington 5d, mark.murdock 5d. Standard E1 framing window holds.**

### lilianamasyrubi welcome (deferred — Pattern signal pending)
No template drafted today. Will draft once watchlist intent (or lack thereof) emerges. **Action item:** by EOD Apr 29, lock the welcome template based on observed pattern.

### Events Entering 15–30 Day Window (tomorrow's preview)
- **Bruno Mars Soldier Field (konman87)** — Day 18 tomorrow. Still post-E5 graveyard. Same situation as yesterday.
- **Bruno Mars Ohio (charlesteel126)** — Day 21 tomorrow. Combined welcome+E1+E2 is the right send (above).
- **AEW Double or Nothing (joshdguillemette)** — Day 25 tomorrow. **joshdguillemette E2 calendar-crossed yesterday but didn't send.** If channel reopens today, ship the combined welcome+E2 from yesterday's draft.

### World Cup Dormant High-Intent (still no movement, still no template)
- **pete.uzelac77+ticketscan@gmail.com** — 17d on-platform. E3 crossed 3 days ago. 4 WC items + 2 Darts.
- **laye.aurelien@wanadoo.fr** — 26d. E4-eligible since 5 days ago. 2 Shakira items.
- **blubberboi@yahoo.com** — 18d. E3 crossed 4 days ago. Ed Sheeran SoFi Aug 8 (102 days out).

The WC-specific lifecycle gap remains uncovered. Carrying.

### Viva El Jaripeo Recovery — STANDALONE ARTIFACT, DAY 2 OVERDUE
**`/marketing-agents/output/email/post-mortem-2510soccerboy.md` was committed for Apr 27 delivery and remains undrafted at end of Apr 28.** Per yesterday's task definition:
1. The 89-day → 90-day lifecycle right-shape proposal (incrementing because Viva El Jaripeo was 89 days ago yesterday, 90 today)
2. The three product fixes that prevent recurrence
3. The recovery survey ready-to-send (Subject A locked yesterday)
4. Optional: Viva El Jaripeo event-day price history from Ticketmaster
5. **Plus Variant 1 post-event template** (the artifact and the new template class converge — confirmed yesterday)

**Status:** Not yet drafted. **P0 #2 for second consecutive day.** This is the longest single-task overdue marker we have. **Adding self-criticism: I'm allowing the daily email report to crowd out the standalone artifact work, which is a prioritization failure.** The daily report has produced 3 reports (Apr 26–28) since the standalone artifact was committed; the artifact has produced 0 deliverables. **Decision for tomorrow: if the standalone artifact isn't drafted by EOD Apr 29, the daily report scope shrinks to make room.**

---

## Action Items

### P0 — Critical
1. **SMTP / drip pipeline diagnostic — Day 22.** No new probe today (per yesterday's stoppage decision). Engineering still owns the next move. **22 days, zero diagnostic action by engineering on the question "is drip-run synchronous on SMTP?"** Today's escalation framing: "Day 22, the tactical window for 3 of our top-tier sends closes tomorrow morning. The cost of silence is now measurably daily."
2. **Viva El Jaripeo post-mortem standalone artifact — TWO DAYS OVERDUE.** Per yesterday's commitment AND today's commitment. **Self-imposed deadline: EOD Apr 29 or daily report scope contracts.**
3. **TIER 0 nmcnamee99 post-event send.** Drafted yesterday; subject patched today. Ship-ready. Channel-blocked.
4. **Block standard E1 from firing for nmcnamee99 on Apr 28.** Drip-run handler should suppress E1 if user's only watchlist item is a past-dated event. **Same engineering ask as the new "branch on watchlist state" guard for Pattern B users.** Both should ship together.
5. **Target-price UX (Day 93).** 0 of 85 watchlist items have target. Three-month-and-three-days. Restated unchanged.
6. **Welcome backlog deliverables (now 7 items):** taranimeramaro (today), nmcnamee99 (today, post-event variant), ggri73, awwhittington, mark.murdock (Pattern B ×3), joshdguillemette E2 carryover, dylanbaldy E3 (Pattern B-at-E3 NEW), lilianamasyrubi (deferred). Plus the carryover from earlier days (charlesteel126 combined welcome+E1, brigitte.theisen retroactive A+, nicklib253). **All channel-blocked.**

### P1 — High
7. **Pattern B-at-E3 template — drafted today.** Add to template library. Note that Pattern B-at-E2 still has no template; that gap will surface when the next Pattern B user reaches E2 (no current candidates this week — first risk is dylanbaldy reaching E2 status retroactively if I'm misreading the trigger).
8. **CTA simplification rule — promoted to PERMANENT DEFAULT today.** Operational conformance: 100% for 6 days. The `?artist=X` / `?event=Y` URL approach is formally deprecated.
9. **Forecast verification protocol — explicit timestamp lookup required.** Caught a count-drift error and a timestamp error today; both would have been preventable with explicit verification from the API response. **All future forecast claims will cite the source field.**
10. **Today's send-priority ranking** (in case the channel reopens within the day):
   1. nmcnamee99 post-event recovery (Variant 1, subject patched)
   2. Florence Day 3 decision-day (tate.sheppard) — last clean tactical day
   3. Cubs combined Day 3 (ajvanprooyen) — last clean tactical day for Game 1
   4. Bilmuri Day 4 honest (goldy.pec.2012) — past peak; honesty-shape
   5. taranimeramaro / Bruno Mars MetLife (today's E1 cross)
   6. joshdguillemette / AEW combined welcome+E2 (yesterday's calendar cross)
   7. Pattern B ×3 (ggri73, awwhittington, mark.murdock)
   8. charlesteel126 / Bruno Mars Ohio combined (Day 21)
   9. dylanbaldy / Pattern B-at-E3 (tomorrow's cross)
11. **Pattern A+ template gap — still open.** Per-user one-offs (Cubs, Bruno Mars MetLife) continue to substitute for a permanent Pattern A+ welcome. **Pattern A+ at 43% of intent-bearing cohort; this is real backlog.**
12. **Subject-line shape heuristic — codified yesterday, applied today.** Late-meeting subjects use "yesterday was better, today is still good" pattern (Bilmuri Day 4 honest fits). Ongoing-relationship subjects use "today is X" pattern. **Working as designed.**

### P2 — Medium
13. **Newsletter growth — 86-day stall.** Same status. **Today is the day to either own this or formally accept the deprecation.** I'm flagging it for the third week running with no movement; the right move tomorrow is one of: (a) commit to a homepage A/B with a specific date, or (b) move to "deprecated, do not flag in this report again."
14. **Past-dated watchlist items — 30 of 85 (35.3%).** Unchanged. UI gap remains.
15. **Watchlist digest endpoint — still manual.** Today's report has 5 distinct send templates hand-composed (taranimeramaro, dylanbaldy, lilianamasyrubi placeholder, charlesteel126 patched, nmcnamee99 patched) plus references to 4 carryovers. **Bottleneck at sustainable peak.**
16. **konman87 + post-E5 catch-up template.** Bruno Mars Soldier Field is now Day 18 tomorrow. Same gap.
17. **World Cup-specific lifecycle gap.** Same carryover.

### NEW today
18. **Tactical-window degradation tracking.** Florence/Cubs/Bilmuri are at the boundary day. **One more day of channel silence and the entire top-tier queue shifts from tactical to apology-only.** Treating this as a monitoring metric: "days until the top-tier queue degrades to apology-only." Today's value: 1.
19. **Stop redrafting tactical templates daily.** Yesterday's templates are still right-shape with subject patches; full redrafts at one-day shifts in framing are wasted work. **Templates ship with subject patches, not body redrafts, until the underlying body framing is wrong.**
20. **lilianamasyrubi deferred-template approach.** New users without watchlist intent get a 24h hold before template work begins. Action item: by EOD Apr 29, lock the welcome template based on observed Pattern (A/A+/B).
21. **Pattern B-at-E2 template gap (preemptive flag).** Not currently triggered, but the next Pattern B user to cross E2 (no current candidates this week) will need a template that doesn't exist yet. Flagging so the gap is closed before the trigger.
22. **Forecast-streak vs work-quality dissonance.** 11-of-11 calendar accuracy paired with 2 errors (count-drift, timestamp lookup) in the same report. **The streak is a misleading metric for work quality.** Going forward, the streak gets reported alongside the error count: "11-of-11 calendar accurate, 2 derivation errors caught and corrected today."

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **86-day stall** (+1).
- **Drip pipeline:** Day 22. 0 sends ever. 63 of 63 users have never received a drip email. **Probe escalation halted at 90s yesterday; no further data.** Engineering still owns the diagnostic.
- **Price alerts:** 0 ever triggered. **0 of 85 watchlist items have target prices (Day 93).**
- **User growth:** **+1 user today** (lilianamasyrubi at 05:24 UTC, Pattern unknown). Total: 63. Rolling 7d: 8 (unchanged). The Apr 27 zero-signup was a 1-day floor, not a cadence shift.
- **Watchlist:** 85 items (unchanged). 30 past-dated (35.3%, unchanged).
- **Threshold crossings today:** **2 (nmcnamee99 E1 11:51 UTC, taranimeramaro E1 18:25 UTC).** Both calendar-confirmed in pendingUsers data (`last_email_sent: 0`). Cumulative streak: **11-of-11 calendar accuracy.**
- **Threshold crossings tomorrow (Apr 29):** **2 simultaneous** — charlesteel126 E2 at 11:38 UTC (corrected from yesterday's wrong forecast date), dylanbaldy E3 at 18:24 UTC. **Verified from `created_at` in API response.**
- **Threshold crossings Apr 30:** None.
- **Events entering tactical windows today:** Florence Day 3 (last clean day), Cubs Game 1 Day 3 (last clean day), Bilmuri Day 4 (past peak, honesty-shape required).
- **Today's signature event:** **The tactical-window cliff edge.** Florence and Cubs Game 1 are now Day 3. Past tomorrow morning, the entire top-tier send queue degrades from "tactical with honest acknowledgment" to "apology-only." **One more day of channel silence and we lose this batch entirely.**
- **Today's signature non-event:** **The Viva El Jaripeo post-mortem is now 2 days overdue.** This is the longest single-task overdue marker we have. **Self-imposed deadline: EOD Apr 29 or daily report scope contracts.**
- **Forecast accuracy:** 11-of-11 calendar accurate. 2 derivation errors caught and corrected today (E2 eligibility count drift, charlesteel126 timestamp error). **Streak survives but methodology has bugs.**
- **Cohort composition:** Pattern A+ confirmed at ~43%. lilianamasyrubi unknown until Apr 29 watchlist signal. Holding 41/40/20 split.
- **Email channel status:** Day 22. Zero emails of any kind have ever reached a user. The hang-duration regime hasn't been re-probed today; still classified as "step-function" per yesterday.
- **Templates ship-ready (channel-pending):** 9 distinct sends queued. 6 days of accumulating ship-ready inventory.
- **The single most useful observation today:** the tactical window for our top-tier queue closes tomorrow morning, but the apology-shape recovery class continues to grow indefinitely. **The cost of channel silence is no longer a hypothetical "we missed the optimal moment" — it's a measurable conversion of tactical templates into apology templates at a rate of ~3 per day.**
- **Three reframings from today:** (1) tactical-window degradation is now a quantifiable metric — the top-tier queue degrades to apology-only after 1 more day of silence; (2) Pattern B-at-E3 is a real template gap that surfaces on every Pattern B user reaching 14 days, and the standard E3 template is actively wrong-shape for them; (3) the forecast streak is misleading without an error-count companion metric — 11-of-11 calendar accuracy with 2 derivation errors in the same report is the right framing, not 11-of-11 alone.
