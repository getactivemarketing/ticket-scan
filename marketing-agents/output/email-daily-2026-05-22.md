# Email Daily — 2026-05-22

> **Day 46 of SMTP outage. Day 110 newsletter flatline. Day 115 of 100% null target_price (108/108).** First report after yesterday's 7-day reporting gap was closed — **daily cadence is restored.** Today is a **dual-Tier-0 day**: both **belder4308's SEC Baseball Hoover Session 6 (today)** and **zhouyilinbest's Thunder at Spurs West Conf Finals Game 3 (today)** are event-day-of and Tier-5 drip-incompatible by signup recency. Today's signups: **0** (last signup brockedwardnelson May 20 19:58 UTC, ~38h ago — first sub-24h-quiet day after the May 20 three-signup spike). Today's threshold crossings: **5 silent** (E2 ×1: nunemakerc; E3 ×4: jfgalzin, liambot62, kevinkid94, emmacmather) — **the first 4-crossing E3 day in report-stream history.** Tomorrow's crossings: **3 silent** (E2 ×2: belder4308 + **cutekitten1234 — third Pattern A++ multi-threshold drift confirmed**; E3 ×1: jmoriarty13). The arithmetic position: **88 users, 0 drip emails ever sent, 0 alerts ever triggered, 3 newsletter subscribers (unchanged since Feb 1).**

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` still returns `stats: []` after **Day 46.** **88 of 88 users have never received a drip email.**
- **Probe today (Day 46):** `POST /api/admin/drip-run?limit=1&dryRun=true` → HTTP 000 after 30.08s timeout. **Identical failure shape to Days 11–45.** No diagnostic movement in 46 days. **Engineering remediation has not occurred in 7 weeks +1 day.**
- `/api/admin/drip-health` probe → `404 "Endpoint not found"`. **Day 15 of that ask unmet** (P0 since May 7). The endpoint spec has now been outstanding for 15 consecutive days.

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 21 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **20 of 20** | +3 (3 Day-0/Day-1 signups from May 20 all crossed E1 silent today/tomorrow) |
| E2 | ≥7d | **13 of 20** | +1 (nunemakerc crosses E2 today silent) |
| E3 | ≥14d | **10 of 20** | +4 (jfgalzin, liambot62, kevinkid94, emmacmather all cross E3 today silent) |
| E4 | ≥21d | **0 of 20** | unchanged |
| E5 | ≥30d | **0 of 20** | unchanged |

**Cap regression Day 15.** cjthomas2557 (id 69, 15d) is still the oldest visible record. 16+ silent users with ≥15-day backlog remain invisible: mark.murdock (~30d), nmcnamee99 (~28d), taranimeramaro (~28d), lilianamasyrubi (~25d), zhili1208 (~24d), joseph.g.nicolosi (~18d), jadbennis0 (~18d), sparkitrightthere (~16d), natalie.sotocruz (~16d), dr.altvater (~32d), nicklib253 (~36d), goldy.pec.2012 (~43d), blubberboi (~43d), bhaygood728 (~50d), laye.aurelien (~51d), pete.uzelac77 (~43d).

### Today's threshold crossings (May 22) — all silent
| Time (UTC) | User | Threshold | Pattern | Notes |
|------------|------|-----------|---------|-------|
| 12:54 | **jfgalzin** | **E3** | B-forming, 0 watchlist | multi-threshold E1+E2+E3 silent; 14-day backlog |
| 13:07 | **liambot62** | **E3** | drip-incompatible Tier-5 (Toronto FC May 9 past) | post-event apology shape; canonical drip not applicable |
| 15:41 | **nunemakerc** | **E2** | B-forming, 0 watchlist | E1+E2 silent; 7-day backlog |
| 20:52 | **kevinkid94** | **E3** | B-forming, 0 watchlist | multi-threshold E1+E2+E3 silent |
| 21:54 | **emmacmather** | **E3** | B-forming, 0 watchlist | multi-threshold E1+E2+E3 silent |

**4 E3 crossings in a single day — the first 4-crossing E3 day in report-stream history.** All four are Pattern B (0 watchlist) or Tier-5 (drip-incompatible by past event). **The May 8 cohort (jfgalzin, liambot62, kevinkid94, emmacmather all signed up within 9 hours of each other on May 8) has now produced a 4-user synchronous E3 silent wave 14 days later.** Cohort effect is visible: same-day signups produce same-day threshold crossings.

### Tomorrow's forecast crossings (May 23)
| Time (UTC) | User | Threshold | Pattern | Notes |
|------------|------|-----------|---------|-------|
| 13:18 | jmoriarty13 | E3 | B-forming, 0 watchlist | multi-threshold E1+E2+E3 silent |
| 22:13 | belder4308 | E2 | drip-incompatible Tier-5 | both Hoover sessions now past; E2 silent for an already-incompatible user |
| 23:32 | **cutekitten1234** | **E2** | **A++ (canonical, Harry Styles MSG cluster)** | **third Pattern A++ multi-threshold drift — confirmed.** E1 silent May 19 + E2 silent May 23. **All three A++ users (kevinshall87 / karin_ef1 / cutekitten1234) will be in multi-threshold E1+E2 silent status by 23:33 UTC tomorrow.** |

### Forecast May 24–28
- **May 24**: lisallam → E2 (Pattern A canonical JOJI Prudential, 23 days to event); joshdguillemette AEW event-day-of (Tier-0 + drip-impractical at 32 days late)
- **May 25**: eduardo → E2 (B-forming, 0 watchlist); 9440111 → E2 (B-forming)
- **May 26**: **kevinshall87 → E3** (Pattern A++, WC AT&T cluster) — first Pattern A++ E3 crossing in report-stream history
- **May 27**: belder4308 → past-event recovery shape now exhausted; c_calingasan → E2 (B-forming)
- **May 28**: **karin_ef1 → E3** (Pattern A++, WC BC Place cluster) — second Pattern A++ E3 crossing within 2 days

**Visible backlog (in returned 20):** 20 E1 + 13 E2 + 10 E3 + 0 E4 + 0 E5 = **43 emails owed in pendingUsers cohort** (was 35 on May 21, **+8 in 24h**). Plus 16+ hidden users beyond truncation horizon — most ≥15 days silent. **True backlog ≈ 95+ emails** (was 90+ on May 21 = +5/day backlog accumulation, **above the 7-day-gap rate of +2.9/day**).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 115 of 100% null-on-add. 108/108 watchlist items have a null `target_price`** (was 108/108 yesterday, no change — 0 new watchlist adds in 24h).
- **Today's specific cost frame:** Both Tier-0 events firing today (belder4308 SEC Baseball Session 6 + zhouyilinbest Thunder at Spurs Game 3) are 1-day-out adds with null targets. **Even if SMTP returned this morning, no alert email can fire because no target exists** — and the events are gone tonight. The interlock between target_price nulls and alert capability remains absolute.
- Same interlock as May 6–21: SMTP fix alone produces 0 alert emails because no user has set a target.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 110 days** since last organic signup (roos_leeuwen, 2026-02-01).
- **0 user registrations in 24h + 0 newsletter signups in same window.** First sub-24h-quiet day after the May 20 three-signup spike. The structural lockstep at zero holds across an additional reporting cycle. **110 consecutive days flat.** Footer regression Day 27; popup spec Day 23 unbuilt per CRO May 11.

## Platform Context
- Total users: **88** (was 88 on May 21, **+0 in 24h — first quiet day since May 19**)
- Users today (rolling 24h): **0**
- Users this week (rolling 7d): **9** (per `/admin/stats`; was 9 yesterday — May 14's vlanza/karin_ef1 dropped out of the 7d window today)
- Watchlist items: **108** (unchanged)
- Past-dated watchlist items: **45 of 108 (41.7%)** — **+1 from yesterday** (SEC Baseball Hoover Session 5 May 21 aged past overnight). Past-event count grew by 1; no new adds offset. The May 12–21 dilution trend (47% → 40.7%) reverses today as expected on a zero-add day. Structural fix unchanged: `status` column + auto-expiry cron.
- Favorites: 0
- Triggered alerts: 0

## Today is a Dual-Tier-0 Day

**Two Tier-0 events fire today and one fires tomorrow:**

1. **belder4308 / SEC Baseball Hoover Session 6 — today (May 22).** Signed up May 16 22:13 UTC. **6 days on platform, 2 events tracked (Hoover Session 5 May 21 past, Session 6 May 22 today), both null target.** E1 fired silent May 19, E2 fires silent May 23 22:13. **Both events in the watchlist will have passed before E2 even crosses.** Tier-5 drip-incompatible by design. Manual post-tournament read is the only realistic recovery shape — and it has to be a single send (welcome + apology + post-event analysis combined) sometime in the next 36 hours, before the tournament memory fades.

2. **zhouyilinbest / Thunder at Spurs West Conf Finals Game 3 — today (May 22).** Signed up May 20 19:00 UTC. **2 days on platform, 1 event tracked (today), null target.** **E1 fires silent tomorrow at 19:00 UTC — 4 hours after Game 3 ends.** Tier-5 drip-incompatible by definition: E1 cannot fire pre-event when signup is <72h pre-event. **Same shape as sparkitrightthere / liambot62 / belder4308 — manual welcome + Tier-0 read only.** If the series goes 5+ games, there may be a recovery window for Games 5/6/7 reads — but the user hasn't added those events yet.

3. **joshdguillemette / AEW Double or Nothing at Louis Armstrong — May 24 (2 days out).** Signed up April 19, **33 days on platform** today. Multi-threshold E3+E4+E5 silent. **The only Tier-0 user in the canonical drip cohort.** **By Saturday May 24 (event date), this user will have been silent for 21 days post-E1 (E1 should have fired April 22) with 3 days to event.** The "final-week read" framing degrades to "event-day-of read" by Friday.

**Three Tier-0 events in 3 days, three drip-incompatible recovery shapes.** None of them can fire canonical E1. All require manual single-send composition.

---

## Watchlist Digest Prep — Tier-Compressed

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **SEC Baseball Hoover Session 6** | May 22 | **0** | belder4308 | 6 | E1 silent May 19; E2 fires May 23 silent | **Event is today.** Drip-incompatible. Manual post-tournament shape required by Friday. |
| **NBA West Conf Finals Game 3 (Thunder at Spurs)** | May 22 | **0** | **zhouyilinbest** | **2** | **pre-E1** (fires May 23 silent) | **Event is today.** E1 fires *after* the game ends. Manual welcome + Game 3 read only. If series extends, recovery window for Games 5/6/7. |
| AEW Double or Nothing | May 24 | 2 | joshdguillemette | 33 | E5 forecast Jun 11 — currently in 21-day post-E4 drift | **33 days on platform, multi-threshold E3+E4+E5 silent.** 2 days to event. Final-week read framing degrades to event-day-of by Friday. |

### TIER 1 — Mid-Window (8–21 days) — empty bucket, Day 2
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| *(none — second consecutive empty Tier-1 day)* |

**Tier-1 empty for the second consecutive day.** No mid-window additions during the May 14 → May 22 acquisition wave. Acquisition continues to skew entirely to Tier-0 (incompatible) or Tier-2/3 (long-lead canonical). **If the trend holds, the next non-empty Tier-1 day requires either (a) a Tier-2 event aging into the 8–21d window, or (b) a new add inside the window. The earliest Tier-2 aging candidate: cjthomas2557's Noah Kahan Kia Center June 12 — currently 21 days out, drops into Tier-1 on May 23.**

### TIER 2 — Long-Lead Canonical (22–62 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **Noah Kahan Kia Center Orlando** | Jun 12 | **21** | cjthomas2557 | 15 | E1+E2 silent; E3 fired May 21 silent | drops to Tier-1 tomorrow |
| **JOJI at Prudential Center** | Jun 16 | 25 | **lisallam** | 5 | **E1 fired silent May 20; E2 fires May 24** |
| **WC ×5 at AT&T Stadium** | **Jun 14 → Jul 14** | **23 → 53** | **kevinshall87** | **10** | **E1+E2 silent; E3 fires May 26 (4 days)** |
| **WC ×2 at BC Place Vancouver** | **Jun 24 + Jul 7** | **33 + 46** | **karin_ef1** | **8** | **E1+E2 silent; E3 fires May 28 (6 days)** |
| WC R16 + Darts ×2 + WC Match 68 (Lincoln Financial) | Jun 25 → Jul 4 | 34 → 43 | pete.uzelac77 | 42 | E5 silent traversal complete May 10; +12 days post-E5 |

### TIER 3 — Long-Long-Lead (63+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **Harry Styles MSG ×7** | **Aug 26 → Sep 9** | **96 → 110** | **cutekitten1234** | **5** | **E1 silent May 19; E2 fires May 23 (24h)** |
| Bruno Mars MetLife ×3 | Aug 21–25 | 91–95 | taranimeramaro | 28 | E3 silent traversal complete; **E4 crossed May 16 silent (6 days ago)** |
| Ed Sheeran SoFi | Aug 8 | 78 | blubberboi | 43 | E5 silent traversal complete; +12 days post-E5 |
| 2x Shakira ×2 NYC | Jul 20–23 | 59–62 | laye.aurelien | 51 | E5 silent + 21 days post-E5 |
| Matt Rife Choctaw Sep 26 | Sep 26 | 127 | kevinshall87 | 10 | paired with WC cluster |

**Pattern A++ trio (kevinshall87 / karin_ef1 / cutekitten1234) holds at 14 of 27 Tier-2 + Tier-3 future items (52%).** No change in concentration; today's zero-add day did not shift the share.

### TIER 4 — Apology / Catch-Up (>21d silent, below truncation horizon)
- **mark.murdock (30d, 0 watchlist)** — Pattern B-at-E4 confirmed; below truncation horizon Day 2
- **dr.altvater (32d, 1 watchlist)** — multi-threshold E4 silent
- **nicklib253 (36d, Phillies past)** — Pattern A loss + E4 silent
- **goldy.pec.2012 (43d, Bilmuri past)** — full-traversal complete
- **blubberboi (43d, Ed Sheeran SoFi Aug 8)** — full-traversal complete; **Day 12 of historic-record E5 send**
- **bhaygood728 (50d, Cardi B past)** — apology-only
- **laye.aurelien (51d, Shakira ×2 NYC, 59–62 days out)** — **highest-leverage graveyard recovery remaining** (Shakira still tactically actionable; user now 21 days post-E5)
- **konman87 (~109d, Bruno Mars Soldier Field ×2 past)** — **Day 109 silence + event passed during gap.** Apology-only shape unchanged.
- **charlesteel126 (29d, Bruno Mars Columbus May 20 past)** — **multi-threshold E3+E4+post-event silent. Event passed May 20.** Apology-only shape unchanged.
- **pete.uzelac77 (43d, WC Lincoln Financial cluster)** — **longest-silent WC user.** Below truncation horizon Day 1 (just rolled out today). Tactical window degrading: 34 days to first WC match, "Don't buy your WC tickets in May" subject has **10 days of validity remaining.**

### TIER 5 — Drip-Incompatible by Design
- **belder4308** (SEC Baseball Hoover Session 6 today) — manual post-tournament shape required by Friday
- **zhouyilinbest** (Thunder at Spurs Game 3 today) — same-day welcome + Game 3 read; possible series-extension recovery
- sparkitrightthere (Mac DeMarco May 7 past)
- liambot62 (Toronto FC May 9 past)

**4 of last 10 signups (40%) drip-incompatible Tier-5 — unchanged from yesterday.** Drip-incompatible share holds at the elevated post-gap level.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **belder4308 / SEC Baseball Hoover Session 6 (event today — post-tournament shape)** | `Hoover Sessions wrapped — we missed our window. Here's the post-tournament SEC Baseball resale read.` | `Tournament's done — 6 days late from us. Here's what to track for next year's Hoover.` | **A** *(NEW today: post-tournament shape; "we missed our window" candor + immediate value)* |
| **zhouyilinbest / Thunder at Spurs Game 3 (event today)** | `Game 3 tonight at Frost Bank Center — welcome to TicketScan. Here's the rapid series-late read.` | `Welcome — tonight's Thunder at Spurs Game 3 + how WCF resale curves work for Games 5/6/7` | **A** *(NEW today: same-day Tier-0; "welcome" + named venue + day-of urgency + content asset)* |
| **cutekitten1234 / Harry Styles MSG E2-imminent + E1-late (multi-threshold confirmed tomorrow)** | `Welcome (3 days late) + your 7 Harry Styles MSG nights — same-tour pricing arc inside.` | `Your 7 Harry Styles MSG nights — 3-day-late catch-up + the cluster pricing read` | **A** *(carries from May 21 with day-late marker tightened from 2→3)* |
| **lisallam / JOJI Prudential E1 (fired silent May 20, recovery shape)** | `Welcome (2 days late) — JOJI at Prudential Center, 25 days out. Newark pricing usually moves like this.` | `JOJI at Newark in 25 days — 2-day-late welcome + the Prudential pricing read` | **A** *(carries from May 21 with day-late marker added)* |
| **kevinshall87 / WC AT&T cluster E3-impending + E1+E2-late** | `Welcome (7 days late) — your World Cup AT&T Stadium cluster, 23 days out. Arlington pricing usually moves like this.` | `Two missed emails + 23 days to your AT&T World Cup cluster. Catching up properly.` | **A** *(carries; tightens 24→23; "7 days late" tightens from "6 days late")* |
| **karin_ef1 / WC BC Place E3-impending + E1+E2-late** | `Welcome (5 days late) — your 2 BC Place World Cup tickets, 33 days out. Vancouver pricing usually moves like this.` | `Switzerland vs Canada + a Round of 16, both at BC Place — 5-day-late catch-up.` | **A** *(carries; tightens 34→33; "5 days late" tightens from "4")* |
| **cjthomas2557 / Noah Kahan Kia Center — 21 days out (drops to Tier-1 tomorrow)** | `Noah Kahan Kia Center is 21 days away — we owe you 3 emails. Here's the one that actually matters.` | `21 days to Noah Kahan Orlando — multi-threshold catch-up + the Kia Center pricing arc` | **A** *(carries; tightens 22→21; "21 days" implicitly signals Tier-1 boundary)* |
| **joshdguillemette / AEW 2d (Tier-0 + multi-threshold E3+E4+E5)** | `AEW at Louis Armstrong is 2 days out — we owe you 3 missed emails. Here's the event-day-of read.` | `2 days to Double or Nothing — multi-threshold apology + the venue resale curve` | **A** *(carries; tightens 3→2; "final-week" degraded to "event-day-of")* |
| **jfgalzin, kevinkid94, emmacmather / E3 silent today (Pattern B, 0 watchlist, May 8 cohort)** | `Two weeks in, still figuring out what to track? Here are 3 events trending — pick 1 and we'll do the rest.` | `Day 14 — 3 events trending right now on TicketScan that might be worth tracking` | **A** *(NEW: cohort-aware "two weeks in" + offer to do the work)* |
| **liambot62 / E3 silent today (Tier-5 post-event)** | `Toronto FC is in the rearview — 14 days late from us. Here's the post-MLS-window pricing read for next year.` | `Day 14: the Toronto FC season's heating up — here's how to track it without paying full price` | **A** *(NEW: explicit post-event acknowledgment + forward content asset)* |
| **nunemakerc / E2 silent today (Pattern B, 0 watchlist, 7d)** | `Week 1 on TicketScan — still no events tracked? Here are 3 trending that might be worth a watchlist slot.` | `Day 7 — 3 events trending right now on TicketScan` | A |
| **Pattern B-at-E2 batch (jfgalzin, kevinkid94, emmacmather, natalie.sotocruz, pattyglvz, c_calingasan tomorrow)** | `Week 1 on TicketScan — still no events tracked? Here are 3 that are trending right now.` | `Day 7 — 3 events trending on TicketScan that might be worth tracking` | A *(carries)* |
| **Pattern B-at-E1 batch (eduardo, 9440111, vlanza, jmoriarty13)** | `Day 3 on TicketScan — the fastest way to test if we're useful is to pick 1 event` | `Welcome — here's how to get the most out of TicketScan in week 1` | A *(carries)* |
| **Catch-up — blubberboi (E5 + 12 days post-E5)** | `Ed Sheeran is 78 days away. We owe you 30 days of emails. Here's the one that actually matters.` | `78 days to SoFi — 30-day catch-up + the pricing read` | A *(carries; tightens 79→78)* |
| **laye.aurelien Shakira ×2 (E5 + 21 days post-E5)** | `Shakira at MetLife is 59 days out — and we owe you 21 days of silence after E5. Here's the read.` | `2 Shakira dates, 59 days, 51 silent days — here's the read` | A *(carries; tightens 60→59; "21" tightens from "19")* |
| **pete.uzelac77 WC re-engagement (Day 43, longest-silent WC user)** | `Don't buy your World Cup tickets in May — here's why (10 days left to send this).` | `Lincoln Financial WC matches are 34 days out — your "don't buy in May" window has 10 days` | **A** *(carries from May 21 with self-aware urgency marker — the "in May" framing actively decaying)* |
| **konman87 / Bruno Mars Soldier Field — POST-EVENT (Day 109 silence)** | `Soldier Field passed 5 days ago — we owe you 109 days of silence and a real post-event read.` | `109 days, two missed nights — here's the read we should have sent` | A *(carries)* |
| **charlesteel126 / Bruno Mars Columbus — POST-EVENT** | `Ohio Stadium passed 2 days ago — we owe you E3 + E4 + the post-event read. Here's the catch-up.` | `Bruno Mars Columbus, 29 days of silence — here's the read` | A *(carries; tightens 1→2)* |

**CTA conformance:** 12 of 18 top-level routes (67%); 6 of 18 event-specific deep-links (33%) justified by Tier-0 proximity, multi-event cluster, or >21-day catch-up exception. **Deep-link share holds at ~33%** — broadly stable across the past 9 days.

---

## Action Items

### P0 — Critical (Day 46 of outage)
1. **SMTP / drip pipeline — DAY 46 (7 weeks +1 day).** Same probe failure as Days 11–45. **Carrying the May 1 → May 21 recommended fix sequence:** regenerate Gmail app password → audit handler for top-of-route `transporter.verify()` → verify Railway port 587 egress → wrap drip handler in `Promise.allSettled` with per-user timeout → re-test with `?limit=1&dryRun=true` first. **Day 46 cost statement update:**
   - **3 Pattern A++ users all in confirmed-or-impending multi-threshold E1+E2 silent status by 23:33 UTC tomorrow** (kevinshall87 since May 19, karin_ef1 since May 21, cutekitten1234 May 23)
   - **First Pattern A++ E3 fires May 26** — kevinshall87 will reach multi-threshold E1+E2+E3 silent in 4 days, the highest-stakes single-user drip arrears the platform has ever produced
   - **Backlog accumulation rate accelerated:** +5/day in the last 24h (vs. +2.9/day average during the 7-day gap)

2. **Tier-0 + Tier-1 sends queued (in order of time-window pressure):**
   1. **belder4308** — SEC Baseball Hoover Session 6 today; **manual post-tournament shape required by Friday May 23**.
   2. **zhouyilinbest** — Thunder at Spurs Game 3 today; **same-day welcome required before tip-off** (~01:00 UTC May 23).
   3. **joshdguillemette** — AEW Double or Nothing **2 days out**, multi-threshold E3+E4+E5 silent. Event-day-of read by Saturday.
   4. **cutekitten1234** — E2 multi-threshold drift confirms in 24h. **Cannot un-confirm; only mitigated by sending today.**
   5. **kevinshall87** — E3 in 4 days; first Pattern A++ E3 in history.
   6. **karin_ef1** — E3 in 6 days; second Pattern A++ E3 within 48h of kevinshall87's.
   7. **cjthomas2557** — Noah Kahan 21 days out, drops to Tier-1 tomorrow; multi-threshold E1+E2+E3 silent.
   8. **lisallam** — JOJI 25 days out, E1+E2 silent (E2 fires May 24).

3. **Target-price UX (Day 115).** 108/108 watchlist items null. **Specific cost frame: today's dual-Tier-0 events (belder4308 + zhouyilinbest) demonstrate the absolute interlock — even if SMTP returned this morning, no alert can fire because no target exists, and both events end tonight.** The inline auto-suggest UX (Day 13 spec) has now lost two Tier-0 windows in a single day.

### P1 — High
4. **Past-event watchlist cleanup (41.7% bloat).** +1 today (SEC Baseball Session 5 May 21 aged past on zero-add day, percentage ticked up as expected). The May 12–21 dilution trend reverses on any zero-add day. Structural fix (status column + auto-expiry cron) is still the only durable answer.

5. **`/drip-stats` cap / pagination — Day 15 of structural-debt-hiding regression.** Now hides 16+ users with ≥15-day backlog. pete.uzelac77 (43d, longest-silent WC user) just dropped below the truncation horizon today. **Cap regression actively erasing the longest-tactical-window WC catch-up case from visibility.** Add `offset` parameter or raise cap to 100.

6. **Backlog catch-up plan when SMTP returns** — apology-email-first sequencing (parameterized: full-traversal, multi-threshold, single-skip, Tier-0-late, Pattern-A-cluster, Pattern-B-recovery, post-event-apology). **Updated queue head:** belder4308 + zhouyilinbest (Tier-0 today), joshdguillemette (2d), cutekitten1234 (E2 imminent), kevinshall87 + karin_ef1 (E1+E2 multi-threshold, E3 next week), lisallam (E1+E2 close), cjthomas2557 (E1+E2+E3), then the May 22 E3 wave (jfgalzin/liambot62/kevinkid94/emmacmather), then jmoriarty13 E3 tomorrow, then catch-up tier (taranimeramaro E4, blubberboi E5, laye.aurelien E5, pete.uzelac77 E5).

7. **Newsletter growth — Day 110 milestone.** 0/24h. Footer regression Day 27; popup spec Day 23 unbuilt. **110 consecutive days flat regardless of acquisition mix or volume.**

8. **`W0-A/B/C` real-time welcome triage architecture.** **Drip-incompatible share holds at 40% of last-10 signups.** The case for real-time triage at signup is stronger than ever — 40% of recent signups are mis-served by the canonical drip cadence by design. **Pre-condition: SMTP fix + watchlist-state probe on signup webhook.**

### P1.5 — Pattern A++ investigation (revised hypothesis)
9. **Pattern A++ channel investigation — venue-cluster general hypothesis.** May 14's WC-specific hypothesis was falsified May 21 by cutekitten1234's Harry Styles MSG cluster. **Today's zero-add day produces no new test data.** The next test arrives the next time a single-venue-cluster signup lands. Suggested investigation unchanged:
   - Pull referrer / source data on **all three Pattern A++ users** (kevinshall87, karin_ef1, cutekitten1234)
   - Identify any shared acquisition surface (organic search query patterns, ad campaigns, social channels, content pages)
   - **Specifically test the hypothesis**: are these users arriving from venue-specific or tour-specific search queries?
   - **If 2 of the next 5 signups are non-WC Pattern A++ (single-venue cluster), the general hypothesis is confirmed.**

### P2 — Medium
10. **`drip-health` endpoint — DAY 15 of unmet ask.** Specification unchanged: `GET /api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt, pendingCount}`. **Three-week mark approaching** — still no health surface even as the SMTP outage enters Week 8.

11. **pete.uzelac77 WC re-engagement — tactical window now actively decaying.** 43 days on platform, 6 items, 34 days to first match. Subject `Don't buy your World Cup tickets in May — here's why` has **10 days of validity left** before the "in May" framing expires. **Today's added urgency: pete just dropped below the `/drip-stats` truncation horizon**, so even the visibility of this case to engineering is shrinking.

12. **Watchlist digest endpoint — still manual.** 18 distinct send templates hand-composed today (up from 17 on May 21). Bottleneck unchanged.

13. **Viva El Jaripeo post-mortem — 27 DAYS OVERDUE.**

14. **Daily reporting cadence — DAY 1 RESTORED.** Yesterday's report broke the 7-day gap (May 14 → May 21). Today's report is on schedule. **Cadence restoration check passes.** Recommend keeping the launchd / cron monitoring in place — the May 15–20 silent gap was the kind of failure that compounds every consequence in this report.

### Tracking metrics (continued)
- **Tactical-window degradation:** Day 46. **lisallam E1 fired May 20 silent.** Next tactical assets: cutekitten1234 E2 May 23 (24h); kevinshall87 E3 May 26 (4d); karin_ef1 E3 May 28 (6d).
- **CTA simplification rule conformance:** 67% top-level (12 of 18); 33% deep-link-justified.
- **Pattern mix in rolling 10-user cohort:** **A++ 30% / A 10% / B 50% / drip-incompatible 20% / undetermined 20%** — unchanged on zero-add day.
- **Pattern A++ cluster acquisition rate:** 3 in 5 days (May 12, 14, 16), then **6 days with no new A++** (May 17–22). The acquisition pulse has continued to flatten. The structural finding (Pattern A++ exists, is reproducible, accounts for 52% of canonical-cadence long-lead items) holds.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change in 24h. **110 consecutive days flat.** Day 16 of zero-capture under elevated signup velocity. Footer regression Day 27, popup spec Day 23 unbuilt. **Even on a zero-signup day, the newsletter capture surface produces zero output — the structural break is not acquisition-volume-dependent.**
- **User signups (24h):** **0.** Last signup brockedwardnelson May 20 19:58 UTC (~38h ago). First sub-24h-quiet day since May 19.
- **New watchlist items (24h):** **0.** First zero-add day since the May 16 cutekitten1234 cluster sequence began.
- **Drip pipeline:** UN-SHIPPED. **Day 46.** 0 sends ever. 88 of 88 users never received a drip email. Backlog: **43 visible + 16+ hidden ≈ 95+ owed sends** (+5/day accumulation rate, **above the prior 7-day-gap rate of +2.9/day**).
- **Threshold crossings today (May 22):** **5 silent** — nunemakerc E2, jfgalzin E3, liambot62 E3, kevinkid94 E3, emmacmather E3. **First 4-crossing E3 day in report-stream history (cohort effect: the May 8 signup wave produces a synchronous 14-day-later E3 wave).**
- **Threshold crossings tomorrow (May 23):** **3 silent** — jmoriarty13 E3, belder4308 E2, **cutekitten1234 E2 (third Pattern A++ multi-threshold drift confirms).**
- **Price alerts:** 0 ever triggered. **108/108 watchlist items null.** Day 115. **Today's dual-Tier-0 events (belder4308 + zhouyilinbest) end tonight with zero target-driven alerts possible by definition.**
- **Watchlist composition:** 108 items, **45 past-dated (41.7%, +1pp from yesterday on zero-add day).** **Tier breakdown: 3 in Tier-0 (within 7d), 1 in Tier-1 (8–21d — Noah Kahan drops in tomorrow), 5 in Tier-2 (22–32d), 19 in Tier-2.5/3 (33–62d), 36 in Tier-3 (63+d).**
- **Empty-watchlist cohort:** 39 of 88 (44.3%) — unchanged from yesterday on zero-add day.
- **Pattern mix in rolling 10-user cohort:** **A++ 30% / A 10% / B 50% / drip-incompatible 20% / undetermined 20%** — unchanged.
- **HYPOTHESIS STATUS — venue-cluster general (revised May 21) holds; no new test data on zero-add day.** Next test arrives next Pattern A++ signup. Suggested next action unchanged: pull referrer/source data on the 3 confirmed A++ users.
- **Most useful single observation today:** **the platform produced a 4-user synchronous E3 silent wave today (jfgalzin, liambot62, kevinkid94, emmacmather), all signed up within 9 hours of each other on May 8 — the first 4-crossing E3 day in report-stream history and a direct demonstration of cohort-effect compounding under the SMTP outage.** Tomorrow adds cutekitten1234's E2 multi-threshold drift, putting all 3 Pattern A++ users in multi-threshold status simultaneously for the first time. The 4-crossing E3 wave + the A++ trio's simultaneous multi-threshold status represent the two highest-density backlog moments the report stream has ever recorded — both occurring inside a single 48-hour window on Day 46–47 of the SMTP outage.
