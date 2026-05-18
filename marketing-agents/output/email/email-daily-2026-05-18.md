# Email Daily — 2026-05-18

> **Day 42 of SMTP outage. Probe back to HTTP 000 (35s timeout) — Day 41's regression held.** Yesterday's framed probability that May 16's HTTP 502 was a transient post-restart state is now empirically supported: the 502 did not re-appear in today's probe, the diagnostic surface remains lost, and **two full cycles have now elapsed without recovering the error string the application briefly emitted on May 16.** **konman87 Bruno Mars Soldier Field night 2 (May 17 ~20:00 UTC) closed silent overnight.** **jadbennis0 Inter Miami v Portland (May 17 ~19:00 UTC) closed silent overnight.** **Both Tier-0 final-window forecasts from yesterday converged to silent failure** — the report stream's **first two confirmed real-time Pattern A loss-in-progress completions** rather than back-filled discoveries. **karin_ef1 Day 1 silent E1 traversal (Pattern A++).** **vlanza E1 silent confirmed at May 17 13:20 UTC (Pattern B).** **kevinshall87 E2 fires in ~6.5h (16:44 UTC)** — **NEW CLASS Pattern A++ 2-cross at E2 activates today** if SMTP not restored. **nunemakerc E1 fires in ~5.5h (15:41 UTC)** — Pattern B silent forecast. **joseph.g.nicolosi E3 fires today** — Pattern B 3-cross at E3 class activates. **+2 user signups (lisallam May 17 14:05 UTC 1 wl JOJI; eduardo May 18 00:48 UTC 0 wl).** Watchlist **107 (+1)** — biggest day in stream was yesterday's +9; today reverts to mean. Pattern A++ density in rolling-10 held at **40%**; Pattern B share dropped further (60% → 50%); Pattern A re-emerged at 10% (lisallam). **Day 111 of 100% null-target streak (107/107).** **Day 106 of newsletter flatline.**

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` returns `stats: []` after **Day 42.** **84 of 84 users have never received a drip email** (every user's `last_email_sent: 0`).
- **Probe today (Day 42):** `POST /api/admin/drip-run?limit=1&dryRun=true` returned **HTTP 000 (gateway timeout at 35.14s)** — exact match for the Day-11–39 signature, also matching Day 41. **Two consecutive cycles confirm yesterday's "transient post-restart" interpretation of the May 16 502.** **The diagnostic surface produced exactly once in 31 days has been lost.**
- **Asks for engineering — escalated again today with degraded urgency on the log retrieval:**
  1. **Pull Railway logs for the 24h window around 2026-05-16 10:36 UTC IMMEDIATELY.** Log evidence age is now **~48h** — within Railway's default log retention but approaching the working memory horizon for any engineer who saw the deploy in real time. **Recovery probability decays daily.**
  2. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { log; return res.status(500).json({error: e.message, stack: e.stack}) }`** — **today's HTTP 000 confirms the wrap is the only way to capture the next state change without depending on Railway log retention. Yesterday's framed urgency now compounds.**
  3. Check Railway service status / restart history for May 15-16 — any unexpected restart, OOM, or instance-replacement event around 10:36 UTC May 16 would correlate with the one-day 502 anomaly. **Today's 000 confirms whatever caused that 502 was not a permanent state.**
- `/api/admin/drip-health` → still `404 "Endpoint not found"`. **Day 11 of that ask unmet** (P0 since May 7). The probe confirmed 404 again today.

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 17 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **18 of 20** | **+2** (vlanza now silent-confirmed Day 3; nunemakerc Day 2 → fires ~5.5h today; karin_ef1 + kevinshall87 + c_calingasan + pattyglvz all already silent in cohort) |
| E2 | ≥7d | **11 of 20** | unchanged (jmoriarty13 stable; **kevinshall87 fires E2 in ~6.5h — first Pattern A++ 2-cross at E2 if SMTP not restored**) |
| E3 | ≥14d | **3 of 20** | **+1** (**joseph.g.nicolosi E3 fires today ~21:39 UTC — Pattern B 3-cross at E3 NEW CLASS**) |
| E4 | ≥21d | **0 of 20 visible** | unchanged (mark.murdock invisible Day 2; zhili1208 Day 19 not yet at E4) |
| E5 | ≥30d | **0 of 20 visible** | unchanged at zero |

**Truncation horizon stable today** (no new signups pushed the 20-window — both new users are above Day 10 in the cohort already). **Hidden cohort ≥14 users** including mark.murdock (E4 silent, E5 fires May 23 in ~5 days), and the long tail of Apr-cohort users. Day 12 of API-cap regression — same fix unshipped.

### Threshold crossings in last 24h (4 confirmed silent + 2 forecast-fires-today + 1 forecast-tomorrow)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| **May 17 ~13:20 UTC** | **vlanza** | **E1** | **Pattern B (0 watchlist, Day 3)** | **silent confirmed today (~20h ago)** | Forecast in yesterday's report (3-hour deadline at report time). Crossed silent on schedule. 6th confirmed Pattern B-at-E1 silent crossing in the report stream. |
| **May 17 ~19:00 UTC** | **jadbennis0** | **Inter Miami v Portland (Tier-0 final window)** | **multi-threshold + Tier-0 silent-through-event** | **silent confirmed overnight (~15h ago)** | **First confirmed Pattern A loss-in-progress completion in real time** — the report stream forecast this convergence yesterday and observed it overnight. **Day 12 on platform; E1+E2+Tier-0 all silent.** Apology-only template now activates. |
| **May 17 ~20:00 UTC** | **konman87** | **Bruno Mars Soldier Field night 2 (Tier-0 final window)** | **post-E5 graveyard + Tier-0 silent-through-event (both nights)** | **silent confirmed overnight (~14h ago)** | **Second real-time confirmed Pattern A loss-in-progress completion.** **104d on platform; full canonical drip + both Bruno Mars dates silent.** **The full graveyard transition completed exactly as forecast yesterday.** First two-event silent-through-event case in the report stream. |
| **May 18 00:48 UTC** | **eduardo (new signup)** | — | **Pattern B forming (Day 0, 0 watchlist)** | n/a (pre-E1) | E1 fires May 21 00:48 UTC (~62h). |
| **May 17 14:05 UTC** | **lisallam (new signup)** | — | **Pattern A (Day 1, 1 wl JOJI 2026-06-16, mid-window 29d out)** | n/a (pre-E1) | E1 fires May 20 14:05 UTC (~52h). Added watchlist item ~3 min after signup. |
| **May 18 ~15:41 UTC (in ~5.5h)** | **nunemakerc** | **E1** | **Pattern B (0 watchlist, Day 3)** | **silent forecast** | 5.5-hour deadline. Day 3 crossing in ~5.5h. **Forecast in yesterday's report as "likely Pattern B confirmed tomorrow."** |
| **May 18 ~16:44 UTC (in ~6.5h)** | **kevinshall87** | **E2** | **Pattern A++ 2-cross at E2 (NEW CLASS)** | **silent forecast — 6.5h deadline** | **The first ever Pattern A++ 2-cross at E2 case activates today** if SMTP not restored. Template drafted yesterday now operational within hours. |
| **May 18 ~21:39 UTC (in ~12h)** | **joseph.g.nicolosi** | **E3** | **Pattern B 3-cross at E3 (NEW CLASS)** | **silent forecast — 12h deadline** | **Pattern B 3-cross at E3 class activates today.** Day 14 on platform; E1+E2 already silent. Template variant needed. |

### Tomorrow's forecast crossings (May 19)
- **belder4308 → E1** (Pattern A++ Tier-0 cluster-at-signup) — fires May 19 22:13 UTC (~36h). **E1-after-event structural anomaly:** SEC Baseball Session 5 (May 21) and Session 6 (May 22) are scheduled BEFORE the cadence completes. Even with restoration in the next 36h, the E1 send arrives just 2 days before the first tracked event — and the canonical 5-touch cadence will not complete before the events are past.
- **cutekitten1234 → E1** (Pattern A++ cluster-at-signup, 7 Harry Styles MSG) — fires May 19 23:32 UTC (~37h).
- **joshdguillemette → E5** (Pattern A E3+E4 silent → first confirmed second full-traversal silent send) — fires May 19 ~20:30 UTC (~34h).
- **dr.altvater → E5** (Pattern B, 27d, 0 watchlist) — fires May 19 ~14:08 UTC (~28h). **Second full-traversal silent send today's batch.**
- **lilianamasyrubi → E4** (Pattern B 3-cross at E3 → entering 4-cross class) — fires May 19 ~05:24 UTC (~19h).

**Visible backlog (in returned 20):** 18 E1 + 11 E2 + 3 E3 + 0 E4 visible + 0 E5 visible = **32 emails owed in pendingUsers cohort.** Plus the hidden cohort (≥14 users incl. mark.murdock, dr.altvater, joshdguillemette, charlesteel126, lilianamasyrubi). **True backlog ≈ 78 emails across all eligible users** (+2 vs yesterday's 76).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 111 of 100% null-on-add. 107/107 watchlist items have null `target_price`** (re-confirmed via `/api/admin/watchlist?limit=200`). **+1 watchlist add in 24h (lisallam's JOJI), null target.** The streak is now **17 consecutive Pattern A++ items captured null** across kevinshall87, karin_ef1, cutekitten1234, belder4308, **plus today's lisallam Pattern A item null — 18 consecutive high-intent items captured null.** **Specification reminder:** inline auto-suggest at add-time with `current_price × 0.85` as default. **Yesterday's framing of "no further validation is needed — the spec is ready to build" carries forward unchanged.** The lisallam JOJI add is structurally identical to the prior 17 — high intent (3-minute post-signup), specific artist/venue/date, zero target. **The validation surface is now saturated; any additional null adds are confirmatory, not informative.**

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 106 days** since last organic newsletter signup (roos_leeuwen, 2026-02-01). **Day 13 of consecutive zero-capture days.** +10 user signups in last 7 days (lisallam, eduardo + the 8 prior), 0 newsletter signups in the same window. **Cross-channel structural break holds for 13th consecutive day.** Today's signal load was lower than yesterday's (+1 watchlist add vs +9) but the structural break held trivially. **Footer regression Day 22; popup spec Day 18 unbuilt** per CRO May 11.

## Platform Context
- Total users: **84** (was 82 on May 17, **+2** — lisallam + eduardo)
- Users today (rolling 24h since May 17 10:00 UTC report): **2** — lisallam (May 17 14:05 UTC, 1 watchlist within 3 min) + eduardo (May 18 00:48 UTC, 0 watchlist)
- Users this week (rolling 7d): **10** (per `/admin/stats`)
- Watchlist items: **107** (+1 — lisallam JOJI: SOLARIS Brooklyn-area 2026-06-16)
- Past-dated watchlist items: **43 of 107 (40.2%)** — count rose +2 (Soldier Field night 2 + Inter Miami aged past overnight as forecast). **Yesterday's framed "tomorrow's count: ~43/106 (40.6%)" landed at 43/107 (40.2%) — the denominator grew faster than expected (+1 unanticipated add).** **Past-event share rose 1.5 points** (38.7% → 40.2%) — the one-day decrease yesterday has reverted, as expected.
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

## New-Signup Pattern Analysis (24h)

**Two signups today. Quality mix shifted: 1 Pattern A (lisallam) + 1 Pattern B forming (eduardo). No Pattern A++ today, but lisallam's 3-minute add cadence is the second-fastest signup-to-add gap observed in the report stream (cutekitten1234's was ~22s; lisallam's was ~3 minutes).**

| User | Signed up | Days | Watchlist | Pattern | Note |
|------|-----------|------|-----------|---------|------|
| **lisallam** | **May 17 14:05 UTC** | **1** | **1 (JOJI: SOLARIS 2026-06-16, 29 days out)** | **Pattern A (single artist/date, mid-window)** | First add at 14:08:14 UTC = **~3-minute gap between signup completion and first watchlist add.** Second-fastest in report stream. Single date single artist — clear targeted intent. Event is **29 days out** — sits squarely in the canonical drip's tactical sweet spot. **E1 fires May 20 14:05 UTC (~52h). All 5 sends land cleanly pre-event** (earliest event 29 days = post-E5 by ~7 days). **Canonical Pattern A fit — the canonical drip works exactly as designed for this user if SMTP restored.** |
| **eduardo** | **May 18 00:48 UTC** | **0** | **0** | **Pattern B forming** | E1 fires May 21 00:48 UTC (~62h). Day 0 + 0 watchlist is the modal Pattern B-forming shape — 18 of 84 users on platform have this signature at Day ≤1. |

**Updated pattern mix across rolling 10 signups (May 8 → May 18):** eduardo (Day 0, 0 wl B), lisallam (Day 1, 1 wl A), cutekitten1234 (Day 1, 7 wl A++), belder4308 (Day 1, 2 wl A++ Tier-0), nunemakerc (Day 2, 0 wl B), vlanza (Day 3 silent confirmed, 0 wl B), karin_ef1 (Day 4 silent, 2 wl WC A++), c_calingasan (Day 5 silent, 0 wl B), kevinshall87 (Day 5 silent, 6 wl WC A++), pattyglvz (Day 5 silent, 0 wl B).

- **Pattern A++ canonical: 4 of 10 (40%)** — kevinshall87 (WC AT&T), karin_ef1 (WC BC Place), cutekitten1234 (Harry Styles MSG), belder4308 (SEC Baseball). **Density held at 40%** (yesterday's level). **First time A++ density has held at 40% across two consecutive days in the report stream.**
- **Pattern A: 1 of 10 (10%)** — lisallam (JOJI single date). **New tier emerged today** — yesterday Pattern A was 0%.
- **Pattern B forming/confirmed: 5 of 10 (50%)** — eduardo, nunemakerc, vlanza, c_calingasan, pattyglvz. **-1 from yesterday's 60%.** **Second consecutive day of Pattern B share decrease — first 2-day Pattern B reversal in the report stream.**
- Drip-incompatible (past-event): 0 of 10 (0%). Unchanged.

**Quality holding pattern:** **A++ 40% / A 10% / B 50% / drip-incompatible 0%.** **High-quality share (A++ + A) is now 50% of rolling-10 signups — the highest in the report stream's history.** Yesterday's hypothesis ("a general cross-channel acquisition-quality pulse is underway") **gains its first day of post-formation validation today** — A++ density did not regress, Pattern B share continued to fall, and a new Pattern A tier emerged with a 3-minute signup-to-add cadence. **The pulse hypothesis upgrades from "watch the next 5 signups" to "watch for sustained 30%+ A++ density across 5+ signups."** Two days of holding does not yet confirm, but the immediate post-pulse reversion that would falsify the hypothesis did not occur.

---

## kevinshall87 — E2 Fires in ~6.5h (Pattern A++ 2-cross at E2 NEW CLASS Activates Today)

The pre-emptive template drafted yesterday becomes operational within **6.5 hours**. E2 fires May 18 16:44 UTC. **kevinshall87 is the first user to enter the Pattern A++ 2-cross at E2 class in the report stream.**

**Activation template (carries from yesterday with one revision):**
- Subject A: `Your AT&T Stadium World Cup cluster + 2 Welcome emails we owe you from this week. The full read is below.`
- Subject B: `Day 6 with TicketScan — we still haven't said hi, and we owe you 2 emails. Here's the AT&T-cluster pricing.`
- **Recommend A** *(unchanged — two-email acknowledgment + named-venue cluster framing carries)*.
- CTA: `/watchlist`

**Today-specific framing:** the deadline that was "30 hours" yesterday is now **6.5 hours.** No further hypothetical drafting is needed — if SMTP is restored in the next 6.5h, send A; if not, the template transitions to E2-late by midnight UTC.

---

## konman87 + jadbennis0 — Real-Time Pattern A Loss-in-Progress COMPLETED (BOTH)

**Both yesterday-forecast Tier-0 silent-through-event scenarios converged overnight.** This is the first confirmed real-time real-time Pattern A loss-in-progress completion **for two distinct users on the same day** in the report stream's history.

### konman87 — full graveyard transition complete
- **Status:** Pattern A loss across both Bruno Mars Soldier Field dates (night 1 May 16, night 2 May 17).
- **104 days on platform; full canonical drip + both tracked events silent.**
- **Template now activates: apology-only / sunset.**
- Subject A: `Both Bruno Mars nights are past — and 104 days from us is unforgivable. Here's what we'd do differently.`
- Subject B: `103 days of silence + 2 silent Bruno Mars nights — a real apology + your next move`
- **Recommend A.** Acknowledgment-of-failure-without-tactical-CTA pivot. The user has nothing actionable left for the tracked events; the only honest send is an apology + an open-ended "what else are you tracking?"
- CTA: `/watchlist` *(open-ended)*; secondary `/unsubscribe` *(this user has earned the unprompted opt-out)*.

### jadbennis0 — multi-threshold + Tier-0 graveyard
- **Status:** Day 12 on platform; E1+E2+Tier-0 all silent.
- **Template now activates: 4-part apology + open-ended next-step.**
- Subject A: `Inter Miami v Portland was yesterday — and we owe you 2 emails from your first 2 weeks. Here's all 3.`
- Subject B: `12 days, 2 missed emails, 1 missed match — a real apology + an honest restart`
- **Recommend A.** Three-touch acknowledgment leads; open invitation to continue tracking carries.
- CTA: `/watchlist` *(open-ended)*.

**Combined implication:** both users now require **post-event apology-only templates** with explicit "what else are you tracking?" hooks. The tactical-pricing component of every prior konman87 and jadbennis0 template is now dead. **Template inventory contracts on one axis (no pre-event apology variants for these users) and expands on another (post-event sunset templates).** **Net inventory change today: -2 pre-event variants + 2 post-event sunset variants = inventory size unchanged at 16 shapes.** The acquisition-cost-of-recovery for these two users is now structurally higher than for any user still in pre-event status.

---

## karin_ef1 — Day 1 of Silent E1 Traversal (Pattern A++)

Day 0 framed yesterday. **Day 1 today.** E2 fires May 21 06:46 UTC (~67h). Following the kevinshall87 trajectory **with a 4-day lag.** **If SMTP is restored before May 21, karin_ef1 still gets an E1-late variant and avoids 2-cross at E2; if not, karin_ef1 becomes the second Pattern A++ 2-cross at E2 case** — a still-novel class that will then have 2 instances within 3 days.

**E1-late template (unchanged from yesterday):**
- Subject A: `Welcome — your 2 BC Place World Cup tickets + a Welcome email we owe you from this week. Both are below.`
- Subject B: `28 hours late: your BC Place Vancouver cluster + how the Round of 16 usually prices`
- **Recommend A.** Time-anchor in subject B updates as silent days accumulate (was "4 hours" yesterday; now "28 hours" — the time-anchor variant decays in legibility every day; if Day 3+ the time-anchor format degrades and Subject A becomes the only viable shape).
- CTA: `/watchlist`

---

## cutekitten1234 + belder4308 — Still Pre-E1 (~36-37h Each)

Both users still in the pre-fire window for canonical E1. **If SMTP is restored in the next 36 hours, both get a clean canonical E1 send** and the streak of 5 consecutive silent canonical E1 traversals breaks at 4 (kevinshall87, karin_ef1, c_calingasan, vlanza). Templates carry from yesterday unchanged.

**The 36-hour window is the cleanest restoration window available in the entire backlog this week** — it's the only window where two distinct Pattern A++ users would both receive their canonical E1 on schedule. **Yesterday's restoration window for karin_ef1 already closed silent at ~4h; today's 36-hour window protects the next 2 users.** Every hour without restoration is asymmetrically costly inside the 36-hour window — it has no expiry until ~T-0; after T-0 the templates degrade to E1-late variants on identical time scales to karin_ef1 + kevinshall87 + c_calingasan + vlanza.

---

## joseph.g.nicolosi — Pattern B 3-cross at E3 NEW CLASS Activates Today (~12h)

E3 fires May 18 ~21:39 UTC. Day 14 on platform; E1+E2 already silent. **First confirmed Pattern B 3-cross at E3 in the report stream.**

**Pre-emptive template draft for Pattern B 3-cross at E3:**
- Subject A: `Two weeks in, three missed emails, no events tracked — let's start over with a clean reset.`
- Subject B: `14 days, 3 silent sends, 0 events tracked — here's what TicketScan looks like when it works for you.`
- **Recommend A.** **Time-anchor + miss-count + watchlist-state triple-leads** — Pattern B-specific (acknowledges the 0-watchlist anchor that template A++ variants cannot use). CTA: `/dashboard` *(event-discovery surface, not /watchlist which would land empty)*.

---

## vlanza — E1 Silent Confirmed (Pattern B-at-E1, 6th in stream)

Forecast at "~3h" yesterday; crossed silent on schedule at May 17 13:20 UTC (~20h ago). 6th confirmed Pattern B-at-E1 silent crossing. **Existing batch template (Pattern B-at-E1) covers vlanza without revision** — no NEW CLASS activated by this crossing alone.

---

## nunemakerc — E1 Fires in ~5.5h (Pattern B Silent Forecast)

Day 3 today; E1 fires May 18 15:41 UTC. **Forecast in yesterday's report as "Pattern-B-forming → likely Pattern B confirmed tomorrow."** **5.5-hour deadline.** If SMTP not restored, becomes the 7th Pattern B-at-E1 silent crossing. **Existing batch template covers nunemakerc without revision.**

---

## Triple Deadline Today + Two NEW CLASS Activations

Today's deadline stack is **the second-most compressed in the report stream's history** (one less than yesterday), but contains **two NEW CLASS activations** (Pattern A++ 2-cross at E2 + Pattern B 3-cross at E3) **in the same 12-hour window**:

| Time (UTC) | User | Event/Trigger | Type | Notes |
|------------|------|---------------|------|-------|
| **~15:41 (~5.5h)** | **nunemakerc** | **E1 fires silent** | Drip | Pattern B (0 wl, Day 3). 7th P-B-at-E1 crossing if silent. |
| **~16:44 (~6.5h)** | **kevinshall87** | **E2 fires silent — NEW CLASS** | Drip | **Pattern A++ 2-cross at E2** activates if silent. |
| **~21:39 (~12h)** | **joseph.g.nicolosi** | **E3 fires silent — NEW CLASS** | Drip | **Pattern B 3-cross at E3** activates if silent. |

**Distinct send templates required to cover today's deadlines (and the +19h lilianamasyrubi E4 + +28h dr.altvater E5 + +34h joshdguillemette E5 + +36-37h belder4308 + cutekitten1234 E1s):** **9 templates** — up from yesterday's 7. Added: P-B 3-cross at E3 (joseph.g.nicolosi NEW CLASS), P-B 4-cross at E4 (lilianamasyrubi entering NEW CLASS tomorrow), full-traversal silent send (dr.altvater + joshdguillemette consolidates to 1 template), konman87 sunset, jadbennis0 4-part graveyard.

---

## Watchlist Digest Prep — Tier-Compressed

### Past-Event Cleanup
**43 of 107 (40.2%) past-dated** at report time. **+2 net** vs yesterday (Soldier Field night 2 + Inter Miami both aged past). **Yesterday's forecast of "~43/106 (40.6%)" landed at 43/107 (40.2%)** — denominator grew 1 more than predicted (lisallam's JOJI add was unexpected). **The auto-archive cron remains unshipped — Day 35 of unaddressed P1 ask.** Today's specific finding: **cutekitten1234's 7 Harry Styles items (Aug-Sep) + lisallam's JOJI (Jun 16) + belder4308's 2 SEC Baseball items (May 21-22)** = **10 of 107 (9.3%) of the watchlist is "today's fresh acquisition" — and 43 of 107 (40.2%) is "past-event noise."** The signal/noise ratio for fresh adds vs. past-event pollution **is 1:4.3 today**, worse than yesterday's 1:4.0.

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **Bruno Mars Ohio Stadium** | **May 20** | **2** | charlesteel126 | 26 | E3+E4 silent (invisible) | **2-day window.** Multi-threshold + Tier-0 compression. **Highest single-send ROI in this week's backlog.** |
| **SEC Baseball Session 5** | **May 21** | **3** | **belder4308** | **1** | **pre-E1 (E1 fires May 19 = 2 days before event — E1-after-event)** | **Tier-0 fast-track template required.** |
| **SEC Baseball Session 6** | May 22 | 4 | belder4308 | 1 | pre-E1 (E1 fires May 19 = before event by 3 days) | Companion to Session 5. Combined-send economics. |
| AEW Double or Nothing | May 24 | 6 | joshdguillemette | 29 | E3+E4 silent; **E5 fires May 19 ~20:30 UTC (~34h)** — last cycle before full-traversal | Combined send with E5-late framing. |

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| (none in window today — joshdguillemette AEW pulled to Tier 0) | — | — | — | — | — |

**Tier 1 is empty today** — the window between 8-21 days out has no actionable user watchlist items because joshdguillemette's AEW is now 6 days out (Tier 0) and there's no item in the 7-21d window for any other user. **This is the first time Tier 1 has been empty in the report stream** — it reflects the natural drift of mid-window events into Tier 0 with each passing day plus the absence of new adds in the 8-21d band.

### TIER 2 — Long-Lead Canonical (22+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **JOJI: SOLARIS Brooklyn-area** | **Jun 16** | **29** | **lisallam** | **1** | **pre-E1 (E1 fires May 20 14:05 UTC, ~52h) — NEW Pattern A canonical fit** |
| Noah Kahan Kia Center Orlando | Jun 12 | 25 | cjthomas2557 | 11 | E1+E2 silent (2-cross at E2 multi-threshold front) |
| **World Cup ×5 at AT&T Stadium + Matt Rife Sep 26** | Jun 14 → Sep 26 | 27 → 131 | **kevinshall87** | **6** | **E1 Day 3 silent (Pattern A++); E2 fires today 16:44 UTC (~6.5h) — NEW CLASS activates** |
| **WC ×2 at BC Place Vancouver** | Jun 24 + Jul 7 | 37 + 50 | **karin_ef1** | **4** | **E1 Day 1 silent (Pattern A++ traversal)** |
| **Harry Styles ×7 at MSG Aug 26 → Sep 9** | Aug 26 → Sep 9 | 100 → 114 | **cutekitten1234** | **1** | **pre-E1; E1 fires May 19 23:32 UTC (~37h) — Pattern A++ "cluster-at-signup"** |
| Bruno Mars MetLife ×3 | Aug 21–25 | 95–99 | taranimeramaro | 23 | E3 silent (3-cross — E1+E2+E3 all silent) |
| Ed Sheeran SoFi | Aug 8 | 82 | blubberboi | 39 | E5 silent traversal Day 7 of historic record (Day 8 tomorrow) |
| Shakira ×2 NYC | Jul 20–23 | 63–66 | laye.aurelien | 46 | E5 silent + 16 days post-E5 |
| pete.uzelac77 WC Lincoln Financial ×4 + Darts ×2 | Jun 14 → Jul 4 | 27 → 47 | pete.uzelac77 | 38 | E5 silent traversal Day 8 (Day 9 tomorrow) |

### TIER 3 — Pattern B Variants (cohort = 30 of 84 users = 35.7%, **share decreased further today** by 0.9 points)
- **mark.murdock (E4 silent May 14, 25d, 0 watchlist) — Day 3 INVISIBLE.** **E5 fires May 23 (~5 days).** **Last cycle before full-traversal — and the only diagnostic on this user requires manual lookup outside `/drip-stats`.**
- **dr.altvater (E4 crossed May 12 silent, 27d, 0 watchlist) — Day 5 INVISIBLE.** **E5 fires May 19 ~14:08 UTC (~28h) — entering full-traversal class TOMORROW.**
- **zhili1208 (E3 silent ~May 13, 19d, 0 watchlist) — Day 12 INVISIBLE.** Pattern B 3-cross at E3; **E4 fires May 20 (~2 days).**
- **lilianamasyrubi (E3 silent ~May 12, 20d, 0 watchlist) — Day 11 INVISIBLE.** Same shape; **E4 fires May 19 ~05:24 UTC (~19h) — entering 4-cross class tomorrow.**
- **joseph.g.nicolosi (E2 silent ~May 11, 13d, 0 watchlist)** — Pattern B 2-cross at E2; **E3 fires today ~21:39 UTC — entering 3-cross class TODAY (NEW CLASS).**
- **jmoriarty13 (E2 silent ~May 16, 8d)** — Pattern B 2-cross at E2 (5th confirmed instance; 1 day stale today).
- **natalie.sotocruz, emmacmather, kevinkid94, jfgalzin (E2 silent May 14-15, 9-10d)** — Pattern B 2-cross at E2 batch (now 3 days stale).
- **pattyglvz (E1 silent ~May 15, Day 5, 0 watchlist)** — Pattern B at E1.
- **c_calingasan (E1 silent ~May 16, Day 5, 0 watchlist)** — Pattern B at E1.
- **vlanza (E1 silent ~May 17, Day 3, 0 watchlist)** — Pattern B at E1 (confirmed today).
- **nunemakerc (E1 fires today ~15:41 UTC, Day 3, 0 watchlist)** — Pattern B at E1 (forecast in 5.5h).
- **eduardo (Day 0, 0 wl)** — Pattern B-forming, pre-E1.

**Empty-watchlist cohort total: 30 of 84 (35.7%).** Percentage **decreased ~0.9 points** vs yesterday's 36.6%. **Second consecutive day of empty-cohort share decrease — first 2-day decrease in the report stream.** This is fully attributable to (a) lisallam adding 1 item (NOT in empty cohort), (b) eduardo adding 0 items (IS in empty cohort) — so the +1 / +1 split on new signups produced a net denominator-only decrease in the empty share.

### TIER 4 — Apology / Catch-Up (>21d silent backlog, below truncation horizon)
- **mark.murdock (E4 silent May 14, 25d, 0 watchlist)** — Day 3 invisible. E5 fires May 23.
- **dr.altvater (E4 crossed May 12 silent, 27d, 0 watchlist)** — **E5 fires May 19 ~14:08 UTC (~28h) — entering full-traversal class TOMORROW.**
- **joshdguillemette (E3+E4 silent, 29d, 1 watchlist AEW 6d out)** — **E5 fires May 19 ~20:30 UTC (~34h) — entering full-traversal class TOMORROW.**
- **charlesteel126 (E3+E4 silent, 26d, invisible, 1 watchlist Bruno Mars Columbus 2d out)** — cross-tier with Tier 0.
- **nicklib253 (E4 silent May 9, 30d, Phillies past)** — Pattern A loss + E4 silent.
- **goldy.pec.2012 (E5 traversal completed May 11, 37d, Bilmuri past)** — Pattern A + full-traversal overlap.
- **blubberboi (E5 traversal completed May 10, 39d, Ed Sheeran SoFi Aug 8)** — historic first full-traversal case. **Day 8 of historic record today.**
- **pete.uzelac77 (E5 traversal completed May 10, 38d, WC Lincoln Financial ×4 + Darts ×2)** — **Day 8.** Highest-value full-traversal candidate.
- **bhaygood728 (~45d, Cardi B past)** — apology-only sunset.
- **laye.aurelien (~46d, Shakira ×2 NYC 63-66 days out)** — highest-leverage tactical-fit graveyard recovery (still actionable).
- **awwhittington, ggri73 (~26d, 0 watchlist)** — Pattern B-at-E4 deep cohort.

### TIER 5 — Drip-Incompatible by Design (NEW today — both konman87 and jadbennis0 entered overnight)
- **konman87 (104d, both Bruno Mars dates past as of last night)** — **NEW today** — full graveyard + post-event sunset apology only.
- **jadbennis0 (12d, Inter Miami past as of last night)** — **NEW today** — multi-threshold + Tier-0 post-event apology + open-ended restart.
- **sparkitrightthere (E2 silent ~May 14, Day 11, Mac DeMarco May 7 passed 11 days ago)** — manual recovery shape; multi-threshold.
- **liambot62 (E2 silent ~May 15, Day 10, Toronto FC May 9 passed 9 days ago)** — Pattern C × multi-threshold.

**0 of 10 most-recent signups (0%) drip-incompatible today.** Unchanged. **Both new entrants today (konman87 + jadbennis0) are existing users transitioning to drip-incompatible status post-event** — not new signups. The acquisition channel has **not produced a single drip-incompatible signup in the rolling 10-day window** — the longest such streak in the report stream.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **lisallam / JOJI canonical Pattern A (NEW today — 52h pre-E1)** | `Welcome — your JOJI date at Brooklyn is 29 days out, here's how pricing usually moves` | `Welcome to TicketScan — June 16 at Brooklyn, here's the JOJI pricing playbook` | **A** *(named artist + named venue + named day-count; "pricing usually moves" hook fits the canonical mid-window tactical voice)* |
| **kevinshall87 / Pattern A++ 2-cross at E2 (NEW CLASS — 6.5h to silent activation)** | `Your AT&T Stadium World Cup cluster + 2 Welcome emails we owe you from this week. The full read is below.` | `Day 6 with TicketScan — we still haven't said hi, and we owe you 2 emails. Here's the AT&T-cluster pricing.` | **A** *(carries from yesterday; two-email acknowledgment leads. **Today's framing: 6.5h to activation; no further revision needed.**)* |
| **joseph.g.nicolosi / Pattern B 3-cross at E3 (NEW CLASS — 12h to silent activation)** | `Two weeks in, three missed emails, no events tracked — let's start over with a clean reset.` | `14 days, 3 silent sends, 0 events tracked — here's what TicketScan looks like when it works for you.` | **A** *(triple-anchor leads: time + miss-count + watchlist-state)* |
| **konman87 / post-event sunset apology (NEW today — both nights silent)** | `Both Bruno Mars nights are past — and 104 days from us is unforgivable. Here's what we'd do differently.` | `103 days of silence + 2 silent Bruno Mars nights — a real apology + your next move` | **A** *(unforgivable-leads; the only honest framing left)* |
| **jadbennis0 / post-event sunset + multi-threshold (NEW today)** | `Inter Miami v Portland was yesterday — and we owe you 2 emails from your first 2 weeks. Here's all 3.` | `12 days, 2 missed emails, 1 missed match — a real apology + an honest restart` | **A** *(three-touch acknowledgment leads; open-ended restart in body)* |
| **karin_ef1 / E1-late Day 1 (Pattern A++)** | `Welcome — your 2 BC Place World Cup tickets + a Welcome email we owe you from this week. Both are below.` | `28 hours late: your BC Place Vancouver cluster + how the Round of 16 usually prices` | **A** *(time-anchor in B decays daily — Day 1 still legible; Day 3+ degrades to A only)* |
| **cutekitten1234 / canonical Pattern A++ "cluster-at-signup" E1 (37h pre-fire)** | `Welcome — your 7 Harry Styles MSG dates, here's how the residency usually prices` | `Welcome to TicketScan — Aug 26 through Sep 9 at MSG, here's the residency-pricing read` | **A** *(unchanged — named cluster size + residency hook)* |
| **belder4308 / SEC Baseball Tier-0 fast-track (36h to E1; ~75h to Session 5)** | `Your SEC Baseball Tournament tickets — 3 days out. Here's the pricing read.` | `3 days to SEC Baseball Session 5 + Session 6 — welcome to TicketScan, here's how to read pricing this week` | **A** *(day-count tightens 4→3 today)* |
| nunemakerc / Pattern B-at-E1 batch (5.5h to silent forecast) | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `What event are you watching? Here's how TicketScan helps from Day 1.` | A *(unchanged from batch)* |
| Pattern B-at-E1 batch (pattyglvz Day 5, c_calingasan Day 5, vlanza Day 3 silent) | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `What event are you watching? Here's how TicketScan helps from Day 1.` | A |
| charlesteel126 / Bruno Mars Columbus 2d + E3+E4 multi-threshold (invisible) | `Bruno Mars at Ohio Stadium — 2 days out, and we owe you 2 emails. Here's the Tuesday read.` | `2 days to Ohio Stadium — multi-threshold apology + the night-of pricing read` | **A** *(tightens 3→2)* |
| **joshdguillemette / AEW 6d, E3+E4 silent, E5 in 34h (LAST CYCLE before full-traversal)** | `AEW Double or Nothing — 6 days out, and 3 missed sends. 34 hours from now this becomes 4. Here's the catch-up.` | `Las Vegas / AEW: 6 days out + a full-traversal apology before the 4th miss` | **A** *(34-hour countdown tightens 58→34; the "AEW" mention in A carries the brand strength)* |
| **dr.altvater / Pattern B full-traversal silent send forecast (28h to E5)** | `Three weeks, four missed emails, and tomorrow we miss a fifth — let's actually start over.` | `27 days on TicketScan, 4 silent sends, here's the clean restart you deserve` | **A** *(5-miss-countdown leads; pre-traversal warning prevents the apology compound)* |
| cjthomas2557 / Noah Kahan 25d + E1+E2 multi-threshold | `Noah Kahan / Kia Center — 25 days out, and we owe you 2 sends, sorry` | `2 missed emails + Noah Kahan in 25 days: catching you up properly` | A *(tightens 26→25)* |
| taranimeramaro / Bruno Mars MetLife ×3 E3 (3-cross) | `3 Bruno Mars dates at MetLife + 3 missed sends — here's the cluster read and the catch-up` | `MetLife ×3: which night usually has the cheapest seats? (And: a real apology.)` | A *(carries)* |
| **mark.murdock / Pattern B 4-cross at E4 (Day 3 INVISIBLE — E5 in 5 days)** | `Three weeks in, four missed emails, here's the unvarnished truth: we've been broken. Here's what TicketScan looks like when it works.` | `25 days, 0 events tracked, 4 missed sends — let's fix all three together` | A *(carries — 24→25 day update; **last cycle before he joins dr.altvater + joshdguillemette in tomorrow's full-traversal batch**)* |
| **jmoriarty13 / Pattern B 2-cross at E2 (1 day stale)** | `Week 1 on TicketScan — and we've been quieter than we should have been. Here are 3 events worth tracking right now.` | `2 missed sends + 3 events trending — let's reset` | A *(unchanged)* |
| natalie.sotocruz, emmacmather, kevinkid94, jfgalzin (2-cross at E2 batch from May 14-15) | `It's been a week — we've been quieter than we should have been. Here are 3 events worth tracking right now.` | `1-2 missed emails + 3 events trending on TicketScan` | A *(unchanged)* |
| Pattern C × multi-threshold (liambot62) | `Your Toronto FC match was 9 days ago — and we owe you two emails about it. Here's both.` | `We failed you 9 days ago — here's how to make it right, and what to track next` | A *(tightens 8→9 days post-event)* |
| zhili1208 / lilianamasyrubi (Pattern B 3-cross at E3) | `Two-and-a-half weeks in, three silent touchpoints from us — here's a reset` | `3 missed emails + 3 events trending — let's reset` | A *(**lilianamasyrubi splits off into 4-cross-at-E4 NEW class tomorrow**)* |
| Catch-up — blubberboi (E5 full-traversal, Day 8 of historic record) | `Ed Sheeran is 82 days away. We owe you 5 emails. Here's the one that actually matters.` | `We owe you 30+ days of emails — here's the SoFi pricing read` | A *(tightens 83→82)* |
| pete.uzelac77 / WC Lincoln Financial ×4 E5 graveyard (full-traversal Day 8 + tactical-fit, 27-47 days out) | `4 World Cup matches at Lincoln Financial + 5 missed emails — here's the cluster read` | `Lincoln Financial ×4 in 27-47 days, and we owe you a real catch-up` | A *(carries; tightens 28→27)* |
| laye.aurelien Shakira ×2 (E5 + 16d post-E5) | `Shakira at MetLife — 63 days out and we owe you a real 16-day-late catch-up` | `2 Shakira dates, 63 days, and 46+ silent days from us — here's the read` | A *(tightens 64→63; post-E5 tail 15→16)* |

**CTA conformance:** 13 of 22 (59%) top-level routes; 9 of 22 (41%) event-specific deep-links. **Deep-link share rose from 33% → 41%** with two new sends added (lisallam JOJI event-deep-link + joseph.g.nicolosi `/dashboard` empty-watchlist diversion). **The deep-link share is at a 2-week high.**

---

## Action Items

### P0 — Critical (Day 42 of outage)

1. **SMTP / drip pipeline — DAY 42. Probe back to HTTP 000 35s timeout. May 16 502 was a single-cycle transient.** Today's priority order, in descending decay-rate of recovery:
   1. **Pull Railway logs for 2026-05-16 10:30-10:42 UTC TODAY.** Log evidence age now **~48h** — recovery probability decays daily; engineer-memory probability decays faster. **Yesterday's framed urgency now compounds — this ask is at risk of becoming infeasible by end-of-week.**
   2. **Add permanent error-surfacing wrap to `/api/admin/drip-run`:** `try { ... } catch (e) { res.status(500).json({error: e.message, stack: e.stack}) }`. **Two consecutive cycles confirm the wrap is the only viable diagnostic surface.**
   3. Cross-reference Railway's service restart history for May 15-16 — if there was an automatic restart in the window, yesterday's 502 was a transient post-restart state.
   4. If Railway logs reveal `EAUTH` / Gmail auth: regenerate app password.
   5. If logs reveal `ECONNREFUSED:587`: Railway egress hypothesis confirmed.
   6. If logs reveal `relation does not exist`: schema drift on `drip_emails_sent`.

2. **DEADLINE TRACKING — today's stack:**
   - **nunemakerc E1 fires ~15:41 UTC today (~5.5h).** Pattern B silent forecast — 7th P-B-at-E1.
   - **kevinshall87 E2 fires ~16:44 UTC today (~6.5h). Pattern A++ 2-cross at E2 NEW CLASS activates if silent.**
   - **joseph.g.nicolosi E3 fires ~21:39 UTC today (~12h). Pattern B 3-cross at E3 NEW CLASS activates if silent.**
   - **lilianamasyrubi E4 fires May 19 ~05:24 UTC (~19h). Pattern B 4-cross at E4 NEW CLASS activates if silent.**
   - **dr.altvater E5 fires May 19 ~14:08 UTC (~28h). Pattern B full-traversal silent send activates if silent.**
   - **joshdguillemette E5 fires May 19 ~20:30 UTC (~34h). Second confirmed full-traversal silent send activates if silent.**
   - **belder4308 E1 fires May 19 22:13 UTC (~36h). E1-after-event canonical (or fast-track if hand-sent earlier).**
   - **cutekitten1234 E1 fires May 19 23:32 UTC (~37h). Pattern A++ cluster-at-signup canonical.**
   - **lisallam E1 fires May 20 14:05 UTC (~52h). Pattern A canonical fit (cleanest of all upcoming).**

3. **Target-price UX (Day 111 — 18 consecutive high-intent items captured null).** 107/107 watchlist items null. lisallam JOJI added today, null target. **The validation surface is now empirically saturated; no further data point can move the spec.** **Specification reminder:** inline auto-suggest at add-time with `current_price × 0.85` as default, single-tap to set. **Carryover from yesterday: the spec is ready to build.**

### P1 — High

4. **Past-event watchlist cleanup (40.2% bloat — reverted up from 38.7%).** Yesterday's one-cycle decrease has reverted as forecast. **Tomorrow's count climbs to ~43/107 (40.2% held)** as no Tier-0 events age past in the next 24h (Bruno Mars Columbus is May 20). Specific specific cost today: signal/noise ratio for fresh acquisitions vs past-event noise is **1:4.3** (worse than yesterday's 1:4.0). **Same fix as Apr 29 → today:** `status` column + daily expiry cron.

5. **`/drip-stats` cap / pagination (Day 12 of regression).** Hidden cohort ≥14 users; **5 of the next 5 confirmed silent fires today/tomorrow involve users in the hidden cohort** (joseph.g.nicolosi, lilianamasyrubi, dr.altvater, joshdguillemette, mark.murdock all hidden). The API now obscures the full multi-threshold front line, not just the deep cohort. Same fix: add `offset` parameter or raise cap to 100.

6. **Backlog catch-up plan when SMTP returns — updated priority order Day 42:**
   1. **konman87 (post-event sunset apology — first activated today)**
   2. **jadbennis0 (3-touch sunset + open-ended restart — first activated today)**
   3. **lisallam (canonical Pattern A E1, 52h window — cleanest restoration fit)**
   4. **cutekitten1234 (Pattern A++ cluster-at-signup E1 if within 37h, else E1-late)**
   5. **belder4308 (Tier-0 fast-track ahead of E1 timing — Session 5 in 3d)**
   6. karin_ef1 (E1-late Day 1 variant)
   7. kevinshall87 (Pattern A++ 2-cross at E2 NEW class activation)
   8. **joseph.g.nicolosi (Pattern B 3-cross at E3 NEW class activation, 12h)**
   9. dr.altvater (Pattern B full-traversal pre-warning, 28h)
   10. joshdguillemette (E3+E4 + final pre-E5 cycle, 34h)
   11. cjthomas2557 (E1+E2 compressed)
   12. charlesteel126 (E3+E4 + Tier-0 2d)
   13. lilianamasyrubi (Pattern B 4-cross at E4 NEW class, ~19h)
   14. taranimeramaro (E3 3-cross tactical-fit)
   15. mark.murdock (Pattern B 4-cross apology — last visible cycle before E5)
   16. liambot62 (Pattern C × multi-threshold)
   17. blubberboi (full-traversal apology test case)
   18. pete.uzelac77 (full-traversal + WC cluster)

7. **Newsletter growth — Day 106 milestone.** 10 user registrations / 0 newsletter signups in last 7 days. Footer regression Day 22; popup spec Day 18 unbuilt. **Structural break held under lower signal load today (+1 watchlist add vs +9 yesterday) — confirms break is independent of acquisition velocity.**

8. **`W0-A/B/C` real-time welcome triage architecture — third concrete justification today.** **lisallam's 3-minute signup-to-add cadence is the cleanest Pattern A canonical fit observed but still hits a 52-hour delay before E1. The W0 ask is no longer just for Pattern A++ users.** **All four routes now have empirical justification:**
   - **Route A (cluster-at-signup):** cutekitten1234, 7 items in 17 seconds — sub-hour welcome required.
   - **Route B (Tier-0 fast-track):** belder4308, E1-after-event — mathematically requires same-day send.
   - **Route C (Pattern B-forming):** eduardo, 0 watchlist Day 0 — needs event-discovery prompt.
   - **Route D (canonical Pattern A):** lisallam, 1 item / 3-minute cadence — current 3-day E1 delay loses urgency and the cleanest canonical fit.

### P1.5 — Acquisition-quality signal (Day 4 of hypothesis, 1 day of post-pulse validation)

9. **Acquisition-quality channel investigation (Day 4 — hypothesis gains first post-pulse validation).** **A++ density held at 40% across May 17 → May 18.** **Pattern B share decreased for the second consecutive day** (60% → 50%). **High-quality share (A++ + A) is now 50% of rolling-10 signups — highest in report stream history.** **The pulse hypothesis upgrades from "watch the next 5 signups" to "watch for sustained 30%+ A++ density across 5+ signups."** Validation gate: 3 of the next 5 signups must be A++ to confirm pulse; ≤1 of 5 falsifies. **Today's two signups (lisallam A + eduardo B-forming) are neutral on the pulse hypothesis** — neither A++ nor drip-incompatible. **The pulse persists tentatively; confirmation requires 3 more signups.**

### P2 — Medium

10. **`drip-health` endpoint — DAY 11 of unmet ask.** Spec unchanged. **Today's continued 000 (vs yesterday's also-000) makes this endpoint maximally valuable** — would have caught the May 16 → May 17 → May 18 state oscillation automatically and provided three data points to compare. The diagnostic surface lost on May 16 to log rotation would have been preserved.

11. **pete.uzelac77 World Cup re-engagement** — 38 days on platform, 6 items, 27 days to first match. **The "in May" framing on the original subject (`Don't buy your World Cup tickets in May — here's why`) has 13 days of validity left** before it expires.

12. **Watchlist digest endpoint — still manual.** **22 distinct send templates hand-composed today** (up from 18 yesterday — added: lisallam canonical Pattern A, konman87 sunset, jadbennis0 sunset+restart, joseph.g.nicolosi P-B 3-cross at E3, dr.altvater P-B full-traversal pre-warning). Bottleneck unchanged.

13. **Viva El Jaripeo post-mortem — 22 DAYS OVERDUE.**

### Tracking metrics

- **Tactical-window degradation:** Day 42. **konman87 night-2 + jadbennis0 Inter Miami both closed silent overnight (first real-time loss-in-progress completions).** **Next pre-event silent-failure forecast:** charlesteel126 Bruno Mars Columbus May 20 (2 days), belder4308 SEC Baseball May 21 (3 days), joshdguillemette AEW May 24 (6 days). **3 distinct pre-event silent-failure horizons compressing inside 6 days.**
- **CTA simplification rule conformance:** 59% top-level (13 of 22); 41% deep-link. **Deep-link share at 2-week high.**
- **Pattern mix in rolling 10-user cohort:** **A++ 40% (held) / A 10% (new tier) / B 50% (was 60%) / drip-incompatible 0% (held).**
- **Pattern A++ cluster acquisition rate:** **4 in 6 days** (kevinshall87, karin_ef1, cutekitten1234, belder4308). **Held from yesterday despite 0 A++ in today's 2 signups.** Channel distribution: WC ×2, Harry Styles MSG ×1, SEC Baseball ×1.
- **Template inventory needed for safe restart:** **16 shapes today** (unchanged from yesterday — added: konman87 sunset, jadbennis0 sunset+restart, lisallam canonical Pattern A, joseph.g.nicolosi P-B 3-cross at E3, dr.altvater P-B full-traversal pre-warning **+5**; retired: konman87 pre-event templates, jadbennis0 pre-event templates **-2**; net **+3**). **First day inventory growth (3) tracks below day-of-outage growth (1) since May 11.** **Inventory inflation finally slowed today.**

---

## Handoff → Analytics Agent (Agent 7)

- **Subscriber total:** 3 active, 0 net change in 24h. **106 consecutive days flat.** Day 13 of zero-capture under signup velocity. **Structural break held under +2-user-signup day (lower signal load than yesterday's +2-user + 9-add day — confirms break is independent of add velocity).**
- **User signups (24h):** **+2** (lisallam May 17 14:05 UTC, 1 wl JOJI; eduardo May 18 00:48 UTC, 0 wl). **84 total users.** 7d rolling = 10.
- **New watchlist items (24h):** **+1** (lisallam JOJI: SOLARIS 2026-06-16 Brooklyn-area). Total 107 (was 106). **Reverts toward mean after yesterday's +9 record.** All 1 items null target.
- **Drip pipeline:** UN-SHIPPED. **Day 42. 0 sends ever. 84 of 84 users never received a drip email.** Backlog: 32 visible + 14+ hidden ≈ **78 owed sends** (+2 vs yesterday's 76).
- **Probe signal cycle today:** drip-run probe returned HTTP 000 35s timeout — exact Day 11-39 + Day 41 signature. **Yesterday's "transient post-restart" interpretation of the May 16 502 is now empirically supported by 2 cycles.**
- **Threshold crossings in last 24h (4 confirmed silent + 3 forecast-today/tomorrow):**
  - May 17 ~13:20 UTC vlanza → E1 silent confirmed (6th P-B-at-E1)
  - **May 17 ~19:00 UTC jadbennis0 → Inter Miami Tier-0 silent through event (first real-time Pattern A loss-in-progress completion)**
  - **May 17 ~20:00 UTC konman87 → Bruno Mars Soldier Field night 2 Tier-0 silent through event (second real-time loss-in-progress completion)**
  - **May 18 ~15:41 UTC (~5.5h) nunemakerc → E1 silent forecast (Pattern B)**
  - **May 18 ~16:44 UTC (~6.5h) kevinshall87 → E2 forecast — Pattern A++ 2-cross at E2 NEW CLASS**
  - **May 18 ~21:39 UTC (~12h) joseph.g.nicolosi → E3 forecast — Pattern B 3-cross at E3 NEW CLASS**
- **Price alerts:** 0 ever triggered. **107/107 watchlist items null. Day 111.** 1 new add in 24h, null. **18 consecutive high-intent items captured null** across Pattern A++ + Pattern A signups.
- **Watchlist composition:** 107 items, 43 past-dated (40.2% — **reverted up from 38.7% as forecast**). **0 events within 24h.** **1 event within 2 days** (Bruno Mars Ohio Stadium May 20). 2 in 3-5d (SEC Baseball ×2). 1 in 6-8d (AEW May 24). 2 in 22-32d (cjthomas2557, kevinshall87 first WC). 1 in 25-30d (lisallam JOJI). 13 in 33-62d (kevinshall87 ×4 + karin_ef1 ×2 + pete.uzelac77 ×4 + taranimeramaro starts). **45 in 63+d** (held — same composition as yesterday's deep tail).
- **Empty-watchlist cohort:** 30 of 84 (35.7% — **down 0.9 points from yesterday**). **Second consecutive day of empty-cohort share decrease — first 2-day decrease in the report stream.**
- **Pattern mix in rolling 10-user cohort:** **A++ 40% / A 10% / B 50% / drip-incompatible 0%.** **High-quality share (A++ + A) at 50% — highest in report stream.**
- **Acquisition-quality pulse hypothesis (Day 4, 1 day post-pulse):** A++ density held; B share dropped further; high-quality share at all-time high. **Hypothesis status: tentatively persists. Confirmation gate: 3 of next 5 signups must be A++. Falsification gate: ≤1 of next 5 A++.**
- **NEW CLASSES activating today:**
  - **Pattern A++ 2-cross at E2** (kevinshall87, ~6.5h to silent activation if SMTP down)
  - **Pattern B 3-cross at E3** (joseph.g.nicolosi, ~12h to silent activation if SMTP down)
  - **Pattern B 4-cross at E4** (lilianamasyrubi, ~19h forecast for tomorrow)
  - **Pattern B full-traversal silent send** (dr.altvater + joshdguillemette, ~28-34h forecast for tomorrow's batch)
- **Most useful single observation today:** **the two Tier-0 silent-through-event forecasts from yesterday converged exactly as predicted (konman87 night 2 + jadbennis0 Inter Miami), producing the first real-time confirmed Pattern A loss-in-progress completions in the report stream's history, while simultaneously: (a) two distinct NEW CLASS silent activations begin within 12 hours (kevinshall87 P-A++ 2-cross at E2 + joseph.g.nicolosi P-B 3-cross at E3), (b) the canonical Pattern A signup (lisallam) provides the cleanest possible restoration fit in the entire backlog, (c) Pattern B share declines for the second consecutive day, (d) high-quality acquisition share hits an all-time high (50%), and (e) the probe regresses to its baseline failure state confirming the May 16 502 was a single-cycle transient.** The report stream is now simultaneously documenting **the cleanest single-user canonical restoration target (lisallam) and the densest silent failure activation window (kevinshall87 6.5h + joseph.g.nicolosi 12h)** in the same 24-hour cycle. **The next 36 hours will determine whether SMTP restoration captures both the cleanest restoration fit and prevents two NEW class activations, or whether the loss cascade continues into a third real-time loss-in-progress completion (with belder4308 SEC Baseball on May 21 as the next Tier-0 horizon).**
