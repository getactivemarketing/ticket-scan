import { cache } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTeamBySlug } from '@/data/teams';
import { venues } from '@/data/venues';
import { FeedEvent, cleanTeamEvents, isThinTeamPage } from '@/lib/events';
import { paced } from '@/lib/paced';
import teamIndex from '@/data/teams.generated.json';
import OnsaleRow from '@/components/OnsaleRow';
import TicketNetworkLink from '@/components/TicketNetworkLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

// Six hours, matching every other feed surface. Ticketmaster allows 5,000
// calls/day. Recomputed 2026-09-08 from the windows actually in the tree,
// because the earlier ~1,920 figure omitted four real consumers:
//
//   ISR, worst case (every page refetched once per window)
//     teams        261 x 4  = 1,044
//     venues       184 x 4  =   736
//     combos       180 x 4  =   720
//     city/category 38 x 4  =   152
//     onsales        7 x 24 =   168   (hourly, deliberately)
//     homepage      10 x 4  =    40
//                            -------
//                              2,860
//   Nightly: build:teams 261 + build:venue-ids ~266 + one cold prerender 588
//                            = ~1,115
//   Total ~3,975, about 20% headroom.
//
// A cold prerender is counted because a fresh deployment starts with an empty
// data cache, so every prerendered page refetches. Retries are not counted and
// can multiply a single page render by up to 16 (4 here x 4 in the API's own
// spike-arrest retry), which is the real reason to keep headroom.
export const revalidate = 21600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// tnSlug also lives in teams.generated.json but is not read here — the
// resale link resolves independently by name/venue through
// resolveTicketNetwork (see TicketNetworkLink). Not load-bearing on this page.
const RESOLVED: Record<string, { attractionId: string }> = teamIndex.teams;

// Football only: 169 of the 261 teams. A cold build already prerenders those
// 169 alongside 160 combo pages against a feed with a 5 req/s spike arrest;
// prerendering every league would add another 92 against a limit that has
// already broken one deploy. The other 92 render on demand and are cached for
// the revalidate window.
export async function generateStaticParams() {
  return Object.keys(RESOLVED)
    .filter((slug) => {
      const t = getTeamBySlug(slug);
      return t && (t.league === 'nfl' || t.league === 'college-football');
    })
    .map((slug) => ({ slug }));
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';

// `paced` (src/lib/paced.ts) is a SHARED module-level gate — the combo pages
// prerender 160 pages in the same build and use the exact same import, not a
// copy, so this route's fetches stay serialised against theirs too.
// React-cached so generateMetadata and the page body share ONE result. Both
// need the schedule — metadata to decide whether the page is thin enough to
// noindex — and without this they would each make their own request, doubling
// this route's share of the Ticketmaster budget.
const getEvents = cache(async (attractionId: string): Promise<FeedEvent[]> => {
  const url = `${API_URL}/api/public/events?attractionId=${attractionId}&limit=40&sort=date`;
  let lastError: unknown;
  for (let attempt = 0; attempt < 5; attempt++) {
    if (attempt > 0) {
      // 1s, 3s, 9s, 27s — a ~40s window, plus jitter so retries across the
      // 169 team-page prerenders (and the combo pages sharing the same gate)
      // don't resynchronize. Widened from ~3.5s on 2026-09-09: the site and
      // the API deploy from the SAME push, so a Vercel prerender routinely
      // overlaps a Railway container restart, and 3.5s could not survive one.
      // A build died on /tickets/chicago/soccer with HTTP 500 after exhausting
      // four retries against an API that was simply restarting.
      const wait = 1000 * 3 ** (attempt - 1) + Math.random() * 500;
      await new Promise((r) => setTimeout(r, wait));
    }
    try {
      const res = await paced(() => fetch(url, { next: { revalidate } }));
      if (!res.ok) throw new Error(`HTTP ${res.status} for attraction ${attractionId}`);
      const data = await res.json();
      // Deploy-skew guard. An API build without the attractionId parameter
      // silently DROPS it — Express ignores unknown query params — and returns
      // an unfiltered national feed as a 200. Nothing above catches that: the
      // response is fine, it is just somebody else's events, and ISR would
      // cache "Alabama Crimson Tide Tickets" listing Las Vegas comedy shows for
      // six hours. The API echoes its parsed query back, so make it prove it
      // understood the filter. Also guards an API rollback in the other
      // direction.
      if (data.query?.attractionId !== attractionId) {
        throw new Error(
          `API ignored attractionId ${attractionId} (deploy skew) — refusing to cache an unfiltered feed`,
        );
      }
      // cleanTeamEvents, NOT cleanEvents: this is one team's schedule, where
      // repeated matchups are the data. See src/lib/events.ts for why the two
      // helpers differ.
      return cleanTeamEvents(data.events || []);
    } catch (err) {
      lastError = err;
    }
  }
  // Rethrows after exhausting retries, deliberately. Swallowing it would let
  // ISR cache a wrong "no games scheduled" page for six hours; a sustained
  // outage should fail loudly.
  throw lastError;
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team || !RESOLVED[slug]) return {};

  // A team with no home venue AND no upcoming games has nothing on its page but
  // its own name — no venue panel, no capacity, no seating guide, no city link,
  // no schedule. 60 of 261 teams have no homeVenueSlug (29 MLB, 19 NHL, 9 NBA,
  // 3 college), so this goes live for 29 pages at once when MLB's offseason
  // arrives in November.
  //
  // The spec's offseason design assumes a venue panel is there to carry the
  // page, and the stadium spec explicitly made arena backfill a non-goal, so
  // the data gap is deliberate and stays. What must not happen is asking Google
  // to index a page with nothing on it — that is the scaled-content shape both
  // specs are written against. noindex,follow keeps the URL working and its
  // links crawlable, and lifts itself automatically once a schedule appears.
  const events = await getEvents(RESOLVED[slug].attractionId);
  const isThin = isThinTeamPage(team.homeVenueSlug, events.length);

  return {
    title: `${team.name} Tickets — Schedule and Onsale Dates`,
    description: `Every upcoming ${team.name} game, home and away, with onsale and presale dates and where to buy.`,
    alternates: { canonical: `https://www.ticketscan.io/teams/${slug}` },
    ...(isThin ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function TeamPage({ params }: PageProps) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  const resolved = RESOLVED[slug];
  if (!team || !resolved) notFound();

  const events = await getEvents(resolved.attractionId);
  const homeVenue = team.homeVenueSlug ? venues[team.homeVenueSlug] : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: team.name,
    url: `https://www.ticketscan.io/teams/${slug}`,
    ...(homeVenue
      ? { location: { '@type': 'Place', name: homeVenue.name, address: `${homeVenue.city}, ${homeVenue.state}` } }
      : {}),
  };

  // Spec calls for SportsTeam AND an ItemList of upcoming games (design spec
  // §4). Built from the same `events` array the page renders below, so the
  // structured data never disagrees with what's on screen. Omitted entirely
  // when there are no events — an empty ItemList is worse than none.
  const itemListLd =
    events.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: events.map((event, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'SportsEvent',
              name: event.name,
              startDate: event.date,
              location: {
                '@type': 'Place',
                name: event.venue,
                address: event.city && event.state ? `${event.city}, ${event.state}` : event.city,
              },
            },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {itemListLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      )}
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{team.name} Tickets</h1>
            {homeVenue && (
              <p className="text-xl text-blue-100">
                Home: {homeVenue.name} — {homeVenue.city}, {homeVenue.state} · Capacity{' '}
                {homeVenue.capacity.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <TicketNetworkLink name={team.name} sid={`team-${slug}`} label={`Resale tickets for ${team.name}`} />
            <AffiliateDisclosure />
          </div>

          {events.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                Upcoming {team.name} games
              </h2>
              <div className="space-y-3">
                {events.map((event) => (
                  <OnsaleRow
                    key={event.id}
                    event={event}
                    action={
                      <TicketNetworkLink
                        name={team.name}
                        venue={event.venue}
                        sid={`team-${slug}`}
                        surface="navy"
                      />
                    }
                  />
                ))}
              </div>
            </>
          ) : (
            // Offseason. Render rather than 404: the URL stays indexed, the
            // team-level resale link still works, and the venue content is
            // evergreen. The schedule section is omitted, never rendered empty.
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold font-heading text-gray-900 mb-2">
                No {team.name} games scheduled yet
              </h2>
              <p className="text-gray-600">
                The schedule for the next season has not been released. Resale listings are
                available now for games as they are announced.
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            {homeVenue && (
              <Link href={`/venues/${team.homeVenueSlug}`} className="text-brand hover:text-brand-dark font-medium">
                {homeVenue.name} seating guide →
              </Link>
            )}
            {homeVenue && (
              <Link href={`/tickets/${homeVenue.citySlug ?? homeVenue.city.toLowerCase().replace(/\s+/g, '-')}`} className="text-brand hover:text-brand-dark font-medium">
                More in {homeVenue.city} →
              </Link>
            )}
            <Link href={`/tickets/${team.league}`} className="text-brand hover:text-brand-dark font-medium">
              All {team.league.toUpperCase().replace('-', ' ')} tickets →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
