# Email Marketing Weekly — 2026-10-09

**Owner:** Email Marketing Specialist  
**Status:** Draft assets complete. No email send, drip run, deletion, or list mutation performed.  
**Data pulled:** Production admin API on 2026-10-09; event examples checked against the deployed event-search API on 2026-10-09.

## Executive summary

The admin API reports 264 registered users, 256 watchlist rows, 6 active newsletter records, and 0 recorded drip sends. Because the system stores no open, click, conversion, bounce, or complaint events, no email can be identified as weakest by measured engagement. Email 1 remains the optimization target by funnel position: it is the first activation opportunity for registered users who have not saved an event.

All public copy in this package avoids price tracking, price history, price trends, price-drop alerts, target-price alerts, buy/wait calls, and TicketScan-derived price claims. The copy focuses on event discovery, onsale/date details, venue guides, and checkout safety.

## 1. Drip performance and optimization

| Email | Timing | Sends recorded | Opens | CTR | Conversions | Decision |
|---|---:|---:|---:|---:|---:|---|
| 1 | Day 3 | 0 | N/A | N/A | N/A | Optimize first for activation |
| 2 | Day 7 | 0 | N/A | N/A | N/A | Hold; rewrite unsupported legacy claims before use |
| 3 | Day 14 | 0 | N/A | N/A | N/A | Hold; current comparison claims need product-status review |
| 4 | Day 21 | 0 | N/A | N/A | N/A | Safest current theme: venue guidance |
| 5 | Day 30 | 0 | N/A | N/A | N/A | Hold; remove monitoring/alert language |

**Recommended optimization:** Email 1, Day 3. Keep timing unchanged until delivery and engagement telemetry exists. Full ready-to-code copy is in [email-drip-1-optimized-2026-10-09.md](./email-drip-1-optimized-2026-10-09.md).

## 2. Newsletter

Ready-to-send draft: [newsletter-2026-10-09.md](./newsletter-2026-10-09.md).

The draft uses New York Comic Con, Metallica at Sphere, The Wizard of Oz at Sphere, and SHABAKA at Blue Note Los Angeles as event examples. The API returned explicit dates and venues for each; event availability and links must be rechecked immediately before sending because the endpoint also returned stale records for some city/date queries.

## 3. New automated sequence

This week's rotation is **Event Reminder**, aimed at users with a saved event approaching. Full copy and logic are in [sequence-event-reminder-2026-10-09.md](./sequence-event-reminder-2026-10-09.md).

| Step | Timing | Trigger | Primary success event |
|---|---:|---|---|
| 1 | 14 days before event | Active watchlist item; event date is 14–15 days away | Event-detail view |
| 2 | 7 days before event | Still active; no unsubscribe or hard bounce | Venue-guide or seller-link click |
| 3 | 3 days before event | Still active; event has not passed | Confirmed event details / outbound click |

No send should occur for past dates, missing dates, cancelled events, unsubscribed users, or hard bounces.

## 4. List health and segmentation

| Segment | Size | Confidence / recommendation |
|---|---:|---|
| Active newsletter records | 6 | API status is active; consent must be confirmed before send |
| Plausibly non-test subscribers | 4 | Sources: site-footer (2), homepage (1), onsales (1) |
| QA/test records | 2 | Sources: `test` and `api-test`; suppress after owner confirmation, do not delete automatically |
| Opened in last 30 days | N/A | Open telemetry is not stored or exposed |
| At-risk, no opens 30–60 days | N/A | Cannot classify without provider events |
| Dormant, no opens 60+ days | N/A | Cannot classify without provider events |
| World Cup interested | N/A | No page-visit or interest tag is stored |
| High-value registered users | N/A | Watchlist count exists, but no consent-linked newsletter segment exists |

No hard-bounce or invalid-email cleanup was performed. The API exposes no bounce feed or validation result, and the requested list mutation is not safe without one.

## 5. Handoffs

- **Content Agent (Agent 1):** Produce “The 5-Minute Ticket Checkout Checklist,” covering all-in cost, section verification, seller legitimacy, mobile delivery, and refund terms.
- **CRO Agent (Agent 6):** Audit registration → dashboard → event detail → watchlist add. The live stats show 264 users and 256 watchlist rows, but the API does not expose a user-level activation funnel.
- **Growth Agent (Agent 8):** Define win-back around no login, search, event-detail click, or watchlist activity for 14 days. Suppress unsubscribes, hard bounces, QA records, and recently contacted users.

## Send gates

1. Verify SMTP health, consent, signed unsubscribe links, and suppression behavior.
2. Exclude the two QA/test records unless explicitly approved.
3. Recheck every event date, venue, availability, and outbound URL immediately before send.
4. Add provider delivery, open, click, bounce, complaint, and unsubscribe telemetry before claiming performance.
5. Keep unsupported price-alert, price-history, price-trend, and buy-timing language out of public email until product status changes.
