# Growth Daily — 2026-06-25

> All figures pulled live today from `/api/admin/stats` and `/api/admin/drip-stats`. Segments that depend on visit recency are marked **n/a** — there is no `last_login` column in the schema, so "active / at-risk / churned by visit" cannot be computed. Not estimated, not invented.

---

## User Health

| Segment                             | Count | vs 6/24 | Source / Notes |
|-------------------------------------|-------|---------|----------------|
| Total users                         | 132   | +2      | `stats.totalUsers` |
| New (last 7 days)                   | 11    | +2      | `stats.usersThisWeek` |
| New (today)                         | 2     | 0       | `stats.usersToday` |
| Total watchlist items               | 160   | +1      | `stats.totalWatchlistItems` |
| With an active price alert          | **0** | 0       | `stats.activeAlerts=0` across all 132 users |
| Active newsletter subscribers       | 3     | 0       | `stats.activeSubscribers` |
| Active / At-risk / Churned by visit | n/a   | —       | no `last_login` field — uncomputable |

**Day-over-day:** +2 signups (gimlithepirate@gmail.com, areola3@sbcglobal.net). One activated within minutes; one bounced at 0 items.

---

## Activation Gap

**Last-7-day cohort (11 users):** Verified from activity log + drip-stats watchlist cross-reference:

| User | Signup | Watchlist items | Activated? |
|------|--------|-----------------|------------|
| gimlithepirate@gmail.com | 6/25 | 1 | ✓ |
| areola3@sbcglobal.net | 6/24 | 0 | ✗ |
| wvolz8926@gmail.com | 6/23 | 0 | ✗ |
| allyleblanc@gmail.com | 6/23 | 0 | ✗ |
| vince12000000@gmail.com | 6/23 | 2 | ✓ |
| meghanheindel1@gmail.com | 6/22 | 1 | ✓ |
| starmanspiff@protonmail.com | 6/21 | 0 | ✗ |
| accounts@edwintrejo.com | 6/21 | 4 | ✓ |
| jerrykielbasa@gmail.com | 6/20 | 1 | ✓ |
| gmalzberg@gmail.com | 6/20 | 1 | ✓ |
| rodaguirre5@gmail.com | 6/18 | 0 (not in activity log) | ✗ |

**Activation rate this week: 6/11 = 55%.** Five users signed up and added nothing — no watchlist, no engagement signal.

Structural activation ceiling: **everyone who built a watchlist has 0 armed alerts.** Watchlist → alert conversion is 0% across the full base (160 items, every `target_price: null`). The target-price input doesn't exist in the UI, so no user can arm an alert regardless of activation. Existing active users are stuck at the same wall as churned ones. See `watchlist-no-targets-alerts-cant-arm`.

---

## Churn Signals

- **Unsubscribes today:** 0 (3 subscribers, unchanged since yesterday).
- **At-risk / churned by visit:** n/a — no `last_login` column.
- **Alert fatigue candidates:** 0 — impossible by construction; `triggeredAlerts: 0` (ever), so no user has received any price-drop alert to fatigue on.
- **Drip status:** Still the most important signal. 20 users in queue, `drip-stats.stats: []` — **0 drip emails sent, ever.** The oldest pending user (dilanozusta@gmail.com) is now at **Day 14** — missed email 1 (Day 3), email 2 (Day 7), and now email 3 window (Day 14) is opening with no send path working. Every new user gets zero lifecycle email touch. This is the single largest retention leak on the platform.

### Users crossing critical drip thresholds today

| User | Days since signup | Email milestone due |
|------|-------------------|---------------------|
| dilanozusta@gmail.com | 14 | Email 1 + Email 2 both overdue; Email 3 threshold reached |
| kellileeriach@yahoo.com | 13 | Email 2 overdue |
| b.shaan1021@gmail.com | 12 | Email 2 overdue |
| p1prez@live.com | 11 | Email 2 overdue |
| olgajim3@gmail.com | 11 | Email 2 overdue |
| l.ilyman.de.rson.8.13@googlemail.com | 11 | Email 2 overdue |
| webbercycle@gmail.com | 10 | Email 2 overdue |

---

## Actions Triggered

- **Win-back / nudge emails queued: 0.** No functioning email send path exists. Layering win-back content on top of a broken sender accomplishes nothing. Not blind-triggering `/api/admin/drip-run` — risk of blasting 20 real inboxes at once once the sender is repaired (see `drip-campaign-never-sends`).
- **Re-engagement nudges sent: 0.** Same blocker.
- **Correct next action:** Diagnose and repair the drip/SMTP sender. Once repaired, the existing queue can drain normally — no manual blast needed.

---

## Psychology-Driven Optimization (1)

**Principle: Social Proof**

**Where:** Event cards on search results page (`EventCard.tsx`) and the World Cup stadium landing pages (`/world-cup-2026/[stadium]`).

**The change:** Add a small passive indicator below the event title — *"X people are tracking this"* — populated from the watchlist item count per `event_id`. This is real data we already have (160 watchlist items across known event IDs). No new API needed; query the count at event-card render time from the existing watchlist endpoint.

**Exact copy examples (real events on the platform):**
- Ariana Grande - Eternal Sunshine Tour (Barclays): *"3 people tracking this"*
- World Cup Round of 32 (Lumen Field): *"2 people tracking this"*
- Ye Live in San Antonio: *"1 person tracking this"*

**Why social proof, grounded in today's data:** 5 of 11 this-week signups bounced at 0 watchlist items. The product's value is invisible at the moment they decide whether to engage — the page shows an event card but gives no signal that other real humans found it worth tracking. Social proof counters the ambiguity that causes first-session abandonment. It's also self-reinforcing: as tracking counts rise, the indicator gets stronger.

**Expected impact:** Higher watchlist add-rate in first session (target: 55% → 65%+). Downstream, more activated users means more potential alert customers once the target-price input ships.

**Implementation note:** Count is real and can be accurate — no fabrication needed. For events with 0 watchers, hide the indicator (don't show "0 people tracking this").

---

## Handoffs

- **→ Agent 6 (CRO):** (1) Ship the target-price input + progress cue — still the #1 unblocked retention change. (2) EventCard social proof indicator (see above). Both are front-end-only, no backend changes required.
- **→ Agent 5 (Email):** Drip sender still broken, 7 users now crossing Day-10+ thresholds today. Repairing the sender remains the highest-priority email task — no new content is worth queuing until a send path works.
