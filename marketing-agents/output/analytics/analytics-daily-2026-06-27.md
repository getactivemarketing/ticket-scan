## TicketScan Daily Dashboard — 2026-06-27

_Source: Live API pull at ~06:00 UTC. All figures from `/api/admin/*` endpoints unless noted._

---

### Key Metrics (24h)

| Metric                    | Today (24h) | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------------|-----------|-----------|-------|
| New Signups               | 2           | 0         | 1.7/day   | ↑     |
| Watchlist Items Added     | 2           | 0         | 1.0/day   | ↑     |
| Price History Records     | +6          | +6        | ~6/day    | →     |
| Newsletter Subscribers    | +0          | +0        | 0         | →     |
| Price Alerts Triggered    | 0           | 0         | 0         | →     |
| Drip Emails Sent          | 0           | 0         | 0         | 🚨    |
| Unique Visitors           | n/a         | n/a       | n/a       | —     |
| Price Comparisons Run     | n/a         | n/a       | n/a       | —     |

_Traffic/visitor/conversion data: n/a — GTM installed, no GA4 read access or conversion events configured._

---

### Totals (live, from `/api/admin/stats`)

| Metric                        | Count | Change vs Yesterday |
|-------------------------------|-------|---------------------|
| Total registered users        | 134   | +2                  |
| Total watchlist items         | 162   | +2                  |
| Active price alerts           | 0     | 0                   |
| Active newsletter subscribers | 3     | 0                   |
| Total newsletter subscribers  | 3     | 0                   |
| Price history records         | 37    | +6                  |
| Drip emails ever sent         | 0     | 0                   |
| Total user favorites          | 0     | 0                   |

---

### Signup Cadence — Last 14 Days

| Date       | New Signups |
|------------|-------------|
| 2026-06-27 | 2 (24h)     |
| 2026-06-25 | 1           |
| 2026-06-24 | 1           |
| 2026-06-23 | 3           |
| 2026-06-22 | 1           |
| 2026-06-21 | 2           |
| 2026-06-20 | 2           |
| 2026-06-18 | 1           |
| 2026-06-16 | 2           |
| 2026-06-15 | 1           |
| 2026-06-14 | 1           |
| 2026-06-13 | 2           |
| 2026-06-12 | 1           |
| 2026-06-10 | 2           |

_7-day total: 12 (matches usersThisWeek=12 from API). Daily avg: 1.7/day._

---

### Price Tracking (Active)

Only verified event in price_history (37 records, all one event):

| Event                          | Venue              | Min Price | w/ Fees | Trend |
|--------------------------------|--------------------|-----------|---------|-------|
| SELENA Tribute DREAMING OF YOU | Gaslamp Long Beach | $30.07    | $38.19  | →     |

_Cron running every 4h — 6 new records in last 24h confirms price tracker is live._
_All 162 watchlist items have target_price = null → no alerts can arm._

---

### Popular Events Being Tracked (from `/api/admin/popular-events`)

| Event                                      | Venue                    | City         | Watchers |
|--------------------------------------------|--------------------------|--------------|----------|
| Harry Styles: Together, Together           | Madison Square Garden    | New York     | 8+ (multi-listing) |
| Flyleaf with Lacey Sturm - 20th Anniv Tour | House of Blues Chicago   | Chicago      | 2        |
| Noah Kahan: The Great Divide Tour          | Kia Center               | Orlando      | 2        |
| World Cup: Match 68 - Croatia vs Ghana     | Lincoln Financial Field  | Philadelphia | 2        |
| Ariana Grande - The Eternal Sunshine Tour  | Barclays Center          | Brooklyn     | 2        |
| World Cup R16: W74 vs. W77 (Match 89)     | Lincoln Financial Field  | Philadelphia | 2        |
| World Cup R16: W83 vs. W84 (Match 93)     | AT&T Stadium             | Arlington    | 2        |

_WC Round of 16 matches are now being watchlisted — World Cup interest converting to platform activity._

---

### New Watchlist Activity (Last 24h)

User `britishcpa@gmail.com` (signed up June 26) added 2 WC items immediately after registering:
- World Cup Match 68: Croatia vs Ghana @ Lincoln Financial (TODAY, June 27)
- World Cup R16 Match 89 @ Lincoln Financial (July 4)

This is the platform's ideal user journey: WC search → register → watchlist. No target price set (UI limitation still active).

---

### 🚨 Anomalies & Alerts

| Flag | Severity | Detail |
|------|----------|--------|
| Drip never fires | 🔴 Critical | 134 users, 0 emails ever sent. Every eligible user (all 134) should have received Email #1 by now. |
| No target prices | 🔴 Critical | 162 watchlist items, 0 have target_price. UI has no input for it — alerts are architecturally blocked. |
| /api/admin/alerts HTTP 500 | 🟠 High | Endpoint broken; alert tracking completely dark. |
| Price tracking coverage thin | 🟡 Medium | 37 price records exist but they're all for one event. Most watchlisted events have no price history. |
| No newsletter growth | 🟡 Medium | 3 subscribers since launch. Forms exist (fixed June 7) but zero conversion since. |

---

### Tracking Validation

| Checkpoint                         | Status       |
|------------------------------------|--------------|
| GTM on site                        | ✅ Installed  |
| GA4 / conversion events configured | ❌ None       |
| Signup event firing                | ❌ Not tracked |
| Watchlist add event firing         | ❌ Not tracked |
| Newsletter subscribe event         | ❌ Not tracked |
| Price comparison event             | ❌ Not tracked |
| UTM parameter capture              | ❌ No GA4     |

_No behavioral data available to downstream agents until GA4 is wired up with conversion events._

---

### Feed for Downstream Agents

| Agent     | Available Data                                                              |
|-----------|-----------------------------------------------------------------------------|
| Content   | Harry Styles / Ariana Grande / Noah Kahan high-intent; WC R16 interest live |
| SEO       | Organic traffic n/a (no GA4); top watchlisted venues: MSG, Lincoln Financial, Barclays |
| Social    | WC R16 fever is real (users registering + watchlisting same day); Croatia vs Ghana TODAY |
| Paid Ads  | $0 spend; no ad accounts. n/a.                                              |
| Email     | 0 drip emails sent; 3 newsletter subs. Drip broken — blind-fire risk.       |
| CRO       | P0 still open: no target-price input (blocks all alert/savings value prop). |
| Growth    | 12 signups/week, WC-driven spike. 134 total users.                          |

---

### Competitor Quick Check

No major announcements from SeatGeek, StubHub, or Vivid Seats in last 24h.
WC Round of 16 (starting today) likely driving elevated search volume across all platforms — TicketScan
positioned to capture this if WC landing pages rank.

---

_Dashboard complete. Next run: 2026-06-28 ~06:00 UTC._
