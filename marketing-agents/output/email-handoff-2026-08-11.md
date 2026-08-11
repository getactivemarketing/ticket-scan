## Email Agent Handoff — Retention Copy — 2026-08-11

Prepared tiered retention templates are in `churn-interventions-2026-08-11.md`.

### Status

- Eligible at-risk users: **n/a**; last-visit data is not available.
- Win-back emails queued: **0**.
- Re-engagement nudges sent: **0**.
- `/api/admin/alerts`: **HTTP 500**.
- `/api/admin/drip-stats`: 0 sent-stat rows.

### Next safe implementation

Add a retention audience query with `last_seen_at`, active subscription status, bounce suppression, and verified price-history movement. Add a dedicated send/queue endpoint with idempotency and per-user frequency caps. Then use the Tier 1–3 copy file for QA before enabling sends.

