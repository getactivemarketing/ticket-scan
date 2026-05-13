# Email Daily — 2026-05-13

> **Day 37 of SMTP outage. Day 101 newsletter flatline. Day 106 target-price null streak (now 95/95).** Today's defining event is **kevinshall87** (id 76, signed up yesterday May 12 16:44 UTC) — **the cleanest Pattern A signup the platform has produced in 30+ days.** 6 watchlist items added within 4 minutes of signup (5 World Cup matches at AT&T Stadium + Matt Rife Choctaw Sep 26). His E1 trigger fires **May 15 ~16:44 UTC** — if SMTP is not restored by then, the strongest canonical-E1 test case in the reporting history is lost silently. Yesterday's zero-signup day reversed cleanly: **+2 signups in 24h (kevinshall87 Pattern A++, pattyglvz Pattern B-forming).** Watchlist grew **+6 items (89 → 95)**, and for the first time in weeks the past-event bloat percentage **dropped** — from ~47% (40/89) to **42.1% (40/95)** — purely from denominator dilution. zhili1208 crossed E3 silent at 03:16 UTC today (May 8 weekly forecast hit precisely); jmoriarty13 crosses E1 silent ~13:18 UTC today. Two more silent crossings inside the outage, both Pattern B.

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` still returns `stats: []` after **Day 37.** **76 of 76 users have never received a drip email.**
- **Probe today (Day 37):** `POST /api/admin/drip-run?limit=1&dryRun=true` → HTTP 000 after 20s timeout. **Identical failure shape to Days 11–36.** No diagnostic movement in 37 days. **Engineering remediation has not occurred.**
- `/api/admin/drip-health` probe → `{"error":"Endpoint not found"}`. **Day 6 of that ask unmet** (P0 since May 7).

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 12 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **18 of 20** | unchanged (cohort shifted: kevinshall87 + pattyglvz 0d at top; ajvanprooyen/awwhittington/ggri73/mark.murdock at 20d backstop) |
| E2 | ≥7d | **10 of 20** | -1 (cohort shifted; joseph.g.nicolosi rolls below by 1 day, jadbennis0 crosses E2 today silent) |
| E3 | ≥14d | **8 of 20** | -2 (zhili1208 crosses E3 today silent; lilianamasyrubi held; ggri73/awwhittington/aj 20d still pre-E4) |
| E4 | ≥21d | **0 of 20** | -1 (dr.altvater pushed below truncation horizon by kevinshall87 + pattyglvz signups) |
| E5 | ≥30d | **0 of 20** | unchanged at zero |

**The truncation horizon advanced again today.** ggri73 (id 57, 20d) is now the oldest visible record. dr.altvater (~22d), nicklib253 (~26d), goldy.pec.2012 (~33d), blubberboi (~33d), bhaygood728 (~40d), laye.aurelien (~41d) — all hidden. **6+ silent users with ≥20-day backlog now invisible** to the only endpoint that names them.

### Threshold crossings in last 24h (2 silent advances)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| May 13 03:16 UTC | **zhili1208** | **E3** | **B (16 consecutive days, 0 watchlist)** | silent | **May 8 weekly forecast hit precisely on schedule.** Now the longest-running confirmed Pattern B trajectory on the platform. |
| May 13 ~13:18 UTC | **jmoriarty13** | **E1** | **B (forming, 0 watchlist)** | silent | 6th Pattern B-forming user in current acquisition wave. Pre-E1 yesterday → silent E1 today. |
| May 13 ~20:33 UTC | **jadbennis0** | **E2** | Tier-0 hybrid (1 watchlist) | silent | Inter Miami May 17 is 4 days out — E2 trigger lands inside Tier-0 window. The May 6 "right shape" for this user is now welcome + Tier-0 + missed-E1 compressed into a single send. |

**No multi-threshold drift today.** joseph.g.nicolosi (E2 + missed E1) and joshdguillemette (E4 + missed E3) carry forward from May 10–11. The arithmetic forecast from May 11 — "4+ multi-threshold cases by May 15" — currently sits at 2 confirmed; lilianamasyrubi at 15d / 0 watchlist crosses E2's silent threshold trail today (already E3 silent yesterday). Forecast remains plausible.

### Tomorrow's forecast crossings (May 14)
- **kevinkid94 → pre-E2** (6d, no watchlist) — Pattern B forming
- **emmacmather → pre-E2** (5d, no watchlist) — Pattern B forming
- **jfgalzin → pre-E2** (6d, no watchlist) — Pattern B forming
- **kevinshall87 → pre-E1** (2d, 6 items) — **Pattern A++; E1 trigger fires May 15 ~16:44 UTC.** Highest-stakes single-user trigger in the 7-day forward window.

**Visible backlog (in returned 20):** 18 E1 + 10 E2 + 8 E3 + 0 E4 + 0 E5 = **36 emails owed in pendingUsers cohort.** Plus the 6+ hidden users now beyond the truncation horizon — most >21 days silent. **True backlog ≈ 70 emails across all eligible users** (slight decrease from yesterday's 75; reflects two of the longest-silent being pushed below the visible cap, *not* any of them being served).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 106 of 100% null-on-add. 95/95 watchlist items have a null `target_price`** (was 89/89 yesterday). All 6 of kevinshall87's adds yesterday — null. **The 6-item single-session add was a missed opportunity for a single inline UX prompt.** Auto-suggest at 10% below current min on watchlist-add would have captured 6 targets in 4 minutes from one user. Day 106 is the cleanest possible argument for the fix.
- Same interlock as May 6–12: SMTP fix alone produces 0 alert emails because no user has set a target.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 101 days** since last organic signup (roos_leeuwen, 2026-02-01). **+10 user registrations in 6 days, 0 newsletter signups in the same window.** The cross-channel lockstep at zero continues — even the strongest 7-day acquisition window in platform history (10 users) has produced zero newsletter captures. **The newsletter signup surface is structurally broken** (Footer `<NewsletterSignup>` regression Day 18; popup spec at Day 14 unbuilt per CRO May 11). Until either is repaired, the 101-day flatline is inevitable regardless of acquisition velocity.

## Platform Context
- Total users: **76** (was 74 on May 12, **+2 in 24h** — clean reversal from yesterday's zero-signup day)
- Users today (rolling 24h): **2** — kevinshall87 (May 12 16:44 UTC, **6 watchlist items added**) + pattyglvz (May 12 15:23 UTC, **0 watchlist items so far**)
- Users this week (rolling 7d): **10** (per `/admin/stats` — **matches yesterday's peak; the May 7–12 wave has now sustained for a 7th day**)
- Watchlist items: **95** (was 89, **+6** — all from kevinshall87)
- Past-dated watchlist items: **40 of 95 (42.1%)** — **first decrease in past-event bloat in 30+ days.** Yesterday: 42/89 (47%). The 6-item future-only add diluted the denominator without changing the numerator. **First mechanical proof that future-only additions can offset the absence of a status-column auto-archive.** Cumulative bloat math: at the current rate (~1 future add / 6 days from a typical new signup), the natural dilution still loses to natural past-event aging over time. The structural fix is unchanged; today is a one-time dilution event.
- Favorites: 0
- Triggered alerts: 0

## New-Signup Pattern Analysis (24h)

| User | Signed up | Days | Watchlist | Pattern | Note |
|------|-----------|------|-----------|---------|------|
| **kevinshall87** | **May 12 16:44** | **0** | **6 (5 WC AT&T Stadium + 1 Matt Rife Choctaw Sep 26)** | **A++ (canonical, full-cluster, perfect-cadence)** | **First add at 16:46:16 (2 min post-signup); last add at 16:47:56 (4 min post-signup). 5 WC matches at the same venue (June 14, 17, 25, July 6 R16, July 14 SF) — perfectly clustered Tier-2/3 fit. Matt Rife at Sep 26 = clean Tier-3 long-lead. The strongest E1 fit signal the platform has produced since pete.uzelac77 on April 10. E1 trigger May 15 ~16:44 UTC.** |
| pattyglvz | May 12 15:23 | 0 | 0 | **B (forming, +24h)** | Pattern B-forming — 6th confirmed instance in the current acquisition wave. |

**Updated pattern mix across the last 10 signups (May 4 → May 12):**
- Pattern A canonical: cjthomas2557 + **kevinshall87** = **2 of 10 (20%)**
- Pattern B forming/confirmed: joseph.g.nicolosi, natalie.sotocruz, jfgalzin, kevinkid94, emmacmather, jmoriarty13, **pattyglvz** = **7 of 10 (70%)**
- Drip-incompatible (same-day / past-event): sparkitrightthere, liambot62 = **2 of 10 (20%)**
- (joseph.g.nicolosi double-counts vs jadbennis0 in the prior 8-user window; current 10 is the rolling May 4–May 12 wave.)

**The Pattern A++ kevinshall87 is the structural answer to the May 12 "drip-incompatible 25%" finding.** When canonical Pattern A *does* arrive, it arrives in unmistakable form — same-day, multi-item, single-venue cluster + tier-3 anchor. The canonical drip cadence is the *right* shape for this 20% — but only if SMTP returns inside the user's first 3 days. **Today, the platform has a 48-hour window to fix SMTP before the cleanest Pattern A signup in 30+ days enters the same silent funnel as the rest.**

---

## kevinshall87 — Detailed E1 Read

The strongest single-user fit since pete.uzelac77. Why:

1. **Signup → first add: 2 minutes.** Highest-intent signup signal possible.
2. **Signup → cluster complete: 4 minutes.** Six adds in a single session.
3. **Cluster shape:** 5 of 6 items are **at the same venue** (AT&T Stadium, Arlington) — 5 different World Cup matches across a 30-day venue window (June 14 → July 14). Single-venue clustering is the strongest signal for venue-comparison + travel-package emails downstream.
4. **Long-lead anchor:** Matt Rife Sep 26 at Choctaw Grand Theater Durant — a different venue, but a Tier-3 (136 days out) long-lead test of canonical E3 educational content.
5. **No drip-incompatibility risk:** earliest event (June 14) is **32 days out** as of today. E1 (May 15, +3d) fires 30 days pre-event — perfectly canonical. E2 (May 19, +7d) fires 26 days pre-event — canonical. E3 (May 26, +14d) fires 19 days pre-event — canonical. E4 (June 2, +21d) fires 12 days pre-event — Tier-1 boundary, still canonical. E5 (June 11, +30d) fires 3 days pre-event — Tier-0 boundary, last-realistic-intercept on the FIRST tracked event. **All 5 sends in the canonical 30-day cadence land cleanly before the first event.**

**E1 send draft for kevinshall87 (fires May 15 16:44 UTC if SMTP restored):**
- Subject A: `Welcome — 5 World Cup matches at AT&T Stadium, here's how Arlington-cluster pricing usually moves`
- Subject B: `Welcome to TicketScan — your World Cup AT&T Stadium cluster, 32 days out and counting`
- **Recommend A.** The "Arlington-cluster" angle is unique and the data hook (cross-match pricing within a single venue) is content the canonical drip cannot generate without venue clustering. **The user gave the platform its strongest possible welcome hook in their first 4 minutes — the subject line should reflect that.**
- CTA: `/compare?user_email=kevinshall87@gmail.com` if such a route exists; otherwise `/watchlist`. **Deep-link justified by the cluster shape.**

**The full canonical 5-email cadence applies to this user cleanly.** This has not been true of any single new signup since pete.uzelac77 (April 10). Every additional outage hour past **May 15 16:44 UTC** converts this from "the cleanest E1 test case in 30+ days" to "the cleanest silent-traversal test case in 30+ days."

---

## Watchlist Digest Prep — Tier-Compressed

### Past-Event Cleanup
**40 of 95 (42.1%) past-dated.** First decrease in 30+ days, but mechanical (denominator dilution). The structural ask is unchanged: `status` column + auto-expiry cron. **Today's specific cost framing:** the dilution event *resists* the underlying problem — kevinshall87 unilaterally pushed the bloat percentage down by 4.9 points just by adding 6 future-only items. **If every new signup added 6 future-only items, the system would self-clean.** The actual rate is closer to ~1 future add per signup, so the dilution lags the aging. The current 42.1% is structurally going to climb back over 45% within the week as the May 16–17 Bruno Mars + Inter Miami events age past.

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **Bruno Mars Soldier Field night 1** | May 16 | **3** | konman87 | 100 | post-E5 graveyard | **Day 100 of silence on this user. Window has functionally closed — yesterday was framed as "last realistic intercept day."** |
| **Bruno Mars Soldier Field night 2** | May 17 | **4** | konman87 | 100 | post-E5 graveyard | Same user. Paired send. |
| **Inter Miami vs Portland Timbers** | May 17 | **4** | jadbennis0 | 8 | **E2 today (silent)** | Now past E2 trigger; 4 days to event. Welcome + Tier-0 + missed-E1 + just-missed-E2 — compressed quadruple-send shape. |

**konman87's window is the canonical "too late" case for this report stream.** Yesterday at 4-5 days out was the last credible "deepest-discount" framing day; today at 3-4 days it's the post-window framing. **Even with SMTP restored at 22:00 UTC today, a send would arrive ~2 days pre-night-1 — the read changes from "here's the floor" to "here's the floor *if* you're still deciding."** The send is no longer about the discount window; it's about acknowledging 100 days of silence and offering a clean final-week read.

**jadbennis0 is the cleanest "missed both E1 and E2" intercept case.** 4 days to event, both canonical sends silent, watchlist add was the day-of-signup. The send shape compresses welcome + 2x apology + Tier-0 into one email.

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| Bruno Mars Ohio Stadium | May 20 | 7 | charlesteel126 | 20 | E3 (crossed May 6 silent) |
| AEW Double or Nothing | May 24 | 11 | joshdguillemette | 24 | E4 (crossed May 10 silent, multi-threshold with E3) |

**charlesteel126 crosses 7 days out today — now firmly inside Tier-0 framing.** Yesterday's "Wednesday-night stadium pricing usually moves once more this week" wording stays accurate (today is Wednesday). One more reporting cycle in which this subject line is fresh.

### TIER 2 — Long-Lead Canonical (32+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **World Cup ×5 at AT&T Stadium** | **Jun 14 → Jul 14** | **32 → 62** | **kevinshall87** | **1** | **pre-E1 (E1 fires May 15 ~16:44 UTC)** |
| **Matt Rife — Choctaw Grand Theater** | **Sep 26** | **136** | **kevinshall87** | **1** | **pre-E1 (paired with WC cluster)** |
| Bruno Mars MetLife ×3 | Aug 21–25 | 100–104 | taranimeramaro | 17 | E3 (crossed May 9 silent) |
| Noah Kahan Kia Center | Jun 12 | 30 | cjthomas2557 | 5 | E1 (crossed May 10 silent, 3 days late) |
| Ed Sheeran SoFi | Aug 8 | 87 | blubberboi | 33 | E5 silent traversal completed May 11 |
| 2x Shakira ×2 NYC | Jul 20–23 | 68–71 | laye.aurelien | 41 | E5 silent + 11 days post-E5 |

**kevinshall87 dominates Tier-2 today.** Six items across a 4-month forward window, single-venue cluster + tier-3 anchor. **The canonical drip cadence was built for this user.** The full 30-day, 5-email arc lands cleanly with all sends pre-event.

### TIER 3 — Pattern B Variants (cohort = 29 of 76 users = 38.2%)
- **zhili1208 (E3 silent today)** — Pattern B confirmed Day 16. Pattern B-at-E3 send shape: `2 weeks in, 0 events tracked — would these 3 trending picks help you find one?`
- **lilianamasyrubi (E3 silent yesterday)** — same shape. Pattern B Day 16 (longest active streak).
- **jmoriarty13 (E1 silent today)** — Pattern B-at-E1 send shape: `Day 3 on TicketScan — the fastest way to test if we're useful is to pick 1 event`.
- **pattyglvz (Day 1, 0 watchlist)** — pre-E1 welcome send opportunity. Same Pattern B-at-E1 family.
- **natalie.sotocruz, jfgalzin, kevinkid94, emmacmather (Days 5–6, 0 watchlist)** — Pattern B-at-E1 batch send.
- **Empty-watchlist cohort total: 29 of 76 (38.2%).** Stable from yesterday with pattyglvz joining and no exits. **Forecast: at current Pattern B rate (~60% of new signups), the cohort grows by ~1.2/day.**

### TIER 4 — Apology / Catch-Up (>21d silent backlog, below truncation horizon)
- **dr.altvater (E4 crossed May 12 silent, 22d on platform)** — first new E4 entrant since blubberboi; pushed below truncation horizon today by the 2 new signups.
- **nicklib253 (E4 crossed May 9 silent, 26d, Phillies past)** — Pattern A loss + E4 silent.
- **goldy.pec.2012 (E5 silent traversal likely completed May 11, 33d, Bilmuri past)** — Pattern A + full-traversal overlap.
- **blubberboi (E5 silent traversal completed May 10 23:58 UTC, 33d, Ed Sheeran SoFi Aug 8)** — **first historic full-traversal case.** Still the canonical apology test case.
- **bhaygood728 (~40d, Cardi B past)** — apology-only.
- **laye.aurelien (~41d, Shakira ×2 NYC, 68–71 days out)** — **still the highest-leverage graveyard recovery in the cohort** (long-lead Shakira tickets remain tactically actionable, but laye is now 11+ days past E5 and well past any canonical recovery window).

### TIER 5 — Drip-Incompatible by Design
- **sparkitrightthere (Day 6, Mac DeMarco May 7 passed)** — manual single-send recovery shape.
- **liambot62 (Day 5, Toronto FC May 9 passed)** — manual single-send recovery shape.

**These 2 of the last 10 signups (20%) cannot be served by canonical cadence regardless of SMTP state.** The May 8 weekly's `W0-A/B/C` real-time triage architecture remains the only path that closes the loop.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **kevinshall87 / WC AT&T cluster E1 (NEW today — Day 1 pre-E1)** | `Welcome — 5 World Cup matches at AT&T Stadium, here's how Arlington-cluster pricing usually moves` | `Welcome to TicketScan — your World Cup AT&T Stadium cluster, 32 days out and counting` | **A** *(cluster-specific hook is unique signal; do not waste it)* |
| konman87 / Soldier Field 100d catch-up | `Soldier Field is in 3 days — we owe you a 100-day catch-up. Here's the final-week read.` | `100 days of silence from us — 3 days to night 1. Here's how to decide.` | **A** *(carries from yesterday's frame; day-count tightens 4→3, "deepest-discount" → "final-week")* |
| jadbennis0 / Inter Miami 4d + 2x missed-E1/E2 | `Inter Miami is 4 days out — and we owe you 2 missed emails. Here's the Saturday read.` | `4 days to Inter Miami — welcome (a week late) and here's the Nu Stadium pricing` | **A** *(NEW today — 2x apology + Tier-0 + welcome in subject line earns priority)* |
| charlesteel126 / Bruno Mars Columbus Tier-0 boundary | `Bruno Mars Columbus is 7 days out — Wednesday-night stadium pricing usually moves once more this week` | `7 days to Ohio Stadium — your Bruno Mars tracker's floor curve` | **A** *(Wednesday subject sent on a Wednesday = freshest possible)* |
| joshdguillemette / AEW 11d multi-threshold | `AEW at Louis Armstrong — 11 days out, here's why this venue's resale curve is different (and a real apology)` | `2 missed sends + 11 days to Double or Nothing — catching you up properly` | **A** *(venue uniqueness leads; apology is parenthetical)* |
| taranimeramaro / Bruno Mars MetLife ×3 E3 | `3 Bruno Mars dates at MetLife — here's how stadium-tour pricing compresses across same-week shows` | `MetLife ×3: which night usually has the cheapest seats?` | A |
| **zhili1208 (Pattern B-at-E3 silent today)** | `2 weeks in, 0 events tracked — would these 3 trending picks help you find one?` | `Still figuring out what to track? Here are 3 events trending on TicketScan this week.` | A |
| **jmoriarty13 (Pattern B-at-E1 silent today)** | `Day 3 on TicketScan — the fastest way to test if we're useful is to pick 1 event` | `Welcome — here's how to get the most out of TicketScan in week 1` | A |
| **pattyglvz (pre-E1 Day 1)** | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `What event are you watching? Here's how TicketScan helps from Day 1.` | **A** *(action-led at Day 1; rationale matches kevinshall87's intent-signal evidence)* |
| Pattern B-at-E1 batch (natalie + jfgalzin + kevinkid + emmacmather) | `Day 3 on TicketScan — the fastest way to test if we're useful is to pick 1 event` | `Welcome — here's how to get the most out of TicketScan in week 1` | A |
| Catch-up apology — dr.altvater (E4, 22d silent, below truncation horizon) | `3 weeks of silence on our end — here's what we missed sending you` | `We're 3 weeks behind on emailing you — short catch-up below` | A |
| **Catch-up — blubberboi (E5 full-traversal, Day 3 of historic record)** | `Ed Sheeran is 87 days away. We owe you 5 emails. Here's the one that actually matters.` | `We owe you 30 days of emails — here's the SoFi pricing read` | A *(carries; test case still active, day count tightens 89→87)* |
| **laye.aurelien Shakira ×2 (E5 + 11d post-E5)** | `Shakira at MetLife — 68 days out and we owe you a real 11-day-late catch-up` | `2 Shakira dates, 68 days, and 40+ silent days from us — here's the read` | A |

**CTA conformance:** 9 of 13 use top-level routes; 4 of 13 use event-specific deep-links justified by Tier-0 proximity, multi-event cluster (kevinshall87, taranimeramaro, joshdguillemette), or >21-day catch-up exception. **Deep-link share rising as the cluster-fit signups (kevinshall87) and multi-event apology shapes (joshdguillemette, blubberboi) accumulate.** Per the May 12 framing, the Tier-0/catch-up shape is the default; the simple top-level CTA is now the exception in some segments.

---

## Action Items

### P0 — Critical (Day 37 of outage)
1. **SMTP / drip pipeline — DAY 37.** Same probe failure as Days 11–36. **Carrying the May 1 / May 6 / May 12 recommended fix sequence:** regenerate Gmail app password → audit handler for top-of-route `transporter.verify()` → verify Railway port 587 egress → wrap drip handler in `Promise.allSettled` with per-user timeout → re-test with `?limit=1&dryRun=true` first. **Day 37 escalation framing: kevinshall87's E1 trigger fires May 15 ~16:44 UTC. That is the 48-hour deadline to convert "cleanest Pattern A signup in 30+ days" into a real test case rather than another silent traversal. The cost of inaction now has a named user and a named timestamp.**
2. **Tier-0 + Tier-1 sends queued (in order of time-window pressure):**
   1. **konman87** — Soldier Field nights 1+2 (3–4 days out, 100-day silence). **Window has functionally closed — today's send is post-window framing.** Highest absolute cost-per-hour-delayed in the system.
   2. **jadbennis0** — Inter Miami 4 days out, 2x missed canonical sends (E1 + E2).
   3. **kevinshall87** — E1 fires May 15 ~16:44 UTC. **48-hour fresh-deadline.**
   4. **charlesteel126** — Bruno Mars Columbus 7 days out (Tier-0 boundary today).
   5. **joshdguillemette** — AEW 11 days out, multi-threshold E3+E4 silent.
3. **Target-price UX (Day 106).** 95/95 watchlist items null. **Specific cost framing today:** kevinshall87 added 6 items in 4 minutes with zero target-price prompts. A single inline UX would have captured 6 targets in one session from one user. **The Day 106 streak is now actively burning the strongest user-intent signal the platform has seen this month.**

### P1 — High
4. **Past-event watchlist cleanup (42.1% bloat).** First decrease in 30+ days, but mechanical (denominator dilution). Same fix as Apr 29 / May 1 / May 6 / May 12: `status` column + daily expiry cron. **Today's specific finding:** future-only adds dilute the percentage; absent the auto-archive, dilution lags aging. Expect the % to climb back over 45% within the week as the May 16-17 events age past.
5. **`/drip-stats` cap / pagination.** Now hides **6+ users** with ≥20-day backlog. **Day 6 of structural-debt-hiding regression.** Add `offset` parameter or raise cap to 100.
6. **Backlog catch-up plan when SMTP returns** — apology email first (parameterized: full-traversal, multi-threshold, single-skip, Tier-0-late), then canonical resume. **Queue head:** konman87 (post-window apology), jadbennis0 (2x missed), kevinshall87 (E1 if within 48h, otherwise E1-late apology), then taranimeramaro, blubberboi, dr.altvater, laye.aurelien.
7. **Newsletter growth — Day 101 milestone.** 14 user registrations / 0 newsletter signups in the last 26 days. Footer regression Day 18; popup spec Day 14 unbuilt. **The signup surface itself is broken.**
8. **`W0-A/B/C` real-time welcome triage architecture.** 2 of 10 recent signups drip-incompatible; 7 of 10 are Pattern B-forming (E1-canonical wrong shape); only 2 of 10 are clean Pattern A. **Pre-condition: SMTP fix + watchlist-state probe on signup webhook.**

### P2 — Medium
9. **`drip-health` endpoint — DAY 6 of unmet ask.** Specification unchanged: `GET /api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt, pendingCount}`.
10. **pete.uzelac77 World Cup re-engagement** — 32 days on platform, 6 items, 32 days to first match. Tier-2 hold; subject `Don't buy your World Cup tickets in May — here's why` has **18 days of validity left** before the "in May" framing expires.
11. **Watchlist digest endpoint — still manual.** 13 distinct send templates hand-composed today. Bottleneck unchanged.
12. **Viva El Jaripeo post-mortem — 18 DAYS OVERDUE.** Status unchanged; not driving daily-scope decisions.

### Tracking metrics (continued)
- **Tactical-window degradation:** Day 37. The May 6 "tactical with honesty" window forecast for May 9–10 has now fully closed; the May 12 forecast for May 13 (konman87 Tier-0 final-day) is also closing today. **Next non-degraded tactical window is the kevinshall87 E1 cadence opening May 15.** This is the only forward-looking tactical asset the report stream has produced this week.
- **CTA simplification rule conformance:** 69% top-level (9 of 13); 31% deep-link-justified. Deep-link share rising with cluster-fit cohort.
- **Pattern mix in the rolling 10-user cohort:** A 20% / B 70% / drip-incompatible 20% — note the overlap (joseph.g.nicolosi double-counts; the cohort sums to 11 because of double-categorization where a Pattern B user has additionally crossed multiple thresholds silently). **The true claim is: Pattern A is the minority cadence; Pattern B is structurally modal.**
- **kevinshall87 fit-strength record:** Day 1 (today) — strongest single signup since pete.uzelac77 (Apr 10, 33 days ago). The platform produced its best Pattern A signal in 33 days, into Day 37 of SMTP outage. The arithmetic relationship is the cleanest cost statement in this report.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change in 24h. **101 consecutive days flat.** Day 7 of zero-capture under signup velocity. Footer regression Day 18, popup spec Day 14 unbuilt.
- **User signups (24h):** **+2** (kevinshall87 16:44 UTC; pattyglvz 15:23 UTC). Reverses yesterday's zero-signup day. **76 total users.** 7d rolling = 10 (sustained peak from May 12).
- **New watchlist items (24h):** **+6** (all from kevinshall87) — 5 WC matches at AT&T Stadium + 1 Matt Rife Sep 26. **First materially large single-user cluster add since pete.uzelac77 (Apr 10).**
- **Drip pipeline:** UN-SHIPPED. **Day 37.** 0 sends ever. 76 of 76 users never received a drip email. Backlog: 36 visible + 6+ hidden ≈ **70 owed sends**. Slight nominal decrease from yesterday's 75 reflects truncation-horizon hiding, not service.
- **Threshold crossings in last 24h (3 silent):** zhili1208 → E3 (silent, May 8 weekly forecast hit on schedule); jmoriarty13 → E1 (silent, Pattern B forming); jadbennis0 → E2 (silent, Tier-0 hybrid with missed E1).
- **Tomorrow's forecast crossings (May 14):** none new at canonical thresholds. **48-hour deadline:** kevinshall87 E1 fires May 15 ~16:44 UTC. **The cleanest Pattern A canonical test case in 33 days lives or dies inside this window.**
- **Price alerts:** 0 ever triggered. **95/95 watchlist items null.** Day 106. The 6-item kevinshall87 session was the cleanest possible argument for the auto-suggest fix.
- **Watchlist composition:** 95 items, 40 past-dated (42.1% — **first decrease in 30+ days, mechanical**). 3 within 7 days (konman87 ×2 May 16-17, jadbennis0 May 17). 2 in 8–21 days (charlesteel126, joshdguillemette). 5 in 22–32 days (cjthomas2557, **kevinshall87 ×4 WC AT&T**). 7+ in 33–62 days (kevinshall87's WC R16 + SF, taranimeramaro ×3 MetLife at 100+). Long-lead 60+ days dominated by blubberboi, laye.aurelien, kevinshall87, taranimeramaro, brigitte.theisen, tosophiameyer.
- **Empty-watchlist cohort:** 29 of 76 (38.2%), +1 vs yesterday (pattyglvz joins; nobody exits).
- **Pattern mix in rolling 10-user cohort:** A 20% / B 70% / drip-incompatible 20%. **kevinshall87 is the only Pattern A++ instance in 33 days.**
- **Most useful single observation today:** the platform produced its strongest Pattern A signup in 33 days (kevinshall87, 6-item single-venue cluster + Tier-3 anchor, added in 4 minutes flat) on Day 37 of the SMTP outage. The user's canonical E1 trigger fires May 15 ~16:44 UTC. **There is a 48-hour deadline to convert the cleanest possible test case into a real test rather than a silent traversal. If May 15 passes silently, the platform's best-ever canonical-E1 evidence becomes another full-traversal data point — and the report stream's framing for engineering escalation will need to shift from "compounding silent backlog" to "even our cleanest-shaped signups are now silently lost."**
