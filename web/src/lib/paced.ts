// Shared request pacer for build-time fetches against the Ticketmaster-backed
// events API. next.config.ts pins the prerender to a single worker/thread
// specifically so ONE module-level gate can serialise every fetch across
// every route that prerenders at build time; two independent pacers (one per
// route module) would each admit their own 1-request-per-650ms stream, and
// the combined rate can exceed Ticketmaster's 5 req/s spike arrest even
// though each pacer individually stays under it.
//
// EVERY server route that fetches the events API at build time must go
// through this one gate — an unpaced fetch is invisible to the pacer and
// lands on top of the paced stream. All six do: the combo pages
// (src/app/tickets/[slug]/[category]/page.tsx), the team pages
// (src/app/teams/[slug]/page.tsx), the city/category pages
// (src/app/tickets/[slug]/page.tsx), the venue pages
// (src/app/venues/[slug]/page.tsx), UpcomingEvents
// (src/components/UpcomingEvents.tsx) and the onsale calendar
// (src/app/onsales/page.tsx). Do not give any route its own copy,
// and do not add an unpaced fetch.
//
// 650ms, measured, not guessed. The binding constraint is NOT Ticketmaster's
// 5 req/s spike arrest, which is what the earlier 220ms was sized against.
// It is the events API's own express-rate-limit: index.js applies a
// `generalLimiter` of 100 requests per minute per IP to everything under
// /api/, and a whole build comes from one IP. That works out to one request
// per 600ms, and it returns a bare 429 the API never logs, so it looks
// exactly like an upstream spike arrest from the outside.
//
// Verified locally: at 300ms a cold build died with `HTTP 429 for attraction
// K8vZ91758af` after ~118 pages; probing the API directly returns
// {"error":"Too many requests, please slow down"} on request 101 of any
// minute. 650ms leaves ~92 req/min, enough margin for the retries the team
// route makes on top of the steady stream. That puts a cold build at roughly
// four minutes — wall clock is not the binding constraint, the rate limit is.
let gate: Promise<void> = Promise.resolve();

export function paced<T>(fn: () => Promise<T>): Promise<T> {
  const run = gate.then(fn);
  const cool = () => new Promise<void>((r) => setTimeout(r, 650));
  gate = run.then(cool, cool);
  return run;
}
