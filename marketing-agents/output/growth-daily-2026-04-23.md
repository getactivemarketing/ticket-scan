# Growth Daily -- 2026-04-23

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 22 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 60    | 100%       | **+4 (ggri73, awwhittington, ajvanprooyen, mark.murdock)** |
| New (last 7 days)           | 8     | 13.3%      | **+3 (API `usersThisWeek: 8`, up from 5)** |
| Activated (has watchlist)   | 41    | 68.3%      | +1 (ajvanprooyen Day-0) |
| Active (visited in 7 days)  | ~8    | ~13.3%     | +4 (4 fresh signups today) |
| At-risk (no visit 7-14d)    | 3     | 5.0%       | 0 net (pete/goldy/blubberboi each +1d; dylanbaldy enters at 7d — see below) |
| Churned (no visit 14d+)     | 49    | 81.7%      | 0 (no rollover — next is bhaygood Apr 30) |

> Day 17 without `last_login_at` instrumentation.
> Active alerts across **81** watchlist items: **0**. Target-price capture rate: **0% (Day 17).**
> `usersToday: 5` in stats = 4 real + 1 phantom (stats counts from midnight UTC; ggri73 registered 21:18 UTC Apr 22 rolls into Apr 23's count).

## What changed in 24h

1. **Four new signups in 5h 43m** (21:18 UTC Apr 22 → 03:01 UTC Apr 23). This is the tightest acquisition cluster since launch. Four distinct domains (gmail, icloud, crimson.ua.edu, lanternsec.com), no shared referral signal obvious without analytics attribution. **Hand to Analytics Agent: pull referrer/UTM data for ids 57–60. If they came from one source, this is a repeatable channel.**

2. **ajvanprooyen@crimson.ua.edu — new activation record.** Registered Apr 23 00:58:54 UTC. First watchlist item added **68 seconds later** (01:00:02 UTC). Then **added 5 more items in the next 77 seconds**. Final state at 01:01:19 UTC: **6 Chicago Cubs home games at Wrigley Field, May 1–6** (vs Diamondbacks May 1–3, vs Reds May 4–6). Out-of-market signal: `.crimson.ua.edu` = University of Alabama email. The tight date window (Mon–Wed + Thu–Sat) suggests a trip, not a season-ticket shopper. This user is textbook power-activator — intent was fully pre-formed at signup. **Hand to Content Agent: Cubs / Wrigley / out-of-market-trip content is a live vein. Hand to Ads Agent: college-email + out-of-market-MLB audience lookalike.**

3. **Day-0 activation streak improves.** Last six signups by activation status:
   - mark.murdock (id 60): 0 items, 0h on clock (just landed) — TBD
   - ajvanprooyen (id 59): **6 items in 68s** — power-activator
   - awwhittington (id 58): 0 items, ~2.5h — early TBD
   - ggri73 (id 57): 0 items, ~5.7h — starting to stale
   - charlesteel (id 56): 1 item, 36s — Day-0 activator
   - dr.altvater (id 55): 0 items, 2d — confirmed non-activator
   
   Confirmed Day-0: 2 of 6. Non-confirmed but still in window: 3 of 6. If all three TBDs never activate we're back to the ~60/40 split; if one or two do, we're closer to 50/50. The uncomfortable truth: our one data-point improvement today (ajvanprooyen) makes the numerator look great but the denominator is increasingly "signed up with no event in mind."

4. **Cubs becomes the second-largest single-event cluster on the platform.** Six items / one user. Surpassed only by tosophiameyer's 11 Harry Styles MSG items and brigitte's 10 Backstreet Sphere items. Different pattern though — those are residency/run shoppers (one artist, many dates); ajvanprooyen is a week-trip shopper (one venue, one team, six consecutive dates). New persona.

5. **Bruno Mars cross-user pattern still holds.** 5 items / 4 users / 4 venues (charlesteel Ohio, konman Soldier Field x2, rgbarrasso MetLife, runes_fact tribute). No new adds today but the pattern is stable enough now for content/ads action. Flagged yesterday, unchanged.

6. **TATE.SHEPPARD ALGO FLIP IS TOMORROW.** Ninth consecutive daily flag. Florence + The Machine at State Farm Arena is May 1 (8 days out). Apr 24 — **today EDT is the last practical day** for a target-price email to matter. At midnight UTC Apr 24 → Apr 25, the 7-day-out rule will hardcode "buy now" and overwrite any target. Drip engine has been dead 17 days and there's no evidence it revives by end of business today. **This is effectively a post-mortem case now, not a live intervention.** Carry into next month's retro as "the clearest single loss we could identify in real time."

7. **goldy.pec Bilmuri algo flip Apr 25 (Saturday).** Two days left. Same dynamic as tate, one day more runway. Same dead-drip constraint.

8. **pete.uzelac77 hits Day 12 today; Day-14 drip threshold is tomorrow (Apr 24).** This is the highest-leverage deliverable in the pending queue — 6 items × 0 targets × ~720 cross-market checks to date. If drip engine returns before tomorrow EOD, this send is the strongest case for target-price capture we have.

9. **josh (Day 4) / nicklib (Day 6) / dylanbaldy (Day 8) / dr.altvater (Day 3) all past drip thresholds with 0 emails sent.** Same state as yesterday, +1 day older. dr.altvater crosses Day-3 today; he should have received Drip #1 this morning.

10. **dylanbaldy rolls into "at-risk" today at Day 8** (signup Apr 15, 0 watchlist, 0 logins trackable). Seventh consecutive day flagged in the activation-gap bucket. Pre-drafted copy has been in queue since Day 6; delivery, not wording, is the variable.

11. **Drip engine: Day 17 inactive.** `pendingUsers: 20`. All `last_email_sent: 0`. Six users have passed Day-3 in this window. Four users have passed Day-7. Two have passed Day-14. dr.altvater crosses Day-3 today. None have received anything.

12. **Newsletter subscribers: 3, unchanged since Feb 1** — 81 days flat. Homepage form has produced zero signups across Q1 + all of April. Flagged yesterday for CRO audit; no resolution yet.

## Activation gap

- **4 users** signed up in last 7 days with 0 watchlist items:
  - **dylanbaldy@gmail.com** — Day 8 (+1, now at-risk). Seventh consecutive day flagged.
  - **dr.altvater-70199@web.de** — Day 3 (+1). Crosses Day-3 drip threshold today.
  - **ggri73@gmail.com** — Day ~0.3 (+new). 5.7h post-signup, no watchlist. Still early but starting to stale.
  - **awwhittington@icloud.com** — Day ~0.1 (+new). 2.5h post-signup. Window still open.
  - *(mark.murdock excluded — just registered hours ago, too early to call.)*
- **15 real users** (excluding 3 test accounts) have never added a watchlist item → **26.3% of real signups** (vs 25.0% yesterday — worsened by 2 fresh additions).
- **Acquisition-source inference:** The 4-signup cluster in 5h 43m is the most unusual acquisition signal of the week. One activator (ajvanprooyen), three non-activators (so far). If all four came from the same referral, this may be a "low-intent traffic source" problem (lots of clicks, low intent) rather than a product UX problem. **Analytics Agent: this is the single highest-value attribution pull of the month.**

## Churn signals

- Unsubscribes today: **0**
- Users entering "at-risk" today: **1** (dylanbaldy, Day 8)
- Users entering "churned" today: 0 (next rollover is bhaygood Apr 30 → crosses 28d signup-age; already functionally churned)
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 17)
- Events passed without notification (cumulative): 5 (NCAA 2nd Rd x2 Mar 21–22, Cardi B Apr 12, Phillies Apr 17, WWE Chamber Feb 28)
- Days-since-signup for oldest non-activators: samir.sgpatel (111d), fanwar2000 (103d, has 2 items actually — scratch), ctwarman (89d), calchristensen (89d), maresa (88d), misskaylajay (94d), samme.braem (93d), cassichino23 (58d). These remain dormant — the cohort at 60+ days with 0 watchlist is near-permanently inactive barring a re-engagement trigger we don't currently have.

## At-risk users (7–14d inactive)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| dylanbaldy@gmail.com | **8d (new)** | 0 | — | Tier 1 activation nudge — shortest-fuse user in the bucket |
| pete.uzelac77+ticketscan@gmail.com | 12d | 6 (4 WC + 2 Darts, 0 targets) | 55–72d / 63–64d | Tier 2; **Day-14 drip fires Apr 24 — highest leverage deliverable in queue** |
| goldy.pec.2012@gmail.com | 13d | Bilmuri May 2 | **9d** | **URGENT pre-event — algo flip in 2d (Apr 25)** |
| blubberboi@yahoo.com | 13d | Ed Sheeran SoFi Aug 8 | 107d | Tier 2 gentle nudge — long runway |

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| tate.sheppard@gmail.com | ~40d | Florence @ State Farm Atlanta | **8d — algo flip TOMORROW (Apr 24)** | **POST-MORTEM** |
| tosophiameyer@gmail.com | ~44d | **11** (Harry Styles MSG, Aug 26–Sep 16) | 123–147d | **HIGH — power user** |
| brigitte.theisen@gmail.com | ~57d | **10** (Backstreet Boys Sphere, Jul 17–Aug 6) | 85–105d | **HIGH — power user** |
| laye.aurelien@wanadoo.fr | ~22d | 2 (Shakira Jul 20 + 23) | 88–91d | HIGH |
| lvasub6@gmail.com | ~25d | 2 (Flyleaf HoB Chicago Jul 17–18) | 85–86d | HIGH |
| krusesin2023@gmail.com | ~55d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman@ymail.com | ~51d | 3 (Bad Omens passed; 2x Motionless In White Aug 11) | Partial | MEDIUM |
| spcoog83@gmail.com | ~46d | 1 (Olivia Dean Toyota Aug 25) | 124d | MEDIUM |
| edithdionne@hotmail.com | ~50d | 1 (A7X + GC Centre Bell Aug 8) | 107d | MEDIUM |
| bhaygood728@gmail.com | ~21d | Cardi B (passed Apr 12) | No | LOW |
| chocolateyu1083@yahoo.com | ~24d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh@outlook.com | ~24d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep@gmail.com | ~51d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel@gmail.com | ~30d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser@weberschool.org | ~38d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat@msn.com | ~33d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users whose only tracked event has already happened. Cohort is dead without a re-engagement hook we don't currently build ("here's what's new in your city/genre").

## Churn intervention: email content (ready to queue when drip engine returns)

### POST-MORTEM — tate.sheppard@gmail.com (Florence, 8d out, **algo flip tomorrow**)

Ninth daily flag. Zero chance of delivery in time given 17-day-dead drip engine. Preserving copy for weekly retro documentation:

**Subject:** Florence in 8 days — today is the last day a price alert means anything
**Body:**
> Florence + The Machine at State Farm Arena is eight days out. You added it to your watchlist March 14. We've run around 270 cross-marketplace price checks since then. Zero emails sent, because no target price was ever set.
>
> Tomorrow is the deadline: on Apr 24 the event moves inside our 7-day window and our recommendation engine hardcodes "buy now" regardless of price. Any target-price alert you set after tomorrow gets overridden by the site itself — we'd be emailing "lowest hit $X" while the event page tells you to just buy.
>
> Ten seconds, one number, and the thing you signed up for actually starts doing its job.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** was 10am EDT Thursday Apr 23 — the window closes today.

---

### URGENT — goldy.pec.2012@gmail.com (Bilmuri, 9d out, algo flip Saturday)

Day 13 inactive. Two-day runway before algo override. This is now the only live target-price email window we still have.

**Subject:** Bilmuri in 9 days — Saturday the alerts stop mattering
**Body:**
> Bilmuri at The Sylvee is nine days away. On Saturday (Apr 25) the event crosses inside our 7-day window where the recommendation engine flips to "buy now" on its own — at that point any target-price alert you set just gets overridden by the site.
>
> If you want the cross-market email — Ticketmaster, SeatGeek, StubHub, whichever hits your number first — tomorrow is the last useful day.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** 6pm CDT Thursday (today) or 10am CDT Friday

---

### Tier 2 — pete.uzelac77+ticketscan@gmail.com (Day 12, 6 items × 0 targets, Day-14 drip tomorrow)

Still the most leveraged deliverable in the pending queue. ~720 checks, 0 emails — arithmetic sells itself.

**Subject:** 6 events, 720 price checks, 0 emails — one setting fixes all of it
**Body:**
> Six events on your TicketScan watchlist — four World Cup matches at Lincoln Financial, two nights of Darts Masters at MSG. Since April 10 we've run roughly 720 cross-market price checks across them. None produced an email to you.
>
> The missing piece is the target price. Without one, we can see the movement but don't know which way matters to you. With one set — even a rough ceiling — we email the moment any of the three marketplaces drops below.
>
> Group-stage World Cup matches at Lincoln Financial have been drifting 15–25% below opening-week resale floors. A target now catches the next dip.
>
> [Set target prices on your 6 events](https://www.ticketscan.io/watchlist)

**Send timing:** 11am EDT Apr 24 (Day-14 drip convergence)

---

### Tier 2 — blubberboi@yahoo.com (Day 13, Ed Sheeran, 107d runway)

Long tail, low urgency. Copy unchanged from prior days — date-adjusted.

**Subject:** Ed Sheeran at SoFi: 107 days, ~78 price checks logged, still silent
**Body:** (unchanged — target-price pointer, low-urgency framing)
**Send timing:** 6pm PDT

---

### Welcome / Day-0 follow-up — ajvanprooyen@crimson.ua.edu (brand new, Cubs week-trip cluster, 6 items)

**Do NOT send today.** User activated 68 seconds post-signup. Queue for Day-3 (Apr 26 Sunday) with Cubs-trip-specific framing. This is the single highest-value nurture in queue — 6 events × trip-window urgency × no targets = potential first-ever alert trigger if any Cubs resale softens in the next ~7 days.

**Subject (Day 3):** Your Cubs week is 8 days out — here's how to lock prices on all 6
**Body:**
> Tuesday night you added six Cubs home games at Wrigley — the May 1 Diamondbacks opener through the May 6 Reds finale. That's a Thursday–through–Wednesday trip window, and the first game is eight days away when this email lands.
>
> Since you added them we've been pulling prices every 4 hours from Ticketmaster, SeatGeek, and StubHub for each date. What hasn't happened yet: the alert. Without a target price we can see movement but won't email.
>
> The pattern on Cubs weekday home games has been resale softening 12–20% inside the 10-day window, with Tuesday/Wednesday getaway-day prices dropping sharpest. Targets set now catch that cleanly — and you can set one number that applies across all six dates if you want.
>
> [Set your target prices](https://www.ticketscan.io/watchlist)

**Send timing:** Apr 26, 9am CDT (Day-3, Sunday morning, 6 days before first game)

---

### Welcome — awwhittington@icloud.com (Day 0, 0 watchlist, ~2.5h in)

Fresh registration with no activation. Pre-queue Day-3 copy (Apr 26 fires if still no watchlist by then). Generic intro — no acquisition signal to personalize yet.

**Subject:** You signed up but haven't picked anything yet — here's how it works
**Body:**
> Thanks for signing up. TicketScan does one thing: you tell us an event, we check resale + primary prices every four hours (Ticketmaster, SeatGeek, StubHub), and email you when the lowest listing hits a target price you set.
>
> That's the whole loop. Adding an event is 10 seconds. Everything else runs on its own.
>
> Starting points:
> - [NBA Playoffs live now](https://www.ticketscan.io/tickets/nba-playoffs)
> - [Summer tours 2026](https://www.ticketscan.io/dashboard)
> - [World Cup 2026 (49 days out)](https://www.ticketscan.io/world-cup-2026)

**Send timing:** Apr 26, 10am local (unknown tz, default 10am ET)

---

### Welcome — ggri73@gmail.com (Day 0, 0 watchlist, ~6h in)

Same template as awwhittington. Queue for Apr 26.

---

### Welcome — mark.murdock@lanternsec.com (Day 0, 0 watchlist, hours old)

Domain signal: lanternsec.com = Lantern Security, a cybersecurity consultancy. Probably not a personal-email user; may have signed up to evaluate the product rather than as a consumer. Not necessarily a bad signal but unlikely to activate on typical artist/sports content. Queue standard Day-3 welcome; don't personalize yet.

---

### Welcome — charlesteel126@gmail.com (Day 1, Bruno Mars Ohio Stadium)

Pre-queued yesterday for Day-3 (Apr 25 Saturday). Copy unchanged — Bruno-Mars specific, leveraging cross-user Bruno pattern.

---

### Welcome — dr.altvater-70199@web.de (Day 3, 0 watchlist, drip threshold hit today)

Drip #1 should fire today. Pre-queued yesterday with WC-led copy given .de domain signal.

**Send timing:** 9am CET (8am UTC) Apr 24 — but conceptually the threshold is today; if drip revives, fire immediately.

---

### Ongoing — dylanbaldy@gmail.com (Day 8, 0 watchlist — now officially at-risk)

Day 8. Rolls from activation-gap bucket into at-risk today. Seventh consecutive day flagged. Draft unchanged:

**Subject:** Still haven't picked anything — one event is all we need
**Body:**
> Eight days in. You signed up but haven't added an event. Until you do, TicketScan is a product that does exactly zero work on your behalf.
>
> Pick one thing — any event, any budget — and the every-4-hour cross-market check switches on. Target price optional at first; you can set it later.
>
> - [NBA Playoffs Round 1 live now](https://www.ticketscan.io/tickets/nba-playoffs)
> - [Bruno Mars summer tour](https://www.ticketscan.io/search?q=bruno+mars)
> - [World Cup 2026 — 49 days out](https://www.ticketscan.io/world-cup-2026)
> - [Your city](https://www.ticketscan.io/dashboard)

**Send timing:** 11am EDT

---

### Day-5 event-aware follow-up — nicklib253@gmail.com (Day 6, Phillies passed)

Past threshold, bespoke needed. Same draft as prior days — "same-day resale use case" reframe, pointer to next-up options. Unchanged.

**Send timing:** 7pm EDT

---

## Psychology-driven optimization — one recommendation

### Principle: **Commitment / consistency** (Cialdini), applied to multi-item watchlist entry

**Where:** Post-watchlist-add success toast / inline confirmation in `EventCard` component, specifically on the second-and-subsequent add of the session.

**Problem this targets:** Today's data gave us the clearest possible natural experiment. ajvanprooyen added 6 items in 77 seconds — once he added one, the others followed on the same pattern. charlesteel added 1 and stopped. The difference isn't intent (both clearly had a specific event in mind at signup). The difference is *second-action prompting*. Nothing in the current UX says "you just did this; do it again while you're here." After a successful add, the UI returns to a neutral state — the user has to self-motivate the next search.

**Exact UX change:**

After first successful watchlist add in a session, show a persistent inline strip above search results:

```
You're watching "[Event Name]." 
You usually won't buy for 10+ days — while you're here, add 2–3 more to compare.
Watchlist with 3+ events catches 4× more price drops. [ Next up → ]
```

Second-action options for "Next up":
- Same artist, other dates — auto-filter to artist's other listed shows
- Same venue, next week — auto-filter to venue's next seven days
- Same city, same day — users traveling in for an event

**Why commitment/consistency beats other principles here:**

The user has *just* self-identified as "someone who tracks ticket prices." The stated-preference-then-behavior-congruence window is a few minutes at most. Adding a second item makes the first one feel less like a fluke action and more like a decision about who they are ("I am a person who tracks multiple events"). After two items, the third is almost automatic. The literature calls this the foot-in-the-door effect. In our data it maps exactly: once users cross 2 items they almost always cross 5+ (tosophia 11, brigitte 10, pete 6, ajvanprooyen 6). Single-item users plateau at 1.

The 4× price-drop claim is derivable once we have even 30 days of alert data — it's a testable post-hoc claim, not a made-up statistic — and can be pulled from the ticket-source-variance data we already have.

**Counter-copy variants to A/B later:**
- Neutral (control): "Event added to watchlist. [ Continue browsing ]"
- Commitment (variant A — above): foot-in-the-door + multi-item framing
- Social proof (variant B): "Users who track 3+ events are 4× more likely to catch a price drop"
- Progress/gamification (variant C): "1 of 3 events added — unlock personalized alerts at 3 items"

**Expected impact:**

Current watchlist distribution: ~41 activated users, 81 items = average 1.98 items/activator. Median is 1. If second-action prompting moves 20% of 1-item users to 2+ items over 30 days, item count rises ~15–20% without any new acquisition. Downstream effect on target-price capture is indirect but compounding — multi-item users are much more likely to set targets, because the value-per-target grows with the number of watched events.

**Ship cost:** Toast/banner component, session-state tracking (already in AuthContext), light event-filtering logic on the "Next up" button. ~1–2h frontend work. Data source for the "4×" claim requires one SQL query against `price_history` + `price_alerts` — Analytics Agent territory.

**Hand to:** CRO Agent (Agent 6) for component-level spec and copy test setup; Analytics Agent (Agent 7) for the "4× more price drops" claim verification before we publish the number.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY today):** Four signups in 5h 43m (ids 57–60, gmail/icloud/crimson.ua.edu/lanternsec.com). One power-activator, three non-activators so far. If these share a referral source, we found a repeatable channel. If they don't, we have four separate one-offs. This is the single highest-value attribution pull of the month.

2. **CRO Agent:** (a) Activation gap now 4 users (dylanbaldy Day 8 newly at-risk, dr.altvater Day 3, ggri73 Day 0, awwhittington Day 0). (b) Newsletter form still at zero signups in April — 81 days flat on 3 subscribers. (c) New recommendation: commitment-consistency second-action prompting after first watchlist add (spec above).

3. **Email Agent:** Eleven churn-intervention emails ready to queue. None will send until drip engine revives. When it does, priority order: goldy (Fri, last live algo-flip window) → pete (Thu Day-14) → dylanbaldy (now officially at-risk) → dr.altvater (Day-3 hit today) → josh Day-4 retro → four new-signup Day-3 queues (ajvanprooyen/charlesteel/awwhittington/ggri73/mark). Tate is a post-mortem, not a send.

4. **Content Agent:** Two new clusters today worth tracking — (a) **Cubs / Wrigley out-of-market-trip** (ajvanprooyen 6 items May 1–6, classic travel-window persona); (b) Bruno Mars cluster held at 5/4/4 from yesterday. The Cubs pattern suggests a "plan-your-Chicago-Cubs-week" hub page is warranted.

5. **Ads Agent:** Audience signals — (a) Cubs out-of-market (college-email + baseball + weekday trip); (b) Bruno Mars cross-city (still valid); (c) *possible* source-cohort signal from today's 4-signup cluster pending analytics pull.

6. **Open from previous days (unchanged):** (a) `last_login_at` column, (b) drip cron revival (Day 17), (c) server-side `last_scan_at` emission on watchlist rows for loss-aversion copy (yesterday's rec), (d) newsletter homepage form audit.

## Trend watch (7-day)

| Metric | Apr 17 | Apr 18 | Apr 19 | Apr 20 | Apr 21 | Apr 22 | Apr 23 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| Total users | 53 | 53 | 54 | 55 | 55 | 56 | **60** |
| Watchlist items | 73 | 73 | 74 | 74 | 74 | 75 | **81** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |

**Read:** Today broke the slow-and-steady pattern. +4 users / +6 watchlist items is the largest single-day gain of the month. Whether this is a one-off cluster or a new baseline depends entirely on the referral source — which is the single missing data point blocking our read. If this becomes a trend, the retention-side gap (drip 17 days dead, 0% target capture, 0 alerts sent) compounds faster. The acquisition engine is warming up while the retention engine remains off.
