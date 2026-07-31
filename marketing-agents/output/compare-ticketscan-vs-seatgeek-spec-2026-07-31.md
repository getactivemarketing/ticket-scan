# Content Handoff: `/compare/ticketscan-vs-seatgeek`

## Search intent

Help a ticket shopper decide whether to use SeatGeek alone or TicketScan as a comparison and timing layer. Primary intent: “SeatGeek vs TicketScan,” “compare SeatGeek ticket prices,” and “SeatGeek all-in price vs other sites.”

## Page promise

**SeatGeek is a marketplace; TicketScan is the cross-source price intelligence layer.** Compare the same event across Ticketmaster, SeatGeek, StubHub, fee estimates, and price history before choosing where to buy.

## Required structure

1. Intro with neutral disclosure: TicketScan does not sell or fulfill tickets.
2. At-a-glance comparison table: inventory/checkout, multi-source comparison, all-in fee display, price history, target-price alerts, seat map, buyer guarantee, mobile delivery, venue/city guides.
3. “When SeatGeek is the better fit”: immediate purchase, native inventory, delivery, buyer protection, seat-map browsing.
4. “When TicketScan is the better fit”: comparing sellers, budget monitoring, historical context, venue/city research.
5. Workflow: search → compare fee-adjusted prices → inspect trend → set target → choose source.
6. Honest limitations: TicketScan’s source availability varies; estimates are not final checkout totals; alerts require a target price.
7. FAQ with `FAQPage` schema only for visible answers.
8. CTA: `/compare` and `/register`, with UTM-tagged internal campaign links.

## Editorial guardrails

- Do not claim SeatGeek is always cheaper or that TicketScan guarantees savings.
- Cite SeatGeek’s public all-in pricing, Deal Score, Track Prices, and Buyer Guarantee claims with links.
- Use “estimated all-in” for TicketScan fee calculations until a source returns a confirmed final total.
- Refresh product facts quarterly or when SeatGeek changes its flow.

## Measurement requirements

Track `comparison_page_view`, `compare_cta_click`, `signup_complete`, `compare_view`, and `outbound_ticket_click` with `competitor=seatgeek` and UTM persistence.
