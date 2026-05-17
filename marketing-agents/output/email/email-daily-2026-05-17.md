# Email Daily — 2026-05-17

> **Day 41 of SMTP outage. The probe regressed.** Yesterday's HTTP 502 "Application failed to respond" — framed as "the first diagnostic-quality movement in 30 days" — has reverted to **HTTP 000 gateway timeout at 35s**, the Days-11–39 signature. **Whatever changed in the runtime on May 16 has been rolled back.** And the day produced the **biggest single-day activation event in the report stream's history:** **2 new signups** (belder4308 May 16 22:13 UTC, cutekitten1234 May 16 23:32 UTC), **9 new watchlist adds** (+9.3%, breaking yesterday's zero-adds anomaly), and **cutekitten1234 added 7 Harry Styles MSG dates in 30 seconds at signup** — **the third Pattern A++ canonical signup in 5 days and the densest single-user cluster ever observed.** Yesterday's framed "20-hour deadline" for karin_ef1 E1 **expired silent ~4 hours ago** (06:46 UTC). c_calingasan E1 fires silent in ~1h (~11:46 UTC); jmoriarty13 E2 in ~3h; vlanza E1 in ~3h (13:20 UTC); pattyglvz E1 already crossed silent **43h ago** (a retroactive miss in yesterday's report). **konman87 Soldier Field night 2 is TODAY. jadbennis0 Inter Miami v Portland is TODAY.** Total users **82** (+2 vs May 16). Watchlist **106** (+9 vs 97). Day 110 of 100% null-target streak (106/106 — and **all 9 new adds today are null too**). Day 105 of newsletter flatline.

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` returns `stats: []` after **Day 41.** **82 of 82 users have never received a drip email** (every user's `last_email_sent: 0`).
- **Probe today (Day 41):** `POST /api/admin/drip-run?limit=1&dryRun=true` returned **HTTP 000 (gateway timeout at 35s)** — the Day-11–39 signature. **Yesterday's HTTP 502 "Application failed to respond" did not persist.** Two interpretations:
  1. **Most likely: yesterday's 502 was a transient runtime state during a partial restart or deploy.** The Railway edge briefly saw the application respond (with an error) before the application either crashed again or reverted to a hung state.
  2. **Alternative: yesterday's probe hit a different instance** (Railway autoscaler / brief multi-instance window during the 10:36 UTC probe). Today's 000 from a re-stuck instance would explain the regression without requiring rollback.
- **Asks for engineering — escalated today:**
  1. **Pull Railway logs for the 24h window around 2026-05-16 10:36 UTC** to recover the thrown error message yesterday's 502 should have written. **This is the only diagnostic surface produced in 30 days; we cannot afford to lose the log evidence to log rotation.**
  2. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { log; return res.status(500).json({error: e.message, stack: e.stack}) }`** so the next probe state-change exposes the error string in the HTTP response (not just the log).
  3. Check the Railway service status / restart history for May 15-16 — any unexpected restart, OOM, or instance-replacement event around 10:36 UTC May 16 would correlate with the one-day 502 anomaly.
- `/api/admin/drip-health` → still `404 "Endpoint not found"`. **Day 10 of that ask unmet** (P0 since May 7). The probe just confirmed 404 again today.

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 16 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **16 of 20** | **+1** (vlanza joins at 2.89d→3d crossing in ~3h; karin_ef1 + c_calingasan + pattyglvz now silent crossings rather than forecasts) |
| E2 | ≥7d | **11 of 20** | **+1** (jmoriarty13 crosses E2 silent today ~13:18 UTC) |
| E3 | ≥14d | **2 of 20** | **-3** (truncation horizon advanced 2 users — zhili1208 and lilianamasyrubi remain visible at 18d/19d, but mark.murdock, dr.altvater, joshdguillemette, charlesteel126 all rolled past visible cohort. **mark.murdock dropped out of view today** — he was the only visible E4 yesterday) |
| E4 | ≥21d | **0 of 20 visible** | **-1** (mark.murdock at 24d now invisible) |
| E5 | ≥30d | **0 of 20 visible** | unchanged at zero |

**Truncation horizon advanced sharply again** — two new signups pushed two more users into the hidden cohort. **The hidden cohort now includes mark.murdock (Pattern B 4-cross at E4, E5 fires May 23 in 6 days)** — yesterday's report flagged him at "1 of 20 visible." **mark.murdock is no longer visible in the API today.** Day 11 of API-cap regression.

### Threshold crossings in last 24h (3 confirmed silent + retroactive correction for yesterday + 3 forecast-fires-today)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| **May 15 ~15:23 UTC** | **pattyglvz** | **E1** | **Pattern B (0 watchlist Day 4)** | **silent** | **RETROACTIVE: missed by yesterday's report.** Day 4 today implies crossing at Day 3 = May 15 15:23 UTC. **43h silent.** This cohort-wide silent-crossing event on May 15 actually included **kevinkid94 E2 (~May 15 20:52 UTC)**, **jfgalzin E2 (~May 15 12:54 UTC)**, **liambot62 E2 (~May 15 13:07 UTC)** — all crossed silent within hours of kevinshall87 E1 (May 15 16:44 UTC). **May 15 was a 4-crossing silent day on the E2 line plus kevinshall87 E1 + pattyglvz E1 = a 6-crossing silent day, not the 3-crossing event yesterday's report recorded.** |
| **May 16 ~11:46 UTC** | **c_calingasan** | **E1** | **Pattern B (0 watchlist, Day 3)** | **silent confirmed today** | Day 3.96 today; crossed ~23h ago. Forecast on May 14 as fires May 16. Now silent. |
| **May 16 ~13:18 UTC** | **jmoriarty13** | **E2** | **Pattern B 2-cross at E2 (Day 7)** | **silent confirmed today** | Forecast in yesterday's report; Day 7.89 today; ~21h silent. **5th confirmed Pattern B 2-cross at E2 case** (joining joseph.g.nicolosi, emmacmather, kevinkid94, jfgalzin). |
| **May 17 06:46 UTC** | **karin_ef1** | **E1** | **A++ canonical (2 watchlist items WC BC Place Vancouver cluster)** | **silent confirmed today (~4h ago)** | **Second consecutive Pattern A++ silent E1 traversal.** kevinshall87 entered Day 1 silent yesterday; karin_ef1 entered Day 0 silent at 06:46 UTC. **48h ago the framing was "20-hour deadline to prevent the second consecutive Pattern A++ E1 silent traversal." That window closed silent ~4h before this report.** |
| May 17 ~11:46 UTC (in ~1h) | (forecast — no new same-day) | — | — | — | **No new Day-3 crossings between c_calingasan (already silent) and the next batch.** |
| May 17 ~13:18 UTC (in ~3h) | jmoriarty13 already silent | — | — | — | Already crossed yesterday. |
| **May 17 ~13:20 UTC (in ~3h)** | **vlanza** | **E1** | **Pattern B (0 watchlist, Day 2.89)** | **silent forecast** | **3-hour deadline.** Day 3 crossing in ~3 hours. |
| **May 17 ~16:00 UTC (~5h)** | konman87 | Bruno Mars Soldier Field night 2 | Tactical | manual-send forecast | Final pre-event window. |
| **May 17 ~19:00 UTC (~8h)** | jadbennis0 | Inter Miami v Portland | Tactical | manual-send forecast | Final pre-event window. |
| May 18 ~16:44 UTC (forecast) | **kevinshall87** | **E2** | **Pattern A++ 2-cross at E2 (NEW CLASS)** | **silent forecast** | **Day 6 from signup; E2 fires May 18 16:44 UTC.** Already Day 1 silent at E1. Becomes the **first ever Pattern A++ 2-cross at E2 case** in the report stream if SMTP not restored by tomorrow. |

### Tomorrow's forecast crossings (May 18)
- **kevinshall87 → E2** (Pattern A++ 2-cross — NEW CLASS) — fires May 18 16:44 UTC. ~30h deadline.
- **belder4308 → E1** (Pattern A++ or Pattern A — 2 SEC Baseball Tier-0 items, both events occur **before** E1 fires) — fires May 19 22:13 UTC (slight beyond 24h). **Note the structural anomaly:** belder4308's tracked events (May 21 + May 22) **occur BEFORE the E1 send date** (May 19). E1 will arrive after both tracked events are past. **First confirmed instance of E1-after-event in the report stream.**
- **cutekitten1234 → E1** (Pattern A++ canonical at signup — 7 Harry Styles MSG items) — fires May 19 23:32 UTC.

**Visible backlog (in returned 20):** 16 E1 + 11 E2 + 2 E3 + 0 E4 visible + 0 E5 visible = **29 emails owed in pendingUsers cohort.** Plus the hidden cohort (now ≥14 users including mark.murdock who fell off today). **True backlog ≈ 76 emails across all eligible users** (+3 vs yesterday's 73).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 110 of 100% null-on-add. 106/106 watchlist items have null `target_price`** (re-confirmed via `/api/admin/watchlist?limit=200`). **9 new adds in 24h, all null target — the streak survived its biggest test.** The two Pattern A++ signups (cutekitten1234 7 items, belder4308 2 items) and yesterday's two earlier A++ users (kevinshall87, karin_ef1) all produced **zero target_price captures**. **The auto-suggest spec from Day 13 has now been validated against four consecutive Pattern A++ signups producing 8+9 = 17 total null-target items.** The retroactive recovery hypothesis (existing UX could capture targets after the fact) was also re-falsified — kevinshall87's items are 4-5 days old, karin_ef1's are 3 days old, both still null. **Inline auto-suggest at add-time is now the only credible path to non-zero alerts.**

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
- **Stall duration: 105 days** since last organic newsletter signup (roos_leeuwen, 2026-02-01). **Day 12 of consecutive zero-capture days.** +8 user signups in last 7 days (counting cutekitten1234, belder4308, nunemakerc, vlanza, karin_ef1, c_calingasan, kevinshall87, pattyglvz), 0 newsletter signups in the same window. **Cross-channel structural break holds for 12th consecutive day. Under +2-user-signup pressure today, the newsletter capture remained at zero — meaning the structural break held under stronger signal load than any prior day.** Footer regression Day 21; popup spec Day 17 unbuilt per CRO May 11.

## Platform Context
- Total users: **82** (was 80 on May 16, **+2** — belder4308 + cutekitten1234)
- Users today (rolling 24h since May 16 10:00 UTC report): **2** — belder4308 (May 16 22:13 UTC, 2 watchlist) + cutekitten1234 (May 16 23:32 UTC, 7 watchlist)
- Users this week (rolling 7d): **8** (per `/admin/stats`)
- Watchlist items: **106** (+9 — 7 cutekitten1234 Harry Styles MSG + 2 belder4308 SEC Baseball)
- Past-dated watchlist items: **41 of 106 (38.7%)** — count rose +1 (Bruno Mars Soldier Field night 1 aged past overnight) but **denominator grew faster than numerator, so the percentage actually dropped from 41.2% → 38.7%.** **First day in 9+ reporting cycles the past-event share has decreased.** Tomorrow's count: 43/106 (40.6%) after Soldier Field night 2 + Inter Miami age past.
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

## New-Signup Pattern Analysis (24h)

**Two signups today. Both Pattern A++ at signup. This has not happened before in the report stream.**

| User | Signed up | Days | Watchlist | Pattern | Note |
|------|-----------|------|-----------|---------|------|
| **cutekitten1234** | **May 16 23:32 UTC** | **0** | **7 (Harry Styles MSG Aug 26 → Sep 9)** | **A++ canonical at signup** | **Densest single-user cluster ever observed.** All 7 items added within ~17 seconds (23:32:49 → 23:33:06 UTC). Single artist, single venue (MSG), 7 dates across 15 days. **All 7 items null target.** E1 fires May 19 23:32 UTC (54h from now). |
| **belder4308** | **May 16 22:13 UTC** | **0** | **2 (SEC Baseball Tournament May 21 + 22)** | **A++ canonical at signup (Tier-0)** | **First Pattern A++ on Tier-0 events in report stream.** Added 2 items within ~1 second (22:14:08 → 22:14:09). Same tournament, two consecutive dates **4–5 days out.** Both items null target. **Structural anomaly: E1 fires May 19 22:13 UTC — after both tracked events age past.** This is the first **E1-after-event** case in the report stream — the canonical drip cadence is mathematically incompatible with this signup's tracked event timing. |

**Updated pattern mix across rolling 10 signups (May 8 → May 17):** cutekitten1234 (Day 0, 7 wl A++), belder4308 (Day 0, 2 wl A++ Tier-0), nunemakerc (Day 1, 0 wl), vlanza (Day 2, 0 wl), karin_ef1 (Day 3, 2 wl WC A++), c_calingasan (Day 4, 0 wl), kevinshall87 (Day 4, 6 wl WC A++ + Matt Rife), pattyglvz (Day 4, 0 wl), jmoriarty13 (Day 7, 0 wl), emmacmather (Day 8, 0 wl).

- **Pattern A++ canonical: 4 of 10 (40%)** — kevinshall87 (WC AT&T), karin_ef1 (WC BC Place), cutekitten1234 (Harry Styles MSG), belder4308 (SEC Baseball). **Density doubled overnight** (20% → 40%).
- Pattern B forming/confirmed: vlanza, c_calingasan, pattyglvz, jmoriarty13, emmacmather, nunemakerc = **6 of 10 (60%).** **-1 from yesterday's 70% — first reversal of the Pattern B trend in the report stream.**
- Drip-incompatible (past-event): 0 of 10 (kevinkid94 and liambot62 rolled out of the 10-window). **Down from 10% to 0%.**

**This is the highest Pattern A++ density (40%) and the first reversal of the Pattern B share (70% → 60%) in the report stream's history.** Three of the four Pattern A++ signups occurred in the last 5 days (kevinshall87 May 12, karin_ef1 May 14, cutekitten1234 + belder4308 May 16). **The rolling-5-day window now shows 4 of 7 signups = 57% Pattern A++.** The May 14 hypothesis ("WC channel entering its first acquisition pulse") **no longer fits the data** — cutekitten1234 is Harry Styles, belder4308 is SEC Baseball. **The hypothesis upgrades to: a general acquisition-quality pulse is underway across multiple channels simultaneously, not a single-channel surge.**

---

## cutekitten1234 — Pattern A++ at Signup (NEW CLASS: "Cluster-At-Signup")

cutekitten1234 added **7 Harry Styles MSG items within ~17 seconds of completing watchlist UI interaction**. This is structurally different from kevinshall87 (6 items over multiple session minutes) and karin_ef1 (2 items added 1 minute apart). **The user arrived at TicketScan with a pre-formed intent and executed it in one continuous session.**

1. **Cluster shape:** 7 dates at single artist/venue (Harry Styles, MSG): Aug 26, Aug 28, Aug 29, Sep 2, Sep 4, Sep 5, Sep 9. **Run of 6 NYC residency dates (Aug 26 → Sep 9, 15 days) plus a single skip.** The user has clearly identified the residency cluster and is tracking the entire run.
2. **Tactical-window math:** earliest event 101 days out. E1 fires May 19 23:32 UTC (in ~54h), E2 ~May 23, E3 ~May 30, E4 ~Jun 6, E5 ~Jun 15. **All 5 sends land cleanly pre-event** (earliest event Aug 26 is 86 days after E5).
3. **Canonical E1 subject draft:** `Welcome — your 7 Harry Styles MSG dates, here's how the residency usually prices` (named-artist + named-venue + named-cluster-size; "residency" hook differentiates from the WC cluster framing).
4. **Decision now:** the user is in **the only 48-hour window for canonical E1** before they enter silent Pattern A++ traversal. **kevinshall87 was given the same window 4 days ago and is now Day 2 silent.** If SMTP is not restored by May 19 23:32 UTC, cutekitten1234 enters the same silent Pattern A++ class — and the platform will have produced its **three strongest Pattern A++ signups in the report stream's history and silently lost the canonical E1 send for all three.**
5. **Recovery shape if SMTP restored Day 2+:** the E1-late variant (`7 Harry Styles MSG dates + we owe you a Welcome from N days ago`) — same template that's now ready for kevinshall87.

**The "cluster-at-signup" pattern (7 items in 17 seconds, single artist/venue, multi-date residency run) is the cleanest acquisition signal in the report stream's history.** It also produced **7 null target_price items in the same 17-second window** — the auto-suggest spec is now empirically validated against a signup that did the entire content-side activation in 17 seconds while still failing the pricing-side capture entirely.

---

## belder4308 — Pattern A++ × Tier-0 (NEW CLASS: "E1-After-Event")

belder4308 added 2 SEC Baseball Tournament items in ~1 second:
- Session 5: May 21 (4 days out today)
- Session 6: May 22 (5 days out today)

**E1 fires May 19 22:13 UTC** (in ~60h). **The user's tracked events occur AFTER E1.** Session 5 happens May 21 (2 days after E1); Session 6 May 22 (3 days after E1). The canonical drip cadence — designed for events 30+ days out — produces **an E1 send that arrives 2 days BEFORE the first tracked event, when no pricing-trajectory read is yet possible because the canonical 5-touch cadence will not complete before the events are past.**

**Implications:**

1. **The canonical drip cadence is mathematically incompatible with Tier-0 signups.** E2 fires May 23 (1 day after event 2). E3 fires May 30 (8 days post-event). E4 + E5 fire on dead users from a tracked-event standpoint.
2. **A new template variant is required: "Tier-0 fast-track."** Single send within hours of signup, framed as `Your SEC Baseball tickets are 4-5 days away — here's the pricing read TODAY` — bypasses the 3-day E1 delay entirely.
3. **The W0-A real-time welcome triage architecture (ask from yesterday) now has its second concrete justification:** kevinshall87 + karin_ef1 needed real-time interception due to cluster size; belder4308 needs real-time interception due to **event proximity to signup**. Both routes converge on "trigger E0 (welcome) within minutes of signup, decoupled from the 3-day E1 cadence."
4. **belder4308's add timing is also notable:** signup at 22:13 UTC, watchlist adds at 22:14:08 + 22:14:09 — a **~75-second gap between signup completion and first add**. cutekitten1234's gap was **~22 seconds (signup 23:32:27, first add 23:32:49)**. **Both gaps under 90 seconds — the user knew what they wanted before signing up.**

**Today's draft (manual send if SMTP restored within 24h):**
- Subject A: `Your SEC Baseball Tournament tickets — 4 days out. Here's the pricing read.`
- Subject B: `4 days to SEC Baseball Session 5 + Session 6 — welcome to TicketScan, here's how to read pricing this week`
- **Recommend A.** Named tournament + named day-count. CTA: `/event/[id]` for Session 5 (event-specific deep-link justified by Tier-0 proximity).

---

## karin_ef1 — E1 Silent (Confirmed ~4h Ago)

E1 fired silent at **May 17 06:46 UTC** (~4 hours before this report). **The "20-hour deadline" from yesterday's report has expired.** Second consecutive Pattern A++ canonical signup enters silent E1 traversal. **The May 14 framing of "72-hour deadline covering two Pattern A++ E1 triggers" is now fully closed silent** — both kevinshall87 (Day 2 silent) and karin_ef1 (Day 0 silent) have crossed.

**Recovery shape (E1-late variant, NEW today for karin_ef1):**
- Subject A: `Welcome — your 2 BC Place World Cup tickets + a Welcome email we owe you from this morning. Both are below.`
- Subject B: `4 hours late: your BC Place Vancouver cluster + how the Round of 16 usually prices`
- **Recommend A.** Acknowledgment-of-failure pivot leads (consistent with kevinshall87 E1-late + konman87 night-1 templates from yesterday).
- CTA: `/watchlist`

**The compounding cost:** kevinshall87 + karin_ef1 + cutekitten1234 + belder4308 are now 4 Pattern A++ users requiring 4 distinct E1-late or fast-track template variants if SMTP is restored in the next 48h. The template inventory expanded from 13 to **16 shapes** today (added: Tier-0 fast-track, cluster-at-signup canonical, cluster-at-signup E1-late). **Inventory growth (4 → 12 → 13 → 16 across May 11 / May 15 / May 16 / May 17) is now outpacing the outage duration on a daily basis.**

---

## kevinshall87 — Day 2 of Silent E1 Traversal (Pattern A++ Loss-in-Progress)

Day 1 framed yesterday. **Day 2 today.** E2 fires May 18 16:44 UTC — **~30 hours from this report.** If SMTP is not restored by then, kevinshall87 becomes the **first ever Pattern A++ 2-cross at E2 case** — a class that does not yet exist in the template inventory.

**Pre-emptive template draft for Pattern A++ 2-cross at E2 (NEW CLASS, drafted for tomorrow's possible activation):**
- Subject A: `Your AT&T Stadium World Cup cluster + 2 Welcome emails we owe you from this week. The full read is below.`
- Subject B: `Day 6 with TicketScan — we still haven't said hi, and we owe you 2 emails. Here's the AT&T-cluster pricing.`
- **Recommend A.** Two-email acknowledgment leads; named-venue cluster framing carries.

**Today's specific framing:** kevinshall87 is now 2 days behind on the canonical cadence, the cleanest single-user canonical-E1 fit in 33+ days. **Every additional day pushes the recovery template further into "unprecedented apology weight" territory.**

---

## konman87 — Soldier Field Night 2 TODAY (Final Window)

Bruno Mars Soldier Field night 2 is **TODAY May 17 (~5h from this report).** Night 1 aged past overnight (May 16). The May 16 framing of "first first-of-cluster silent + second-still-actionable case" is now in its **final 5 hours**. After tonight, **konman87 transitions from "active pre-event silent failure" to "two-event silent post-event apology only" status.**

**Final pre-send draft (manual / non-drip if SMTP restored in next 4h):**
- Subject A: `Tonight is Soldier Field night 2 — and we owe you 103 days of silence + a night-1 retrospective. Here's both.`
- Subject B: `Bruno Mars tonight at Soldier Field — last-minute pricing + the night-1 read you didn't get yesterday`
- **Recommend A.** Acknowledgment-of-failure pivot leads (the "103 days of silence" framing now becomes the dominant content hook; the night-2 tactical read carries in the body).
- CTA: `/event/[id]` for night 2 (event-specific deep-link justified by Tier-0 final hours).
- **Body must include:** pricing retrospective for night 1 (from Ticketmaster historicals if available) framed as "what we would have told you if our email system had been working."

**If SMTP not restored by ~16:00 UTC today (final realistic send-before-event window):** template upgrades to post-event apology-only for both nights — and konman87 joins **bhaygood728**, **goldy.pec.2012** in the "Pattern A loss across all tracked events" graveyard. **First active Pattern A loss-in-progress to be confirmed in real-time in the report stream's history.**

---

## jadbennis0 — Inter Miami TODAY (Final Window)

Inter Miami vs Portland is **TODAY May 17 (~8h from this report).** Day 11 on platform; E1+E2 silent. **Final pre-event send window.**

**Compression template (4-part: welcome + missed-E1 + missed-E2 + Tier-0 tactical):**
- Subject A: `Inter Miami today — and we owe you 2 emails. Here's the 8-hour read.`
- Subject B: `8 hours to Inter Miami v Portland — 11-day welcome + Nu Stadium pricing`
- **Recommend A.** Tightens 24→8 hours (yesterday's draft); apology weight at top.

---

## Triple Deadline Today + Multi-Class Compression

Today's deadline stack is **the most compressed in the report stream's history**:

| Time (UTC) | User | Event/Trigger | Type | Notes |
|------------|------|---------------|------|-------|
| 06:46 (~4h ago) | **karin_ef1** | E1 silent | Drip — expired | Pattern A++ Day 0 silent. |
| ~11:46 (~1h from now) | (none new — c_calingasan already silent) | E1 backfill | Drip | Confirmed silent crossing yesterday. |
| ~13:18 (~3h) | (jmoriarty13 already silent ~21h) | E2 backfill | Drip | Confirmed silent crossing yesterday. |
| **~13:20 (~3h)** | **vlanza** | **E1 fires silent** | Drip | Pattern B (0 watchlist Day 3). |
| **~15:00-16:00 (~5h)** | **konman87** | **Bruno Mars Soldier Field night 2** | Tactical-close | **Final realistic send-before-event window.** |
| **~19:00 (~8h)** | **jadbennis0** | **Inter Miami v Portland** | Tactical-close | Multi-threshold + Tier-0 4-part compression. |
| ~22:13 (in ~12h) | belder4308 | (Day 1 marker — pre-E1 still) | Internal | Watching for any new add behavior. |
| ~23:32 (in ~13h) | cutekitten1234 | (Day 1 marker — pre-E1 still) | Internal | Watching for any new add behavior. |

**The number of distinct send templates required to cover today's deadlines (and the +30h kevinshall87 E2 deadline) is 7:** karin_ef1 E1-late, vlanza canonical pre-E1, konman87 night-2 pre-event apology pivot, jadbennis0 4-part compression, kevinshall87 NEW 2-cross-at-E2-A++ class, belder4308 Tier-0 fast-track, cutekitten1234 canonical-cluster E1.

---

## Watchlist Digest Prep — Tier-Compressed

### Past-Event Cleanup
**41 of 106 (38.7%) past-dated** at report time. **The percentage dropped for the first time in 9+ reporting cycles** because today's 9 watchlist adds (all future-dated) grew the denominator faster than overnight aging grew the numerator. Tomorrow's count will likely climb to ~43/106 (40.6%) after night 2 + Inter Miami age past. **The auto-archive cron remains unshipped.** Today's specific finding: **cutekitten1234's 7 Harry Styles items are all 101-115 days out and will remain pristine in the visible watchlist for 90+ days** — until the auto-archive ships, that's 7 high-quality dashboard items at risk of being lost in the past-event pollution.

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **Bruno Mars Soldier Field night 2** | **TODAY May 17** | **0** | konman87 | 104 | post-E5 graveyard | **~5h window.** Final pre-event send opportunity. Combined-send economics with night 1 retrospective. |
| **Inter Miami v Portland** | **TODAY May 17** | **0** | jadbennis0 | 11 | E2 crossed May 12 silent | **~8h window.** Multi-threshold compression: welcome + missed-E1 + missed-E2 + Tier-0 (4-part). |
| **Bruno Mars Ohio Stadium** | May 20 | 3 | charlesteel126 | 25 | E3+E4 silent multi-threshold (invisible) | Compression: 2-missed-sends + Tier-0 at 3 days. |
| **SEC Baseball Session 5** | **May 21** | **4** | **belder4308** | **0** | **pre-E1 (E1 fires May 19 = post-event)** | **NEW today.** First E1-after-event case. **Fast-track template required.** |
| **SEC Baseball Session 6** | May 22 | 5 | belder4308 | 0 | pre-E1 (E1 fires May 19 = before event by 3 days) | **Companion to Session 5.** Combined-send economics. |

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| AEW Double or Nothing | May 24 | 7 | joshdguillemette | 28 | E3+E4 silent; **E5 fires May 19 ~20:30 UTC (~58h)** |
| **Bruno Mars Columbus** (charlesteel) — listed Tier 0 above; cross-tier |

**joshdguillemette is now 58h from full-traversal silent.** Last reporting cycle where the send avoids that label.

### TIER 2 — Long-Lead Canonical (22+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| Noah Kahan Kia Center Orlando | Jun 12 | 26 | cjthomas2557 | 10 | E1+E2 silent (2-cross at E2 multi-threshold front) |
| **World Cup ×5 at AT&T Stadium + Matt Rife Sep 26** | Jun 14 → Sep 26 | 28 → 132 | **kevinshall87** | **5** | **E1 Day 2 silent (Pattern A++); E2 fires May 18 16:44 UTC (~30h) — NEW CLASS forecast** |
| **WC ×2 at BC Place Vancouver** | Jun 24 + Jul 7 | 38 + 51 | **karin_ef1** | **3** | **E1 silent (~4h ago, Pattern A++ Day 0 silent)** |
| **Harry Styles ×7 at MSG Aug 26 → Sep 9** | Aug 26 → Sep 9 | 101 → 115 | **cutekitten1234** | **0** | **pre-E1; E1 fires May 19 23:32 UTC (54h) — Pattern A++ canonical "cluster-at-signup"** |
| Bruno Mars MetLife ×3 | Aug 21–25 | 96–100 | taranimeramaro | 22 | E3 (crossed May 9 silent — 3-cross now: E1+E2+E3 all silent) |
| Ed Sheeran SoFi | Aug 8 | 83 | blubberboi | 38 | E5 silent traversal complete May 11 (Day 6 of historic record) |
| Shakira ×2 NYC | Jul 20–23 | 64–67 | laye.aurelien | 45 | E5 silent + 15 days post-E5 |
| pete.uzelac77 WC Lincoln Financial ×4 + Darts ×2 | Jun 14 → Jul 4 | 28 → 48 | pete.uzelac77 | 37 | E5 silent traversal complete May 10 (Day 7) |

### TIER 3 — Pattern B Variants (cohort = 30 of 82 users = 36.6%, **share decreased today**)
- **mark.murdock (E4 silent May 14, 24d, 0 watchlist) — NEWLY INVISIBLE TODAY.** Truncation horizon advanced. **E5 fires May 23 (~6 days).** **Last cycle before full-traversal — but he's now invisible to the visible-cohort tracking.**
- **zhili1208 (E3 silent ~May 13, 18d, 0 watchlist)** — Pattern B 3-cross at E3; **E4 fires May 20 (~3 days).**
- **lilianamasyrubi (E3 silent ~May 12, 19d, 0 watchlist)** — same shape; **E4 fires May 19 (~2 days) — entering 4-cross class.**
- **jmoriarty13 (E2 silent ~May 16, 7d)** — Pattern B 2-cross at E2 (5th confirmed instance, confirmed today).
- **natalie.sotocruz, emmacmather, kevinkid94, jfgalzin (E2 silent May 14-15, 8-9d)** — Pattern B 2-cross at E2 batch (now 2 days stale).
- **joseph.g.nicolosi (E2 silent ~May 11, 12d, 0 watchlist)** — Pattern B 2-cross at E2; **E3 fires May 18 (~1 day) — entering 3-cross class TOMORROW.**
- **pattyglvz (E1 silent ~May 15, Day 4, 0 watchlist)** — Pattern B at E1 (retroactive miss flagged today).
- **c_calingasan (E1 silent ~May 16, Day 4, 0 watchlist)** — Pattern B at E1 (confirmed today).
- **vlanza (E1 fires today ~13:20 UTC silent, Day 3, 0 watchlist)** — Pattern B at E1 (forecast).
- **nunemakerc (Day 1, 0 wl) pre-E1** — fires May 18 15:41 UTC; **Pattern-B-forming → likely Pattern B confirmed tomorrow.**

**Empty-watchlist cohort total: 30 of 82 (36.6%).** Percentage decreased ~1.4 points vs yesterday's 37.5% — **the cohort denominator grew (+2) but the empty-cohort count did not (cutekitten1234 + belder4308 both arrived with watchlist).** **First decrease in the empty-watchlist share in the report stream.**

### TIER 4 — Apology / Catch-Up (>21d silent backlog, below truncation horizon)
- **mark.murdock (E4 silent May 14, 24d, 0 watchlist) — NEWLY INVISIBLE.** First confirmed E4 silent user dropping below truncation horizon. E5 fires May 23.
- **dr.altvater (E4 crossed May 12 silent, 26d, 0 watchlist)** — **E5 fires May 20 (~3 days) — entering full-traversal class.**
- **joshdguillemette (E3+E4 silent, 28d, 1 watchlist AEW)** — listed above in Tier 1 (event 7 days out); also Tier 4. Cross-tier.
- **charlesteel126 (E3+E4 silent, 25d, invisible, 1 watchlist Bruno Mars Columbus)** — cross-tier with Tier 0.
- **nicklib253 (E4 silent May 9, 29d, Phillies past)** — Pattern A loss + E4 silent.
- **goldy.pec.2012 (E5 traversal completed May 11, 36d, Bilmuri past)** — Pattern A + full-traversal overlap.
- **blubberboi (E5 traversal completed May 10, 38d, Ed Sheeran SoFi Aug 8)** — historic first full-traversal case. Day 7 of historic record.
- **pete.uzelac77 (E5 traversal completed May 10, 37d, WC Lincoln Financial ×4 + Darts ×2)** — highest-value full-traversal candidate (6 tactical-fit future items 28–48 days out).
- **bhaygood728 (~44d, Cardi B past)** — apology-only sunset.
- **laye.aurelien (~45d, Shakira ×2 NYC 64-67 days out)** — highest-leverage tactical-fit graveyard recovery (still actionable).
- **awwhittington, ggri73 (~25d, 0 watchlist)** — Pattern B-at-E4 deep cohort.

### TIER 5 — Drip-Incompatible by Design
- **sparkitrightthere (E2 silent ~May 14, Day 10, Mac DeMarco May 7 passed 10 days ago)** — manual recovery shape; multi-threshold.
- **liambot62 (E2 silent ~May 15, Day 9, Toronto FC May 9 passed 8 days ago)** — Pattern C × multi-threshold (only confirmed instance).
- **konman87 (post-event after tonight, 104d)** — entering Pattern A loss-in-progress confirmation today if SMTP not restored.

**0 of 10 most-recent signups (0%) drip-incompatible today** (kevinkid94 + liambot62 rolled out of the 10-window). **Down from 20% to 0%.** This decrease combined with the Pattern A++ 20→40% jump represents **the strongest acquisition-quality day in the rolling-10 window in the report stream.**

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **cutekitten1234 / Harry Styles MSG E1 (NEW today — Pattern A++ "cluster-at-signup", 54h pre-fire)** | `Welcome — your 7 Harry Styles MSG dates, here's how the residency usually prices` | `Welcome to TicketScan — Aug 26 through Sep 9 at MSG, here's the residency-pricing read` | **A** *(named cluster size leads; "residency" hook differentiates from WC framing)* |
| **belder4308 / SEC Baseball Tier-0 fast-track (NEW today — first E1-after-event case)** | `Your SEC Baseball Tournament tickets — 4 days out. Here's the pricing read.` | `4 days to SEC Baseball Session 5 + Session 6 — welcome to TicketScan, here's how to read pricing this week` | **A** *(named tournament + named day-count; fast-track replaces canonical E1)* |
| **karin_ef1 / E1-LATE (NEW today — Day 0 silent, 4h late, Pattern A++)** | `Welcome — your 2 BC Place World Cup tickets + a Welcome email we owe you from this morning. Both are below.` | `4 hours late: your BC Place Vancouver cluster + how the Round of 16 usually prices` | **A** *(acknowledgment-of-failure pivot leads; cluster hook in body)* |
| **kevinshall87 / Pattern A++ 2-cross at E2 (NEW CLASS — pre-emptive for 30h forecast deadline)** | `Your AT&T Stadium World Cup cluster + 2 Welcome emails we owe you from this week. The full read is below.` | `Day 6 with TicketScan — we still haven't said hi, and we owe you 2 emails. Here's the AT&T-cluster pricing.` | **A** *(two-email acknowledgment leads)* |
| **konman87 / Soldier Field night 2 FINAL WINDOW (5h)** | `Tonight is Soldier Field night 2 — and we owe you 103 days of silence + a night-1 retrospective. Here's both.` | `Bruno Mars tonight at Soldier Field — last-minute pricing + the night-1 read you didn't get yesterday` | **A** *(103-day acknowledgment leads; tactical read in body)* |
| **jadbennis0 / Inter Miami 8h + 4-part compression** | `Inter Miami today — and we owe you 2 emails. Here's the 8-hour read.` | `8 hours to Inter Miami v Portland — 11-day welcome + Nu Stadium pricing` | **A** *(tightens 24→8 hours)* |
| charlesteel126 / Bruno Mars Columbus 3d + E3+E4 multi-threshold (invisible) | `Bruno Mars at Ohio Stadium — 3 days out, and we owe you 2 emails. Here's the Wednesday read.` | `3 days to Ohio Stadium — multi-threshold apology + the night-of pricing read` | **A** *(tightens 4→3)* |
| **joshdguillemette / AEW 7d, E3+E4 silent, E5 in 58h (FINAL PRE-FULL-TRAVERSAL CYCLE)** | `AEW Double or Nothing — 7 days out, and 3 missed sends. 58 hours from now this becomes 4. Here's the catch-up.` | `Louis Armstrong / AEW: 7 days out + a full-traversal apology before the 4th miss` | **A** *(58-hour countdown leads — last cycle before E5 silent makes this a full-traversal case)* |
| cjthomas2557 / Noah Kahan 26d + E1+E2 multi-threshold | `Noah Kahan / Kia Center — 26 days out, and we owe you 2 sends, sorry` | `2 missed emails + Noah Kahan in 26 days: catching you up properly` | **A** *(tightens 27→26)* |
| taranimeramaro / Bruno Mars MetLife ×3 E3 (3-cross now) | `3 Bruno Mars dates at MetLife + 3 missed sends — here's the cluster read and the catch-up` | `MetLife ×3: which night usually has the cheapest seats? (And: a real apology.)` | **A** *(carries from yesterday)* |
| **mark.murdock / Pattern B 4-cross at E4 (NEWLY INVISIBLE — E5 in 6 days)** | `Three weeks in, four missed emails, here's the unvarnished truth: we've been broken. Here's what TicketScan looks like when it works.` | `24 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(carries; "we've been broken" leads with radical transparency. **Now urgent — last visible reporting cycle.**)* |
| **jmoriarty13 / Pattern B 2-cross at E2 (confirmed silent today)** | `Week 1 on TicketScan — and we've been quieter than we should have been. Here are 3 events worth tracking right now.` | `2 missed sends + 3 events trending — let's reset` | **A** *(time-anchor leads when 2 sends were missed)* |
| natalie.sotocruz, emmacmather, kevinkid94, jfgalzin (2-cross at E2 batch from May 14-15) | `It's been a week — we've been quieter than we should have been. Here are 3 events worth tracking right now.` | `1-2 missed emails + 3 events trending on TicketScan` | **A** *(unchanged)* |
| Pattern C × multi-threshold (liambot62) | `Your Toronto FC match was 8 days ago — and we owe you two emails about it. Here's both.` | `We failed you 8 days ago — here's how to make it right, and what to track next` | **A** *(tightens 7→8 days post-event)* |
| Pattern B-at-E1 batch (pattyglvz Day 4, c_calingasan Day 4, vlanza Day 3 pre-E1, nunemakerc Day 1 pre-E1) | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `What event are you watching? Here's how TicketScan helps from Day 1.` | A |
| zhili1208 / lilianamasyrubi (Pattern B 3-cross at E3) | `Two-and-a-half weeks in, three silent touchpoints from us — here's a reset` | `3 missed emails + 3 events trending — let's reset` | A |
| Catch-up — blubberboi (E5 full-traversal, Day 7 of historic record) | `Ed Sheeran is 83 days away. We owe you 5 emails. Here's the one that actually matters.` | `We owe you 30+ days of emails — here's the SoFi pricing read` | A *(tightens 84→83)* |
| pete.uzelac77 / WC Lincoln Financial ×4 E5 graveyard (full-traversal + tactical-fit, 28-48 days out) | `4 World Cup matches at Lincoln Financial + 5 missed emails — here's the cluster read` | `Lincoln Financial ×4 in 28-48 days, and we owe you a real catch-up` | A *(carries)* |
| laye.aurelien Shakira ×2 (E5 + 15d post-E5) | `Shakira at MetLife — 64 days out and we owe you a real 15-day-late catch-up` | `2 Shakira dates, 64 days, and 45+ silent days from us — here's the read` | A *(tightens 65→64; post-E5 tail 14→15)* |

**CTA conformance:** 12 of 18 (67%) top-level routes; 6 of 18 (33%) event-specific deep-links. **Deep-link share dropped from 35% to 33%** with two new sends added (cutekitten1234 + kevinshall87) both using `/watchlist`.

---

## Action Items

### P0 — Critical (Day 41 of outage)

1. **SMTP / drip pipeline — DAY 41. The 502 probe signal from yesterday did not persist.** Today's probe returned to HTTP 000 gateway timeout at 35s — the Days-11–39 signature. **The May 16 anomaly may have been a brief partial-recovery state during a restart. Today's priority order:**
   1. **Pull Railway logs for 2026-05-16 10:30-10:42 UTC immediately.** This is the only diagnostic surface produced in 30 days. **Log evidence will be lost to rotation if not retrieved this week.**
   2. Cross-reference Railway's service restart history for May 15-16 — if there was an automatic restart in the window, yesterday's 502 was likely a transient post-restart state. If not, the application may have a long-lived heisenbug that flips between hung-and-throwing states.
   3. **Add permanent error-surfacing wrap to `/api/admin/drip-run`:** `try { ... } catch (e) { res.status(500).json({error: e.message, stack: e.stack}) }`. **Without this, the next 502 state will pass equally silent — we will have lost two diagnostic-quality moments in a row.**
   4. If Railway logs reveal `EAUTH` / Gmail auth: regenerate app password.
   5. If logs reveal `ECONNREFUSED:587`: Railway egress hypothesis from May 1 confirmed.
   6. If logs reveal `relation does not exist`: schema drift on `drip_emails_sent`.

2. **DEADLINE TRACKING — today's stack is the most compressed in the report stream:**
   - **karin_ef1 E1 — silent ~4h ago. Pattern A++ Day 0 silent confirmed.**
   - **kevinshall87 — Day 2 silent E1. E2 fires May 18 16:44 UTC (~30h). NEW Pattern A++ 2-cross-at-E2 class forecast.**
   - **vlanza E1 fires ~13:20 UTC today (~3h).** Pattern B silent forecast.
   - **konman87 — Soldier Field night 2 ~16:00 UTC (~5h).** Final pre-event window. **Highest-ROI single send in the entire backlog this week.**
   - **jadbennis0 — Inter Miami ~19:00 UTC (~8h).** Multi-threshold + Tier-0 4-part compression.
   - **belder4308 — SEC Baseball Session 5 May 21 (4 days).** **Tier-0 fast-track template required — first E1-after-event case in report stream.**
   - **cutekitten1234 — E1 fires May 19 23:32 UTC (~54h).** Pattern A++ "cluster-at-signup" canonical or E1-late if delayed.
   - **joshdguillemette E5 fires May 19 ~20:30 UTC (~58h).** Last cycle to send before second confirmed full-traversal silent send.

3. **Target-price UX (Day 110 — strongest single-day evidence yet).** 106/106 watchlist items null. **9 new adds in 24h, 9/9 null target.** Both Pattern A++ users today (cutekitten1234 + belder4308) added high-intent clusters with zero target-price capture. **The auto-suggest spec has now been validated against four consecutive Pattern A++ signups producing 17 total null-target items.** Specification reminder: inline auto-suggest at add-time with `current_price × 0.85` as default, single-tap to set. **No further validation is needed — the spec is ready to build.**

### P1 — High

4. **Past-event watchlist cleanup (38.7% bloat — down from 41.2%).** First decrease in 9+ cycles. Tomorrow's count: ~40.6% after Soldier Field night 2 + Inter Miami age past. **Same fix as Apr 29 → today:** `status` column + daily expiry cron. **Today's new specific cost:** cutekitten1234's 7 high-quality items at 101-115 days out are now at risk of being lost to past-event pollution before they age — auto-archive would isolate them from the noise.

5. **`/drip-stats` cap / pagination (Day 11 of regression).** **mark.murdock dropped below the truncation horizon today** — the only user who was at E4-silent in the visible cohort. **Hidden cohort ≥14 users.** Same fix: add `offset` parameter or raise cap to 100. **Today's specific finding:** the API now obscures the entire E4 cohort — every user past Day 21 is invisible. The single most valuable diagnostic surface for "users approaching full traversal" has been API-blacked-out for 11 days.

6. **Backlog catch-up plan when SMTP returns — updated priority order Day 41:**
   1. **konman87 (night-2 pre-event apology pivot, ~5h window — TOP PRIORITY)**
   2. jadbennis0 (4-part compression, ~8h window)
   3. **belder4308 (Tier-0 fast-track, ~4-day pre-event)**
   4. karin_ef1 (E1-late variant, 4h late)
   5. **cutekitten1234 (canonical E1 if within 54h, or E1-late if delayed — Pattern A++ "cluster-at-signup")**
   6. kevinshall87 (E1-late + pre-emptive Pattern A++ 2-cross-at-E2 template)
   7. cjthomas2557 (E1+E2 compressed)
   8. charlesteel126 (E3+E4 multi-threshold mid + Tier-0 3d)
   9. joshdguillemette (E3+E4 + final-pre-E5 cycle)
   10. taranimeramaro (E3 3-cross tactical-fit)
   11. mark.murdock (Pattern B 4-cross apology — final visible cycle before E5)
   12. liambot62 (Pattern C × multi-threshold)
   13. blubberboi (full-traversal apology test case)
   14. pete.uzelac77 (full-traversal + WC cluster)

7. **Newsletter growth — Day 105 milestone.** 8 user registrations / 0 newsletter signups in last 7 days. Footer regression Day 21; popup spec Day 17 unbuilt. **Structural break held under +2-user-signup day pressure today** — the strongest single-day signal load in 12 days. Cross-channel break is now empirically confirmed across the widest signal-load range observed.

8. **`W0-A/B/C` real-time welcome triage architecture — second concrete justification today.** **Two distinct route requirements emerged in 24h:**
   - **Route A (cluster-at-signup):** cutekitten1234's 17-second 7-item add demands a sub-hour welcome with cluster framing. The 3-day E1 delay loses the urgency.
   - **Route B (Tier-0 fast-track):** belder4308's E1-after-event timing **is mathematically incompatible** with the 3-day E1 delay. **This is no longer a "welcome optimization" ask; it is a "fix a structural bug" ask.**
   - Route C still covers Pattern B-forming (immediate event-suggest prompt).

### P1.5 — Acquisition-quality signal (Day 3 of hypothesis)

9. **Acquisition-quality channel investigation (Day 3 — hypothesis upgraded today).** **Yesterday's "WC channel acquisition pulse" hypothesis no longer fits the data.** cutekitten1234 is Harry Styles MSG; belder4308 is SEC Baseball. **The 4 Pattern A++ signups in 5 days span 3 distinct channels (WC ×2, Harry Styles MSG, SEC Baseball).** **Upgraded hypothesis: a general acquisition-quality pulse is underway across multiple channels simultaneously.** **Today's data point:** Pattern A++ density in rolling-10 jumped from 20% to 40% in a single day; Pattern B share **decreased for the first time in the report stream (70% → 60%).** **Watch the next 5 signups closely** — if Pattern A++ density holds above 30% across the next 5 signups, the pulse is confirmed; if it reverts to ≤20%, this was a stochastic clustering event.

### P2 — Medium

10. **`drip-health` endpoint — DAY 10 of unmet ask.** Spec unchanged: `GET /api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt, pendingCount}`. **Today's regression from 502 → 000 makes this endpoint even more valuable** — would allow continuous detection of state changes without manual probe inspection. The yesterday-502/today-000 transition is exactly the kind of signal that a health endpoint would have caught automatically.

11. **pete.uzelac77 World Cup re-engagement** — 37 days on platform, 6 items, 28 days to first match. **The "in May" framing on the original subject (`Don't buy your World Cup tickets in May — here's why`) has 14 days of validity left** before it expires.

12. **Watchlist digest endpoint — still manual.** **18 distinct send templates hand-composed today** (up from 17 yesterday — added cutekitten1234 canonical cluster + belder4308 Tier-0 fast-track + kevinshall87 Pattern A++ 2-cross-at-E2 NEW class; minus one consolidation as kevinkid94 + liambot62 rolled out of the rolling 10). Bottleneck unchanged.

13. **Viva El Jaripeo post-mortem — 21 DAYS OVERDUE.**

### Tracking metrics

- **Tactical-window degradation:** Day 41. **konman87 night-1 closed silent yesterday.** **Night-2 + Inter Miami close silent today** if no manual send. **Next pre-event silent-failure forecast:** charlesteel126 Bruno Mars Columbus May 20 (3 days), belder4308 SEC Baseball May 21 (4 days), joshdguillemette AEW May 24 (7 days). **3 distinct pre-event silent-failure horizons compressing inside 7 days.**
- **CTA simplification rule conformance:** 67% top-level (12 of 18); 33% deep-link. Stable.
- **Pattern mix in rolling 10-user cohort:** **A++ 40% (was 20%) / B 60% (was 70%) / drip-incompatible 0% (was 10%).** **Largest single-day shift in the rolling-10 cohort in the report stream's history.**
- **Pattern A++ cluster acquisition rate:** **4 in 5 days** (kevinshall87, karin_ef1, cutekitten1234, belder4308). **Up from 2 in 5 days yesterday.** Channel distribution: WC ×2, Harry Styles MSG ×1, SEC Baseball ×1.
- **Template inventory needed for safe restart:** **16 shapes today** (up from 13 on May 16). Added: cluster-at-signup canonical (cutekitten1234), Tier-0 fast-track (belder4308), Pattern A++ 2-cross-at-E2 (kevinshall87 pre-emptive). **Inventory now growing faster than outage duration on a daily basis (4 → 12 → 13 → 16 across May 11 / May 15 / May 16 / May 17).**

---

## Handoff → Analytics Agent (Agent 7)

- **Subscriber total:** 3 active, 0 net change in 24h. **105 consecutive days flat.** Day 12 of zero-capture under signup velocity. **Structural break held under highest-signal-load day (+2 users + 9 watchlist adds + 2 Pattern A++ at signup).**
- **User signups (24h):** **+2** (belder4308 May 16 22:13 UTC 2 wl; cutekitten1234 May 16 23:32 UTC 7 wl). **82 total users.** 7d rolling = 8.
- **New watchlist items (24h):** **+9.** Total 106 (was 97). **Biggest single-day add count in the report stream.** All 9 items null target.
- **Drip pipeline:** UN-SHIPPED. **Day 41. 0 sends ever. 82 of 82 users never received a drip email.** Backlog: 29 visible + 14+ hidden ≈ **76 owed sends** (+3 vs yesterday's 73).
- **Probe signal regression today:** drip-run probe reverted from yesterday's HTTP 502 to today's HTTP 000 (35s timeout). **The single diagnostic-quality datapoint in 30 days did not persist.**
- **Threshold crossings in last 24h (3 confirmed silent + 1 retroactive correction + 1 forecast-today + 1 forecast-tomorrow):**
  - May 15 ~15:23 UTC pattyglvz → E1 silent (RETROACTIVE — missed by yesterday's report)
  - May 16 ~11:46 UTC c_calingasan → E1 silent confirmed today
  - May 16 ~13:18 UTC jmoriarty13 → E2 silent confirmed (5th Pattern B 2-cross at E2)
  - **May 17 06:46 UTC karin_ef1 → E1 silent (2nd consecutive Pattern A++ silent E1)**
  - **May 17 ~13:20 UTC (forecast, ~3h) vlanza → E1**
  - **May 18 ~16:44 UTC (forecast) kevinshall87 → E2 (NEW CLASS — Pattern A++ 2-cross-at-E2)**
- **Price alerts:** 0 ever triggered. **106/106 watchlist items null. Day 110.** 9 new adds in 24h, all null.
- **Watchlist composition:** 106 items, 41 past-dated (38.7% — **first decrease in 9+ cycles**). **2 events within 8 hours** (Soldier Field night 2, Inter Miami). 3 in 3-7d (Ohio Stadium 3d, SEC Baseball 4d+5d). 1 in 7-21d (AEW). 2 in 22-32d (cjthomas2557, kevinshall87 first WC). 13 in 33-62d (kevinshall87 ×4 + karin_ef1 ×2 + pete.uzelac77 ×4 + taranimeramaro starts). **45 in 63+d** (up sharply with cutekitten1234's 7 Harry Styles 101-115d adds).
- **Empty-watchlist cohort:** 30 of 82 (36.6% — down 0.9 points). **First decrease in the report stream.**
- **Pattern mix in rolling 10-user cohort:** **A++ 40% / B 60% / drip-incompatible 0%.** **Largest single-day quality shift ever observed.**
- **Acquisition-quality channel hypothesis (Day 3, upgraded):** WC-specific surge falsified; **general cross-channel acquisition-quality pulse** is the new working hypothesis. 4 Pattern A++ in 5 days across 3 distinct channels (WC ×2, Harry Styles MSG, SEC Baseball).
- **NEW CLASSES added to template inventory today:**
  - **"Cluster-at-signup"** (cutekitten1234, 7 items in 17 seconds — densest single-user cluster ever)
  - **"E1-after-event" / "Tier-0 fast-track"** (belder4308, tracked events occur before scheduled E1)
  - **Pattern A++ 2-cross-at-E2** (kevinshall87 pre-emptive, fires May 18 16:44 UTC if SMTP not restored)
- **Most useful single observation today:** **the platform produced its two strongest acquisition signals on the same day it lost its single diagnostic-quality SMTP probe state and lost its second consecutive Pattern A++ canonical E1 silent.** Acquisition quality and delivery infrastructure decoupled today in the sharpest way the report stream has observed: **+2 Pattern A++ at signup, +9 watchlist adds, +1.4-point Pattern B share reversal, all into a pipeline that returned to its hung-state failure mode after a one-day flicker of diagnostic signal.** The next 24h determines whether (a) konman87 night 2 + Inter Miami silent-through-event becomes a 3rd active Pattern A loss-in-progress, (b) kevinshall87 enters NEW-CLASS 2-cross-at-E2 silent, (c) cutekitten1234 starts Day 1 of "cluster-at-signup Pattern A++ silent E1 traversal," (d) the acquisition-quality pulse continues into a third Pattern A++ in 24h, or all of the above simultaneously.
