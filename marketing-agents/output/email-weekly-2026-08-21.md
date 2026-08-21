# Email Marketing Weekly — 2026-08-21

**Owner:** Email Marketing Specialist  
**Status:** Draft assets complete; no production email, list deletion, or drip run performed.  
**Skill note:** `email-sequence` and `cold-email` are not installed in this session; work follows the supplied task spec and existing Nodemailer/Resend implementation.

## Executive summary

The database has 228 users, 221 watchlist rows, 4 active newsletter subscribers, and 0 recorded drip sends. The current schema tracks only `drip_emails_sent`; open rate, CTR, conversions, bounces, complaints, and unsubscribe events are unavailable. No email can be identified as weakest by observed performance, so Email 1 (Day 3) is the optimization target because it is the first activation opportunity and currently contains an unsupported savings claim.

Price history has 202 rows, with the latest at 2026-07-25T00:01:07Z. There are 64 future-dated watchlist items and 23 within the next 14 days, but no current price data mapped to the top watched future events. The newsletter therefore uses verified interest signals and neutral price language pending refresh.

## 1. Drip performance

| Email | Timing | Theme | Sends | Opens | CTR | Conversions | Decision |
|---|---:|---|---:|---:|---:|---:|---|
| 1 | Day 3 | Watchlist and alerts | 0 | N/A | N/A | N/A | **Optimize first** |
| 2 | Day 7 | Best time to buy | 0 | N/A | N/A | N/A | Hold; instrument first |
| 3 | Day 14 | Compare prices | 0 | N/A | N/A | N/A | Hold; instrument first |
| 4 | Day 21 | Venue guides | 0 | N/A | N/A | N/A | Hold; instrument first |
| 5 | Day 30 | Re-engagement | 0 | N/A | N/A | N/A | Hold; instrument first |

Optimized copy: [email-drip-1-optimized-2026-08-21.md](./email-drip-1-optimized-2026-08-21.md)

Recommended subject test: “Your first ticket deal starts with one number” (default), “What’s the most you’d pay for {{event_name}}?”, and “Set your price target. We’ll watch the rest.” Keep Day 3 timing until telemetry is fixed.

## 2. Newsletter

Ready-to-send draft: [newsletter-2026-08-21.md](./newsletter-2026-08-21.md). The World Cup block is now a post-event update: FIFA reports Spain defeated Argentina 1–0 after extra time on July 19. Do not use countdown language after the tournament.

## 3. New automated sequence

This week’s rotation is **Event Reminder**, delivered 14, 7, and 3 days before a watchlisted event. Full copy and logic: [sequence-event-reminder-2026-08-21.md](./sequence-event-reminder-2026-08-21.md).

## 4. List health and segmentation

| Segment | Size | Recommendation |
|---|---:|---|
| Active newsletter subscribers | 4 | Eligible only after consent and deliverability checks |
| Total newsletter records | 4 | No inactive records to remove |
| Active: opened in last 30 days | N/A | Add open/provider-event telemetry |
| At-risk: no opens in 30–60 days | N/A | Do not classify without telemetry |
| Dormant: no opens in 60+ days | N/A | Do not suppress/delete without telemetry |
| World Cup interested | N/A | Add page-visit/source-interest tagging |
| High-value | N/A | Add comparison events and per-user watchlist aggregation |
| Hard bounces / invalid emails | N/A | Add provider bounce feed and validation |
| Watchlist with target price | 0 known | CRO issue: 221 rows have no recorded target price |

All four current subscribers are marked active; sources are `site-footer` (1), `homepage` (1), `test` (1), and `api-test` (1). The test addresses should be excluded from any real send after owner confirmation. No records were deleted.

## 5. Instrumentation and list-health actions

- Add delivery events keyed by provider message ID: sent, delivered, bounced, opened, clicked, complained, unsubscribed.
- Add campaign, sequence, step, CTA, user ID, and event ID to each send.
- Add signed unsubscribe URLs and a suppression check before every send.
- Add `world_cup`, `sports`, `concerts`, `venue`, and `unknown` interest tags at capture; add last activity timestamp.
- Validate emails and suppress hard bounces. Do not remove based on inactivity until telemetry exists.

## 6. Handoffs

- **Content Agent (Agent 1):** Create “The 5-Minute Ticket Price Check” lead magnet, covering all-in fees, comparable sections, target prices, and buyer protection; provide plain-text and HTML versions.
- **CRO Agent (Agent 6):** Audit registration → dashboard → watchlist → target-price flow. The database shows 0 target prices across 221 watchlist rows, so the alert setup promise is not being completed or recorded.
- **Growth Agent (Agent 8):** Define churn/win-back trigger as no login, comparison, watchlist, or alert activity for 14 days; suppress recent alert recipients, unsubscribes, hard bounces, and test users.

## Send gates

1. Refresh prices; current history is stale as of July 25.
2. Repair or add delivery/open/click/bounce telemetry.
3. Confirm consent and exclude test addresses.
4. Verify signed unsubscribe links.
5. Send a one-recipient QA test before any campaign release.
