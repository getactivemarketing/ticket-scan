# Email Daily — 2026-07-31

**Run window:** 2026-07-30 12:00 UTC–2026-07-31 12:00 UTC  
**Status:** Monitoring only; no email send was triggered.

## Drip Campaign

- Emails sent (24h): **0 recorded**
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0**
- Failures: **Not measurable** — the stats endpoint returns no send rows and the backend has no failure/bounce table or delivery telemetry exposed here.
- Pending users: **At least 20** returned by the endpoint (the endpoint caps this list at 20); all returned users have `last_email_sent: 0`.
- Opens/clicks: **Not available** — Nodemailer sends are not connected to an open/click tracking provider.

## Price Alerts

- Alerts triggered (24h): **0 recorded in aggregate** (`/api/admin/stats` reports `triggeredAlerts: 0`).
- Events with drops: **None recorded**.
- Delivery failures: **Not measurable**.
- Health check issue: `/api/admin/alerts?limit=1000` returned **HTTP 500: Failed to get alerts**. The route queries `triggered_at`, while the current alert-writing code/schema uses `sent_at`; backend investigation is required before alert reporting can be trusted.

## Subscriber Growth

- New subscribers today: **0** (sources: none)
- New subscribers in the last 24 hours: **0**
- Unsubscribes today: **0 recorded**
- Net: **0**
- Total active: **4**
- Total records: **4**

## Watchlist Digest Readiness

- Watchlist items: **198** across **114** users.
- Items with target prices: **0**. This explains the lack of price-alert candidates: users are tracking events, but nobody currently has a target threshold saved.
- Upcoming within 14 days: **11 rows / 8 unique users**. The send-ready draft is in [watchlist-digest-2026-07-31.md](./watchlist-digest-2026-07-31.md).
- Current price, price movement, and recommendation changes: **Unavailable from admin endpoints**. Digest copy uses event urgency and asks recipients to set a target price.

## Subject Line / CTA A/B Test

Use for the 8-user urgency segment; volume is directional, not statistically significant.

- **A — urgency:** `Your [Event] is [X] days away — set your price target`
- **B — consumer advocate:** `[X] days until [Event]. Tell us your number before prices get weird.`
- Preview: `You're tracking [Event]. Set a target and TicketScan will watch the price for you.`
- Primary CTA: `Set my price target` → `https://www.ticketscan.io/watchlist`
- Test split: 50/50 where possible; measure open rate, CTA click, and target-price completion once tracking exists.

## Escalation

1. Fix `/api/admin/alerts` so it uses the actual alert timestamp column (`sent_at`, or migrate consistently), then add a 24-hour filter and delivery-failure count.
2. Add durable email delivery logging for message ID, status, failure reason, and bounce/complaint events.
3. Add open/click tracking if campaign optimization is required.
4. Consider a price-target onboarding nudge: **0 of 198** tracked items currently have a target.

## Analytics Handoff (Agent 7)

As of 2026-07-31: **195 users**, **13 signups in the last 7 days**, **4 signups today**, **198 watchlist items**, **4 active subscribers**, **0 recorded triggered alerts**, and **0 watchlist targets**. Subscriber net growth today is **0**. Alert endpoint failure is an instrumentation blocker.
