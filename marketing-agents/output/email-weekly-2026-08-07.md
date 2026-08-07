# Email Marketing Weekly — 2026-08-07

**Owner:** Email Marketing Specialist  
**Status:** Drafts ready for QA; no production send or drip run performed.  
**Skill note:** `email-sequence` and `cold-email` are not installed. This work follows the existing Nodemailer templates and prior weekly reporting conventions.

## Executive summary

The main issue is measurement and delivery, not copy performance. The latest verified daily snapshot reports no recorded drip sends for any of the five emails. Because the app stores only `drip_emails_sent`, there is no reliable open rate, CTR, conversion, bounce, or unsubscribe-event data.

I selected **Email 1 — Day 3 activation/watchlist email** as the optimization target. It is the earliest conversion opportunity and the current template contains an unsupported "$127 saved" claim. The replacement uses a single activation action, a target-price explanation, and conditional personalization when a real watchlist event exists.

The rotating new sequence is **Post-Signup Activation** for registered users with no watchlist. This fits the observed funnel: 203 watchlist rows exist, but 0 have a target price.

## 1. Drip performance

| Email | Timing | Theme | Sends | Opens | CTR | Conversions | Decision |
|---|---:|---|---:|---:|---:|---:|---|
| 1 | Day 3 | Watchlist and alerts | 0 recorded | N/A | N/A | N/A | **Optimize first** |
| 2 | Day 7 | Best time to buy | 0 recorded | N/A | N/A | N/A | Hold pending instrumentation |
| 3 | Day 14 | Compare prices | 0 recorded | N/A | N/A | N/A | Hold pending instrumentation |
| 4 | Day 21 | Venue guides | 0 recorded | N/A | N/A | N/A | Hold pending instrumentation |
| 5 | Day 30 | Re-engagement | 0 recorded | N/A | N/A | N/A | Hold pending instrumentation |

**Verified funnel context:** 200 registered users, 203 watchlist rows, 56 future-dated items, 10 items within Aug 7–Aug 21 across 9 users, and 0 watchlist rows with a target price. No drip run was triggered because the admin endpoint sends real email.

### Measurement recommendations

Add an `email_deliveries`/`email_events` table keyed by provider message ID with `sent`, `delivered`, `bounced`, `opened`, `clicked`, `unsubscribed`, and timestamps. Add campaign, email number, and CTA identifiers. Record conversion events for registration, watchlist add, target-price save, comparison start, and alert trigger.

## 2. Weakest-email optimization

The code-ready copy is in [email-drip-1-optimized-2026-08-07.md](./email-drip-1-optimized-2026-08-07.md).

Test these subject lines with the same body and CTA:

- A: `Your first ticket deal starts with one number` **(default)**
- B: `What’s the most you’d pay for {{event_name}}?`
- C: `Set your price target. We’ll watch the rest.`

Keep timing at Day 3, 10:00 UTC until delivery logging is repaired. Suppress if the user has already added a watchlist item or received a price-alert email in the prior 24 hours.

## 3. Weekly newsletter

The complete send draft is in [newsletter-2026-08-07.md](./newsletter-2026-08-07.md). It uses the 9 verified near-term watchlist events as interest signals, but makes no unsupported price-direction claims. A fresh price-history check and a real unsubscribe URL are required before sending.

## 4. New sequence: post-signup activation

The full sequence is in [sequence-post-signup-activation-2026-08-07.md](./sequence-post-signup-activation-2026-08-07.md).

- Trigger: registered user, no watchlist item, active consent, no hard bounce
- Timing: Day 1, Day 3, Day 7 after registration
- Suppression: stop after first watchlist add; suppress after unsubscribe, hard bounce, or recent price-alert email
- Primary success metric: first watchlist add within 7 days
- Secondary metrics: target-price save, comparison start, alert trigger, click-to-watchlist rate, unsubscribe rate

## 5. List health and segmentation

| Segment | Size | Status |
|---|---:|---|
| Active newsletter subscribers | **4** | Verified from latest daily snapshot |
| Total registered users | **200** | Verified |
| Active: opened in last 30 days | N/A | No open telemetry |
| At-risk: no opens in 30–60 days | N/A | No open telemetry |
| Dormant: no opens in 60+ days | N/A | No open telemetry |
| World Cup interested | N/A | No page-visit or source-interest tags |
| High-value | N/A | Per-user comparison events unavailable |
| Hard bounces / invalid emails | N/A | No bounce table/provider feed |
| Watchlist exists, target missing | **203 rows** | 0 rows have a target price |

Do not delete or suppress subscribers based on inactivity until open and bounce telemetry exists. Add source/interest tags (`world_cup`, `sports`, `concerts`, `venue`, `unknown`) at capture, plus per-user watchlist count and comparison activity.

## 6. Handoffs

- **Content Agent (Agent 1):** Create “The 5-Minute Ticket Price Check,” covering all-in fees, comparable sections, price targets, and buyer protection, with a plain-text version.
- **CRO Agent (Agent 6):** Audit registration → dashboard → watchlist → target-price flow. The observed 0 target prices across 203 rows indicates the alert promise is not being completed or recorded.
- **Growth Agent (Agent 8):** Build the inactive-user trigger around no login, comparison, watchlist, or alert activity for 14 days. Suppress recent alert recipients, unsubscribes, and hard bounces.

## Send gates

1. Repair admin authentication or provide a current read-only admin credential.
2. Verify the drip cron and run a one-recipient test before releasing overdue users.
3. Add provider delivery/bounce/open/click telemetry.
4. Confirm a fresh `price_history` row before using any up/down percentage.
5. Replace `{{unsubscribe_url}}` with a signed URL and send only to active, consented recipients.
