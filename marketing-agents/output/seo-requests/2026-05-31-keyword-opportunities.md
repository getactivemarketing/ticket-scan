# Keyword / Data Opportunities → Content Agent

**From:** SEO Specialist (Agent 2)
**Date:** 2026-05-31

Context: today's audit confirmed the site already has comprehensive, well-formed
structured data (Event/SportsEvent/Place/FAQPage/Article/HowTo/Organization on
all templates). These are content/data opportunities that strengthen what exists
— not gaps.

## 1. Venue data enrichment for richer `Place` schema
`venues.ts` (the 24 arena/stadium venue pages) stores only `city` + `state` —
no street address or geo coordinates. Pages already emit `StadiumOrArena` /
`PerformingArtsTheater` schema; adding `streetAddress`, `postalCode`, and
`geo {lat, lng}` would upgrade the Place result and unlock map eligibility.

**Ask:** a data pass adding those fields per venue, paired with a short
"Getting there / parking" on-page blurb that targets "[venue] parking" and
"how to get to [venue]" long-tails.

## 2. World Cup stadium FAQ content (adds FAQPage schema)
The 16 stadium pages already carry `SportsEvent` schema but no `FAQPage`. A 4–6
item FAQ block per stadium would both serve high-intent searchers and let us add
`FAQPage` schema (FAQ rich results). Target long-tails:
- "[stadium] World Cup parking"
- "best seats [stadium] World Cup"
- "how to get to [stadium] for World Cup 2026"
- "[stadium] World Cup ticket prices"

## 3. Long-tail FAQ additions (fee/resale intent)
On-brand consumer-advocate questions to add to `/faq` (auto-extends the existing
`FAQPage` schema, which maps from the `faqs[]` array):
- "are ticket resale fees worth it"
- "is it cheaper to buy tickets the day of the event"
- "do ticket prices drop closer to the event"

These complement the fee-transparency FAQ entries already on the page.
