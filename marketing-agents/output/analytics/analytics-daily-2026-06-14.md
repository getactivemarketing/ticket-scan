## TicketScan Daily Dashboard — 2026-06-14

**Data source:** Live admin API (`/api/admin/*`), pulled 2026-06-14 ~07:1x UTC. Admin key works (HTTP 200) — first day this run has had authenticated access to real platform metrics.
**Not measurable:** visitors, traffic sources, top pages, bounce rates, price-comparison runs. GTM container `GTM-T476F9S4` loads, but there are **zero** conversion-event pushes in `web/src` and no GA4 read access. These rows are marked n/a, not estimated.

### Key Metrics (24h)
| Metric                    | Today | Yesterday | 7-Day Avg | Trend |
|---------------------------|-------|-----------|-----------|-------|
| Unique Visitors           | n/a   | n/a       | n/a       | —     |
| New Signups               | 1*    | 2         | ~1.6/day  | →     |
| Watchlist Items Added     | 1     | 0         | ~2/day    | →     |
| Price Comparisons Run     | n/a   | n/a       | n/a       | —     |
| Newsletter Subscribers    | 0     | 0         | 0         | →     |
| Price Alerts Triggered    | 0     | 0         | 0         | →     |
| Drip Emails Sent          | 0     | 0         | 0         | →     |

\* Two independent sources (users list + activity feed) show **1** signup on 06-14. The platform's own `stats.usersToday` counter returns **3** — see Anomalies. 7-day signups = 11, which matches `usersThisWeek=11` exactly (both sources agree).

### Totals (verified from `/api/admin/stats`)
- Total registered users: **118** (11 this week, +1 today)
- Total active watchlist items: **146**
- Total newsletter subscribers (active): **3**
- Total price history records: **0**
- Active alerts armed: **0** | Triggered alerts (all time): **0** | Favorites: **0**

### Traffic Sources (24h)
n/a — no GA4 read access; GTM has no source/UTM attribution events wired up. Cannot report visitors, signups, or conversion by source without fabricating. Unblock = GA4 read access or server-side event instrumentation.

### Top Pages (24h)
n/a — no pageview analytics available to this run.

### Popular Events Being Tracked (from `/api/admin/popular-events`)
1. Harry Styles: Together, Together — Madison Square Garden, New York (watch_count 2)
2. Flyleaf w/ Lacey Sturm – 20th Anniversary Tour — House of Blues Chicago (watch_count 2)
3. NBA Finals: Knicks RD4 GM3 (TBD) — Madison Square Garden, New York (watch_count 2)
4. World Cup fixtures (multiple, e.g. Match 39 Group G) — appearing in recent watchlist adds
5. JOJI: SOLARIS — Kia Center, Orlando (newest add, 06-14)

Note: every popular event shows `target=null` — nobody is setting target prices (see Anomalies).

### 🚨 Anomalies & Alerts
1. **Signup counter mismatch (NEW).** `stats.usersToday=3` but users-list + activity-feed both show only **1** signup on 06-14. Weekly figures reconcile perfectly (11=11), so the discrepancy is isolated to the "today" counter — likely a rolling-24h or timezone-boundary artifact catching late 06-13 signups. Flag to backend; don't trust `usersToday` for daily reporting until reconciled. Used the corroborated value (1) above.
2. **`/api/admin/alerts` returns HTTP 500** ("Failed to get alerts"). Endpoint is erroring, not empty — separate from the fact that 0 alerts exist. Worth a backend look.
3. **0 of 146 watchlist items have a target_price** (all visible items + every popular event show target=null). The price-alert loop is severed at the source: no targets → 0 armed alerts → 0 triggers possible. This is the single highest-leverage product gap. Confirms [[watchlist-no-targets-alerts-cant-arm]].
4. **price_history is empty (0 rows).** Price tracking has recorded nothing platform-wide, so any price/trend/savings figure anywhere on the site or in other agents' output would be fabricated. Confirms [[price-history-empty-alerts-broken]].
5. **Drip campaign has sent 0 emails ever.** `drip-stats.stats=[]` and all 20 pending users show `last_email_sent=0`. 20 users are overdue. Do not blind-trigger drip-run (risk of blasting real inboxes). Confirms [[drip-campaign-never-sends]].
6. **Newsletter is effectively dead.** Only 3 active subscribers, newest from 2026-02-01; 2 of the 3 are test addresses (`test@example.com`, internal). Zero real organic signups in months despite forms now on blog/footer.
7. **Popular-events duplication.** Harry Styles MSG appears as 4+ separate rows with distinct event_ids for what is the same show/run — dedup is not collapsing same-event/same-venue listings in this view.

### Competitor Quick Check
No notable competitor activity surfaced this run (no monitoring feed wired up; nothing significant to report).

### Tracking Validation
See `tracking-validation-2026-06-14.md`. Headline: GTM loads but **no** signup/watchlist/compare/subscribe events are instrumented in source — conversion funnel is unmeasurable client-side.

### Feed to Other Agents (today's ground truth)
- **All agents:** No visitor/traffic/funnel analytics exist. Report counts from the API only; never invent %s, bounce rates, or source breakdowns.
- **Content/SEO:** Top watched = Harry Styles (MSG), World Cup fixtures, NBA Finals (NYK), Flyleaf (Chicago), JOJI (Orlando). No pageview data to rank pages.
- **Email:** Drip = 0 sent / 20 overdue (don't blind-trigger). Newsletter = 3 subs (mostly tests). No open/CTR data.
- **CRO/Growth:** 118 users, 146 watchlist items, but 0 targets set and 0 alerts armed — funnel breaks at "set a target." Ship target-setting before optimizing anything upstream. No retention/churn data (no last_login).
- **Social/Paid:** Post only verified facts (teams/dates/venues). No prices (price_history empty). No paid spend/attribution exists.
