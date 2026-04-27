# Email Daily — 2026-04-27

> **Day 21 of SMTP outage. The drip pipeline didn't just keep degrading — it broke through every ceiling we'd been tracking.** Hang duration jumped from 50.171s yesterday to **≥90s today** (probe ceiling, true value unknown). That's a **minimum +40s jump in 24 hours** versus the +5s/day pattern that held for three days and the +10s yesterday. **The degradation is no longer linear — it's collapsing.** Yesterday's single E2 forecast (joshdguillemette) hit on schedule, putting the cumulative streak at 9-of-9, but the test was trivial as flagged and shouldn't be claimed as methodology validation. **Zero new users today** — Apr 25's two-signup wave was discrete, exactly as forecast, and the cadence has reverted to baseline. **The single highest-urgency send opportunity in platform history (nmcnamee99's Raptors playoff Game 2) passed last night unanswered** because the channel is offline. We now own a new standalone artifact: the post-event "did you go? what'd you pay?" template, because the same scenario will recur. Meanwhile **the Viva El Jaripeo post-mortem (`post-mortem-2510soccerboy.md`) is due today** per yesterday's commitment — flagged in action items.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (0 sends attempted)
- **Pipeline status:** `POST /api/admin/drip-run` → curl exit 28 (timeout), HTTP 000 at **≥90s** (probed at -m 90 ceiling). Initial probe at -m 50 also hit ceiling at 50.022s. **Today's true hang duration is unbounded above 90s.**
- **Hang duration trend (the alarm is the second derivative):**
  - Apr 22: 30.062s
  - Apr 23: 35.103s (+5s)
  - Apr 24: 35.103s (flat — possible plateau)
  - Apr 25: 40.047s (+5s)
  - Apr 26: 50.171s (+10s — rate doubled)
  - **Apr 27: ≥90s (+40s minimum — rate quadrupled vs. yesterday, octupled vs. baseline)**
- **What this means.** The +5s/day pattern was an alarm. The +10s yesterday was a louder alarm. Today's jump invalidates the linear-degradation model entirely. We're no longer in a "slowly worsening" regime — we're in either (a) a runaway-retry cascade where each invocation is multiplying timeouts, (b) a downstream service has gone fully unresponsive (vs. slow), or (c) a connection-pool exhaustion that has crossed an unrecoverable threshold. **The single yes/no diagnostic question from yesterday — "does drip-run invoke SMTP synchronously?" — is now even more urgent.** A synchronous SMTP call into a channel where the server is now refusing connections (vs. responding slowly) would explain a step-function jump cleanly.
- **Engineering escalation framing for today:** "The +5s/day worsening became +10s yesterday and ≥+40s today. The next probe may not return at all. Single diagnostic: is the drip-run handler synchronous on SMTP?"
- **`/api/admin/drip-stats`** returned `stats: []` again — `drip_emails_sent` table remains empty after **21 days**. **0 rows ever written. 62 of 62 users have never received a drip email.**
- **Eligibility breakdown (today 2026-04-27, pendingUsers cohort of 20 — unchanged composition from yesterday):**
  - E1 eligible (≥3d): **18 of 20** (unchanged — same 2 newest users still sub-3d)
  - E2 eligible (≥7d): **12 of 20** (was 11; joshdguillemette crossed today)
  - E3 eligible (≥14d): **11 of 20** (unchanged)
  - E4 eligible (≥21d): **8 of 20** (unchanged)
  - E5 eligible (≥30d): **2 of 20** (unchanged)
  - Note: counts derived from a single computation today, no re-typing across reports — addressing yesterday's drift.
- **Today's threshold crossings (1 forecast → 1 confirmed = 100% on a trivial test):**
  - **joshdguillemette@gmail.com** crosses **E2** (signed Apr 19 20:30 UTC → 7d 13.5h at run time). Pattern A — AEW Double or Nothing May 24, now Day 27. **Confirmed.** Forecast streak cumulative: **9-of-9.** Per yesterday's discipline note, this was the easiest possible test (1 user, well-clear of the threshold by hours). **Not claiming methodology validation.**
- **Tomorrow's threshold crossings (Apr 28) — the first non-trivial test of the streak:**
  - **nmcnamee99@gmail.com** crosses **E1** at 11:51 UTC (3d). **But** the user's tracked event (Raptors Game 2) was YESTERDAY. Standard E1 template is wrong shape — see "Post-Event Lifecycle" section below.
  - **taranimeramaro@gmail.com** crosses **E1** at 18:25 UTC (3d). Pattern A+ — Bruno Mars MetLife 3-night cluster, Day 116–120. Standard combined-welcome+E1 with multi-night decision frame is the right template.
  - **2 crossings** in a 6.5-hour window. Not as clean as a 1-crossing day, not as hard as today's was easy. **Confidence: high on both, ±1 day band carried per discipline.**
- **Apr 29 preview:** No threshold crossings predicted (next eligible: dr.altvater at E2 = May 4, dylanbaldy at E2 = Apr 29 if we have correct timestamp — let me re-derive). dylanbaldy signed Apr 15 18:24 → reaches 14d at Apr 29 18:24 → E3 crosses Apr 29. **Adding: dylanbaldy@gmail.com crosses E3 on Apr 29.** (Pattern B — 0 watchlist items.)
- **Apr 30 preview:** Quiet. Next crossing after dylanbaldy is May 1 (charlesteel126 hits E2 at 8d 21h on May 1 ~08:00 UTC — but technically already crosses Apr 30 21:38 UTC if cron run time is late evening). Logging as Apr 30/May 1 boundary.
- **Backlog:** 18 E1 + 12 E2 + 11 E3 + 8 E4 + 2 E5 = **51 emails** owed in pendingUsers cohort (was 50 yesterday, +1 from joshdguillemette E2 crossing today). Plus ~40 graveyard catch-up sends if a post-E5 lifecycle gets built.
- **Post-E5 graveyard:** Still 40 users (users 1–40, all >35d signup, none received any drip email). Counter advances to **Day 21 of cumulative debt**. The "we owe you 5 emails" framing is now structurally indistinguishable from spam if it ever ships — too many emails arriving simultaneously after a long silence will trip every consumer mail provider's heuristic. **The post-E5 catch-up template now needs an additional design constraint: stagger sends, never bunch.**

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged — Day 92 of 100% null-on-add.** **0 of 85 watchlist items have a `target_price`.** No new adds today (still 85 vs. 85 yesterday), so no new null data was generated, but no remediation either. **Three-month milestone: 92 days into a target-price UX bug that prevents any alert from ever firing.**
- **Special call-out: nmcnamee99's Raptors Game 2.** The user signed up Tuesday Apr 25, added one watchlist item with null target, the event happened Sunday Apr 26, and we sent zero communication of any kind. Even if the channel were healthy, **the alert system would have been structurally incapable of notifying them** because target_price was null. The product gap and the channel gap stack — fixing only one wouldn't have helped this specific user.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 85 days** since last organic newsletter signup. Adding 1 day of stagnation to the counter without a plan continues to feel like a P3 we keep reclassifying as P2 to avoid the truth that nobody owns it.

## Platform Context
- Total users: **62** (unchanged — first zero-signup day in 3 days)
- Users today (rolling 24h): **0** (cohort baseline = 0–1/day; today is at the floor of the range)
- Users this week (rolling 7d): **8** (was 9 yesterday — earliest user in the 7d window rolled out)
- Watchlist items: **85** (unchanged — no adds, no removes, including no removal of nmcnamee99's now-past Raptors item)
- Past-dated watchlist items: **30 of 85** (was 29 — Raptors event aged into past-dated overnight; 35.3% of total watchlist is now historical)
- Favorites: 0
- Triggered alerts: 0

---

## The Hang Broke Through 50s — and We Don't Know What That Means Yet

The hang-duration trend through Apr 26 looked like this:

```
30s ─── 35s ── 35s ── 40s ─── 50s ─── 90s+
+5      +0     +5     +10     +40
```

A linear curve becomes a step function. That's a regime change, not a degradation.

**Three competing hypotheses:**

1. **Synchronous SMTP cascade.** The drip-run handler tries to open an SMTP connection, the connection refuses (now actively failing vs. slow-responding), the handler waits the full TCP/connect timeout, and on timeout retries multiple times before erroring. As the SMTP server's failure mode hardens (slow → refuse → unreachable), the connect-timeout cost compounds. **This is consistent with the step jump** — a transition from "slow but successful connection" to "connection refused after waiting full timeout × N retries" would look like exactly this curve. **Test: ask engineering whether nodemailer is invoked from the drip-run request path with `await transporter.sendMail()` or via a queue.**

2. **Database connection pool exhausted.** If each drip-run call holds a DB connection while waiting on SMTP, and the pool size is small (Railway defaults), pool exhaustion would block subsequent invocations on connection acquisition itself. **This is consistent with: the hang grows because the previous invocation's connection hasn't been released.** Test: check pool size and active connection count during a hang.

3. **Downstream service entirely unreachable.** SMTP DNS resolution failing, network egress blocked, Gmail SMTP credentials revoked — all would produce hang-then-error patterns of indeterminate length. Test: read Railway service logs.

**All three are testable in under 10 minutes by engineering. None has been investigated yet.** The diagnostic question has been pending for 21 days.

**A note on what we shouldn't do:** Continuing to probe `/api/admin/drip-run` with longer timeouts to characterize the hang precisely is not useful work. The hang is real, the hang is getting worse, and we have enough data to escalate. Going from 90s to 180s probes burns time without changing any decision. **Stopping the probe escalation today.**

---

## Post-Event Lifecycle — A Template Class We Don't Have

nmcnamee99's Raptors Game 2 happened last night. We have no idea what occurred. Did they go? Did they buy a ticket? At what price? From which source? Did they ever load TicketScan again after the initial signup-and-add motion?

**The right send today is not E1.** Tomorrow's automated E1 firing — assuming the pipeline ever heals — would deliver a "welcome to TicketScan, here's how to set targets" email three days after the event has ended. That's not just useless; it's actively negative signal. The user will read "set a target price for your tracked event" and think "the event was Saturday, what is this." Trust deteriorates immediately.

**What we need: a post-event template class.** Two variants:

### Variant 1: "Did you go? What'd you pay?" — short, survey-shaped
```
Subject: Raptors Game 2 was last night. Two questions.
Preview: We didn't reach you in time. Help us not miss the next one.

Hi —

You added Raptors–Cavs Game 2 to your watchlist on Friday and the game
was last night. We owe you an honest acknowledgment: we didn't send you
a single thing — no welcome, no price update, no tip-off reminder. The
email channel we use for alerts has been down for three weeks and you
caught the worst possible moment to sign up.

Two questions, quick:

  1. Did you end up going?
  2. If yes, what'd you pay (and from which site)?

Just reply — a real person reads these. We're rebuilding the alert
flow specifically because users like you deserve better than what we
shipped this past week.

If you're not going to be tracking other events, no hard feelings —
the unsubscribe link is in the footer.

— TicketScan
```

**Why this is the right template:** It (a) acknowledges the failure without making it about us, (b) asks a question that has answer-or-don't-answer optionality, (c) doesn't pretend the welcome flow ever happened, (d) gives the user permission to leave. The CTA isn't a click — it's a reply. That's correct for a recovery moment.

### Variant 2: "Welcome (the late version)" — for users where we missed the welcome window AND the event window
This is a structurally similar template but for users like jkaiser@weberschool.org (signed Mar 16, NCAA 2nd round event was Mar 21, never received any send). We have ~6 such users in the post-E5 graveyard. **The Viva El Jaripeo post-mortem due today should treat 2510soccerboy as the canonical example and produce this template alongside Variant 1.**

### When to send Variant 1
- ASAP for nmcnamee99 (event was yesterday, the apology cools every hour)
- Pre-staged for any future user whose tracked event passes without us sending anything

**The product fix that makes this template unnecessary** is the same as it's been: deliverability, target_price prompts, post-E5 lifecycle. Until those land, Variant 1 is the apology that has to be standing-ready for the next nmcnamee99-shaped scenario.

---

## Forecast Audit — 9-of-9 Means Less Than It Reads

Today: 1 prediction, 1 hit. Cumulative: 9-of-9. Apparent accuracy: 100%.

**Discipline check:** Today's test was the easiest possible. joshdguillemette signed Apr 19 20:30 UTC. Today's run time was ~10:00 UTC. That's 7d 13.5 hours past signup — 13.5 hours past the 7-day E2 threshold. There is no plausible cron timing that would have missed this crossing. The forecast was a near-tautology.

The streak's accuracy depends entirely on the next test having any difficulty. Tomorrow's two crossings (nmcnamee99 at 11:51 UTC E1, taranimeramaro at 18:25 UTC E1) are also straightforward — both happen mid-day, both well clear of the 3-day threshold, both have clear timestamps. **Confidence high but the test isn't hard.**

**The hard test arrives when we have a crossing predicted within ±2 hours of a daily cron run.** Until then, the streak is technically accurate but methodologically uninteresting. Carry the ±1 day confidence band, but expect to need it.

**One useful observation from today's "easy" test:** The fact that the model can predict joshdguillemette's E2 to the hour means we have enough signal to schedule sends precisely when they'd fire — **if** the channel ever opens. The forecast model is shovel-ready. The blocker is upstream.

---

## Pattern Mix — Holding Yesterday's Recalibration

Yesterday I revised Pattern B share down from "60% modal" to "41% plurality." Today's zero-signup day means no new data either confirms or refutes that. **Holding the 41/40/20 (B/A/A+) split** as the operating assumption.

One subtle confirmation: of the 7 users in the pendingUsers cohort with watchlist intent, 3 are now Pattern A+ (multi-event clusters: tosophiameyer Harry Styles, brigitte.theisen, taranimeramaro Bruno Mars). That's 43% of intent-bearing users. **Pattern A+ is real and persistent, not a one-off cluster.** Template gap remains: we have no Pattern A+ welcome variant in the inventory beyond the ad-hoc digest drafted yesterday for Cubs.

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS (today 2026-04-27)
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **Florence + The Machine** | State Farm Arena, Atlanta | Fri May 1 | **4 days** | tate.sheppard@gmail.com | 43d |
| **Cubs vs Diamondbacks** | Wrigley Field | Fri May 1 | **4 days** | ajvanprooyen@crimson.ua.edu | 4d (post-E1) |
| **Cubs vs Diamondbacks (Kerry Wood Bobblehead)** | Wrigley Field | Sat May 2 | **5 days** | ajvanprooyen | 4d (post-E1) |
| **Bilmuri — Kinda Hard Tour** | The Sylvee, Madison | Sat May 2 | **5 days** | goldy.pec.2012@gmail.com | 16d |
| **Cubs vs Diamondbacks (Cade Horton Tee)** | Wrigley Field | Sun May 3 | **6 days** | ajvanprooyen | 4d (post-E1) |
| **Cubs vs Reds** | Wrigley Field | Mon May 4 | **7 days** | ajvanprooyen | 4d (post-E1) |
| **Cubs vs Reds** | Wrigley Field | Tue May 5 | **8 days** | ajvanprooyen | 4d (post-E1) |
| **Cubs vs Reds** | Wrigley Field | Wed May 6 | **9 days** | ajvanprooyen | 4d (post-E1) |

**8 events. 7 belong to ajvanprooyen. All advanced 1 day deeper into floor-or-past-floor windows since yesterday.** No new events entered the 14-day window today; nmcnamee99's Raptors aged out into past-dated.

### TIER 0 — nmcnamee99 / Raptors / Post-Event Recovery (NEW template class)
**Drafted in full above** in the "Post-Event Lifecycle" section. This is the highest-leverage send for today regardless of channel state. If the SMTP channel comes back today, this ships before any other send including E1s.

### TIER 1 — Florence Day 4 (recovery + decision pressure)
tate.sheppard's Florence has shifted from Day 5 (yesterday) to Day 4 (today). **The window is closing — Day 3 is when the math turns against waiting in arena-scale rooms.** Today is the last clean tactical day before the day-of premium begins loading.

```
Subject: Florence Atlanta — Day 4. Decision day.
Preview: Past Day 3, the math turns against you. Today is the last clean read.

Hi —

🎤 Florence + The Machine — State Farm Arena, Atlanta — Friday, May 1.
   That's 4 days away.

We've been quiet on this — that's on us. Here's what's still actionable:

   • Day 4 (today)  → last day inside the floor's outer band
   • Day 3 (tomorrow) → stabilization breaks; resale sellers brace
   • Day 2–1        → day-of premium loads on bid-side; waiting backfires
   • Day 0          → tip-off premium peaks

Translation: today is your last clean read. Past tomorrow, the price you
see is increasingly polluted by bid-side urgency.

ONE move tonight:

  Run the three-source compare today. Whichever of Ticketmaster,
  SeatGeek, or StubHub has the lowest current floor — that's your
  buy or your reference for "is tomorrow better."

If you decide to wait until Wednesday, set a target 5–7% below
today's cheapest. (10% is too aggressive at Day 4 — the floor doesn't
typically drop that much in 2 days.)

[CTA: Compare Florence Atlanta → ticketscan.io/watchlist]

— TicketScan
```

**Why the CTA is /watchlist not /compare?event=...** — applying yesterday's CTA simplification rule. The user's event is in their watchlist; route to /watchlist.

### TIER 1 — Cubs Game 1 Day 4 + ajvanprooyen post-E1 (high-leverage continuation)
ajvanprooyen crossed E1 yesterday. Today they're 4 days post-signup. Game 1 is now Day 4 (was Day 5 yesterday — yesterday was the optimal send moment). This is the second-best send opportunity for this user.

```
Subject: Cubs Game 1 is Friday. Time to decide.
Preview: 4 days out. The floor is here. Tomorrow it starts to thin.

Hi —

Quick update on your Cubs homestand — ranked by send-priority order:

  Game 1 (May 1, Fri, 4 days)  → DECISION DAY. Buy or commit to a target.
  Game 2 (May 2, Sat, 5 days)  → Inside floor. Set a target 8–12% below.
  Game 3 (May 3, Sun, 6 days)  → Front-edge of floor. Set target.
  Game 4 (May 4, Mon, 7 days)  → Day-7 entry — optimal target-set day.
  Game 5 (May 5, Tue, 8 days)  → Pre-floor. Watch + set target.
  Game 6 (May 6, Wed, 9 days)  → Pre-floor. Quietest night = best value.

What changed since yesterday: Game 1 moved from "inside floor" to "decision
day." Past Friday morning, you're paying a day-of premium whether you mean
to or not.

For the weeknight games (Mon/Tue/Wed): historically the deepest floors
on the homestand. The Kerry Wood Bobblehead (Sat) and Cade Horton Tee
(Sun) days will hold value — the giveaway crowd doesn't price-shop the
same way.

ONE move tonight:

  Decide on Game 1. Three-source compare, lock the price.

[CTA: View Your Watchlist → ticketscan.io/watchlist]

— TicketScan
```

### TIER 1 — Bilmuri Day 5 (past optimal small-room window)
goldy.pec.2012's Bilmuri — Day 7 was peak (Apr 25), Day 6 was second-best (Apr 26), Day 5 today is **past the small-room floor optimum**. The honest framing matters: this isn't "buy now," it's "the best day was 2 days ago, here's what we can still do."

```
Subject: Bilmuri at The Sylvee — Day 5. Past peak, here's the play.
Preview: The cleanest entry was Friday. Today is still inside the floor.

Hi —

🎸 Bilmuri — The Sylvee, Madison — Saturday, May 2 (5 days away).

Honesty first: the cleanest entry day for The Sylvee was Friday (Day 7).
We didn't send Friday. That's on us — the email channel has been down
and we're rebuilding it.

Here's what's still true today:

   • Day 7 (Friday) → peak floor — first day of the small-room window
   • Day 6 (Saturday) → runner-up, still inside the floor
   • Day 5 (today)  → floor begins to thin; small dips possible
   • Day 4–3        → inventory dries faster than at arenas
   • Day 2–1        → no late-window savings; day-of loads early

Translation: today is still good, just not great. Past Wednesday,
the math turns against you. Small rooms (~1,800 seats) don't reward
patience the way arenas sometimes do.

ONE move tonight:

  Run the three-source compare. Lock today's number as your reference.
  If Wednesday's cheapest is more than 5% above today's, buy today.

[CTA: View Your Watchlist → ticketscan.io/watchlist]

— TicketScan
```

### TIER 2 — joshdguillemette E2 / AEW Double or Nothing (today's threshold cross)
joshdguillemette crossed E2 today. Pattern A — single event tracker. AEW Double or Nothing May 24 = Day 27. Pre-floor for any wrestling event. **The combined-welcome+E2 plus single-event tactical send is the right shape.** AEW pricing is more retail-like than concert pricing — the floor opens later and Tier 2/3 sections see late drops, so the "set a target now" framing has more shelf life than for concerts.

```
Subject: AEW Double or Nothing — Day 27. Set the target tonight.
Preview: Wrestling pricing curves are different. Here's where to set up.

Hi —

🤼 AEW Double or Nothing — Louis Armstrong Stadium, Flushing — May 24.
   That's 27 days away.

You added this 7 days ago. Wrestling pricing behaves differently than
concerts or sports — here's the curve to expect:

   • Day 30–20 → upper bowl floor stable; lower bowl premium holds
   • Day 19–10 → first floor dip on Tier 2/3 sections (mid-bowl)
   • Day 9–4   → secondary floor opens — usually best entry window
   • Day 3–0   → Tier 1 floor only opens at the very end (or never)

Translation: today is too early to buy lower bowl, but the right time
to set a target on Tier 2/3 seats. The floor hasn't formed yet —
let the system find it for you.

ONE move tonight:

  Set a target price on your AEW item — try 12–15% below today's
  cheapest Tier 2/3 listing. We'll ping when the floor crosses it.

About us: TicketScan compares prices across Ticketmaster, SeatGeek, and
StubHub side-by-side, and emails you when a tracked event drops below
your target. Quick context: our email channel has been recovering
this past week, so if alerts feel slow over the next few days, that's
why — not because nothing's moving.

[CTA: View Your Watchlist → ticketscan.io/watchlist]

— TicketScan
```

### Pre-staging for Apr 28 — taranimeramaro (Bruno Mars MetLife multi-night)
taranimeramaro crosses E1 tomorrow. Pattern A+. Combined welcome+E1 with multi-night decision frame.

```
Subject: Bruno Mars MetLife — Aug 21 vs Aug 22 vs Aug 25. The data on each.
Preview: A 3-night stand has a "best night" — here's how to find it.

Hi —

Welcome to TicketScan. You added 3 Bruno Mars MetLife nights to your
watchlist on Friday — that's a multi-night decision pattern, which has
its own pricing math.

The 3 nights:
   • Thursday Aug 20 (NOT in your watchlist — worth checking)
   • Friday Aug 21 (in your list)
   • Saturday Aug 22 (in your list)
   • Tuesday Aug 25 (in your list)

Stadium tour multi-night dynamics:
   • Friday + Saturday carry the heaviest weekend premium
   • Tuesday is historically the deepest-floor night of any multi-stop
   • The first night of a stand often clears earliest (sellers de-risk)

Day 116–120 is too early for tactical buys — the floor hasn't formed.
This is target-setting territory.

ONE move tonight:

  Set a target on each of the 3 nights. Tuesday Aug 25 should have
  the deepest target (try 18–22% below today's cheapest). Friday
  and Saturday should be tighter (12–15% below). We'll ping when
  any of them hits.

If you're flexible on which night, the math is going to favor Tuesday.

[CTA: View Your Watchlist → ticketscan.io/watchlist]

— TicketScan
```

### Pre-staging for Apr 28 — nmcnamee99 (post-event recovery, NOT standard E1)
**Use Variant 1 from the Post-Event Lifecycle section above.** Standard E1 template will ship cron-default if nothing intervenes — that needs to be blocked. **Action item: drip-run handler should suppress E1 send if the user's only watchlist item is a past-dated event.** Adding to action items.

### Welcome Pattern B Variant — for ggri73, awwhittington, mark.murdock (still owed from yesterday)
Template unchanged from yesterday's draft. Three individual sends, each with reply-to-email primary CTA.

### Welcome Pattern A Combined — charlesteel126 (Bruno Mars Ohio, Day 23)
Template unchanged from yesterday's draft. Day 23 today (was 24 yesterday). Subject line A/B remains valid; recommended subject is "Bruno Mars Ohio in 23 days. Day 23 is too early to buy. Set up the alert." (B variant adjusted for new day count).

### Events Entering 15–30 Day Window (tomorrow's preview)
- **Bruno Mars Soldier Field (konman87)** — Day 19 tomorrow (was 20 today). **konman87 is post-E5 graveyard.** No template addresses them. Catch-up template gap actively losing value daily.
- **Bruno Mars Ohio Stadium (charlesteel126)** — Day 22 tomorrow. Send today (combined welcome + E1 still pending channel).
- **AEW Double or Nothing (joshdguillemette)** — Day 26 tomorrow. Combined welcome + E2 above is the right send today.

### World Cup Dormant High-Intent (still no movement, still no template)
- **pete.uzelac77+ticketscan@gmail.com** — 16d on-platform. E3 crossed 2 days ago. 4 WC items + 2 Darts.
- **laye.aurelien@wanadoo.fr** — 25d. E4-eligible since 4 days ago. 2 Shakira items.
- **blubberboi@yahoo.com** — 17d. E3 crossed 3 days ago. Ed Sheeran SoFi Aug 8 (104 days out).

The WC-specific lifecycle gap (these users are tracking events 60–90 days out, not the standard 0–30 window) remains uncovered. **Adding to action items as a deferred but real cohort.**

### Viva El Jaripeo Recovery — STANDALONE ARTIFACT DUE TODAY
**`/marketing-agents/output/email/post-mortem-2510soccerboy.md` was committed for today's delivery in yesterday's report.** Per yesterday's plan, today's task adds:
1. The 89-day lifecycle right-shape proposal
2. The three product fixes that prevent recurrence (target_price prompt, post-E5 lifecycle, deliverability monitoring)
3. The recovery survey ready-to-send
4. Optional: Viva El Jaripeo event-day price history from Ticketmaster

**Status:** Not yet drafted. **Action item P0 #2.** This artifact also subsumes the new Variant 1 post-event template (it's the same shape) — so the template inventory and the post-mortem artifact converge.

---

## Subject Line A/B Tests

### TIER 0 — nmcnamee99 post-event recovery (NEW template class — first A/B for this shape)
- **A:** `Raptors Game 2 was last night. Two questions.`
- **B:** `We didn't reach you in time. About last night's Raptors game.`
- **Hypothesis:** A is question-shaped (matches the body's reply-CTA). B is apology-shaped (matches the body's acknowledgment). **Recommend A.** Question-shaped subjects increase reply rates by setting expectation in the open. B's apology framing may actually depress opens — recipients pattern-match "we failed you" subjects to spam or guilt-marketing. The honesty in A is implicit ("two questions" implies "we don't know what happened").

### Florence — Day 4 (decision-day pressure)
- **A:** `Florence Atlanta — Day 4. Decision day.`
- **B:** `Florence Atlanta — Friday. The floor closes tomorrow.`
- **Hypothesis:** A leads with day-count and a verb. B leads with the actual date and a closing-window claim. **Recommend B.** "Friday" is more concrete than "Day 4" for a recipient who hasn't been counting. "The floor closes tomorrow" is a sharper urgency primitive than "decision day." Plain calendar > internal-vocabulary day-counting for the urgency-to-open trade.

### Cubs Game 1 — Day 4 (Friday is in the subject)
- **A:** `Cubs Game 1 is Friday. Time to decide.`
- **B:** `Cubs–Diamondbacks Friday. Game 1 = decide tonight. Games 2–6 = set targets.`
- **Hypothesis:** A is short and verb-led. B is information-dense but answers the question "what about my other 5 games?" in the subject itself. **Recommend B** for ajvanprooyen specifically because the cohort is Pattern A+ — they're managing 6 events, not 1. The subject should answer "what does this email tell me about all of them" not just "what about Game 1." For a Pattern A user, A would be correct.

### Bilmuri — Day 5 (past peak, recovery-honest)
- **A:** `Bilmuri at The Sylvee — Day 5. Past peak, here's the play.`
- **B:** `Bilmuri Saturday. Friday was the best day. Here's what's left.`
- **Hypothesis:** A is the standard tactical subject with honest second clause. B is the "yesterday-vs-today" honesty pattern — same shape I rejected for Bilmuri yesterday in favor of A. **Today, switch to recommend B.** Yesterday I argued B "does too much truth-telling for a first detailed engagement email." But goldy.pec.2012 hasn't received any email from us in 16 days — they're not having a "first detailed engagement," they're having a "we finally showed up" moment. The honest framing matches the user's actual experience. **A is for users who've been engaged. B is for users we're meeting late. Apply B-shape to all post-E3 silent-cohort sends.**

### AEW Double or Nothing — joshdguillemette E2 (today's threshold cross)
- **A:** `AEW Double or Nothing — Day 27. Set the target tonight.`
- **B:** `AEW May 24. Wrestling pricing is different. Here's the setup.`
- **Hypothesis:** A leads with the verb (set). B leads with the differentiator (wrestling pricing is different). **Recommend B.** This is a Pattern A user receiving their second drip email — the "wrestling-specific" angle is the surprise that earns the open. "Set the target tonight" is a generic CTA primitive that works for any single-event send; "wrestling pricing is different" only fires for this category. Specificity wins on subject lines for engaged users.

### Bruno Mars MetLife multi-night — taranimeramaro (Apr 28 send pre-stage)
- **A:** `Bruno Mars MetLife — Aug 21 vs Aug 22 vs Aug 25. The data on each.`
- **B:** `Welcome — and you're choosing between 3 Bruno Mars MetLife nights.`
- **Hypothesis:** A is decision-led (the user added 3 nights = they're comparing). B is welcome-led. **Recommend A.** Yesterday I held the same recommendation; today I'm reconfirming because the cohort signal is unambiguous: a user who adds 3 nights of the same artist at the same venue is asking "which night?" — the subject should answer it.

### Pattern B welcomes — for ggri73, awwhittington, mark.murdock (still pending)
**Yesterday's recommendation stands: A — `Welcome. What are you trying to track?`** No need to re-debate; nothing about today's data shifts the recommendation.

### Recovery survey (Viva El Jaripeo)
- **A:** `You went to Viva El Jaripeo. We failed you. Two questions.`
- **B (new alternative drafted today):** `Viva El Jaripeo was 89 days ago. We never sent a thing. Why not?`
- **Hypothesis:** A leads with the user's action (went) and our failure. B leads with the time-since-event and reframes "what should we have sent" as a question to the user. **Recommend A.** B is too clever — it asks the user to do diagnostic work for us, which inverts the apology. A keeps the apology clean and the questions specific. **Locking A for the standalone artifact today.**

### CTA Review (today's templates)
- nmcnamee99 / Raptors recovery → reply-to-email primary CTA, no URL ✓
- Florence → `ticketscan.io/watchlist` ✓ (per CTA simplification rule)
- Cubs homestand → `ticketscan.io/watchlist` ✓
- Bilmuri → `ticketscan.io/watchlist` ✓
- AEW joshdguillemette → `ticketscan.io/watchlist` ✓
- Bruno Mars MetLife taranimeramaro (pre-stage) → `ticketscan.io/watchlist` ✓
- Welcome Pattern B → `ticketscan.io/dashboard` + reply-to-email ✓
- charlesteel126 (Bruno Mars Ohio) → `ticketscan.io/watchlist` ✓
- 2510soccerboy recovery survey → reply-to email ✓

**Pattern continues holding:** every send today routes to `/watchlist`, `/dashboard`, or reply-to-email. No `?artist=X` or `?event=Y` URLs in flight. **The CTA simplification rule from yesterday is now operationally complete — flagging for permanent adoption in the template library.**

---

## Action Items

### P0 — Critical
1. **SMTP / drip pipeline diagnostic — Day 21, ESCALATED.** Hang jumped from 50.171s to ≥90s in 24 hours — a +40s minimum step versus +5–10s/day baseline. **The degradation is no longer linear.** Three competing hypotheses (synchronous SMTP cascade, DB pool exhaustion, downstream service unreachable) — all testable in <10 min by engineering. **Single diagnostic question still pending: is drip-run synchronous on SMTP?** Add to today's escalation: "the next probe may not return at all."
2. **Viva El Jaripeo post-mortem standalone artifact — DUE TODAY.** Per yesterday's commitment. Add: 89-day lifecycle proposal, 3 product fixes, ready-to-send recovery survey (Subject A locked), optional event-day price data, **plus Variant 1 post-event template** (the artifact and the new template class converge).
3. **TIER 0 nmcnamee99 post-event send.** Single-purpose recovery template drafted in full above. **Cannot ship — channel offline.** Each hour past the event reduces the apology's potency. **If channel reopens today, this ships before any other send including E1 backlog.**
4. **Block standard E1 from firing for nmcnamee99 on Apr 28.** Drip-run handler should suppress E1 if user's only watchlist item is a past-dated event. Without this guard, the cron will fire a "set targets for your tracked event" email three days after the event ended. **This is a small product change; flag to engineering as part of the diagnostic ping.**
5. **Target-price UX (Day 92).** 0 of 85 watchlist items have target. Three-month milestone — passing this without a fix is a compounding embarrassment. Restated unchanged from yesterday.
6. **5-user E1 wave deliverables (Apr 26 — still owed).** Templates drafted, channel still offline, all queued. No new arrivals today, so the backlog count is unchanged: 4 distinct templates owed (Cubs combined, Bruno Mars Ohio combined, Pattern B ×3 individual sends).

### P1 — High
7. **CTA simplification rule — promote from "adopt" to "default."** Operational result today: 100% of drafted templates use `/watchlist`, `/dashboard`, or reply-to-email. The `?artist=X` / `?event=Y` URL verification flag has been sidestepped for 5 days running with zero send-quality cost. **Make this the template library default; remove URL-construction options from new templates.**
8. **Welcome backlog — 5 users still pending** (nicklib253, joshdguillemette E2 today, dr.altvater, brigitte.theisen retroactive A+, plus the 2 newest Apr 28-due). joshdguillemette's E2 send drafted above; the rest carried over from yesterday.
9. **Today's send-priority ranking** (in case the channel reopens within the day):
   1. nmcnamee99 post-event recovery (Variant 1)
   2. Florence Day 4 decision-day (tate.sheppard)
   3. Cubs combined Day 4 (ajvanprooyen)
   4. Bilmuri Day 5 (goldy.pec.2012)
   5. AEW combined welcome+E2 (joshdguillemette)
   6. Pattern B ×3 (ggri73, awwhittington, mark.murdock)
   7. Bruno Mars Ohio combined (charlesteel126)
10. **Pattern A+ template gap.** No formal Pattern A+ welcome variant in the library — only ad-hoc digests for Cubs (yesterday) and Bruno Mars MetLife (today). **Pattern A+ is 43% of intent-bearing users in the cohort; it deserves a permanent template, not per-user one-offs.**
11. **Forecasting discipline — 9-of-9 cumulative is a streak earned on easy tests.** Tomorrow's 2-crossing day is also straightforward. The hard test is when a crossing predicts within ±2 hours of cron run time. Until then, carry the streak humbly. **Don't let the streak become a substitute for engineering rigor on edge cases.**
12. **The "yesterday-vs-today" honesty subject pattern.** Surfaced from today's Bilmuri A/B re-decision: this pattern is the right shape for any user we're meeting late (post-E3 silent cohort) but wrong for users we've been engaged with. **Codify: B-shape "yesterday was better, today is still good" for late-meeting; A-shape "today is X" for ongoing relationships.** Adding to template-design heuristics.

### P2 — Medium
13. **Newsletter growth — 85-day stall.** Same status as yesterday. No homepage A/B in flight, no plan, no owner. Re-flagging as P2 even though it likely deserves P1.
14. **Past-dated watchlist items — 30 of 85 (35.3%).** Up 1 from yesterday (Raptors aged out). Same product gap (no UI to retire past events). **Compounding visual debt** in user-facing watchlist views.
15. **Watchlist digest endpoint — still manual.** Today's report has 6 distinct send templates hand-composed. **At ≥3 active campaigns this becomes a real bottleneck — restated from yesterday with the count update.**
16. **konman87 + post-E5 catch-up template.** Bruno Mars Soldier Field is now Day 19 tomorrow. Post-E5 catch-up is now actively losing tactical-event opportunities, not just welcome opportunities.
17. **World Cup-specific lifecycle gap.** Three users (pete.uzelac77, laye.aurelien, blubberboi) tracking events 60–105 days out — well outside the 0–30 day tactical window the standard drip schedule covers. **Adding as a deferred but real cohort. The 5-email drip schedule never fires the right tactical content for a 90-day-out event.**

### NEW today
18. **Hang-duration probe escalation — STOPPED.** Going from 90s to 180s probes characterizes the hang precisely without changing any decision. The data we have is sufficient to escalate. **Stop probing; engineering owns next move.**
19. **Post-event template class — formalized.** Variant 1 (recovery survey) drafted. Variant 2 (late welcome) is the Viva El Jaripeo work item due today. **This becomes a permanent template class, not a one-off for nmcnamee99.** Future: the standard drip handler should detect post-event-only watchlist users and ship Variant 1 instead of E1 automatically. (Linked to action item #4.)
20. **Subject-line shape heuristic.** Codifying from today's Bilmuri re-decision: late-meeting subjects use "yesterday was better, today is still good" honesty pattern; ongoing-relationship subjects use "today is X" tactical pattern. (Linked to action item #12.)
21. **Hang-duration model invalidated.** The "+5–10s/day linear" model is broken. New tracking metric: the hang regime (slow-but-completing → step-function-jumping → unreturning). Today is "step-function." **If tomorrow's probe doesn't return at all (HTTP 000 with curl exit 28 at any timeout), the regime has moved to "unreturning" and the diagnostic urgency moves from P0 to existential.**

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **85-day stall** (+1).
- **Drip pipeline:** Day 21. 0 sends ever. 62 of 62 users have never received a drip email. **Hang duration: 30s → 35s → 40s → 50s → ≥90s. The +5–10s/day linear-degradation model has broken; today is a step-function jump.** True hang upper bound unknown; probe escalation halted at 90s.
- **Price alerts:** 0 ever triggered. **0 of 85 watchlist items have target prices (Day 92, three-month milestone).**
- **User growth:** **0 new users today** (first zero-signup day in 3 days). Total: 62. Rolling 7d: 8 (was 9). The Apr 25 two-user wave was discrete, not a cadence shift, exactly as forecast.
- **Watchlist:** 85 items (unchanged). **30 past-dated (35.3%)** — Raptors event aged out today.
- **Threshold crossings today:** **1 (joshdguillemette E2). Forecast hit. Cumulative streak: 9-of-9.** Test was trivial — not claiming methodology validation.
- **Threshold crossings tomorrow (Apr 28):** **2 simultaneous E1** — nmcnamee99 11:51 UTC, taranimeramaro 18:25 UTC. **First E1 wave with no Pattern B variant required** (both came with watchlist intent). **But:** nmcnamee99's tracked event is past — standard E1 is wrong shape; needs Variant 1 post-event template instead.
- **Threshold crossings Apr 29:** 1 (dylanbaldy E3 at 18:24 UTC, Pattern B).
- **Events entering tactical windows today:** Florence Day 4 (decision day), Cubs Game 1 Day 4 (decision day), Bilmuri Day 5 (past peak), AEW Day 27 (target-set window opens), Cubs Games 2–6 (4–9 day spread).
- **Today's signature event:** **The hang duration step-function jump.** Zero sends, zero new users, zero subscriber movement — but the pipeline metric we've been tracking for a week regressed by a factor of ~2× in 24 hours. The ops story dominates the marketing story today.
- **Today's signature non-event:** **The Raptors Game 2 was yesterday and we sent nothing.** This becomes the canonical "missed-window" data point alongside Viva El Jaripeo. The Variant 1 post-event template is born from this scenario.
- **Forecast accuracy:** 9-of-9 cumulative. Tomorrow's 2-crossing test is straightforward. Hard test still pending.
- **Cohort composition:** Pattern A+ confirmed at 43% of intent-bearing users (3 of 7) — not a one-off. Pattern B mix held at 41% plurality from yesterday's recalibration; no new data to update.
- **Email channel status:** Day 21. Zero emails of any kind have ever reached a user. The hang-duration trend is no longer linear — it's a step-function regime change.
- **The single most useful observation today:** the hang's degradation curve invalidated its own model. We were tracking "+5–10s/day" as the alarm; today it broke through that into "+40s minimum/day," and the next probe may not return at all. The investigation can't keep waiting for the slope to look bad enough — the slope just stopped being interpretable.
- **Three reframings from today:** (1) the hang regime is now step-function not linear — "rate of degradation" stopped being the right metric; (2) the post-event template class is real and permanent — Variant 1 for fresh misses, Variant 2 for stale misses; (3) the 9-of-9 forecast streak is methodologically uninteresting until a crossing falls within ±2h of cron run time, which hasn't happened yet.
