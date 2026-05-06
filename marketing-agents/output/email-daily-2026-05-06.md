# Email Daily — 2026-05-06

> **Day 30 of SMTP outage. Five-day reporting gap (May 2-5 reports were not produced; only May 1 exists). Today is the closing event of the ajvanprooyen Cubs cluster — Game 6 of 6, the Reds finale, plays this afternoon. With the May 2 bobblehead night, May 3 graphic-tee night, and May 4-5 Reds games all having shipped zero emails, the full 6-game cluster joins the conversion-loss tally as a single 8-day-on-platform user with zero contact across six tracked events. Bilmuri (May 2) and Florence (May 1) and Cubs Game 1 (May 1) are now all historical. Today's two threshold crossings: charlesteel126 hits E3 at 11:38 UTC (Bruno Mars Columbus, 14 days out — high-leverage Tier 1 trigger); zhili1208 hits E2 at 03:16 UTC (Pattern B confirmed — 7 days, 0 watchlist items). One brand-new signup (jadbennis0, 0 days, Inter Miami May 17) added in the gap. Newsletter stall: Day 94. Target-price null streak: Day 99 (0 of 86 items have a target). The "tactical with honesty" send window has fully closed; everything outstanding is apology-shape.**

## Reporting Gap Acknowledgment
- May 2, May 3, May 4, May 5 daily reports were not produced. Five consecutive days of silence on this side of the report stream as well.
- Today's report does not attempt to back-fill those days. It captures the **as-of-May-6** state and consolidates the gap-period changes (new signups, threshold crossings, events that passed) into the current day's view.
- Self-imposed **scope contraction commitment from May 1** (P2 item #13) — daily report scope was committed to contract on May 3 if the Viva El Jaripeo post-mortem standalone artifact wasn't drafted by EOD May 2. The artifact has not been confirmed delivered. **Today's report contracts the Cubs/Bilmuri tactical sections** (those events are now all historical anyway) and **consolidates the drip-pipeline section to the essential 5 lines** as committed.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` still returns `stats: []` after **Day 30**. 0 rows ever written. **66 of 66 users have never received a drip email.**
- **Probe today (Day 30):** `POST /api/admin/drip-run?limit=1&dryRun=true` → HTTP 000 after 15s timeout. **Identical failure to Days 11-29.** No diagnostic movement in 30 days. **Engineering remediation has not occurred.**

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 1 |
|-----------|------|-------------|------------|
| E1 | ≥3d | **18 of 20** | -1 (cohort rolled — jadbennis0 + joseph.g.nicolosi entered as fresh, both <3d) |
| E2 | ≥7d | **18 of 20** | +2 (zhili1208 crossed today; lilianamasyrubi crossed May 5) |
| E3 | ≥14d | **12 of 20** | +1 (charlesteel126 crosses today 11:38 UTC; dr.altvater crossed May 4 silently) |
| E4 | ≥21d | **6 of 20** | unchanged (blubberboi from May 1) |
| E5 | ≥30d | **3 of 20** | +1 (laye.aurelien crossed May 2 silently; bhaygood728 crossed May 3 silently — both still in the returned 20 cohort) |

### Threshold crossings during the 5-day reporting gap
| Date | User | Threshold | Pattern | Channel |
|------|------|-----------|---------|---------|
| May 2 03:16 UTC | zhili1208 | E1 | B (forming) | silent |
| May 2 02:03 UTC | laye.aurelien | E5 | A (Shakira ×2) | silent |
| May 2 11:51 UTC | nmcnamee99 | E2 | A (Raptors playoffs) | silent |
| May 2 18:25 UTC | taranimeramaro | E2 | A (Bruno Mars MetLife ×3) | silent |
| May 3 00:58 UTC | bhaygood728 | E5 | unknown | silent |
| May 3 20:30 UTC | joshdguillemette | E3 | A (AEW) | silent |
| May 4 14:08 UTC | dr.altvater-70199 | E3 | unknown | silent |
| May 5 05:24 UTC | lilianamasyrubi | E2 | B (confirmed; still 0 watchlist) | silent |
| **May 6 03:16 UTC** | **zhili1208** | **E2** | **B (confirmed; still 0 watchlist)** | **silent** |
| **May 6 11:38 UTC** | **charlesteel126** | **E3** | **A (Bruno Mars Columbus)** | **silent** |

**10 threshold crossings in 5 days, all silent.** The send queue is no longer just back-pressured — it has moved from "delayed" to "structurally accumulating without resolution." The implicit promise embedded in registration (drip campaign cadence) has been broken at every threshold for every user since launch.

**Tomorrow's crossings (May 7):** joseph.g.nicolosi — E1 at 21:39 UTC. Pattern unknown (1 day on platform, 0 watchlist items so far — Pattern B forming, monitor for watchlist add today).

**Backlog (in returned 20):** 18 E1 + 18 E2 + 12 E3 + 6 E4 + 3 E5 = **57 emails owed in pendingUsers cohort (was 54 on May 1, +3 in 5 days).** Plus ~40+ graveyard catch-up sends below truncation horizon.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 99 of 100% null-on-add.** **0 of 86 watchlist items have a `target_price`.** New item added during gap (jadbennis0 / Inter Miami May 17) — also null. The interlock from May 1 holds: SMTP fix without target-price fix produces zero alerts; target-price fix without SMTP fix produces zero alert emails. **Both gaps must close.**
- **Three-month milestone:** Day 99 is the eve of the Day 100 milestone for the null-target streak. **By tomorrow this becomes a one-line headline metric** — useful for engineering escalation framing.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 94 days** since last organic signup (roos_leeuwen, 2026-02-01). +14 user registrations in 19 days, **0 newsletter signups** in the same window. Decision past the fourth week. **Re-flagging the May 1 recommendation:** deprecate homepage newsletter as a primary signup surface; move opt-in to watchlist add-confirm flow. Engineering owns this.

## Platform Context
- Total users: **66** (was 64 on May 1, +2 — joseph.g.nicolosi May 4, jadbennis0 May 5)
- Users today (rolling 24h): **1** (jadbennis0)
- Users this week (rolling 7d): **2**
- Watchlist items: **86** (was 85, +1 — jadbennis0 / Inter Miami May 17)
- Past-dated watchlist items: **35 of 86 (40.7%)** — the May 1 forecast called for 32 by May 2 and 39 by May 7; today's actual is 35, on the predicted curve. **Cubs cluster (6) + Bilmuri (1) + Cubs/Wrigley May 6 (1, ending today) + the 30 prior past-dated items = 38 by tomorrow morning (44.2%).**
- Favorites: 0
- Triggered alerts: 0

User signup pace: 2 in current week is back below the late-March baseline. The 7-day rate has not recovered.

---

## Conversion Losses — Full Cubs Cluster Now Recorded

The May 1 report formally recorded tate.sheppard / Florence and ajvanprooyen / Cubs Game 1 as conversion losses. The five-day gap has now closed out the remainder of the ajvanprooyen Cubs cluster.

### ajvanprooyen — Full 6-game Cubs cluster lost
- 13 days on platform (was 8 on May 1)
- 6 watchlist items, all target_price `null`
- Daily report flags: Apr 24 → May 1 (8 consecutive). May 2-5 reports not produced. May 6: closing game today.
- **Emails delivered: 0 of any kind across all 6 events**
- **Recorded loss:** All 6 games of the Cubs/Diamondbacks/Reds cluster (May 1 vs Diamondbacks; May 2 vs Diamondbacks bobblehead; May 3 vs Diamondbacks graphic-tee; May 4-6 vs Reds). The cluster effect — multi-game tracker, fast onboarding, high-frequency engagement signal — was the strongest acquisition signal in the platform to date and produced zero contact.

### goldy.pec.2012 — Bilmuri Madison lost
- 26 days on platform (was 21 on May 1)
- Bilmuri / The Sylvee Madison May 2 — past
- **Emails delivered: 0**
- **Recorded loss:** Sub-3000-cap venue, last realistic intercept window per May 1 report was the 24h before event. Window passed silently.

### Conversion-loss tally (cumulative)
| User | Days on platform (today) | Items lost | Pattern |
|------|--------------------------|------------|---------|
| tate.sheppard | 52 | 1 (Florence) | A — single high-intent |
| ajvanprooyen | 13 | **6 of 6** (full Cubs cluster) | A+ — multi-event cluster |
| goldy.pec.2012 | 26 | 1 (Bilmuri Madison) | A — single high-intent, near-event |
| 2510soccerboy | (Apr 25 event, 11 days post) | 1 (Viva El Jaripeo) | A — recovery survey 9 days overdue |

**Four formally recorded conversion-loss users; 9 lost events across them.** The full Cubs cluster recording is the most damaging single-user record on the platform — the highest-engagement user the funnel has acquired in May was the worst-served.

---

## Watchlist Digest Prep — Tier-Compressed Version (Scope Contraction)

### Past-Event Cleanup
35 of 86 (40.7%) past-dated. By tomorrow morning the final Cubs game pushes it to **38 of 86 (44.2%)**. Same ask as May 1 (and Apr 29-30): `status` column + auto-expiry cron. The downstream-noise cost is now demonstrable on every analytics query.

### TIER 0 — Last-Realistic-Intercept (within 7 days)
**Empty.** The May 1 report's 8 entries in this tier all aged out during the gap. The next event after today's Cubs Reds finale is Inter Miami May 17 (11 days out — Tier 1 boundary). **No Tier 0 sends to draft today.**

### TIER 1 — Mid-Window (8-21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Pattern |
|-------|------|----------|------|------------------|------------|---------|
| **Inter Miami vs Portland Timbers** | May 17 | 11 | jadbennis0 | 0 | pre-E1 | unknown (1 item) |
| **Bruno Mars Soldier Field night 1** | May 16 | 10 | konman87 | 93 | post-E5 graveyard | A |
| **Bruno Mars Soldier Field night 2** | May 17 | 11 | konman87 | 93 | post-E5 graveyard | A |
| **Bruno Mars Ohio Stadium** | May 20 | 14 | charlesteel126 | 13 | **E3 today** | A |
| **AEW Double or Nothing** | May 24 | 18 | joshdguillemette | 16 | E3 (May 3 silent) | A |
| **Bruno Mars MetLife ×3** | Aug 21-25 | 107-111 | taranimeramaro | 10 | E2 (May 2 silent) | A (3 items, same artist) |

### TIER 1 send templates (right-shape today)

**charlesteel126 — Bruno Mars Columbus (E3 trigger today + 14 days out)**
- Template: standard E3 ("The Best Time to Buy Tickets — Data-Backed") **layered with event-specific data on Wednesday-night Ohio Stadium pricing**.
- Subject A: `Bruno Mars Columbus — 14 days out, here's the data on Wednesday-night stadium pricing` (carryover from May 1 with day-count update from 19 to 14 — sharper)
- Subject B: `You set this 14 days ago: Bruno Mars Columbus pricing update`
- **Recommend A.** The May 1 hypothesis was "data over reassurance for mid-window users"; today the data argument is even stronger because we now have 14 days of would-have-been-tracked pricing the user never saw.
- CTA: `/watchlist?event=bruno-mars-columbus` — **deep-link justified** by the event-specific re-engagement context (catch-up shape, narrow intent surface).

**joshdguillemette — AEW Double or Nothing (E3 crossed May 3 silent + 18 days out)**
- Template: standard E3 + AEW-specific framing (combat-sport pricing curves are different from concerts — show floor compresses 7-10 days out, not at door).
- Subject A: `AEW Double or Nothing — your tracked event is 18 days out + here's the floor curve`
- Subject B: `Pro wrestling pricing is different — here's why your AEW window matters`
- **Recommend A.** Time-anchor + data is the established pattern.
- CTA: `/compare?event=aew-double-or-nothing` (price-comparison, primary action surface) — conforms to CTA simplification rule.

**jadbennis0 — Inter Miami May 17 (0 days, brand-new)**
- Template: pre-E1 welcome digest, low-pressure. Pattern unknown — they added a watchlist item on day-of-signup, which weakly signals Pattern A, but the sample is one event.
- Subject A: `Welcome — your Inter Miami match is 11 days out`
- Subject B: `Inter Miami CF vs Portland Timbers — what we'll send you next`
- **Recommend A.** Day-of-signup + watchlist add is the strongest possible early intent signal; lead with the event the user came for, not platform meta.
- CTA: `/watchlist` (the user has 1 item; targeting it is right) — conforms.

**konman87 — Bruno Mars Soldier Field nights 1+2 (post-E5 graveyard, 10-11 days out)**
- Same as May 1: catch-up apology + targeted Soldier-Field digest. The 93-day silence tax is now a structural feature of the send, not a footnote. The right shape is "we owe you the catch-up + here's the Soldier Field night-1-vs-night-2 pricing differential, which is the actual decision you're trying to make."
- Subject A: `Soldier Field nights 1 and 2 — the price gap is bigger than you'd think (and we owe you a catch-up)`
- Subject B: `We've been quiet — and Bruno Mars Soldier Field is 10 days away`
- **Recommend A.** Lead with the actionable insight; bracket-reference the apology. konman87 registered to track the event, not to receive an apology email.
- CTA: `/watchlist?event=bruno-mars-soldier-field` — deep-link justified by 93-day silence (catch-up exception from May 1's documented rule).

### TIER 2 — World Cup (45+ days)
- **pete.uzelac77** — 25 days, 6 items (4 WC + 2 Darts), first match June 14 (39 days). Carryover from May 1 with the 5-day reduction. Subject A locked: `Don't buy your World Cup tickets in May — here's why`.

### TIER 3 — Pattern B Variants
- **lilianamasyrubi (E2 crossed May 5, 0 watchlist still)** — 8 days, Pattern B confirmed. The May 1 Pattern B-at-E1 variant was right-shape but the user is now at E2 with 0 anchor still. The right send today is **Pattern B-at-E2** (longer than E1, but still no watchlist anchor). Subject A: `Still figuring out what to track? Here are the 3 events trending on TicketScan this week.`
- **zhili1208 (E2 crossed today, 0 watchlist)** — 7 days, Pattern B confirmed. **Same Pattern B-at-E2 variant.** Pre-stage subject patch: `Still figuring out what to track? Here are the 3 events trending on TicketScan this week.`
- **dylanbaldy (E3 crossed Apr 29 silent, 0 watchlist)** — Pattern B-at-E3 template drafted Apr 28; applies. The 7-day silence past E3 trigger does not change the shape (still no anchor).
- **ggri73, awwhittington, mark.murdock, joseph.g.nicolosi (forming)** — channel-blocked.

### TIER 4 — Apology / Catch-Up (>21d silent backlog)
- **blubberboi (E4 May 1 + E5 crosses May 9 — 32 days silent in 3 days)** — first user to cross E4 and approach E5 with all prior emails skipped. Catch-up apology shape from May 1 still right; sharpen the day-count framing in the subject.
- **bhaygood728 (E5 crossed May 3 silent, 33 days silent)** — first user to cross E5 from inside the visible cohort. Pattern unknown (no watchlist data returned). Catch-up apology shape, generic-content variant.
- **laye.aurelien (E5 crossed May 2 silent, 34 days silent)** — Shakira ×2 (Aug 2026). Catch-up apology + Shakira content.
- **8+ users below truncation horizon, all >35 days silent** — graveyard cohort, single low-touch acknowledgment send post-SMTP fix.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| charlesteel126 / Bruno Mars Columbus E3 | `Bruno Mars Columbus — 14 days out, here's the data on Wednesday-night stadium pricing` | `You set this 14 days ago: Bruno Mars Columbus pricing update` | A |
| joshdguillemette / AEW E3 | `AEW Double or Nothing — your tracked event is 18 days out + here's the floor curve` | `Pro wrestling pricing is different — here's why your AEW window matters` | A |
| jadbennis0 / Inter Miami pre-E1 welcome | `Welcome — your Inter Miami match is 11 days out` | `Inter Miami CF vs Portland Timbers — what we'll send you next` | A |
| konman87 / Soldier Field catch-up + tactical | `Soldier Field nights 1 and 2 — the price gap is bigger than you'd think (and we owe you a catch-up)` | `We've been quiet — and Bruno Mars Soldier Field is 10 days away` | A |
| Pattern B-at-E2 (lilianamasyrubi today, zhili1208 today) | `Still figuring out what to track? Here are the 3 events trending on TicketScan this week.` | `7 days in, 0 events tracked — would these help?` | A |
| Catch-up apology (blubberboi, bhaygood728, laye.aurelien) | `We've been quiet for [X] weeks — here's what you missed ([event])` | `[Event] is [Y] days away — and we owe you a catch-up` | A |

**CTA conformance:** 5 of 6 use top-level routes (`/dashboard`, `/watchlist`, `/compare`); 4 of 6 use event-specific deep-links justified by the >14-day-silent or catch-up exception. The exception rule from May 1 holds as written.

---

## Action Items

### P0 — Critical (Day 30 of outage)
1. **SMTP / drip pipeline — DAY 30.** Same probe failure as Days 11-29. **Engineering ownership unchanged. The fix is not on this side of the report stream.** Carrying the May 1 recommended fix sequence: regenerate Gmail app password → audit handler for top-of-route `transporter.verify()` → verify Railway port 587 egress → wrap drip handler in `Promise.allSettled` with per-user timeout → re-test with `?limit=1&dryRun=true` first. **Day 30 escalation framing:** the cost is no longer hypothetical at the user-or-event level — it's recordable as "4 users, 9 missed events, 0 sends, 100% silent funnel" in a single sentence to engineering.
2. **Tier 1 charlesteel126 + joshdguillemette + konman87 + jadbennis0 sends.** Once SMTP returns, these four are the front of the queue (Bruno Mars Columbus, AEW, Soldier Field nights, Inter Miami). All four templates drafted above.
3. **Target-price UX (Day 99).** 0 of 86 watchlist items have a target. **Day 100 milestone tomorrow.** Parallel track to SMTP fix. Same as May 1.

### P1 — High
4. **Past-event watchlist cleanup (40.7% bloat → 44.2% by tomorrow).** Adding `status` column + daily expiry cron. Same as May 1 / Apr 29-30. **Cost framing for engineering:** every analytics query downstream of the `watchlist` table is now ~41-44% noise. Every dashboard, every digest, every cohort filter.
5. **Backlog catch-up plan when SMTP returns:** apology email first (single template, parameterized by user-event), then E1 at +48h, then resume cadence. **First three triggers in queue:** blubberboi (E4 + approaching E5), bhaygood728 (E5 silent), laye.aurelien (E5 silent). 10 threshold crossings in 5 days have grown the apology-first queue substantially.
6. **Newsletter growth — Day 94.** 14 user registrations / 0 newsletter signups in the last 19 days. Decision is concrete: deprecate homepage form, move opt-in to watchlist add-confirm post-SMTP. Reflag this with engineering.
7. **pete.uzelac77 World Cup re-engagement** — 25 days on platform, 6 items, 39 days to first match. Same as May 1 with day-count refresh.

### P2 — Medium
8. **Watchlist digest endpoint — still manual.** Today's report has 6 distinct send templates hand-composed. Bottleneck at sustainable peak (carrying from Apr 28).
9. **Long-tail dormants (10+ users at 70-100+ days from event, zero contact).** Single low-touch acknowledgment send post-SMTP.
10. **Viva El Jaripeo post-mortem — 9 DAYS OVERDUE.** Self-imposed scope-contraction commitment from May 1 has now triggered (today's report is the contracted version). The post-mortem artifact remains undelivered. **Re-flag as a closed item:** the daily report scope contraction is now in effect; the post-mortem is no longer driving daily-scope decisions but remains an open content debt.

### Tracking metrics (continued)
- **Tactical-window degradation:** Day 30 — top-tier queue is empty. The May 1 framing of "tactical with honesty" is now obsolete; everything outstanding is apology-shape or pre-event-by-mid-window. **The next "tactical with honesty" window opens around May 9-10** when Bruno Mars Soldier Field hits 7 days out.
- **CTA simplification rule conformance:** 67% today (top-level) / 67% deep-link-justified (>14d silent or catch-up exception). The exception is no longer an "exception" — it's the dominant case during the apology-shape phase.
- **Forecast streak:** Calendar-accuracy unchanged. **First qualitative miss recorded May 1** (lilianamasyrubi watchlist forecast). Today is the eighth full day of Pattern B confirmation for that user (still 0 watchlist items at Day 8). The qualitative forecast track-record is 0 for 1.
- **Pattern mix:** Recent 8-user cohort updated for the gap period — adding joseph.g.nicolosi (forming, unknown), jadbennis0 (forming, weak Pattern A signal from same-day watchlist add). **Recent 10-user cohort: ~50% Pattern B confirmed/forming, ~30% Pattern A, ~20% unknown.** The Pattern B share remains elevated vs. the 40% prior, but the new same-day watchlist signal from jadbennis0 is the first Pattern A signal in 8 signups. Monitor.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **94 consecutive days flat**. Recommendation unchanged.
- **Drip pipeline:** UN-SHIPPED. **Day 30 of outage.** 0 sends ever. 66 of 66 users have never received a drip email. Backlog: 57 in returned cohort + ~40 graveyard ≈ 97 owed sends. **10 threshold crossings in the 5-day reporting gap, all silent.**
- **Price alerts:** 0 ever triggered. **0 of 86 watchlist items have a target price** — Day 99, milestone tomorrow.
- **User growth:** **+2 in 5 days** (joseph.g.nicolosi May 4, jadbennis0 May 5). Total 66, was 64 on May 1. 7-day rolling = 2 (below late-March baseline).
- **Watchlist composition:** 86 total (+1 in gap) — 35 past-dated (40.7%) → 38 by tomorrow (44.2%). 0 within 7 days, 6 in 8-21 day window, 1 in 22-30 day window, 43+ beyond 30 days.
- **Conversion losses recorded cumulatively:** tate.sheppard / Florence (1 item, 52 days), **ajvanprooyen / Cubs full cluster (6 of 6 items, 13 days)**, goldy.pec.2012 / Bilmuri (1 item, 26 days), 2510soccerboy / Viva El Jaripeo (1 item, 11 days post-event). **4 users, 9 lost events.**
- **Tomorrow's only crossing:** joseph.g.nicolosi E1 (May 7 21:39 UTC).
- **Pattern mix shift continuing:** Recent 10-user cohort ~50% Pattern B confirmed/forming. The first new Pattern A signal in 8 signups (jadbennis0 same-day watchlist add) — monitor for trend reversal vs. continued shift.
- **Email channel status:** Day 30 of outage. Reclassified from "broken" to "un-shipped" since Apr 20. **The growth team continues acquiring users into a pipeline that does not exist.**
- **Most useful single observation today:** the cumulative loss tally is now consolidated into a single sentence — "4 users, 9 missed events, 0 sends, 100% silent funnel since launch" — which is the right escalation frame for engineering. The previous report's framing ("tomorrow's intercept windows") has been superseded by today's framing ("the queue is empty for 9 days because the active windows have all expired").
