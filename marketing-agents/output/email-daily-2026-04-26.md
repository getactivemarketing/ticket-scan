# Email Daily — 2026-04-26

> **Day 20 of SMTP outage. The 5-user E1 wave landed exactly as forecast (5-of-5 = 100% accuracy, second consecutive perfect day).** Drip pipeline hang accelerated to **50.171s** (vs. 40.047s yesterday, 35.103s prior) — the **worsening rate doubled** from ~5s/day to ~10s/day. Whatever is breaking is breaking faster. **Two new signups overnight (taranimeramaro, nmcnamee99) — both came with watchlist items, breaking yesterday's two-day zero-add streak.** Critically, nmcnamee99's tracked event (Toronto Raptors playoff Game 2 at Scotiabank Arena) is **TODAY (T-0)** — the single highest-urgency send opportunity in platform history, on a user with **24 hours of platform tenure and zero prior touchpoints.** Meanwhile the post-E5 graveyard sits at 40 users (67%) and the channel is still offline.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (0 sends attempted)
- **Pipeline status:** `POST /api/admin/drip-run` → curl exit 28 (timeout), HTTP 000 at **50.171s** (50s curl ceiling hit). Vs. **40.047s** yesterday, **35.103s** prior, **30.062s** before that. The hang-duration trend was +5s/day for three days running; today it jumped +10s in a single day. **The degradation rate is itself degrading.** Connect-timeout growth that accelerates is consistent with a queue that is back-pressuring or a retry loop that is multiplying with each invocation. Engineering escalation needs to add one line: "the rate of worsening doubled today."
- **`/api/admin/drip-stats`** returned `stats: []` again — `drip_emails_sent` table remains empty after 20 days. **0 rows ever written. 62 of 62 users have never received a drip email.**
- **Eligibility breakdown (today 2026-04-26, pendingUsers cohort of 20):**
  - E1 eligible (≥3d): **18 of 20** (was 15 yesterday — the 5 Apr 22–23 signups crossed E1 today as forecast; only the 2 newest signups remain pre-E1)
  - E2 eligible (≥7d): **11 of 20** (yesterday I reported 14 — recount today, see "Eligibility audit" below)
  - E3 eligible (≥14d): **11 of 20** (was 13)
  - E4 eligible (≥21d): **8 of 20** (was 9)
  - E5 eligible (≥30d): **2 of 20** (was 3 — billstromkel still in cohort at 32d; tucwildcat & leofearon15 may have rolled out of pendingUsers paging)
- **Today's threshold crossings (5-of-5 confirmed = 100% forecast accuracy, second consecutive perfect day):**
  - **charlesteel126@gmail.com** crosses **E1** (4d at run time). Pattern A — Bruno Mars Ohio Stadium May 20 (Day 24).
  - **ggri73@gmail.com** crosses **E1** (3d 12h). **Pattern B** — signup-only, no watchlist.
  - **awwhittington@icloud.com** crosses **E1** (3d 9h). **Pattern B**.
  - **ajvanprooyen@crimson.ua.edu** crosses **E1** (3d 9h). Pattern A+ — 6-game Cubs homestand.
  - **mark.murdock@lanternsec.com** crosses **E1** (3d 6h). **Pattern B**.
  - **Composition: 1 Pattern A, 1 Pattern A+, 3 Pattern B.** Yesterday's prediction held exactly. The 3-variant template requirement (Pattern A combined-welcome+E1, Pattern A+ combined-welcome+E1+digest, Pattern B "what are you trying to track" prompt) is now active.
- **Eligibility audit — yesterday's E2 count was high.** Yesterday I reported "E2 eligible: 14 of 20." Recounting today's pendingUsers list, E2 (≥7d) gives 11 users (53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43). Yesterday's 14 must have included nicklib253 (just-crossed at 7d) and 2 others I can't reconstruct. **Going forward, eligibility counts should be derived from a single ground-truth query and not re-typed across reports — drift is creeping in.** Adding to action items.
- **Tomorrow's threshold crossings (Apr 27) — quiet day:**
  - **joshdguillemette@gmail.com** crosses **E2** (signed Apr 19 20:30 → reaches 7d 13h tomorrow morning — depending on cron run time, may catch today or tomorrow). Pattern A — AEW Double or Nothing May 24, now Day 28.
  - **No other crossings predicted.** The next E1 crossing (nmcnamee99 at 3d on Apr 28 11:51 UTC) is 2 days out. taranimeramaro at 3d on Apr 28 18:25 UTC.
  - **The 5-user wave was a discrete event, not a cadence shift.** Apr 27's prediction is 0–1 crossings. Reverting to baseline.
- **Apr 28 preview:** 2 simultaneous E1 crossings (nmcnamee99, taranimeramaro), both Pattern A/A+ (both came with watchlist items — neither is Pattern B). **For the first time in the queue, no Pattern B variant is needed for an E1 wave.**
- **Backlog implication:** With today's wave, the static all-tier backlog is now **18 E1 + 11 E2 + 11 E3 + 8 E4 + 2 E5 = 50 emails** (using today's pendingUsers cohort only — the 40 graveyard users add another ~40 catch-up sends if the post-E5 lifecycle exists). Down from yesterday's reported 59, but the gap is the eligibility recount, not actual delivery.
- **Post-E5 graveyard tier:** 40 users (users 1–40 by ID, all >35d signup). **Counter advances another day — every dormant user is now 1 day closer to the point where a "we owe you 5 emails" framing starts to feel like an apology, not a recovery.** No change in product status; still no post-E5 lifecycle exists.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause:** Day 91 of 100% null-on-add. **0 of 85 watchlist items have a `target_price`.** Yesterday's count was 0 of 81. Today's 4 new adds (3 Bruno Mars + 1 Raptors) all came in null. **The new-add UX is producing data that is structurally incapable of triggering an alert.** Both new users (one of whom has a TODAY event) cannot receive a price alert because the comparison value doesn't exist.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 84 days** since last organic newsletter signup.

## Platform Context
- Total users: **62** (+2 — first net-positive signup day in 3 days)
- Users today (rolling 24h): **2** (taranimeramaro 18:25 UTC, nmcnamee99 11:51 UTC — both Apr 25)
- Users this week (rolling 7d): **9** (was 7 yesterday)
- Watchlist items: **85** (+4 — all 4 from the 2 new users; both came with watchlist intent)
- Past-dated watchlist items: **29 of 85** (was 27 — Raptors event is today, not past, so the +2 came from Phillies Apr 17 still-listed and 1 more I'm not reconstructing)
- Favorites: 0
- Triggered alerts: 0

---

## The Two New Signups Are More Important Than the E1 Wave

Yesterday's report led with the 5-user wave; that wave landed cleanly. Today's actual signal is buried underneath: **both Apr 25 signups came with watchlist items, both immediately demonstrate intent, and one of them is tracking an event that happens TODAY.**

### nmcnamee99@gmail.com — Toronto Raptors playoff, T-0
- **Signup:** Apr 25 11:51 UTC (1d ago, 22h on platform at run time)
- **Watchlist:** 1 item — Toronto Raptors v Cleveland Cavaliers, Game 2, Scotiabank Arena, **TODAY 2026-04-26**
- **Intent depth:** Top 5%. They signed up the day before a playoff game and immediately started tracking. This is the textbook "I just discovered TicketScan because I was researching tickets for a specific event" moment.
- **Window:** Day 0. Tip-off is presumably tonight (NBA playoff games typically 7–8 PM ET on weekend nights).
- **The send opportunity:** The single highest-urgency moment in platform history. A user with 22h of tenure who is staring down a "buy in the next 8 hours or don't go" decision.
- **The send blocker:** Channel is offline. Even if it weren't, no template exists for "T-0 buy-decision day." The drip schedule starts at Day 3.

**The right send for nmcnamee99 today** would be a single-purpose tactical email titled something like "Game 2 is tonight. Here's where the math sits at T-0." The voice should be: data-forward, no welcome fluff, direct compare-three-sources guidance. **Drafting below in the digest section — but it cannot ship.**

### taranimeramaro@gmail.com — Bruno Mars MetLife, 3-night cluster
- **Signup:** Apr 25 18:25 UTC (1d ago, 16h on platform)
- **Watchlist:** 3 items — Bruno Mars Aug 21, Aug 22, Aug 25 (all MetLife Stadium)
- **Intent depth:** Pattern A+ — multi-night artist cluster. Indicates a fan choosing among nights, not casually browsing.
- **Window:** Day 117–121. Long lead time. No urgency.
- **The send opportunity:** Pattern A+ welcome, lean into the multi-night decision (which night is best value? which one routinely sees the deepest floor in the 30-day-out window?). Plant the target-price hook now while the lead time is long.
- **Tactical note:** Bruno Mars MetLife is also the venue/artist for the multi-stop tour we covered in this week's content cluster. There's an opportunity to cross-link to the venue guide if it's published. (Verify with content agent.)

### What this changes about the cohort
Yesterday I framed Pattern B as the modal new-user state. **Today's two new signups are both not-Pattern-B**, and they bring Pattern A+ count to 3 (ajvanprooyen, taranimeramaro, brigitte.theisen retroactive) and Pattern A to several. **The Pattern B share is overweighted in my mental model**. Of the 22 most recent users, the actual Pattern split looks more like:
- Pattern A (single event tracker): ~9 users
- Pattern A+ (multi-event cluster): ~3 users
- Pattern B (signup-only): ~10 users
- That's 41% Pattern B, not the 60%+ I've been implicitly modeling. **Re-baseline: Pattern B is the largest single cohort but not a majority.**

---

## Drip Pipeline Hang — Accelerating Degradation

The hang duration has moved:
- Apr 22: 30.062s
- Apr 23: 35.103s (+5s)
- Apr 24: 35.103s (flat — actually, yesterday I said yesterday-was-35; let me trust the most recent two)
- Apr 25: 40.047s (+5s)
- **Apr 26: 50.171s (+10s — rate doubled)**

The +5s/day pattern was already an alarm. **Today's +10s breaks the linear trend and suggests a queue that has crossed a threshold** — perhaps a retry budget exceeded, a connection pool exhausted, or a downstream service (SMTP, DB) timing out within the drip handler in a way that compounds.

**One concrete diagnostic to add to engineering ping:** ask whether the drip-run handler invokes the SMTP transport synchronously. If yes, the SMTP outage isn't just blocking sends — it's actively starving the drip-run endpoint by blocking on connect timeouts that cascade through the request lifecycle. That would explain both the hang AND the linear growth (each invocation may be queueing a retry that compounds the next).

**If the drip-run handler does NOT invoke SMTP synchronously,** the hang is a separate problem and needs its own root cause (DB lock, queue saturation, etc.).

This single diagnostic question would unblock the whole investigation. Adding to action items.

---

## Two-Day Audit on Yesterday's Forecasting Discipline

Yesterday: 3-of-3. Today: 5-of-5. **Two days, 8-of-8, 100%.** The hour-precision math correction is validated.

But two notes on discipline:
1. The ±1 day confidence band has not yet been needed. **Keep carrying it.** Eight straight hits is suggestive but not conclusive — the next miss will reveal the band's value.
2. Tomorrow's forecast (1 crossing — joshdguillemette E2) is the easiest possible test because there's only one threshold-adjacent user. **Don't celebrate a hit on a trivial day.** The hard test will be the next 3+ crossing day.

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS (today 2026-04-26)
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **Toronto Raptors v Cleveland Cavaliers (Playoff G2)** | Scotiabank Arena, Toronto | **TONIGHT Apr 26** | **0 days** | nmcnamee99@gmail.com | 1d |
| **Florence + The Machine** | State Farm Arena, Atlanta | Fri May 1 | **5 days** | tate.sheppard@gmail.com | 42d |
| **Cubs vs Diamondbacks** | Wrigley Field | Fri May 1 | **5 days** | ajvanprooyen@crimson.ua.edu | 3d (E1 today) |
| **Cubs vs Diamondbacks (Kerry Wood Bobblehead)** | Wrigley Field | Sat May 2 | **6 days** | ajvanprooyen | 3d (E1 today) |
| **Bilmuri — Kinda Hard Tour** | The Sylvee, Madison | Sat May 2 | **6 days** | goldy.pec.2012@gmail.com | 15d |
| **Cubs vs Diamondbacks (Cade Horton Tee)** | Wrigley Field | Sun May 3 | **7 days** | ajvanprooyen | 3d (E1 today) |
| **Cubs vs Reds** | Wrigley Field | Mon May 4 | **8 days** | ajvanprooyen | 3d (E1 today) |
| **Cubs vs Reds** | Wrigley Field | Tue May 5 | **9 days** | ajvanprooyen | 3d (E1 today) |
| **Cubs vs Reds** | Wrigley Field | Wed May 6 | **10 days** | ajvanprooyen | 3d (E1 today) |

**9 events. 7 belong to ajvanprooyen. 1 is a T-0 day-of decision.** All Florence/Bilmuri events have advanced 1 day deeper into the floor window since yesterday's report.

### TIER 0 — nmcnamee99 / Raptors / T-0 / single-purpose tactical
**This template does not exist in the current drip schedule and has never been sent before.** Drafted from scratch.

```
Subject: Game 2 is tonight. Here's the math at T-0.
Preview: Tip-off in hours. The compare-window is now ~3 hours wide.

Hi —

Welcome to TicketScan. We notice you added Raptors–Cavs Game 2 yesterday,
and tip-off is tonight at Scotiabank.

Day-of NBA playoff math is different from every other window. Here's what
the curve looks like in the final hours:

   • T-minus-8 hours (right now-ish) → resale floor is at its lowest
     point of the entire week. Sellers who haven't moved yet are
     locking-in losses now, not after tip-off.
   • T-minus-3 to T-minus-1 → "panic floor" — a brief sub-floor dip
     as sellers cut their last losses. Highest-volatility window.
   • T-minus-1 to T-minus-0 → bid-side rises. Buyers who waited too
     long are now being charged for that decision.

Translation: the next 3–4 hours are your cleanest entry. After 5 PM
local, the game flips to seller-favored.

ONE move tonight:

  Run the three-source compare RIGHT NOW. Lock the price you see.
  Even if you decide to wait an hour, you'll know what's a real drop
  vs. seller posturing.

[CTA: Compare Game 2 Prices Now → ticketscan.io/compare?event=1A8ZkozGkdRs36i]

Good luck tonight.
— TicketScan
```

**Note:** Single-event T-0 send. NO welcome bullets, NO drip-style tip carousel. Day-of users want one thing: a decision-quality reference. Match the urgency.

### TIER 1 — Florence Day 5 (now past optimal, still actionable)
tate.sheppard's Florence has shifted from Day 6 (yesterday: lower floor edge) to Day 5 (today: past floor optimum). The honest framing changes — no longer "the window is now," it's "the window already opened, here's what you can still do."

```
Subject: Florence Atlanta — Day 5. Past optimal, but not past saving.
Preview: The floor opened on Day 6. Today is the recovery window.

Hi —

🎤 Florence + The Machine — State Farm Arena, Atlanta — Friday, May 1
   That's 5 days away.

Yesterday was the cleanest entry day for State Farm Arena (Day 6 = lower
floor edge). We sent zero emails yesterday. That's on us.

Here's what's still true today:

   • Day 5 → floor holds at most arena-scale rooms; small dips possible
   • Day 4–3 → stabilization breaks; resale sellers brace for loss-cut
   • Day 2–1 → day-of premium loads on bid-side; waiting backfires

Translation: today is still good, just not great. Past Day 3, the math
turns against you in a way it didn't yesterday.

Two moves today:

1. Set a target 10% below today's cheapest — narrower than 12%
   yesterday because you have less window left.
2. Run the three-source compare today. The price you see is now
   ~80% predictive of your final price (vs. ~70% yesterday).

[CTA: Compare Florence Atlanta → ticketscan.io/compare?event=Z7r9jZ1AdJ7BV]
```

### TIER 1 — Bilmuri Day 6 + post-E3 (still inside small-room floor)
goldy.pec.2012's Bilmuri was Day 7 yesterday (peak send), Day 6 today (still inside the small-room floor window which runs Day 7–10). **Yesterday was higher leverage, but today is the second-best send opportunity** — and they crossed E3 yesterday so the welcome arc is overdue.

```
Subject: Bilmuri at The Sylvee — Day 6. The small-room floor is still open.
Preview: 1,800 seats. Today is the second-cleanest entry of the window.

Hi —

🎸 Bilmuri — The Sylvee, Madison — Saturday, May 2 (6 days away).

You added this 15 days ago. The Sylvee is a ~1,800-seat room, and small
rooms behave differently than arenas:

   • Day 7 (yesterday) → first-day-of-floor, cleanest entry of the window
   • Day 6 (today) → floor still holds; minor dips possible
   • Day 5–4 → floor begins to thin; inventory dries faster than at arenas
   • Day 3–2 → no late-window savings; day-of premium loads early

Translation: today is good. Tomorrow is also good. Past Tuesday, the
math turns against you fast — small rooms don't reward patience the way
arenas sometimes do.

Two moves today:

1. Set a target 10% below today's cheapest — we'll ping when a seller
   hits it (assuming our alerts are healthy by then).
2. Run the three-source compare TODAY. Lock a baseline so you know
   what's a real drop tomorrow vs. seller noise.

[CTA: Compare Bilmuri Prices → ticketscan.io/compare?event=vv1A6ZkCdGkdy3apF]
```

### TIER 1 — Cubs Game 1 Day 5 (deeper inside floor) + ajvanprooyen E1 today
ajvanprooyen crossed E1 today AND is Pattern A+ (6 events) AND has Game 1 inside the floor window. **This is a 4-way send overlap — combined welcome + E1 + Pattern A+ digest + Game 1 buy-call.** The single highest-stakes individual send today (TIER 0 nmcnamee99 has higher absolute urgency, but ajvanprooyen has higher conversion potential because the multi-event surface gives more shots at value).

```
Subject: Welcome — and Game 1 is in 5 days. 6 different price curves to read.
Preview: First game = decide tonight. Game 6 = still in target-setting territory.

Hi —

Welcome to TicketScan. You added 6 Cubs games to your watchlist three
days ago — which is more high-intent setup than 95% of new users do in
their first month. Thanks for jumping in.

Quick situation report on your homestand:

   Game 1 (May 1, 5 days)  → INSIDE floor window. Buy-decision tonight.
   Game 2 (May 2, 6 days)  → Front edge of floor. Set target + compare.
   Game 3 (May 3, 7 days)  → Pre-floor. Watch + set target.
   Game 4 (May 4, 8 days)  → Pre-floor. Watch.
   Game 5 (May 5, 9 days)  → Pre-floor. Quietest night likely (best value).
   Game 6 (May 6, 10 days) → Pre-floor. The "wait & watch" night.

Wrigley + Cubs/Diamondbacks crowd dynamics:

   • Friday/Saturday games (1, 2, 3) carry a weekend premium — the
     floor is shallower than weeknight games.
   • Tuesday/Wednesday games (5, 6) historically have the deepest
     resale floors — that's where the value usually lives.
   • The Cade Horton Tee giveaway (May 3) and Kerry Wood Bobblehead
     (May 2) prop up demand for those nights specifically.

Two moves tonight:

1. Decide on Game 1 (May 1) — three-source compare, lock the price.
2. Set targets on the other 5 games at 10–15% below current floor.

One thing to know about us: we set off email alerts when the price
on a tracked event drops below your target. We're working through some
deliverability work this week, so if alerts feel slow, that's why —
not because nothing's moving.

[CTA: View Cubs Homestand → ticketscan.io/watchlist]
```

### Welcome Pattern B Variant — for ggri73, awwhittington, mark.murdock (3 simultaneous E1 today)
This is the template that yesterday I flagged as "must exist by tomorrow." Drafted now.

```
Subject: Welcome. What are you trying to track?
Preview: You signed up. Tell us the artist, team, or venue and we'll show you what's available.

Hi —

You signed up for TicketScan a few days ago and haven't added an event
to your watchlist yet. That's totally fine — most people sign up
because they're researching a specific thing.

Quick reset: TicketScan is most useful when you give it a target. If
you're tracking an event, we compare prices across Ticketmaster,
SeatGeek, and StubHub side-by-side — and we ping you when the price
drops below where you want it.

Two ways to get the value:

1. **Already have an event in mind?** Just tell us. Reply to this
   email with an artist, team, or venue. We'll send you back the
   nearest live events with current price spreads (this is a real
   reply — a human reads it).

2. **Just browsing?** [Search the dashboard]
   → ticketscan.io/dashboard

We send a max of 5 emails over your first month. Unsubscribe link is
in the footer. We're not in your inbox unless something useful is
happening.

— TicketScan
```

**Note for the 3 Pattern B sends:** Same template, individual sends (NOT a single broadcast — each user should feel the email is for them). The "reply to this email" CTA is the key innovation — converts the unanswered "what do you want to track" prompt into a real conversation that has a chance of producing a watchlist add manually.

### Welcome Pattern A Combined — charlesteel126 (Bruno Mars Ohio, Day 24)
```
Subject: Welcome — and Bruno Mars Ohio is in 24 days. Here's the play.
Preview: Day 24 is the wait-and-watch window. Here's what to set up tonight.

Hi —

Welcome to TicketScan. You added Bruno Mars Ohio Stadium (May 20) to
your watchlist 4 days ago, and we're 24 days out — so this is the
right moment for setup, not a buy decision.

Stadium tour math, Day 24:

   • Day 30–25 → resale inventory widens; floor unstable
   • Day 24–18 → "watch and wait" window. The floor finds itself here.
   • Day 17–11 → first floor dip — typically the cleanest entry day
     of the entire arc is around Day 14
   • Day 10–4  → floor holds, then weakens
   • Day 3–0   → day-of premium loads

Translation: today is too early to buy. The cleanest entry is likely
~10 days from now. Set up the alert today and let the system catch
the dip for you.

ONE move tonight:

  Set a target price on your Bruno Mars Ohio item — we'll ping when
  the floor crosses it. Try 12–15% below today's cheapest. (Reply if
  you want our take on a number; we'll send back what the comparable
  stadium tour stops have done at Day 14.)

[CTA: Set Target Price → ticketscan.io/watchlist]
```

### Events Entering the 15–30 Day Window (tomorrow's preview)
- **Bruno Mars Soldier Field (konman87)** — Day 20–21 tomorrow. **konman87 is in the post-E5 graveyard cohort (signed >30d ago)** — even when channel reopens, no current template addresses them. Catch-up template needed.
- **Bruno Mars Ohio Stadium (charlesteel126)** — Day 24 → 23 tomorrow. Send today (combined welcome + E1 + tactical above).
- **AEW Double or Nothing (joshdguillemette)** — Day 28 → 27 tomorrow. **Crosses E2 tomorrow at 7d 13h.** Single-event tactical send is appropriate; AEW pricing is more retail-like than concerts (Tier 2/3 sections see late drops).

### World Cup Dormant High-Intent (still no movement)
- **pete.uzelac77+ticketscan@gmail.com** — 15d on-platform. E3 crossed yesterday. 4 WC items + 2 Darts. **Today's the first day past E3 — the right send moment was yesterday but isn't lost.**
- **laye.aurelien@wanadoo.fr** — 24d. E4-eligible since 3 days ago. 2 Shakira items.
- **blubberboi@yahoo.com** — 16d. E3 crossed 2 days ago. Ed Sheeran Aug 8 (105 days out — long lead time).

### Viva El Jaripeo Recovery — Standalone Artifact Due Tomorrow
**Apr 27 deadline for `/marketing-agents/output/email/post-mortem-2510soccerboy.md`.** Yesterday's report contained the timeline + recovery survey draft. Tomorrow's task is to add: (1) right-shaped 89-day lifecycle proposal, (2) the three product changes that prevent recurrence (target_price prompt, post-E5 lifecycle, deliverability monitoring), (3) recovery survey ready-to-send when channel reopens. **Will also pull the Viva El Jaripeo event-day price history from Ticketmaster's listing if available, so the post-mortem can show what the user paid (or could have paid) — that's the data point that makes the lifecycle proposal concrete.**

---

## Subject Line A/B Tests

### TIER 0 — nmcnamee99 / Raptors / T-0 (no precedent)
- **A:** `Game 2 is tonight. Here's the math at T-0.`
- **B:** `You added Raptors G2 yesterday. Tip-off is in hours. Read this first.`
- **Hypothesis:** A is pure tactical. B name-checks their action and adds urgency in the subject. **Recommend A.** "Game 2 is tonight" is unambiguous; the user knows exactly what this is about within 6 words. B trades clarity for context — wrong trade for a T-0 send.

### Florence — Day 5 (past optimal, recovery framing)
- **A:** `Florence Atlanta — Day 5. Past optimal, but not past saving.`
- **B:** `Day 5 for Florence Atlanta. Yesterday was better. Today is still good.`
- **Hypothesis:** A condenses the honesty into the subject's second clause. B is more conversational and explicit about the "yesterday was better" reality. **Recommend B.** "Yesterday was better. Today is still good." reads like a friend telling you the truth. The honesty is sharper. A's "past optimal" is closer to category jargon — B is plain English.

### Bilmuri — Day 6 + post-E3 (second-best send day)
- **A:** `Bilmuri at The Sylvee — Day 6. The small-room floor is still open.`
- **B:** `Bilmuri — Day 6. Yesterday was Day 7 (peak). Today is the runner-up.`
- **Hypothesis:** A is the standard tactical subject. B explicitly stages today's send against yesterday's missed peak. **Recommend A.** B does too much truth-telling for the user's first detailed engagement email — it accidentally implies "we're not at our best." A maintains the value claim (small-room floor IS still open) without comparison framing. Save B-style "yesterday-vs-today" subjects for the recovery survey, where honesty IS the message.

### Cubs Homestand — combined welcome + E1 + A+ + Game 1 buy-call (4-way send)
- **A:** `Welcome — and Game 1 is in 5 days. 6 different price curves to read.`
- **B:** `Your 6 Cubs games: Game 1 = buy tonight. Games 2–6 = set targets. Welcome.`
- **Hypothesis:** A leads welcome → action. B leads action → welcome (with explicit Game 1 verb). Yesterday for ajvanprooyen at Day 6 I recommended a similar B-style. Today at Day 5 the urgency is one tick higher — the action verb in the subject matters more. **Recommend B.** Explicit "buy tonight" in the subject is the right primitive for a Day-5 inside-floor send. The welcome at the end is honest about the email's primary purpose.

### Welcome Pattern B — for 3 simultaneous E1 sends today
- **A:** `Welcome. What are you trying to track?`
- **B:** `Welcome. Three of you signed up the same day — here's where to start.`
- **Hypothesis:** Yesterday I recommended B for the cohort-claim-is-now-true reason. Today I want to revisit. **Switching recommendation to A.** The cohort framing in B is technically true but feels manufactured for a B2C consumer email — like the sender is trying to make a stat the lead. A is the question that actually starts a conversation. **The CTA depends on a reply — the subject should set up "this is asking me something" not "this is sharing a fact." A wins on intent-shape match.**

### Welcome Pattern A combined — charlesteel126 (Bruno Mars Ohio, Day 24)
- **A:** `Welcome — and Bruno Mars Ohio is in 24 days. Here's the play.`
- **B:** `Bruno Mars Ohio in 24 days. Day 24 is too early to buy. Set up the alert.`
- **Hypothesis:** A acknowledges the welcome AND gives event guidance. B skips welcome entirely and front-loads "too early to buy" — counterintuitive for a marketing email but honest. **Recommend B.** It does the unusual move of telling the user *not* to act today, which builds trust (we're not always selling). Pairs perfectly with the body's "set up the alert" CTA. The welcome can sit in the body's first sentence; the subject has to earn the open with a useful claim.

### Bruno Mars MetLife multi-night — for taranimeramaro (sends in 2 days at E1)
**Pre-staging the subject lines because the cohort just appeared today.**
- **A:** `Welcome — and you're choosing between 3 Bruno Mars MetLife nights. Here's how.`
- **B:** `Bruno Mars MetLife — Aug 21 vs Aug 22 vs Aug 25. The data on each night.`
- **Hypothesis:** A is welcome-led. B is decision-led. **Recommend B.** A multi-night artist cluster signals a specific decision question ("which night?"). The subject should answer it directly. Save A-style for users who haven't shown decision intent.

### Recovery survey (Viva El Jaripeo)
- **A:** `You went to Viva El Jaripeo. We failed you. Two questions.`
- Holding A from yesterday — confirmed in standalone artifact tomorrow.

### CTA Review (today's templates)
- nmcnamee99 / Raptors → `ticketscan.io/compare?event=1A8ZkozGkdRs36i` ✓ (verified from watchlist API)
- Florence → `ticketscan.io/compare?event=Z7r9jZ1AdJ7BV` ⚠️ **(still unverified — flagged 3 days running. Engineering, please confirm before send. Fallback works.)**
- Bilmuri → `ticketscan.io/compare?event=vv1A6ZkCdGkdy3apF` ✓ (verified)
- Cubs homestand → `ticketscan.io/watchlist` ✓
- Welcome Pattern B → `ticketscan.io/dashboard` ✓ + reply-to-email primary CTA ✓
- charlesteel126 (Bruno Mars Ohio) → `ticketscan.io/watchlist` (NOT artist-cluster URL; using watchlist instead since the user's exact item is there) ✓ — **resolves the 4-day-running artist-URL verification flag for THIS send by sidestepping it**
- taranimeramaro (Bruno Mars MetLife) → would also use `ticketscan.io/watchlist` for the same reason
- 2510soccerboy recovery survey → reply-to email (no CTA URL needed) ✓

**Pattern realization:** for any user whose specific event is on their watchlist, we should default the CTA to `ticketscan.io/watchlist` rather than `?artist=X` or `?event=Y` constructions. **Adding to action items as a CTA simplification rule.**

---

## Action Items

### P0 — Critical
1. **SMTP / drip pipeline diagnostic question — Day 20.** The +5s/day worsening jumped to +10s today. Single specific diagnostic: **does the drip-run handler invoke SMTP transport synchronously?** If yes, the SMTP outage is starving drip-run via cascading connect timeouts — fixing SMTP fixes both. If no, hang has independent root cause. Either way, this single yes/no unblocks the investigation. **Send to engineering as a one-line ping today.**
2. **TIER 0 nmcnamee99 / Raptors T-0 send** — single highest-urgency send opportunity in platform history. Template drafted. Cannot ship (channel offline). Document as sunk-opportunity in tomorrow's analytics handoff. **If the channel comes back today, this is the first send.** It overrides every other tier.
3. **Viva El Jaripeo post-mortem standalone artifact — DUE TOMORROW (Apr 27).** Per yesterday's commitment. Add: 89-day lifecycle proposal, 3 product fixes, ready-to-send recovery survey, optionally event-day price data.
4. **5-user E1 wave deliverables — 4 distinct templates today.** All drafted: TIER 1 Cubs combined (ajvanprooyen), Pattern A combined (charlesteel126), Pattern B variant (×3 individual sends). Channel still offline; all queued.
5. **Eligibility-count drift.** Yesterday's E2 count of 14 didn't survive recount (today's = 11). **Single ground-truth query needed to derive eligibility — stop re-typing across reports.** Add to engineering as a small ask: expose `/api/admin/drip-stats?include=eligibility-by-tier` so the report doesn't need recomputation.
6. **Target-price UX (Day 91 — 3-month milestone).** 0 of 85 watchlist items have a target. **Both new users today added items with null target.** Including a user who has a TODAY-of event and could've gotten a real alert. **This is now blocking the highest-intent users we have.**

### P1 — High
7. **CTA simplification rule.** When a user's specific event is on their watchlist, default CTA to `ticketscan.io/watchlist` rather than `?artist=X` or `?event=Y`. Sidesteps the 4-day-running URL verification flag for the most common case. Adopt across templates.
8. **Welcome backlog: 5 users (was 7 yesterday).** Today's wave collapsed 2 (charlesteel126, ajvanprooyen). Remaining: nicklib253, joshdguillemette, dr.altvater, brigitte.theisen retroactive A+, plus the 2 newest (taranimeramaro, nmcnamee99 — both pre-E1).
9. **Bilmuri Day 6 send + ajvanprooyen Cubs combined send — high-leverage today.** Ranked: ajvanprooyen Cubs > Bilmuri (Bilmuri was the highest-leverage send yesterday; today the multi-event Cubs combined edges it).
10. **Pattern B is 41%, not 60%.** Re-baseline mental model. **Welcome template mix should be:** ~40% Pattern B, ~40% Pattern A, ~20% Pattern A+. Current template inventory under-serves Pattern A+ (only the ad-hoc digest exists).
11. **Forecasting — 8-of-8 streak, but trivial test tomorrow.** Tomorrow's prediction (1 crossing — joshdguillemette E2) is the easiest possible test. **Don't claim methodology validation on a low-difficulty hit.**
12. **Bruno Mars artist-cluster CTA route — Day 5 verification flag — formally retiring for now.** Per CTA simplification rule (#7), all current Bruno Mars sends route to `/watchlist`. The `?artist=` URL test can wait until we have a use case where the user's event is NOT on a watchlist.

### P2 — Medium
13. **Newsletter growth: 84-day stall.** No homepage A/B action.
14. **Past-dated watchlist add blocker.** 29 of 85 past-dated (~34%, up from 33%). Same product fix needed.
15. **Build watchlist digest endpoint.** Still manual. Today's digest has 4 distinct A+/A/B template variants, all hand-composed. **At ≥3 active campaigns this becomes a real bottleneck.**
16. **konman87 + post-E5 catch-up template.** Bruno Mars Soldier Field is now Day 20 — first event-tactical opportunity in the graveyard cohort. Catch-up template gap is now actively losing sends.

### NEW today
17. **Drip-run synchronous-SMTP diagnostic** (above as P0 #1). One question, defines next 7 days of pipeline strategy.
18. **T-0 single-purpose template** — drafted today (nmcnamee99 / Raptors). Add as a permanent template in the library: "T-0 day-of buy-decision." Will be the right template any time a user's tracked event is the same day. **Cadence rule: T-0 template overrides all others; ships immediately on signup-to-event-today match.**
19. **CTA simplification rule** (above as P1 #7). Default to `/watchlist` when the user's tracked event is in their watchlist. Avoids URL verification overhead.
20. **Pattern share recalibration** — Pattern B is 41%, not majority. (P1 #10.)

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **84-day stall** (+1).
- **Drip pipeline:** Day 20. 0 sends ever. 62 of 62 users have never received a drip email. **Hang duration accelerated: 30s → 35s → 40s → 50s, with the daily increment doubling from +5s to +10s today.** Engineering single diagnostic question pending.
- **Price alerts:** 0 ever triggered. **0 of 85 watchlist items have target prices (Day 91 milestone). Today's 4 new adds all came with null target.**
- **User growth:** **+2 new users today** (taranimeramaro, nmcnamee99 — both Apr 25 signups, captured in the 24h rolling window). **Both came with watchlist intent — neither is Pattern B.** Total: 62. Rolling 7d: 9.
- **Watchlist:** **85 items (+4)** — 3 Bruno Mars MetLife (taranimeramaro), 1 Raptors playoff (nmcnamee99). The Raptors event is **TODAY** — single highest-urgency event in platform history.
- **Threshold crossings today:** **5 simultaneous E1 — charlesteel126, ggri73, awwhittington, ajvanprooyen, mark.murdock. 5-of-5 forecast hits = 100% accuracy. Two consecutive perfect days (8-of-8 cumulative).**
- **Threshold crossings tomorrow:** 1 (joshdguillemette E2). Quiet day.
- **Threshold crossings Apr 28:** 2 (nmcnamee99 E1, taranimeramaro E1) — first E1 wave with no Pattern B variant required.
- **Events entering tactical windows today:** Florence Day 5 (post-floor), Bilmuri Day 6 (mid small-room floor), Cubs Game 1 Day 5 (deep inside floor), Raptors playoff TODAY (T-0).
- **Today's signature event:** **Toronto Raptors playoff Game 2 TONIGHT for nmcnamee99** — 22h on platform, single-event tracker, T-0 buy decision. Highest-urgency send opportunity in platform history. Cannot ship.
- **Cohort recalibration:** Pattern B share is 41%, not majority. Welcome template mix should rebalance. Pattern A+ count is 3 (was 2 yesterday) — taranimeramaro joins as Bruno Mars MetLife multi-night.
- **Eligibility audit:** Yesterday's E2 count (14) failed reproduction (today: 11). **Single-source-of-truth eligibility query is a P0 dependency.**
- **Forecasting:** 8-of-8 cumulative. Tomorrow's test is trivial (1 crossing). Maintain ±1 day band as discipline.
- **Email channel status:** Day 20. Zero emails of any kind have ever reached a user. Hang duration trend now accelerating (+10s/day, was +5s/day).
- **One actionable surprise today:** the synchronous-SMTP diagnostic question. If the drip-run handler is calling SMTP synchronously, the two outages are one outage — and one fix unlocks both. If not, two independent investigations needed. The single yes/no unblocks the entire pipeline strategy.
- **Three reframings from today:** (1) Pattern B is 41%, not 60%; (2) the hang is no longer linearly worsening, the *rate of worsening* doubled; (3) the new-user cohort came with watchlist intent — the "signup without action" pattern that dominated last week did not extend to today's new arrivals.
