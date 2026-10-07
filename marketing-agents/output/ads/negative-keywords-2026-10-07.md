# Negative Keyword Proposal — 2026-10-07

**Status: review only.** No Google Ads search-terms report or account write
access was available, so nothing was uploaded.

Validate against actual queries and campaign scope before importing:

| Candidate negative | Match suggestion | Reason |
|---|---|---|
| free | phrase | Low-commercial-intent traffic; keep eligible only if the campaign intentionally targets free event discovery |
| torrent | phrase | Irrelevant/non-ticket intent |
| refund | phrase | Support/refund intent rather than event discovery |
| customer service | phrase | Support intent |
| sell my tickets | phrase | Seller intent |
| resell tickets | phrase | Seller intent |
| jobs | phrase | Employment intent |
| internship | phrase | Employment intent |
| printable tickets | phrase | Format/printing intent rather than discovery |
| seating chart pdf | phrase | Apply only to event-discovery campaigns; it may be eligible for venue-guide campaigns |

Do **not** add `price`, `compare`, `ticketmaster`, `ticketnetwork`, team names,
artist names, venue names, `onsale`, `presale`, or `ticketscan` as account-wide
negatives. They can represent eligible discovery intent.
