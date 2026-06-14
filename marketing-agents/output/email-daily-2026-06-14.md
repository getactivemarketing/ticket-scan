## Email Daily — 2026-06-14

All figures pulled live from admin API (admin key now authenticates — see note). No estimates.

### Drip Campaign
- Emails sent (24h): **0**
- Total emails ever sent: **0** (`/drip-stats` → `stats: []`)
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: n/a (nothing attempted)
- Pending/overdue users: **20**, every one at `last_email_sent: 0`. Several are well past their thresholds:
  - 7–9 days since signup (E1 Day 3 + E2 Day 7 both overdue): ids 99–107 (~9 users)
  - 3–6 days (E1 Day 3 overdue): ids 108–113
- **The drip has never fired once.** This is the #1 unaddressed issue (see [[drip-campaign-never-sends]]).

### Price Alerts
- Alerts triggered (24h): **0** (`activeAlerts: 0`, `triggeredAlerts: 0`)
- Watchlist items: **146**, but every item sampled has `target_price: null` → no alert can arm ([[watchlist-no-targets-alerts-cant-arm]])
- `/api/admin/alerts` returns **HTTP 500** ("Failed to get alerts") — endpoint is broken ([[price-history-empty-alerts-broken]])
- Events with drops: none measurable (price history inert)

### Subscriber Growth
- New subscribers (24h): **0**
- Unsubscribes: 0
- Net: **0**
- Total active: **3** — and 2 of those are test accounts (`test@example.com`, `samir.sgpatel@gmail.com`). Only **1 genuine subscriber** (roos_leeuwen, homepage, since 2026-02-01).
- Newsletter capture is effectively dead despite signup forms shipping ([[newsletter-conversion-rootcause]]).

### Watchlist Digest Prep
- Cannot produce a *price-movement* digest: targets are null and price history is empty, so there is no up/down/vs-target data to populate.
- An *urgency* digest is viable — 100+ items are World Cup matches, many within 14 days (e.g. Ecuador vs Curacao 6/20, Belgium vs Iran 6/21, USA vs Turkey 6/25). These could drive a "your tracked match is X days away — lock in a price" send. (Not asserting these fixtures are real FIFA fixtures; they're user-entered watchlist names. See [[worldcup-schedule-stale-predraw]].)

### Subject Line / A/B
- No send going out today, so no live A/B. Variants drafted for when drip is unblocked:
  - E1 A: "3 tips to save on your first ticket purchase" / B: "You're overpaying for tickets. Here's how to stop."
  - WC urgency A: "Your tracked match is 5 days out" / B: "Prices climb as kickoff nears — here's your window"

---

### Top recommendation (needs a human go/no-go)
The admin key in this agent's config **now authenticates** against `/drip-stats`, `/newsletter`, `/stats`. That means `POST /api/admin/drip-run` is now technically callable. **I did not trigger it.** The 20 pending users are real Gmail/iCloud/Yahoo addresses — firing the drip blind would send real email to real inboxes after months of silence (some would get a "Day 3" email 9 days late). This is a launch decision, not an automated daily action. Recommend: confirm SMTP creds are live, send one test to the test account first, then run drip for the ≤6-day cohort only.

### Escalations
- Drip: 0 sent ever / 20 overdue → blocked on go-decision + SMTP verification.
- Alerts: `/admin/alerts` 500s; 0 armed alerts because no targets get set → product fix (prompt for target_price on watchlist add) outranks more email work.
- Newsletter: 0 real growth → handing to Analytics (Agent 7) per spec; capture is the bottleneck, not email content.
