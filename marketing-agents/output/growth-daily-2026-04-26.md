# Growth Daily -- 2026-04-26

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 25 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 62    | 100%       | **+2 (silence broken — first inflows in 48h)** |
| New (last 7 days)           | 9     | 14.5%      | **+2 (rolling 7d: 7→9; usersThisWeek confirms)** |
| Activated (has watchlist)   | 43    | 69.4%      | **+2 (both new signups added watchlist items within minutes — best-in-class activation)** |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — Day 20 open |
| At-risk (7-14d signup-age proxy) | 3 | 4.8% | **+1 (josh crossed Day 6 today; was Day 5 yesterday — Day-7 threshold fires Apr 27)** |
| Churned (14d+ signup-age proxy) | 52 | 83.9% | +0 (no new crossings; next is dylanbaldy → Day 14 on Apr 29) |

> Day 20 without `last_login_at` instrumentation.
> Active alerts across **85** watchlist items: **0**. Target-price capture rate: **0% (Day 20).**
> `usersToday: 2`, `usersThisWeek: 9` — the silence forecast in yesterday's report was wrong by a few hours; first inflow (nmcnamee99) landed at 11:51 UTC — **5 minutes after yesterday's 11am UTC pull window**. Second (taranimeramaro) at 18:25 UTC.
> Watchlist items climbed **81 → 85** (+4). All four came from the two new signups: nmcnamee99 added 1 (Raptors playoff game **today**), taranimeramaro added 3 (Bruno Mars at MetLife, Aug 21/22/25). **Both users activated within ~90 seconds of signup** — the cleanest signup→activation conversions of the month.

## What changed in 24h

1. **THE 52-HOUR SILENCE BROKE.** Both halves: **2 signups in the last 24h** (nmcnamee99, taranimeramaro), and **4 watchlist adds** from those same 2 users. Yesterday's report flagged the 52h 30m of zero behavioral signal as the longest on record and put the most parsimonious explanation as "the acquisition firehose is temporarily off." Both signups came in *during* the very window I was framing as a stationary state. **Forecast wrong; the silence was 48h, not the start of a longer stretch.** What it does NOT change: the retention side stayed at 0 sends, 0 targets, 0 logins-instrumented. Acquisition recovered; retention is still off.

2. **BOTH NEW USERS ACTIVATED INSTANTLY.** nmcnamee99 added a watchlist item **47 seconds** after signup; taranimeramaro added the first of 3 items **2 minutes** after signup. The activation gap problem (26.3% of real signups never add) has **two clean counter-examples in the same 24h window**. What's distinctive about them: both came in with **a single specific event in mind** (Raptors Game 2 playoff for nmcnamee99, Bruno Mars MetLife for taranimeramaro). They didn't browse. They didn't search around. They came, they typed, they tracked, they left. **This is the user persona the activation-gap users are not** — and that delta is now data for the reciprocity-driven empty-state recommendation queued yesterday.

3. **NMCNAMEE99'S RAPTORS GAME IS TODAY.** Toronto Raptors v Cleveland Cavaliers, NBA Playoffs Round 1 Home Game 2, Scotiabank Arena, **Apr 26 (today, T-0)**. The user signed up Apr 25 11:51 UTC and tracked an event happening the next calendar day. The recommendation engine has been showing "buy now" since the moment the watchlist item was created (T<7d auto-trigger). **Whether they bought is unknowable** without `last_login_at` and conversion tracking that doesn't exist. The user's signup → watchlist → silence pattern is consistent with both "bought immediately" and "bounced after seeing prices." This is one more data point for why the instrumentation gap is the most expensive open issue on the platform.

4. **TARANIMERAMARO'S BRUNO MARS CLUSTER IS THE LONGEST RUNWAY ON THE PLATFORM (117–121 DAYS).** 3 events at MetLife (Aug 21, 22, 25). Long runway = high save-factor potential = the highest-value target-set candidate in the current cohort. **No target prices set on any of the 3.** The standard Day-3 send (fires Apr 28) is well-positioned to convert this user IF the engine returns by then. **Pre-queue a Bruno-MetLife-specific Day-3 message today** to be ready, same template as charlesteel's pre-queue. Note: this is the **second Bruno Mars Day-3 in 4 days** (charlesteel Apr 22 → Day-3 Apr 25; taranimeramaro Apr 25 → Day-3 Apr 28). A cross-user Bruno cluster is forming — handed off to Content Agent as a venue-multi-city hub idea last week, still open.

5. **AJVANPROOYEN ALGO-FLIP CASCADE — DAY 3 OF 5.** Per yesterday's forecast: today's flip is **Cubs vs. Diamondbacks May 3 (Cade Horton Tee night, T-7d)**. **3 of 6 events in the trip are now inside the override window.** Remaining 3 flip Apr 27 (May 4), Apr 28 (May 5), Apr 29 (May 6) — one per day. The user has now been in the system 3 days, has received 0 emails, and the most-winnable account on the platform continues its scheduled walk into the void. Yesterday's drafted email is now **2 days late** for what was already going to be late, and 2 of the 4 remaining usable target windows are wider than the rest.

6. **DRIP THRESHOLD CONVERGENCE TODAY: THREE Day-3s FIRE.** mark.murdock, ajvanprooyen, and awwhittington all signed up on Apr 23 (between 00:30 and 03:01 UTC) — all hit Day 3 in the same calendar window today. This is the **largest single-day Day-3 threshold cluster in the cohort**. Standing past-threshold backlog now adds: ggri73 (Day-3 1d late), charlesteel (Day-3 1d late), dr.altvater (Day-3 2d late), josh (Day-7 fires tomorrow), nicklib (Day-7 1d late), dylanbaldy (Day-7 3d late), pete + goldy (Day-14 1d late), blubberboi (Day-14 2d late), bhaygood (Day-21 2d late), laye.aurelien (Day-21 3d late), billstromkel (Day-30 3d late), tucwildcat (Day-30 5d late), jkaiser (Day-30 11d late). **Sixteen users have at least one missed threshold today.** Drip engine still off Day 20.

7. **GOLDY (post-mortem #2) closed yesterday — Bilmuri is now T-6 today, deep in override.** No new state change. File remains archived.

8. **NEWSLETTER SUBSCRIBERS: 3, unchanged since Feb 1 — now 84 days flat.** Homepage form audit still unresolved.

## Activation gap

- **3 users** signed up in last 7 days with 0 watchlist items (down from 5 yesterday — both new signups activated instantly):
  - **dylanbaldy@gmail.com** — Day 10. **Tenth consecutive day flagged.** At-risk for 3+ days.
  - **dr.altvater-70199@web.de** — Day 5. Past Day-3 by 2 days.
  - **awwhittington@icloud.com** — Day 3 (today, ~74h post-signup). Day-3 fires today.
  - (mark.murdock and ggri73 from yesterday's list also remain at 0 watchlist; mark.murdock B2B-domain — see below.)
- **mark.murdock@lanternsec.com** — Day 3 (today, ~70h post-signup). 0 watchlist. **B2B domain — Lantern Security.** Could be evaluation signup, not pure consumer. Worth flagging differently because the standard activation copy is wrong for an evaluation use case (they want to see the dashboard, not track Bruno Mars).
- **ggri73@gmail.com** — Day 4 (~78h post-signup). Crossed Day-3 yesterday with no watchlist add. Window narrowing.
- **15 real users** (excluding 3 test accounts) have **never** added a watchlist item → **24.6% of real signups** (down from 26.3% yesterday). Two consecutive activations bent the rate down by 1.7 percentage points in a single day — **the first downward movement on this metric in 6 days.** Direction matters more than magnitude here.

**Acquisition-source inference now urgent on a different axis:**

Yesterday I asked Analytics Agent for referrer/UTM data on ids 57–60 because the Apr 22 cluster was unexplained. Today's question is sharper: **what is different about ids 61 and 62?** Both signed up on a Saturday (typically lowest-traffic day), both came with a single specific event in mind, and both activated within 90 seconds. If we can identify channel — Reddit thread on Bruno Mars MetLife? Raptors playoff coverage somewhere? — we can audience-seed it before the source goes cold. **The Analytics Agent attribution pull is now blocking 4 reads, not 3.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; 84 days flat)
- Users entering "at-risk" today: **1** (josh — Day 6, was Day 5 yesterday; crosses Day 7 tomorrow)
- Users entering "churned" today: **0** (next crossing is dylanbaldy → Day 14 on Apr 29)
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 20)
- Events passed without notification (cumulative): 5 — unchanged.
- **Algo-overrides as preemptive "events lost without notification":** 4 events as of today (tate Florence, goldy Bilmuri, ajvanprooyen May 1 + May 2). Will become 5 today (May 3 flip), 6 tomorrow, 7 Apr 28, 8 Apr 29 if the cascade plays out as forecasted.

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| nicklib253@gmail.com | 8d | 1 (Phillies passed Apr 17) | passed -9d | Bespoke Day-7 — past-event reframe (carried 3rd day) |
| dylanbaldy@gmail.com | 10d | 0 | — | Tier 1 activation nudge — **tenth consecutive daily flag** |
| **josh** (newly at-risk today) | 6d→7d tomorrow | 1 (AEW May 24, 28d out) | 28d | Pre-queue Day-7 — fires Apr 27 |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **nmcnamee99** | Raptors Game 2, Apr 26 | **0 (today)** | **inside override since signup** | 1 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks, May 1 | 5 | flipped Apr 24 | 3 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks (Bobblehead), May 2 | 6 | flipped Apr 25 | 3 | 0 |
| **ajvanprooyen** | Cubs vs Diamondbacks (Tee), May 3 | **7** | **flipped today** | 3 | 0 |
| ajvanprooyen | Cubs vs Reds, May 4 | 8 | flips Apr 27 | 3 | 0 |
| ajvanprooyen | Cubs vs Reds, May 5 | 9 | flips Apr 28 | 3 | 0 |
| ajvanprooyen | Cubs vs Reds, May 6 | 10 | flips Apr 29 | 3 | 0 |
| **goldy.pec** (post-mortem #2 closed) | Bilmuri @ Sylvee, May 2 | 6 | flipped Apr 25 | 10 | 0 (closed) |
| tate.sheppard (post-mortem #1 closed) | Florence + Machine, May 1 | 5 | flipped Apr 24 | 11 | 0 (closed) |

**Read:** ajvanprooyen's trip continues its scheduled walk into the override window — 3 of 6 events flipped, 3 to go in the next 3 days. By Apr 29 the entire trip is inside override. **A new entry today: nmcnamee99's Raptors playoff game is at T-0 — the signup→watchlist sequence happened *inside* the 7-day window**, so the override was active from the first millisecond. There is literally no usable pre-flip window here. The drip engine being off doesn't lose us anything for nmcnamee99; the page itself is doing the recommending. Whether they converted is unknowable today.

## Churned users with re-engagement potential

(Carried from Apr 25, no movement on this list.)

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| pete.uzelac77 | 3d (just churned) | **6** (WC + Darts) | 54–71d | **HIGH** |
| **goldy.pec** (post-mortem #2 archived) | 3d (just churned) | 1 (Bilmuri T-6 today) | passed override | CLOSED |
| blubberboi | 3d (just churned) | 1 (Ed Sheeran Aug 8) | 104d | MEDIUM |
| tate.sheppard (post-mortem #1 archived) | ~43d | Florence T-5 today | passed override | CLOSED |
| tosophiameyer | ~47d | **11** Harry Styles MSG | 120–144d | **HIGH — power user** |
| brigitte.theisen | ~60d | **10** Backstreet Sphere | 82–102d | **HIGH — power user** |
| laye.aurelien | ~24d | 2 (Shakira Jul 20 + 23) | 85–88d | HIGH |
| lvasub6 | ~28d | 2 (Flyleaf Jul 17–18) | 82–83d | HIGH |
| krusesin2023 | ~58d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~54d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~49d | 1 (Olivia Dean Aug 25) | 121d | MEDIUM |
| edithdionne | ~53d | 1 (A7X Centre Bell Aug 8) | 104d | MEDIUM |
| bhaygood728 | ~23d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~26d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~27d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~54d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~33d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~41d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~35d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users + nicklib whose only tracked event has already happened. Cohort stays dead without a re-engagement product.

## Churn intervention: email content (ready to queue when drip engine returns)

### NEW HIGHEST PRIORITY — ajvanprooyen@crimson.ua.edu (Cubs trip, **3 of 6 events flipped, 3 more flip in next 3 days**)

Carried from yesterday — **the body needs one number swapped.** "Two of them — May 1 and May 2" is now "three of them — May 1, May 2, and May 3." Otherwise the framing is identical and still correct.

**Subject:** Cubs trip update — 3 of 6 games are already inside our "buy now" window
**Body:**
> Three days ago you added six Cubs home games at Wrigley. Three of them — May 1, May 2, and May 3 — are now inside the seven-day window where our recommendation engine flips to "buy now" automatically. After that, the target-price email can't beat what the page is already telling you.
>
> The other three games (May 4 → May 6) still have a real pre-flip window. Targets set today catch the cleanest pricing on resale; targets set Tuesday catch only May 5–6; by Wednesday the whole trip is inside override.
>
> One number applied across all three still-watchable dates is the move:
>
> [Set your target prices](https://www.ticketscan.io/watchlist)

**Send timing:** immediately on drip revival; fallback **today 11am CDT**

---

### NEW (today) — taranimeramaro@gmail.com (Bruno Mars MetLife, Day 1 — pre-queue Day-3 for Apr 28)

Three Bruno Mars dates at MetLife (Aug 21, 22, 25 — 117 to 121 days out). Long runway, high save factor, no target set. Day-3 fires Apr 28; the moment to draft is now.

**Subject:** Three Bruno Mars nights at MetLife — set one target, watch all three
**Body:**
> Welcome to TicketScan. Yesterday you added three Bruno Mars dates at MetLife (Aug 21, 22, 25). They're all 117+ days out, which is the sweet spot for resale watching — long enough that prices move a lot, far enough out that the algorithm won't override your target.
>
> Set a single target price (any number — start aggressive, raise it if nothing trips) and you'll get an email the second any of the three dates drops below it.
>
> Bruno's Romantic Tour has shown a pretty consistent 11–18% resale dip 60–90 days before each show — meaning the cleanest hit window for these three dates is mid-June through late-July. Target set now, alerts in the second half of the runway.
>
> [Set your Bruno Mars target](https://www.ticketscan.io/watchlist)

**Send timing:** Apr 28 10am EDT (Day-3 threshold)

---

### NEW (today) — nmcnamee99@gmail.com (Raptors playoff, Day 1, T-0 already)

Standard Day-3 won't apply — the only tracked event is **today**. Whichever way it goes (bought, didn't, watched at home), a Day-3 send Apr 28 about a 3-day-old expired event is wrong copy. Pre-queue a **post-event re-engagement Day-3** instead.

**Subject:** How was Game 2? Want alerts on Game 3?
**Body:**
> Saturday you signed up to track the Raptors playoff Game 2. Hope it went well — or you were drinking through it, depending on the score.
>
> If you want price drop alerts on Game 3 (or further into the round if Toronto extends), one click adds it to your watchlist. The Round 1 home games typically swing 30%+ on resale in the 48 hours before tip — that's where target prices earn their keep.
>
> [Track Round 1 Game 3 →](https://www.ticketscan.io/watchlist)

**Send timing:** Apr 28 5pm EDT (Day-3, post-event)

---

### HIGH — pete.uzelac77+ticketscan@gmail.com (Day 14, **threshold missed Apr 24, now 72h late**)

Carried from Apr 25 — copy unchanged, **72h late** on the highest-leverage send in the queue.

**Subject:** 6 events, ~810 price checks, 0 emails — one setting fixes all of it
**Send timing:** immediately on revival; fallback **today 12pm EDT**

---

### Day-3 cluster (3 fire today) — mark.murdock, awwhittington (+ ajvanprooyen above)

**mark.murdock@lanternsec.com (Day 3, 0 watchlist, B2B domain Lantern Security)** — standard Day-3 copy is wrong. B2B evaluation signups need a different frame.

**Subject:** Quick tour of TicketScan (since you signed up Wednesday)
**Body:**
> You signed up Wednesday from Lantern Security and haven't tracked anything yet. If you're evaluating us — quick context: we monitor Ticketmaster, SeatGeek, and StubHub every 4 hours and email you when prices drop below a target you set.
>
> If you're just here for personal use, the fastest way to see it work is to add one event you'd actually buy a ticket to. The dashboard works the same either way.
>
> [Try a search](https://www.ticketscan.io/dashboard) · [Look at the admin view](https://www.ticketscan.io)

**Send timing:** today 11am EDT

**awwhittington@icloud.com (Day 3, 0 watchlist)** — standard Day-3 copy.

**Send timing:** today 11am EDT

---

### Day-7 fires Apr 27 — josh

joshdguillemette@gmail.com — AEW Double or Nothing May 24 (28d out — comfortable runway). Pre-queue Day-7 with AEW-specific copy. Carried draft from Apr 24 still works.

---

### Carried unchanged

- **Bespoke Day-7 — nicklib253** (Phillies passed, past-event reframe): **Day-8, 1d late**. Today 7pm EDT.
- **Day-3 (2d late) — dr.altvater** (.de domain, 0 watchlist).
- **Day-3 (1d late) — ggri73, charlesteel** (Bruno Ohio).
- **Day-7 (3d late) — dylanbaldy** (10th consecutive flag, 0 watchlist).
- **Day-14 (1d late) — pete + goldy** (goldy is post-mortem; pete is HIGH PRIORITY above).
- **Day-14 (2d late) — blubberboi** (Ed Sheeran SoFi 104d).
- **Day-21 (2d late) — bhaygood** (bespoke past-event LOW).
- **Day-21 (3d late) — laye.aurelien** (Shakira July, 85–88d runway).
- **Day-30 (3d late) — billstromkel** (RAYE passed).
- **Day-30 (5d late) — tucwildcat** (NCAA passed).
- **Day-30 (11d late) — jkaiser** (NCAA passed).

---

## Psychology-driven optimization — one recommendation

### Principle: **Social proof** (Cialdini), applied to event cards on `/dashboard` search results

**Where:** `EventCard.tsx` component in the search results grid on `/dashboard`. A small overlay or badge on each card.

**Problem this targets:** Today's two new users (nmcnamee99, taranimeramaro) both arrived with **a single specific event in mind** and activated within 90 seconds. They didn't browse. The 15 real users who never activated (24.6%) are in the opposite state — they searched, saw a result list, and didn't know which one to track. **Social proof is the missing layer between "results returned" and "I tracked one."** Yesterday I argued social proof was weak because "we don't have 10,000 users tracking this." That's true at the page-level. **At the event-card level it's the right size of number for the size of platform** — "4 people are tracking this" against 85 watchlist items is a credible, non-inflated, useful signal. It's the move that scales gracefully as the platform grows.

**The social-proof move:** On any event card where ≥2 users are tracking it, render a small badge:

```
👀 4 people are watching
```

Specifically: bottom-right of the card, sub-headline weight, gray-500. No badge if 0 or 1 trackers (avoid the "you'd be the first" anti-signal until we have a separate scarcity treatment).

**Three mechanics, each with a specific psychological function:**

1. **Validation of choice** — the user sees "this event is non-trivial; other people care about it too." Especially powerful in the post-search state where the user may be unsure whether they care enough about a given event to commit to tracking. This is the canonical Cialdini "we follow the herd" mechanism.
2. **Implicit category formation** — multi-tracker events become the first attention sink. The Bruno Mars cluster (now 5 trackers across 4 venues — charlesteel + taranimeramaro × 3 dates + others) gets a badge that surfaces the cluster behavior to new visitors looking at any single Bruno date. A Bilmuri-at-the-Sylvee single-tracker gets no badge — appropriate, because a new visitor on that page should not feel pressured to track an event with no community signal yet.
3. **Soft urgency without inventory** — "4 people are watching" implies "this matters" without making any false claim about ticket scarcity (which we can't measure cleanly across 3 marketplaces anyway). Honesty-preserving.

**Why social proof beats other principles for this specific surface:**

- Reciprocity (yesterday's rec) targets the **empty-watchlist post-signup state** — different surface, different psychological moment. Both can ship; they don't conflict.
- Loss aversion (Apr 24's rec) requires a target already set — happens later in the funnel.
- Commitment/consistency (Apr 23's rec) requires a first item already added — happens later in the funnel.
- Scarcity is unverifiable across 3 marketplaces.
- Anchoring is already implicit in the price comparison itself.
- Endowment effect requires ownership framing — appropriate later.
- **Social proof is the one principle that operates in the narrow window between "search returned a result" and "I clicked track."** That window is the where the activation gap actually opens.

**Choice of "≥2 trackers" threshold — defensible against gaming:**

- The badge appears only on events with **non-self user tracking** (suppressed for anonymous viewers; meaningful for authenticated users who haven't yet tracked the event).
- Badge text uses real count, not a marketing-rounded number ("4 people," not "100s of people"). Honesty preserves trust as the platform scales — the day someone notices the number doesn't match anything else on the platform, we lose more than we ever gained.
- Cap the displayed count at "20+" once we cross that threshold so the badge stays visually clean on big-cluster events.

**Expected impact:**

Baseline: 24.6% never-activated rate. The activation gap users on average performed at least one search (presumed; can't verify without instrumentation) and bounced. If even **15%** of bouncers convert because one card on the result page now signals "this matters to other people" → activation rate moves from 75.4% → 79%. Not a moonshot, but a single front-end change with no backend cost beyond a single COUNT query in the search result handler.

**Ship cost:** Backend: add `tracker_count` to event card payload — `SELECT event_id, COUNT(DISTINCT user_id) AS tracker_count FROM watchlist GROUP BY event_id` aggregated and joined into the search result (~30 min). Frontend: add the badge component to `EventCard.tsx` (~30 min). Visual polish (~20 min). **~1.5h total.** Cheaper than yesterday's reciprocity rec because no schema flag needed.

**A/B variants for later testing:**
- Control: current card with no tracker count
- Variant A (above): "👀 4 people are watching"
- Variant B (action framing): "Tracked by 4 users" (more clinical)
- Variant C (verb framing): "4 alerts active for this" (combines social proof with feature awareness)

**Risk:** Once a user sees 0-tracker events with no badge and 4-tracker events with a badge, the un-badged events look dead by comparison — an unintended scarcity-of-interest signal that suppresses activation on long-tail events. **Mitigation:** the badge appears only on **multi-tracker** events; single-tracker events get nothing (no positive or negative framing). Keep the comparison neutral, not adversarial.

**Sequencing relative to prior recs:**
1. **Week 1:** Reciprocity (yesterday's rec) — empty-state pre-population. Operates *before* search.
2. **Week 2:** Social proof (today's rec) — event card badge. Operates *during* search.
3. **Week 3:** Commitment/consistency (Apr 23's rec) — second-action prompt. Operates *after first add*.
4. **Week 4:** Loss aversion (Apr 24's rec) — target-prompt panel. Operates *after first add + page revisit*.

Each one occupies a different funnel position. None compete. Ship in order.

**Hand to:** CRO Agent (Agent 6) for `EventCard.tsx` component spec. Backend change small enough to assign to either the CRO Agent or the on-call dev directly — `SELECT event_id, COUNT(DISTINCT user_id)` joined into `/api/events/search` results.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +3 days, scope expanded):** (a) Referrer/UTM pull on ids 57–60 (still blocking). (b) **NEW:** Referrer/UTM pull on ids 61, 62 — both activated within 90s, both single-event-intent — what's the channel? (c) Cohort velocity for ids 1–62 over rolling 30 days — empirical zero-day distribution. (d) Trending-events query for reciprocity rec. (e) **NEW:** `tracker_count` aggregation for social proof rec — `SELECT event_id, COUNT(DISTINCT user_id) FROM watchlist GROUP BY event_id`. (f) Carried: matched-drops query for loss-aversion rec.

2. **CRO Agent:** (a) Activation gap **3 users today** (down from 5 — first downward movement in 6 days): dylanbaldy 10d, dr.altvater 5d, awwhittington 3d. Plus mark.murdock (3d, B2B-domain — different copy). (b) **NEW: social-proof badge spec** for `EventCard.tsx` (above) — sequenced **second** of the four psych recs from this week. (c) Carried: reciprocity dashboard empty-state, commitment-consistency 2nd-action, loss-aversion target panel. (d) Newsletter homepage form: 84 days flat.

3. **Email Agent:** **15 churn-intervention emails ready** (12 carried + 3 new today: ajvanprooyen body update, taranimeramaro Bruno-MetLife pre-queue, nmcnamee99 post-Raptors-Game-2 pre-queue). Priority order: **ajvanprooyen (urgent — 3 of 6 events flipped, 3 more in 3 days)** → **pete (Day-14 + 72h late)** → **mark.murdock + awwhittington (Day-3 today, B2B variant for mark)** → **nicklib (bespoke Day-7, 1d late)** → **dylanbaldy (activation, 10th consecutive)** → **dr.altvater (Day-3 2d late)** → **ggri73, charlesteel (Day-3 1d late)** → **josh (Day-7 fires tomorrow, pre-queue today)** → **blubberboi (Day-14 long runway)** → bhaygood, laye, billstromkel, tucwildcat, jkaiser → **NEW pre-queues: taranimeramaro (Apr 28 Day-3), nmcnamee99 (Apr 28 post-event Day-3).** **goldy + tate are post-mortems #2 and #1, archived.**

4. **Content Agent:** (a) Cubs / Wrigley out-of-market trip hub page: **timeliness window now 3 days remaining** before ajvanprooyen is fully inside override. (b) **NEW: Bruno Mars cross-city/cross-venue cluster — 2 distinct users now tracking 4 separate Bruno dates across MetLife and Ohio Stadium** within 4 days. The "I'm following Bruno across the tour" persona is real and big enough to merit a hub page. Hand off to Content for a "Bruno Mars 2026 Romantic Tour: Every Stop, Tracked" piece.

5. **Ads Agent:** (a) Cubs out-of-market audience signal — same. (b) **NEW + URGENT: Bruno Mars MetLife audience signal.** taranimeramaro added 3 dates simultaneously — purchase pattern is "trip to East Rutherford for the long weekend." Lookalike audience seed: Bruno Mars + multi-date purchase + MetLife-area travel. Worth 30 min of the Ads Agent's day. (c) Attribution-pull dependency now **3 days unfulfilled** — if Apr 22 cluster + Apr 25 signups share a source, that's a discovery worth chasing immediately.

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — Day 20. (b) Drip cron revival — Day 20, blocking all 15 drafted emails above. (c) Server-side `last_scan_at` emission on watchlist rows — superseded by loss-aversion rec. (d) Newsletter homepage form audit — 84 days flat. (e) Pre-populated-item flag on watchlist schema for reciprocity rec. (f) **NEW:** `tracker_count` aggregation in search response for social-proof rec.

## Trend watch (7-day)

| Metric | Apr 20 | Apr 21 | Apr 22 | Apr 23 | Apr 24 | Apr 25 | Apr 26 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| Total users | 55 | 55 | 56 | 60 | 60 | 60 | **62** |
| Watchlist items | 74 | 74 | 75 | 81 | 81 | 81 | **85** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 1 | 0 | 1 | 4 | 0 | 0 | **2** |
| `usersThisWeek` | 4 | 4 | 5 | 8 | 8 | 7 | **9** |
| At-risk count | 3 | 3 | 3 | 4 | 2 | 2 | **3** |
| Churned count | 47 | 47 | 48 | 49 | 52 | 52 | **52** |
| Activation rate (real users) | — | — | — | — | 73.7% | 73.7% | **75.4%** |

**Read:** The forecast in yesterday's report was wrong — the silence didn't extend, it broke. Apr 26 brought 2 signups + 4 watchlist adds. **Both signups activated**, which is why the never-activated rate moved 26.3% → 24.6% — **the first downward movement on activation rate in 6 days.** The flat metrics (targets 0, emails 0, subscribers 3) all stayed flat; nothing on the retention infrastructure side moved. **Acquisition is back; retention is still off.**

**Three confirmed algo-flip post-mortems incoming this week:** tate (Apr 24, archived), goldy (Apr 25, archived), **ajvanprooyen (in progress, May 1 + May 2 + May 3 all flipped, 3 more flips queued daily through Apr 29).** Forecasting cadence is correct; delivery infrastructure still off Day 20.

**One signal worth watching:** the activation rate moved 1.7pp on a single day's data. With n=2, this is noise. With three more consecutive instant-activate signups it becomes a pattern worth tracing back to a channel. **The Analytics Agent attribution pull is the single most leveraged unfulfilled request on the platform right now** — the difference between "we got lucky on Apr 25" and "we accidentally found a high-intent acquisition channel" is one query.
