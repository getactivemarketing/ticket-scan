# TicketScan Daily Dashboard — 2026-06-13

**Data source:** `/api/admin/*` (admin key authenticated ✅ — first successful auth; prior runs got 401).
**Note:** No GA4 read access and GTM has no conversion events wired, so traffic-source / page-level / bounce metrics are genuinely unmeasurable. They are marked **n/a** below, not estimated.

---

### Key Metrics
| Metric                   | Value (live) | Source / Trend |
|--------------------------|--------------|----------------|
| Total registered users   | **115**      | stats          |
| New signups (this week)  | **10**       | stats          |
| New signups (last 24h)   | ~1           | latest signup 2026-06-12T16:33 (b.shaan1021) |
| Total watchlist items    | **145**      | stats          |
| Watchlist added (24h)    | **0**        | latest add 2026-06-10 |
| Active alerts (armed)    | **0**        | every target_price is null |
| Alerts triggered (all-time) | **0**     | stats          |
| Active newsletter subs   | **3**        | only 1 non-test (homepage) |
| Price history records    | **0**        | price tracking inert |
| Drip emails sent (all-time) | **0**     | drip-stats empty |

### Traffic Sources / Top Pages (24h)
**n/a — no analytics backend.** GTM (GTM-T476F9S4) loads but fires no conversion events; no GA4 access. Cannot report visitors, sources, bounce, or funnel %. Do not fabricate these downstream.

### Popular Events Being Tracked (by watch_count)
1. Harry Styles: Together, Together — Madison Square Garden, NYC (multiple event_ids, 2 each)
2. Flyleaf 20th Anniversary Tour — House of Blues Chicago (2)
3. NBA Finals: Knicks RD4 GM3 — Madison Square Garden (2)
4. World Cup R32/R16 — AT&T Stadium, Arlington (2)
5. Noah Kahan: The Great Divide Tour — Kia Center, Orlando

All watched events have **null target_price** → none can arm a price alert.

---

### 🚨 Anomalies & Alerts
- **`/api/admin/alerts` returns HTTP 500** ("Failed to get alerts") — endpoint is broken. Flag to backend.
- **Alert pipeline severed at source:** 145 watchlist items, 0 with a target_price → activeAlerts=0, 0 alerts ever triggered. The price-drop value prop is non-functional end to end. [[watchlist-no-targets-alerts-cant-arm]]
- **Price tracking inert:** price_history table is empty (0 rows). Any price/savings figure anywhere is fabricated. [[price-history-empty-alerts-broken]]
- **Drip campaign has sent 0 emails ever** despite many overdue users (8+ days since signup, last_email_sent=0). Do not blind-trigger — risks blasting real inboxes. [[drip-campaign-never-sends]]
- **Newsletter near-zero:** 3 subscribers total, 2 are test rows → 1 real subscriber against 115 users. Signup→subscribe opt-in still not wired into /register. [[newsletter-conversion-rootcause]]

### Tracking Validation
- Admin API auth: **working** (key authenticates, 200s on stats/users/watchlist/newsletter/activity/popular-events/drip-stats/price-history).
- Broken: `/api/admin/alerts` (500).
- GTM present, **no conversion events** (signup / watchlist-add / compare / subscribe all unmeasured). GA4 read access: none.
- Net: behavioral/funnel analytics remain unmeasurable until conversion events ship or GA4 access is granted.

### Feed to Other Agents
- **Content/SEO/Social:** Trending = Harry Styles (MSG), NBA Finals (Knicks), WC at AT&T/SoFi, Noah Kahan (Orlando). Post only verified facts (teams/dates/venues) — no invented prices. [[social-agent-price-ledger-fabrication]]
- **CRO:** Top funnel break is alerts-can't-arm + compare gating; ship fixes, don't re-analyze. No funnel %s exist.
- **Email:** Drip = 0 sent; newsletter opt-in unwired. Don't report open/CTR.
- **Paid/Growth:** No paid spend, no traffic attribution available.
