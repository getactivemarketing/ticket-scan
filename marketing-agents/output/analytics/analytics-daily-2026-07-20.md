## TicketScan Daily Dashboard — 2026-07-20

_Data pulled ~06:00 UTC. Sources: /api/admin/stats, /newsletter, /popular-events, /drip-stats, /price-history. Traffic/funnel/page data: n/a (no GA4). /api/admin/alerts: HTTP 500 (broken)._

---

### Key Metrics (verified live from admin API)

| Metric                    | Today (last 24h) | Yesterday | 7-Day Avg | Trend  |
|---------------------------|------------------|-----------|-----------|--------|
| Unique Visitors           | n/a              | n/a       | n/a       | n/a    |
| New Signups               | 2                | 2         | 1.9/day   | →      |
| Watchlist Items Added     | 0 (flat)         | +4        | n/a       | ↓      |
| Price Comparisons Run     | n/a              | n/a       | n/a       | n/a    |
| Newsletter Subscribers    | 0 new            | 0 new     | 0 new     | →      |
| Price Alerts Triggered    | 0                | 0         | 0         | →      |
| Drip Emails Sent          | 0                | 0         | 0         | →      |

_Traffic/sources/funnel: dark — no GA4 access, GTM has no conversion events defined._

---

### Totals (live snapshot, 2026-07-20T06:00 UTC)

| Metric                          | Count | vs Yesterday (07-19) |
|---------------------------------|-------|----------------------|
| Total registered users          | 173   | +2                   |
| Total active watchlist items    | 184   | → flat               |
| Total newsletter subscribers    | 3     | → flat               |
| Active price alerts armed       | 0     | → (all target_price null) |
| Drip emails ever sent           | 0     | → flat               |
| Price history records (last 50) | 175   | +3 (cron running ✓)  |

---

### Daily Signup Trend (last 10 days, from drip-stats + stats API)

| Date       | Signups |
|------------|---------|
| 2026-07-11 | ~3      |
| 2026-07-12 | ~1      |
| 2026-07-13 | 3       |
| 2026-07-14 | 1       |
| 2026-07-15 | 4       |
| 2026-07-16 | 2       |
| 2026-07-17 | 1       |
| 2026-07-18 | 1       |
| 2026-07-19 | 2       |
| 2026-07-20 | 2 (6AM) |

7-day avg (07-14 → 07-20): **~1.9/day** — holding steady post-WC Final.  
Total users: **173**. World Cup tournament ended July 19; acquisition pace unchanged so far.

---

### Traffic Sources (24h)

All dark — no GA4 or GTM conversion event data. Mark n/a until read access granted.

---

### Top Pages (24h)

Dark — no analytics backend. Known indexed pages:
- / (homepage)
- /venues, /tickets (index hubs — live since ~6/22)
- /world-cup-2026 and stadium sub-pages (post-tournament — relevance dropping)
- /blog and post pages
- /compare (login-gated — SEO-indexed but redirects anon users; top CRO P0)

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

_WC matches still in watchlist suggest users haven't cleaned up post-tournament. Music (Noah Kahan, Ariana Grande) and Harry Styles remain most-active non-WC categories._

---

### Price Tracking Status

- **Cron:** Running every 4 hours (confirmed — records at 00:01, 04:01, 08:01 UTC today)
- **Events actively tracked:** 1 (SELENA Tribute DREAMING OF YOU, Gaslamp Long Beach)
  - Price: $30.07 face / $38.19 with fees (~27% fee load) — stable, no change in 8+ days
- **Watchlist events:** 184 items, all with null target_price — alerts cannot arm for any of them
- **Root cause:** Target price input field does not exist in UI (fix = one frontend input)

---

### Drip Campaign Status

- Emails sent ever: **0**
- Total users: **173** — every one unreached
- Drip-overdue (≥3 days, email_1 not sent): **167+** users
- Most recent pending (from API snapshot):

| User ID | Signup Date | Days Since | Email # Sent |
|---------|-------------|------------|--------------|
| 173     | 2026-07-20  | 0          | 0            |
| 172     | 2026-07-19  | 1          | 0            |
| 171     | 2026-07-19  | 1          | 0            |
| 170     | 2026-07-18  | 2          | 0            |
| 169     | 2026-07-17  | 3 ⚠️       | 0            |
| 168     | 2026-07-16  | 4 ⚠️       | 0            |
| 167     | 2026-07-16  | 4 ⚠️       | 0            |
| 166     | 2026-07-15  | 5 ⚠️       | 0            |

_Do not auto-trigger drip-run — risks blasting 167+ real inboxes at once. Requires deliberate reset/throttle decision._

---

### 🚨 Anomalies & Alerts

**🟡 INFO — World Cup tournament over (ended 2026-07-19):**
WC Final was yesterday. World Cup keyword traffic will drop sharply over the next 48–72 hours. All agents should pivot content focus to: NFL preseason (kicks off late July), fall concert season (arena tours), and back-to-school event season. WC landing pages remain indexed — keep them live but stop creating new WC content.

**🟡 WARN — Watchlist additions dropped to 0 today (after +4 yesterday):**
184 items flat. Yesterday's surge may have been WC Final curiosity; no new tracking activity this morning. The watchlist-growth signal needs the target price UI fix to convert intent to alert value.

**🟢 POSITIVE — Signup pace holding at 2/day post-WC:**
Signups did not drop off with the tournament ending (2 today, 2 yesterday). Organic acquisition appears to have a base rate independent of WC traffic. 7-day avg remains ~1.9/day.

**🔴 CRITICAL — Drip campaign never runs:**
0 drip emails delivered to any of 173 users. 167+ users are overdue for email_1. Every day this sits broken, user relationships deteriorate. Blast risk remains real — requires manual reset + throttle before triggering.

**🔴 CRITICAL — Alert system inert (watchlist has no targets):**
All 184 watchlist items have null target_price. Target price input missing from UI. Zero alerts can fire. This is the highest-ROI fix on the platform — alerts are the core value proposition.

**🟡 WARN — Harry Styles dedup bug persistent:**
"Harry Styles: Together, Together" at MSG still appears under 6+ distinct event_ids. Same show fragmented — inflates watchlist count and confuses users.

**🟡 WARN — /api/admin/alerts HTTP 500:**
Still broken. Cannot retrieve alert fire history.

**🟡 INFO — Newsletter flat:**
3 subscribers (2 test accounts, 1 real). No new conversions since newsletter forms were added to blog/footer in June.

---

### Tracking Validation

| Signal                           | Status |
|----------------------------------|--------|
| GTM (GTM-T476F9S4) in layout.tsx | ✓ Installed |
| GA4 / custom conversion events   | ✗ None defined — funnel is blind |
| Signup event                     | ✗ Not instrumented |
| Watchlist add event              | ✗ Not instrumented |
| Price comparison event           | ✗ Not instrumented |
| Newsletter subscribe event       | ✗ Not instrumented |
| UTM capture                      | Unknown — no GA4 to surface it |
| Price cron firing                | ✓ Live — records inserted every 4h |

GTM container loads but no tags/triggers/variables defined. Every UTM campaign and paid click is invisible.

---

### Competitor Notes

No web search access in this run. Post-WC context: SeatGeek, StubHub, and Vivid Seats will immediately pivot marketing to NFL preseason inventory and fall concert season. Expect aggressive email campaigns to WC visitors promoting next events. TicketScan should move fast on this same pivot — post-WC user intent is "what's next?" not "World Cup tickets."

---

### Agent Feed Summary

- **Content Agent:** WC content window is CLOSED as of yesterday. Immediately pivot calendar to NFL preseason (first preseason games ~July 25), fall concert tours (Noah Kahan, Ariana Grande — already in watchlist), and back-to-school event planning content. Top tracked non-WC events: Noah Kahan, Ariana Grande, Harry Styles (dedup needed), Flyleaf.
- **SEO Agent:** WC pages will lose traffic rapidly — keep indexed but deprioritize new WC content. Organic traffic dark. /compare still login-gated (SEO risk). Focus: fall event long-tail keywords.
- **Social Agent:** Post-tournament pivot content needed today. "What's the next big ticket event?" hooks will resonate. Noah Kahan + Ariana Grande in watchlist = good social proof. No price data to use — post verified event info only.
- **Paid Ads Agent:** No ad spend active. No paid attribution visible. Status: $0 / no campaigns running.
- **Email Agent:** Drip at 0, 173 users unreached. Do NOT auto-trigger. Hold for manual throttle decision.
- **CRO Agent:** Watchlist flat today (+0) after +4 yesterday. Alert conversion still 0%. P0 fix = target price input. /compare still login-gated. No funnel % available.
- **Growth Agent:** 173 total users, 13 new this week (1.9/day avg). Post-WC: signup rate test — does it hold at 1.9/day without tournament traffic boost? Watch next 3 days. Retention unknown — no last_login.
