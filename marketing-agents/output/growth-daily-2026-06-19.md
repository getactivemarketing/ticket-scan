# Growth Daily — 2026-06-19

_Source: live `/api/admin/stats`, `/api/admin/drip-stats`, `/api/admin/watchlist` pulled 2026-06-19. Figures marked **n/a** are not measurable with current instrumentation (no `last_login` column, no GA4 — do not fabricate)._

### User Health
| Segment                     | Count | Notes |
|-----------------------------|-------|-------|
| Total users                 | 122   | live |
| New (last 7 days)           | 8     | `usersThisWeek` (1 today) |
| Activated (has watchlist)   | ≥28   | distinct emails across 50 returned watchlist rows; 150 items total, so true count is higher |
| Active (visited in 7d)      | n/a   | no `last_login` / session tracking exists |
| At-risk (no visit 7–14d)    | n/a   | not measurable |
| Churned (no visit 14d+)     | n/a   | not measurable |

### Activation Gap
- 150 watchlist items across the base — activation rate is **healthy** (≥23% of users have ≥1 item; likely higher).
- **The real gap is post-activation, not activation.** 0 of 150 watchlist items have a `target_price` set. The core retention mechanism (price-drop alerts) therefore cannot arm for anyone.
  - `activeAlerts: 0`, `triggeredAlerts: 0` — no alert has ever fired platform-wide.
  - Root cause (verified previously, still true): no target-price input control exists in the EventCard "add to watchlist" UI. Users can't set a target even though the API and copy support it.

### Churn Signals
- Unsubscribes today: **0** (`activeSubscribers` 3 = `totalSubscribers` 3).
- Alert-fatigue candidates: **0** — impossible by construction (0 alerts have ever been sent).
- Drip campaign: **20 users pending, `last_email_sent: 0` for all of them.** The drip has delivered 0 emails ever. Oldest pending signups are 8–11+ days past due for Email 1.

### Actions Triggered
- Win-back emails queued: **0.** Cannot honestly target — no inactivity data exists to identify churned users, and blind-triggering `drip-run` risks blasting real inboxes (20 live Gmail/Yahoo addresses). Not triggered.
- Re-engagement nudges sent: **0** (same blocker).

### Honest bottom line
Acquisition and activation are working (122 users, steady signups, 150 watchlisted events). **Every downstream retention loop is inert** because two ship-blocked items have stalled for weeks:
1. No target-price input → alerts never arm → 0 alerts ever sent.
2. Drip campaign sends nothing → 20 new users get zero onboarding emails.

These are shipping/ops tasks, not analysis tasks. No new growth tactic moves the needle until one of them ships.

---

### Psychology-Driven Optimization (1 today)

**Principle:** Commitment / consistency (Cialdini) + endowment.

**Where:** EventCard "Add to Watchlist" flow — the exact spot where the missing `target_price` input belongs. This pairs the #1 CRO blocker with a psychological nudge so the fix earns more than it costs.

**Change:** When a user adds an event, immediately show a one-line inline prompt with a pre-filled anchor:

> ✅ Tracking **{event}** — you're **1 step from your first price alert.**
> Alert me if it drops below **$[ current_price × 0.85 ]**  →  [Set alert]

- Pre-fills the field at ~15% below current price (anchoring → a sensible default they only tweak, not invent).
- "1 step from your first alert" = commitment/consistency progress framing.
- "your first price alert" + "Tracking {event}" = endowment/ownership language.

**Expected impact:** Converts the silent 0% target-set rate into a measurable funnel. Even a modest 30–40% set-rate on new adds would, for the first time, arm the price-alert loop — the single mechanism that creates a reason to return. This is the highest-leverage micro-change available because it simultaneously ships the missing control and primes its use.

### Handoffs
- **→ CRO (Agent 6):** Activation is fine; the onboarding fix to prioritize is the post-add target-price step above, not top-of-funnel.
- **→ Email (Agent 5):** Drip is the live retention gap — 20 users, 0 emails sent. Win-back content is moot until the drip cron actually delivers Email 1. Verify the sender before any bulk action.
