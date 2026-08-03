## Growth Daily — 2026-08-03

**Snapshot time:** 2026-08-03 (UTC reporting date)  
**Sources:** `/api/admin/stats`, `/api/admin/users?limit=1000`, `/api/admin/watchlist?limit=1000`, `/api/admin/newsletter`, `/api/admin/alerts`, `/api/admin/drip-stats`

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 9 | 4.6% | N/A — no prior dated snapshot available |
| Activated (has watchlist) | 115 | 58.7% | N/A |
| Active (visited in 7 days) | N/A | N/A | Not instrumented |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

Platform totals: 196 registered users, 199 watchlist rows, 4 active newsletter subscribers, and 1 favorite row.

### Activation Gap

- **4** users signed up in the last 7 days with 0 watchlist items (**44.4%** of the cohort).
- **5 of 9** new users activated by adding at least one watchlist item.
- Candidate records: `alexalcole@gmail.com`, `dbrenterprises1@gmail.com`, `dlosie@me.com`, and `joshuamichaelchambers@gmail.com`.
- Top reason: **not determinable** from current telemetry. The API records signup and watchlist adds, but not searches, compare clicks, onboarding views, or exit reasons.

### Churn Signals

- Unsubscribes today: **0 observed**. The subscriber endpoint returned 4 active subscribers and no recent inactive records.
- Users entering “at-risk” today: **N/A**. There is no last-login or last-visit field.
- Alert-fatigue candidates: **N/A**. Alert delivery/click data is not exposed; `/api/admin/alerts` returned **HTTP 500**.
- Active target-price alerts: **0**; triggered alerts reported by `/api/admin/stats`: **0**.

### Actions Triggered

- Win-back emails queued: **0** — no safe inactivity cohort can be assigned.
- Re-engagement nudges sent: **0** — sending is not authorized by an exposed endpoint, and recipient eligibility cannot be verified.
- Prepared tiered templates and suppression rules in [`churn-interventions-2026-08-03.md`](churn-interventions-2026-08-03.md).
- Psychology recommendation in [`psychology-optimization-2026-08-03.md`](psychology-optimization-2026-08-03.md).

### Handoffs

**CRO Agent (Agent 6):** Four of nine recent signups reached registration but not watchlist activation. Add a post-signup progress state — “You’re 1 step from your first alert” — with one clear `Find an event` CTA, preserve the user’s last search, and instrument `activation_step_viewed`, `event_search_after_signup`, `watchlist_added_after_signup`, and `first_alert_configured`.

**Email Agent (Agent 5):** Use the three tiered drafts in the intervention file only after last-visit, unsubscribe, bounce, delivery, and click fields exist. Current drip stats show an empty sent table and a capped list of 20 pending users; do not infer delivery from that list.

### Data Quality / Priority Fixes

1. Repair `/api/admin/alerts` (currently HTTP 500) and expose alert delivery, open, click, and unsubscribe events.
2. Add `last_login_at` or a privacy-safe `last_seen_at` to the admin user view.
3. Add campaign suppression checks for unsubscribed users, hard bounces, recent purchases, and recent sends.
4. Add a paginated drip-health endpoint; `/api/admin/drip-stats` currently returns only 20 pending users and no sent rows.

### Product Signal

The most-watched normalized event names in the returned watchlist data were Harry Styles (19 rows), Backstreet Boys (10), Ariana Grande (8), and Noah Kahan (7). These are watchlist-row counts, not unique users or active demand; do not use them as social-proof copy without deduplicating event IDs and users.
