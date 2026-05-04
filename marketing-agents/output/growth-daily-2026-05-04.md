# Growth Daily -- 2026-05-04

## User health dashboard

| Segment                     | Count | % of Total | vs May 3 |
|-----------------------------|-------|------------|----------|
| Total users                 | 64    | 100%       | +0 (**fifth consecutive zero-signup day; the streak now ties the longest zero-signup run in the dataset's history (Mar 17–21 was the prior tie at 5 days). One more flat day tomorrow makes May 1–6 the new outright record.**) |
| New (last 7 days, API count) | **2** | 3.1% | +0 (window unchanged: zhili1208 + lilianamasyrubi). **Tomorrow May 5 lilianamasyrubi rolls out at 05:24 UTC → window narrows to 1, the lowest reading ever.** **May 6 zhili1208 rolls out at 03:16 UTC → window hits 0 absent intervention — the first 0 reading in the dataset's history.** |
| Activated (has watchlist)   | 44    | 68.8%      | +0 (**9th consecutive day with zero new watchlist adds — 216h cumulative; the all-time record extends by another 24h. The Mar 16–22 prior 6-day record is now 50% behind us by duration.**) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 28 open** |
| At-risk (7-14d signup-age proxy) | 7 | 10.9% | **+1 (taranimeramaro + nmcnamee99 at Day 9, mark.murdock + awwhittington + ajvanprooyen at Day 11, ggri73 + charlesteel at Day 12, dr.altvater at Day 14 today crosses out at 14:08 UTC. josh moved to churned bucket overnight at 20:30 UTC.)** |
| Churned (14d+ signup-age proxy) | 57 | 89.1% | **+1 (josh crossed Day 14 last night at 20:30 UTC — moved to churned bucket on-schedule with the May 3 forecast. dr.altvater follows at 14:08 UTC today; +1 more by end-of-day → 58.)** |

> Day 28 without `last_login_at` instrumentation. **Day 28 of zero drip emails.**
> Active alerts across **85** watchlist items: **0**. Target-price capture rate: **0% (Day 28).**
> `usersToday: 0`, `usersThisWeek: 2` — **0-signup streak now 5 days, ties prior all-time record.** Apr 26 = 2, Apr 27 = 0, Apr 28 = 1, Apr 29 = 1, Apr 30 = 0, May 1 = 0, May 2 = 0, May 3 = 0, May 4 = 0. **Tomorrow breaks the tie outright.** `usersThisWeek` held at 2 on roll-out — neither lilianamasyrubi nor zhili1208 has rolled out yet, but both do this week (lilianamasyrubi May 5 at 05:24 UTC; zhili1208 May 6 at 03:16 UTC).
> Watchlist items: **85, unchanged for the NINTH consecutive day. 216h cumulative.** No adds, no removes since taranimeramaro's third Bruno Mars entry on Apr 25 18:27 UTC. The Mar 16–22 6-day prior record is now 50% behind us by duration. **No new event has been tracked in 9 days.**
> **Activation rate held at 72.1%** for the fifth straight day (44/61 real-user activations). Five flat days hardens the floor reading to a structural reading — **72.1% is the equilibrium activation rate of the product as currently configured.** Recovery requires a known-source signup who activates, and five days have produced zero signups of any kind.

## What changed in 24h

1. **JOSH CROSSED DAY 14 AT 20:30 UTC LAST NIGHT — FORECAST HIT WITH HOUR PRECISION.** First user to cross into the 14d+ churned bucket since nicklib253 three days ago. **Day-14 forcing question drafted yesterday for an on-schedule fire did not fire** (engine outage held for the entire window). Today, josh is Day 15 in body framing terms — first day of slip on the on-schedule template. **Subject still parses ("two weeks in" tolerates Day 14 → Day 15 without edit); body needs "two weeks ago you signed up" → "two weeks and a day ago you signed up" edit** for the Day-15 send. The on-schedule Day-14 fire we forecasted yesterday is now formally Day-15-late; the second on-schedule Day-14 candidate (dr.altvater at 14:08 UTC today) becomes the only remaining shot at an on-schedule Day-14 in the entire outage window.

2. **DR.ALTVATER CROSSES DAY 14 TODAY AT 14:08 UTC — FINAL ON-SCHEDULE DAY-14 SHOT IN THE OUTAGE.** Day-14 forcing question carried since Apr 28 with daily body edits. **Today the body lands on its natural framing for the first time:** "Fourteen days, no events tracked." If engine returns by 13:00 UTC today, dr.altvater Day-14 fires on-schedule — **the first on-schedule Day-14 fire in the entire 28-day outage window.** Beyond 14:08 UTC today, the fire becomes a Day-15 send tomorrow, and the on-schedule shot is permanently lost. **This is the most time-pressured single fire in the entire 22-email queue.** German-language drip variant question still open Day 9 — Email Agent.

3. **NICKLIB DAY-17 — "TWO WEEKS AGO" FRAMING HARD-EXPIRES TODAY.** Drafted Apr 29 as Day-14 send. Carried Apr 30 + May 1 + May 2 + May 3 with daily body edits. Today the framing reaches its hard expiry: **"Two weeks and three days since the Phillies game" is the last day "two weeks ago" parses as honest.** Tomorrow the email needs a full rewrite to a Day-21 frame ("three weeks since"). **Final 24h on the original Day-14 win-back template — ship today or kill and rewrite from scratch.** This is now the second-most time-pressured fire in the queue (after dr.altvater Day-14 on-schedule).

4. **PETE.UZELAC DAY-24 — "THREE WEEKS" FRAMING HARD-EXPIRES AT NOON TODAY.** Day-21 rewrite drafted May 1 has carried 72h. Body framing today: "Three weeks since you set up six events" still reads honestly at Day 24 morning, **but starts breaking at noon Sunday** — beyond which "three weeks" reads as stale. **Hard expiry: today 12:00 EDT.** If engine returns this morning, ship before noon. Beyond noon, kill Day-21 and queue Day-30 for May 10 — adding a 6-day delay to the carry. **Third-most time-pressured fire in the queue, with a 4h shelf life.**

5. **MARK.MURDOCK + AWWHITTINGTON + AJVANPROOYEN CROSS DAY 11 TODAY.** Day-10 framing from yesterday's pivot needs "ten days into your account" → "eleven days into your account" body edit for all three. (a) mark.murdock + awwhittington remain at 0 watchlist — generic activation copy. (b) **ajvanprooyen Day-11 acknowledgment-and-recovery email needs body edit: "ten days in, six events tracked, three already passed without notification" → "eleven days in, six events tracked, four already passed without notification — and the next two pass tomorrow and Tuesday."** ajvanprooyen's case keeps getting cleaner-and-uglier in equal measure: **fourth Cubs event resolves today within ~14h (Cubs vs Reds, May 4); fifth resolves Tuesday May 5; sixth resolves Wednesday May 6.** By Wednesday morning, ajvanprooyen will have had **all 6 of his Cubs trip events resolve without a single product email**. The ajvanprooyen Day-11 send becomes the cleanest "we know we failed you" copy in the dataset's history — and the failure mode is being audited live in real time.

6. **GGRI73 + CHARLESTEEL CROSS DAY 12 TODAY — DAY-7 FAMILY OFFICIALLY DEAD.** Day-10 framing carried 48h; today is the day "Day-10" stops being honest as a Day-anchor and "Day-14 forcing question" becomes the cleaner pivot. **Decision: kill the Day-10 carry; pre-queue Day-14 forcing-question template for both, fires May 6 (ggri73) + May 6 (charlesteel) on natural Day-14 boundary.** This is the fourth pivot in the Day-7 → Day-10 → Day-14 ladder during the outage; the cadence is now well-established as a pattern.

7. **TARANIMERAMARO + NMCNAMEE99 NOW DAY 9 — DAY-7 FAMILY APPROACHES HARD EXPIRY.** Yesterday's Day-8 body edit carried; today needs second body edit ("a week and a day ago" → "a week and two days ago"). **Hard expiry tomorrow May 5 (Day 10)** — beyond which Day-7 family dies for both, same as ggri73 + charlesteel today. **48h window to ship the Day-7 framing before pivot to Day-10.**

8. **LILIANAMASYRUBI NOW DAY 6 — DAY-3 FRAMING HARD-EXPIRES TODAY.** Body absorbed "Day 3 → By Day 4 → Day 5" carry over the past 72h. **Today is the last day "first few days" framing parses as Day 3-ish; tomorrow Day 7 hits and the Day-7 family takes over cleanly.** Decision: ship today as "Day 6 with TicketScan" or accept that the Day-3 template dies overnight and pre-queue Day-7 for tomorrow morning. Given the 28-day pattern of engine non-return, **pre-queue Day-7 for May 5 morning is the realistic plan.**

9. **ZHILI1208 NOW DAY 5 — DAY-3 CARRIED 48H LATE (SECOND DAY OF SLIP).** Yesterday's "By Day 4" body edit carries one more day to "Day 5 with TicketScan" — same template lilianamasyrubi got 24h ago. **Hard expiry tomorrow Day 6, then Day-7 pivot Day 7.** Same edit-cadence as lilianamasyrubi, lagged by 24h.

10. **CUBS/REDS MAY 4 PASSES TODAY — CUMULATIVE PASSED-NO-NOTIFICATION: 10 → 11.** Fifth event in the 6-event ajvanprooyen Cubs-trip sequence resolves today. **Cumulative trajectory:** 5 (Apr 30) → 7 (May 1) → 9 (May 2) → 10 (May 3) → **11 (May 4)** → 12 (May 5) → 13 (May 6). **The 11-event cumulative crosses today** — three days from now, the entire 6-event ajvanprooyen Cubs trip will have resolved without a single product email.

11. **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED SINCE FEB 1 — 92 DAYS FLAT, EXACTLY 13 WEEKS + 1 DAY.** The 13-week milestone passed yesterday; today extends it by one more day. Form audit carried for one full quarter + 2 days — the longest open dependency in the entire growth stack continues to lengthen.

12. **FIFTH CONSECUTIVE FLIP-QUIET DAY.** No new algo-flips. Cubs/Reds May 4 passes today as already-flagged-but-flipped event; nothing new entered the override band. The next flip threshold is charlesteel Bruno Ohio May 20 hitting T-7d on **May 13 (9 days out)** and a brand-new event-flip for **josh AEW May 24 hitting T-7d on May 17 (13 days out — but josh is now churned, so the flip would create an alert with no recipient who's likely to engage)**. The 24-day quiet window on algo-flips is **5 days into it** — the longest quiet stretch since algo-flip tracking began.

13. **INSTRUMENTATION GAP: DAY 11 OF ATTRIBUTION ASK — ELEVEN-DAY STABLE BIFURCATION.** Five consecutive zero-signup days have produced zero new data points; the existing 100%/0% known-vs-unknown activation pattern remains stable. The bifurcation is now **at n=9 across 11 days of stability**, which is structurally indistinguishable from "this is the data we have to act on." **Yesterday's reading ("the empirical bar to act has been crossed") hardens today: at 11 days, the dependency is no longer "gather more data" — it is "act on the existing pattern; the pattern is not refreshing itself absent intervention."** This is the cleanest empirical signal in the dataset and remains structurally unaddressed.

14. **YESTERDAY'S 12-13 EMAIL FAN-OUT WALL DID NOT FIRE.** Engine remained down. **Day 28 of outage.** All forecast sends are now Day-14-or-deeper-late. **If engine returns today (May 4), the firing density is now ~14 emails in a 36h window** — adding dr.altvater Day-14 on-schedule today, the carried Day-15+ win-backs (josh Day-15, nicklib Day-17, pete Day-24), the Day-3/4/5/6 fresh-cohort fires (zhili1208 Day-5, lilianamasyrubi Day-6), the Day-9 pivots (taranimeramaro, nmcnamee99), the Day-11 wave (mark.murdock, awwhittington, ajvanprooyen), the Day-12 wave (ggri73, charlesteel — now Day-14 forcing question pre-queue for May 6). **Net wall growth: +0 today** (josh moves from on-schedule Day-14 to Day-15 carry, dr.altvater takes the on-schedule slot, ggri73/charlesteel pivot from Day-10 carry to Day-14 pre-queue — net swap, not addition). **Running average: +1.3 emails per day of outage** (a slight deceleration as the at-risk band fills up and pivots become reframings rather than additions).

15. **THE 28-DAY-OUTAGE PATTERN IS NOW THE BASELINE.** Every metric in the dashboard has settled to its outage-era equilibrium:
    - Total users: 64 for 5 consecutive days (zero-signup-streak ties record)
    - Watchlist items: 85 for 9 consecutive days (record, +50% beyond prior)
    - Drip emails sent: 0 for 28 consecutive days
    - Triggered alerts: 0 for the entire dataset
    - Newsletter subscribers: 3 for 92 consecutive days
    - Activation rate: 72.1% for 5 consecutive days
    - **Every flat reading in the system is now at or beyond its prior all-time record.** The system has reached structural inertness on every dimension. **The only path back to motion is engineering action — engine restart, default-effect implementation, attribution pull. No psychological, content, or social intervention can break the floor without engineering enabling at least one of the outflows.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 2** (unchanged from yesterday — 2 of 2 in-window users still inert):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 5d | 0 | Day 5 today, 03:16 UTC. **Day-3 carried 48h late** — second day of slip. Body edit "Day 5 with TicketScan." Same template lilianamasyrubi got 24h ago. Hard expiry tomorrow Day 6. |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 6d | 0 | Day 6 today, 05:24 UTC. **Day-3 carried 72h late — final day of "Day 3-ish" framing. Pre-queue Day-7 for tomorrow.** |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 11d | 0 | **Day 11 today.** Day-10 framing from yesterday → "eleven days into your account" body edit. |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 11d | 0 | **Day 11 today.** Same edit as mark.murdock. |
| ggri73@gmail.com | Apr 22 21:18 UTC | 12d | 0 | **Day 12 today — Day-10 dies; pre-queue Day-14 forcing question for May 6.** |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 14d | 0 | **Day 14 TODAY at 14:08 UTC — Day-14 forcing question fires ON-SCHEDULE if engine returns by 13:00 UTC.** First on-schedule Day-14 fire in 28-day outage. **Single most time-pressured fire in the queue.** |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 19d | 0 | Churned. No realistic intervention. Carried as anecdote. |

- **17 real users** (excluding 3 test accounts) have **never** added a watchlist item → **17 / 61 = 27.9% of real signups** (unchanged 7th consecutive day). The activation gap is **structurally locked at 27.9%** through five zero-signup days. No movement at the numerator (no one activated), no movement at the denominator (no new signups). **Five flat days at 27.9% = the equilibrium activation gap** of the product as currently configured.
- **Activation rate trajectory (real users, last 10 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → **72.1%**. **Six consecutive flat days at 72.1%.** Apr 26 spike is now 8 days old, isolated. **The activation engine has structurally settled at 72.1%** — six flat days converts the floor reading to "this is the fundamental rate of this product as currently configured." Recovery requires a known-source signup who activates — and five days have produced zero signups of any kind.

**Acquisition-source inference: eleven-day stable bifurcation today.**

The pattern: **6 in 11 days unknown** (ids 55, 57, 58, 60, 63, 64), against **3 known** (ids 59, 61, 62), all 3 of whom activated. The bifurcation (100% known activation; 0% unknown activation) carries into Day 11 of the dependency. **Five consecutive zero-signup days have produced zero new data points; the existing pattern remains.** The "wait for more data" stance officially expired yesterday at the 10-day stability bar; today is Day 11 of "act on the existing pattern." This is **the cleanest signal in the dataset** and remains structurally unaddressed — handed to Ads Agent for the third consecutive day.

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **92 days flat = 13 weeks + 1 day**)
- Users entering "at-risk" today: **0 net** (no fresh Day-7 crossings; the at-risk band is fed by the outflow from churned-incoming, which today is dr.altvater at 14:08 UTC moving from at-risk to churned)
- Users entering "churned" today: **+2** (josh crossed last night at 20:30 UTC; dr.altvater crosses today at 14:08 UTC → 57 churned by end-of-day → 58 by tomorrow morning if dr.altvater is counted)
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 28)
- Events passed without notification (cumulative): **10 today, 11 by tomorrow morning** — Cubs/Reds May 4 passes within ~14h. **Cumulative trajectory:** 5 (Apr 30) → 7 (May 1) → 9 (May 2) → 10 (May 3) → **11 (May 4)** → 12 (May 5) → 13 (May 6). **Three more events resolve over May 5-6, closing the entire 6-event ajvanprooyen Cubs trip on Wednesday morning.**
- **Algo-overrides as preemptive "events lost without notification":** **8 events** unchanged (closes today and over May 5-6 as the Cubs/Reds events pass). **Five consecutive flip-quiet days.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **taranimeramaro@gmail.com** | 9d | 3 (Bruno MetLife Aug 21/22/25) | 109-113d | Day-7 carried 48h. Body edit "a week and two days ago" — fires today; Day-10 hard expiry tomorrow. |
| **nmcnamee99@gmail.com** | 9d | 1 (Raptors-Cavs Apr 26 — passed) | -8d (passed) | Day-7 carried 48h — same edit as taranimeramaro. |
| mark.murdock@lanternsec.com | 11d | 0 | — | **Day 11 today — Day-10 carried 24h; body edit "eleven days into your account."** |
| awwhittington@icloud.com | 11d | 0 | — | **Day 11 today — same as mark.murdock.** |
| **ajvanprooyen@crimson.ua.edu** | 11d | 6 (Cubs trip May 1-6) | -3 to +2d | **Day-11 acknowledgment-and-recovery email — "eleven days in, six events tracked, four already passed without notification, two more pass within 48h." Cleanest "we failed you" copy in the queue, and the failure is real-time auditable.** |
| ggri73@gmail.com | 12d | 0 | — | **Day 12 today — kill Day-10 carry; pre-queue Day-14 forcing question for May 6 fire (Day-14 boundary).** |
| charlesteel126@gmail.com | 12d | 1 (Bruno Ohio May 20, 16d out) | 16d | **Day 12 today — kill Day-10 carry; pre-queue Day-14 forcing question for May 6 (Day-14 boundary). Bruno-Ohio specific framing.** |
| **dr.altvater-70199@web.de** | **14d** | 0 | — | **DAY 14 TODAY AT 14:08 UTC — DAY-14 FORCING QUESTION FIRES ON-SCHEDULE.** Final on-schedule Day-14 shot of the 28-day outage. **Single most time-pressured fire in the queue.** Body lands on natural framing for the first time: "Fourteen days, no events." German .de domain question still open Day 9. |

**Note on dr.altvater:** This is **the only on-schedule Day-14 fire opportunity remaining in the entire outage.** Every other Day-14 candidate has either already crossed (nicklib Day-17, josh Day-15) or pre-queues for future natural fires (ggri73 + charlesteel May 6). **The Day-14 forcing-question template gets one real-world test on its native day if engine returns by 13:00 UTC** — anything beyond that and the template never sees its on-schedule day in the entire outage window. **Pre-queue tonight; ship at 13:00 UTC tomorrow morning at the latest.**

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs Reds, May 4 | **0 (TODAY)** | flipped Apr 27 | 11 | 0 (event passes today) |
| ajvanprooyen | Cubs vs Reds, May 5 | 1 | flipped Apr 28 | 11 | 0 |
| ajvanprooyen | Cubs vs Reds, May 6 | 2 | flipped Apr 29 | 11 | 0 |

**No new flip today. Fifth flip-quiet day in a row.** Cubs/Reds May 4 passes within ~14h — fifth event in the 6-event ajvanprooyen Cubs-trip sequence resolves today. Cumulative passed-no-notification: **10 → 11 by tomorrow.** Two more cascade events resolve over May 5-6. **By May 7 morning: cumulative passes 13 — a 9-event jump from the May 1 baseline of 4 in exactly one week.**

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **josh (joshdguillemette@gmail.com)** (churned May 3 20:30 UTC) | 15d | **1** (AEW May 24, 20d out) | 20d | **HIGHEST — Day-15 send today: "two weeks and a day in, AEW 20 days out, no target set." Yesterday's on-schedule Day-14 framing pivots to Day-15.** Forcing question still applies: still 20d of runway, still no target. |
| **nicklib253@gmail.com** (churned May 1 22:43 UTC) | 17d | **1** (Phillies passed Apr 17) | passed -17d | **HIGH — Day-17 send today: "two weeks and three days." HARD EXPIRY today on the "two weeks ago" framing. Tomorrow requires Day-21 rewrite from scratch. Final 24h to ship the original Day-14 win-back template.** |
| **pete.uzelac77** (churned ~10d ago) | 24d (Day 24) | **6** (WC + Darts) | 48–64d | **HIGH — Day-24 send today, hard expiry NOON EDT today. "Three weeks" framing breaks at Day 25. 4h shelf life. If engine returns this morning, ship before noon. Beyond noon: kill Day-21, queue Day-30 for May 10.** |
| dylanbaldy@gmail.com (churned Apr 29) | 19d | **0** | — | **LOW** (no watchlist = no re-engagement hook) |
| goldy.pec | 24d | 1 (Bilmuri passed May 2) | — | **CLOSED** (event resolved; no re-engagement hook left) |
| blubberboi | 25d | 1 (Ed Sheeran Aug 8) | 96d | MEDIUM |
| tate.sheppard | ~51d | Florence passed May 1 | — | **CLOSED** (Florence Atlanta passed three days ago) |
| tosophiameyer | ~55d | **11** Harry Styles MSG | 112–136d | **HIGH — power user, deepest re-engagement runway** |
| brigitte.theisen | ~68d | **10** Backstreet Sphere | 74–94d | **HIGH — power user** |
| laye.aurelien | ~32d | 2 (Shakira Jul 20 + 23) | 77–80d | HIGH |
| lvasub6 | ~36d | 2 (Flyleaf Jul 17–18) | 74–75d | HIGH |
| krusesin2023 | ~66d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~62d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~57d | 1 (Olivia Dean Aug 25) | 113d | MEDIUM |
| edithdionne | ~61d | 1 (A7X Centre Bell Aug 8) | 96d | MEDIUM |
| bhaygood728 | ~31d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~34d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~34d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~62d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~41d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~49d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~43d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** **12 churned/at-risk users** + josh (now churned) + tate (closed) + goldy (closed) whose only tracked event has already happened. **Tomorrow morning, 11 cumulative passed-no-notification events stand.** Cohort dies without a re-engagement product — the engineering ask remains carried.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's pre-queue fires — dr.altvater Day-14 forcing question (FIRES TODAY ON-SCHEDULE AT 14:08 UTC)

**Final on-schedule Day-14 shot in the entire 28-day outage.** Body lands on its natural framing for the first time. Subject same edit.

**Subject:** Fourteen days in — what would change your mind about TicketScan?
**Body:**
> Two weeks ago you signed up for TicketScan. You haven't added an event yet — which means one of two things. Either nothing relevant has come up (in which case, fair — keep us in your back pocket and try us when you have a specific event in mind), or there's friction in the activation flow that we should know about.
>
> We're a price-tracker. We work best when you have something specific to track and a target price for what you'd be willing to pay. The whole product reduces to: "tell us what you want, we'll watch the market, we'll email you when the price moves." If you stopped at the signup screen because that flow felt unclear, hit reply and tell us. We read every reply.

**Send timing:** today 14:30 UTC (post-Day-14-crossing 14:08 UTC) — **single highest-priority fire in the queue.**

---

### TODAY's pre-queue fires — josh Day-15 (was on-schedule Day-14, +1 day slip)

Drafted yesterday for on-schedule Day-14 fire; engine outage held; today fires as Day-15 send. Body edit: "Two weeks ago you signed up" → "Two weeks and a day ago you signed up." Subject parses unchanged at Day 15.

**Subject:** Two weeks in, one event tracked — set a target price?
**Body:** as drafted yesterday, with "Two weeks ago" → "Two weeks and a day ago" throughout.

**Send timing:** today 8pm EDT (matches yesterday's planned slot, slipped 24h).

---

### TODAY's pre-queue fires — nicklib253 Day-17 win-back (HARD EXPIRY TODAY)

Drafted Apr 29, carried 6 days through outage. **Today is the final day "two weeks ago" parses as honest framing.** Body edit: "two weeks and two days" → "two weeks and three days."

**Subject:** Two weeks and three days since the Phillies game — staying with TicketScan still pays off
**Body:** as previously drafted, with "two weeks and two days" → "two weeks and three days" throughout.

**Send timing:** today 6pm EDT. **Hard expiry tomorrow — beyond which the email needs a Day-21 rewrite from scratch.**

---

### TODAY's pre-queue fires — pete.uzelac77 Day-24 send (HARD EXPIRY NOON TODAY)

Drafted May 1 for May 1 send. Carried 72h. **Today fires as Day-24 send; "three weeks" framing tolerates ±3 days but breaks at Day 25.** Hard expiry today 12:00 EDT.

**Subject:** Three weeks since you set up six events — here's what should have happened
**Body:** unchanged from May 1 draft.

**Send timing:** today 11am EDT (1h ahead of hard expiry). **4h shelf life — single most expiry-pressured fire in the queue today by absolute time-to-expiry.**

---

### TODAY's pre-queue fires — taranimeramaro Day-9 (Day-7 carried 48h)

Day 9 today. Body edit: "A week and a day ago" → "A week and two days ago" for Bruno MetLife adds. Subject same edit.

**Subject:** A week and two days with 3 Bruno MetLife dates — set a target to start getting alerts
**Send timing:** today 7pm EDT. **Hard expiry tomorrow Day 10.**

---

### TODAY's pre-queue fires — nmcnamee99 Day-9 (Day-7 carried 48h)

Day 9 today. Body edit: "A week and a day ago" → "A week and two days ago" for Raptors-Cavs reference.

**Subject:** A week and two days into the Raptors series — here's how cross-platform price would help next time
**Send timing:** today 1pm EDT. **Hard expiry tomorrow Day 10.**

---

### TODAY's pre-queue fires — lilianamasyrubi Day-3 carried 72h late (Day 6, FINAL DAY)

Day 6 today. Body framing absorbs third day of slip — "Day 5" → "Day 6 with TicketScan." **HARD EXPIRY TODAY** — tomorrow Day 7 hits and Day-3 family dies; Day-7 takes over.

**Subject:** Day 6 with TicketScan — pick one event, we'll do the rest
**Send timing:** today 9am EDT. **Pre-queue Day-7 framing for tomorrow morning if engine doesn't return today.**

---

### TODAY's pre-queue fires — zhili1208 Day-3 carried 48h (Day 5)

Day 5 today. Body edit: "By Day 4" → "Day 5 with TicketScan." Same template lilianamasyrubi got 24h ago.

**Subject:** Day 5 with TicketScan — pick one event, we'll do the rest
**Send timing:** today 11am EDT. **Hard expiry tomorrow Day 6.**

---

### TODAY's pre-queue fires — mark.murdock Day-11 (Day-10 carried 24h)

Day 11 today; body edit "ten days into your account" → "eleven days into your account."

**Subject:** Eleven days in, no events tracked — what's the friction?
**Body:** as drafted yesterday with "Ten days" → "Eleven days" body edits throughout.

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires — awwhittington Day-11 (Day-10 carried 24h)

Same template as mark.murdock. Same subject and body.

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires — ajvanprooyen Day-11 acknowledgment-and-recovery (PIVOT)

Day 11 today; the cleanest "we failed you" template in the queue gets sharper because **four of six events have now passed without notification** (May 1 Cubs, May 2 Bobblehead — passed; Cubs Tee May 3 — passed; Cubs vs Reds May 4 — passes today within 14h). Body edit captures the live failure: from "ten days in, three already passed" → "eleven days in, four already passed, two more pass within 48h."

**Subject:** Eleven days in, four of your six events came and went — and the next two pass within 48h
**Body:**
> Eleven days ago you set up six Cubs events at Wrigley — the Diamondbacks series May 1, the Bobblehead game May 2, the Cade Horton Tee May 3, and three Reds games May 4-5-6. The first four have already happened (the May 4 Reds game ends tonight). We didn't email you about price drops on any of them, because our alert system was down for the entire window. That's on us.
>
> The remaining two games are tomorrow and Tuesday (Reds at Wrigley, May 5 + 6). Prices on those are still moving. If you set a target price on each, we'll start sending alerts the moment a source drops below your number — Ticketmaster, SeatGeek, or StubHub.
>
> [Set targets on your remaining Cubs games](https://www.ticketscan.io/watchlist) — under two minutes for both.

**Send timing:** today 12pm EDT. **The cleanest "we know we failed you" copy in the entire 22-email queue, and the failure mode is being audited live in real time as we draft this.**

---

### TODAY's pre-queue actions — ggri73 + charlesteel kill Day-10 carry; pre-queue Day-14 forcing question for May 6

Day 12 today for both; Day-10 framing officially dies. **Pre-queue Day-14 forcing-question template for May 6 natural fire (Day-14 boundary at 21:18 UTC for ggri73 and 11:38 UTC for charlesteel).** This is the cleanest pivot of the outage: instead of carrying a Day-10 framing past honesty, we let the Day-14 boundary be the natural fire date for both. Both fires are 48h away.

ggri73 body: standard Day-14 forcing question (no events tracked).
charlesteel body: Day-14 forcing question with Bruno-Ohio reference: "Twelve days, one Bruno Ohio show tracked, no target set — set one or it stays a bookmark."

**Send timing:** May 6 — pre-queue tonight.

---

### Carried unchanged (long-runway tier)

- **Day-14 (9d late) — blubberboi** (Ed Sheeran SoFi 96d)
- **Day-21 (10d late) — bhaygood** (bespoke past-event LOW)
- **Day-21 (11d late) — laye.aurelien** (Shakira July, 77–80d runway)
- **Day-30 (11d late) — billstromkel** (RAYE passed)
- **Day-30 (13d late) — tucwildcat** (NCAA passed)
- **Day-30 (19d late) — jkaiser** (NCAA passed)

**Total emails ready to queue: 22** (21 yesterday + 1 net new — josh moves from on-schedule fire to Day-15 carry, dr.altvater takes the on-schedule slot, ggri73/charlesteel pivot from Day-10 carry to Day-14 pre-queue for May 6, ajvanprooyen Day-11 reframes the May 3 Day-10 acknowledgment).

**Today is the highest-density firing window of the entire outage:** if engine returns by 13:00 UTC, **11 emails fire today** (dr.altvater Day-14 ON-SCHEDULE + josh Day-15 + nicklib Day-17 + pete Day-24 + taranimeramaro Day-9 + nmcnamee99 Day-9 + lilianamasyrubi Day-6 + zhili1208 Day-5 + mark.murdock Day-11 + awwhittington Day-11 + ajvanprooyen Day-11). **+2 more on May 6 (ggri73 Day-14 + charlesteel Day-14 on-schedule).** **Net wall growth +1 today** (dr.altvater enters Day-14 band as a fire candidate; ggri73 + charlesteel pivot to a future fire so subtract from today's count by 2 but add 2 to May 6).

---

## Psychology-driven optimization — one recommendation

### Principle: **The Fresh-Start Effect** (Dai, Milkman & Riis, 2014; Hennecke & Converse, 2017) — applied via re-engagement: trigger temporal-landmark emails on calendar firsts (start of month, start of summer concert season, post-playoff offseason) with content tied to the landmark

**Where:** New email cadence layered on top of the existing drip campaign. **Trigger types:**
1. **Start of month (1st):** "May at TicketScan: here's what's moving in your saved events." Aggregates all watchlist items for each user, reports price changes since last calendar reset, surfaces upcoming events for the new month.
2. **Start of summer concert season (June 1):** "Summer concert season starts now — here's what your watchlist looks like for June, July, August." Most concert tours hit major price-movement windows in early summer.
3. **Post-team-elimination (algorithmic):** When a user's tracked team is eliminated from the playoffs, send "Your team's out — here's a fresh start for the offseason." Surfaces concerts, World Cup events, and other upcoming sports the user might pivot to.
4. **Post-event (algorithmic):** When the last item on a user's watchlist passes, trigger a "What's next?" email with personalized event suggestions for the new chapter.
5. **Birthday / signup anniversary:** Annual "One year with TicketScan" email summarizing the user's price-tracking history.

**Problem this targets:**

| Cohort | Count | Status |
|----|----|----|
| Users with all watchlist items in the past | ~14 | "Filed and forgotten" — their reason to return is structurally absent |
| Users at single-event trough (1 watchlist item, Day 14+) | ~17 | The first event happened; they've never returned to add a second |
| Users who churned with 0 watchlist items | ~6 | No structural hook to bring back |
| **Users entering a temporal-landmark moment in the next 30 days** | **all 64** | **All users hit June 1 in 28 days; all sports fans hit playoff-elimination cadence; all WC fans hit June 11 tournament start in 38 days** |

The Fresh-Start Effect literature is the cleanest in goal-pursuit psychology of the last decade. **Dai, Milkman & Riis (2014)** showed Google search interest in "diet," gym attendance, and goal-related behaviors spikes at temporal landmarks (start of week, start of month, start of year, birthdays, holidays) by 14-33% above baseline — even when the landmark has no functional relationship to the goal. **Hennecke & Converse (2017)** extended this: the effect operates because temporal landmarks create a "psychological separation" between past-self (who failed) and present-self (who can succeed), which restores motivation by externalizing the failure to the past.

**For our case:** the 17 single-event users and 14 passed-event users have, in their mental model, a **failed first attempt** at TicketScan: the event passed, the alert never came (because no target was set), the experiment ended without value. **A standard re-engagement email frames this as continuity** ("come back and try again") which forces the user to re-confront the failure. **A fresh-start-framed email frames the failure as past-self and the present as a new chapter** ("May is a new month — here's what's worth tracking for the next 30 days") which makes the same re-engagement ask without the cognitive friction of "but it didn't work last time."

**Why this beats the prior 11 recs in the sequence:**

The prior 11 recs operate on **state-level interventions** (defaults, framings, copy, badges, modals) — they change something about how the product looks or behaves at all times. **Fresh-start operates on event-triggered interventions** — it injects a new email cadence tied to calendar landmarks, none of which currently exist in the drip campaign. **The drip campaign is signup-anchored (Day 3, 7, 14, 21, 30); fresh-start is calendar-anchored or event-anchored.** They are orthogonal and stack cleanly.

The closest precedent in the sequence is the Apr 30 implementation-intentions re-prompt rec — but that was modal-based and required a `last_modal_dismissed_at` column. **Fresh-start uses existing data only** (signup date, watchlist event dates, calendar) and adds a new email template family. **Engineering surface area is one cron job + one template per landmark** — much smaller than implementation-intentions or default-effect.

**The data backing — beyond the obvious "drip campaign has nothing for users past Day 30":**

- **Drip campaign ends at Day 30.** Every user past Day 30 (which is **31 of 64 = 48% of all users today**) receives **zero scheduled product emails forever** under the current drip design. Fresh-start fills this exact gap.
- **Power users with future events (tosophiameyer's 11 Harry Styles, brigitte.theisen's 10 Backstreet Sphere) churned not because the events expired, but because there was no scheduled touch.** Fresh-start gives them a touch tied to the calendar moment closest to their event window.
- **The single-event-passed cohort is structurally hopeless without a temporal reset.** Telling them "come back to TicketScan" is the same ask that already failed. Telling them "May 1 — here's what's worth tracking for May" is a different ask that depersonalizes the failure.
- **The WC 2026 audience (Lincoln Financial Field, MetLife, etc.) all hit a hard temporal landmark on June 11 (tournament start).** A fresh-start email keyed to "World Cup starts in [X] days — here's how prices typically move in the final 30-day window" would land in every WC ticket-holder's inbox at the moment of peak relevance. **This is the single highest-leverage temporal landmark in the entire user base, and we currently have no mechanism to trigger an email on it.**

**Defensibility / risk:**

- **Fresh-start is one of the most-validated effects in goal-pursuit psychology of the 2010s.** Cite Dai, Milkman & Riis (2014, Management Science), Hennecke & Converse (2017, Psychological Science). The Strava "Year in Sport" recap, the Spotify Wrapped phenomenon, the Apple Activity "Monthly Awards" — every fitness/media product has been mining this principle for the last decade because it works empirically.
- **Risk: email fatigue.** Adding a new email cadence on top of the existing drip increases per-user email frequency. **Mitigation: the cadence is sparse** (1st of each month + birthday + post-event = ~14 emails per user per year max, most concentrated in the post-event triggers). This is one-fifth the cadence of a typical retail newsletter. Fatigue is not a real risk at this volume.
- **Risk: email looks like a marketing blast (low-value).** Mitigation: **the content is personalized to the user's actual watchlist data.** "May at TicketScan" is generic; "May at TicketScan — your Cubs trip is this week, your Bruno Mars dates are 110 days out, here's how prices have moved" is high-value. The personalization layer is where the lift comes from.
- **Brand-voice fit: high.** "Helpful, data-driven, slightly irreverent" — fresh-start emails are by definition data-driven (price movements, days-to-event, calendar landmark). Voice can be irreverent: "May is here. The Cubs are still bad, your tickets are still expensive, here's the breakdown."
- **Sequencing fit with prior recs:** **stacks naturally with Default Effect (yesterday) and Endowment Framing (May 2).** A user who has 85 watchlist items with default targets set (yesterday's rec) gets a "May at TicketScan" email summarizing price changes against their auto-set targets. **The default-effect rec is the prerequisite that makes the fresh-start emails interesting** — without targets, there are no price-vs-target comparisons to report. **This sequencing is the cleanest in the entire 12-rec series:** ship default effect → users have targets → fresh-start emails surface real comparisons → re-engagement loop closes.

**The implementation:**

1. **Email templates (new family in `index.js`):** ~5 templates for the 5 landmark types (start of month, start of summer concert season, post-team-elimination, post-event, signup anniversary). Each template takes user_id + landmark_type as input and renders personalized content from the watchlist + price_history tables.
2. **Cron jobs (new):**
   - **Monthly cron (1st of month at 09:00 UTC):** iterate all users, render + send "Month at TicketScan" template.
   - **Daily cron (existing watchlist scan):** detect when a user's last upcoming event has passed → trigger "What's next?" template.
   - **Annual cron (signup anniversary):** trigger one-year recap email.
   - **Tournament-specific cron (one-shot):** one email at WC tournament start (June 11) for all WC ticket holders.
3. **Schema:** **no new columns required.** All triggers can be derived from `users.created_at`, `watchlist.event_date`, and `price_history.checked_at` joins. The existing `drip_emails_sent` pattern can be reused with a new `email_type` enum (`'fresh_start_monthly'`, `'fresh_start_post_event'`, etc.) to prevent duplicate sends.
4. **First ship:** **monthly cron only** — the start-of-month template alone covers 64 users on May 1 / June 1 / July 1 with zero personalization-engine work beyond a watchlist join. Ship the rest in week 2.

**Variants for A/B testing (if/when test infrastructure exists):**
- **Control:** existing — no fresh-start emails.
- **Variant A (above):** monthly + post-event + anniversary + WC-tournament-start.
- **Variant B:** monthly only — minimum-viable fresh-start.
- **Variant C:** post-event + anniversary only (event-triggered only, no calendar-triggered) — tests whether the calendar landmark or the event-end landmark is the active ingredient.

A is the recommended ship for the full sequence; B is the recommended **first-ship** because it covers all 64 users with one cron + one template.

**Expected impact:**

- **Email touchpoints per user per year: 0 (today, post-Day-30) → 12 (monthly minimum) + 3-5 (event-triggered).** **15-17× the current post-Day-30 touchpoint rate.**
- **Re-engagement rate on the 31-user "past Day 30" cohort:** literature suggests temporal-landmark email opens land at 2-3× cold re-engagement open rates. **Conservatively, 8-12% of past-Day-30 users return to the product within 30 days of receiving a fresh-start email**, which would represent ~3-4 re-engaged users per month from the existing 31-user cohort. **First sustained re-engagement signal in the dataset's history.**
- **Newsletter dependency partial-bypass:** the fresh-start emails reach all 64 users without depending on the broken newsletter form. **The 92-day-flat newsletter dependency becomes less critical for retention if the user-level email cadence is rich enough on its own.** Still need to fix the form for new-visitor capture, but existing-user retention stops being downstream of newsletter capture.
- **Engagement loop closure (combined with default-effect rec):** once default-effect ships and target prices populate, the monthly fresh-start email becomes a per-user **"Your watchlist this month: 3 events with price drops below your target, 2 events with prices up, 1 event passed without alert."** **For the first time in the product's history, users would receive scheduled, personalized, data-rich product emails. The combination of these two recs (default effect + fresh start) is the closest the stack has come to a complete activation engine in a single PR pair.**

**Sequencing relative to prior recs:**

1. **Week 1:** Reciprocity (Apr 25)
2. **Week 2:** Social proof (Apr 26)
3. **Week 3:** Anchoring (Apr 27)
4. **Week 4:** Commitment/consistency (Apr 23)
5. **Week 5:** Loss aversion (Apr 24)
6. **Week 6:** Implementation intentions Day-0 (Apr 28)
7. **Week 7:** Zeigarnik effect (Apr 29)
8. **Week 8:** Implementation-intentions re-prompt Day-7+ (Apr 30)
9. **Week 9:** Goal-gradient progress bar (May 1)
10. **Week 10:** Endowment framing (May 2)
11. **Week 11:** Default effect (May 3)
12. **Week 12 (today):** **Fresh-start effect — calendar-landmark and event-triggered email cadence.**

**Today's rec stacks downstream of yesterday's default-effect rec:** default effect populates targets → fresh-start emails report against those targets monthly → users receive the first scheduled, data-rich product communication ever. **Ship default-effect first, fresh-start second, in the same PR pair within a week.**

**Ship cost:** Backend: ~80 lines of email template + ~40 lines of cron job + drip-table reuse for dedup, ~6h end-to-end with QA. **Slightly more than yesterday's default-effect rec (~4h), but the leverage is comparable: fresh-start gives every user a scheduled touchpoint, default-effect gives every watchlist item alert-eligibility.** Together they are the activation-engine reboot.

**Hand to:** Email Agent (Agent 5) for template drafts — start with the May 1 / June 1 / July 1 monthly template using the actual May 4 watchlist data as the prototype (would have hit all 64 users on May 1 had it existed). **Engineering** for the cron + dedup table reuse. The fresh-start rec is the **second eng-required rec in the 12-rec sequence** (after default-effect yesterday). Worth the friction for the same reason: the leverage is structurally larger than any frontend-only rec.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +11 days — ELEVEN-DAY STABLE BIFURCATION):** (a) Referrer/UTM pull on ids 57–64 (carried — 8 unknown-source users in last 11 days, no progress in 11 days; **the bifurcation is now stable for 11 days at n=9, 100%/0% split — empirical bar to act crossed yesterday**). (b) Cohort velocity for ids 1–64 over rolling 30 days (carried). (c) Trending-events query for reciprocity rec (carried). (d) `tracker_count` aggregation for social proof rec (carried). (e) Matched-drops query for loss-aversion rec (carried). (f) Carried: post-event watchlist-cleanup signal for ajvanprooyen Cubs trip (4 events passed; 1 passes today; 2 pending May 5-6). (g) Carried: goal-gradient milestone empirics — confirm 30% / 52% activated-user numbers for 3+ / 2+ events. (h) Carried: 1-event-user retention curve. (i) Carried: endowment-effect copy lift baseline (May 2). (j) Carried: target-price-set-rate baseline by source channel (May 3). (k) **NEW: temporal-landmark engagement baseline** — for measuring the fresh-start rec's lift, we want to track open-and-click rates for the existing drip emails grouped by send day-of-week and day-of-month. The hypothesis: emails landing on calendar-landmark days (1st of month, Mondays) outperform mid-week mid-month sends by a measurable margin. The data ask is real if we want to measure the principle's efficacy in our specific market.

2. **CRO Agent:** (a) Activation gap — **2 users in 7-day window** (zhili1208 5d, lilianamasyrubi 6d) **plus 5 outside band still inert** (mark.murdock 11d, awwhittington 11d, ggri73 12d, dr.altvater 14d crosses today, dylanbaldy 19d churned). (b) Carried: default-effect implementation (May 3) — backend POST `/api/watchlist` logic + back-fill of 85 existing items + frontend editable-default UI; **the single highest-leverage frontend-and-backend change in the 12-rec sequence; ~4h ship.** (c) **NEW: fresh-start cadence implementation** — monthly cron + email template + drip-table reuse; **the second-largest-leverage backend rec in the sequence; ~6h ship.** Combine with default-effect in the same PR pair within a week — sequencing matters: default-effect populates the targets that fresh-start emails report against. (d) Carried: endowment rec (May 2), goal-gradient progress bar (May 1), implementation-intentions Day-7+ modal (Apr 30), Zeigarnik header (Apr 29), implementation-intentions post-signup screen (Apr 28), anchoring framing (Apr 27), social-proof badge (Apr 26), reciprocity dashboard empty-state (Apr 25), loss-aversion target panel (Apr 24), commitment-consistency 2nd-action (Apr 23). (e) Newsletter homepage form: **92 days flat = 13 weeks + 1 day.** Audit blocking subscriber growth for one full quarter + 2 days.

3. **Email Agent:** **22 churn-intervention emails ready** with the following priority order today: **dr.altvater Day-14 ON-SCHEDULE FIRE AT 14:08 UTC (single highest priority, 4h shelf life on the on-schedule shot)** → **pete Day-24 (HARD EXPIRY NOON EDT, 4h absolute shelf life)** → **nicklib Day-17 (HARD EXPIRY TODAY on framing)** → **josh Day-15 (yesterday's on-schedule slipped to today)** → **ajvanprooyen Day-11 acknowledgment (FIRES TODAY, cleanest "we failed you" copy)** → **mark.murdock + awwhittington Day-11 (FIRES TODAY, body edits)** → **lilianamasyrubi Day-6 (FIRES TODAY, hard expiry today)** → **zhili1208 Day-5 (FIRES TODAY)** → **taranimeramaro + nmcnamee99 Day-9 (FIRES TODAY, hard expiry tomorrow)** → blubberboi, bhaygood, laye, billstromkel, tucwildcat, jkaiser. **Pre-queue ggri73 + charlesteel Day-14 forcing question for May 6 natural fire.** Today's firing density: **11 sends if engine returns by 13:00 UTC.** German-language drip variant question still open Day 9. **NEW: fresh-start template family — start with May 1 / June 1 monthly recap template, render against current watchlist data as prototype.**

4. **Content Agent:** (a) Cubs / Wrigley out-of-market trip hub page: **fifth event resolves today** (Cubs vs Reds May 4) — ship before May 7 to capture the trip's tail; two more Cubs/Reds events resolve over May 5-6; entire 6-event trip closes Wednesday morning. (b) Bruno Mars cross-city/cross-venue cluster hub page — taranimeramaro Day-9 fires today; hub page is overdue. (c) German-market consideration for dr.altvater (carried Day 9). (d) "What to do when your team's playoff series moves to the road" hub page — nmcnamee99 use case, Day-9 fires today. (e) Carried: "How many events should you track?" hub page — supports goal-gradient rec. (f) "Save vs. add" thought-leader hub page (May 2). (g) "Why every price tracker should set your target for you" hub page (May 3 default-effect rec). (h) **NEW: "May at TicketScan" monthly-recap blog template** — written as a meta-post about how monthly recaps work, doubles as content marketing AND as a template for the fresh-start email content layer. The framing: **"Monthly check-ins beat daily check-ins for things that take months to play out — and ticket prices take months to play out."** Pairs with the May 2 + May 3 thought-leader pieces as the third in a series on how price tracking should actually work for users.

5. **Ads Agent:** (a) Cubs out-of-market audience signal — carried. (b) Bruno Mars MetLife audience signal — taranimeramaro Day-9 fires today; pre-queue from Apr 30 still pending. (c) **Attribution-pull dependency now Day 11 unfulfilled — eleven-day stable bifurcation, empirical bar to act has been crossed since yesterday.** Five consecutive zero-signup days have not refreshed the data point but have not weakened it either; the pattern holds at 6 unknown / 3 known with all 3 knowns activated. **The single highest-leverage open dependency in the growth stack; today is Day 2 since the empirical bar was officially crossed.**

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — **Day 28**. (b) Drip cron revival — **Day 28**, blocking 22 drafted emails including 11 firing today and 2 firing May 6. (c) Newsletter homepage form audit — **92 days flat = 13 weeks + 1 day.** (d) Pre-populated-item flag on watchlist schema for reciprocity rec. (e) `tracker_count` aggregation in search response for social-proof rec. (f) `users.first_action_trigger_at` column + cron job for implementation-intentions rec. (g) Derive completion-state query for Zeigarnik header rec. (h) `users.last_modal_dismissed_at` column + `/api/users/me` payload extension for implementation-intentions re-prompt rec. (i) Empirical 1-event vs. 2+ event retention curve for goal-gradient rec defensibility. (j) A/B test infrastructure for endowment-effect measurement (May 2). (k) Default-effect implementation — POST `/api/watchlist` logic + back-fill + frontend UI (May 3). (l) **NEW: fresh-start cadence implementation — monthly cron + email template + dedup against drip_emails_sent (May 4).** Two eng items now stand in the rec sequence; both should ship together because fresh-start depends on default-effect's target-prices being populated to render meaningfully.

## Trend watch (10-day)

| Metric | Apr 25 | Apr 26 | Apr 27 | Apr 28 | Apr 29 | Apr 30 | May 1 | May 2 | May 3 | May 4 |
|--------|--------|--------|--------|--------|--------|--------|-------|-------|-------|-------|
| Total users | 60 | 62 | 62 | 63 | 64 | 64 | 64 | 64 | 64 | **64** |
| Watchlist items | 81 | 85 | 85 | 85 | 85 | 85 | 85 | 85 | 85 | **85** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 0 | 2 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | **0** |
| `usersThisWeek` (API) | 7 | 9 | 8 | 8 | 8 | 4 | 4 | 4 | 2 | **2** |
| At-risk count | 2 | 3 | 3 | 4 | 4 | 6 | 6 | 5 | 6 | **7** |
| Churned count | 52 | 52 | 52 | 52 | 53 | 53 | 54 | 55 | 56 | **57 (58 EOD)** |
| Activation rate (real users) | 73.7% | 75.4% | 75.4% | 72.9% | 72.1% | 72.1% | 72.1% | 72.1% | 72.1% | **72.1%** |

**Read:** **Five consecutive zero-signup days — ties prior all-time record. Watchlist items at 85 for the 9th consecutive day — record extended.** Day 28 of zero retention emails, zero target-prices set, zero alerts. **josh moved to churned bucket overnight; dr.altvater follows today at 14:08 UTC — second double-churn-bucket-entry day in 4 days.** One more passed-no-notification event resolves today (Cubs/Reds May 4 — cumulative 11). Fifth flip-quiet day in a row.

**The two-day forecast:**
- **May 4 (today):** dr.altvater hits Day 14 at 14:08 UTC — **Day-14 forcing question fires ON-SCHEDULE if engine returns by 13:00 UTC. Final on-schedule Day-14 shot of the entire outage.** mark.murdock + awwhittington + ajvanprooyen reach Day 11. ggri73 + charlesteel reach Day 12 — Day-10 family dies; Day-14 forcing question pre-queues for May 6 natural fire. taranimeramaro + nmcnamee99 reach Day 9. lilianamasyrubi reaches Day 6 — Day-3 hard expires. zhili1208 reaches Day 5. **pete Day-24 hard expires at noon. nicklib Day-17 hard expires.** Cubs/Reds May 4 passes — passed-no-notification cumulative 11 by tomorrow morning.
- **May 5 (tomorrow):** Cubs/Reds May 5 passes — cumulative 12. mark.murdock + awwhittington + ajvanprooyen reach Day 12. ggri73 + charlesteel reach Day 13. taranimeramaro + nmcnamee99 reach Day 10 — Day-7 family fully dies. lilianamasyrubi reaches Day 7 — Day-7 family takes over. zhili1208 reaches Day 6 — Day-3 hard expires. **`usersThisWeek` may drop to 1 if lilianamasyrubi rolls out at 05:24 UTC.** **Watchlist 85-flat record stretches to 10 days if no add — first double-digit duration in the dataset's history.** **Six-day zero-signup streak breaks the prior all-time record outright.**

**The pattern that crystallized today:** **Every metric in the dashboard has settled to its outage-era equilibrium and is now flat at or beyond a record reading.** Total users (64 × 5 days), watchlist items (85 × 9 days), drip emails (0 × 28 days), triggered alerts (0 × dataset), newsletter (3 × 92 days), activation rate (72.1% × 6 days). **The system is structurally inert across every dimension simultaneously.** The only paths back to motion are engineering actions:
1. **Restart the drip engine** (clears 22 queued emails; closes the most acute retention loop).
2. **Ship the default-effect rec** (May 3): converts 85 inert watchlist items into 85 alert-eligible items overnight.
3. **Ship the fresh-start cadence** (today): creates the first scheduled post-Day-30 product emails for the 31-user "past Day 30" cohort (48% of all users).
4. **Pull the attribution data** (Day 11): converts the 11-day-stable bifurcation into actionable acquisition-source insight for Ads Agent.

**Three of these four asks are eng-required, and they pair into a single coherent engineering sprint.** **If only one outcome is achievable in the next week, it is shipping the default-effect + fresh-start pair together** — they are the closest the stack has come to a complete activation engine in a single PR pair, and they make every prior rec (Reciprocity through Endowment) immediately more valuable when they ship downstream.

**Today's rec is the calendar-landmark cadence layer beneath the default-effect rec from yesterday.** Default-effect populates the targets; fresh-start surfaces the resulting price-vs-target movements monthly and on event-end; together they give every user a scheduled, data-rich, personalized email cadence for the first time in the product's history. **The 28-day outage ends not when the existing drip cron restarts, but when the activation engine has both the data (default-effect) and the scheduled touchpoints (fresh-start) to close the engagement loop on its own.**
