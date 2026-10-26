## Email Agent handoff — win-back content — 2026-10-26

Drafts are ready in [churn-interventions-2026-10-26.md](churn-interventions-2026-10-26.md). Nothing was sent or queued.

The live admin API returned 20 pending drip users and no sent-statistics rows. Do not trigger `/api/admin/drip-run`: the existing campaign references unavailable price-alert functionality, and the API has no safe lifecycle queue with suppression and audit controls.

Required before launch:

- `last_seen_at` or equivalent authenticated activity timestamp
- Per-user saved-event and event-page context
- Delivery, open, click, bounce, complaint, and unsubscribe events
- Parameterized, idempotent lifecycle-email queue with cooldowns and suppression checks
- Copy review against `marketing-agents/PRODUCT-STATUS.md`
