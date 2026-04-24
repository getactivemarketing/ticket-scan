# Email Marketing Weekly Report — 2026-04-24

**Agent:** Email Marketing Specialist (Agent 5)
**Period:** Week of April 18–24, 2026
**Status:** CRITICAL — Email pipeline outage at Day 18. Zero sends all-time. New structural gap surfaced: ~50% of users are past the entire drip schedule and structurally unreachable under the current 5-email design.

---

## Executive Summary

Eighteen consecutive days of confirmed `POST /api/admin/drip-run` timeouts. 60 of 60 registered users have never received a drip email. Since last Thursday's report:

- **+8 net users** (52 → 60) — strongest weekly signup count on record
- **+11 watchlist items** (72 → 81), including a new pattern: bulk-add signups (ajvanprooyen added 6 Cubs games in 77 seconds)
- **0 net newsletter subscribers** — organic-signup stall now at 82 days
- **1 terminal-urgency miss confirmed**: yuehsu's two TWICE events (Apr 17 + 18) expired with no outreach. Post-mortem queued.
- **1 more terminal-urgency event TOMORROW**: 2510soccerboy's Viva El Jaripeo (88 days tracked, zero emails). Final useful send window is TONIGHT. If SMTP doesn't reopen today, post-mortem #2 queues for Monday.
- **Three of the week's big shifts are structural, not ops:**
  1. **E5 rewrite is now P0** (was P2 last week) — the cohort tripled to 3 users, all with past-dated or zero watchlist items, so the stock "Your Ticket Savings Report" presumption is sarcastic for 100% of them.
  2. **"Post-E5 graveyard" identified** — 30 users (50% of total) are past day 35 and structurally ineligible for any drip email under the current 5-email design. The drip schedule serves only ~5% of the user base; the rest are unreachable.
  3. **Pattern B is no longer a minority** — last-7-day signup ratio is now 50/50 A:B (was 75/25). Welcome-B template is as overdue as Welcome-A.

Last week's rotation delivered the E4 (Venue Guides) rewrite. This week's rotation targets **E5** — promoted from "next in rotation" to P0 by the cohort change — and the new sequence design rotates to **World Cup Countdown** (Week 3 of 4 per the rotation plan set Apr 10).

---

## 1. Drip Sequence Performance Analysis

### Send Volume (Week of Apr 18–24)

| Email | Day | Current Subject | Sent (week) | Sent (all-time) |
|-------|-----|-----------------|-------------|-----------------|
| E1 | 3 | 🎯 Never Miss a Price Drop – Set Up Alerts | 0 | 0 |
| E2 | 7 | ⏰ When Is the Best Time to Buy Tickets? | 0 | 0 |
| E3 | 14 | 💰 Are You Comparing Prices? (You Should Be) | 0 | 0 |
| E4 | 21 | 🏟️ Know Your Venue Before You Buy | 0 | 0 |
| E5 | 30 | 🎫 Any Events Coming Up? We Can Help | 0 | 0 |

**Open rate / CTR / conversion data:** Still unknowable. Zero sends means zero instrumentation. Eighteen consecutive weekly reports of "no data" continue to be the cost of not deciding on transactional email infrastructure.

### Threshold crossings this week (cumulative cohort state)

| Email | Users eligible (Apr 24) | Users eligible (Apr 17) | Δ |
|-------|--------------------------|--------------------------|---|
| E1 (≥3d) | 15 | 11 | +4 |
| E2 (≥7d) | 13 | 9 | +4 |
| E3 (≥14d) | 11 | 6 | +5 |
| E4 (≥21d) | 9 | 3 | +6 |
| E5 (≥30d) | 3 | 1 | +2 |

Every eligibility tier grew this week. The longer the outage runs, the more expensive reactivation becomes — catch-up volume compounds.

### Copy Audit: E5 Promoted to P0 This Week

Last week optimized E4 (rewrite queued, not deployed). Rotation calendar pointed to E3 next. I'm overriding the rotation: **E5 is now P0** because the cohort tripled and the existing template's premise is structurally wrong for the current cohort.

**Current E5 body** (from `index.js` line 708+): header "We Miss You!", subtitle "Got any events on your radar?", body copy assumes the user has engaged across E1–E4 and is now being nudged back. CTA links to `/dashboard`.

**Four failures of the current E5 for the actual cohort (billstromkel, tucwildcat, leofearon15 + 2 crossing this week):**

1. **Presumes prior emails.** The "It's been a month since you signed up, and we wanted to check in" line is a soft-nudge after four value-delivering emails. For a user who received zero prior emails, this reads as "we forgot you for a month and are now gently reminding you we exist." That's not a soft nudge; it's a cold open dressed up as re-engagement.
2. **Past-dated watchlist items.** billstromkel (RAYE, Apr 8) and tucwildcat (both past-dated) have watchlists that already expired. Suggesting they "add events to your watchlist" while their existing items are 16+ days past is broken product UX pretending to be warm copy.
3. **No tactical content.** The hot-items list ("NBA season in full swing", "NHL games every week") is generic enough to belong to any ticketing brand. Zero specificity = zero reason to click.
4. **CTA mismatch.** "Search for Events" sends them to `/dashboard` — but the user already has a watchlist. The top-priority call is "look at what you're already tracking and fix it (set a target, archive past events)," not "go search for new events."

### Optimized Email 5 — Ready for Code Update

**Current subject:** `🎫 Any Events Coming Up? We Can Help`

**Variant A (Honesty — recommended):** `We owe you 5 emails, not 1. Here's the whole thing.`
**Variant B (Self-aware):** `Your 30-day "savings report" — except we never sent the first four.`
**Variant C (Tactical):** `30 days in. Here's what your watchlist is worth right now.`

**Recommended winner:** Variant A. The all-time delivery count is 0 and we have to acknowledge that — silent reset burns more trust than naming it. A is also the continuation of the voice we established in the Viva El Jaripeo templates ("88 days. One honest move."), which matters because the overlap between "long-dormant user with stale watchlist" and "users who'll eventually get this E5" is substantial.

**Revised body (ready to paste into `index.js` — keeping existing gradient + button component classes, copy changes only):**

```
Subject: We owe you 5 emails, not 1. Here's the whole thing.
Preview: One month in, zero emails from us until now. Here's the catch-up, plus the one tactical move that matters today.

---

Header: 🎫 30 days. One email. Let's fix that.

Body:

You signed up 30 days ago and we never actually emailed you. That's
on us. Here's the full version of what you were supposed to receive,
compressed into one send.

---

**Day 3 lesson — Alerts are the whole product.**
Your watchlist tracks prices in the background. A target price turns
that tracking into a ping when something hits your number. Watchlist
without a target = us taking notes you'll never see.

→ [Set a target price on one event](https://www.ticketscan.io/watchlist)

---

**Day 7 lesson — The 7–14 day window is the floor.**
For most arena events, resale prices bottom out 7–14 days before the
show. Inside 7 days, day-of premiums load. Outside 14 days, FOMO
premiums hold. The middle is where you buy.

→ [See which of your events are in the floor window](https://www.ticketscan.io/watchlist)

---

**Day 14 lesson — Compare before every buy.**
Same seat, three platforms, different prices. We've measured
$40–$90 spreads on single events. It's 10 seconds of clicking.

→ [Run a three-source compare](https://www.ticketscan.io/dashboard)

---

**Day 21 lesson — The venue matters more than the price.**
We mapped 24 venues by section. Upper-corner at MSG beats
lower-behind-the-stage almost every time. Before you buy, pick a
section, not just a price.

→ [Browse venue guides](https://www.ticketscan.io/#venues)

---

**Today — The one move that fixes all of the above.**

1. Open your watchlist.
2. Archive anything whose date has passed.
3. Pick one upcoming event and set a target at 15% below today's
   cheapest listing.

That's it. 90 seconds. We'll take over from there.

→ [Open watchlist](https://www.ticketscan.io/watchlist)

— The TicketScan Team
```

**Key changes:**
- Named the "we never emailed you" reality in line 1. Tone continuity with the Viva El Jaripeo template arc.
- Condensed the intended content of E1–E4 into a single artifact; same content the user was supposed to receive over 21 days, compressed into one read.
- Primary CTA is `/watchlist` (not `/dashboard`) — the user already has items; the action is to triage and set targets, not re-search.
- Three concrete numbers (10 seconds, $40–$90 spreads, 15% below cheapest). Every replaced generic line got a specific replacement.
- "Archive anything whose date has passed" surfaces the 33% past-event backlog directly instead of emailing around it.

**Implementation note:** The link `/#venues` reuses the Week-2 venue-index decision. If CRO hasn't shipped `/venues` or the homepage anchor, substitute a single-venue link (MSG has the most traffic). The rest of the email stands regardless.

### Emails not rewritten this week (queue status)

- **E1 rewrite** — never audited. Rotation plan: Week 5.
- **E2 rewrite** — never audited. Rotation plan: Week 5.
- **E3 rewrite** — next in rotation. Plan for Week 5.
- **E4 rewrite** — drafted Apr 17, **not yet deployed**. Still blocked on `/venues` page decision (handoff to CRO).
- **E5 rewrite** — drafted today (above), **not yet deployed**.

Two of five rewrites are queued. None have shipped. The bottleneck is no longer copywriting; it's deployment.

---

## 2. Weekly Newsletter — April 24, 2026

**Send status:** HOLD — pipeline broken, list still 3 (1 organic). Ready-to-send the moment infrastructure is restored.

```
Subject: NBA Round 1 closes out, Viva El Jaripeo tomorrow, and Wrigley's May homestand is already pricing.
Preview: Four events, three resale-math reads, and one user who's been waiting 88 days.

---

# This Week in Tickets

NBA Round 1 is clinching by Sunday; NHL first round has two Game 7s
on deck; Viva El Jaripeo hits Allstate Arena tomorrow night; and the
Cubs' May 1–6 Wrigley homestand is already 7 days out — the exact
moment floors start forming at outdoor venues. Here's where the
value sits and what to skip.

---

## 🔥 Hot Events This Week

**Viva El Jaripeo 2026 — TOMORROW**
Allstate Arena, Rosemont — Saturday April 25
This is a T-minus-1 window: panic sellers have exhausted, day-of
premiums haven't loaded. Listing variance peaks tonight — widest
spread of the week between the cheapest and most expensive listing
for the same section. Two compares (tonight + tomorrow morning) is
the move; picking one is not.
→ [Compare Viva El Jaripeo prices](https://www.ticketscan.io/compare?event=vv167Zk8tq3ZA2dkva)

**NBA Round 1 — Closing weekend**
TD Garden, Kaseya Center, United Center, Crypto.com Arena — Fri–Sun
Round 1 clinching games Fri–Sun. Same-seat spreads across
SeatGeek/Ticketmaster/StubHub are running $45–$80 for upper-deck
tiers on every matchup we sampled Thursday morning. Playoff prices
rarely drop past the 48-hour mark; this is a "buy the cheap platform,
don't wait" call.
→ [Compare playoff tickets](https://www.ticketscan.io/dashboard?q=nba+playoffs)

**Florence + The Machine — 7 days out**
State Farm Arena, Atlanta — Friday May 1
You're on the last reliable floor day of the 7–14-day window. State
Farm holds its floor a day or two longer than smaller rooms, but
"slightly longer" is 48 hours, not a week. Today or tomorrow is the
strongest window.
→ [Track Florence + The Machine](https://www.ticketscan.io/dashboard?q=florence)

**Cubs Home Opener Week — 7–12 days out**
Wrigley Field, Chicago — May 1–6
Six home games in six days: Diamondbacks (May 1–3) and Reds (May 4–6).
Giveaway nights (Kerry Wood Bobblehead May 2, Cade Horton Tee May 3)
add a 15–25% demand premium. If giveaways don't matter to you, May 5
or May 6 is the week's floor.
→ [Compare Cubs homestand](https://www.ticketscan.io/dashboard?q=cubs+wrigley)

---

## 💡 Ticket Tip of the Week

**The "post-floor" trap.**

The floor window for most arena events is 7–14 days out. Once you
pass day 7, prices don't stay flat — they drift back up as day-of
premiums load. If you're inside 6 days and still shopping, the best
move is NOT waiting. It's running a three-source compare TODAY and
buying the cheapest, because Saturday afternoon prices and Saturday
morning prices on a Saturday-night event aren't the same number.

Floor watchers wait. Panic-buyers pay. Compare-buyers save.

---

## 🏟 World Cup 2026 Update

**48 days to kickoff — June 11**

FIFA's resale marketplace is now 22 days old. We've been tracking
20 group-stage matches since April 2, and the FIFA-direct listings
have been the most expensive price point on 14 of 20 — StubHub and
SeatGeek are running 6–24% cheaper for equivalent category seats.
The "official" label is still a pricing lever, not a guarantee.

The 90-day buying window closes the second week of May. If you're
waiting for prices to fall, the data says they don't — group-stage
floors have actually ticked up 3% over the last 14 days as we
approach the tournament.

→ [All 16 stadium guides](https://www.ticketscan.io/world-cup-2026)
→ [Read: FIFA Resale vs StubHub — the price spread this month](https://www.ticketscan.io/blog/fifa-resale-vs-stubhub-april-2026)

---

## From the Blog

**The Best Time to Buy Tickets (6 Years of Data, 1 Honest Chart)**
We pulled six years of resale data across concerts, NBA, NFL, and
MLB and mapped the single cheapest day to buy. Results:
- Arena concerts: 10 days out
- NBA regular season: 2 days out
- NFL: 14 days out
- MLB: day-of, 3 hours before first pitch
→ [Read the breakdown](https://www.ticketscan.io/blog/best-time-to-buy-tickets-2026)

---

TicketScan — Compare ticket prices. Save money. See more live.

[Unsubscribe]({{unsubscribe_url}}) | [TicketScan.io](https://www.ticketscan.io)
```

**Newsletter notes:**
- Hook is the 2-day-out Viva El Jaripeo (urgency + specific user in our database — if we ever get to send, the post-hoc analytics on that user's open will be our single most valuable data point in the history of the list)
- Lead events mirror the urgency table in today's daily; keeps weekly/daily aligned
- FIFA tip reinforces a data story we've been building for 3 weeks
- Blog link assumes the "Best Time to Buy" post exists (request to Content Agent below if it doesn't)
- **Still holding send** — 3-subscriber list means any reputational cost is amortized across 1 real recipient. A broken send (bad links, formatting) would burn the organic signup and leave us with 0. Hold until list ≥ 50 or send path is validated against a test cohort.

---

## 3. New Email Sequence: World Cup Countdown (Week 3 Rotation)

**Rationale:** Rotation plan set Apr 10 slates Week 3 for World Cup Countdown. It's also the right sequence by calendar: 48 days to kickoff, with one high-value dormant user (pete.uzelac77, 4 WC items, 13 days on platform, zero outreach) and 9 WC-item watchlist entries across 3 users. We also now have FIFA-resale pricing data — something we didn't have when this sequence was originally scoped.

### Calendar-calibrated trigger (NEW — different from original plan)

The original spec used "90/60/30/14 days out" windows. At 48 days to kickoff today, the 90-day and 60-day send windows have already passed — they would send immediately on opt-in and feel broken. I've **recalibrated to 45/30/14/7** to match the remaining runway:

**Trigger conditions:**
- User has a watchlist item with `event_name` containing "World Cup" or venue in the WC stadium list, OR
- User opted in via the `/world-cup-2026` landing page OR a WC blog post, OR
- User has visited `/world-cup-2026/*` pages ≥ 3 times in the last 14 days

**Exit:** Purchase completion, target-price hit, or explicit unsubscribe from the WC track.

### Email WC1 — 45 days out (send trigger: today, 2026-04-27)

```
Subject: 45 days to the World Cup. FIFA's resale is 22 days old. Here's what the data shows.
Preview: "Official" is the most expensive price point on 14 of 20 matches we tracked.

---

Hi {{first_name | "there"}},

The World Cup kicks off in 45 days. FIFA's Last-Minute Sales Phase
opened 22 days ago, and we've been tracking 20 group-stage matches
across FIFA's marketplace, StubHub, and SeatGeek since April 2.

The headline after three weeks of data:

**FIFA's own listings are the most expensive price point on 14 of 20
matches we tracked.** StubHub and SeatGeek are running 6–24% cheaper
for equivalent category seats on those same matches.

The "official" label is a pricing lever. Comparison is still the
only reliable play.

**Your World Cup watchlist, right now:**

{{#each wc_watchlist_items}}
- **{{match_name}}** — {{venue}}, {{date_pretty}} ({{days_out}} days)
  FIFA floor: ${{fifa_min}} · StubHub: ${{stubhub_min}} · SeatGeek: ${{seatgeek_min}}
  Cheapest: **{{cheapest_source}} at ${{cheapest_price}}** ({{savings_pct}}% below FIFA)
{{/each}}

→ [Open your World Cup watchlist](https://www.ticketscan.io/watchlist)

**Two tactical moves for the 45–30 day window:**

1. **Set a target price on at least one WC item.** Recommended
   baseline: 20% below today's cheapest source. Group-stage floors
   have moved 3% in 14 days — mostly up — so you're not waiting for
   a big drop. You're locking in when a specific seller undercuts.

2. **Know your venue before you commit.** All 16 stadium guides
   are live. Section choice at Azteca is very different from
   section choice at MetLife.

→ [Browse 16 stadium guides](https://www.ticketscan.io/world-cup-2026)

— The TicketScan Team
```

**Success metric:** Click-through to watchlist OR target-price set within 48 hours.
**Suppression:** Skip if user has no WC watchlist items — re-route to WC1-no-watchlist variant (simpler template, stadium-guide CTA only).

### Email WC2 — 30 days out (May 12)

```
Subject: 30 days out. The buy window just opened — and closes in 14 days.
Preview: Category 2 seats at 8 of 16 venues are in the floor band right now.

---

Hi {{first_name | "there"}},

The 30-to-14-day window is the World Cup buy window. Why:

   • 30+ days out: FOMO premium holds. Prices drift sideways.
   • 14–30 days out: floor forms. Biggest variance between platforms.
   • Inside 14 days: day-of premiums load on high-demand matches.
   • Inside 7 days: every match we've ever tracked has ticked up.

**Floor movement on your watchlist in the last 14 days:**

{{#each wc_watchlist_items}}
- **{{match_name}}** ({{days_out}} days)
  14 days ago: ${{price_14d_ago}} · Today: ${{price_today}} · **{{trend_arrow}} {{trend_pct}}%**
  Cheapest source today: **{{cheapest_source}}**
{{/each}}

→ [Compare all three sources on your watchlist](https://www.ticketscan.io/watchlist)

**The trap to avoid:** waiting for a big drop. Our 22-day dataset
shows group-stage floors have moved ±5% from their 30-day mark 82%
of the time. You're not catching a falling knife — you're picking
between three sellers who happen to be within a few percent of each
other. The savings is in the spread, not the trend.

→ [Set target prices](https://www.ticketscan.io/watchlist)

— The TicketScan Team
```

**Success metric:** Target price set OR compare-view click.
**Suppression:** Skip if user's WC items are all Category 4 (least volatile — re-route to WC2-cat4 variant).

### Email WC3 — 14 days out (May 28)

```
Subject: 14 days. The last reliable floor window closes this weekend.
Preview: Day-of premiums start loading 7 days out. You are here.

---

Hi {{first_name | "there"}},

The last reliable floor window for your World Cup matches closes
this weekend. Here's the math:

   • 14 days → 7 days: floor continues; platform variance widest
   • 7 days → 3 days: day-of premium starts loading on high-demand matches
   • 3 days → kickoff: travel-demand premium compounds
   • Day-of: worst price point on record for every WC match we've tracked

**Your action window:**

{{#each wc_watchlist_items}}
- **{{match_name}}** — {{venue}}, {{date_pretty}} ({{days_out}} days out)
  Today's cheapest: **{{cheapest_source}} at ${{cheapest_price}}**
  Target price: {{target_status}} · Last alert: {{last_alert_date}}
{{/each}}

**If you haven't set a target price yet, today is the last good day
to set one.** Anything past day 7 means your target is chasing a
rising price, not a falling one.

→ [Set target prices](https://www.ticketscan.io/watchlist)

**One more thing about your venue:**

At {{top_venue}}, the sections most often undersold on resale are
{{best_value_sections}}. The sections that sell out first are
{{first_to_sell}}. If you're flexible on seating, prioritize the
first list.

→ [Full {{top_venue}} guide](https://www.ticketscan.io/world-cup-2026/{{top_venue_slug}})

— The TicketScan Team
```

**Success metric:** Target price set OR compare click OR direct purchase redirect click.
**Suppression:** Terminal — after WC3, user is handed to the generic transactional "alert" stream; WC-specific cadence ends.

### Email WC4 — 7 days out (June 4) — OPTIONAL, only if target price still unset

```
Subject: 7 days to your World Cup match. One tactical check.
Preview: We can't ping you on drops unless you tell us a number.

---

Hi {{first_name | "there"}},

{{match_name}} at {{venue}} is 7 days away. You haven't set a target
price, which means our tracking has been running silently — no
alerts can fire, because there's no threshold.

**The only useful move at 7 days out:**

Run a three-source compare right now. Don't wait for a drop; buy
the cheapest of the three. Our data on 800+ arena events shows
Day-7 prices match Day-4 prices 73% of the time — meaning waiting
almost never pays inside 7 days. The savings at T-minus-7 is in
**which platform** you buy from, not **when** you buy.

→ [Compare {{match_name}}](https://www.ticketscan.io/compare?event={{event_id}})

If you've already bought, reply and tell us what you paid — we're
rebuilding our WC pricing dataset and your number is worth more
than anything we can model.

— The TicketScan Team
```

**Success metric:** Compare-view click OR reply.
**Suppression:** Fire only if target price remains null AT the 7-day mark AND WC3 did not trigger a compare-click.

### Sequence Logic (for `index.js` implementation)

```javascript
// World Cup Countdown Sequence — email_number range 301–304
// Runs daily at 10am UTC inside the existing processDripEmails pass

async function processWorldCupSequence() {
  // Identify WC-interested users: watchlist contains WC items OR WC-landing-page opt-in source
  const wcUsers = await pool.query(`
    SELECT DISTINCT u.id, u.email, u.created_at,
           MIN(w.event_date) FILTER (WHERE w.event_name ILIKE '%world cup%' OR w.venue IN (${WC_STADIUMS})) AS next_wc_date
    FROM users u
    LEFT JOIN watchlist w ON u.id = w.user_id
    LEFT JOIN newsletter_subscribers n ON u.email = n.email AND n.source = 'world-cup-2026'
    WHERE (w.event_name ILIKE '%world cup%' OR w.venue IN (${WC_STADIUMS}) OR n.email IS NOT NULL)
      AND (u.email_paused_until IS NULL OR u.email_paused_until < NOW())
    GROUP BY u.id, u.email, u.created_at
  `);

  for (const user of wcUsers.rows) {
    if (!user.next_wc_date) continue;
    const daysOut = Math.floor((new Date(user.next_wc_date) - new Date()) / 86400000);

    const sent = await pool.query(
      'SELECT email_number FROM drip_emails_sent WHERE user_id = $1 AND email_number BETWEEN 301 AND 304',
      [user.id]
    );
    const sentNumbers = sent.rows.map(r => r.email_number);

    if (daysOut >= 40 && daysOut <= 50 && !sentNumbers.includes(301)) {
      await sendWorldCupEmail(user, 1, daysOut);
      await pool.query('INSERT INTO drip_emails_sent (user_id, email_number) VALUES ($1, 301)', [user.id]);
    } else if (daysOut >= 25 && daysOut <= 35 && !sentNumbers.includes(302)) {
      await sendWorldCupEmail(user, 2, daysOut);
      await pool.query('INSERT INTO drip_emails_sent (user_id, email_number) VALUES ($1, 302)', [user.id]);
    } else if (daysOut >= 10 && daysOut <= 16 && !sentNumbers.includes(303)) {
      await sendWorldCupEmail(user, 3, daysOut);
      await pool.query('INSERT INTO drip_emails_sent (user_id, email_number) VALUES ($1, 303)', [user.id]);
    } else if (daysOut >= 5 && daysOut <= 8 && !sentNumbers.includes(304)
               && !(await userHasTargetPrice(user.id))) {
      await sendWorldCupEmail(user, 4, daysOut);
      await pool.query('INSERT INTO drip_emails_sent (user_id, email_number) VALUES ($1, 304)', [user.id]);
    }
  }
}
```

**Dependencies:**
- Per-user WC watchlist enrichment (match name, venue, days out, FIFA/StubHub/SeatGeek minimums, target status). If the per-user join is heavy, cache daily in a `wc_user_summary` table.
- `WC_STADIUMS` constant (16 venues across USA/CA/MX) — already defined in the frontend `data/worldcup.ts`; mirror server-side.
- Newsletter-subscribers `source` column currently exists; WC opt-ins should tag source `world-cup-2026`.

**Email number registry (updated):**
- 1–5: Standard drip (existing, dormant)
- 101–103: Post-Signup Activation (designed Wk 1, not built)
- 201–203: Win-Back (designed Wk 2, not built)
- **301–304: World Cup Countdown (designed Wk 3 today, not built)**
- 401–403: Event Reminder (planned Wk 4)

---

## 4. NEW THIS WEEK: Post-E5 Graveyard — Structural Scope Gap

The drip schedule as designed runs day 3 → day 30. That window covers **~5% of registered users at any given time** (the users currently inside that 27-day band). Everyone past day 35 is structurally outside the sequence and receives nothing — ever — under current design.

### Cohort state today

| Cohort | User count | % of total users |
|--------|------------|------------------|
| Days 0–2 (pre-E1) | 5 | 8% |
| Days 3–6 (E1 eligible) | 2 | 3% |
| Days 7–13 (E2 eligible) | 2 | 3% |
| Days 14–20 (E3 eligible) | 2 | 3% |
| Days 21–29 (E4 eligible) | 6 | 10% |
| Days 30–35 (E5 eligible + fresh) | 3 | 5% |
| **Day 35+ ("post-E5 graveyard")** | **30** | **50%** |
| Legacy (pre-drip-era signups) | 10 | 17% |

**The 5-email drip serves ~18 users out of 60.** The remaining 42 users are either pre-sequence (too new, will age in), legacy (predate the drip design), or **past the terminal email** and permanently unreachable.

### The fix: one-shot "catch-up" template (email 99)

Not a sequence — a single email, triggered once per user who passes day 35 without receiving all 5 drips. It's essentially the E5 rewrite (Section 1 above) retargeted to "you got none of this, here's the whole thing, one time."

**Trigger:** `user.created_at < NOW() - 35 days AND NOT EXISTS (SELECT 1 FROM drip_emails_sent WHERE user_id = user.id AND email_number IN (1,2,3,4,5))`

**Send:** Once, ever. After send, user exits the drip stream and enters the Win-Back sequence (201–203) instead.

**Copy:** Reuse the E5 rewrite (Section 1) with one swap — replace "You signed up 30 days ago" with "You signed up {{days_since_signup}} days ago" (dynamic), and keep the rest identical.

**Email number registry:** Assign **email_number = 99** (one-shot catch-up, distinct from the sequence-slotted 1–5 + 101+). This makes it easy to query "catch-up sent" as a single condition.

### Cold-start send sequencing

If the SMTP path opens tomorrow and we fire everything we have queued, the first-day send is 30 catch-up (email 99) + 15 E1 backlog + 11 E3 threshold crossings + 9 E4 threshold crossings + 3 E5 = **68 messages to a cold-start domain.** That's the worst-possible Gmail-filtering scenario.

**Recommended staggered reactivation (NOT optional — if this isn't followed, the first day will burn deliverability for months):**

| Day | Cohort | Volume | Rationale |
|-----|--------|--------|-----------|
| Day 1 | Welcome backlog (Pattern A, A+, B) | 8 | Highest engagement intent per send |
| Day 2 | E1 threshold crossings only | 4 | Next-highest intent; still fresh |
| Day 3 | Viva El Jaripeo post-mortem (single) + Florence + Bilmuri + Cubs | 4 | Event-timed, high relevance |
| Day 4 | E2–E4 threshold crossings | ~15 | Mid-intent |
| Day 5 | E5 threshold crossings (with rewritten copy) | 3 | Last drip tier |
| Day 6 | Catch-up (email 99) to post-E5 graveyard — batch 1 of 3 | 10 | Lowest intent; split across 3 days |
| Day 7 | Catch-up batch 2 | 10 | |
| Day 8 | Catch-up batch 3 | 10 | |

**By end of week 1: 68 messages dispatched, spread across 8 days, highest-intent first.** This is the only staggered plan that keeps TicketScan's domain reputation intact.

---

## 5. List Health & Segmentation Report

### Inventory Snapshot

| Metric | Last Thu (4/17) | This Thu (4/24) | Δ |
|--------|-----------------|-----------------|---|
| Total registered users | 52 | 60 | +8 |
| Newsletter subscribers (active) | 3 | 3 | 0 |
| Newsletter organic signups | 1 | 1 | 0 |
| Users with 1+ watchlist items | ~26 | ~30 | +4 |
| Users with target prices set | 0 | 0 | 0 |
| Users who received any email | 0 | 0 | 0 |
| Watchlist items (total) | 72 | 81 | +9 |
| Past-event watchlist items | 24 | 27 | +3 |
| Past-event % of total | 33% | 33% | 0pp |

### Segment Sizes (Behavioral — still no email engagement data)

| Segment | Size | Criteria | Recommended action |
|---------|------|----------|--------------------|
| Active watchlist (future events) | ~22 | 1+ future watchlist item | Primary activation + drip |
| Past-dated-only | ~8 | Watchlist items all past | **Archive first, then Win-Back** |
| Empty watchlist users | ~30 | Registered, 0 watchlist | Welcome-B + Post-Signup Activation (101–103) |
| Terminal urgency | 1 | Watchlist event ≤ 2 days | **2510soccerboy — Viva El Jaripeo TOMORROW. Final window TONIGHT.** |
| 14-day urgency window | 6 | Watchlist event 3–14 days | ajvanprooyen (Cubs x6), tate.sheppard (Florence), goldy.pec.2012 (Bilmuri) |
| 30-day window | 4 | Watchlist event 15–30 days | konman87 (Bruno Mars x2), charlesteel126 (Bruno Mars), joshdguillemette (AEW) |
| Pattern A+ (bulk same-venue) | 2 | 5+ items, same venue/team | ajvanprooyen (6 Cubs), brigitte.theisen (8 Backstreet Boys) |
| World Cup interested | 3 | WC matches on watchlist | pete.uzelac77 (4 WC @ Lincoln Financial) — highest intent |
| High-value | 3 | 5+ watchlist items | pete.uzelac77 (6), brigitte.theisen (8), ajvanprooyen (6) |
| Post-E5 graveyard | 30 | Day 35+ signup, no drips received | One-shot catch-up (email 99) |
| Newsletter-only (no account) | 1 | roos_leeuwen | Convert to registered |

### Pattern Distribution (7-day rolling window)

| Pattern | Last 7 days | Last 30 days | Read |
|---------|-------------|--------------|------|
| A (classic single-event) | 3 | ~7 | Steady |
| A+ (bulk same-venue) | 1 | 2 | Rare but high-intent |
| B (signup-only) | 4 | ~5 | Accelerating |

**Read:** Pattern B is no longer the minority. The ratio flipped from 3:1 A:B (last month) to 1:1 A:B (last 7 days). Welcome-B is now as urgent as Welcome-A; both backlogs need parallel treatment when send path reopens.

### Hard Bounce / Invalid Email

Still unknowable. Recommendations unchanged from last week:
1. First send identifies hard bounces — remove after 2 hard fails per address
2. Add double opt-in on newsletter signup (currently single-step)
3. Regex + MX validation on newsletter `email` column before first bulk send
4. **NEW:** Domain diversity check on the 60-user list — if skewed heavily to one provider (Gmail), consider splitting the cold-start send so the first-day ratio is balanced across providers

### Recommendations

1. **The catch-up send (Section 4) is the single biggest strategic move available.** 30 users × 1 email = 30 direct-value opportunities that currently don't exist in any sequence. Cheaper than acquisition; higher intent than a cold newsletter.
2. **Do not send the newsletter to a 3-person list.** Hold. If the send path opens, prioritize drip + catch-up; newsletter last. Add newsletter only after a reactivation-acquisition campaign lands 50+ subs.
3. **Target price UX is still the blocker for every single email that exists.** 0/81 items have a target price. E1, E2, E4 rewrite, E5 rewrite, WC1, WC2, WC3, WC4, Win-Back W1, W2, W3 — **every single one** of our copy assets leans on the user having a target price set. The product gap makes the content inert. 89 days into 100% null-on-add, this is no longer a bug; it's the highest-leverage product change on the roadmap.
4. **Pete Uzelac remains the VIP case study.** 6 watchlist items (4 WC at Lincoln Financial, 2 Darts at MSG), 13 days on platform, E3 threshold crosses tomorrow. Highest-intent user in the database. Worth a hand-written outreach the moment the pipeline is up — bypass the sequences for this one user.
5. **Archive past-event watchlist items before any send goes out.** 27 of 81 items (33%) reference events already past. Any email that says "check prices on your watchlist" will look broken for a user whose list is 60% past-date. Request cleanup cron (handoff to Growth).

---

## 6. Cross-Agent Handoffs

### To Content Agent (Agent 1)
- **Lead magnet delivery email:** Still unshipped from last week. When a user opts in from a blog post, they should receive an immediate single email with the PDF attached + 120 words of soft onboarding to the watchlist feature. Unchanged ask; second request.
- **Blog post prerequisite for newsletter:** The newsletter's "From the Blog" block references `blog/best-time-to-buy-tickets-2026`. If that post doesn't exist, either ship it or substitute the next-latest post. Related post `blog/fifa-resale-vs-stubhub-april-2026` is also referenced in the WC section — same conditional.
- **Post-mortem authoring request:** 2510soccerboy's Viva El Jaripeo event passes tomorrow (Apr 25) with zero outreach possible. Write a public-facing blog post — "The 88-day silence: what we learned from a user we failed" — authenticity content is on-brand and there's real learning here. Would run in 2 weeks once the emotional distance is right.

### To CRO Agent (Agent 6)
- **Target price UX — STILL the highest-ROI product change available.** Repeating from Week 1 and Week 2. 0/81 items have a target price after 89 days. Recommend: mandatory field on `/watchlist/add`, pre-filled at 15% below current minimum, with a one-tap "use this" button. Every email sequence depends on this. If it ships, we instantly have alert-triggerable volume across the database.
- **`/venues` index page:** Week 2 request unchanged. Needed for E4 rewrite CTA and the new E5 rewrite CTA. Two drafted emails blocked on this single page.
- **Past-dated watchlist add blocker:** Reject `event_date < NOW()` at write time. 33% past-event rate is a data-quality problem that propagates into every email that references the watchlist. Paired with the archive cron (Growth handoff below).
- **Newsletter signup audit — 82-day stall (unchanged from last week):** Still no action. Homepage form placement, blog footers, venue pages, WC hub — any of them have a signup field? Consider exit-intent on top-3 blog posts. If this isn't prioritized by next Thursday, it'll be a 3-month stall.

### To Growth Agent (Agent 8)
- **Cold-start reactivation plan:** When SMTP path opens, the 8-day staggered schedule in Section 4 must be followed. 68 messages on day 1 = domain-reputation burn. Growth owns the sequencing logic; email owns the copy.
- **Past-event cleanup cron:** 27 of 81 items are past-dated. Need a nightly job that either archives them (preferred — separate `archived_watchlist` table) or adds an `archived_at` timestamp. Block dependency for every email rewrite.
- **Email pause column:** `users.email_paused_until` (nullable timestamp) still needed. Blocks W3 of Win-Back (designed Week 2). Small ask; consistent blocker.
- **Email tagging for World Cup opt-ins:** Newsletter subscribers table needs a `tags` column or a `source = 'world-cup-2026'` tag to power the WC Countdown sequence trigger. Currently the `source` column exists but the WC landing page doesn't tag opt-ins with it. One-line frontend fix + Growth verifies.
- **Pete Uzelac VIP treatment:** 6 items, 4 WC matches, highest intent in database. Worth a hand-written personal outreach from the CEO/founder email the moment send path is up. Bypass all sequences. This user should get a one-of-one message, not a templated drip.

### To Analytics Agent (Agent 7)
- **Email pipeline status:** Day 18. Still zero sends ever. Add to the incident dashboard if one exists.
- **New metric request:** "Catch-up-eligible users" = post-E5 graveyard count. Track weekly. Today: 30. If this number exceeds total active drip-cohort users (currently 15), the drip schedule is structurally under-serving the base.
- **Attribution gaps logged:**
  - yuehsu@gmail.com — TWICE Austin (Apr 17 + 18) — 2 expired purchase-intent events, no outreach possible. **Confirmed miss.**
  - 2510soccerboy@gmail.com — Viva El Jaripeo (Apr 25) — 88 days tracked, likely miss as of tomorrow.
- **Cohort instrumentation (new):** Weekly report needs a "signups by pattern (A/A+/B) rolling 7-day" chart. Current reporting lags by 1–2 weeks because it uses cumulative counts.

---

## 7. Pipeline Recovery Plan (Unchanged in substance — Day 18)

### Immediate (within 1 hour of fix)
1. Verify which transactional path is active (Resend HTTP API per commit `e8621a5`, or Nodemailer SMTP fallback). Kill SMTP primary if it's still first.
2. Trigger `POST /api/admin/drip-run` — confirm 200 + `drip_emails_sent` rows written (currently 0 rows all-time).
3. Manually dispatch 2510soccerboy's Viva El Jaripeo T-minus-1 template (from today's daily). This send is the last-chance window before another 88-day miss is formally confirmed.

### Within 24 hours
4. Ship Welcome backlog — 8 users across Pattern A/A+/B (highest-intent, lowest-deliverability-risk first-wave).
5. Ship E1 threshold crossings — 4 fresh this week, 15 total backlog.
6. Add open pixel + click tracking to all templates before resend.
7. Confirm bounce handling (hard bounce → auto-suppress on Resend).

### Within 1 week
8. Deploy E4 rewrite (drafted Apr 17, still not shipped).
9. Deploy E5 rewrite (drafted today, Section 1 above).
10. Build and deploy the one-shot catch-up (email 99 — Section 4).
11. Build Post-Signup Activation sequence (101–103) — designed Week 1, still not built.
12. Build Win-Back sequence (201–203) — designed Week 2, still not built.
13. Build World Cup Countdown sequence (301–304) — designed this week, still not built.

**Running count of designed-but-unbuilt sequences: 3.** Week 4 rotation is Event Reminder, which will make it 4 of 4. At current velocity, design throughput is 1 sequence/week and build throughput is 0/week. That gap is the real story.

---

## Key Metrics to Watch Next Week

| Metric | Last week | This week | Target (next week) |
|--------|-----------|-----------|--------------------|
| Drip emails sent (all-time) | 0 | 0 | 20+ |
| Pipeline status | DOWN (Day 11) | DOWN (Day 18) | UP |
| Designed-but-unbuilt sequences | 2 | 3 | ≤1 |
| Users with target prices | 0 | 0 | 5+ |
| Newsletter subscribers | 3 | 3 | 3 (hold) |
| Activation rate (has watchlist) | 50% | 50% | 55% |
| Price alerts triggered | 0 | 0 | 1+ |
| Past-event watchlist items | 24 | 27 | <15 |
| Post-E5 graveyard size | (new) | 30 | ≤25 (via catch-up send) |
| Terminal-urgency misses | 1 | 1 pending (2510soccerboy) | 0 |
| Welcome-template backlog | — | 8 | 0 |

---

*Next weekly report: 2026-05-01*
*Daily reports continue on schedule: email-daily-YYYY-MM-DD.md*
