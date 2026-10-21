## Email Agent Handoff — Win-back Content — 2026-10-21

No emails were sent or queued. The API has no win-back queue, and inactivity cannot be established because last-login/last-seen data is not exposed.

Approved content direction: use the drafts in `churn-interventions-2026-10-21.md`. Personalize only with verified event name, venue, event details, and onsale/presale timing.

Do not reuse the old win-back language about price changes, savings, price trends, alerts, or “we kept watching.” Price tracking is down as of 2026-07-24.

Required safeguards before activation:

- Add `last_seen_at` or an equivalent verified activity signal.
- Suppress unsubscribed users and anyone contacted inside the cooldown window.
- Add delivery, open, click, and unsubscribe event tracking.
- Add a reviewed queue endpoint; do not trigger sends from a static daily report.
