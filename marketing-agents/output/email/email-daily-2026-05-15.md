# Email Daily — 2026-05-15

> **Day 39 of SMTP outage. The forecast cone resolved 4 days late** — the May 11 prediction of "4+ multi-threshold drift cases by May 15" undershot by half: **6 named multi-threshold cases exist today, with 4 more crossing into multi-threshold inside this 24-hour window.** Today is the largest single-day silent-threshold-crossing event in TicketScan history: **emmacmather, kevinkid94, liambot62, and jfgalzin all cross E2 silent between 12:54 and 21:54 UTC today.** Three of those four already sat on a silent E1. All four become two-threshold Pattern B drift cases inside one 24h window. **liambot62 specifically becomes the first Pattern C multi-threshold case** — post-event user (Toronto FC, 6 days past) now drifting silently through both E1 and E2 without any send. **mark.murdock and (invisible) dr.altvater are 4-threshold silent traversals (E1+E2+E3+E4 all skipped during this outage).** Day 108 of 100% null-target streak (97/97 — 8 new adds since May 11, all null). Day 103 of newsletter stall. **5 new user signups in 4 days (74 → 79), 8 new watchlist items, 0 new newsletter subscribers, 0 emails sent.** The funnel is widening at the top while the activation pipeline stays at literal zero.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- **Pending users (visible): 20** — composition shifted. Top of queue now vlanza (0d, Day-0 non-activator) and karin_ef1 (1d, the WC BC Place multi-add power user). Bottom of visible queue is mark.murdock at 22d — **dr.altvater (~24d), joshdguillemette (~26d), charlesteel126 (~23d), and the entire 30+d cohort (pete.uzelac77, blubberboi, goldy.pec.2012, bhaygood, laye.aurelien, plus awwhittington and ggri73) all sit invisible behind the 20-row API cap.** Day 9 of API-cap regression. Hidden cohort grew by 5 since May 11 as new signups pushed older users off the visible window.
  - Eligibility breakdown today (visible 20):
    - **E1 eligible (≥3d): 15/20** (excluded: vlanza 0d, karin_ef1 1d, c_calingasan 1d, kevinshall87 2d, pattyglvz 2d). **+1 vs. May 11** as jmoriarty13 aged from 1d→5d and crossed E1 silent on May 12.
    - **E2 eligible (≥7d): 10/20** — cjthomas2557 (7d), natalie.sotocruz (7d), sparkitrightthere (7d), jadbennis0 (9d), joseph.g.nicolosi (10d), zhili1208 (16d), lilianamasyrubi (17d), taranimeramaro (19d), nmcnamee99 (19d), mark.murdock (22d). **Today emmacmather, kevinkid94, liambot62, and jfgalzin cross E2 silent in a 9-hour window** — biggest single-day E2 crossing event in reporting history.
    - **E3 eligible (≥14d): 5/20** — zhili1208 (16d, crossed silent ~May 13), lilianamasyrubi (17d, crossed silent ~May 12 as forecast), taranimeramaro (19d, crossed silent ~May 9), nmcnamee99 (19d, crossed silent ~May 9), mark.murdock (22d, crossed silent ~May 6). **All five silent.**
    - **E4 eligible (≥21d): 1/20 visible (mark.murdock 22d, silent traversal completed yesterday).** dr.altvater also crossed E4 silent on May 12 as forecast, but is now invisible behind the API cap. **Mark.murdock is the only E4 traversal visible to the admin endpoint; dr.altvater is the first confirmed-but-invisible 4-threshold silent traversal.**
    - **E5 eligible (≥30d): 0 visible.** blubberboi (35d), goldy.pec.2012 (35d), pete.uzelac77 (35d), bhaygood (42d), laye.aurelien (43d) all sit at or past E5 — all hidden. **At least 5 confirmed full-traversal candidates outside the visible window.**
- **Threshold crossings in last 24h (4 silent E2 advances + 1 silent E4 — historic record day):**
  - **E1 → E2: emmacmather (today ~21:54 UTC).** Signed up May 8 21:54. Crossed E1 silent May 11 21:54 → crosses E2 silent today. Empty watchlist. **Multi-threshold Pattern B at front of funnel — joins joseph.g.nicolosi as the second confirmed instance of this class.**
  - **E1 → E2: kevinkid94 (today ~20:52 UTC).** Same shape as emmacmather. Empty watchlist. **Third Pattern B multi-threshold at E2.**
  - **E1 → E2: liambot62 (today 13:07 UTC).** **First Pattern C multi-threshold drift case.** Toronto FC was May 9 (6 days past). E1 fired silent May 11 as C1 post-event. E2 fires silent today. **A user whose single tracked event is already in the past has now drifted through two distinct trigger points without intervention. Pattern C + Pattern B drift in one user.**
  - **E1 → E2: jfgalzin (today 12:54 UTC).** Pattern B at E1 May 11 → Pattern B at E2 today. Empty watchlist throughout. **Fourth Pattern B multi-threshold; joseph.g.nicolosi's drift class is now n=4.**
  - **E3 → E4: mark.murdock (yesterday May 14 ~03:01 UTC, ~31h ago at report time).** Empty watchlist. **First fully-confirmed 4-threshold silent traversal visible in the admin endpoint (E1+E2+E3+E4 all skipped during this outage).** dr.altvater hit the same shape on May 12 but is invisible behind the API cap.
- **ESCALATION (Day 39):** Same fix sequence carrying since May 1; today's framing is structural. **The May 11 hypothesis ("every additional outage day will compound silent advances arithmetically") has been validated: 4 silent E2 crossings in a single 24h window today is the largest event of its type in reporting history.** Per Agent 7's morning report, Cron Day 7, alerts Day 38, price-history Day 38, GA Data API Day 38 — the four separate platform-level failures continue in lockstep. The mathematical floor here is that another 24-hour delay produces another arithmetic compounding (forecast below).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 108 of 100% null-on-add. 97/97 watchlist items have null target_price.** Re-confirmed via `/api/admin/watchlist?limit=200` at 10:02 UTC. The 8 new adds since May 11 (6 WC matches by kevinshall87, 2 WC matches by karin_ef1) all have null target_price. **Note: the WC vertical now confirmed as the strongest activation lane on the platform (per Agent 7's n=2 validation across AT&T Stadium and BC Place), and 100% of WC-add users still have no target price set.** This is a high-leverage UX fix at exactly the cohort the platform is converting best on.
- The interlock is unchanged: SMTP fix without target-price fix produces zero alerts. **Day 39 + Day 108 means both gaps must close before the alert pipeline can produce a single sent email — and now the alerts depend on price-history too (Day 38, also un-shipped), which means three serial dependencies must all resolve.**

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged since 2026-02-01)
- **Stall duration: 103 days.** **Day 10 of consecutive zero-capture days.** The 4-day gap since May 11 produced +5 user signups, +8 watchlist items, and 0 newsletter signups. **The cross-pollination case from May 11 (channels lockstep at zero) now has an inverse data point: signups produced positive net growth, newsletter still didn't move.** The two channels do not move together at positive volumes either. The post-registration default-opt-in checkbox remains the cheapest growth fix on the board. **Today's specific evidence:** karin_ef1 added 2 WC matches in 49 seconds (high-intent, multi-add) and did not subscribe to the newsletter. If a 2-match-in-49-seconds power user can't be captured, the conversion path is gated entirely.

## Platform Context
- Total users: **79** (+5 since May 11 — vlanza, karin_ef1, c_calingasan, kevinshall87, pattyglvz)
- Users today (rolling 24h): **1** (vlanza 13:20 UTC May 14, Day-0 non-activator per Agent 7)
- Users this week (rolling 7d): **10** (was 11 yesterday — four May 8 producers roll out tomorrow May 16; forecast 6–9 by tomorrow without inbound)
- Watchlist items: **97** (+8 since May 11 — all WC except Matt Rife Choctaw Sept 26; **all null-target**)
- Past-dated watchlist items: **~40 of 97 (41.2%)** — count unchanged in 4 days; ratio improved from 44.9% on May 11 purely because watchlist grew with future-dated WC adds. **Next aging events: Inter Miami v Portland and Bruno Mars Soldier Field nights 1+2 (all May 17, 2 days out — aged on May 18).**
- Favorites: 0
- Active alerts: 0

**Empty-watchlist cohort: 30 of 79 users (38.0%).** Estimated from `/api/admin/watchlist?limit=200` (47 unique user_emails) cross-referenced against `/api/admin/stats` (79 users). **Vlanza and pattyglvz are both 0/Day-0 non-activators; c_calingasan also has no watchlist items yet. The +5 signups since May 11 produced 2 multi-add power users (karin_ef1 WC×2, kevinshall87 WC×5+1 Matt Rife = 6 adds) and 3 zero-add non-activators (vlanza, pattyglvz, c_calingasan).** The bimodal activation curve from Agent 7 (gmail/hotmail 2/2 activate, msn/yahoo/sbcglobal 0/3) is showing up in the empty-watchlist composition too.

User signup pace: **1 today, 10 in current week (will tick to 6-9 tomorrow as the May 8 cluster rolls out).** Agent 7 confirms inverse-cohort hypothesis crossed the 61.5% threshold today: lifetime activation rate is now 60.76%.

---

## Multi-Threshold Drift — Phase Change Today

The May 11 forecast of "4+ multi-threshold drift cases by May 15" undershot. **Today's confirmed count is 6 named users, with 4 net-new joining the class in a single 24h window.**

| User | Tenure | Silent thresholds crossed (this outage) | Watchlist | Drift class |
|------|--------|------------------------------------------|-----------|-------------|
| **mark.murdock** | 22d | E1+E2+E3+**E4 today** | empty | **4-threshold (front-to-mid)** |
| **dr.altvater** | ~24d | E1+E2+E3+E4 (May 12, invisible) | empty | **4-threshold, INVISIBLE behind API cap** |
| joshdguillemette | 26d | E3+E4 | AEW Double or Nothing | 2-threshold (mid) |
| **joseph.g.nicolosi** | 10d | E1+E2 | empty | 2-threshold (front) |
| **emmacmather** | 6d | E1+E2 (E2 today) | empty | **2-threshold (front, NEW today)** |
| **kevinkid94** | 6d | E1+E2 (E2 today) | empty | **2-threshold (front, NEW today)** |
| **jfgalzin** | 6d | E1+E2 (E2 today) | empty | **2-threshold (front, NEW today)** |
| **liambot62** | 6d | E1 (Pattern C1)+E2 today | Toronto FC PAST | **Pattern C × multi-threshold (NEW class)** |
| lilianamasyrubi | 17d | E1+E2+E3 | empty | 3-threshold (front-to-mid) |
| zhili1208 | 16d | E1+E2+E3 | (need to verify add) | 3-threshold |
| taranimeramaro | 19d | E1+E2+E3 | Bruno Mars MetLife ×3 | 3-threshold (tactical-fit) |
| nmcnamee99 | 19d | E1+E2+E3 | Raptors past | 3-threshold (Pattern A overlap) |

**Key observations:**
1. **2-threshold cases at the front of funnel went from 2 (May 11) to 5 today.** Pattern B-at-E2 is becoming the modal new-user experience.
2. **3-threshold cases went from 0 (May 11) to 4 today.** Lilianamasyrubi crossed E3 May 12 as forecast; zhili1208, taranimeramaro, nmcnamee99 are inferred from tenure since they're visible at 16-19d.
3. **4-threshold cases went from 0 (May 11) to 2 today.** Mark.murdock crossed E4 overnight; dr.altvater crossed E4 on May 12 (invisible).
4. **Pattern C × multi-threshold (NEW class):** liambot62 is the first user whose tracked event is in the past AND who has drifted through two silent thresholds. The C1 post-event template now needs a multi-threshold variant — distinct from canonical multi-threshold apology and from canonical C1.

**Template inventory needed for safe restart grew from 4 shapes (May 11) to 6 shapes today:**
1. Canonical single-skip apology (cjthomas2557 shape, 1d-late)
2. Pattern B multi-threshold at front (joseph.g.nicolosi + emmacmather + kevinkid94 + jfgalzin shape)
3. Multi-threshold at mid (joshdguillemette E3+E4 shape)
4. Multi-threshold at deep (lilianamasyrubi 3-threshold shape)
5. **4-threshold pre-traversal (mark.murdock + dr.altvater shape, NEW)** — distinct because every send opportunity prior has been silently lost; the user has been silent for 22-24 days yet hasn't quite hit E5
6. **Pattern C × multi-threshold (liambot62 shape, NEW)** — post-event recovery PLUS multi-threshold acknowledgment in a single send
7. Full-traversal apology (blubberboi + goldy.pec.2012 shape) — held from May 11

**Forecast for next 7 days:**
- **May 16:** Emmacmather, kevinkid94, liambot62, jfgalzin's E2 silent advances become 1 day stale; jadbennis0 crosses E2 silent at 10d post-signup (currently 9d, was 7d on May 11... wait, sign-up May 5 → today 10d → E2 already crossed silent ~May 12. Confirming: jadbennis0 is also a 2-threshold case as of May 12).
- **May 17:** konman87 Bruno Mars Soldier Field night 1 is **TOMORROW**. jadbennis0 Inter Miami v Portland is **2 days out**. Both pre-event windows close inside the report window. **Last 48h of intercept window for either.**
- **May 18:** joseph.g.nicolosi crosses E3 silent at 14d → 3-threshold case (front-to-mid trajectory). Three May-17 events all age into past-event pollution simultaneously — past-event count jumps from 40 to 43.
- **May 19-20:** joshdguillemette crosses E5 silent at 30d → becomes **second confirmed full-traversal silent send** (joining blubberboi from May 10).
- **By May 22:** if SMTP stays down, 4 additional users cross into 3-threshold or higher class (zhili1208 → E4, lilianamasyrubi → E4, dr.altvater → E5, mark.murdock → E5). **All four would push the deepest silent-traversal count from 0 (May 10) to ≥2 by next week.**

---

## Pattern C — Now Multi-Threshold

| User | Lead time | Event | Outcome | Silent thresholds |
|------|-----------|-------|---------|-------------------|
| sparkitrightthere | same-day (May 7) | Mac DeMarco | event passed May 7 | E1 (Pattern C1), E2 today |
| **liambot62** | **<24h (May 8 → May 9)** | **Toronto FC v Inter Miami CF** | **event passed May 9** | **E1 (Pattern C1) + E2 today — FIRST C × multi-threshold** |

**Pattern C cumulative loss: 2 of 9 most-recent signups (22%)** — held stable for 4 consecutive reporting cycles. **NEW today:** both Pattern C users have now silently advanced two thresholds without any send. The C1 post-event recovery template needs a multi-threshold variant for both. Content available: "your event was X days ago — here's the price-history retrospective, 3 similar events to track next, and an honest acknowledgment that we've been silent on two scheduled touchpoints."

---

## Conversion Losses — Cumulative Update

No net change in named-user loss count since May 11. The 5 new signups since May 11 produced 3 new Pattern B candidates (vlanza, pattyglvz, c_calingasan — all empty watchlist) but these are too fresh to classify as losses yet.

| User | Days on platform | Items lost | Pattern |
|------|-----|---|---|
| tate.sheppard | 62 | 1 (Florence) | A — single high-intent |
| ajvanprooyen | 22 | 6 of 6 (full Cubs cluster) | A+ — multi-event cluster |
| goldy.pec.2012 | 35 | 1 (Bilmuri Madison) | A + full-traversal silent E5 |
| 2510soccerboy | (Apr 25 event, 20d post) | 1 (Viva El Jaripeo) | A — recovery survey **18d overdue** |
| sparkitrightthere | 7 | 1 (Mac DeMarco) | C + 2-threshold silent |
| liambot62 | 6 | 1 (Toronto FC) | C × multi-threshold — **NEW class** |

**Cumulative tally: 6 users / 11 events lost.** Stable. **Watch for May 17 → May 18 transition:** Inter Miami v Portland (jadbennis0) and Bruno Mars Soldier Field nights 1+2 (konman87) all age into past-event tomorrow night. If those go silent through their event dates, the loss count jumps to **9 users / 14 events** in a single 24h window (3 more events, 1 more named user — jadbennis0 has only that single watchlist item).

---

## Empty-Watchlist Cohort — Drift Acceleration

Cohort holds at **30 of 79 users (38.0%)**. Today's drift composition:

| Tenure bucket | May 11 count | Today count | Movement |
|---------------|----|----|----|
| 0-2d (this week) | 5 | **5** | vlanza (0d), karin_ef1 was 0d→1d but added 2 WC matches so NOT empty, c_calingasan (1d), kevinshall87 (was 0d→2d but added 6 items, NOT empty), pattyglvz (was 0d→2d, still empty) → **net new empty-cohort additions: vlanza, c_calingasan, pattyglvz = +3 over 4 days; net departures: jmoriarty13 aging out** |
| 3-7d | ~3 | **~7** | **MASSIVE growth.** emmacmather, kevinkid94, liambot62 (Pattern C×B), jfgalzin, jmoriarty13 (aged from 0d), plus sparkitrightthere and natalie.sotocruz still empty. The bucket where Pattern B multi-threshold sits |
| 7-14d | ~3 | **~3** | unchanged |
| 14-30d | ~8 | **~8** | unchanged |
| 30+d | ~10 | **~10** | unchanged (still invisible) |

**The 3-7d bucket has more than doubled** as 4 May 8 signups (emmacmather, kevinkid94, liambot62, jfgalzin) aged in without adding anything to their watchlist. **This is the bucket where today's 4 silent E2 crossings happened.** The Pattern B-at-E1 + Pattern B-at-E2 template family now has at least 8 immediate addressees in this bucket alone when SMTP returns.

**Action upgrade for template design:** the Pattern B family needs to be parameterized by *threshold-of-silent-cross* AND *count of silent crosses*, not just by tenure. A user at 6d with both E1 and E2 silent (emmacmather) needs different copy than a user at 6d with only E1 silent — even though both are at 6d tenure.

---

## Watchlist Digest Prep

### TIER 0 — Last-Realistic-Intercept (within 48h)

| Event | Date | Days Out | User | Tenure | Drip Stage |
|-------|------|----------|------|--------|-----------|
| **Bruno Mars — Soldier Field night 1** | **May 16** | **TOMORROW** | konman87 | 102d | post-E5 graveyard |
| **Bruno Mars — Soldier Field night 2** | **May 17** | **2 days** | konman87 | 102d | post-E5 graveyard |
| **Inter Miami vs Portland Timbers** | **May 17** | **2 days** | jadbennis0 | 10d | E2 (crossed silent ~May 12) |

**konman87 / Soldier Field nights 1+2 — night 1 is tomorrow.** Yesterday's report-cycle framing of "last day of deepest-discount window" has now expired; today's frame is "final 48h pre-event." This is mathematically the last reporting cycle where a meaningful pre-event send is even possible — by tomorrow's daily, night 1 will already have happened. **The send shape has compressed from "tactical discount window" to "last-mile decision aid + apology."** ROI is now driven purely by whether konman87 hasn't already bought; if they have, the send is purely apology + a learning to file. If they haven't, today's send is the most valuable single email in the entire backlog plan.

**jadbennis0 / Inter Miami v Portland — 2 days out, now also a canonical 2-threshold drift case (E1 May 8 silent + E2 May 12 silent — Inter Miami is in the watchlist so this is NOT Pattern B).** The May 11 "hybrid welcome+urgency at 6 days out" framing has tightened to "decisive Tier 0 + acknowledgment of two missed sends." **Subject lines must shift accordingly:**
- Subject A (was Subject B yesterday): `Inter Miami in 2 days — and we owe you two emails. Here's the read.`
- Subject B: `2 days to Inter Miami v Portland: target-price recommendation inside`
- **Recommend A.** The apology pivot earns priority because the user is now arithmetically owed two distinct sends. Body order: data first (the 2-day decision), then explicit apology with the "we'll be back to weekly" promise, then CTA.

### TIER 1 — Mid-Window (3-21 days)

| Event | Date | Days Out | User | Tenure | Drip Stage |
|-------|------|----------|------|--------|-----------|
| Bruno Mars — Ohio Stadium | May 20 | 5 | charlesteel126 | 23d | E3+E4 silent (mid-funnel multi-threshold, **invisible**) |
| AEW Double or Nothing | May 24 | 9 | joshdguillemette | 26d | **E3+E4 silent, E5 in 4 days (forecast May 19-20)** |

**charlesteel126** is now invisible to `pendingUsers` (pushed off by newer signups) and has crossed E3 (May 6) AND E4 (~May 13) silent during this outage. **NEW class today: a mid-funnel 2-threshold case with an event 5 days away.** Subject line revises:
- Subject A: `Bruno Mars at Ohio Stadium — 5 days out, and we owe you 2 emails`
- Subject B: `Ohio Stadium / Bruno Mars: 5 days, single-digit-day pricing data, plus a real catch-up`
- **Recommend A.** The two-missed-sends acknowledgment leads because at 5 days out, the time-pressure is matched by the silent-period weight. Apology-tactical pairing.

**joshdguillemette** holds yesterday's shape (E3+E4 multi-threshold mid-funnel). At 9 days out and 4-5 days from a silent E5 traversal, this is the **last reporting cycle to send the AEW catch-up before joshdguillemette becomes a full-traversal silent case alongside blubberboi.** Subject line shifts mildly to reflect compression:
- Subject A: `AEW Double or Nothing — 9 days out, here's the read and a real apology`
- Subject B: `3 missed-send threshold for AEW — let's not let it become 4`
- **Recommend A.** Carry from May 11. The "3 missed" framing in B is too inside-baseball; the apology in A absorbs it cleanly.

### TIER 2 — Long-Lead Canonical (E3-fit, 30+ day events)

| Event | Date | Days Out | User | Tenure | Drip Stage |
|-------|------|----------|------|--------|-----------|
| Bruno Mars MetLife ×3 | Aug 21/22/25 | 98-102 | taranimeramaro | 19d | E3 silent (3-threshold) |
| Noah Kahan — Kia Center | Jun 12 | 28 | cjthomas2557 | 7d | **E1+E2 silent (2-threshold, NEW today)** |
| World Cup Lincoln Financial ×4 | Jun 14 - Jul 4 | 30-50 | pete.uzelac77 | 35d | E5 invisible, full-traversal candidate |
| **World Cup AT&T Stadium ×5** | **Jun 14 - Jul 14** | **30-60** | **kevinshall87** | **2d** | **Pre-E1, 6-add power user, fastest activation in reporting history** |
| **World Cup BC Place ×2** | **Jun 24, Jul 7** | **40-53** | **karin_ef1** | **1d** | **Pre-E1, 2-add in 49sec (Canada vertical first instance)** |
| Ed Sheeran — SoFi Stadium | Aug 8 | 85 | blubberboi | 36d | **E5 traversal completed (full-traversal apology test case)** |

**cjthomas2557 — Noah Kahan / Kia Center** was a 1-day-late E1 on May 11 with the "apology earns priority" subject. **The user is now also a silent E2 case** (signed up May 7 22:49 → E2 due May 14 22:49, crossed silent ~11h ago). The shape upgrades from single-day apology to 2-threshold catch-up. Subject revises:
- Subject A: `Noah Kahan / Kia Center — 28 days out, and we owe you 2 sends, sorry`
- Subject B: `2 missed emails + Noah Kahan in 28 days: catching you up properly`
- **Recommend A.** The single-event canonical still leads with the event; the apology weight stays in the trailing clause.

**kevinshall87 and karin_ef1 — the two new WC multi-add power users from this 4-day window.** Per Agent 7, this validates the WC stadium strategy at n=2 across two host countries. These are pre-E1 (2d and 1d respectively); they aren't drift cases yet, but they're the highest-ROI canonical Day-3 candidates in the entire pending queue. **Subject line drafts for when SMTP returns:**
- kevinshall87 (5 AT&T matches + 1 Matt Rife): `5 World Cup matches + 1 Matt Rife show — here's how to track them properly`. Recommend over generic "Welcome" because the user signaled multi-event power-user intent in <2 minutes of session time.
- karin_ef1 (2 BC Place matches, 49sec multi-add): `BC Place ×2: the WC pricing read for both matches you're tracking`. Recommend over generic.

**blubberboi** — E5 full-traversal silent case from May 10 holds. Subject line carries from May 11: `Ed Sheeran is 85 days away. We owe you 5 emails. Here's the one that actually matters.` (Note: 89 → 85 days — minor numeric refresh.) **This remains the apology test case for the entire backlog plan.**

### TIER 3 — Pattern B / Empty-Watchlist Variants (cohort = 30)

Send shape splits by **count of silent thresholds crossed during outage** (refinement of yesterday's threshold-of-first-fire split):

- **Pattern B 0-cross (vlanza, pattyglvz, c_calingasan, karin_ef1, kevinshall87 if no further activity):** Pre-E1 send within 24h of registration. "What should we track for you?" + 3 trending events. **The trending events should be parameterized by signup-source vertical when available (WC users get WC trending; concert-add users get concerts).**
- **Pattern B 1-cross at E1 (jmoriarty13, sparkitrightthere, natalie.sotocruz):** Welcome + light apology + "what should we track for you?" + 3 trending events. Single-skip acknowledgment.
- **Pattern B 2-cross at E2 (joseph.g.nicolosi, emmacmather, kevinkid94, liambot62, jfgalzin):** "It's been a week — and we've been quieter than we should have been. Here are 3 events trending right now and an honest answer to 'why no email?'" Time-anchor leads; the two-skip acknowledgment is in the body.
- **Pattern B 3-cross at E3 (lilianamasyrubi, plus inferred zhili1208 if empty-watchlist):** "Two weeks in, three silent touchpoints from us. Here's a reset." Apology weight increases at the third skip; trending events stay tactical.
- **Pattern B 4-cross at E4 (mark.murdock TODAY, dr.altvater TOMORROW becomes 4-cross visible):** "Three weeks, four missed emails, here's the unvarnished truth: we've been broken. Here's what TicketScan looks like when it works (3 trends, 3 drops) and what your next move is." Re-engagement disguised as tactical. **NEW class today.**
- **Pattern B at 30+d (~10 invisible users):** Sunset path with one tactical hook. ROI score before drafting (Agent 7).

### TIER 4 — Apology / Catch-Up (>21d silent backlog)

- **blubberboi** — full-traversal silent (E1-E5 all skipped), Ed Sheeran SoFi 85 days out. Test case for full-traversal apology.
- **goldy.pec.2012** — likely full-traversal silent, Bilmuri past (13 days post-event). Pure apology + sunset path; no tactical content.
- **pete.uzelac77** — E5 silent (~35d), WC Lincoln Financial ×4 cluster (30-50 days out). **Highest-value full-traversal candidate** — 4 future-dated tactical events sitting alongside a fully-silent send history.
- **bhaygood728** — E5 silent (~42d), Cardi B past. Apology-only sunset path.
- **laye.aurelien** — E5 silent (~43d), Shakira ×2 (Jul 20-23, **66-69 days out — still Tier 2 fit**). **Holds as highest-leverage tactical-fit graveyard recovery in the cohort for the fourth consecutive reporting cycle.**
- **nicklib253** — E4 silent (~27d). Phillies-Braves past. Apology-only.
- **dr.altvater, awwhittington, ggri73** — empty-watchlist deep cohort (~22-25d). Pattern B 4-cross template family.

---

## Subject Line A/B Tests (Today's Active Drafts)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **konman87 / Soldier Field night 1 TOMORROW** | `Soldier Field tomorrow — last-mile read on Bruno Mars night 1` | `Bruno Mars at Soldier Field tomorrow: here's the read (and a real apology for the silence)` | **B** — apology earns priority because the event is tomorrow and we've been silent 102 days |
| **konman87 / Soldier Field night 2 (combined send)** | `Bruno Mars Soldier Field nights 1+2 — 1 and 2 days out` | `Soldier Field this weekend: nights 1+2 read, side-by-side` | A |
| **jadbennis0 / Inter Miami E2 2-threshold + Tier 0** | `Inter Miami in 2 days — and we owe you two emails. Here's the read.` | `2 days to Inter Miami v Portland: target-price recommendation inside` | **A** *(SHIFT from yesterday — apology weight overtakes pure tactical at 2-threshold)* |
| **cjthomas2557 / Noah Kahan E1+E2 2-threshold** | `Noah Kahan / Kia Center — 28 days out, and we owe you 2 sends, sorry` | `2 missed emails + Noah Kahan in 28 days: catching you up properly` | **A** *(NEW — upgrade from May 11 single-day-late shape)* |
| **charlesteel126 / Bruno Mars Columbus E3+E4 2-threshold** | `Bruno Mars at Ohio Stadium — 5 days out, and we owe you 2 emails` | `Ohio Stadium / Bruno Mars: 5 days, single-digit pricing data, plus a real catch-up` | **A** *(NEW today — upgraded from yesterday's E3-only shape)* |
| joshdguillemette / AEW E3+E4 multi-threshold | `AEW Double or Nothing — 9 days out, here's the read and a real apology` | `3 missed-send threshold for AEW — let's not let it become 4` | A |
| taranimeramaro / Bruno Mars MetLife ×3 E3 (3-threshold) | `3 Bruno Mars dates at MetLife — pricing read across same-week shows, plus an apology` | `MetLife ×3 + 3 missed sends: a real catch-up on the cluster you're tracking` | A |
| **kevinshall87 / WC AT&T ×5 + Matt Rife pre-E1** | `5 World Cup matches + 1 Matt Rife show — here's how to track them properly` | `Welcome — your AT&T Stadium cluster pricing primer` | **A** *(NEW today — multi-add intent earns specificity)* |
| **karin_ef1 / WC BC Place ×2 pre-E1** | `BC Place ×2: the WC pricing read for both matches you're tracking` | `Welcome — your World Cup tracking primer for Canada` | **A** *(NEW today — Canada vertical first instance)* |
| Pattern B 0-cross (vlanza, pattyglvz, c_calingasan pre-E1) | `Welcome to TicketScan — what should we track for you?` | `Welcome — 97 events tracked across our community right now, here are 3 trending` | A |
| Pattern B 1-cross (jmoriarty13, sparkitrightthere, natalie.sotocruz) | `Welcome — and apologies, we've been quieter than planned. What should we track for you?` | `1 missed send + 3 trending events on TicketScan` | A |
| **Pattern B 2-cross at E2 (joseph.g.nicolosi, emmacmather, kevinkid94, liambot62, jfgalzin) NEW today** | `It's been a week — we've been quieter than we should have been. Here are 3 events worth tracking right now.` | `2 missed emails + 3 events trending — let's reset` | **A** *(NEW shape — time-anchor leads when 2 sends were missed)* |
| Pattern B 3-cross at E3 (lilianamasyrubi + inferred others) | `Two weeks in, three silent touchpoints from us — here's a reset` | `3 missed emails + 3 trending events worth tracking right now` | A |
| **Pattern B 4-cross at E4 (mark.murdock TODAY, dr.altvater NEW today)** | `Three weeks, four missed emails, here's the unvarnished truth: we've been broken. Here's what TicketScan looks like when it works.` | `21 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(NEW shape — value-density + radical transparency)* |
| **Pattern C × multi-threshold (liambot62 NEW today)** | `Your Toronto FC match was 6 days ago — and we owe you two emails about it. Here's both.` | `We failed you 6 days ago — here's how to make it right, and what to track next` | **A** *(NEW class — past-event acknowledgment leads, multi-threshold apology in body)* |
| Pattern C1 single-threshold (sparkitrightthere) | `Your Mac DeMarco show was 8 days ago — here's what we'd do next` | `Mac DeMarco was 8 days ago — let's get the next show right` | A |
| **Catch-up apology blubberboi (E5 full-traversal — TEST CASE)** | `Ed Sheeran is 85 days away. We owe you 5 emails. Here's the one that actually matters.` | `We owe you 5 emails. Here's the SoFi pricing read that justifies all of them.` | **A** *(carries; date refresh 89→85)* |
| **pete.uzelac77 — WC Lincoln Financial ×4 E5 graveyard** | `4 World Cup matches at Lincoln Financial + 5 missed emails — here's the cluster read` | `Lincoln Financial ×4 in 30-50 days, and we owe you a real catch-up` | **A** *(NEW today — highest-value full-traversal candidate with tactical content available)* |
| laye.aurelien Shakira E5 graveyard | `Shakira at MetLife — 66 days out and we owe you a real catch-up` | `2 Shakira dates, 66 days, and 5 missed sends from us — here's the read` | A |

**CTA conformance:** 12 of 18 use top-level routes; 6 of 18 use event-specific deep-links (justified by >14d silence, multi-event clusters, or Pattern C past-event recovery). Conformance stable; deep-link share rose from 4/14 (May 11) to 6/18 (today) because the multi-add WC users and the konman87 last-mile send both justify event-specific deep-linking.

---

## Action Items

### P0 — Critical (Day 39 of outage)

1. **SMTP/drip pipeline — Day 39.** Probe and fix sequence unchanged. **Day 39 escalation framing: today 4 users crossed E2 silent in a single 9-hour window. Mark.murdock completed a 4-threshold silent traversal. liambot62 became the first Pattern C × multi-threshold case. The structural drift class has tripled from 2 named users (May 11) to 6 named users (today), with 4 more (vlanza et al.) on track to enter the class by May 18-22.** Per Agent 7, this is part of a 4-system platform outage (SMTP, cron Day 7, alerts Day 38, price-history Day 38, GA Data API Day 38) — fixing any single channel produces partial recovery only.
2. **Konman87 / Bruno Mars Soldier Field night 1 send — DEADLINE TOMORROW.** Today is mathematically the last reporting cycle where a pre-event send is even possible. **If SMTP isn't restored in the next 24h, konman87's first event silently passes during this outage; nights 1+2 both age into past-event by May 18.** Manual send if needed — the apology+last-mile send is highest single-email ROI in the entire backlog.
3. **Pattern C real-time triage path** (carryover from May 9; **second confirmed case advanced to multi-threshold today**). Three sub-paths still defined (C1 post-event recovery, C2 24h-7d tactical, C3 canonical). C1 now needs a multi-threshold variant — distinct template.
4. **Empty-watchlist cohort (30/79 = 38.0%) — drift now multi-threshold at scale.** 5 named users in Pattern B 2-cross class today (was 1 on May 11). Forecast 8+ by May 18 if SMTP stays down. **Ship the empty-watchlist welcome send (pre-E1, fires within 24h of registration)** + Pattern B template family (0-cross through 4-cross variants). Six template shapes drafted; **still need `/api/admin/empty-watchlist-users` endpoint** to drive them.
5. **Multi-threshold apology template family (NEW today, 4 shapes needed):**
   - 2-cross at E2 (front of funnel): 5 named addressees
   - 3-cross at E3 (mid-front): 1-4 named addressees
   - **4-cross at E4 (mark.murdock + dr.altvater, NEW today): 2 named addressees**
   - **Pattern C × multi-threshold (liambot62, NEW today): 1 named addressee**
6. **Front-of-queue tactical sends when SMTP returns (ROI-ranked, Day 39 priority order):**
   1. **konman87** — Bruno Mars Soldier Field night 1 TOMORROW. **Hard deadline tonight.**
   2. **jadbennis0** — Inter Miami v Portland 2 days out, now also 2-threshold drift.
   3. **kevinshall87** — pre-E1, 6-event multi-add WC power user, highest-value canonical Day-3 candidate.
   4. **karin_ef1** — pre-E1, 2-event WC BC Place power user, Canada vertical first instance.
   5. **cjthomas2557** — Noah Kahan E1+E2 silent (2-threshold front).
   6. **charlesteel126** — Bruno Mars Columbus 5 days out, E3+E4 silent (2-threshold mid).
   7. **taranimeramaro** — Bruno Mars MetLife ×3 E3 silent (3-threshold tactical-fit).
   8. **joshdguillemette** — AEW 9 days out, E3+E4 silent, **E5 in 4 days**.
   9. **mark.murdock** — 4-cross test case.
   10. **liambot62** — Pattern C × multi-threshold test case.
   11. **blubberboi** — full-traversal apology test case.
   12. **pete.uzelac77** — full-traversal + WC ×4 cluster.
7. **`drip-health` endpoint** still not built (P0 since May 7). Specification unchanged.

### P1 — High

8. **API cap is structurally hiding the deepest backlog (Day 9 of regression).** ~11 users now hidden (was ~8 on May 11). Each new signup pushes one more deep-tenure user invisible. **Pagination ships or the visible queue eventually becomes a rolling 20-user window of the freshest cohort while the 30+d full-traversal users disappear entirely.**
9. **Past-event watchlist auto-archive (40/97 = 41.2%, ratio improved purely on new WC adds).** Same fix as May 1. **Auto-archive prompt would address jadbennis0 + konman87 on May 18 when their May 17 events age out** — a same-day re-engagement opportunity that converts 3 fresh past-event entries into 3 "what next?" prompts.
10. **Target-price UX (Day 108, 97/97 null, including all 8 new WC adds).** Auto-suggest at 10% below current min on watchlist-add. **WC adds are now the strongest activation lane on the platform per Agent 7 — same lane that's 100% null on target_price. Highest single-feature leverage available.**
11. **Velocity correlation (Day 9 unaddressed).** Per Agent 7, lifetime activation rate dropped through the 61.5% threshold today (now 60.76%). The 5 signups in the May 11-15 window split 2 multi-add power users / 3 zero-add non-activators — bimodal curve sharpening. **Domain-based activation split now n=5 deterministic: gmail/hotmail 2/2 activate; msn/yahoo/sbcglobal 0/3.** Strongest single predictor in the dataset to date; ship attribution by signup-source.
12. **Newsletter cross-pollination (Day 10 of zero-capture).** 5 user signups in 4 days produced 0 newsletter signups. **Karin_ef1 added 2 WC matches in 49 seconds and didn't subscribe** — if a 2-add-in-49sec power user can't be cross-pollinated, the conversion path is gated entirely. Post-registration default-opt-in checkbox.
13. **Backlog catch-up plan when SMTP returns (priority by class):**
    1. Konman87 (tactical hard-deadline)
    2. Pre-E1 multi-add WC (kevinshall87, karin_ef1)
    3. Tier 0 2-threshold tactical (jadbennis0)
    4. 2-cross at E2 batch (5 users — emmacmather, kevinkid94, liambot62, jfgalzin, joseph.g.nicolosi)
    5. Mid-funnel 2-cross tactical (charlesteel126, joshdguillemette)
    6. 3-cross tactical (taranimeramaro)
    7. 4-cross apology (mark.murdock, dr.altvater)
    8. Pattern C × multi-threshold (liambot62)
    9. Full-traversal apology (blubberboi, goldy.pec.2012, pete.uzelac77, bhaygood, laye.aurelien)

### P2 — Medium

14. **Watchlist-digest endpoint still doesn't exist.** Day 39 blocker. Per-user digest content above can't ship without it.
15. **Save templates from May 8-15 into `marketing-agents/output/email/templates/`** once SMTP returns. **Today's net-new shapes (6 total): 2-cross at E2, 3-cross at E3, 4-cross at E4, Pattern C × multi-threshold, multi-add WC pre-E1 (kevinshall87 + karin_ef1 shape), konman87 last-mile pre-event-apology.** Template inventory at restart: 12 shapes (up from 4 on May 11 — tripled in 4 days).
16. **Viva El Jaripeo post-mortem — 18 days overdue.** Continued open content debt. No daily-scope effect.

---

## Handoff → Analytics Agent (Agent 7)

- **Subscriber total:** 3 active, 0 net change in 4 days. **103 consecutive days flat.** Day 10 of zero-capture.
- **User signups (24h):** **1** (vlanza, Day-0 non-activator). 10 in 7 days (forecast 6-9 tomorrow as May 8 cluster rolls out).
- **User signups (May 11→15):** **+5** (vlanza, karin_ef1, c_calingasan, kevinshall87, pattyglvz). Split: 2 multi-add power users (karin_ef1 WC×2, kevinshall87 WC×5+Matt Rife) + 3 zero-add non-activators (vlanza, pattyglvz, c_calingasan).
- **New watchlist items (May 11→15):** **+8.** All future-dated. 7 of 8 World Cup. Target_price null on all 8.
- **Drip pipeline:** UN-SHIPPED. Day 39. **0 sends ever.** 79/79 users never received a drip email. Backlog: 20 visible + ~11 hidden + ~10 dormant 30+d empty-watchlist ≈ **41+ user backlog**, all addressed by 12 distinct template shapes.
- **Threshold advances since May 11 (May 12 → May 15 — net 9 silent crossings):**
  - May 12: lilianamasyrubi E2→E3 silent ✓ (forecast confirmed); dr.altvater E3→E4 silent ✓ (invisible).
  - May 13: zhili1208 E2→E3 silent (forecast May 14-15, landed early).
  - May 15: **emmacmather, kevinkid94, liambot62, jfgalzin all E1→E2 silent (4 in one 24h window — largest single-day event in reporting history).** Mark.murdock E3→E4 silent.
- **Price alerts:** 0 ever triggered. **97/97 watchlist items have null target_price.** Day 108. 8 new null-target adds since May 11.
- **User growth:** 1 today, 79 total. +10 this week (will drop to 6-9 tomorrow per Agent 7).
- **Watchlist:** 97 items (+8). **3 events within 7 days** (Bruno Mars Soldier Field nights 1+2 May 16-17, Inter Miami v Portland May 17 — **all within 48 hours**). 2 events in 8-21 days (charlesteel126, joshdguillemette).
- **Past-event pollution:** 40/97 (41.2%), unchanged in absolute count. Next aging jump May 18 (Inter Miami + Bruno Mars Soldier Field ×2 = +3 → 43).
- **Pattern C cumulative:** 2 of 9 most-recent signups (22%), held for 5 reporting cycles. **liambot62 today became first Pattern C × multi-threshold case.**
- **Pattern B multi-threshold drift:** **6 named users** today (was 2 on May 11). Class breakdown: 2-cross n=5, 3-cross n=4 inferred, 4-cross n=2. **Forecast: 4-cross n=4+ by May 19 (joshdguillemette → E5, zhili1208 → E4, lilianamasyrubi → E4 all land in that window).**
- **Empty-watchlist cohort:** 30/79 (38.0%), +2 since May 11 (3 new empty-cohort users — vlanza, pattyglvz, c_calingasan; 1 user — jmoriarty13 — aged out of 0-2d bucket but still empty).
- **Velocity:** 5 signups in 4 days. Day-1 retention failure now generalized to multi-add (kevinshall87, the 6-add power user, Day-1 FAIL per Agent 7). **Convert-and-leave is now universal across single-add (n=4) and multi-add (n=1) activators.**
- **Email channel status:** Day 39. Un-shipped since Apr 20. **First full-traversal silent send was blubberboi (May 10). First multi-threshold silent advance was joseph.g.nicolosi (May 11). First 4-threshold silent traversal is mark.murdock (today). First Pattern C × multi-threshold is liambot62 (today). Template inventory needed for safe restart has grown from 2 shapes (Apr 20) to 4 (May 11) to 12 (today).**
- **Most useful single observation today:** **the drift class is no longer a forecast — it's the modal behavior of new signups.** Today's largest cohort of new threshold crossings was the 4 users hitting E2 silent simultaneously. Five named addressees of the Pattern B 2-cross template now exist. The template inventory required for safe restart has compounded faster than the outage duration. **Every additional day produces both new drift cases at the front of the funnel AND deepens existing cases toward 4-cross and full-traversal at the back.** This is the first reporting cycle where the system is producing more new drift cases per day than it is producing new signups per day (5 new 2-cross cases today vs 1 new signup yesterday).
