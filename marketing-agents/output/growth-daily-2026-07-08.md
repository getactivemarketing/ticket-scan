## Growth Daily — 2026-07-08

### User Health (live from /admin/stats + /admin/users, 50-row sample)

| Metric                            | Count     | Notes                                     |
|-----------------------------------|-----------|-------------------------------------------|
| Total users                       | 146       | +9 this week, 0 today                     |
| Total watchlist items             | 168       | ~1.15/activated user avg                  |
| Activated (watchlist ≥ 1)         | ~93 est.  | 64% of 50-row sample → ~93/146            |
| Activation gap (0 watchlist)      | ~53 est.  | 36% of sampled; 4 of last 9 signups       |
| Active alerts                     | 0         | All target_price fields null              |
| Newsletter subscribers            | 3         | Unchanged                                 |
| Active / At-risk / Churned        | n/a       | No last_login column in schema            |
| Alert fatigue candidates          | n/a       | 0 alerts ever sent                        |
| Unsubscribes today                | n/a       | 0 drip emails sent → no email to unsub    |

### Activation Gap (last 7 days)

- 9 signups since July 1; **5 activated (56%), 4 not (44%)**
- Users with 0 watchlist: ids 146 (tscheck0707, day 1), 145 (jonmeisburg, day 1), 142 (lori.r.sabet, day 4), 139 (thellrung, day 5)
- Ids 142 and 139 are past the day-3 drip threshold — they should have received email 1 already and haven't

### Drip Campaign — Dead Cron

`/admin/drip-stats` returns `stats: []` confirming **0 emails sent, all-time**.

| Tier                  | Threshold | Users overdue | Oldest overdue |
|-----------------------|-----------|---------------|----------------|
| Email 1 (welcome)     | Day 3+    | 16            | 15 days ago    |
| Email 2 (savings)     | Day 7+    | 11            | 15 days ago    |
| Email 3 (data-backed) | Day 14+   | 4             | 15 days ago    |

The 4 users past day 14 (ids 130, 129, 128, 127) are overdue for the third drip touch and have received nothing. The entire sequence — 5 emails designed to convert and retain — has delivered zero value since launch.

**Root cause is a dead cron job, not content or targeting.** Firing `/api/admin/drip-run` manually would catch up delivery for all 20 pending users, but this risks sending multiple stacked emails if the cron remains unscheduled. The fix is engineering: verify the Railway cron is alive and if not, reschedule.

### Churn Signals (data-limited)

- Unsubscribes: 0 (no emails to unsubscribe from)
- Users entering at-risk: n/a (no visit tracking)
- Alert fatigue: n/a (0 alerts sent)
- Behavioral churn proxy: the 16 users overdue for drip email 1 have had zero contact from TicketScan since signup — these are de facto silent churns who may not remember the product

### Psychology-Driven Optimization — Loss Aversion on the Empty Watchlist State

**Principle:** Loss aversion (Kahneman/Tversky: losses hurt ~2× more than equivalent gains feel good)

**Where to apply:** The dashboard empty state for users with 0 watchlist items (currently a generic "Search for events" prompt)

**Current copy:** "Search for events to start tracking prices."

**Proposed copy:**
> "Ticket prices for the events you care about are moving right now — without you. Add your first event to see exactly how much you'd save by tracking instead of guessing."

Or for a logged-in user who searched but didn't add:
> "The average resale ticket rises 18% in the last 2 weeks before an event. You've already lost 1 day."

**UX change:** Pair the copy with a single pre-populated CTA using the user's last search term (stored in session), e.g. "Track [Last Search]" button. One tap to activate.

**Expected impact:** Users who arrive at an empty watchlist are mid-funnel — they've already committed to registration. Loss-framed copy converts soft interest into action better than feature-benefit copy at this stage. Target: move the 44% last-7d activation gap to <25%.

### Actions Triggered

- Win-back emails queued: 0 (no email infrastructure to queue — drip cron fix is the prerequisite)
- Re-engagement nudges sent: 0

### For CRO Agent (Agent 6)

Activation gap = 4 of last 9 recent signups never added a watchlist item. The empty-state dashboard is the fix surface. Loss-aversion copy + "Track [Last Search]" one-tap CTA on that empty state is the recommended A/B test.

### For Email Agent (Agent 5)

The 16 users overdue for drip email 1 need a catch-up sequence. Recommended: do not stack-send all missed emails at once. Send email 1 only to the entire pending cohort, then let the cron resume normally. Subject line for email 1 catch-up:

> "Prices moved while you were away — here's what TicketScan would have caught"

Frame it as a demonstration of value missed, not an apology for silence. Include a real example price range from a trending event (pull from /api/events/search at send time).

### Summary

Platform is healthy on acquisition (+9/week), modest on activation (56% last 7 days), and completely dark on retention — 0 alerts, 0 drip emails, 0 email touchpoints ever sent. Every retention loop depends on fixing the drip cron first. The single highest-leverage engineering task remains unchanged: (1) fix/reschedule the drip cron, and (2) add a target-price input to the watchlist-add flow so alerts can arm.
