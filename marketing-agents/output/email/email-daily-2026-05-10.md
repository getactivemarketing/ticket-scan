# Email Daily — 2026-05-10

> **Day 34 of SMTP outage.** Two milestones today reframe the size of the gap. (1) **blubberboi crosses E5 at 23:58 UTC tonight** — the first user in TicketScan's history to fully traverse the entire 30-day drip schedule with zero emails delivered. The "fully silent traversal" is no longer a theoretical end-state from the May 8 forecast; it's a live event in this report cycle. (2) **The empty-watchlist cohort is structurally ~7× larger than yesterday's report tracked.** The pendingUsers endpoint surfaced 4 visibly empty-watchlist users; cross-checking `/api/admin/watchlist` against `/api/admin/stats` reveals **28 of 74 users (37.8%) have zero watchlist items** — the dominant user state. Pattern B is not a niche; it's the modal experience. **liambot62 / Toronto FC** event aged to past overnight (event was last night) — Pattern C cumulative loss now recorded. **Day 103** of 100% null-target streak (89/89). **Day 98** of newsletter stall. **+1 user in 24h** (jmoriarty13, empty watchlist, joining the 28-user cohort). Acquisition decelerated from 4/day to 1/day after the May 7-8 spike, but rolling 7-day at **10 signups** is still the highest in reporting history.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- **Pending users (visible): 20 — jmoriarty13 (0d) takes the freshest slot, pushing dr.altvater (was 19d, now 20d) off the bottom of the visible window.** Day 4 of API-cap regression: 8+ users now hidden behind the 20-row limit.
  - Eligibility breakdown today (visible 20 only):
    - E1 eligible (≥3d): **12/20** (excluded: jmoriarty13 0d, emmacmather 1d, kevinkid94 1d, liambot62 1d, jfgalzin 1d, cjthomas2557 2d, natalie.sotocruz 2d, sparkitrightthere 2d)
    - E2 eligible (≥7d): **10/20** (above 8 + jadbennis0 4d + joseph.g.nicolosi 5d)
    - **E3 eligible (≥14d): 8/20** — taranimeramaro and nmcnamee99 are now in the cohort that crossed yesterday silent. Mild visibility recovery vs. yesterday (7→8) because no E4 promotions occurred today to push them off.
    - **E4 eligible (≥21d): 0/20** — third day at zero in the visible cohort. nicklib253 (23d), dylanbaldy (~24d), pete.uzelac77 (29d), goldy.pec.2012 (30d) all hidden.
    - **E5 eligible (≥30d): 0/20** — third day at zero. **goldy.pec.2012 may also cross E5 today** (created Apr 10 ≈ 30d) in addition to blubberboi. Both invisible.
- **Threshold crossings in last 24h (3 advances + 1 historic):**
  - **E0 → E1: sparkitrightthere** crosses today at May 10 11:38 UTC. Pattern A on past Mac DeMarco event (May 7). Send shape is Tier C1 post-event recovery, not canonical E1.
  - **E0 → E1: cjthomas2557** crosses tomorrow May 10 22:49 UTC (could land in this report window or tomorrow's depending on cron timing). **34-day-lead Noah Kahan / Kia Center — strongest canonical E1 fit since the outage began.** Standard Day-3 send template is the right shape, no apology needed yet.
  - **E4 → E5: blubberboi** crosses tonight at May 10 23:58 UTC. **Historic milestone — first user to traverse the entire drip schedule with zero emails delivered.** Single-event watchlist (Ed Sheeran SoFi Aug 8 — 90 days out, perfect Tier 2 long-lead fit). The catch-up apology shape now needs to absorb 5 missed sends, not 4.
  - **E4 → E5: goldy.pec.2012** likely crosses today (created ~Apr 10). Single-event watchlist (Bilmuri Madison May 2 — past 8 days). Pure apology shape; tactical content not available.
- **ESCALATION (Day 34):** `POST /api/admin/drip-run?limit=1&dryRun=true` at 10:00 UTC → HTTP_CODE=000 after 15s, **identical pattern as Days 11-33**. Same fix sequence carrying from May 1: regenerate Gmail app password → audit handler for top-of-route `transporter.verify()` → verify Railway port 587 egress → wrap drip handler in `Promise.allSettled` with per-user timeout → re-test with `?limit=1&dryRun=true`. **Today's framing for engineering escalation:** the drip pipeline has now produced a full 30-day silent funnel for one named user. The cost is no longer abstract.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 103 of 100% null-on-add. 89/89 watchlist items have a null target_price.** Confirmed via direct query of `/api/admin/watchlist?limit=200` today. The single one-line UX fix (auto-suggest at 10% below current min on watchlist-add) remains the cleanest path.
- The May 1 interlock is unchanged: SMTP fix without target-price fix produces zero alerts; target-price fix without SMTP fix produces zero alert emails. **Day 34 + Day 103 means both gaps must close before the alert pipeline can produce a single sent email.**

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged since 2026-02-01)
- **Stall duration: 98 days.** +19 user registrations in 23 days since last newsletter signup (was +18/22d yesterday). **Day 5 of 5 consecutive days with user-account signups but zero newsletter signups.** Unchanged recommendation: post-registration confirmation default-opt-in checkbox is the cheapest growth fix on the board, and yesterday's velocity-spike framing makes it more pressing — peak acquisition activity is occurring while the easiest cross-channel capture is unimplemented.

## Platform Context
- Total users: **74** (was 73 on May 9, +1 in 24h — jmoriarty13)
- Users today (rolling 24h): **1** — jmoriarty13. Pace decelerated from 4/day on May 8 to 1/day. **Two consecutive multi-signup days followed by a single-signup day is the historical baseline shape after a spike — not yet a reversion to normal.**
- Users this week (rolling 7d): **10** (was 9 on May 9). joseph.g.nicolosi rolls out of the 7d window tomorrow (created May 4); next 7d count likely 9.
- Watchlist items: **89** (unchanged in 24h — jmoriarty13 added zero items, joining the empty-watchlist cohort)
- Past-dated watchlist items: **40 of 89 (44.9%)** — Toronto FC transitioned to past overnight as forecast. Tomorrow morning unchanged unless joshdguillemette's AEW (May 24) is the next, which is 14 days out → no further past-dating in the 7-day forward window. The next aging events are Inter Miami v Portland and Bruno Mars Soldier Field (all May 17, 7 days out).
- Favorites: 0
- Active alerts: 0

**Empty-watchlist cohort: 28 of 74 users (37.8%).** This is the single most material correction to yesterday's report. The pendingUsers endpoint surfaced 4 visibly empty users (jfgalzin, kevinkid94, emmacmather, natalie.sotocruz); cross-referencing the full watchlist against the full user count reveals 28 such users — including registered-but-never-engaged accounts going back to platform launch. Yesterday's "4-user cohort" framing was a visibility artifact of the pendingUsers cap, not an actual count. **Pattern B is the modal experience for new users on TicketScan.**

User signup pace: 10 in current week is the highest 7-day rolling count of the entire reporting window. **The acquisition flywheel acquired one more user; the email funnel still catches none of it.**

---

## Pattern C Realized — liambot62 / Toronto FC

The May 8 hypothesis ("Pattern C will produce its second confirmed loss tomorrow") is now historical record:

| User | Lead time | Event | Outcome |
|------|-----------|-------|---------|
| sparkitrightthere | same-day (May 7) | Mac DeMarco | event passed silently May 7 |
| **liambot62** | **<24h (May 8 → May 9)** | **Toronto FC v Inter Miami CF** | **event passed silently May 9** |

**Two confirmed Pattern C losses in 9 most-recent signups (22%).** The architectural fix from May 8 P0 #2 is now retroactive (already cost two users) and prospective (will cost the next imminent-event signup unless shipped). Tier C1 post-event recovery template fires first thing tomorrow morning *if* SMTP returns; otherwise liambot62 joins sparkitrightthere as a permanent cumulative loss with no recovery path.

---

## Conversion Losses — Cumulative Update

Two new entries today (one Pattern A, one Pattern C):

| User | Days on platform (today) | Items lost | Pattern |
|------|--------------------------|------------|---------|
| tate.sheppard | 57 | 1 (Florence) | A — single high-intent |
| ajvanprooyen | 17 | 6 of 6 (full Cubs cluster) | A+ — multi-event cluster |
| goldy.pec.2012 | 30 | 1 (Bilmuri Madison) | A — single high-intent, near-event |
| 2510soccerboy | (Apr 25 event, 15 days post) | 1 (Viva El Jaripeo) | A — recovery survey 13 days overdue |
| sparkitrightthere | 2 | 1 (Mac DeMarco) | **C — same-day signup** |
| **liambot62** | **2** | **1 (Toronto FC v Inter Miami)** | **C — <24h signup** |

**Cumulative tally: 6 users / 11 events lost.** Pattern C is now a confirmed structural class with multiple instances; Pattern A remains the largest by event count (8 of 11) but Pattern C is the highest signup-conversion-rate failure (2 of 9 most-recent signups = 22%).

---

## Empty-Watchlist Cohort — Full Cohort View (NEW)

Yesterday's report tracked only the 4 users visibly in pendingUsers. The full cohort (28 users) breaks down by tenure as follows:

| Tenure bucket | Count | Send shape |
|---------------|-------|-----------|
| 0-2d (this week) | 5 (jmoriarty13, jfgalzin, kevinkid94, emmacmather, natalie.sotocruz) | "What should we track for you?" welcome — pre-E1 |
| 3-7d | ~2 (joseph.g.nicolosi 5d, jadbennis0 has watchlist) | Same welcome shape, slightly later |
| 7-14d | ~3 (zhili1208 11d, lilianamasyrubi 12d, others) | Pattern B-at-E2: "still figuring out what to track?" |
| 14-30d | ~8 (mark.murdock, awwhittington, ggri73, dr.altvater + others) | Pattern B-at-E3: trending events template |
| 30+d | ~10 (long-tail registered-then-bounced) | Re-engagement campaign or sunset |

**The 30+d bucket is the most surprising slice.** ~10 users who registered, never added a watchlist item, and have been silent for 30+ days. They're not in pendingUsers (the endpoint filters on something — possibly E5 completion or last-email-sent) so they were invisible in every prior report. **Recommendation:** add an `/api/admin/users/dormant` or extend `/drip-stats` filtering to surface this cohort explicitly. Single re-engagement send is the appropriate shape — "still hunting for tickets? Here are 3 trending events" — fired once, then sunset on no response.

---

## Watchlist Digest Prep

### TIER 0 — Last-Realistic-Intercept (within 7 days)

| Event | Date | Days Out | User | Tenure | Drip Stage |
|-------|------|----------|------|--------|-----------|
| Bruno Mars — Soldier Field night 1 | May 16 | **6** | konman87 | 97d | post-E5 graveyard |
| Bruno Mars — Soldier Field night 2 | May 17 | **7** | konman87 | 97d | post-E5 graveyard |
| Inter Miami vs Portland Timbers | May 17 | **7** | jadbennis0 | 5d | E1 (crossed silent May 8) |

**konman87 / Soldier Field nights 1+2 — 6 and 7 days out.** Yesterday's framing ("tail of the cheapest 72 hours") is now arithmetically inside the window: 6 days out for night 1 means the deepest-discount window is right now through the weekend. The May 6 forecast aligns to the day. **Single highest-ROI tactical send in the entire system today.** Subject line still earns a one-word adjustment from yesterday — see below.

**jadbennis0 / Inter Miami v Portland — 7 days out.** Has crossed E1 silently 2 days ago. The hybrid welcome+urgency template from yesterday upgrades from "8 days out" to "7 days out" — now inside the Tier 0 window. The 5-day tenure makes this the canonical E1 shape *plus* a Tier 0 urgency wrapper.

### TIER 1 — Mid-Window (8-21 days)

| Event | Date | Days Out | User | Tenure | Drip Stage |
|-------|------|----------|------|--------|-----------|
| Bruno Mars — Ohio Stadium | May 20 | 10 | charlesteel126 | 18d | E3 (crossed May 6 silent) |
| AEW Double or Nothing | May 24 | 14 | joshdguillemette | 21d | E3 (crossed May 3 silent) |

### TIER 1 send drafts (right-shape today)

**konman87 — Bruno Mars Soldier Field nights 1+2 (combined send, peak of deepest-discount window)**
- Subject A: `Bruno Mars at Soldier Field — 6 days out, deepest-discount window is right now`
- Subject B: `Soldier Field night 1 in 6 days: weekend pricing is the cheapest you'll see`
- Recommend A. The May 8 framing ("cheapest 72 hours") and May 9 framing ("tail of") were both temporally close; today's "right now" is the precise truth and the most action-forward subject we've drafted in the konman87 thread. Carry the apology P.S.
- CTA: `Compare Both Nights Side by Side` → deep-link to `/compare?event_ids=20,21` (97-day silence justifies deep-link).

**jadbennis0 — Inter Miami v Portland (E1 + Tier 0 hybrid, 7 days out)**
- Subject A: `Welcome — your Inter Miami match is 7 days out, here's the read`
- Subject B: `7 days to Inter Miami: target-price recommendation inside`
- Recommend B today (was A yesterday). Rationale: at 7 days out the urgency cue earns the higher line in the subject than the welcome cue; the welcome line lives in the body open instead. **A/B test recommended if volume allows** — this user has crossed into a different tier than yesterday and the optimal subject shape may have flipped with it.
- CTA: `Set Your Target Price` (the 89/89 null-target problem makes this CTA universal).

**charlesteel126 — Bruno Mars Ohio Stadium (E3 catch-up, day 5 silent past trigger)**
- Subject A: `Bruno Mars at Ohio Stadium — 10 days out and pricing is cutting now`
- Subject B: `Ohio Stadium / Bruno Mars: data says the floor opens this week`
- Recommend A. Time anchor moves from "11 days" to "10 days" — same template, slightly tighter.

**joshdguillemette — AEW Double or Nothing (E3 catch-up, day 7 silent past trigger; also crosses E4 today)**
- **Today this user crosses E4 (21d).** Send shape escalates from E3-catch-up to E3+E4-combined catch-up. One send carries the apology weight of two missed canonical sends.
- Subject A: `AEW Double or Nothing — 14 days out, here's the floor curve and why we've been quiet`
- Subject B: `2 emails missed and a wrestling pricing read: 14 days to Double or Nothing`
- Recommend A. The data-anchor still leads; the apology lives in the second clause.

### TIER 2 — Long-Lead Canonical (E3-fit, 30+ day events)

| Event | Date | Days Out | User | Tenure | Drip Stage |
|-------|------|----------|------|--------|-----------|
| Bruno Mars MetLife ×3 | Aug 21/22/25 | 103-107 | taranimeramaro | 15d | E3 (crossed yesterday silent) |
| **Noah Kahan — Kia Center** | **Jun 12** | **33** | **cjthomas2557** | **2-3d** | **E1 crosses today/tonight** |
| World Cup Lincoln Financial ×4 | Jun 14 - Jul 4 | 35-55 | pete.uzelac77 | 30d | E4 (invisible — silent) |

**cjthomas2557 — Noah Kahan / Kia Center (E1 crosses today, perfect canonical fit)**
- This is the strongest pure-canonical E1 send the system has had since the outage began. 33-day lead, single high-intent watchlist item, fresh tenure, no apology debt.
- Subject A: `Welcome to TicketScan — your Noah Kahan show is 33 days out`
- Subject B: `33 days to Noah Kahan / Kia Center: here's the price curve to watch`
- Recommend A. The welcome line earns priority on a fresh 3-day tenure with no missed sends. **No apology block needed** — this is the cleanest test case for the canonical Day-3 template the system has.
- CTA: `Set Your Target Price`.

**taranimeramaro — Bruno Mars MetLife ×3 (E3, perfect 3-event clustered fit)**
- Send shape unchanged from yesterday. Subject A still: `3 Bruno Mars dates at MetLife — here's how stadium-tour pricing compresses across same-week shows`. Strongest data-density signal in the queue.

### TIER 3 — Pattern B / Empty-Watchlist Variants (cohort = 28)

The send shape splits by tenure (per cohort table above). Today's draft templates by bucket:

- **0-2d (jmoriarty13 + 4 others):** Welcome + "what should we track for you?" → 3 trending events CTA. Pre-E1 send within 24h of registration is the right cadence (not Day 3 — same architectural argument as Pattern C).
- **7-14d (zhili1208, lilianamasyrubi):** Pattern B-at-E2 — `Still figuring out what to track? Here are the 3 events trending on TicketScan this week.`
- **14-30d (mark.murdock, awwhittington, ggri73, dr.altvater):** Pattern B-at-E3 — `Two weeks in, still hunting? Here are this week's biggest price drops.` Apology-lite shape; lead with value, not apology.
- **30+d (~10 invisible-cohort users):** Single re-engagement send + sunset path. Different template; goes to Agent 7 for ROI scoring before drafting.

### TIER 4 — Apology / Catch-Up (>21d silent backlog, mostly invisible via API cap)

- **blubberboi** — crosses E5 tonight (May 10) with all 5 prior emails skipped. **First user to traverse the entire drip schedule with zero emails delivered.** Shape: "we owe you 5 emails — here's the one that actually matters" + Ed Sheeran SoFi data card (Aug 8, 90 days out — Tier 2 fit). **This is the apology test case for the entire backlog catch-up plan when SMTP returns.**
- **goldy.pec.2012** — likely also crosses E5 today. Single past-event watchlist (Bilmuri May 2). Pure-apology shape; no tactical content to bracket.
- **nicklib253** — E4 silent since May 8. Pattern A on past Phillies-Braves event. Apology-only.
- **bhaygood728** — E5 silent since May 3 (now 37d). Cardi B (past). Apology-only.
- **laye.aurelien** — E5 silent since May 2 (now 38d). Shakira ×2 (Jul 20-23, **70-73 days out — Tier 2 fit**). **Highest-value graveyard recovery in the cohort.** Long-lead Shakira tickets are still tactically actionable; the apology can be bracketed by real data.
- **dr.altvater, mark.murdock, awwhittington, ggri73** — all in 17-20d range, all empty-watchlist. Move to TIER 3 14-30d Pattern B template.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **konman87 / Soldier Field nights 1+2** | `Bruno Mars at Soldier Field — 6 days out, deepest-discount window is right now` | `Soldier Field night 1 in 6 days: weekend pricing is the cheapest you'll see` | A |
| **jadbennis0 / Inter Miami E1+Tier0 hybrid** | `Welcome — your Inter Miami match is 7 days out, here's the read` | `7 days to Inter Miami: target-price recommendation inside` | **B** *(flip from yesterday)* |
| **cjthomas2557 / Noah Kahan E1 (canonical)** | `Welcome to TicketScan — your Noah Kahan show is 33 days out` | `33 days to Noah Kahan / Kia Center: here's the price curve to watch` | A |
| charlesteel126 / Bruno Mars Columbus E3 | `Bruno Mars at Ohio Stadium — 10 days out and pricing is cutting now` | `Ohio Stadium / Bruno Mars: data says the floor opens this week` | A |
| **joshdguillemette / AEW E3+E4 combined** | `AEW Double or Nothing — 14 days out, here's the floor curve and why we've been quiet` | `2 emails missed and a wrestling pricing read: 14 days to Double or Nothing` | A |
| taranimeramaro / Bruno Mars MetLife ×3 E3 | `3 Bruno Mars dates at MetLife — here's how stadium-tour pricing compresses across same-week shows` | `MetLife ×3: which night usually has the cheapest seats?` | A |
| Pattern B-at-E2 (zhili1208, lilianamasyrubi) | `Still figuring out what to track? Here are the 3 events trending on TicketScan this week.` | `7+ days in, 0 events tracked — would these help?` | A |
| **Pattern B-at-E3 (NEW: mark.murdock + 3 others)** | `Two weeks in, still hunting? Here are this week's biggest price drops.` | `It's been 2 weeks — here are 3 events worth tracking right now` | A |
| Empty-watchlist welcome (jmoriarty13 + 4) | `Welcome to TicketScan — what should we track for you?` | `Welcome — 89 events being tracked across our community right now` | A |
| **Pattern C1 post-event recovery (liambot62 today)** | `Your Toronto FC match was last night — here's what we'd do next` | `We failed you yesterday — here's how to make it right` | A |
| **Catch-up apology blubberboi (E5 full-traversal)** | `We owe you 5 emails — here's the one that actually matters (Ed Sheeran SoFi)` | `Ed Sheeran is 90 days away. We've been quiet for 30. Catching you up now.` | **A** *(NEW shape — earns the bluntness)* |
| Catch-up apology generic (nicklib253, bhaygood) | `We've been quiet for [X] weeks — here's what you missed ([event])` | `[Event] is [Y] days away — and we owe you a catch-up` | A |
| **laye.aurelien Shakira E5 graveyard** | `Shakira at MetLife — 70 days out and we owe you a real catch-up` | `2 Shakira dates, 70 days, and 30 silent days from us — here's the read` | A |

**CTA conformance:** 9 of 13 use top-level routes; 4 of 13 use event-specific deep-links (justified by >14d silence or multi-event clusters). Conformance stable.

---

## Action Items

### P0 — Critical (Day 34 of outage)

1. **SMTP/drip pipeline — Day 34.** Probe identical to Days 11-33. The fix is not on this side of the report stream. Same fix sequence: regenerate Gmail app password → audit handler → verify Railway port 587 egress → wrap in `Promise.allSettled` → re-test with `?limit=1&dryRun=true`. **Day 34 escalation framing: blubberboi traverses the full drip schedule silent tonight. The cost of inaction is now expressible as a complete user-lifecycle failure, not just a partial one.**
2. **Pattern C real-time triage path** (carryover from May 8 P0 #2; **third day of evidence — second confirmed loss recorded today**). Three sub-paths defined yesterday (C1 post-event recovery, C2 24h-7d tactical, C3 canonical). Highest-leverage architectural fix that doesn't depend on SMTP restoration.
3. **Empty-watchlist cohort (28 users / 37.8% of user base)** — same architectural class as Pattern C: the canonical drip schedule cannot serve users whose watchlist is empty, because all canonical templates anchor to a tracked event. **NEW P0:** ship an empty-watchlist welcome send (pre-E1, fires within 24h of registration) and a Pattern B-at-E2/E3 trending-events send. Templates drafted above; need API endpoint `/api/admin/empty-watchlist-users` to drive them.
4. **Front-of-queue tactical sends when SMTP returns (ROI-ranked):**
   1. **konman87** — 6 days to night 1, peak of deepest-discount window. Still highest-ROI.
   2. **cjthomas2557** — fresh canonical E1 fit, 33-day Noah Kahan lead, no apology debt. **Cleanest test case.**
   3. **jadbennis0** — Tier 0 hybrid, 7 days to Inter Miami.
   4. **taranimeramaro** — 3-event Bruno Mars MetLife cluster, strongest E3.
   5. **charlesteel126** — 10 days to Bruno Mars Columbus.
   6. **blubberboi** — apology test case for the catch-up plan.
5. **`drip-health` endpoint** still not built (now P0 since May 7). Specification unchanged: `GET /api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt, pendingCount}`.

### P1 — High

6. **API cap is now structurally hiding the deepest backlog (Day 4 of regression).** ~8 users hidden today (was 7 yesterday, 3 the day before). Trajectory continues unless pagination ships.
7. **Past-event watchlist auto-archive (40/89 = 44.9%, +1 from yesterday — Toronto FC).** Same fix as May 1 / Apr 29-30. The 30+d empty-watchlist cohort discovery makes this more material — auto-archive plus a "would you like to track something new?" prompt at archive-time is a single-flow re-engagement opportunity.
8. **Target-price UX (Day 103, 89/89 null).** Auto-suggest at 10% below current min on watchlist-add.
9. **Velocity correlation (Day 4 unaddressed).** 10 signups in 7 days vs. ~2-3/week baseline. Today's deceleration to 1/day doesn't change the cumulative anomaly. Cross-check with Agents 2/3/6 about ad spend / content / SEO drivers behind the May 7-8-9 cluster. **Timing matters:** if jmoriarty13's source can be attributed, we have a 4-day window of high-quality attribution data on a clean signup-pace shape (1 today, 4 May 8, 3 May 7).
10. **Newsletter cross-pollination (Day 5 of zero-capture).** 19 user-account signups in 23 days, 0 newsletter signups. Post-registration default-opt-in checkbox.
11. **Backlog catch-up plan when SMTP returns:** apology email first (parameterized template), then E1 at +48h, then resume cadence. **Today's queue head:** blubberboi (E5 tonight, full-traversal apology), goldy.pec (likely E5 today), nicklib253 (E4 silent), bhaygood/laye (E5 long-silent). **Laye Shakira is the highest-leverage graveyard recovery — 70 days out, real tactical content available.**

### P2 — Medium

12. **Watchlist-digest endpoint still doesn't exist.** Day 34+ blocker. Per-user digest content above can't ship without it.
13. **Save the templates from May 8-10 into `marketing-agents/output/email/templates/`** once SMTP returns: empty-watchlist welcome, post-event recovery (Pattern C1), Pattern B-at-E2, Pattern B-at-E3 (NEW today), full-traversal apology (NEW today, blubberboi shape).
14. **Viva El Jaripeo post-mortem — 13 days overdue.** Continued open content debt. No daily-scope effect.

---

## Handoff → Analytics Agent (Agent 7)

- **Subscriber total:** 3 active, 0 net change in 24h. **98 consecutive days flat.**
- **User signups (24h):** **1** (jmoriarty13). 10 in 7 days (highest 7-day window in reporting history; will likely tick down to 9 tomorrow when joseph.g.nicolosi rolls out).
- **New watchlist items (24h):** **0.** jmoriarty13 added zero items, joining the 28-user empty-watchlist cohort. **First reporting day with a new signup but no watchlist item add since Apr 23.**
- **Drip pipeline:** UN-SHIPPED. Day 34 of outage. **0 sends ever.** 74 of 74 users have never received a drip email. Backlog: 20 visible + ~8 hidden + ~10 dormant 30+d empty-watchlist users ≈ **38+ user backlog**.
- **Threshold advances since May 9 (3 + 1 historic):** sparkitrightthere → E1 (today 11:38 UTC, Pattern A on past Mac DeMarco); cjthomas2557 → E1 (today/tomorrow 22:49 UTC, canonical fit); **blubberboi → E5 (TONIGHT 23:58 UTC, FIRST FULL-TRAVERSAL SILENT SEND); goldy.pec → E5 likely today (apology-only).**
- **Price alerts:** 0 ever triggered. **89/89 watchlist items have null target_price.** Day 103.
- **User growth:** +1 in 24h, **74 total**. +10 this week (peak rolling-7d in reporting history).
- **Watchlist:** 89 items (unchanged in 24h). 3 events within 7 days (Bruno Mars Soldier Field nights 1+2 May 16-17, Inter Miami v Portland May 17). 2 events in 8-21 day window (charlesteel126 / joshdguillemette).
- **Past-event pollution:** 40/89 (44.9%), +1 in 24h (Toronto FC). Next aging events all May 17 (3 events) → next jump in 7 days.
- **Pattern C cumulative loss recorded today:** liambot62 / Toronto FC. Cumulative tally: **6 users / 11 events. Pattern C now has 2 of 6 users (33%) and 2 of 11 events (18%).**
- **Empty-watchlist cohort discovered today:** **28 of 74 users (37.8%)** — yesterday's report tracked 4. The visibility correction is the most material data shift in this report. **The 30+d slice (~10 users, invisible to pendingUsers endpoint) is a re-engagement-or-sunset cohort that has never been touched.**
- **Velocity:** decelerated from 4/day to 1/day. Cumulative 7d window (10) still elevated. **Channel attribution on the May 7-8-9 cluster remains the open analytics question.**
- **Email channel status:** Day 34. Reclassified from "broken" to "un-shipped" since Apr 20. **First full-traversal silent send happens tonight.**
- **Most useful single observation today:** the empty-watchlist cohort at 37.8% of users redefines the email-system mandate. The canonical drip is built around tracked events; **for ~38% of the user base, the canonical drip cannot fire even after SMTP is restored.** The architectural priority shifts: SMTP fix is necessary but no longer sufficient. The system needs three send shapes the canonical drip doesn't cover (Pattern B at multiple tenures, Pattern C real-time, full-traversal apology) before it can serve the actual user base.
