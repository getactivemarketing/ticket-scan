## TicketScan Daily Dashboard — 2026-07-08

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg  | Trend |
|---------------------------|-------|-----------|------------|-------|
| Unique Visitors           | n/a   | n/a       | n/a        | —     |
| New Signups               | 0     | 1         | ~1.3/day   | ↓     |
| Watchlist Items Added     | 0     | n/a       | n/a        | →     |
| Price Comparisons Run     | n/a   | n/a       | n/a        | —     |
| Newsletter Subscribers    | 3     | 3         | 3          | →     |
| Price Alerts Triggered    | 0     | 0         | 0          | →     |
| Drip Emails Sent          | 0     | 0         | 0          | →     |

> Traffic, comparisons, and source-level conversions: n/a — no GA4, GTM has no conversion events wired.

### Totals
- Total registered users: **146** (0 new today; +9 over past 7 days)
- Total active watchlist items: **168** (unchanged from yesterday)
- Total newsletter subscribers (active): **3** (unchanged)
- Total price alerts ever fired: **0** (alerts endpoint: HTTP 500 — known issue)
- Total drip emails sent: **0** (drip pipeline confirmed inactive)

### Recent Signup Trend (last 10 days)
| Date       | New Signups |
|------------|-------------|
| 2026-06-28 | 1           |
| 2026-06-30 | 2           |
| 2026-07-01 | 1           |
| 2026-07-02 | 1           |
| 2026-07-03 | 3           |
| 2026-07-05 | 1           |
| 2026-07-06 | 2           |
| 2026-07-07 | 1           |
| 2026-07-08 | 0 (so far)  |

7-day total (Jul 1–7): **9 signups** at ~1.3/day average

### Traffic Sources (24h)
| Source          | Visitors | Signups | Conversion |
|-----------------|----------|---------|------------|
| Organic Search  | n/a      | n/a     | n/a        |
| Direct          | n/a      | n/a     | n/a        |
| Social          | n/a      | n/a     | n/a        |
| Paid            | n/a      | n/a     | n/a        |
| Email           | n/a      | n/a     | n/a        |
| Referral        | n/a      | n/a     | n/a        |

No analytics source available. Unlock: wire GA4 conversion events via GTM for `signup`, `watchlist_add`, `compare_run`, `newsletter_subscribe`.

### Top Pages (24h)
Not available — no analytics instrumentation.

### Popular Events Being Tracked (Top 5 unique)
1. **Harry Styles: Together, Together** @ Madison Square Garden, New York — multiple users watching (several date variants)
2. **Noah Kahan: The Great Divide Tour** @ Kia Center, Orlando — 2 watches
3. **World Cup Match 68 Group L: Croatia vs Ghana** @ Lincoln Financial Field, Philadelphia — 2 watches
4. **World Cup Round of 16: W83 vs W84** @ AT&T Stadium, Arlington — 2 watches
5. **Flyleaf with Lacey Sturm - 20th Anniversary Tour** @ House of Blues Chicago — 2 watches

All 168 watchlist items have **null target prices** — alerts cannot fire until users set a target. This is the platform's primary product gap.

### 🚨 Anomalies & Alerts
- **Zero signups today** (as of 6:00 AM UTC) — not unusual early in the day; check again at end of day
- **Drip campaign: 0 emails ever sent** — users at 7-15 days post-signup are sitting at `last_email_sent=0`. Drip must be triggered manually or the cron is not running. Do NOT blind-trigger (`/api/admin/drip-run`) without reviewing recipient list first
- **Price alerts: permanently 0** — root cause is no target-price UI input (confirmed). Front-end fix = add one price input to watchlist add flow
- **/api/admin/alerts HTTP 500** — endpoint broken, price alert history unavailable
- **Newsletter at 3 subscribers** — stalled for weeks; verify footer/blog subscription forms are live in production

---

### Tracking Validation
**Status: PARTIAL — platform DB metrics live, behavioral tracking blind**

| Event               | Fires? | Notes                                       |
|---------------------|--------|---------------------------------------------|
| Signup              | ✗      | No GA4 event; count via DB only             |
| Watchlist Add       | ✗      | No GA4 event                                |
| Price Comparison    | ✗      | No GA4 event                                |
| Newsletter Subscribe| ✗      | No GA4 event                                |
| GTM Base Tag        | ?      | GTM present in layout.tsx; no custom events |
| UTM Capture         | ?      | No GA4 to receive UTM params                |

**Action needed:** Wire at minimum `signup` and `watchlist_add` as GA4 custom events via GTM. Without these, paid/SEO ROI cannot be measured.

---

### Competitor Quick Check
- **SeatGeek**: No major feature launches detected this week. World Cup ticket inventory prominent on homepage.
- **StubHub**: Continuing heavy WC2026 push; "Fan Code" promo for knockout round tickets.
- **Vivid Seats**: No significant changes observed.
- **Ticketmaster**: Presale for several summer stadium tours (post-WC announcements) — Bruno Mars, Taylor Swift extensions. Relevant: these will drive search volume that TicketScan pages could capture.

**Opportunity signal:** WC2026 knockout rounds start July 2 (Group stage ended). Search intent for "World Cup tickets" is now shifting to "semifinals tickets", "final tickets", "MetLife tickets World Cup". Ensure WC landing pages reflect knockout-round framing.

---

### Feed Snapshot for Other Agents

| Agent         | Key Input                                                                 |
|---------------|---------------------------------------------------------------------------|
| Content       | Top: Harry Styles MSG, Noah Kahan, WC knockouts — content angles available |
| SEO           | Organic traffic: n/a; WC knockout round queries are live search intent now |
| Social        | Popular events: Harry Styles, World Cup knockouts; no price data to post   |
| Paid Ads      | $0 spend, no ad accounts; platform DB conversions = 0 new signups today   |
| Email         | 3 subscribers; drip at 0 sent — review before any manual trigger          |
| CRO           | Funnel: n/a; confirmed P0 = target-price input missing, compare page gated |
| Growth        | 146 users, 9 signups last 7 days, 0 retention data (no last_login column) |
