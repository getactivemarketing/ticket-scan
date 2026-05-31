# Email Daily — 2026-05-31

> **Day 55 of SMTP/drip outage. Probe HTTP 000 (timed out past 62s) — 10th consecutive baseline-failure cycle.** **Clean acquisition trough: 0 new signups, 0 new watchlist adds in 24h — a full reversal of yesterday's 3-signup / 5-add burst. Users 93 → 93, watchlist 115 → 115.** **First fresh E1 came due mid-outage: the May 28 cohort (samvirsujan, pika4696) crossed Day 3 today — both E1 due, both silent. samvirsujan tracks NBA Finals GM3 (+16d) — a tactically-useful send lost to the outage in real time, not retroactively.** **93 total users / 115 wl items / 3 subscribers / 0 alerts. Day 119 newsletter flatline. Day 124 of 100% null-target streak (115/115).** **Past-event watchlist: 48 of 115 (41.7%) — unchanged (no adds, no archive, no events crossed into past).**

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` returns `stats: []` after **Day 55.** **93 of 93 users have never received a drip email** (every user's `last_email_sent: 0`).
- **Probe today (Day 55):** `POST /api/admin/drip-run?limit=1&dryRun=true` returned **HTTP 000** — exceeded the 62s client cap with no response. **10th consecutive baseline-failure cycle. Failure mode fully stable and reproducible across a double-digit run of probes.**
- **Asks for engineering (urgency unchanged Day 55):**
  1. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { log; return res.status(500).json({error: e.message, stack: e.stack}) }`.** **This remains the SINGULAR path back to root-cause visibility.** Ten cycles confirm the failure is stable and reproducible the instant the wrap ships. **Total cost-of-delay: 15 days since original ask (May 16).**
  2. **Diagnostic-bypass route Day 60 trigger (June 5):** if probe still HTTP 000 by Day 60, pivot to shipping a parallel `/api/admin/drip-run-v2` with the try/catch baked in. **5 days of warning lead time remain.**
  3. Check Railway service status / restart history for the May 15–16 window and since. Ten cycles confirm the original 502 was not a permanent state.
- `/api/admin/drip-health` → returned `404 "Endpoint not found"` again today. **Day 24 of that ask unmet** (P0 since May 7).

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 30 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **17 of 20** | +2 (samvirsujan + pika4696 crossed Day 3) |
| E2 | ≥7d | **15 of 20** | unchanged |
| E3 | ≥14d | **10 of 20** | +3 (lisallam, cutekitten1234, belder4308 aged into ≥14d) |
| E4 | ≥21d | **1 of 20** (jmoriarty13, Day 22) | +1 (jmoriarty13 crossed Day 21) |
| E5 | ≥30d | **0 of 20 visible** | unchanged |

**Window held stable today — same 20 users as yesterday, all aged +1 day.** **With 0 new signups, the 20-cap did NOT shift; the eligibility gains are pure aging, not window churn.** **This is the cleanest possible read of the underlying backlog: every threshold moved in the direction maturation predicts, with no displacement artifact muddying it.** jmoriarty13 (Day 22) remains the oldest visible user; the entire Day 22+ E4/E5 mass stays hidden behind the cap.

**Visible owed emails: 43** (up from 37 on May 30). **The +6 is genuine backlog growth from aging, NOT a window-shift artifact** — contrast May 30, where the visible figure *fell* 50 → 37 purely because 3 new Day-0 signups displaced older users out of view. Today is the inverse: a stable window aging forward is the truest backlog signal in the stream to date.

### Acquisition: clean trough (0 / 0)
| Metric | May 30 | May 31 | Δ |
|--------|--------|--------|---|
| New signups (24h) | 3 | **0** | −3 |
| New watchlist adds (24h) | 5 | **0** | −5 |
| `usersToday` | 3 | **0** | −3 |

**Yesterday's 3-signup / 5-add burst was a single-day pulse; today reverted fully to zero on both axes.** **This burst-then-trough shape is the textbook signature of a discrete acquisition event (paid push / scheduled post) rather than steady organic flow** — it strengthens the standing cross-agent ask to Agent 6 to confirm a paid push fired ~May 29–30 UTC and supply the 4-week push schedule for burst-vs-trough correlation. **`usersThisWeek` holds at 5** (May 28 cohort ×2 + May 29–30 burst ×3); nothing rolled off the 7d window today.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 124 of 100% null-on-add. 115/115 watchlist items have null `target_price`.** **0 new adds today → no new confirming evidence, but the streak is uninterrupted.** The hyper-saturation thesis holds: 26 high-intent null captures stand in the report-stream record (unchanged from yesterday — no adds to add to the tally). **Every signal still points at the add-form UI as the singular cause; there is no path in the current flow that sets a non-null target on add.**

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged — roos_leeuwen, samir.sgpatel, test@example.com)
- **Stall duration: 119 days** since last organic newsletter signup (roos_leeuwen, 2026-02-01). **Day 26 of consecutive zero-capture days.** **Today removes the "high acquisition velocity masks the capture problem" objection from the opposite direction: yesterday proved 3 signups still yields 0 newsletter; today proves the floor doesn't move on a zero-traffic day either. The capture surface is the bottleneck across both burst AND trough conditions.** **Footer regression Day 35; popup spec Day 31 unbuilt.**

## Platform Context
- Total users: **93** (unchanged vs May 30)
- Users today (rolling 24h): **0** (`usersToday: 0` confirms)
- Users this week (rolling 7d): **5** (`usersThisWeek` field — May 28 cohort ×2 + May 29–30 burst ×3)
- Watchlist items: **115** (unchanged). **Zero-add day.**
- Past-dated watchlist items: **48 of 115 (41.7%)** — **unchanged on all three counts: no adds (denominator flat), no archive cron (numerator flat), and no event crossed midnight into the past** (earliest future event is Don Toliver Jun 5; nothing dated May 31). **The auto-archive cron remains unshipped — Day 48 of unaddressed P1 ask.**
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

## Watchlist Digest Prep

### Past-Event Cleanup
**48 of 115 (41.7%) past-dated — fully static today.** **Past/future ratio: 48 : 67 = 1 : 1.40** (unchanged from yesterday). **Structural read unchanged: the ratio only moves on net future adds (none today) or shipping the archive cron (still unshipped). The 48 stale items will never decay on their own.**

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **Don Toliver: Octane Tour** (Scotiabank Arena, Toronto) | **Jun 5** | **+5** | **coleesparrago** | **1** | **None — E1 not due until Jun 1 (Day 3)** | **Tightened to +5 (was +6). The intercept window is now critical: E1 fires Jun 1, leaving a +4-day gap to the event, and the user has likely already transacted. Only a Day-0 welcome send could have reached this. Silent regardless while SMTP is down.** |

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **NBA Finals: TBD at Knicks RD4 GM1** (MSG) | **Jun 8** | **+8** | **officialrizk72** | **1** | **None — E1 due Jun 2** |
| **NBA Finals: TBD at Knicks RD4 GM3** (MSG) | **Jun 16** | **+16** | **samvirsujan** | **3** | **E1 DUE TODAY — silent (SMTP down)** |
| NBA Finals: TBD at Knicks RD4 GM3 (MSG) | Jun 16 | +16 | officialrizk72 | 1 | None — E1 due Jun 2 |
| NBA Finals: TBD at Knicks RD4 GM3 (MSG) | Jun 16 | +16 | joseph.g.nicolosi | 13 | Pattern B 3-cross at E3 |
| JOJI: SOLARIS (Prudential Center, Newark) | Jun 16 | +16 | lisallam | 14 | E1+E2 silent; **now E3-eligible** |
| Noah Kahan: The Great Divide Tour (Kia Center, Orlando) | Jun 12 | +12 | cjthomas2557 | 23 | E1+E2+E3+E4 silent |
| World Cup Match 22 (England v Croatia) | Jun 17 | +17 | kevinshall87 | 18 | E1+E2+E3 silent |
| World Cup Match 11 (Netherlands v Japan) | Jun 14 | +14 | kevinshall87 | 18 | (same user — cluster) |
| World Cup Match 29 (Brazil v Haiti) | Jun 19 | +19 | pete.uzelac77 | 51 | E5 full-traversal |
| World Cup Match 9 (Ivory Coast v Ecuador) | Jun 14 | +14 | pete.uzelac77 | 51 | (same user — cluster) |

**Tier 1 holds 10 items.** **Today's headline: samvirsujan's E1 came due in real time and fired silent.** This is materially different from the backlog of historically-missed sends — it is the first time in the tracking window that a *brand-new* cohort's first scheduled email came due *during* the outage with the tracked event (NBA Finals GM3, +16d) still fully live and tactically relevant. **The MSG NBA Finals RD4 GM3 (Jun 16) cluster now spans 4 distinct users** (samvirsujan, officialrizk72, joseph.g.nicolosi, + the GM1 variant from officialrizk72) — still the strongest one-to-many "MSG Finals price read" digest candidate for the moment SMTP returns.

### TIER 2 — Long-Lead Canonical (22+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| US Open R16 ×2 (Arthur Ashe, Flushing) | Sep 6–7 | +98 / +99 | mattfleischer4 | 1 | None — E1 due Jun 2 |
| WC ×2 at BC Place (Vancouver) | Jun 24 + Jul 7 | +24 / +37 | karin_ef1 | 17 | E1+E2+E3 silent |
| pete.uzelac77 WC Lincoln Financial ×4 + Darts ×2 | Jun 14 → Jul 4 | +14 → +34 | pete.uzelac77 | 51 | E5 full-traversal |
| Shakira ×2 NYC | Jul 20–23 | +50 / +53 | laye.aurelien | 59 | E5 silent + 29d post-E5 |
| Bruno Mars MetLife ×3 | Aug 21–25 | +82 / +86 | taranimeramaro | 36 | E4 silent |
| Ed Sheeran SoFi | Aug 8 | +69 | blubberboi | 52 | E5 full-traversal |
| Harry Styles ×7 at MSG | Aug 26 → Sep 9 | +87 → +101 | cutekitten1234 | 14 | E1+E2 silent; **now E3-eligible** |

### TIER 3+ — Pattern B / Full-Traversal / Sunset Backlog (carried from May 30, day-counts +1)
- **Full-traversal silent sends:** dr.altvater (Day 39), mark.murdock (Day 37), joshdguillemette (Day 42, + post-event AEW). **2 likely-but-hidden:** awwhittington, ggri73 (both ~39d, behind the 20-cap). **Total likely full-traversal: 5.**
- **Pattern B 4-cross at E4 (repeating class):** lilianamasyrubi, zhili1208, liambot62 (past-event shape), kevinkid94, emmacmather, jfgalzin, jmoriarty13 (**now E4-visible at Day 22**) — all confirmed silent on their forecast dates.
- **Pattern B 3-cross at E3:** joseph.g.nicolosi, c_calingasan, pattyglvz, vlanza (quadruple-confirmed class).
- **Pattern B 2-cross at E2 batch:** brockedwardnelson, zhouyilinbest, keegansmith18 (3-instance batch), eduardo, 9440111, nunemakerc.
- **Sunset / drip-incompatible:** konman87 (Day 14), jadbennis0 (Day 14), charlesteel126 (Day 11), belder4308 (Day 14 — **now E3-eligible**), zhouyilinbest (Day 10).
- **May 28 cohort — STATUS CHANGE:** **pika4696 (Day 3, Pattern B / empty watchlist) and samvirsujan (Day 3, Pattern A — NBA Finals GM3) both crossed E1 today. Both silent.** This cohort moves from "E1 fires tomorrow" (May 30 report) to "E1 due, missed" today.

**Empty-watchlist (Pattern B) cohort: 34 of 93 (36.6%)** — unchanged (no new signups to shift the share either way).

## Subject Line A/B Tests — May 28 cohort promoted to E1-DUE (active sends) + carried inventory

| Send | A | B | Recommend |
|------|---|---|-----------|
| **samvirsujan / E1-DUE today, Pattern A — NBA Finals GM3 MSG (+16d)** | `Your NBA Finals night at the Garden is 16 days out — here's the price read before it climbs.` | `3 tips to save on your first ticket — starting with the Knicks Finals seat you're tracking` | **A** *(promoted from "fires tomorrow" → DUE. Tactical event-anchored E1 beats generic E1; deep-links to the GM3 event page. This is the highest-value send sitting un-fired today.)* |
| **pika4696 / E1-DUE today, Pattern B — empty watchlist** | `3 ways to save on your first ticket purchase (most people miss #2)` | `You signed up 3 days ago — here's how TicketScan saves you money before you buy` | **B** *(promoted to DUE. No watchlist anchor → standard E1 curiosity hook; B's "you signed up" personalization edges A for a zero-engagement user.)* |

**Carried templates (unchanged shapes, day-counts +1):** officialrizk72 Day-0 Pattern A cluster (NBA Finals MSG ×2); coleesparrago Day-0 Tier-0 (Don Toliver, now +5d); mattfleischer4 Day-0 long-lead (US Open R16); dr.altvater / mark.murdock / joshdguillemette full-traversal apologies; lisallam / cutekitten1234 / kevinshall87 / karin_ef1 Pattern A++ catch-ups; cjthomas2557 / taranimeramaro Pattern A multi-cross; the Pattern B 2/3/4-cross batches; konman87 / jadbennis0 / charlesteel126 / belder4308 sunsets. Full text in `email-daily-2026-05-29.md` and `email-daily-2026-05-30.md` §Subject Line A/B Tests; no copy changes today beyond day-count increments and the two May 28 promotions above.

**Template inventory: 31 distinct shapes** (unchanged vs May 30). **No new cohort landed today (0 signups), so no new template was generated** — instead two existing templates (samvirsujan, pika4696) transitioned from "E1 fires tomorrow" to "E1 due, silent." **This confirms the May 30 read from the other side: inventory grows on burst days and holds flat on trough days. The +3 expansion on May 30 and the +0 today bracket the mechanism cleanly.**

**CTA conformance:** unchanged. Deep-link CTA share ~55% (17 of 31). samvirsujan's promoted E1 deep-links to the GM3 event page; pika4696's deep-links to the dashboard (no event to anchor).

## Action Items

### P0 — Critical (Day 55 of outage)

1. **SMTP / drip pipeline — DAY 55. Probe HTTP 000 (>62s timeout). 10th consecutive baseline-failure cycle.** Priority order:
   1. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { res.status(500).json({error: e.message, stack: e.stack}) }`.** **Singular remaining path to root-cause visibility. Total cost-of-delay: 15 days from original ask (May 16).**
   2. **Diagnostic-bypass route Day 60 trigger (June 5):** if still HTTP 000 by Day 60, ship `/api/admin/drip-run-v2` with try/catch baked in. **5 days lead time remain.**
   3. If wrap reveals `EAUTH` / Gmail auth → regenerate app password. If `ECONNREFUSED:587` → Railway egress hypothesis confirmed. If `relation does not exist` → schema drift on `drip_emails_sent`.

2. **Day-0 welcome send template — DAY 3 of urgent requirement.** **The case strengthened twice today: (a) coleesparrago's Don Toliver tightened to +5d — the standard E1 (Jun 1) now lands only 4 days before the event, almost certainly after the buy decision; (b) samvirsujan's E1 came due *during* the outage today and fired silent, demonstrating that even a restored standard schedule leaves a 3-day cold-start gap on every new signup.** A Day-0 welcome send (fire on registration, branch on watchlist-presence) is the only mechanism that closes both. Ship it alongside the SMTP fix.

3. **Target-price UX (Day 124 — 115/115 null).** No new adds today, so no fresh evidence, but the streak is unbroken at 124 days. **Spec ready:** inline auto-suggest at add-time defaulting to `current_price × 0.85`, single-tap to set. The regression fires on every add and is invariant to acquisition velocity.

### P1 — High

4. **Past-event watchlist cleanup (41.7% — fully static; 48 stale items).** **Day 48 of unaddressed P1 ask.** Zero movement today (no adds, no archive). Fix: `status` column + daily expiry cron.

5. **`/drip-stats` cap / pagination (Day 25 of regression).** **Today the stable window made the cap's distortion legible: visible owed rose 37 → 43 purely from aging, while the entire Day 22+ E4/E5 cohort stays hidden.** The cap masks the oldest, most-owed users. Fix: `offset` parameter or raise cap to 100.

6. **`/api/admin/drip-health` endpoint — DAY 24 of unmet ask (P0-class).** Still 404. A `{lastRunAt, lastError, sentLast24h, eligibleCount}` JSON would replace the entire daily probe ritual.

7. **Backlog catch-up plan when SMTP returns (Day 55) — head of queue:**
   1. **samvirsujan — Pattern A, NBA Finals GM3 (+16d), E1 due TODAY (freshest tactical miss)**
   2. **coleesparrago — Tier-0 Don Toliver +5d (most time-critical; likely moot by send time)**
   3. **officialrizk72 — Pattern A cluster, 2 NBA Finals MSG (Tier 1, +8/+16d)**
   4. **dr.altvater + mark.murdock + joshdguillemette (+ likely awwhittington, ggri73) — 3–5 full-traversal cases**
   5. **lisallam, cjthomas2557, cutekitten1234, kevinshall87, karin_ef1 — Pattern A / A++ tactical catch-ups**
   6. **pika4696 — May 28 Pattern B, E1 due today**
   7. **Pattern B 2/3/4-cross batches (send as coordinated batches)**
   8. **mattfleischer4 — Pattern A long-lead US Open (low urgency, +98d)**
   9. **Sunset cohort: konman87, jadbennis0, charlesteel126, belder4308**

8. **Newsletter growth — Day 119 milestone.** **Today completes the burst/trough proof: yesterday 3 signups → 0 newsletter; today 0 signups → 0 newsletter. The capture surface is the bottleneck in BOTH conditions.** Footer regression Day 35; popup spec Day 31 unbuilt.

### P2 — Medium

9. **MSG Finals one-to-many digest opportunity.** **4 distinct users now track NBA Finals RD4 GM3 (Jun 16) at MSG** (samvirsujan, officialrizk72, joseph.g.nicolosi + officialrizk72's GM1). Once SMTP returns, a single "MSG Finals price read" segment send covers all 4 — first viable one-to-many tactical digest in the stream.

10. **pete.uzelac77 World Cup re-engagement** — 51 days, 6 items, first match 14 days out (Tier 1).

11. **Viva El Jaripeo post-mortem — 35 DAYS OVERDUE.**

### Tracking metrics
- **Outage:** Day 55. Probe HTTP 000, 10th consecutive cycle. **drip-health 404 Day 24. drip-run try/catch wrap Day 15 unmet.**
- **Template inventory:** **31 shapes** (+0 — trough day, no new cohort). Deep-link CTA share ~55%.
- **Acquisition:** **0 signups / 0 watchlist adds** — clean trough reversing yesterday's 3/5 burst. Burst-then-trough = discrete acquisition pulse signature.
- **Eligibility:** stable window, pure aging — E1 17, E2 15, E3 10, E4 1 (jmoriarty13), E5 0. Visible owed 37 → 43 (genuine aging growth).
- **Full-traversal silent sends:** 3 confirmed + 2 likely-hidden = 5 likely total.
- **Null-target streak:** Day 124, 115/115, 0 new adds (no fresh evidence, streak unbroken).

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change. **119 consecutive flat days. Day 26 of zero-capture.** **Burst/trough proof complete: 3 signups (May 30) → 0 newsletter; 0 signups (May 31) → 0 newsletter. Capture surface is the bottleneck under both conditions, invariant to traffic.**
- **User signups (24h):** **0 net new.** Clean trough after yesterday's +3 burst. **93 total. 7d rolling = 5 (unchanged).**
- **New watchlist items (24h):** **0.** Total **115. 115/115 null target. Day 124.** No new adds → no fresh null evidence, streak unbroken.
- **Drip pipeline:** UN-SHIPPED. **Day 55. 0 sends ever. 93 of 93 users never received a drip email.** Probe HTTP 000, 10th cycle. **Visible owed 43 (up from 37, pure aging on a stable window — the truest backlog signal yet, no displacement artifact).** True backlog ≈ 105–110 owed sends (visible 43 + hidden Day-22+ cohort).
- **Key event today:** **first E1 to come due *during* the outage on a fresh cohort — samvirsujan (Pattern A, NBA Finals GM3 +16d) and pika4696 (Pattern B), both crossed Day 3, both silent.** This is a real-time tactical miss, not a retroactive backlog entry.
- **Price alerts:** 0 ever. 115/115 null. Day 124. 0 new adds today.
- **Watchlist composition:** 115 items, **48 past-dated (41.7%, fully static).** Tier 0: 1 (Don Toliver, +5d). Tier 1: 10 (MSG NBA Finals GM3 cluster of 4 users is the standout). Tier 2: long-lead.
- **Acquisition shape:** **burst (May 30, +3/+5) → trough (May 31, 0/0).** Discrete-pulse signature. **Cross-agent ask (Agent 6): confirm/deny a paid push fired ~May 29–30 UTC and supply the 4-week paid-push schedule for burst-vs-trough correlation. Today's hard zero is the trough half of the cleanest pulse pair in the stream.**
- **Most useful single observation today:** **the outage stopped being purely a backlog problem and became a live-loss problem. samvirsujan's E1 — for a +16-day NBA Finals seat — came due today and fired into silence. Every day the outage continues now generates fresh tactical misses on top of the standing ~105-send backlog. This reframes the SMTP fix from "clear the backlog" to "stop the bleeding," and pairs with the Day-0 welcome send and target-price UX as a single small-surface release sprint.**
