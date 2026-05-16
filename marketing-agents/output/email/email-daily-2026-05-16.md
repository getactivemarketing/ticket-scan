# Email Daily — 2026-05-16

> **Day 40 of SMTP outage. Bruno Mars Soldier Field night 1 is TODAY** — konman87's pre-event send window for his first tracked event has now arithmetically closed without intervention. **kevinshall87's E1 fired silent yesterday May 15 16:44 UTC** — the strongest Pattern A++ canonical signup in the report stream's history just completed Day 1 of silent traversal. **karin_ef1's E1 fires tomorrow May 17 06:46 UTC** — the 72-hour deadline framed on May 14 is now a 20-hour deadline, and falls inside a 36-hour window with **three other hard tactical deadlines**: Soldier Field night 2 (May 17), Inter Miami v Portland (May 17, jadbennis0), and karin_ef1 E1 itself. **Day 40 also produced a NEW probe failure shape:** `POST /api/admin/drip-run` returned **HTTP 502 "Application failed to respond"** instead of the 25-second timeout (HTTP 000) that has held for Days 11–39. The route is now responsive but the application is crashing inside the handler. **This is the first diagnostic-quality movement on the drip pipeline in 30 days.** New signup yesterday at 15:41 UTC: **nunemakerc** (Day 1, 0 watchlist, Pattern-B-forming candidate). Total users **80** (+1 vs. May 15). Day 109 of 100% null-target streak (97/97). Day 104 of newsletter flatline.

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` returns `stats: []` after **Day 40.** **80 of 80 users have never received a drip email.**
- **Probe today (Day 40):** `POST /api/admin/drip-run?limit=1&dryRun=true` returned **HTTP 502 `{"status":"error","code":502,"message":"Application failed to respond"}`** in <2s. **This is a different failure shape from Days 11–39, all of which hung 25s and returned HTTP 000 (Railway gateway timeout, no application response).** Today's 502 means **the Railway edge reached the application, the route handler executed, and the application threw before returning a response.** Most likely cause: a synchronous throw inside the handler (un-awaited promise, missing `try/catch` around `nodemailer.createTransport().verify()`, or a DB query that throws on a closed connection). **This is the first diagnostic movement on the drip pipeline since Day 11.** Asks for engineering today:
  1. Check Railway logs at the 10:36 UTC probe timestamp for the thrown error message.
  2. If the throw is in `transporter.verify()`, the Gmail app password is likely revoked or the SMTP auth scope changed — regenerate.
  3. If the throw is in the DB layer, the `drip_emails_sent` table or the user query may have schema drift.
  4. Wrap the handler in `try { ... } catch (e) { log; return 500 }` to surface the actual error string in subsequent probes.
- `/api/admin/drip-health` → still `404 "Endpoint not found"`. **Day 9 of that ask unmet** (P0 since May 7).

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 15 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **15 of 20** | unchanged (nunemakerc joins at Day 0 pushing pattyglvz/kevinshall87 to Day 3-4) |
| E2 | ≥7d | **10 of 20** | unchanged (cohort shifted; jmoriarty13 crosses E2 silent today ~13:18 UTC) |
| E3 | ≥14d | **5 of 20** | unchanged |
| E4 | ≥21d | **1 of 20 visible** (mark.murdock at 23d) | unchanged at 1 visible |
| E5 | ≥30d | **0 of 20 visible** | unchanged at zero |

**Truncation horizon advanced again** (nunemakerc signup pushed one user out). dr.altvater (~25d), joshdguillemette (~26d), charlesteel126 (~24d), and the entire 30+d cohort (pete.uzelac77, blubberboi, goldy.pec.2012, bhaygood728, laye.aurelien, awwhittington, ggri73) all remain invisible. **Hidden cohort ≥12 users now.** Day 10 of API-cap regression.

### Threshold crossings in last 24h (3 silent confirmed + 1 forecast-fires-today + 1 fires-tomorrow)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| May 15 16:44 UTC | **kevinshall87** | **E1** | **A++ canonical (6 watchlist items, WC AT&T cluster + Matt Rife)** | **silent** | **First confirmed silent E1 traversal of a Pattern A++ canonical signup in the report stream's history.** 24-hour deadline framed yesterday is now expired. The cleanest single-user canonical-E1 fit in 33+ days went un-sent. |
| May 15 ~21:54 UTC | (re-confirm) emmacmather E2 silent | E2 | Pattern B 2-cross | silent | (forecast yesterday, confirmed by tenure today: Day 8) |
| May 15 18:40 UTC | natalie.sotocruz | E2 | Pattern B confirmed at E2 | silent | Crossed inside yesterday's report window — Day 8 today. |
| May 16 ~13:18 UTC (forecast) | **jmoriarty13** | **E2** | **Pattern B 2-cross** | **silent** | Day 7 today; E2 fires ~13:18 UTC if SMTP not restored. **Becomes the 5th confirmed Pattern B 2-cross at E2 case** (joining joseph.g.nicolosi, emmacmather, kevinkid94, jfgalzin; liambot62 sits separately as Pattern C × multi-threshold). |
| May 17 06:46 UTC (forecast) | **karin_ef1** | **E1** | **A++ canonical (2 watchlist items WC BC Place Vancouver cluster)** | **silent forecast** | **24-hour deadline.** Second Pattern A++ E1 trigger in 48 hours. If SMTP not restored by 06:46 UTC tomorrow, the **second** Pattern A++ canonical signup in the report stream's history also completes Day 0 of silent traversal. The named-and-timestamped cost is now **two consecutive Pattern A++ silent E1 traversals** by close of business tomorrow. |

### Tomorrow's forecast crossings (May 17)
- **karin_ef1 → E1** (3d, 2 items WC BC Place Vancouver) — **fires May 17 ~06:46 UTC.** **24-hour deadline.**
- **emmacmather, kevinkid94, jfgalzin, liambot62, jmoriarty13 E2 advances move from "fresh" to 1–2 days stale.** Multi-threshold drift compounding.

**Visible backlog (in returned 20):** 15 E1 + 10 E2 + 5 E3 + 1 E4 + 0 E5 = **31 emails owed in pendingUsers cohort.** Plus 12+ hidden users now beyond the truncation horizon (most >24 days silent). **True backlog ≈ 73 emails across all eligible users** (+3 vs yesterday's 70; new signups + jmoriarty13 E2 add).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 109 of 100% null-on-add. 97/97 watchlist items have null `target_price`** (re-confirmed via `/api/admin/watchlist?limit=200`). No new watchlist adds in 24h (last add was karin_ef1's 2 WC BC Place items on May 14 06:47 UTC).
- **The 8 WC adds across kevinshall87 + karin_ef1 are now 4 and 2 days old respectively**, all still null-target. **The interlock is unchanged but tightening:** SMTP fix alone produces 0 alert emails because no user has set a target, AND the cohort holding the strongest activation signal in the report stream's history (both Pattern A++ multi-add WC users) is the same cohort with 100% null target_price. **A two-day window with zero new adds also produced zero retroactive target captures via the existing UX** — confirming the auto-suggest fix has zero upside through the existing flow.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 104 days** since last organic signup (roos_leeuwen, 2026-02-01). **Day 11 of consecutive zero-capture days.** +6 user signups in last 7 days (counting nunemakerc, vlanza, karin_ef1, c_calingasan, kevinshall87, pattyglvz), 0 newsletter signups in the same window. **Cross-channel structural break holds for 11th consecutive day under signup pressure.** Footer regression Day 20; popup spec Day 16 unbuilt per CRO May 11.

## Platform Context
- Total users: **80** (was 79 on May 15, **+1 — nunemakerc**)
- Users today (rolling 24h since May 15 10:00 UTC report): **1** — nunemakerc (May 15 15:41 UTC, 0 watchlist)
- Users this week (rolling 7d): **8** (per `/admin/stats`'s `usersThisWeek: 7` + the new nunemakerc; the May 8 cluster of 4 has now rolled out of 7d window)
- Watchlist items: **97** (unchanged — no adds in 24h)
- Past-dated watchlist items: **~40 of 97 (41.2%)** unchanged. **Aging deadline TODAY:** Bruno Mars Soldier Field night 1 (konman87) ages past tonight. Tomorrow: night 2 + Inter Miami (jadbennis0) age past simultaneously → past-event count jumps to **43 of 97 (44.3%) by May 18.**
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

## New-Signup Pattern Analysis (24h)

| User | Signed up | Days | Watchlist | Pattern | Note |
|------|-----------|------|-----------|---------|------|
| **nunemakerc** | **May 15 15:41 UTC** | **0** | **0** | **Pattern-B-forming (undetermined-vs-B)** | Day 0; insufficient signal yet but **9 of last 10 signups have followed Pattern B/non-activation by Day 1** (vlanza Day 0→Day 2 still 0; c_calingasan Day 1→Day 3 still 0; pattyglvz Day 0→Day 4 still 0). Without an activation event in the next 24h, nunemakerc joins Pattern B-forming as a working hypothesis. |

**Updated pattern mix across rolling 10 signups (May 9 → May 16):** nunemakerc (Day 0), vlanza (Day 2, 0 wl), karin_ef1 (Day 2, 2 wl WC A++), c_calingasan (Day 3, 0 wl), kevinshall87 (Day 4, 6 wl WC A++ + Matt Rife), pattyglvz (Day 4, 0 wl), jmoriarty13 (Day 7, 0 wl), emmacmather (Day 8, 0 wl), kevinkid94 (Day 8, 0 wl), liambot62 (Day 8, 1 wl past).

- Pattern A++ canonical: **2 of 10 (20%)** — kevinshall87 + karin_ef1, both World Cup single-venue clusters. **Density stable from yesterday.**
- Pattern B forming/confirmed: vlanza, c_calingasan, pattyglvz, jmoriarty13, emmacmather, kevinkid94, nunemakerc = **7 of 10 (70%)**. **+1 from yesterday's 60% as nunemakerc enters.**
- Drip-incompatible (past-event): liambot62 = **1 of 10 (10%)**

**Pattern B share crossed 70%.** This is the highest Pattern B density in the rolling-10 window in the report stream's history (was 60% on May 14, 50% on May 8). **The empty-watchlist cohort is becoming the modal new-user experience at an accelerating rate.**

---

## kevinshall87 — Day 1 of Silent E1 Traversal (Pattern A++ Loss-in-Progress)

The 24-hour deadline framed on May 14–15 expired yesterday at 16:44 UTC. The send did not occur. **The cleanest single-user canonical-E1 fit in 33+ days went un-sent.** This is structurally distinct from prior silent E1 traversals because:

1. **6 watchlist items in one session** (5 WC AT&T matches + Matt Rife Choctaw Sep 26). **The user did the segmentation work the canonical drip cadence was built for in <5 minutes.**
2. **Cluster shape:** 5 of 6 items at the same venue (AT&T Stadium Arlington). The canonical E1 subject draft (`Welcome — 5 World Cup matches at AT&T Stadium, here's how Arlington-cluster pricing usually moves`) was 100% justified by the cluster shape.
3. **Tactical-window math intact:** E2 fires May 19 ~16:44 UTC (3 days from now), E3 fires May 26, E4 fires Jun 2, E5 fires Jun 11. **All 5 sends still land cleanly pre-event** (earliest WC match Jun 14 is 29 days out).
4. **Recovery shape now requires an "E1-late" apology variant on top of the canonical content.** Subject revises:
   - Subject A (NEW today): `5 World Cup matches at AT&T Stadium — and we owe you a Welcome email from 1 day ago. Here's both.`
   - Subject B (yesterday's): `Welcome — 5 World Cup matches at AT&T Stadium, here's how Arlington-cluster pricing usually moves`
   - **Recommend A.** The apology pivot earns priority because the user is now arithmetically owed a send. The cluster-specific hook moves to the body.
5. **Decision today:** if SMTP returns inside this 24-hour window, send the E1-late variant. If SMTP stays down past May 19 16:44 UTC, kevinshall87 enters multi-threshold drift (E1+E2 silent at 7d) and the template upgrades to the Pattern A++ 2-cross variant — **a class that does not yet exist in the template inventory.**

---

## karin_ef1 — 20-Hour E1 Deadline

E1 fires tomorrow May 17 06:46 UTC (~20 hours from this report). **If SMTP is not restored by then, the second Pattern A++ canonical signup in the report stream's history also enters silent E1 traversal — back to back with kevinshall87.**

Send draft (from May 14, refreshed):
- Subject A: `Welcome — your 2 BC Place World Cup tickets, 40 days out. Here's how Vancouver pricing usually moves.`
- Subject B: `Welcome to TicketScan — Switzerland vs Canada + a Round of 16, both at BC Place. Here's the read.`
- **Recommend A.** Named venue + named day-count + cluster framing.
- CTA: `/watchlist` (no per-user deep-link route confirmed).

**The May 14 framing of "72-hour deadline covering two Pattern A++ E1 triggers" has now collapsed to a 20-hour deadline covering only karin_ef1** — kevinshall87's deadline expired yesterday. **If both pass silent, the platform will have produced its two strongest Pattern A++ signups in 33+ days on consecutive days, and silently lost the canonical drip cadence for both on consecutive days.**

---

## konman87 — Soldier Field Night 1 TODAY (Window Closed)

Bruno Mars Soldier Field night 1 is **TODAY May 16**. The pre-event send window for konman87's first tracked event has now arithmetically closed. The May 15 framing of "tomorrow is the deadline" expired overnight.

**Shape change for today's send (if SMTP returns in next 24h):**
- The pre-event apology + decision-aid template is no longer appropriate for night 1.
- **Night 1 template becomes pure post-event apology + tactical pivot to night 2 (TOMORROW).** Subject revises:
  - Subject A: `Night 1 was today. Here's the night 2 read for tomorrow — and a real apology for 103 days of silence.`
  - Subject B: `Soldier Field night 1 already happened — let's not miss night 2 (tomorrow).`
- **Recommend A.** The acknowledgment-of-failure pivot earns priority because the platform was silent through the user's first event date.
- **Combined-send economics:** the night 2 send must include both nights' read because night 1 is now a learning, not a decision. Pricing retrospective on night 1 (if available via Ticketmaster historicals) becomes the data hook.

**This is the first confirmed pre-event silent failure on a tracked event in the report stream's history with the user still pre-event on a SECOND tracked instance.** A new template variant: "first-of-cluster silent + second-of-cluster still actionable."

---

## Triple Deadline Tomorrow (May 17)

Three hard tactical deadlines compress into a single 24-hour window:

| Time (UTC) | User | Event/Trigger | Type | Notes |
|------------|------|---------------|------|-------|
| **06:46** | **karin_ef1** | **E1 fires** | Drip trigger | Pattern A++ canonical (2 WC BC Place items). **20 hours from now.** |
| ~16:00 (TBD) | konman87 | Bruno Mars Soldier Field night 2 | Tactical-window close | Day 103 of silence. Manual send if SMTP not restored. |
| ~19:00 (TBD) | jadbennis0 | Inter Miami vs Portland | Tactical-window close | Day 9 on platform. E1+E2 silent (multi-threshold drift). |

**Plus by sunrise May 18:** 3 of 97 watchlist items age past simultaneously (Soldier Field night 2, Inter Miami, [Bruno Mars Soldier Field night 1 already past today]). **Past-event count climbs from 40 to 43 by morning of May 18 — the largest single-night past-event aging event of the current reporting cycle.**

---

## Watchlist Digest Prep — Tier-Compressed

### Past-Event Cleanup
**40 of 97 (41.2%) past-dated** at report time. Tonight + tomorrow night will push to 43/97 (44.3%) by May 18. The structural fix (status column + auto-expiry cron) remains unshipped. **Forecast pollution by May 19 if no fix: 43/97 (44.3%); by May 25 (Bruno Mars Columbus + AEW age in): 45/97 (46.4%).**

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **Bruno Mars Soldier Field night 1** | **TODAY May 16** | **0** | konman87 | 103 | post-E5 graveyard | **Pre-event window arithmetically closed.** Send becomes post-event apology + pivot to night 2. |
| **Bruno Mars Soldier Field night 2** | **TOMORROW May 17** | **1** | konman87 | 103 | post-E5 graveyard | **Final 24h.** Combined-send economics with night 1 retrospective. |
| **Inter Miami vs Portland Timbers** | **TOMORROW May 17** | **1** | jadbennis0 | 11 | E2 crossed May 12 silent | Final 24h. Multi-threshold compression: welcome + missed-E1 + missed-E2 + Tier-0 (4-part). |
| **Bruno Mars Ohio Stadium** | May 20 | 4 | charlesteel126 | 24 | E3+E4 silent (multi-threshold mid-funnel, **invisible**) | Compression: 2-missed-sends + Tier-0 at 4 days. |

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| AEW Double or Nothing | May 24 | 8 | joshdguillemette | 27 | E3+E4 silent, **E5 fires May 19 ~20:30 UTC (3 days)** |

**joshdguillemette is now 3 days from full-traversal silent.** Last reporting cycle where the send avoids that label.

### TIER 2 — Long-Lead Canonical (22+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| Noah Kahan Kia Center Orlando | Jun 12 | 27 | cjthomas2557 | 9 | **E1+E2 silent (2-cross at E2 multi-threshold front)** |
| **World Cup ×5 at AT&T Stadium + Matt Rife Sep 26** | Jun 14 → Sep 26 | 29 → 133 | **kevinshall87** | **4** | **E1 silent yesterday May 15 — Day 1 of Pattern A++ silent traversal (NEW class)** |
| **WC ×2 at BC Place Vancouver** | Jun 24 + Jul 7 | 39 + 52 | **karin_ef1** | **2** | **E1 fires May 17 06:46 UTC (20h deadline)** |
| Bruno Mars MetLife ×3 | Aug 21–25 | 97–101 | taranimeramaro | 21 | E3 (crossed May 9 silent — 3-cross now: E1+E2+E3 all silent) |
| Ed Sheeran SoFi | Aug 8 | 84 | blubberboi | 37 | E5 silent traversal complete May 11 (Day 5 of historic record) |
| Shakira ×2 NYC | Jul 20–23 | 65–68 | laye.aurelien | 44 | E5 silent + 14 days post-E5 |
| pete.uzelac77 WC Lincoln Financial ×4 + Darts ×2 | Jun 14 → Jul 4 | 29 → 49 | pete.uzelac77 | 36 | E5 silent traversal complete May 10 (Day 6) |

### TIER 3 — Pattern B Variants (cohort = 30 of 80 users = 37.5%, **stable**)
- **mark.murdock (E4 silent May 14, 23d, 0 watchlist)** — Pattern B-at-E4. **E5 fires May 23 (~7 days).** Last cycle before full-traversal.
- **zhili1208 (E3 silent ~May 13, 17d, 0 watchlist)** — Pattern B 3-cross at E3.
- **lilianamasyrubi (E3 silent ~May 12, 18d, 0 watchlist)** — same shape; **E4 fires May 19 (~3 days)** — entering 4-cross class.
- **jmoriarty13 (E2 fires today ~13:18 UTC silent, 7d)** — Pattern B 2-cross at E2 (**becomes 5th confirmed instance today**).
- **natalie.sotocruz (E2 silent ~May 14, 8d)** — Pattern B 2-cross at E2.
- **emmacmather, kevinkid94, jfgalzin (E2 silent ~May 15, 8d each)** — Pattern B 2-cross at E2 batch (yesterday's mass-crossing event now ~1 day stale).
- **joseph.g.nicolosi (E2 silent ~May 11, 11d, 0 watchlist)** — Pattern B 2-cross at E2; **E3 fires May 18 (~2 days)** — entering 3-cross class.
- **pattyglvz, c_calingasan, vlanza, nunemakerc (Days 0–4, 0 watchlist)** — pre-E1 Pattern B-forming batch. **vlanza crosses E1 silent May 17 ~13:20 UTC** alongside karin_ef1's E1 trigger — Tier 3 add inside the triple-deadline window.

**Empty-watchlist cohort total: 30 of 80 (37.5%).** Stable percentage vs yesterday (38.0%); absolute unchanged (nunemakerc adds to empty cohort but cohort denominator also grew by 1).

### TIER 4 — Apology / Catch-Up (>21d silent backlog, below truncation horizon)
- **dr.altvater (E4 crossed May 12 silent, 25d, 0 watchlist)** — first invisible E4 entrant; **E5 fires May 20 (~4 days)** — entering full-traversal class.
- **joshdguillemette (E3+E4 silent, 27d, 1 watchlist AEW)** — listed above in Tier 1 (event 8 days out); also a Tier 4 case structurally. **Cross-tier.**
- **charlesteel126 (E3+E4 silent, 24d, invisible, 1 watchlist Bruno Mars Columbus)** — cross-tier with Tier 0.
- **nicklib253 (E4 silent May 9, 28d, Phillies past)** — Pattern A loss + E4 silent.
- **goldy.pec.2012 (E5 traversal completed May 11, 35d, Bilmuri past)** — Pattern A + full-traversal overlap.
- **blubberboi (E5 traversal completed May 10, 37d, Ed Sheeran SoFi Aug 8)** — first historic full-traversal case. Day 6 of historic record.
- **pete.uzelac77 (E5 traversal completed May 10, 36d, WC Lincoln Financial ×4 + Darts ×2)** — highest-value full-traversal candidate (6 tactical-fit future items 29–49 days out).
- **bhaygood728 (~43d, Cardi B past)** — apology-only sunset.
- **laye.aurelien (~44d, Shakira ×2 NYC 65-68 days out)** — highest-leverage tactical-fit graveyard recovery (still actionable).
- **awwhittington, ggri73 (~24d, 0 watchlist)** — Pattern B-at-E4 deep cohort.

### TIER 5 — Drip-Incompatible by Design
- **sparkitrightthere (E2 silent ~May 14, Day 9, Mac DeMarco May 7 passed 9 days ago)** — manual recovery shape; multi-threshold.
- **liambot62 (E2 silent ~May 15, Day 8, Toronto FC May 9 passed 7 days ago)** — **Pattern C × multi-threshold (only confirmed instance).**

**2 of 10 most-recent signups (20%) drip-incompatible.** Stable from yesterday.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **kevinshall87 / WC AT&T E1-LATE (NEW today — Day 1 silent, recovery shape required)** | `5 World Cup matches at AT&T Stadium — and we owe you a Welcome email from 1 day ago. Here's both.` | `1 day late: your AT&T Stadium World Cup cluster + the pricing read we should have sent yesterday` | **A** *(apology pivot leads; cluster hook in body)* |
| **karin_ef1 / WC BC Place Vancouver E1 (fires tomorrow 06:46 UTC, 20h deadline)** | `Welcome — your 2 BC Place World Cup tickets, 40 days out. Here's how Vancouver pricing usually moves.` | `Welcome to TicketScan — Switzerland vs Canada + a Round of 16, both at BC Place. Here's the read.` | **A** *(named venue + named day-count + cluster framing)* |
| **konman87 / Soldier Field night 1 POST-EVENT pivot to night 2 (NEW today — first first-of-cluster silent + second-still-actionable case)** | `Night 1 was today. Here's the night 2 read for tomorrow — and a real apology for 103 days of silence.` | `Soldier Field night 1 already happened — let's not miss night 2 (tomorrow).` | **A** *(acknowledgment pivot leads; pricing retrospective on night 1 in body)* |
| **jadbennis0 / Inter Miami 1 day + E1+E2 silent 4-part compression** | `Inter Miami tomorrow — and we owe you 2 emails. Here's the 24-hour read.` | `1 day to Inter Miami v Portland: welcome (11 days late) + the Nu Stadium pricing` | **A** *(tightens 2→1 day; apology weight at top)* |
| charlesteel126 / Bruno Mars Columbus 4d + E3+E4 multi-threshold (invisible) | `Bruno Mars at Ohio Stadium — 4 days out, and we owe you 2 emails. Here's the Wednesday read.` | `4 days to Ohio Stadium — multi-threshold apology + the night-of pricing read` | **A** *(tightens 5→4)* |
| **joshdguillemette / AEW 8d, E3+E4 silent, E5 in 3 days (LAST PRE-FULL-TRAVERSAL CYCLE)** | `AEW Double or Nothing — 8 days out, and 3 missed sends. One more day silent and that becomes 4. Here's the catch-up.` | `Louis Armstrong / AEW: 8 days out + a full-traversal apology before the 4th miss` | **A** *(escalates the deadline framing — last cycle before E5 silent makes this a full-traversal case)* |
| cjthomas2557 / Noah Kahan 27d + E1+E2 multi-threshold | `Noah Kahan / Kia Center — 27 days out, and we owe you 2 sends, sorry` | `2 missed emails + Noah Kahan in 27 days: catching you up properly` | **A** *(carries; tightens 28→27)* |
| taranimeramaro / Bruno Mars MetLife ×3 E3 (3-cross now) | `3 Bruno Mars dates at MetLife + 3 missed sends — here's the cluster read and the catch-up` | `MetLife ×3: which night usually has the cheapest seats? (And: a real apology.)` | **A** *(upgrade — 3-cross apology weight earns priority over pure cluster framing)* |
| **mark.murdock / Pattern B 4-cross at E4 (E5 in 7 days, last cycle before full-traversal)** | `Three weeks in, four missed emails, here's the unvarnished truth: we've been broken. Here's what TicketScan looks like when it works.` | `23 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(carries; "we've been broken" leads with radical transparency)* |
| **jmoriarty13 / Pattern B 2-cross at E2 (NEW today — fires ~13:18 UTC silent)** | `Week 1 on TicketScan — and we've been quieter than we should have been. Here are 3 events worth tracking right now.` | `2 missed sends + 3 events trending — let's reset` | **A** *(time-anchor leads when 2 sends were missed)* |
| **natalie.sotocruz, emmacmather, kevinkid94, jfgalzin (2-cross at E2 batch from May 14-15)** | `It's been a week — we've been quieter than we should have been. Here are 3 events worth tracking right now.` | `1-2 missed emails + 3 events trending on TicketScan` | **A** *(unchanged from yesterday)* |
| **Pattern C × multi-threshold (liambot62)** | `Your Toronto FC match was 7 days ago — and we owe you two emails about it. Here's both.` | `We failed you 7 days ago — here's how to make it right, and what to track next` | **A** *(tightens 6→7 days post-event)* |
| Pattern B-at-E1 batch (pattyglvz Day 4, c_calingasan Day 3, vlanza Day 2 pre-E1) | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `What event are you watching? Here's how TicketScan helps from Day 1.` | A |
| **nunemakerc (Day 0 Pattern-B-forming, pre-E1)** | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `Welcome — 97 events tracked across our community right now, here are 3 trending` | **A** *(NEW today; same shape as existing pre-E1 batch)* |
| zhili1208 / lilianamasyrubi (Pattern B 3-cross at E3) | `Two weeks in, three silent touchpoints from us — here's a reset` | `3 missed emails + 3 events trending — let's reset` | A |
| Catch-up — blubberboi (E5 full-traversal, Day 6 of historic record) | `Ed Sheeran is 84 days away. We owe you 5 emails. Here's the one that actually matters.` | `We owe you 30 days of emails — here's the SoFi pricing read` | A *(carries; tightens 85→84)* |
| **pete.uzelac77 / WC Lincoln Financial ×4 E5 graveyard (full-traversal + tactical-fit, 29-49 days out)** | `4 World Cup matches at Lincoln Financial + 5 missed emails — here's the cluster read` | `Lincoln Financial ×4 in 29-49 days, and we owe you a real catch-up` | A *(carries)* |
| laye.aurelien Shakira ×2 (E5 + 14d post-E5) | `Shakira at MetLife — 65 days out and we owe you a real 14-day-late catch-up` | `2 Shakira dates, 65 days, and 44+ silent days from us — here's the read` | A *(tightens 67→65; post-E5 tail 12→14)* |

**CTA conformance:** 11 of 17 use top-level routes; 6 of 17 use event-specific deep-links (justified by Tier-0 proximity, multi-event clusters, or post-event recovery). **Deep-link share stable at ~35%.**

---

## Action Items

### P0 — Critical (Day 40 of outage)

1. **SMTP / drip pipeline — DAY 40. NEW probe signal today.** The HTTP 502 "Application failed to respond" return (different from Days 11–39's HTTP 000 timeout) means the route handler is now executing and throwing synchronously. **Today's priority order:**
   1. **Check Railway logs at 2026-05-16 10:36 UTC for the thrown error message.** This is the first diagnostic surface in 30 days.
   2. If error mentions `auth`, `EAUTH`, `BadCredentials`, or `Username and Password not accepted`: regenerate Gmail app password. (Most likely cause given recent Gmail policy changes.)
   3. If error mentions `relation does not exist` or `column ... does not exist`: schema drift on `drip_emails_sent` or users table.
   4. If error mentions `ECONNREFUSED` or `ETIMEDOUT`: Railway egress on port 587 still blocked (per May 1 hypothesis).
   5. Wrap the handler in `try/catch { log; return res.status(500).json({error: e.message}) }` so subsequent probes return the actual error string.
   6. Re-test with `?limit=1&dryRun=true` after each change.

2. **DEADLINE TRACKING:**
   - **karin_ef1 E1 — fires May 17 06:46 UTC. 20 hours from this report.** If SMTP not restored by then, **second consecutive Pattern A++ canonical signup enters silent E1 traversal**.
   - **kevinshall87 — Day 1 of silent E1 traversal already in progress.** E2 fires May 19 16:44 UTC (3 days). If SMTP not restored by then, becomes first Pattern A++ 2-cross at E2 case in the report stream.
   - **konman87 — Soldier Field night 1 happens TODAY.** Window for pre-event send closed. Manual post-event pivot send to bridge to night 2 (May 17) is the highest-ROI single-email send remaining in the entire backlog this week.
   - **jadbennis0 — Inter Miami May 17.** Final 24h window. Multi-threshold + Tier-0 4-part compression template ready.
   - **joshdguillemette — E5 fires May 19 20:30 UTC.** Last cycle to send before he becomes the second confirmed full-traversal silent send (after blubberboi).

3. **Target-price UX (Day 109).** 97/97 watchlist items null. **No change in 24h (no new adds).** The Day 13 spec for inline auto-suggest remains unbuilt. **Specific finding today:** kevinshall87 + karin_ef1's 8 WC adds are now 2–4 days old, all still null-target. **The window for retroactive capture via the existing UX is closed** — confirming the inline auto-suggest is the only path to non-zero alerts.

### P1 — High

4. **Past-event watchlist cleanup (41.2% bloat).** Tonight + tomorrow night will push to 44.3% by May 18. **Same fix as Apr 29 → May 15:** `status` column + daily expiry cron. **Today's specific cost:** 3 items age past in <36 hours (Soldier Field nights 1+2 + Inter Miami) — without auto-expiry, the dashboard's past-event prompt count grows by 3 simultaneously across 2 users (konman87, jadbennis0). An auto-archive job paired with a "what next?" prompt would convert 3 past-event entries into 3 re-engagement opportunities on May 18.

5. **`/drip-stats` cap / pagination (Day 10 of regression).** Hidden cohort now ≥12 users. Same fix: add `offset` parameter or raise cap to 100.

6. **Backlog catch-up plan when SMTP returns** — **updated priority order Day 40:**
   1. konman87 (night-1-post + night-2-pivot, hard 24h window)
   2. karin_ef1 (if within 20h: canonical E1; if not: E1-late variant)
   3. kevinshall87 (E1-late variant, NEW Day-1-late template)
   4. jadbennis0 (4-part compression, 24h window)
   5. cjthomas2557 (E1+E2 compressed)
   6. charlesteel126 (E3+E4 multi-threshold mid + Tier-0)
   7. joshdguillemette (E3+E4 + last-pre-E5 cycle)
   8. taranimeramaro (E3 3-cross tactical-fit)
   9. mark.murdock (Pattern B 4-cross apology)
   10. liambot62 (Pattern C × multi-threshold)
   11. blubberboi (full-traversal apology test case)
   12. pete.uzelac77 (full-traversal + WC cluster)

7. **Newsletter growth — Day 104 milestone.** 6 user registrations / 0 newsletter signups in last 7 days. Footer regression Day 20; popup spec Day 16 unbuilt. **Structural break holds for 11 consecutive zero-capture days under signup pressure.**

8. **`W0-A/B/C` real-time welcome triage architecture.** 7 of 10 recent signups Pattern B-forming (was 6 yesterday); 1 of 10 drip-incompatible; 2 of 10 clean Pattern A (both A++ both WC). **Today's specific framing:** if a `W0-A` triage existed, both kevinshall87 (now Day 1 silent) and karin_ef1 (firing tomorrow) would have been intercepted within the first hour of signup instead of waiting 3 days for an E1 that has not / will not fire.

### P1.5 — World Cup channel signal

9. **World Cup channel investigation (Day 2 of hypothesis).** Both Pattern A++ signups in the last 5 days are WC single-venue clusters. Hypothesis from May 14 unchanged: WC channel may be entering its first acquisition pulse. **Today's data point:** zero new signups since vlanza (May 14 13:20) until nunemakerc (May 15 15:41) — a 26-hour gap with one Pattern-B-forming signup. **No new Pattern A++ WC signups in 48 hours.** Sample n=2 still holds — neither the "stochastic clustering" nor the "channel activation" interpretation is yet falsified. **Watch the next 5 signups closely.**

### P2 — Medium

10. **`drip-health` endpoint — DAY 9 of unmet ask.** Spec unchanged: `GET /api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt, pendingCount}`. **Today's 502 probe makes this endpoint even more valuable** — would allow continuous monitoring of which subsystem is throwing without manual log inspection.

11. **pete.uzelac77 World Cup re-engagement** — 36 days on platform, 6 items, 29 days to first match. **The "in May" framing on the original subject (`Don't buy your World Cup tickets in May — here's why`) has 15 days of validity left** before it expires.

12. **Watchlist digest endpoint — still manual.** 17 distinct send templates hand-composed today (up from 18 yesterday — kevinshall87 collapsed from pre-E1 canonical to E1-late variant). Bottleneck unchanged.

13. **Viva El Jaripeo post-mortem — 20 DAYS OVERDUE.** Status unchanged.

### Tracking metrics

- **Tactical-window degradation:** Day 40. **konman87 night-1 window CLOSED today** (first confirmed silent-through-event-date case with subsequent same-cluster event still actionable). **Next pre-event silent failure forecast: konman87 night 2, jadbennis0 Inter Miami — both May 17.**
- **CTA simplification rule conformance:** 65% top-level (11 of 17); 35% deep-link. Conformance stable.
- **Pattern mix in rolling 10-user cohort:** A 20% / B 70% / drip-incompatible 10%. **Pattern B share at all-time high in report stream history.**
- **Pattern A++ cluster acquisition rate:** Held at 2 in 5 days (kevinshall87 + karin_ef1, both WC). **No new instances in 48 hours.**
- **Template inventory needed for safe restart:** 13 shapes today (up from 12 on May 15 — added: **first-of-cluster silent + second-of-cluster still actionable** for konman87, plus **E1-late variant for Pattern A++** for kevinshall87). Inventory has now grown from 4 (May 11) → 12 (May 15) → 13 (today). **Compounding faster than the outage duration.**

---

## Handoff → Analytics Agent (Agent 7)

- **Subscriber total:** 3 active, 0 net change in 24h. **104 consecutive days flat.** Day 11 of zero-capture under signup velocity.
- **User signups (24h):** **+1** (nunemakerc May 15 15:41 UTC, 0 watchlist, Pattern-B-forming). **80 total users.** 7d rolling = 8 (was 10 yesterday — the May 8 cluster of 4 rolled out of 7d window today).
- **New watchlist items (24h):** **0.** First 24h with zero new adds since May 12. **The two Pattern A++ users from May 12-14 produced 8 adds in 4 days; the 48 hours since karin_ef1's last add (May 14 06:47) have produced zero.** Decay rate now testable.
- **Drip pipeline:** UN-SHIPPED. **Day 40. 0 sends ever. 80 of 80 users never received a drip email.** Backlog: 31 visible + 12+ hidden ≈ **73 owed sends** (+3 vs yesterday's 70).
- **NEW probe signal today:** drip-run probe shifted from HTTP 000 timeout (Days 11–39) to HTTP 502 "Application failed to respond" (Day 40). First diagnostic-quality movement in 30 days. Suggests route handler now executes but throws synchronously.
- **Threshold crossings in last 24h (3 confirmed silent + 1 forecast-fires-today + 1 forecast-fires-tomorrow):**
  - May 15 16:44 UTC **kevinshall87 → E1 silent (FIRST PATTERN A++ SILENT E1 TRAVERSAL EVER)**
  - May 15 18:40 UTC natalie.sotocruz → E2 silent (Pattern B confirmed)
  - May 15 ~21:54 UTC emmacmather → E2 silent (Pattern B 2-cross at E2)
  - May 16 ~13:18 UTC (forecast) **jmoriarty13 → E2** (Pattern B 2-cross at E2 — 5th confirmed instance)
  - May 17 06:46 UTC (forecast) **karin_ef1 → E1** (20-HOUR DEADLINE — second Pattern A++ E1 trigger)
- **Price alerts:** 0 ever triggered. **97/97 watchlist items null. Day 109.** No new adds in 24h.
- **Watchlist composition:** 97 items, 40 past-dated (41.2% — unchanged). **3 events within 36 hours** (Soldier Field night 1 TODAY, Soldier Field night 2 + Inter Miami TOMORROW). 1 in 8-21d (joshdguillemette). 2 in 22-32d (cjthomas2557, kevinshall87 first WC). 13 in 33-62d (kevinshall87 ×4 + karin_ef1 ×2 + pete.uzelac77 ×4 + taranimeramaro starts). 38 in 63+d.
- **Empty-watchlist cohort:** 30 of 80 (37.5%), percentage stable.
- **Pattern mix in rolling 10-user cohort:** A 20% (both A++ both WC cluster) / B 70% / drip-incompatible 10%. **Pattern B share at all-time high.**
- **World Cup channel hypothesis (Day 2):** no new Pattern A++ WC signups in 48 hours. Sample n=2 holds. Neither interpretation falsified.
- **Most useful single observation today:** **the SMTP probe failure shape changed for the first time in 30 days — from gateway timeout to application-level 502.** This is the first diagnostic-quality datapoint on the outage and converts the engineering ask from "the pipeline is broken, please investigate" to "the route handler is executing and throwing — please check Railway logs at 10:36 UTC for the error message." **The Day 40 marker coincides with a tractable signal for the first time.** Paired with the 20-hour karin_ef1 E1 deadline and the konman87 Soldier Field night-1 window closure today, **the next 24 hours determine whether the outage produces its first concrete remediation signal or its 41st day of silence.**
