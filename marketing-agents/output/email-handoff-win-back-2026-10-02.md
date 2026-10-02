# Email Agent Handoff — 2026-10-02

## Status

Do not send a win-back sequence yet. Live checks show zero recorded drip sends, no last-seen field, and no open/click/bounce telemetry. A dormant signup cannot currently be distinguished from an active user who simply has not generated an admin-visible event.

## Sequence to implement after the data gate is cleared

1. Day 7 inactive: “Find your next event” — link to a personalized event search or venue guide.
2. Day 14 inactive: “Your saved events are still here” — link to the watchlist and explain how to update or remove items.
3. Day 21 inactive: “Plan the day, not just the ticket” — link to relevant venue sections, capacity, access, and onsale information.
4. Day 30 inactive: “Want fewer emails?” — preference center, unsubscribe, and a final low-frequency option.

All messages must use verified event and venue facts. Do not mention price tracking, price history, price drops, target prices, or buy/wait recommendations.

## Send gates

- `last_seen_at` or equivalent event activity exists.
- Consent and unsubscribe suppression are checked before queueing.
- Provider response is logged separately for queued, sent, bounced, clicked, and failed.
- Per-user campaign idempotency and a 30-day cooldown are enforced.
- Links contain signed user-safe tracking parameters.

