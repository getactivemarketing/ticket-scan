# Email Marketing Weekly — 2026-07-31

**Owner:** Email Marketing Specialist  
**Status:** Drafts ready; do not send a promotional blast until delivery and price-data checks pass.

## Executive summary

The current five-email drip has no measurable performance winner or loser because the production stats endpoint reports an empty `drip_emails_sent` table. As of the latest analytics run, all five emails show **0 recorded sends**, opens, clicks, and conversions are unavailable, and at least 20 users are pending with `last_email_sent: 0`. This is a delivery/cron and observability failure, not evidence that the copy is ineffective.

I selected **Email 1, Day 3 — Watchlist & Alerts** as the optimization target. It is the first activation message and directly addresses the current funnel gap: 198 watchlist rows, 0 target prices, and 0 recorded alerts. The revised copy removes the unsupported “users save an average of $127” claim and leads with a single activation action.

## 1. Drip performance

| Email | Current timing | Current subject/theme | Sends | Opens | CTR | Conversions | Decision |
|---|---:|---|---:|---:|---:|---:|---|
| 1 | Day 3 | Never Miss a Price Drop — Set Up Alerts | 0 recorded | N/A | N/A | N/A | **Optimize first** |
| 2 | Day 7 | When Is the Best Time to Buy Tickets? | 0 recorded | N/A | N/A | N/A | Hold pending instrumentation |
| 3 | Day 14 | Are You Comparing Prices? | 0 recorded | N/A | N/A | N/A | Hold pending instrumentation |
| 4 | Day 21 | Know Your Venue Before You Buy | 0 recorded | N/A | N/A | N/A | Hold pending instrumentation |
| 5 | Day 30 | Any Events Coming Up? We Can Help | 0 recorded | N/A | N/A | N/A | Hold pending instrumentation |

**Measurement limitation:** Nodemailer/Resend delivery is not connected to open/click tracking, the database has no delivery or bounce table, and the admin stats route reports sends only. Do not report the zeros as engagement rates.

### Recommended test for Email 1

Run a 50/50/holdout test once sending is repaired, with equal timing at Day 3. Keep the body and CTA constant for the first test so subject-line lift is isolated:

- **A — practical:** `Your first ticket deal starts with one number`
- **B — curiosity:** `What’s the most you’d pay for [Event]?`
- **C — direct:** `Set your price target. We’ll watch the rest.`

Recommended default: **A**. Use `[Event]` only when a real watchlist event exists; otherwise use the generic subject.

## 2. Optimized drip email

The code-ready template is in [email-drip-1-optimized-2026-07-31.md](./email-drip-1-optimized-2026-07-31.md). It includes preview text, all three subject variants, a stronger first paragraph, one primary CTA, a plain-text fallback, and personalization rules.

Timing remains **Day 3 at 10:00 UTC** for now. Add a 24-hour suppression if the user already added a watchlist item or received a price-alert email; personalize the event name only when a watchlist row exists.

## 3. Newsletter

The complete send draft is in [newsletter-2026-07-31.md](./newsletter-2026-07-31.md).

Recommended subject: **`The best ticket deal is the one you can prove`**  
Preview: **`Compare the live market before you buy—and catch this week’s biggest shifts.`**

The draft uses current popular-event signals from the admin snapshot: Noah Kahan at Kia Center/Citi Field, Harry Styles at Madison Square Garden, Flyleaf at House of Blues Chicago, and Ariana Grande at Barclays Center. It does not invent prices or percentage changes. A sender must replace the marked live-price fields after price tracking is healthy.

The World Cup section is now a post-tournament update: FIFA lists the final on July 19, 2026, so “countdown” language must be removed. The section points readers to TicketScan’s venue and tournament recap pages instead. Source: [FIFA final tournament standings](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/final-tournament-standings).

## 4. New sequence: post-signup activation

The full sequence is in [sequence-post-signup-activation-2026-07-31.md](./sequence-post-signup-activation-2026-07-31.md).

Chosen rotation: **B. Post-Signup Activation — registered users with no watchlist**.

- Email 1: Day 1 — save on the first ticket
- Email 2: Day 3 — set a price target in 30 seconds
- Email 3: Day 7 — return with verified price movement only

Suppress a message immediately after the user adds a watchlist item. Do not claim a price drop in Email 3 unless a fresh `price_history` row exists.

## 5. List health and segmentation

| Segment | Size | Status |
|---|---:|---|
| Active newsletter subscribers | 4 | Available from live admin snapshot |
| Total registered users | 195 | Available |
| Users with at least one watchlist row | 114 | Available from daily analytics; 198 rows total |
| Active email users: opened in last 30 days | N/A | No open telemetry |
| At-risk: no opens in 30–60 days | N/A | No open telemetry |
| Dormant: no opens in 60+ days | N/A | No open telemetry |
| World Cup interested | N/A | No page-visit/source segment persisted |
| High-value: multiple watchlist items or frequent comparisons | N/A | Watchlist counts exist, but per-user segmentation query/export is not available in this run |
| Hard bounces / invalid emails | N/A | No bounce or validation data exposed |

**List-health actions:**

1. Do not delete subscribers based on inactivity until open telemetry exists. Add `email_deliveries`/`email_events` with message ID, delivered, bounced, opened, clicked, unsubscribed, and event timestamps.
2. Validate addresses at capture and suppress hard bounces from future sends. Preserve an audit record rather than deleting rows.
3. Add source and page-interest tags at signup; at minimum: `world_cup`, `sports`, `concerts`, `venue`, and `unknown`.
4. Add a per-user watchlist-count segment and a comparison event. The current data shows 0 target prices across 198 tracked rows, so the first activation segment should be “watchlist exists, target missing.”

## 6. Handoffs

- **Content Agent (Agent 1):** Request a short lead magnet, “The 5-minute ticket price check,” with a comparison checklist and fee questions. Do not gate it on the current dead-end blog/footer capture surfaces until CRO confirms the form works.
- **CRO Agent (Agent 6):** Fix the signup-to-watchlist path and target-price prompt. Current observed state is 0 target prices across 198 watchlist rows; the alert promise should be softened until the target and alert path is functional.
- **Growth Agent (Agent 8):** Build the inactive-user trigger around a real activity event: no login/comparison/watchlist action for 14 days, with suppression for recent alert sends, unsubscribes, and hard bounces. The prepared win-back copy can be reused after event logging exists.

## Send gates for this week

- Repair or verify the drip cron before sending overdue users; do not use the admin manual trigger blindly because the endpoint may release the full overdue cohort.
- Add delivery logging and a small test cohort before the next production batch.
- Confirm at least one fresh `price_history` row before publishing percentage-based “hot event” claims.
- Confirm unsubscribe handling and a real unsubscribe URL in the newsletter renderer.
