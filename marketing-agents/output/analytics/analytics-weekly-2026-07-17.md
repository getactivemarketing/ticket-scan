# TicketScan Weekly Report — Week of 2026-07-17

*All metrics sourced live from `/api/admin/*`. Traffic, channel, and funnel data are `n/a` — no GA4 or conversion events configured.*

---

## Executive Summary

- **Signup surge:** 17 new users this week vs. 8 last week — +113% WoW. Largest single-week growth on record.
- **Total users hits 168** — up from 146 seven days ago (+15.1%).
- **Watchlist growing but targets missing:** 178 items tracked, 0 with a target price. Alert infrastructure is inert; fix this UI gap first.
- **Drip campaign still dead:** 0 emails ever delivered. ~161 users are past their 3-day trigger and have received nothing. Every new user is going cold.
- **Noah Kahan is the moment:** his "Great Divide Tour" is the most-tracked artist across multiple cities this week.

---

## Growth Metrics

| Metric                  | This Week | Last Week | WoW        |
|-------------------------|-----------|-----------|------------|
| New Signups             | 17        | 8         | **+113%**  |
| Total Registered Users  | 168       | 146       | +15.1%     |
| Signups Today           | 2         | —         | —          |
| Total Watchlist Items   | 178       | 168       | +6.0%      |
| Items Added This Week   | ~8        | —         | —          |
| Active Alerts           | 0         | 0         | no change  |
| Newsletter Subscribers  | 3         | 3         | flat       |
| Total Favorites         | 0         | 0         | —          |
| Price Alerts Triggered  | 0         | 0         | structural |

*Watchlist item count from API is paginated to 50; total of 178 is from `/api/admin/stats`.*

---

## Funnel Conversion Rates

| Step                    | This Week | Source |
|-------------------------|-----------|--------|
| Visit → Search          | n/a       | No GA4 |
| Search → Compare        | n/a       | No GA4 |
| Compare → Signup        | n/a       | No GA4 |
| Signup → Watchlist Add  | ~24%      | 4 of 17 new users added ≥1 item within hours of signing up |
| Watchlist → Alert Armed | 0%        | No users have set a target price (UI bug — input doesn't exist) |

---

## Traffic by Channel

`n/a` — No Google Analytics, GTM has no conversion events configured. Unlock: add GA4 + fire `sign_up` and `watchlist_add` events.

---

## Content Performance

`n/a` — No page-level analytics. Proxy signal: watchlist activity suggests users are reaching the search/event flow (4 watchlist adds this week from new signups).

---

## Event Trends — Most Tracked This Week

| Event                                      | Venue                        | City         | Notes                        |
|--------------------------------------------|------------------------------|--------------|------------------------------|
| Noah Kahan: The Great Divide Tour          | Petco Park / Wrigley / Citi Field / Kia Center | Multiple | Top artist this week — 4+ watchlist adds across dates |
| Harry Styles: Together, Together           | Madison Square Garden        | New York     | 4 separate dates tracked     |
| World Cup R16: W83 vs W84 (Match 93)       | AT&T Stadium                 | Arlington    | 2 watches                    |
| World Cup: Croatia vs Ghana (Match 68)     | Lincoln Financial Field      | Philadelphia | 2 watches                    |
| UFC 329: McGregor vs Holloway              | —                            | —            | High-intent user              |
| WWE SummerSlam Sunday                      | U.S. Bank Stadium            | Minneapolis  | Aug 2 date                   |
| Ariana Grande: Eternal Sunshine Tour       | Barclays Center              | Brooklyn     | 2 watches                    |

**No events have price movements to report** — price history table has 0 rows. Price tracking cron is not populating data.

---

## Email Performance

| Metric                        | Status                                      |
|-------------------------------|---------------------------------------------|
| Drip emails sent (all time)   | 0                                           |
| Users overdue for Email 1     | ~161 (signed up >3 days ago, received nothing) |
| Drip cron status              | Not executing — `drip_emails_sent` table empty |
| Newsletter subscribers        | 3 active                                    |
| Price alert emails            | 0 — alerts can't arm without target prices  |

**Risk:** Every new user since launch has been ignored by the drip. Do not trigger `/api/admin/drip-run` manually without scoping which users would be hit first — it may blast all ~161 overdue users at once.

---

## Paid Media Summary

$0 spend — no ad accounts active. `n/a`.

---

## Customer Behavior Analysis

**Verified from activity log and user records:**

**Signup → Watchlist conversion this week:**
- rebdav13: signed up → added Noah Kahan (Petco Park) within 29 seconds
- meaganlong19: signed up → added Twins vs Royals within 114 seconds
- roadmap-fizz.38: signed up → added Noah Kahan (Wrigley) within 29 seconds
- jgagznos: signed up → added Hatebreed (Denver) within 43 seconds

Pattern: users who add to watchlist do it immediately after signup. The 4 who didn't add anything this week are likely one-and-done visitors who didn't find what they were searching for.

**User segments (based on API data):**

| Segment             | Est. Count | Behavior                                         |
|---------------------|------------|--------------------------------------------------|
| Active trackers     | ~35        | ≥1 watchlist item; engaged with the core product |
| Signed-up inactive  | ~133       | Registered but no watchlist, no favorites        |
| Newsletter-only     | 3          | Subscribed but may not be registered             |
| Power users (2+ items) | ~15+  | e.g. otiamaxminka (2 Noah Kahan dates)           |

**Key finding:** The 133 inactive registered users represent the largest retention gap. They found the site, signed up, but didn't act. With drip broken, they've received zero follow-up. This is the primary growth unlock.

**Target price setting: 0%** — confirmed across all 178 watchlist items. No user has ever set a price target. The input doesn't exist in the UI (EventCard add flow sends no `targetPrice`). Until this ships, `activeAlerts` will remain 0 forever.

---

## Competitor Deep-Dive: Vivid Seats (Week 3 rotation)

### Product
- **Loyalty program (Vivid Seats Rewards):** Earns credits toward free tickets — TicketScan has nothing comparable. High stickiness driver.
- **"Buyer Guarantee":** Branding around verified tickets + last-minute delivery. We surface prices but don't guarantee.
- **Mobile app** with push notifications for price drops. TicketScan has no app, no push notifications.
- **Seat selection maps** — interactive. We don't have this.
- **TicketScan advantages:** Multi-source comparison (VS only shows their own inventory), price history, buy-timing advice.

### Marketing & SEO
- Vivid Seats ranks for broad terms: "cheap concert tickets," "last minute tickets," "[artist] tickets [city]" at scale.
- Their content strategy targets artist + venue + city combos — the same pattern our `/tickets/[slug]` pages attempt.
- Email cadence: 3–5x/week promotional; event-specific drip triggered by browse history (we have 0 behavioral triggers).
- Social: Heavy on concert FOMO content, fan testimonials.

### Opportunities
- **"TicketScan vs Vivid Seats" comparison page** — high-intent searchers actively look for this. Vivid Seats doesn't counter-position; we can.
- **Price history differentiator:** VS shows no historical pricing. Our charts (once price data flows) are a genuine gap-filler.
- **No loyalty lock-in yet:** We can position as the unbiased alternative before users get hooked on VS rewards.

### Threats
- Vivid Seats rewards program creates switching costs we don't have a counter to.
- Their app push notification for price drops is exactly what our `activeAlerts` feature is supposed to be — but ours isn't working.

### One compare page to build (not re-speccing, just the action item):
Path: `/compare/ticketscan-vs-vivid-seats`
Core angle: "We show all platforms including Vivid Seats. They only show their own."

---

## Tracking Audit

| Check                              | Status  | Notes                                          |
|------------------------------------|---------|------------------------------------------------|
| GTM installed                      | Yes     | Confirmed in layout.tsx                        |
| GA4 connected                      | Unknown | No GA4 property ID visible in config           |
| `sign_up` conversion event         | Not firing | No GTM trigger configured for signup form  |
| `watchlist_add` event              | Not firing | No event on watchlist action               |
| `search` event                     | Not firing | No search-trigger configured               |
| UTM parameter capture              | Unknown | No analytics to receive them               |
| Cross-domain tracking              | n/a     | Single domain                              |
| `/api/admin/alerts`               | HTTP 500 | Broken — SQL error likely                  |
| Price history table                | 0 rows  | Cron not running / not writing data        |

**Priority tracking additions to implement:**
1. GA4 property + GTM connection (unlocks everything else)
2. `sign_up` event on form submit
3. `watchlist_add` event with `event_name` and `has_target_price` params
4. `price_comparison_view` event on `/compare` page

---

## Key Insights

1. **Signup velocity is accelerating** — 17 this week vs. 8 last week. Something is driving discovery (likely World Cup / Noah Kahan search traffic). We have no visibility into the source because GA4 isn't connected, but the growth is real.

2. **The drip dead zone is a compounding problem** — 161 users signed up and got nothing. Each week this persists, the list grows. Even a plain-text "here's what you can do" Email 1 would re-engage a meaningful slice. This is now the highest-leverage backend fix.

3. **Target price input is the alerts blocker** — alerts are the product's core retention loop. Without the target price UI field, the loop never starts. This is a 1-hour frontend fix (one `<input>` in EventCard) with an outsized impact on the entire platform's value.

---

## Recommendations for Next Week

- **Engineering (top priority):** Add target price input to EventCard → fixes alerts, the entire core loop.
- **Engineering:** Fix drip cron execution — then send to the oldest cohort first (≤ 10 users as a test batch).
- **Engineering:** Fix `/api/admin/alerts` 500 error; verify price history cron is writing rows.
- **Content team:** Noah Kahan is the moment — publish "How to find cheap Noah Kahan tickets" this week while tour is active.
- **SEO team:** Validate that our `/tickets/` slug pages are indexed and pulling tour search traffic.
- **CRO team:** The 133 inactive registered users need a re-engagement path — currently they get nothing (drip is broken, no behavioral emails).
- **Growth team:** Don't spin up paid ads until drip is fixed — acquired users are being dropped immediately.
- **Compare page:** Build `/compare/ticketscan-vs-vivid-seats` as the single comparison page. One page done > four pages specced.
