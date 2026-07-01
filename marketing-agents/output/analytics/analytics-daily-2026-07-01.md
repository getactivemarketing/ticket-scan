## TicketScan Daily Dashboard — 2026-07-01

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg  | Trend |
|---------------------------|-------|-----------|------------|-------|
| Unique Visitors           | n/a   | n/a       | n/a        | —     |
| New Signups               | 2     | 0         | ~1.0/day   | ↑     |
| Watchlist Items Added     | 1     | 0         | ~1.0/day   | ↑     |
| Price Comparisons Run     | n/a   | n/a       | n/a        | —     |
| Newsletter Subscribers    | 3     | 3         | 3          | →     |
| Price Alerts Triggered    | 0     | 0         | 0          | →     |
| Drip Emails Sent          | 0     | 0         | 0          | →     |

> Traffic, comparisons, and source-level conversions: n/a — no GA4, GTM has no conversion events wired.

### Totals
- Total registered users: **137** (+2 since yesterday)
- Users this week (7-day): **7** (June 25 – July 1)
- Total active watchlist items: **163** (+1 since yesterday)
- Total newsletter subscribers (active): **3** (unchanged)
- Total price history records: **61** (+6 since yesterday — tracker running on schedule ✓)
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
| Harry Styles: Together, Together | Madison Square Garden, NYC | 2+ (multiple dates) |
| World Cup Round of 16: W74 vs W77 (Match 89) | Lincoln Financial Field, Philadelphia | 2 |
| Flyleaf w/ Lacey Sturm – 20th Anniversary Tour | House of Blues Chicago | 2 |
| Noah Kahan: The Great Divide Tour | Kia Center, Orlando | 2 |
| Ariana Grande – The Eternal Sunshine Tour | Barclays Center, Brooklyn | 2+ (multiple dates) |

### Price Tracking Status
- **Only 1 event actively tracked:** SELENA Tribute DREAMING OF YOU — Gaslamp Long Beach
  - Current price: $30.07 ($38.19 with fees) via Ticketmaster
  - Price flat at $30.07 across all 61 records (June 22 – July 1, every 4 hours ✓)
  - Cron is healthy: 3 checks already today (midnight, 4am, 8am UTC)
  - 162 other watchlist items have zero price history — tracker appears scoped to one event

### Drip Campaign — Overdue Users
0 emails ever sent. Users overdue by threshold (from drip-stats):

| Days Since Signup | Users Past Threshold | Overdue for Email |
|-------------------|---------------------|-------------------|
| 3+ days           | ~15 users           | Email 1           |
| 7+ days           | ~12 users           | Email 2           |
| 14+ days          | 5+ users            | Email 3           |
| 21+ days          | many                | Email 4           |

All 137 registered users have received 0 drip emails. Do not trigger a blind blast — verify SMTP delivery first.

### Recent Activity (last 48h from activity log)
- `2026-06-30T23:42` — **goldpassconcierge@gmail.com** added "Forfait 2 jours Coupe Davis" to watchlist
- `2026-06-30T23:40` — signup: goldpassconcierge@gmail.com
- `2026-06-30T20:37` — signup: ambeargram@gmail.com
- `2026-06-28T20:26` — signup: dreasommers@gmail.com
- No activity recorded yet for July 1 (run is at 6am UTC)

---

### 🚨 Anomalies & Alerts

**ℹ️ Signups recovered:** 2 new users in last 24h after a 0-signup day on June 30. The possible World Cup group-stage drop flagged yesterday appears short-lived. Monitor through July 2.

**🚨 Drip campaign inert — 137 users, 0 emails sent.** Multiple users are 10–30+ days overdue for drip emails 1–4. Root cause unresolved (SMTP, cron, or suppression logic). Do not bulk-trigger until delivery is verified on a test account.

**🚨 Price tracker only covering 1 of 163 watchlist items.** Cron is healthy (running every 4h) but price_history inserts appear scoped to SELENA Tribute DREAMING OF YOU exclusively. All 162 other items have no price data — alerts cannot arm.

**🚨 /api/admin/alerts returns HTTP 500.** Consistent failure; alerts endpoint is broken.

**🚨 0 of 163 watchlist items have target prices.** No target price UI input exists in EventCard/watchlist flow. The alert system cannot arm for any user even if price tracking is fixed.

**ℹ️ Newsletter static at 3 subscribers.** Blog/footer forms shipped June 7 but producing no conversions. Possible: organic traffic insufficient, or form submissions silently failing. Verify form endpoint with a test submit.

**ℹ️ Interesting new watchlist item:** "Forfait 2 jours Coupe Davis" (Davis Cup 2-day pass) — first tennis event tracked. Suggests World Cup audience overlap with other international events.

---

### Tracking Validation
- GTM: installed site-wide (unverified today — no API access to GTM)
- Signup conversion event: not wired
- Watchlist add event: not wired
- Price comparison event: not wired
- Newsletter subscribe event: not wired
- UTM capture: status unknown

**Status:** All conversion tracking remains dark. To unlock funnel metrics: configure GA4 conversion events via GTM for signup, watchlist_add, compare_run, newsletter_subscribe.

---

### For Other Agents

**Content Agent:** Top watchlist categories = World Cup knockout stage (multiple matches in Philadelphia + Arlington), Harry Styles MSG residency, Ariana Grande Barclays Center (July), Flyleaf 20th anniversary. New signal: Davis Cup tracked → international sports angle. High-value content: "What to know before buying World Cup knockout tickets" and "Summer concert price windows: Ariana vs Harry."

**SEO Agent:** No organic traffic data. Highest-watchlist venues = MSG (NYC), Barclays Center (Brooklyn), Lincoln Financial Field (Philadelphia), AT&T Stadium (Arlington), Kia Center (Orlando). These 5 venue pages deserve freshness updates. World Cup is now in knockout stage — round-of-16 and QF stadium pages timely.

**Social Agent:** World Cup knockouts and Ariana Grande Eternal Sunshine Tour are the two hottest tracked categories this week. New: Flyleaf 20th Anniversary Tour showing watchlist interest for the nostalgia/emo audience.

**Paid Ads Agent:** $0 spend / no ad accounts active. No paid traffic data.

**Email Agent:** 137 registered users, 0 drip emails sent ever. 3 newsletter subscribers only. Do not trigger sends without verifying SMTP on a test account first.

**CRO Agent:** 0 of 163 watchlist items have target prices — watchlist→alert funnel broken at UI layer (no input field). Price tracker cron is healthy but scoped wrong. These are the two P0 fixes still unshipped.

**Growth Agent:** 7 signups in last 7 days (~1/day, consistent). Today's 2 signups reverse the zero-signup day on June 30. Watchlist engagement: 163 items / 137 users ≈ 1.2 items/user average. Davis Cup watcher suggests broadening beyond concerts/US sports.
