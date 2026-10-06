## Email Daily — 2026-10-06

Checked the production admin API on 2026-10-06. The available endpoints expose cumulative records and pending drip users, but not opens, clicks, SMTP bounces, or provider-level delivery failures. Price tracking is currently down, so this report does not claim price movement, recommendations, or alert delivery.

### Drip Campaign

- Emails sent (24h): 0 recorded; `/api/admin/drip-stats` returned no campaign rows
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: Not measurable; no failure, bounce, or delivery-log endpoint is exposed
- Pending users: 20 returned with `last_email_sent: 0`; the oldest are 37 days from signup
- Action: Drip run not triggered. The endpoint sends real email, and current templates contain claims about price tracking that are not true today.

### Price Alerts

- Alerts triggered (24h): Not measurable; `/api/admin/stats` reports 0 triggered alerts and 0 active alerts platform-wide
- Events with drops: Not available; current price tracking is down
- Delivery failures: Not measurable; `/api/admin/alerts?limit=100` returned `Failed to get alerts`
- Target prices: 0 across 256 watchlist items, so no target-hit message or recommendation can be computed

### Subscriber Growth

- New subscribers today: 0 observed
- Sources today: none
- Unsubscribes today: 0 observed; all 6 returned subscriber records are active
- Net: 0
- Total active: 6
- All-time source breakdown: site-footer 2, onsales 1, homepage 1, test 1, api-test 1

### Watchlist Digest Inputs

- Total users: 264
- Total watchlist items: 256
- Events within 14 days (2026-10-06 through 2026-10-20): 6 across 6 users
- Near-term events: Prospa (Oct 9, History Toronto); Philadelphia Eagles v Jacksonville Jaguars (Oct 11, Tottenham Hotspur Stadium); Denver Broncos vs. Seattle Seahawks (Oct 15, Empower Field At Mile High); Twenty One Pilots (Oct 17, Ohio Stadium); KATSEYE (Oct 20, Spectrum Center); Malcolm Todd (Oct 6, The Salt Shed Outdoors)
- Items with target prices: 0
- Recommendation changes: Not computable; no current price snapshot is available
- Send status: Date-and-venue digest copy is ready in [watchlist-digest-2026-10-06.md](watchlist-digest-2026-10-06.md). It deliberately omits price changes, buy/wait calls, and alert promises.

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — urgency: `Your watchlist has 6 events coming up soon`
- Version B — consumer advocate: `6 events are on the calendar — here’s the useful update`
- Preview A: `Six events land in the next two weeks. Check dates, venues, and the details before you go.`
- Preview B: `No fake “buy now” panic—just the dates and venue details you actually need.`
- Primary CTA: `Review My Watchlist` → `https://ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary

### Delivery Escalation

1. Repair `/api/admin/alerts`; it currently fails, blocking alert and delivery auditing.
2. Restore fresh price tracking before sending any price-alert or price-movement email.
3. Replace or pause drip templates that promise price alerts, price history, savings statistics, or buy timing based on TicketScan data.
4. Add provider-level send, bounce, open, and click telemetry.
5. Verify SMTP configuration and approve a controlled drip run only after the copy is corrected; 20 users have no recorded drip email.
6. Analytics handoff: 0 recorded drip sends, 0 platform-wide triggered alerts, 0 net subscribers, 6 active subscribers, and 6 near-term watchlist events across 6 users.
