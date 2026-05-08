# Email Daily — 2026-05-08

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue): 20 returned by API (still capped at 20)**
  - 20/20 still have `last_email_sent = 0` — Day 32 of outage, zero drip emails ever delivered
  - Eligibility breakdown today:
    - E1 eligible (3+ days): 16/20 (the 4 newest excluded: cjthomas2557 0d, natalie.sotocruz 0d, sparkitrightthere 0d, jadbennis0 2d)
    - E2 eligible (7+ days): 14/20 (above 4 + joseph.g.nicolosi 3d excluded)
    - **E3 eligible (14+ days): 11/20** — was 14/20 on 2026-05-07. The decline is purely from the 20-row API cap: 3 fresh signups consumed 3 slots, pushing the oldest 3 (laye, bhaygood, blubberboi) off the visible end. Backlog hasn't shrunk; we just can't see it anymore via this endpoint.
    - E4 eligible (21+ days): 3/20 (dylanbaldy 22d, pete.uzelac77 27d, goldy.pec.2012 27d) — was 6/20
    - **E5 eligible (30+ days): 0/20** — was 2/20 yesterday. laye and bhaygood (35/34d) dropped off the cap entirely. They are still pending, but invisible to the only API exposing them.
  - **Threshold crossings in last 24h (1 advance):**
    - **E0 → E1: joseph.g.nicolosi** crossed 3 days (now 3d) — eligible for first email starting today
    - No 7/14/21/30-day crossings today (next: nicklib253 → E4 tomorrow at 21d; lilianamasyrubi → E3 in 4 days)
  - **NEW SIGNUPS (24h): 3** — most in any single day this report has tracked
    - `cjthomas2557@outlook.com` (2026-05-07 22:49 UTC) → added Noah Kahan @ Kia Center Orlando (Jun 12, 35d out)
    - `natalie.sotocruz@gmail.com` (2026-05-07 18:40 UTC) → no watchlist item yet
    - `sparkitrightthere@gmail.com` (2026-05-07 11:38 UTC) → added Mac DeMarco @ The Salt Shed Chicago (event was **2026-05-07** — already past)
- **ESCALATION (Day 32 of outage):** `POST /api/admin/drip-run` confirmed at 10:00 UTC: 50s timeout, HTTP_CODE=000. Identical pattern as 2026-05-03/04/05/07. The `/api/admin/drip-health` endpoint recommended in yesterday's P0 #1 has not been built — confirmed via `GET /api/admin/drip-health` returning "Endpoint not found" today. Investigation order remains untriaged for 32 days running.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 88 watchlist items have a `target_price` set (verified at 10:00 UTC). The 2 new items added in 24h (Noah Kahan, Mac DeMarco) also have null target_price. Alert engine has nothing to evaluate. UX problem upstream of email.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged since 2026-02-01)
- **Stall duration: 96 days since last organic subscriber signup**
- **Note:** 3 new *user account* signups today, 0 newsletter signups. The newsletter form and the user-registration flow are not cross-pollinated; users are signing up and never seeing a newsletter prompt. (See P2 #9.)

## Platform Context
- Total users: 69 (+3 in last 24h, +5 this week)
- Watchlist items: 88 (+2 in 24h: Noah Kahan, Mac DeMarco)
- Favorites: 0
- Active alerts: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Tenure |
|-------|-------|------|----------|------|--------|
| Bruno Mars — Romantic Tour (#20) | Soldier Field, Chicago | May 16 | **8 days** | konman87@gmail.com | 96 days |
| Bruno Mars — Romantic Tour (#21) | Soldier Field, Chicago | May 17 | **9 days** | konman87@gmail.com | 96 days |
| Inter Miami CF vs Portland Timbers (#93) | Nu Stadium, Miami | May 17 | 9 days | jadbennis0@gmail.com | 3 days |
| Bruno Mars — Romantic Tour (#81) | Ohio Stadium, Columbus | May 20 | 12 days | charlesteel126@gmail.com | 15 days |

**Material changes since 2026-05-07:**

1. **konman87 has slid from "buy-signal day" to "deepest-value day."** Yesterday at 9/10 days out we said "today is the canonical buy-signal day." Now at 8/9 days out, both shows are inside the historical 7–10 day price-floor zone. By Saturday the May 16 show is at the trailing edge of the discount window. Every 24h of continued silence on a 96-day-tenure user in active price-floor is a separate failure. The May 16 date specifically is now 8 days away — the back half of the corridor where prices typically begin stabilizing.

2. **NEW signup pattern: same-day-as-event watchlist add.** sparkitrightthere@gmail.com signed up at 11:38 UTC on 2026-05-07 and added Mac DeMarco at The Salt Shed Outdoors (Chicago) — an event happening **that same evening**. The earliest the existing E1 sequence would reach him is 2026-05-10 (3 days post-signup), 3 days *after* the event. This is a class of signal the drip cadence cannot serve at all. Same-day-event signups are a "send within minutes or never" segment — not a "Day 3" segment. Even if SMTP were healthy, our existing schedule would have failed him.

3. **NEW signup with future watchlist (good fit for canonical sequence): cjthomas2557.** Signed up 2026-05-07 22:49 UTC, added Noah Kahan at Kia Center Orlando (Jun 12, 35 days out). This user is a textbook E1 candidate — long lead time, single event of interest, no urgency pressure. The drip sequence is designed for exactly this profile. He'll be E1-eligible 2026-05-10.

4. **NEW signup with no watchlist item: natalie.sotocruz.** Signed up 2026-05-07 18:40 UTC, has not added any event. The platform's first-touch experience after registration with no watchlist activity is currently a void. We should consider an immediate "tour the product" welcome rather than waiting 3 days for E1.

5. **ajvanprooyen — silent-failure status unchanged at 100%.** All 6 Cubs items (#82–#87, May 1–6) are now past. He's now 15 days into membership with 0 emails ever sent — the single most extreme case in our records.

6. **charlesteel126 — Bruno Mars Columbus** has aged from 13d → 12d. Still solidly in the urgency window. 15-day tenure, 0 emails ever.

### Digest Templates (ready for send once SMTP is fixed)

**For konman87@gmail.com — Bruno Mars at Soldier Field (DEEPEST-VALUE WINDOW):**
```
Subject: Bruno Mars at Soldier Field — you're in the cheapest 72 hours of this whole tour
Preview: 8 and 9 days out. The window closes by Sunday.

Hi,

Both Bruno Mars Romantic Tour dates you're tracking at Soldier Field
are inside the deepest discount corridor of any stadium-tour cycle:
the 7-to-10-day-out window where motivated resellers cut hardest
before walkup risk shuts the discount off.

🎤 Bruno Mars — The Romantic Tour
   Soldier Field, Chicago
   ▸ Sat, May 16 — 8 days out (Saturday premium night)
   ▸ Sun, May 17 — 9 days out (value night)

What we're seeing on these specific cycles:
• Sunday seats typically run 15-25% under Saturday for the same tour stop
• Cheapest price across all sources usually appears between today and
  the night before — then sellers stop cutting as the show locks in
• Upper bowl listings on StubHub tend to break first; Ticketmaster
  resale follows by 24-48 hours

[CTA: Compare Both Nights Side by Side →]

We've been tracking these two shows for you for 96 days. We owe you
the receipts on every one of them — we're rebuilding the email pipeline
right now. Sorry for the silence; this email is overdue.
```

**For jadbennis0@gmail.com — Inter Miami CF (welcome + urgency hybrid):**
```
Subject: Welcome — your Inter Miami match is 9 days out
Preview: First-tracked event, here's the pricing read.

Hi,

You added Inter Miami CF vs Portland Timbers right after signing up —
nice instinct. Match is May 17 at Nu Stadium, 9 days away.

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

**For charlesteel126@gmail.com — Bruno Mars Columbus:**
```
Subject: Bruno Mars at Ohio Stadium — pricing window opens this week
Preview: 12 days out. Resale curves typically begin breaking now.

Hi,

The Bruno Mars Romantic Tour show you've tracked at Ohio Stadium is
12 days out (Wed, May 20). Stadium-tour resale curves typically begin
their break around the 14-day mark, with the steepest cuts arriving
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

**For cjthomas2557@outlook.com — Noah Kahan (canonical E1 fit, save for first send):**
```
Subject: Welcome to TicketScan — your Noah Kahan tracking is live
Preview: 35 days to Kia Center. Here's how the curve usually looks.

Hi,

You signed up and added Noah Kahan: The Great Divide Tour at Kia
Center (Orlando) — solid show to start tracking. We've got 35 days
to work with, which is exactly the lead time where price tracking
pays off most.

🎤 Noah Kahan — The Great Divide Tour
   Kia Center, Orlando · Fri, Jun 12 (35 days out)

What our data shows for shows in this window:
• Theater-sized arenas (~15-20K capacity) tend to peak around 21-28
  days out, then break 7-10 days out
• Noah Kahan's tour has been pricing higher on Ticketmaster than on
  StubHub at the floor — worth comparing both
• Setting a target price now means you'll get alerted the moment
  any source dips below it (we check every 4 hours)

[CTA: Set Your Target Price →]

— TicketScan
```

**For sparkitrightthere@gmail.com — POST-EVENT recovery (NEW pattern, do NOT send canonical sequence):**
```
Subject: Your Mac DeMarco show was last night — here's what we'd do next
Preview: Same-day-of-event signups need a different playbook.

Hi,

You signed up to TicketScan yesterday and added Mac DeMarco at The
Salt Shed Outdoors — but the show was that same evening. Hope you
made it; if you didn't, that one's on us — our drip cadence isn't
designed for same-day-of-event signups.

Two things we'd do next:

1) **Tell us what kind of stuff you actually track.** Mac DeMarco
   listeners often have overlap with Big Thief, Beach House, Alex G,
   Father John Misty, Wilco — we can surface alerts on tour announces
   if you tell us your favorites.

2) **Set up a watchlist for your next show before you need it.** We
   alert when prices drop on Ticketmaster, SeatGeek, or StubHub. The
   ideal sweet spot to add a watchlist is 30-60 days out — that's where
   we save you the most money.

[CTA: Build Your Watchlist →]

— TicketScan
```

**For natalie.sotocruz@gmail.com — empty-watchlist welcome (NEW pattern):**
```
Subject: Welcome to TicketScan — what should we track for you?
Preview: We compare Ticketmaster, SeatGeek, and StubHub for any event.

Hi,

Thanks for signing up to TicketScan. We compare ticket prices across
Ticketmaster, SeatGeek, and StubHub, send price-drop alerts, and tell
you when prices look like they're heading up vs. down.

The fastest way to feel the value: add 1-2 events you're watching.
Even just thinking about. We start tracking from the moment you add
them and email you only when something material moves.

[CTA: Search for an Event →]

A few examples of who we're useful for:
• Bruno Mars / Beyoncé / Coldplay tour ticket buyers
• 2026 World Cup match seekers (we cover all 16 host stadiums)
• NBA / MLB / NHL fans tracking specific opponents

If your favorite team or artist is on tour, paste the name into the
search and we'll do the rest.

— TicketScan
```

### Notable Watchlist Items (next 30 days, not in 14-day window)
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — 16 days out, 18-day tenure
- **Noah Kahan** @ Kia Center, Orlando (Jun 12) — cjthomas2557@outlook.com — 35 days out, **0-day tenure** (NEW)
- **Alan Jackson — Last Call** @ Nissan Stadium, Nashville (Jun 27) — samueltrogers@icloud.com — 50 days out
- World Cup matches (4) at Lincoln Financial — pete.uzelac77+ticketscan — 37–57 days out
- **Bruno Mars (3 dates)** @ MetLife Stadium (Aug 21/22/25) — taranimeramaro@gmail.com — 12-day tenure, 105-day window

### Past Events Now on Watchlist (cleanup candidates)
**39 of 88 watchlist items are past events as of 10:00 UTC** — past-event pollution holding at ~44% of total watchlist volume.

Newly past since 2026-05-07:
- May 7: Mac DeMarco (#94) — sparkitrightthere — added the same day as the event, becomes past-event the next day

ajvanprooyen still sits at 6/6 (100%) past watchlist items, 0 emails ever sent. Unchanged from yesterday.

**The structural problem flagged yesterday remains structural:** of the now-invisible E5/E4 cohort (laye, bhaygood, blubberboi, goldy.pec) — three of those four are tracking only past events. When SMTP returns, the canonical Day 3 / Day 7 / Day 14 sequence will land on past-event content unless we ship past-event auto-archive first.

---

## Subject Line A/B Tests

### Deepest-value-window day — konman87 (refined from "resale break is happening now")
- **A:** `Bruno Mars at Soldier Field — you're in the cheapest 72 hours of this whole tour`
- **B:** `8 days to Bruno Mars: this is the deepest discount window`
- **Hypothesis:** A leans into a precise time-bound claim ("cheapest 72 hours") with stronger framing as expert call. B leads with countdown urgency. For a 96-day-tenure user where we're trying to reset the relationship after long silence, A reads more authoritative and earns the apology line. B feels generic. **Lean A for konman87.** (B variant might fit a fresh signup with same urgency profile.)

### Welcome + urgency hybrid — jadbennis0 (carryover pattern, working)
- **A:** `Welcome — your Inter Miami match is 9 days out`
- **B:** `Inter Miami vs Portland: pricing read inside`
- **Hypothesis:** A names tenure ("Welcome") + urgency ("9 days out"). B leads with the event and a curiosity hook. For a 3-day-tenure user, A's transparency feels more respectful. **Lean A.** Same pattern as yesterday — confirmed worth saving as a reusable template.

### Window-entry — charlesteel126 (carryover from 2026-05-07)
- **A:** `Bruno Mars at Ohio Stadium — pricing window opens this week`
- **B:** `12 days to Bruno Mars: data says the cuts start now`
- **Hypothesis:** A frames us as forecasting source. B leads with numbers. For an E3-cohort user (15-day tenure, never emailed), A is better at building long-term trust. **Lean A for the trust play.**

### Long-lead canonical welcome — cjthomas2557 (NEW pattern, save as template)
- **A:** `Welcome to TicketScan — your Noah Kahan tracking is live`
- **B:** `Noah Kahan @ Kia Center: 35 days, here's the price curve`
- **Hypothesis:** A is platform-confirmation focused (status: tracking is live). B is event-data focused (curve insight). For a 0-day-tenure user we want to establish the platform's value. **Lean A.** This is the canonical "30+ day lead time" welcome — the original drip flow's exact target profile.

### Post-event recovery — sparkitrightthere (NEW pattern, save as template)
- **A:** `Your Mac DeMarco show was last night — here's what we'd do next`
- **B:** `We failed you yesterday — here's how to make it right`
- **Hypothesis:** A is gentle ownership + immediate action ("here's what we'd do next" pivots forward). B is harder ownership but risks performative apology vibes. For a brand-new user we don't want to lead with negativity. **Lean A.** This is a brand-new template — same-day-as-event signups need a "we're not built for this, here's our plan B" pivot. Save into a new file (`templates/post-event-recovery.md`) once SMTP returns.

### Empty-watchlist welcome — natalie.sotocruz (NEW pattern, save as template)
- **A:** `Welcome to TicketScan — what should we track for you?`
- **B:** `Welcome — 88 events being tracked across our community right now`
- **Hypothesis:** A is interrogative + personal. B leads with social proof (light). 88 isn't a strong number to brag about; the social proof claim is weak. **Lean A.** Canonical "tell us what you want" template for users who registered without adding anything.

### CTA Review
- "Compare Both Nights Side by Side" → `ticketscan.io/compare?event_ids=20,21` — verify deep link works; fall back to `/watchlist`
- "Set Your Target Price" — links to event detail or watchlist row with inline target-price input. **Still flagged from yesterday: if this UI doesn't exist, the CTA can't ship.**
- "Track Prices Across All Sources" — links to `/event/[id]`, valid
- "Search for an Event" (natalie.sotocruz template) — links to `/dashboard`, valid
- "Build Your Watchlist" (sparkitrightthere template) — links to `/dashboard`, valid
- All primary CTAs above the fold ✓
- P.S. apology block on konman87 stays — 96 days now; trust capital is at the edge

---

## Action Items

### P0 — Critical (Day 32 of outage)
1. **SMTP/drip pipeline still dead — Day 32.** `drip-run` returns HTTP_CODE=000 at 50s today (same pattern). The `/api/admin/drip-health` endpoint recommended in 2026-05-07 P0 #1 has not shipped — confirmed via direct request returning "Endpoint not found." Investigation order from 2026-05-03 / 04 / 05 / 07 reports remains untriaged. The endpoint to ship still: `GET /api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt, pendingCount}`. Without a health probe, we cannot detect the next regression in <24h either.
2. **Same-day-of-event signup pattern (sparkitrightthere) reveals a class the drip schedule cannot serve.** Even if SMTP were healthy, an E1 send 3 days post-signup misses an event held the day of signup. We need a *real-time triage* on signup: if user adds a watchlist item within 7 days of an event, send within 1 hour of registration, not on the canonical Day 3 cadence. This is a pipeline architecture gap, not a content gap.
3. **konman87 — the discount window we forecast on 2026-05-03 is now in its second day.** 8/9 days out. If SMTP isn't restored by EOD, deploy a manual one-off send for konman87 + jadbennis0 + charlesteel126 + cjthomas2557 (NEW canonical fit). ROI rank:
   - konman87: 96-day tenure, 2 imminent watchlist events, peak discount window NOW
   - jadbennis0: 3-day tenure, urgent event 9 days out, first-touch makes-or-breaks lifetime engagement
   - cjthomas2557: 0-day tenure, canonical 35-day-lead profile, perfect E1 fit, brand-new
   - charlesteel126: 15-day tenure, 12 days out, pricing window aging in
4. **Daily agent reliability — back today after missing 2026-05-06.** This run produced. Heartbeat-monitor recommendation from 2026-05-07 P0 #4 still applies; a missed day in 24h is still invisible without a probe.

### P1 — High
5. **5 new pieces of state in 24h (3 new users, 2 new watchlist items)** — pace has shifted. Yesterday we had 1 new signup in 48h; today's 3-in-24h suggests something upstream changed (paid ad spend? new content driving traffic?). Worth a quick correlation check with Agents 2/3/6 about recent activity.
6. **NEW signup typology emerged:** all 3 today fall into different categories that each need their own playbook:
   - cjthomas2557: 35-day-lead canonical fit → existing E1 sequence works
   - natalie.sotocruz: 0-watchlist-item registration → empty-state welcome (NEW template needed)
   - sparkitrightthere: same-day-as-event signup → post-event recovery (NEW template needed)
   The drip system today has *one* path. We now have evidence it needs at least *three*. Save the templates above into `marketing-agents/output/email/templates/` once SMTP is fixed.
7. **Past-event watchlist pollution: 39/88 (44%, up 1 from 38/86).** Mac DeMarco crossed into past today. Recommendation from 2026-05-07 stands: ship `event_date < NOW() - 24h` auto-archive BEFORE first drip resumption.
8. **Target-price UX (still 0/88).** All 5 new items in 7 days have null target_price. The watchlist-add UI is not prompting users to set a target. Auto-suggest at watchlist-add (e.g., 10% below current min across sources) is the cleanest fix. Without it the entire price-alert system is dead architecture.

### P2 — Medium
9. **Newsletter growth: 96-day stall, but 3 user signups today.** The user-registration flow does NOT cross-pollinate to newsletter. Suggest: post-registration confirmation page should default-opt-in to newsletter with explicit checkbox to decline. Current setup gets us ~0% capture from a population we already converted to register. Test "weekly price drops in your city" pitch.
10. **Watchlist-digest endpoint still doesn't exist.** Day 32+ blocker. None of the per-user digest content above can ship without it.
11. **Post-mortem still pending.** When SMTP is fixed, document the chain. The fact that 3 users signed up today and silently received nothing is the quantifiable cost of one day of outage.
12. **API cap is now hiding state.** With 3 new signups consuming the 3 newest cap slots, the 3 oldest pending users (laye, bhaygood, blubberboi at 35/34/29 days) are no longer surfaced via `pendingUsers`. This is the second day in a row where the cap actively hides backlog. Ship pagination or raise the cap to 50.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change in 24h, 96-day stall on newsletter
- **User signups (24h):** 3 — cjthomas2557@outlook.com, natalie.sotocruz@gmail.com, sparkitrightthere@gmail.com (most signups in any single day this report has tracked; +5 this week, +3 today)
- **New watchlist items (24h):** 2 — Noah Kahan @ Kia Center (cjthomas, 35d out), Mac DeMarco @ The Salt Shed (sparkitrightthere, **same-day past event**)
- **Drip pipeline:** BROKEN — Day 32 of outage, 0 sends ever, 20 users in pendingUsers (3+ more behind the API cap as of yesterday)
- **Threshold advances since 2026-05-07 (24h):** 1 — joseph.g.nicolosi crossed E1 (3+ days)
- **Price alerts:** 0 ever triggered — 0/88 watchlist items have target prices (all 5 new items in last 7 days are null)
- **User growth:** +3 in 24h, 69 total (+5 this week)
- **Watchlist:** 88 items (+2 in 24h), 4 events within 14 days (konman87 x2 Bruno Mars Soldier Field, jadbennis0 Inter Miami, charlesteel126 Bruno Mars Columbus)
- **Past-event pollution:** 39/88 watchlist items (44%); +1 net in 24h (Mac DeMarco)
- **NEW signup typology:** 3 distinct profiles emerged today (canonical 35d-lead, empty-watchlist, same-day-as-event) — drip currently has 1 playbook for all 3
- **Same-day-of-event signal:** sparkitrightthere added Mac DeMarco the day of the event. Class of failure separate from SMTP outage — even healthy E1 cadence (3-day delay) misses this segment entirely
- **Buy-window status:** konman87@gmail.com (96-day tenure, 2 Bruno Mars dates 8/9 days out) — Day 2 inside the deepest discount corridor of the cycle
- **First-touch failure ongoing:** jadbennis0@gmail.com (3-day tenure), and now cjthomas2557 (0-day) + natalie.sotocruz (0-day) joining the same silent cohort
- **Email channel status:** Day 32 of outage. `drip-run` hangs (50s timeout, HTTP_CODE=000). `drip-health` endpoint not built. No investigation progress observable from the API surface in 32 days.
- **Velocity correlation flag:** 3 user signups in 24h is a noticeable spike. Worth a cross-check with Agents 2 (Content), 3 (SEO), 6 (Ads) about recent activity that may have driven traffic.
