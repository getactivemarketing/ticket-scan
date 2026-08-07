# Referral Program Spec — 2026-08-07

TicketScan has no referral implementation in the current schema or backend. Build a gated MVP after target-price activation is measurable.

## Mechanic

`ticketscan.io/?ref=[CODE]` → signup → verified account → watchlist item with target price → referral activated.

Reward both users with 30 days of future Power User status and a badge. Milestones: 3 activated referrals = 90 days; 10 = one year. Share via copy, X, email, and WhatsApp. Defer leaderboards.

## Implementation

```sql
referrals (id, referrer_id, referee_id, code, status, source, created_at, activated_at)
```

Add `POST /api/referral/code` and `GET /api/referral/stats`; persist first-touch referral/UTM data at registration. Enforce one credit per referee, reject self-referrals, and use parameterized queries.

Targets: 8% share rate, 12% referred-visit signup conversion, 35% referred activation, viral coefficient >0.30.
