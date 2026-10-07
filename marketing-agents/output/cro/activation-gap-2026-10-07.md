## CRO Handoff — Activation Gap — 2026-10-07

### Evidence

- Production `/api/admin/stats`: 264 total users; 4 users registered this week.
- `/api/admin/users`: 1 of those 4 new users has `watchlist_count > 0`; 3 have zero watchlist rows.
- New-user activation: **25.0%**; activation gap: **75.0%**.
- Overall users with at least one watchlist item: **153 of 264 (58.0%)**.

### Recommendation

Test the empty-watchlist treatment in [psychology-optimization-2026-10-07.md](../growth/psychology-optimization-2026-10-07.md): one concrete CTA, ownership language (“your watchlist”), and a direct link to the saved event after completion.

### Guardrails

- Do not use price-alert, price-history, savings, or buy/wait language in the treatment.
- Do not infer why the 3 users failed to activate; search, compare, bounce, and session data are not available.
- Instrument signup → event search → watchlist add → saved-event return before declaring a winner.
