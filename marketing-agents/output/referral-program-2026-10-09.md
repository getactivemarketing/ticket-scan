# Referral Program — MVP Spec — 2026-10-09

## Decision

Build a gated first-touch referral MVP after event instrumentation is in place. Use `ticketscan.io/?ref=[CODE]`; credit the referrer when a new visitor creates an account, with an optional second “activated” state after the user saves an event. Do not require a target price or alert action.

## Reward

- Referrer: TicketScan Scout badge and referral count.
- New user: a verified World Cup 2026 or venue-guide starter pack after signup.
- Three credited referrals: expanded guide pack or early access to new venue content.

Avoid cash, gift cards, premium alerts, price history, or price reports until those capabilities are live and supportable. Defer a leaderboard until abuse controls exist.

## Implementation

```sql
referrals (
  id,
  referrer_id,
  referee_id,
  code,
  status,
  source,
  created_at,
  activated_at
)
```

- Persist first-touch `ref` and UTM values through registration.
- Enforce unique credited referee and reject self-referrals.
- Add `POST /api/referral/code` and `GET /api/referral/stats` behind JWT auth.
- Track `referral_link_viewed`, `referral_shared`, `referral_signup`, and `referral_activated`.
- Use parameterized queries and an idempotent credit transaction.

## Initial 30-day targets

- 5% of eligible users share a link.
- 10% of referred visits create an account.
- 25% of referred accounts save an event or complete onboarding.
- Viral coefficient above 0.20 initially.
