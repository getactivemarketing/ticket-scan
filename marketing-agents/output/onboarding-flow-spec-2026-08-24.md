# Onboarding Flow Design — 2026-08-24

## Goal

Move a new user from registration to a first target-price alert in under 60 seconds. Skipping is allowed, but the next best action remains visible.

## Flow

1. **Interests (optional):** “What are you shopping for?” tap-friendly multi-select chips: Sports, Concerts, Theater, World Cup, Other.
2. **City (optional):** “Where do you usually go?” popular/recent cities plus search; use it to prefill dashboard search, never force Orlando.
3. **First event:** “Find one event to watch.” Show focused search, relevant suggestions, result card, and prominent “Set price alert.” Ask target price with current low as context.
4. **Success:** “You’re set. We’ll watch [Event] and email you at or below $X.” Show “Compare current prices,” “Add another event,” and next update time.

## Entry logic

Alert-originated signup skips interests/city and goes directly to target setup. Navbar signup starts at interests. Existing watchlist entries open target editing. Skipped onboarding creates a dismissible dashboard checklist: Search an event → Set a target price → Review your alert.

## Mobile wireframe

Full-screen single column, “1 of 3” / “2 of 3” / “3 of 3” progress, one decision per screen, bottom safe-area CTA, text-link Skip, sticky event summary during target entry, and no blocking tour.

## Growth handoff

Growth Agent owns onboarding state, pending-event deep link, target-price API contract, checklist persistence, and first-alert cohort reporting. Measure step completion, skips, first alert within 60 seconds/24 hours, and 7-day return.

