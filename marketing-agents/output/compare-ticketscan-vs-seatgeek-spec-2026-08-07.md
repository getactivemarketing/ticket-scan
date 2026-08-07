# Comparison Page Spec: TicketScan vs SeatGeek

**Route:** `/compare/ticketscan-vs-seatgeek`  
**Owner:** Content Agent (Agent 1)  
**Purpose:** capture comparison-intent searches while positioning TicketScan as a pre-purchase intelligence layer, not a ticket marketplace.

## Primary Message

**SeatGeek helps you buy. TicketScan helps you decide where and when to buy.** Compare available sources, check price movement, and set a target price before clicking through.

## Page Structure

1. H1: `TicketScan vs SeatGeek: Which Is Better for Comparing Ticket Prices?`
2. Short answer with a neutral “best for” split.
3. Feature matrix: marketplace inventory, primary/resale purchase, all-in display, cross-market comparison, price history, target-price alerts, buy/wait recommendation, seat maps, Buyer Guarantee, mobile push.
4. “Use both” workflow: search TicketScan → compare sources → inspect timestamp/history → click through to the selected marketplace.
5. Fees methodology and timestamp disclaimer.
6. FAQ: Is TicketScan a seller? Does TicketScan guarantee tickets? Does SeatGeek show all fees? What is Deal Score? Can TicketScan alert me when a target is reached?
7. CTA: `Compare this event` and secondary `Track a price`.

## Accuracy Rules

- Do not claim TicketScan has SeatGeek’s seat map, Buyer Guarantee, inventory, mobile push, or Deal Score.
- Do not claim TicketScan is cheaper without a live, timestamped comparison.
- Call SeatGeek’s Deal Score a marketplace value score, not a market-wide cheapest-price guarantee.
- Only promise TicketScan alerts after the price tracker and alert delivery path pass QA.

## SEO

- Primary keyword: `TicketScan vs SeatGeek`
- Secondary: `SeatGeek alternative`, `compare SeatGeek ticket prices`, `ticket price comparison`, `SeatGeek fees vs TicketScan`
- Add FAQ schema only for visible, factual answers.
- Link to `/compare`, `/how-it-works`, fee explainer, and a live event comparison.

## Measurement

Track `comparison_page_view`, `compare_cta_click`, `search_submit`, `compare_view`, `signup_complete`, and `outbound_ticket_click`, with `competitor=seatgeek` and UTM fields. Current implementation is missing these events; Content should coordinate launch with Analytics/Engineering.

