## Growth Daily — 2026-08-12

Snapshot pulled from the production admin API on 2026-08-12 (UTC). Total users: 208. Total watchlist rows: 208. The admin API does not currently expose login/visit events or alert-email click events, so those segments are marked unavailable instead of inferred as facts.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---:|
| New (last 7 days) | 10 | 4.8% | N/A — no historical segment snapshot |
| Activated (has watchlist) | 123 | 59.1% | N/A — current API only |
| Active (visited in 7 days) | N/A | N/A | N/A — visit telemetry not exposed |
| At-risk (no visit 7–14d) | N/A | N/A | N/A — visit telemetry not exposed |
| Churned (no visit 14d+) | N/A | N/A | N/A — visit telemetry not exposed |

Observed daily context: 3 registrations today versus 0 on 2026-08-11; 1 watchlist addition today. These are event counts, not a substitute for active-user history.

### Activation Gap

- 4 users signed up in the last 7 days with 0 watchlist items.
- 6 of 10 new users have added a watchlist item (60% recent activation).
- Top reasons: indeterminable from current telemetry. There is no funnel, search-result, or onboarding-completion data to distinguish “no interesting event,” “feature unclear,” and “bounced.”
- CRO Agent handoff: test a post-signup checklist with one primary CTA: “Track your first event.” Show search examples and explain that free tracking continues automatically.

### Churn Signals

- Unsubscribes in the last 24 hours: 0 observed.
- Users entering at-risk today: N/A — last-visit data is not exposed. A signup-age proxy would overstate churn and is not used.
- Alert-fatigue candidates: N/A — the `/api/admin/alerts` endpoint currently returns `Failed to get alerts`; platform stats report 0 active target-price alerts and 0 triggered alerts, but this cannot establish click behavior.

### Churn Intervention

No users were safely eligible for a personalized tier because inactivity cannot be verified from the available API. Three intervention templates are prepared in `churn-interventions-2026-08-12.md` for Email Agent personalization once last-seen data is available.

- Win-back emails queued: 0
- Re-engagement nudges sent: 0
- Reason: no approved win-back send endpoint exists in the supplied admin routes; `/api/admin/email-blast/world-cup` is not an appropriate substitute for individualized retention mail.

### Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency

**Where:** First-run dashboard / onboarding state after registration.

**Exact UX change:** Add a compact progress strip: “Your first alert is one step away” → “1. Find an event” → “2. Add it to your watchlist” → “3. Set a target price.” After step 2, change the CTA to “Set my price target.” Keep “Free price tracking” beside the CTA.

**Expected impact:** Reduce activation ambiguity and convert more of the 40% recent signup gap into first-watchlist users. Validate with a 50/50 test measuring watchlist creation within 24 hours and target-price completion within 7 days; no numerical lift is assumed before testing.

### Data Quality / Next Instrumentation

- Add `last_seen_at` (or an activity-event table) updated on authenticated sessions and meaningful dashboard actions.
- Add alert delivery, open, click, and unsubscribe event fields with stable alert IDs.
- Fix `/api/admin/alerts` before using alert-fatigue counts in campaign decisions.
- Persist daily segment snapshots so “vs Yesterday” becomes a real comparison.
