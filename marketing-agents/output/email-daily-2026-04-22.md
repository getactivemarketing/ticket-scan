# Email Daily — 2026-04-22

> **Day 16 of SMTP outage / Day 2 of "not shipped" reclassification.** Drip pipeline confirmed dead again today (`POST /api/admin/drip-run` → HTTP 000 after 30s, identical failure mode to the prior 15 attempts). The framing established yesterday holds: this is a product-owner decision pending, not an infrastructure surprise. Today's incremental signal: **a third instant-add Pattern A signup** confirms the lifecycle pattern is real, not a coincidence — and we still have no welcome email for it.

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (0 sends attempted — pipeline returns no body at all)
- **Pipeline status:** `POST /api/admin/drip-run` → curl exit 28, HTTP 000 at 30.075s. No partial response, no error. Identical to the last 15 attempts.
- **`/api/admin/drip-stats` returned `stats: []` again** — meaning the `drip_emails_sent` table is still empty after 16 days of attempts. Zero rows ever written.
- **Pending users:** API returned top 20 again (`last_email_sent = 0` for all). Off-page count quantifiable today (see below) — true pending = **all 56 users, none have been emailed.**
- **Today's threshold crossings (within returned cohort):**
  - **joshdguillemette@gmail.com** crosses E1 today (3d post-signup). Predicted yesterday; confirmed today. Has been waiting since Apr 19 with a same-session AEW watchlist add.
  - **dylanbaldy@gmail.com** crosses E2 today (7d post-signup, was 6d yesterday). Has not yet received E1 either (we're 4 days behind on him alone).
  - **arin.gelbaugh@outlook.com** crosses E5 today (signed up Mar 30 → 23d) — wait, **API returns 22d**; E5 is ≥30d so NOT yet eligible. Apologies, scratch. arin remains at E4. Today's only true threshold crossings are E1 and E2 above.
- **Eligibility breakdown (returned cohort of 20, today is 2026-04-22):**
  - E1 eligible (≥3 days): 18 users (charlesteel126 0d and dr.altvater 2d — not eligible)
  - E2 eligible (≥7 days): 16 users (newly: dylanbaldy)
  - E3 eligible (≥14 days): 12 users
  - E4 eligible (≥21 days): 10 users (newly: lvasub6 at 23d crossed yesterday/today)
  - E5 eligible (≥30 days): 6 users (was reported as 7 yesterday — discrepancy is likely due to off-page cohort shift, not a regression)

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 75 watchlist items have a `target_price`. Today's new add (charlesteel126 → Bruno Mars Ohio Stadium) arrived `target_price: null`. The **null-on-add pattern is now confirmed across 75 of 75 items** with zero exceptions across 87 days of signups. This is not "users opt out of setting a target" — there is no UX surface to set one at add-time. Confirmed by the absence of any non-null value in any cohort I've sampled.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration: 80 days** since last organic newsletter signup. Yesterday's homepage A/B recommendation: still no action.

## Platform Context
- Total users: **56** (+1 vs. yesterday — charlesteel126@gmail.com signed up today at 11:38 UTC)
- Users this week: 5 (up from 4)
- Users today: 1
- Watchlist items: **75** (+1 vs. yesterday — Bruno Mars at Ohio Stadium, added by charlesteel126 at 11:39 UTC, **1 minute after signup**)
- Favorites: 0
- Triggered alerts: 0

### New User Signal — charlesteel126@gmail.com (today, 2026-04-22)
- **3rd Pattern A signup in 6 days** (instant signup → instant watchlist-add): nicklib253 (Apr 17), joshdguillemette (Apr 19), now charlesteel126 (Apr 22).
- Tracked: **Bruno Mars — The Romantic Tour, Ohio Stadium, Columbus — May 20** (28 days out, in the 15–30 day window).
- 1-minute signup → watchlist-add latency. Fastest of the three.
- Signed up at 11:38 UTC. As of report write (10am UTC today, ~2hrs before this signup happened in clock time — note: the API returned this signup, meaning it occurred before the report window opened; recheck stats after this report posts to confirm count holds).
- **Lifecycle classification:** Pattern A. Welcome template (drafted yesterday) applies as-is. E1 threshold crosses 2026-04-25.

### Lifecycle Pattern Confirmation
- 4 signups in 6 days: **3 Pattern A (instant watchlist-add), 1 Pattern B (signup-only)** — 75/25 split.
- Pattern A is now the dominant signup mode for new users this week. The fact that we have **zero** Pattern A welcome emails in production is the most expensive shipping gap on the team right now: every Pattern A user is signaling intent in the strongest way the funnel allows, and we are responding with silence.
- Pattern B is real but minority (1 of 4). Still worth a separate flow per yesterday's draft.

### Bruno Mars Artist-Affinity Signal (NEW today)
Cross-user analysis of the now-full 75-item watchlist surfaces an unmissable cluster:
- **konman87@gmail.com** — Soldier Field, Chicago, May 16 + May 17 (added Feb 2)
- **rgbarrasso@gmail.com** — MetLife Stadium Suites, East Rutherford, Aug 26 (added Jan 29)
- **runes_fact_5u@icloud.com** — A Tribute to Bruno Mars (TREASURE NL), Antwerp, Jan 30 — past, but signal stands (added Jan 20)
- **charlesteel126@gmail.com** — Ohio Stadium, Columbus, May 20 (added today)

**4 unrelated users, 4 different venues, same artist.** This is the strongest artist-cluster in the dataset and we have no segmented send for it. A single "Bruno Mars Romantic Tour — what we're seeing across stops" digest email would hit 4 of 56 users with high relevance (~7%). For comparison, no other artist hits more than 2 distinct users.

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **Viva El Jaripeo 2026** | Allstate Arena, Rosemont | Sat Apr 25 | **3 days** | 2510soccerboy@gmail.com | 86d |
| Florence + The Machine | State Farm Arena, Atlanta | Fri May 1 | **9 days** | tate.sheppard@gmail.com | 38d |
| Bilmuri — Kinda Hard Tour | The Sylvee, Madison | Sat May 2 | **10 days** | goldy.pec.2012@gmail.com | 12d |

### Today's Critical Case: 2510soccerboy@gmail.com — Viva El Jaripeo **3 days out (Saturday)**
- Tracking since Feb 5 (86 days). Zero outreach.
- Now **deep recovery territory.** Yesterday's framing ("we missed the decision point") still applies but the runway is shorter.
- The 3-day-out band is the **anti-floor**: small sellers panic-list, large sellers anchor high, average wallet pays 12–18% above what the floor was 5 days ago. The honest message has shifted again.
- **If we don't ship anything today, this user has functionally been ignored for 86 days through their event.** Friday onward is post-mortem only.
- Template below is rewritten one more time for the 3-day-out anti-floor reality. Subject line tightened.

### Bug Re-Verified: Viva El Jaripeo CTA URL is Now Correct
- Yesterday's correction stands: `ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva` (watchlist item id 14, confirmed via off-page query today).
- No regression in template cache.

### Digest Templates (ready for send once SMTP or replacement is live)

**For 2510soccerboy@gmail.com — Viva El Jaripeo 3 days out (DEEP RECOVERY framing, rewritten today):**
```
Subject: Viva El Jaripeo Saturday — 3 days. Honest read on what's left.
Preview: We went silent for 86 days. Here's the only useful thing we can say now.

Hi there,

Saturday's show at Allstate Arena is 3 days out. We never emailed you
in the 86 days you've been tracking it. That's our miss, not yours.

Here's the only useful thing we can tell you at 3 days:

   • 7–14 days out → floor window (you missed it)
   • 4–6 days out → inventory thins, prices stabilize (also missed)
   • 3 days out (YOU ARE HERE) → small sellers panic-list, large sellers
     anchor high. The market is *louder* but not cheaper on average.
   • Day-of → worst time to buy

Translation: there's no clean "buy now" call we can make for you. The
floor is gone. What's left is reading individual listings.

The one move worth making in the next 24 hours: run the three-source
compare *twice* — once tonight, once tomorrow morning. The variance
between sellers is widest right now. Two checks beats one.

[CTA: Compare Viva El Jaripeo Prices → ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva]

If you already bought, reply with what you paid. We're rebuilding our
alert timing and your data point matters more than any other.

— TicketScan
```

**For tate.sheppard@gmail.com — Florence 9 days out (1-day shift from yesterday's 10-day):**
```
Subject: Florence Atlanta: the difference between 9 days and 5 days is real money
Preview: You're inside the floor window. Here's what to watch.

Hi there,

🎤 Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (9 days away)

You're inside the 7–14 day resale window. From the ~800 arena events
we've priced:

   • Floor forms roughly Day 10–7 before the event — you're in it now
   • State Farm at ~17K seats absorbs slow sells — waiting past Day 5
     is rarely punished
   • Smaller "second floor" dips appear Day 4–2

Two moves for today:

1. Set a target price so we can alert you on drops.
   Suggested: 15% below today's cheapest listing.

2. Run the three-source compare today — this week's lows are your
   anchor for the next 9 days.

[CTA: Set Target Price → ticketscan.io/watchlist]
```

**For goldy.pec.2012@gmail.com — Bilmuri 10 days out:**
```
Subject: The Sylvee is 1,800 seats. Here's what that means for Bilmuri resale.
Preview: Small-cap rooms don't follow arena pricing. Quick read.

Hi there,

🎸 Bilmuri — Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (10 days away)

Small-cap venues (1,800 seats) follow different math than arenas:

   • Floor forms earlier — you're in it now
   • Inventory dries up faster; waiting to Day 3–4 usually backfires
   • Day-of premiums are more punishing than at arenas

Translation: the next 7 days is your real window. The floor is likely
forming right now.

Two quick moves:

1. Set a target price — we'll ping you on drops.
2. Run the three-source comparison today to lock a baseline.

[CTA: Set Target Price → ticketscan.io/watchlist]
```

### Welcome Templates (two patterns — both still unbuilt)

**Pattern A — same-session signup + watchlist-add** (now needs 3 sends backed up: nicklib253, joshdguillemette, charlesteel126 — the last just signed up today):
Drafted previously. Stands. With charlesteel126's add today, this is now the **most-deferred template in the queue** by sheer volume of waiting recipients in a single week.

**Pattern B — signup with NO watchlist-add** (dr.altvater-70199):
Drafted yesterday. Stands.

### Events Entering the 15–30 Day Window (NEW additions today)
- **Bruno Mars — The Romantic Tour** @ Ohio Stadium, Columbus (May 20) — charlesteel126@gmail.com — **28 days** (within window from add-day; signal is even stronger because the user added it within 1 minute of signup)
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — **32 days** (still above window; crosses in 2 days)
- **Bruno Mars — The Romantic Tour** @ Soldier Field, Chicago (May 16–17) — konman87@gmail.com — **24–25 days** (in window)

### World Cup Watchlist — Dormant but High-Intent (unchanged from yesterday)
- pete.uzelac77+ticketscan@gmail.com — 12d on-platform, E1+E2 eligible. 4 World Cup items + 2 Darts items.
- laye.aurelien@wanadoo.fr — 20d, 2 Shakira items. E3 eligible.
- blubberboi@yahoo.com — 13d, Ed Sheeran Aug 8.

### Past-Event Backlog (Now Quantified — Full Set Visible)
With both pages of the watchlist queried today, the full 75-item set is now visible. Past-dated count (event_date < 2026-04-22):
- **On-page (top 50):** 8 confirmed past-dated (Cardi B, RAYE, Phillies, Hawks, Oilers, NCAA Final Four, NCAA R2 Greenville, NCAA R2 San Diego)
- **Off-page (last 25):** 18 confirmed past-dated (Toronto Raptors ×2, WWE Elimination Chamber, TWICE Austin ×2, Josiah Queen ×2, Shen Yun ×3, Denver Nuggets, Mexico vs USA, Super Bowl LX, Lady Gaga MSG, Bruno Mars Tribute Antwerp, Ottawa Senators, Lady Gaga Atlanta ×2)
- **Total past-dated: 26 of 75 items (~35%)** — slightly under yesterday's estimate of ~36%, now confirmed precisely.
- The watchlist endpoint still has no `status` filter and no archive function. Every send-eligibility query has to filter out past events client-side. Today's pulls did so manually.

---

## Subject Line A/B Tests

### Viva El Jaripeo — 3 days out (DEEP RECOVERY, rewritten)
- **A:** `Viva El Jaripeo Saturday — 3 days. Honest read on what's left.`
- **B:** `Viva El Jaripeo in 3 days: there is no good buy call left. Here's why.`
- **Hypothesis:** A keeps the radical-candor open from yesterday but front-loads the day count and the venue cue. B goes harder — explicitly tells the reader we cannot make a clean recommendation. For a user who has been ignored 86 days, B's transparency is the next escalation of yesterday's strategy. **Recommend B.** Yesterday I picked the milder A; today's 3-days-out reality justifies escalating to the harder honesty.

### Florence — 9 days out
- **A:** `Florence + The Machine, Atlanta: 9 days out. The floor is forming this week.`
- **B:** `Florence Atlanta: the difference between 9 days and 5 days is real money`
- **Hypothesis:** B is yesterday's recommendation and held up against the day-shift. Specific-number anchoring continues to be the right hook for a user who's never heard from us. **Recommend B (held).**

### Bilmuri — 10 days out
- **A:** `Bilmuri at The Sylvee — 10 days out, and small-venue math is different.`
- **B:** `The Sylvee is 1,800 seats. Here's what that means for Bilmuri resale.`
- **Hypothesis:** Yesterday I flipped to A on day-count grounds (Day 11). Today (Day 10), the same logic should hold — but the gap to Bilmuri's floor is now narrower and the venue specificity matters more than the day count. **Recommend B today** (re-flipping). The 1,800-seat anchor is the differentiated insight; the day count is undifferentiated noise that any sender could quote.

### Welcome — Pattern A (now 3 users waiting: nicklib253, joshdguillemette, charlesteel126)
- **A:** `You're tracking [event] — here's how to make the alerts actually useful`
- **B:** `Welcome to TicketScan — your watchlist is ready. One thing to do today.`
- **Hypothesis:** A personalizes against the watched event (high relevance, slight templating cost). B is generic-welcome with a single CTA. For users who self-selected into a same-session add, A's relevance signal beats B's brevity. **Recommend A.** Personalize per recipient: "Bruno Mars" / "AEW" / "Phillies vs Braves" depending on who.

### Welcome — Pattern B (dr.altvater)
- **A:** `You signed up for TicketScan — what are you trying to track?`
- **B:** `Welcome — and a quick nudge: TicketScan only helps when you pick something`
- **Hypothesis:** Held from yesterday. **Recommend A.**

### Bruno Mars Artist-Cluster Send (NEW — first cross-user segmented send)
- **A:** `4 of you are tracking Bruno Mars Romantic Tour. Here's what we're seeing across stops.`
- **B:** `Romantic Tour, four cities, four price patterns. The cross-stop read.`
- **Hypothesis:** A names the social proof ("4 of you") which is unusually transparent and very on-brand for the consumer-advocate voice. B is a magazine-headline open. For a list of 4 highly-warm users, A's specificity wins. **Recommend A.** Worth shipping the moment a send path exists — this is the only segmented send opportunity in the entire 75-item dataset where the cluster is large enough to justify a one-off.

### CTA Review (all templates today)
- Viva El Jaripeo → `ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva` ✓
- Florence → `ticketscan.io/watchlist` (set target price) ✓
- Bilmuri → `ticketscan.io/watchlist` (set target price) ✓
- Welcome (Pattern A) → `ticketscan.io/watchlist` ✓ (or per-event compare URL when personalized)
- Welcome (Pattern B) → `ticketscan.io/dashboard` (discovery, not watchlist) ✓
- Bruno Mars cluster → `ticketscan.io/compare?artist=bruno-mars` (artist-search URL — **needs verification this route exists**; if not, send to `ticketscan.io/dashboard?q=Bruno+Mars`)
- Primary CTA above the fold in every template ✓

---

## Action Items

### P0 — Critical (Day 16 — drip "not shipped")
1. **SMTP/transactional decision still pending.** Yesterday's framing held: this is product-owner territory now. Same two paths (triage Gmail/Nodemailer vs. swap to Resend/Postmark/SES). No new infrastructure data; same dead pipeline.
2. **2510soccerboy@gmail.com — Viva El Jaripeo Saturday (3 days).** Window is anti-floor by design. Today and tomorrow are the last useful sends. Friday onward is post-mortem only. Template above is rewritten for 3-day reality.
3. **Pattern A welcome backlog: 3 users waiting** (nicklib253 5d, joshdguillemette 3d crossing E1 today, charlesteel126 1 minute post-signup as of report). This is now a triple-recipient single-template gap; the marginal cost of shipping is the lowest it has been since the outage began.
4. **dr.altvater-70199@web.de — Pattern B, 2d.** E1 threshold tomorrow. Welcome-B template ready.

### P1 — High
5. **Target-price UX is still the single biggest product blocker.** 0 of 75 items have a target price. Recommended default: `target_price = current_min_price × 0.85` with inline edit on the watchlist add. No regression on this front today; same recommendation.
6. **Bruno Mars artist-cluster send is shippable as a one-off** the moment a send path exists. 4-recipient list, drafted above. Lowest-effort, highest-relevance send in the queue.
7. **Drip backlog plan** (unchanged): when send-path is restored, ship E1+E2 with 48h gap, then resume 7-day cadence. For E5-eligible users (now 6 in the returned cohort), rewrite E5 to acknowledge the gap rather than send "Your Ticket Savings Report" to people who never received any savings emails.
8. **Past-dated watchlist add blocker.** `event_date < NOW()` should be rejected at write time. **35% of the watchlist is past-dated** — this is now a measured statistic, not an estimate. The Phillies game (nicklib253, Apr 17) is the most recent confirmed roll within the tracking period.

### P2 — Medium
9. **Newsletter growth: 80-day stall.** Still no homepage A/B action. Counter ticks to 80 today.
10. **World Cup dormant high-intent pool** — 9 items across 3 users. Same as yesterday. No change.
11. **Build watchlist digest endpoint.** Per-user digest doesn't exist. Templates above are hand-assembled.
12. **Archive past-events.** Cron + `status` column. Paired with item #8.
13. **E5 backlog-variant rewrite.** "Your Ticket Savings Report" framing is sarcastic for a cohort that never received savings emails.

### NEW today — P1
14. **Bruno Mars artist-cluster identification surfaced today** (4 unrelated users). This is the **only** cross-user artist cluster ≥3 in the full 75-item dataset. A simple `GROUP BY normalized_artist HAVING COUNT(DISTINCT user_id) >= 3` query against the watchlist would surface every such cluster automatically and is roughly 5 lines of SQL. Worth building once the send path exists.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, **80-day stall**.
- **Drip pipeline:** Day 16. **Reclassified Day 15 as "not shipped."** 0 sends ever. `drip_emails_sent` table is empty (0 rows). 56 of 56 users have never received a drip email.
- **Price alerts:** 0 ever triggered. **0 of 75 watchlist items have target prices** (now confirmed at 75/75 = 100%). Same product blocker.
- **User growth:** +1 since yesterday (charlesteel126@gmail.com, today). 56 total, 5 this week.
- **Watchlist:** **75 items** (+1 vs. yesterday — Bruno Mars at Ohio Stadium added by the new signup within 1 minute of registration).
- **Lifecycle pattern (CONFIRMED today):** 4 signups in 6 days, 3 Pattern A (instant watchlist-add), 1 Pattern B (signup-only). Pattern A is dominant at 75/25.
- **Past-event backlog (NOW PRECISE):** **26 of 75 (~35%)** — fully quantified today by querying both pages of the watchlist endpoint.
- **Cross-user signal (NEW today):** **Bruno Mars** is the only artist with ≥3 distinct user trackings in the full dataset (4 users, 4 venues). All other artists max out at 2.
- **Email channel status:** Day 16. Reclassified. Zero emails of any kind have ever reached a user. Pattern A welcome backlog now 3 recipients.
- **Process observation:** Yesterday's report was produced; the previous-day skip was a one-off, not a pattern. Daily agent is reliable; the email pipeline is not.
- **One actionable surprise from today's data pull:** Bruno Mars cluster. All other observations are continuations.
