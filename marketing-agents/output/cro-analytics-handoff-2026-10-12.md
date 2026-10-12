# Analytics Agent Handoff — CRO Baseline

There is currently no trustworthy funnel baseline. GTM loads, but the repo does not push the events needed for Visit → Search → Compare → Signup → Watchlist → Retain reporting.

Implement the taxonomy in `cro-weekly-2026-10-12.md` and report, by device and source surface:

- homepage session → search submitted;
- search submitted → result rendered;
- result rendered → seller click;
- result rendered → watchlist prompt;
- watchlist prompt → signup completed;
- signup completed → watchlist added within 10 minutes;
- watchlist added → seller click within 7 days;
- newsletter impression → subscription.

QA requirements: deduplicate React re-renders, exclude admin/QA/bot traffic, avoid PII, persist the homepage experiment assignment, and include `experiment_id`/`variant` for `homepage_search_cta_v1`. Do not publish a conversion rate until the event stream has passed a seven-day integrity check.

