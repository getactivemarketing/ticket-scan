# Referral Program — Invite-Only Beta

## Recommendation

Launch to users with two or more saved events. Reward meaningful activation with recognition and future discovery/venue-guide access; do not promise cash, gift cards, premium price features, or alerts.

## Mechanics

- Link: `https://www.ticketscan.io/?ref={code}`
- Persist first-touch `ref` and UTM values for 30 days through signup.
- Credit one referral only after a new account verifies email and saves an event within 14 days.
- Reject self-referrals and duplicate accounts; enforce unique credited referee.
- Share actions: copy link, email, and native share. Do not add TikTok.

## Implementation

```sql
referrals (
  id, referrer_id, referee_id, code, status,
  landing_at, signup_at, qualified_at, created_at,
  UNIQUE (code), UNIQUE (referee_id)
)
```

Add `POST /api/referral/create`, `GET /api/referral/stats`, and an internal qualification job. Use parameterized queries. Track `referral_landing`, `referral_signup`, `referral_qualified`, and `referral_shared` without sending raw email addresses to analytics.

## Reward and copy

- Referrer: TicketScan Scout badge and private qualified-referral count.
- New user: a short event-planning or venue-guide starter pack.
- Three qualified referrals: early access to a new venue/discovery feature.

Card: **Share the event you’re planning**

Body: “Send a friend the event page so they can see the date, venue, onsale details, and ticket links too.”

Button: **Share event**

## Beta targets and guardrails

Hypotheses for the first 100 eligible users: 8% share rate, 20% landing-to-signup, 35% referred-signup-to-first-save, viral coefficient at least 0.10. Review abuse rate, duplicate rate, qualification rate, and referred 30-day return only after last-seen telemetry exists.
