# TicketScan Email Marketing — Weekly Report

**Run date:** 2026-08-14  
**Status:** Drafts ready; do not send until the price feed is refreshed and the list is cleaned.

## Executive summary

- Database snapshot: 212 users, 4 active newsletter subscribers, 209 watchlist rows, 202 price-history rows, and 0 recorded price alerts.
- `drip_emails_sent` stores only user, email number, and sent time. Open rate, CTR, conversion, bounce, unsubscribe, and revenue attribution are not measurable from current data.
- Email 5 is the provisional optimization target because its current copy is generic month-later re-engagement. This is a content judgment, not a measured weakest result.
- Price history ends 2026-07-24. Do not publish invented percentage movements; refresh prices before send.
- The 2026 World Cup ended July 19. Spain beat Argentina 1–0 after extra time. FIFA: https://www.fifa.com/en/articles/final-tournament-standings

## 1. Drip sequence performance

| Email | Schedule | Sent / last sent | Open rate | CTR | Conversions |
|---|---:|---|---:|---:|---:|
| 1 | Day 3 | Not exposed | N/A | N/A | N/A |
| 2 | Day 7 | Not exposed | N/A | N/A | N/A |
| 3 | Day 14 | Not exposed | N/A | N/A | N/A |
| 4 | Day 21 | Not exposed | N/A | N/A | N/A |
| 5 | Day 30 | Not exposed | N/A | N/A | N/A |

The `/api/admin/drip-stats` route exposes send counts, but the schema cannot calculate engagement. Add delivered, opened, clicked, watchlist_added, comparison_started, registered, bounced, and unsubscribed events keyed by campaign and email number.

### Provisional weakest performer: Email 5

The current subject (“Any Events Coming Up? We Can Help”) is broad and lacks a personalized event or one measurable next step. Replace it with `optimized-drip-email-5.md`. Test three subject lines with equal random splits and keep body/CTA constant.

Keep Day 30 for the first test. If two cohorts show no meaningful activity, test Day 27 versus Day 30.

## 2. Newsletter

Full draft: `newsletter-2026-08-14.md`.

Editorial angle: Live Nation reported more than 143 million tickets sold through mid-July 2026, 14 million ahead of the prior year, with mid-teens growth across large venues: https://newsroom.livenation.com/news/live-nation-entertainment-reports-second-quarter-2026-results/

The newsletter uses watchlist demand for event selection but leaves price percentages as refresh tokens because the feed is stale.

## 3. New automated sequence

This week’s rotation: **Win-Back Sequence** for users inactive 14+ days. Full copy and logic: `sequence-win-back-2026-08-14.md`.

Primary success event: a returning user adds or revisits a watchlist item within 7 days. Secondary events: comparison started, alert target set, unsubscribe rate.

## 4. List health and segmentation

| Segment | Count | Definition / limitation |
|---|---:|---|
| Active newsletter subscribers | 4 | is_active=true; all syntactically plausible on manual review |
| At-risk proxy | 44 | Users signed up 30–60 days ago; not open-based |
| Dormant proxy | 118 | Users signed up 60+ days ago; not open-based |
| Recent-user proxy | 50 | Users signed up within 30 days |
| No-watchlist activation | 88 | Registered users with no watchlist rows |
| High-value proxy | 14 | Users with 3+ watchlist rows |
| World Cup watchlist rows | 27 | Event names containing “World Cup” |
| World Cup newsletter-source subscribers | 0 | No active source contains “world” |

Sources among the four active rows are homepage, site-footer, test, and api-test. Exclude test/API-test from production sends and verify consent before mailing the other two. No hard-bounce or invalid-email status exists, so no automatic removal was performed.

Recommendations:

1. Add consent and ESP engagement-webhook records before claiming active, at-risk, or dormant email segments.
2. Add segment, consent source, last delivered/opened/clicked, bounce type, and unsubscribe fields or equivalent event records.
3. Suppress test and api-test records from campaign queries; do not delete until their test purpose is confirmed.
4. Add world_cup_interest when a user visits a World Cup page or adds a World Cup event; use it for retrospective content now that the tournament is over.
5. Define high value as 3+ watchlist items or 2+ comparisons in 30 days.

## Handoffs

- **Content Agent (Agent 1):** Create “The Ticket Buyer’s Price-Tracking Playbook” with a timing calendar, fee checklist, target-price worksheet, and explicit consent/source tagging.
- **CRO Agent (Agent 6):** Investigate the 88 registered users with no watchlist; test a post-signup checklist, sample event, and clearer target-price explanation.
- **Growth Agent (Agent 8):** Build inactivity triggers at 14/21/30 days and suppress after activity, watchlist add, alert, unsubscribe, bounce, or complaint.

## Pre-send checklist

- [ ] Refresh prices and calculate real week-over-week movement.
- [ ] Confirm event links and availability.
- [ ] Exclude test/API-test records and verify consent.
- [ ] Add unsubscribe and sender-address headers.
- [ ] Instrument campaign, CTA click, comparison, watchlist add, and registration.
- [ ] Render-test in Gmail and mobile widths.
