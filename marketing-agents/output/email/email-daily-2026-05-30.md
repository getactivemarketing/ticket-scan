# Email Daily — 2026-05-30

> **Day 54 of SMTP/drip outage. Probe HTTP 000 (timed out past 60s) — 9th consecutive baseline-failure cycle.** **3 new signups in 24h (officialrizk72, coleesparrago, mattfleischer4 — all Day 0) + 5 new watchlist adds, all null target.** **Acquisition velocity returned: users 90 → 93, watchlist 110 → 115.** **First Tier-0 event in 6 days: coleesparrago's Don Toliver (Scotiabank Arena, Jun 5, +6 days) — but signer is Day 0, so E1 won't fire until Jun 1 even if SMTP were live, and the event is past-window by Day 3 anyway.** **93 total users / 115 wl items / 3 subscribers / 0 alerts. Day 118 newsletter flatline. Day 123 of 100% null-target streak (115/115).** **Past-event watchlist count: 48 of 115 (41.7%) — improved 1.9pp purely from 5 future-event adds diluting the denominator.**

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` returns `stats: []` after **Day 54.** **93 of 93 users have never received a drip email** (every user's `last_email_sent: 0`, including the 3 Day-0 registrations).
- **Probe today (Day 54):** `POST /api/admin/drip-run?limit=1&dryRun=true` returned **HTTP 000** — request exceeded the 60s client cap with no response (vs 50.13s natural timeout on Day 53). **9th consecutive baseline-failure cycle. Failure mode fully stable and reproducible.**
- **Asks for engineering (urgency unchanged Day 54):**
  1. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { log; return res.status(500).json({error: e.message, stack: e.stack}) }`.** **This remains the SINGULAR path back to root-cause visibility.** Nine cycles confirm the failure is stable and reproducible the moment the wrap ships. **Total cost-of-delay: 14 days since original ask (May 16).**
  2. **Diagnostic-bypass route Day 60 trigger (June 5):** if probe still HTTP 000 by Day 60, pivot to shipping a parallel `/api/admin/drip-run-v2` with the try/catch baked in. **6 days of warning lead time remain.**
  3. Check Railway service status / restart history for the May 15-16 window and any restarts since. Nine cycles confirm the original 502 was not a permanent state.
- `/api/admin/drip-health` → returned `404 "Endpoint not found"` again today. **Day 23 of that ask unmet** (P0 since May 7).

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 29 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **15 of 20** | −3 (3 Day-0 + 2 Day-2 below 3d) |
| E2 | ≥7d | **15 of 20** | −3 (window shifted; 5 newest below 7d) |
| E3 | ≥14d | **7 of 20** | −7 (older E3/E4 cohort pushed below the 20-cap by 3 new Day-0 signups) |
| E4 | ≥21d | **0 of 20 visible** | unchanged (E4 mass now entirely hidden behind cap) |
| E5 | ≥30d | **0 of 20 visible** | unchanged |

**Truncation horizon at 20 holds.** **Day 24 of API-cap regression.** **3 new Day-0 signups pushed the visible window down — jmoriarty13 (Day 20) is now the oldest visible user; everything Day 21+ is hidden.** **Visible owed emails dropped 50 → 37, but this is a window-shift artifact, not real backlog clearance** — the displaced users moved into the hidden cohort, which grew correspondingly.

### New signups in last 24h — Day-0 classification
| User | Signed up (UTC) | wl items | Composition | Tier | Pattern |
|------|-----------------|----------|-------------|------|---------|
| **officialrizk72** | May 30 00:10 | **2** | NBA Finals MSG GM1 (Jun 8, +9d) + GM3 (Jun 16, +17d) | Tier 1 cluster | **Pattern A cluster** — both future, both null target |
| **coleesparrago** | May 29 22:25 | **1** | Don Toliver: Octane Tour, Scotiabank Arena Toronto (Jun 5, **+6d**) | **Tier 0** | **Pattern A canonical, tactical** — first Tier-0 add in 6 days |
| **mattfleischer4** | May 29 15:44 | **2** | US Open R16 ×2, Arthur Ashe (Sep 6 +99d, Sep 7 +100d) | Tier 2 long-lead | **Pattern A** — both future, both null target |

**All 3 new signups are Pattern A (have ≥1 future watchlist item).** **0 Pattern B (zero-engagement) signups in this burst — a clean reversal of the May 28 1A/1B split and the May 20 0A/3B burst.** **This is the highest-intent burst cohort in the report stream's tracking window: 3 of 3 users added a future event within minutes of signup, totaling 5 future adds.** **Notable: coleesparrago's Don Toliver is the first sub-7-day (Tier 0) watchlist add since the Tier-0 slot went empty 6 days ago — but the drip schedule (E1 at Day 3 = Jun 1) plus the +6-day event means even a live SMTP would miss the tactical window by ~2 days. This is a structural argument for a Day-0 welcome send (see P0 #4).**

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 123 of 100% null-on-add. 115/115 watchlist items have null `target_price`.** **5 new adds in 24h — all 5 captured null target_price**, reinforcing the regression with fresh evidence (yesterday had zero adds, so no new evidence). **The hyper-saturation thesis holds: 26 high-intent null captures now in the report stream record (21 prior + 5 today). Every signal continues to point at the add-form UI as the singular cause — there is no path in the current flow that sets a non-null target on add.**

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged — roos_leeuwen, samir.sgpatel, test@example.com)
- **Stall duration: 118 days** since last organic newsletter signup (roos_leeuwen, 2026-02-01). **Day 25 of consecutive zero-capture days.** **Sharpest cross-channel divergence yet: 3 user registrations in 24h, 0 newsletter signups.** **The structural break is reconfirmed under high acquisition velocity — even a 3-signup day moved the newsletter floor by 0. The capture surface (no footer widget, no exit-intent popup) is the bottleneck, not traffic.** **Footer regression Day 34; popup spec Day 30 unbuilt.**

## Platform Context
- Total users: **93** (+3 vs May 29)
- Users today (rolling 24h): **3** — officialrizk72, coleesparrago, mattfleischer4 (`usersToday: 3` confirms)
- Users this week (rolling 7d): **5** — `usersThisWeek` API field confirms (May 28 cohort pika4696 + samvirsujan, plus today's 3)
- Watchlist items: **115** (+5 vs May 29). **Zero-add streak broken at Day 1 — +5 future adds.**
- Past-dated watchlist items: **48 of 115 (41.7%)** — **improved 1.9pp from 43.6%, purely additive** (5 new future events dilute the denominator; no past-event cleanup occurred — count of past items unchanged at 48). **The auto-archive cron remains unshipped — Day 47 of unaddressed P1 ask.**
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

## Watchlist Digest Prep

### Past-Event Cleanup
**48 of 115 (41.7%) past-dated.** **Improvement is dilution-only** — the absolute count of past-dated items did not change (still 48); the ratio dropped because the denominator grew by 5 future adds. **Past/future ratio: 48 : 67 = 1 : 1.40** (was 1 : 1.29 yesterday). **Structural read unchanged: ratio improvement requires either net future adds (today) OR shipping the archive cron (still unshipped). Today demonstrates the former. The 48 stale items will never decay on their own.**

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **Don Toliver: Octane Tour** (Scotiabank Arena, Toronto) | **Jun 5** | **+6** | **coleesparrago** | **0** | **None — E1 not due until Jun 1 (Day 3)** | **First Tier-0 add in 6 days. Tactical-window mismatch: user is Day 0, drip E1 fires Day 3, event is Day 6 from signup → only a Day-0 welcome send can intercept this in time. With SMTP down, it's silent regardless.** |

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **NBA Finals: TBD at Knicks RD4 GM1** (MSG) | **Jun 8** | **+9** | **officialrizk72** | **0** | **None — E1 due Jun 2** |
| **NBA Finals: TBD at Knicks RD4 GM3** (MSG) | **Jun 16** | **+17** | **officialrizk72** | **0** | **None — E1 due Jun 2** |
| NBA Finals: TBD at Knicks RD4 GM3 (MSG) | Jun 16 | +17 | samvirsujan | 2 | E1 fires ~tomorrow May 31 |
| NBA Finals: TBD at Knicks RD4 GM3 (MSG) | Jun 16 | +17 | joseph.g.nicolosi | 12 | Pattern B 3-cross at E3 |
| JOJI: SOLARIS (Prudential Center, Newark) | Jun 16 | +17 | lisallam | 12 | E1+E2 silent |
| Noah Kahan: The Great Divide Tour (Kia Center, Orlando) | Jun 12 | +13 | cjthomas2557 | 22 | E1+E2+E3 silent + E4 silent |
| World Cup Match 22 (England v Croatia) | Jun 17 | +18 | kevinshall87 | 17 | E1+E2+E3 silent |
| World Cup Match 11 (Netherlands v Japan) | Jun 14 | +15 | kevinshall87 | 17 | (same user — cluster) |
| World Cup Match 29 (Brazil v Haiti) | Jun 19 | +20 | pete.uzelac77 | 50 | E5 full-traversal |
| World Cup Match 9 (Ivory Coast v Ecuador) | Jun 14 | +15 | pete.uzelac77 | 50 | (same user — cluster) |

**Tier 1 holds 10 items today** (up from 8 on May 29), driven by officialrizk72's 2 NBA Finals adds entering fresh. **NBA Finals at MSG is now the single most-tracked tactical cluster: 4 distinct users (officialrizk72 ×2, samvirsujan, joseph.g.nicolosi) tracking the same RD4 GM3 Jun 16 event.** This is a candidate for a one-to-many "MSG Finals price read" digest once SMTP returns.

### TIER 2 — Long-Lead Canonical (22+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **US Open R16 ×2** (Arthur Ashe, Flushing) | **Sep 6–7** | **+99 / +100** | **mattfleischer4** | **0** | **None — E1 due Jun 2** |
| WC ×2 at BC Place (Vancouver) | Jun 24 + Jul 7 | 25 + 38 | karin_ef1 | 16 | E1+E2+E3 silent |
| pete.uzelac77 WC Lincoln Financial ×4 + Darts ×2 | Jun 14 → Jul 4 | 15 → 35 | pete.uzelac77 | 50 | E5 full-traversal |
| Shakira ×2 NYC | Jul 20–23 | 51–54 | laye.aurelien | 58 | E5 silent + 28d post-E5 |
| Bruno Mars MetLife ×3 | Aug 21–25 | 83–87 | taranimeramaro | 35 | E4 silent |
| Ed Sheeran SoFi | Aug 8 | 70 | blubberboi | 51 | E5 full-traversal |
| Harry Styles ×7 at MSG | Aug 26 → Sep 9 | 88 → 102 | cutekitten1234 | 13 | E1+E2 silent |

### TIER 3+ — Pattern B / Full-Traversal / Sunset Backlog (carried from May 29, day-counts +1)
- **Full-traversal silent sends:** dr.altvater (Day 38), mark.murdock (Day 36), joshdguillemette (Day 41, + post-event AEW). **2 likely-but-hidden:** awwhittington, ggri73 (both ~38d, behind the 20-cap). **Total likely full-traversal: 5.**
- **Pattern B 4-cross at E4 (repeating class):** lilianamasyrubi, zhili1208, and the May 29 batch (liambot62 NEW SHAPE w/ past-event, kevinkid94, emmacmather, jfgalzin, jmoriarty13) — all confirmed silent on their forecast dates.
- **Pattern B 3-cross at E3:** joseph.g.nicolosi, c_calingasan, pattyglvz, vlanza (quadruple-confirmed class).
- **Pattern B 2-cross at E2 batch:** brockedwardnelson, zhouyilinbest, keegansmith18 (3-instance batch), eduardo, 9440111, nunemakerc.
- **Sunset / drip-incompatible:** konman87 (Day 13), jadbennis0 (Day 13), charlesteel126 (Day 10), belder4308 (Day 8), zhouyilinbest (Day 8).
- **May 28 cohort:** pika4696 (Pattern B forming, E1 fires ~May 31), samvirsujan (Pattern A canonical, E1 fires ~May 31).

**Empty-watchlist (Pattern B) cohort: 34 of 93 (36.6%)** — −1.2pp vs May 29's 37.8%, because today's 3 new signups all carry future watchlist items (none joins the empty-wl cohort). **Today's burst is dilutive to the Pattern B share — the first burst in the tracking window to lower it.**

## Subject Line A/B Tests — New Day-0 cohort (3 NEW templates) + carried inventory

| Send | A | B | Recommend |
|------|---|---|-----------|
| **officialrizk72 / Day-0 Pattern A cluster — NBA Finals MSG ×2** | `Welcome — you're tracking 2 Knicks Finals nights at MSG. Here's the pricing read before they sell.` | `Day 1 on TicketScan — GM1 (Jun 8) + GM3 (Jun 16) at the Garden, here's how to time the buy` | **A** *(NEW: Day-0 Pattern A cluster template, tactical MSG framing; deep-links to NBA Finals event page)* |
| **coleesparrago / Day-0 Pattern A canonical — Tier 0 Don Toliver +6d** | `Don Toliver is 6 days out at Scotiabank — here's the price read before Friday.` | `Welcome — your Don Toliver night (Jun 5) is close. Here's how to not overpay this week.` | **A** *(NEW: Day-0 Tier-0 urgency template — strongest tactical fit; the ONLY send that could intercept before the event. Argues for Day-0 welcome trigger)* |
| **mattfleischer4 / Day-0 Pattern A long-lead — US Open R16 ×2** | `Welcome — US Open R16 is 99 days out. Plenty of runway to catch the price dip.` | `Day 1 on TicketScan — 2 Arthur Ashe sessions tracked, here's the long-lead playbook` | **A** *(NEW: Day-0 long-lead template; "plenty of runway" reframes distance as advantage, not urgency)* |

**Carried templates (unchanged shapes, day-counts +1):** dr.altvater / mark.murdock / joshdguillemette full-traversal apologies; lisallam / cutekitten1234 / kevinshall87 / karin_ef1 Pattern A++ catch-ups; cjthomas2557 / taranimeramaro Pattern A 4-cross; the Pattern B 2/3/4-cross batches; konman87 / jadbennis0 / charlesteel126 / belder4308 sunsets; pika4696 / samvirsujan May 28 Day-1 templates (E1 fires tomorrow). Full text for these is in `email-daily-2026-05-29.md` §Subject Line A/B Tests; no copy changes today beyond day-count increments.

**Template inventory: 31 distinct shapes today** (vs 28 on May 29). Net change: **+3** — three new Day-0 templates (Pattern A cluster, Tier-0 canonical, long-lead). **Confirms the May 29 revision: template inventory expands whenever a burst cohort lands. Today's +3 is the largest single-day expansion in the tracking window, matching the largest single-day signup burst.**

**CTA conformance:** all 3 new templates deep-link to their tracked event pages (Tier-0 and Tier-1 tactical fits warrant event-specific CTAs). **Deep-link share rises to ~55% (17 of 31).**

## Action Items

### P0 — Critical (Day 54 of outage)

1. **SMTP / drip pipeline — DAY 54. Probe HTTP 000 (>60s timeout). 9th consecutive baseline-failure cycle.** Priority order:
   1. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { res.status(500).json({error: e.message, stack: e.stack}) }`.** **Singular remaining path to root-cause visibility. Total cost-of-delay: 14 days from original ask (May 16).**
   2. **Diagnostic-bypass route Day 60 trigger (June 5):** if still HTTP 000 by Day 60, ship `/api/admin/drip-run-v2` with try/catch baked in. 6 days lead time remain.
   3. If wrap reveals `EAUTH` / Gmail auth → regenerate app password. If `ECONNREFUSED:587` → Railway egress hypothesis confirmed. If `relation does not exist` → schema drift on `drip_emails_sent`.

2. **Day-0 welcome send template — DAY 2 of urgent requirement, now with a live tactical casualty.** **coleesparrago's Don Toliver (Jun 5, +6d from a Day-0 signup) is the first concrete case where even a fully-restored drip schedule would miss the event** — E1 at Day 3 (Jun 1) leaves a +4-day intercept that the user has likely already acted on. **A Day-0 welcome send (fire on registration) is the only mechanism that captures Tier-0 signups.** **Recommend shipping the Day-0 template alongside the SMTP fix, branching on watchlist-presence at signup (today's 3-of-3 Pattern A burst is a clean test case for the with-watchlist branch).**

3. **Target-price UX (Day 123 — 115/115 null).** **5 fresh null-on-add captures today provide new confirming evidence (yesterday had zero adds).** **Spec ready:** inline auto-suggest at add-time defaulting to `current_price × 0.85`, single-tap to set. The regression is invariant to acquisition velocity — it fires on every add.

### P1 — High

4. **Past-event watchlist cleanup (41.7% — improved by dilution only; 48 stale items unchanged).** **Day 47 of unaddressed P1 ask.** Today's ratio improvement is entirely from 5 future adds; zero stale items were cleared. Fix: `status` column + daily expiry cron.

5. **`/drip-stats` cap / pagination (Day 24 of regression).** **Today's 3 new signups pushed the entire Day-21+ E4 cohort out of the visible 20 — visible owed dropped 50 → 37 as a pure window-shift artifact.** The cap now actively distorts backlog reporting. Fix: `offset` parameter or raise cap to 100.

6. **`/api/admin/drip-health` endpoint — DAY 23 of unmet ask (P0-class).** Still 404. A `{lastRunAt, lastError, sentLast24h, eligibleCount}` JSON would replace the entire daily probe ritual.

7. **Backlog catch-up plan when SMTP returns (Day 54) — head of queue:**
   1. **coleesparrago — Tier-0 Don Toliver +6d (most time-critical; may already be moot by send time)**
   2. **officialrizk72 — Pattern A cluster, 2 NBA Finals MSG (Tier 1, +9/+17d)**
   3. **dr.altvater + mark.murdock + joshdguillemette (+ likely awwhittington, ggri73) — 3–5 full-traversal cases**
   4. **lisallam, cjthomas2557, cutekitten1234, kevinshall87, karin_ef1 — Pattern A / A++ tactical catch-ups**
   5. **samvirsujan + pika4696 — May 28 Day-1 cohort (E1 fires May 31)**
   6. **Pattern B 2/3/4-cross batches (send as coordinated batches)**
   7. **mattfleischer4 — Pattern A long-lead US Open (low urgency, +99d)**
   8. **Sunset cohort: konman87, jadbennis0, charlesteel126, belder4308**

8. **Newsletter growth — Day 118 milestone.** **3 user registrations + 0 newsletter signups in 24h — sharpest cross-channel divergence in the stream.** The capture surface is the bottleneck, not traffic. Footer regression Day 34; popup spec Day 30 unbuilt.

### P2 — Medium

9. **MSG Finals one-to-many digest opportunity.** **4 distinct users now track NBA Finals RD4 GM3 (Jun 16) at MSG.** Once SMTP returns, a single "MSG Finals price read" segment send covers all 4 — first viable one-to-many tactical digest in the stream.

10. **pete.uzelac77 World Cup re-engagement** — 50 days, 6 items, first match 15 days out (Tier 1).

11. **Viva El Jaripeo post-mortem — 34 DAYS OVERDUE.**

### Tracking metrics
- **Outage:** Day 54. Probe HTTP 000, 9th consecutive cycle. **drip-health 404 Day 23. drip-run try/catch wrap Day 14 unmet.**
- **Template inventory:** **31 shapes** (+3 — largest single-day expansion; matches largest single-day burst). Deep-link CTA share ~55%.
- **Pattern mix (today's burst):** **3 of 3 Pattern A** — first all-A burst in the tracking window; reverses May 28 (1A/1B) and May 20 (0A/3B). Empty-wl cohort fell 37.8% → 36.6%.
- **Full-traversal silent sends:** 3 confirmed + 2 likely-hidden = 5 likely total.
- **Null-target streak:** Day 123, 115/115, +5 fresh confirming captures today.

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change. **118 consecutive flat days. Day 25 of zero-capture.** **Sharpest cross-channel divergence yet: 3 signups / 0 newsletter in 24h — break is invariant to acquisition velocity.**
- **User signups (24h):** **+3 net new** (officialrizk72, coleesparrago, mattfleischer4 — all Day 0, all Pattern A). **93 total. 7d rolling = 5.**
- **New watchlist items (24h):** **+5** (NBA Finals MSG ×2, Don Toliver ×1, US Open R16 ×2). Total **115. 115/115 null target. Day 123.** All 5 future-dated.
- **Drip pipeline:** UN-SHIPPED. **Day 54. 0 sends ever. 93 of 93 users never received a drip email.** Probe HTTP 000, 9th cycle. True backlog ≈ 105–110 owed sends (visible 37 + hidden cohort — visible figure depressed by window-shift from 3 new Day-0 signups).
- **Tier-0 event:** First in 6 days — coleesparrago Don Toliver (Jun 5, +6d). Tactical-window argument for a Day-0 welcome send (drip E1 at Day 3 misses it).
- **Price alerts:** 0 ever. 115/115 null. Day 123. 5 fresh null-on-add captures today.
- **Watchlist composition:** 115 items, **48 past-dated (41.7%, improved by dilution only — 48 absolute unchanged).** Tier 0: 1 (Don Toliver). Tier 1: 10 (NBA Finals MSG cluster of 4 users is the standout). Tier 2: long-lead.
- **Pattern mix:** **today's burst 3A/0B** — first all-Pattern-A burst; empty-wl cohort 37.8% → 36.6%. Across May 20/28/30 bursts the cumulative read is 3A++/2A/3B/... — **burst quality varies, no systematic low-intent skew from acquisition pulses.**
- **Cross-agent ask (Agent 6):** confirm/deny a paid push fired ~May 29-30 UTC (today's 3-signup burst), and provide the 4-week paid-push schedule for retrospective burst-vs-trough correlation. **Today's all-A burst is the strongest data point yet that pulse acquisition is NOT lower-intent.**
- **Most useful single observation today:** **a Day-0 signup (coleesparrago) added a Tier-0 event (Don Toliver, +6 days) — the first time the tracking window shows a tactical event that the standard drip schedule structurally cannot reach (E1 at Day 3 lands after the buy decision). This converts the Day-0 welcome-send ask from "nice-to-have backfill" into a tactical-revenue requirement, and pairs cleanly with the SMTP fix and target-price UX fix as a single small-surface-area release sprint.**
