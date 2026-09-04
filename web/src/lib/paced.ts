// Shared request pacer for build-time fetches against the Ticketmaster-backed
// events API. next.config.ts pins the prerender to a single worker/thread
// specifically so ONE module-level gate can serialise every fetch across
// every route that prerenders at build time; two independent pacers (one per
// route module) would each admit their own 1-request-per-220ms stream, and
// the combined rate can exceed Ticketmaster's 5 req/s spike arrest even
// though each pacer individually stays under it. Both the combo pages
// (src/app/tickets/[slug]/[category]/page.tsx) and the team pages
// (src/app/teams/[slug]/page.tsx) prerender in the same build and must share
// this one gate. Do not give either route its own copy again.
let gate: Promise<void> = Promise.resolve();

export function paced<T>(fn: () => Promise<T>): Promise<T> {
  const run = gate.then(fn);
  const cool = () => new Promise<void>((r) => setTimeout(r, 220));
  gate = run.then(cool, cool);
  return run;
}
