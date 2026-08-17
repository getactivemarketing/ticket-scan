# Lightweight Onboarding Flow — 2026-08-17

**Goal:** get a new account from signup to one watchlist item with a target price in under 60 seconds.  
**Route:** new `/onboarding`; authenticated users only.  
**Fallback:** every step can be skipped; skipped users land on a useful dashboard, never a blank state.

## Step 1 — Interests

**Headline:** What do you want to see?  
**Body:** Pick a few categories so we can make your search more relevant.

Selectable tiles: Sports, Concerts, Theater, Festivals, Comedy, World Cup 2026. Continue is enabled after one selection, but “Skip for now” remains available. Store preferences asynchronously; a failed preference write must not block progress.

## Step 2 — City

**Headline:** Where do you usually go out?  
**Body:** We’ll start searches near you.

Search field plus popular city chips. Use existing city data. Default the next dashboard search to the chosen city instead of Orlando. Continue and skip must both work on mobile without keyboard obstruction.

## Step 3 — First event and price ceiling

**Headline:** Pick one event to watch

Search for an event or choose a relevant suggestion. On selection, show current price context only if fresh. Then prompt:

> What price would make you ready to buy?

Pre-fill a clearly labeled suggested ceiling only when a current price exists; let users edit it. Write the watchlist row and `target_price` atomically. If target-price persistence is unavailable, stop promising an alert and clearly label the fallback as watchlist-only.

## Step 4 — Confirmation

**Headline:** Your first alert is ready

**Body:** We’ll watch `[event]` and email `[account email]` when it reaches `$[target]`. You can change this anytime.

Primary CTA: **View my watchlist**. Secondary CTA: **Track another event**. Show a checklist: `Account created ✓ · Event tracked ✓ · Price ceiling set ✓`.

## Empty and skipped states

If a user skips all choices: “You’re one event away from your first price alert. Search for a concert, game, or show to start.” CTA: **Find an event**. Keep a small progress cue, but do not force modal re-entry on every visit; offer “Finish setup” from the dashboard until completed.

## Instrumentation

`onboarding_started`, `onboarding_step_view`, `onboarding_interest_saved`, `onboarding_city_saved`, `onboarding_event_selected`, `watchlist_add`, `target_price_set`, `onboarding_completed`, `onboarding_skipped`, each with user/anonymous ID, step, timestamp, route, and experiment variant.

