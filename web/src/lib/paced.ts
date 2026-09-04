// Shared request pacer for build-time fetches against the Ticketmaster-backed
// events API. next.config.ts pins the prerender to a single worker/thread
// specifically so ONE module-level gate can serialise every fetch across
// every route that prerenders at build time; two independent pacers (one per
// route module) would each admit their own 1-request-per-300ms stream, and
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
// 300ms, not 220ms: the paced stream alone ran ~4.5 req/s against a 5 req/s
// spike arrest, with no headroom for a retry. The build takes under two
// minutes either way — wall clock is not the binding constraint, the rate
// limit is.
let gate: Promise<void> = Promise.resolve();

export function paced<T>(fn: () => Promise<T>): Promise<T> {
  const run = gate.then(fn);
  const cool = () => new Promise<void>((r) => setTimeout(r, 300));
  gate = run.then(cool, cool);
  return run;
}
