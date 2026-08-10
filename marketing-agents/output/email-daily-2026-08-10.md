# Email Daily — 2026-08-10

Checked 2026-08-10 against the live admin API. No email was sent or triggered by this report.

## Drip Campaign

- Emails sent (24h): **0 recorded**
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0** (the stats endpoint returned no rows)
- Failures: **Not instrumented / unavailable**
- Open rate and click rate: **Not instrumented / unavailable**
- Pending signal: the API returned 20 pending users; all showed `last_email_sent: 0`, including users old enough to qualify for the sequence. This is an operational escalation, not a send instruction.

## Price Alerts

- Alerts triggered (24h): **0 recorded**
- Events with drops: **None recorded**
- Delivery failures: **Unavailable**
- The `/api/admin/alerts` endpoint returned `Failed to get alerts` (HTTP 500). Local code selects `pa.triggered_at`, while the table created by `index.js` defines `sent_at`; engineering should reconcile that schema/query mismatch.
- Platform counters also report `activeAlerts: 0` and `triggeredAlerts: 0`.

## Subscriber Growth

- New subscribers today: **0** (source breakdown: none)
- Unsubscribes today: **0 recorded**; all 4 returned subscribers are active and have `unsubscribed_at: null`
- Net: **0**
- Total active: **4**
- Active subscriber sources: `site-footer`: 1, `homepage`: 1, `test`: 1, `api-test`: 1
- Latest subscriber: `site-footer`, 2026-07-21. No subscriber growth has been recorded since then.

## Watchlist Digest — Ready for Send

The admin watchlist contains 206 rows. Five rows across four users have event dates from 2026-08-11 through 2026-08-24. Every returned `target_price` is null and no price-history movement is exposed through the available admin endpoints, so this is a deadline/coverage digest rather than a price-change digest.

### Digest framing

**Subject:** Your Ticket Watchlist Update — 5 upcoming events

**Preview:** Four events are within the next 14 days. Your target prices still need one important number.

Hi there,

You’re tracking 5 events happening in the next 14 days. We don’t have a target price saved for these alerts yet, so TicketScan can’t call a buy or wait signal—and we refuse to make up a number just to sound confident.

Upcoming watchlist items:

- **Motionless In White: The Sweat and Blood Tour** — Aug 11, Oklahoma City — two watchlist entries; target price not set
- **The Return Of The Carnival Of Sins: Mötley Crüe** — Aug 14, West Palm Beach — target price not set
- **Noah Kahan: The Great Divide Tour** — Aug 17, San Diego — target price not set
- **MAMAMOO 2026 US TOUR** — Aug 18, Fort Worth — target price not set

Set a target price so we can tell you when the math says “buy,” instead of sending another vague “prices may change” email. **[CTA: Open your TicketScan watchlist]**

— TicketScan

### Per-user send variants

- `ldholman@ymail.com`: “Motionless In White is tomorrow — set your price ceiling”
- `ldholman@ymail.com`: “Two Motionless In White listings, one missing target price”
- `umcane06@gmail.com`: “Mötley Crüe is Friday — want us watching your number?”
- `rebdav13@gmail.com`: “Noah Kahan is next week — tell us what ‘worth it’ costs”
- `chungvungocminh@gmail.com`: “MAMAMOO is 8 days away — set your ticket ceiling”

## Subject-Line / CTA A/B Test

No send volume is currently available for a statistically meaningful test. Queue these variants for the next instrumented send:

| Version | Subject | CTA |
|---|---|---|
| A — urgency | `Your Ticket Watchlist Update — 5 events coming up` | `Open my watchlist` |
| B — consumer advocate | `Four events are close. Your price ceilings aren’t.` | `Set my target prices` |

Recommended primary CTA: **Set my target prices**. It is specific, above the fold, and maps to the missing data needed for a real buy/wait recommendation.

## Escalations & Analytics Handoff

1. **P0 Engineering:** fix `/api/admin/alerts` so triggered-vs-delivered counts and failures can be audited. Verify the live database column before changing the query.
2. **P0 Email/Backend:** investigate why 20 pending users have `last_email_sent: 0` and why the drip stats table is empty. Do not claim deliverability until a test send and provider event tracking are confirmed.
3. **P1 Product:** add or expose target-price capture from the watchlist flow; 206 watchlist rows currently have no target price in the admin response.
4. **Agent 7 Analytics:** today’s handoff is `0` recorded drip sends, `0` recorded price alerts, `4` active subscribers, `0` subscriber growth today, and `5` near-term watchlist events across `4` users. Open/click/bounce data is unavailable because it is not instrumented.
