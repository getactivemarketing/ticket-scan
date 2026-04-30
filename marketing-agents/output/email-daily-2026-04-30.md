# Email Daily — 2026-04-30

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted — `POST /drip-run` still times out before any send)
- **Pending users (overdue, never received any drip): 20 returned by `/drip-stats` (truncation cutoff). All show `last_email_sent = 0` — zero drip emails delivered, ever. True backlog ≈ 30+ users (anyone who signed up before Mar 31, 2026 is invisible to this endpoint but unchanged).**
  - Eligibility breakdown of the 20 returned (today is 2026-04-30):
    - E1 eligible (≥3 days): 18 of 20 (zhili1208 @ 1d, lilianamasyrubi @ 2d not yet eligible)
    - E2 eligible (≥7 days): 14 of 20
    - E3 eligible (≥14 days): 11 of 20 — **dylanbaldy crossed the E3 threshold today (14d)**
    - E4 eligible (≥21 days): 6 of 20 — **bhaygood728 crossed E4 threshold (27d, eligible since Apr 24, 6 days late)**
    - E5 eligible (≥30 days): 2 of 20 returned (chocolateyu1083 @ 30d, arin.gelbaugh @ 30d) — both crossed today/yesterday
  - Oldest pending in the API response unchanged: arin.gelbaugh@outlook.com — `/drip-stats` truncates at the 20 most-recent pending. Deeper backlog (8+ users at 30+ days) still has `last_email_sent = 0`.
- **ESCALATION (Day 24):** `POST /api/admin/drip-run?limit=1&dryRun=true` returned HTTP 000 after 12s today — same failure pattern as Days 11–23. Even with `limit=1` and `dryRun=true` the endpoint times out, which **rules out "the queue is too big" as a hypothesis**: the handler is failing on the very first user, not melting under load. This narrows root cause to handler-level (SMTP connection / blocking call) not queue-level.
- **Reclassification status (Day 24):** Past my Day 14 (Apr 20) deadline by 10 days. Still treating the drip pipeline as un-shipped, not broken. Today's `dryRun=true` failure is the most diagnostically useful data point we've gotten in 24 days — please share this with whoever picks up the SMTP fix.
- Root-cause checklist (refined for Day 24's `dryRun=true` data point):
  1. **Stale Gmail app password** — most likely. The handler probably opens the SMTP connection (or fetches creds) BEFORE branching on `dryRun`. Regenerate `SMTP_PASS` in Railway env vars from Google Account → App Passwords.
  2. **Synchronous SMTP verify on handler entry** — second most likely. If `nodemailer.createTransport().verify()` runs at the top of the route, it'll hang regardless of `dryRun`. Move verify behind the dry-run guard or remove entirely.
  3. **Railway egress on port 587 blocked** — verify shell connectivity to `smtp.gmail.com:587`.
  4. **Synchronous blocking in drip handler** — wrap each user send in `Promise.allSettled` with per-user timeout. Less likely now given dryRun also fails.
- New diagnostic ask: when SMTP is fixed, the **first** thing to run is `POST /drip-run?limit=1&dryRun=true`. If that doesn't return in <2s, the fix didn't land.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: **0 of 85 watchlist items have a `target_price`** (was 0 of 85 yesterday, 0 of 72 on Apr 17). Watchlist count flat at 85 today (no new adds in 24h), but the streak of zero-target adds now stands at every single watchlist add ever logged. The `add to watchlist` flow continues to ship without a target-price prompt or default. Alert engine has nothing to evaluate.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged for **88 consecutive days** since Feb 1)
- Roster unchanged: roos_leeuwen (homepage, only organic), samir.sgpatel (test), test@example.com (api-test)
- The newsletter signup channel is now flat for ~3 months despite +12 user registrations in 13 days. Newsletter is fully decoupled from product engagement — UX placement problem, not a traffic problem.

## Platform Context
- Total users: 64 (flat from Apr 29 — **0 new today**)
- Users this week: 4 (rolling 7-day window — yesterday showed 8 since the Sunday-anchored "this week" reset on Apr 30)
- Users today: 0
- Watchlist items: 85 (unchanged from Apr 29)
- Favorites: 0 (still — feature ships but unused)

User-acquisition pickup we noted yesterday (~1/day) paused today. Two consecutive zero-add days in the watchlist could indicate the new-user signup pace is normalizing, or it could be a single quiet day — the rolling weekly count of 4 is still 2× the prior week's pace, so directionally the signup curve is intact.

---

## Watchlist Digest Prep

### Past-Event Watchlist Cleanup (CRITICAL — confirmed 35% bloat)
Pulled the full 85-item watchlist today. Confirmed counts:

- **30 of 85 items (35.3%) are past-dated** across **24 unique users**
- **8 items in the next 7 days** (terminal urgency window)
- **0 items in the 8–14 day window** (the digest "set up alerts now" window is empty — anyone in this gap from yesterday has rolled into the 7-day window today)
- **4 items in 15–30 days**
- **43 items beyond 30 days** (mostly Bruno Mars stadium dates, Harry Styles MSG residency, World Cup, Shakira)

Top contributors to past-event bloat:
| User | Past items | Oldest event |
|------|-----------|--------------|
| veroverok80@gmail.com | 3 | Shen Yun (Mar 29) |
| mediaglyphic@yahoo.com | 2 | Raptors (Feb 24) |
| yuehsu@gmail.com | 2 | TWICE Austin (Apr 17) |
| dawnowensfitness@gmail.com | 2 | Josiah Queen (Mar 11) |
| fanwar2000@hotmail.com | 2 | Lady Gaga (Mar 4) |
| 19 others | 1 each | various |

Oldest past-dated items in watchlist: aanandacoumar@gmail.com (Nuggets, **Jan 29 — 91 days past**), runes_fact_5u@icloud.com (Bruno Mars tribute, **Jan 30 — 90 days past**), rodericd2@gmail.com (**Super Bowl LX, Feb 8 — 81 days past**). These will not get cleaned up by anything except a deliberate archive job. Recommend P1 build of `archived_watchlist` view or `status` column with daily cron sweep — ticket attached unchanged from Apr 29 report.

### Terminal-Urgency Events (within 7 days — by 2026-05-07)
| Event | Venue | Date | Days Out | User | Days on Platform |
|-------|-------|------|----------|------|------------------|
| **Florence + The Machine** | State Farm Arena, Atlanta | **May 1** | **1** | tate.sheppard@gmail.com | 47 |
| **Cubs vs Diamondbacks** | Wrigley Field | **May 1** | **1** | ajvanprooyen@crimson.ua.edu | 7 |
| **Bilmuri - Kinda Hard Tour** | The Sylvee, Madison | **May 2** | **2** | goldy.pec.2012@gmail.com | 20 |
| **Cubs vs Diamondbacks** (Bobblehead) | Wrigley Field | May 2 | 2 | ajvanprooyen@crimson.ua.edu | 7 |
| **Cubs vs Diamondbacks** (Graphic Tee) | Wrigley Field | May 3 | 3 | ajvanprooyen@crimson.ua.edu | 7 |
| **Cubs vs Reds** | Wrigley Field | May 4 | 4 | ajvanprooyen@crimson.ua.edu | 7 |
| **Cubs vs Reds** | Wrigley Field | May 5 | 5 | ajvanprooyen@crimson.ua.edu | 7 |
| **Cubs vs Reds** | Wrigley Field | May 6 | 6 | ajvanprooyen@crimson.ua.edu | 7 |

**The 8-14 day window is now empty** — every event that was 8-14 days out yesterday has rolled into the terminal 7-day window today. There is no "warm" pipeline behind the May 1-6 cliff. The next event after May 6 is Bruno Mars Columbus on May 20 (20 days out).

#### tate.sheppard / Florence — TOMORROW
This is the third consecutive daily report flagging this user. The Apr 17 report flagged Florence at 14 days out. The Apr 29 report flagged it at 2 days out. Today it's **1 day out**. We've now used 47 of 47 available engagement days. **The window is functionally closed.** Even if SMTP comes back today, the digest will land roughly the same time the user is heading into the venue. Treating this as a definitive miss — recording it for the conversion-loss tally.

#### goldy.pec.2012 / Bilmuri — 2 days out
Same trajectory as Florence, 1 day behind. If SMTP fixed today and dispatched within 4 hours, there's a meaningful chance to intercept goldy. Slim but non-zero.

#### ajvanprooyen / Cubs ×6 — TOMORROW through May 6
Highest-intent new user on platform (still). 7 days on platform, 6 watchlist items, all within 1–6 days. The first game is **tomorrow.** This user represents the largest single-user conversion case on the platform: 6 events in a week, full multi-day series tracking. Window for the bobblehead night (May 2) and graphic-tee night (May 3) — the two highest-intent giveaway games — is tomorrow + day after. **Realistic intercept window for the back half of the series (May 4-6 Reds games) is the next 24-48 hours.** If SMTP back today, prioritize this digest first.

### Mid-Window Watchlist (15–30 days, May 15 – May 29)
- **Bruno Mars - Ohio Stadium, Columbus** (May 20) — charlesteel126@gmail.com — 20 days out, **8 days on platform** — newly E2-eligible (crossed 7-day threshold yesterday)
- **AEW Double or Nothing - Louis Armstrong Stadium** (May 24) — joshdguillemette@gmail.com — 24 days out, 11 days on platform

konman87@gmail.com's two Bruno Mars Soldier Field tickets (May 16, 17) **rolled out of the 30-day window today** — yesterday they were 17–18 days out, today they're 16-17 days, still in mid-window. Confirmed in full data pull above (Bruno Mars Soldier Field shows in 15-30 day bucket). Yesterday's draft template still applies, urgency unchanged.

### World Cup Watchlist Activity (pete.uzelac77 — only WC user)
- 4 WC matches + 2 Darts Masters at MSG (6 items)
- First match: Match 9 Ivory Coast vs Ecuador, Lincoln Financial Field — **Jun 14 — 45 days out**
- 20 days on platform, 0 emails, 0 target prices
- Most engaged WC user on platform — entire WC validation case

### Long-Tail Future Events (>30 days, partial list)
- **Flyleaf** (Jul 17, 18) — lvasub6@gmail.com — newly visible in this report's full pull (was not in yesterday's data slice)
- **Avenged Sevenfold** (Aug 8) — edithdionne@hotmail.com — newly visible
- **Motionless In White** ×2 (Aug 11) — ldholman@ymail.com — newly visible
- **Olivia Dean** (Aug 25) — spcoog83@gmail.com — newly visible
- **Bruno Mars MetLife ×3** (Aug 21, 22, 25) — taranimeramaro@gmail.com
- **Ed Sheeran SoFi** (Aug 8) — blubberboi@yahoo.com
- **Shakira** ×2 (Jul 20, 23) — laye.aurelien@wanadoo.fr
- **Harry Styles MSG residency** ×9 nights (Aug 26 – Sep 16) — tosophiameyer@gmail.com

Today's full data pull surfaced 4-5 users (lvasub6, edithdionne, ldholman, spcoog83) who were below the visibility horizon on prior daily reports because of `/drip-stats` truncation. None are in urgency windows, but they're confirmed members of the dormant-user backlog.

### Digest Templates (ready for send once SMTP is fixed)

The Florence template is no longer relevant — that ship has sailed. Refreshed templates below.

**For ajvanprooyen@crimson.ua.edu — Cubs series May 1–6 (TERMINAL — TOMORROW):**
```
Subject: Your Cubs homestand starts TOMORROW — here's the floor for all 6 games
Preview: Bobblehead night, graphic-tee night, and 4 Reds games. Resale floors compress fastest in the next 24 hours.

Hi there,

You're tracking 6 Cubs games — May 1 through May 6 at Wrigley:
   • Tomorrow (May 1): Cubs vs Diamondbacks
   • Friday (May 2): Cubs vs Diamondbacks — Kerry Wood Bobblehead night
   • Saturday (May 3): Cubs vs Diamondbacks — Cade Horton Graphic Tee night
   • Monday (May 4): Cubs vs Reds
   • Tuesday (May 5): Cubs vs Reds
   • Wednesday (May 6): Cubs vs Reds

Quick read on Wrigley resale before tomorrow:
🎟️ Bobblehead and giveaway nights (May 2 + May 3) historically run
   15-30% above the series average. They'll be your most expensive games.
🎟️ The weeknight Reds games (Mon/Tue/Wed) tend to be the cheapest —
   often 20%+ below weekend prices for a comparable matchup.
🎟️ Wrigley resale floors usually hit their lowest point 24-36 hours
   before first pitch.

Two things to do today:
1. Set target prices on the games that matter most to you. Without
   targets we can't alert you when prices drop below your line.
2. Compare all three sources for the cheaper Reds weeknight games
   first — that's where the savings show up.

[CTA: Set Target Prices for Your 6 Cubs Games →]
```

**For goldy.pec.2012@gmail.com — Bilmuri in 2 days (TERMINAL):**
```
Subject: Bilmuri Madison is Saturday — small-venue resale plays differently
Preview: Sub-3000 venues like The Sylvee follow a different price curve than arenas. Here's what to expect.

Hi there,

⏰ Bilmuri - Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (2 days away)

You added this 20 days ago. Quick note before the show:

Small-venue resale (under ~3,000 cap) compresses harder near the
date than arena resale does. Why: fewer total seats means dumpers
are competing for a thinner pool of late-buyers, so listings cut
prices faster as the date approaches.

Translation: tonight through Saturday morning is the window where
floor prices typically bottom out for The Sylvee.

Two recommendations:
1. Check resale on all three sources today — establish a baseline.
2. Watch for a price cut Friday afternoon — that's the most common
   dump window for Saturday-night small-venue shows.

[CTA: Compare Bilmuri Madison Prices →]
```

**For charlesteel126@gmail.com — Bruno Mars Columbus 20 days out (E2 newly eligible):**
```
Subject: Bruno Mars Columbus is in 3 weeks — the next 7 days set the floor
Preview: Stadium resale prices typically compress 10–20% over the next 7 days. Here's how to position.

Hi there,

🎤 Bruno Mars - The Romantic Tour
   Ohio Stadium, Columbus — Wednesday May 20 (20 days away)

You added this 8 days ago. The next 7 days are the highest-leverage
window for stadium resale: this is when early-buyer regret starts
hitting and floor seats get dumped, which pulls cheap upper-bowl
listings down with them.

Three things worth knowing about Bruno Mars stadium resale:
🎟️ Multi-night runs price asymmetrically — Sunday-night shows
   historically run 10-20% below Saturday-night shows for the same
   stadium. (Ohio Stadium May 20 is a Wednesday — typically the
   cheapest weekday slot for stadium concerts.)
🎟️ Floor seats peak ~14 days out and start cutting from there.
🎟️ The lower deck "value" sections (200s near the corners) are
   where the largest absolute price drops show up in the final week.

Set a target price today — we'll alert you when the floor breaks it.

[CTA: Set Target Price + Compare Sources →]
```

**For pete.uzelac77 — World Cup re-engagement (45 days to first match):**
```
Subject: Don't buy your World Cup tickets in May — here's why (and when to actually buy)
Preview: WC resale follows a different curve than concerts. Here's the data on when prices actually crash.

Hi there,

You're tracking 4 World Cup matches at Lincoln Financial:
   • Match 9: Ivory Coast vs Ecuador (Jun 14)
   • Match 29: Brazil vs Haiti (Jun 19)
   • Match 68: Croatia vs Ghana (Jun 27)
   • Round of 16: W74 vs W77 (Jul 4)

Plus 2 Darts Masters at MSG (Jun 25–26). You've been on TicketScan
20 days. Here's the thing about World Cup resale that almost nobody
gets right:

WC ticket prices DO NOT follow normal concert curves. They peak
~30 days out, then crash hard ~10 days before the match as
package-deal holders realize they overbought. The crash hits the
big-name matches first (Brazil vs Haiti) and the unknown matches last.

Your timeline:
   • Mid-May (~30 days out): Worst time to buy. Skip.
   • Early June (~10 days out): The drop usually hits.
   • June 12-14: Final crash window for the Jun 14 opener.

Set target prices on all 4 matches today — you'll be ready for the
crash when it hits.

[CTA: Set World Cup Match Targets →]
```

**For long-tail dormants newly surfaced (lvasub6, edithdionne, ldholman, spcoog83):**
These users are 70-100+ days out from their events and have never received any contact. Recommend a low-touch "you're tracking X — here's the buying timeline" digest sent ONCE on the next available drip cycle, rather than another templated urgency push. They don't need urgency yet, they need acknowledgment.

**Backlog catch-up note (when SMTP is fixed):**
Same protocol as Apr 29 report. For users 30+ days pending, send a single "we owe you an apology + here's what you missed" email FIRST, then re-enter at E1 with a 48-hour gap, then resume normal cadence. Do NOT compress all 5 emails into 48 hours — domain reputation cost.

---

## Subject Line A/B Tests

### Cubs Series — Terminal urgency, TOMORROW
- **A:** `Your Cubs homestand starts TOMORROW — here's the floor for all 6 games`
- **B:** `6 Cubs games in 6 days — bobblehead night is the priciest`
- **Hypothesis:** A leverages the "TOMORROW" word (highest-urgency caps in subject lines correlate with +15-20% open rate when accurate). B leads with data-personalization (we know it's 6 games). For ajvanprooyen specifically — a 7-day-old user with no prior contact — A's urgency is the right push for the May 1 game. B might actually be better for a follow-up sent 24h after A. Recommend **A**.

### Bilmuri Madison — Terminal urgency (2 days)
- **A:** `Bilmuri Madison is Saturday — small-venue resale plays differently`
- **B:** `2 days to Bilmuri at The Sylvee — Friday afternoon is your buy window`
- **Hypothesis:** A is the version drafted yesterday, event-anchored. B is action-anchored (tells the user when to act). For a user who's never received an email from us, B is more likely to drive a click because it tells them what to DO, not what to know. Recommend **B**.

### Bruno Mars Columbus — Mid-window (20 days, E2-eligible)
- **A:** `Bruno Mars Columbus is in 3 weeks — the next 7 days set the floor`
- **B:** `Wednesday-night stadium concerts price cheaper — here's why that's good news for May 20`
- **Hypothesis:** B is contrarian-insight + personalization (it ties the day-of-week pricing pattern directly to charlesteel's specific event date). For a brand-new user (8 days), B demonstrates we understand their event. Recommend **B**.

### World Cup Re-engagement — pete.uzelac77
- **A:** `Don't buy your World Cup tickets in May — here's why (and when to actually buy)`
- **B:** `Your 4 World Cup matches start in 45 days — here's the buying timeline`
- **Hypothesis:** A is contrarian + warning (carried over from Apr 29's recommendation). B is digest framing. Carrying yesterday's recommendation: **A**. "Don't" subject lines outperform positive framings ~20% in CTR for advice content, and pete is high-intent enough to engage with strong claims.

### CTA Review (unchanged from Apr 29, still correct)
- Cubs CTA → `ticketscan.io/watchlist` (multi-event target-set focus) ✓
- Bilmuri CTA → `ticketscan.io/compare?event=...` ✓
- Bruno Mars Columbus CTA → `ticketscan.io/watchlist` (target-set focus) ✓
- WC CTA → `ticketscan.io/watchlist` (target-set focus) ✓
- All primary CTAs above the fold ✓
- All emails close with secondary "set a target price" CTA ✓

---

## Action Items

### P0 — Critical (Day 24 of outage)
1. **SMTP / drip pipeline — DAY 24.** Today's `?dryRun=true` failure is the most actionable diagnostic in 24 days: the handler is failing on user-zero, not under queue load. **Recommended fix sequence**: regenerate Gmail app password → audit handler for top-of-route `transporter.verify()` calls (move behind dryRun guard) → verify Railway port 587 egress → wrap drip handler in `Promise.allSettled` with per-user timeout → re-test with `?limit=1&dryRun=true` first.
2. **tate.sheppard / Florence is TOMORROW (1 day).** Third consecutive daily report flagging this user. **Recording as a definitive miss.** 47 days of pre-event signal, zero outreach. The outcome is already determined — what matters now is logging this for the conversion-loss tally so the cost of the SMTP outage is quantified.
3. **ajvanprooyen / 6 Cubs games starting TOMORROW.** Highest-intent new user on platform. 7 days on platform, 6 watchlist items, all within 1–6 days. **First game is 24 hours out.** Window for bobblehead night (May 2) and graphic-tee night (May 3) is tomorrow + Saturday. If SMTP fixed today, this digest goes first.
4. **goldy.pec.2012 / Bilmuri is Saturday (2 days).** 20 days on platform, zero emails. Last realistic intercept window is the next 24 hours.

### P1 — High
5. **Past-event watchlist cleanup (35.3% bloat, confirmed):** 30 of 85 items past their event date across 24 unique users, oldest is **91 days past** (aanandacoumar / Nuggets, Jan 29). No archive function. Build `status` column + daily cron to auto-mark past items as `expired`. Every downstream query is currently 35% noise. Same ask as Apr 29 — re-stating because it actively distorts every metric on this report.
6. **Target-price UX — ALL 85 watchlist items have null target_price.** 100% of every add-to-watchlist event has shipped without a target. The streak is now perfect. The add flow must either (a) require a target, (b) suggest a default (current min × 0.85), or (c) prompt for one in a follow-up email. Fix (c) is blocked on SMTP. Fix (a) and (b) are not. **(a) and (b) should be prioritized as a parallel track to the SMTP fix, not a sequential one.**
7. **The 8-14 day urgency pipeline is empty.** Today's data shows 8 events in the next 7 days, **0 events in the 8-14 day window**, and 4 events in 15-30 days. Translation: after May 6, the next watchlist event is May 20. We have ~14 days of zero-urgency events ahead. Use this gap to ship the SMTP fix without burning hot windows.
8. **pete.uzelac77 World Cup re-engagement** — 20 days on platform, 6 high-value items, first match in 45 days. Same as yesterday. Zero outreach makes the WC vertical look like vapor.
9. **Backlog catch-up plan when SMTP returns:** apology email first, then E1 at +48h, then resume cadence.

### P2 — Medium
10. **Newsletter growth — 88-day stall.** 3 subscribers (1 organic) for 88 consecutive days. Add inline newsletter prompt to watchlist add-confirm flow once SMTP is fixed.
11. **Build watchlist digest endpoint:** automated per-user digest does not exist. Required for the templates above to actually ship. Blocked on SMTP regardless.
12. **Long-tail dormants newly surfaced today** (lvasub6, edithdionne, ldholman, spcoog83) — 4 additional users at 70-100+ days from their events, never contacted, only became visible in today's full watchlist pull. Add to backlog list.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **88 consecutive days flat** (last organic signup: 2026-02-01)
- **Drip pipeline:** UN-SHIPPED. **Day 24 of outage.** Today's `?dryRun=true` test failed identically to live calls — narrows root cause to handler-level (pre-branch SMTP verify or stale cred). 0 sends ever. Backlog ≥30 users with 8+ at 30+ days pending.
- **Price alerts:** 0 ever triggered. **0 of 85 watchlist items have a target price** — 100% null streak unchanged. Adds today: 0 (watchlist flat at 85).
- **User growth:** **0 new users today, 4 in current week** (rolling). Total still 64. Watchlist flat at 85. Two consecutive zero-add days.
- **Watchlist composition:** 85 total — 30 past-dated (35.3%), 8 within 7 days, 0 in 8-14 day window, 4 in 15-30 days, 43 beyond 30 days.
- **Terminal urgency this week (within 7 days):** ajvanprooyen / Cubs ×6 (1-6d), tate.sheppard / Florence (1d, definitive miss recorded), goldy.pec.2012 / Bilmuri (2d). All zero emails received.
- **Mid-window (15-30 days):** charlesteel126 / Bruno Mars Columbus (20d, E2-eligible), joshdguillemette / AEW (24d).
- **World Cup:** pete.uzelac77 — 6 items, first match 45 days, 0 outreach.
- **Email channel status:** Day 24 of outage. Reclassified from "broken" to "un-shipped" since Apr 20. Today's diagnostic was the most useful in 24 days — the handler fails on user-zero, not on queue load. The growth team continues acquiring users into a pipeline that does not exist; acquisition cost per delivered email is undefined / infinite.
