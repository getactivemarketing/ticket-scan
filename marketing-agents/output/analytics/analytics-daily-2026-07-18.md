## TicketScan Daily Dashboard — 2026-07-18

_Data pulled ~06:00 UTC. Sources: /api/admin/stats, /users, /newsletter, /popular-events, /drip-stats, /price-history. Traffic/funnel/page data: n/a (no GA4). /api/admin/alerts: HTTP 500 (broken)._

---

### Key Metrics (verified live from admin API)

| Metric                    | Today (last 24h) | Last 7 Days | Trend  |
|---------------------------|------------------|-------------|--------|
| Unique Visitors           | n/a              | n/a         | n/a    |
| New Signups               | 1                | 14          | →      |
| Watchlist Items Added     | n/a              | n/a         | n/a    |
| Price Comparisons Run     | n/a              | n/a         | n/a    |
| Newsletter Subscribers    | 0 new            | 0 new       | →      |
| Price Alerts Triggered    | 0                | 0           | →      |
| Drip Emails Sent          | 0                | 0           | →      |

_Traffic/sources/funnel: dark — no GA4 access, GTM has no conversion events defined._

---

### Totals (live snapshot, 2026-07-18T06:00 UTC)

| Metric                          | Count | vs Yesterday |
|---------------------------------|-------|--------------|
| Total registered users          | 169   | +3 since 7/16 run |
| Total active watchlist items    | 180   | +2 since 7/16 run |
| Total newsletter subscribers    | 3     | → flat       |
| Active price alerts armed       | 0     | → (all target_price null) |
| Drip emails ever sent           | 0     | → flat       |
| Price history records (last 50) | 50    | cron live ✓  |

---

### Daily Signup Trend (last 10 days, from user list)

| Date       | Signups |
|------------|---------|
| 2026-07-09 | 3       |
| 2026-07-10 | 5       |
| 2026-07-11 | 3       |
| 2026-07-12 | 1       |
| 2026-07-13 | 3       |
| 2026-07-14 | 1       |
| 2026-07-15 | 4       |
| 2026-07-16 | 2       |
| 2026-07-17 | 1       |
| 2026-07-18 | 0 (6AM run) |

7-day avg (07-11 → 07-17): **~2.1/day** — down from the 07-08 through 07-10 spike (5-3-3). Growth real, pace normalizing post-tournament surge.

---

### Traffic Sources (24h)
All dark — no GA4 or GTM conversion event data. Mark n/a until read access granted.

---

### Top Pages (24h)
Dark — no analytics backend. Known indexed pages:
- / (homepage)
- /venues, /tickets (index hubs — live since ~6/22)
- /world-cup-2026 and stadium sub-pages
- /blog and post pages
- /compare (login-gated — SEO-indexed but redirects anon users)

---

### Popular Events Being Tracked (top 8 by watch count)

All events show watch_count=2; no target prices set by any watcher (alert system inert).

1. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando (2 watches)
2. **Flyleaf with Lacey Sturm - 20th Anniversary Tour** — House of Blues Chicago (2 watches)
3. **World Cup R16: W83 vs W84 (Match 93)** — AT&T Stadium, Arlington (2 watches)
4. **Ariana Grande - The Eternal Sunshine Tour** — Barclays Center, Brooklyn (2 watches)
5. **Noah Kahan: The Great Divide Tour** — Citi Field, Queens (2 watches)
6. **Harry Styles: Together, Together** — Madison Square Garden, NYC (2 watches — appears as multiple duplicate event_ids; dedup bug ongoing)
7. **NBA Finals: TBD at NY Knicks RD4 HM GM3** — Madison Square Garden, NYC (2 watches)
8. **Harry Styles: Together, Together** — MSG duplicate entry (2 watches)

---

### Price Tracking Status

- **Cron:** Running every 4 hours (confirmed — records at 00:01, 04:01, 08:01 UTC daily)
- **Records today (07-18):** 3 so far (08:01 UTC run confirmed)
- **Records yesterday (07-17):** 6 ✓
- **Events actively tracked:** 1 — "SELENA Tribute DREAMING OF YOU" at Gaslamp Long Beach
  - Price: $30.07 face / $38.19 with fees (~27% fee load)
- **Watchlist events:** 180 items, all with null target_price — alerts can't arm for any of them

---

### Drip Campaign Status

- Emails sent ever: **0**
- Total users in queue: **169**
- Drip-overdue users (≥3 days post-signup, email_1 not sent): **~160+**
- Recent pending users from API: IDs 150–169 all have `last_email_sent: 0`
- Oldest overdue: users registered Jan 2026 (180+ days)

_Do not auto-trigger drip-run — risks blasting all real inboxes at once._

---

### 🚨 Anomalies & Alerts

**🌍 TOURNAMENT CONTEXT — World Cup Final TOMORROW (July 19):**
The 2026 World Cup wraps up after 37 days. Final match is July 19 at MetLife Stadium. This is the last day to ride WC keyword traffic and social momentum before it collapses. Social, SEO, and content agents should treat today as peak WC engagement window.

**🟡 WARN — Signup pace normalizing:**
14 signups in the last 7 days (2.1/day avg). Down from the ~3-5/day spike seen July 8-10. Still above the ~8/week baseline from May-June. Not alarming, but the WC traffic surge is tapering off as tournament ends.

**🔴 CRITICAL — Drip campaign never runs:**
0 drip emails delivered to any of 169 users. Users from January 2026 are 180+ days overdue. Blast risk is real — requires deliberate reset decision before triggering.

**🔴 CRITICAL — Alert system inert:**
All 180 watchlist items have null target_price. Target price input doesn't exist in the UI. Zero alerts can ever fire. Fix = one frontend input control.

**🟡 WARN — Harry Styles event dedup bug:**
"Harry Styles: Together, Together" at MSG appears under 2+ distinct event_ids in popular-events. Same show split across duplicate listings.

**🟡 WARN — /api/admin/alerts endpoint HTTP 500:**
Still broken. Cannot retrieve alert fire history.

**🟡 INFO — Newsletter completely flat:**
3 subscribers (2 test, 1 real) — unchanged for months despite blog/footer forms existing. No new conversions observed since newsletter fixes in June.

---

### Tracking Validation

| Signal                          | Status |
|---------------------------------|--------|
| GTM (GTM-T476F9S4) in layout.tsx | ✓ Installed |
| GA4 / custom conversion events  | ✗ None defined — funnel is blind |
| Signup event                    | ✗ Not instrumented |
| Watchlist add event             | ✗ Not instrumented |
| Price comparison event          | ✗ Not instrumented |
| Newsletter subscribe event      | ✗ Not instrumented |
| UTM capture                     | Unknown — no GA4 to surface it |
| Price cron firing               | ✓ Live — records inserted every 4h |

GTM container loads but no tags/triggers/variables defined. Every UTM campaign and paid click is invisible.

---

### Competitor Notes

No search access in this run. Context: World Cup final is tomorrow — SeatGeek, StubHub, and Vivid Seats will be pushing final match content and post-tournament inventory sales hard today. Check competitor social feeds manually for last-day WC promotions.

---

### Agent Feed Summary

- **Content Agent:** World Cup Final tomorrow — last shot at WC-momentum content. Top events: Noah Kahan, Ariana Grande, Flyleaf. No real content performance data.
- **SEO Agent:** Organic traffic dark. WC-related pages have peak window today only. /compare still login-gated (SEO risk — anon visitors bounced before seeing value).
- **Social Agent:** World Cup Final tomorrow = maximum urgency for any WC-adjacent post. Music tour events (Noah Kahan, Ariana Grande) driving watchlist adds.
- **Paid Ads Agent:** No ad spend active. No paid attribution. Status: $0 / no campaigns.
- **Email Agent:** Drip at 0. 169 users never emailed. Do not auto-trigger.
- **CRO Agent:** P0s unchanged — target price input missing, /compare login-gated. No funnel % available.
- **Growth Agent:** 169 total users, 14 new this week. Pace slowing as WC tournament ends. Retention unknown — no last_login in schema.
