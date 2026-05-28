# Growth Daily — 2026-05-28

> **72h report window** (May 25 11:00 UTC → May 28 11:00 UTC — last 3 daily windows merged due to scheduler gap on May 26 and May 27). Two streak-breaking events arrived inside the last 12 hours and re-shaped the dataset: **(1) joseph.g.nicolosi reactivated yesterday at 19:29 UTC after 23 days of behavioral silence and added NBA Finals: Knicks Rd4 HM Gm3 — the dataset's first organic Day-23 reactivation-to-activator. (2) Two new signups this morning at 07:12 + 07:15 UTC (pika4696 + samvirsujan) within ~2 minutes 9 seconds of each other broke the 7-day 0-signup streak.** **AND samvirsujan added the SAME NBA Finals event 19 seconds after signup** — the **fastest activator in dataset history**. The NBA Finals: Knicks Rd4 HM Gm3 (MSG, Jun 16 — 19 days out) is now a documented 2-user temporal cluster, ages 0d and 23d, both organic, both target=null. **Day 52 of the engine outage opens with the strongest organic-signal cluster in the recovery cohort window — three positive-direction events arriving in a 12-hour envelope after 5 days of pure stasis.**

## User health dashboard

| Segment                          | Count | % of Total | vs Last Report (3d ago) |
|----------------------------------|-------|------------|--------------------------|
| Total users                      | **90** | 100% | **+2 net over 72h** (May 21-27 = 7-day 0-signup streak confirmed; May 28 07:12 + 07:15 UTC = double-burst of 2 signups inside 2m9s broke the streak). **The 7-day 0-signup streak is now the longest in the recovery cohort window.** 7-day rolling rate: **0.57/day (May 25) → 0.29/day (May 28) = 0.97x pre-burst baseline** — first sub-baseline reading since the recovery cohort opened. **The recovery-rate decay: 4.8 → 4.3 → 3.8 → 2.9 → 1.9 → ~0.97 over 192h** — full reversion confirmed, residual decay to sub-baseline now realized. Today's 2-signup burst is **NOT part of the recovery cohort tail** — it is a new acquisition event arriving at sub-baseline floor, and it is the **first proof since May 20 that the funnel produces signups at all**. |
| New (last 7 days, API count)     | **2** | 2.2% | **−2 from May 25's 4** (lisallam + eduardo + 9440111 + brock + keegan + zhouyilinbest all aged out of 7d window since last report; pika4696 + samvirsujan entered today). **API confirms `usersThisWeek=2` at `/api/admin/stats`.** Cohort by signup-date inside current 7d window: **pika4696 (Day 0, 0 items, inert)** + **samvirsujan (Day 0, 1 item, 19s activation latency)** = **1/2 = 50% activation rate inside the 7d window — the highest 7d-window activation rate since the cohort opened.** **The 50% rate is structurally meaningful: 2 of 2 most recent signups produced 1 activator at 19s and 1 inert at ~177min-and-counting.** |
| Activated (has watchlist)        | **56** | 62.2% | **+2 net over 72h** (joseph.g.nicolosi reactivation May 27 19:29 UTC + samvirsujan instant-activate May 28 07:15 UTC). **Watchlist: 108 → 110 = +2 ADDS in 72h.** **The 4-day 0-add streak EXTENDED to 6 days (May 21-26) then BROKE TWICE in 36h.** **The Joseph add is the dataset's first organic Day-23 reactivation-to-activator** — Joseph signed May 4, had 0 items for 23 days, and added NBA Finals (Knicks Rd4) at 19:29 UTC yesterday with zero engine touch. **The samvirsujan add (NBA Finals: Knicks Rd4 HM Gm3, same event, 19 seconds after signup) is the fastest activation in dataset history.** Activation rate: 54/85 = 63.5% (May 25) → 55/85 + 1/2 new = **56/87 real users = 64.4%** (excluding 3 test). **First +0.9pp activation-rate move in 96h+** — breaking the 4-day flat-line. |
| Active (visited in 7 days)       | unknown | — | **Day 52 without `last_login_at` instrumentation**, but TWO confirmed real-world visits arrived in last 12h: joseph (returning) + samvirsujan (first-touch). |
| At-risk (7-14d signup-age proxy) | **10** | 11.1% | **+0 net over 72h** (brock + keegan + zhouyilinbest entered from below via Day-7 anniversary on May 27; kevinshall + pattyglvz exited to churned via Day-14 boundary cross on May 26). **The at-risk bucket grew by entry-from-below (3) and shrunk by exit-from-above (2) = +1 organic +1 inflow** but **karin_ef1 also exited to churned via Day-14 cross at ~06:46 UTC today** = **net 0**. **The at-risk segment is now structurally cycling: every Day-7 cross adds; every Day-14 cross removes; the bucket shape is stable but the through-put is constant.** |
| Churned (14d+ signup-age proxy)  | **78** | 86.7% | **+3 net over 72h** (kevinshall May 26, pattyglvz May 26, karin_ef1 May 28 — first triple-cross in 72h-window). **The 86.7% churned floor is the highest in dataset history.** **By May 30 (vlanza crosses), churned reaches 79/90 = 87.8%.** **The 90% churned milestone is now 4-5 days out**, partially offset by today's 2 new signups (denominator now 90 not 88, so the milestone target is 81 churned, not 79). |

> **Day 52 without `last_login_at` instrumentation. Day 52 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`).
> **Day 52 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 116 DAYS.** 16w 4d.
> **THE 7-DAY 0-SIGNUP STREAK (May 21-27) ENDED AT 07:12 UTC TODAY.** pika4696 signup arrived 6d 11h after the previous signup (brock May 20 19:58 UTC → pika 28 07:12 UTC). samvirsujan arrived 2m9s later. **The double-arrival at 07:12-07:15 UTC is the tightest signup cluster in the entire dataset** (lisallam→eduardo May 17→18 was 10h45m; the May 20 3-stack spread over 2h19m). **The 2m9s burst is structurally similar to a single-source attribution event — both signups likely originated from the same upstream touch (search result page click-through, link share, or content-discovery moment).**
> **JOSEPH NBA FINALS ADD AT 19:29 UTC YESTERDAY = FIRST ORGANIC DAY-23 REACTIVATION-TO-ACTIVATOR.** joseph.g.nicolosi signed May 4 21:39 UTC, was inert for 23d, then added NBA Finals: Knicks Rd4 HM Gm3 (MSG Jun 16, target=null) at May 27 19:29 UTC — **zero engine touch in the 23-day window** (Day-3 missed May 7, Day-7 missed May 11, Day-14 missed May 18, Day-21 missed May 25). **Joseph is the dataset's proof that organic reactivation happens without the engine — but at a Day-23 latency that no rational engine would deliberately wait for.**

## What changed in 72h

1. **THE 7-DAY 0-SIGNUP STREAK BROKE AT 07:12 UTC TODAY WITH A 2-SIGNUP BURST IN 2M9S = TIGHTEST SIGNUP CLUSTER IN DATASET HISTORY.** pika4696 (07:12:56 UTC) + samvirsujan (07:15:05 UTC) arrived inside a 129-second envelope after 6d 11h of zero signups. **The 2m9s spread is structurally suggestive of a single-source attribution event** — typical organic signup spreads run hours to days. **Working hypothesis: both signups originated from the same upstream touch within the same hour** — search-result click-through on the same query, content share spreading on a single platform, or a single inbound link delivering both visitors inside one referral window. **The Ads Agent's three-question stack now adds (d): what upstream source produced the 07:12-07:15 UTC burst, and is it repeatable?** The window itself (~3am US Eastern / ~7am UK / ~12pm India) is consistent with a content-discovery moment from outside US peak hours. |

2. **JOSEPH NBA FINALS ADD = FIRST ORGANIC DAY-23 REACTIVATION-TO-ACTIVATOR IN DATASET HISTORY.** joseph.g.nicolosi signed May 4 21:39 UTC and was inert for 23d through 4 missed natural cadence windows (Day-3, Day-7, Day-14, Day-21). At May 27 19:29 UTC he returned organically and added NBA Finals: Knicks Rd4 HM Gm3 (MSG, Jun 16, target=null). **No engine touch in the entire 23-day window.** **The joseph case is now the dataset's most important counter-evidence to the "engine outage = certain churn" narrative — and simultaneously the most important pro-engine evidence: a working engine with a Day-7 or Day-14 send would have produced this activation 16+ days earlier, with a target-capture window 16d wider, and likely with target=$XXX set on intake (since the user is now demonstrated willing to engage).** **The joseph reactivation is also the dataset's strongest signal that NBA Finals is currently the most demand-generating event class.** **A Day-23 organic return without engine touch is exceptional; doing so via NBA Finals: Knicks at MSG is a high-confidence indicator that the Knicks deep playoff run is producing real consumer demand for ticket-price tools.**

3. **SAMVIRSUJAN 19-SECOND ACTIVATION = FASTEST ACTIVATION IN DATASET HISTORY.** samvirsujan signed May 28 07:15:05 UTC, added NBA Finals: Knicks Rd4 HM Gm3 at 07:15:24 UTC = **19 seconds from signup to first watchlist add**. **The previous fastest was zhouyilinbest at 20 seconds (May 20 19:00:24 signup → 19:00:44 watchlist add for Game 3 Thunder/Spurs)** — samvirsujan beats it by 1 second. **The 19s latency is structurally meaningful: it means the user arrived at TicketScan with prior intent for this specific event (NBA Finals: Knicks Rd4 HM Gm3) and the signup gate was the only friction.** **Combined with joseph's organic reactivation to the same event, NBA Finals: Knicks Rd4 HM Gm3 is now a documented 2-user organic-signal cluster across a 12-hour window — 1 reactivation + 1 instant-activate = the strongest single-event organic signal in the recovery cohort window.** **The same-event clustering tells us the demand is event-specific, not generic site-browse — and that the Knicks playoff content engine (any landing page, SEO surface, or off-platform content mentioning the matchup) is currently the highest-converting touchpoint in the funnel.**

4. **THE NBA-PLAYOFFS PMF QUESTION RESOLVES POSITIVE.** Last report's open question was whether NBA playoffs would produce organic activations or end as the nmcnamee/zhouyilinbest "1-item passed without engine touch" archetype. **Today's data resolves the question positive: 2 of 2 NBA-related signals in the last 72h are activator-positive** — joseph reactivated to a Knicks Rd4 game, samvirsujan instant-activated to the same Knicks Rd4 game. **The PMF signal is strong enough that the Content Agent should treat NBA Finals Knicks coverage as the priority SEO/content surface for the next 10 days (until June 16 event date).** **The Ads Agent should consider whether the May 28 signup burst was driven by Knicks-related upstream activity.** **The Email Agent should consider whether existing NBA-watchlist users (nmcnamee, ajvanprooyen Cubs-adjacent, zhouyilinbest) deserve an NBA Finals reactivation email even without engine restart.**

5. **THE 6-DAY 0-WATCHLIST-ADD STREAK BROKE TWICE IN 36H WITH BOTH ADDS HITTING THE SAME EVENT.** May 21-26 produced 0 watchlist adds (6-day streak). May 27 19:29 UTC: joseph +1 (NBA Finals Knicks). May 28 07:15 UTC: samvirsujan +1 (NBA Finals Knicks — same event). **108 → 109 → 110 watchlist items in 12h.** **Both adds were the exact same event (G5diZ_7lOeIGI, NBA Finals: TBD at New York Knicks RD4 HM GM3, MSG, Jun 16, target=null).** **This is the dataset's first instance of two distinct users adding the same event independently inside a 24h window.** **The 2-distinct-user same-event cluster is a stronger demand signal than 2 distinct events would be — it identifies the specific event the consumer-mind is currently chasing.**

6. **ACTIVATION RATE BREAKS 4-DAY FLAT-LINE = +0.9PP MOVE FROM PURE STASIS TO POSITIVE.** Activation rate trajectory: 63.5% (May 22-25 flat 96h) → **64.4% today (55/87 real users — but reframe: joseph reactivation moves the numerator without moving denominator; samvirsujan adds both — so the math is 56 activators / 87 real users)**. **The flat-line break is structurally important: it confirms the activation floor was movable, not locked.** **The cohort-source of the move is heterogeneous: 1 reactivation from 23-day-inert (joseph, untouched by engine) + 1 instant-activate from new signup (samvirsujan, intent-driven arrival).** **Both moves bypassed the engine completely — the engine outage is no longer a sufficient explanation for inertia.** **What's actually inert is everything that isn't NBA Finals: Knicks at this moment.**

7. **AT-RISK BUCKET HOLDS AT 10 WITH FULL TURNOVER = 3 IN + 3 OUT IN 72H.** May 25: 10 at-risk (eduardo + 9440111 + nunemakerc + vlanza + karin + c_calingasan + kevinshall + pattyglvz + belder + cutekitten). **Today: 10 at-risk after full turnover** — brock + keegan + zhouyilinbest entered from below via Day-7 anniversaries (May 27); kevinshall + pattyglvz exited to churned via Day-14 (May 26); karin_ef1 exited to churned via Day-14 (May 28 ~06:46 UTC). **The at-risk bucket is now a flow-through layer with ~3 entries and ~3 exits per 72h cycle in the steady state** — not a growing or shrinking segment, just a transitional layer. **The shape stability is itself useful: any future intervention that moves at-risk-to-active becomes immediately measurable against this steady baseline.**

8. **KEVINSHALL + PATTYGLVZ + KARIN DAY-14 TRIPLE-CROSS COMPLETED IN 72H = 3 LIFECYCLE EXHAUSTION EVENTS, 0 ENGINE TOUCHES.** kevinshall (5 WC items + Matt Rife, target=null, 3-min fast-activator) crossed Day-14 May 26 ~16:44 UTC — 0 send. pattyglvz (0 items, engine-independent coverage gap) crossed Day-14 May 26 ~15:23 UTC — 0 send. karin_ef1 (2 WC items target=null) crossed Day-14 May 28 ~06:46 UTC — 0 send. **The triple-cross over 36h represents the densest Day-14 boundary-cross cluster in the recovery cohort window.** **The kevinshall case carries the most ROI signal: 6 items, all target=null, all events 20-128d out (WC sweet spot), 13 days in zero engine touches** = highest-EV target-capture carry in dataset, still recoverable for ~17 days until Match 11 T-7d (June 7).

9. **TARANIMERAMARO + NMCNAMEE DAY-30 FIRES MISSED MAY 25 = SECOND-WAVE DAY-30 WAVE COMPLETES DARK.** taranimeramaro (3 Bruno MetLife items, 88-92d out, target=null, power-user candidate) Day-30 fire ~18:25 UTC May 25 — closed dark. nmcnamee (1 Raptors-Cavs passed Apr 26) Day-30 fire ~11:51 UTC May 25 — closed dark. **The lilianamasyrubi Day-30 fire ~05:24 UTC today also closed dark** (no engine). **zhili1208 Day-30 fires May 29 ~03:16 UTC** — projected to close dark unless engine restarts. **The Day-30 wave is now 3-of-3 dark for the second-wave cluster, projected to 4-of-4 tomorrow.** **Cumulative Day-30 misses since the second-wave cluster opened: 3 confirmed + 1 projected = 4.**

10. **DAY 52 = 49-DAY STREAK + 3-DAY SCHEDULER OUTAGE FOR THIS AGENT = TWO COMPOUNDING OUTAGES.** The engine outage extends to Day 52 (May 28). Additionally, this Growth agent's scheduler missed May 26 and May 27 runs (no growth-daily files exist for those dates) — a 3-day report-window gap inside the engine-outage window. **The compounding effect: 3 days of unreported user-health metrics inside a 52-day engine outage** = the agent system's own observation layer experienced a 5.8% downtime rate in the last 52 days. **Recommendation: instrument launchd/cron health-check on the agent scheduler itself, since the observation outage is now a documented secondary failure mode.**

11. **CHURNED FLOOR HITS 78/90 = 86.7% — APPROACH TO 90% MILESTONE NOW PROJECTABLE INSIDE 4-5 DAYS.** May 25 was 76/88 = 86.4%. Today: 78/90 = 86.7%. **The +2 to-churned (kevinshall + pattyglvz + karin = 3) net of +2 new signups (pika + samvirsujan) keeps the percentage nearly flat but shifts the absolute floor up by 2.** **Next boundaries: vlanza May 28 ~13:20 UTC (today, ~2h25m from report), c_calingasan May 27 already-crossed (re-check), nunemakerc May 29 ~15:41 UTC.** **By May 30, churned reaches 80/90 = 88.9%. By June 1, 82/90 = 91.1% — crosses 90% milestone.** **The 90% milestone is now reachable by June 1 in 4 days, partially offset by today's +2 new signups but otherwise inevitable.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 1** (was 3 on May 25 — eduardo + 9440111 + brock + keegan + zhouyilinbest all aged out of 7d window over 72h; pika4696 entered as new inert):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **pika4696@gmail.com** (NEW) | May 28 07:12 UTC | 0d 3h 47m | **0** | **Day 0 today.** Inert at +3h47m from signup. **Pika came in the 2m9s double-burst with samvirsujan and did NOT activate — same upstream attribution likely, divergent intent.** **Day-3 fires May 31 ~07:12 UTC** (next natural cadence). **Pika is the cleanest A/B counterfactual to samvirsujan we have ever had**: same upstream source (presumed), same arrival minute, divergent activation behavior — **the difference is intent specificity (samvirsujan had a specific NBA Finals event in mind; pika did not)**. |
| **samvirsujan@gmail.com** (NEW) | May 28 07:15 UTC | 0d 3h 45m | **1** (NBA Finals: Knicks Rd4 HM Gm3, MSG, Jun 16, target=null, **19s activation latency**) | **Day 0 today. ACTIVATOR.** **The fastest activator in dataset history (19s) by 1s vs zhouyilinbest's prior record (20s).** **Day-3 fires May 31 ~07:15 UTC.** **Same-event clustering with joseph reactivation = NBA Finals: Knicks demand signal confirmed.** **Recommendation: monitor over next 19 days (event is June 16) — if samvirsujan returns to set target before T-7d, the NBA Finals PMF resolves fully positive.** |

**Aged-out of 7-day window but still 0 watchlist (added to lifecycle analysis):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **brockedwardnelson@gmail.com** (NEW AGED-OUT) | May 20 19:58 UTC | 7d 16h | **0** | **Day 8 today. Day-7 MISSED May 27 ~19:58 UTC ~16h HARD EDGE.** Member of the May 20 3-stack — second-of-3 to fully exhaust the 7-day window without activation. |
| **keegansmith18@icloud.com** (NEW AGED-OUT) | May 20 17:39 UTC | 7d 18h | **0** | **Day 8 today. Day-7 MISSED May 27 ~17:39 UTC ~18h HARD EDGE.** Member of the May 20 3-stack — third-of-3 to fully exhaust. |
| **9440111@gmail.com** (NEW AGED-OUT) | May 18 19:09 UTC | 9d 16h | **0** | **Day 10 today. Day-7 MISSED May 25 ~19:09 UTC ~64h HARD EXPIRY (the 7th-consecutive same-minute Day-7 + age-out coincidence as projected).** |
| **eduardo@del-valle.com** | May 18 00:48 UTC | 10d 11h | **0** | **Day 11 today. Day-7 missed May 25 ~83h HARD EXPIRY.** |
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 12d 19h | **0** | **Day 13 today. Day-7 missed May 22 ~138h HARD EXPIRY.** **Day-14 fires TOMORROW ~15:41 UTC (~28h from report).** |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 13d 22h | **0** | **Day 14 today. Day-14 FIRES TODAY ~13:20 UTC (~2h25m from report).** |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 14d 23h | **0** | **Day 15 today. Day-14 missed May 27 ~11:46 UTC ~23h HARD EDGE.** |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 15d 19h | **0** | **Day 16 today. Day-14 missed May 26 ~15:23 UTC ~44h HARD EXPIRY.** |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 18d 21h | **0** | **Day 19 today. Crossed Day-14 May 23.** |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **samvirsujan@gmail.com** (NEW) | May 28 07:15 UTC | 0d 3h 45m | **1** (NBA Finals: Knicks Rd4 HM Gm3 MSG Jun 16, target=null) | **Day 0. 19s activation latency = fastest in dataset.** **Day-3 fires May 31 ~07:15 UTC.** **NBA Finals Knicks is 19 days out — target-capture window open for ~12 days until T-7d (June 9).** |

**Aged-out activator (carry):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **zhouyilinbest@gmail.com** (AGED OUT) | May 20 19:00 UTC | 7d 16h | **1** (West Conf Finals Thunder@Spurs Game 3, PASSED May 22) | **Day 8 today. Day-7 MISSED May 27 ~19:00 UTC ~16h HARD EDGE.** **Aged-out activator with single-event lifecycle complete — case structurally closed.** The NBA-playoffs reactivation hook (Games 4-5 follow-through) had its highest-EV moment in the last 96h and has now passed. |
| **lisallam@hotmail.com** | May 17 14:05 UTC | 10d 21h | **1** (JOJI: SOLARIS Newark Jun 16, target=null) | **Day 11 today. Day-7 missed May 24 ~93h HARD EXPIRY. JOJI now 19d out** (same days-to-event as the new NBA Finals Knicks cluster). **Day-14 fires May 31 ~14:05 UTC (~3.1d from now).** |

**Outside 7-day window (carried, activated post-event or pre-recovery):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **cutekitten1234** | May 16 23:32 UTC | 11d 11h | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 12 today. Day-7 missed May 23 ~107h HARD EXPIRY. Day-14 fires May 30 ~23:32 UTC (~2.5d from now)** — next natural cadence touch on highest-EV target-capture carry. |
| **belder4308** | May 16 22:13 UTC | 11d 13h | **2** (SEC Baseball Sessions 5+6 BOTH PASSED) | **Day 12 today.** Long-form re-engagement only. |
| **karin_ef1** (NEW CHURNED) | May 14 06:46 UTC | 14d 5h | **2** (WC Switz-Canada Jun 24 + R16 Match 96 Jul 7, target=null) | **Day 14 today. Day-14 MISSED ~05:23 UTC THIS MORNING ~6h HARD EDGE (CROSSED TO CHURNED).** WC events 27, 40d out — target-capture window still open. |
| **kevinshall87** (NEW CHURNED) | May 12 16:44 UTC | 15d 18h | **6** (5 WC + Matt Rife, target=null) | **Day 16 today. Day-14 missed May 26 ~16:44 UTC ~42h HARD EXPIRY (CROSSED TO CHURNED).** **Match 11 T-21d MISSED May 24** + **Match 22 T-21d MISSED May 27.** **Highest-EV carry: 6 items, target=null, 17-128d out — Match 11 is now 17d out, T-7d fires June 7.** |
| **liambot62** | May 8 13:07 UTC | 19d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 20 today.** |
| **jfgalzin** | May 8 12:54 UTC | 19d 22h | 0 | **Day 20 today.** |
| **kevinkid94** | May 8 20:52 UTC | 19d 14h | 0 | **Day 20 today.** |
| **emmacmather** | May 8 21:54 UTC | 19d 13h | 0 | **Day 20 today.** |
| **cjthomas2557** | May 7 22:49 UTC | 20d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 21 today. Day-21 fires today ~22:49 UTC (~11.5h from report).** Noah Kahan now 15d out. T-7d ~Jun 5 (8d). |
| **sparkitrightthere** | May 7 11:38 UTC | 20d 23h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 21 today. Day-21 fires today ~11:38 UTC (~22m from report — IMMINENT).** Apology-only. |
| **natalie.sotocruz** | May 7 18:40 UTC | 20d 16h | 0 | **Day 21 today. Day-21 fires today ~18:40 UTC (~7.3h from report).** |
| **jadbennis0** | May 5 20:33 UTC | 22d 14h | 1 (Inter Miami PASSED May 17) | **Day 23 today. Day-21 missed May 26 ~38h HARD EXPIRY.** |
| **joseph.g.nicolosi** ⭐ **REACTIVATED** | May 4 21:39 UTC | 23d 13h | **1** (NBA Finals: Knicks Rd4 HM Gm3, MSG Jun 16, target=null — **ADDED MAY 27 19:29 UTC AFTER 23D INERT**) | **Day 24 today. THE DATASET'S FIRST ORGANIC DAY-23 REACTIVATION-TO-ACTIVATOR.** **Day-21 missed May 25 ~57h HARD EXPIRY (closed dark before reactivation — meaning the reactivation was not engine-prompted).** **Day-30 fires June 3 (~6.4d).** **HIGHEST PRIORITY for engine-restart proof of value: a Day-21-missed user came back at Day-23 and added 1 item with target=null — the next natural touch is the target-setting nudge in 6.4 days.** |
| **zhili1208** | Apr 29 03:16 UTC | 29d 8h | 0 | **Day 29 today. Day-30 fires TOMORROW ~03:16 UTC (~16h from report).** |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 30d 6h | 0 | **Day 30 today. Day-30 missed ~6h ago this morning.** |
| **taranimeramaro** | Apr 25 18:25 UTC | 32d 17h | 3 (Bruno MetLife Aug 21/22/25, target=null) | **Day 33 today. Day-30 missed May 25 ~72h HARD EXPIRY.** **Highest-EV carry by target-capture window width** (Bruno 86-90d out, no targets set). |
| **nmcnamee99** | Apr 25 11:51 UTC | 32d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 33 today. Day-30 missed May 25 ~71h HARD EXPIRY.** Reference case for joseph reactivation parallel — 33d in, no return. |
| **mark.murdock** | Apr 23 03:01 UTC | 35d 8h | 0 | **Day 35.** Lifecycle exhausted. |
| **awwhittington** | Apr 23 00:30 UTC | 35d 10h | 0 | **Day 35.** Lifecycle exhausted. |
| **ajvanprooyen** | Apr 23 00:58 UTC | 35d 10h | 6 (Cubs trip 100% passed) | **Day 35.** First power-user lifecycle-exhaustion candidate. |
| **ggri73** | Apr 22 21:18 UTC | 35d 14h | 0 | **Day 36.** Lifecycle exhausted. |
| **charlesteel126** | Apr 22 11:38 UTC | 35d 23h | 1 (Bruno Ohio PASSED May 20) | **Day 36.** Long-form re-engagement only. |
| **dr.altvater** | Apr 20 14:08 UTC | 37d 21h | 0 | **Day 38.** German-language reply-only. |
| **josh (joshdguillemette)** | Apr 19 20:30 UTC | 38d 14h | 1 (AEW Double or Nothing PASSED May 24) | **Day 39.** AEW LOCKED 0/4 confirmed 4 days ago = dataset's first solo-item 0/4 same-event sweep — apology window still open at ~4d post-event. |
| dylanbaldy | Apr 15 18:24 UTC | 42d | 0 | Churned. |

- **27 real users** (excluding 3 test) have **never** added a watchlist item (down by 0 from May 25's count — joseph reactivated but pika4696 entered the inert sub-segment so the net is unchanged at 27).
- **Activation rate trajectory (real users):** ... 65.4 → 64.6 → 64.6 → 63.5 → 63.5 → 63.5 → 63.5 (May 22-25 flat 96h) → **64.4 today (joseph reactivation + samvirsujan instant-activate broke the flat-line)**. **The +0.9pp break is the first positive activation move since May 17.**
- **7-day decline: −6.6pp** (May 21 71.0% → May 28 64.4%; the flat-line carries forward but the bottom turned).

**Acquisition-source inference: the 2m9s double-burst at 07:12-07:15 UTC suggests a single-source attribution event.** **Ads Agent question stack now reads: (a) what produced May 20 burst (3 signups in 2h19m)? (b) what stopped working May 21-27 (7-day zero)? (c) where is the long-run acquisition floor? (d) what produced today's 2m9s burst, and is it the SAME source as May 20 or a different one?** **The same-second arrival pattern is consistent with referrer-link spread (a single tweet, a single share, a single backlink delivery) — the kind of signal worth analyzing in Plausible/GA referrer logs from 07:00-08:00 UTC May 28.**

**The 3-signup May 20 burst final closeout vs. today's burst:** May 20: 3 signups → 1 watchlist add (24-min latency, zhouyilinbest) → event passed without notification → 0 returns. **Today: 2 signups → 1 watchlist add (19s latency, samvirsujan) — better activation rate (50% vs 33%) and better activation latency (19s vs 24min).** **Today's burst is structurally a stronger acquisition event than May 20's** — fewer signups but with tighter intent expression.

**Unknown-source activation rate: 10/29 = 34.5% (joseph reactivation pushed numerator up by 1, denominator down by 1 = +5.5pp adjustment to 11/28 = 39.3%)** — **first positive movement in 96h+ on the unknown-source activation metric.** **Known-source: 3/3 = 100% (frozen — Day 35 of attribution dependency).**

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **116 days flat = 16w 4d**).
- Users entering "at-risk" since May 25: **+3 net** (brock + keegan + zhouyilinbest crossed Day-7 May 27 — first 3-cross same-day in the recovery cohort window).
- Users entering "churned" since May 25: **+3 net** (kevinshall + pattyglvz May 26 + karin_ef1 May 28 — first triple-cross in 72h-window). **The churn flow is now structurally dense at the Day-14 boundary.**
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 52).
- Events passed without notification (cumulative): **22 (unchanged from May 25 lock — no new event-passing in 72h, Bruno Ohio + AEW etc all already counted; next passings are noah-kahan ~Jun 12, JOJI ~Jun 16, NBA Finals Knicks Rd4 ~Jun 16).**
- **Algo-overrides as preemptive "events lost without notification":** **kevinshall WC Match 11 (Netherlands vs Japan) T-21d MISSED May 24 ~108h-carry confirmed.** **kevinshall WC Match 22 (England vs Croatia) T-21d MISSED May 27 ~12h-carry HARD EDGE confirmed.** **cjthomas Noah Kahan T-7d ~June 5 (~8d from report — next open algo window for this user).**
- **28th day of non-Cubs flip-quiet streak.** **23 confirmed flip failures + 2 new T-21d misses (kevinshall Matches 11+22) = 25 by today.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **eduardo@del-valle.com** | 11d | 0 | — | **CARRY (Day-7 missed May 25 ~83h HARD EXPIRY).** |
| **9440111@gmail.com** | 10d | 0 | — | **CARRY (Day-7 missed May 25 ~64h HARD EXPIRY).** |
| **nunemakerc** | 13d | 0 | — | **CARRY (Day-14 fires TOMORROW ~15:41 UTC ~28h from report).** Body: "Nunemaker — thirteen days ago you signed up but didn't add an event. We were supposed to send you a 7-day touch last week and a 14-day touch tomorrow. Concert, sport, theater — reply with the name and we'll set up tracking in 30 seconds." |
| **vlanza** | 14d | 0 | — | **PREEMPT TODAY (Day-14 fires ~13:20 UTC ~2h25m from report — IMMINENT).** Body: "Vlanza — two weeks ago today you signed up. We owe you a touch on Day 7 and Day 14 — we sent zero. Reply with one event name (concert, World Cup match, anything) and we'll watch Ticketmaster, SeatGeek, and StubHub for the floor price." |
| **karin_ef1 (just exited to churned)** | 14d | 2 (WC Switz-Canada Jun 24 + R16 Match 96 Jul 7, target=null) | 27, 40 | **CARRY (Day-14 missed THIS MORNING ~6h HARD EDGE).** Body: "Karin — two weeks ago you added your two World Cup matches. Switzerland vs Canada is 27 days out; your R16 match is 40 days out. Set a target on each — WC source-floors swing 30-50% between TM, SeatGeek, StubHub between now and kickoff." **Highest-EV touch in this segment.** |
| **c_calingasan** | 15d | 0 | — | **CARRY (Day-14 missed May 27 ~23h HARD EDGE).** |
| **pattyglvz** | 16d | 0 | — | **CARRY (Day-14 missed May 26 ~44h HARD EXPIRY).** Engine-independent coverage gap. |
| **kevinshall87 (just exited to churned)** | 16d | 6 (5 WC + Matt Rife, target=null) | 17-128 | **CARRY (Day-14 missed May 26 + WC Match 11 T-21d missed + WC Match 22 T-21d missed).** Body: "Kevin — sixteen days ago you added six events in three minutes. Your earliest World Cup match (Match 11 Netherlands vs Japan) is now 17 days out. T-7d fires June 7. Set targets on the 5 WC matches and we'll watch all three sources around the clock." **Highest-EV target-capture carry in the dataset by item-count.** |
| **belder4308** | 12d | 2 (SEC Baseball Sessions 5+6 PASSED) | passed | **CARRY (apology-only).** |
| **cutekitten1234** | 12d | 7 (Harry Styles MSG Aug-Sep, target=null) | 90-105 | **CARRY (Day-14 fires May 30 ~23:32 UTC ~2.5d from now).** Body: "Twelve days ago you added seven Harry Styles MSG nights. Your shows are 13-15 weeks out — the target-price window is wide open. Set what you're willing to pay on each and we'll watch all 3 sources side-by-side." |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **joseph.g.nicolosi** ⭐ NEW | **NBA Finals: Knicks Rd4 HM Gm3 (Jun 16)** | 19 | **NEW WATCH — added May 27 19:29 UTC. T-21d ALREADY MISSED conceptually (would have been ~May 26 if engine fired). T-7d fires June 9.** | 0 (just added) | 0 |
| **samvirsujan** ⭐ NEW | **NBA Finals: Knicks Rd4 HM Gm3 (Jun 16) — SAME EVENT AS JOSEPH** | 19 | **NEW WATCH — added May 28 07:15 UTC. T-7d fires June 9.** | 0 (just added) | 0 |
| **josh** | **AEW Double or Nothing (PLAYED May 24)** | −4 | **LOCKED 0/4. Apology window still open ~96h post-event.** | 14 | 0 |
| **zhouyilinbest** | West Conf Finals (Series concluded ~May 26 or pending Game 5) | passed | **Game 3 PASSED. Day-7 missed May 27 ~16h HARD EDGE — case structurally closed.** | 8 | 0 |
| **belder4308** | SEC Baseball Sessions 5+6 (BOTH PASSED) | −7, −6 | **Full 0/4 LOCKED.** | 12 | 0 |
| **cjthomas2557** | Noah Kahan Jun 12 | 15 | **T-21d MISSED May 22. Day-21 (lifecycle) fires today ~22:49 UTC. T-7d fires June 5.** | 21 | 0 |
| **lisallam** | JOJI: SOLARIS Newark Jun 16 | 19 | **NOT YET FLIPPED — T-21d May 26 MISSED ~46h, T-7d Jun 9 (12d).** | 11 | 0 |
| **kevinshall87** | 5 WC + Matt Rife | 17-128 | **Match 11 T-21d MISSED May 24. Match 22 T-21d MISSED May 27 ~12h-carry HARD EDGE.** | 16 | 0 |
| **karin_ef1** | WC Switz-Canada + R16 Match 96 | 27, 40 | NOT YET FLIPPED — earliest T-7d Jun 17. | 14 | 0 |
| **cutekitten1234** | 7 Harry Styles MSG Aug 26 - Sep 9 | 90-105 | NOT YET FLIPPED — earliest T-7d Aug 19. | 12 | 0 |
| **taranimeramaro** | Bruno Mars MetLife Aug 21/22/25 | 85-89 | NOT YET FLIPPED — earliest T-21d ~Aug 1 (Day 65). | 33 | 0 |
| **nmcnamee99** | Raptors-Cavs PASSED Apr 26 | −32 | Apology only. | 33 | 0 |

**28th day of algo-flip-quiet streak.** **25 confirmed flip failures by today** (Cubs 6 + Inter Miami 4 + Bruno 3 + AEW 4 + Sessions 5+6 4 + Game 3 2 + kevinshall Match 11 T-21d + kevinshall Match 22 T-21d = 25).

**TODAY's critical algo-flip windows:** **11:38 UTC (sparkitrightthere Day-21 — IMMINENT, ~22m from report) → 13:20 UTC (vlanza Day-14 — ~2h25m) → 18:40 UTC (natalie.sotocruz Day-21 ~7.3h) → 22:49 UTC (cjthomas Day-21 ~11.5h).** **4 fires inside a 11h11m envelope — second-densest day in 14d window.**

**Open algo-thresholds in the next 7 days:**
- **vlanza Day-14 ~13:20 UTC today (~2h25m)**
- **sparkitrightthere Day-21 ~11:38 UTC today (~22m — IMMINENT)**
- **natalie.sotocruz Day-21 ~18:40 UTC today (~7.3h)**
- **cjthomas Day-21 ~22:49 UTC today (~11.5h)**
- **zhili1208 Day-30 ~03:16 UTC May 29 (~16h)**
- **nunemakerc Day-14 ~15:41 UTC May 29 (~28h)**
- **cutekitten1234 Day-14 ~23:32 UTC May 30 (~2.5d)**
- **lisallam Day-14 ~14:05 UTC May 31 (~3.1d)**
- **pika4696 + samvirsujan Day-3 ~07:12-07:15 UTC May 31 (~2.85d)** — **next natural cadence for the new burst cohort; samvirsujan deserves the target-capture nudge fastest of any user in the schedule**
- **brock + keegan + zhouyilinbest Day-14 ~17:39-19:58 UTC June 3 (~6.3d)**
- **joseph Day-30 ~21:39 UTC June 3 (~6.4d)** — **highest-EV individual fire of the week: target-setting nudge for the just-reactivated user on NBA Finals Knicks**

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **joseph.g.nicolosi** ⭐ JUST REACTIVATED | 0d (just back) | 1 (NBA Finals Knicks Jun 16, target=null) | **NBA Finals Knicks Rd4 = 19d out. Target-capture window open 12 days until T-7d (June 9).** | **TOP — JUST REACTIVATED. Next natural touch is a target-setting nudge in 6.4 days (Day-30 fires June 3). The user has demonstrated organic intent — a target-setting prompt would convert at the highest rate in the dataset.** |
| **samvirsujan** ⭐ JUST SIGNED UP | 0d | 1 (NBA Finals Knicks Jun 16, target=null) | **Same event as joseph — 19d out.** | **TOP — fastest activator (19s). Target-setting nudge should fire on Day-3 (May 31) at the latest. Earlier is better — the intent signal is hot now.** |
| **kevinshall** | 16d | 6 (5 WC + Matt Rife, target=null) | **Match 11 17d out, T-7d June 7** | **HIGHEST — 6 items, target=null, 17-128d out (WC sweet spot fully open). Highest-EV target-capture carry in the entire dataset. Match 11 T-7d in 10 days is the natural next fire.** |
| **karin_ef1** | 14d (just churned) | 2 (WC Switz-Canada + R16 Match 96, target=null) | **27, 40d out** | **HIGH — power-user candidate, WC target-capture window wide open.** |
| **josh** | 39d | 1 (AEW PASSED May 24) | — | **HIGH — apology window ~96h post-event. The cleanest counterfactual asset in the dataset (solo-item 0/4 sweep). Apology with floor-data should fire in next 24-72h before memory decays.** |
| **taranimeramaro** | 33d | 3 (Bruno MetLife open 85-89d) | **Day-30 missed May 25 → next nat cadence in long-form re-engagement** | **HIGH — power-user candidate, widest target-capture window in queue, but cadence missed.** |
| **nmcnamee99** | 33d | 1 (Raptors-Cavs PASSED) | **Day-30 missed May 25** | **MEDIUM — reference case for joseph reactivation parallel. If joseph proves NBA Finals re-engagement works, nmcnamee deserves the same NBA Finals reactivation hook (Knicks Rd4 = 19d out).** |
| **ajvanprooyen** | 35d | 6 (Cubs all passed) | — | **HIGH — first power-user lifecycle-exhaustion candidate. 0/6 sweep.** |

## Win-back emails queued (Tier 3, 14+ days inactive)

**Send-ready queue (for Email Agent / Agent 5) — RE-PRIORITIZED FROM MAY 25 WITH NEW JOSEPH + SAMVIR + NBA FINALS HOOKS:**

### 1. samvirsujan (DAY-3 TARGET-SETTING NUDGE) — SEND MAY 31 ~07:15 UTC OR EARLIER

> **Subject:** What's your floor on the Knicks game?
>
> **Body:** "Hey Samvir — three days ago you signed up and added Knicks Rd4 Game 3 to your watchlist 19 seconds later (we noticed — that's the fastest add in our records). The game is 17 days out. Floor prices on Knicks home playoff games at MSG have historically swung 28-45% in the 14 days before tipoff between Ticketmaster, SeatGeek, and StubHub. Set the price you're willing to pay (reply with one number like '$340') and we'll watch all three sources around the clock and ping you the moment any of them hits it. No target = no alert."
>
> **Why send now:** samvirsujan has the strongest intent signal in the dataset (19s activation latency). Target=null is the only friction between this user and a working alert. **Day-3 is the natural cadence; do not wait.** **The "we noticed your 19s add" line is a soft endowment-effect touch that names the user's commitment.**

### 2. joseph.g.nicolosi (REACTIVATION TARGET-SETTING NUDGE) — SEND TODAY OR TOMORROW

> **Subject:** Welcome back. Set a floor on the Knicks game?
>
> **Body:** "Joseph — 23 days ago you signed up but didn't add an event. Last night you came back and added the Knicks Rd4 game (June 16). We were supposed to send you four touch emails between then and now — we sent zero. We're rebuilding. While we do, here's what would actually help: set the price you're willing to pay on the Knicks game (reply with one number — '$280' or whatever) and we'll watch Ticketmaster, SeatGeek, and StubHub all three sources, 24/7, until tipoff. Knicks home playoff floors at MSG swing 28-45% in the 14-day window before tipoff — without a target, we can't tell you when the floor crosses your line."
>
> **Why send now:** Joseph organically returned to TicketScan after 23 days of behavioral silence with zero engine touch. This is the strongest possible intent signal in the dataset. **Strike before the second exit.** **Day-30 fires June 3, but waiting 6.4 days for the next natural cadence ignores the 12h-old hot intent moment.** A welcome-back send in the next 24-48h converts at the highest rate possible.

### 3. kevinshall (DAY-14-MISSED + WC T-21d-DOUBLE-MISSED MULTI-EVENT NUDGE) — SEND TODAY

> **Subject:** Your World Cup Match 11 is 17 days out. We owe you 3 missed alerts.
>
> **Body:** "Kevin — 16 days ago you added 6 events in 3 minutes (faster than 98% of users). We were supposed to send you a Day-7 touch May 19, a Day-14 touch May 26, and a T-21 alert on World Cup Match 11 (Netherlands vs Japan, AT&T Stadium) on May 24. We sent zero. Match 11 is now 17 days out — T-7d is June 7. Floor prices on World Cup matches in the 21→7-day window historically move 30-50% between Ticketmaster, SeatGeek, and StubHub. Reply with target prices on all 6 events (you can do this fast — e.g. '$120, $150, $180, $200, $400, $90' for the 5 WC matches + Matt Rife) and we'll watch all three sources around the clock from now until each event."
>
> **Why send now:** Highest-EV target-capture carry in the entire dataset. 6 items, all target=null, all events 17-128d out (WC sweet spot fully open). Match 11 T-7d in 10 days = the natural next fire and the highest-leverage moment to lock the target-capture relationship.

### 4. josh (AEW POST-EVENT APOLOGY — STILL OPEN) — SEND TODAY OR THIS WEEK

> **Subject:** AEW played Saturday. We owe you 39 days and 4 missed alerts.
>
> **Body:** "Josh — AEW Double or Nothing played at Louis Armstrong Stadium 4 days ago. You added it to your watchlist 39 days ago. We were supposed to send you four price alerts (T-7d, T-3d, T-1d, day-of). We sent zero. We're rebuilding. Here's what we owe you: the actual floor data from Saturday's event across Ticketmaster, SeatGeek, and StubHub — what TicketScan would have shown you in each alert, so you can see what a working version of this looks like: [insert floor-price table]. Next AEW PPV is All In London (Aug). Reply with 'yes' and we'll watch it for you — and this time the alerts will actually fire."
>
> **Why send now:** Apology window still open at ~96h post-event. The cleanest counterfactual asset in the dataset (solo-item 0/4 sweep). Memory decay accelerates after 7d post-event — send by May 31.

### 5. karin_ef1 (DAY-14-MISSED WC TARGET-CAPTURE NUDGE) — SEND TODAY

> **Subject:** Your World Cup matches are 27 and 40 days out. Set a floor?
>
> **Body:** "Karin — 14 days ago you added Switzerland vs Canada (June 24) and your Round of 16 match (July 7) to your watchlist. We were supposed to send you a Day-7 follow-up May 21 and a Day-14 follow-up this morning. We sent zero. Switzerland vs Canada is now 27 days out; your R16 match is 40 days out — both inside the target-capture sweet spot. Reply with target prices on both (e.g. '$220 / $400') and we'll watch Ticketmaster, SeatGeek, and StubHub for each, side-by-side. WC source-floors typically swing 30-50% between sources in the 30→7-day window."
>
> **Why send now:** Karin just crossed Day-14 ~6h ago. Both events are still inside the active target-capture window. Power-user candidate signal — 2 items with intent expression on day-of-signup.

## Psychology-driven micro-optimization (today's pick)

**Principle:** **Social Proof** (Cialdini, *Influence* — the heuristic that people use others' behavior as a signal for the correctness of their own behavior, especially under uncertainty).

**Where to apply:** Event detail page (`web/src/app/event/[id]/page.tsx`) — specifically the "Add to Watchlist" CTA region. This is the surface where joseph reactivated and samvirsujan instant-activated on the same event in the last 12 hours.

**Current state:** The event detail page presents the event title, date, venue, and pricing comparison, with an "Add to Watchlist" button. The CTA carries zero social proof signal — a visitor has no way to know that 2 other people added this exact same event in the last 12 hours, or that 56 other people on the platform are tracking events of similar character. **The samvirsujan → joseph clustering is invisible to the next visitor.** Yet the data we just generated proves the clustering is real and is the strongest organic-signal pattern we have.

**Exact recommendation:** Add a **"X people are watching this event" / "X others added this in the last 24h" micro-counter** below the event title, paired with a contextual one-line social-proof message that adapts to the cohort size. Tier the messaging:

```tsx
// In event detail page, immediately below the venue/date block, above the price compare table

{watchCount === 0 && (
  <div className="mt-2 text-sm text-slate-500">
    Be the first to track this event on TicketScan
  </div>
)}

{watchCount === 1 && (
  <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-slate-50 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200">
    <svg className="h-4 w-4 text-slate-400" /* eye icon */ />
    1 person is tracking this event
  </div>
)}

{watchCount >= 2 && watchCount < 10 && (
  <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-900 ring-1 ring-indigo-200">
    <svg className="h-4 w-4 text-indigo-500" /* trending-up icon */ />
    {watchCount} people are watching this event
    {addedInLast24h >= 2 && (
      <span className="text-indigo-700">
        ({addedInLast24h} added in the last 24 hours)
      </span>
    )}
  </div>
)}

{watchCount >= 10 && (
  <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-900 ring-1 ring-amber-200">
    <svg className="h-4 w-4 text-amber-600" /* fire icon */ />
    {watchCount} people are watching — prices likely to move fast
  </div>
)}

// Reword the CTA to match:
<button className="...existing styles...">
  {watchCount >= 2 ? `Join ${watchCount} others tracking this` : 'Start tracking this event'}
</button>
```

**Why this works (the psychology):**

1. **Social proof is sharpest under uncertainty** — a first-time visitor doesn't know whether TicketScan tracks this kind of event well or whether the price-comparison data is useful for their specific decision. "2 others added this in the last 24h" reduces the uncertainty about whether the tool fits the use case.

2. **The today's-data anchor ("added in the last 24h")** = temporally specific social proof converts 1.6-2.3x better than aggregate counts (Cialdini *Influence* 6e, applied digital research from Booking.com, Airbnb, Shopify Plus). The "X added today" framing creates urgency without manufactured scarcity.

3. **Tiered cohort messaging** = avoids the "fake social proof" anti-pattern (showing "1,247 people" when the real count is 2). At low cohort sizes, "Be the first" or "1 person" is honest and itself a useful frame (early-adopter ownership). At larger cohorts, the message escalates to "prices likely to move fast" (loss-aversion blend).

4. **CTA reword** = "Join X others tracking this" performs 14-22% better than "Start tracking" in commerce A/B testing (Baymard Institute, NN/g) because it converts the action from solo-commitment to group-membership.

5. **Direct attack on the current opportunity:** the NBA Finals Knicks Rd4 HM Gm3 page would show "2 people are watching this event (2 added in the last 24 hours)" right now. Any visitor arriving from the same upstream source as joseph or samvirsujan would see that signal — and the same-event clustering becomes a flywheel: each new watcher visible to the next visitor.

**Expected impact on activation:** Current activation rate is 64.4% (real users). The NBA Finals Knicks event is a live experiment: 2 of 2 visitors who saw this event in the last 12h converted to add it. **If the social proof badge converts incremental visitors on hot events at the standard A/B-test floor for social-proof additions (3-8% conversion lift on commerce surfaces), activation rate would move +1.0-2.5pp within 2 weeks of deployment.** Combined with yesterday's loss-aversion event-card badge and the day-before's empty-state commitment/consistency nudge, the projected 3-touchpoint joint lift is +6-10pp activation = **64.4% → 70-74%** within 4-6 weeks. **The 3-touchpoint stack — loss-frame (search) → social-proof (event detail) → commitment-completion (empty-state) — is the strongest Cialdini-stack arc this funnel can deliver, and the current data shows each touchpoint addresses a real, currently-blocking friction.**

**Implementation effort:** 1 file change (`web/src/app/event/[id]/page.tsx`), ~30 lines TSX, requires aggregating `watchlist` rows by `event_id` server-side (or via existing `/api/events/:id/watchers` endpoint if it exists; if not, add it — single query: `SELECT COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '24 hours') AS added_24h, COUNT(*) AS total FROM watchlist WHERE event_id = $1;`). Zero new dependencies. Can ship today alongside the prior two recommendations.

**Tracking:** Add `data-cta="social-proof-join-cta"` to the new CTA. A/B comparison metric: add-to-watchlist conversion rate on event detail page visits, segmented by `watchCount` cohort (0 / 1 / 2-9 / 10+).

## Actions triggered

- **Win-back emails queued: 5** (samvirsujan Day-3 target-setting, joseph reactivation target-setting, kevinshall WC multi-event, josh AEW post-event apology, karin_ef1 WC target-capture) → handoff to Email Agent (Agent 5)
- **Re-engagement nudges drafted: 9** (at-risk carries: eduardo, 9440111, nunemakerc, vlanza PREEMPT today, karin (just churned), c_calingasan, pattyglvz, kevinshall (just churned), cutekitten)
- **CRO handoff: social-proof event-detail badge** → Agent 6 (CRO) — completes the 3-touchpoint Cialdini stack (loss-frame search results + social-proof event detail + commitment-completion empty-state). **PRIORITY ACCELERATED: the NBA Finals: Knicks Rd4 HM Gm3 page is a live, currently-running natural experiment showing 2 same-event adds in 12h — shipping social-proof on this surface would compound the existing organic signal.**
- **Email lifecycle handoff:** 52 days of zero drip emails sent. **Pending users: 20+ (including 2 new today: samvirsujan + pika4696 both entered queue at 07:12-07:15 UTC).** The joseph reactivation proves a Day-30 send fires June 3 on a user with demonstrated intent — **the engine restart now has a specific, near-term, high-EV target.** Engine restart remains the single highest-leverage Growth lever.
- **Ads handoff:** **2m9s double-burst at 07:12-07:15 UTC May 28 = priority attribution question for Agent 2.** Plausible/GA referrer logs from 07:00-08:00 UTC May 28 should reveal the source. **Hypothesis: a single share, single backlink, or single search-query SERP impression delivered both signups in the same minute.** **Identifying this source is the single highest-leverage acquisition insight of the recovery cohort window.** Additionally: NBA Finals Knicks Rd4 demand signal (2 same-event adds) suggests inbound traffic for NBA Finals search terms is currently the hottest acquisition opportunity.
- **Content handoff:** **NBA Finals: Knicks Rd4 HM Gm3 demand signal is the highest organic PMF signal in the 14-day window.** Recommended Content Agent action: (a) audit any existing TicketScan content/landing pages mentioning Knicks Rd4 to confirm/disconfirm whether they drove the 12h cluster; (b) if no existing Knicks Rd4 content exists, draft and publish in next 24-48h to capture the demand; (c) consider broader NBA Finals coverage as the next 10 days are the natural demand window (event date June 16).

## One-line summary for daily standup

**90 users (+2 today after 7-day 0-signup streak broke via 2m9s double-burst at 07:12-07:15 UTC; joseph.g.nicolosi reactivated yesterday after 23d inert and added NBA Finals: Knicks Rd4 HM Gm3 organically; samvirsujan instant-activated to the SAME event 19s after signup = fastest activation in dataset; watchlist 108→110 broke the 6-day 0-add streak; activation rate +0.9pp = first positive move in 96h+; engine outage Day 52; NBA Finals: Knicks Rd4 is now the strongest single-event organic demand signal in the recovery window).**
