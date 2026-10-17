# Refresh proposal: Capital One Arena

**Page:** `capital-one-arena` in `web/src/data/venues.ts`  
**Rendered page:** `/venues/capital-one-arena`

**Reason:** The guide has useful venue history and section data, but its visitor guidance is thin and its closing product sentence is broader than the current product status allows. Add official, event-useful arrival details and replace the old “tracks tickets” wording with the allowed “surfaces events and onsale information” wording. Leave the existing capacity and section data unchanged.

## Description

**Exact current text:**

> Capital One Arena opened in December 1997 in Washington's Penn Quarter, and is built directly on top of the Gallery Place Metro station. It has carried three names: MCI Center until 2006, Verizon Center until 2017, and Capital One Arena since, so older listings and seating charts circulate under all three. The Wizards and the Capitals share it, which gives it one of the fuller event calendars in either league. Seating runs from the lower bowl through club and suite levels to the upper bowl. The arena is partway through a multi-year renovation that began at the end of 2024 and is scheduled to finish before the 2027-28 seasons, so entrances, concourse layouts and some seating areas change between visits - check the venue's own guest information before an event rather than relying on an older map. Arriving by Metro puts you at the door; the surrounding streets are dense and parking is limited. TicketScan tracks when tickets for Capital One Arena events go on sale, including presale windows that open before the public onsale.

**Exact proposed replacement:**

> Capital One Arena is at 601 F Street NW in Washington, DC, in the Penn Quarter neighborhood. The venue is closest to the Gallery Place Metro stop and a few blocks from Metro Center. It hosts Washington Wizards and Washington Capitals games, concerts, Georgetown events and other live shows. Seating and entry details can vary by event, so check the event-specific ticket and venue instructions before you leave. Capital One Arena is cashless, and most bags, backpacks and large purses are not permitted; the official guest guide allows wallet-size clutches up to 4 x 6 inches and medical or parenting bags up to 14 x 14 x 6 inches. Doors generally open one hour before the event, but the event calendar is the final word. TicketScan surfaces Capital One Arena events and available onsale or presale information; confirm the event details and seller terms before checkout.

## Proposed FAQ addition

**Current text:** No FAQ entry currently exists on the `capital-one-arena` venue object.

**Exact proposed addition:**

> **Question:** What should I know before going to Capital One Arena?  
> **Answer:** Capital One Arena is closest to the Gallery Place Metro stop. The venue is cashless, most large bags are not permitted, and doors generally open one hour before the event. Check the event-specific instructions for current entry and camera rules.

## Sources for new or changed facts

- [Capital One Arena official FAQs](https://www.capitalonearena.com/arena-faqs) — official address, nearest Metro stops, bag limits, cashless policy, general door timing, and event-specific policy guidance.
- [Capital One Arena official events calendar](https://www.capitalonearena.com/events) — official event venue and event-listing context.

## Guardrails

- No price, price range, price history, trend, alert, or buy/wait recommendation added.
- No venue capacity or section data changed.
- The unsupported “TicketScan tracks” wording is replaced with the narrower, currently allowed “surfaces events and available onsale or presale information.”
- Apply the proposal manually; do not edit `web/src/` as part of this task.
