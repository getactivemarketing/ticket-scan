# Email Daily — 2026-06-09

_All figures pulled live from the production admin API (`/api/admin/*`) at run time. Anything not verifiable is marked as such — no estimated open/click/CTR numbers (we have no analytics layer; inventing them is the documented Agent-5 failure mode)._

## API Health
- `admin/stats`, `admin/drip-stats`, `admin/newsletter`: all **200 OK**, sub-0.4s. API is UP.
- `admin/alerts` returns **HTTP 500** (`"Failed to get alerts"`) — endpoint is erroring server-side, not a network issue. Logged as a standing bug (see Escalations).

## Drip Campaign
- **Emails sent (24h): 0.** `drip-stats.stats` is an empty array — the campaign has still delivered **0 emails, ever.**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: n/a (nothing attempted to send)
- **Overdue backlog: ~15 users** past their Email-1 trigger (day ≥3) with `last_email_sent: 0`. Oldest is `samvirsujan@gmail.com` — **12 days** signed up, never emailed. Endpoint returns 20 pending total (incl. day 0–2 users not yet due).
- **Root cause unchanged:** the drip cron is not firing/sending. Delivery-pipeline bug, not a content gap.

## Price Alerts
- **Alerts triggered (24h): 0.** `triggeredAlerts: 0`, `activeAlerts: 0`.
- Events with drops: none reportable — no price-history movement data exists to alert on.
- Delivery failures: n/a (no alerts armed to send). Separately, the `/api/admin/alerts` read endpoint itself 500s.
- **Root cause unchanged:** `activeAlerts: 0` because **no watchlist item has a `target_price`**. With no targets, the 4-hour alert loop has nothing to compare against. The pipeline is severed at the source, not at email.

## Subscriber Growth
- New subscribers: **0**
- Unsubscribes: 0
- Net: **0**
- **Total active: 3** (`roos_leeuwen@eaglesmail.net`/homepage, `samir.sgpatel@gmail.com`/test, `test@example.com`/api-test). Newest real signup still dates to **2026-02-01** — newsletter list has not grown in 4+ months.
- Note: 109 registered *users* (14 this week, 0 today) but only 3 *newsletter* subscribers — the two tables are decoupled. New-user → newsletter opt-in still isn't wired (`/register` opt-in TODO).

## Watchlist Digest Prep
- Active watchlist items: **134** across the user base; 0 new users today.
- **Digest is blocked, not skipped.** The price-status rows require per-event min/avg/current prices and movement deltas — and the price feed returns null prices / empty history. Sending a "your prices moved" digest today would mean fabricating the dollar figures. **Hold until price data is real.**
- Digest template (ready to populate once price data exists):
  ```
  Subject: Your Ticket Watchlist Update — [X] events tracked
  Preview: Prices moved on [Event]. Here's what to do.

  Hi [Name],
  🟢 [Event] — DOWN $X (now $Y) — [BUY NOW]
  🔴 [Event] — UP $X (now $Y) — [HOLD / lower your alert]
  ⚪ [Event] — No change ($Y) — [X days until event]
  [CTA: View your watchlist → ticketscan.io/watchlist]
  ```

## Subject Line / CTA Notes
- No email is going out today (drip pipeline down, digest blocked on data), so **no live A/B test to run.**
- Staged variant for whenever Drip Email-1 actually sends:
  - A (control): "3 Tips to Save on Your First Ticket Purchase"
  - B (curiosity/loss): "You're probably overpaying for tickets — here's the fix"
  - Primary CTA both: "Set a price alert →" deep-linking to a tracked-event page (drives the missing `target_price` step, which directly unblocks the alert pipeline above).

## Escalations
1. **DELIVERY (P0):** Drip cron has sent 0 emails since launch; ~15 users overdue, oldest 12 days. Needs an engineering look at the drip sender, not more content. **Did NOT blind-trigger `/api/admin/drip-run`** — recipients are real inboxes (Gmail/iCloud/AOL/sbcglobal) and a backfill blast to 15+ people at once risks spam complaints; recommend a controlled single-user test send first.
2. **ALERTS (P0):** No `target_price` ever set → `activeAlerts: 0`. Highest-leverage fix is a UI/onboarding step prompting users to set a target when they add to watchlist. Until then, all "price alert / savings" messaging is unsendable. (Also: `/api/admin/alerts` returns 500 — worth a quick server-log check.)
3. **NEWSLETTER (P1):** 0 growth in 4+ months, 3 total subs. New-user → opt-in still not wired.

## To Analytics Agent (Agent 7)
- New subscribers today: 0 | Unsubs: 0 | Net: 0 | Total active: 3
- New registered users today: 0 | this week: 14 | total: 109
- Drip emails sent (24h): 0 | Alerts triggered (24h): 0
