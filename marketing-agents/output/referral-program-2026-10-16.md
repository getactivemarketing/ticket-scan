# TicketScan Referral Program — Beta Spec

**Recommendation:** launch an invite-only beta for users with two or more saved events. Reward qualified activation with recognition and early access to future discovery/venue features; do not promise price features, cash, or gift cards.

## User flow

1. User saves an event.
2. Confirmation offers: “Know someone planning this too? Share this event.”
3. Referral link stores `ref` for 30 days.
4. New visitor signs up and saves one event within 14 days.
5. Referrer receives a Scout badge and qualified-referral count.

## Build

- `referrals(id, referrer_id, referee_id, code, status, landing_at, signup_at, qualified_at, created_at)`
- `POST /api/referral/create`
- `GET /api/referral/stats`
- Parameterized inserts, unique code, self-referral and duplicate-account checks.
- Events: `referral_landing`, `referral_signup`, `referral_qualified`, `referral_share`.

## Initial targets

Hypotheses only: 8% eligible-user share rate, 20% landing-to-signup, 35% referred signup-to-first-save, viral coefficient ≥0.10 in the first 100 eligible users.

## Copy

**Card:** Share the event you’re planning  
**Body:** Send a friend the event page so they can see the date, venue, onsale details, and ticket links too.  
**Button:** Share event
