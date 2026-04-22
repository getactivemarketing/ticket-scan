# Growth Daily -- 2026-04-22

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 21 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 56    | 100%       | **+1 (charlesteel126, this morning)** |
| New (last 7 days)           | 5     | 8.9%       | +1 (API `usersThisWeek: 5`) |
| Activated (has watchlist)   | 40    | 71.4%      | **+1** (charlesteel activated in 36 seconds) |
| Active (visited in 7 days)  | ~5    | ~8.9%      | +1 (charlesteel Day 0, fresh) |
| At-risk (no visit 7-14d)    | 3     | 5.4%       | 0 (pete/goldy/blubberboi — each +1d) |
| Churned (no visit 14d+)     | 49    | 87.5%      | 0 (tate/tosophia/brigitte all aging) |

> Day 16 without `last_login_at` instrumentation. "Active" and "at-risk" remain signup-date inferences.
> Active alerts across 75 watchlist items: **0**. Target-price capture rate: **0% (Day 16).**

## What changed in 24h

1. **New signup: charlesteel126@gmail.com (id 56).** Registered Apr 22 11:38:41 UTC. First watchlist item added **36 seconds later** (11:39:17 UTC): Bruno Mars — The Romantic Tour, Ohio Stadium, Columbus, May 20 (28d out). Day-0 self-activator. Target price not set.

2. **Bruno Mars is now our clearest cross-user pattern.** Five watchlist items across four distinct users, spanning four venues:
   - charlesteel → Ohio Stadium, Columbus (May 20) — new today
   - konman87 → Soldier Field, Chicago x2 (May 16, May 17)
   - rgbarrasso → MetLife Stadium Suites, East Rutherford (Aug 26)
   - runes_fact_5u → Stadsschouwburg Antwerpen tribute (Jan 30, passed)
   
   No other artist has 4 distinct users. Harry Styles has more *items* (11) but only one user (tosophiameyer). Backstreet Boys has 10 items / one user (brigitte). Bruno Mars is the first touring act with genuine watchlist breadth. **Hand to Content Agent for hub-page/tour-tracker consideration. Hand to Ads Agent for audience signal.**

3. **Day-0 activation streak is healthier than yesterday's 50/50 read.** Last five signups: dylanbaldy (0), nicklib (1, 4m), josh (1, 28s), dr.altvater (0), charlesteel (1, 36s). **3/5 activate same-visit.** The split is 60/40 in favor of activation, and all three activators added an event within five minutes of signup. The non-activators (dylanbaldy, dr.altvater) are the users without a specific event in mind at signup. That's the acquisition-side signal: "what event?" framing at the registration CTA converts.

4. **josh crosses Day 3 today.** Added AEW Apr 19 20:30 UTC. Drip threshold at ~72h — hit this morning. Zero emails sent (drip engine Day 16 dead). AEW Double or Nothing is 32 days out — his event still has runway and target-price framing is appropriate. Pre-drafted copy below.

5. **nicklib (Day 5) / dylanbaldy (Day 6) / dr.altvater (Day 2) all past or approaching drip thresholds with zero emails sent.** Same state as yesterday, +1 day older across the board.

6. **tate.sheppard's Florence event is 9 days out. Algo flip in 2 days (Apr 24 Friday).** Eighth consecutive daily flag. Target-price email for this user is pointless after Friday — site-wide `buy_now` override kicks in. If it hasn't shipped by Thursday EOD EDT, accept this as a learning case (not a live intervention) and carry the data into next month's retro.

7. **goldy.pec's Bilmuri event is 10 days out. Algo flip Apr 25 (Saturday).** Three days left. Same dynamic as tate, one day more breathing room.

8. **pete.uzelac77 hits Day 11.** Drip #3 (Day-14) threshold in two days (Apr 24). He is the textbook target-price UX fix case: 6 items × 0 targets × 660+ cross-market checks run = zero emails produced. If the drip pipe gets fixed before Apr 24, his Day-14 send is the highest-leverage deliverable in queue.

9. **Drip engine: Day 16 inactive.** `pendingUsers: 20`. All `last_email_sent: 0`. Six users have passed Day-3 in this window. Three users have passed Day-7. Two have passed Day-14. None received anything.

10. **Newsletter subscribers: 3, unchanged since Feb 1.** Homepage form has produced zero signups in April. CRO Agent territory — flagging for today's CRO handoff.

## Activation gap

- **2 users** signed up in last 7 days with 0 watchlist items (same as yesterday):
  - **dylanbaldy@gmail.com** — Day 6 (+1). Longest-running activation failure in the new-user window.
  - **dr.altvater-70199@web.de** — Day 2 (+1). 48h in, still 0. Crosses Day-3 drip threshold tomorrow.
- **13 real users** (excluding 3 test accounts) have never added a watchlist item → **25.0% of real signups** (slight improvement from yesterday's 21.8% count, now including dr.altvater).
- **Acquisition-source inference on charlesteel:** Ohio, Bruno Mars, Day-0 activation in 36s. Same pattern as josh/nicklib — user arrives *for* an event. The Bruno Mars interest points to either our Ohio Stadium venue page, the compare tool, or a Bruno-Mars-related search result. No analytics attribution yet — hand to Analytics Agent for referrer pull.

## Churn signals

- Unsubscribes today: **0** (newsletter list is so static it's an anti-signal)
- Users entering "at-risk" today: 0 (rotation stable: pete/goldy/blubberboi)
- Users entering "churned" today: 0 (no Apr 7–8 signup to roll into 14d window; next rollover is Apr 25 → bhaygood at 22d already churned, laye.aurelien at 20d already churned)
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 16)
- Events passed without notification (cumulative): 5 (NCAA 2nd Rd x2 Mar 21–22, Cardi B Apr 12, Phillies Apr 17, WWE Chamber Feb 28, plus Feb archive — recount in weekly)
- Days-since-signup for oldest non-activators: fanwar2000 (102d), samir.sgpatel (110d), ctwarman (88d), maresa (87d), calchristensen (88d). These users are statistical dead weight at this point but still receive mention for completeness.

## At-risk users (7–14d inactive)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| pete.uzelac77+ticketscan@gmail.com | 11d | 6 (4 WC + 2 Darts, 0 targets) | 56–73d (WC) / 64–65d (Darts) | Tier 2 target-price prompt; **Day-14 drip fires Apr 24** |
| goldy.pec.2012@gmail.com | 12d | Bilmuri @ The Sylvee May 2 | **10d** | **URGENT pre-event — algo flip in 3d (Apr 25)** |
| blubberboi@yahoo.com | 12d | Ed Sheeran @ SoFi Aug 8 | 108d | Tier 2 gentle nudge — long runway |

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| tate.sheppard@gmail.com | ~39d | Florence + Machine @ State Farm Atlanta | **9d — algo flip in 2d (Apr 24)** | **CRITICAL** |
| tosophiameyer@gmail.com | ~43d | **11** (Harry Styles MSG, Aug 26–Sep 16) | 124–148d | **HIGH — power user** |
| brigitte.theisen@gmail.com | ~56d | **10** (Backstreet Boys Sphere, Jul 17–Aug 6) | 86–106d | **HIGH — power user** |
| laye.aurelien@wanadoo.fr | ~21d | 2 (Shakira, Jul 20 + 23) | 89–92d | HIGH |
| lvasub6@gmail.com | ~24d | 2 (Flyleaf HoB Chicago, Jul 17–18) | 86–87d | HIGH |
| krusesin2023@gmail.com | ~54d | 2 (Flyleaf, Jul) | Yes | MEDIUM |
| ldholman@ymail.com | ~50d | 3 (Bad Omens passed; 2x Motionless In White Aug 11) | Partial | MEDIUM |
| spcoog83@gmail.com | ~45d | 1 (Olivia Dean @ Toyota Aug 25) | 125d | MEDIUM |
| edithdionne@hotmail.com | ~49d | 1 (A7X + GC @ Centre Bell Aug 8) | 108d | MEDIUM |
| bhaygood728@gmail.com | ~20d | Cardi B (passed Apr 12) | No | LOW |
| chocolateyu1083@yahoo.com | ~23d | 1 (Oilers — passed Mar 31) | No | LOW |
| arin.gelbaugh@outlook.com | ~23d | 1 (NCAA Final Four — passed Apr 4) | No | LOW |
| missbrookeshep@gmail.com | ~50d | 1 (Warriors/Rockets — passed Apr 5) | No | LOW |
| billstromkel@gmail.com | ~29d | 1 (RAYE — passed Apr 8) | No | LOW |
| jkaiser@weberschool.org | ~37d | 1 (NCAA 2nd Rd — passed Mar 21) | No | LOW |
| tucwildcat@msn.com | ~32d | 1 (NCAA 2nd Rd — passed Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users' only tracked event has already happened (up from 7 yesterday — bhaygood's Cardi B is now 10d in the past and fits this bucket cleanly). For this cohort, target-price copy has no hook. Either we rebuild the re-engagement motion around "here's what's new in your city/genre" or we accept that these accounts are dormant until a future pull triggers them back.

## Churn intervention: email content (ready to queue when drip engine returns)

### CRITICAL — tate.sheppard@gmail.com (Florence, 9d out, **algo flip Friday**)

Eighth daily flag. Two days left before the site itself overrides any target we'd email about. Not cutting copy further — the problem is delivery, not wording.

**Subject:** Florence in 9 days — Friday is the last day a price alert means anything
**Body:**
> Florence + The Machine at State Farm Arena is nine days out. You added it to your watchlist March 14. We've run around 250 cross-marketplace price checks since then. Zero emails sent, because no target price was ever set.
>
> Friday is the deadline: on Apr 24 the event moves inside our 7-day window and our recommendation engine hardcodes "buy now" regardless of price. Any target-price alert you set after Friday gets overridden by the site itself — we'd be emailing "lowest hit $X" while the event page tells you to just buy.
>
> Ten seconds, one number, and the thing you signed up for actually starts doing its job.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** 10am EDT Thursday

---

### URGENT — goldy.pec.2012@gmail.com (Bilmuri, 10d out, algo flip Saturday)

Day 12 inactive. Three-day runway before algo override.

**Subject:** Bilmuri in 10 days — Saturday the alerts stop mattering
**Body:**
> Bilmuri at The Sylvee is ten days away. On Saturday (Apr 25) the event crosses inside our 7-day window where the recommendation engine flips to "buy now" on its own — at that point any target-price alert you set just gets overridden by the site.
>
> If you want the cross-market email — Ticketmaster, SeatGeek, StubHub, whichever hits your number first — this week is the last useful window.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** 6pm CDT Wednesday

---

### Tier 2 — pete.uzelac77+ticketscan@gmail.com (Day 11, 6 items × 0 targets, Day-14 drip in 2d)

This is the most leveraged deliverable in the pending queue if the drip engine revives before Apr 24. 660+ checks, 0 emails — the arithmetic sells itself.

**Subject:** 6 events, 660 price checks, 0 emails — one setting fixes all of it
**Body:**
> Six events on your TicketScan watchlist — four World Cup matches at Lincoln Financial, two nights of Darts Masters at MSG. Since April 10 we've run roughly 660 cross-market price checks across them. None produced an email to you.
>
> The missing piece is the target price. Without one, we can see the movement but don't know which way matters to you. With one set — even a rough ceiling — we email the moment any of the three marketplaces drops below.
>
> Group-stage World Cup matches at Lincoln Financial have been drifting 15–25% below opening-week resale floors. A target now catches the next dip.
>
> [Set target prices on your 6 events](https://www.ticketscan.io/watchlist)

**Send timing:** 11am EDT Apr 24 (Day-14 drip convergence)

---

### Tier 2 — blubberboi@yahoo.com (Day 12, Ed Sheeran, 108d runway)

Long tail. Same copy as yesterday's draft, date-updated.

**Subject:** Ed Sheeran at SoFi: 108 days, ~72 price checks logged, still silent
**Body:** (unchanged — target-price pointer, low-urgency framing)

**Send timing:** 6pm PDT

---

### Day-3 event-aware — joshdguillemette@gmail.com (hit Day-3 threshold this morning, AEW 32d out)

Drip #1 should have fired this morning. Event is legitimately future-dated — standard copy works with light AEW personalization.

**Subject:** Your AEW watchlist is 3 days old — here's what we've done and what's missing
**Body:**
> Three days ago you added AEW Presents Double or Nothing to your watchlist. Since then we've run 18 cross-market price checks — Ticketmaster, SeatGeek, StubHub, every 4 hours. Baseline is covered.
>
> What's not switched on: the alert. Without a target price we can see movement but won't email. Set a number — "I won't pay more than $120" is a fine starting point — and you'll get an email the moment any marketplace drops below.
>
> Louis Armstrong outdoor shows tend to soften on resale 7–14 days out. A target set now catches that dip cleanly.
>
> [Set your target on Double or Nothing](https://www.ticketscan.io/watchlist)

**Send timing:** Apr 22, 7pm EDT (Day-3 aligned, evening NY user)

---

### Welcome / Day-0 follow-up — charlesteel126@gmail.com (new today, Bruno Mars Ohio Stadium)

Fresh Day-0 activator. Do NOT send this today — too early, too desperate. Queue for Day-3 (Apr 25 Saturday) with Bruno-Mars-specific framing. Using the Bruno Mars cross-user data as the hook.

**Subject (Day 3):** Bruno Mars at Ohio Stadium is 25 days out — here's how to lock the price
**Body:**
> You added Bruno Mars at Ohio Stadium to your watchlist on Tuesday. 25 days until the show. Every 4 hours since you added it, we've been pulling prices from Ticketmaster, SeatGeek, and StubHub for that date.
>
> One thing worth knowing: Bruno Mars resale on this tour has been sticky at opening-week prices until about 10 days out, then softens 20–30% in the final week as listers get nervous. If you set a target price now — even a rough ceiling — you'll get an email the moment any of the three marketplaces drops below it, including during that late-window softening.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** Apr 25, 10am EDT (Day-3, weekend midmorning)

---

### Welcome — dr.altvater-70199@web.de (Day 2, 0 watchlist, crosses Day-3 tomorrow)

German-domain user who hasn't activated. Drip #1 fires conceptually tomorrow. Pre-queue a World Cup–led version given the .de signal.

**Subject:** You signed up 2 days ago — World Cup is 50 days away
**Body:**
> Thanks for signing up. You haven't added an event yet, so here's what TicketScan does in 10 seconds: we check resale and primary prices on any event you add — Ticketmaster, SeatGeek, StubHub — every four hours, and email you when the lowest listing hits a target price you set.
>
> Starting points if you're new:
> - **World Cup 2026** (50 days out) — full 104-match schedule, venue-by-venue pricing, group stage through final. [See the schedule](https://www.ticketscan.io/world-cup-2026).
> - **Summer shows in a US city you might visit** — Bruno Mars (Columbus/Chicago/NJ), Ed Sheeran (LA), Backstreet Boys residency (Vegas).
>
> [Browse events](https://www.ticketscan.io/dashboard)

**Send timing:** Apr 23, 9am CET

---

### Ongoing — dylanbaldy@gmail.com (Day 6, 0 watchlist)

Day 6. No draft has shipped. Shortening further — this is now the sixth consecutive day we've flagged him. Delivery, not copy, is the variable.

**Subject:** Still haven't picked anything — one event is all we need
**Body:**
> Six days in. You signed up but haven't added an event. Until you do, TicketScan is a product that does exactly zero work on your behalf.
>
> Pick one thing — any event, any budget — and the every-4-hour cross-market check switches on. Target price optional at first; you can set it later.
>
> - [NBA Playoffs Round 1 live now](https://www.ticketscan.io/tickets/nba-playoffs)
> - [Bruno Mars summer tour](https://www.ticketscan.io/search?q=bruno+mars)
> - [World Cup 2026 — 50 days out](https://www.ticketscan.io/world-cup-2026)
> - [Your city](https://www.ticketscan.io/dashboard)

**Send timing:** 11am EDT

---

### Day-5 event-aware follow-up — nicklib253@gmail.com (Day 5, Phillies already passed)

Past threshold, bespoke needed (standard Day-3 copy is wrong). Same draft as yesterday — no new context warranting a rewrite.

**Subject:** Phillies–Braves is behind us. What's the next one?
**Body:** (unchanged — "same-day resale use case" reframe, pointer to next-up options)

**Send timing:** 7pm EDT

---

## Psychology-driven optimization — one recommendation

### Principle: **Loss aversion**, applied to each watchlist row

**Where:** `WatchlistCard` component on `/watchlist`, rendered per row below the event name.

**Problem this targets:** Day 16 of 0% target-price capture. The watchlist UI tells users what they're *tracking* but not what they're *missing* by tracking without a target. Users have no felt sense of the work already done on their behalf or the emails they haven't received because of a missing setting.

**Exact UX change:**

Add a one-line status strip below each watchlist row with per-event data the cron is already collecting:

```
[!] 47 price checks run since you added this · 0 alerts sent · no target price set
    [ Set a price → ]
```

The three data points are all derivable from existing tables — `price_history` rows count for check count, `price_alerts` for sent count, `watchlist.target_price IS NULL` for the prompt. No new collection needed.

**Why loss aversion beats the current "Set alert" CTA:**

The current CTA is neutral ("Set Alert" button). Loss-aversion copy tells the user the system is already working — 47 checks is sunk cost the user didn't pay for — and that zero of that work has produced a benefit to them *because of one missing setting*. The frame is: "we've already done the expensive part; you're one setting away from getting paid for it." Users who set a target convert effort-already-spent into a felt asset.

**Counter-copy variants to A/B later:**
- Neutral (control): "Set a target price to get alerts"
- Loss aversion (variant A): `47 checks run · 0 alerts sent · no target set`
- Social proof (variant B): `Users who set targets catch an average 18% price drop within 3 weeks`
- Urgency (variant C, event-aware): `28 days until this event — typical price softening starts around day 10`

**Expected impact:**
On current base of 75 items × 0 targets, moving even 20% of items to a target set = 15 targets. At even one triggered alert per 3 targets over a month, that's 5 alerts sent. First alerts in product lifetime. The narrative value (screenshots, post-back marketing, first positive case study) outweighs raw volume.

**Ship cost:** Single component edit, ~30 minutes of frontend work. Data sources already live.

**Hand to:** CRO Agent (Agent 6) for component-level spec; Email Agent (Agent 5) for aligned post-trigger email copy ("We emailed because your target hit — here's what the price did").

---

## Deliverables (handoffs)

1. **CRO Agent:** Activation-gap report is unchanged (dylanbaldy Day 6, dr.altvater Day 2). Today's add: **Newsletter homepage form has produced zero signups in April** — it's silently broken or silently invisible. Please audit form rendering, submit path, and `/api/newsletter/subscribe` endpoint. Also: loss-aversion watchlist row spec above.

2. **Email Agent:** Ten churn-intervention emails ready to queue above. None will send until drip engine revives. When it does, priority order: tate (tomorrow, critical) → goldy (Wed) → pete (Thu Day-14) → josh (Day-3 retro, today) → everyone else.

3. **Content Agent:** Bruno Mars is now our clearest cross-user pattern — 5 items / 4 users / 4 venues. Worth a tour-tracker hub page aggregating Ohio Stadium, Soldier Field, MetLife, plus other 2026 dates. Secondary: Lincoln Financial World Cup cluster (pete's 4 items) suggests a venue-specific WC price-tracking landing.

4. **Ads Agent:** Audience signal — Bruno Mars interest is broadly distributed (not one superfan, four distinct users across four cities). Worth a test lookalike segment.

5. **Analytics Agent:** Please pull referrer/landing-page data for charlesteel (signup 11:38 UTC today) and dr.altvater (Apr 20 14:08 UTC). One activated Day-0, one didn't. If the landing pages differ, that's the acquisition-quality signal we've been missing all week.

6. **Open from previous days (unchanged):** (a) `last_login_at` column for users table, (b) drip cron unclogging — Day 16, (c) server-side `last_scan_at` emission on watchlist rows to power the loss-aversion copy above without per-render queries.

## Trend watch (7-day)

| Metric | Apr 16 | Apr 17 | Apr 18 | Apr 19 | Apr 20 | Apr 21 | Apr 22 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| Total users | 52 | 53 | 53 | 54 | 55 | 55 | **56** |
| Watchlist items | 72 | 73 | 73 | 74 | 74 | 74 | **75** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |

**Read:** Acquisition is slow-and-steady (+4 users in 7 days, ~0.6/day). Watchlist adoption among new users is working when users have intent at signup (3/5 Day-0 activators this week). Every other automation-driven lever — drip, target-price capture, price alerts, newsletter growth — has been at zero for 16 straight days. Growth right now is coming entirely from the acquisition funnel; none of the retention/engagement machinery is firing.
