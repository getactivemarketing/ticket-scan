# Negative Keyword Additions — 2026-10-03

**Status: Proposed only.** No Google Ads search-terms report or upload connection was available. Confirm query context and campaign scope before importing; prefer phrase or exact negatives over broad account-wide exclusions.

| Candidate negative | Match | Intent to exclude |
|---|---|---|
| `free tickets` | phrase | Giveaway/free-seeking intent |
| `ticket refund` | phrase | Refund/support intent |
| `ticket refunds` | phrase | Refund/support intent |
| `sell my tickets` | phrase | Seller intent |
| `sell tickets` | phrase | Seller intent |
| `ticket cancellation` | phrase | Support intent |
| `ticketmaster customer service` | phrase | Competitor support intent |
| `seatgeek customer service` | phrase | Competitor support intent |
| `stubhub customer service` | phrase | Competitor support intent |
| `ticketmaster login` | phrase | Competitor navigation intent |
| `seatgeek login` | phrase | Competitor navigation intent |
| `stubhub login` | phrase | Competitor navigation intent |
| `ticket barcode generator` | phrase | Utility/non-purchase intent |
| `fake tickets` | phrase | Fraud/non-purchase intent |

## Guardrails

- Keep `ticketscan`, `ticketscan tickets`, event names, teams, artists, venues, onsale, presale, and ticket-finding terms eligible.
- Do not exclude `cheap tickets`, `last minute tickets`, `discount tickets`, or `ticket deals` without query-level evidence; these may be high-intent discovery searches.
- Scope competitor-support negatives to buyer campaigns; do not apply them account-wide if another campaign has support or seller intent.
