## Email Daily — 2026-08-09

### Drip Campaign
- Emails sent (24h): **0 recorded**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: **Unavailable** — the stats endpoint exposes send counts only and has no failure/bounce fields.
- Pending queue: 20 users returned by the endpoint; 2 users are at Day 3 and appear eligible for E1 if the campaign is being run today.
- Note: /api/admin/drip-stats returned an empty stats array, so there is no evidence of a successful drip send in the reporting window.

### Price Alerts
- Alerts triggered (24h): **0 confirmed** — platform stats reports triggeredAlerts: 0.
- Events with drops: **None confirmed**.
- Delivery failures: **Unavailable**.
- Issue: /api/admin/alerts returned HTTP success with success:false and error “Failed to get alerts”. Escalate to backend/database owner before relying on alert-delivery reporting.
- Price data issue: /api/admin/price-history returned 202 rows, latest checked **2026-07-24 20:01 UTC**. No current price record matched any upcoming watchlist item.

### Subscriber Growth
- New subscribers today: **0** (no rows dated 2026-08-09)
- Sources today: none
- Unsubscribes today: **0 observed** (no active subscriber had an unsubscribe date today)
- Net: **0**
- Total active: **4**
- All-time active source mix: site-footer 1, homepage 1, test 1, api-test 1

### Watchlist Digest Prep
- Upcoming watchlist items: **55**
- Users with upcoming items: **31**
- Items within 14 days (Aug 9–23): **5** across 4 users
- Digest draft: [watchlist-digest-2026-08-09.md](./watchlist-digest-2026-08-09.md)
- Personalization limitation: admin watchlist data includes email but no user display name; draft uses “Hi there.”

### Subject Line & CTA A/B Test
- Version A: **Your Ticket Watchlist Update — [X] events tracked**
- Version B: **Prices changed? Your [X]-event watchlist update**
- Recommended CTA: **View your watchlist**
- CTA URL: https://ticketscan.io/watchlist
- Test note: volume is too small for a meaningful statistical A/B test today; use the variants for copy QA or hold until a larger send.

### Escalation
1. Backend owner: investigate why /api/admin/alerts fails while /api/admin/stats reports zero alerts.
2. Email owner: verify cron/SMTP configuration and inspect drip_emails_sent; no sends are recorded despite eligible users.
3. Price-tracking owner: restore the four-hour tracker or confirm why the latest price record is July 24.
4. Analytics Agent (Agent 7): subscriber growth is flat today; active base is 4, with no observed unsubscribes.

