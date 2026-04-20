# Email Daily — 2026-04-19

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted — request timed out before any send)
- **Pending users (overdue, never received any drip): 20 shown in API response** (+ older cohort not returned in top-20: edithdionne 46d, ldholman 47d, krusesin2023 51d, missbrookeshep 47d, spcoog83 42d, brigitte.theisen 53d — all still `last_email_sent = 0`)
  - Every returned user has `last_email_sent = 0` — zero drip emails have ever been delivered since platform launch
  - Eligibility breakdown (returned cohort, today is 2026-04-19):
    - E1 eligible (≥3 days): 19 users
      - Newly NOT eligible today: joshdguillemette@gmail.com (0d, signed up today at 20:30 UTC)
      - nicklib253@gmail.com now at 2d — crosses E1 tomorrow
    - E2 eligible (≥7 days): 18 users (dylanbaldy still at 4d — not yet E2)
    - E3 eligible (≥14 days): 16 users
      - Newly E3-eligible today: pete.uzelac77 + goldy.pec.2012 hit 14d yesterday at Day 7 of their accounts; still at 9d today → not yet E3
      - Correction: E3 is ≥14d on account, not watchlist; the 16 existing E3-eligibles remain
    - E4 eligible (≥21 days): 11 users (bhaygood728 at 17d — 4d from E4)
    - E5 eligible (≥30 days): 10 users (leofearon15 newly hit 30d today — fourth user in terminal stage)
  - Oldest pending (returned cohort): garretth9090@gmail.com at 40d; older off-page cohort reaches 53d
- **ESCALATION (Day 13 of 14):** `POST /api/admin/drip-run` timed out again today (HTTP 000 after 25s, confirmed manually). Still zero drip emails sent since platform launch. **Tomorrow (2026-04-20) is the Day-14 tipping point I set yesterday.** If the pipeline is still dead tomorrow, I stop reporting "outage" and the drip will be reclassified as "not shipped." **24 hours remain.**
- Root-cause checklist unchanged (ordered by likelihood):
  1. **Stale Gmail app password** — regenerate from Google Account → App Passwords, update `SMTP_PASS` in Railway env. (Most likely; test first.)
  2. **Gmail SMTP security block** — sign in manually to the sender Gmail, clear any suspicious-activity alerts.
  3. **Railway egress firewall on 587** — verify from a Railway shell that `smtp.gmail.com:587` is reachable (`nc -vz smtp.gmail.com 587`).
  4. **Synchronous blocking in the drip handler** — wrap sends in `Promise.allSettled` with per-user timeout so one stuck socket can't freeze the whole run.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: **0 out of 74** watchlist items have a `target_price` set. Every row returns `target_price: null`. Alert engine has nothing to evaluate.
- Today's new watchlist add (joshdguillemette → AEW Double or Nothing) also came in with no target. Pattern is 100% consistent: no user has ever been prompted effectively to set a target price.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 77 days since last organic newsletter signup

## Platform Context
- Total users: 54 (+1 — joshdguillemette@gmail.com signed up 2026-04-19 20:30 UTC)
- Users this week: 3 (unchanged)
- Users today: 1 (joshdguillemette)
- Watchlist items: 74 (+1 — AEW Double or Nothing, Louis Armstrong Stadium, May 24)
- Favorites: 0

### New User Signal — joshdguillemette@gmail.com
- Signed up 20:30 UTC, added a watchlist item 28 seconds later at 20:30:39 UTC (instant intent → action)
- Item added: **AEW Presents Double or Nothing, 2026-05-24 at Louis Armstrong Stadium, Flushing NY** (35 days out)
- No target price set (same pattern as every other signup)
- Lifecycle status: not routed into any drip (pipeline dead), no onboarding email, no welcome
- This is the second consecutive day with a signup → watchlist-add in the same session — users clearly understand the value prop on landing, but receive zero follow-up to reinforce it

### TWICE Night 2 — Terminal Deadline Expired
- yuehsu@gmail.com's TWICE Night 2 (Moody Center ATX) was last night (Apr 18). Passed with no outreach.
- Both TWICE items (Apr 17 Night 1, Apr 18 Night 2) are now past-events. 75 days on-platform, zero emails ever sent.
- **Third consecutive day flagged, outcome confirmed negative.** User's stated intent expired without any TicketScan touchpoint.
- Closing this case in the report: will not re-flag tomorrow.

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| Viva El Jaripeo 2026 | Allstate Arena, Rosemont | Apr 25 | **6 days** | 2510soccerboy@gmail.com | 83d |
| Florence + The Machine | State Farm Arena, Atlanta | May 1 | **12 days** | tate.sheppard@gmail.com | 35d |
| Bilmuri — Kinda Hard Tour | The Sylvee, Madison | May 2 | **13 days** | goldy.pec.2012@gmail.com | 8d |

### Today's Critical Case: 2510soccerboy@gmail.com — Viva El Jaripeo 6 days out
- Tracking since Feb 5 (83 days). Zero outreach. Event is Saturday.
- **This user just became the new terminal-urgency case** now that TWICE has passed.
- 6 days out is the late-end of the resale floor window. If we don't hit their inbox by Monday (2026-04-20), we've functionally missed the decision point for a second high-intent user in one week.

### New Watchlist Entrant Today: joshdguillemette@gmail.com — AEW Double or Nothing
- Account is 0 days old, event is 35 days out (May 24)
- Not E1-eligible for 3 more days — but perfect for a **welcome email** (which doesn't exist as a product)
- Note: Louis Armstrong Stadium is the USTA venue primarily used for tennis — this AEW Double or Nothing 2026 booking is an unusual/high-profile venue choice worth calling out in any welcome message

### Digest Templates (ready for send once SMTP is fixed)

**For 2510soccerboy@gmail.com — Viva El Jaripeo 6 days out (NEW TERMINAL URGENCY):**
```
Subject: Viva El Jaripeo is Saturday — check prices tonight, not Saturday morning
Preview: Last-minute buyers pay the worst prices. The next 48 hours are the move.

Hi there,

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   Saturday, April 25 (6 days away)

You've been watching this since February. Here's the practical read on
where we are in the resale cycle:

   • 7–14 days out → floor window (you were in it yesterday)
   • 4–6 days out → inventory starts to thin; prices stabilize
   • Day-of → last-minute scramble, often pays the worst prices

Tonight is the sweet spot: still enough inventory to have real comparisons,
but late enough that sellers who haven't moved yet are getting motivated.

Two moves, under 60 seconds each:
1. Run the three-source comparison once — this is your final baseline.
2. Set a target price so we ping you if it drops again before Saturday.

[CTA: Compare Viva El Jaripeo Prices →]
```

**For tate.sheppard@gmail.com — Florence 12 days out:**
```
Subject: Florence + The Machine: 12 days out — the floor usually forms this week
Preview: You're inside the window. Here's what typically happens to prices.

Hi there,

🎤 Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (12 days away)

You're now in the 7–14 day window, when resale floors typically form.
This is when the real baseline locks in — not the inflated day-of-announce
price, not the last-minute scramble, but the floor.

Two recommendations:
1. Set a target price — we'll alert you on drops below it.
2. Compare SeatGeek + StubHub + Ticketmaster side-by-side today
   to anchor your mental reference.

[CTA: Set Target Price →]
```

**For goldy.pec.2012@gmail.com — Bilmuri 13 days out:**
```
Subject: The Sylvee is 1,800 seats. Here's what that means for Bilmuri resale.
Preview: Small venues behave differently. Quick read on the 13-day window.

Hi there,

🎸 Bilmuri — Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (13 days away)

Small-cap venues (1,800-seat) usually have thinner resale inventory than
arena shows. That changes the math:

   • Floor forms earlier (you're in it now)
   • Inventory dries up faster around Day 5–7
   • Waiting to Day 3 rarely pays off like it does for 15,000-seat rooms

Translation: the next 5–7 days are your real buy window if you want
the floor. Waiting past that is usually a bad trade.

Two quick moves:
1. Set a target price — we'll alert you on drops below it.
2. Run the three-source comparison today to set your baseline.

[CTA: Set Target Price →]
```

### Events Entering the 15–30 Day Window
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — 35 days (just above the window; next 5 days brings it in)
- **Bruno Mars — The Romantic Tour** @ Soldier Field, Chicago (May 16–17) — konman87@gmail.com — 27–28 days

### Welcome Template (for joshdguillemette — first 48 hours)
```
Subject: Welcome — we're already watching AEW Double or Nothing for you
Preview: Here's what happens next, and one move that'll save you money.

Hi there,

You added AEW Presents Double or Nothing (Louis Armstrong Stadium, May 24)
to your watchlist 30 seconds after signing up. Nice. You're already ahead
of most ticket buyers just by having it tracked across three sources.

Here's what TicketScan does automatically for you:
   • Checks Ticketmaster, SeatGeek, and StubHub every 4 hours
   • Stores the price history so you can see trends, not just snapshots
   • Alerts you when prices drop — once you tell us your target

One move to make the alerts work:
→ Set a target price on your watchlist item. We default to 15% below
  current lowest if you'd rather not pick one yourself.

[CTA: Set Your Target Price →]

Questions? Just reply.
```

### World Cup Watchlist — Dormant but High-Intent (unchanged from yesterday)
- **pete.uzelac77+ticketscan@gmail.com** — 9d on-platform, E1+E2 eligible
  - 4 World Cup items (earliest: Match 9 Jun 14, 56 days out)
  - 2 Darts Masters items (Jun 25–26 @ MSG)
- **laye.aurelien@wanadoo.fr** — 18d, 2 Shakira items (Jul 20/23)
- **blubberboi@yahoo.com** — 10d, Ed Sheeran Aug 8

### Past-Event Backlog
- Estimated 30/74 (~41%) of watchlist items have event dates before today. Confirmed rolls from yesterday:
  - TWICE Night 2 (yuehsu, Apr 18) → now past
  - Nothing else newly rolled today
- API only returned top 50 of watchlist; older items (outside top 50) are not directly inspectable without pagination, but yesterday's breakdown showed ~28/73 past, + TWICE Night 2 tonight → ~30/74 today
- Still no archive function. Every past-event row continues to inflate query results.

---

## Subject Line A/B Tests

### 6-Day Floor Window — Viva El Jaripeo (NEW terminal urgency)
- **A:** `Viva El Jaripeo is Saturday — check prices tonight, not Saturday morning`
- **B:** `You've been watching Viva El Jaripeo for 83 days. Saturday is the show.`
- **Hypothesis:** A provides a specific actionable insight (tonight vs. Saturday morning) framed as a concrete decision moment. B uses the personal tracking number (83 days) for recognition. A's actionability is stronger for a user 6 days out — they need to act, not reflect. Recommend A.

### 12-Day Window — Florence + The Machine
- **A:** `Florence + The Machine: 12 days out — the floor usually forms this week`
- **B:** `Florence Atlanta: the difference between 12 days and 5 days is real money`
- **Hypothesis:** A is conventional countdown + data claim. B is a falsifiable teaser ("real money") that forces open-to-learn behavior. For tate.sheppard (35d on-platform with zero touchpoints), we need a stronger hook than a calendar reminder. Recommend B.

### 13-Day Window — Bilmuri (small-venue variant)
- **A:** `The Sylvee is 1,800 seats. Here's what that means for Bilmuri resale.`
- **B:** `Bilmuri in 13 days — small venues don't follow arena pricing rules`
- **Hypothesis:** Both use venue-specificity, which is the right hook for a sophisticated fan of a niche artist. A gives a specific number (1,800). B leads with a categorical claim ("don't follow arena rules") which may feel more surprising. A is more falsifiable/concrete. Recommend A (same as yesterday).

### Welcome Email — joshdguillemette (NEW)
- **A:** `Welcome — we're already watching AEW Double or Nothing for you`
- **B:** `You just beat 90% of ticket buyers — here's what happens next`
- **Hypothesis:** A is specific to their actual watchlist item (personalization through action recognition). B is a status/identity hook ("beat 90%") that flatters the user. For a user who just took the watchlist action, A feels earned; B risks seeming manufactured. Recommend A.

### CTA Review (all templates)
- Viva El Jaripeo → `ticketscan.io/compare?event=Z7r9jZ1A74348` — direct to comparison ✓
- Florence → `ticketscan.io/watchlist` (set target price) ✓
- Bilmuri → `ticketscan.io/watchlist` (set target price) ✓
- Welcome → `ticketscan.io/watchlist` (set target price) ✓
- Primary CTA above the fold in every template ✓
- All templates include "set target price" as either primary or secondary CTA to push users into the one feature they're all missing

---

## Action Items

### P0 — Critical (Day 13 of outage, 24h to tipping point)
1. **SMTP / drip pipeline — DAY 13 of 14.** `POST /api/admin/drip-run` confirmed still timing out today (HTTP 000 at 25s). Tomorrow is the Day-14 tipping point. **Gmail app password regen is the highest-ROI thing to try first** — takes 5 minutes and is the most common cause of Nodemailer/Gmail SMTP failures in long-lived deployments. Do it today, not tomorrow.
2. **2510soccerboy@gmail.com — Viva El Jaripeo 6 days out** (new terminal urgency case now that TWICE passed). 83 days on-platform with zero outreach. Window effectively closes by Monday 2026-04-20.
3. **goldy.pec.2012@gmail.com — Bilmuri 13 days out.** In the 7–14 day floor window; small-cap venue tightens the window further. Second day flagged.
4. **tate.sheppard@gmail.com — Florence 12 days out.** Third day flagged.
5. **joshdguillemette@gmail.com — brand-new signup TODAY, no welcome sequence exists.** Fast signup → instant watchlist add is exactly the user we most want in a lifecycle — and we have no lifecycle to put them in.

### P1 — High
6. **Target price UX remains a total blocker.** 0/74 watchlist items have a target price (today's new add from joshdguillemette also arrived null). Product design problem: the watchlist flow isn't prompting. Recommended: default `target_price = current_min_price × 0.85` with an inline "edit" option. This single change unblocks price alerts from "dead code" to "functional."
7. **Welcome email — build this.** Two consecutive days have produced same-session signup → watchlist-add. These users are ready to be nurtured and we're silent. A welcome template doesn't depend on the drip cron — it's an event-driven send triggered by `user_created`. Could be wired up separately even while drip-run is broken.
8. **After SMTP fix, trigger `POST /api/admin/drip-run`.** Backlog plan: 10 users are now 30+ days old. Send E1+E2 together with a 48h gap, then E3/E4/E5 at normal 7-day cadence. Oldest 4–6 users (off-page cohort, 45d+) get a dedicated "sorry we went quiet — here's what you missed" before resume.
9. **Past-dated watchlist add blocker.** nicklib253 on Apr 17 added a same-day game; today we have Viva El Jaripeo 6 days out as the nearest-future item. Product should reject `event_date < NOW()` at write time.

### P2 — Medium
10. **Newsletter growth: 77-day stall.** Only 1 organic signup ever. Homepage form is clearly not converting. Recommend A/B on form copy, position, and incentive (even a "get ticket alerts on your city" variant that pre-fills the city based on IP).
11. **World Cup dormant high-intent pool.** pete.uzelac77 (6 items, E2-eligible), laye.aurelien (Shakira x2), blubberboi (Ed Sheeran). 9 items of clearly-stated intent, zero outreach after 9–18 days.
12. **Build watchlist digest endpoint.** Per-user automated digest does not exist. Needs cron + SQL query + email template. Blocked on SMTP regardless.
13. **Archive past-events.** ~30/74 (~41%) are past-dated today. Recommend `status` column on `watchlist` (`active`/`past`/`user_archived`) + daily cron to auto-mark past items. Pair with write-time block from #9.
14. **Fourth user in E5 terminal stage:** leofearon15@gmail.com hit 30d today. When SMTP is fixed, 10+ users will need E5 ("Your Ticket Savings Report") referencing savings they never captured. This email needs a rewrite for the backlog-recovery case or it'll read as sarcastic.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 77-day stall
- **Drip pipeline:** BROKEN — Day 13 of outage, 0 sends ever, 20 users in API-returned pending cohort (older cohort not paginated; minimum 26 pending total including off-page)
- **Price alerts:** 0 ever triggered — 0/74 watchlist items have target prices (product blocker, not email blocker)
- **User growth:** +1 today (joshdguillemette), 54 total, 3 this week
- **Watchlist:** 74 items (+1), 3 events within 14 days (Viva El Jaripeo 6d, Florence 12d, Bilmuri 13d)
- **Terminal urgency (active):** 2510soccerboy — Viva El Jaripeo Saturday (6 days). Window closes Monday.
- **Terminal urgency (expired overnight):** yuehsu TWICE Night 2 passed last night with no outreach (predicted and confirmed — final day logged).
- **Past-event backlog:** ~30/74 (~41%) today (estimate, API-paginated at 50).
- **Email channel status:** Day 13 of 14. **Tomorrow is the reclassification deadline.** Zero emails of any kind have ever reached a user.
- **Product blockers surfaced repeatedly:** (a) No welcome email for same-session signup+watchlist flow (2 missed in 3 days); (b) Target-price field null on 100% of all 74 adds; (c) Watchlist accepts past-dated events; (d) No archive/cleanup for past-events inflating ~41% of queries.
- **New-user pattern:** 2 of last 3 signups added a watchlist item within 60 seconds of account creation. High-intent signal that is being wasted entirely.
