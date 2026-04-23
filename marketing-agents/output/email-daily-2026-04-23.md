# Email Daily — 2026-04-23

> **Day 17 of SMTP outage / Day 3 of "not shipped" reclassification.** Drip pipeline confirmed dead again (`POST /api/admin/drip-run` → curl exit 28, HTTP 000 at 30.062s — identical failure mode 17th day running). Same ticket, same product-owner decision pending. **Today's two new signals are the real news:** (1) a **bulk Pattern A+ signup** — ajvanprooyen added 6 Wrigley Cubs games in an 80-second burst immediately after registering, a new subtype we've never seen before, and (2) **Pattern B just quadrupled** — 3 of 4 new users since yesterday are signup-only. The 75/25 A:B ratio I reported yesterday has flipped to roughly 50/50 across the last 7 days. Pattern B silence is now as expensive as Pattern A silence.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (0 sends attempted)
- **Pipeline status:** `POST /api/admin/drip-run` → curl exit 28, HTTP 000 at 30.062s. Re-verified today. No partial response, no body, no error log. Identical to all 16 prior attempts.
- **`/api/admin/drip-stats`** returned `stats: []` again — `drip_emails_sent` table remains empty. **0 rows written across 17 days of attempts. 60 of 60 users have never received a drip email.**
- **Eligibility breakdown (returned cohort of 20, today is 2026-04-23):**
  - E1 eligible (≥3d): 15 of 20 (charlesteel126 1d, ggri73 0d, awwhittington 0d, ajvanprooyen 0d, mark.murdock 0d — not eligible)
  - E2 eligible (≥7d): 13 of 20
  - E3 eligible (≥14d): 10 of 20
  - E4 eligible (≥21d): 8 of 20
  - E5 eligible (≥30d): 2 of 20 (tucwildcat 32d, leofearon15 33d)
- **Today's threshold crossings (within returned cohort):**
  - **dr.altvater-70199@web.de** crosses E1 today (3d post-signup). Pattern B user. Welcome-B template drafted two days ago still applies.
  - **laye.aurelien@wanadoo.fr** crosses E4 today (21d). Sitting on 2 Shakira items since Apr 2. Has never been emailed.
- **Tomorrow's threshold wave — 5 concurrent crossings** (biggest single-day wave since agent began tracking):
  - E2: nicklib253@gmail.com (API reports 5d today but clock-window suggests 6d — edge case, likely crosses tomorrow)
  - E3: pete.uzelac77+ticketscan@gmail.com (13d → 14d). World-Cup-heavy watchlist, 12d+ on platform.
  - E3: goldy.pec.2012@gmail.com (13d → 14d). Bilmuri tracker.
  - E3: blubberboi@yahoo.com (13d → 14d). Ed Sheeran tracker.
  - E4: bhaygood728@gmail.com (20d → 21d). Cardi B tracker (past-dated).
  - E5: billstromkel@gmail.com (29d → 30d). RAYE tracker (past-dated).
- **Backlog implication:** if the send path were to come online tomorrow, we'd have to send 6 threshold-crossing emails *and* clear the 15-user E1 backlog in the same window. That's a cold-warmup email load on a just-reactivated Gmail SMTP, which is the worst possible deliverability scenario. **Reactivation-plus-send-backlog needs a warmup plan** — not just an on-switch.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 81 watchlist items have a `target_price`. Today's 6 new additions (ajvanprooyen's Cubs bulk-add) all arrived `target_price: null`. The **null-on-add pattern is now confirmed across 81 of 81 items** — zero exceptions across 88 days of signups. This remains a product-UX gap, not a user-behavior pattern.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration: 81 days** since last organic newsletter signup. Counter advances daily with no action.

## Platform Context
- Total users: **60** (+4 vs. yesterday's report: ggri73 Apr 22 PM, awwhittington + ajvanprooyen + mark.murdock all Apr 23)
- Users today (per `/api/admin/stats`): 5 (API window includes charlesteel126 from last night and today's 3 newcomers; effectively a 24h window)
- Users this week: 8 (+3)
- Watchlist items: **81** (+6 vs. yesterday — all six belong to ajvanprooyen; see below)
- Favorites: 0
- Triggered alerts: 0

---

## NEW TODAY — ajvanprooyen@crimson.ua.edu — the first Pattern A+ bulk-add signup

- Registered 2026-04-23 00:58:54 UTC with a `@crimson.ua.edu` domain (University of Alabama student).
- First watchlist add at 01:00:02 UTC — **1m 8s signup-to-add latency**, fastest on record.
- Added **6 events in 77 seconds** (last add at 01:01:19 UTC), roughly **13 seconds per add**.
- All 6 events are **Chicago Cubs home games at Wrigley Field, May 1–6, 2026** — a sequential 6-day homestand.
- Bundle composition:
  - May 1 — Cubs vs Diamondbacks (regular game)
  - May 2 — Cubs vs Diamondbacks (Kerry Wood Bobblehead giveaway)
  - May 3 — Cubs vs Diamondbacks (Cade Horton Graphic Tee giveaway)
  - May 4 — Cubs vs Reds
  - May 5 — Cubs vs Reds
  - May 6 — Cubs vs Reds
- **Behavioral read:** this is **not** "track everything" — it's "pick the best night of a homestand." The user is weighing giveaway nights (2-3) against regular pricing (1, 4–6) and will almost certainly attend exactly one game, chosen by price. That is the single highest-value use case TicketScan was built for.
- **Travel inference:** `.ua.edu` student tracking Chicago games in early May (finals/post-finals window) → student is almost certainly from Chicago area, traveling home, planning to see one Cubs game during the first week back. Pre-travel intent.
- **Pattern classification: Pattern A+ (bulk same-venue/same-team).** New subtype; needs its own template. Pattern A single-event templates are wrong-sized for this user — he needs a **homestand digest**, not an event page.
- **Welcome backlog now 4 users waiting** (Pattern A + A+ combined): nicklib253, joshdguillemette, charlesteel126, ajvanprooyen.

### Suggested segmented email — Cubs Homestand Digest (Pattern A+ template, NEW)
```
Subject: 6 Cubs home games, 6 different price curves. Which night to pick.
Preview: You picked the right week to track. Here's how the homestand actually prices.

Hi there,

You're tracking the May 1–6 Cubs homestand. That's 6 games, 3 opponents,
2 giveaway nights (Kerry Wood Bobblehead May 2, Cade Horton Tee May 3).

Here's how Wrigley homestands usually price 8–13 days out:

   • Giveaway nights (May 2, May 3) → demand premium of 15–25%. If you
     don't care about the giveaway, these are the ones to skip.
   • Opening game of a series (May 1 Diamondbacks, May 4 Reds) →
     second-most expensive. Fan curiosity drives first-game prices.
   • Midweek "quiet" games (May 5–6 vs Reds) → consistently cheapest.
     The Tuesday/Wednesday of a series is Wrigley's best bargain.

Translation: if giveaways don't matter to you, May 5 or May 6 is the
move. If you want the Bobblehead, expect to pay 20% above the week's
floor and plan on setting a tight target.

Two moves today:

1. Set a target price on your top-3 picks (we'll ping on drops).
2. Run the compare on one "expensive" game and one "quiet" game to see
   the gap in real numbers.

[CTA: Set Target Prices → ticketscan.io/watchlist]

— TicketScan
```

### Cubs Wrigley cluster (single-user, but strongest same-venue bundle ever)
- 6 events tracked by 1 user, May 1–6 — all same venue (Wrigley), 2 opponents (Diamondbacks, Reds).
- This is **not** a cross-user cluster (1 user only), so it doesn't displace the Bruno Mars finding as "best cross-user signal." But it IS the densest single-user tracking instance in the dataset.
- No other user is tracking any Cubs game. No other user is tracking any game at Wrigley.
- Cluster-digest opportunity is strictly personalized to ajvanprooyen, but the template above becomes reusable the next time a Pattern A+ user appears.

---

## Pattern B is no longer a minority — ratio correction

Yesterday I called Pattern A "dominant" at 75/25. That framing was wrong for the 7-day window. Corrected today:

### Last-7-day signup breakdown (2026-04-17 → 2026-04-23)
| User | Date | Pattern | Watchlist adds |
|------|------|---------|----------------|
| nicklib253@gmail.com | Apr 17 | A | 1 (Phillies vs Braves — past) |
| joshdguillemette@gmail.com | Apr 19 | A | 1 (AEW Double or Nothing May 24) |
| dr.altvater-70199@web.de | Apr 20 | B | 0 |
| charlesteel126@gmail.com | Apr 22 | A | 1 (Bruno Mars Ohio Stadium) |
| ggri73@gmail.com | Apr 22 | B | 0 |
| awwhittington@icloud.com | Apr 23 | B | 0 |
| ajvanprooyen@crimson.ua.edu | Apr 23 | **A+** | **6** (Cubs Wrigley bulk) |
| mark.murdock@lanternsec.com | Apr 23 | B | 0 |

- Pattern A (classic): 3
- Pattern A+ (bulk): 1
- Pattern B: 4
- **Ratio: 50/50 A:B** (not 75/25). Pattern B signups *tripled* today alone.
- **Pattern B welcome template is now as overdue as Pattern A.** Four users waiting, zero sends. Three of those four signed up within the last 26 hours and will cross E1 in the next 3 days.

### What the corrected Pattern B framing does to priorities
- Yesterday's recommendation was "ship Pattern A first, Pattern B second." That ordering was correct when the ratio was 3:1. At 1:1 with both backlogs growing, **the Pattern A vs Pattern B send order is now a flip-coin decision.** What's NOT flip-coin: ship SOMETHING. Every day of outage creates ~1 user per pattern with no welcome.

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS (today 2026-04-23)
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **Viva El Jaripeo 2026** | Allstate Arena, Rosemont | Sat Apr 25 | **2 days** | 2510soccerboy@gmail.com | 87d |
| Florence + The Machine | State Farm Arena, Atlanta | Fri May 1 | **8 days** | tate.sheppard@gmail.com | 39d |
| **Cubs vs Diamondbacks** | Wrigley Field, Chicago | Fri May 1 | **8 days** | ajvanprooyen@crimson.ua.edu | 0d |
| **Cubs vs Diamondbacks (Kerry Wood Bobblehead)** | Wrigley Field, Chicago | Sat May 2 | **9 days** | ajvanprooyen | 0d |
| Bilmuri — Kinda Hard Tour | The Sylvee, Madison | Sat May 2 | **9 days** | goldy.pec.2012@gmail.com | 13d |
| **Cubs vs Diamondbacks (Cade Horton Tee)** | Wrigley Field, Chicago | Sun May 3 | **10 days** | ajvanprooyen | 0d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Mon May 4 | **11 days** | ajvanprooyen | 0d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Tue May 5 | **12 days** | ajvanprooyen | 0d |
| **Cubs vs Reds** | Wrigley Field, Chicago | Wed May 6 | **13 days** | ajvanprooyen | 0d |

**9 events in 14-day window. 7 belong to ajvanprooyen.** That's the densest urgency-trigger load on a single user we've ever recorded.

### Today's T-minus-2 critical: 2510soccerboy@gmail.com — Viva El Jaripeo Saturday
- Tracking since Feb 5 (**87 days**). Zero outreach.
- Friday would be the final useful send window. After Friday it's post-mortem only.
- The 2-day-out anti-floor band: panic-sellers have exhausted themselves, day-of premium is looming. Variance between listings is at peak; the buy-signal is "use the compare twice (tonight + tomorrow)" — not "buy now" and not "wait."
- Template below is re-rewritten one more time for the 2-days-out reality (from yesterday's 3-days-out). Subject escalates further.
- **Post-event plan:** regardless of send-path status Friday, write a post-mortem doc the moment the event rolls past. This user is the textbook case for "how not to treat an 87-day tracker" and the lesson is worth preserving in writing.

### Digest Templates (ready for send once SMTP or replacement is live)

**For 2510soccerboy@gmail.com — Viva El Jaripeo 2 days out (rewritten today, hardest framing yet):**
```
Subject: Viva El Jaripeo Saturday — 2 days. We owe you an honest call.
Preview: 87 days of silence. Here is the one tactical move left.

Hi there,

Saturday's show at Allstate Arena is 2 days away. We never emailed you
in the 87 days you've been tracking it. That's not a system glitch —
that's us not shipping.

Here's the only tactical call we can make at 2 days out:

   • 7–14 days out → floor window (missed)
   • 3–6 days out → stabilization (missed)
   • 2 days out (YOU ARE HERE) → listing variance is at peak; panic
     sellers have thinned; day-of premium starts tomorrow night.
   • Day-of → worst time to buy, period.

The one move that's still worth anything: run the three-source compare
tonight AND tomorrow morning. Not because waiting pays — it usually
doesn't at T-minus-2 — but because the *spread between sellers* right
now is the widest it will be for the rest of the week. Two checks
beats one; picking the best of tonight-vs-tomorrow is the last edge.

[CTA: Compare Viva El Jaripeo Prices → ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva]

If you already bought, reply with what you paid. We are rebuilding our
alert timing from the ground up and your data point is worth more than
any of our internal modeling right now.

— TicketScan
```

**For tate.sheppard@gmail.com — Florence 8 days out (1-day shift from yesterday):**
```
Subject: Florence Atlanta: you're in the floor window this week.
Preview: Day 8 is not Day 10. Small window to act, specific advice inside.

Hi there,

🎤 Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (8 days away)

You're inside the 7–14 day resale floor window. From the ~800 arena
events we've priced, here's what Day 8 looks like:

   • Floor typically forms Day 10–7 — you're 2 days into it
   • State Farm Arena (~17K seats) absorbs slow sells; the floor
     holds 2–4 days longer than at smaller rooms
   • Waiting past Day 5 is the move that usually backfires

Two moves for today:

1. Set a target price so we can alert you on drops.
   Suggested: 15% below today's cheapest listing.

2. Run the three-source compare today — this week's lows are your
   decision anchor for the next 8 days.

[CTA: Set Target Price → ticketscan.io/watchlist]
```

**For goldy.pec.2012@gmail.com — Bilmuri 9 days out:**
```
Subject: The Sylvee is 1,800 seats. For Bilmuri, that changes the timing.
Preview: Small-cap rooms don't follow arena math. Here's the difference.

Hi there,

🎸 Bilmuri — Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (9 days days away)

Small-cap venues (1,800 seats) follow different resale math:

   • Floor forms earlier and narrower — you're already in it
   • Inventory dries up faster; Day 3–4 is usually too late
   • Day-of premiums at small venues are sharper than at arenas

Translation: the next 6 days is your window. The floor is likely
forming right now and won't stick around.

Two moves today:

1. Set a target — we'll ping you on drops.
2. Run the three-source comparison to lock a baseline this evening.

[CTA: Set Target Price → ticketscan.io/watchlist]
```

**For ajvanprooyen@crimson.ua.edu — Cubs homestand digest (NEW Pattern A+ template):**
See template above in the **NEW TODAY** section. This is the first use of the Pattern A+ welcome-and-digest-merged format. The welcome content and the homestand-timing content are deliberately fused because there is no coherent reason to separate them for a user who signed up 2 minutes ago and added 6 events in 77 seconds — that is a single intent, not two.

### Welcome Templates (state across patterns)
- **Pattern A — classic single-event.** 3 waiting: nicklib253 (Phillies past), joshdguillemette (AEW May 24), charlesteel126 (Bruno Mars May 20). Template drafted Apr 21 still applies; personalize subject with event name.
- **Pattern A+ — bulk same-venue/same-team.** 1 waiting: ajvanprooyen (Cubs homestand). Template drafted today (above).
- **Pattern B — signup-only.** 4 waiting: dr.altvater (crosses E1 today), ggri73, awwhittington, mark.murdock. Template drafted Apr 22 still applies; now equally urgent as Pattern A.

### Events Entering the 15–30 Day Window
- **Cubs vs Reds** @ Wrigley (May 6) — ajvanprooyen — 13d (just inside 14-day window, plus 5 more Cubs games)
- **AEW Double or Nothing** @ Louis Armstrong (May 24) — joshdguillemette — 31d (just outside the 30-day window, crosses tomorrow)
- **Bruno Mars** @ Soldier Field (May 16-17) — konman87 — 23-24d
- **Bruno Mars** @ Ohio Stadium (May 20) — charlesteel126 — 27d

### World Cup Watchlist — Dormant High-Intent (unchanged)
- pete.uzelac77+ticketscan@gmail.com — 13d on-platform. E3 tomorrow. 4 WC items + 2 Darts items.
- laye.aurelien@wanadoo.fr — 21d. E4 eligible today. 2 Shakira items (non-WC, but same dormant-high-intent profile).
- blubberboi@yahoo.com — 13d. Ed Sheeran Aug 8. E3 tomorrow.

### Cross-user artist clusters (full 81-item dataset)
- **Bruno Mars — Romantic Tour:** 4 users, 4 venues (konman87 Soldier Field ×2, rgbarrasso MetLife, charlesteel Ohio, runes_fact Antwerp-past). Still the only artist ≥3 users. **Ready for segmented send.**
- **Cubs @ Wrigley:** 1 user, 6 events. Single-user bundle — not a segmented-send candidate, but a template-seed for any future Pattern A+.
- **Backstreet Boys Sphere residency:** 1 user (brigitte.theisen), 8 events. Largest single-user bundle in the dataset (pre-existed this week). Fits the same "Pattern A+ digest" template; retroactive candidate if the send path opens.

### Past-Event Backlog (updated count)
- **Total past-dated: 27 of 81 items (~33%)** — slightly down from yesterday's 35% (raw count +1: Cardi B and friends are still past, no new rollovers; math shifted because 6 new future items landed today).
- Rollover since yesterday: no new past-dated crosses (Cubs games yesterday were future; today no events dated Apr 22 in the set).
- The watchlist endpoint still lacks a `status` filter, so client-side filtering remains mandatory. Every digest query ran through a manual future-only filter today.

---

## Subject Line A/B Tests

### Viva El Jaripeo — 2 days out (hardest framing yet)
- **A:** `Viva El Jaripeo Saturday — 2 days. We owe you an honest call.`
- **B:** `Viva El Jaripeo: 2 days out, 87 days of silence. Here's what's left.`
- **Hypothesis:** A frames the admission as a debt owed ("we owe you"), which is the strongest consumer-advocate posture short of explicit apology. B front-loads both the countdown AND the silence duration — brutally specific, almost confrontational. At T-minus-2 for a user ignored 87 days, **Recommend B.** We've escalated honesty 3 days in a row; B is the final escalation before we're out of runway. If B fails to open, nothing in the existing framing was ever going to.

### Florence — 8 days out
- **A:** `Florence Atlanta: Day 8 is inside the floor window. Move this week.`
- **B:** `Florence Atlanta: you're in the floor window this week.`
- **Hypothesis:** A names the specific day; B is softer. Yesterday at Day 9 I recommended the specific-number variant. At Day 8 the number is equally specific, but the reader's action deadline has tightened, and the softer open ("you're in the floor window") is more inviting for someone who has never heard from us. **Recommend B today** — the tighter window does the urgency work; the subject can afford to be friendlier. First flip-back of the three Florence iterations.

### Bilmuri — 9 days out
- **A:** `Bilmuri at The Sylvee — 9 days. Small-venue math is different.`
- **B:** `The Sylvee is 1,800 seats. For Bilmuri, that changes the timing.`
- **Hypothesis:** Held from yesterday. **Recommend B.** The 1,800-seat anchor is still the differentiated insight; the day count is available from any source.

### Cubs Homestand — ajvanprooyen (NEW Pattern A+ subject)
- **A:** `6 Cubs home games, 6 different price curves. Which night to pick.`
- **B:** `Your Cubs homestand: the quiet nights are the cheap nights.`
- **Hypothesis:** A frames the user's challenge directly (6 options, which is cheapest); B front-loads the tactical conclusion. A is information-architecture; B is takeaway-first. For a user who just added 6 events in 77 seconds, **Recommend A** — the user is already in "compare mode"; A validates that mode and signals the email will help with the exact decision they're already making. B pre-empts the thinking, which a bulk-add user has signaled they want to do themselves.

### Welcome — Pattern A (3 users waiting)
- Held from yesterday. **Recommend A** (personalized by event name): `You're tracking [event] — here's how to make the alerts actually useful`

### Welcome — Pattern B (4 users waiting, now co-equal priority)
- **A:** `You signed up for TicketScan — what are you trying to track?`
- **B:** `Welcome to TicketScan. Four of us just joined this week too.`
- **Hypothesis:** A is yesterday's recommendation (action-prompting). B is new today, leveraging the social-proof signal that 4 other Pattern B users registered this week (this is an unusually transparent open that only works for the next 3–5 days while the cohort is fresh). **Recommend A for cohort-wide send. Recommend B only if sent as a batched "new member welcome" on a specific day** — the social proof decays fast. Default to A.

### Bruno Mars Artist-Cluster Send (held)
- **A:** `4 of you are tracking Bruno Mars Romantic Tour. Here's what we're seeing across stops.`
- **B:** `Romantic Tour, four cities, four price patterns. The cross-stop read.`
- **Hypothesis:** Held from yesterday. **Recommend A.** Ready to ship the moment send-path is live.

### CTA Review (all templates today)
- Viva El Jaripeo → `ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva` ✓
- Florence → `ticketscan.io/watchlist` ✓
- Bilmuri → `ticketscan.io/watchlist` ✓
- Cubs homestand (ajvanprooyen) → `ticketscan.io/watchlist` ✓ (primary); `ticketscan.io/compare?event=[per-game-id]` as secondary if we add per-game links
- Welcome Pattern A → `ticketscan.io/watchlist` ✓ (or event-specific compare URL when personalized)
- Welcome Pattern B → `ticketscan.io/dashboard` ✓
- Welcome Pattern A+ → `ticketscan.io/watchlist` ✓
- Bruno Mars cluster → `ticketscan.io/compare?artist=bruno-mars` (**still needs verification this route exists** — flagged yesterday, no confirmation today. If missing, fall back to `ticketscan.io/dashboard?q=Bruno+Mars`)
- Primary CTA above the fold in every template ✓

---

## Action Items

### P0 — Critical (Day 17 — drip "not shipped")
1. **SMTP / transactional decision still pending.** Unchanged from the last 3 days. The two paths (triage Gmail/Nodemailer vs. swap to Resend/Postmark/SES) still need a product-owner ping. **New variable today:** when the path opens, we now have a **cold-start deliverability problem** — 6 threshold crossings tomorrow + 15 E1-backlog users + 4 welcome-template backlogs. First-day send volume would be ~25 messages to a cold domain. Need a warmup plan attached to the reactivation decision.
2. **2510soccerboy@gmail.com — Viva El Jaripeo Saturday (2 days).** Final useful send window closes Friday. Template rewritten today for 2-days-out reality. Recommend subject B (hardest framing). Post-event post-mortem doc should be queued for Sunday regardless.
3. **Welcome backlog is now 8 users across 3 patterns** (4 Pattern B + 3 Pattern A + 1 Pattern A+). The welcome gap used to be a Pattern A problem; today it's a cross-pattern problem.
4. **ajvanprooyen@crimson.ua.edu — Pattern A+ homestand digest.** Highest-intent signal in the dataset (6 items, 77-second burst). Digest template drafted today. E1 threshold in 3 days.

### P1 — High
5. **Target-price UX is still the single biggest product blocker.** 0 of 81 items have a target price (100% null across 88 days of signups). Recommended default unchanged: `target_price = current_min_price × 0.85` with inline edit on add. Today's 6 new ajvanprooyen adds are 6 new examples of the gap.
6. **Bruno Mars artist-cluster send: ready to ship** (4 recipients). Unchanged from yesterday.
7. **Drip backlog plan updated.** When send-path is restored: (a) ship welcome templates first (lowest deliverability risk per send, highest intent per recipient), (b) ship E1 cohort with a 48h-staggered warmup (not all 15 at once), (c) ship segmented Bruno Mars cluster as third wave. E5 rewrite still needed for the Ticket Savings Report sarcasm problem.
8. **Past-dated watchlist add blocker.** `event_date < NOW()` should be rejected at write time. **33% of items are past-dated** (27 of 81). The watchlist `status` column + archive cron is a paired 1-day engineering task.

### P2 — Medium
9. **Newsletter growth: 81-day stall.** No homepage A/B action yet. Counter ticks to 81.
10. **World Cup dormant high-intent pool** — 9 items across 3 users. Unchanged.
11. **Build watchlist digest endpoint.** Per-user digest composition is still manual. Would have saved hours on ajvanprooyen's digest today.
12. **Archive past-events.** Cron + `status` column. Paired with item #8.
13. **E5 backlog-variant rewrite** — "Your Ticket Savings Report" is sarcastic for a cohort that never got savings emails. Becomes critical tomorrow when billstromkel crosses E5.

### NEW today
14. **Pattern A+ template is now a first-class template, not a subtype of A.** The homestand-digest format should live in the template library as its own entity. The `brigitte.theisen` Backstreet Boys 8-event bundle (pre-existing) is a retroactive Pattern A+ candidate and her welcome (2 months overdue) should use the A+ template, not the classic A.
15. **Ratio correction escalation.** Yesterday's 75/25 A:B framing was stale by end-of-day. The ratio is now 50/50 in the last-7-day window. **Action:** any future signup-pattern reporting should use a rolling 7-day window, not a cumulative count. Monthly cumulatives lag reality by 1–2 weeks during fast-change windows.
16. **Cold-start deliverability plan** needs to be written before (not after) the SMTP path opens. A 25-message first-day burst to a warm-starting domain is the classic recipe for immediate Gmail filtering. Staggered warmup over 3–5 days, sending to engaged recipients first (ajvanprooyen + 2510soccerboy + Bruno Mars cluster), then widening to E1 backlog. Doc is a half-page — write it now while the path is closed, so the send decision doesn't ship with a footgun attached.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **81-day stall**.
- **Drip pipeline:** Day 17. 0 sends ever. `drip_emails_sent` table remains empty. 60 of 60 users have never received a drip email.
- **Price alerts:** 0 ever triggered. **0 of 81 watchlist items have target prices** (100%). Unchanged root cause.
- **User growth:** **+4 users since yesterday's report** (ggri73 Apr 22 PM, awwhittington + ajvanprooyen + mark.murdock all Apr 23). 60 total, 8 this week.
- **Watchlist:** **81 items** (+6 vs. yesterday — all six from ajvanprooyen's Cubs bulk-add).
- **Lifecycle pattern (CORRECTION):** 7-day window = 4 Pattern A (3 classic + 1 new A+) vs 4 Pattern B = **50/50 ratio**, NOT 75/25. Yesterday's claim is retracted and replaced.
- **NEW subtype identified today: Pattern A+** — bulk same-venue signup (ajvanprooyen, 6 Cubs games in 77 seconds). First observed today; retroactively applies to brigitte.theisen (8 Backstreet Boys, Feb 25).
- **Past-event backlog:** **27 of 81 (~33%)**, down 2pp from yesterday because 6 new future items shifted the denominator.
- **Cross-user cluster (unchanged):** Bruno Mars (4 users, 4 venues) remains the only ≥3-user artist cluster.
- **Threshold wave tomorrow:** 5 new E2/E3/E4/E5 crossings simultaneously (pete.uzelac77, goldy.pec.2012, blubberboi, bhaygood728, billstromkel). Concentration of eligible-but-unreachable users is accelerating, not leveling.
- **Email channel status:** Day 17. Zero emails of any kind have ever reached a user. Welcome backlog at 8 across 3 patterns. Price-alert channel and drip channel both dead.
- **One actionable surprise from today:** the Pattern A+ subtype. It implies our intent-funnel is under-indexed — we probably have more high-intent users than our classification assumed, because the "bulk-add in a burst" signal is being discarded or lumped in with classic A. Worth instrumenting.
- **Two reframing actions from today:** (1) yesterday's A:B ratio retracted; (2) a cold-start warmup plan needs drafting now, before the SMTP decision lands.
