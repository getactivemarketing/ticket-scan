# TicketScan Anomaly Alerts — 2026-08-22

## Critical

- Price history is stale. Latest returned record: `2026-07-24T20:01:07Z`; there are no current 24-hour or 7-day records. Price recommendations and drop alerts may be stale.

## High

- `/api/admin/alerts` fails with `{success:false,error:"Failed to get alerts"}`. Alert activity cannot be audited from the admin endpoint.
- Required conversion events and UTM capture are not visible in the frontend implementation. GTM loads, but business-critical event telemetry is not verified.

## Moderate

- Watchlist additions rose to 3 in the latest calendar day versus a 1.29/day seven-day average (+133%). This is a positive anomaly, but should be rechecked after analytics instrumentation is available.
- Rolling `usersToday` from `/api/admin/stats` (3) differs from the UTC calendar-day signup count (4), because the endpoints use different time windows.

