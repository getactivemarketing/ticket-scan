# Email Daily — 2026-04-17

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted — request timed out before any send)
- **Pending users (overdue, never received any drip): 20** (unchanged)
  - 20/20 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Breakdown by eligibility (today is 2026-04-17):
    - E1 eligible (≥3 days): 19 users (dylanbaldy@gmail.com at 1d is the only ineligible; becomes E1-eligible 2026-04-18)
    - E2 eligible (≥7 days): 18 users (goldy.pec.2012 and blubberboi both crossed the E2 line today at 7d)
    - E3 eligible (≥14 days): 16 users (bhaygood728 newly eligible today at 14d)
    - E4 eligible (≥21 days): 11 users
    - E5 eligible (≥30 days): 8 users (jkaiser@weberschool.org newly eligible today at 31d — second user to hit terminal stage)
  - Oldest pending: edithdionne@hotmail.com (43d) — should have received all 5 emails weeks ago
- **ESCALATION (Day 11):** `POST /api/admin/drip-run` timed out again today (exit code 28, 20s timeout). Zero drip emails sent since platform launch. **SMTP has been completely non-functional for eleven consecutive days.** This has moved beyond bug territory — the drip pipeline is a dark feature in production. If this is not fixed by Day 14 (2026-04-20), I will stop reporting it as an outage and start treating it as "not shipped."
- Root-cause checklist for whoever picks this up (ordered by likelihood):
  1. **Stale Gmail app password** — most common failure mode for Nodemailer+Gmail SMTP. Check `SMTP_PASS` in Railway env vars and regenerate from Google Account → App Passwords.
  2. **Gmail SMTP temporary block** — excessive auth failures trigger Google's "suspicious activity" lockout. Sign in to the Gmail account manually and clear any security alerts.
  3. **Railway egress firewall on port 587** — less likely (it has worked before) but worth verifying the server can reach `smtp.gmail.com:587` via a shell.
  4. **Synchronous blocking in the drip loop** — the 20s timeout suggests the handler isn't even returning a partial response. May need to wrap sends in `Promise.allSettled` with a per-user timeout so one stuck socket doesn't freeze the whole run.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: 0 out of 72 watchlist items have a `target_price` set. The alert engine has nothing to evaluate. Every row in `watchlist` returns `target_price: null`.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 75 days since last organic subscriber signup

## Platform Context
- Total users: 52 (unchanged — no new signups today)
- Users this week: 2
- Users today: 0
- Watchlist items: 72 (unchanged)
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User |
|-------|-------|------|----------|------|
| **TWICE World Tour** | Moody Center ATX, Austin | **TONIGHT (Apr 17)** | **0 days — TODAY** | yuehsu@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 18 | **1 day** | yuehsu@gmail.com |
| Viva El Jaripeo 2026 | Allstate Arena, Rosemont | Apr 25 | **8 days** | 2510soccerboy@gmail.com |
| Florence + The Machine — Everybody Scream Tour | State Farm Arena, Atlanta | May 1 | **14 days (newly entered)** | tate.sheppard@gmail.com |

### Today's Terminal-Urgency Case: yuehsu@gmail.com
This is the literal last day. TWICE Night 1 is tonight (doors probably already in sight by the time an email could realistically land). Night 2 is tomorrow. yuehsu has been on the platform since 2026-02-03 (73 days), has two shows on watchlist, and has received **zero** emails of any kind. After Saturday, both items become past-events and the window closes forever on any attribution from this user's stated intent. This is a 100%-known, 0%-acted-on conversion signal.

### Digest Templates (ready for send once SMTP is fixed)

**For yuehsu@gmail.com — TWICE TONIGHT (zero-hour urgency):**
```
Subject: TWICE Austin is TONIGHT — last-minute resale is usually the play
Preview: Door prices are a trap. Here's how the last 4 hours typically shake out.

Hi there,

It's tonight. TWICE, Moody Center ATX — you've been watching this one since February.

⚡ What happens in the last 4 hours before a sold-out show:
   • Resale floors drop 15–30% as season ticket holders dump
     inventory they can't use
   • StubHub + SeatGeek keep updating until doors close
   • Day-of lobby/door prices almost never beat the resale floor

If you're still deciding:
   → Compare all three sources one more time. The floor right now
     is probably already below what it was yesterday morning.
   → Avoid hospitality / VIP resale packages — these are the most
     marked-up listings on the market.

And you've still got TOMORROW (Saturday, Apr 18). Saturday-night shows for the same
artist historically price 10–20% higher than Friday shows. If you're flexible,
Tonight wins on price almost every time.

[CTA: Compare TWICE Prices Right Now →]
```

**For 2510soccerboy@gmail.com — 8 days out (statistical floor window):**
```
Subject: Viva El Jaripeo is 8 days out — you're standing on the price floor
Preview: 7–14 days before a show is when resale tends to bottom. That's right now.

Hi there,

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   Saturday, April 25 (8 days away) — No target price set

You're inside the statistical price-floor window. Most events bottom out on
the resale market 7–14 days before the show, then rebound as the date
approaches and dumpers thin out.

Two things to do today:
1. Set a target price — if it drops further, we'll alert you.
2. Run the comparison once now. Today's price is probably the best
   you'll see before the bounce.

[CTA: Compare Viva El Jaripeo Prices →]
```

**For tate.sheppard@gmail.com — 14 days out (entered urgency window TODAY):**
```
Subject: Florence + The Machine is 2 weeks out — watch the floor start to form
Preview: The resale floor usually forms in the next 7 days. Check now so you know the baseline.

Hi there,

🎤 Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (14 days away)

You added this one 33 days ago — now it's officially in the window
where resale prices start compressing toward their floor.

The next seven days are when the baseline forms. Watch now, and you'll
spot the real drop when it happens (instead of thinking every $10
move is the signal).

Two recommendations:
1. Set a target price so we alert you on drops below a line you pick.
2. Compare SeatGeek + StubHub + Ticketmaster side-by-side today
   to establish your mental baseline.

[CTA: Set Target Price →]
```

### Entering 14-Day Window THIS WEEK (Apr 17–23)
- **Florence + The Machine** @ State Farm Arena, Atlanta (May 1) — tate.sheppard@gmail.com — 14 days → **ENTERED TODAY**
- **Bilmuri - Kinda Hard Tour** @ The Sylvee, Madison (May 2) — goldy.pec.2012@gmail.com — 15 days → enters window tomorrow (Apr 18)
- Both users have `last_email_sent = 0`. Neither has a target price. Both will pass through terminal urgency with the drip pipeline still dead.

### Mid-Window Watchlist (15–30 days out)
- **Bilmuri - Kinda Hard Tour** @ The Sylvee (May 2) — goldy.pec.2012 — 15 days
- **Bruno Mars - The Romantic Tour** @ Soldier Field, Chicago (May 16–17) — konman87@gmail.com — 29–30 days

### World Cup Watchlist Activity
- **pete.uzelac77+ticketscan@gmail.com** — 4 World Cup matches + 2 Darts Masters
  - Earliest: Match 9 Ivory Coast vs Ecuador (Jun 14, 58 days out)
  - WC @ Lincoln Financial Field, Philadelphia; Darts @ MSG (Jun 25–26)
  - Still no target prices on any of the six items
  - Most engaged WC user on the platform — zero outreach after 7 days on list

### Past Events Still on Watchlist (cleanup backlog)
- After tonight/tomorrow, the two TWICE items become past events.
- Existing past-event count was 24 of 72 (33%). After the TWICE rollover by end of Saturday: 26 of 72 (~36%).
- No archive function exists. Recommend building `archived_watchlist` view or a `status` column on `watchlist`.

---

## Subject Line A/B Tests

### Zero-Hour Urgency — TWICE TONIGHT
- **A:** `TWICE Austin is TONIGHT — last-minute resale is usually the play`
- **B:** `Last call for TWICE: final 4 hours is where the floor lives`
- **Hypothesis:** A leads with event + time, B leads with scarcity. A scans better on mobile lockscreens. B creates stronger curiosity (what floor?) and fewer tokens. I'd send A to users who prefer direct subject lines and B to users who engage with cryptic hooks — but with n=1 we'll run whichever looks cleaner; recommend A for its clarity on a terminal-urgency email.

### 14-Day Entry — Florence + The Machine
- **A:** `Florence + The Machine is 2 weeks out — watch the floor start to form`
- **B:** `The next 7 days is when Florence resale prices compress. Here's what to watch.`
- **Hypothesis:** A uses a round countdown (2 weeks) to anchor timeline. B leads with the actionable insight. B is stronger on-platform (more specific, more data-forward) but A is less likely to be filtered. For a user who has been on-platform 33 days and received no email ever, I'd go with A — she needs a reason to open, not a reason to opt out.

### 8-Day Mid-Window — Viva El Jaripeo
- **A:** `Viva El Jaripeo is 8 days out — you're standing on the price floor`
- **B:** `Today is probably the cheapest day for Viva El Jaripeo tickets`
- **Hypothesis:** A = countdown + metaphor, B = falsifiable claim. B is better for a user who opens things but doesn't click (the claim is self-testable and creates friction against ignoring). Recommend B here.

### CTA Review
- TWICE urgency CTA → `ticketscan.io/compare?event=...` (direct to compare flow) — ✓ correct
- Viva El Jaripeo CTA → `ticketscan.io/compare?event=...` — ✓ correct
- Florence target-price CTA → `ticketscan.io/watchlist` — ✓ correct
- Primary CTA: above the fold in all three templates ✓
- Secondary CTA (if needed): "Set a target price" buttons at bottom of each ✓

---

## Action Items

### P0 — Critical (Day 11 of outage)
1. **SMTP / drip pipeline — DAY 11.** `POST /api/admin/drip-run` has timed out for 11 consecutive days. Zero drip emails delivered, ever. 20 users in backlog, oldest 43 days. **If not fixed by Day 14 (2026-04-20), I stop reporting this as an outage and start treating it as un-shipped.** Start with Gmail app password regeneration, then Gmail security alerts, then Railway egress.
2. **yuehsu@gmail.com — TWICE is TONIGHT.** 73-day engagement gap, zero emails received, event happening in hours. This is the **final day** to reach this user about this event. After tonight (Night 1) + tomorrow (Night 2), both items become past-events and this user is a permanent zero-attribution on clearly-stated intent. This is a concrete, attributable missed conversion.
3. **2510soccerboy@gmail.com — Viva El Jaripeo in 8 days.** Inside optimal buy window. No target price, no email ever. Window closes in 7 days.
4. **tate.sheppard@gmail.com — Florence + The Machine ENTERED urgency window TODAY** at 14 days out. 33 days on-platform, 0 emails ever. Needs at minimum today's entry notice.

### P1 — High
5. **Bilmuri enters 14-day window TOMORROW** (goldy.pec.2012, 7d pending). This week adds 2 users to terminal-urgency bucket: Florence today, Bilmuri tomorrow.
6. **Target price UX (unchanged):** 0/72 watchlist items have a target price. Blocks all price alert functionality. This is a product design failure — the watchlist add flow needs a suggested default (e.g., current min price × 0.85) or a nudge to set a target.
7. After SMTP fix, trigger `POST /api/admin/drip-run`. Backlog plan: 8 users are now 30+ days old and need an accelerated catch-up sequence (send E1+E2 together with a 48hr gap, then E3/E4/E5 at normal 7-day cadence). Oldest 4 users (37d+) should also get a dedicated "sorry we went quiet — here's what you missed" email before the drip resumes.

### P2 — Medium
8. **Newsletter growth:** 75-day stall. 3 subscribers total, 1 organic. Growth channel has flatlined. SEO traffic is not converting to newsletter — likely a signup-form friction issue. Recommend audit of homepage signup placement and copy.
9. **World Cup engagement dormant:** pete.uzelac77 (6 items, 58 days to first match) + laye.aurelien (2 Shakira items, Jul 20/23) + blubberboi (Ed Sheeran Aug 8) — total 9 high-intent items from 3 users who've received zero lifecycle outreach.
10. **Build watchlist digest endpoint:** per-user automated digest does not exist. Would require new cron + SQL query for active-watchlist users + a digest email template. Blocked on SMTP fix regardless.
11. **Archive past events:** after this weekend, 26 of 72 watchlist items (~36%) will be past-events. No archive function. Recommend adding a `status` column (`active`/`past`/`user_archived`) or a `dropped_at` timestamp, with a daily cron to mark past-dated items.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 75-day stall
- **Drip pipeline:** BROKEN — Day 11 of outage, 0 sends ever, 20 users in backlog (unchanged count from yesterday; dylanbaldy becomes E1-eligible tomorrow and will extend backlog to 21 if still unfixed)
- **Price alerts:** 0 ever triggered — 0/72 watchlist items have target prices
- **User growth:** 0 today, 52 total, 2 this week (slowdown from 4/week last week)
- **Watchlist:** 72 items (unchanged), 4 events within 14 days (incl. Florence newly entered today)
- **Terminal urgency (TODAY):** yuehsu TWICE Night 1 is tonight. Final day for any outreach ever on this user for this event.
- **This week:** Florence entered window today (tate.sheppard, 33d pending). Bilmuri enters tomorrow (goldy.pec.2012, 7d pending). Both users at 0 emails.
- **World Cup:** pete.uzelac77 at 7 days on-platform tracking 6 items, 58 days to first match, zero outreach.
- **Cleanup:** Past-event watchlist items will be 26/72 (~36%) by end of Saturday.
- **Email channel status:** Dormant for 11 consecutive days. Zero emails of any kind have ever reached a user. If Day 14 passes with no fix, the channel should be classified as not-shipped, not broken.
