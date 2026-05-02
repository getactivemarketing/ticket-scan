# Email Daily — 2026-05-02

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Eligibility breakdown today:
    - E1 eligible (3+ days): 20/20
    - E2 eligible (7+ days): 16/20
    - E3 eligible (14+ days): 8/20
    - E4 eligible (21+ days): 7/20
    - E5 eligible (30+ days): 3/20 (laye.aurelien 30d, chocolateyu1083 32d, arin.gelbaugh 32d)
  - Newly crossed thresholds since 2026-04-14:
    - 4 new pending users added (zhili1208, lilianamasyrubi, taranimeramaro, nmcnamee99)
    - 6 users who were E1-eligible advanced to E2
    - dr.altvater, joshdguillemette: now E2
    - dylanbaldy now E3
    - blubberboi, bhaygood728: now E4
    - laye.aurelien: now E5
  - Oldest pending: arin.gelbaugh@outlook.com (32 days) — should have received all 5 emails by now
- **ESCALATION (Day 26 of outage):** SMTP/drip pipeline still completely broken. `POST /api/admin/drip-run` has not produced a single send since at least 2026-04-07. **Zero lifecycle emails have ever reached any user since platform launch.**

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Root cause unchanged:** 0 of 85 watchlist items have a `target_price` set (verified: every row in `/api/admin/watchlist` returns `target_price: null`). The alert engine has nothing to evaluate against. This is a UX problem upstream of email — users are never prompted to set target prices.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged since 2026-02-01)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 90 days since last organic subscriber signup

## Platform Context
- Total users: 64 (0 new today, +4 this week)
- Watchlist items: 85 (+13 since 2026-04-14)
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Tenure |
|-------|-------|------|----------|------|--------|
| Bilmuri — Kinda Hard Tour | The Sylvee, Madison | May 2 | **TODAY** | goldy.pec.2012@gmail.com | 21 days |
| Cubs vs Diamondbacks (Kerry Wood Bobblehead) | Wrigley Field | May 2 | **TODAY** | ajvanprooyen@crimson.ua.edu | 9 days |
| Cubs vs Diamondbacks (Cade Horton Tee) | Wrigley Field | May 3 | **1 day** | ajvanprooyen@crimson.ua.edu | 9 days |
| Cubs vs Diamondbacks | Wrigley Field | May 4 | 2 days | ajvanprooyen@crimson.ua.edu | 9 days |
| Cubs vs Reds | Wrigley Field | May 5 | 3 days | ajvanprooyen@crimson.ua.edu | 9 days |
| Cubs vs Reds | Wrigley Field | May 6 | 4 days | ajvanprooyen@crimson.ua.edu | 9 days |

Two users carry all 6 urgent watchlist items. Both are perfect digest targets — but neither has ever received any email from TicketScan.

### Digest Templates (ready for send once SMTP is fixed)

**For goldy.pec.2012@gmail.com — Bilmuri TONIGHT (CRITICAL):**
```
Subject: Bilmuri at The Sylvee is TONIGHT — last-minute price check
Preview: Doors are hours away. Here's the cheapest option across all sources.

Hi,

Heads up — the Bilmuri "Kinda Hard Tour" show you've been watching is TONIGHT
at The Sylvee, Madison. No target price set, but resale almost always bottoms
out the day of the show.

🔥 Bilmuri — Kinda Hard Tour
   The Sylvee, Madison · Tonight (May 2)
   → Compare TM, SeatGeek, and StubHub right now — last-mile drops are common.

[CTA: Compare Bilmuri Prices →]

P.S. You've had this on your watchlist for 21 days. We should have been
sending you price updates the whole time. We're fixing that.
```

**For ajvanprooyen@crimson.ua.edu — Cubs run (5 games over 5 days):**
```
Subject: 5 Cubs games this week — here's where to save on each
Preview: Wrigley, May 2-6. Multi-game watchlist roundup.

Hi,

You've got 5 Cubs games on your watchlist over the next 5 days — that's a
serious week of baseball. Here's a single-glance comparison:

⚾ May 2 — Cubs vs D-backs (Kerry Wood Bobblehead night) · TONIGHT
⚾ May 3 — Cubs vs D-backs (Cade Horton Tee) · TOMORROW
⚾ May 4 — Cubs vs D-backs · 2 days
⚾ May 5 — Cubs vs Reds · 3 days
⚾ May 6 — Cubs vs Reds · 4 days

Promo nights (bobblehead, tee giveaway) usually carry a 10-25% premium on
resale. Mid-week non-promo games (May 4-6) are typically your value picks.

[CTA: Compare All 5 Games at Once →]

Pro tip: Set a target price on each game and we'll alert you when prices
drop below it. Right now you're flying blind.
```

### Notable Watchlist Items (next 30 days, not in 14-day window)
- **Bruno Mars — The Romantic Tour** @ Ohio Stadium, Columbus (May 20) — charlesteel126@gmail.com — 18 days
- **AEW Double or Nothing** @ Louis Armstrong Stadium, Flushing (May 24) — joshdguillemette@gmail.com — 22 days
- **Bilmuri — Kinda Hard Tour** + 6 Cubs games (already covered above)

### Past Events Still on Watchlist (cleanup candidates)
From the 50 most recent watchlist rows visible, ~11 are for events that have already happened:
- May 1 (yesterday): Cubs vs D-backs (#82), Florence + The Machine (#59)
- Apr 26: Raptors v Cavaliers (#88)
- Apr 17: Phillies v Braves (#79)
- Apr 12: Cardi B (#69)
- Apr 8: RAYE (#62)
- Apr 5: Warriors v Rockets (#41 — older record)
- Apr 4: NCAA Final Four (#65)
- Mar 31: Oilers v Kraken (#66)
- Mar 30: Hawks v Celtics (#47)
- Mar 22: NCAA 2nd Round / BAD OMENS (#61, #42)
- Mar 21: NCAA 2nd Round (#60)

At least **~22% of recent watchlist items are for past events**. The full list across all 85 rows is likely worse. These inflate metrics and pollute any digest math.

---

## Subject Line A/B Tests

### Same-day urgency — Bilmuri TONIGHT
- **A:** `Bilmuri at The Sylvee is TONIGHT — last-minute price check`
- **B:** `Doors open in hours — Bilmuri price check before you walk in`
- **Hypothesis:** A leads with the artist + venue (recognition); B leads with the action ("doors open") and reframes us as a pre-purchase tool. B is more on-brand (consumer-advocate, useful at the moment of decision). Test if volume permits — but with 1 user this is more anecdotal than statistical.

### Multi-event roundup — 5 Cubs games
- **A:** `5 Cubs games this week — here's where to save on each`
- **B:** `Your Cubs week, ranked: which night is the best deal?`
- **Hypothesis:** A is concrete and direct (5 games, save). B uses curiosity + ranking framing, which often outperforms in roundup formats. B also implies analysis (data-driven brand voice). Lean B for resonance, A for clarity.

### CTA Review
- "Compare Bilmuri Prices" → `ticketscan.io/dashboard?q=Bilmuri` — verify deeplink works; otherwise `/compare`
- "Compare All 5 Games at Once" → `ticketscan.io/watchlist` — clear, correct
- All primary CTAs above the fold ✓
- No P.S. blocks below CTA — primary action stays above noise ✓

---

## Action Items

### P0 — Critical (Day 26 of outage)
1. **SMTP/drip pipeline still completely dead.** 26 consecutive days with zero drip sends. 20 users in backlog. Oldest waiting 32 days. **Highest-leverage fix on the platform right now** — every other email-marketing optimization is moot until this works. Investigate: SMTP creds, Gmail app-password validity, drip-run endpoint hang (DB query? SMTP timeout?). Add a synthetic monitor so this never silently regresses again.
2. **goldy.pec.2012 — Bilmuri is TONIGHT.** 21 days on platform, zero emails received. The window closes at door time. If SMTP isn't fixed in hours, this user passes through their watchlist event with zero TicketScan touch.
3. **ajvanprooyen — 5 Cubs games over the next 5 days.** Highest-volume single-user opportunity on the platform. Daily digest material. Currently invisible to us.

### P1 — High
4. **New drip eligibility crossed since 2026-04-14:**
   - 4 new pending users (E1)
   - 6 users advanced to E2
   - dylanbaldy hit E3
   - blubberboi, bhaygood728 hit E4
   - laye.aurelien hit E5
5. **Target-price UX (still 0/85, now worse than 0/72 last report):** As watchlists grow, the silent failure scales. Recommend: auto-suggest a target price on watchlist add (e.g., 10% below current min across sources) OR a mandatory inline prompt at watchlist-add time.
6. **Auto-archive past events:** Visible past-event ratio is now ~22% of recent rows. Build a nightly job that flags or hides events with `event_date < NOW() - 24h`. At minimum, exclude them from digest and alert evaluation.
7. After SMTP fix, trigger `POST /api/admin/drip-run` to clear the 20-user backlog. The 3 users 30+ days old (laye.aurelien, chocolateyu1083, arin.gelbaugh) need accelerated catch-up sequencing — not 5 emails over 30 days starting from zero, but a condensed 1-week catch-up sequence so they don't experience the campaign as random noise weeks after signup.

### P2 — Medium
8. **Newsletter growth: 90-day stall, 0 net change in 18 days.** 3 subscribers total (1 organic). The homepage signup is acquiring nothing. Add newsletter CTAs to: blog post footers, venue pages, World Cup landing pages, and the watchlist-add confirmation flow. Test a "weekly price drops in your city" pitch instead of generic newsletter framing.
9. **Build a watchlist-digest endpoint** for automated per-user sends (no endpoint exists today — all the digest content above can't actually ship without one).
10. **Post-mortem still pending.** When SMTP is fixed, document: what broke, what monitoring was missing, why it took 26+ days, how we'll detect the next regression in <24h.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 90-day stall
- **Drip pipeline:** BROKEN — Day 26 of outage, 0 sends ever, 20 users in backlog
- **Price alerts:** 0 ever triggered — 0/85 watchlist items have target prices (worsening: 85 vs. 72 a fortnight ago)
- **User growth:** 0 today, 64 total (+4 this week, +13 since 2026-04-14)
- **Watchlist:** 85 items (+13), 6 events within 14 days (Bilmuri tonight, 5 Cubs games May 2-6)
- **Critical miss:** goldy.pec.2012 has Bilmuri TONIGHT and has never received any email (21-day engagement gap)
- **High-leverage user:** ajvanprooyen has 5 events in 5 days starting today — single-user digest motherlode
- **New drip eligibility crossings since 2026-04-14:** 13 threshold advances
- **Cleanup opportunity:** ~22% of visible watchlist rows reference past events
- **Email channel status:** Completely dormant. Zero emails of any kind have ever reached a user. Day 26.
