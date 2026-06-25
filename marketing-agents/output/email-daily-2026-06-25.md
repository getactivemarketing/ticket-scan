## Email Daily — 2026-06-25

### Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 (system is not firing, not logging failures)
- **Status: BROKEN — drip has never sent a single email.**

**Pending backlog (last_email_sent: 0 for all 20+ queued users):**

Users past E1 threshold (day 3+) who've received nothing:
| User | Days since signup | Due |
|------|------------------|-----|
| starmanspiff@protonmail.com | 3 | E1 (today) |
| accounts@edwintrejo.com | 4 | E1 |
| jerrykielbasa@gmail.com | 4 | E1 |
| gmalzberg@gmail.com | 4 | E1 |
| rodaguirre5@gmail.com | 6 | E1 |
| kondadz@gmail.com | 8 | E1 + E2 |
| lukew25073@gmail.com | 8 | E1 + E2 |
| webbercycle@gmail.com | 10 | E1 + E2 |
| l.ilyman.de.rson.8.13@googlemail.com | 11 | E1 + E2 |
| olgajim3@gmail.com | 11 | E1 + E2 |
| p1prez@live.com | 11 | E1 + E2 |
| b.shaan1021@gmail.com | 12 | E1 + E2 |
| kellileeriach@yahoo.com | 13 | E1 + E2 |
| dilanozusta@gmail.com | 14 | E1 + E2 + E3 |

**14 users overdue for E1. 9 overdue for E2. 1 overdue for E3.**

Root cause to investigate: cron job not running on Railway, SMTP credentials invalid, or drip-run endpoint silently failing. **Do NOT call /api/admin/drip-run blindly** — diagnose first to avoid a burst send to real inboxes.

### Price Alerts
- Alerts triggered (24h): 0
- Events with drops: n/a
- Delivery failures: 0
- **Status: INERT.** activeAlerts=0 platform-wide. Root cause: no target-price input in UI — users can add watchlist items but cannot set a price target, so alert conditions never arm. Fix is a single frontend input on EventCard.

### Subscriber Growth
- New subscribers: 0
- Unsubscribes: 0
- Net: 0
- Total active: 3 (roos_leeuwen@eaglesmail.net, samir.sgpatel@gmail.com, test@example.com)
- Note: newsletter subscriber count (3) is separate from registered users (132). Nearly all users are unsubscribed from newsletter.

### Platform Context (for Analytics Agent)
- Total registered users: 132
- New users today: 2 (IDs 131–132, signed up 2026-06-24/25)
- New users this week: 11
- Total watchlist items: 160

---

## Watchlist Digest — Content Template (2026-06-25)

**Why this is a template, not a live send:** `/api/prices/history` returns 0 rows platform-wide. No price movement data exists to personalize per-user digest. Sending now would produce empty or dishonest content. Template is ready; send when price tracking is operational.

**Subject line A/B variants:**

| Version | Subject | Hook |
|---------|---------|------|
| A | Your Ticket Watchlist Update — [X] events tracked | Utility / count |
| B | Prices moved on [Event Name]. Here's what to do. | Urgency / specificity |
| C | Still watching [Team]? Here's the latest. | Personalization |

Recommendation: Test A vs B when volume reaches 100+ sends/day. At current scale (0 sends), launch with B — its specificity sets accurate expectations.

**Template (ready to wire up once price tracking is live):**

```
Subject: Prices moved on {{top_event_name}}. Here's your update.
Preview: {{count}} events tracked · {{drop_count}} price drop(s) since you last checked

Hi {{first_name}},

Here's today's update on the tickets you're watching:

{{#each price_changes}}
{{status_emoji}} {{event_name}} — Prices {{direction}} ${{delta}} (now ${{current_price}}) — {{recommendation}}
{{/each}}

{{#if upcoming_soon}}
⏰ Heads up: {{upcoming_event}} is {{days_away}} days away. Prices typically spike in the final week.
{{/if}}

→ View your full watchlist on TicketScan
   ticketscan.io/watchlist

—
The TicketScan Team
Unsubscribe | Manage preferences
```

**CTA audit:**
- Primary CTA: "View your full watchlist" → `/watchlist` (auth-required — works for registered users)
- Secondary CTA (unauthenticated): "Set a price alert" → `/dashboard` (anon-accessible search)
- Both CTAs are above-the-fold in the template. No changes needed.

---

## Escalation Flags

1. **Drip never fires** — 14+ real users are past their first email trigger with 0 contact. Every day this continues erodes the onboarding window. Diagnosis needed before manual trigger.

2. **Price alerts cannot arm** — no target-price input exists in UI. 160 watchlist items, 0 active alerts. Single frontend input would unlock the entire alert + email pipeline.

3. **Newsletter vs user gap** — 132 registered users, 3 newsletter subscribers. The registration flow does not include an opt-in. Adding a checkbox at `/register` is the lowest-effort subscriber growth lever available.
