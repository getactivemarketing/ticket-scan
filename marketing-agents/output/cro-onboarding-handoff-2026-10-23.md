# CRO Handoff — First-Save Onboarding

## Goal

Improve the measurable activation proxy: signup → first saved event. Current snapshot: 114 of 267 users have no saved-event row; the one signup in the last seven days had no saved row by the snapshot.

## Flow

1. Route new registrants to a one-screen welcome state.
2. Ask: “What are you planning to see?” and “Which city should we search?” Both optional.
3. Primary CTA: **Find an event**.
4. After a successful save, show: “Saved to your ticket list: {{event}} on {{date}} at {{venue}}.”
5. Primary CTA: **Review your saved event**. Secondary: **Find another event**.
6. Add: “You can remove it anytime.”

## Events to instrument

`onboarding_started`, `onboarding_skipped`, `search_submitted`, `event_viewed`, `watchlist_add_success`, `saved_event_viewed`, and `seller_outbound_click`.

## Test design

Compare the current dashboard against the one-screen flow for 25% of new accounts. Primary metric is first-save within 48 hours. Guardrails are signup completion, API errors, onboarding time, unsubscribes, and seller-click rate. Do not use target-price or alert actions as activation criteria.
