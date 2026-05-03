# Email Daily — 2026-05-03

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 still have `last_email_sent = 0` — zero drip emails ever delivered
  - Eligibility breakdown today:
    - E1 eligible (3+ days): 20/20
    - E2 eligible (7+ days): 18/20 (+2 since yesterday)
    - E3 eligible (14+ days): 9/20 (+1 since yesterday)
    - E4 eligible (21+ days): 7/20 (no change)
    - E5 eligible (30+ days): 4/20 (+1 since yesterday)
  - **Newly crossed thresholds in last 24h:**
    - taranimeramaro@gmail.com: E1 → E2 (7 days)
    - nmcnamee99@gmail.com: E1 → E2 (7 days)
    - nicklib253@gmail.com: E2 → E3 (15 days)
    - bhaygood728@gmail.com: E4 → E5 (30 days)
  - Oldest pending: arin.gelbaugh@outlook.com (33 days), chocolateyu1083@yahoo.com (33 days) — should have all 5 emails by now
- **ESCALATION (Day 27 of outage):** SMTP/drip pipeline still completely broken. Confirmed at 10:00 UTC: `POST /api/admin/drip-run` hangs and times out (>30s, no response). No drip emails have ever been delivered to any user. Day 27. Action item carried over from 2026-04-07.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 85 watchlist items have a `target_price` set. Verified again today — every row in `/api/admin/watchlist` still returns `target_price: null`. The alert engine has nothing to evaluate against. UX problem upstream of email; users are never prompted to set a target.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged since 2026-02-01)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 91 days since last organic subscriber signup

## Platform Context
- Total users: 64 (0 new today, +2 this week)
- Watchlist items: 85 (no change)
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Tenure |
|-------|-------|------|----------|------|--------|
| Cubs vs Diamondbacks (Cade Horton Tee) | Wrigley Field | May 3 | **TODAY** | ajvanprooyen@crimson.ua.edu | 10 days |
| Cubs vs Diamondbacks | Wrigley Field | May 4 | 1 day | ajvanprooyen@crimson.ua.edu | 10 days |
| Cubs vs Reds | Wrigley Field | May 5 | 2 days | ajvanprooyen@crimson.ua.edu | 10 days |
| Cubs vs Reds | Wrigley Field | May 6 | 3 days | ajvanprooyen@crimson.ua.edu | 10 days |
| Bruno Mars — Romantic Tour | Soldier Field, Chicago | May 16 | 13 days | konman87@gmail.com | 91 days |
| Bruno Mars — Romantic Tour | Soldier Field, Chicago | May 17 | 14 days | konman87@gmail.com | 91 days |

Two users own all 6 urgent watchlist items. Neither has ever received any email from TicketScan.

**Notable:** konman87@gmail.com has been on the platform 91 days with two Bruno Mars dates pinned for nearly the entire stretch — should have all 5 drip emails AND a digest series tied to their tracked artist. Currently invisible to us.

**ajvanprooyen carryover:** This is the second consecutive day this user is the highest-volume single-user opportunity. Cubs run is now 4 games in 4 days (Bilmuri + Kerry Wood Bobblehead night already passed without a touch).

### Digest Templates (ready for send once SMTP is fixed)

**For ajvanprooyen@crimson.ua.edu — Cubs run (4 remaining games over 4 days):**
```
Subject: 4 Cubs games this week — here's where to save on each
Preview: Wrigley, May 3-6. Multi-game watchlist roundup.

Hi,

You've got 4 Cubs games on your watchlist over the next 4 days. Here's a
single-glance comparison:

⚾ May 3 — Cubs vs D-backs (Cade Horton Tee giveaway) · TONIGHT
⚾ May 4 — Cubs vs D-backs · TOMORROW (last of series)
⚾ May 5 — Cubs vs Reds · 2 days
⚾ May 6 — Cubs vs Reds · 3 days

Promo nights (the Cade Horton tee tonight) usually carry a 10-25% premium on
resale. Mid-week non-promo games (May 4-6) are typically your value picks —
last night's Kerry Wood Bobblehead game is the case study, prices ran ~30%
above the rest of the homestand.

[CTA: Compare All 4 Games at Once →]

Pro tip: Set a target price on each game and we'll alert you when prices
drop below it. Right now you're flying blind.
```

**For konman87@gmail.com — Bruno Mars at Soldier Field (2 nights, 13/14 days out):**
```
Subject: Bruno Mars at Soldier Field is in 2 weeks — price check time
Preview: May 16 + 17 in Chicago. Resale curves usually break ~10 days out.

Hi,

The two Bruno Mars Romantic Tour shows you've been tracking at Soldier Field
are 13 and 14 days away. This is the window when stadium-tour resale
typically starts breaking — sellers who held too long start cutting prices,
and the cheapest seats of the cycle often appear in the 7-14 day range.

🎤 Bruno Mars — The Romantic Tour
   Soldier Field, Chicago
   ▸ Fri, May 16 — 13 days out
   ▸ Sat, May 17 — 14 days out

Saturday usually carries a 15-25% premium over Friday for the same stadium
tour. If you're flexible on the night, May 16 is your value play.

[CTA: Compare Both Nights Side by Side →]

P.S. You've had these on your watchlist for 91 days. We owed you alerts the
whole time. We're rebuilding the email pipeline — sorry for the silence.
```

### Notable Watchlist Items (next 30 days, not in 14-day window)
- **Bruno Mars — The Romantic Tour** @ Ohio Stadium, Columbus (May 20) — charlesteel126@gmail.com — 17 days out, 10-day tenure
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — 21 days out, 13-day tenure (also crosses E4 today)
- World Cup matches (4) at Lincoln Financial — pete.uzelac77 — 42-62 days out

### Past Events Now on Watchlist (cleanup candidates — added in last 24h)
Moved into "past" since yesterday's report:
- May 2: Bilmuri @ The Sylvee (#72) — goldy.pec.2012 — **passed without any TicketScan touch**
- May 2: Cubs vs D-backs Kerry Wood Bobblehead (#83) — ajvanprooyen — **passed without any TicketScan touch**

Carryover from prior reports (still on watchlist, still need cleanup):
- May 1: Cubs vs D-backs (#82), Florence + The Machine (#59)
- Apr 26: Raptors v Cavaliers (#88) — nmcnamee99's only watchlist item is already past
- Apr 17: Phillies v Braves (#79) — nicklib253's only item is already past
- Apr 12: Cardi B (#69) — bhaygood728's only item
- Apr 4: NCAA Final Four (#65) — arin.gelbaugh's only item
- Apr 2: Shen Yun (#19) and earlier
- Mar 31: Oilers v Kraken (#66) — chocolateyu1083's only item
- Plus ~10 earlier rows from Feb/Mar (Super Bowl, Lady Gaga at MSG, Shen Yun, Raptors, WWE Elimination Chamber, etc.)

**Sharper read:** 4 of the 4 oldest pending drip users (E5+E4, oldest first: arin, chocolateyu, laye, bhaygood) are tracking only past events. Even if the drip fires today, the digest content is dead. We'd be sending price alerts on ghosts.

---

## Subject Line A/B Tests

### Multi-event roundup — 4 Cubs games (carryover, refined)
- **A:** `4 Cubs games this week — here's where to save on each`
- **B:** `Your Cubs week, ranked: which night is the best deal?`
- **Hypothesis:** A is concrete (count + benefit). B uses curiosity + ranking framing — usually outperforms in roundup formats and signals data-driven analysis (on-brand). Lean B for resonance, A for clarity. With n=1 this is anecdotal, not statistical, but the convention is worth establishing for when volume scales.

### Stadium-tour pre-window — Bruno Mars (new today)
- **A:** `Bruno Mars at Soldier Field is in 2 weeks — price check time`
- **B:** `The 7-14 day window is when Bruno Mars prices usually break`
- **Hypothesis:** A leads with the user's tracked event (recognition). B leads with the data insight (consumer-advocate brand voice, teaches the user something they'll associate with TicketScan even if they don't open). B is also reusable across any stadium tour without rewriting the subject. Lean B as the brand-defining variant; A as the safe baseline.

### Tenure-acknowledging open — 91-day silent user
- **A:** `Bruno Mars at Soldier Field — your watchlist update`
- **B:** `91 days, zero updates — we owe you a price check on Bruno Mars`
- **Hypothesis:** B is risky (calling out the silence) but consistent with the consumer-advocate voice and converts the SMTP outage into a trust-building moment. A is safe but reads as if nothing was broken — which is its own credibility cost when the user opens and sees the date math. Lean B for konman87 specifically; A for fresh sign-ups.

### CTA Review
- "Compare All 4 Games at Once" → `ticketscan.io/watchlist` — clear, correct
- "Compare Both Nights Side by Side" → `ticketscan.io/compare?event_ids=21,20` (or `/watchlist`) — verify deep-link works; otherwise fall back to `/watchlist`
- All primary CTAs above the fold ✓
- P.S. block on konman87 template sits below CTA — acceptable trade-off; the apology is part of the trust play, not the ask

---

## Action Items

### P0 — Critical (Day 27 of outage)
1. **SMTP/drip pipeline is completely dead and `drip-run` now times out instead of erroring.** A timeout (vs. 500) suggests the worker hangs on SMTP connect or a DB query — either Gmail is rejecting auth and the connect is stuck, or the user-eligibility query is locking. Investigate in this order:
   - Tail Railway logs while triggering `drip-run`. If no log line appears, the route handler isn't even executing → look at middleware / cron queue.
   - If the handler enters but never finishes, time the SMTP `nodemailer.createTransport().verify()` call in isolation.
   - If SMTP verifies, time the eligibility SELECT against `drip_emails_sent` joined on `users` — index health check.
   - Add a `/api/admin/drip-health` endpoint that returns `{smtp: ok|fail, db: ok|fail, lastSendAt}` so we can detect the next regression in <1 hour, not 27 days.
2. **Bilmuri + Kerry Wood Bobblehead game both passed last night with zero TicketScan touch.** Two users (goldy.pec.2012, ajvanprooyen) had urgent watchlist events expire. We are now visibly failing the platform's core promise on a daily cadence. Each day SMTP stays down, more events expire silently.
3. **ajvanprooyen — 4 Cubs games left over the next 4 days.** Same user, second day in the urgency queue. Send the digest the moment SMTP is back. If still down by EOD, consider a one-off manual SendGrid/Postmark fallback for this user only — proof that one-touch outreach works while the cron is fixed.

### P1 — High
4. **konman87@gmail.com surfaced for the first time in this report:** 91-day tenure, two Bruno Mars dates 13/14 days out, zero emails ever. This is the highest-tenure / highest-intent user with no touch.
5. **Drip threshold crossings today:** taranimeramaro (E2), nmcnamee99 (E2), nicklib253 (E3), bhaygood728 (E5). Backlog mathematically grows by ~3-4 threshold-crossings/day at the current user-creation rate, so every day of outage adds permanent reputational cost on top of the per-user catch-up debt.
6. **Past-event watchlist pollution is now structural:** 4 of the 4 oldest pending drip users are tracking only past events. When SMTP returns, sending the standard drip + digest will land in inboxes referring to events that happened weeks ago. Recommended sequence: (a) ship the past-event auto-archive (`event_date < NOW() - 24h`) BEFORE first drip resumption, then (b) re-fetch each user's watchlist and personalise around remaining live events, then (c) catch-up sequence the 4 oldest users on a condensed 1-week schedule.
7. **Target-price UX (still 0/85):** Auto-suggest a target price at watchlist-add (e.g., 10% below current min across sources) OR a mandatory inline prompt at watchlist-add time. As long as this is null, the price-alert system is dead by design — fixing SMTP only revives drip + digest, not alerts.

### P2 — Medium
8. **Newsletter growth: 91-day stall.** 3 subscribers total (1 organic). Add CTAs to: blog post footers, venue pages, World Cup landing pages, watchlist-add confirmation flow. Test "weekly price drops in your city" pitch instead of generic newsletter framing.
9. **Build a watchlist-digest endpoint** for automated per-user sends. No endpoint exists — all the digest content above can't actually ship without one. Even after SMTP is fixed.
10. **Post-mortem still pending.** When SMTP is fixed, document: what broke, what monitoring was missing, why it took 27+ days, how we'll detect the next regression in <24h. The `/api/admin/drip-health` endpoint from item #1 is the leading deliverable.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 91-day stall
- **Drip pipeline:** BROKEN — Day 27 of outage, 0 sends ever, 20 users in backlog
- **Threshold advances since 2026-05-02:** taranimeramaro → E2, nmcnamee99 → E2, nicklib253 → E3, bhaygood728 → E5 (4 advances in 24h)
- **Price alerts:** 0 ever triggered — 0/85 watchlist items have target prices (no progress)
- **User growth:** 0 today, 64 total (+2 this week)
- **Watchlist:** 85 items (no change today), 6 events within 14 days (4 Cubs games + 2 Bruno Mars/Soldier Field nights)
- **Critical miss yesterday:** Bilmuri @ Sylvee and Cubs vs D-backs Kerry Wood Bobblehead both happened last night without any TicketScan email — 2 watchlist events expired in silence in 24h
- **High-tenure / high-intent surfacing:** konman87@gmail.com (91-day tenure, 2 Bruno Mars dates 13/14 days out) — never received any email
- **Cleanup opportunity worsening:** 4/4 oldest pending drip users are tracking only past events — drip sequence will land on dead content when SMTP returns
- **Email channel status:** Day 27 of outage. `drip-run` now hangs (>30s timeout) instead of erroring — suggests worker stuck on SMTP connect or DB query, not a route-level failure
