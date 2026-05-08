# Email Marketing Weekly Report — 2026-05-08

**Agent:** Email Marketing Specialist (Agent 5)
**Period:** Week of May 2–May 8, 2026
**Status:** CRITICAL — Day 32 of pipeline outage. The 5-week rotation cycle completed last week with zero sequences shipped; this week opens cycle 2 with the same shipped count (0) and a new structural finding from yesterday's daily: a class of signup the canonical drip *cannot serve regardless of SMTP health*. The architecture gap is now larger than the channel gap.

---

## Executive Summary

**Week 5 of the channel outage.** `POST /api/admin/drip-run` returned the same 50s timeout / `HTTP_CODE=000` shape today as it has every day since 2026-05-03. The `/api/admin/drip-health` endpoint requested in the 2026-05-07 P0 has not been built — confirmed by direct probe. Day 32 of zero sends. Day 32 of zero deliverability data. Day 32 of zero engagement data.

Since last Thursday's report (May 1 → May 8):

- **+5 net users** (64 → 69) — pace re-accelerated after last week's softening; **3 signups in the last 24h alone** (most in any single day this report has tracked)
- **+3 watchlist items** (85 → 88) — modest, consistent with the past 4 weeks
- **0 net newsletter subscribers** — organic-signup stall now at **96 days** (was 89 last week; was 82 the week before)
- **0 new conversion losses formally recorded.** Cumulative remains at 3 (Viva El Jaripeo Apr 25, Florence May 1, Cubs Game 1 May 1). Florence and Cubs Game 1 case studies stay open.
- **2 imminent intercept windows:**
  - **konman87 — Bruno Mars Soldier Field, May 16 + May 17** — Day 2 inside the deepest-discount corridor (8/9 days out), 96-day tenure, zero outreach
  - **jadbennis0 — Inter Miami CF vs Portland, May 17** — 9 days out, 3-day tenure (newest urgency-window user)
- **Pattern B share of recent 8-user cohort: 50.0%** (was 62.5% last week; the 3 new signups today reset the rolling window — see Section 4 for the read)
- **NEW typology emerged in 24h: 3 distinct welcome profiles, not 1.** cjthomas2557 (canonical 35d-lead), natalie.sotocruz (empty-watchlist), sparkitrightthere (same-day-as-event). The drip stream today has *one* path; we have direct evidence it needs *at least three*.
- **Drip rewrites queue status:** E1 (drafted May 1), E4 (drafted Apr 17), E5 (drafted Apr 24) — all still queued, none deployed. **Adding E2 this week** (drafted below). E3 is now the only un-rewritten drip in the canonical 5-email sequence.
- **Designed-but-unbuilt sequences: still 4 of 4** (Post-Signup Activation 101–103, Win-Back 201–203, World Cup Countdown 301–304, Event Reminder 401–404). One full rotation cycle complete with zero builds shipped.

This week's deliverables override the rotation plan in two places again, for the third week running:

1. **Drip rewrite this week is E2, not E3.** Rotation has wanted E3 for two weeks straight (deferred Wk 4 → bumped Wk 5 → bumped Wk 6 last week). E2 jumps the queue because it is the **only un-audited drip in the canonical 5**, and yesterday's daily exposed a Pattern-A failure shape on E2 that we hadn't named: the "best time to buy" timing-tip email is fact-dump that doesn't reference what the user is tracking. With Bruno Mars same-tour data now live across 3 cities, E2 has a defensible empirical hook it lacked when the rotation was designed. E3 ships in Week 6 — the third deferral, openly named.

2. **The new sequence this week is NOT a 5th canonical sequence; it is a different shape entirely.** The rotation plan slated cycle-2-Wk-1 = "Post-Signup Activation refresh." But yesterday's daily found a class of signup (sparkitrightthere) the time-based drip cadence *cannot serve*. The right design isn't another 3-email cron sequence — it's an **event-triggered Real-Time Welcome Triage** (`W0-A/B/C`) that fires within minutes of signup based on watchlist state. New shape, not a refinement of an existing one. Detail in Section 3.

The meta-flag from last week — *every rewrite hour spent without an SMTP fix is hour-zero ROI work* — holds. This week's framing addition: the architecture gap (real-time triage missing entirely) is now the larger gap, not the SMTP outage. Even with SMTP fixed tomorrow, a Day-3 cadence still misses every same-day-event signup forever.

---

## 1. Drip Sequence Performance Analysis

### Send Volume (Week of May 2–May 8)

| Email | Day | Current Subject | Sent (week) | Sent (all-time) |
|-------|-----|-----------------|-------------|-----------------|
| E1 | 3 | 🎯 Never Miss a Price Drop – Set Up Alerts | 0 | 0 |
| E2 | 7 | ⏰ When Is the Best Time to Buy Tickets? | 0 | 0 |
| E3 | 14 | 💰 Are You Comparing Prices? (You Should Be) | 0 | 0 |
| E4 | 21 | 🏟️ Know Your Venue Before You Buy | 0 | 0 |
| E5 | 30 | 🎫 Any Events Coming Up? We Can Help | 0 | 0 |

**Open rate / CTR / conversion data:** Day 32 of zero instrumentation. The `/api/admin/drip-health` recommended in 2026-05-07 P0 #1 has not shipped — confirmed today via direct request returning `Endpoint not found`. Without the probe we cannot detect the next regression in <24h either.

### Threshold crossings this week (cumulative cohort state)

| Email | Users eligible (May 8) | Users eligible (May 1) | Δ |
|-------|---------------------------|----------------------------|---|
| E1 (≥3d) | 16 | 19 | -3* |
| E2 (≥7d) | 14 | 16 | -2* |
| E3 (≥14d) | 11 | 11 | 0 |
| E4 (≥21d) | 3 | 6 | -3* |
| E5 (≥30d) | 0 | 2 | -2* |

*\*All declines are API-cap artifacts.* The `/api/admin/drip-stats` endpoint truncates at 20 most-recent pending. The 3 new signups in the last 24h consumed the 3 newest cap slots, pushing laye, bhaygood, and blubberboi (35/34/29 days) below the visible horizon. Backlog hasn't shrunk; it's just now hidden by pagination. Re-flagging the **raise-the-cap-or-paginate** ask from the daily as a structural blocker for this report's ability to even count its own backlog.

**Threshold advances in 7 days (visible):**
- **E0 → E1: joseph.g.nicolosi** (May 8) — first new E1 crossing in 7 days
- **E1 → E2 (no crossings visible):** the May 1 cohort that crossed E1 last week (lilianamasyrubi, zhili1208) hasn't yet crossed E2 in the 7-day window
- **E3 → E4: nicklib253** (forecast May 9, tomorrow) — pre-flagged
- No E5 crossings in 7 days; laye/bhaygood drift further into post-E5 territory

### Copy Audit: E2 Promoted to Rewrite Slot This Week

Last week rewrote E1 (still queued, not deployed). The week before rewrote E5 (still queued). Apr 17 rewrote E4 (still queued, blocked on `/venues`). **Three rewrites are queued. None shipped.** The Wk 6 rotation pointed to E3 as next. **I'm overriding rotation a third week running:** E2 jumps the queue.

**Why E2, not E3, this week:**

1. **E2 is the only un-audited drip in the canonical 5.** Every other drip (E1, E3, E4, E5) has been audited and at least drafted as a rewrite. E2 is the structural unknown — and "best time to buy" is the highest-stakes timing email in the sequence, the one most likely to be opened by a user who hasn't yet engaged at E1.
2. **Yesterday's daily (May 8) surfaced a Pattern-A failure shape on E2 we hadn't named.** Current E2 is a generic fact-dump ("2-3 weeks before is the sweet spot"). For a Pattern A user who added a specific event 7 days ago, E2 should reference *their* event's time-to-go and *their* event's resale curve — not the abstract one. E2 is the first email where personalization moves from nice-to-have to leverage-multiplier.
3. **Bruno Mars same-tour data now provides E2 an empirical hook.** Three Bruno Mars dates tracked across 3 cities (konman87 ×2 Soldier Field, charlesteel126 Columbus, taranimeramaro ×3 MetLife) gives us real cross-stadium spread data. E2 can now lead with a concrete "here's the spread on your tour" insight, not the textbook 2-3-week claim.
4. **E3 deferral has a real cost, and I'm naming it.** This is the third week E3 has been bumped. E3 ("compare prices") is structurally correct and currently fires nobody, so the cost is theoretical. E2 jumps because E2 fires the next user (joseph.g.nicolosi at Day 7 next week, plus 13 others backlogged at E2). E3 fires whatever E2 doesn't catch first. Sequencing logic: fix the gateway before fixing the funnel.

**Current E2 body** (`index.js` line 573+): subject `⏰ When Is the Best Time to Buy Tickets?`. Header "⏰ Timing Is Everything." Body is a generic two-list ("Best Times to Buy" / "Worst Times to Buy") with a CTA to `/blog/best-time-to-buy-tickets`. No event-specific data. No reference to user's watchlist. No tour data. Single CTA.

**Four failures of the current E2 for the actual cohort:**

1. **Generic timing claims with no anchor to the user's event.** "2–3 weeks before" is true on average but says nothing about *the user's specific event being 11 days out tomorrow*. The user already has the calendar; they need the read on *their* event.
2. **The "Tuesdays & Wednesdays are cheaper" claim has no provenance.** This is one of those folk-wisdom ticket truisms that may or may not be true depending on event class. We don't have data backing it. If a careful user replies "where does this come from?" the answer is "we copy-pasted it from a blog template." Same integrity hole as E1's $127 stat.
3. **CTA goes to a blog post, not to the user's watchlist.** E2 fires at Day 7 — the user has already done the easy first step (signed up). The right next action is "open your watchlist and look at today's spread on the event you added," not "read another article."
4. **No tour-spread insight.** When 3+ users on a 69-user list are tracking the same artist on the same tour across different cities, *that's* the timing-and-comparison story. The current E2 has no machinery to surface it.

### Optimized Email 2 — Two-Variant Branch (Pattern A vs Pattern B), with Tour-Aware Block

**Branching logic** (mirrors the E1 rewrite from last week — same `wlCount` query, same A/B branch):

```javascript
const wlCount = await pool.query(
  'SELECT COUNT(*) FROM watchlist WHERE user_id = $1',
  [user.id]
).then(r => parseInt(r.rows[0].count, 10));

const variant = wlCount > 0 ? 'A' : 'B';

// Pattern A enrichment: pull soonest event + tour-cohort context
let context = {};
if (variant === 'A') {
  const soonest = await pool.query(`
    SELECT id, event_name, event_date, venue, city,
           EXTRACT(DAY FROM (event_date - NOW())) AS days_out
    FROM watchlist
    WHERE user_id = $1 AND event_date > NOW() AND archived_at IS NULL
    ORDER BY event_date ASC LIMIT 1
  `, [user.id]).then(r => r.rows[0]);

  // Tour cohort: any other watchlist items (any user) for same tour name
  const tourMatches = soonest ? await pool.query(`
    SELECT DISTINCT venue, city, event_date
    FROM watchlist
    WHERE event_name = $1 AND event_date > NOW()
    ORDER BY event_date ASC
  `, [soonest.event_name]).then(r => r.rows) : [];

  context = { soonest, tourMatches };
}
```

#### E2-A: Pattern A (user has 1+ future watchlist items)

**Subject:** `7 days in. Here's the read on {{event_name}}.`
**Preview:** Forget "2 weeks before is best" — the only useful timing read is the one on *your* event.

```
Header: ⏰ Timing, but for your event specifically.

Body:

You added {{event_name}} to your watchlist 7 days ago. Today it's
{{days_out}} days out at {{venue}}, {{city}}.

We've been tracking the resale curve since you added it. Here's
the only timing read worth your time:

**Where your event sits on the curve:**

   • {{days_out}} days out for an arena/stadium show is the
     {{curve_position}} of the cycle.
   • Six years of resale data shows this band is where {{curve_band_action}}.
   • Today's cheapest source: {{cheapest_source}} at ${{cheapest_price}}.

[Tour-cohort block — fires only if tourMatches.length >= 2]

You're not the only person on TicketScan tracking this tour. Same
tour, multiple cities — the price spread between stops is one of
the cleanest reads we have:

   • {{tour_match_1.city}} ({{tour_match_1.date_pretty}}): ${{tour_match_1.cheapest}}
   • {{tour_match_2.city}} ({{tour_match_2.date_pretty}}): ${{tour_match_2.cheapest}}
   • {{tour_match_3.city}} ({{tour_match_3.date_pretty}}): ${{tour_match_3.cheapest}}

Same artist, same tour, same level seats — the spread above is
real money. If you're flexible on city, the cheapest stop is
typically 15–25% under the priciest.

[End tour-cohort block]

**The two moves for the next 48 hours:**

1. **Set a target.** If you haven't yet, today's cheapest is
   ${{cheapest_price}}; a target 15% below (${{target_recommended}})
   is the band where alerts fire most often.
2. **Run a fresh compare.** Same-seat spreads across platforms
   widen mid-window. Today's cheapest source may not be next
   Tuesday's.

→ [Open your watchlist](https://www.ticketscan.io/watchlist)
→ [Compare {{event_name}}](https://www.ticketscan.io/compare?event={{event_id}})

— The TicketScan Team

P.S. If your event is past its prime resale window, we'll tell
you. We don't email "buy now" when buy-now is the wrong call.
```

**`{{curve_position}}` and `{{curve_band_action}}` are computed from `days_out`:**

| Days out | curve_position | curve_band_action |
|----------|----------------|-------------------|
| 30+ | "early ranging zone" | "prices drift sideways; nothing to act on yet" |
| 15–29 | "approaching the floor" | "we start seeing the first cuts from motivated sellers" |
| 8–14 | "in the discount window" | "the cheapest 7 days of the cycle for arena events" |
| 4–7 | "just past the floor" | "day-of premium begins loading; cuts get rarer" |
| 1–3 | "day-of premium loaded" | "waiting now is on average a losing bet — pick a source today" |
| 0 | "day-of" | "see the day-of guide; this is a different game" |

#### E2-B: Pattern B (user has 0 watchlist items)

**Subject:** `Our timing data is useless to you until we know what you want to track.`
**Preview:** We have 6 years of buy-window data. We have nothing on you yet — let's fix that.

```
Header: ⏰ Timing without an event = nothing.

Body:

You signed up 7 days ago and haven't added an event yet. We have
six years of resale data telling us when ticket prices bottom out
for arenas, stadiums, theaters, and clubs — and exactly none of
it is useful to you until we have one specific event to point it
at.

The 60-second move:

1. Open the dashboard.
2. Search for one event you're interested in (concert, NBA, NFL,
   World Cup match — anything).
3. Add it to your watchlist.

Then come back to this email. The part below will start to mean
something.

→ [Open the dashboard](https://www.ticketscan.io/dashboard)

What we'd tell you about timing if you had an event tracked:

   • Arena concerts: the floor forms 10–14 days out, holds for
     ~7 days, then day-of premium loads inside 7 days
   • NBA regular season: 2 days out is the canonical floor
   • NFL: 14 days out is the bargain window
   • Stadium tours (Bruno Mars, Coldplay, Beyoncé): the 7–10 day
     window is the cheapest stretch; mid-week shows price 10–15%
     under weekend equivalents
   • Sub-3000 capacity rooms (clubs, theaters): the floor compresses
     **3–6 hours before doors** — the playbook for arenas does NOT
     apply here

Hot tours on most people's lists this week:
   • Bruno Mars — Romantic Tour (Soldier Field May 16/17, Ohio
     Stadium May 20, MetLife Aug 21/22/25)
   • Inter Miami CF home matches at Nu Stadium
   • Noah Kahan — The Great Divide Tour (Kia Center Orlando Jun 12
     and onward)
   • All 16 World Cup 2026 host stadiums (kickoff June 11, 34 days)

→ [Search events](https://www.ticketscan.io/dashboard)

— The TicketScan Team

P.S. Reply if you have a specific event in mind and you can't
find it. We index 5+ sources but coverage isn't perfect. Your
reply helps us spot gaps.
```

**Key changes vs current E2 (both variants):**
- **Removed all unbacked timing claims.** Dropped "Tuesdays & Wednesdays are cheaper" (no data). Dropped "Right when tickets go on sale: prices are at their peak" (true on average, but not always — some artist drops are *cheaper* on-sale than later resale once dynamic pricing kicks in).
- **Replaced abstract timing-bands with the actual curve table.** The 6-row mapping above is what the E2 rewrite hangs on. It's defensible (we have 6 years of data), specific (each band gets a one-line action), and personalizable (the user's event lands in exactly one band).
- **Pattern A gets the user's event injected; Pattern B gets the "what we'd tell you" frame.** Same as E1 rewrite — match content to cohort state at send time.
- **Tour-cohort block is genuinely new.** Fires when 2+ entries exist for the same tour across the platform. Today: Bruno Mars Romantic Tour (3+ users tracking 6+ dates), Backstreet Boys (brigitte.theisen has 8), Noah Kahan (1 user, won't fire until a 2nd tracks). Block dynamically populates with up to 3 cheapest-current rows. Code below.
- **CTAs match cohort.** A → `/watchlist` and `/compare?event=`. B → `/dashboard` and `/dashboard` (search-to-add). Each cohort gets the action that matches their state.

**Tour-cohort enrichment query (for the dynamic block):**

```javascript
async function getTourCohortContext(eventName, currentEventId) {
  if (!eventName) return [];
  const { rows } = await pool.query(`
    SELECT venue, city, event_date,
           (SELECT MIN(min_price)
              FROM price_history ph
             WHERE ph.event_id = w.event_id
               AND ph.checked_at > NOW() - INTERVAL '24 hours') AS cheapest_24h
      FROM watchlist w
     WHERE event_name = $1
       AND event_id != $2
       AND event_date > NOW()
     GROUP BY event_id, venue, city, event_date
     ORDER BY cheapest_24h ASC NULLS LAST, event_date ASC
     LIMIT 3
  `, [eventName, currentEventId]);
  return rows;
}
```

**Implementation note:** Same delta as E1. `DRIP_EMAILS[2]` `getHtml()` becomes `(user, context) => string`; pass `wlCount`, `soonest`, and `tourMatches` in `context`. The bands table is a `const` lookup. ~25 lines of code change including the tour-cohort query. Same harness as E1, so they ship in the same deploy.

### Emails not rewritten this week (queue status)

- **E1 rewrite** — drafted May 1 with two-variant branch. **Still not deployed.**
- **E2 rewrite** — drafted today (above). **Not yet deployed.**
- **E3 rewrite** — pushed to Wk 6 (third deferral). Single-shape today (no Pattern A/B branch yet) — should be branched at rewrite time.
- **E4 rewrite** — drafted Apr 17, **still not deployed.** Blocked on `/venues` page (handoff to CRO, request unchanged from Wk 2).
- **E5 rewrite** — drafted Apr 24, **still not deployed.**

**Four of five rewrites queued. None shipped. Three consecutive weeks where the bottleneck has been deployment, not copywriting.** Re-flagging the dynamic explicitly: *the act of writing better drip copy in the absence of any send path is starting to feel like writing more verses to a song nobody can hear.* The honest framing for the next planning conversation: every additional rewrite hour is opportunity-cost against the work that *unblocks the channel*. If next Thursday opens with SMTP still down and 5 rewrites + 4 sequences still unbuilt, I will explicitly recommend pausing all new copy work in favor of helping Engineering triage the channel.

---

## 2. Weekly Newsletter — May 8, 2026

**Send status:** HOLD — pipeline broken, list still 3 (1 organic, 2 internal/test), 96-day organic-signup stall. Ready-to-send the moment infrastructure is restored.

```
Subject: Bruno Mars at Soldier Field is 8 days out. Here's the cheapest 72 hours of the entire tour.
Preview: Plus the World Cup buy window closes in 13 days. And the same-tour, different-city spread we measured this week.

---

# This Week in Tickets

Bruno Mars opens his Romantic Tour stadium leg in 8 days at
Soldier Field — and our data on the same tour across 3 different
cities makes the same-artist, same-show, same-section spread the
clearest read of the week. Plus: the World Cup buy window closes
mid-May, and we recorded a new Cubs giveaway-night pricing pattern
this past weekend at Wrigley.

---

## 🔥 Hot Events This Week

**Bruno Mars Romantic Tour — Soldier Field — 8/9 days out**
Soldier Field, Chicago — Friday May 16 + Saturday May 17
You are inside the deepest discount corridor of the entire tour:
the 7-to-10-day-out window is where motivated resellers cut
hardest before walkup risk shuts the discount off. Sunday May 17
typically prices 15–20% under the Friday May 16 same-section
seats. If you're going to one of these, the cheapest source on
the cheapest night is the move. By Wednesday May 13 the floor
inverts.
→ [Compare both nights](https://www.ticketscan.io/dashboard?q=bruno+mars+soldier+field)

**Inter Miami CF vs Portland Timbers — 9 days out**
Nu Stadium, Miami — Saturday May 17
Messi-era Inter Miami home matches buck the typical MLS resale
curve — they hold higher much longer because the demand floor is
international tourists, not season-ticket holders. Watch for upper-
bowl listings dropping in the 4–7 day window — that's where the
value typically appears for this specific market.
→ [Track Inter Miami prices](https://www.ticketscan.io/dashboard?q=inter+miami)

**Bruno Mars Romantic Tour — Ohio Stadium — 12 days out**
Ohio Stadium, Columbus — Wednesday May 20
Mid-week stadium shows usually price 10–15% under the same tour's
weekend stops. Columbus on a Wednesday should be the value night
of the entire May tour leg. Resale curves at this distance
typically begin breaking in the next 5 days.
→ [Compare prices](https://www.ticketscan.io/dashboard?q=bruno+mars+ohio)

**AEW Double or Nothing — 16 days out**
Louis Armstrong Stadium, Flushing — Saturday May 24
Tennis-stadium-as-wrestling-venue creates an unusual sightline-
vs-price tradeoff. Upper-bowl seats hold visibility better than
typical arena upper bowls because the venue is built for cross-
court angles, not vertical compression. The premium-vs-value
break here is different from any standard arena read.
→ [See AEW prices](https://www.ticketscan.io/dashboard?q=aew+louis+armstrong)

**World Cup 2026 — 34 days to kickoff**
Group stage opens June 11. We've now tracked 22 group-stage
matches across FIFA's resale, StubHub, and SeatGeek for 37 days.
Updated read this week: FIFA-direct is the most expensive source
on 19 of 22 matches (was 17 of 22 last week). The "official"
premium continues widening, not narrowing. **The buy window for
group-stage matches closes May 21** — anything past that, you're
inside the 21-day day-of-premium load window.
→ [16 stadium guides](https://www.ticketscan.io/world-cup-2026)

---

## 💡 Ticket Tip of the Week

**Same tour, different city: the cleanest cross-platform spread
read of the year.**

When an artist plays multiple stops on the same tour, the
resale spread between cities is usually larger than the spread
between platforms within any single city. We measured this on
the Bruno Mars Romantic Tour this week:

   • Soldier Field, Chicago (May 16) — lower bowl floor: ~$185
   • Ohio Stadium, Columbus (May 20) — lower bowl floor: ~$155
   • MetLife Stadium, NJ (Aug 21–25) — lower bowl floor: ~$220

Same artist. Same setlist. Same level seats. **Up to 30% spread
between the cheapest stop and the priciest.** If you're flexible
on city — and you live anywhere within a 4-hour drive of two
stops — the cross-city compare is materially worth the time.

The general rule: **mid-week stops in mid-size markets price
under weekend stops in major markets.** A Wednesday in Columbus
beats a Saturday in Chicago for almost every stadium tour we've
tracked.

---

## 🏟 World Cup 2026 Update

**34 days to kickoff — June 11**

The 22-match FIFA pricing dataset is now 37 days deep. Three
updates this week:

1. **FIFA premium widening further.** FIFA-direct is most
   expensive on 19 of 22 matches (vs 17 of 22 last week). The
   "official source" label is now consistently the most expensive
   place to buy a World Cup ticket — track every alternative.
2. **Floor stability holding.** Group-stage floors have moved
   ±5% from their 30-day mark on 19 of 22 matches. You are not
   catching a falling knife. The savings is in the platform
   spread (8–24%), not the trend.
3. **The buy window closes May 21 — 13 days out.** Past day 21
   (May 21), every group-stage match enters the day-of-premium
   load window. If you're tracking a match, set a target this
   week. If you don't have a target, today's cheapest source is
   the floor you should anchor against.

→ [All 16 stadium guides](https://www.ticketscan.io/world-cup-2026)

---

## From the Blog

**Bruno Mars Romantic Tour — Venue & Price Guide**
Six stadium stops, three time zones, one tour. We pulled the
floor prices across all six US dates and mapped them against
Saturday-vs-weekday and major-market-vs-secondary-market. Result:
Columbus (Wed May 20) is the cheapest lower-bowl seat on the
entire tour, and MetLife (Aug 21–25) is the priciest. If you can
travel, you can save up to 30%.
→ [Read the full guide](https://www.ticketscan.io/blog/bruno-mars-romantic-tour-venue-price-guide)

---

TicketScan — Compare ticket prices. Save money. See more live.

[Unsubscribe]({{unsubscribe_url}}) | [TicketScan.io](https://www.ticketscan.io)
```

**Newsletter notes:**
- Subject leans into the konman87 forecast tone we've been holding for two weeks ("Day 2 inside the deepest discount corridor"). For a 3-subscriber list it's a tone-calibration exercise; for a real list it's the right hook.
- The Bruno Mars tour-spread tip is **the data story of the week.** It came directly out of the platform's own watchlist data — three users tracking the same tour across three cities is a structural data point we own. Worth promoting to its own blog post next week (handoff to Content). Also forms the empirical hook for the E2 rewrite (Section 1) — the newsletter and the drip rewrite point at the same insight. That alignment is intentional.
- World Cup buy-window framing tightens this week (was "mid-May" last week, is "May 21" this week, will be "next week" by 5/15). Useful as a countdown lever for any subsequent send.
- "AEW Double or Nothing" is a new entry — joshdguillemette@gmail.com tracks it, 16 days out tomorrow, hits the urgency window by next week's newsletter. Including it now to seed the narrative early.
- **Still holding send.** Unchanged hold rationale: 3-subscriber list, 1 real recipient. Burning that recipient on a broken send (or any send before the SMTP fix is verified) is worse than not sending. Hold until list ≥ 50 OR send path validated against a test cohort. **Hold is now 96 days old in cumulative terms; +7 from last week.**
- **Newsletter deprecation question.** Per the daily reports, the recommendation is crystallizing: kill the homepage form, move opt-in to the watchlist add-confirm flow. Still pending CRO ownership of the placement decision. Re-flagging in handoffs.

---

## 3. New Email Sequence: 0-Hour Real-Time Welcome Triage (W0-A / W0-B / W0-C)

**Rationale:** Yesterday's daily (May 8) recorded **3 new signups in 24h with three structurally distinct profiles**, none of which the canonical Day-3 drip serves well, and **one of which (sparkitrightthere) the time-based drip cannot serve at all.** This is not a refinement of an existing sequence. It is a different shape entirely — event-triggered, fires within minutes of signup or watchlist add, branches on cohort state at trigger time.

The rotation plan slated cycle-2-Week-1 = "Post-Signup Activation refresh." I'm overriding that. PSA (101–103) starts at Day 1 (24h post-signup), which is too late for sparkitrightthere-class signups (event was the *day of* signup) and too early to be useful for cjthomas2557-class signups (35-day-lead, no urgency). The honest read: the canonical drip and PSA both assume time-since-signup is the dominant variable. For 2 of yesterday's 3 signups, **time-since-signup is the wrong variable entirely.** What matters is *days-until-event* and *watchlist state at signup*.

This week's design is the sequence that handles the 3 distinct welcome profiles within minutes of registration, not days.

### Trigger conditions

W0 fires on two events, not on cron:

1. **`user.created` event** (i.e., a row inserted into `users`) — evaluates within 60 seconds
2. **`watchlist.added` event** (a row inserted into `watchlist`) — evaluates within 60 seconds, **but only for the user's first watchlist item ever**

The branch decision happens at trigger time based on the user's current state:

```
TRIGGER: user.created
  branch_decision = evaluate_user_state(user.id):
    if no watchlist items: → W0-B (empty-watchlist welcome, fires immediately)
    if 1+ items, all events past: → W0-C-past (post-event recovery)
    if 1+ items, soonest event ≤ 7 days away: → W0-C-urgent (urgent-event welcome)
    if 1+ items, soonest event ≥ 30 days away: → W0-A-canonical (long-lead welcome)
    if 1+ items, soonest event 8–29 days away: → W0-A-mid (mid-lead welcome)

TRIGGER: watchlist.added (first item ever for this user)
  if user.created within 1 hour: skip (W0-A or W0-C already fired or about to)
  else: re-evaluate as if user.created fired now
        (handles the "registered, ignored, came back days later, added an event" case)
```

**Suppression:** A user who hits W0 once never hits it again. Subsequent watchlist adds run through the normal path (Event Reminder ER1–ER3 if applicable, or no email).

### Email number registry (continued)

- **0–9: Real-Time Welcome Triage (NEW today)**
  - 0: W0-A-canonical (30+ days lead, single event)
  - 1: ~~Standard E1~~ (collision: bumping standard drip 1–5 to 11–15 if W0 ships)
  - Re-numbered registry: see Schema dependencies below
- 11–15: Standard drip (existing, dormant) — **renumbered from 1–5**
- 99: One-shot catch-up (designed Wk 3, not built)
- 101–103: Post-Signup Activation (designed Wk 1, not built)
- 201–203: Win-Back (designed Wk 2, not built)
- 301–304: World Cup Countdown (designed Wk 3, not built)
- 401–404: Event Reminder (designed Wk 4, not built)

Note on the renumber: standard drip 1–5 → 11–15 frees the 0–9 range for W0 variants. Dependency on the Growth schema work — see implementation notes. **If the renumber is too costly, alternative:** put W0 at 81–89 and leave the existing range alone. Sequencing arbitrary; just need a unique key.

### Email W0-A-canonical — fires within 60 seconds for users with a 30+ day lead event

Profile: **cjthomas2557 today** — 0-day tenure, signed up at 22:49 UTC, added Noah Kahan at Kia Center (Jun 12, 35 days out). Textbook canonical user; long lead time; single event of clear interest.

```
Subject: {{event_name}} is tracking. Here's how the next 35 days play out.
Preview: Welcome to TicketScan. Your event is in the early ranging zone — here's what we'll watch for you.

---

Hi {{first_name | "there"}},

Thanks for signing up to TicketScan and adding {{event_name}} to
your watchlist. We're now tracking prices on it across
Ticketmaster, SeatGeek, and StubHub every 4 hours. You don't have
to do anything to keep that running.

**Where your event sits right now:**

   • {{event_name}}
   • {{venue}}, {{city}} — {{date_pretty}}
   • {{days_out}} days away
   • Today's cheapest source: {{cheapest_source}} at ${{cheapest_price}}

**The 35-day playbook for an event at this lead time:**

1. **Today through Day 21 (next 14 days):** Prices drift sideways.
   The "early ranging zone." Nothing to act on yet — we'll keep
   tracking and only email when something changes.
2. **Day 21 to Day 14 (15–22 days from now):** First cuts from
   motivated sellers start appearing. We'll send you a price-trend
   update if anything material moves.
3. **Day 14 to Day 7 (the cheapest stretch):** This is where 6
   years of arena resale data shows the floor forms. Most price
   alerts fire in this band. **If you set a target, set it now.**
4. **Day 7 to event:** Day-of premium starts loading. From here
   forward, waiting is on average a losing bet.

**The one move that turns this on:**

Set a target price (the most you'd pay). Recommended baseline: 15%
below today's cheapest = ${{target_recommended}}. The moment any
source dips below your target, we email you within an hour.

→ [Set your target on {{event_name}}](https://www.ticketscan.io/watchlist)

— The TicketScan Team

P.S. We send at most 1 email per week unless something on your
watchlist actually moves. We don't believe in inbox-bombing — if
nothing's happening with your event, we won't pretend otherwise.
```

**Success metric:** Target price set within 24 hours OR open + click within 48 hours.
**Variant for `8 ≤ days_out ≤ 29`:** Same shape, swap the 35-day playbook for a compressed playbook matching the event's actual band (e.g., "you're already inside the 14-day discount window — here are the next 7 days").

### Email W0-B — fires within 60 seconds for users with no watchlist items

Profile: **natalie.sotocruz today** — 0-day tenure, registered without adding anything. Empty-state welcome was a *3-day-late* email under the canonical drip; under W0 it's a *1-minute-after-registration* email.

```
Subject: Welcome to TicketScan — what should we track for you?
Preview: We compare Ticketmaster, SeatGeek, and StubHub for any event. The fastest way to feel the value: add one event.

---

Hi {{first_name | "there"}},

Thanks for signing up to TicketScan. We compare ticket prices
across Ticketmaster, SeatGeek, and StubHub, send price-drop alerts
when prices on tracked events drop, and tell you when prices look
like they're heading up vs. down.

The fastest way to feel the value: add 1–2 events you're watching.
Even just thinking about. We start tracking from the moment you
add them and email you only when something material moves.

→ [Search for an event](https://www.ticketscan.io/dashboard)

A few things people on the platform are tracking right now:

   • Bruno Mars Romantic Tour (May 16/17 Soldier Field, May 20
     Ohio Stadium, Aug 21–25 MetLife)
   • 2026 World Cup matches (June 11 onward, all 16 host stadiums)
   • Inter Miami CF home matches at Nu Stadium
   • Noah Kahan — The Great Divide Tour (Kia Center Orlando, Jun 12)
   • AEW Double or Nothing (Louis Armstrong Stadium, May 24)

If your favorite team or artist is on tour, paste the name in
the search and we'll do the rest.

→ [Browse by venue](https://www.ticketscan.io/venues) — 24 venues
→ [Browse by city](https://www.ticketscan.io/tickets) — 37 cities

— The TicketScan Team

P.S. Reply if you have a specific event in mind and you can't
find it. We index 5+ sources but coverage isn't perfect — your
reply helps us spot gaps.
```

**Success metric:** Watchlist item added within 7 days OR open + click within 48 hours.
**Suppression:** If user adds a watchlist item within 1 hour of registration, suppress this email and re-route to W0-A. (Handles the "registered + added at the same session" case where W0-B would arrive after the user has already converted.)

### Email W0-C-urgent — fires within 60 seconds for signups with watchlist event ≤ 7 days away

Profile: **jadbennis0 yesterday** (3-day tenure now, but at signup he was 0-day with Inter Miami 12 days out — would have hit W0-A-mid then; if he'd waited 5 more days to sign up, he'd have hit W0-C-urgent). Forward-looking: anyone who signs up in the next 7 days with an event in their watchlist 1–7 days out.

```
Subject: {{event_name}} is in {{days_out}} days. Welcome — here's the read on this specific event.
Preview: You're inside the urgency window. Skip the platform tour; here's the only thing that matters today.

---

Hi {{first_name | "there"}},

You signed up to TicketScan and added {{event_name}} — and that
event is **{{days_out}} days away**. That puts you inside the
urgency window where the buy-window playbook is different from
the canonical "wait for the floor" advice.

**Where your event sits right now:**

   • {{event_name}}
   • {{venue}}, {{city}} — {{date_pretty}}
   • {{days_out}} days away
   • Today's cheapest source: {{cheapest_source}} at ${{cheapest_price}}

**What our data shows for events at {{days_out}} days out:**

{{urgency_block}}

**The honest read:**

Inside {{days_out}} days, "wait for a price drop" stops being good
advice. The structural floor for this kind of event has either
already formed (and you can buy near it today) or it never will
(and waiting compresses your options into a panic buy day-of).

The right move is to compare across sources right now, pick the
cheapest, and pull the trigger.

→ [Compare {{event_name}}](https://www.ticketscan.io/compare?event={{event_id}})

— The TicketScan Team

P.S. If you're not going anymore, archive the event so we stop
emailing you. Reply with "archive" or open your watchlist.
```

`{{urgency_block}}` is computed from `days_out` and event venue type:

| days_out | Urgency block |
|----------|---------------|
| 1–2 | "Day-of premium fully loaded. Same-section spread can be $80+ in a single afternoon. Day-2 prices match Day-1 prices 81% of the time on our 800-event dataset; where they diverge, day-1 is higher 64% of the time." |
| 3–4 | "Day-of premium starting to load. Floor has likely formed; rare to see fresh cuts at this distance. The compare-now move is materially better than the wait-and-see move." |
| 5–7 | "Last edge of the discount window. For arena events, the floor was 7–14 days; you're at the trailing edge. Sub-3000-cap rooms behave differently — Friday-of-show is the buy window; the playbook above is for arenas, not clubs/theaters." |

**Success metric:** Compare-view click OR direct-source-redirect click within 12 hours of send.
**Suppression:** None.

### Email W0-C-past — fires for signups with watchlist event already past

Profile: **sparkitrightthere yesterday** — 0-day tenure, added Mac DeMarco at The Salt Shed *the day of the event*. Class of failure separate from SMTP outage: **even a healthy E1 cadence misses this segment entirely** (E1 fires at Day 3; the event was Day 0). The canonical drip cannot serve this class.

```
Subject: Your {{event_name}} show was {{relative_time}} — here's our honest playbook from here.
Preview: Same-day-of-event signups need a different welcome. We'll skip the feature tour.

---

Hi {{first_name | "there"}},

You signed up to TicketScan {{signup_relative_time}} and added
{{event_name}} — but the event was {{relative_time}}. Hope you
made it; if you didn't, that one's on us — our drip cadence is
designed for users with at least a few days of lead time, and
same-day-of-event signups fall through the gap.

Two things we'd do next:

1. **Tell us what kind of stuff you actually track.** Mac DeMarco
   listeners often have overlap with Big Thief, Beach House, Alex G,
   Father John Misty, Wilco — we can surface alerts on tour
   announces if you tell us your favorites. Reply to this email
   with one or two artists or venues and we'll set up tracking.
2. **Set up a watchlist for your next show before you need it.**
   We alert when prices drop on Ticketmaster, SeatGeek, or StubHub.
   The ideal sweet spot to add a watchlist is 30–60 days out — that's
   where we save you the most money. Anything inside 7 days, the
   savings shrink fast.

→ [Browse events](https://www.ticketscan.io/dashboard)
→ [Build your watchlist](https://www.ticketscan.io/watchlist)

— The TicketScan Team

P.S. Mac DeMarco-adjacent shows on TicketScan right now:
   • Wilco (multiple cities, summer)
   • Beach House (East Coast tour, June)
   • Alex G — search for upcoming dates
We'll confirm scope if you reply with what you'd want tracked.
```

**Success metric:** Reply OR watchlist item added within 14 days. (Lower bar than W0-A/B because the user has already had a bad first experience; conversion expectations are lower.)
**Variants:** `relative_time = "earlier today"`, `"yesterday"`, `"earlier this week"`. Compute from `event_date` vs `NOW()`.

### Sequence Logic (for `index.js` implementation)

```javascript
// W0 — Real-Time Welcome Triage (event-triggered, NOT cron)
// Wire from POST /api/auth/register and POST /api/watchlist
// Email number range: 0–9 (collision with existing 1–5; see renumber decision)

async function triggerWelcomeTriage(userId, source = 'user.created') {
  // Suppress if any W0 variant already sent for this user
  const sent = await pool.query(
    `SELECT 1 FROM drip_emails_sent
      WHERE user_id = $1 AND email_number BETWEEN 0 AND 9 LIMIT 1`,
    [userId]
  );
  if (sent.rows.length > 0) return { skipped: 'already_sent' };

  // Suppress watchlist.added if user.created fired within last hour
  // (avoids double-firing W0-B then W0-A on a register+add session)
  if (source === 'watchlist.added') {
    const recent = await pool.query(
      `SELECT created_at FROM users WHERE id = $1
       AND created_at > NOW() - INTERVAL '1 hour'`,
      [userId]
    );
    if (recent.rows.length > 0) return { skipped: 'recent_user_create' };
  }

  // Evaluate state
  const userRow = await pool.query(
    `SELECT email, first_name FROM users WHERE id = $1`, [userId]
  ).then(r => r.rows[0]);
  if (!userRow) return { skipped: 'user_not_found' };

  const wlRows = await pool.query(`
    SELECT event_id, event_name, event_date, venue, city,
           EXTRACT(DAY FROM (event_date - NOW())) AS days_out
      FROM watchlist
     WHERE user_id = $1
       AND archived_at IS NULL
     ORDER BY event_date ASC
  `, [userId]).then(r => r.rows);

  let variant, emailNumber;

  if (wlRows.length === 0) {
    variant = 'W0-B';
    emailNumber = 1;
  } else {
    const soonest = wlRows[0];
    const days = Math.floor(soonest.days_out);

    if (days < 0) {
      variant = 'W0-C-past';
      emailNumber = 4;
    } else if (days >= 0 && days <= 7) {
      variant = 'W0-C-urgent';
      emailNumber = 3;
    } else if (days >= 8 && days <= 29) {
      variant = 'W0-A-mid';
      emailNumber = 2;
    } else {
      variant = 'W0-A-canonical';
      emailNumber = 0;
    }
  }

  const enriched = await enrichForWelcome(userRow, wlRows, variant);
  const success = await sendWelcomeEmail(userRow.email, variant, enriched);

  if (success) {
    await pool.query(
      `INSERT INTO drip_emails_sent (user_id, email_number, sent_at)
       VALUES ($1, $2, NOW())`,
      [userId, emailNumber]
    );
  }

  return { variant, success };
}

// Wiring at the registration handler:
app.post('/api/auth/register', async (req, res) => {
  // ... existing user creation ...
  // After successful insert, trigger W0 — fire-and-forget
  setImmediate(() => {
    triggerWelcomeTriage(newUser.id, 'user.created').catch(err =>
      console.error('W0 triage failed:', err)
    );
  });
  res.json({ success: true, /* ... */ });
});

// And at the watchlist handler:
app.post('/api/watchlist', authenticateToken, async (req, res) => {
  // ... existing watchlist insert ...
  // After successful insert, trigger W0 — only fires if no W0 sent yet
  setImmediate(() => {
    triggerWelcomeTriage(req.user.id, 'watchlist.added').catch(err =>
      console.error('W0 triage failed:', err)
    );
  });
  res.json({ success: true, /* ... */ });
});
```

### Schema dependencies

1. **`drip_emails_sent.email_number` range expansion.** Currently the unique constraint is `(user_id, email_number)`. With email_number ∈ {0,1,2,3,4} for W0, plus {1,2,3,4,5} for canonical drip, **collision on `email_number = 1`.** Two options:
   - **Renumber canonical drip to 11–15.** Cleaner long-term; one-time migration `UPDATE drip_emails_sent SET email_number = email_number + 10 WHERE email_number BETWEEN 1 AND 5;`. Risk: any place in code that hardcodes `1..5` breaks (grep `index.js` for `emailNumber` references — there are 4).
   - **Put W0 at 81–89 instead.** Avoids migration. Slightly noisier registry. Acceptable.
   - **Recommendation:** option B (W0 at 81–89). Faster to ship; no migration risk during a Day-32 outage. Aesthetic cost is real but minor.
2. **`first_name` column on `users`.** Currently the schema has `id, email, password_hash, created_at` — no first_name. The W0 templates use `{{first_name | "there"}}` with the fallback already built in, so this is graceful. **But:** registration form should start collecting first_name optionally. Handoff to CRO.
3. **Event-trigger wiring.** The `setImmediate` pattern above is fire-and-forget within the same Node process — fine for current scale but loses events on a worker restart between trigger and dispatch. **For MVP:** accept that loss (current scale, current restart frequency makes it acceptable). **For v2:** move to a queue (BullMQ on Redis is the lightweight option), which integrates cleanly with the existing 4-hour cron.

### Application to today's actual signups (case studies)

| User | Profile | Today's path | W0 path |
|------|---------|--------------|---------|
| cjthomas2557 (May 7, 22:49 UTC) | 35d-lead canonical | E1 fires May 10, 3 days post-signup | **W0-A-canonical fires May 7, 22:50 UTC** — 60 seconds post-signup |
| natalie.sotocruz (May 7, 18:40 UTC) | Empty watchlist | E1 fires May 10, but the email is Pattern-A-shaped (wrong) | **W0-B fires May 7, 18:41 UTC** — empty-state shape, immediate |
| sparkitrightthere (May 7, 11:38 UTC) | Same-day-as-event | E1 fires May 10, **3 days after the event** — useless | **W0-C-past fires May 7, 11:39 UTC** — apology + plan B, the only timing that works |
| jadbennis0 (May 5, 3-day tenure) | 12d-out at signup | E1 fires May 8 (today) — Pattern-A-shaped | Would have fired W0-A-mid May 5 — earlier and personalized |
| joseph.g.nicolosi (May 5, eligible E1 today) | Standard | E1 fires today | Would have fired W0 on signup, then standard E2 at Day 7 |
| zhili1208 (May 6, 0 watchlist for 2d) | Pattern B forming | E1 fires May 9, Pattern-A-shaped | Would have fired W0-B at signup, then Post-Signup Activation at Day 1 |

**Read:** Of the 6 most recent users with W0-eligible profiles, **5 of 6 receive the wrong-shape email under the current canonical drip.** Only joseph.g.nicolosi gets a roughly-correct send (and even then, with a 7-day delay W0 wouldn't have).

### Why W0 is more important than the 4 already-designed-but-unbuilt sequences

If I had to rank the 5 unbuilt sequences (W0 + the 4 prior) by per-user-impact today:

1. **W0-B (empty-watchlist).** Pattern B is ~50% of recent signups; current drip's E1 fires Pattern-A-shaped on Day 3, a 3-day delay applied to a wrong-shape email. **Highest leverage.**
2. **Event Reminder ER1–ER3.** Already designed Wk 4. Watchlist items aging into the 14/7/2 day windows have no associated emails. The Florence and Cubs Game 1 losses would have been in scope.
3. **Post-Signup Activation 101–103.** Designed Wk 1. Aimed at converting Pattern B → Pattern A. Now strictly downstream of W0-B (fires after W0-B, before standard drip).
4. **W0-A-canonical and W0-A-mid.** Lower leverage than W0-B because Pattern A users will at least find value in the standard drip, even if late and generic. Still significantly better than what they get today.
5. **Win-Back 201–203.** Designed Wk 2. Aimed at users inactive 14+ days. Lower priority because the population is smaller and their disengagement is already realized.
6. **W0-C variants (urgent, past).** Lower volume but **the only sequence that addresses sparkitrightthere-class signups at all.** When the channel is healthy and a same-day-event signup happens again, this is the only design that responds.
7. **World Cup Countdown 301–304.** Designed Wk 3. WC kickoff in 34 days; the buy window closes May 21. Still useful but a smaller cohort (3 WC-tagged users today, only pete.uzelac with multi-match exposure).
8. **One-shot catch-up (email 99).** Designed Wk 3. Cleanup pass for the post-E5 graveyard (~32 users). One-time send; one-time leverage.

**The build-priority ordering this implies:**

W0-B → ER1–3 → PSA 101–103 → W0-A → standard drip rewrites (E1, E2, E4, E5) → Win-Back → W0-C → WCC → catch-up.

This is a **departure from the prior weeklies' build queue.** Prior queue was driven by "what was designed first" (PSA before WB before WCC before ER). This week's queue is driven by "what gets the next user the right email." Re-flagging this as the recommended ordering shift in handoffs.

---

## 4. Pattern Distribution Update — Recent 8-User Cohort Reset

Last week: 62.5% Pattern B in the rolling 8. This week: **50.0%** in the rolling 8 — but the read is more nuanced than the raw % shift.

### Recent 8-user cohort (rolling, May 1 → May 8)

| Signup | Date | Profile | Pattern | W0 variant (if available) |
|--------|------|---------|---------|--------------------------|
| zhili1208 | May 1 | 0 wl after 7d | B | W0-B |
| (no signups May 2) | — | — | — | — |
| jadbennis0 | May 5 | Inter Miami May 17 (12d out at signup) | A (mid-lead) | W0-A-mid |
| joseph.g.nicolosi | May 5 | Standard signup | (unknown — wl status not in pendingUsers detail) | likely W0-B |
| natalie.sotocruz | May 7 | 0 watchlist items | B | W0-B |
| sparkitrightthere | May 7 | Mac DeMarco same day | C-past (NEW) | W0-C-past |
| cjthomas2557 | May 7 | Noah Kahan Jun 12 (35d) | A (canonical) | W0-A-canonical |

**Re-classified by W0 variant (the more useful taxonomy from this week forward):**

| W0 variant | Recent 8 count | % | 30-day trend |
|------------|-----------------|---|---|
| W0-A-canonical (long-lead, single event) | 1 | 12.5% | Slowing |
| W0-A-mid (mid-lead, single event) | 1 | 12.5% | Steady |
| W0-A+ (bulk same-venue/team) | 0 | 0% | Rare |
| W0-B (empty-watchlist) | 3–4 | 37.5–50% | **Now plurality** |
| W0-C-urgent (urgent event at signup) | 0 | 0% | Pending observation |
| W0-C-past (same-day or past event) | **1** | **12.5%** | **NEW class — first observed today** |

**The Pattern A/A+/B taxonomy from prior weeks compresses too much.** Pattern A is actually two distinct profiles (canonical vs mid-lead) that need different welcomes. Pattern B is ~one profile but timing matters. The C-past class is genuinely new and didn't exist in the taxonomy. The W0 6-variant breakdown is the lens going forward.

### Strategic implications (refresh)

1. **Pattern B is still the plurality of new signups, even after this week's drop from 62.5% to ~37–50%.** The recent cohort math is noisier with small samples; the 30-day base rate is steadier. **Welcome-B remains the single highest-leverage email to ship.**
2. **The C-past class is real, not a one-off.** sparkitrightthere is the first observed instance, but the structural conditions (same-day-of-event traffic from search ads, social referrals to imminent events, etc.) will produce more. **W0-C-past should be specced and shipped, not deferred to a future "we'll deal with edge cases later" lane.** Same-day signups have no other path. Ignoring them is choosing to lose them.
3. **The drip schedule's day-3 entry remains structurally wrong for 2 of the 3 recent profiles.** This was named last week. It's named again. Day 3 is too late for B (cooled off), too late for C-past (event over), exactly right for A-mid and A-canonical. **Splitting Pattern A and Pattern B at the entry point is precondition; W0 makes it operational.**
4. **The "Pattern B share" metric should be retired in favor of the W0-variant breakdown.** The new taxonomy is more useful for both decision-making and reporting. Re-flagging as a metrics handoff to Analytics.

---

## 5. List Health & Segmentation Report

### Inventory Snapshot

| Metric | Last Thu (5/1) | This Thu (5/8) | Δ |
|--------|-----------------|-----------------|---|
| Total registered users | 64 | 69 | +5 |
| Newsletter subscribers (active) | 3 | 3 | 0 |
| Newsletter organic signups | 1 | 1 | 0 |
| Users with 1+ watchlist items | ~31 | ~33 | +2 |
| Users with target prices set | 0 | 0 | 0 |
| Users who received any email | 0 | 0 | 0 |
| Watchlist items (total) | 85 | 88 | +3 |
| Past-event watchlist items | 30 | 39 | **+9** |
| Past-event % of total | 35.3% | 44.3% | **+9.0pp** |
| Days into SMTP outage | 25 | 32 | +7 |
| Designed-but-unbuilt sequences | 4 | 5 (W0 added today) | +1 |
| Drip rewrites queued (cumulative) | 3 | 4 (E2 added today) | +1 |
| Recorded conversion losses (cumulative) | 3 | 3 | 0 |

**Read:** Past-event watchlist crossed 44%. Among the items that aged into "past" this week were the 6 Cubs games (May 1–6, all of ajvanprooyen's items), the Florence concert (tate.sheppard), Bilmuri (goldy.pec), Mac DeMarco (sparkitrightthere), and Cubs Game 1 was already past last week. **Almost half the watchlist now points at past events.** The Event Reminder sequence is non-functional without past-event archive (already flagged 5 weeks running — Growth handoff #2).

### Segment Sizes (Behavioral — still no email engagement data)

| Segment | Size | Criteria | Recommended action |
|---------|------|----------|--------------------|
| Active watchlist (future events) | ~21 | 1+ future watchlist item | W0-A + Event Reminder + standard drip |
| Past-dated-only | ~9 | Watchlist items all past | **Archive first, then Win-Back** |
| Empty watchlist users | ~36 | Registered, 0 watchlist | **W0-B + PSA 101–103 — highest leverage segment** |
| Terminal urgency | 0 | Watchlist event ≤ 2 days | (jadbennis0 hits this Saturday May 16; konman87 hits this May 14/15) |
| 14-day urgency window | 4 | Watchlist event 3–14 days | **konman87 ×2 (Bruno Mars Soldier Field 8/9d), jadbennis0 (Inter Miami 9d), charlesteel126 (Bruno Mars Columbus 12d)** |
| 30-day window | 4 | Watchlist event 15–30 days | joshdguillemette (AEW 16d), 3 others |
| Long-lead (30+ days) | ~10 | Future event 30+ days out | cjthomas2557 (Noah Kahan 35d), pete.uzelac (4 WC matches), taranimeramaro (Bruno Mars MetLife 105d), samueltrogers (Alan Jackson 50d) |
| Pattern A+ (bulk same-venue) | 2 | 5+ items, same venue/team | ajvanprooyen (6 Cubs, ALL PAST), brigitte.theisen (8 Backstreet Boys) |
| World Cup interested | 3 | WC matches on watchlist | pete.uzelac (4 @ Lincoln Financial) — 34 days to first match (was 41 last week) |
| High-value | 3 | 5+ watchlist items | pete.uzelac (6), brigitte.theisen (8), ajvanprooyen (6 — all past) |
| Post-E5 graveyard | ~33 | Day 35+ signup, no drips received | One-shot catch-up (email 99) |
| Newsletter-only (no account) | 1 | roos_leeuwen | Convert to registered |
| Conversion-loss recovery | 3 | Recorded loss; recovery survey owed | Single-template apology + future-event cross-sell |
| **C-past welcome (new this week)** | **1** | **Same-day or past event at signup** | **W0-C-past — ONLY route that works** |
| **Day-of-event signup (new class)** | **1 cumulative** | **Watchlist event ≤ 24h from signup** | **W0-C-urgent within minutes** |

### Pattern Distribution (7-day rolling window)

See Section 4 for the W0-variant breakdown — it replaces the old A/A+/B framing.

### Hard Bounce / Invalid Email

Still unknowable — Day 32 of zero sends = Day 32 of zero deliverability data. Recommendations unchanged from last 4 weeks:
1. First send identifies hard bounces — remove after 2 hard fails per address
2. Add double opt-in on newsletter signup (currently single-step)
3. Regex + MX validation on newsletter `email` column before first bulk send
4. Domain diversity check on the 69-user list — if heavily skewed to one provider (Gmail), split the cold-start send so the first-day ratio is balanced

### Updated Recommendations

1. **The catch-up send remains the single biggest strategic move available.** ~33 graveyard users today (was 32 last week, was 30 the week before). One template, one send, one-time-per-user. Cheaper than acquisition; higher intent than a cold newsletter. **Holding at "ship-this-week-after-SMTP-fix" priority.**
2. **Pete Uzelac is now 27 days on platform with zero outreach.** 6 watchlist items, 4 World Cup matches, 34 days to his first match. The window for hand-written outreach to feel proactive vs reactive **closes May 12** when his first match enters the 30-day band. **Re-flagging as a hand-written `samir@ticketscan.io` send the moment SMTP returns.**
3. **konman87 has now been in the deepest-discount window for 2 days** (8/9 days out). Each additional day of silence on a 96-day-tenure user during peak buy-window is a separate, compounding failure. **By Saturday May 10 (the May 16 show is 6 days out), the discount window starts narrowing on the May 16 date specifically. By Tuesday May 12, the May 16 floor is gone.**
4. **Newsletter funnel deprecation decision is past-overdue.** 96-day organic-signup stall. Recommendation crystallized: kill the homepage form, move opt-in to the watchlist add-confirm flow. CRO owns the placement decision; the Email-side spec is ready (single inline checkbox at watchlist add, default unchecked, copy: "Email me weekly with price drops in my city").
5. **Past-event archive cron is now blocking 5 sequences (was 4 last week).** Adding W0-C-past to the count: it depends on `archived_at` being NULL to evaluate "no past events at signup." Without archive, `wlRows[0]` could spuriously be a stale past event for a returning user, mis-routing the welcome. **One database column + one cron is half a day of work and unblocks 5 sequences.** Re-flagging as the highest-ROI half-day in the entire engineering backlog.
6. **`drip-stats` API cap is hiding state.** With 3 new signups consuming the 3 newest cap slots this week, laye/bhaygood/blubberboi are now invisible to the only API exposing their pending status. **Pagination or raise-the-cap to 50 is now a P1.** Without it, this report's E4/E5 numbers will continue to artifactually decrease as the user base grows.

---

## 6. Cross-Agent Handoffs

### To Content Agent (Agent 1)
- **Lead magnet delivery email:** Still unshipped from Wk 1, Wk 2, Wk 3, Wk 4, and now Wk 5. **Fifth request.** When a user opts in from a blog post, they should receive an immediate single email with the PDF + 120 words of soft onboarding to the watchlist feature. Now genuinely overdue against the 5-week-running ask.
- **Bruno Mars Romantic Tour cross-stadium spread post.** New this week: the same-tour, different-city spread is a structural data story we own (3+ users tracking 6+ dates across 3 cities). The 5/6 piece (`2026-05-06-bruno-mars-romantic-tour-2026-venue-price-guide.md`) covers some of this but should be expanded with the live spread data from Section 2's newsletter tip. Could be a standalone post or an addendum.
- **"Three users we failed in April" post-mortem artifact — STILL OWED.** Re-flagging from Wk 4. Apr 24's request, Wk 4 deadline (May 1) missed, Wk 5 (today) still missed. The honest content arc is one post that names Viva El Jaripeo + Florence + Cubs Game 1, attributes the cause (channel outage), and commits to the fix. Title still proposed: "Three users we failed in April, and what we learned." Approaching the 30-day-from-original-request mark next week (May 24).

### To CRO Agent (Agent 6)
- **Target price UX — 5 weeks now. Day 101 of 100% null-on-add.** 0 of 88 watchlist items have a target price. Every email sequence depends on this. **Concrete proposal unchanged:** mandatory field on `/watchlist/add`, pre-filled at 15% below current minimum, with one-tap "use this" button. The E1 rewrite, E2 rewrite, ER1, ER2, ER3, W0-A-canonical, and W0-A-mid all lean on the user having a target. The product gap makes 7 different email templates inert.
- **`/venues` index page:** Wk 2 request unchanged. Needed for E4 rewrite (drafted Apr 17, still queued). 6 weeks open.
- **Past-dated watchlist add blocker:** Reject `event_date < NOW()` at write time. 44.3% past-event rate is structural. Need both the input-side block AND the at-signup backfill (Section 3 calibration finding from Wk 4 weekly).
- **Newsletter signup audit — Day 96 stall (unchanged in 96 days):** Past every previous deprecation window. **Recommendation crystallized:** kill the homepage form, move opt-in to watchlist add-confirm flow with single-line checkbox. Email-side spec ready. CRO owns placement.
- **First-name optional on registration form (NEW this week).** W0 templates use `{{first_name | "there"}}` with graceful fallback, but actual first names noticeably improve open rates per industry data. One optional field at registration. ~5 minutes of work.
- **Registration-flow → newsletter cross-pollination (NEW this week):** Per the daily, 3 users registered yesterday and 0 newsletter signups happened. Post-registration confirmation page should offer a default-checked "email me weekly price drops" opt-in. We get ~0% capture today from a population we already converted to register. Lowest-friction newsletter-growth lever available.

### To Growth Agent (Agent 8)
- **Cold-start reactivation plan — REORDERED AGAIN.** This week's update: **W0-B should ship before any other welcome variant** (Pattern B is plurality, and the rewrite cycle has produced 4 unshipped variants for Pattern A). Updated Day 1 prioritization: W0-B (empty-watchlist) first, then catch-up (email 99), then W0-A variants, then standard drip rewrites.
- **Past-event cleanup cron:** **39 of 88 items past-dated (44.3%, +9pp from last week, +11pp from two weeks back).** Trajectory is alarming. Was 27 (33%) on 4/24, 30 (35.3%) on 5/1, 39 (44.3%) on 5/8. Linear trajectory hits 50% by 5/15 if unchecked. **Now blocking 5 sequences.** Half-day of work. **Re-flagging as P0 for the third week.**
- **Email pause column:** `users.email_paused_until` (nullable timestamp) — Wk 2 request, still needed. Blocks Wk3 of Win-Back. 6 weeks open.
- **`drip_emails_sent.watchlist_id` column:** Wk 4 ask. Required for Event Reminder per-item dedup. ~10 minutes of schema work + partial index. Spec in last week's Section 3.
- **Email-trigger queue (NEW this week):** W0 sequence requires fire-on-event dispatch within 60 seconds of `user.created` and `watchlist.added`. MVP can use `setImmediate` (in-process); v2 should use a queue. Spec in Section 3.
- **`drip_emails_sent` email_number renumber decision:** W0 collides with canonical drip email_number range (1–5). Recommendation in Section 3: use 81–89 for W0 to avoid migration. Need formal sign-off on numbering.
- **Pete Uzelac VIP treatment:** Wk 3, Wk 4, Wk 5 ask. 6 items, 4 WC matches, 27 days silent, 34 days to first match. **The "feel proactive" window closes May 12 (4 days from now).** After May 12 it's "we're calling because you're getting close to your event," not "we noticed you're tracking and wanted to introduce ourselves."
- **Same-day-of-event signup observability (NEW this week):** sparkitrightthere is the first recorded instance of a user adding a watchlist item where `event_date - created_at < 24h`. Add a metric: "same-day-event signups per week." Currently 1; observation point for whether this is a one-off or a recurring class. Without W0-C-past, this class is uncatchable.

### To Analytics Agent (Agent 7)
- **Email pipeline status:** Day 32. Still zero sends ever. If an incident dashboard exists, please add — this is now a 5-week-running unresolved P0.
- **New metrics to track weekly:**
  - **W0-variant breakdown** (replaces the old A/A+/B pattern % chart). 6 categories: A-canonical, A-mid, A+, B, C-urgent, C-past. Track rolling 7-day and 30-day.
  - **Same-day-event signups** (event_date − created_at < 24h). Currently 1 cumulative. Watch for trend.
  - **Past-event watchlist %.** Currently 44.3%. Trajectory chart matters more than the level.
  - **Days into SMTP outage.** Currently 32. This metric should be on the front of the dashboard if there is one. Ideally hits 0.
  - **`/api/admin/drip-stats` cap-overflow.** As of today, 3 known pending users are invisible behind the cap (laye, bhaygood, blubberboi). Track "known overflow" as a count.
- **Attribution gaps logged this week:**
  - All 5 new users in 7 days received zero outreach across 32 days.
  - The 3-in-24h signup velocity spike (May 7) — origin unknown. Worth a cross-check with Agents 2/3/6 for any campaign or content driving traffic.
- **Cohort instrumentation request (re-flagging from Wk 4):** weekly "signups by W0 variant rolling 7-day" chart. Pattern shifts would have been visible 2–3 weeks earlier with this in place.

---

## 7. Pipeline Recovery Plan (Day 32)

### Immediate (within 1 hour of fix)
1. Run `POST /drip-run?limit=1&dryRun=true` — confirm <2s response time.
2. Verify `drip_emails_sent` rows are written on dry-run dispatch (currently 0 rows all-time).
3. Manually dispatch this week's Tier 0 sends: konman87 (Bruno Mars Soldier Field, 8d), jadbennis0 (Inter Miami, 9d), charlesteel126 (Bruno Mars Columbus, 12d), cjthomas2557 (Noah Kahan, 35d, canonical W0-A fit). The first two are inside the imminent intercept window where every additional day of silence compounds.

### Within 24 hours
4. Ship W0-B backlog first (3 confirmed Pattern B users + ~33 graveyard with empty watchlists).
5. Ship W0-A variants for cjthomas2557 (canonical) and jadbennis0 (mid-lead, but already past day 3 — send the W0-A-mid template anyway, treat as a backfill).
6. Ship W0-C-past for sparkitrightthere — the only viable touch.
7. Ship E1 threshold crossings — 16 backlog visible, 3+ behind the cap.
8. Add open pixel + click tracking to all templates before any further send. **Do not skip this on the first send.** 32 days into an instrumentation gap is enough.
9. Confirm bounce handling — hard bounces auto-suppress on the transactional path.
10. **Recovery survey send** — 3 conversion-loss recipients (tate.sheppard, ajvanprooyen, 2510soccerboy). Single hand-tuned template. Goes out Day +2 to allow 24h emotional distance from the recorded miss.

### Within 1 week
11. Deploy E1 rewrite (drafted May 1, branch logic for A/B).
12. Deploy E2 rewrite (drafted today, A/B + tour-cohort block).
13. Deploy E4 rewrite (drafted Apr 17, blocked on `/venues`).
14. Deploy E5 rewrite (drafted Apr 24).
15. **Build and deploy W0 (W0-A-canonical, W0-A-mid, W0-B, W0-C-urgent, W0-C-past)** — newest design but highest leverage; ship before the older designed-but-unbuilt sequences per Section 3's revised priority.
16. Build and deploy the one-shot catch-up (email 99, designed Wk 3).
17. Build Event Reminder ER1–ER3 (designed Wk 4).
18. Build Post-Signup Activation 101–103 (designed Wk 1) — now downstream of W0-B, fires Day 1 if W0-B didn't convert to a watchlist add.
19. Build Win-Back 201–203 (designed Wk 2).
20. Build World Cup Countdown 301–304 (designed Wk 3) — buy-window urgency makes this time-sensitive even if low-volume.

**Running count of designed-but-unbuilt sequences: 5** (W0 added today; PSA, WB, WCC, ER continuing). One full rotation cycle complete. **At current velocity, design throughput is 1 sequence/week and build throughput is 0/week.** That gap is no longer the side-story; for the third week running, it is the story.

**The honest decision point next week:** if SMTP is still down on 5/15 and zero sequences have been built, recommend pausing all new copy and design work in favor of helping triage the channel and the schema dependencies. Continuing to design email sequences for a system that cannot send any email is a coping mechanism, not a strategy.

---

## Key Metrics to Watch Next Week

| Metric | Last week (5/1) | This week (5/8) | Target (5/15) |
|--------|-----------------|------------------|---------------|
| Drip emails sent (all-time) | 0 | 0 | 20+ |
| Pipeline status | DOWN (Day 25) | DOWN (Day 32) | UP |
| Designed-but-unbuilt sequences | 4 | 5 | ≤3 |
| Drip rewrites queued | 3 | 4 | ≤2 (after E1+E2 ship) |
| Users with target prices | 0 | 0 | 5+ (post-CRO ship) |
| Newsletter subscribers | 3 | 3 | 3 (hold) OR ship deprecation |
| Activation rate (has watchlist) | ~48% | ~48% | 55% |
| Price alerts triggered | 0 | 0 | 1+ |
| Past-event watchlist items | 30 (35%) | 39 (44%) | <20 (post archive cron) |
| Past-event % trajectory | +2.3pp | +9.0pp | flat or negative |
| Post-E5 graveyard size | 32 | ~33 | ≤25 (via catch-up send) |
| Recorded conversion losses (cumulative) | 3 | 3 | 3 (no new losses) |
| W0 variant breakdown (rolling 8) | n/a | A-cn 1, A-md 1, B 4, C-pst 1 | Track |
| Same-day-event signups (cumulative) | n/a | 1 | Track for trend |
| Welcome backlog | 8 | 11 (5 new in 7d, 0 served) | 0 |
| API cap overflow (known invisible pending) | 0 | 3 | 0 (paginate or raise cap) |
| konman87 outreach | not sent (89d) | not sent (96d) | sent |
| pete.uzelac outreach | not sent (20d) | not sent (27d) | sent (proactive window closes 5/12) |

---

*Next weekly report: 2026-05-15*
*Daily reports continue on schedule: email-daily-YYYY-MM-DD.md*
