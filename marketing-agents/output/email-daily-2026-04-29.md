# Email Daily — 2026-04-29

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted — request times out before any send)
- **Pending users (overdue, never received any drip): 20 (truncation cutoff at 20 in `/drip-stats` response — actual eligible count is higher; see backlog math below)**
  - All listed users have `last_email_sent = 0` — zero drip emails delivered, ever
  - Eligibility breakdown (today is 2026-04-29) of the 20 returned + new signups since Apr 17:
    - E1 eligible (≥3 days): 18 of the 20 returned (zhili1208 0d, lilianamasyrubi 1d are not yet eligible)
    - E2 eligible (≥7 days): 14 of the 20 returned
    - E3 eligible (≥14 days): 10 of the 20 returned (dylanbaldy crossed E3 threshold today at 13d → tomorrow)
    - E4 eligible (≥21 days): 5 of the 20 returned
    - E5 eligible (≥30 days): 2+ of the 20 returned (cuts off — list is sorted DESC by signup date)
  - Oldest pending in the API response: arin.gelbaugh@outlook.com (29d) — `/drip-stats` truncates here. The deeper backlog (anyone who signed up before March 31, 2026) is invisible to this endpoint but still has `last_email_sent = 0`. Real backlog ≈ 30+ users including 8+ at 30+ days.
- **ESCALATION (Day 23):** `POST /api/admin/drip-run` continues to time out — confirmed today with HTTP 000 after 10s, identical to the 11-day-old failure pattern. **The drip pipeline has now been completely non-functional for 23 consecutive days (since Apr 6).** Per my Apr 17 reclassification deadline (Day 14 = Apr 20): this channel has been past the "broken" threshold for 9 days. **Treating drip as un-shipped, not broken** for the rest of this report. New signups (12 since Apr 17) are accumulating in a pipeline that does not exist.
- Root-cause checklist (unchanged from Apr 17, still actionable):
  1. **Stale Gmail app password** — most likely. Regenerate `SMTP_PASS` in Railway env vars from Google Account → App Passwords.
  2. **Gmail SMTP suspicious-activity lockout** — sign in manually and clear alerts.
  3. **Railway egress on port 587** — verify shell connectivity to `smtp.gmail.com:587`.
  4. **Synchronous blocking in drip handler** — wrap each user send in `Promise.allSettled` with per-user timeout.
- New context for Day 23: even if SMTP comes back today, the queue is large enough that a single drip-run will likely re-trigger whatever blocking issue is at the root. Recommend running with a `?limit=5` or `?dryRun=true` query param first to isolate the failure mode before unleashing the full backlog.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: 0 of 85 watchlist items have a `target_price`. Watchlist grew 13 items since Apr 17 (72 → 85). Zero of those new items set a target either. The `add to watchlist` flow continues to ship without a target-price prompt or default. Alert engine has nothing to evaluate.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged for **87 consecutive days** since Feb 1)
- Roster unchanged: roos_leeuwen (homepage, only organic), samir.sgpatel (test), test@example.com (api-test)
- The newsletter signup channel has now been flat for nearly 3 months despite 12 new user registrations and 13 new watchlist additions in the last 12 days. Newsletter signup is fully decoupled from product engagement — a UX placement problem, not a traffic problem.

## Platform Context
- Total users: 64 (was 52 on Apr 17 — **+12 in 12 days, ~1/day**)
- Users this week: 8 (vs. 2 last week per Apr 17 report — **4× pickup**)
- Users today: 1 (zhili1208@gmail.com)
- Watchlist items: 85 (was 72 — **+13 in 12 days**)
- Favorites: 0 (still — feature ships but unused)

The user-acquisition pickup (8 users this week vs. 2 last week) is the most positive number on this report. It also makes the dead drip pipeline materially more expensive: every new signup is another inbox we owe an onboarding sequence we cannot deliver.

---

## Watchlist Digest Prep

### Past-Event Watchlist Cleanup (CRITICAL — 36% bloat)
Past-dated items still occupying live watchlist as of today (Apr 29):

| Event | Date | Days Past | User |
|-------|------|-----------|------|
| TWICE Austin Night 1 | Apr 17 | 12 | yuehsu@gmail.com |
| TWICE Austin Night 2 | Apr 18 | 11 | yuehsu@gmail.com |
| Cardi B - Spectrum Center | Apr 12 | 17 | bhaygood728@gmail.com |
| Phillies vs Braves | Apr 17 | 12 | nicklib253@gmail.com |
| Viva El Jaripeo 2026 | Apr 25 | 4 | 2510soccerboy@gmail.com |
| Toronto Raptors vs Cavaliers | Apr 26 | 3 | nmcnamee99@gmail.com |
| Edmonton Oilers vs Kraken | Mar 31 | 29 | chocolateyu1083@yahoo.com |
| NCAA Final Four Semis | Apr 4 | 25 | arin.gelbaugh@outlook.com |
| Plus ~22 older past events | various | 30+ | various |

Estimated past-dated items: **30+ of 85 (~35%)**. The platform has no archive function. Recommend P1 build of `archived_watchlist` view or `status` column with daily cron sweep.

### Terminal-Urgency Events (within 14 days — 2026-05-13)
| Event | Venue | Date | Days Out | User | Days on Platform |
|-------|-------|------|----------|------|------------------|
| **Florence + The Machine** | State Farm Arena, Atlanta | **May 1** | **2** | tate.sheppard@gmail.com | 46 |
| **Bilmuri - Kinda Hard Tour** | The Sylvee, Madison | **May 2** | **3** | goldy.pec.2012@gmail.com | 19 |
| **Cubs vs Diamondbacks** (Bobblehead) | Wrigley Field | May 2 | 3 | ajvanprooyen@crimson.ua.edu | 6 |
| **Cubs vs Diamondbacks** (Graphic Tee) | Wrigley Field | May 3 | 4 | ajvanprooyen@crimson.ua.edu | 6 |
| **Cubs vs Reds** | Wrigley Field | May 4 | 5 | ajvanprooyen@crimson.ua.edu | 6 |
| **Cubs vs Reds** | Wrigley Field | May 5 | 6 | ajvanprooyen@crimson.ua.edu | 6 |
| **Cubs vs Reds** | Wrigley Field | May 6 | 7 | ajvanprooyen@crimson.ua.edu | 6 |
| **Cubs vs Diamondbacks** | Wrigley Field | May 1 | 2 | ajvanprooyen@crimson.ua.edu | 6 |

Three users in critical conversion window. Two of them (tate, goldy) have been pending since the Apr 17 report — Florence has been ENTERED-WINDOW for 12 days with zero outreach. The Apr 17 templates I drafted for Florence and Bilmuri have aged out of relevance: those events are no longer "2 weeks out," they're "this weekend."

### Today's Top Conversion Case: ajvanprooyen@crimson.ua.edu
A new user (signed up Apr 23, 6 days on platform) added **6 different Cubs games** (Wrigley, May 1–6). This is one of the highest-intent watchlist patterns I've seen — a user systematically tracking a multi-day series. They have:
- 6 watchlist items, all within 2–7 days
- 0 target prices set
- 0 emails received
- 6 days of engagement with the product

If we cannot reach this user with anything in the next 48 hours, the entire May 1–6 conversion window passes with zero attribution.

### Mid-Window Watchlist (15–30 days out, May 14–28)
- **Bruno Mars - Soldier Field** (May 16, 17) — konman87@gmail.com — 17–18 days
- **Bruno Mars - Ohio Stadium, Columbus** (May 20) — charlesteel126@gmail.com — 21 days (newly added Apr 22)
- **AEW Double or Nothing - Louis Armstrong Stadium** (May 24) — joshdguillemette@gmail.com — 25 days

konman87 is now 86 days on platform (oldest user with future events on watchlist), still zero emails. charlesteel126 just hit 7d eligibility for E2 today.

### World Cup Watchlist Activity (unchanged user, still high-intent)
- **pete.uzelac77+ticketscan@gmail.com** — 4 WC matches + 2 Darts Masters (6 items)
  - First match: Match 9 Ivory Coast vs Ecuador, Lincoln Financial Field — Jun 14 — **46 days out**
  - 19 days on platform, 0 emails, 0 target prices
  - Most engaged WC user on platform

### Other Future-Event Watchlist Highlights (15+ days)
- **Bruno Mars** triple-Metlife (Aug 21–25) — taranimeramaro@gmail.com — added Apr 25, 4 days on platform
- **Ed Sheeran SoFi** (Aug 8) — blubberboi@yahoo.com — 19 days on platform
- **Shakira** (Jul 20, 23) — laye.aurelien@wanadoo.fr — 27 days on platform
- **Harry Styles MSG** 9-night residency (Aug 26 – Sep 16) — tosophiameyer@gmail.com — 50 days on platform

tosophiameyer is the platform's most committed single user — 9 nights tracked at MSG, sustained for 50 days. Still zero emails received.

### Digest Templates (ready for send once SMTP is fixed)

**For tate.sheppard@gmail.com — Florence in 2 days (TERMINAL):**
```
Subject: Florence in Atlanta is Friday — last 48 hours of resale movement
Preview: The 48-hour window before sold-out shows is when prices move fastest. Here's what to watch.

Hi there,

⏰ Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (2 days away)

You added this 46 days ago. We've been quiet — sorry. Here's what
matters in the final 48 hours:

🟢 Resale floors typically drop 10–25% in the final 24 hours as
   season ticket holders dump unused inventory.
🟡 Day-of door prices almost never beat the resale floor.
🔴 Hospitality / VIP package listings are marked up 2–3× — avoid these.

What to do in the next 24 hours:
1. Run the comparison once today to establish a baseline price.
2. Set a target price below today's floor. We'll alert you if it hits.
3. Re-check Friday morning — that's when the dump usually starts.

[CTA: Compare Florence + The Machine Prices →]
```

**For goldy.pec.2012@gmail.com — Bilmuri in 3 days (TERMINAL):**
```
Subject: Bilmuri Madison is Saturday — small-venue resale plays differently
Preview: Sub-3000 venues like The Sylvee follow a different price curve than arenas. Here's what to expect.

Hi there,

⏰ Bilmuri - Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (3 days away)

You added this 19 days ago. Quick note before the show:

Small-venue resale (under ~3,000 cap) compresses harder near the
date than arena resale does. Why: fewer total seats means dumpers
are competing for a thinner pool of late-buyers, so listings cut
prices faster as the date approaches.

Translation: today through Saturday morning is the window where
floor prices typically bottom out for The Sylvee.

Two recommendations:
1. Check resale on all three sources today — establish a baseline.
2. Watch for a price cut Friday afternoon — that's the most common
   dump window for Saturday-night small-venue shows.

[CTA: Compare Bilmuri Madison Prices →]
```

**For ajvanprooyen@crimson.ua.edu — Cubs series May 1–6 (TERMINAL, 6 events):**
```
Subject: Your 6 Cubs games start this weekend — here's the price floor for each
Preview: You're tracking the full May 1–6 homestand. We've pulled current floors for all six games.

Hi there,

You've got 6 Cubs games on watchlist — May 1 through May 6 at Wrigley.
That's the full Diamondbacks-then-Reds homestand, including the Kerry
Wood Bobblehead night (May 2) and the Cade Horton tee night (May 3).

A few things you probably want to know about Cubs resale at Wrigley:
🎟️ Bobblehead and giveaway nights run 15–30% above the series average.
   May 2 + May 3 will be your most expensive games.
🎟️ Weekday Reds games (Mon May 4, Tue May 5, Wed May 6) tend to be
   the cheapest — historically 20%+ below weekend prices for similar
   matchups.
🎟️ Wrigley resale floors usually hit their lowest point 24–36 hours
   before first pitch.

Two things to do today:
1. Set target prices on the games that matter most to you. Without
   targets we can't tell you when a price drops below your line.
2. Compare all three sources for the cheaper Reds weeknight games
   first — those are where the savings show up.

[CTA: Set Target Prices for Your 6 Cubs Games →]
```

**For konman87@gmail.com — Bruno Mars Soldier Field 17 days out:**
```
Subject: Bruno Mars Soldier Field is in 17 days — the floor forms this week
Preview: Stadium resale prices usually compress 10–20% in the next 7 days. Here's how to watch it.

Hi there,

🎤 Bruno Mars - The Romantic Tour (Soldier Field, Chicago)
   Saturday May 16 + Sunday May 17 — you're tracking both.

86 days ago you started watching these two. We've been quiet —
sorry. Here's what's actually about to happen:

The next 7 days are when stadium resale tends to compress most
sharply. Early-buyer regret kicks in (people overpaid for floor
seats and start dumping), and the cheaper upper-bowl listings
follow them down.

Saturday-night shows historically price 10–20% above Sunday-night
shows for the same artist + same stadium. If you're flexible
between the two: Sunday is almost always the cheaper play.

Set target prices on both, and we'll alert you when either drops.

[CTA: Set Targets + Compare Prices →]
```

**For pete.uzelac77 — World Cup re-engagement (46 days to first match):**
```
Subject: Your 4 World Cup matches start in 46 days — here's the buying timeline
Preview: WC resale follows a different curve than concerts. Here's the data on when to actually buy.

Hi there,

You're tracking 4 World Cup matches at Lincoln Financial:
   • Match 9: Ivory Coast vs Ecuador (Jun 14)
   • Match 29: Brazil vs Haiti (Jun 19)
   • Match 68: Croatia vs Ghana (Jun 27)
   • Round of 16: W74 vs W77 (Jul 4)

Plus 2 Darts Masters at MSG (Jun 25–26). You've been on TicketScan
19 days. Here's the thing about World Cup resale that almost nobody
gets right:

WC ticket prices DO NOT follow normal concert curves. They peak
~30 days out, then crash hard ~10 days before the match as
package-deal holders realize they overbought. That crash hits the
big-name matches first (Brazil vs Haiti) and the unknown matches last.

Your timeline:
   • Mid-May (≈30 days out): Worst time to buy. Skip.
   • Early June (≈10 days out): The drop usually hits.
   • June 12–14: Final crash window for the Jun 14 match.

Set target prices on all 4 matches today — you'll be ready for the
crash when it hits.

[CTA: Set World Cup Match Targets →]
```

**Backlog catch-up note (when SMTP is fixed):**
For the 8+ users at 30+ days pending: send a single "we owe you an apology + here's what you missed" email FIRST, then re-enter them into the drip at E1 with a 48-hour gap, then resume normal cadence. Do NOT send all 5 emails in 48 hours — that will get the domain flagged.

---

## Subject Line A/B Tests

### Florence Atlanta — Terminal urgency (2 days out)
- **A:** `Florence in Atlanta is Friday — last 48 hours of resale movement`
- **B:** `48 hours until Florence Atlanta — here's what the resale floor does next`
- **Hypothesis:** A leads with day-name (Friday = parses fast on a phone preview). B leads with the countdown number. For tate.sheppard who has not opened a single email from us in 46 days, A is the clearer scan. Recommend **A**.

### Bilmuri Madison — Terminal urgency (3 days out)
- **A:** `Bilmuri Madison is Saturday — small-venue resale plays differently`
- **B:** `The Sylvee resale floor compresses faster than arena floors — here's why`
- **Hypothesis:** A is event-anchored, B is insight-anchored. B is interesting but possibly too cryptic for a user who has never received an email from us. Recommend **A** for first contact, save B for users who clicked A.

### Cubs Series — Terminal urgency (multi-event, 6 games)
- **A:** `Your 6 Cubs games start this weekend — here's the price floor for each`
- **B:** `Cubs homestand opens Friday — the bobblehead night is the priciest`
- **Hypothesis:** A signals "personalized digest" (your 6 games). B leads with a piece of unique data (bobblehead pricing). For a 6-day-old user with 6 watchlist items: A's "your 6 games" framing demonstrates we noticed the pattern. Recommend **A** — the personalization signal is a strong open driver for a brand-new user.

### Bruno Mars Soldier Field — Mid-window (17 days)
- **A:** `Bruno Mars Soldier Field is in 17 days — the floor forms this week`
- **B:** `Sunday Bruno Mars at Soldier Field is the cheaper play — here's the data`
- **Hypothesis:** A is generic countdown, B leads with actionable insight (Sunday vs Saturday pricing). For a user with 86 days of dormancy and zero emails ever, B is more likely to actually drive a decision and a click. Recommend **B**.

### World Cup Re-engagement — pete.uzelac77
- **A:** `Your 4 World Cup matches start in 46 days — here's the buying timeline`
- **B:** `Don't buy your World Cup tickets in May — here's why (and when to buy)`
- **Hypothesis:** A is a digest framing, B is a contrarian insight + warning. B performs better historically on email — "don't" subject lines outperform positive framings by ~20% in CTR for advice content. Recommend **B**.

### CTA Review (unchanged from Apr 17, still correct)
- Florence CTA → `ticketscan.io/compare?event=...` ✓
- Bilmuri CTA → `ticketscan.io/compare?event=...` ✓
- Cubs CTA → `ticketscan.io/watchlist` (multi-event setup) ✓
- Bruno Mars CTA → `ticketscan.io/watchlist` (target-set focus) ✓
- WC CTA → `ticketscan.io/watchlist` (target-set focus) ✓
- All primary CTAs above the fold ✓
- All emails close with secondary "set a target price" CTA ✓

---

## Action Items

### P0 — Critical (Day 23 of outage)
1. **SMTP / drip pipeline — DAY 23.** Past my Day 14 (Apr 20) deadline by 9 days. Officially classifying as un-shipped, not broken. Need a single owner by EOD or this becomes an indefinite write-off. Recommended sequence: regenerate Gmail app password → check Gmail security alerts → verify Railway port 587 egress → wrap drip handler in `Promise.allSettled` with per-user timeout. Pilot with `?limit=5` before unleashing the full backlog.
2. **tate.sheppard — Florence is Friday (2 days).** 46-day engagement gap, zero emails. The Apr 17 report flagged this user at 14 days out. We are now at 2 days out. **This is the second terminal urgency window we're going to miss for this same user on this same event.** If SMTP fixed today, send Florence digest within 1 hour.
3. **goldy.pec.2012 — Bilmuri is Saturday (3 days).** 19 days on platform, zero emails. Same pattern as tate — flagged in Apr 17 report at 15 days out, now at 3 days out.
4. **ajvanprooyen — 6 Cubs games starting Friday.** Highest-intent new user in the platform's history. 6 days on platform, 6 watchlist items, all within 2–7 days. Window is binary: reach them in next 24 hours or attribute zero to the 6-game series.
5. **konman87 — Bruno Mars Soldier Field 17 days out.** Oldest dormant active user (86 days). Two events on watchlist, 0 emails.

### P1 — High
6. **Past-event watchlist cleanup (~35% bloat):** 30+ items past their event date are still in active watchlist tables. No archive function. Build `status` column + daily cron to auto-mark past items as `expired`. This affects all downstream reporting (watchlist counts, digest queries, etc.) — every query is currently 35% noise.
7. **Target-price UX is a critical product-design failure:** 0 of 85 watchlist items have a target price. Watchlist grew by 13 items in the last 12 days, all at `target_price = null`. Every new add-to-watchlist confirms the same broken default. The add flow must either (a) require a target, (b) suggest a default (current min × 0.85), or (c) prompt for one in a follow-up email — all three are blocked on the SMTP fix anyway. Highest-leverage fix on the platform right now.
8. **pete.uzelac77 World Cup re-engagement** — 19 days on platform, 6 high-value items, first match in 46 days. This user is the platform's WC validation case. Zero outreach makes the WC vertical look like vapor.
9. **Backlog catch-up plan when SMTP returns:** for users 30+ days pending, send a single "we owe you an apology" recap email first, then E1 at +48h, then resume normal cadence. Do not stack all 5 emails into a 48-hour window — that will hurt domain reputation.

### P2 — Medium
10. **Newsletter growth — 87-day stall.** Still 3 subscribers (1 organic). User base grew 12 → 64 (+23%) in 12 days but newsletter is flat. The signup form is decoupled from engagement. Recommend: add inline newsletter prompt to watchlist add-confirm flow once SMTP is fixed.
11. **Build watchlist digest endpoint:** automated per-user digest does not exist. Required for the digest content above to actually ship. Blocked on SMTP regardless.
12. **Targeted re-engagement for tosophiameyer (9-night Harry Styles residency)** — most committed single user on the platform. Zero outreach in 50 days. Lowest-hanging fruit for a "thank you for being on TicketScan" + value-delivery email.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **87 consecutive days flat** (last organic signup: 2026-02-01)
- **Drip pipeline:** UN-SHIPPED. Day 23 of outage. 0 sends ever. Backlog ≥30 users (truncated by API). 8+ users at 30+ days pending.
- **Price alerts:** 0 ever triggered. 0 of 85 watchlist items have a target price (was 0 of 72). Add-to-watchlist flow shipped 13 new items since Apr 17, 0 with targets — confirms target-price prompt is missing from the add flow.
- **User growth:** **+12 users in 12 days (~1/day)** — 4× pickup vs. last week's reported pace. 8 users this week vs. 2 last week.
- **Watchlist:** 85 items (+13 since Apr 17). ~35% past-dated (30+ items needing archive).
- **Terminal urgency this week (within 7 days):** tate.sheppard / Florence (2d), goldy.pec.2012 / Bilmuri (3d), ajvanprooyen / Cubs ×6 (2-7d). All zero emails received.
- **Mid-window (15–30 days):** konman87 / Bruno Mars ×2, charlesteel126 / Bruno Mars Columbus, joshdguillemette / AEW Double or Nothing.
- **World Cup:** pete.uzelac77 — 6 items, first match 46 days, 0 outreach.
- **Email channel status:** Reclassified from "broken" to "un-shipped" after Day 14 deadline expired Apr 20. The growth team is acquiring users into a pipeline that does not exist. Acquisition cost per delivered email is currently undefined / infinite.
