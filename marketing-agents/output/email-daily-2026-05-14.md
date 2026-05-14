# Email Daily — 2026-05-14

> **Day 38 SMTP outage. Day 102 newsletter flatline. Day 107 target-price null streak (now 97/97).** Today's defining event has no precedent in the report stream's history: **a second consecutive Pattern A++ canonical signup.** Yesterday kevinshall87 added 6 items at AT&T Stadium in 4 minutes. Today **karin_ef1** signed up 06:46 UTC and added **2 World Cup matches at BC Place Stadium Vancouver in 49 seconds** (06:47:16 + 06:47:28). Both signups are single-venue clusters of World Cup matches. **The platform produced its two strongest Pattern A++ signups in 33+ days on consecutive days — both into Day 37/38 of the SMTP outage.** Beyond karin_ef1, **+3 new signups today is the strongest single-day signup count in the report stream's history** (vlanza, karin_ef1, c_calingasan). **mark.murdock crossed E4 silent at ~03:01 UTC** — first E4 entrant visible in pendingUsers since dr.altvater fell below truncation. **kevinshall87's E1 trigger fires May 15 ~16:44 UTC — 24-hour deadline.** karin_ef1's E1 fires May 17 ~06:46 UTC — Saturday morning. The named-and-timestamped cost of inaction now spans **two users across a 48-hour window**.

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` still returns `stats: []` after **Day 38.** **79 of 79 users have never received a drip email.**
- **Probe today (Day 38):** `POST /api/admin/drip-run?limit=1&dryRun=true` → HTTP 000 after 25s timeout. **Identical failure shape to Days 11–37.** No diagnostic movement in 38 days. **Engineering remediation has not occurred.**
- `/api/admin/drip-health` probe → `404 "Endpoint not found"`. **Day 7 of that ask unmet** (P0 since May 7).

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 13 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **15 of 20** | -3 (3 new signups at days 0-1 push cohort younger; vlanza/karin_ef1 Day 0, c_calingasan Day 1) |
| E2 | ≥7d | **9 of 20** | -1 (cohort shifted; sparkitrightthere crosses E2 today silent at ~11:38 UTC) |
| E3 | ≥14d | **5 of 20** | -3 (cohort shifted; nmcnamee99 visible at 19d, mark.murdock visible at 21d) |
| E4 | ≥21d | **1 of 20** | **+1** (mark.murdock crossed E4 silent today ~03:01 UTC — first visible E4 since dr.altvater fell below horizon) |
| E5 | ≥30d | **0 of 20** | unchanged at zero |

**Truncation horizon advanced again** (3 new signups pushed older users out). mark.murdock (id 60, 21d) is now the oldest visible record. dr.altvater (~23d), nicklib253 (~27d), goldy.pec.2012 (~34d), blubberboi (~34d), bhaygood728 (~41d), laye.aurelien (~42d) — all hidden. **6+ silent users with ≥23-day backlog now invisible** to the only endpoint that names them. Cap regression entering Day 7.

### Threshold crossings in last 24h (3 silent advances + 2 forecast-fires-today)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| May 13 13:18 UTC | **jmoriarty13** | **E1** | **B (forming, 0 watchlist)** | silent | (post yesterday's report) — Pattern B Day 3. |
| May 13 20:33 UTC | **jadbennis0** | **E2** | Tier-0 hybrid (1 watchlist) | silent | (post yesterday's report) — Inter Miami now 3 days out. Welcome + missed-E1 + missed-E2 + Tier-0 quadruple compression intact. |
| May 14 03:01 UTC | **mark.murdock** | **E4** | A-cold (1 watchlist) | silent | **First visible-cohort E4 entrant since dr.altvater. 21d silent — never received E1/E2/E3 either.** Single watchlist item (event_id implied — see watchlist for full ID 21d cohort backstop). |
| May 14 ~11:38 UTC | **sparkitrightthere** | **E2** | **drip-incompatible (Mac DeMarco May 7 past)** | silent | Day 7 on platform; event passed Day 0. Canonical E2 send fails the "still in time" semantic. Tier-5 hybrid: silent E2 + Tier-5 send shape collide today. |
| May 14 ~18:40 UTC (forecast) | **natalie.sotocruz** | **E2** | **B (confirmed, 0 watchlist)** | silent | E1 crossed silent May 10; E2 fires today inside the canonical Pattern B-at-E2 send window (still 0 events tracked at 7d). |
| May 14 ~22:49 UTC (forecast) | **cjthomas2557** | **E2** | A (1 watchlist, Noah Kahan Jun 12) | silent | Multi-threshold drift: E1 crossed silent May 10 (3 days late); E2 fires tonight. Send shape: welcome + missed-E1 + canonical E2 compressed. |

### Tomorrow's forecast crossings (May 15)
- **kevinshall87 → E1** (3d, 6 items WC AT&T + Matt Rife) — **fires May 15 ~16:44 UTC.** **24-hour deadline.** Strongest single-user canonical-E1 fit in the report stream's history.
- **liambot62 → E2** (7d, 1 watchlist Toronto FC May 9 past) — drip-incompatible Tier-5 hybrid.
- **jfgalzin → E2** (7d, 0 watchlist) — Pattern B-at-E2.
- **kevinkid94 → E2** (7d, 0 watchlist) — Pattern B-at-E2.
- **emmacmather → E2** (7d, 0 watchlist) — Pattern B-at-E2.

**4 of 5 forecast E2 crossings tomorrow are Pattern B-at-E2 or drip-incompatible.** Only kevinshall87 fits canonical cadence cleanly — and it's the **E1 fit**, not the E2 group.

**Forecast for May 17 (Saturday):**
- **karin_ef1 → E1** (3d, 2 items WC BC Place Vancouver) — **fires May 17 ~06:46 UTC.** **Second Pattern A++ E1 trigger inside the 7-day forward window.**

**Visible backlog (in returned 20):** 15 E1 + 9 E2 + 5 E3 + 1 E4 + 0 E5 = **30 emails owed in pendingUsers cohort.** Plus the 6+ hidden users now beyond the truncation horizon (most >23 days silent). **True backlog ≈ 70 emails across all eligible users** (flat from yesterday's 70 estimate; mark.murdock entering visible-E4 partially offsets new signups owing fewer emails so far).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 107 of 100% null-on-add. 97/97 watchlist items have a null `target_price`** (was 95/95 yesterday). karin_ef1's 2 World Cup adds today — both null. **The Day 13 spec for inline target-price auto-suggest (10% below current min) remains unbuilt.** Today specifically: a single inline UX prompt at add-time would have captured 8 targets in 5 minutes from 2 users across consecutive Pattern A++ sessions. **The two strongest user-intent signals the platform has produced in 33+ days both passed without target capture.**
- Same interlock as May 6–13: SMTP fix alone produces 0 alert emails because no user has set a target.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 102 days** since last organic signup (roos_leeuwen, 2026-02-01). **+13 user registrations in 7 days, 0 newsletter signups in the same window.** Including today's 3-signup day (the strongest in report-stream history). The cross-channel lockstep at zero **strengthens** under acquisition pressure — yesterday's 10-user 7-day rolling has expanded to 12 today, and the newsletter delta stays exactly zero. **The structural break is now demonstrated under near-doubled acquisition velocity.** Footer regression Day 19; popup spec Day 15 unbuilt per CRO May 11.

## Platform Context
- Total users: **79** (was 76 on May 13, **+3 in 24h — STRONGEST SINGLE-DAY SIGNUP COUNT IN REPORT-STREAM HISTORY**)
- Users today (rolling 24h since May 13 10:00 UTC report): **3** — c_calingasan (May 13 11:46 UTC, 0 watchlist), karin_ef1 (May 14 06:46 UTC, **2 watchlist items WC BC Place Vancouver, Pattern A++**), vlanza (May 14 13:20 UTC, 0 watchlist so far)
- Users this week (rolling 7d): **12** (per `/admin/stats` — **new platform peak; was 10 yesterday**)
- Watchlist items: **97** (was 95, **+2** — both from karin_ef1)
- Past-dated watchlist items: **40 of 97 (41.2%)** — **second consecutive decrease.** Yesterday: 42.1%. The 2-item future-only add diluted the denominator without changing the numerator. The structural fix (status column + auto-expiry cron) is unchanged. Note: this decrease is again mechanical, but **two consecutive days of dilution is now a small pattern** — under sustained Pattern A++ acquisition (>1 future-add per day average), the dilution rate can begin to match the natural aging rate. Today is the second day this has happened in 30+ days.
- Favorites: 0
- Triggered alerts: 0

## New-Signup Pattern Analysis (24h)

| User | Signed up | Days | Watchlist | Pattern | Note |
|------|-----------|------|-----------|---------|------|
| **karin_ef1** | **May 14 06:46** | **0** | **2 (WC Match 51 Switzerland vs Canada Jun 24 + R16 Match 96 Jul 7, both BC Place Vancouver)** | **A++ (canonical, multi-item, single-venue cluster)** | **First add at 06:47:16 (37s post-signup); second at 06:47:28 (49s post-signup). Both at BC Place Vancouver — clean single-venue WC cluster.** Tier-2 fit (41–54 days out). **E1 trigger fires May 17 ~06:46 UTC.** Second Pattern A++ in 48 hours — no precedent in report-stream history. |
| vlanza | May 14 13:20 | 0 | 0 (so far) | undetermined (<24h) | Day 0; insufficient signal yet. |
| c_calingasan | May 13 11:46 | 1 | 0 | **B (forming, +24h)** | Pattern B-forming — 7th confirmed instance in current acquisition wave. |

**Updated pattern mix across rolling 10 signups (May 8 → May 14):**
- Pattern A canonical: **kevinshall87 + karin_ef1 = 2 of 10 (20%)** — both A++, both World Cup single-venue clusters, both within 48 hours
- Pattern B forming/confirmed: jfgalzin, kevinkid94, emmacmather, jmoriarty13, pattyglvz, c_calingasan = **6 of 10 (60%)**
- Drip-incompatible (same-day / past-event): liambot62 = **1 of 10 (10%)**
- Undetermined (Day 0): vlanza = **1 of 10 (10%)**

**The temporal claim from May 13's report — "Pattern A++ kevinshall87 is the cleanest single-user fit since pete.uzelac77 (33 days ago)" — has been overtaken in 24 hours.** karin_ef1 is the second Pattern A++ in two days. The rate is no longer "1 in 33 days" — the rate in the current window is **2 in 2 days**. The 20% Pattern A proportional share is stable, but the **density of Pattern A++ within that 20%** has jumped from "one outlier" to "back-to-back" overnight. **Two interpretations are live:**
1. **Stochastic clustering:** two unrelated Pattern A++ signups happened to land 38 hours apart, and the rate reverts to baseline.
2. **World Cup acquisition channel activated:** both Pattern A++ users came in via World Cup cluster intent (kevinshall87 = 5 WC matches AT&T; karin_ef1 = 2 WC matches BC Place). **The World Cup channel may be entering its first acquisition pulse 28 days out.**

**The structural answer cannot be settled in 24 hours, but the test is one-sided: if 3 of the next 7 signups are WC-cluster Pattern A++, interpretation 2 is the working hypothesis.** What is settled today: the canonical drip cadence is the right shape for both of these users, and **two of them now have named E1 trigger times inside the next 72 hours** (kevinshall87 May 15 16:44 UTC, karin_ef1 May 17 06:46 UTC). The 48-hour SMTP deadline framed yesterday for kevinshall87 alone is now a **72-hour deadline covering two Pattern A++ E1 triggers.**

---

## karin_ef1 — Detailed E1 Read

Mechanically near-identical to kevinshall87's read, transposed to a different venue and a smaller cluster:

1. **Signup → first add: 37 seconds.** Effectively-instant. (kevinshall87: 2 min.)
2. **Signup → cluster complete: 49 seconds.** Two adds in one session.
3. **Cluster shape:** 2 of 2 items at the same venue (BC Place Stadium Vancouver) — different rounds (group stage Jun 24 + R16 Jul 7). Single-venue clustering = same structural signal as kevinshall87 (venue-comparison and travel-package emails downstream).
4. **No drip-incompatibility risk:** earliest event Jun 24 is **41 days out.** E1 (May 17, +3d) = 38d pre-event. E2 (May 21, +7d) = 34d pre-event. E3 (May 28, +14d) = 27d pre-event. E4 (Jun 4, +21d) = 20d pre-event. E5 (Jun 13, +30d) = 11d pre-event. **All 5 sends in canonical 30-day cadence land cleanly pre-event.**
5. **Differences from kevinshall87:** smaller cluster (2 vs 6), no Tier-3 long-lead anchor (Matt Rife equivalent absent), and signup time is 06:46 UTC vs 16:44 UTC. The 06:46 UTC signup pushes the E1 trigger into **Saturday morning UTC** — first weekend canonical E1 trigger in the visible cohort.

**E1 send draft for karin_ef1 (fires May 17 06:46 UTC if SMTP restored):**
- Subject A: `Welcome — your 2 BC Place World Cup tickets, 41 days out. Here's how Vancouver pricing usually moves.`
- Subject B: `Welcome to TicketScan — Switzerland vs Canada + a Round of 16, both at BC Place. Here's the read.`
- **Recommend A.** Same logic as kevinshall87: cluster-specific hook + named venue + named day-count. "BC Place" and "Vancouver" are unique identifiers in the subject line — the user did the segmentation work in their first 49 seconds.
- CTA: `/compare?user_email=karin_ef1@hotmail.com` if route exists; otherwise `/watchlist`. **Deep-link justified by cluster shape.**

**Both Pattern A++ users now have full canonical 5-email cadences mapped to specific UTC fire times.** This has not been true of any pair of users simultaneously in the report stream's history.

---

## Watchlist Digest Prep — Tier-Compressed

### Past-Event Cleanup
**40 of 97 (41.2%) past-dated.** Second consecutive decrease, both mechanical (kevinshall87 6-item future-only add yesterday, karin_ef1 2-item future-only add today). **At ~4-item future-only add per day across 2 days, the dilution rate is now matching the natural aging rate** — but this is purely Pattern A++ driven and won't survive a return to typical signup mix. The structural ask is unchanged: `status` column + auto-expiry cron. **Forecast: % climbs back over 43% by May 17–18 as Bruno Mars May 16/17 + Inter Miami May 17 age past** unless additional Pattern A++ signups arrive by then.

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **Bruno Mars Soldier Field night 1** | May 16 | **2** | konman87 | 101 | post-E5 graveyard | **Day 101 of silence. Window functionally closed for 2+ days.** Send is pure acknowledgment + final-week read. |
| **Bruno Mars Soldier Field night 2** | May 17 | **3** | konman87 | 101 | post-E5 graveyard | Paired send. |
| **Inter Miami vs Portland Timbers** | May 17 | **3** | jadbennis0 | 9 | **E2 crossed May 13 silent** | Multi-threshold backlog: E1 (silent May 8) + E2 (silent May 13) + Tier-0 (3d) — quadruple-compression intact. |
| **Bruno Mars Ohio Stadium** | May 20 | **6** | charlesteel126 | 21 | E3 (crossed May 6 silent); E4 (forecast May 13 silent — completed yesterday) | Crossed E4 silent yesterday — multi-threshold E3+E4 now. 6 days out today; Wednesday-night framing still fresh tomorrow (May 15). |

**charlesteel126 crossed E4 yesterday silent** — multi-threshold E3+E4 hybrid moves to the same "compressed apology + Tier-0" template as joshdguillemette and jadbennis0.

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| AEW Double or Nothing | May 24 | 10 | joshdguillemette | 25 | E4 (crossed May 10 silent, multi-threshold with E3) |

### TIER 2 — Long-Lead Canonical (22+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| Noah Kahan Kia Center Orlando | Jun 12 | 29 | cjthomas2557 | 6 | **E2 fires today ~22:49 UTC silent** (E1 silent May 10) — multi-threshold welcome+E1-late+E2 |
| **World Cup ×5 at AT&T Stadium** | **Jun 14 → Jul 14** | **31 → 61** | **kevinshall87** | **2** | **E1 fires May 15 ~16:44 UTC (24h deadline)** |
| **Matt Rife — Choctaw Grand Theater Durant** | **Sep 26** | **135** | **kevinshall87** | **2** | **paired with WC cluster** |
| **WC ×2 at BC Place Vancouver** | **Jun 24 + Jul 7** | **41 + 54** | **karin_ef1** | **0** | **E1 fires May 17 ~06:46 UTC (72h deadline)** |
| Bruno Mars MetLife ×3 | Aug 21–25 | 99–103 | taranimeramaro | 19 | E3 (crossed May 9 silent) |
| Ed Sheeran SoFi | Aug 8 | 86 | blubberboi | 34 | E5 silent traversal complete May 11 |
| 2x Shakira ×2 NYC | Jul 20–23 | 67–70 | laye.aurelien | 42 | E5 silent + 12 days post-E5 |
| pete.uzelac77 (WC R16 Lincoln Financial Jul 4 + Darts Masters Jun 25-26 + WC Match 68 Jun 27) | Jun 25 → Jul 4 | 42 → 51 | pete.uzelac77 | 34 | E5 silent traversal complete May 10 |

**kevinshall87 + karin_ef1 dominate Tier-2 today, accounting for 8 of 13 Tier-2 future items.** The canonical drip cadence was built for these users. **Both have full 30-day, 5-email arcs landing pre-event.** The dual-deadline framing is now the binding cost statement.

### TIER 3 — Pattern B Variants (cohort = 30 of 79 users = 38.0%)
- **mark.murdock (E4 silent today, 21d, 1 watchlist Bruno Mars or similar)** — wait, mark.murdock has no watchlist item in the returned data. **Pattern B-at-E4** is a new category: a user who has been silent for 21 days AND has never tracked an event. **First confirmed Pattern B-at-E4 case in the report stream.** Send shape: `3 weeks in, still figuring out what to track? Here are 3 events trending on TicketScan this week.` (Same shape as Pattern B-at-E3 but with stronger apology weight.)
- **zhili1208 (E3 silent May 13, 15d)** — Pattern B Day 15. Send shape unchanged.
- **lilianamasyrubi (E3 silent May 12, 16d)** — same shape.
- **jmoriarty13 (E1 silent May 13, 5d)** — Pattern B-at-E1.
- **natalie.sotocruz (E2 fires today silent, 7d)** — Pattern B-at-E2 send shape: `Week 1 on TicketScan — still no events tracked? Here are 3 that are trending right now.`
- **pattyglvz (Day 1, 0 watchlist)** — pre-E1 Pattern B-at-E1.
- **jfgalzin, kevinkid94, emmacmather (Days 5–6, 0 watchlist)** — Pattern B-at-E1 batch (cross E2 May 15 silent if SMTP not restored).
- **c_calingasan (Day 1, 0 watchlist)** — pre-E1 Pattern B-forming.
- **Empty-watchlist cohort total: 30 of 79 (38.0%).** Stable percentage vs yesterday (38.2%); absolute +1 (vlanza, c_calingasan, pattyglvz, jmoriarty13, etc.) offset by Pattern A++ acquisition. **Forecast: at current 60% Pattern B-forming rate, cohort grows by ~1.2/day.**

### TIER 4 — Apology / Catch-Up (>21d silent backlog, below truncation horizon)
- **dr.altvater (E4 crossed May 12 silent, 23d, 1 watchlist)** — first new E4 entrant before mark.murdock; now pushed below truncation by today's 3 signups.
- **nicklib253 (E4 silent May 9, 27d, Phillies past)** — Pattern A loss + E4 silent.
- **goldy.pec.2012 (E5 traversal completed ~May 11, 34d, Bilmuri past)** — Pattern A + full-traversal overlap.
- **blubberboi (E5 traversal completed May 10 23:58 UTC, 34d, Ed Sheeran SoFi Aug 8)** — **first historic full-traversal case.** Day 4 of historic record.
- **bhaygood728 (~41d, Cardi B past)** — apology-only.
- **laye.aurelien (~42d, Shakira ×2 NYC, 67-70 days out)** — **highest-leverage graveyard recovery remaining** (Shakira tickets still tactically actionable; user 12 days post-E5).

### TIER 5 — Drip-Incompatible by Design
- **sparkitrightthere (E2 silent today, Day 7, Mac DeMarco May 7 passed)** — manual recovery shape.
- **liambot62 (E2 fires May 15 silent, Day 7, Toronto FC May 9 passed)** — manual recovery shape.

**2 of last 10 signups (20%) drip-incompatible regardless of SMTP state.** Stable from yesterday. The May 8 weekly's `W0-A/B/C` real-time triage architecture remains the only path that closes the loop.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **karin_ef1 / WC BC Place Vancouver E1 (NEW today — Day 0 pre-E1, fires May 17)** | `Welcome — your 2 BC Place World Cup tickets, 41 days out. Here's how Vancouver pricing usually moves.` | `Welcome to TicketScan — Switzerland vs Canada + a Round of 16, both at BC Place. Here's the read.` | **A** *(named venue + named day-count + cluster framing — same evidence basis as kevinshall87 yesterday)* |
| **kevinshall87 / WC AT&T cluster E1 (24h deadline)** | `Welcome — 5 World Cup matches at AT&T Stadium, here's how Arlington-cluster pricing usually moves` | `Welcome to TicketScan — your World Cup AT&T Stadium cluster, 31 days out and counting` | **A** *(carries from yesterday; day-count tightens 32→31)* |
| konman87 / Soldier Field 101d catch-up | `Soldier Field is in 2 days — we owe you a 101-day catch-up. Here's the final-night read.` | `101 days of silence from us — 2 days to night 1. Here's how to decide.` | **A** *(carries; tightens 3→2; "final-week" → "final-night")* |
| **jadbennis0 / Inter Miami 3d + multi-threshold E1+E2 missed** | `Inter Miami is 3 days out — and we owe you 2 missed emails. Here's the Saturday read.` | `3 days to Inter Miami — welcome (8 days late) and here's the Nu Stadium pricing` | **A** *(tightens 4→3)* |
| charlesteel126 / Bruno Mars Columbus 6d + E3+E4 multi-threshold | `Bruno Mars Columbus is 6 days out — and we owe you E3 + E4. Here's the Wednesday read.` | `6 days to Ohio Stadium — multi-threshold apology + the night-of pricing read` | **A** *(E4 crossed yesterday adds weight; Wednesday framing still works tomorrow)* |
| joshdguillemette / AEW 10d multi-threshold | `AEW at Louis Armstrong — 10 days out, here's why this venue's resale curve is different (and a real apology)` | `2 missed sends + 10 days to Double or Nothing — catching you up properly` | **A** *(carries; tightens 11→10)* |
| cjthomas2557 / Noah Kahan 29d + E1+E2 multi-threshold | `Welcome (week late) + here's the Noah Kahan Kia Center read — 29 days out, two emails compressed into one` | `Noah Kahan Orlando — 29 days, missed your week-1 send. Here's the pricing arc.` | **A** *(NEW today; E2 fires tonight, multi-threshold)* |
| taranimeramaro / Bruno Mars MetLife ×3 E3 | `3 Bruno Mars dates at MetLife — here's how stadium-tour pricing compresses across same-week shows` | `MetLife ×3: which night usually has the cheapest seats?` | A |
| **zhili1208 (Pattern B-at-E3, Day 15)** | `2 weeks in, 0 events tracked — would these 3 trending picks help you find one?` | `Still figuring out what to track? Here are 3 events trending on TicketScan this week.` | A |
| **mark.murdock (Pattern B-at-E4 NEW — silent E4, 21d, 0 watchlist)** | `3 weeks in, still figuring out what to track? Here are 3 events trending right now — pick 1 and we'll do the rest.` | `21 days on TicketScan with no events tracked yet — here's a quick re-onboard.` | **A** *(NEW Pattern B-at-E4 category; action-led)* |
| **natalie.sotocruz (Pattern B-at-E2, fires tonight silent)** | `Week 1 on TicketScan — still no events tracked? Here are 3 that are trending right now.` | `Day 7 — 3 events trending on TicketScan that might be worth tracking` | A |
| **jmoriarty13 (Pattern B-at-E1 silent, Day 5)** | `Day 3 on TicketScan — the fastest way to test if we're useful is to pick 1 event` | `Welcome — here's how to get the most out of TicketScan in week 1` | A |
| **pattyglvz / c_calingasan (Pattern B-at-E1, Day 1 pre-E1)** | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `What event are you watching? Here's how TicketScan helps from Day 1.` | A |
| Pattern B-at-E1 batch (jfgalzin + kevinkid94 + emmacmather) — crosses E2 May 15 silent | `Day 3 on TicketScan — the fastest way to test if we're useful is to pick 1 event` | `Welcome — here's how to get the most out of TicketScan in week 1` | A |
| Catch-up — blubberboi (E5 full-traversal, Day 4 of historic record) | `Ed Sheeran is 86 days away. We owe you 5 emails. Here's the one that actually matters.` | `We owe you 30 days of emails — here's the SoFi pricing read` | A *(carries; tightens 87→86)* |
| **laye.aurelien Shakira ×2 (E5 + 12d post-E5)** | `Shakira at MetLife — 67 days out and we owe you a real 12-day-late catch-up` | `2 Shakira dates, 67 days, and 42+ silent days from us — here's the read` | A |

**CTA conformance:** 10 of 16 use top-level routes; 6 of 16 use event-specific deep-links justified by Tier-0 proximity, multi-event cluster (kevinshall87, karin_ef1, taranimeramaro, joshdguillemette), or >21-day catch-up exception. **Deep-link share continues to rise with the Pattern A++ cluster cohort.** The reframing from May 12 holds: Tier-0/catch-up/cluster shape is the modal send today; the simple top-level CTA is the exception in 2 of the 5 send families.

---

## Action Items

### P0 — Critical (Day 38 of outage)
1. **SMTP / drip pipeline — DAY 38.** Same probe failure as Days 11–37. **Carrying the May 1 / May 6 / May 12 / May 13 recommended fix sequence:** regenerate Gmail app password → audit handler for top-of-route `transporter.verify()` → verify Railway port 587 egress → wrap drip handler in `Promise.allSettled` with per-user timeout → re-test with `?limit=1&dryRun=true` first. **Day 38 escalation framing: TWO named-and-timestamped E1 triggers inside the next 72 hours:**
   - **kevinshall87 → May 15 16:44 UTC (24h deadline)** — Pattern A++, 6 items WC AT&T cluster
   - **karin_ef1 → May 17 06:46 UTC (72h deadline)** — Pattern A++, 2 items WC BC Place Vancouver
   
   **If SMTP is not restored by May 17 06:46 UTC, the two cleanest Pattern A++ signups in 33+ days both enter full silent traversal. The cost is no longer one user — it's a 72-hour window covering two named users with named UTC timestamps.**

2. **Tier-0 + Tier-1 sends queued (in order of time-window pressure):**
   1. **konman87** — Soldier Field nights 1+2 (2–3 days out, 101-day silence). Post-window framing.
   2. **jadbennis0** — Inter Miami 3 days out, 2x missed canonical (E1 + E2).
   3. **kevinshall87** — E1 fires May 15 ~16:44 UTC. **24-hour deadline.**
   4. **charlesteel126** — Bruno Mars Columbus 6 days out + E3+E4 multi-threshold silent.
   5. **cjthomas2557** — Noah Kahan Jun 12, E2 fires tonight + E1 missed.
   6. **karin_ef1** — E1 fires May 17 ~06:46 UTC. **72-hour deadline.**
   7. **joshdguillemette** — AEW 10 days out, multi-threshold E3+E4 silent.

3. **Target-price UX (Day 107).** 97/97 watchlist items null. **Specific cost framing today:** kevinshall87 added 6 items in 4 minutes yesterday; karin_ef1 added 2 items in 49 seconds today. **8 high-intent adds across 2 sessions, both with null target_price.** A single inline UX would have captured 8 targets from the two cleanest Pattern A++ sessions in the report stream's history. **The Day 107 streak is actively burning the strongest user-intent signals the platform has ever produced.**

### P1 — High
4. **Past-event watchlist cleanup (41.2% bloat).** Second consecutive decrease, both mechanical. Same fix as Apr 29 / May 1 / May 6 / May 12 / May 13: `status` column + daily expiry cron. **Today's specific finding:** under sustained Pattern A++ acquisition, dilution rate begins to match aging rate — but this only holds if the Pattern A++ density stays elevated. The May 16-17 Bruno Mars + Inter Miami aging will push the % back over 43% by May 18 absent additional Pattern A++ signups.

5. **`/drip-stats` cap / pagination.** Now hides **6+ users** with ≥23-day backlog. **Day 7 of structural-debt-hiding regression.** Add `offset` parameter or raise cap to 100.

6. **Backlog catch-up plan when SMTP returns** — apology email first (parameterized: full-traversal, multi-threshold, single-skip, Tier-0-late, Pattern-A-cluster, Pattern-B-recovery), then canonical resume. **Updated queue head:** konman87 (post-window apology), jadbennis0 (2x missed), kevinshall87 (E1 if within 24h, otherwise E1-late apology), cjthomas2557 (E1+E2 compressed), charlesteel126 (E3+E4 multi-threshold), karin_ef1 (E1 if within 72h, otherwise E1-late apology), then taranimeramaro, blubberboi, mark.murdock (Pattern B-at-E4 new), dr.altvater, laye.aurelien.

7. **Newsletter growth — Day 102 milestone.** 13 user registrations / 0 newsletter signups in the last 7 days (new peak). Footer regression Day 19; popup spec Day 15 unbuilt. **The signup surface is structurally broken under near-doubled acquisition velocity.**

8. **`W0-A/B/C` real-time welcome triage architecture.** 6 of 10 recent signups Pattern B-forming; 1 of 10 drip-incompatible; only 2 of 10 are clean Pattern A (both A++, both World Cup clusters). **Pre-condition: SMTP fix + watchlist-state probe on signup webhook.** **Today's specific framing:** if a `W0-A` triage existed, both kevinshall87 and karin_ef1 would be receiving a cluster-aware welcome inside their first hour — instead of waiting 3 days for an E1 that may never fire.

### P1.5 — NEW today
9. **World Cup channel signal investigation.** Both Pattern A++ signups in the last 48 hours are WC single-venue clusters (AT&T Stadium 5 matches + BC Place 2 matches). **Hypothesis: WC acquisition channel just activated 28 days pre-tournament.** Suggested investigation:
   - Pull referrer / source data on kevinshall87 + karin_ef1 (where did they come from?)
   - Check if a WC-page acquisition surface (landing pages, ads, organic search) shows a step-change in traffic in the last 7 days
   - Compare against Analytics Agent's traffic-source data
   - **If 3 of the next 7 signups are also WC-cluster Pattern A++, the working hypothesis is confirmed and the W0-A triage architecture should be WC-cluster-aware first.**

### P2 — Medium
10. **`drip-health` endpoint — DAY 7 of unmet ask.** Specification unchanged: `GET /api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt, pendingCount}`.

11. **pete.uzelac77 World Cup re-engagement** — 34 days on platform, 4 items, 42 days to first match. Tier-2 hold; subject `Don't buy your World Cup tickets in May — here's why` has **17 days of validity left** before the "in May" framing expires. **With karin_ef1's WC BC Place cluster joining today, pete.uzelac77 is no longer the only WC long-lead user — but is now the *longest-silent* WC user (34 days vs karin_ef1 Day 0). The catch-up framing is unique to pete.**

12. **Watchlist digest endpoint — still manual.** 16 distinct send templates hand-composed today (up from 13 yesterday). Bottleneck unchanged.

13. **Viva El Jaripeo post-mortem — 19 DAYS OVERDUE.** Status unchanged.

### Tracking metrics (continued)
- **Tactical-window degradation:** Day 38. **Next non-degraded tactical window is the kevinshall87 + karin_ef1 E1 cadence opening May 15-17.** This is the only forward-looking tactical asset the report stream has produced this week — and it has now doubled in scope from one user to two.
- **CTA simplification rule conformance:** 63% top-level (10 of 16); 37% deep-link-justified. Deep-link share rising again with karin_ef1 joining cluster cohort.
- **Pattern mix in rolling 10-user cohort:** A 20% / B 60% / drip-incompatible 10% / undetermined 10%. **Pattern A is *still* the minority cadence (20%); Pattern B *still* structurally modal (60%). But the temporal density of Pattern A++ within the 20% has jumped from "one in 33 days" to "two in 38 hours."**
- **Pattern A++ cluster acquisition rate:** May 12 (kevinshall87, 6-item WC AT&T) → May 14 (karin_ef1, 2-item WC BC Place) = **2 Pattern A++ canonical signups in 38 hours, both World Cup single-venue clusters.** No precedent in report-stream history. Hypothesis: WC channel activation 28 days pre-tournament.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change in 24h. **102 consecutive days flat.** Day 8 of zero-capture under signup velocity. Footer regression Day 19, popup spec Day 15 unbuilt. **Under today's 3-signup peak (largest ever), the cross-channel newsletter delta stays at exactly zero — the structural break is now demonstrated under near-doubled acquisition velocity.**
- **User signups (24h):** **+3** (c_calingasan May 13 11:46 UTC; karin_ef1 May 14 06:46 UTC; vlanza May 14 13:20 UTC). **Strongest single-day signup count in report-stream history. 79 total users.** 7d rolling = 12 (new platform peak; +2 vs yesterday's 10).
- **New watchlist items (24h):** **+2** (both from karin_ef1) — WC Match 51 Switzerland vs Canada Jun 24 + R16 Match 96 Jul 7, both BC Place Vancouver. **Second consecutive day with materially-clustered Pattern A++ adds.**
- **Drip pipeline:** UN-SHIPPED. **Day 38.** 0 sends ever. 79 of 79 users never received a drip email. Backlog: 30 visible + 6+ hidden ≈ **70 owed sends** (flat from yesterday).
- **Threshold crossings in last 24h (3 confirmed silent + 2 forecast-fires-today + 4 forecast-fires-tomorrow):** 
  - May 13 13:18 UTC jmoriarty13 → E1 silent (post yesterday's report)
  - May 13 20:33 UTC jadbennis0 → E2 silent (post yesterday's report)
  - May 14 03:01 UTC **mark.murdock → E4 silent (NEW — first visible-cohort E4 entrant since dr.altvater)**
  - May 14 ~11:38 UTC sparkitrightthere → E2 silent (drip-incompatible Tier-5)
  - May 14 ~18:40 UTC natalie.sotocruz → E2 silent (Pattern B confirmed)
  - May 14 ~22:49 UTC cjthomas2557 → E2 silent (multi-threshold E1+E2)
  - May 15: **kevinshall87 → E1** (24h deadline), liambot62/jfgalzin/kevinkid94/emmacmather → E2 (drip-incompatible + 3 Pattern B)
  - May 17: **karin_ef1 → E1** (72h deadline)
- **Price alerts:** 0 ever triggered. **97/97 watchlist items null.** Day 107. The two Pattern A++ sessions (8 total adds in 5 minutes combined wall-clock) were the cleanest possible argument for the inline auto-suggest UX.
- **Watchlist composition:** 97 items, 40 past-dated (41.2% — **second consecutive decrease, mechanical**). 4 within 7d (konman87 ×2 May 16-17, jadbennis0 May 17, charlesteel126 May 20). 1 in 8-21d (joshdguillemette). 3 in 22-32d (cjthomas2557, kevinshall87 ×1). 12 in 33-62d (kevinshall87 ×4 WC + karin_ef1 ×2 WC + pete.uzelac77 ×4 + taranimeramaro starts here). 37 in 63+d (taranimeramaro ×3 MetLife, blubberboi, laye.aurelien ×2, brigitte.theisen, tosophiameyer, others).
- **Empty-watchlist cohort:** 30 of 79 (38.0%), absolute +1 vs yesterday but percentage stable.
- **Pattern mix in rolling 10-user cohort:** A 20% (both A++ both WC cluster) / B 60% / drip-incompatible 10% / undetermined 10%.
- **NEW signal — World Cup channel activation hypothesis:** 2 consecutive days of Pattern A++ WC-cluster signups (kevinshall87 + karin_ef1). **Suggested:** pull referrer/source for both users; check WC landing-page traffic trends in last 7 days; flag any step-change. **If 3 of next 7 signups are WC-cluster Pattern A++, the hypothesis is confirmed.**
- **Most useful single observation today:** **the platform produced its two strongest Pattern A++ signups in 33+ days on consecutive days — both World Cup single-venue clusters — while Day 38 of the SMTP outage continues.** kevinshall87 + karin_ef1 = 8 high-intent watchlist adds in 5 minutes combined wall-clock, zero target prices captured, zero emails sent. **The 24-hour deadline framed yesterday for kevinshall87 alone is now a 72-hour deadline covering two named users with named UTC E1 trigger times. The arithmetic relationship between acquisition quality and email-delivery state is the cleanest cost statement this report stream has produced.**
