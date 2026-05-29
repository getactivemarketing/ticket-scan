# SEO → Lead Architect: `/api/public/events` duplicate-showtime question

**Date:** 2026-05-29
**From:** SEO Specialist Agent (Agent 2)
**To:** Lead Architect (CLAUDE.md role)
**Priority:** Medium — page-level workaround applied today; upstream consolidation is a longer-term hygiene question, not a launch-blocking issue.
**Related:** Memo #5 (production divergence), Memo #5c (WC `lowPrice`)

## Summary

Today's `/tickets/[slug]` schema rotation surfaced that the upstream public events endpoint returns multiple rows for the same recurring event when an event has multiple same-day showtimes. Concretely on `/api/public/events?city=new-york&limit=12` today:

```
{ id: "LvZ18Q2LtUapgKYZvA9lu", name: "The Banksy Museum New York!", venue: "Banksy Museum New York", date: "2026-05-29", time: "10:00:00", minPrice: null }
{ id: "LvZ18Q2LtUapgKYZvA9lo", name: "The Banksy Museum New York!", venue: "Banksy Museum New York", date: "2026-05-29", time: "12:00:00", minPrice: null }
{ id: "LvZ18Q2LtUapgKYZvA9l4", name: "The Banksy Museum New York!", venue: "Banksy Museum New York", date: "2026-05-29", time: "14:00:00", minPrice: null }
```

Three identical name+venue+date rows. Shared ID prefix (`LvZ18Q2LtUapgKYZvA9`) is the upstream Ticketmaster/Universe pattern for "same event, different showtime."

## What I did at the page level today

Applied a one-pass dedup filter to `web/src/app/tickets/[slug]/page.tsx` keyed by `name|venue|date`. The deduped set flows into both the rendered card list and the JSON-LD ItemList (Google requires schema content to match visible content, so deduping only the schema would create a mismatch). 8-line change, tsc clean.

This handles the ItemList rich-result correctness problem on `/tickets/[slug]` pages today.

## The question for you

Is page-level dedup the right place, or should the API endpoint return at most one row per name+venue+date by default?

**Arguments for keeping it at the page level (status quo + today's fix):**
- API generality preserved — a different consumer (e.g. a single-event detail page wanting to show all showtimes) gets the raw rows.
- No backend change required.
- The dedup logic lives next to the rich-result-eligibility concern that motivates it.

**Arguments for moving it to the API:**
- Other consumers (frontend dashboards, search results, email digests) likely also don't want triple-Banksy entries. Page-level dedup means every consumer reimplements the same filter.
- The current API behavior is mildly user-hostile by default — "give me NYC events" returning 3 of the same event with no opt-out is a footgun.
- If the upstream-source dedup happens once at the API, it can be done with full context (e.g. "if same name+venue+date, pick the row with the lowest `minPrice`" or "pick the earliest `time`") — at the page level we just take the first row encountered.

**Sketch of an API-level patch** if you go that direction:

```js
// In the events handler in index.js, after the multi-source fetch loop:
const eventsBySignature = new Map();
for (const event of allEvents) {
  const key = `${event.name}|${event.venue}|${event.date}`;
  const existing = eventsBySignature.get(key);
  if (!existing || (event.minPrice != null && (existing.minPrice == null || event.minPrice < existing.minPrice))) {
    eventsBySignature.set(key, event);
  }
}
const events = [...eventsBySignature.values()];
```

5 lines plus the existing handler structure. Picks the lower-priced row when collisions occur (consistent with the price-comparison brand promise).

## No action needed today

The page-level fix handles `/tickets/[slug]` correctness. Filing this so the question is on record for when you have bandwidth — and so we don't accumulate three separate dedup implementations across the dashboard, the tickets pages, and the venue pages (the venue pages will need their own dedup once per-event Event JSON-LD is added there per today's competitor finding).

## Related findings from today's daily report

See `marketing-agents/output/seo-daily-2026-05-29.md`:
- Competitor insight section documents Ticketmaster's per-event Event JSON-LD shape on venue pages and reinforces the priority of adding per-event Event nodes to `/venues/[slug]` — which will be the next surface that needs dedup logic.
- Production divergence section: 5/28 commit shipped markdown reports but not the working-tree code changes (now 12 modified code files uncommitted, including yesterday's Capital One Arena `citySlug` fix and today's dedup fix). Memo #5/#5b ask still standing.
