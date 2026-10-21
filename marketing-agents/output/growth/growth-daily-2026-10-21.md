## Growth Daily — 2026-10-21

Data pulled from the production admin API on 2026-10-21. Percentages use 267 registered users. “Visited” and inactivity segments are unavailable because the admin API exposes signup and watchlist creation data, but no last-login or last-seen timestamp.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 1 | 0.4% | unavailable; no prior snapshot/API trend |
| Activated (has watchlist) | 153 | 57.3% | unavailable; no prior snapshot |
| Active (visited in 7 days) | unavailable | — | no visit data exposed |
| At-risk (no visit 7–14d) | unavailable | — | no visit data exposed |
| Churned (no visit 14d+) | unavailable | — | no visit data exposed |

Context: 256 total watchlist items; 114 users have no watchlist item. The API reports 0 active target-price alerts and 0 triggered alerts, but price tracking is currently down and the alert endpoint returned HTTP 500.

### Activation Gap

- [1] user signed up in the last 7 days with 0 watchlist items.
- The user is the 2026-10-20 signup; no reason can be determined from the available data.
- Recommended hypothesis to test: the first-run path should make “save an event” the primary next step and explain the still-working value—event discovery, onsale/presale timing, venue guides, and outbound purchase links.

### Churn Signals

- Unsubscribes in the last 24 hours: 0 observed. All 7 newsletter records returned by the API are active; no recent unsubscribe timestamp was present.
- Users entering “at-risk” today: unavailable; no last-seen data.
- Alert-fatigue candidates: unavailable. The alerts endpoint returned HTTP 500, and the product-status file says price tracking has been down since 2026-07-24. Do not infer alert engagement from the zero counts.

### Actions Triggered

- Win-back emails queued: 0. No queue/send endpoint exists, and inactivity cannot be verified.
- Re-engagement nudges sent: 0.
- Churn intervention drafts: prepared in `output/growth/churn-interventions-2026-10-21.md`; they avoid unavailable price and alert claims.
- Activation-gap handoff: `output/growth/activation-gap-2026-10-21.md`.
- Email-agent handoff: `output/growth/email-agent-winback-2026-10-21.md`.
- Psychology recommendation: `output/growth/psychology-optimization-2026-10-21.md`.

### Operational Notes

- `/api/admin/alerts` is still returning HTTP 500, matching `docs/HANDOFF.md`.
- The requested retention metrics need product instrumentation: `last_seen_at`, email delivery/open/click events, unsubscribe events, and a reviewed intervention queue with suppression rules.
