import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTeamBySlug } from '@/data/teams';
import { venues } from '@/data/venues';
import { FeedEvent, cleanEvents } from '@/lib/events';
import { paced } from '@/lib/paced';
import teamIndex from '@/data/teams.generated.json';
import OnsaleRow from '@/components/OnsaleRow';
import TicketNetworkLink from '@/components/TicketNetworkLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

// Six hours, matching the combo pages. Ticketmaster allows 5,000 calls/day;
// the site's current worst case is ~1,920 and ~250 team pages on this window
// add ~1,000. A shorter window would not fit.
export const revalidate = 21600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// tnSlug also lives in teams.generated.json but is not read here — the
// resale link resolves independently by name/venue through
// resolveTicketNetwork (see TicketNetworkLink). Not load-bearing on this page.
const RESOLVED: Record<string, { attractionId: string }> = teamIndex.teams;

// Football only. A cold build already prerenders 304 pages against a feed with
// a 5 req/s spike arrest; prerendering every league would roughly double that
// against a limit that has already broken one deploy. The rest render on
// demand and are cached for the revalidate window.
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
async function getEvents(attractionId: string): Promise<FeedEvent[]> {
  const url = `${API_URL}/api/public/events?attractionId=${attractionId}&limit=40&sort=date`;
  let lastError: unknown;
  for (let attempt = 0; attempt < 4; attempt++) {
    if (attempt > 0) {
      // 500ms, 1s, 2s, plus jitter so retries across the 169 team-page
      // prerenders (and the 160 combo pages sharing the same gate) don't
      // resynchronize and hit the spike arrest together. Matches the combo
      // page's retry shape exactly.
      const wait = 500 * 2 ** (attempt - 1) + Math.random() * 250;
      await new Promise((r) => setTimeout(r, wait));
    }
    try {
      const res = await paced(() => fetch(url, { next: { revalidate } }));
      if (!res.ok) throw new Error(`HTTP ${res.status} for attraction ${attractionId}`);
      const data = await res.json();
      return cleanEvents(data.events || []);
    } catch (err) {
      lastError = err;
    }
  }
  // Rethrows after exhausting retries, deliberately. Swallowing it would let
  // ISR cache a wrong "no games scheduled" page for six hours; a sustained
  // outage should fail loudly.
  throw lastError;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team || !RESOLVED[slug]) return {};
  return {
    title: `${team.name} Tickets — Schedule and Onsale Dates`,
    description: `Every upcoming ${team.name} game, home and away, with onsale and presale dates and where to buy.`,
    alternates: { canonical: `https://www.ticketscan.io/teams/${slug}` },
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
