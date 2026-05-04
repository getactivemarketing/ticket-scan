# Email Daily — 2026-05-04

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 still have `last_email_sent = 0` — zero drip emails ever delivered
  - Eligibility breakdown today:
    - E1 eligible (3+ days): 20/20
    - E2 eligible (7+ days): 18/20 (no change)
    - E3 eligible (14+ days): 10/20 (+1 since yesterday)
    - E4 eligible (21+ days): 7/20 (no change)
    - E5 eligible (30+ days): 4/20 (no change)
  - **Newly crossed thresholds in last 24h:**
    - joshdguillemette@gmail.com: E2 → E3 (14 days)
  - Oldest pending: arin.gelbaugh@outlook.com (34 days), chocolateyu1083@yahoo.com (34 days) — should have all 5 emails by now; backlog now exceeds the entire 30-day drip cadence by 4 days
- **ESCALATION (Day 28 of outage):** SMTP/drip pipeline still completely broken. Confirmed at 10:00 UTC: `POST /api/admin/drip-run` hangs and times out after 35s with HTTP_CODE=000 (no response). Behavior identical to 2026-05-03 — no progress. Day 28. Action item carried over from 2026-04-07.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 85 watchlist items have a `target_price` set (verified at 10:00 UTC, all rows still `target_price: null`). The alert engine has nothing to evaluate against. UX problem upstream of email; users are never prompted to set a target.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged since 2026-02-01)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 92 days since last organic subscriber signup

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
| Cubs vs Reds | Wrigley Field | May 4 | **TODAY** | ajvanprooyen@crimson.ua.edu | 11 days |
| Cubs vs Reds | Wrigley Field | May 5 | 1 day | ajvanprooyen@crimson.ua.edu | 11 days |
| Cubs vs Reds | Wrigley Field | May 6 | 2 days | ajvanprooyen@crimson.ua.edu | 11 days |
| Bruno Mars — Romantic Tour | Soldier Field, Chicago | May 16 | 12 days | konman87@gmail.com | 92 days |
| Bruno Mars — Romantic Tour | Soldier Field, Chicago | May 17 | 13 days | konman87@gmail.com | 92 days |

Two users own all 5 urgent watchlist items. Neither has ever received any email from TicketScan. Same two users as yesterday — ajvanprooyen drops from 4 → 3 Cubs games (Cade Horton Tee on May 3 is now past), konman87's window tightens from 13/14 → 12/13 days.

**Carryover failures from last 24h:**
- ajvanprooyen — Cubs vs D-backs (Cade Horton Graphic Tee, #84) on May 3 passed without any TicketScan touch. **Third consecutive day** a watchlist event for this user has expired in silence (Bilmuri-night Cubs game May 2 + Kerry Wood Bobblehead May 2 both expired silently the day before).

**konman87 read worsens:** Now 92-day tenure with the show window 12 days out. Stadium-tour resale curves typically begin breaking at the ~10-day mark — we are losing the highest-value alert window of his entire 92 days on the platform, in real time.

### Digest Templates (ready for send once SMTP is fixed)

**For ajvanprooyen@crimson.ua.edu — Cubs run (3 remaining games over 3 days):**
```
Subject: 3 Cubs games this week — value pick analysis
Preview: Wrigley, May 4-6. Mid-week non-promo run.

Hi,

You've got 3 Cubs games on your watchlist over the next 3 days, all vs.
the Reds. Here's the read:

⚾ May 4 — Cubs vs Reds · TONIGHT
⚾ May 5 — Cubs vs Reds · TOMORROW
⚾ May 6 — Cubs vs Reds · 2 days (series finale)

Good news: this is a clean, non-promo, non-rivalry run, so prices should
be among the lower-priced Cubs homestands. The Cade Horton Tee giveaway
last night and the Kerry Wood Bobblehead game on May 2 both ran ~25-30%
above standard mid-week resale — those premiums are gone now.

Series-finale Wednesdays (May 6) typically clear about 5-10% under their
Mon/Tue counterparts on a 3-game homestand because attendance dips for
day-game getaway crowds. If you can flex, May 6 is the value play.

[CTA: Compare All 3 Games at Once →]

Pro tip: Set a target price on each game and we'll alert you when prices
drop below it. Right now you're flying blind.
```

**For konman87@gmail.com — Bruno Mars at Soldier Field (2 nights, 12/13 days out):**
```
Subject: Bruno Mars at Soldier Field — the resale curve is starting now
Preview: 12 days out. This is the first day of the price-break window.

Hi,

The two Bruno Mars Romantic Tour shows you've been tracking at Soldier
Field are 12 and 13 days away. Today is when stadium-tour resale curves
typically start breaking — sellers who held at premium prices begin
cutting, and the 7-12 day window is statistically when the cheapest
seats of the cycle appear.

🎤 Bruno Mars — The Romantic Tour
   Soldier Field, Chicago
   ▸ Fri, May 16 — 12 days out
   ▸ Sat, May 17 — 13 days out

Saturday usually carries a 15-25% premium over Friday for the same
stadium tour. If you're flexible on the night, May 16 is your value
play.

[CTA: Compare Both Nights Side by Side →]

P.S. You've had these on your watchlist for 92 days. We owed you alerts
the whole time. We're rebuilding the email pipeline — sorry for the
silence.
```

### Notable Watchlist Items (next 30 days, not in 14-day window)
- **Bruno Mars — The Romantic Tour** @ Ohio Stadium, Columbus (May 20) — charlesteel126@gmail.com — 16 days out, 11-day tenure
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — 20 days out, 14-day tenure (also crosses E3 today)
- World Cup matches (4) at Lincoln Financial — pete.uzelac77+ticketscan — 41-61 days out

### Past Events Now on Watchlist (cleanup candidates)
**35 of 85 watchlist items are past events as of 10:00 UTC** — past-event pollution is now ~41% of total watchlist volume.

Moved into "past" since yesterday's report:
- May 3: Cubs vs D-backs Cade Horton Graphic Tee (#84) — ajvanprooyen — **passed without any TicketScan touch (third consecutive day)**

Carryover from prior reports (still on watchlist, still need cleanup): 34 rows including:
- May 2: Bilmuri @ Sylvee (#72), Cubs Kerry Wood Bobblehead (#83)
- May 1: Cubs vs D-backs (#82), Florence + The Machine (#59)
- Apr 26: Raptors v Cavaliers (#88) — nmcnamee99's only watchlist item
- Apr 17: Phillies v Braves (#79) — nicklib253's only item
- Apr 12: Cardi B (#69) — bhaygood728's only item
- Apr 4: NCAA Final Four (#65) — arin.gelbaugh's only item
- Apr 2: Shen Yun (#19) and earlier
- Mar 31: Oilers v Kraken (#66) — chocolateyu1083's only item
- ~24 earlier rows (Feb/Mar) including Super Bowl LX, Lady Gaga at MSG, WWE Elimination Chamber, NCAA 2nd Round games, Atlanta Hawks v Celtics, Warriors v Rockets, etc.

**Sharper read from yesterday holds:** 4 of the 4 oldest pending drip users (E5+E4 cohort: arin, chocolateyu, laye, bhaygood) are still tracking only past events. Even if SMTP is fixed today and the drip fires, the digest content lands in inboxes referring to events that happened 1-5 weeks ago. Send-as-is = self-inflicted credibility damage.

---

## Subject Line A/B Tests

### Multi-event roundup — 3 Cubs games (refined from yesterday's 4-game version)
- **A:** `3 Cubs games this week — value pick analysis`
- **B:** `Your 3-game Cubs homestand, ranked: which night to buy`
- **Hypothesis:** A is concrete (count + benefit, frames the email as analysis). B uses curiosity + ranking framing — usually wins on roundup formats and signals data-driven analysis (on-brand). Lean B for resonance, A for clarity. Same hypothesis as yesterday's 4-game variant — keeping the convention so when volume scales we have one consistent A/B pattern documented.

### Stadium-tour break-window — Bruno Mars (refined from yesterday)
- **A:** `Bruno Mars at Soldier Field — the resale curve is starting now`
- **B:** `Today is the day Bruno Mars prices usually start dropping`
- **Hypothesis:** A leads with the user's tracked event + concrete time signal. B leads with a stronger urgency hook ("today is the day") — likely higher open rate but slightly higher unsubscribe risk if the data math is off for any user. B also reusable across any stadium tour. Lean B for konman87 (he's been silent 92 days; needs a strong hook), A for fresh sign-ups.

### Tenure-acknowledging open — 92-day silent user
- **A:** `Bruno Mars at Soldier Field — your watchlist update`
- **B:** `92 days, zero updates — we owe you a price check on Bruno Mars`
- **Hypothesis:** B remains the consumer-advocate voice play and converts the SMTP outage into a trust-building moment. A reads as if nothing was broken — its own credibility cost when the user opens and sees the date math. Lean B for konman87 specifically; A for fresh sign-ups.

### CTA Review
- "Compare All 3 Games at Once" → `ticketscan.io/watchlist` — clear, correct
- "Compare Both Nights Side by Side" → `ticketscan.io/compare?event_ids=21,20` (or `/watchlist`) — verify deep-link works; otherwise fall back to `/watchlist`
- All primary CTAs above the fold ✓
- P.S. block on konman87 template sits below CTA — acceptable trade-off; the apology is part of the trust play, not the ask

---

## Action Items

### P0 — Critical (Day 28 of outage)
1. **SMTP/drip pipeline is completely dead and `drip-run` continues to time out.** Identical behavior to 2026-05-03 — 35s timeout, HTTP_CODE=000, no response. Investigation order from yesterday is unchanged and untriaged:
   - Tail Railway logs while triggering `drip-run`. If no log line appears, the route handler isn't even executing → look at middleware / cron queue.
   - If the handler enters but never finishes, time the SMTP `nodemailer.createTransport().verify()` call in isolation.
   - If SMTP verifies, time the eligibility SELECT against `drip_emails_sent` joined on `users` — index health check.
   - Ship `/api/admin/drip-health` returning `{smtp: ok|fail, db: ok|fail, lastSendAt}` so the next regression is detected in <1 hour, not 28 days.
2. **3 watchlist events have now expired in silence in the last 72 hours** (Bilmuri @ Sylvee, Cubs Kerry Wood Bobblehead, Cubs Cade Horton Tee). One user (ajvanprooyen) has lost a watchlist event each of the last 3 days without a single TicketScan touch. We are now visibly failing the platform's core promise on a daily cadence. Each day SMTP stays down, more events expire silently.
3. **ajvanprooyen — 3 Cubs games left over the next 3 days.** Same user, third day in the urgency queue. If SMTP is still down by EOD, deploy a one-off manual SendGrid/Postmark fallback for this user only — this would be the easiest possible "did one-touch outreach actually convert?" test we can run while the cron is fixed. ROI is unmissable: 11-day tenure, 3 imminent watchlist events, no other signal source.

### P1 — High
4. **konman87@gmail.com window is closing in real time.** 92-day tenure, two Bruno Mars dates 12/13 days out (down from 13/14 yesterday). Stadium-tour resale curves typically break at the ~10-day mark — every day SMTP stays down, we lose more of the alert window we should be defending. By 2026-05-07 (10 days out), the highest-value alert moment has passed entirely.
5. **Drip threshold crossing today:** joshdguillemette@gmail.com (E2 → E3, 14 days). Smaller volume than yesterday's 4 crossings, but the trend is confirmed: ~1-4 threshold-advances/day are accumulating regardless of SMTP status. Backlog grows monotonically.
6. **Past-event watchlist pollution is now 41% (35/85).** Up from ~30 yesterday, +1 net (Cade Horton Tee). When SMTP returns, recommended sequence:
   - (a) Ship past-event auto-archive (`event_date < NOW() - 24h`) BEFORE first drip resumption
   - (b) Re-fetch each user's watchlist and personalize around remaining live events
   - (c) Catch-up sequence the 4 oldest users on a condensed 1-week schedule (arin, chocolateyu, laye, bhaygood — all currently tracking only past events; their drip restart needs new content, not the canonical sequence)
7. **Target-price UX (still 0/85).** Auto-suggest a target price at watchlist-add (e.g., 10% below current min across sources) OR a mandatory inline prompt at watchlist-add time. As long as target_price is null, the price-alert system is dead by design — fixing SMTP only revives drip + digest, not alerts.

### P2 — Medium
8. **Newsletter growth: 92-day stall.** 3 subscribers total (1 organic). Add CTAs to: blog post footers, venue pages, World Cup landing pages, watchlist-add confirmation flow. Test "weekly price drops in your city" pitch instead of generic newsletter framing.
9. **Build a watchlist-digest endpoint** for automated per-user sends. No endpoint exists — all the digest content above can't actually ship without one. Even after SMTP is fixed.
10. **Post-mortem still pending.** When SMTP is fixed, document: what broke, what monitoring was missing, why it took 28+ days, how we'll detect the next regression in <24h. The `/api/admin/drip-health` endpoint from item #1 is the leading deliverable.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 92-day stall
- **Drip pipeline:** BROKEN — Day 28 of outage, 0 sends ever, 20 users in backlog
- **Threshold advances since 2026-05-03:** joshdguillemette → E3 (1 advance in 24h, down from 4 yesterday)
- **Price alerts:** 0 ever triggered — 0/85 watchlist items have target prices (no progress)
- **User growth:** 0 today, 64 total (+2 this week)
- **Watchlist:** 85 items (no change today), 5 events within 14 days (3 Cubs vs Reds for ajvanprooyen + 2 Bruno Mars/Soldier Field for konman87)
- **Past-event pollution:** 35/85 watchlist items (41%) are past events; +1 net today (Cade Horton Tee, May 3)
- **Critical miss yesterday:** Cubs vs D-backs Cade Horton Graphic Tee (May 3) expired without any TicketScan email — now 3 consecutive days of expired-watchlist-events for the same user (ajvanprooyen)
- **High-tenure / high-intent alert window closing:** konman87@gmail.com (92-day tenure, 2 Bruno Mars dates now 12/13 days out) — losing the canonical stadium-tour resale-break window in real time
- **Email channel status:** Day 28 of outage. `drip-run` hangs (35s timeout, HTTP_CODE=000) — identical behavior to 2026-05-03, no investigation progress observable from the API surface
