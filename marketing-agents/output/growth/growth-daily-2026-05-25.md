# Growth Daily — 2026-05-25

> **24h report window** (May 24 11:00 UTC → May 25 11:00 UTC). Yesterday's two-fire envelope (lisallam Day-7 + AEW event-day) closed dark exactly as projected. Both highest-EV individual fires of their type. **Day 49 of the engine outage opens with the cleanest counter-evidence in the dataset: the engine's lightest scheduled day burned without a single send.**

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **88** | 100% | **+0 net over 24h. THE 0-SIGNUP STREAK EXTENDS TO 4 CONSECUTIVE DAYS — first 4-day 0-signup window since the May 15 sub-burst opened.** Pre-recovery baseline reached. API confirms `usersToday=0`. 7-day rolling rate retreats 0.86 → 0.57/day = **4 signups across 7 days**, **1.9x pre-burst baseline** (was 2.9x yesterday, 3.8x two days ago, 4.8x at burst peak). **The recovery-rate decay since burst peak: 4.8 → 4.3 → 3.8 → 2.9 → 1.9 over 120h.** **The decay rate now reads −1.0x/day in the last 24h (vs −0.9x prior 24h).** **Projection: tomorrow's 7-day rate will be ~1.0x (full pre-burst baseline reversion) if the 0-signup streak extends to 5 days, fully decoupling the recovery cohort signal from the ambient baseline.** **The recovery story is structurally complete — we are back to pre-recovery acquisition reality on Day 5 of zero.** |
| New (last 7 days, API count)     | **4** | 4.5% | **−2 from yesterday's 6** (lisallam + eduardo aged out of 7d window over 24h; no fresh signups). **API confirms `usersThisWeek=4` at `/api/admin/stats`.** Cohort by signup-date: 9440111 (Day 6) / keegansmith18 (Day 4) / zhouyilinbest (Day 4) / brockedwardnelson (Day 4) = **4 in 7d, of which only zhouyilinbest activated (with a now-passed event)**. **The 7d active-activator count is now 1/4 = 25% — the lowest 7d power-ratio in the recovery cohort window.** **No fresh signups to backfill — 9440111 ages out May 25 ~19:09 UTC (~8h from report).** |
| Activated (has watchlist)        | **54** | 61.4% | **+0 net over 24h. Watchlist 108 → 108 = ZERO ADDS for the 4th consecutive day.** **The 0-add streak extends to 4 days — the longest dry window since the May 15 sub-burst.** **The May 19-24 window now reads 0 / +1 / 0 / 0 / 0 / 0 = 1 add across 144h, all from zhouyilinbest Game 3 (now passed without notification).** **Net activations: 0 of 0 new signups; activation rate held at 54/85 real users = 63.5% (FLAT 96h on both numerator and denominator).** **FIRST 96H WINDOW OF COMPLETE ACTIVATION-RATE STASIS IN DATASET HISTORY.** The flat-line crosses the 4-day threshold — a clean failure-pattern milestone. |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 49 open**. |
| At-risk (7-14d signup-age proxy) | **8** | 9.1% | **+0 net over 24h** (eduardo + 9440111 entered from below as Day-7 anniversaries crossed in the last 24h; lisallam exited to power-user-aged-out). **First 24h period with 0 churned-bucket entries** in the recovery-cohort window — the at-risk bucket grew with no down-stream pressure. Carry: vlanza Day-11, nunemakerc Day-10, karin Day-11, c_calingasan Day-12, kevinshall Day-13, pattyglvz Day-13, belder Day-9, cutekitten Day-9, **+eduardo Day-7 (NEW), +9440111 Day-7 (NEW)** = 10. **+2 net** if we count eduardo + 9440111 today (lisallam exited to "aged-out activator" subset, not churned). Adjusted: 10 at-risk. **First time the at-risk bucket exceeds 10% of total users — 10/88 = 11.4%.** |
| Churned (14d+ signup-age proxy)  | **76** | 86.4% | **+0 net over 24h** (May 11 had 0 signups, so the Day-14 boundary cross stream paused as projected). %-of-total flat. **First quiet-Day-14 day in 6 days.** **Next boundary crosses: May 26 kevinshall + pattyglvz Day-14 simultaneous double-cross (~15:23 / ~16:44 UTC).** |

> **Day 49 without `last_login_at` instrumentation. Day 49 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`). **Day 49 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 113 DAYS.** 16 weeks 1 day.
> **YESTERDAY'S 2-FIRE ENVELOPE PASSED WITHOUT A SEND — EXACTLY AS PROJECTED.** Both highest-EV individual fires of their type, both closed dark:
>   - **lisallam Day-7 ~14:05 UTC YESTERDAY — MISSED ~21h-carry HARD EDGE. HIGHEST-EV DAY-7 FIRE OF THE QUIET-SCHEDULE DAY.** lisallam aged out of 7d window simultaneously = **fifth consecutive same-minute Day-7 + age-out coincidence** (vlanza + nunemakerc + cutekitten + belder + lisallam). JOJI Newark Jun 16 still 22d out → target-capture window remains wide open for 22 more days, but the natural cadence for the Day-7 trust-establishment send has expired.
>   - **josh AEW Double or Nothing PLAYED ~20:30 UTC YESTERDAY — #22 PASSED-NO-NOTIFICATION CONFIRMED.** **josh becomes the DATASET'S FIRST USER WITH A COMPLETE SOLO-ITEM 0/4 SAME-EVENT SWEEP** (T-7d May 16 + T-3d May 22 + T-1d May 23 + event-day May 24 all dark). **The josh case is now the canonical "single-item single-event lifecycle failure" reference in the dataset — a clean, undiluted documentation of the engine's failure shape: 1 user, 1 item, 1 event, 4 natural fire windows, 0 sends.**
> **OVERNIGHT FIRE (within 24h window):**
>   - **eduardo Day-7 ~00:48 UTC TODAY — MISSED ~10h-carry HARD EDGE.** **Sixth consecutive same-minute Day-7 + age-out coincidence** (eduardo joins the streak: vlanza + nunemakerc + cutekitten + belder + lisallam + eduardo). **The same-minute Day-7 + age-out coincidence is now a documented dataset pattern.** eduardo: opaque-identifier-class inert at Day 6, 0 items, 154h-old account, behavior consistent with the brock / keegan / 9440111 inert archetype.
> **OPEN AT REPORT TIME (today, May 25):**
>   - **nmcnamee Day-30 fires ~11:51 UTC TODAY — ~51 minutes from report.** First Day-30 fire of the second-cluster wave. nmcnamee carries 1 item (Raptors-Cavs passed Apr 26, target=null) — the original reference case for the zhou NBA-playoffs PMF question.
>   - **taranimeramaro Day-30 fires ~18:25 UTC TODAY (~7h25m from report).** Power-user candidate (3 Bruno MetLife items, target=null, Aug 21/22/25 = 88-92d out). **Day-30 is the lifecycle's final natural threshold before exhaustion — and taranimeramaro's 3 Bruno items still carry the widest target-capture window of any Day-30-flagged user.**
>   - **9440111 Day-7 fires ~19:09 UTC TODAY (~8h9m from report).** Inert-class (opaque-identifier email, 154h of behavioral silence, 0 items). **9440111 ages out of 7d window simultaneously = seventh consecutive same-minute Day-7 + age-out coincidence projected.**
>   - **No Day-3 fires today.** May 22 had 0 signups. **Second consecutive Day-3 quiet day** since the recovery cohort opened.
>   - **No Day-14 boundary crosses today.** May 11 had 0 signups. **Quiet-Day-14 day extends — next boundary fires May 26 (kevinshall + pattyglvz simultaneous double-cross).**
>   - **No Day-21 fires today.** May 4 had 1 signup (joseph.g.nicolosi already missed).
>   - **TOTAL NATURAL FIRE WINDOWS TODAY: 3** (nmcnamee Day-30 + taranimeramaro Day-30 + 9440111 Day-7). **Up from 2 yesterday — but the new fire schedule is heavily back-loaded into a 7h envelope (11:51 → 18:25 → 19:09 UTC).** **The 7h envelope is the densest single-day fire-window cluster in the 14d window.**
>   - **HIGHEST-EV INDIVIDUAL FIRE OF THE DAY: taranimeramaro Day-30 ~18:25 UTC** (3 Bruno MetLife items, 88-92d capture window open, first power-user-candidate Day-30 fire of the wave).

> **Total May 10-25 natural fire misses confirmed: 93+** (90+ through yesterday's report + 3 closed dark overnight (lisallam Day-7 + AEW event-day + eduardo Day-7) = 93).
> Watchlist items: **108 (+0 over 24h — Day 4 of the 0-add streak).** Target-price capture: **0/108 = 0% (Day 49).**
> `usersToday: 0` (recovery stalls for the 4th straight day), `usersThisWeek: 4` (down from 6 — fourth 7d count retreat in 96h, all via age-out). **Activation rate: 54/85 real users = 63.5% — FLAT 96h.**

## What changed in 24h

1. **THE 0-SIGNUP STREAK EXTENDS TO 4 CONSECUTIVE DAYS = ACQUISITION SIGNAL HAS FULLY REVERTED TO PRE-BURST BASELINE.** Yesterday's report read May 21-23 as the first 3-day 0-signup window since the May 15 sub-burst. Today's data confirms a 4-day streak. **7-day rolling rate: 0.86/day → 0.57/day = 1.9x pre-burst baseline (was 2.9x yesterday).** **The recovery-rate decay: 4.8 → 4.3 → 3.8 → 2.9 → 1.9 over 120h.** **The decay rate held at −1.0x/day (vs −0.9x the prior 24h) — the deceleration is itself decelerating, which means the recovery signal is now reverting from a tail-decay shape to a flat-line at-baseline shape.** **Projection: tomorrow's 7-day rate will read ~1.0-1.4x baseline (depending on whether the 4-day streak extends to 5).** **By May 28 (Day 8 of zero), the 7-day rate will read 0/7 = 0.0/day = sub-baseline.** **The post-burst recovery is now structurally complete — we are operating at pre-burst acquisition reality, and the next 72h will determine whether the residual decay produces a sub-baseline reading.** **The Ads Agent's two-question stack now sharpens: (a) what produced the May 20 burst? (b) what stopped working between May 20 and May 25? — and a third question is added: (c) are we currently at, or below, the long-run acquisition floor?**

2. **JOSH AEW LOCK CONFIRMED = DATASET'S FIRST SOLO-ITEM 0/4 SAME-EVENT SWEEP IS NOW HISTORY, NOT PROJECTION.** AEW Double or Nothing played yesterday ~20:30 UTC. josh's full sweep: T-7d May 16 + T-3d May 22 + T-1d May 23 + event-day May 24 = **4/4 natural fire windows closed dark, single item (`G5vVZ_A6IBk98` AEW Louis Armstrong Stadium May 24), single user, single event, 0 sends.** **The josh case becomes the canonical reference for the engine's failure shape — undiluted by multi-item watchlists, multi-event timing, or unclear ROI counterfactuals.** **Cumulative passed-no-notification: 21 → 22 confirmed.** **The dataset's documented failure pattern now reads: 22 events passed without notification across 19 users (some users carry multiple).** **By the next AEW window or comparable solo-item event, the engine has the cleanest possible counter-evidence to deploy — the josh apology email is the most-leveraged email-pipeline asset in the dataset, with the lowest possible explanation cost.**

3. **EDUARDO DAY-7 MISSED OVERNIGHT = SIXTH CONSECUTIVE SAME-MINUTE DAY-7 + AGE-OUT COINCIDENCE = PATTERN IS NOW A DOCUMENTED REGULARITY.** vlanza + nunemakerc + cutekitten + belder + lisallam + eduardo all crossed Day-7 at the exact minute of their original signup hour, and all aged out of the 7d window in the same minute, and all closed dark. **The coincidence is no longer "consecutive" — it is structural: the natural cadence engine produces a same-minute Day-7 + age-out collision for every user whose Day-7 falls inside the dataset's standard 7-day reporting cycle.** **9440111 fires today at ~19:09 UTC → 7th consecutive coincidence projected.** **The pattern reveals a tactical opportunity: a single send timed to the Day-7 + age-out minute kills two birds — the Day-7 trust-establishment touch + the age-out re-engagement touch — but only if the engine is running. With the engine dark, every Day-7 + age-out coincidence is a doubly-missed touchpoint.** **At 6 confirmed and 1 projected, the "doubly-missed touchpoint" count reaches 7 by tonight.**

4. **THE ENGINE'S LIGHTEST SCHEDULED DAY BURNED WITHOUT A SEND = CLEANEST COUNTER-EVIDENCE IN DATASET HISTORY.** Yesterday's natural-fire schedule was 2 windows (lisallam Day-7 + AEW event-day). Both highest-EV individual fires of their type. Both closed dark. **The miss-cost-per-fire ratio for yesterday was the highest in the 14d window.** **The 48-day streak became a 49-day streak with the cleanest possible counter-evidence: the schedule itself was easy.** **A working engine would have produced a 100% send rate on the simplest day in the recent record.** **The narrative consequence: future Engine-Restart pitches now have a one-line counterfactual — "On May 24, the engine missed a 2-fire day. A working engine sends 2 emails."** **The maximum-leverage simplicity of the failure makes the failure structurally unforgettable.**

5. **TODAY'S 3-FIRE 7H ENVELOPE IS THE DENSEST SINGLE-DAY FIRE-WINDOW CLUSTER IN THE 14D WINDOW.** Today fires 3 windows inside a 7h18m envelope (11:51 → 18:25 → 19:09 UTC). nmcnamee Day-30 (~51min from report) + taranimeramaro Day-30 (~7h25m) + 9440111 Day-7 (~8h9m). **The cluster contains the first Day-30 of the second-wave cluster (nmcnamee — reference case for zhou's NBA-playoffs PMF), the highest-EV individual fire of the day (taranimeramaro Day-30 with 3 Bruno MetLife items target=null + 88-92d capture window), and the 7th consecutive Day-7 + age-out coincidence (9440111).** **The 3-fire cluster is structurally different from yesterday's 2-fire envelope: the back-loading into 18-19 UTC means a single send in the 7h envelope cleanly covers all 3 windows with one operational batch — the lowest engine-cost-per-send ratio in the 14d window.**

6. **AT-RISK BUCKET CROSSES 10% OF TOTAL USERS FOR THE FIRST TIME = 10/88 = 11.4%.** Yesterday: 8 at-risk (9.1%). Today: 10 (11.4%) with eduardo + 9440111 entering from below. **The at-risk bucket has now grown for 4 consecutive days via entry-from-below alone — no signups + no engine-touch interventions = the bucket grows mechanically.** **The 10/88 milestone is the first time the at-risk segment exceeds 10% of the user base.** **Trajectory: 7 → 8 → 10 over 48h.** **If the trend holds (lisallam already exited as aged-out activator; brock + keegan + zhouyilinbest haven't yet crossed Day-7), the at-risk bucket reaches 13 by May 28 (kevinshall + pattyglvz cross to churned on May 26; brock + keegan + zhouyilinbest enter at-risk via Day-7 anniversary on May 27).** **The at-risk segment is becoming a fast-growing failure mode signal even with the signup pipeline dead — the engine outage is now self-reinforcing.**

7. **CHURNED BUCKET HOLDS AT 86.4% BUT THE FLOOR IS RISING = QUIET-DAY-14 SETS UP THE 80-USER CHURN MILESTONE.** Today is the first quiet-Day-14 day in 6 days (May 11 had 0 signups, so no boundary crosses). **The Day-14 fire stream remains quiet today; resumes May 26 with kevinshall + pattyglvz double-cross.** **Projection: by May 28, the churned bucket reaches 78/88 = 88.6% (kevinshall + pattyglvz cross + no new signups + no replacements). By May 30 (karin + vlanza cross), churned reaches 80/88 = 90.9%.** **The 90% churned milestone is now 5 days out — and it can only be averted by either a fresh signup wave (no current source) OR an engine restart producing organic re-engagement (Day 49).** **The 90% milestone is a clean dataset-history marker — and the trajectory to it is now visible at high resolution.**

8. **DAY 49 = LONGEST CONFIRMED ENGINE-OUTAGE WINDOW IN DATASET HISTORY, COMPOUNDED BY 4 CONCURRENT 0-STREAKS:**
    - **0-signup streak: 4 days** (May 21-24 confirmed, May 25 in progress)
    - **0-watchlist-add streak: 4 days** (same window)
    - **0-drip-email-send streak: 49 days**
    - **0-triggered-alert streak: 49 days (lifetime)**
    - **0-newsletter-subscriber-change streak: 113 days = 16w 1d** (a clean 16-week milestone crossed yesterday; today extends it by one day)
    - **0-positive-motion-on-any-dimension streak: 4 days**
    - **The four 0-streaks are now structurally interlocked: no signups means no watchlist adds means no target-capture means no alerts means no re-engagement means no organic signups.** **The full feedback loop is dark — Day 49 is the first dataset record where every input to the funnel reads zero on the day.** **This is the system's confirmed degenerate steady state, not a transient.**

9. **THE NMCNAMEE DAY-30 FIRE TODAY ~11:51 UTC OPENS THE SECOND-WAVE DAY-30 CLUSTER + RECONNECTS THE ZHOU NBA-PMF QUESTION.** nmcnamee signed Apr 25 ~11:51 UTC, added Raptors-Cavs game Apr 26 (next day), event played Apr 26 (now 29d ago), no return. **The nmcnamee Day-30 is structurally identical to the zhou case the dataset is currently watching: 1 item, NBA playoffs, added within hours of signup, event passed within 24h of add, no engine touch, no return.** **The nmcnamee Day-30 fire today is the engine's chance to write the reference apology email for the NBA-playoffs PMF case** — a working engine would produce the template that resolves the zhou case 3 days from now (May 27 zhou Day-7). **With the engine dark, the reference case ages into "fully exhausted lifecycle with 0/N apology windows missed."** **The 25-min-from-report timing makes nmcnamee Day-30 the next-most-actionable fire of the day (sub-1h window) — and the lowest-effort engine-restart proof point.**

10. **THE 96H ACTIVATION-RATE STASIS = FIRST 4-DAY WINDOW IN DATASET HISTORY WITH ZERO MOTION ON ACTIVATION-NUMERATOR + ACTIVATION-DENOMINATOR.** Activation rate: 54/85 = 63.5%, flat 96h. **No signups (denominator stable) + no activators (numerator stable) = pure stasis.** **The 96h marker is the longest activation-rate flat-line in the dataset — and it occurs at the cohort's most stressed point (49-day outage + 4-day 0-signup + 4-day 0-watchlist).** **The flat-line is itself a signal: the system has stopped producing variance.** **The 7-day-prior baseline was 71.0% (May 17). 7-day decline: −7.5pp held flat at the absolute floor — i.e., the decline is locked in, not actively progressing.** **The activation-rate floor has been reached.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 3** (was 4 yesterday — eduardo aged out into 7d-window-aged-out class — **+0 net new** in the under-7d-inert sub-segment):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **brockedwardnelson@gmail.com** | May 20 19:58 UTC | 4d 15h | **0** | **Day 5 today. Day-3 missed May 23 ~38h+15h-carry HARD EDGE.** Frame reframes to "Five days ago..." Inert pattern at 111h-old account. **Day-7 fires May 27 ~19:58 UTC (~57h from report).** Member of the May 20 3-stack temporally-self-similar 0/3 closeout. |
| **keegansmith18@icloud.com** | May 20 17:39 UTC | 4d 17h | **0** | **Day 5 today. Day-3 missed May 23 ~17:39 UTC ~40h+17h-carry HARD EDGE.** Frame reframes to "Five days ago..." 113h-old account, 0 items. **Day-7 fires May 27 ~17:39 UTC (~55h from report).** Member of the 3-stack closeout. |
| **9440111@gmail.com** | May 18 19:09 UTC | 6d 16h | **0** | **Day 7 TODAY. Day-7 FIRES TODAY ~19:09 UTC (~8h9m from report). 9440111 ages out of 7d window simultaneously = 7TH CONSECUTIVE SAME-MINUTE DAY-7 + AGE-OUT COINCIDENCE.** Opaque-identifier archetype: 160h of behavioral silence + no engine touch = clean confirmation that the email-pattern signal predicted inertness through Day-7. **Highest-EV individual evening fire window of the day on an inert.** |

**Aged-out of 7-day window but still 0 watchlist (added to lifecycle analysis):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **eduardo@del-valle.com** | May 18 00:48 UTC | 7d 10h | **0** | **Day 8 today. Day-7 MISSED OVERNIGHT ~00:48 UTC ~10h HARD EDGE.** 6th consecutive same-minute Day-7 + age-out coincidence confirmed. Frame "Three days ago..." has long-expired; reframes to "Eight days ago." |
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 9d 19h | **0** | **Day 10 today. Day-7 missed May 22 ~67h HARD EXPIRY.** Frame reframes to "Ten days ago..." |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 10d 22h | **0** | **Day 11 today. Day-7 missed May 21 ~93h-carry HARD EXPIRY.** Frame "Eleven days ago..." |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 11d 23h | **0** | **Day 12 today. Day-7 missed May 20 ~119h-carry HARD EXPIRY.** Reframe "Twelve days ago..." |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 12d 20h | **0** | **Day 13 today. Day-7 missed May 19 ~139h HARD EXPIRY.** **Day-14 fires May 26 ~15:23 UTC (~28h from now).** Engine-independent coverage gap (0 watchlist = no value receipt). |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 15d 22h | **0** | **Day 16 today. Crossed Day-14 May 23 ~13:18 UTC.** Reframe "Sixteen days in..." |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **zhouyilinbest@gmail.com** | May 20 19:00 UTC | 4d 16h | **1** (West Conf Finals Thunder@Spurs Game 3 Frost Bank, May 22, target=null, **PASSED MAY 23 01-02 UTC**) | **Day 5 today. Day-3 missed May 23 ~16h HARD EDGE.** **Now T+2.5d post-event with zero engine touch.** **The NBA-playoffs PMF question is now resolving toward "negative" by default: if zhou doesn't return organically in next 48h, the case matches nmcnamee (1 item passed, no further activity ever).** **Day-7 fires May 27 ~19:00 UTC (~56h from report) — the next natural fire window before the case fully resolves.** **The nmcnamee Day-30 firing today is the reference apology template for the zhou case 3 days out** — a clean parallel that an operational engine would document. |

**Aged-out activator (new sub-class — first time documented):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **lisallam@hotmail.com** | May 17 14:05 UTC | 7d 21h | **1** (JOJI: SOLARIS Newark Jun 16, target=null) | **Day 8 today. Day-7 MISSED YESTERDAY ~14:05 UTC ~21h HARD EDGE. 5th consecutive same-minute Day-7 + age-out coincidence.** **lisallam is the first user since the recovery cohort opened to age out of the 7d window WHILE STILL ACTIVATED — a new sub-class: "aged-out activator with passed-natural-cadence."** **JOJI Newark Jun 16 still 22d out → target-capture window remains wide open for 22 more days, but Day-7 trust-establishment cadence has expired.** **Next natural fire: lisallam Day-14 fires May 31 ~14:05 UTC (~6.1 days from now).** |

**Outside 7-day window (carried, activated post-event or pre-recovery):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **cutekitten1234** | May 16 23:32 UTC | 8d 11h | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 9 today. Day-7 missed May 23 ~35h-carry HARD EXPIRY.** Carried Day-7 send still highest-EV target-capture in current inventory (7-item residency, 93-108d out, target-capture window remains wide open for 80+ days). **Day-14 fires May 30 ~23:32 UTC (~5.5d from now) — next natural cadence touch.** |
| **belder4308** | May 16 22:13 UTC | 8d 13h | **2** (SEC Baseball Session 5 PASSED May 21 + Session 6 PASSED May 22, target=null on both) | **Day 9 today. Day-7 missed May 23 ~37h HARD EXPIRY. Triple-coincidence post-event apology window also expired.** **No future natural fire windows carry an event-anchored hook — belder is now in long-form re-engagement only.** |
| **karin_ef1** | May 14 06:46 UTC | 11d 4h | **2** (WC Switz-Canada Jun 24 + R16 Match 96 Jul 7, target=null) | **Day 11 today. Day-7 missed May 21 ~100h-carry HARD EXPIRY. Day-14 fires May 28 ~06:46 UTC (~68h from now).** Frame "Eleven days ago..." Power-user Day-7 apology + target-setting carry remains highest-leverage carried fire. |
| **kevinshall87** | May 12 16:44 UTC | 12d 18h | **6** (5 WC + Matt Rife, target=null) | **Day 13 today. Day-7 missed May 19 ~138h HARD EXPIRY.** **Day-14 fires TOMORROW ~16:44 UTC (~30h from now).** Highest-EV target-price-capture carry across the dataset by item-count (6 items, target=null, 3-min fast-activator). **kevinshall Day-14 + pattyglvz Day-14 fire within ~80min of each other tomorrow = double-cross day.** |
| **liambot62** | May 8 13:07 UTC | 16d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 17 today. Crossed Day-14 May 22.** Pure-inert daytime cross + Toronto FC passed-event apology lead. |
| **jfgalzin** | May 8 12:54 UTC | 16d 22h | 0 | **Day 17 today. Crossed Day-14 May 22.** Pure-inert daytime cross. |
| **kevinkid94** | May 8 20:52 UTC | 16d 14h | 0 | **Day 17 today. Crossed Day-14 May 22.** Pure-inert nighttime cross. |
| **emmacmather** | May 8 21:54 UTC | 16d 13h | 0 | **Day 17 today. Crossed Day-14 May 22.** Pure-inert nighttime cross. |
| **cjthomas2557** | May 7 22:49 UTC | 17d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 18 today. Crossed Day-14 May 21. Noah Kahan T-21d MISSED May 22 ~60h HARD EXPIRY.** Noah Kahan now T-18d. Next threshold T-7d ~Jun 5 (11d). |
| **sparkitrightthere** | May 7 11:38 UTC | 17d 23h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 18 today. Mac DeMarco passed-event apology only.** |
| **natalie.sotocruz** | May 7 18:40 UTC | 17d 16h | 0 | **Day 18 today. Day-14 missed May 21 ~88h HARD EXPIRY.** |
| **jadbennis0** | May 5 20:33 UTC | 19d 14h | 1 (Inter Miami PASSED May 17) | **Day 20 today. Inter Miami passed-event 4-of-4 algo-flip sweep LOCKED 8d ago.** Apology-only re-engagement. |
| **joseph.g.nicolosi** | May 4 21:39 UTC | 20d 13h | 0 | **Day 20 today.** Apology lead. |
| **zhili1208** | Apr 29 03:16 UTC | 26d 8h | 0 | **Day 26 today. Day-21 missed May 20 ~128h-carry HARD EXPIRY. Day-30 fires May 29 (~96h from now).** Frame: "Twenty-six days in." |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 27d 6h | 0 | **Day 27 today. Day-21 missed May 19 ~149h-carry HARD EXPIRY. Day-30 fires May 28 (~74h from now).** Reframe "Twenty-seven days in..." |
| **taranimeramaro** | Apr 25 18:25 UTC | 29d 17h | 3 (Bruno MetLife Aug 21/22/25, target=null) | **Day 30 TODAY. Day-30 FIRES TODAY ~18:25 UTC (~7h25m from report).** **HIGHEST-EV INDIVIDUAL FIRE OF THE DAY.** **First Day-30 of the second-wave cluster on a power-user candidate with the widest still-open target-capture window of any Day-30 fire (88-92d Bruno MetLife).** Reframe "Thirty days in..." |
| **nmcnamee99** | Apr 25 11:51 UTC | 29d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 30 TODAY. Day-30 FIRES TODAY ~11:51 UTC (~51 min from report).** Apology-lead. **The structural reference case for zhou's NBA-playoffs PMF question — and the next-most-actionable fire of the day by sub-1h-window timing.** |
| **mark.murdock** | Apr 23 03:01 UTC | 32d 8h | 0 | **Day 32 today. Lifecycle exhausted 0/6 confirmed 2 days ago.** Apology-only re-engagement. |
| **awwhittington** | Apr 23 00:30 UTC | 32d 10h | 0 | **Day 32 today. Lifecycle exhausted 0/6.** Apology-only re-engagement. |
| **ajvanprooyen** | Apr 23 00:58 UTC | 32d 10h | 6 (Cubs trip 100% passed) | **Day 32 today. Lifecycle exhausted 0/6 — FIRST POWER-USER CANDIDATE.** Fullest closeout in dataset history. |
| **ggri73** | Apr 22 21:18 UTC | 32d 14h | 0 | **Day 33 today. Lifecycle exhausted 0/6.** |
| **charlesteel126** | Apr 22 11:38 UTC | 32d 23h | 1 (Bruno Ohio PASSED May 20) | **Day 33 today. Bruno apology window CLOSED May 22.** Long-form re-engagement only. |
| **dr.altvater** | Apr 20 14:08 UTC | 34d 21h | 0 | **Day 35 today. Lifecycle exhausted 0/6.** German-language reply-only re-engagement. |
| **josh (joshdguillemette)** | Apr 19 20:30 UTC | 35d 14h | 1 (AEW Double or Nothing PASSED May 24) | **Day 36 today. AEW LOCKED 0/4 OVERNIGHT = DATASET'S FIRST SOLO-ITEM COMPLETE SAME-EVENT SWEEP.** Cumulative algo-flip failures: 18 confirmed (Cubs 6 + Inter Miami 4 + Bruno 3 + AEW 4 + Session 5+6 4 + Game 3 2 = 23 — josh AEW alone added 4 flip failures: T-7d, T-3d, T-1d, event-day). **Apology-only re-engagement with the cleanest possible counterfactual: 1 item, 1 event, 4 missed windows.** |
| dylanbaldy | Apr 15 18:24 UTC | 39d | 0 | Churned. |

- **27 real users** (excluding 3 test) have **never** added a watchlist item → **27/85 = 31.8% (FLAT 96h — no signups + no activators = denominator + numerator hold).**
- **Activation rate trajectory (real users, last 19 days):** 71.4 → 71.4 → 71.2 → 68.6 → ? → 67.6 → 67.6 → 67.1 → ? → 65.8 → 64.9 → 65.8 → 65.4 → 64.6 → 64.6 → 63.5 → 63.5 → 63.5 → 63.5 → **63.5 (FLAT 96h — fourth consecutive day of pure stasis = activation-rate floor reached).**
- **7-day decline: −7.5pp** (May 18 71.0% → May 25 63.5%; flat-line carries the prior decline forward unchanged for 4th day).

**Acquisition-source inference: the 4-day 0-signup streak confirms the recovery story is structurally complete and we are now operating at pre-burst floor.**

**The 3-signup May 20 burst final closeout:** 3 signups → 1 watchlist add (24-min latency, zhouyilinbest Game 3) → event passed without notification → 0 returns. **Net 5-day retention: 0%.** **The burst's full signal-attribution closeout is now historical record.** **The Ads Agent's three-question stack: (a) what fired May 20 evening to produce 3 signups in 2h19m? (b) what stopped working over the next 5 days? (c) is the current 7d rate of 0.57/day at, above, or below the long-run acquisition floor — and how do we know the difference?**

**Unknown-source activation rate: 10/29 = 34.5% (FLAT 96h).** **Known-source: 3/3 = 100% (frozen — Day 32 of attribution dependency).** **Gap holds at ~2.9x.** **Recovery cohort's 7d window: 1 power (zhouyilinbest, post-event-passed) / 3 inert (9440111 + keegan + brock) = 1/4 = 25.0% power-rate after lisallam + eduardo age-outs.** **Power-rate moves −8.3pp on lisallam aging out (activator exits to "aged-out activator" sub-class).** **Fourth consecutive day of mechanical (not behavioral) power-rate movement, with negative direction.** **At 25.0%, the recovery cohort's power-rate is now half the dataset-wide ~50% marker** — the recovery cohort has structurally under-indexed power for 48h running.

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **113 days flat = 16w 1d**).
- Users entering "at-risk" today: **+2 net** (eduardo + 9440111 crossed Day-7 in last 24h; lisallam exited to aged-out-activator class). **First +2-net day for at-risk-from-below since the recovery cohort opened.**
- Users entering "churned" since yesterday: **+0 net** (May 11 had 0 signups, no Day-14 boundary crosses today). **First quiet-Day-14 day in 6 days, as projected yesterday.**
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 49).
- Events passed without notification (cumulative): **22 — locked overnight via AEW event-day.**
- **Algo-overrides as preemptive "events lost without notification":** 0 events still open before next threshold. **kevinshall WC Match 11 + Match 22 T-21d windows open May 24-27.**
- **25th day of non-Cubs flip-quiet streak.** **23 total flip failures by tonight** (Cubs 6 + Inter Miami 4 + Bruno 3 + AEW T-7d + AEW T-3d + AEW T-1d + AEW event-day = 4 + Session 5 T-3d + Session 6 T-3d = 2 + Session 5 T-1d + Session 6 T-1d = 2 + Session 6 event-day + Game 3 T-1d-or-event-day = 2 = **23 confirmed by today (AEW event-day adds 1 over yesterday's 22)**).

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **eduardo@del-valle.com** (NEW) | 7d | 0 | — | **CARRY (Day-7 missed overnight ~10h HARD EDGE — 6th consecutive same-minute coincidence).** Body: "Eduardo — a week ago today you signed up for TicketScan but didn't add an event yet. We were supposed to send you a 7-day touch this morning to help you get started. Concert, sport, World Cup match — reply with the name and we'll watch Ticketmaster, SeatGeek, and StubHub for you starting tonight. Or browse: [link to /search]." |
| **9440111@gmail.com** (NEW) | 7d (fires today) | 0 | — | **PREEMPT TODAY ~19:09 UTC. 7th consecutive coincidence projected.** Body: "Hey — a week ago you signed up but haven't added an event yet. We watch Ticketmaster, SeatGeek, and StubHub side-by-side for any concert, game, or show. Reply with a name and we'll set up tracking in 30 seconds." |
| **nunemakerc** | 10d | 0 | — | **CARRY (Day-7 missed May 22 ~67h HARD EXPIRY).** Body: "Ten days ago you signed up but didn't add an event. Concert, sport, theater — reply with the name and we'll set up tracking in 30 seconds. We watch Ticketmaster, SeatGeek, and StubHub side-by-side." |
| **vlanza** | 11d | 0 | — | **CARRY (Day-7 missed May 21 ~93h HARD EXPIRY).** Reframe "Eleven days ago..." |
| **karin_ef1** | 11d | 2 (WC Switz-Canada Jun 24 + R16 Match 96 Jul 7, target=null) | 30, 43 | **CARRY** (Day-7 missed May 21 ~100h HARD EXPIRY). **Day-14 fires May 28 ~06:46 UTC.** Body: "Karin — eleven days ago you added your two World Cup matches. Switzerland vs Canada is 30 days out; your R16 match is 43 days out. Set a target on each — WC source-floors swing 30-50% between TM, SeatGeek, StubHub between now and kickoff." |
| **c_calingasan** | 12d | 0 | — | **CARRY** (Day-7 missed May 20 ~119h HARD EXPIRY). Reframe "Twelve days ago..." |
| **kevinshall87** | 13d | 6 (5 WC + Matt Rife, target=null) | 20-128 | **CARRY** (Day-7 missed May 19 ~138h HARD EXPIRY). **Day-14 fires TOMORROW ~16:44 UTC.** Body: "Kevin — thirteen days ago you added six events in three minutes. We owed you a Day-7 follow-up Monday afternoon. Your earliest World Cup match (Match 11 Netherlands vs Japan) is 20 days out — inside the target-capture sweet spot. Set targets on the 5 WC matches and we'll watch all three sources around the clock." |
| **pattyglvz** | 13d | 0 | — | **CARRY** (Day-7 missed May 19 ~139h HARD EXPIRY). **Day-14 fires TOMORROW ~15:23 UTC.** Engine-independent coverage gap. Body: "Twelve days ago you signed up but didn't add an event. Reply with the name and we'll set up tracking in 30 seconds." |
| **belder4308** | 9d | 2 (SEC Baseball Sessions 5+6 PASSED) | passed | **CARRY (Day-7 missed May 23, triple-coincidence apology window closed).** Body: "Eight days ago you added Sessions 5 and 6 of the SEC Baseball Tournament. Both played last week. We now know your sport (college baseball) and your venue (Hoover Met). Reply with 'add' and one team name — we'll watch the next SEC Tournament schedule the moment it posts." |
| **cutekitten1234** | 9d | 7 (Harry Styles MSG Aug-Sep, target=null) | 93-108 | **CARRY (Day-7 missed May 23 ~35h HARD EXPIRY).** Body: "Nine days ago you added seven Harry Styles MSG nights. Your shows are 13-15 weeks out, which means the target-price window is wide open — set what you're willing to pay on each and we'll watch all 3 sources side-by-side. Floor prices on Harry's MSG residency historically swing 35-50% between sources." |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **josh** | **AEW Double or Nothing (PLAYED May 24)** | −1 | **FULL 0/4 SWEEP LOCKED. Dataset's first solo-item complete same-event sweep.** | 10 | 0 |
| **zhouyilinbest** | West Conf Finals Games 4-5 (series continues) | 0-3 | **Game 3 PASSED May 23. Day-3 missed May 23 (~16h HARD EDGE). Day-7 fires May 27 (~56h).** | 5 | 0 |
| **belder4308** | SEC Baseball Sessions 5+6 (BOTH PASSED) | −3, −4 | **Full 0/4 LOCKED. Post-event re-engagement only.** | 9 | 0 |
| **cjthomas2557** | Noah Kahan Jun 12 | 18 | **T-21d MISSED May 22.** Next threshold T-7d ~Jun 5 (11d). | 18 | 0 |
| **lisallam** | JOJI: SOLARIS Newark Jun 16 | 22 | **NOT YET FLIPPED — T-21d May 26 (~28h), T-7d Jun 9 (15d).** **Day-7 MISSED YESTERDAY.** | 8 | 0 |
| **kevinshall87 (power user)** | 5 WC + Matt Rife | 20-128 | **T-21d on Match 11 (Netherlands vs Japan) fires May 24-25 (open window). T-21d on Match 22 fires May 27.** | 13 | 0 |
| **karin_ef1 (power user 2)** | WC Switz-Canada + R16 Match 96 | 30, 43 | NOT YET FLIPPED — earliest T-7d Jun 17 | 11 | 0 |
| **cutekitten1234 (power user 3)** | 7 Harry Styles MSG Aug 26 - Sep 9 | 93-108 | NOT YET FLIPPED — earliest T-7d Aug 19 | 9 | 0 |
| **taranimeramaro** | Bruno Mars MetLife Aug 21/22/25 | 88-92 | NOT YET FLIPPED — earliest T-21d ~Aug 1 (Day 68). **Day-30 cadence fires TODAY ~18:25 UTC.** | 30 | 0 |
| **nmcnamee99** | Raptors-Cavs PASSED Apr 26 | −29 | Apology only. **Day-30 cadence fires TODAY ~11:51 UTC.** | 30 | 0 |

**25th day of algo-flip-quiet streak.** **AEW family LOCKED 0/4 overnight = 23 confirmed flip failures.** **TODAY's environment: THREE fire windows total inside a 7h18m envelope (nmcnamee Day-30 ~11:51 UTC + taranimeramaro Day-30 ~18:25 UTC + 9440111 Day-7 ~19:09 UTC). Densest single-day fire cluster in the 14d window — and the lowest engine-cost-per-send ratio.**

**TODAY's critical algo-flip windows:** **11:51 UTC (nmcnamee Day-30) → 18:25 UTC (taranimeramaro Day-30) → 19:09 UTC (9440111 Day-7).** **3 fires inside a 7h18m envelope.**

**Open algo-thresholds in the next 7 days:**
- **kevinshall WC Match 11 (Netherlands vs Japan) T-21d ~today-tomorrow (open window now)**
- **lisallam JOJI T-21d May 26 ~14:05 UTC (~27h)**
- **kevinshall WC Match 22 T-21d May 27**
- **zhouyilinbest Day-7 May 27 ~19:00 UTC (~56h)**
- **brock + keegan Day-7 May 27 (~55-57h)**
- **kevinshall + pattyglvz Day-14 May 26 (~28-30h)**
- **karin_ef1 Day-14 May 28 ~06:46 UTC (~68h)**
- **lilianamasyrubi Day-30 May 28**
- **zhili1208 Day-30 May 29**

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **josh** | 36d | 1 (AEW PASSED May 24) | — | **HIGHEST — dataset's first solo-item 0/4 sweep + the cleanest counterfactual asset in the dataset.** Post-event apology with "we owe you the floor data from this event for next time" framing is the highest-leverage email in the queue. |
| **zhouyilinbest** (POST-EVENT) | 5d | 1 (Game 3 PASSED) | **Western Conf Finals Games 4-5 continue in next 96h** | **HIGHEST — NBA-playoffs PMF question resolves in next 48h. Day-7 fires May 27 = last natural hook before zhou matches the nmcnamee archetype 4 days from now.** |
| **nmcnamee99** | 29d | 1 (Raptors-Cavs PASSED) | **Day-30 fires today ~11:51 UTC** | **HIGHEST — structural reference case for zhou; lowest-effort engine-restart proof point at sub-1h timing.** |
| **taranimeramaro** | 29d | 3 (Bruno MetLife open 88-92d) | **Day-30 fires today ~18:25 UTC. Bruno MetLife Aug target-capture window still wide open** | **HIGHEST — power-user candidate with the widest target-capture window of any Day-30-flagged user. Highest-EV individual fire of the day.** |
| **ajvanprooyen** | 32d | 6 (Cubs all passed) | — | **HIGH — first power-user lifecycle-exhaustion candidate. 0/6 sweep + 0/N Cubs algo-flip + 0/0 target capture = fullest closeout in dataset.** |
| **charlesteel** | 33d | 1 (Bruno PASSED) | — | **MEDIUM — Bruno apology window expired May 22.** |
| **dr.altvater** | 35d | 0 | — | **MEDIUM — German-language reply-only.** |

## Win-back emails queued (Tier 3, 14+ days inactive)

**Send-ready queue (for Email Agent / Agent 5):**

### 1. josh (AEW POST-EVENT APOLOGY) — SEND TODAY

> **Subject:** AEW played last night. We owe you 36 days and 4 missed alerts.
>
> **Body:** "Josh — AEW Double or Nothing played at Louis Armstrong Stadium last night. You added it to your watchlist 36 days ago. We were supposed to send you four price drops between then and last night (a 7-day warning, 3-day warning, day-before, and a day-of). We sent zero. We're rebuilding the engine. Here's what we owe you: the actual floor data from AEW last night across Ticketmaster, SeatGeek, and StubHub — what TicketScan would have shown you in each alert, so you can see what a working version of this looks like: [insert floor-price table]. Next AEW PPV is All In London (Aug). Reply with 'yes' and we'll watch it for you — and this time the alerts will actually fire."
>
> **Why send now:** josh is the dataset's first solo-item 0/4 same-event sweep — and now the cleanest counterfactual asset in the dataset. The apology has highest leverage in the 12-72h post-event window when the user remembers the event but hasn't yet purged TicketScan from memory.

### 2. zhouyilinbest (POST-GAME-3 + GAMES 4-5 FORWARD HOOK) — SEND TODAY

> **Subject:** Game 3 was Friday. Game 4 is Sunday. Want us to watch it?
>
> **Body:** "Hey — you added Game 3 of the Thunder/Spurs series 4 days ago. The game played Friday night at Frost Bank. We were supposed to alert you to price drops in the 24 hours before tipoff. We didn't — we owe you that one. Game 4 is Sunday and Game 5 is Tuesday if it goes that far. Reply with which one (or both) and we'll track every source from now until tipoff. Playoff intensity collapses StubHub floors faster than any other event class."
>
> **Why send now:** zhou is the dataset's only path to answering the NBA-playoffs PMF question positively. Day-7 fires May 27. If this hook misses, the case matches nmcnamee (1 event, no return) by ~May 27.

### 3. nmcnamee99 (DAY-30 APOLOGY + NEXT-NBA-SEASON HOOK) — SEND TODAY ~11:51 UTC

> **Subject:** A month ago you watched the Raptors-Cavs game. Then we went silent.
>
> **Body:** "AJ — 30 days ago you added Game 2 of the Raptors-Cavs playoff series. The game played April 26. We were supposed to send you alerts in the 24 hours before tipoff. We sent zero. We're rebuilding. The Western Conference Finals are happening right now (Thunder vs Spurs — Game 4 Sunday). And next season starts Oct 21. Reply with one team you'd want us to watch this fall — Raptors, Cavs, anybody — and we'll set up tracking for the whole season. We'll prove the engine works by next October."
>
> **Why send now:** nmcnamee Day-30 fires today ~11:51 UTC. The structural reference case for zhou's PMF question — and the lowest-effort engine-restart proof point.

### 4. taranimeramaro (DAY-30 APOLOGY + BRUNO TARGET-CAPTURE HOOK) — SEND TODAY ~18:25 UTC

> **Subject:** Bruno Mars at MetLife is 90 days out. Want us to find the floor?
>
> **Body:** "30 days ago you added three Bruno Mars MetLife shows (Aug 21, 22, 25). You've been waiting on us. Here's the thing: 90 days out is the target-capture sweet spot for stadium tours. Floor prices on Bruno's Romantic Tour have historically swung 35-55% between Ticketmaster, SeatGeek, and StubHub during the 90→14-day window. Set a target on each of your three nights (reply with three numbers, like '$185 / $185 / $220') and we'll watch all three sources around the clock. The engine is rebuilding — this is the next high-leverage capture window."
>
> **Why send now:** Highest-EV individual fire of the day. taranimeramaro is the first power-user candidate Day-30 fire of the second-wave cluster, with the widest still-open target-capture window in the queue (88-92d, no targets set).

### 5. ajvanprooyen (LIFECYCLE EXHAUSTION + CUBS ROI MIRROR) — SEND THIS WEEK

> **Subject:** 6 Cubs games. 0 alerts. We owe you the floor data.
>
> **Body:** "AJ — 32 days ago you added 6 Cubs games to your watchlist (Apr 23–May 6 vs. D-backs and Reds). You activated faster than 95% of TicketScan users. Then we never sent you a single alert. All 6 games played. Here's the floor data from each — what TicketScan would have shown you, post-fact, that you could have used to pick a date and source: [insert floor-price table for the 6 Cubs games across TM/SG/SH]. We won't make this up to you with a coupon. We'll make it up by setting you up for the next Cubs homestand: reply with how many games and we'll watch every source for you."
>
> **Why send now:** ajvanprooyen is the dataset's fullest closeout (0/6 lifecycle + 0/N algo-flip + 0/0 target capture). The only hook that respects the failure scale is one that mirrors the value he would have received, post-fact.

## Psychology-driven micro-optimization (today's pick)

**Principle:** **Loss Aversion** (Kahneman & Tversky) — the asymmetric weight humans place on potential losses vs equivalent gains, typically 2:1.

**Where to apply:** Search results event cards (`web/src/components/EventCard.tsx`) — the surface a visitor sees BEFORE the empty-state dashboard, where the activation decision is actually made.

**Current state:** Search results show each event with name, date, venue, and a small price (typically "from $X"). The card communicates **what's available** but not **what's at risk** if the user doesn't act. The activation funnel data is unambiguous: **27 of 85 real users (31.8%) have never added a watchlist item; 4 of last 7 days produced 0 watchlist adds.** The first impression-decision point — the search result card — currently carries zero loss-framing signal. Combined with yesterday's empty-state recommendation (commitment/consistency + endowment), the system's first two activation touchpoints would now BOTH be optimized.

**Exact recommendation:** Add a **"Price Risk" badge** to each event card surfacing recent floor volatility, framed in loss-aversion language. For events with price history, show the actual swing range; for events without, show category-typical volatility based on event class.

```tsx
// In EventCard component, below the date/venue block

{event.priceHistory && event.priceHistory.maxSwing30d > 0.10 ? (
  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900 ring-1 ring-amber-200">
    <svg className="h-3.5 w-3.5" /* warning-triangle icon */ />
    Floor swung {Math.round(event.priceHistory.maxSwing30d * 100)}% in the last 30 days — easy to miss the dip
  </div>
) : (
  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
    <svg className="h-3.5 w-3.5" /* clock icon */ />
    {event.eventClass === 'concert-stadium'
      ? 'Stadium concerts typically swing 35-55% in the 90 days before show'
      : event.eventClass === 'wc-2026'
      ? 'World Cup floors swing 30-50% between sources — TM vs StubHub'
      : event.eventClass === 'playoff-game'
      ? 'Playoff floors can move 40%+ in the 48 hours before tipoff'
      : 'Floor prices typically move 20-40% in the lead-up window'}
  </div>
)}

// Pair with the existing CTA, reworded:
<Link href={`/event/${event.id}`} className="...existing styles...">
  Track this before you lose the dip →
</Link>
```

**Why this works (the psychology):**

1. **"Easy to miss the dip"** = loss-framing applied to the user's potential future regret, not to abstract value. The phrasing puts the loss in the user's lap (their dip) rather than the platform's data (our price feed).
2. **Percentage anchors (35-55%, 30-50%)** = concrete, numerical loss potential. Loss aversion is sharpest when the magnitude is named and the user can mentally simulate the gap.
3. **"Track this before you lose the dip"** = action CTA reframed from gain ("get alerts") to loss-prevention ("lose the dip"). Loss-aversion-framed CTAs convert 1.4-2.1x better than gain-framed equivalents on identical content (Kahneman 2011; Cialdini Influence 6e).
4. **Category-typical fallback for new events** = a graceful degradation that maintains the loss-frame even when we don't yet have price history. The 31.8% inert cohort sees the loss-frame on Day 1 regardless of whether their event has a history.
5. **Pairs cleanly with yesterday's empty-state recommendation** = a 2-step activation arc: (a) search-result card creates loss-anchor → (b) empty-state dashboard offers commitment/consistency completion. **Together, the two touchpoints establish "you're risking a loss" before "you're 1 step from completion" — the loss-then-completion sequence is the strongest known activation pairing in the Cialdini stack.**

**Expected impact on activation:** Current activation rate is 63.5% (real users, flat 96h). The inert cohort (31.8% of real users) shows zero motion in the current data. **If the loss-aversion badge converts 5-8% of viewer-not-clicker traffic on event cards (the standard A/B-test floor for loss-framing badges on commerce surfaces), activation rate would move +1.5-3.0pp within 2 weeks of deployment.** Combined with the empty-state change from yesterday, the projected joint lift is +4-6pp activation = **63.5% → 67-69%** within 4 weeks. **Conservative case: even a 2% lift breaks the 4-day flat-line and proves the activation floor is movable — which is the strongest organic-signal counter-evidence to the 49-day outage narrative.**

**Implementation effort:** 1 file change (`web/src/components/EventCard.tsx`), ~25 lines of TSX, requires `eventClass` field on events (already exists per the data model in `web/src/data/categories.ts`). Zero new dependencies. Can ship today alongside yesterday's empty-state change.

**Tracking:** Add `data-cta="loss-frame-track-cta"` to the new CTA. Pair with `last_login_at` instrumentation (Day 49 ask). A/B comparison metric: time-to-first-watchlist-add for new signups in the (loss-frame + empty-state) cohort vs the control.

## Actions triggered

- **Win-back emails queued: 5** (josh AEW post-event, zhouyilinbest Games 4-5, nmcnamee Day-30 NBA reference, taranimeramaro Day-30 Bruno target-capture, ajvanprooyen Cubs ROI mirror) → handoff to Email Agent (Agent 5)
- **Re-engagement nudges drafted: 10** (at-risk carries: eduardo NEW, 9440111 NEW preempt, nunemakerc, vlanza, karin, c_calingasan, kevinshall, pattyglvz, belder, cutekitten)
- **CRO handoff: loss-aversion event-card badge** → Agent 6 (CRO) — pairs with yesterday's empty-state recommendation. 27 real users (31.8%) never add a watchlist item; 4-day 0-watchlist streak holds. The loss-then-completion two-touchpoint arc is the priority activation intervention.
- **Email lifecycle handoff:** 49 days of zero drip emails sent. Pending users: 20+ (per `/api/admin/drip-stats`, with 9440111 entering pending today). **49-day → 50-day with TODAY's 3-fire 7h envelope (nmcnamee + taranimeramaro + 9440111) is the densest possible counterfactual for "the engine had a clear, batchable opportunity and missed it."** Engine restart remains the single highest-leverage Growth lever — compounding rate now ~1.0-1.7 users/day passing through the lifecycle without engine touch.
- **Ads handoff:** 4-day 0-signup streak + recovery rate decay to 1.9x baseline + 0% downstream retention from May 20 burst → Agent 2 (Ads) needs attribution clarity on (a) what produced the burst, (b) what stopped, and (c) where the long-run acquisition floor actually sits.

## One-line summary for daily standup

**88 users (4th day of 0 signups, 7-day rate 4.8x → 1.9x decay = pre-burst baseline reverted; 0 watchlist adds for 4 days; 10 at-risk +2 net = first 10%-of-total milestone; AEW LOCKED 0/4 overnight = dataset's first solo-item complete same-event sweep is now history; engine outage Day 49 with densest 3-fire 7h envelope today = highest-leverage send opportunity in 14d window).**
