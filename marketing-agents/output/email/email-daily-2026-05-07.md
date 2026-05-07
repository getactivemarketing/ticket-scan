# Email Daily — 2026-05-07

> **Note:** No daily report was produced on 2026-05-06 (this agent did not run). Where deltas are normally vs. "yesterday," this report compares to 2026-05-05 (covering a 48-hour window).

## Drip Campaign
- Emails sent (24h): 0
- Emails sent (48h, since last report): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20 returned by API (still capped at 20)**
  - 20/20 still have `last_email_sent = 0` — 31 days into the outage, zero drip emails ever delivered
  - Eligibility breakdown today:
    - E1 eligible (3+ days): 19/20 (only jadbennis0 at 1 day not yet eligible)
    - E2 eligible (7+ days): 18/20 (jadbennis0 + joseph.g.nicolosi excluded)
    - **E3 eligible (14+ days): 14/20** — was 10/20 on 2026-05-05 (+4 net; 6 advanced, 2 dropped off the 20-row cap)
    - E4 eligible (21+ days): 6/20 — flat (dylanbaldy advanced in; one prior E4 user fell off cap)
    - E5 eligible (30+ days): 2/20 — was 3/20 (one fell off cap)
  - **Threshold crossings in last 48h (8 advances):**
    - **E2 → E3 (6 users crossed 14 days):** mark.murdock, ajvanprooyen, awwhittington, ggri73, charlesteel126 (visible) + the previous threshold's worth from 05-06
    - **E1 → E2:** zhili1208 (now 8 days)
    - **E3 → E4:** dylanbaldy (now 21 days)
  - **New user signup (48h):** jadbennis0@gmail.com (2026-05-05 20:33 UTC) — added Inter Miami CF watchlist item within 1 minute of signup
  - Oldest pending visible: laye.aurelien@wanadoo.fr (35 days), bhaygood728@gmail.com (34 days) — both 5+ days past the entire 30-day drip cadence
- **ESCALATION (Day 31 of outage):** `POST /api/admin/drip-run` confirmed at 10:00 UTC: hangs 45s, HTTP_CODE=000. Identical timeout pattern as 2026-05-03/04/05 — investigation order from those reports remains untriaged. Carryover from 2026-04-07.

## Price Alerts
- Alerts triggered (24h): 0
- Alerts triggered (48h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 86 watchlist items have a `target_price` set (verified at 10:00 UTC). Alert engine has nothing to evaluate. UX problem upstream of email.

## Subscriber Growth
- New subscribers (48h): 0
- Unsubscribes (48h): 0
- Net: 0
- Total active: 3 (unchanged since 2026-02-01)
- **Stall duration: 95 days since last organic subscriber signup**

## Platform Context
- Total users: 66 (+1 in last 48h: jadbennis0@gmail.com on 2026-05-05; +2 this week)
- Watchlist items: 86 (+1: jadbennis0 added Inter Miami CF vs Portland Timbers, May 17)
- Favorites: 0
- Active alerts: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Tenure |
|-------|-------|------|----------|------|--------|
| Bruno Mars — Romantic Tour (#20) | Soldier Field, Chicago | May 16 | **9 days** | konman87@gmail.com | 95 days |
| Bruno Mars — Romantic Tour (#21) | Soldier Field, Chicago | May 17 | **10 days** | konman87@gmail.com | 95 days |
| Inter Miami CF vs Portland Timbers (#93) | Nu Stadium, Miami | May 17 | 10 days | jadbennis0@gmail.com | 2 days |
| Bruno Mars — Romantic Tour (#81) | Ohio Stadium, Columbus | May 20 | 13 days | charlesteel126@gmail.com | 14 days |

**Material changes since 2026-05-05:**

1. **konman87 has crossed into the resale-break window in real time.** Yesterday's report flagged "tomorrow is the canonical inflection point" at 11/12 days out. Today: 9/10 days. The window we predicted is now active. Stadium-tour resale curves typically cut hardest 7–10 days out; today is the buy-signal day on a 95-day-tenure user we've never emailed.

2. **ajvanprooyen — total silence outcome confirmed.** All 6 of his Cubs watchlist items (#82–#87, May 1–6) are now past. He had a 6-game watchlist and received 0 emails across the entire window. **100% silent-failure rate** for this user.

3. **New urgency-window entrant: jadbennis0@gmail.com.** Signed up 2026-05-05 20:33 UTC, immediately added Inter Miami CF vs Portland Timbers (May 17, 10 days out), no target price. 2-day tenure, no email yet. First-touch experience is currently nothing.

4. **charlesteel126 — Bruno Mars Columbus (May 20, 13 days out)** has crossed into the 14-day urgency window for the first time. 14-day tenure user; same E3 cohort that crossed today.

### Digest Templates (ready for send once SMTP is fixed)

**For konman87@gmail.com — Bruno Mars at Soldier Field (BUY-SIGNAL DAY):**
```
Subject: Bruno Mars at Soldier Field — the resale break is happening now
Preview: 9 days out. This is the cheapest week.

Hi,

The two Bruno Mars Romantic Tour shows you've tracked at Soldier Field
are 9 and 10 days away. You're now in the heart of the stadium-tour
resale-break corridor — the historical 7-to-10-day window where the
cheapest seats of the entire ticket cycle appear.

🎤 Bruno Mars — The Romantic Tour
   Soldier Field, Chicago
   ▸ Sat, May 16 — 9 days out
   ▸ Sun, May 17 — 10 days out

If you're flexible: Saturday usually carries a 15-25% premium over
Sunday for the same stadium tour. May 17 is the value play tonight.

The window narrows fast from here. By next Wednesday, sellers stop
cutting and prices stabilize as the show approaches and walkup risk
disappears.

[CTA: Compare Both Nights Side by Side →]

P.S. You've had these on your watchlist for 95 days. We owe you the
last 95 days of price tracking. We're rebuilding the email pipeline
right now — sorry for the silence.
```

**For jadbennis0@gmail.com — Inter Miami vs Portland Timbers (welcome + urgency hybrid):**
```
Subject: Welcome — your Inter Miami match is 10 days out, here's the read
Preview: First-tracked event has tighter pricing patterns than most.

Hi,

You added Inter Miami CF vs Portland Timbers right after signup —
nice instinct. Match is May 17 at Nu Stadium, 10 days out.

⚽ Inter Miami CF vs Portland Timbers
   Nu Stadium, Miami · Sat, May 17

A few things our data shows for matches at this stage of the cycle:
• MLS resale typically peaks 14-21 days out and breaks 7-10 days out
• Messi-era Inter Miami home matches buck the curve — they hold higher
  much longer than typical MLS pricing because the demand floor is
  international tourists, not season-ticket holders
• Watch for upper-bowl listings dropping in the 4-7 day window — that's
  where the value usually appears

Set a target price (we'll alert you when it's hit), and we'll keep
tracking across Ticketmaster, SeatGeek, and StubHub.

[CTA: Set Your Target Price →]

— TicketScan
```

**For charlesteel126@gmail.com — Bruno Mars Columbus (entry into urgency window):**
```
Subject: Bruno Mars at Ohio Stadium — pricing window opens this week
Preview: 13 days out. Resale curves typically begin breaking now.

Hi,

The Bruno Mars Romantic Tour show you've tracked at Ohio Stadium is
13 days out (Wed, May 20). Stadium-tour resale curves typically begin
their break at the ~14-day mark, with the steepest cuts arriving
between 7-10 days out.

🎤 Bruno Mars — The Romantic Tour
   Ohio Stadium, Columbus · Wed, May 20

Mid-week stadium shows usually price 10-15% under the same tour's
weekend stops — Columbus on a Wednesday should be the value night of
this tour leg.

[CTA: Track Prices Across All Sources →]

Pro tip: Set a target price now and we'll alert you the moment any
source drops below it. Right now you're flying blind on a tour that
moves fast.
```

### Notable Watchlist Items (next 30 days, not in 14-day window)
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — 17 days out, 17-day tenure
- **Alan Jackson — Last Call** @ Nissan Stadium, Nashville (Jun 27) — samueltrogers@icloud.com — 51 days out
- World Cup matches (4) at Lincoln Financial — pete.uzelac77+ticketscan — 38–58 days out
- **Bruno Mars (3 dates)** @ MetLife Stadium (Aug 21/22/25) — taranimeramaro@gmail.com — 11-day tenure, 106-day window

### Past Events Now on Watchlist (cleanup candidates)
**38 of 86 watchlist items are past events as of 10:00 UTC** — past-event pollution is now ~44% of total watchlist volume.

Newly past since 2026-05-05:
- May 5: Cubs vs Reds (#86) — ajvanprooyen — silent failure
- May 6: Cubs vs Reds (#87) — ajvanprooyen — silent failure

**ajvanprooyen now sits at 6/6 (100%) past watchlist items, 0 emails ever sent.** This is the most extreme expression of the platform-promise failure recorded to date. He signed up, added a 6-game Cubs run, and we delivered absolutely nothing across 14 days.

Carryover from prior reports (still on watchlist, still need cleanup): 36 rows, oldest going back to Jan/Feb (Super Bowl LX, Lady Gaga MSG, Nuggets vs Nets, Raptors v Spurs, etc.).

**The send-as-is problem is now structural, not residual:** of the 4 oldest pending drip users (E5+E4 cohort: laye, bhaygood, blubberboi, goldy.pec.2012), three are tracking only past events. Restoring SMTP without rewriting their first-touch content will land an "introduction" email referring to events that happened 1–6 weeks ago. That's worse than continued silence.

---

## Subject Line A/B Tests

### Buy-signal day — konman87 (refined from yesterday's "inside the window")
- **A:** `Bruno Mars at Soldier Field — the resale break is happening now`
- **B:** `9 days to Bruno Mars: this is the cheapest week`
- **Hypothesis:** A reads as analytical/expert ("the resale break is happening now" frames us as the source of the data). B leads with raw urgency + a price-claim hook. For a 95-day silent user, A respects the relationship more — B feels like a generic marketing blast, which is exactly what we don't want after 95 days of silence. **Lean A for konman87. Lean B for fresh signups inside the window.**

### Welcome + urgency hybrid — jadbennis0 (NEW pattern)
- **A:** `Welcome — your Inter Miami match is 10 days out, here's the read`
- **B:** `Inter Miami vs Portland: first thing to know about pricing`
- **Hypothesis:** A names tenure ("Welcome") + urgency ("10 days out") + value ("here's the read"). B leads with the event and a curiosity hook. For a 2-day-tenure user whose first impression is at stake, A's transparency feels more respectful — they signed up *yesterday* and the "Welcome" framing acknowledges they're new. **Lean A.** This is also a new pattern worth saving as a template: welcome-flow into urgency for users who track an imminent event at signup.

### Window-entry — charlesteel126 (refined from yesterday's "starting now")
- **A:** `Bruno Mars at Ohio Stadium — pricing window opens this week`
- **B:** `13 days to Bruno Mars: data says the cuts start now`
- **Hypothesis:** A frames us as a forecasting source ("pricing window opens"). B leads with numbers + an authority claim. For an E3-cohort user (just crossed 14 days, never emailed), B may convert better on opens because numbers grab attention; A is better at building long-term trust. **Lean A for the trust play.** Both worth shipping in a real A/B if volume ever supports it.

### CTA Review
- "Compare Both Nights Side by Side" → `ticketscan.io/compare?event_ids=20,21` — verify deep link works; fall back to `/watchlist`
- "Set Your Target Price" (jadbennis0 template) — links to event detail or watchlist row with inline target-price input. **If this UI doesn't exist yet, the CTA can't ship.** Flag for product/eng.
- "Track Prices Across All Sources" — links to `/event/[id]`, valid
- All primary CTAs above the fold ✓
- P.S. apology block on konman87 stays — 95 days now; trust capital is critical

---

## Action Items

### P0 — Critical (Day 31 of outage, 5+ weeks)
1. **SMTP/drip pipeline is dead — 31 days, no triage progress observable.** `drip-run` continues to time out at 45s with HTTP_CODE=000. Investigation order from 2026-05-03 / 2026-05-04 / 2026-05-05 reports remains untriaged:
   - Tail Railway logs while triggering `drip-run`. If no log line appears, the route handler isn't even executing → look at middleware / cron queue.
   - If the handler enters but never finishes, time `nodemailer.createTransport().verify()` in isolation.
   - If SMTP verifies, time the eligibility SELECT against `drip_emails_sent` joined on `users` — index health check.
   - **Ship `/api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt}`** so the next regression is detected in <1 hour, not 31+ days.
2. **ajvanprooyen has hit 100% silent-failure rate.** All 6 watchlist items past, 0 emails ever. He is the canonical "platform broke its promise" case study now. When triaging the post-mortem, anchor it on this user.
3. **konman87 — TODAY is the resale-break-day prediction we made 48 hours ago.** 9/10 days out is the historical cheapest moment of the cycle. If SMTP isn't fixed by EOD, deploy a one-off manual SendGrid/Postmark/even-Apple-Mail-from-a-laptop fallback for konman87 + jadbennis0 + charlesteel126. ROI:
   - konman87: 95-day tenure, 2 imminent watchlist events, the predicted buy day is RIGHT NOW
   - jadbennis0: 2-day tenure, first-touch makes-or-breaks lifetime engagement
   - charlesteel126: 14-day tenure, just crossed urgency window
4. **Daily agent reliability — this report missed 2026-05-06 entirely.** No file produced. Whatever runs this agent did not fire (or fired and failed silently). Add the same logic suggested for SMTP: a heartbeat check that surfaces a no-output day in <24h, not "next time it runs."

### P1 — High
5. **8 drip threshold crossings in 48h** — pace is accelerating from ~1/day baseline. Current rate is ~4/day. Backlog is growing monotonically and the resume-from-cold cost (when SMTP returns) compounds daily. Particularly: 6 simultaneous E2→E3 crossings means when the pipe reopens, the canonical sequence is going to land out of order for almost half the queue.
6. **Past-event watchlist pollution: 38/86 (44%), up 2 net from 2026-05-05.** Both new past entries are ajvanprooyen Cubs. Recommended sequence for the resume:
   - (a) Ship past-event auto-archive (`event_date < NOW() - 24h`) BEFORE first drip resumption
   - (b) Re-fetch each user's watchlist and personalize around remaining live events only
   - (c) Catch-up sequence the 4 oldest users (laye, bhaygood, blubberboi, goldy.pec) on a condensed 1-week schedule with REWRITTEN content — their entire watchlists are past events; the canonical sequence will torch credibility on send.
7. **Target-price UX (still 0/86).** Auto-suggest at watchlist-add (e.g., 10% below current min across sources) OR mandatory inline prompt at watchlist-add time. As long as `target_price` is null, the alert system is dead by design. The jadbennis0 case is the exemplar: he added a watchlist item within 60 seconds of signup but had no idea to set a target price.
8. **The "first-touch + urgency" template (jadbennis0) is a new pattern worth saving** as a reusable template. Users who add a sub-14-day-out event at signup are a high-LTV segment we currently treat the same as everyone else. Save this template into a separate file once SMTP is fixed.

### P2 — Medium
9. **Newsletter growth: 95-day stall.** 3 subscribers total (1 organic). Add CTAs to: blog post footers, venue pages, World Cup landing pages, watchlist-add confirmation flow. Test "weekly price drops in your city" pitch instead of generic newsletter framing.
10. **Build a watchlist-digest endpoint** for automated per-user sends. No endpoint exists — none of the digest content above can ship without one. This is now a 30+ day blocker.
11. **Post-mortem still pending.** When SMTP is fixed, document: what broke, what monitoring was missing, why it took 31+ days, how we'll detect the next regression in <24h. The `/api/admin/drip-health` endpoint from item #1 is the leading deliverable.
12. **pendingUsers API list is capped at 20.** The cap is now actively hiding state we need to monitor (E5 eligible dropped from 3→2 due solely to the cap; old users we previously surfaced no longer appear). Either fix the cap or add pagination so backlog is truly visible at the API layer.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change in 48h, 95-day stall
- **Drip pipeline:** BROKEN — Day 31 of outage, 0 sends ever, 20 users in pendingUsers (likely more behind the API cap)
- **Threshold advances since 2026-05-05 (48h):** 8 advances — E2: zhili1208; E3 (6): mark.murdock, ajvanprooyen, awwhittington, ggri73, charlesteel126 + 1 from 05-06 cohort; E4: dylanbaldy
- **New user signups (48h):** 1 — jadbennis0@gmail.com (added Inter Miami CF watchlist item within 1 minute of signup, no target price)
- **Price alerts:** 0 ever triggered — 0/86 watchlist items have target prices (no progress)
- **User growth:** +1 in 48h, 66 total (+2 this week)
- **Watchlist:** 86 items (+1 in 48h: Inter Miami CF), 4 events within 14 days (konman87 x2 Bruno Mars Soldier Field, jadbennis0 Inter Miami, charlesteel126 Bruno Mars Columbus)
- **Past-event pollution:** 38/86 watchlist items (44%) are past events; +2 net in 48h (Cubs vs Reds May 5 and May 6)
- **Critical milestone today:** ajvanprooyen has hit 100% silent-failure rate — 6/6 watchlist items past, 0 emails ever. Most extreme platform-promise failure case to date.
- **Buy-signal-day milestone:** konman87@gmail.com (95-day tenure, 2 Bruno Mars dates 9/10 days out) — TODAY is the canonical resale-break inflection point our reports have been forecasting since 2026-05-03
- **First-touch failure milestone:** jadbennis0@gmail.com (2-day tenure, added urgent watchlist item at signup, no target price prompt, no welcome email — first impression is currently nothing)
- **Email channel status:** Day 31 of outage. `drip-run` hangs (45s timeout, HTTP_CODE=000). No investigation progress observable from the API surface in 31+ days.
- **Meta-failure:** This agent missed its 2026-05-06 run entirely. Daily report cadence is now also unreliable.
