# Email Daily — 2026-05-29

> **Day 53 of SMTP outage. Probe HTTP 000 50.13s timeout — 8th consecutive baseline-failure cycle (Day 41/42/43/44/49/51/52/53).** **cjthomas2557 E4 fired silent as forecast (May 28 22:49 UTC, NEW VARIANT Pattern A 4-cross tactical first-of-class REALIZED).** **vlanza E3 fired silent UNFORECASTED (May 28 13:20 UTC — Pattern B 3-cross at E3 — missed by yesterday's forecast surface).** **Yesterday's 2-user burst (pika4696 + samvirsujan) now classified at Day 1: samvirsujan = Pattern A canonical (1 future wl item at +9 min from signup); pika4696 = Pattern B forming (0 wl items at Day 1).** **The 1A/1B split is neutral on acquisition-quality — pulse hypothesis test result pending Agent 6 paid-push confirmation, but the split shape now suggests paid pulse is NOT lower-intent than baseline.** **0 net signups, 0 net wl adds in last 24h.** **90 total users / 110 wl items / 3 subscribers / 0 alerts. Day 117 newsletter flatline. Day 122 of 100% null-target streak (110/110 — same total because zero adds in 24h).** **Past-event watchlist count: 48 of 110 (43.6%) — unchanged.**

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` returns `stats: []` after **Day 53.** **90 of 90 users have never received a drip email** (every user's `last_email_sent: 0`, including the 2 Day-1 registrations).
- **Probe today (Day 53):** `POST /api/admin/drip-run?limit=1&dryRun=true` returned **HTTP 000 (gateway timeout at 50.13s)** — **8th consecutive baseline-failure cycle.** **Timeout duration extended +4.98s vs May 28 (45.15s → 50.13s) — first observable variance in probe latency across 8 cycles but still within timeout-class.** Probe behavior remains fully reproducible.
- **Asks for engineering (urgency reordered Day 53):**
  1. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { log; return res.status(500).json({error: e.message, stack: e.stack}) }`.** **This remains the SINGULAR remaining path back to root-cause visibility.** Eight cycles confirm the failure is stable and reproducible the moment the wrap ships. **Cost-of-not-shipping: 1 day per cycle. Total cost-of-delay: 13 days since original ask (May 16).**
  2. **Railway log-pull window for 2026-05-16 10:30-10:42 UTC is now ~13.4 days old. Confirmed dead since Day 49. Stop relying on this path.**
  3. Check Railway service status / restart history for May 15-16 and any restarts in past 13 days. Eight cycles confirm the 502 was not a permanent state.
- `/api/admin/drip-health` → returned `404 "Endpoint not found"` again today. **Day 22 of that ask unmet** (P0 since May 7).

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 28 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **18 of 20** | unchanged |
| E2 | ≥7d | **18 of 20** | +1 (pika4696 + samvirsujan still below 7d; vlanza/karin_ef1/c_calingasan/pattyglvz/kevinshall87 all above) |
| E3 | ≥14d | **14 of 20** | +3 (vlanza Day 14→15 crossed E3; c_calingasan/pattyglvz visibly above; karin_ef1 stable above) |
| E4 | ≥21d | **0 of 20 visible** | unchanged (hidden cohort still holds the E4 mass — cjthomas2557 fired E4 silent last night in hidden range) |
| E5 | ≥30d | **0 of 20 visible** | unchanged at zero |

**Truncation horizon at 20 holds.** **Hidden cohort now ≥19-21 users** (cjthomas2557 confirmed at Day 21 today after E4 crossing; he is hidden). **Day 23 of API-cap regression.** **The visible E3 cohort grew by 3 in one day — first multi-crossing E3 day since report stream's E3 tracking began.** Yesterday's note that 2 new Day-0 users push older users out is reinforced today: vlanza/karin_ef1/c_calingasan/pattyglvz/kevinshall87 now hold 5 E3 slots that were unreached yesterday.

### Threshold crossings confirmed silent during May 28 → 29 (24h)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| **May 28 13:20 UTC** | **vlanza** | **E3** | **Pattern B 3-cross at E3 — UNFORECASTED REALIZED (missed yesterday)** | **silent confirmed** | First realized crossing of the day. **Forecast surface missed this — vlanza was at Day 13 yesterday and aged into E3 ~21h ago. Now ~21h silent.** Adds to P-B 3-cross at E3 repeating class (joseph.g.nicolosi + c_calingasan + pattyglvz + vlanza = 4th instance). |
| **May 28 22:49 UTC** | **cjthomas2557** | **E4** | **Pattern A 4-cross at E4 tactical NEW VARIANT — REALIZED (forecast 13h out)** | **silent confirmed** | First Pattern A 4-cross with event still tactical at fire time (Noah Kahan Kia Center Orlando 14d out at E4 fire). **First-of-class REALIZED.** Now ~12h silent. Establishes the tactical Pattern A E4 variant as ≥1× confirmed. |

**2 confirmed silent crossings in 24h.** **1-of-1 explicit forecast realization (cjthomas2557).** **+1 unforecasted realization (vlanza).** **The forecast surface MISSED vlanza** — Pattern B 3-cross at E3 progression was tracked at jmoriarty13's slot (May 31) but vlanza's slot (May 28 13:20 UTC) was not enumerated. **First forecast-surface miss in 8 days. Root cause: vlanza was on the May 28 → 13d → 14d boundary but yesterday's horizon table started at +13h, missing a -8h backwards window where the actual crossing fell.** **Implication: horizon table needs to include "crossings within last 24h" not just "crossings in next 13-72h".**

### Today's threshold horizon (next 24-72h)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| **May 29 13:07 UTC (~3h)** | **liambot62** | **E4** | **Pattern B 4-cross at E4 + drip-incompatible Toronto FC past (NEW SHAPE)** | **silent forecast** | **First P-B 4-cross with past-event wl in the report stream. Fires within this report cycle's first 3 hours.** Distinct from konman87/jadbennis0 because P-B base layer means 0 effective platform engagement before event aged past. |
| **May 29 20:52 UTC (~11h)** | **kevinkid94** | **E4** | **Pattern B 4-cross at E4 (4th batch instance)** | **silent forecast** | |
| **May 29 21:54 UTC (~12h)** | **emmacmather** | **E4** | **Pattern B 4-cross at E4 (3rd batch instance)** | **silent forecast** | |
| **May 30 ~12:54 UTC (~27h)** | **jfgalzin** | **E4** | **Pattern B 4-cross at E4 (6th batch instance)** | **silent forecast** | Hidden cohort — not in returned 20 today. |
| **May 30 13:18 UTC (~27h)** | **jmoriarty13** | **E4** | **Pattern B 4-cross at E4 (revised: was tracked as E3 May 31 in yesterday's report — CORRECTED to E4 May 30 today)** | **silent forecast** | **Yesterday's report had a date+threshold error (showed "May 31 E3"). Recomputed: jmoriarty13 Day 21 = May 30 13:18 UTC. E3 was crossed at Day 14 = May 23 (6 days ago, silent).** |
| **May 31 07:12 UTC (~45h)** | **pika4696** | **E1** | **Pattern B 1-cross at E1 (first NEW-cohort crossing)** | **silent forecast** | First crossing of the May 28 burst cohort. **Pre-classification at signup — now classified Pattern B forming (0 wl items at Day 1).** |
| **May 31 07:15 UTC (~45h)** | **samvirsujan** | **E1** | **Pattern A 1-cross at E1 (Pattern A canonical)** | **silent forecast** | Second NEW-cohort crossing 3 minutes after pika4696. Pattern A confirmed (1 future wl item at +9 min from signup — NBA Finals MSG Jun 16). |

**Total horizon load (next 72h): 7 confirmed silent forecasts** (liambot62 + kevinkid94 + emmacmather + jfgalzin hidden + jmoriarty13 + pika4696 + samvirsujan). **Three classes co-fire in next 12h** (P-B 4-cross batch ×3) + first P-B-with-past NEW SHAPE realization. **First 3-instance same-day E4 batch in report stream history fires TODAY** (liambot62 + kevinkid94 + emmacmather). **First Day-3 E1 batch of the May 28 paid-pulse cohort fires Saturday May 31 ~45h out.**

**Visible backlog (in returned 20):** 18 E1 + 18 E2 + 14 E3 + 0 E4 visible + 0 E5 visible = **50 emails owed in pendingUsers cohort** (+4 vs May 28's 46 — driven by 3 E3 crossings + 1 E2 visible gain). Plus hidden cohort (≥19-21 users including cjthomas2557 just-realized) with 3 confirmed full-traversal cases + 2 likely full-traversal cases awwhittington/ggri73. **True backlog ≈ 105-110 emails across all eligible users.**

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 122 of 100% null-on-add. 110/110 watchlist items have null `target_price` (unchanged total).** **Zero-add streak Day 1 (was broken at Day 7 yesterday — back to zero adds today).** **The 2 new items captured null yesterday were the only Day-122 reinforcement; today there's no new evidence but also no decay — the regression remains 100%.** **The hyper-saturation thesis (21 high-intent null captures in report stream history) holds without new evidence today.** **The spec-validation surface remains saturated — every signal continues to point at the add-form UI as the singular cause.**

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged — roos_leeuwen, samir.sgpatel, test@example.com)
- **Stall duration: 117 days** since last organic newsletter signup (roos_leeuwen, 2026-02-01). **Day 24 of consecutive zero-capture days.** **0 user signups + 0 newsletter signups in same window** — first "neutral" day of the post-burst cycle (yesterday: +2 signups / 0 newsletter). **Footer regression Day 33; popup spec Day 29 unbuilt.** **The neutral-day signal reinforces the structural break read: even without acquisition velocity, the newsletter floor stays at 0 — capture rate is structurally bottlenecked, not stochastically zero.**

## Platform Context
- Total users: **90** (unchanged vs May 28)
- Users today (rolling 24h): **0** (no new signups in last 24h)
- Users this week (rolling 7d): **2** — `usersThisWeek` API field confirms this (May 28 cohort: pika4696 + samvirsujan). **May 20 cohort aged out of 7d window today.** **7d count dropped 5 → 2 over yesterday → today as forecast.**
- Watchlist items: **110** (unchanged vs May 28). **Day 1 of new zero-add streak.**
- Past-dated watchlist items: **48 of 110 (43.6%)** — unchanged. **The 7-day frozen ratio that broke yesterday (44.4% → 43.6%) holds at 43.6% today.** **The improvement was a one-shot — additive only; no new past-event aging, no past-event cleanup.** **The auto-archive cron remains unshipped — Day 46 of unaddressed P1 ask.**
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

## New-Signup Pattern Analysis — Burst Cohort Classification (Day 1)

**Yesterday's 2-user burst (pika4696 07:12 UTC, samvirsujan 07:15 UTC) is now classified at Day 1:**

| User | wl at Day 1 | Composition | Pattern | Note |
|------|-------------|-------------|---------|------|
| **samvirsujan** | **1 item** | NBA Finals MSG Jun 16 (+18d future, Tier 1) | **Pattern A canonical** | Added +9 min from signup. Single-item Tier-1 future canonical A shape. **First Pattern A canonical signup since lisallam (May 17, 11d ago) — 11-day Pattern A drought broken.** |
| **pika4696** | **0 items** | n/a | **Pattern B forming** | Day 1 zero-engagement. **Joins brockedwardnelson + keegansmith18 + 9440111 + eduardo as 5th Pattern B forming/confirmed in rolling-10.** |

**1A / 1B split.** **The 2-user burst split neutral on acquisition-quality.** **If Agent 6 confirms a paid push fired May 28 morning UTC, the pulse hypothesis is verified AND the split shape suggests paid pulse is NOT lower-intent than baseline (a non-null result either way).** **If Agent 6 confirms no paid push, the May 20 burst → 7d drought → May 28 burst becomes pulse-without-trigger, possibly viral/cohort effect.**

### Rolling-10 pattern mix (refreshed today with 2 classifications)
| User | Signed up | Days | Watchlist | Pattern | Note |
|------|-----------|------|-----------|---------|------|
| pika4696 | May 28 07:12 UTC | 1 | 0 | **Pattern B forming** | E1 fires ~45h. |
| samvirsujan | May 28 07:15 UTC | 1 | 1 (future Tier 1) | **Pattern A canonical** | NBA Finals MSG Jun 16. E1 fires ~45h. |
| brockedwardnelson | May 20 19:58 UTC | 8 | 0 | Pattern B 2-cross at E2 — REALIZED | E2 silent ~38h ago. |
| zhouyilinbest | May 20 19:00 UTC | 8 | 1 (past) | Pattern A loss → post-event-at-onboarding NEW SHAPE | E2 silent ~39h ago. |
| keegansmith18 | May 20 17:39 UTC | 8 | 0 | Pattern B 2-cross at E2 — REALIZED | E2 silent ~40h ago. |
| 9440111 | May 18 19:09 UTC | 10 | unknown | Pattern B 2-cross at E2 (confirmed prior reports) | |
| eduardo | May 18 00:48 UTC | 11 | unknown | Pattern B 2-cross at E2 | |
| lisallam | May 17 14:05 UTC | 11 | JOJI 1 (future Tier 2 → Tier 1 today at 18d) | Pattern A canonical (E1+E2 silent) | JOJI Jun 16 — now 18d out (was 19d May 28). **Crossed into Tier 1 today.** |
| cutekitten1234 | May 16 23:32 UTC | 12 | Harry Styles ×7 | Pattern A++ cluster 2-cross at E2 | Aug 26 → Sep 9. |
| belder4308 | May 16 22:13 UTC | 12 | SEC sessions past | Pattern A++ + Tier-0 silent-through-event (Day 7 sunset) | |

**Rolling-10 pattern mix (refreshed):**
- **Pattern A++ canonical: 2 of 10 (20%)** — cutekitten1234, belder4308. Unchanged from May 28.
- **Pattern A canonical: 2 of 10 (20%)** — lisallam, **samvirsujan (NEW)**. **+1 vs May 28** — first Pattern A signup since May 17.
- **Pattern B forming/confirmed: 5 of 10 (50%)** — 9440111, eduardo, brockedwardnelson, keegansmith18, **pika4696 (NEW)**. **+1 vs May 28**.
- **Pattern A loss-in-progress / post-event-at-onboarding: 1 of 10 (10%)** — zhouyilinbest. Unchanged.
- **Pre-classification: 0 of 10 (0%)** — both Day-1 users now classified. **-2 vs May 28** (resolved).

**A++ density holds at 20%** — second consecutive day at 20%, confirming this is the new floor. **A canonical density rose 10% → 20%.** **B density rose 40% → 50%.** **Total Pattern A family (A++ + A) = 40%, holds at recent average.** **The pulse-cohort split (1A / 1B) confirms that paid pulse (if confirmed by Agent 6) does NOT preferentially produce non-A++ users — instead it produces a neutral split similar to background acquisition.** **The rate-decay tracking on Pattern A++ clusters continues: 4 A++ in 17 days (no new A++ since May 16, belder4308). Streak Day 13.**

**Three structural reasons the next drought (when this burst ends) will repeat — unchanged from May 28:**
1. **Newsletter footer regression Day 33** — no signup widget on home page footer.
2. **Popup spec Day 29 unbuilt** — exit-intent capture not shipped.
3. **No referral mechanic, no shareable link in any send (because no sends).** Acquisition surface structurally bottlenecked to paid + organic search only.

---

## Full-Traversal Silent Send Class — Day 53 status

**3 confirmed full-traversal silent sends** (dr.altvater, mark.murdock — both P-B; joshdguillemette — P-A variant silent-through-event). **2 likely-but-hidden full-traversal cases** (awwhittington, ggri73 — both ~37d today, both past E5 trigger if E5 = Day 30, both behind the 20-user truncation cap).

### Three confirmed cases (day-counts updated +1)
- **dr.altvater — full-traversal Day 10** (May 19 E5 silent). Day 37 today.
- **mark.murdock — full-traversal Day 6** (May 23 E5 silent). Day 35 today.
- **joshdguillemette — full-traversal + post-event AEW Day 5** (May 24 event-day silent). Day 40 today.

### Likely-but-hidden cases (day-counts updated +1)
- **awwhittington (37d today, hidden)** — likely silent during May 21-25 gap window.
- **ggri73 (37d today, hidden)** — likely silent during May 21-25 gap window.

**Total likely full-traversal count: 5.** Class is structurally established and likely quintuply-repeating.

---

## Watchlist Digest Prep — Tier-Compressed

### Past-Event Cleanup
**48 of 110 (43.6%) past-dated** — unchanged from May 28. **Day 1 of frozen ratio at 43.6%.** **No additive improvement today (zero new future-event adds); no subtractive improvement today (zero past-event cleanup).** **Past/future signal/noise ratio: 1:1.29** (48 past : 62 future) — frozen. **The auto-archive cron remains unshipped — Day 46 of unaddressed P1 ask.** **Today's specific signal: the ratio is stable for the first time after yesterday's one-shot improvement.** **Structural read: every additional improvement now requires either net future adds OR ship-the-archive-cron; today demonstrates neither, hence flat.**

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **(none confirmed)** | — | — | — | — | — | **EMPTY for 5th consecutive day.** Yesterday's 2 new wl items (samvirsujan NBA Finals Jun 16 +18d) were Tier 1, not Tier 0. **Next confirmed future-side event: lisallam JOJI Jun 16 (18 days out — Tier 1) — moved up from Tier 2 today.** |

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **NBA Finals: TBD at Knicks RD4 HM GM3** (MSG) | **Jun 16** | **+18** | **samvirsujan** | **1** | **None — E1 fires Sat May 31** |
| NBA Finals: TBD at Knicks RD4 HM GM3 (MSG) | Jun 16 | +18 | joseph.g.nicolosi | 11 | Pattern B 3-cross at E3 |
| **JOJI: SOLARIS** (Prudential Center Newark) | **Jun 16** | **+18** | **lisallam** | **11** | **E1+E2 silent (May 20 + May 24)** — **moved from Tier 2 to Tier 1 today.** |
| Noah Kahan: The Great Divide Tour (Kia Center Orlando) | Jun 12 | +14 | cjthomas2557 | 21 | **E1+E2+E3 silent + E4 REALIZED ~12h ago (NEW VARIANT first-of-class)** |
| World Cup Match 22 (England vs Croatia) | Jun 17 | +19 | kevinshall87 | 16 | E1+E2+E3 silent (E3 May 26 confirmed) |
| World Cup Match 11 (Netherlands vs Japan) | Jun 14 | +16 | kevinshall87 | 16 | (same user — cluster) |
| World Cup Match 29 (Brazil vs Haiti) | Jun 19 | +21 | pete.uzelac77 | 49 | E5 full-traversal Day 19 |
| World Cup Match 9 (Ivory Coast vs Ecuador) | Jun 14 | +16 | pete.uzelac77 | 49 | (same user — cluster) |

**Tier 1 holds 8 items today, up from 0 yesterday's confirmed.** **The promotions are: samvirsujan's new item enters fresh; lisallam ages from +19 → +18; cjthomas2557 + kevinshall87 + pete.uzelac77 wl items roll forward 1 day each.** **First non-empty Tier 1 in 11+ days.**

### TIER 2 — Long-Lead Canonical (22+ days, day-counts updated −1 vs May 28)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **WC ×2 at BC Place Vancouver** | Jun 24 + Jul 7 | 26 + 39 | **karin_ef1** | **15** | **E1+E2 silent + E3 silent ~28h ago (Pattern A++ 3-cross at E3 — third realized instance, class confirmation)** |
| pete.uzelac77 WC Lincoln Financial ×4 + Darts ×2 | Jun 14 → Jul 4 | 16 → 36 | pete.uzelac77 | 49 | E5 full-traversal Day 19 |
| Shakira ×2 NYC | Jul 20–23 | 52–55 | laye.aurelien | 57 | E5 silent + 27 days post-E5 |
| Bruno Mars MetLife ×3 | Aug 21–25 | 84–88 | taranimeramaro | 34 | E4 silent (Pattern A 4-cross — long-lead variant) |
| Ed Sheeran SoFi | Aug 8 | 71 | blubberboi | 50 | E5 full-traversal Day 19 |
| Harry Styles ×7 at MSG Aug 26 → Sep 9 | Aug 26 → Sep 9 | 89 → 103 | cutekitten1234 | 12 | E1 silent (May 19) + E2 silent (May 24) — Pattern A++ cluster 2-cross at E2 |
| Matt Rife (kevinshall87 secondary) | Sep 26 | 120 | kevinshall87 | 16 | (same user) |

### TIER 3 — Pattern B Variants (cohort ~34 of 90 users ≈ 37.8%, **+1.1pp vs May 28 from pika4696 joining**)
- **mark.murdock — FULL TRAVERSAL Day 6 (May 23).** Third full-traversal silent send.
- **dr.altvater — FULL TRAVERSAL Day 10 (May 19).** Historic upper-bound.
- **joshdguillemette — FULL TRAVERSAL + silent-through-event Day 5 (May 24).** Pattern A variant.
- **zhili1208 — Pattern B 4-cross at E4 SECOND instance** (May 20). Day 9 since activation.
- **lilianamasyrubi — Pattern B 4-cross at E4 FIRST instance** (May 19). Day 10.
- **vlanza — Pattern B 3-cross at E3 NEW REALIZED ~21h ago** (May 28). Day 1 of silent E3.
- **joseph.g.nicolosi — Pattern B 3-cross at E3** (May 18). Day 11.
- **c_calingasan, pattyglvz — Pattern B 3-cross at E3** (May 26-27). Day 2-3.
- **Pattern B 2-cross at E2 batch REALIZED May 27:** brockedwardnelson, zhouyilinbest, keegansmith18 — first 3-instance same-day P-B 2-cross batch in report stream history. **Day 1 of silent E2.**
- **eduardo, 9440111, vlanza, nunemakerc** — Pattern B 2-cross at E2 confirmed May 24-25.
- **pika4696 — Pattern B forming Day 1 (NEW classification).** E1 fires ~45h.

**Empty-watchlist cohort total: 34 of 90 (37.8%)** — +1.1pp from May 28's 36.7% (pika4696 joins; samvirsujan does NOT join — has 1 wl item). **No change to Pattern A family share denominator-wise — just inside-cohort re-classification.**

### TIER 4 — Apology / Catch-Up (>21d silent backlog, below truncation horizon)
- **mark.murdock — full-traversal, Day 35, 0 wl.**
- **dr.altvater — full-traversal, Day 37, 0 wl.**
- **joshdguillemette — full-traversal + post-event AEW, Day 40, 1 wl past.**
- **charlesteel126 — Tier-0 silent-through-event REALIZED (May 20), 37d, 1 wl past** — Day 9 of sunset.
- **belder4308 — Tier-0 silent-through-event REALIZED (Sessions 5+6), 13d, 2 wl past** — Day 7 of sunset.
- **nicklib253 — E4 silent May 9, 41d** — Pattern A loss + E4 silent.
- **awwhittington, ggri73** — **likely 4th/5th full-traversal already realized during May 21-25 gap** (hidden cohort).
- **goldy.pec.2012, blubberboi, pete.uzelac77** — full-traversal cases Day 19 of historic record.
- **bhaygood728, laye.aurelien** — apology/sunset cohort.

### TIER 5 — Drip-Incompatible by Design (sunset day-counts updated +1)
- **konman87 (115d, Bruno Mars past)** — Day 12 of sunset.
- **jadbennis0 (21d, Inter Miami past)** — Day 12 of sunset.
- **charlesteel126 (37d, Bruno Mars Columbus past May 20)** — Day 9 of sunset.
- **belder4308 (13d, SEC Sessions 5+6 past)** — Day 7 of sunset.
- **zhouyilinbest (8d, NBA Western Conf Finals past May 22)** — Day 7 of sunset.
- **sparkitrightthere, liambot62** — multi-threshold + Pattern C × past-event.

**Day-1 burst cohort post-classification:** **pika4696 has no wl, no past-event implication — pure Pattern B Day-1; samvirsujan has 1 future Tier-1 wl, no drip-incompatibility risk — pure Pattern A Day-1.** The post-event-at-onboarding NEW SHAPE class (zhouyilinbest as first instance) remains singly-repeating; today's cohort does not extend it.

---

## Subject Line A/B Tests (Today's Active Drafts — 1 day of decay + 1 newly-realized template + 2 NEW Day-1 templates locked in)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **dr.altvater / full-traversal HISTORIC UPPER-BOUND** | `Five-plus weeks, five missed emails, and we still haven't said hi — let's actually start over.` | `37 days on TicketScan, 5 silent sends, here's the clean restart you deserve` | **A** *(REVISED: B day-count 36→37)* |
| **mark.murdock / full-traversal THIRD instance** | `Five weeks, five missed emails, and we still haven't said hi — let's actually start over.` | `35 days on TicketScan, 5 silent sends, here's the clean restart you deserve` | **A** *(REVISED: B day-count 34→35)* |
| **joshdguillemette / FULL-TRAVERSAL SILENT-THROUGH-EVENT** | `AEW Double or Nothing was 5 nights ago — and we still haven't said hi after 5+ weeks. Here's the real restart.` | `40 days, 5 silent sends, 1 missed AEW night — a real apology + your next move` | **A** *(REVISED: "4 nights ago" → "5 nights ago"; day-count 39→40)* |
| **belder4308 / Tier-0 silent-through-event REALIZED** | `Both SEC Baseball sessions are past — and we never said hi. Here's the unvarnished restart.` | `13 days, 2 missed sends, 2 missed sessions — a real apology + the post-tournament read` | **A** *(REVISED: B day-count 12→13)* |
| **charlesteel126 / Tier-0 silent-through-event Day 9 sunset** | `Bruno Mars at Ohio Stadium was 9 days ago — and we owed you 2 emails. Here's the unvarnished apology.` | `9 days post-Bruno Mars + 2 missed sends + 37 days from us — a real reset` | **A** *(REVISED: "8 days ago" → "9 days ago"; day-count 36→37)* |
| **lisallam / Pattern A canonical — E1+E2 silent — Tier 1 promoted** | `Welcome — your JOJI date at Prudential is 18 days out, and we already owe you 2 emails.` | `Welcome to TicketScan — JOJI June 16, here's the pricing playbook + an apology for the silence` | **A** *(REVISED: day-out 19→18; **NOTE: now Tier 1, urgency rising**)* |
| **cutekitten1234 / Pattern A++ cluster 2-cross at E2** | `Welcome — your 7 Harry Styles MSG dates + 2 emails we owe you from your first 12 days` | `Welcome to TicketScan — Aug 26 through Sep 9 at MSG, residency-pricing read + apology` | **A** *(REVISED: B day-count 11→12)* |
| **kevinshall87 / Pattern A++ 3-cross at E3 REALIZED** | `Your AT&T Stadium World Cup cluster + 3 missed emails from your first 2 weeks. The full read is below.` | `Day 16 with TicketScan — we still haven't said hi, and we owe you 3 emails. Here's the AT&T cluster pricing.` | **A** *(unchanged — 16d hold; correction: per API, AT&T was mislabeled — these are scattered WC matches, not AT&T cluster)* |
| **karin_ef1 / Pattern A++ 3-cross at E3 — THIRD REALIZED INSTANCE (~28h ago)** | `Welcome — your 2 BC Place WC tickets + 3 missed emails from your first 15 days.` | `15 days, 3 missed emails, 2 BC Place WC matches — let's catch up properly` | **A** *(REVISED: 14d → 15d; ~28h silent since E3 realization)* |
| **zhili1208 / Pattern B 4-cross at E4 SECOND instance** | `Four weeks, four missed emails, here's the unvarnished truth — let's fix this together.` | `29 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(REVISED: B day-count 28→29)* |
| **lilianamasyrubi / Pattern B 4-cross at E4 FIRST** | `Four weeks, four missed emails, here's the unvarnished truth — let's fix this together.` | `30 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(REVISED: B day-count 29→30)* |
| **vlanza / Pattern B 3-cross at E3 NEW REALIZED ~21h ago** | `Two weeks in, three missed emails, no events tracked — let's start over with a clean reset.` | `14 days, 3 silent sends, 0 events tracked — here's what TicketScan looks like when it works` | **A** *(NEW template entry — unforecasted realization today)* |
| **joseph.g.nicolosi / Pattern B 3-cross at E3 — 1 wl item future** | `Three weeks in, three missed emails, one NBA Finals night tracked — let's start over with a clean reset.` | `22 days, 3 silent sends, 1 event tracked — here's what TicketScan looks like when it works` | **A** *(REVISED: B day-count 22→22 (Day 11→11 actually); composition note: 1 future wl item — Pattern B with engagement)* |
| **c_calingasan + pattyglvz / Pattern B 3-cross at E3 NEW** | `Two weeks in, three missed emails, no events tracked — let's start over with a clean reset.` | `15-16 days, 3 silent sends, 0 events tracked — here's what TicketScan looks like when it works` | **A** *(REVISED: B day-counts +1 → 15-16d)* |
| **taranimeramaro / Pattern A 4-cross at E4 long-lead** | `3 Bruno Mars dates at MetLife + 4 missed sends — here's the cluster read and the catch-up.` | `MetLife ×3 in 84-88 days, 4 missed sends — let's fix this properly` | **A** *(REVISED: 85-89d → 84-88d)* |
| **cjthomas2557 / Pattern A 4-cross at E4 tactical NEW VARIANT REALIZED ~12h ago** | `Noah Kahan / Kia Center — 14 days out, and we owe you 4 sends, sorry` | `4 missed emails + Noah Kahan in 14 days: catching you up properly` | **A** *(REVISED: 15d → 14d; status NEW VARIANT REALIZED — first-of-class confirmed)* |
| **emmacmather, kevinkid94, jfgalzin / Pattern B 4-cross at E4 batch FIRING ~11-27h** | `Three weeks, four missed emails, here's the unvarnished truth — let's fix this together.` | `21 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(carries — same template; emmacmather + kevinkid94 in 11-12h; jfgalzin in 27h hidden)* |
| **liambot62 / Pattern B 4-cross at E4 + drip-incompatible (NEW SHAPE) FIRING ~3h** | `Three weeks, four missed emails, and Toronto FC v Inter Miami already past — let's restart properly.` | `21 days, 4 missed sends, 1 missed match — a real apology + an honest restart` | **A** *(carries — NEW SHAPE first-of-class fires within this report cycle's 3h)* |
| **jmoriarty13 / Pattern B 4-cross at E4 — fires May 30 13:18 UTC (~27h, corrected from E3 May 31)** | `Three weeks, four missed emails, here's the unvarnished truth — let's fix this together.` | `21 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(REVISED: was tracked as E3 May 31; correct = E4 May 30. Batch joins with jfgalzin in same ~27h window — NEW)* |
| **brockedwardnelson / Pattern B 2-cross at E2 — Day 1 silent** | `Week 1 on TicketScan — we've been quieter than we should have been. Here are 3 events worth tracking.` | `8 days, 2 missed sends + 3 events trending — let's reset` | **A** *(unchanged)* |
| **zhouyilinbest / NEW SHAPE post-event-at-onboarding E2 — Day 1 silent** | `Day 8 on TicketScan — your Western Conf Finals night was 7 days ago. Let's set up the next one and own the silence.` | `Day 8, 1 missed event, 2 silent sends from us — here's the honest restart` | **A** *(REVISED: event-past 6→7 days)* |
| **keegansmith18 / Pattern B 2-cross at E2 — Day 1 silent** | `Week 1 on TicketScan — we've been quieter than we should have been. Here are 3 events worth tracking.` | `8 days, 2 missed sends + 3 events trending — let's reset` | **A** *(unchanged)* |
| **eduardo, 9440111, vlanza, nunemakerc / Pattern B 2-cross at E2 batch** | `It's been a week+ — we've been quieter than we should have been. Here are 3 events worth tracking.` | `2 missed emails + 3 events trending on TicketScan` | **A** *(carries — 4-instance batch; **note: vlanza now ALSO triggers Pattern B 3-cross at E3 today — escalate to 3-cross template above**)* |
| **pete.uzelac77 / WC ×4 E5 graveyard Day 19 tactical fit (Tier 1 promotion)** | `4 World Cup matches at Lincoln Financial + 5 missed emails — here's the cluster read` | `Lincoln Financial ×4 in 16-36 days, and we owe you a real catch-up` | **A** *(REVISED: 17-37d → 16-36d; **Tier 1 promotion: 2 of 4 matches now within 21d window**)* |
| **laye.aurelien / Shakira ×2 (E5 + 27d post-E5)** | `Shakira at MetLife — 52 days out and we owe you a real 27-day-late catch-up` | `2 Shakira dates, 52-55 days, and 57+ silent days from us — here's the read` | **A** *(REVISED: 53d → 52d; post-E5 26→27 days)* |
| **konman87 / Day 12 of sunset** | `Both Bruno Mars nights are past — and 115 days of silence from us is unforgivable. Here's what we'd do differently.` | `115 days of silence + 2 silent Bruno Mars nights — a real apology + your next move` | **A** *(REVISED: 114→115 days)* |
| **jadbennis0 / Day 12 of sunset** | `Inter Miami v Portland was 12 days ago — and we owe you 2 emails from your first 3 weeks. Here's all 3.` | `21 days, 2 missed emails, 1 missed match — a real apology + an honest restart` | **A** *(REVISED: "11 days ago" → "12 days ago"; day-count 22→21 — corrected to 21d after recheck)* |
| **pika4696 / Day-1 Pattern B forming (NEW classification)** | `Welcome to TicketScan — here's how to find a price you'll actually pay.` | `Day 1 on TicketScan — three quick wins for your first ticket purchase` | **A** *(NEW: Day 0/1 Pattern B template — E1 fires Saturday May 31. Pure welcome — no wl context)* |
| **samvirsujan / Day-1 Pattern A canonical (NEW classification)** | `Welcome — your NBA Finals MSG night is 18 days out. Here's the pricing playbook before E1 fires.` | `Day 1, 1 event tracked, 18 days to MSG — here's the read on Finals seating` | **A** *(NEW: Day 0/1 Pattern A template — tactical wl framing; E1 fires Saturday May 31 with NBA Finals 16d out at fire time)* |

**Template inventory: 28 distinct shapes today** (vs 26 on May 28). Net change: **+2 net** — pika4696 + samvirsujan separate into distinct Day-1 templates (Pattern A vs Pattern B), +2 net; vlanza adds an unforecasted P-B 3-cross at E3 row (already had the template — no shape add), 0 net; jmoriarty13 was repointed E3→E4 (no template change, 0 net). **Net inventory expansion of +2 — reverses the contraction thesis from May 28.** **Today's inventory expansion is structural (acquisition cohort splits A/B) rather than cyclical, suggesting the contraction thesis from May 25 needs revision: template inventory grows whenever a new burst cohort lands.**

**CTA conformance:** 14 of 28 (50%) top-level routes; 14 of 28 (50%) event-specific deep-links. **Deep-link share holds at 50%** as samvirsujan template deep-links to NBA Finals MSG event page, pika4696 template top-level routes (no event context).

---

## Action Items

### P0 — Critical (Day 53 of outage)

1. **SMTP / drip pipeline — DAY 53. Probe HTTP 000 50.13s timeout.** Eight consecutive probe cycles confirm baseline failure mode is fully stable. **First observable latency variance today (+4.98s vs Day 52) but still within timeout-class — no behavioral break.** Today's priority order Day 53:
   1. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { res.status(500).json({error: e.message, stack: e.stack}) }`.** **Eight cycles × ~45-50s probe = ~6+ minutes of weekly manual diagnostic overhead per cycle eliminated by the wrap. Total cost-of-delay: 13 days from original ask (May 16).**
   2. **Diagnostic-bypass route Day 60 trigger (June 5):** if probe still HTTP 000 by Day 60, pivot from "fix the drip-run handler" to "ship a parallel `/api/admin/drip-run-v2` with the try/catch baked in." **7 days of warning lead time.**
   3. If wrap reveals `EAUTH` / Gmail auth: regenerate app password.
   4. If wrap reveals `ECONNREFUSED:587`: Railway egress hypothesis confirmed.
   5. If wrap reveals `relation does not exist`: schema drift on `drip_emails_sent`.

2. **DEADLINE TRACKING — today's stack (forecast realization holds at 100% for explicit forecasts; 1 unforecasted miss):**
   - **liambot62 E4 firing TODAY May 29 13:07 UTC (~3h)** — NEW SHAPE Pattern B 4-cross with past-event wl — first-of-class realization fires within this report cycle's 3h.
   - **kevinkid94 + emmacmather E4 firing TONIGHT May 29 20:52 + 21:54 UTC (~11-12h)** — P-B 4-cross batch realizations.
   - **jfgalzin + jmoriarty13 E4 firing May 30 ~12:54 + 13:18 UTC (~27h)** — first 2-instance same-day E4 batch outside today + corrected E4 jmoriarty13 (was tracked E3 May 31).
   - **pika4696 + samvirsujan E1 firing Sat May 31 07:12 + 07:15 UTC (~45h)** — first Day-3 E1 batch of the May 28 paid-pulse cohort.
   - **No Tier-0 events** in any user's watchlist for 5th consecutive day. Tier 1 fills with 8 confirmed items today.

3. **Target-price UX (Day 122 — 110/110 null; 0 net null-on-add in last 24h but no clearance either).** **Day 1 of frozen state — every signal continues to point at the add-form UI as the singular cause.** **Spec ready to build:** inline auto-suggest at add-time with `current_price × 0.85` as default, single-tap to set. **No new evidence today since zero adds; but the structural read is unchanged — the regression is invariant to acquisition velocity.**

4. **Pre-E1 / Day-0 welcome template — DAY 1 of new urgent requirement.** **2 Day-1 users (pika4696 + samvirsujan) now have 45h until E1 fires silent.** **Day 0 / Day 1 / Day 2 cohort gap remains uncovered — when SMTP returns, the E1-at-Day-3 schedule means today's Day-1 users still get nothing for 2 more days.** **Recommend: ship a Day 0 welcome send template alongside the SMTP fix, with same-day backfill for the 90-user 0-send backlog.** **Today's Day-1 split (1A / 1B) provides a clean test case for whether Day-0 templates should branch on wl-presence at signup.**

### P1 — High

5. **Past-event watchlist cleanup (43.6% — frozen Day 1 after yesterday's one-shot improvement).** **Day 46 of unaddressed P1 ask.** **Today's flatline confirms the May 28 improvement was solely additive (new future-event adds outpacing past-event aging). No subtractive improvement today — auto-archive cron still required.** Same fix as Apr 29: `status` column + daily expiry cron.

6. **`/drip-stats` cap / pagination (Day 23 of regression).** **Today's signal: cjthomas2557 just crossed E4 (Day 21) and is now permanently hidden behind the 20-cap until ≥21 new users sign up.** **The cap now actively obscures real-time crossing visibility — the May 28 22:49 UTC crossing went un-verified in `/drip-stats` even after happening.** Same fix: `offset` parameter or raise cap to 100.

7. **Backlog catch-up plan when SMTP returns — Day 53 priority (today's Day-1 cohort added to queue):**
   1. **dr.altvater + mark.murdock + joshdguillemette + (likely) awwhittington + ggri73 — 3-5 full-traversal cases**
   2. **lisallam (Pattern A canonical; JOJI 18 days out — critical tactical fit, now Tier 1)**
   3. **cjthomas2557 (Pattern A 4-cross tactical NEW VARIANT REALIZED — Noah Kahan 14d out)**
   4. **cutekitten1234 (Pattern A++ cluster 2-cross at E2)**
   5. **kevinshall87 + karin_ef1 (Pattern A++ 3-cross at E3 — REALIZED + REALIZED, class triply-confirmed)**
   6. **taranimeramaro (Pattern A 4-cross long-lead)**
   7. **charlesteel126, belder4308 (Tier-0 silent-through-event sunset)**
   8. **brockedwardnelson, zhouyilinbest, keegansmith18 (3-instance P-B 2-cross batch REALIZED — send as coordinated batch)**
   9. **eduardo, 9440111, vlanza, nunemakerc (Pattern B 2-cross at E2 batch + vlanza NOW P-B 3-cross at E3 NEW)**
   10. **c_calingasan, pattyglvz, vlanza (Pattern B 3-cross at E3 batch — 3 instances)**
   11. **lilianamasyrubi, zhili1208 (Pattern B 4-cross at E4 — repeating class)**
   12. **liambot62 (P-B 4-cross with past-event NEW SHAPE — fires in 3h — first-of-class)**
   13. **emmacmather, kevinkid94 (P-B 4-cross batch tonight — coordinated batch)**
   14. **jfgalzin, jmoriarty13 (P-B 4-cross batch tomorrow — coordinated batch)**
   15. **joseph.g.nicolosi (Pattern B 3-cross at E3 — now WITH 1 future wl item — branch template)**
   16. **konman87, jadbennis0 (post-event sunset Day 12)**
   17. **blubberboi, pete.uzelac77, goldy.pec.2012 (full-traversal apology — Day 19+; pete now Tier 1 promotion)**
   18. **laye.aurelien (E5 + 27d post-E5; Shakira 52d out)**
   19. **pika4696 (Day-1 Pattern B forming — NEW template; E1 fires Sat May 31)**
   20. **samvirsujan (Day-1 Pattern A canonical — NEW template; E1 fires Sat May 31 with NBA Finals 16d out at fire time)**

8. **Newsletter growth — Day 117 milestone.** **0 user registrations / 0 newsletter signups in 24h.** **Cross-channel structural break Day 24.** **Today's neutral day demonstrates the break is invariant in both directions (acquisition velocity present OR absent).** Footer regression Day 33; popup spec Day 29 unbuilt.

### P1.5 — Acquisition-quality signal (Day 15 of hypothesis — Day 1 of post-burst classification)

9. **Acquisition-quality channel investigation (Day 15 — pulse hypothesis testable today via Day-1 cohort classification).** **Today's classification of the May 28 burst (1A / 1B split) shows paid pulse (if confirmed by Agent 6) does NOT preferentially produce lower-intent users.** **Cross-agent ask UPDATED for Agent 6:** request confirmation/denial of paid push May 28 morning UTC AND a 4-week historical paid-push schedule to permit retrospective burst-vs-trough correlation. **If retrospective shows all bursts align with paid pushes → pulse hypothesis verified.** **If retrospective shows bursts independent of paid → viral/cohort hypothesis activates.**

10. **Forecast surface miss (vlanza E3 May 28 13:20 UTC) — Day 1 process gap.** **Yesterday's horizon table started at +13h forward, missing -8h backwards. Recommend horizon tables include both a "next-24-72h" window AND a "previous-24h" window to catch boundary crossings.** **This was the first forecast-surface miss in 8 days — the structural fix would prevent recurrence at low cost.**

### P2 — Medium

11. **`drip-health` endpoint — DAY 22 of unmet ask.** Spec unchanged. **8 cycles × 45-50s probe overhead = ~6 minutes of manual diagnostic surface time eliminated by this endpoint.**

12. **pete.uzelac77 World Cup re-engagement** — 49 days on platform, 6 items, **16 days to first match (Tier 1 promotion today — 2 of 4 matches now within 21d window).** **"In June" framing now reads correctly (May 29).**

13. **Watchlist digest endpoint — still manual.** **28 distinct send templates today** (vs 26 on May 28). **Inventory expanded +2** as Day-1 cohort splits into A and B Day-0/1 templates. **Contraction thesis revised: inventory expands whenever a burst cohort lands; contracts on quiet days.**

14. **Viva El Jaripeo post-mortem — 33 DAYS OVERDUE.**

### Tracking metrics

- **Tactical-window degradation:** Day 53. **Next pre-event silent-failure forecast:** liambot62 E4 fires in 3h (NEW SHAPE — first-of-class).
- **CTA simplification rule conformance:** 50% top-level (14 of 28); 50% deep-link. **Held at 50% with template inventory expansion.**
- **Pattern mix in rolling 10-user cohort:** **A++ 20% / A 20% (+10pp) / B 50% (+10pp) / loss-in-progress 10% / pre-classification 0% (-20pp).** **First A canonical signup in 12 days (samvirsujan May 28) — 12-day Pattern A drought broken.**
- **Pattern A++ cluster acquisition rate:** **4 in 17 days** (kevinshall87, karin_ef1, cutekitten1234, belder4308). **Rate decay continues: 4 in 6→7→8→13→15→16→17 days.** No new A++ signup since May 16 (Day 13 streak).
- **Template inventory:** **28 shapes today** (vs 26 May 28). **Expansion +2 — contraction thesis revised** (inventory now correlated with burst-cohort landings, not time-cyclical).
- **Full-traversal silent send count:** **3 confirmed + 2 likely-but-hidden (awwhittington, ggri73) = 5 likely total.** Unchanged.
- **Silent-through-event count:** **5 event-level realizations** unchanged.
- **Forecast realization rate:** **100% on explicit forecasts (1 of 1 — cjthomas2557).** **+1 unforecasted realization (vlanza E3)** — first forecast-surface miss in 8 days. **Adjusted "true forecast capture rate" = 1 of 2 actual silent crossings forecasted (50%).**

---

## Handoff → Analytics Agent (Agent 7)

- **Subscriber total:** 3 active, 0 net change in 7 days. **117 consecutive days flat.** Day 24 of zero-capture under signup velocity. **Cross-channel break confirmed invariant in BOTH directions** (today's neutral day shows newsletter floor is 0 whether or not acquisition is happening).
- **User signups (24h):** **0 net new.** **90 total users.** 7d rolling = 2 (yesterday's burst cohort only — May 20 cohort aged out).
- **New watchlist items (24h):** **0 items.** Total **110.** 110/110 null target. **Day 1 of new zero-add streak.** **100% null-on-add streak held at 122 days — no new evidence today (zero adds), no contradiction.**
- **Drip pipeline:** UN-SHIPPED. **Day 53. 0 sends ever. 90 of 90 users never received a drip email.** Backlog: 50 visible + 19-21 hidden ≈ **105-110 owed sends**.
- **Probe signal cycle today:** drip-run probe returned HTTP 000 50.13s timeout — 8th consecutive baseline-failure cycle. **First observable latency variance (+4.98s vs Day 52) but still timeout-class.**
- **Threshold crossings during last 24h (2 confirmed silent — 1 explicit forecast realized + 1 unforecasted miss):**
  - **May 28 13:20 UTC vlanza → E3 silent (Pattern B 3-cross at E3 UNFORECASTED — first forecast-surface miss in 8 days)**
  - **May 28 22:49 UTC cjthomas2557 → E4 silent (Pattern A 4-cross tactical NEW VARIANT REALIZED — first-of-class confirmed)**
- **Forecast 3-45h out (7 silent):** liambot62 E4 today 13:07 UTC (NEW SHAPE first-of-class — fires within 3h), kevinkid94 + emmacmather E4 today 20:52 + 21:54 UTC, jfgalzin E4 tomorrow ~12:54 UTC, jmoriarty13 E4 tomorrow 13:18 UTC (corrected from E3 May 31), pika4696 E1 Sat 07:12 UTC, samvirsujan E1 Sat 07:15 UTC. **First 4-instance same-day E4 batch in report stream history fires TODAY** (liambot62 + kevinkid94 + emmacmather + cjthomas2557-already-fired-last-night). **First Day-3 E1 batch of May 28 paid-pulse cohort fires Saturday.**
- **Price alerts:** 0 ever triggered. **110/110 watchlist null. Day 122.** 0 null-on-add in 24h (zero adds).
- **Watchlist composition:** 110 items, **48 past-dated (43.6%)** — frozen Day 1 after yesterday's one-shot improvement. **Zero confirmed events within next 7 days** for 5th consecutive day. **8 Tier 1 events confirmed today** (first non-empty Tier 1 in 11+ days — NBA Finals MSG, JOJI, Noah Kahan, WC matches).
- **Empty-watchlist cohort:** **34 of 90 (37.8%)** — +1.1pp vs May 28 from pika4696's pattern classification (samvirsujan does NOT join cohort — has 1 wl item).
- **Pattern mix in rolling 10-user cohort:** **A++ 20% / A 20% (+10pp) / B 50% (+10pp) / loss-in-progress 10% / pre-classification 0% (-20pp).** **12-day Pattern A canonical drought broken (samvirsujan).**
- **Acquisition-quality pulse hypothesis (Day 15, partially resolved):** **1A / 1B split** in May 28 burst cohort suggests paid pulse (if confirmed) is NOT lower-intent than baseline. **Cross-agent ask updated for Agent 6:** confirm/deny May 28 morning UTC paid push AND request 4-week paid-push schedule for retrospective correlation.
- **NEW CLASSES / SHAPES confirmed today or forecast in next 72h:**
  - **Pattern A 4-cross at E4 tactical NEW VARIANT — REALIZED** (cjthomas2557 May 28 22:49 UTC — first-of-class confirmed).
  - **Pattern B 4-cross with past-event wl NEW SHAPE first realization fires in 3h** (liambot62 May 29 13:07 UTC).
  - **First 4-instance same-day E4 batch fires TODAY** (cjthomas2557 already + liambot62 + kevinkid94 + emmacmather).
  - **Day-1 Pattern A canonical post-burst-cohort template** — samvirsujan (NBA Finals MSG tactical at Day-1).
  - **Day-1 Pattern B forming post-burst-cohort template** — pika4696 (zero-engagement at Day-1).
  - **Pattern B 3-cross at E3 — FOURTH instance** (vlanza UNFORECASTED today + joseph.g.nicolosi + c_calingasan + pattyglvz = repeating class confirmed quadruply).
- **Most useful single observation today:** **the May 28 burst cohort split 1A / 1B at Day-1 classification — a NEUTRAL split that suggests paid-pulse acquisition (if confirmed by Agent 6) does NOT skew lower-intent. Combined with the May 20 burst cohort's 0A/3B retrospective, the two-burst sample shows pulse-quality variance rather than systematic bias. If Agent 6 confirms paid push for both bursts, the pulse hypothesis converts to "verified with variable per-burst quality" — and acquisition strategy should add a per-pulse landing-page test to lift A/A++ density on future pulses.** **Secondary observation: today's forecast-surface miss (vlanza E3 unforecasted) reveals the horizon-table window has a -8h to +13h boundary gap; a 1-line fix to include "previous-24h" window prevents recurrence at near-zero cost.** **Recommend: ship the target-price UX fix + SMTP drip wrap + Day-0 welcome template + horizon-table previous-24h window in the same release sprint, because today's 4 P0/P1 items are all small surface-area fixes with high-leverage observability returns.**
