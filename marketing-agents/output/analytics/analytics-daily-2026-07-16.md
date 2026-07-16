## TicketScan Daily Dashboard — 2026-07-16

### Key Metrics (verified live from admin API)

| Metric                    | Today (6AM UTC) | Last 7 Days | Prior 7 Days | Trend |
|---------------------------|-----------------|-------------|--------------|-------|
| Unique Visitors           | n/a             | n/a         | n/a          | n/a   |
| New Signups               | 0 (6AM run)     | 20          | ~8           | ↑↑    |
| Watchlist Items Added     | n/a             | n/a         | n/a          | n/a   |
| Price Comparisons Run     | n/a             | n/a         | n/a          | n/a   |
| Newsletter Subscribers    | 0               | 0           | 0            | →     |
| Price Alerts Triggered    | 0               | 0           | 0            | →     |
| Drip Emails Sent          | 0               | 0           | 0            | →     |

_Traffic/sources/funnel: dark — no GA4 access, GTM has no conversion events defined._

---

### Totals (live snapshot, 2026-07-16T06:00 UTC)

| Metric                          | Count |
|---------------------------------|-------|
| Total registered users          | 166   |
| Total active watchlist items    | 178   |
| Total newsletter subscribers    | 3 (2 test, 1 real) |
| Total price history records     | 151   |
| Active price alerts armed       | 0 (all target_price null) |
| Drip emails ever sent           | 0     |

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

### Popular Events Being Tracked (top 5 by watch count)

All events show watch_count=2; no target prices set by any watcher.

1. **Noah Kahan: The Great Divide Tour** — Kia Center, Orlando (2 watches)
2. **Harry Styles: Together, Together** — Madison Square Garden, NYC (2 watches — but 6+ duplicate event IDs exist for same show; dedup bug ongoing)
3. **World Cup R16: W83 vs W84 (Match 93)** — AT&T Stadium, Arlington (2 watches)
4. **Ariana Grande - The Eternal Sunshine Tour** — Barclays Center, Brooklyn (2 watches)
5. **NBA Finals: TBD at New York Knicks (RD4 HM GM3)** — Madison Square Garden, NYC (2 watches)

---

### Price Tracking Status
- **Records:** 151 total (up from 0 as of early June — tracking is now live)
- **Events actively tracked:** 1 — "SELENA Tribute DREAMING OF YOU" at Gaslamp Long Beach
  - Price: $30.07 face / $38.19 with fees (fees ~27%)
  - Cron firing confirmed: records at 00:01, 04:01, 08:01 UTC on 7/16 ✓
- **All watchlist event prices:** still null (users added events but no target prices → alerts can't arm)

---

### Drip Campaign Status
- Emails sent ever: **0**
- Users in drip queue: 166 (all)
- Users ≥3 days post-signup (should have gotten Email 1): **~150+**
- Users ≥7 days (should have gotten Email 2): **~130+**
- Oldest overdue: users registered Jan 2026

_Do not auto-trigger drip-run — risks emailing real inboxes at scale._

---

### 🚨 Anomalies & Alerts

**🟢 POSITIVE — Signup surge:**
20 new signups in the last 7 days vs ~8/week average over prior weeks. 150% above baseline. Recent registrants include real email domains (gmail, yahoo, msn, icloud). Growth is real — origin unknown (no traffic source data).

**🟢 POSITIVE — Price tracking is live:**
151 price history records exist. Memory recorded 0 rows as of June. Cron job running every 4 hours and inserting records. Only 1 event is actively tracked (SELENA Tribute), but the infrastructure works.

**🔴 CRITICAL — Drip campaign never runs:**
0 drip emails delivered ever to any of 166 users. Users signed up in January are 180+ days overdue for a 30-day drip sequence. Blast risk is real — do not trigger blindly. Requires deliberate decision: reset sequence for all users, or start fresh from today.

**🔴 CRITICAL — Alert system inert:**
All 178 watchlist items have null target_price. The target price input doesn't exist in the UI (EventCard sends no targetPrice on add). Zero alerts can ever fire. Fix = one frontend input control.

**🟡 WARN — Harry Styles event dedup bug:**
"Harry Styles: Together, Together" at MSG shows under 6+ distinct event_id values in popular-events. Watch demand is split across duplicate listings. Dedup logic is not collapsing same-show entries.

**🟡 WARN — /api/admin/alerts endpoint HTTP 500:**
Still broken. Cannot retrieve alert fire history.

**🟡 INFO — Newsletter flat:**
3 subscribers (2 test, 1 real) — unchanged since at least June. Forms exist on blog/footer per earlier fix, but no new conversions observed.

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

GTM container loads but no tags/triggers/variables defined. Every UTM campaign and paid click is invisible. **Until GA4 is configured, all conversion data is dark.**

---

### Competitor Notes

No specific competitor intel available (no search access in this run). SeatGeek, StubHub, and Vivid Seats are actively advertising World Cup inventory as the tournament enters knockout rounds. Check competitor social + product pages manually if needed.

---

### Agent Feed Summary

For agents consuming this dashboard:

- **Content Agent:** Top trending events — Noah Kahan, Ariana Grande, World Cup R16. No real content performance data.
- **SEO Agent:** Organic traffic dark. Priority pages: /venues, /tickets hubs (live). /compare still login-gated (SEO risk).
- **Social Agent:** World Cup R16 and music tour content is resonating with watchlist users. No social referral data.
- **Paid Ads Agent:** No ad spend active. No paid attribution data. Status: $0 / no campaigns.
- **Email Agent:** Drip never runs; 0 conversions from email. 3 newsletter subs total.
- **CRO Agent:** Known P0s — alert target price input missing, compare page login-gated. No funnel % available.
- **Growth Agent:** 166 total users, 20 new this week (strong week). Retention unknown — no last_login or engagement data in schema.

---

_Data pulled: 2026-07-16 ~06:00 UTC. Sources: /api/admin/stats, /users, /newsletter, /popular-events, /drip-stats, /price-history. Traffic/funnel/page data: n/a (no GA4). /api/admin/alerts: HTTP 500 (broken)._
