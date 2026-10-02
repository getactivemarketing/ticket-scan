# Email Marketing Weekly — 2026-10-02

**Owner:** Email Marketing Specialist  
**Status:** Draft assets complete. No email send, drip run, deletion, or list mutation performed.  
**Skill note:** The requested `email-sequence` and `cold-email` skills are not installed in this workspace. This work follows the supplied brief, current product-status guardrails, and the existing Nodemailer/drip implementation.

## Executive summary

The production admin API reports 263 registered users, 255 watchlist rows, and 6 active newsletter subscribers. The drip table is still empty: every returned pending user has `last_email_sent: 0`, so there is no observed open rate, click-through rate, conversion rate, bounce rate, or weakest performer by engagement. Email 1 is the optimization target by funnel position, not by measured performance.

Price-based promises remain prohibited. The revised assets use event discovery, onsale/date information, venue guides, and general buying-safety advice. The newsletter below is intentionally not a price-trend, price-alert, or buy/wait email.

## 1. Drip performance and optimization decision

| Email | Timing | Current theme | Sends | Opens | CTR | Conversions | Decision |
|---|---:|---|---:|---:|---:|---:|---|
| 1 | Day 3 | Watchlist and alerts | 0 recorded | N/A | N/A | N/A | **Optimize first**: activation opportunity; remove unsupported alert/savings claims |
| 2 | Day 7 | Best time to buy | 0 recorded | N/A | N/A | N/A | Hold; rewrite later as general buying guidance |
| 3 | Day 14 | Compare prices | 0 recorded | N/A | N/A | N/A | Hold; do not send until comparison data is restored |
| 4 | Day 21 | Venue guides | 0 recorded | N/A | N/A | N/A | Hold; safest current content direction |
| 5 | Day 30 | Re-engagement | 0 recorded | N/A | N/A | N/A | Hold; remove monitoring/alert language before use |

### Email 1 subject test

1. **Recommended:** Your next ticket search starts here
2. Find an event, save the details, and plan with confidence
3. Your first TicketScan watchlist is one search away

Full revised copy: [email-drip-1-optimized-2026-10-02.md](./email-drip-1-optimized-2026-10-02.md).

**Timing:** Keep Day 3 until delivery and engagement telemetry exists. Do not backfill the current backlog by running `/api/admin/drip-run`; confirm SMTP health, consent, unsubscribe handling, and the desired catch-up policy first.

## 2. Newsletter

Ready-to-send draft: [newsletter-2026-10-02.md](./newsletter-2026-10-02.md).

The event block uses current Ticketmaster search results checked on October 2: Philadelphia 76ers preseason on October 5, Orlando Magic v Cleveland Cavaliers on October 13, Denver Broncos v Seattle Seahawks on October 15, and Earth, Wind & Fire in Las Vegas on October 16. It uses dates and venues only; no current TicketScan price or trend claim is made.

The World Cup section is an archive/venue-guide note because the tournament window has passed. No countdown or upcoming-sales language is included.

## 3. New automated sequence: post-signup activation

This week's rotation is **Post-Signup Activation for registered users with no watchlist**. Full copy and logic: [sequence-post-signup-activation-2026-10-02.md](./sequence-post-signup-activation-2026-10-02.md).

| Step | Timing | Trigger | Primary success event |
|---|---:|---|---|
| 1 | Day 1 | Account created; zero watchlist rows | Dashboard visit |
| 2 | Day 3 | Still zero watchlist rows; Step 1 delivered | Watchlist add |
| 3 | Day 7 | Still zero watchlist rows; no unsubscribe | Event-detail/outbound-ticket click |

## 4. List health and segmentation

| Segment | Size | Confidence / recommendation |
|---|---:|---|
| Active newsletter records | 6 | API status is active; confirm consent before campaign send |
| Plausibly non-test subscriber records | 4 | Sources are `site-footer` (2), `homepage` (1), `onsales` (1); keep separate from test records |
| Test/API-test records | 2 | Exclude from live sends after owner confirmation; do not delete automatically |
| Opened in last 30 days | N/A | Open telemetry is not stored/exposed |
| At-risk, no opens 30–60 days | N/A | Cannot classify without provider events |
| Dormant, no opens 60+ days | N/A | Cannot classify without provider events |
| World Cup interested subscribers | N/A | No page-visit or interest tag is stored; add capture tagging |
| Registered users with any watchlist | 153 | Useful activation cohort; not a newsletter segment by itself |
| High-value registered users (2+ watchlist rows) | 41 | Candidate for future personalization after consent join is available |
| Registered users with no watchlist | 110 | Primary audience for the new activation sequence |
| Hard bounces / invalid emails | N/A | No bounce feed or validation result is exposed; do not claim list cleanup |

### Recommended list-health work

- Add provider message ID plus sent, delivered, bounced, opened, clicked, complained, and unsubscribed events.
- Add signed unsubscribe links and a suppression check before every send.
- Add `sports`, `concerts`, `theater`, `venue`, and `world_cup` interest tags at signup or click time.
- Treat source values `test` and `api-test` as a QA suppression segment; confirm before removing or changing records.
- Do not classify inactive subscribers or delete addresses until engagement and bounce telemetry exists.

## 5. Handoffs

- **Content Agent (Agent 1):** Produce a lead magnet titled “The 5-Minute Ticket Checkout Checklist” covering all-in cost, section verification, seller legitimacy, mobile delivery, and refund terms. Avoid price-history, alert, and buy-timing promises.
- **CRO Agent (Agent 6):** Audit registration → dashboard → event detail → watchlist add. The production database has 110 registered users with no watchlist rows; instrument the activation drop-off points.
- **Growth Agent (Agent 8):** Define win-back around no login, search, event-detail click, or watchlist activity for 14 days. Suppress unsubscribes, hard bounces, QA records, and anyone recently contacted.

## Send gates

1. Confirm SMTP health and the intended treatment of the 20+ pending drip users.
2. Exclude QA/test addresses and confirm consent for the four non-test subscriber records.
3. Verify signed unsubscribe links and suppression behavior.
4. QA the newsletter links and event dates immediately before send.
5. Keep all price-alert, price-history, price-trend, buy/wait, and target-price language out of public email until product status changes.
