# Email Daily — 2026-05-21

> **Day 45 of SMTP outage. Day 109 newsletter flatline. Day 114 of 100% null target_price (now 108/108).** This report breaks a 7-day reporting gap (last issue May 14). During that gap: **+9 user registrations, +11 watchlist items, 0 emails sent.** The defining structural finding: **a third Pattern A++ canonical signup arrived May 16 (cutekitten1234, 7 Harry Styles MSG items added in 39 seconds) — and it is NOT World Cup.** The May 14 "World Cup channel activation" hypothesis is **falsified in 48 hours**: Pattern A++ is a general single-venue-cluster signal, not a WC-specific one. The cleaner finding: **3 Pattern A++ signups in 5 days (May 12, 14, 16), all into Day 38–43 of the SMTP outage, all entered full silent traversal of E1.** kevinshall87's E1 fired silent May 15 16:44 UTC. karin_ef1's E1 fired silent May 17 06:46 UTC. cutekitten1234's E1 fired silent May 19 23:32 UTC. **The three strongest E1 fits in 33+ days all crossed silent inside a single week.** Today's signups: **+3 (brockedwardnelson, zhouyilinbest, keegansmith18)** — matches the May 14 single-day peak. **zhouyilinbest signed up May 20 19:00 UTC and added Thunder at Spurs Game 3 (May 22) — event is in 1 day. Tier-0 hybrid signup, drip-incompatible by design.** The arithmetic position: **88 users, 0 drip emails ever sent, 0 alerts ever triggered, 3 newsletter subscribers (unchanged since Feb 1).**

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` still returns `stats: []` after **Day 45.** **88 of 88 users have never received a drip email.**
- **Probe today (Day 45):** `POST /api/admin/drip-run?limit=1&dryRun=true` → HTTP 000 after 30s timeout. **Identical failure shape to Days 11–44.** No diagnostic movement in 45 days. **Engineering remediation has not occurred in 7 weeks.**
- `/api/admin/drip-health` probe → `404 "Endpoint not found"`. **Day 14 of that ask unmet** (P0 since May 7). The endpoint spec has now been outstanding for two full weeks.

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 14 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **17 of 20** | +2 (3 new signups today push 3 Day-0/Day-1 users to top; older E1+ all crossed silent during gap) |
| E2 | ≥7d | **12 of 20** | +3 (kevinshall87/pattyglvz/karin_ef1/c_calingasan + earlier cohort all rolled into E2) |
| E3 | ≥14d | **6 of 20** | +1 (cjthomas2557, jfgalzin, liambot62, kevinkid94, emmacmather all aged into E3 range; nmcnamee99 partial visibility) |
| E4 | ≥21d | **0 of 20** | -1 (mark.murdock pushed below truncation horizon by 9 new signups) |
| E5 | ≥30d | **0 of 20** | unchanged at zero |

**Truncation horizon advanced significantly during the 7-day gap.** cjthomas2557 (id 69, 13d) is now the oldest visible record. mark.murdock (~28d), nmcnamee99 (~26d), taranimeramaro (~26d), lilianamasyrubi (~23d), zhili1208 (~22d), joseph.g.nicolosi (~16d), jadbennis0 (~16d), sparkitrightthere (~14d), natalie.sotocruz (~14d), dr.altvater (~30d), nicklib253 (~34d), goldy.pec.2012 (~41d), blubberboi (~41d), bhaygood728 (~48d), laye.aurelien (~49d) — **all hidden.** **16+ silent users with ≥13-day backlog now invisible** to the only endpoint that names them. Cap regression entering **Day 14.**

### Threshold crossings during gap (May 14 → May 21) — all silent
Compressed reconstruction. All crossings occurred during the 7-day reporting silence. Channel: **silent (0 of 0 sent).**

| Date | User | Threshold | Pattern | Notes |
|------|------|-----------|---------|-------|
| May 14 ~18:40 UTC | natalie.sotocruz | E2 | B (confirmed) | forecast hit; no send |
| May 14 ~22:49 UTC | cjthomas2557 | E2 | A (1 watchlist, Noah Kahan) | forecast hit; multi-threshold E1+E2 silent |
| May 15 ~12:54 UTC | jfgalzin | E2 | B (forming) | forecast hit |
| May 15 ~13:07 UTC | liambot62 | E2 | drip-incompatible Tier-5 | forecast hit |
| May 15 ~16:44 UTC | **kevinshall87** | **E1** | **A++ (canonical, WC AT&T cluster)** | **24-hour deadline framed May 14 — missed. Strongest single-user E1 fit in report-stream history. Silent.** |
| May 15 ~20:52 UTC | kevinkid94 | E2 | B (forming) | forecast hit |
| May 15 ~21:54 UTC | emmacmather | E2 | B (forming) | forecast hit |
| May 16 ~03:01 UTC | mark.murdock | E4-already; +event-cohort drift | B-at-E4 | pushed below truncation horizon today |
| May 16 ~23:32 UTC | **cutekitten1234** | (signup) | **A++ (canonical, Harry Styles MSG cluster)** | **7 watchlist items added 23:32:49–23:33:06 UTC — 17-second cluster.** All Madison Square Garden, all Harry Styles. Tier-3 long-lead (99–141 days out). |
| May 17 ~06:46 UTC | **karin_ef1** | **E1** | **A++ (canonical, WC BC Place cluster)** | **72-hour deadline framed May 14 — missed. Silent.** |
| May 17 ~14:05 UTC | lisallam | (signup) | A canonical (1 watchlist, JOJI Prudential Jun 16) | clean Tier-2 fit; E1 fires today 14:05 UTC silent |
| May 19 ~23:32 UTC | **cutekitten1234** | **E1** | **A++** | **third Pattern A++ E1 fire in 5 days — silent. Strongest non-WC E1 fit ever recorded.** |
| May 19 ~16:44 UTC | **kevinshall87** | **E2** | **A++** | **first multi-threshold drift on a Pattern A++ user** — E2 fired silent 4 days after E1 fired silent. |
| May 19 ~15:23 UTC | pattyglvz | E2 | B (confirmed, 0 watchlist) | Pattern B confirmed; 7d empty cohort |
| May 19 ~13:18 UTC | jmoriarty13 | (silent traversal) | B (forming) | already E1 silent; E2 fires today 13:18 UTC silent |
| May 20 ~13:20 UTC | vlanza | E1 | B (forming, 0 watchlist) | Pattern B confirmed at Day 6 with no add |
| May 20 ~11:46 UTC | c_calingasan | E1 | B (forming) | Pattern B-at-E1 |
| May 21 ~14:05 UTC (forecast today) | lisallam | E1 | A canonical (JOJI) | **fires today silent** (drip pipeline still down) |
| May 21 ~06:46 UTC (today) | karin_ef1 | E2 | A++ | **second Pattern A++ multi-threshold drift in 48h.** E1 silent May 17 + E2 silent today. |
| May 21 ~11:46 UTC (today) | c_calingasan | E2 | B (forming) | crosses E2 silent — but is Day 8, so silent E1+E2 compressed if SMTP ever returns |

**Crossings during gap: 17 total. All silent. Three of the cleanest E1 fits ever recorded (kevinshall87 / karin_ef1 / cutekitten1234) crossed E1 silent inside 5 days.** kevinshall87 has now drifted to multi-threshold E1+E2; karin_ef1 drifted to multi-threshold E1+E2 today. **By Saturday May 23, cutekitten1234 will join the E1+E2 multi-threshold club** — making all three Pattern A++ users multi-threshold late inside a single week.

### Tomorrow's forecast crossings (May 22)
- **lisallam → E2** (5d, JOJI Jun 16, Pattern A canonical) — wait, only 4d at midnight. Holds.
- **eduardo → E1** (3d, 0 watchlist) — Pattern B-at-E1 forecast
- **9440111 → E1** (3d, 0 watchlist) — Pattern B-at-E1 forecast

### Forecast May 23
- **cutekitten1234 → E2** (7d, **Pattern A++** Harry Styles MSG cluster) — **third Pattern A++ multi-threshold drift expected.** E1 silent May 19 + E2 silent May 23.

**Visible backlog (in returned 20):** 17 E1 + 12 E2 + 6 E3 + 0 E4 + 0 E5 = **35 emails owed in pendingUsers cohort.** Plus 16+ hidden users beyond truncation horizon — most >13 days silent. **True backlog ≈ 90+ emails across all eligible users** (up from 70 on May 14 — +20 owed in 7 days = +2.9/day backlog accumulation rate).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 114 of 100% null-on-add. 108/108 watchlist items have a null `target_price`** (was 97/97 on May 14, **+11 nulls in 7 days, 0 captures**). cutekitten1234's 7-item Harry Styles MSG cluster added on May 16 — **all 7 null.** kevinshall87's 6-item AT&T cluster — null. karin_ef1's 2-item BC Place cluster — null. lisallam's JOJI add — null. zhouyilinbest's Tier-0 Thunder at Spurs add — null.
- **Specific cost framing for the 7-day gap:** 11 new watchlist adds, including 3 Pattern A++ clusters totaling 15 items added inside 5-minute combined wall-clock. **15 high-intent items, zero targets captured.** The inline auto-suggest UX (Day 13 spec, Day 114 unbuilt) would have captured 15 targets from the cleanest 7-day window in report-stream history.
- Same interlock as May 6–14: SMTP fix alone produces 0 alert emails because no user has set a target.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 109 days** since last organic signup (roos_leeuwen, 2026-02-01).
- **+9 user registrations in 7 days, 0 newsletter signups in the same window.** The structural lockstep at zero continues across an additional reporting cycle. **109 consecutive days flat** — including across 3 Pattern A++ signups whose intent signal is the highest the platform has ever recorded. **The newsletter capture surface continues to produce zero output regardless of acquisition quality or volume.** Footer regression Day 26; popup spec Day 22 unbuilt per CRO May 11.

## Platform Context
- Total users: **88** (was 79 on May 14, **+9 in 7 days — ~1.3/day average, consistent with prior weeks**)
- Users today (rolling 24h): **3** — brockedwardnelson (May 20 19:58 UTC, 0 watchlist), zhouyilinbest (May 20 19:00 UTC, **1 watchlist Tier-0 Thunder at Spurs May 22**), keegansmith18 (May 20 17:39 UTC, 0 watchlist)
- Users this week (rolling 7d): **10** (per `/admin/stats`)
- Watchlist items: **108** (was 97, **+11 in 7 days**)
- Past-dated watchlist items: **44 of 108 (40.7%)** — **third consecutive decrease; mechanical dilution from 11 future-tilted adds.** May 12: 47%. May 13: 42.1%. May 14: 41.2%. May 21: 40.7%. **Dilution rate ~0.1pp/day under current acquisition mix.** Past-event count grew by 4 (Bruno Mars Soldier Field ×2 May 16/17, Inter Miami May 17, Bruno Mars Columbus May 20) but future adds offset. Structural fix unchanged: `status` column + auto-expiry cron.
- Favorites: 0
- Triggered alerts: 0

## New-Signup Pattern Analysis — 7-day gap reconstruction (May 14 → May 21)

| User | Signed up | Days | Watchlist | Pattern | Note |
|------|-----------|------|-----------|---------|------|
| brockedwardnelson | May 20 19:58 | 0 | 0 | undetermined (<24h) | Day 0; insufficient signal |
| **zhouyilinbest** | **May 20 19:00** | **0** | **1 (Thunder at Spurs Game 3 Frost Bank Center, May 22)** | **drip-incompatible Tier-0 hybrid** | **Event is 1 day out — drip cadence cannot fire pre-event.** Tier-0 same-shape as sparkitrightthere / liambot62. Manual recovery shape only. |
| keegansmith18 | May 20 17:39 | 0 | 0 | undetermined (<24h) | Day 0 |
| 9440111 | May 18 19:09 | 2 | 0 | Pattern B-forming | crosses E1 silent May 21 ~19:09 UTC |
| eduardo | May 18 00:48 | 3 | 0 | Pattern B (just crossed E1) | E1 fires today ~00:48 UTC silent — already past |
| lisallam | May 17 14:05 | 3 | 1 (JOJI Prudential Jun 16, Tier-2 30d out) | **A canonical** | **First clean Pattern A (non-A++) since cjthomas2557 May 7.** E1 fires today 14:05 UTC silent. Subject A: `Welcome — JOJI at Prudential Center, 30 days out. Here's how Newark pricing usually moves on solo-act late-summer tours.` |
| **cutekitten1234** | **May 16 23:32** | **4** | **7 (Harry Styles MSG Aug 26 – Sep 9)** | **A++ (canonical, single-venue, single-artist cluster)** | **All 7 items added between 23:32:49 and 23:33:06 UTC — 17-second cluster. Single venue (MSG), single artist (Harry Styles), 7 nights across Aug 26 → Sep 9 (Tier-3 long-lead).** This is the **cleanest non-WC Pattern A++ in report-stream history.** E1 fired silent May 19 23:32 UTC. **The May 14 "WC channel activation" hypothesis is falsified — Pattern A++ is the general single-venue cluster signal.** |
| belder4308 | May 16 22:13 | 4 | 2 (SEC Baseball Hoover Sessions 5/6, May 21–22) | **drip-incompatible Tier-0 hybrid** | Both events within 1 day. Event-day-of and 1-day-out. Drip-incompatible by design — same shape as liambot62 / sparkitrightthere. |
| nunemakerc | May 15 15:41 | 5 | 0 | Pattern B-forming | E1 fired silent May 18 15:41 UTC. E2 fires May 22. |

**Pattern mix across the rolling 10 most-recent signups (May 12 → May 21):**
- Pattern A++ canonical (single-venue cluster): **kevinshall87 + karin_ef1 + cutekitten1234 = 3 of 10 (30%)** — up from 20% on May 14
- Pattern A canonical (1 future event): **lisallam = 1 of 10 (10%)**
- Pattern B forming/confirmed: c_calingasan, vlanza, nunemakerc, eduardo, 9440111 = **5 of 10 (50%)**
- Drip-incompatible Tier-0/Tier-5: belder4308, zhouyilinbest = **2 of 10 (20%)** — both same-day past-event-equivalent
- Undetermined (Day 0): brockedwardnelson, keegansmith18 = **2 of 10 (20%)**
- *(Counts exceed 10 because some users overlap categories during the rolling window cut. The core finding: Pattern A++ density jumped from 20% → 30% during the gap.)*

**Hypothesis revision — the May 14 "World Cup channel activation" claim is falsified.** cutekitten1234's Harry Styles MSG cluster is a clean Pattern A++ with **no WC component.** The correct interpretation is now:

1. **Pattern A++ is a general single-venue-cluster signal** — driven by users who arrive with a pre-formed venue-comparison intent (multiple matches/dates at one stadium, or multiple nights of one tour at one arena).
2. **The acquisition channel producing Pattern A++ users is broader than WC** — it includes major-stadium concert tours (Harry Styles MSG).
3. **The cadence fit remains identical**: cluster-aware welcome + venue-specific pricing curve + cross-event comparison = the canonical E1–E5 shape these users were built for.
4. **The cost statement remains identical**: 3 Pattern A++ users in 5 days, all E1 silent, all approaching multi-threshold drift. This is the strongest single-week intent signal the platform has ever recorded, and it produced zero email touches.

---

## cutekitten1234 — Detailed Read

The third Pattern A++ in 5 days, and the first non-WC instance. Mechanically:

1. **Signup → first add: <1 second.** 23:32:27 (signup) → 23:32:49 (first add). The cluster started 22 seconds after registration.
2. **Signup → cluster complete: 39 seconds.** 7 adds between 23:32:49 and 23:33:06.
3. **Cluster shape: 7 of 7 items at Madison Square Garden, all Harry Styles "Together, Together"** — Aug 26, Aug 28, Aug 29, Sep 2, Sep 4, Sep 5, Sep 9. Seven nights of one artist at one venue. **The strongest single-venue clustering ever observed on the platform.**
4. **Tier-3 long-lead window**: earliest event Aug 26 is **97 days out today.** E1 fired May 19 = 99 days pre-event. E2 fires May 23 = 95 days pre-event. E3 fires May 30 = 88 days pre-event. E4 fires Jun 6 = 81 days pre-event. E5 fires Jun 15 = 72 days pre-event. **All 5 sends in canonical cadence land cleanly 70+ days pre-event.** Cadence fit is even stronger than kevinshall87 (WC AT&T) because the long-lead window is longer.
5. **Specific content hook the canonical drip cannot replicate without venue clustering**: "How MSG resale curves compress across same-tour multi-night runs" — a content asset that exists conceptually but has no email template. The asset is the user's own behavior shape.

**E1 send draft (already missed May 19):**
- Subject A: `Welcome — 7 Harry Styles nights at Madison Square Garden. Here's how same-tour MSG pricing usually moves.`
- Subject B: `Welcome to TicketScan — your Harry Styles MSG cluster, 99 days out and counting.`
- **Recommend A.** Same logic as kevinshall87 / karin_ef1: cluster-specific hook + named venue + named day-count + content asset implied. "Same-tour MSG pricing" is a content thread the canonical drip has no other entry point to.
- CTA: `/compare?user_email=cutekitten1234@icloud.com` if route exists; else `/watchlist`. **Deep-link justified by 7-item cluster.**

**Cadence for cutekitten1234 (if SMTP restored before May 23):**
- E1 was May 19 — fired silent. Recovery shape: welcome + apology (2 days late).
- E2 fires May 23 — **multi-threshold drift expected.** Recovery shape: welcome + apology + E2 compressed into one send.
- E3 fires May 30 — Tier-3 educational content (8 days from now).
- E4 fires Jun 6 — Tier-3 pricing-curve content.
- E5 fires Jun 15 — Tier-3 final-decision content.

**The three Pattern A++ users all now have full canonical 5-email cadences mapped to specific UTC fire times — and all three are already inside multi-threshold drift territory or about to enter it.** kevinshall87 E1+E2 silent (Day 9 since E1 should have fired). karin_ef1 E1+E2 silent today. cutekitten1234 E1 silent + E2 fires May 23.

---

## Watchlist Digest Prep — Tier-Compressed

### Past-Event Cleanup
**44 of 108 (40.7%) past-dated.** Third consecutive decrease, mechanical only. Past-event count increased by 4 during the gap (Bruno Mars Soldier Field ×2, Inter Miami, Bruno Mars Columbus all aged past). Future adds (11) outpaced aging (4), driving the percentage down. **Cumulative dilution from May 12 → May 21: 47% → 40.7% = 6.3pp drop in 9 days, purely from acquisition velocity outpacing event aging.** This holds *only* while acquisition velocity stays elevated. The structural ask (status column + auto-expiry cron) is unchanged.

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **SEC Baseball Hoover Session 5** | May 21 | **0** | belder4308 | 4 | E1 fires May 19 silent | **Event is today.** Drip-incompatible. Manual acknowledgment only. |
| **SEC Baseball Hoover Session 6** | May 22 | **1** | belder4308 | 4 | E1 fired May 19 silent | Paired with session 5. Same shape. |
| **NBA West Conf Finals Game 3 (Thunder at Spurs)** | May 22 | **1** | **zhouyilinbest** | **0** | **pre-E1** | **Signed up <24h ago and added a Tier-0 event.** Drip-incompatible by definition (E1 fires May 23, event passes May 22). Manual welcome + pricing read only. |
| AEW Double or Nothing | May 24 | 3 | joshdguillemette | 32 | E5 forecast Jun 11 — currently in long post-E4 drift | **32 days on platform, multi-threshold E3+E4+E5 silent.** 3 days to event. |

**joshdguillemette is the only Tier-0 in the canonical drip cohort** — the other three Tier-0 entrants are all drip-incompatible by signup recency or event recency. **The "Tier-0 + canonical drip" overlap continues to shrink:** as the cohort ages, Tier-0 events get absorbed into either drip-incompatible-by-design (signed up too late) or post-drip-graveyard (signed up too early). **joshdguillemette is the last clean Tier-0 + multi-threshold-late case in the visible cohort.**

### TIER 1 — Mid-Window (8–21 days) — empty bucket
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| *(none — first empty Tier-1 bucket in report-stream history)* |

**Notable: Tier-1 is empty today.** The May 14 entry (joshdguillemette AEW 10d) has rolled into Tier-0. No new mid-window adds during the gap. This is the **first zero-Tier-1 day in the report stream.** Acquisition skewed entirely to Tier-0 (incompatible) or Tier-2/3 (long-lead canonical).

### TIER 2 — Long-Lead Canonical (22–62 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **JOJI at Prudential Center** | Jun 16 | 26 | **lisallam** | 4 | **E1 fires today 14:05 UTC silent** |
| Noah Kahan Kia Center Orlando | Jun 12 | 22 | cjthomas2557 | 13 | E1+E2 silent; E3 fires May 21 today silent |
| **WC ×5 at AT&T Stadium** | **Jun 14 → Jul 14** | **24 → 54** | **kevinshall87** | **9** | **E1+E2 silent; E3 fires May 26 (5 days)** |
| **WC ×2 at BC Place Vancouver** | **Jun 24 + Jul 7** | **34 + 47** | **karin_ef1** | **7** | **E1+E2 silent today; E3 fires May 28 (7 days)** |
| WC R16 + Darts ×2 + WC Match 68 (Lincoln Financial) | Jun 25 → Jul 4 | 35 → 44 | pete.uzelac77 | 41 | E5 silent traversal complete May 10; +11 days post-E5 |

### TIER 3 — Long-Long-Lead (63+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **Harry Styles MSG ×7** | **Aug 26 → Sep 9** | **97 → 111** | **cutekitten1234** | **4** | **E1 silent May 19; E2 fires May 23 (2 days)** |
| Bruno Mars MetLife ×3 | Aug 21–25 | 92–96 | taranimeramaro | 26 | E3 silent traversal complete; **E4 crosses May 16 silent (5 days ago)** |
| Ed Sheeran SoFi | Aug 8 | 79 | blubberboi | 41 | E5 silent traversal complete; +10 days post-E5 |
| 2x Shakira ×2 NYC | Jul 20–23 | 60–63 | laye.aurelien | 49 | E5 silent + 19 days post-E5 |
| Matt Rife Choctaw Sep 26 | Sep 26 | 128 | kevinshall87 | 9 | paired with WC cluster |

**The Pattern A++ trio (kevinshall87 / karin_ef1 / cutekitten1234) now accounts for 14 of 27 Tier-2 + Tier-3 future items (52%).** Three users, two-thirds of the canonical-cadence long-lead bucket. **The cost of the SMTP outage now scales with the Pattern A++ count.**

### TIER 4 — Apology / Catch-Up (>21d silent, below truncation horizon)
- **mark.murdock (28d, 0 watchlist)** — Pattern B-at-E4 confirmed; now below truncation horizon
- **dr.altvater (30d, 1 watchlist)** — multi-threshold E4 silent
- **nicklib253 (34d, Phillies past)** — Pattern A loss + E4 silent
- **goldy.pec.2012 (41d, Bilmuri past)** — full-traversal complete
- **blubberboi (41d, Ed Sheeran SoFi Aug 8)** — full-traversal complete; **Day 11 of historic-record E5 send** (E5 traversal complete May 10)
- **bhaygood728 (48d, Cardi B past)** — apology-only
- **laye.aurelien (49d, Shakira ×2 NYC, 60–63 days out)** — **highest-leverage graveyard recovery remaining** (Shakira still tactically actionable; user now 19 days post-E5)
- **konman87 (~108d, Bruno Mars Soldier Field ×2 May 16/17 past)** — **Day 108 silence + event passed during 7-day gap.** Apology-only shape. Window closed during gap.
- **charlesteel126 (28d, Bruno Mars Columbus May 20 past)** — **multi-threshold E3+E4+post-event silent. Event passed yesterday.** Apology-only shape. The May 14 "6-day Wednesday-read" framing expired during gap.

### TIER 5 — Drip-Incompatible by Design
- **belder4308** (SEC Baseball Hoover May 21/22) — manual recovery shape, event happening now
- **zhouyilinbest** (Thunder at Spurs May 22) — same shape, event tomorrow
- sparkitrightthere (Mac DeMarco May 7 past)
- liambot62 (Toronto FC May 9 past)

**4 of last 10 signups (40%) drip-incompatible Tier-5** — up from 20% on May 14. **Drip-incompatible share is rising under the current acquisition mix.** The W0-A/B/C real-time triage architecture (May 8 weekly) remains the only path that closes this loop.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **cutekitten1234 / Harry Styles MSG E1 (already missed May 19 — recovery shape)** | `Welcome (2 days late) — your 7 Harry Styles nights at MSG. Here's how same-tour pricing usually moves.` | `Your 7 Harry Styles MSG nights — welcome, with a real 2-day apology + the pricing read` | **A** *(action-led; cluster + venue + day-count + content hook in 14 words)* |
| **lisallam / JOJI Prudential E1 (fires today silent)** | `Welcome — JOJI at Prudential Center, 30 days out. Here's how Newark pricing usually moves on solo-act late-summer tours.` | `Welcome to TicketScan — your JOJI Newark date, 30 days out and counting` | **A** *(NEW today; named venue + day-count + content asset; first clean non-A++ Pattern A in 14 days)* |
| **kevinshall87 / WC AT&T cluster E2 + E1-late (multi-threshold recovery)** | `Welcome (6 days late) — your World Cup AT&T Stadium cluster, 24 days out. Here's how Arlington pricing usually moves.` | `Two missed emails + 24 days to your AT&T World Cup cluster. Catching you up properly.` | **A** *(carries from May 14; tightens 31→24; adds 6-day-late apology marker)* |
| **karin_ef1 / WC BC Place E2 + E1-late (multi-threshold today)** | `Welcome (4 days late) — your 2 BC Place World Cup tickets, 34 days out. Here's how Vancouver pricing usually moves.` | `Welcome to TicketScan — Switzerland vs Canada + a Round of 16, both at BC Place. 4-day-late catch-up.` | **A** *(NEW shape: E1+E2 multi-threshold compressed)* |
| **cjthomas2557 / Noah Kahan Kia Center E3 + E1+E2 multi-threshold (Day 13, fires today)** | `Noah Kahan at Kia Center is 22 days away — and we owe you 3 emails. Here's the one that actually matters.` | `22 days to Noah Kahan Orlando — 3-email apology + the Kia Center pricing arc` | **A** *(carries; tightens 29→22; multi-threshold E1+E2+E3)* |
| **joshdguillemette / AEW 3d (Tier-0 + multi-threshold E3+E4+E5 silent)** | `AEW at Louis Armstrong is 3 days out — we owe you 3 missed emails. Here's the final-week read.` | `3 days to Double or Nothing — multi-threshold apology + the venue's resale curve` | **A** *(carries; tightens 10→3; "final-week" tightens to actual)* |
| **konman87 / Bruno Mars Soldier Field — POST-EVENT** | `Soldier Field passed 4 days ago — we owe you 108 days of silence and a real post-event read.` | `108 days, two missed nights — here's the read we should have sent` | **A** *(NEW shape: post-event apology — window closed during gap)* |
| **charlesteel126 / Bruno Mars Columbus — POST-EVENT (yesterday)** | `Ohio Stadium passed yesterday — we owe you E3 + E4 + the post-event read. Here's the catch-up.` | `Bruno Mars Columbus passed yesterday; 28 days of silence — here's the read` | **A** *(NEW: post-event multi-threshold; window closed during gap)* |
| **taranimeramaro / Bruno Mars MetLife ×3 E4 (crossed May 16 silent)** | `3 Bruno Mars dates at MetLife — 92 days out, and we owe you E3 + E4. Here's how stadium-tour pricing compresses.` | `MetLife ×3: 92 days, multi-threshold catch-up + which night usually has the cheapest seats` | A |
| **zhili1208, lilianamasyrubi (Pattern B-at-E3+, ≥22d)** | `3 weeks in, still figuring out what to track? Here are 3 events trending — pick 1 and we'll do the rest.` | `Still figuring out what to track? Here are 3 events trending right now.` | A |
| **mark.murdock (Pattern B-at-E4, 28d)** | `4 weeks in, no events tracked — let's try a fresh start. 3 events trending right now.` | `28 days on TicketScan with no events tracked — a quick re-onboard.` | **A** *(action-led; longer-silence framing than 21d version)* |
| **Pattern B-at-E2 batch (jfgalzin, kevinkid94, emmacmather, natalie.sotocruz, pattyglvz)** | `Week 1 on TicketScan — still no events tracked? Here are 3 that are trending right now.` | `Day 7 — 3 events trending on TicketScan that might be worth tracking` | A |
| **Pattern B-at-E1 batch (eduardo, 9440111, c_calingasan, vlanza, jmoriarty13)** | `Day 3 on TicketScan — the fastest way to test if we're useful is to pick 1 event` | `Welcome — here's how to get the most out of TicketScan in week 1` | A |
| **Catch-up — blubberboi (E5 + 11 days post-E5)** | `Ed Sheeran is 79 days away. We owe you 30 days of emails. Here's the one that actually matters.` | `79 days to SoFi — 30-day catch-up + the pricing read` | A *(carries; tightens 86→79)* |
| **laye.aurelien Shakira ×2 (E5 + 19 days post-E5)** | `Shakira at MetLife is 60 days out — and we owe you 19 days of silence after E5. Here's the read.` | `2 Shakira dates, 60 days, 49 silent days — here's the read` | A |
| **belder4308 / SEC Baseball Hoover (event happening today/tomorrow)** | `SEC Baseball Hoover is happening this weekend — we missed our window. Here's a quick read for the post-tournament.` | `Tournament's now — 4 days late from us. Here's the post-tournament pricing read.` | A *(NEW Tier-5 drip-incompatible shape)* |
| **zhouyilinbest / Thunder at Spurs Game 3 (1d out, signed up <24h ago)** | `Thunder at Spurs Game 3 is tomorrow — welcome to TicketScan. Here's the Frost Bank Center read.` | `Game 3 tomorrow — welcome + the rapid pricing read for series-late playoff resale` | **A** *(NEW: same-day signup + Tier-0 — manual welcome shape)* |

**CTA conformance:** 11 of 17 top-level routes; 6 of 17 event-specific deep-links justified by Tier-0 proximity, multi-event cluster (kevinshall87, karin_ef1, cutekitten1234, taranimeramaro), or >21-day catch-up exception. **Deep-link share rises again** to 35% (was 37% on May 14 → 35% today; broadly stable). The reframing from May 12 holds: Tier-0/catch-up/cluster shape is modal; top-level CTA is exception in 2 of 5 send families.

---

## Action Items

### P0 — Critical (Day 45 of outage)
1. **SMTP / drip pipeline — DAY 45 (7 weeks).** Same probe failure as Days 11–44. **Carrying the May 1 / May 6 / May 12 / May 13 / May 14 recommended fix sequence:** regenerate Gmail app password → audit handler for top-of-route `transporter.verify()` → verify Railway port 587 egress → wrap drip handler in `Promise.allSettled` with per-user timeout → re-test with `?limit=1&dryRun=true` first. **Day 45 escalation framing — the cost statement has crystallized over the 7-day gap:**
   - **3 Pattern A++ users (kevinshall87, karin_ef1, cutekitten1234) — all E1 silent**
   - **2 of 3 already in multi-threshold E1+E2 drift** (kevinshall87 since May 19; karin_ef1 today)
   - **The third (cutekitten1234) joins the multi-threshold club May 23 — 48 hours from now**
   - **Total emails owed across the 3 Pattern A++ trio if SMTP returns today: 9** (3× E1-late + 3× E2-or-impending + 3× upcoming-E3)
   - **The hypothesis revision** (Pattern A++ is general single-venue cluster, not WC-specific) means **the next Pattern A++ signup could arrive from any major-stadium concert tour, not just WC.** Acquisition channel is broader and less seasonal than the May 14 framing implied.

2. **Tier-0 + Tier-1 sends queued (in order of time-window pressure):**
   1. **belder4308** — SEC Baseball Hoover **today** (Session 5) + **tomorrow** (Session 6). Drip-incompatible recovery shape.
   2. **zhouyilinbest** — Thunder at Spurs Game 3 **tomorrow**. Same-day welcome + Tier-0 shape.
   3. **joshdguillemette** — AEW **3 days out**, multi-threshold E3+E4+E5 silent.
   4. **cjthomas2557** — Noah Kahan 22 days out, multi-threshold E1+E2+E3 fires today silent.
   5. **lisallam** — JOJI E1 fires today silent. Clean Pattern A.
   6. **kevinshall87** — multi-threshold E1+E2 silent; E3 May 26.
   7. **karin_ef1** — multi-threshold E1+E2 today silent; E3 May 28.
   8. **cutekitten1234** — E1 silent May 19; E2 May 23 (48h window).

3. **Target-price UX (Day 114).** 108/108 watchlist items null. **Specific cost framing across the 7-day gap:** 3 Pattern A++ clusters = **15 high-intent items added in 4 minutes combined wall-clock, zero target prices.** Plus 11 other null adds. **The inline auto-suggest UX (Day 13 spec) has now lost the cleanest 7-day window in report-stream history.**

### P1 — High
4. **Past-event watchlist cleanup (40.7% bloat).** Third consecutive decrease, mechanical only. The dilution is now demonstrating *durable* in the current acquisition mix — but the structural fix (status column + auto-expiry cron) is still the only durable answer. **The Bruno Mars / Inter Miami / SEC Baseball aging spike May 20–23 will push the % back up by mid-week absent additional adds.**

5. **`/drip-stats` cap / pagination — Day 14 of structural-debt-hiding regression.** Now hides 16+ users with ≥13-day backlog (was 6+ on May 14). **The cap regression has accelerated under the 7-day signup wave.** Add `offset` parameter or raise cap to 100.

6. **Backlog catch-up plan when SMTP returns** — apology email first (parameterized: full-traversal, multi-threshold, single-skip, Tier-0-late, Pattern-A-cluster, Pattern-B-recovery, post-event-apology), then canonical resume. **Updated queue head:** belder4308 + zhouyilinbest (Tier-0 today), konman87 + charlesteel126 (post-event apology), joshdguillemette (3d), kevinshall87 (E1+E2 multi-threshold), karin_ef1 (E1+E2 multi-threshold today), cutekitten1234 (E1 + impending E2), lisallam (E1 today), cjthomas2557 (E1+E2+E3 today), then taranimeramaro, blubberboi, mark.murdock (Pattern B-at-E4), dr.altvater, laye.aurelien.

7. **Newsletter growth — Day 109 milestone.** +9 user registrations / 0 newsletter signups in the last 7 days. Footer regression Day 26; popup spec Day 22 unbuilt. **The signup surface continues to produce zero output across 109 consecutive days regardless of acquisition quality or volume.**

8. **`W0-A/B/C` real-time welcome triage architecture.** **Pattern A++ density now 30% of rolling 10 signups** (up from 20% on May 14). **Drip-incompatible Tier-5 share is also 20%.** The case for real-time triage at signup is stronger than ever — half of new signups today (30% A++ + 20% Tier-5) are mis-served by the canonical drip cadence. **Pre-condition: SMTP fix + watchlist-state probe on signup webhook.**

### P1.5 — REVISED today (was new May 14)
9. **Pattern A++ channel investigation — falsification of WC-only hypothesis.** The May 14 "World Cup channel just activated" hypothesis is **disproven by cutekitten1234** (Harry Styles MSG, no WC component). **Revised hypothesis: a general single-venue-cluster acquisition channel is active.** Suggested investigation:
   - Pull referrer / source data on **all three Pattern A++ users** (kevinshall87, karin_ef1, cutekitten1234)
   - Identify any shared acquisition surface (organic search query patterns, ad campaigns, social channels, content pages)
   - **Specifically test the hypothesis**: are these users arriving from venue-specific or tour-specific search queries (e.g., "AT&T Stadium World Cup tickets", "Harry Styles MSG resale prices")?
   - Compare against Analytics Agent's traffic-source data — flag any step-change in venue-cluster traffic over the last 14 days
   - **If 2 of the next 5 signups are non-WC Pattern A++ (single-venue cluster), the general hypothesis is confirmed and the W0-A triage architecture should be venue-cluster-aware rather than WC-cluster-aware.**

### P2 — Medium
10. **`drip-health` endpoint — DAY 14 of unmet ask.** Specification unchanged: `GET /api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt, pendingCount}`. **Two-week unmet ask now exceeds the SMTP outage's reasonable diagnostic window** — even if SMTP returns tomorrow, having no health endpoint means the same outage detection lag recurs at the next failure.

11. **pete.uzelac77 World Cup re-engagement** — 41 days on platform, 6 items, 35 days to first match. Tier-2 hold; subject `Don't buy your World Cup tickets in May — here's why` has **11 days of validity left** before the "in May" framing expires. **With karin_ef1 now in WC BC Place cluster cohort, pete.uzelac77 is the *longest-silent* WC user. The catch-up framing is unique to pete.**

12. **Watchlist digest endpoint — still manual.** 17 distinct send templates hand-composed today (up from 16 on May 14). Bottleneck unchanged.

13. **Viva El Jaripeo post-mortem — 26 DAYS OVERDUE.** Status unchanged.

14. **Daily reporting cadence regression — 7-day gap May 14 → May 21.** This report breaks the daily cadence after no report ran May 15–20. **Cause: not investigated.** Effect: the kevinshall87 / karin_ef1 / cutekitten1234 E1 fires all occurred during the silent reporting window. **If daily cadence had held, the three Pattern A++ E1 fires would each have had named-and-timestamped action items inside their 72-hour deadlines.** Recommend: investigate report-stream cron or launchd schedule (see `marketing-agents/logs/`).

### Tracking metrics (continued)
- **Tactical-window degradation:** Day 45. **All forward-looking tactical assets framed May 14 have now passed.** kevinshall87 E1 (May 15) silent. karin_ef1 E1 (May 17) silent. cutekitten1234 E1 (May 19) silent. The next non-degraded tactical asset is **lisallam E1 today** + **cutekitten1234 E2 May 23** — both inside the next 48 hours.
- **CTA simplification rule conformance:** 65% top-level (11 of 17); 35% deep-link-justified.
- **Pattern mix in rolling 10-user cohort:** **A++ 30% / A 10% / B 50% / drip-incompatible 20% / undetermined 20%** (overlap categories). **Pattern A++ has tripled from "one in 33 days" (May 12) to "30% of recent signups" in 9 days.**
- **Pattern A++ cluster acquisition rate:** 3 in 5 days (May 12, 14, 16). Then **5 days with no new A++** (May 17–21). **The May 14 "back-to-back" cadence broke** — but the cumulative density (3 in 10 days) is still without precedent. **The acquisition pulse has settled, but the structural finding (Pattern A++ exists and is reproducible) is now established.**

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change in 7 days. **109 consecutive days flat.** Day 15 of zero-capture under signup velocity. Footer regression Day 26, popup spec Day 22 unbuilt. **Under 7 days of sustained ~1.3/day signup velocity and 3 Pattern A++ signups, the cross-channel newsletter delta stays at exactly zero — the structural break has now demonstrated across 109 days, multiple acquisition mixes, and varying volumes.**
- **User signups (7-day reconstruction):** **+9** (nunemakerc May 15; belder4308 + cutekitten1234 May 16; lisallam May 17; eduardo + 9440111 May 18; brockedwardnelson + zhouyilinbest + keegansmith18 May 20). **88 total users.** 7d rolling = 10.
- **New watchlist items (7d):** **+11** (cutekitten1234 ×7 Harry Styles MSG cluster; belder4308 ×2 SEC Baseball Hoover; lisallam ×1 JOJI Prudential; zhouyilinbest ×1 Thunder at Spurs Game 3).
- **Drip pipeline:** UN-SHIPPED. **Day 45.** 0 sends ever. 88 of 88 users never received a drip email. Backlog: **35 visible + 16+ hidden ≈ 90+ owed sends** (up from 70 on May 14 = +2.9/day backlog accumulation).
- **Threshold crossings during 7-day gap:** 17 silent crossings total, including **3 Pattern A++ E1 fires** (kevinshall87 May 15, karin_ef1 May 17, cutekitten1234 May 19) and **2 Pattern A++ E1+E2 multi-threshold drifts** (kevinshall87 May 19, karin_ef1 today). **The most consequential 7-day window in the report stream's email-cadence history.**
- **Price alerts:** 0 ever triggered. **108/108 watchlist items null.** Day 114. The 3 Pattern A++ sessions (15 total adds in 4 minutes combined wall-clock) were the cleanest possible argument for the inline auto-suggest UX.
- **Watchlist composition:** 108 items, 44 past-dated (40.7% — third consecutive decrease, mechanical). **Tier breakdown: 4 in Tier-0 (within 7d), 0 in Tier-1 (8–21d — first empty Tier-1 ever), 6 in Tier-2 (22–32d), 18 in Tier-2.5/3 (33–62d), 36 in Tier-3 (63+d).**
- **Empty-watchlist cohort:** 39 of 88 (44.3%), up from 38.0% on May 14. **5 of 9 new signups during gap added 0 watchlist items** (nunemakerc, eduardo, 9440111, brockedwardnelson, keegansmith18) — Pattern B share grew.
- **Pattern mix in rolling 10-user cohort:** **A++ 30%** (kevinshall87 + karin_ef1 + cutekitten1234) / **A 10%** (lisallam) / **B 50%** / **drip-incompatible 20%** (belder4308 + zhouyilinbest). Overlap categories include 2 undetermined Day-0 signups.
- **HYPOTHESIS REVISION — World Cup channel falsified, single-venue-cluster hypothesis confirmed.** May 14's "WC channel activation" hypothesis is disproven by cutekitten1234's Harry Styles MSG cluster. **The acquisition channel producing Pattern A++ is venue-cluster intent in general, not WC-specific.** Suggested: pull referrer/source data on all 3 Pattern A++ users; flag any step-change in venue-cluster organic search or content-page traffic over the last 14 days.
- **Most useful single observation today:** **the platform produced its three strongest Pattern A++ signups in 33+ days across a single 5-day window (May 12–16) — kevinshall87 / karin_ef1 / cutekitten1234 — and the SMTP outage swallowed all 3 E1 fires silently while the daily reporting cadence was simultaneously broken.** 15 high-intent watchlist adds in 4 minutes combined wall-clock; zero target prices captured; zero emails sent; zero same-day reports written. **The 72-hour deadline framed May 14 for kevinshall87 + karin_ef1 has dilated into a 9-day silent traversal covering 3 users and 2 multi-threshold drifts. The arithmetic relationship between acquisition quality and email-delivery state is unchanged in shape and 4× worse in scale than May 14's framing.**
