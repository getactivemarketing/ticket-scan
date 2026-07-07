## TicketScan Daily Dashboard — 2026-07-07

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg  | Trend |
|---------------------------|-------|-----------|------------|-------|
| Unique Visitors           | n/a   | n/a       | n/a        | —     |
| New Signups               | 3     | 2         | ~1.6/day   | ↑     |
| Watchlist Items Added     | 0     | 1         | ~0.8/day   | →     |
| Price Comparisons Run     | n/a   | n/a       | n/a        | —     |
| Newsletter Subscribers    | 3     | 3         | 3          | →     |
| Price Alerts Triggered    | 0     | 0         | 0          | →     |
| Drip Emails Sent          | 0     | 0         | 0          | →     |

> Traffic, comparisons, and source-level conversions: n/a — no GA4, GTM has no conversion events wired.

### Totals
- Total registered users: **146** (+9 since July 1)
- Users this week (7-day): **11** (July 1–7, per stats API)
- Total active watchlist items: **168** (+5 since July 1)
- Total newsletter subscribers (active): **3** (unchanged)
- Price history records: **~100** (cron running every 4h ✓, ~6 records/day)
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

No analytics source available. Unlock: wire GA4 conversion events via GTM for signup, watchlist_add, compare_run, newsletter_subscribe.

### Top Pages (24h)
Not available — no analytics instrumentation.

### Popular Events Being Tracked
| Event | Venue | Watchers |
|-------|-------|---------|
| Harry Styles: Together, Together | Madison Square Garden, NYC | 2+ (multiple dates) |
| Ariana Grande – The Eternal Sunshine Tour | Barclays Center, Brooklyn | 2+ (multiple dates) |
| World Cup Round of 16: W74 vs W77 (Match 89) | Lincoln Financial Field, Philadelphia | 2 |
| Flyleaf w/ Lacey Sturm – 20th Anniversary Tour | House of Blues Chicago | 2 |
| Noah Kahan: The Great Divide Tour | Kia Center, Orlando | 2 |

Also newly tracked this week: Bad Bunny, BTS World Tour 'Arirang' (LA), NFL Preseason Bills v Steelers, Noah Kahan w/ Gigi Perez.

### Price Tracking Status
- **Active cron** — price_history has ~100 records, ~6/day added on schedule ✓
- Records returned from /api/admin/price-history: 50 (API paginated)
- Recent coverage (Jul 1–Jul 7): 39 new records logged
- Latest check: SELENA Tribute DREAMING OF YOU — Gaslamp Long Beach, $30.07/$38.19 w/ fees (2026-07-07T08:01 UTC)
- **Known issue:** price tracker appears scoped to very few events despite 168 watchlist items — no price history for most watched events. Alerts cannot arm.

### Drip Campaign — Overdue Users
0 emails ever sent. Users overdue by threshold (from drip-stats, 20 most recent shown):

| Signup Date | Days Ago | Overdue For |
|-------------|----------|-------------|
| ≤ Jun 3     | 34+ days | Email 5 (day 30) |
| Jun 3–16    | 21–34 days | Email 4 (day 21) |
| Jun 16–23   | 14–21 days | Email 3 (day 14) |
| Jun 24–30   | 7–13 days | Email 2 (day 7) |
| Jul 1–4     | 3–6 days  | Email 1 (day 3) |

**146 registered users. 0 drip emails sent.** Do not trigger a blind blast — verify SMTP delivery on a test account first.

### Recent Activity (last 72h from activity log)
- `2026-07-07T07:28` — signup: tscheck0707@mailinator.com
- `2026-07-06T21:41` — signup: jonmeisburg@gmail.com
- `2026-07-06T18:41` — signup: mgoff0324@gmail.com
- `2026-07-06T18:41` — **mgoff0324** added "Noah Kahan w/ Gigi Perez" to watchlist
- `2026-07-05T12:23` — signup: adriana.pjm2@gmail.com
- `2026-07-05T12:23` — **adriana.pjm2** added "Ariana Grande – The Eternal Sunshine Tour" to watchlist

---

### 🚨 Anomalies & Alerts

**↑ Signups strong this week:** 11 signups in 7 days (avg 1.6/day) — best 7-day run since launch. World Cup knockout stage may be driving search traffic to the site. Monitor through July 12.

**🚨 Drip campaign still inert — 146 users, 0 emails sent.** Every single registered user has received 0 drip emails. Many are 30+ days overdue for email 5. Root cause (SMTP credentials, cron, or suppression logic) still unresolved. **This is the most urgent infrastructure fix on the platform.**

**🚨 Price tracker scoped to very few events.** Cron is healthy (every 4h) but only a handful of events have price_history rows. 160+ watchlist items have no price data. Alerts cannot arm.

**🚨 /api/admin/alerts returns HTTP 500.** Consistent since first flagged. Alerts endpoint is broken server-side.

**🚨 0 of 168 watchlist items have target prices.** No target price input exists in the EventCard/add-to-watchlist UI. Alert system cannot arm for any user even if tracking is fixed. This is a one-input fix.

**ℹ️ Newsletter static at 3 subscribers.** Blog/footer subscribe forms shipped June 7 with no conversions since. Either organic traffic is too low to drive newsletter signups at current rates, or form submissions are silently failing. Verify with a manual test submit.

**ℹ️ World Cup knockout stage is live.** Matches 89 and 93 (Lincoln Financial Field + AT&T Stadium) are both already tracked on watchlist. QF/SF/Final venues (MetLife, SoFi, AT&T, Hard Rock) should be receiving fresh SEO attention through July 19.

---

### Tracking Validation
- GTM container: installed site-wide (status unverifiable without GTM API access)
- Signup conversion event: **not wired**
- Watchlist add event: **not wired**
- Price comparison event: **not wired**
- Newsletter subscribe event: **not wired**
- UTM parameter capture: **unknown**

**Status:** All conversion tracking remains dark. To unlock funnel metrics: configure GA4 + GTM conversion events for signup, watchlist_add, compare_run, newsletter_subscribe.

---

### For Other Agents

**Content Agent:** Top watchlist signals = World Cup knockout rounds (Match 89 + 93 already tracked), Harry Styles MSG residency (multiple dates watched), Ariana Grande Eternal Sunshine Tour at Barclays (multiple dates). New this week: Bad Bunny and BTS World Tour 'Arirang' LA (large fan communities). High-value content angles: "World Cup QF/SF/Final ticket prices: what to expect" and "Ariana Grande vs Harry Styles: which summer show is still affordable?"

**SEO Agent:** No organic traffic data. Top watchlist venues: MSG (NYC), Barclays Center (Brooklyn), Lincoln Financial Field (Philadelphia), AT&T Stadium (Arlington), Kia Center (Orlando). World Cup is now in knockout stage through July 19 — QF/SF/Final stadium pages (MetLife, SoFi, AT&T, Hard Rock) are most timely for freshness updates.

**Social Agent:** World Cup knockouts, Ariana Grande Eternal Sunshine Tour, and BTS World Tour 'Arirang' are this week's hottest watchlist categories. Bad Bunny add signals Latin music audience. Strong week for signups (11) = something is working — monitor where they're coming from.

**Paid Ads Agent:** $0 spend / no ad accounts active. No paid traffic data. Signup velocity up — organic is working, paid could amplify.

**Email Agent:** 146 registered users, 0 drip emails ever sent. 3 newsletter subscribers only. Drip infrastructure broken — most urgent fix on platform. Do not trigger sends without verifying SMTP on test account first.

**CRO Agent:** 0 of 168 watchlist items have target prices — watchlist→alert funnel broken at UI layer (no input field). Price tracker cron is healthy but scoped to wrong/few events. These remain the two P0 unshipped fixes. 11 signups this week = good top-of-funnel; activation is broken below it.

**Growth Agent:** 11 signups in 7 days (Jul 1–7) — up from ~7 the prior week. 3 signups today already. Watchlist engagement: 168 items / 146 users ≈ 1.15 items/user. World Cup knockout stage appears to be driving new registrations. Signal to watch: whether Jul 7–14 sustains or drops as group stage interest fades pre-QF.
