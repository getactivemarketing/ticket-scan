import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prerendering depends on a SHARED module-level request pacer
  // (src/lib/paced.ts) to stay inside Ticketmaster's 5 req/s spike arrest.
  // The 160 combo pages (src/app/tickets/[slug]/[category]/page.tsx) and the
  // 169 prerendered team pages (src/app/teams/[slug]/page.tsx) build in the
  // same run and share that one gate, as do the city, venue and
  // UpcomingEvents fetches. A pacer only serialises fetches within one
  // worker; parallel prerender workers each get their own module instance and
  // would defeat it. Pin the build to one worker/thread so the pacer actually
  // serialises every fetch across every route.
  experimental: { cpus: 1, workerThreads: false },
};

export default nextConfig;
