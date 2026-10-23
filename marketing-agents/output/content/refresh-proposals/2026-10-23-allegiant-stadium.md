# Refresh proposal: Allegiant Stadium

**Page:** `allegiant-stadium` in `web/src/data/stadiums/nfl.ts`  
**Rendered page:** `/venues/allegiant-stadium`

**Reason:** The guide has useful seating information, but its description ends with the now-inaccurate claim that TicketScan tracks Allegiant Stadium events. Replace that sentence with the narrower current capability and add practical, official venue guidance for concert and football visitors. Leave the existing capacity, home-team data, FAQ, and section data unchanged.

## Description

**Exact current text:**

> Allegiant Stadium seats 65,000 for Las Vegas Raiders and UNLV Rebels football games and is fully enclosed and climate-controlled, with a translucent roof and the Al Davis Memorial Torch behind the north end zone. Sections marked with a C on the 100 level sideline are club seats served by the Modelo Cantina Club on the visitor side and the Twitch Lounge on the Raiders side. The 200 level carries general seating only in the corners and end zones because the sidelines there are suites and loge boxes. The 300 and 400 levels hold the least expensive seats. TicketScan tracks Allegiant Stadium onsales and presale windows.

**Exact proposed replacement:**

> Allegiant Stadium is a fully enclosed, climate-controlled venue next to the Las Vegas Strip, with a published capacity of 65,000. Its official maps are organized by 000, 050, 100, 150, 200 and 300 levels, with separate parking, walking and gate-entry maps. Concert listings can use an event-specific seating chart, so check the chart attached to the show you are attending rather than assuming a football configuration applies. The stadium is within walking distance of Las Vegas Boulevard; its official transportation guide places rideshare pickup and drop-off in Lot N. TicketScan surfaces Allegiant Stadium events and available onsale or presale information; confirm the current event details, seller terms and venue instructions before checkout.

## Proposed FAQ addition

**Current text:** No FAQ entry currently exists on the `allegiant-stadium` venue object.

**Exact proposed addition:**

> **Question:** Where is rideshare pickup at Allegiant Stadium?  
> **Answer:** The stadium's official transportation guide places rideshare pickup and drop-off in Lot N, north of the stadium, accessed from Dean Martin Drive. Check the venue's current directions page before traveling because event-day traffic plans can change.

## Sources for new or changed facts

- [Allegiant Stadium — About](https://www.allegiantstadium.com/stadium/about-allegiant-stadium) — official location context, enclosed/climate-controlled description, and 65,000 capacity.
- [Allegiant Stadium — Stadium Maps](https://www.allegiantstadium.com/stadium-maps) — official 000, 050, 100, 150, 200, 300, parking, walking and gate maps.
- [Allegiant Stadium — Seating Charts](https://www.allegiantstadium.com/events-tickets/allegiant-stadium-seating-charts) — official general and ADA event seating-chart context.
- [Allegiant Stadium — Directions & Parking](https://www.allegiantstadium.com/plan-your-visit/directions-parking) — walking-from-the-Strip guidance and Lot N rideshare pickup/drop-off.

## Guardrails

- No price, price range, price history, trend, alert, or buy/wait recommendation added.
- No venue capacity or section data changed.
- The unsupported “TicketScan tracks” wording is replaced with the narrower, currently allowed “surfaces events and available onsale or presale information.”
- Apply the proposal manually; do not edit `web/src/` as part of this task.
