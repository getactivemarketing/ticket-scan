# Psychology optimization — 2026-10-10

## Principle: endowment effect

**Where:** First-save confirmation and the returning-user dashboard.

**Exact UX change:** Replace generic success text with:

> Saved to **your ticket list**: {{event_name}} on {{event_date}} at {{venue}}. Review onsale timing, venue tips, and buying links whenever you’re ready.

Primary button: **Review your saved event**

Secondary button: **Find another event**

Add a small “You can remove it anytime” line to reduce perceived commitment while preserving ownership framing.

**Expected impact:** Hypothesis: improve first-save completion and repeat dashboard visits by turning an abstract watchlist into a concrete personal collection. Validate with `watchlist_added` → `watchlist_reviewed` and seven-day return events after instrumentation.

**Guardrail:** Do not describe the list as price tracking or promise alerts, price changes, or buy timing.

