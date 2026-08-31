import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prerendering the 160 combo pages depends on a module-level request pacer
  // in that route to stay inside Ticketmaster's 5 req/s spike arrest (see
  // src/app/tickets/[slug]/[category]/page.tsx). A pacer only serialises
  // fetches within one worker; parallel prerender workers each get their own
  // module instance and would defeat it. Pin the build to one worker/thread
  // so the pacer actually serialises every combo fetch.
  experimental: { cpus: 1, workerThreads: false },
};

export default nextConfig;
