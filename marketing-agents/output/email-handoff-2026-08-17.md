# Email Agent Handoff — 2026-08-17

Use `churn-interventions-2026-08-17.md` as the three-tier draft source.

Live checks: `/api/admin/drip-stats` returned zero recorded sends; `/api/admin/alerts` returned HTTP 500; last-visit, opens, clicks, bounces, and suppression history are not available for safe segmentation. Do not trigger `/api/admin/drip-run` as a substitute for win-back delivery.

Required before launch: add visit-recency eligibility, consent/suppression enforcement, event-level price movement fields, send idempotency, and delivery/open/click/unsubscribe logging.

