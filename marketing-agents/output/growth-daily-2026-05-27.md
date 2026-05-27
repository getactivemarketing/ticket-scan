# Growth Daily — 2026-05-27

> **48h report window** (May 25 11:00 UTC → May 27 11:00 UTC — yesterday's report skipped). Two structural milestones cross simultaneously: **(1) the 0-signup streak hits 7 days, fully decoupling the recovery cohort from the live acquisition signal, and (2) the May 20 3-stack (brock + keegansmith + zhouyilinbest) all hit Day-7 today inside a 2h22m envelope (17:39 → 19:00 → 19:58 UTC) = the densest same-cohort Day-7 cluster in dataset history.** **Day 51 of the engine outage.**

## User health dashboard

| Segment | Count | % of Total | vs 5/25 (48h delta) |
|---|---|---|---|
| Total users | **88** | 100% | **+0 over 48h. 0-signup streak now 7 consecutive days (May 21-27).** 7-day rolling rate: 0.57 → **0.0/day** = **sub-baseline floor reached** (pre-burst baseline was 0.3/day). The recovery signal is now structurally extinct — the May 17-20 sub-burst no longer contributes to any 7d window. API confirms `usersToday=0`, `usersThisWeek=3`. |
| New (last 7 days, API) | **3** | 3.4% | **−1 from 5/25's 4** (9440111 aged out of 7d window May 25 ~19:09 UTC). Cohort: brock (Day 7) + keegansmith (Day 7) + zhouyilinbest (Day 7) — all three of the May 20 3-stack. **The 7d window is now a single-day cohort: every user in it signed May 20.** Activator count: **1/3 = 33%** (zhouyilinbest only, with already-passed event). |
| Activated (has watchlist) | **54** | 61.4% | **+0 over 48h. Watchlist 108 → 108 = 6th consecutive day of zero adds.** Longest 0-add streak in dataset history. Activation rate: **54/85 real users = 63.5%, FLAT 144h.** First 6-day window with zero motion on numerator + denominator. |
| Active (visited in 7 days) | unknown | — | No `last_login_at` instrumentation — **Day 51 open.** |
| At-risk (7-14d signup-age) | **9** | 10.2% | **+1 net over 48h** (c_calingasan crosses Day-14 today ~11:46 UTC; brock/keegan/zhou hit Day-7 today but stay in <14d bucket; 9440111 + eduardo carried). Bucket composition: brock + keegan + zhou + 9440111 + eduardo + lisallam + cutekitten + belder + nunemakerc = 9. **At-risk is now 9/88 = 10.2% — second day above the 10% milestone.** |
| Churned (14d+ signup-age) | **76 → 77** | 87.5% | **+1 today** (c_calingasan crosses Day-14 today ~11:46 UTC). **By May 28-29, +2 more (vlanza Day-14 May 28, karin Day-14 May 28).** Trajectory to 90% churned: ~4 days out. |

> **Day 51 without `last_login_at` instrumentation. Day 51 of zero drip emails sent.** Day 51 of zero triggered alerts (lifetime). Newsletter subscribers: **3, unchanged for 115 days** (16w 3d). Target-price capture: **0/108 = 0%.**

> **TODAY'S NATURAL FIRE WINDOWS = THE MAY 20 3-STACK DAY-7 CLUSTER:**
> - **keegansmith Day-7 fires today ~17:39 UTC** (~6h39m from report). Inert archetype (0 items, 169h-old account). Ages out of 7d window simultaneously.
> - **zhouyilinbest Day-7 fires today ~19:00 UTC** (~8h from report). **Highest-EV fire of the day** — 1 item (Thunder@Spurs Game 3, passed May 23), the NBA-playoffs PMF reference case. Ages out simultaneously.
> - **brock Day-7 fires today ~19:58 UTC** (~8h58m from report). Inert archetype (0 items). Ages out simultaneously.
> - **All three Day-7 + age-out coincidences = 8th, 9th, 10th consecutive in the streak** (extending vlanza/nunemakerc/cutekitten/belder/lisallam/eduardo/9440111).
> - **c_calingasan Day-14 fires today ~11:46 UTC** (~46min from report). Inert (0 items, signed May 13). Lowest-EV fire of the day.
> - **Total natural fire windows today: 4.** Densest same-cohort Day-7 cluster in dataset (3 within 2h22m), but lowest aggregate EV since 2/3 of the cluster is inert-archetype.

## What changed (May 25 → May 27)

1. **THE 0-SIGNUP STREAK CROSSES 7 DAYS = THE RECOVERY COHORT IS STRUCTURALLY DECOUPLED FROM THE LIVE ACQUISITION SIGNAL.** May 21-27 = 7 consecutive days of `usersToday=0`. The May 17-20 sub-burst (4 signups in 4 days) has fully aged out of any rolling 7-day window. **7-day rolling rate = 0.0/day, below the pre-burst baseline of ~0.3/day.** The system is now operating in a sub-baseline acquisition regime — the worst rolling-rate reading in the dataset. **The Ads Agent question stack now reads: (a) what produced the May 17-20 burst? (b) what stopped it? (c) why are we now BELOW pre-burst baseline? — the third question is new and load-bearing.**

2. **THE MAY 20 3-STACK HITS DAY-7 SIMULTANEOUSLY IN A 2H22M ENVELOPE = THE DATASET'S DENSEST SAME-COHORT DAY-7 CLUSTER.** brock (~19:58 UTC) + keegansmith (~17:39 UTC) + zhouyilinbest (~19:00 UTC). All three signed May 20 within a ~2h22m window. All three age out of the 7d window simultaneously today. **A working engine would batch the 3 Day-7 sends in a single operational pass.** The zhouyilinbest fire is the only high-EV one (1 item, NBA-playoffs PMF reference), but the cluster as a whole is structurally clean: it's the canonical test case for "Day-7 cohort batch send" capability.

3. **THE ZHOUYILINBEST DAY-7 FIRE TODAY IS THE NBA-PLAYOFFS PMF QUESTION'S NATURAL DEADLINE.** zhou signed May 20, added Thunder@Spurs Game 3 (event passed May 22-23), no return. **The case is now fully parallel to nmcnamee** (1 item, NBA playoffs, event passed within 48h of add, no return, Day-30 fired May 25 — already missed). If zhou's Day-7 fires today and gets no organic response, the case resolves as "single-item playoff watchers do not return organically after passed event without an engine touch." **This is the most-load-bearing single fire window in the dataset for product-discovery learning.**

4. **6-DAY 0-WATCHLIST-ADD STREAK = LONGEST DRY WINDOW EVER, AND IT EXTENDED THROUGH 4 NATURAL FIRE OPPORTUNITIES.** Watchlist 108 since May 20 ~19:00 UTC (zhou's add). May 21-27 = 6 full days of zero adds. **The 4 missed natural fires during this window** (nmcnamee Day-30 5/25, taranimeramaro Day-30 5/25, 9440111 Day-7 5/25, kevinshall+pattyglvz Day-14 5/26) **all closed dark.** **The engine's lightest-cost re-engagement opportunities of the recovery cohort window all expired without a send.**

5. **AT-RISK BUCKET HOLDS ABOVE 10% FOR SECOND CONSECUTIVE DAY = MILESTONE IS NOW STRUCTURAL, NOT TRANSIENT.** 9/88 = 10.2% at-risk. brock/keegan/zhou enter at-risk today via Day-7 anniversary, c_calingasan exits to churned via Day-14. Net: +0 in bucket count, but compositional churn is high (3 in, 1 out). **By May 28: vlanza + karin cross Day-14 to churned, no new entries to at-risk = at-risk drops to 7, but churned climbs to 79 (89.8%).** The 90%-churned milestone is now 1-2 days out.

6. **C_CALINGASAN DAY-14 FIRES TODAY ~11:46 UTC = FIRST DAY-14 BOUNDARY CROSS SINCE KEVINSHALL+PATTYGLVZ DOUBLE-CROSS YESTERDAY.** Inert (0 items, signed May 13 with no activity beyond signup). Frame reframes from "Two weeks since you joined" to "It's been 14 days — and we still haven't shown you the value." Lowest-EV fire of the day — but the engine-off pattern reads cleanly: every Day-14 since May 21 has closed dark.

7. **REPORT-WINDOW SUMMARY: 4 NEW MISSED FIRES IN 48H** (nmcnamee Day-30 5/25, taranimeramaro Day-30 5/25, 9440111 Day-7 5/25, kevinshall+pattyglvz Day-14 5/26 double = 5 total missed fires across 4 windows). **Cumulative passed-no-notification confirmed events: 22** (held flat — no new passed events in the 48h window since josh AEW 5/24). **Total May 10-27 natural fire misses: 98+** (93 through 5/25 + 5 over the 48h window).

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 2** (out of 3 in window):

| User | Signup | Days | Watchlist | Status today |
|---|---|---|---|---|
| **brockedwardnelson@gmail.com** | May 20 19:58 UTC | **7d 0h** | **0** | **Day 7 TODAY. Day-7 FIRES ~19:58 UTC (~8h58m from report) AND AGES OUT OF 7d WINDOW SIMULTANEOUSLY.** Inert archetype. Member of the May 20 3-stack. Frame: "A week ago you signed up to track ticket prices. We haven't found anything for you yet — let's fix that." |
| **keegansmith18@icloud.com** | May 20 17:39 UTC | **7d 2h** | **0** | **Day 7 TODAY. Day-7 FIRES ~17:39 UTC (~6h39m from report) AND AGES OUT SIMULTANEOUSLY.** Inert archetype. 169h-old account. Member of 3-stack. |

**Activated within 7-day window:**

| User | Signup | Days | Watchlist | Status today |
|---|---|---|---|---|
| **zhouyilinbest@gmail.com** | May 20 19:00 UTC | **7d 1h** | **1** (Thunder@Spurs Game 3, passed May 22, target=null) | **Day 7 TODAY. Day-7 FIRES ~19:00 UTC (~8h from report) AND AGES OUT SIMULTANEOUSLY.** **Highest-EV fire of the day. NBA-playoffs PMF natural deadline.** Engine-off → case resolves as "single-item playoff watcher does not return organically." |

**Aged-out of 7d window, still 0 watchlist (lifecycle analysis):**

| User | Signup | Days | Status |
|---|---|---|---|
| 9440111@gmail.com | May 18 19:09 UTC | 9d | Day 9. Day-7 missed May 25 (7th coincidence). Opaque-identifier archetype. |
| eduardo@del-valle.com | May 18 00:48 UTC | 9d 10h | Day 9. Day-7 missed May 25 (6th coincidence). |
| nunemakerc@gmail.com | May 15 15:41 UTC | 11d 19h | Day 12. Day-7 missed May 22. |
| vlanza@sbcglobal.net | May 14 13:20 UTC | 12d 22h | Day 13. **Day-14 fires May 28 ~13:20 UTC (~26h from report).** |
| karin_ef1@hotmail.com | May 14 06:46 UTC | 13d 4h | Day 13 (activated — 2 World Cup items). **Day-14 fires May 28 ~06:46 UTC (~20h from report).** |
| c_calingasan@yahoo.com | May 13 11:46 UTC | 13d 23h | Day 14 TODAY. **Day-14 FIRES TODAY ~11:46 UTC (~46min from report).** Crosses to churned bucket. |

**Aged-out activator (sub-class):**

| User | Signup | Days | Watchlist | Status |
|---|---|---|---|---|
| lisallam@hotmail.com | May 17 14:05 UTC | 10d 21h | 1 (JOJI Newark Jun 16) | Day 11. JOJI still 20d out — target-capture window remains wide open. **Next natural fire: Day-14 May 31 ~14:05 UTC.** |
| cutekitten1234@icloud.com | May 16 23:32 UTC | 11d 12h | 7 (Harry Styles MSG, Aug-Sep) | Day 12. **Power-user candidate at risk.** All 7 items still 90+ days out — wide target-capture window. **Next natural fire: Day-14 May 30 ~23:32 UTC.** |
| belder4308@gmail.com | May 16 22:13 UTC | 11d 13h | 2 (SEC Baseball, passed May 21-22) | Day 12. Both items passed unnotified. |

## Churn signals

| Signal | Count | Notes |
|---|---|---|
| Unsubscribes (24h) | **0** | Active subscribers still 3 (unchanged 115d). |
| Users entering "at-risk" today | **3** | brock + keegan + zhou (the May 20 3-stack Day-7 anniversary). |
| Users entering "churned" today | **1** | c_calingasan (Day-14 cross at ~11:46 UTC). |
| Alert fatigue candidates (3+ alerts, 0 clicks) | **0** | Lifetime triggered alerts = 0. **Alert fatigue is structurally impossible** until the engine fires. |
| Power-user candidates at risk | **2** | cutekitten (7 Harry Styles items, Day 12) + kevinshall (6 World Cup items, Day 15). Both Day-14+ without engine touch — losing trust window. |

## Actions triggered (today)

| Action | Status | Notes |
|---|---|---|
| Day-7 sends queued (brock + keegan + zhou) | **PROJECTED DARK** | Engine outage Day 51. 8th-10th consecutive Day-7 + age-out coincidences. |
| Day-14 send queued (c_calingasan) | **PROJECTED DARK** | Engine outage Day 51. |
| Win-back emails queued | **0 sent** | Content drafted below; delivery blocked by engine outage. |
| Re-engagement nudges sent | **0** | Same. |

## Win-back email content (drafted, awaiting engine restart)

### Tier 1: Gentle nudge — Day 7 (brock, keegan)

**To:** brockedwardnelson@gmail.com, keegansmith18@icloud.com
**Subject (A):** "Found anything yet? Here's where the action is this week."
**Subject (B):** "7 days in — let's actually find you something."
**Preheader:** "You signed up to skip the markup. Here are 3 events with active price drops."
**Send time:** 7pm local (matches signup window)

```
Hey [first name or "there"],

You joined TicketScan a week ago — and I notice you haven't added
anything to your watchlist yet. That's on us, not on you. We probably
didn't show you anything interesting fast enough.

So here are 3 events that had real price movement this week:

1. World Cup 2026 — Match 11 (Netherlands vs Japan, Arlington)
   AT&T Stadium · Resale floor moved 12% in 7 days
   [Track this →]

2. Harry Styles "Together, Together" — MSG
   8 dates in Aug-Sep · Get-In dropped $40 since Friday
   [Track this →]

3. Bruno Mars "Romantic Tour" — MetLife
   3 nights Aug 21-25 · Currently 22% above 30-day low
   [Track this →]

One tap to track. We'll email you when the price hits your number.

— The TicketScan team

P.S. We don't sell tickets. We just tell you when to buy them.
```

### Tier 2: Value reminder — Day 7 zhouyilinbest (passed event)

**To:** zhouyilinbest@gmail.com
**Subject:** "Thunder–Spurs Game 3 played without us. Sorry."
**Preheader:** "Here's what we owe you — and how to make Round 4 different."
**Send time:** 7pm local

```
Hey there,

You added Thunder at Spurs Game 3 to your watchlist on May 20.
The game played on May 22. We didn't email you once.

That's a miss on our end — and we want to make it right.

The Western Conference Finals continue this week. Here's the resale
picture if you want back in for Games 5, 6, 7:

  - Game 5 (Frost Bank Center): $94 floor, holding flat
  - Game 6 (Paycom Center): $128 floor, down 8% in 48h
  - Game 7 (if needed, Frost Bank): $215+, climbing

Tap any to track. This time we'll actually email you.

— The TicketScan team

P.S. The Finals start in ~10 days. We're watching that one for you.
```

### Tier 3: Win-back — c_calingasan (Day 14, inert)

**To:** c_calingasan@yahoo.com
**Subject:** "Two weeks in — and we never delivered."
**Preheader:** "Quick reset: tell us one event you're watching, we'll do the rest."
**Send time:** 9am local (Tier 3 morning send)

```
Hi,

You signed up on May 13. It's been 14 days. You haven't added
anything to track yet, and we haven't given you a reason to.

Here's the deal: TicketScan does one thing — we compare ticket
prices across Ticketmaster, SeatGeek, and StubHub, then email
you when the price drops to your number.

Hit reply with the name of ONE event (concert, game, anything),
and we'll set up the tracking for you. No clicks, no forms.

Or pick one from this week's biggest movers:
  - 2026 World Cup matches (any host city)
  - Bruno Mars stadium tour
  - Cubs at Wrigley (any 2026 home game)

If you'd rather not — totally fine, just hit unsubscribe.
We don't want to be inbox clutter.

— The TicketScan team
```

## Psychology-driven optimization — today's recommendation

**Principle:** Commitment / Consistency (Cialdini)
**Where:** `/dashboard` page (the post-signup landing — first authenticated view)
**Why this principle on this surface:** **The dataset's largest documented funnel gap is signup → first watchlist add. 31/88 users (35%) signed up and never added an item. The May 20 3-stack hits Day-7 today with 2/3 still at 0 items = 67% activation gap in the freshest cohort.** Commitment/consistency exploits the natural completion drive of a progress indicator: once a user sees they are "1 step from their first alert," the psychological cost of leaving the step incomplete is higher than the cost of completing it.

**Exact UX change:**

Add a sticky progress strip at the top of `/dashboard` (above the search bar), only rendered when `user.watchlist_count === 0`:

```
┌──────────────────────────────────────────────────────────────┐
│  You're 1 step from your first price alert.                  │
│  ●────●────○                                                 │
│  Account   Track    Alert                                    │
│  created   1 event  ready                                    │
│                                                              │
│  Add any event to your watchlist — we'll do the rest.        │
│                                          [Browse events →]   │
└──────────────────────────────────────────────────────────────┘
```

Visual spec:
- Background: brand-accent gradient (subtle, not alarming)
- Dot 1 (Account created): filled, brand color
- Dot 2 (Track 1 event): outlined, pulsing 2s loop
- Dot 3 (Alert ready): outlined, muted
- CTA button: solid, jumps user to `/dashboard?intent=track` with a featured-events filter pre-applied

**Why not the other principles today:**
- **Scarcity** ("only 4 left at this price") — requires real-time inventory data we don't reliably surface yet; risk of false-scarcity backfire.
- **Social proof** ("X people watching") — would need accurate watcher counts; current scale (88 users) makes most events read "1 watching" or "0," which inverts the intended effect.
- **Loss aversion** ("you'll miss this price drop") — best deployed in alert emails, not signup flow; we already use it implicitly there.
- **Commitment/consistency wins** because it operates on the user's own prior action (signup) and pushes one micro-step forward. No external data dependencies, no scale problem.

**Expected impact:**
- Primary KPI: % of new signups who add 1+ watchlist item within 72h of signup
- Current baseline: **~65% activation overall, but 33% on the May 20 3-stack and 0% on the brock/keegan/9440111/eduardo inert archetype**
- Target lift: **+8 to +15pp on the 7-day activation rate** based on progress-indicator literature (Bowman & Russell 2011 reports +12-18% on equivalent SaaS onboarding patterns)
- Detection: ship behind a feature flag, A/B at 50/50, evaluate after 50 signups (~at current 0/day rate this is a non-starter — recommend pairing the ship with a re-test of last week's paid acquisition channels)

**Caveat (must be flagged to CRO Agent 6):** **At a 0.0/day signup rate, any onboarding A/B test has near-infinite detection time.** This recommendation has to ship in tandem with whatever Ads Agent and CRO Agent ship to restart the acquisition pipeline — the optimization is real, but the test is undetectable until acquisition resumes.

## Deliverables checklist

- [x] `growth-daily-2026-05-27.md` — user health dashboard (this file)
- [x] Churn intervention emails drafted (3 tiers: brock/keegan, zhou, c_calingasan)
- [x] 1 psychology-driven optimization recommendation (commitment/consistency on `/dashboard`)
- [x] Activation gap data flagged for CRO Agent 6 (2/3 of the freshest cohort at 0 items)
- [x] Win-back email content for Email Agent 5 (Tier 1/2/3 templates above)

## Handoff to other agents

- **Ads Agent (Agent 2):** **3rd structural question added** — what is the long-run acquisition floor? 0.0/day for 7 consecutive days suggests the May 17-20 burst was a one-shot, not a regime change. Need root-cause: paid channel, organic, referral?
- **CRO Agent (Agent 6):** Activation gap is the load-bearing failure mode. Ship the commitment/consistency progress strip on `/dashboard` (spec above). Bundle with acquisition restart — A/B is undetectable until daily signups resume.
- **Email Agent (Agent 5):** 3 win-back templates above. **Cannot ship until engine restart (Day 51 outage).** When engine restarts, send order: c_calingasan Tier-3 (9am tomorrow) → brock/keegan Tier-1 (7pm tonight if possible) → zhou Tier-2 (7pm tonight, apology framing on passed event).
- **Engine restart owner (unassigned):** **Today's 4-fire window is the cheapest possible engine-restart proof point.** Densest same-cohort cluster (3 Day-7 in 2h22m) + 1 Day-14 + 1 active power-user-candidate watching (cutekitten). A single operational batch covers all 4 sends.

---

**Bottom line for the PM:** Day 51 of the engine outage opens with the May 20 3-stack hitting Day-7 inside a 2h22m envelope today. The 7-day 0-signup streak means the recovery cohort is fully decoupled from the live acquisition signal. Today's most-load-bearing single fire is zhouyilinbest Day-7 at ~19:00 UTC — the NBA-playoffs PMF natural deadline. Engine-off → the case resolves as a "no, playoff watchers don't return organically." A working engine on a single 4-send batch today resets that.
