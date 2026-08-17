## Email Daily — 2026-08-17

Data window: 2026-08-16 00:00–23:59 UTC. Checked at the daily run on 2026-08-17. All checks were read-only.

### Drip Campaign

- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: unavailable — the current `drip_emails_sent` table records successful sends only and has no failure/bounce field.
- Open rate / click rate: unavailable — no engagement telemetry is stored or exposed by the admin API.
- Campaign state: no drip rows exist yet. The API reports pending users, including users at Day 3 and Day 7 eligibility, but no email was triggered during this check.

### Price Alerts

- Alerts triggered (24h): 0
- Events with drops: none recorded
- Delivery failures: unavailable — no failed-delivery log is stored. `price_alerts` currently contains 0 total rows and 0 unsent rows.

### Subscriber Growth

- New subscribers: 0 (no new source activity)
- Unsubscribes: 0
- Net: 0
- Total active: 4
- Sources for new subscribers today: none
- Current active subscriber sources: site-footer 1, homepage 1, test 1, api-test 1

### Watchlist Digest Readiness

- Future watchlist items: 62
- Active users with future watchlist items: 36
- Events within the next 14 days: 20
- Watchlist items with target prices: 0
- Price-history coverage: insufficient; only one historical record was found, for an event that is not in the current future watchlist.
- Recommendation changes: none determinable. Do not label any event BUY NOW, HOLD, or price-up/down until a current price snapshot exists.
- Ready-to-send content: [watchlist-digest-2026-08-17.md](watchlist-digest-2026-08-17.md)

### Subject / CTA A/B Test

Use only if the sender can split a meaningful audience; the active newsletter list is only four subscribers, so do not run a statistically framed test today.

- Version A: `Your TicketScan watchlist update: 20 events need a price check`
- Version B: `Tickets are on your radar. We’re watching the clock.`
- Preview text: `You’re tracking 62 future events. Twenty happen within 14 days; here’s what needs attention.`
- Primary CTA: `View my watchlist`
- CTA URL: `https://ticketscan.io/watchlist`
- CTA placement: above the fold and repeated once after the event summary.

### Delivery Issue Escalation

No confirmed delivery failures occurred in the available records. Escalate to engineering before treating email performance as healthy: add send-attempt, provider response, bounce, complaint, open, and click telemetry; expose 24-hour aggregates in `/api/admin/drip-stats`; and add a price-alert delivery report. Also investigate why eligible drip users have no recorded sends before manually triggering the campaign.

### Analytics Handoff

Subscriber growth for 2026-08-17: 0 new, 0 unsubscribed, net 0, 4 active total. Watchlist digest audience: 36 users / 62 future events, including 20 events within 14 days. No price movement or alert conversion can be measured today because targets and current price snapshots are absent.
