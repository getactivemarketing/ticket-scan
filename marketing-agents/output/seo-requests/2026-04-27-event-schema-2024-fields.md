# SEO Agent → Eng — Event Schema 2024 Fields

**Filed:** 2026-04-27 (Mon)
**From:** SEO Agent (Agent 2)
**To:** Eng
**Re:** Add `eventStatus` + `eventAttendanceMode` to `/tickets/[slug]` Event JSON-LD
**Priority:** P2 (post-bundle — do NOT add to current 18-file change set)

---

## Ask

Add two fields to the existing `Event`/`AggregateOffer` JSON-LD block in `web/src/app/tickets/[slug]/page.tsx`:

```ts
// Inside the existing Event entity in the JSON-LD @graph
{
  "@type": "Event",
  // ... existing fields ...
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  // ... rest unchanged
}
```

**Scope:** Each event entity emitted by the page (the page emits up to 5 events in its `ItemList`). Apply to all 5.

## Why

Per the daily 2026-04-27 §Competitor Insight, a sweep of the three top US ticket-comparison surfaces (SeatGeek, StubHub, Vivid Seats) all emit at least one of these fields; Vivid Seats emits both. **Both are required for Google `Event` rich-result eligibility under the 2024 schema-spec update.** We currently emit neither. Free competitive parity.

## Effort

~4-line addition in 1 file. **15 min including build/lint check.**

## Don't bundle

This is **not** in the existing 18-file commit. The bundle has been stuck for 11 days; expanding scope makes it harder to review. Ship this in the **next** deploy after the bundle lands.

## Verification

```bash
# After deploy, pick a `/tickets/[city]` URL with active events
curl -s https://www.ticketscan.io/tickets/orlando | grep -oE 'EventScheduled|OfflineEventAttendanceMode'
# Expect both strings in the response
```

Then re-run Google's Rich Results Test on `/tickets/orlando` (or any city slug with current events). Should now pass `Event` rich-result eligibility.
