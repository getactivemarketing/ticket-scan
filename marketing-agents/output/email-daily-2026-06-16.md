## Email Daily — 2026-06-16

All figures pulled live from admin API (admin key authenticates). No estimates.

### Drip Campaign
- Emails sent (24h): **0**
- Total emails ever sent: **0** (`/drip-stats` → `stats: []`)
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: n/a (nothing attempted)
- Pending/overdue users: **20**, every one at `last_email_sent: 0`:
  - 7–12 days since signup (E1 Day 3 + E2 Day 7 both overdue): ids 100–110 (~11 users)
  - 3–6 days (E1 Day 3 overdue): ids 111–115 (~5 users)
  - None has yet crossed Day 14 (max in queue = 12 days)
- **The drip still has never fired once.** #1 unaddressed issue ([[drip-campaign-never-sends]]).

### Price Alerts
- Alerts triggered (24h): **0** (`activeAlerts: 0`, `triggeredAlerts: 0`)
- Watchlist items: **147**, every item sampled has `target_price: null` → no alert can arm ([[watchlist-no-targets-alerts-cant-arm]])
- `/api/admin/alerts` returns **HTTP 500** ("Failed to get alerts") — endpoint still broken ([[price-history-empty-alerts-broken]])
- Events with drops: none measurable (price history inert)

### Subscriber Growth
- New subscribers (24h): **0**
- Unsubscribes: 0
- Net: **0**
- Total active: **3** — 2 are test accounts (`test@example.com`, `samir.sgpatel@gmail.com`). Only **1 genuine subscriber** (roos_leeuwen, homepage, since 2026-02-01).
- Newsletter capture remains effectively dead despite signup forms shipping ([[newsletter-conversion-rootcause]]).
- Note: user *registrations* are healthy (119 total, +9 this week, 0 today via `/stats`) — the gap is newsletter opt-in, not traffic.

### Watchlist Digest Prep
- Cannot produce a *price-movement* digest: targets are null and price history is empty — no up/down/vs-target data exists to populate.
- An *urgency* digest is viable — most watchlist items are user-entered events with dates (e.g. JOJI: SOLARIS 7/1 Orlando, Malcolm Todd 10/6 Chicago). A "your tracked event is X days away — lock in a price" send is the only data-backed digest available today. (These are user-entered names, not asserted FIFA fixtures — see [[worldcup-schedule-stale-predraw]].)

### Subject Line / A/B
- No send going out today, so no live A/B. Variants on file for when drip is unblocked:
  - E1 A: "3 tips to save on your first ticket purchase" / B: "You're overpaying for tickets. Here's how to stop."
  - Urgency A: "Your tracked event is 5 days out" / B: "Prices climb as the date nears — here's your window"

---

### Top recommendation (needs a human go/no-go)
The admin key authenticates, so `POST /api/admin/drip-run` is technically callable. **I did not trigger it.** The 20 pending users are real Gmail/iCloud/Yahoo/Live addresses — firing the drip blind sends real email to real inboxes after months of silence (some would receive a "Day 3" email 9–12 days late). This is a launch decision, not an automated daily action. Recommend: (1) verify SMTP creds are live, (2) send one test to `samir.sgpatel@gmail.com` first, (3) run drip for the ≤6-day cohort (ids 111–115) only, then widen.

### Escalations
- **Drip:** 0 sent ever / 20 overdue → blocked on human go-decision + SMTP verification.
- **Alerts:** `/admin/alerts` 500s; 0 armed because no targets get set → product fix (prompt for `target_price` on watchlist add) outranks more email work.
- **Newsletter:** 0 real growth → capture is the bottleneck, not email content. Handing to Analytics (Agent 7) per spec.
