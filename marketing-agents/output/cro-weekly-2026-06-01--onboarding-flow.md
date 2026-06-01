# Onboarding Flow Design — 2026-06-01

**Current state (verified):** no `/onboarding` route exists. After register, `handleSubmit` pushes to `/dashboard` (`register/page.tsx:36`), which loads with a hardcoded `useState('Orlando')` city default (`dashboard/page.tsx:27`) and empty results. First authenticated experience = an empty search for a city the user didn't choose.

## Proposed 3-step flow (<60s to first price alert)

**Route:** new `/onboarding`. Post-register destination becomes `/onboarding` (unless a `?returnTo=` is present from an EventCard intercept — then skip onboarding and honor returnTo).

1. **"What are you into?"** — chips: Sports / Concerts / Theater / World Cup 2026. Multi-select. Writes to `user_favorites` (existing table). Skippable.
2. **"Your city"** — text/autocomplete. Replaces the `'Orlando'` default; stored and used as the dashboard city default thereafter.
3. **"Find your first event & set a price alert"** — lands on `/dashboard?city=<chosen>&type=<chosen>` with the **target-price input live on the watchlist add**.

## The one hard dependency
Step 3 is meaningless without the **target-price input** (main report §1 / EventCard). Today the add payload omits `targetPrice` (`EventCard.tsx:43–49`) though the API client accepts it (`api.ts:169`). Build that input first; onboarding step 3 is the natural place to introduce it.

## Entry paths
- **Cold (post-register, no returnTo):** full 3-step flow.
- **EventCard intercept (`?returnTo=` set):** skip onboarding — user already declared intent; land them on the event with the target-price input open.

## Principles
Max 3 steps, each writes real data, skippable but default-on, mobile-first. Owner for cohort funnel measurement post-launch: Growth (Agent 8).

> Long-form skeleton + route/mount code: `cro-weekly-2026-05-04--onboarding-flow.md`.
