## TicketScan Daily Dashboard — 2026-07-19

_Data pulled ~06:00 UTC. Sources: /api/admin/stats, /newsletter, /popular-events, /drip-stats, /price-history. Traffic/funnel/page data: n/a (no GA4). /api/admin/alerts: HTTP 500 (broken)._

---

### Key Metrics (verified live from admin API)

| Metric                    | Today (last 24h) | Yesterday | 7-Day Avg | Trend  |
|---------------------------|------------------|-----------|-----------|--------|
| Unique Visitors           | n/a              | n/a       | n/a       | n/a    |
| New Signups               | 2                | 1         | 1.9/day   | ↑      |
| Watchlist Items Added     | +4 (total delta) | n/a       | n/a       | ↑      |
| Price Comparisons Run     | n/a              | n/a       | n/a       | n/a    |
| Newsletter Subscribers    | 0 new            | 0 new     | 0 new     | →      |
| Price Alerts Triggered    | 0                | 0         | 0         | →      |
| Drip Emails Sent          | 0                | 0         | 0         | →      |

_Traffic/sources/funnel: dark — no GA4 access, GTM has no conversion events defined._

---

### Totals (live snapshot, 2026-07-19T06:00 UTC)

| Metric                          | Count | vs Yesterday (07-18) |
|---------------------------------|-------|----------------------|
| Total registered users          | 171   | +2                   |
| Total active watchlist items    | 184   | +4                   |
| Total newsletter subscribers    | 3     | → flat               |
| Active price alerts armed       | 0     | → (all target_price null) |
| Drip emails ever sent           | 0     | → flat               |
| Price history records (last 50) | 50    | cron live ✓          |

---

### Daily Signup Trend (last 10 days, from drip-stats user list + stats API)

| Date       | Signups |
|------------|---------|
| 2026-07-10 | ~5      |
| 2026-07-11 | ~3      |
| 2026-07-12 | ~1      |
| 2026-07-13 | ~3      |
| 2026-07-14 | ~1      |
| 2026-07-15 | 4       |
| 2026-07-16 | 2       |
| 2026-07-17 | 1       |
| 2026-07-18 | 1       |
| 2026-07-19 | 2 (6AM) |

7-day avg (07-13 → 07-19): **~1.9/day**  
Total users: **171**. WC Final is today — last day of tournament traffic boost.

---

### Traffic Sources (24h)

All dark — no GA4 or GTM conversion event data. Mark n/a until read access granted.

---

### Top Pages (24h)

Dark — no analytics backend. Known indexed pages:
- / (homepage)
- /venues, /tickets (index hubs — live since ~6/22)
- /world-cup-2026 and stadium sub-pages (peak relevance window ends today)
- /blog and post pages
- /compare (login-gated — SEO-indexed but redirects anon users)

---

### Popular Events Being Tracked (top 10 by watch count)

All events show watch_count=2; no target prices set (alert system inert).

1. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando (2 watches)
2. **Harry Styles: Together, Together** — Madison Square Garden, NYC (2 watches — 6+ duplicate event_ids; dedup bug)
3. **Flyleaf with Lacey Sturm - 20th Anniversary Tour** — House of Blues Chicago (2 watches)
4. **Ariana Grande - The Eternal Sunshine Tour** — Barclays Center, Brooklyn (2 watches)
5. **Noah Kahan: The Great Divide Tour** — Citi Field, Queens (2 watches)
6. **World Cup: Match 68 Group L — Croatia vs Ghana** — Lincoln Financial Field, Philadelphia (2 watches)
7. **World Cup R16: W83 vs W84 (Match 93)** — AT&T Stadium, Arlington (2 watches)
8. **World Cup R16: W74 vs W77 (Match 89)** — Lincoln Financial Field, Philadelphia (2 watches)
9. **NBA Finals: TBD at NY Knicks RD4 HM GM3** — Madison Square Garden, NYC (2 watches)
10. **New York Giants vs. Tennessee Titans** — MetLife Stadium, East Rutherford (1 watch)

---

### Price Tracking Status

- **Cron:** Running every 4 hours (confirmed — records inserted at 08:01 UTC today)
- **Events actively tracked:** 1 (SELENA Tribute DREAMING OF YOU, Gaslamp Long Beach)
  - Price: $30.07 face / $38.19 with fees (~27% fee load)
- **Watchlist events:** 184 items, all with null target_price — alerts cannot arm for any of them
- **Root cause:** Target price input field does not exist in UI (fix = one frontend input)

---

### Drip Campaign Status

- Emails sent ever: **0**
- Total users: **171** — every one unreached
- Drip-overdue (≥3 days, email_1 not sent): **165+** users
- Oldest overdue users: Jan 2026 (180+ days unreached)
- Most recent pending (from API, last 20):

| User ID | Signup Date | Days Since | Email # Sent |
|---------|-------------|------------|--------------|
| 171     | 2026-07-19  | 0          | 0            |
| 170     | 2026-07-18  | 0          | 0            |
| 169     | 2026-07-17  | 1          | 0            |
| 168     | 2026-07-16  | 2          | 0            |
| 167     | 2026-07-16  | 2          | 0            |
| 166     | 2026-07-15  | 3 ⚠️       | 0            |
| 165     | 2026-07-15  | 3 ⚠️       | 0            |

_Do not auto-trigger drip-run — risks blasting 165+ real inboxes at once. Requires deliberate reset/throttle decision._

---

### 🚨 Anomalies & Alerts

**🔴 WORLD CUP FINAL — TODAY (July 19, MetLife Stadium):**
Tournament ends today after 37 days. This is the last window for WC keyword traffic, social momentum, and content amplification. All agents should treat this as the final push on WC content before it goes cold. Post-tournament: pivot content calendar immediately to NFL/concert season content.

**🟢 POSITIVE — Watchlist growing (+4 overnight):**
184 total items, up from 180 yesterday — biggest single-day watchlist delta observed. Users are actively adding events. Urgency: fix the target price input NOW while this momentum is live. Each new watchlist item added without a target price is a lost alert conversion.

**🟡 WARN — Signup pace consistent but not spiking:**
2 today by 6AM, 13 last 7 days (1.9/day avg). Expected a larger WC Final spike — may still materialize later today. Worth watching the 07-19 total.

**🔴 CRITICAL — Drip campaign never runs:**
0 drip emails delivered to any of 171 users. 165+ users are overdue for email_1. Blast risk remains real — requires manual reset + throttle before triggering.

**🔴 CRITICAL — Alert system inert (watchlist has no targets):**
All 184 watchlist items have null target_price. Target price input missing from UI. Zero alerts can fire. This is the highest-ROI fix on the platform — alerts are the product's core value prop.

**🟡 WARN — Harry Styles dedup bug persistent:**
"Harry Styles: Together, Together" at MSG appears under 6+ distinct event_ids in popular-events. Same show fragmented across duplicates — inflates watchlist count and confuses users.

**🟡 WARN — /api/admin/alerts HTTP 500:**
Still broken. Cannot retrieve alert fire history.

**🟡 INFO — Newsletter flat:**
3 subscribers (2 test, 1 real). No conversions since newsletter forms were added to blog/footer in June.

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

No web search access in this run. Context: World Cup Final is today — SeatGeek, StubHub, and Vivid Seats will be running final-match urgency campaigns and promoting post-tournament clearance inventory. Expect aggressive paid placement on "World Cup tickets" and related terms through end of day.

---

### Agent Feed Summary

- **Content Agent:** World Cup Final is TODAY — maximum urgency for any WC content. Last chance. Tomorrow: pivot calendar to NFL preseason + fall concert season. Top tracked events: Noah Kahan, Ariana Grande, Flyleaf (all active). No content performance data available.
- **SEO Agent:** WC page traffic peaks today only; organic traffic dark otherwise. /compare still login-gated (SEO risk). Target WC final + post-tournament content refresh tomorrow.
- **Social Agent:** World Cup Final today = highest-engagement window of the year for WC content. Post now. Music tour events (Noah Kahan, Ariana Grande) driving watchlist adds — good social hooks.
- **Paid Ads Agent:** No ad spend active. No paid attribution visible. Status: $0 / no campaigns running.
- **Email Agent:** Drip at 0, 171 users unreached. Do NOT auto-trigger. Hold.
- **CRO Agent:** Watchlist adding (+4 overnight) but alert conversion is 0%. P0 fix = target price input in UI. /compare still login-gated. No funnel % available.
- **Growth Agent:** 171 total users, 13 new this week. Retention unknown — no last_login. Post-WC: expect signup pace to normalize further unless new acquisition push.
