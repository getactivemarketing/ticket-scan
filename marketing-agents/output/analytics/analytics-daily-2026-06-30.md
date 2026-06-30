## TicketScan Daily Dashboard — 2026-06-30

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| Unique Visitors           | n/a   | n/a       | n/a       | —     |
| New Signups               | 0     | 0         | ~0.7/day  | ↓     |
| Watchlist Items Added     | 0     | 0         | ~0.4/day  | →     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 3     | 3         | 3         | →     |
| Price Alerts Triggered    | 0     | 0         | 0         | →     |
| Drip Emails Sent          | 0     | 0         | 0         | →     |

> Traffic, comparisons, and source-level conversions: n/a — no GA4, GTM has no conversion events wired.

### Totals
- Total registered users: **135**
- Users this week (7-day): **7** (June 23–29)
- Total active watchlist items: **162**
- Total newsletter subscribers (active): **3**
- Total price history records: **55** (1 event tracked)
- Total price alerts ever fired: **0**
- Total drip emails sent: **0**

### Traffic Sources (24h)
| Source          | Visitors | Signups | Conversion |
|-----------------|----------|---------|------------|
| Organic Search  | n/a      | n/a     | n/a        |
| Direct          | n/a      | n/a     | n/a        |
| Social          | n/a      | n/a     | n/a        |
| Paid            | n/a      | n/a     | n/a        |
| Email           | n/a      | n/a     | n/a        |
| Referral        | n/a      | n/a     | n/a        |

No analytics source available. Unlock: wire GA4 conversion events via GTM.

### Top Pages (24h)
Not available — no analytics instrumentation.

### Popular Events Being Tracked
| Event | Venue | Watchers |
|-------|-------|---------|
| Harry Styles: Together, Together | Madison Square Garden, NYC | 2+ per date |
| Ariana Grande - The Eternal Sunshine Tour | Barclays Center, Brooklyn | 2+ per date |
| World Cup: Croatia vs Ghana (Match 68) | Lincoln Financial Field, Philadelphia | 2 |
| World Cup Round of 16: W74 vs W77 (Match 89) | Lincoln Financial Field, Philadelphia | 2 |
| World Cup Round of 16: W83 vs W84 (Match 93) | AT&T Stadium, Arlington | 2 |

### Price Tracking Status
- **Only 1 event actively tracked:** SELENA Tribute DREAMING OF YOU — Gaslamp Long Beach
  - Current price: $30.07 ($38.19 with fees) via Ticketmaster
  - Price has been **flat** at $30.07 for all 55 records (June 22 – June 30, every 4 hours)
  - No other watchlist items are generating price history data

### Drip Campaign — Overdue Users
The drip system has sent 0 emails ever. Users currently pending by threshold:

| Days Since Signup | Users Past This Threshold | Overdue for Email # |
|-------------------|--------------------------|----------------------|
| 3+ days           | 13 users                 | Email 1             |
| 7+ days           | 10 users                 | Email 2             |
| 14+ days          | 5+ users                 | Email 3             |
| 21+ days          | ~many                    | Email 4             |

Total users with 0 drip emails received: **135 of 135**

---

### Anomalies & Alerts

**🚨 Drip campaign inert — all 135 users have received 0 emails.** Multiple users are well past the day-3, day-7, day-14, and day-21 trigger windows. Root cause unknown (SMTP config, cron failure, or send suppression). Do not trigger a blind blast — investigate delivery first.

**🚨 Price tracking tracks only 1 of 162 watchlist items.** The cron is fetching prices for SELENA Tribute DREAMING OF YOU exclusively. It appears price_history inserts are scoped to one event. All 161 other watchlist items have zero price history — alerts can never arm.

**🚨 /api/admin/alerts returns HTTP 500.** Endpoint has been failing consistently.

**ℹ️ 0 signups today and 0 watchlist additions in 4 days.** Last signup was June 28, last watchlist add was June 26. Could be weekend/post-World Cup-group-stage drop — monitor if it extends through July 1.

**ℹ️ Newsletter subscriber count static at 3** (2 real, 1 test). Form implementations shipped June 7 on blog/footer but not producing signups. Possible: forms are rendering but submission endpoint silently failing, or organic traffic is insufficient.

**ℹ️ No target prices on any watchlist item.** 0 of 162 watchlist items have a target_price set. The target price UI input does not exist — the alert system cannot arm for any user regardless of price tracking status.

---

### Tracking Validation
- GTM: installed site-wide (not verified today — no API)
- Signup conversion event: not wired in GTM
- Watchlist add event: not wired in GTM
- Price comparison event: not wired in GTM
- Newsletter subscribe event: not wired in GTM
- UTM capture: unknown status

**Status:** All conversion tracking is dark. Until GTM conversion events are configured and GA4 connected, all traffic/funnel metrics will remain n/a.

---

### For Other Agents

**Content Agent:** Top trending categories in watchlist = World Cup (knockout stage), Ariana Grande (Barclays July), Harry Styles (MSG July–Aug), Ye Live tours. High-value content angles: WC knockout bracket, summer concert price timing.

**SEO Agent:** No organic traffic data available. Highest-watchlist venues = MSG (NYC), Barclays Center (Brooklyn), Lincoln Financial Field (Philadelphia), AT&T Stadium (Arlington), SoFi Stadium (LA). Prioritize those venue pages for freshness.

**Social Agent:** Ariana Grande Eternal Sunshine Tour and World Cup knockouts are the two hottest tracked categories. Both have upcoming events (July 1+ WC matches, July 12–19 Grande at Barclays).

**Paid Ads Agent:** $0 spend / no ad accounts active. No paid traffic data.

**Email Agent:** 135 registered users, 0 drip emails sent ever. Do not trigger bulk sends without verifying SMTP delivery first. 3 newsletter subscribers only.

**CRO Agent:** 0 of 162 watchlist items have target prices — the watchlist→alert funnel is completely broken at the UI layer (no input field). Top P0 fix still unshipped.

**Growth Agent:** 7 signups in last 7 days (down from ~8-10/week peak). 0 today. Watchlist engagement: ~47% of registered users have at least 1 watchlist item.
