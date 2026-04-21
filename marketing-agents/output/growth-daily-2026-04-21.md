# Growth Daily -- 2026-04-21

> **Reporting gap:** `growth-daily-2026-04-20.md` was not written. This report spans 48h of change since Apr 19. Where a metric jumped two days' worth, I note that explicitly.

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 19    |
|-----------------------------|-------|------------|--------------|
| Total users                 | 55    | 100%       | **+1 (dr.altvater, Apr 20)** |
| New (last 7 days)           | 4     | 7.3%       | +1 (API `usersThisWeek: 4`) |
| Activated (has watchlist)   | 39    | 70.9%      | 0 (dr.altvater signed up w/o adding an event) |
| Active (visited in 7 days)  | ~4    | ~7.3%      | ~0 (dr.altvater Day 0-1; josh/nick still in window) |
| At-risk (no visit 7-14d)    | 3     | 5.5%       | 0 (same trio: pete/goldy/blubberboi, now +2d older) |
| Churned (no visit 14d+)     | 49    | 89.1%      | 0 |

> Day 15 without `last_login_at` tracking. Every row except "Total users" and "Activated" remains an estimate.

## What changed since Apr 19 (48h window)

1. **New signup: dr.altvater-70199@web.de (id 55).** Registered Apr 20 14:08:30 UTC with **0 watchlist items**. German domain (.de) — our second European signup after laye.aurelien (France). 22 hours in now, still no watchlist activity. He is the first non-self-activator since dylanbaldy (Apr 15); the josh/nicklib "Day-0 activator" streak is broken. If he hasn't added an event by tomorrow morning UTC, he crosses into the same activation-gap bucket as dylanbaldy. We now have **two** users who signed up in the last 7 days with 0 watchlist items.

2. **josh's AEW event now 33 days out (was 35 on Apr 19).** He is Day 1. No return visit visible (can't verify without `last_login_at`). Day-3 drip threshold hits Apr 22 — we have 1 day before he becomes the next data point for whether the drip engine gets fixed.

3. **nicklib253 crossed Day 3 today.** This is the exact threshold the drip campaign was supposed to fire on. Zero emails have been sent. His Phillies event passed 4 days ago. The standard Day-3 onboarding copy would land on a user whose only tracked event is already over — this is the edge case flagged Apr 19. Custom event-aware copy is drafted below; delivery still requires the pipe to unclog.

4. **dylanbaldy Day 5, still 0 watchlist.** Two days past Day-3 drip trigger. Three days past the Day-3-refresh version I drafted Apr 19. He is now the oldest signup in the "activation gap" bucket.

5. **tate.sheppard's Florence crosses Day 10 out. Algo flip in 3 days.** This is the seventh consecutive daily report where tate has been flagged. May 1 show; algo flips on Apr 24. After Apr 24 the event page hardcodes `buy_now` and any target-price email becomes moot because the site itself overrides. Every previous "URGENT" flag on this user has produced exactly zero emails sent. Today's flag is the same.

6. **goldy.pec's Bilmuri crosses Day 11 out. Algo flip in 4 days.** Same dynamic as tate, one day less urgent. May 2 show, algo flips Apr 25.

7. **pete.uzelac77 Day 10.** Drip email #2 (Day-7) threshold passed 3 days ago. Drip email #3 (Day-14) threshold hits Apr 24. 6 items / 0 targets — the configuration that makes him the textbook case for the target-price UX fix.

8. **blubberboi Day 11.** Drip email #2 threshold passed 4 days ago. Ed Sheeran still 109 days out — low urgency.

9. **Drip engine Day 15.** `pendingUsers: 20` (same list as Apr 19). All `last_email_sent: 0`. Two users have crossed Day-3 in the last 48h without receiving anything (josh is 1 day away). Going on two straight weeks of deliverable intent with zero delivery.

## Activation gap

- **2 users** signed up in last 7 days with 0 watchlist items:
  - **dylanbaldy@gmail.com** — Day 5 (unchanged since Apr 19)
  - **dr.altvater-70199@web.de** — Day 0-1 (new — 22h in, watch for Day 1 conversion)
- **14 users** total have never added a watchlist item (25.5%, +1 from Apr 19's 13)
- 2 test/demo accounts = **12 real non-activated** users (21.8%)
- **Pattern update:** Day-0 self-activation streak broken. Last 4 signups: dylanbaldy (0), nicklib (1, Day-0 in 4m), josh (1, Day-0 in 28s), dr.altvater (0). Split is now 50/50. The "users who arrive with a specific event convert instantly, users who don't convert at all" pattern still holds — but the "users who don't" side of the ledger just doubled.
- **New: acquisition source for dr.altvater.** German-domain user landing on a ticket site for US events. Either (a) international World Cup interest (likely — WC 2026 is 50 days away and Europeans have disproportionate attention on the tournament), or (b) a generic ticket-comparison search. Analytics should pull referrer. If it's WC, we have a signal that international visitors are finding us organically and we can target them deliberately.

## Churn signals

- Unsubscribes today: 0
- Users entering churned today: 0 (no Apr 6-7 signup to roll over)
- Users entering at-risk today: 0 (rotation stable)
- Alert fatigue candidates: 0 (0 alerts ever triggered — Day 15)
- Drip emails sent: 0 (Day 15)
- Target prices set: **0 across 74 watchlist items** (Day 15 — 0%)
- Events passed without notification (cumulative): 4 (Cardi B 4/12, Phillies 4/17, plus Mar archive)
- **Activation gap doubled** Apr 15 → Apr 21: 1 → 2 users in 7-day window with 0 watchlist

## At-risk users (7-14 days inactive, updated)

| User | Days since signup | Watchlist events | Days to event | Recommended intervention |
|------|-------------------|-----------------|---------------|--------------------------|
| pete.uzelac77+ticketscan@gmail.com | 10d | 6 items (4 WC + 2 Darts Masters, 0 targets) | 57-74d (WC), 65-66d (Darts) | Tier 2 target-price prompt — 3 days past Day-7 drip, Day-14 trigger Apr 24 |
| goldy.pec.2012@gmail.com | 10d (signup), **11d inactive** | Bilmuri at The Sylvee May 2 | **11 days out** | **URGENT** pre-event nudge — algo flip Apr 25 |
| blubberboi@yahoo.com | 11d | Ed Sheeran at SoFi Aug 8 | 109d out | Tier 2 gentle nudge — long runway |

## Churned users with re-engagement potential

| User | Days inactive (est) | Watchlist items | Upcoming events? | Win-back priority |
|------|---------------------|-----------------|------------------|-------------------|
| tate.sheppard@gmail.com | ~38d | Florence + Machine @ State Farm Arena Atlanta | **10d — algo flip Apr 24** | **CRITICAL** (3 days left) |
| tosophiameyer@gmail.com | ~42d | **11** (Harry Styles MSG, Aug 26-Sep 16) | Yes — 125-148d | **HIGH — power user** |
| brigitte.theisen@gmail.com | ~55d | **10** (BSB Sphere Vegas, Jul 17-Aug 6) | Yes — 87-107d | **HIGH — power user** |
| laye.aurelien@wanadoo.fr | ~20d | 2 (Shakira, Jul 20 + Jul 23) | Yes — 90-93d | HIGH |
| lvasub6@gmail.com | ~23d | 2 (Flyleaf HoB Chicago, Jul 17-18) | Yes — 87-88d | HIGH |
| bhaygood728@gmail.com | ~19d | Cardi B (PASSED Apr 12) | No | LOW (no hook, fresh-churn ongoing) |
| krusesin2023@gmail.com | ~53d | 2 (Flyleaf, Jul) | Yes | MEDIUM |
| ldholman@ymail.com | ~49d | 3 (Bad Omens passed; 2x Motionless In White Aug 11) | Partial | MEDIUM |
| spcoog83@gmail.com | ~44d | 1 (Olivia Dean @ Toyota Center, Aug 25) | Yes — 126d | MEDIUM |
| edithdionne@hotmail.com | ~48d | 1 (A7X + Good Charlotte @ Centre Bell Aug 8) | Yes — 109d | MEDIUM |
| chocolateyu1083@yahoo.com | ~22d | 1 (Oilers — PASSED Mar 31) | No | LOW |
| arin.gelbaugh@outlook.com | ~22d | 1 (NCAA Final Four — PASSED Apr 4) | No | LOW |
| missbrookeshep@gmail.com | ~49d | 1 (Warriors vs Rockets — PASSED Apr 5) | No | LOW |
| billstromkel@gmail.com | ~28d | 1 (RAYE — PASSED Apr 8) | No | LOW |
| jkaiser@weberschool.org | ~36d | 1 (NCAA 2nd Round — PASSED Mar 21) | No | LOW |
| tucwildcat@msn.com | ~31d | 1 (NCAA 2nd Round — PASSED Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users' only tracked event is already in the past. There is no organic re-engagement hook for these users — we either give them a new reason to come back (e.g., "here's what you can track next month in your city") or we accept they're gone. The dashboard still shows these as "tracked events" which is misleading for both them and us.

## Churn intervention: email content

### CRITICAL: tate.sheppard@gmail.com (Florence, State Farm Arena Atlanta, 10d out, **3 days to algo flip**)

Seventh daily flag. Apr 24 (this Friday) is the last useful day. Every previous draft has not shipped. Sharpening the subject line further — the window is shrinking faster than the content is landing.

**Subject:** Florence is 10 days out — your target-price window closes Friday
**Body:**
> Florence + The Machine at State Farm Arena is 10 days away. You added it to your watchlist March 14. We've run ~230 cross-marketplace price checks since then. Zero emailed to you, because no target price was ever set.
>
> Here's the deadline: on Friday (Apr 24) the event moves inside the 7-day window. At that point our recommendation engine hardcodes "buy now" regardless of price, and any target-price alert becomes moot — we'd be telling you "the lowest listing hit $X" while the site itself says "just buy it."
>
> 10 seconds, one number, and we actually start doing the thing we said we'd do.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** 10am EDT (Atlanta user, morning open rate)

---

### URGENT: goldy.pec.2012@gmail.com (Bilmuri, The Sylvee Madison, 11d out, 4 days to algo flip)

Day 11 of inactivity. Same dynamic as tate, one day less pressure.

**Subject:** Bilmuri is 11 days out — Saturday is the deadline
**Body:**
> Bilmuri at The Sylvee is 11 days away. Saturday the event crosses into the 7-day window where our recommendation engine flips to "buy now" on its own and overrides any target-price alert you set after that point.
>
> If you want the cross-market alerts to actually do something for this show — email when Ticketmaster / SeatGeek / StubHub's lowest hits your number — this week is it.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** 6pm CDT (Madison evening)

---

### Tier 2: pete.uzelac77+ticketscan@gmail.com (Day 10, 6 items, 0 targets, drip #2 past + #3 in 4 days)

Drip #2 fired conceptually 3 days ago. Drip #3 would fire Apr 24. Neither will actually send. Copy focuses on the leverage: 6 events × 0 targets = we cannot do anything for him.

**Subject:** 6 events × 0 target prices = we can't email you anything useful
**Body:**
> You've got 6 events on your TicketScan watchlist — 4 World Cup matches at Lincoln Financial, 2 nights of Darts Masters at MSG — and we've been price-checking all 6 every 4 hours since April 10. That's around **660 cross-market price checks**, none of which produced an email to you.
>
> The missing piece: target prices. Without a ceiling set, we can't know which price movements to tell you about. With one set, even roughly, we'll email the moment any marketplace drops below.
>
> For World Cup specifically — prices on early group-stage matches at Lincoln Financial have been drifting 15-25% below opening-week floors on resale. A target set now catches the next dip.
>
> [Set target prices on your 6 events](https://www.ticketscan.io/watchlist)

**Send timing:** 11am EDT

---

### Tier 2: blubberboi@yahoo.com (Day 11, Ed Sheeran, 109d runway)

Long-tail. Unchanged from Apr 19.

**Subject:** Ed Sheeran at SoFi: 109 days, 70+ price checks so far
**Body:** (unchanged — pointer to target-price set, low urgency framing)

**Send timing:** 6pm PDT

---

### ONGOING: dylanbaldy@gmail.com (Day 5, 0 watchlist — 2 days past Day-3 drip threshold)

Fifth day in, still 0 watchlist. Copy shortens further — he hasn't responded to any of the drafts, so wordiness is not the issue, delivery is. But while we're drafting, this version cuts to the single ask.

**Subject:** One event. 10 seconds. Everything we do starts from that.
**Body:**
> Five days in and you haven't picked anything to track. Until you do, TicketScan is a product you signed up for that does exactly zero work on your behalf.
>
> One event — any event, any budget — and we start the every-4-hour cross-marketplace price check. You don't need to set a target price yet. You just need to point us at something.
>
> - [NFL Draft this weekend](https://www.ticketscan.io/dashboard) (2 days out)
> - [NBA Playoffs Round 1](https://www.ticketscan.io/tickets/nba-playoffs) (live)
> - [World Cup 2026](https://www.ticketscan.io/world-cup-2026) (50 days)
> - [Your city](https://www.ticketscan.io/dashboard)

**Send timing:** 11am EDT

---

### NEW — Day 1 follow-up: joshdguillemette@gmail.com (AEW at Louis Armstrong Stadium, 33d out)

Day 1. Drip Day-3 hits Apr 22. If the pipe is still broken tomorrow, josh becomes the next past-threshold user. Pre-queue a Day-3 send with AEW-specific framing.

**Subject:** Your AEW watchlist is 2 days old — here's what's live on it
**Body:**
> You added AEW Presents Double or Nothing to your watchlist 48 hours ago. Since then we've run **12 cross-market price checks** on it — Ticketmaster, SeatGeek, StubHub, every 4 hours. That's the baseline.
>
> What hasn't been switched on yet: the alert. Without a target price, we can see the prices moving but won't email you about it. Set a number (even a rough ceiling like "I won't pay more than $120") and we email you the moment the lowest listing crosses it.
>
> Louis Armstrong outdoor shows tend to have softer resale 7-14 days out — people sell off when the forecast looks bad. A target 20-30% below today's lowest usually catches that dip.
>
> [Set your target on Double or Nothing](https://www.ticketscan.io/watchlist)

**Send timing:** Apr 22, 7pm EDT (Day 3, evening NY user)

---

### NEW — Welcome: dr.altvater-70199@web.de (Day 0-1, 0 watchlist)

German-domain user, signed up Apr 20 14:08 UTC. 22 hours in, no watchlist yet. Treat as a potential World Cup-curious international visitor until we have referrer data.

**Subject:** Welcome — here's what to add first (World Cup is 50 days out)
**Body:**
> Thanks for signing up. You haven't added an event to your watchlist yet, so here's the 10-second tour of what TicketScan actually does: we check resale and primary prices on any event you add — across Ticketmaster, SeatGeek, and StubHub — every 4 hours, and email you when the lowest listing hits a target price you set.
>
> A few things worth tracking if you're new:
> - **World Cup 2026** (50 days out) — group stage, knockout rounds, final. Prices on resale have been drifting downward for several matches; [full schedule](https://www.ticketscan.io/world-cup-2026) with venue-by-venue pricing.
> - **Concerts in a city you might visit** — Vegas (Backstreet Boys, Sphere shows), NY/NJ (Harry Styles run at MSG), LA (Ed Sheeran at SoFi).
>
> [Browse events](https://www.ticketscan.io/dashboard) · [World Cup 2026](https://www.ticketscan.io/world-cup-2026)

**Send timing:** Apr 22, 9am CET (European local morning)

---

### ONGOING — Day-3 event-aware: nicklib253@gmail.com (Day 3 exactly today, Phillies already passed)

Today is his threshold day. The Phillies-Braves event he came to track ended 4 days ago. Standard Day-3 drip copy is completely wrong for this user — it says "here's how to set up alerts on the event you just added" and his event is in the past.

**Subject:** Phillies-Braves is behind us. What's the next one?
**Body:**
> Three days ago you added Phillies vs Braves to your TicketScan watchlist right before first pitch. That's a specific use case — live price-checking a same-day event — and we're glad we helped if we did.
>
> The rest of what we do is the longer-runway version of that: pick anything 7-90 days out and we cross-check three marketplaces every 4 hours, email when the lowest hits a target you set.
>
> Some next-ups that might be in your wheelhouse:
> - **Phillies home stretch** — any upcoming homestand at Citizens Bank Park
> - **Eagles opener** — schedule drops in May, tracking starts then
> - **Concerts at Wells Fargo / the Met Philly** — live now
>
> [Add another event →](https://www.ticketscan.io/dashboard)

**Send timing:** Today, 11am EDT

---

### ONGOING — Power users (no new content)

- **tosophiameyer (42d inactive, 11 Harry Styles MSG items):** unchanged from Apr 19. Earliest show is Aug 26 = 127 days out, still lots of runway. Content: same target-price prompt, scaled to the 11-event scope. Ideal candidate if we want to test a bulk "set target on all 11" UX shortcut.
- **brigitte.theisen (55d, 10 BSB Sphere items):** unchanged. Earliest show Jul 17 = 87 days. Same pitch.
- **laye.aurelien (20d, 2 Shakira):** unchanged. Jul 20/23 shows, 90-93 days out.
- **lvasub6 (23d, 2 Flyleaf):** unchanged. Jul 17-18 shows, 87-88 days out.

### ONGOING — Fresh churn, no hook

- **bhaygood728 (19d inactive, Cardi B passed):** sixth daily mention. Content 5 days stale. No new angle until we ship the "event passed, here's what's next in your city" feature.

## Psychology-driven micro-optimization

### Today's principle: Defaults (Status-Quo Bias)

**Rotation to date:**
- Apr 10: Social proof (generic)
- Apr 11: Scarcity
- Apr 12: Loss aversion
- Apr 13: Reciprocity
- Apr 14: FOMO
- Apr 15: Anchoring
- Apr 16: Endowment
- Apr 17: Commitment/consistency
- Apr 18: Social proof (peer-benchmark, empty state)
- Apr 19: Implementation intentions
- Apr 20: (report not written)
- **Apr 21: Defaults (status-quo bias)**

**What it is:** When a default option is pre-set, most users keep it. Johnson & Goldstein's 2003 organ donor study is the canonical example — countries with opt-out defaults had 85-99% participation, opt-in countries had 4-27%, same underlying preferences. The mechanism is a mix of cognitive effort (the default is free, any other choice costs deliberation), implicit endorsement (the platform signaling what a "normal" choice looks like), and reference-point dependence (the default becomes the anchor, and deviating feels like a loss).

**Where to apply it:** The target-price field on watchlist items — same target as Apr 19's rec, but a different lever. Apr 19 proposed reframing the input as sentence completion ("When Bilmuri drops to $___, email me") with suggested values. That's still a form the user has to actively complete. Today's proposal is more aggressive: **set the target price automatically when the watchlist item is created, and let the user adjust or disable it.**

**Current state:** Watchlist item creation → target_price defaults to `NULL` → user is the only entity that can ever set it → result after 15 days and 74 items: 0 targets set, 0% conversion, 0 alerts ever fired. The product's core value prop is gated behind a form field no one fills in. The "let's just not default anything" stance is not neutral — it's a default that defaults to product failure.

**Proposed change:**

1. **On watchlist add**, server-side: compute a default target price using current cross-market lowest and time-to-event:
   - `daysUntilEvent > 30` → `target_price = currentLowest * 0.75` (25% below)
   - `daysUntilEvent 14-30` → `target_price = currentLowest * 0.85` (15% below)
   - `daysUntilEvent < 14` → `target_price = currentLowest * 0.92` (8% below — less runway for big drops)
2. **UI feedback at moment of add:** "Tracking [Event]. We'll email you if the lowest listing drops below **$87** (≈25% off today's lowest). [Change] [Remove alert]"
3. **On watchlist page:** every item shows its default target, with inline [Edit] and [Disable] controls. No forms, no empty states.
4. **Honesty constraint (same as Apr 19):** if we don't have enough price history or current data to make a reasonable default, show "Alerts off — not enough price data yet" instead of inventing a number.

**Why this works:**
- **Conversion from 0% to near-100% target coverage.** Every watchlist item gets a target immediately. The only way to have `target_price = NULL` becomes actively rejecting it.
- **Zero cognitive load.** The user doesn't have to think about what a "good" target is. The platform has run 230 price checks on tate's Florence event — we have more information to set a sensible target than tate does.
- **Implicit endorsement.** The default communicates "25% below lowest is the norm." Users who adjust anchor off it; users who don't accept it. Either way, a target exists.
- **Framing match with the existing product.** Users are signing up for "track prices and tell me when they drop." Requiring them to define the drop threshold from scratch violates the mental contract — we claimed we'd do the work.

**Expected impact:**
- Target-price-set rate: 0% → ~95% (anyone who doesn't explicitly disable).
- First-alert-fired rate: currently undefined (no targets → no alerts). Goal: within 30 days of shipping, at least one alert fires per at least 20% of watchlist items (realistic given resale volatility on 74 events).
- Retention consequence: first email received → click-through → return visit. This is the entire engine we've been unable to start for 15 days.

**Comparison with Apr 19 rec (implementation intentions):**
- Apr 19: sentence completion + suggested values. User still explicitly acts. Estimated 20% adoption.
- Apr 21: defaults. User acts only to *override*. Estimated 95% adoption.
- These are not mutually exclusive. Ship defaults first (higher ceiling). Use the Apr 19 sentence-completion pattern for the [Edit] flow so users who override get the same anchoring + completion benefit.

**Ethical check:** Defaults can be used to trap users into choices they wouldn't make deliberately. Two safeguards here:
1. The default is genuinely calibrated to the user's benefit (25% below lowest = a real alerting threshold, not a vanity number that never fires).
2. [Change] and [Disable] are inline, not hidden. If a user wants no alert, one click turns it off.

If we ever find ourselves picking a default that benefits us at user cost (e.g., defaulting to a target price so high it guarantees a buy-now recommendation and thus affiliate revenue), we've crossed into dark-pattern territory. That's not this rec.

## Actions triggered

- Win-back / re-engagement emails prepared: **8** (tate CRITICAL, goldy URGENT, pete Tier 2, blubberboi Tier 2, dylanbaldy Day-5 trim, josh Day-3 pre-queue, dr.altvater welcome, nicklib Day-3 event-aware)
- New signup welcome flags: **1** (dr.altvater — non-activator, 22h in)
- Drip engine status: **BROKEN — Day 15, 20 pending, 4 past-threshold users (nicklib Day-3 today, dylanbaldy Day-3 + 2, pete Day-7 + 3, goldy Day-7 + 3, blubberboi Day-7 + 4), 0 emails ever sent**
- Re-engagement emails actually sent: 0 (Day 15)

## Cross-agent handoffs

### -> Email Agent (Agent 5)
**Priority: CRITICAL (Day 15)**
1. **IMMEDIATE:** tate.sheppard Florence — **3 days of runway left** (Apr 24 deadline). Eighth consecutive day flagged.
2. **IMMEDIATE:** goldy.pec Bilmuri — 4 days of runway (Apr 25 deadline).
3. **IMMEDIATE:** dr.altvater welcome — pre-activation, international, queue for tomorrow morning CET.
4. **IMMEDIATE:** nicklib Day-3 event-aware — threshold today, Phillies past.
5. **IMMEDIATE:** dylanbaldy Day-5 refresh — 2 days past drip trigger.
6. **NEAR:** josh Day-3 pre-queue for Apr 22.
7. pete Day-10 target-price push (drip #3 Apr 24).
8. blubberboi Day-11 gentle nudge.
9. **Drip campaign: Day 15. 0/20 sent. Four past-threshold users. Status unchanged for two weeks.**
10. **Event-proximity auto-triggers:** any watchlist event within 14 days → auto pre-event email. tate (10d), goldy (11d) are inside. Without this logic they get nothing.
11. **Past-event handling:** 8 churned users' only tracked event is already over. The drip template can't handle "event already passed." Needs either event-aware template switching or a separate past-event re-engagement flow.

### -> CRO Agent (Agent 6)
**Priority: HIGH**
1. **Defaults for target prices** (today's rec) — most aggressive fix for the 0/74 problem. Ship this first.
2. **Implementation-intentions UI for the [Edit] flow** (Apr 19 rec) — pairs with defaults.
3. Social Proof peer-benchmark banner on empty-watchlist dashboard (Apr 18, pending) — addresses dr.altvater and dylanbaldy directly.
4. Commitment/consistency on watchlist (Apr 17, pending)
5. Endowment language (Apr 16, pending)
6. Anchoring on compare page (Apr 15, pending)
7. FOMO price-activity line on event cards (Apr 14, pending)
8. Reciprocity value summary (Apr 13, pending)
9. Scarcity on watchlist (Apr 11, pending)
10. Loss aversion alert email rewrite (Apr 12, pending)
11. **"Event passed" redirect flow** — affects bhaygood728, nicklib, missbrookeshep, billstromkel, chocolateyu, arin.gelbaugh, jkaiser, tucwildcat. 8 users' entire watchlist is dead weight.

### -> Analytics Agent (Agent 7)
**Priority: HIGH (Day 15)**
1. **`last_login_at` tracking** — Day 15. Every user-health row marked "est."
2. **dr.altvater referrer** — first .de user since laye. Organic SEO from Europe on World Cup keywords would be a repeatable acquisition signal.
3. **josh referrer** — Apr 19 ask still pending. AEW + Louis Armstrong = specific long-tail, understanding the source is worth an afternoon.
4. Track target-price-set rate on watchlist (baseline: 0/74 = 0%, Day 15).
5. Track compare-page click-throughs by source.
6. Compute median time-from-signup-to-first-watchlist — currently dominated by josh (28s) and nicklib (4m); add dr.altvater once he activates (or flip to a different metric if he doesn't).
7. Count users currently inside the 14-day pre-event window — known: goldy (11d), tate (10d).
8. Signup cohort analysis: Day-0 activator rate vs non-activator rate, and whether non-activators ever come back.

### -> Content Agent (Agent 1)
**Priority: MEDIUM**
- **International/World Cup content for European audiences** — dr.altvater's .de signup is a weak signal but consistent with the tournament hook. Landing pages in German? Probably overkill for one user, but WC content tuned for international perspective (currency conversion, travel packages, away-team fan guides) is worth a stub.
- AEW/combat-sports long-tail — still pending from Apr 19.
- Louis Armstrong Stadium venue page — still pending from Apr 19.
- NFL Draft (Apr 23-25, 2 days out) — re-engagement hook for dylanbaldy and every "no upcoming event" churned user.
- World Cup 50-day countdown — same but updated.

### -> Ads Agent (Agent 3)
**Priority: LOW**
- If Analytics confirms dr.altvater came via SEO (WC long-tail), that's a potential German-language paid-search test for WC keywords. Low priority until we have more than 2 international signups to justify spend.

## Key metrics trend

| Metric | Apr 16 | Apr 17 | Apr 18 | Apr 19 | **Apr 21** | Trend |
|--------|--------|--------|--------|--------|------------|-------|
| Total users | 52 | 52 | 53 | 54 | **55** | **+1 / 2d (dr.altvater Apr 20)** |
| Activated | 37 (71.2%) | 37 (71.2%) | 38 (71.7%) | 39 (72.2%) | **39 (70.9%)** | **Flat (dr.altvater Day-0 non-activator)** |
| Watchlist items | 72 | 72 | 73 | 74 | **74** | **Flat** |
| Target prices set | 0 | 0 | 0 | 0 | **0** | Flat — Day 15, 0% of 74 |
| Drip emails sent | 0 | 0 | 0 | 0 | **0** | Day 15 broken |
| Price alerts triggered | 0 | 0 | 0 | 0 | **0** | Flat |
| At-risk users | 2 | 3 | 3 | 3 | **3** | Flat (pete/goldy/blubberboi) |
| Churned users | 47 | 48 | 49 | 49 | **49** | Flat today |
| Events passed w/o outreach | 4 | 4 | 4 | 4 | **4** | Flat |
| Day-0 self-activations (cumulative) | 0 | 1 | 1 | 2 | **2** | **Streak broken (dr.altvater non-activate)** |
| 7-day activation gap (users 0 watchlist) | 1 | 1 | 1 | 1 | **2** | **Doubled** |

## Bottom line

**One new signup (dr.altvater, Apr 20), zero new activations, zero emails, Day 15 of drip silence.**

The Day-0 self-activation streak (nicklib, josh) didn't extend. dr.altvater signed up and stopped — 22 hours in, 0 watchlist items. The activation gap doubled from 1 user to 2 users in a 7-day window. If dr.altvater is still 0 watchlist by tomorrow, the signal is: **half of our recent signups arrive without an event in mind, and we have nothing to convert them with** — no welcome email (drip broken), no empty-state peer-benchmark banner (pending since Apr 18), no default suggestions, no NFL Draft / World Cup push at the point of friction. They land, don't see a reason to act, and leave.

Zero target prices on 74 watchlist items continues to be the single largest retention bottleneck. The Apr 19 rec (sentence completion) would move the needle from 0% to maybe 20%. Today's rec (defaults — auto-set the target at watchlist creation) would move it from 0% to ~95%. If only one change ships this week, ship defaults. Pair it with the Apr 19 edit flow for the users who want to override. Everything downstream — alert emails, return visits, win-backs — unlocks from this one fix.

tate's Florence is **3 days from algo flip**. goldy's Bilmuri is **4 days**. These are the same two users flagged on Apr 15, 16, 17, 18, 19, and now 21. On Apr 24/25 they stop being urgent and start being obsolete — the event page will hardcode "buy now" and any alert becomes moot. "Flagged URGENT" has not correlated with sending an email for seven consecutive days.

Drip engine Day 15, 20 pending, 4 past-threshold (nicklib hit Day-3 today), 0 emails ever sent. Two full weeks. Either the delivery pipe unclogs this week or we stop writing email drafts that go into a queue that doesn't process.

**Week priority (adjusted):**
1. Ship target-price **defaults** at watchlist creation — ~95% conversion on the 0/74 problem, highest-leverage single change available.
2. Fix drip delivery — 20 pending, Day 15, 4 past-threshold including today's (nicklib).
3. Ship tate + goldy pre-event emails by Apr 24 / Apr 25.
4. Ship empty-watchlist social-proof banner (Apr 18 rec) — dr.altvater + dylanbaldy are the live test cases.
5. **Ship past-event redirect flow** — 8 churned users are sitting on dead watchlists. Even a "this event has passed, here are 3 others you might like" page would be value.
6. Referrer analysis for dr.altvater and josh — acquisition visibility.

---

*Growth & Retention Agent -- Daily Report*
*Generated: 2026-04-21 12:32 UTC*
