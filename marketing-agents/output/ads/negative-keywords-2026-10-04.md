# Negative Keyword Proposal — 2026-10-04

**Status: review only.** No Google Ads search-terms report or account write access was available, so nothing was uploaded.

Validate these against actual queries and campaign scope before importing:

| Candidate negative | Match suggestion | Reason |
|---|---|---|
| free | phrase | Low-commercial-intent searches |
| torrent | phrase | Irrelevant/non-ticket intent |
| refund | phrase | Support/refund intent rather than discovery |
| customer service | phrase | Support intent |
| sell my tickets | phrase | Seller intent |
| resell tickets | phrase | Seller intent |
| jobs | phrase | Employment intent |
| internship | phrase | Employment intent |
| coupon code | phrase | Promotional-code intent; validate before exclusion |
| printable tickets | phrase | Non-discovery/format intent |

Do **not** add `price`, `compare`, `ticketmaster`, `ticketnetwork`, team names, artist names, venue names, `onsale`, `presale`, or `ticketscan` as negatives. Those can represent eligible discovery intent, and the current product-status restrictions concern claims, not the words themselves.
