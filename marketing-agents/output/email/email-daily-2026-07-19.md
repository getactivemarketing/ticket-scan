## Email Daily — 2026-07-19

### Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 (cron not firing — 0 emails ever sent, platform-wide)
- Pending queue (visible 20 of 171 total users): all show `last_email_sent: 0`

**Overdue breakdown (from live /drip-stats, visible 20 newest users):**
- Overdue for E1 (≥day 3, 0 emails sent): 15 users in visible slice alone
  — IDs 152–166 (3–8 days since signup, none have received anything)
- Overdue for E2 (≥day 7): 7 users — IDs 152–158 (7–8 days, still 0 emails)
- Not yet due (days 0–2): IDs 167–171 (4 users)
- All 151 older users (IDs 1–151) not paginated here are further overdue

**Two invalid email addresses detected in pending queue:**
- ID 155: `cristian@gmail` — missing TLD, will hard-bounce
- ID 160: `danielldk930@gmail.con` — typo (.con), will hard-bounce

**ESCALATION (unchanged from prior reports):** Drip cron has never delivered a single
email across all 171 registered users. Root cause is backend SMTP/cron not firing —
not an email-content problem. Do NOT auto-trigger `/api/admin/drip-run`: without
confirming the endpoint sends only the next-due email per user (not bulk-catch-up),
firing blind risks a multi-email blast. Requires human verification first.

---

### Price Alerts
- Alerts triggered (24h): 0
- Events with drops: n/a
- Delivery failures: 0 (nothing to deliver)
- Root cause: `activeAlerts: 0` confirmed via live /admin/stats. All 184 watchlist items
  have `target_price = null` — no alert can arm. The UI has no target-price input on
  EventCard (shipping task, not email task). Price history table returns 0 rows so
  price-change triggers are unavailable regardless.

---

### Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes: 0
- Net: 0
- Total active: 3 (unchanged since February)
  - roos_leeuwen@eaglesmail.net — source: homepage, since 2026-02-01 (only real subscriber)
  - samir.sgpatel@gmail.com — source: test
  - test@example.com — source: api-test
- Newsletter list has been flat at 3 for 5+ months. The /register opt-in CTA remains
  the outstanding fix (blog/footer forms shipped earlier per project memory).

---

### Watchlist Digest Prep

**Situation:** 184 watchlist items total, 0 active alerts, 0 price targets. Digest
cannot be price-triggered. Urgency-based template only.

**World Cup Final — July 19, 2026 (TODAY):**
Today is the last day of the 2026 FIFA World Cup. For users tracking WC matches, this
is the peak urgency moment. Post-tournament, attention pivots to fall sports and
concerts. Subject line opportunity:

```
Subject: World Cup's done — what are you watching next?
Preview: Your TicketScan watchlist is ready for the next big thing.

Hi [Name],

The 2026 World Cup just wrapped. If you grabbed tickets through TicketScan — nice work.

Now the real ticket season begins: NFL kickoff (Sep 4), NBA/NHL tips off (Oct), plus
concerts that have been selling out all summer.

Here's what's on your TicketScan watchlist right now:

⚪ [Event] — [Date] — Tracking
⚪ [Event] — [Date] — Tracking

Prices move fast in the 6-8 weeks before games. This is when it pays to have an alert set.

→ Set a price target on ticketscan.io/dashboard

The TicketScan Team
```

**Blocker (unchanged):** Personalization requires either user JWTs or a
`/api/admin/watchlist-summary` endpoint that groups items by user. Current output is
a generic template only.

---

### Subject Line A/B Variants

Targeting E1 drip (Day 3 — "3 Tips to Save on Your First Ticket Purchase").
15+ users in the visible slice alone are overdue; the full queue is likely 160+.

**Version A (original):**
> 3 Tips to Save on Your First Ticket Purchase

**Version B (curiosity hook):**
> The #1 mistake first-time ticket buyers make

**Version C (post-WC timing hook — timely for today's cohort):**
> The World Cup just ended. Ticket prices are about to move.

**CTA audit for E1:**
- Primary CTA: "Start tracking prices" → ticketscan.io/dashboard
- Keep single CTA above the fold; no competing secondary links
- Mobile-first: button min 44px tap target

**Recommendation:** Version B historically outperforms instructional subjects for cold
welcome emails (curiosity > instruction). Version C is uniquely relevant for users who
signed up during the WC campaign window — worth deploying to that cohort if segments exist.

---

### Platform Metrics (for Agent 7 — Analytics)
- Total registered users: 171 (+36 since 6/30; +13 this week; +2 today)
- Newsletter subscribers: 3 (unchanged)
- Watchlist items: 184 (was 162 on 6/30, +22)
- Active alerts: 0
- Triggered alerts (ever): 0
- Drip emails ever sent: 0

**Notable data quality issues in user table:**
- `cristian@gmail` (ID 155) — invalid email, no TLD
- `danielldk930@gmail.con` (ID 160) — typo domain (.con)
- Recommend soft-delete or flag before any drip send to avoid bounce rate damage
