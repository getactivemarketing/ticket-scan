## CRO handoff — activation gap — 2026-10-26

The deployed admin API reports 2 users registered in the last 7 days. One has a saved event and one has none, so the current activation gap is **1/2 (50%)**. Across all 268 users, 114 have no saved event and 154 have at least one.

The API cannot identify why the gap exists: it does not expose search, result views, onboarding progress, or bounce events.

### Recommended experiment

After signup, show a short checklist:

1. Search for an event.
2. Save it to your ticket list.
3. Review onsale timing, venue guidance, and purchase links.

Use the exact confirmation copy from the daily report and measure signup → first save, with a seven-day return event once instrumentation exists. Do not promise price tracking or price alerts.
