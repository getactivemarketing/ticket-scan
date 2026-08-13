## Email Agent Handoff — 2026-08-13

Three tiered retention drafts are in `churn-interventions-2026-08-13.md`.

- Tier 1: 7–10 days inactive; price-check nudge.
- Tier 2: 10–14 days inactive; verified price-change reminder.
- Tier 3: 14+ days inactive; win-back summary.

Nothing was queued or sent. The production API lacks last-seen, alert-click, and individualized retention-send support. The existing `/api/admin/alerts` endpoint also fails with HTTP 500, so price movement and alert-fatigue claims must remain unpopulated until fixed.
