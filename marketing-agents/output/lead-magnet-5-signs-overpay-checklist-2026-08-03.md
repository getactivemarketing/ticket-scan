# Lead Magnet: 5 Signs You’re About to Overpay for Tickets

**Produced:** August 3, 2026  
**Format:** One-page PDF checklist plus mobile landing-page version  
**Audience:** Active ticket buyers comparing sports, concerts, and live events  
**Conversion goal:** Email capture → account registration → watchlist with target price  
**Primary CTA:** Download the checklist, then compare the event on TicketScan

## Cover copy

### 5 Signs You’re About to Overpay for Tickets

Before you click “Buy,” run this 60-second check. If two or more boxes are true, pause and compare the same event across marketplaces.

**A lower list price is not always a lower checkout total.**

## The checklist

### □ 1. You checked only one marketplace

The first result is a starting point, not a verdict. Search the same event, date, section, and quantity on Ticketmaster, SeatGeek, StubHub, and any other relevant source. Inventory and fees differ by platform.

**Do this:** Record the exact section/row or the closest comparable seat before choosing.

### □ 2. The price does not show the full total

A headline price can exclude service fees, delivery, taxes, or other charges. Compare the amount you actually expect to pay, not just the number in the card or search result.

**Do this:** Look for an all-in total. If it is unavailable, label the price as an estimate and leave room for fees.

### □ 3. You are buying because the countdown made you panic

“Only a few left” and ticking timers can push you into an unresearched purchase. Scarcity may be real, but urgency is not proof that the current listing is a good value.

**Do this:** Set a personal ceiling before browsing. If the event is not imminent, track the price and revisit it.

### □ 4. You have no idea how today’s price compares with history

A price can feel cheap simply because the last listing you saw was higher. Without a history baseline, you cannot tell whether you are seeing a dip, a normal range, or a premium.

**Do this:** Check recent price history when available. Use “buy,” “wait,” or “hold” advice as a decision aid, not a guarantee.

### □ 5. The seat, date, or seller is not exactly comparable

A lower price may be for a different date, obstructed view, standing room, resale condition, partial ticket quantity, or a different seller policy.

**Do this:** Match event date, venue, section, quantity, delivery method, refund/transfer terms, and final total.

## The 60-second buying workflow

1. Search the exact event and date.
2. Compare at least three sources.
3. Match the seat and quantity.
4. Check the all-in total and delivery terms.
5. Set your maximum price.
6. Buy when the value fits your ceiling—or add it to a watchlist and wait.

## TicketScan CTA panel

### Compare before you commit

TicketScan brings ticket options together so you can compare marketplaces, review price history where available, and decide whether to buy now, wait, or hold.

**Search your event:** https://www.ticketscan.io/compare

**Optional conversion line:** Set a target price on your watchlist so you have a number to act on instead of browsing indefinitely. Product team must verify this control is live before publishing this promise.

## Landing-page copy

**Eyebrow:** Free ticket-buying checklist  
**H1:** Five signs you’re about to overpay for tickets  
**Subhead:** A quick pre-check for fees, marketplace gaps, panic buying, price history, and non-comparable seats.  
**Button:** Email me the checklist  
**Trust line:** No resale marketplace affiliation. No claim that one platform is always cheapest.

**Success state:** Check your inbox. Your checklist is on the way. When you’re ready, search the event on TicketScan and compare the total before buying.

## Email Agent delivery sequence

| Timing | Subject | Purpose | CTA |
|---|---|---|---|
| Immediate | Your ticket overpay checklist is here | Deliver PDF; ask reader to choose a price ceiling | Download + compare |
| Day 3 | The price you see is not always the price you pay | Explain all-in totals and comparable listings | Run a comparison |
| Day 7 | Set your number before the market sets it for you | Introduce target-price behavior | Add to watchlist |
| Day 14 | One marketplace is not the market | Teach three-source comparison | Compare an event |
| Day 30 | What did you save by comparing? | Prompt recap and registration | Create an account |

## Design specification

- **Page size:** US Letter portrait; export an accessible PDF and a compressed mobile PDF.
- **Layout:** Bold title, five checkbox rows, short “Do this” callout, final six-step workflow, TicketScan CTA footer.
- **Visual system:** Use existing TicketScan palette/logo assets; high-contrast body text; no unverified dollar figures.
- **Accessibility:** Real text layer, tagged headings, checkbox labels as text, minimum 16px mobile equivalent, descriptive filename.
- **UTM:** `utm_source=lead_magnet&utm_medium=content&utm_campaign=overpay_checklist_2026_08`.

## QA and publishing gates

- Confirm newsletter form is deployed and writes to the active subscriber table.
- Confirm PDF link works on mobile and desktop.
- Confirm unsubscribe footer and sender identity use the existing Nodemailer configuration.
- Confirm target-price CTA is not published if the watchlist control is still absent.
- Instrument download, subscribe, account registration, watchlist add, and target-price set before using conversion rates.
