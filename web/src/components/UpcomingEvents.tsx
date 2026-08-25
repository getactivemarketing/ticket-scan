import Link from 'next/link';
import { getVenueBySlug } from '@/data/venues';

// Venues we publish guides for, chosen for geographic spread. Two constraints
// shaped this list. The API's `city` and `category` params are accepted but not
// applied, so only `venue` filters at all — and `venue` itself is unreliable for
// some slugs: united-center and wrigley-field return events at other venues
// entirely, kaseya-center 500s, wells-fargo-center and footprint-center return
// nothing. Every slug below was verified to return correctly-attributed events;
// the venueMatches() guard below catches any later regression.
const FEATURED = [
  'msg',
  'crypto-arena',
  'td-garden',
  'american-airlines-center',
  'toyota-center',
  'state-farm-arena',
  'climate-pledge-arena',
  'little-caesars-arena',
  'ball-arena',
  't-mobile-arena',
];

interface ApiEvent {
  id: string;
  name: string;
  date: string;
  time?: string;
  type?: string;
  venue?: string;
  city?: string;
  state?: string;
}

interface UpcomingEvent extends ApiEvent {
  venueSlug: string;
  venueName: string;
  city: string;
  state: string;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';

const squash = (v?: string) => (v || '').toLowerCase().replace(/[^a-z0-9]/g, '');

function venueMatches(expected: string, actual?: string) {
  if (!actual) return false;
  const a = squash(expected);
  const b = squash(actual);
  return a === b || a.includes(b) || b.includes(a);
}

async function getVenueEvents(slug: string): Promise<UpcomingEvent[]> {
  const venue = getVenueBySlug(slug);
  if (!venue) return [];

  try {
    const res = await fetch(`${API_URL}/api/public/events?venue=${slug}&limit=6`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const data = await res.json();
    const events: ApiEvent[] = data.events || [];

    // Never label an event with a venue it isn't at: the endpoint has been seen
    // returning unrelated venues for a slug. Display the venue the API reports,
    // and only after confirming it's the one we requested.
    return events
      .filter((e) => venueMatches(venue.name, e.venue))
      .map((e) => ({
        ...e,
        venueSlug: slug,
        venueName: e.venue || venue.name,
        city: e.city || venue.city,
        state: e.state || venue.state,
      }));
  } catch (error) {
    console.error(`Failed to load events for ${slug}:`, error);
    return [];
  }
}

// The Ticketmaster feed mixes real ticketed events with hospitality add-ons,
// venue tours and premium-seating upsells. index.js filters these server-side
// for search; the public events endpoint does not, so filter here too.
const EXCLUDE = [
  /hospitality/i,
  /vip package/i,
  /\bsuite\b/i,
  /\b(arena|stadium|venue)s? tours?\b/i,
  /tour experience/i,
  /red carpet/i,
  /club (access|experience|level|seats?|seating)/i,
  /(premium|preferred|priority) seating/i,
  /\blounge\b/i,
  /parking/i,
  /meet (&|and) greet/i,
];

// A few feed rows arrive with a missing or blank name; they render as an empty
// card, so require a usable title before anything else.
const isRealEvent = (name?: string) =>
  !!name && name.trim().length > 1 && !EXCLUDE.some((rx) => rx.test(name));

// Series like "Cirque du Soleil" list the same title on consecutive nights.
// Showing one row per night crowds out every other venue, so keep the first.
const normalizeName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

function formatDate(date: string) {
  // API dates are plain YYYY-MM-DD. Parsing that string directly would be read
  // as UTC midnight and render as the previous day west of Greenwich, so build
  // the date from its parts instead.
  const [y, m, d] = date.split('-').map(Number);
  if (!y || !m || !d) return { weekday: '', month: '', day: '' };
  const dt = new Date(y, m - 1, d);
  return {
    weekday: dt.toLocaleDateString('en-US', { weekday: 'short' }),
    month: dt.toLocaleDateString('en-US', { month: 'short' }),
    day: String(d),
  };
}

export default async function UpcomingEvents() {
  // Deliberately sequential. Ticketmaster enforces a spike arrest of 5
  // requests/second with a burst of 1, so fanning ten venue lookups out with
  // Promise.all trips the limit and drops most of them. This render is cached
  // for an hour, so paying ~1s once per revalidation costs nothing.
  const perVenue: UpcomingEvent[][] = [];
  for (const slug of FEATURED) {
    perVenue.push(await getVenueEvents(slug));
  }

  const seen = new Set<string>();

  // Two per venue keeps a single busy arena from filling the whole grid.
  const events = perVenue
    .flatMap((list) =>
      list
        .filter((e) => isRealEvent(e.name))
        .filter((e) => {
          const key = normalizeName(e.name);
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        })
        .slice(0, 2)
    )
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 8);

  // The API is a live dependency. If it's down, render nothing rather than an
  // empty shell — the sections around this one still stand on their own.
  if (events.length === 0) return null;

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
          <div>
            <h2 className="text-2xl font-heading font-bold text-navy tracking-tight">Coming up</h2>
            <p className="text-gray-500 text-sm mt-1">
              Upcoming dates at venues we cover, straight from the Ticketmaster feed.
            </p>
          </div>
          <Link href="/dashboard" className="text-sm font-medium text-brand hover:underline">
            Search all events →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {events.map((event) => {
            const { weekday, month, day } = formatDate(event.date);
            return (
              <Link
                key={`${event.venueSlug}-${event.id}`}
                href={`/event/${event.id}`}
                className="flex gap-4 bg-white border border-gray-200 hover:border-brand/40 p-4 rounded-xl transition-colors group"
              >
                <div className="flex-shrink-0 text-center w-12">
                  <p className="text-[11px] uppercase tracking-wide text-gray-400">{weekday}</p>
                  <p className="font-heading font-bold text-navy text-lg leading-tight tabular-nums">{day}</p>
                  <p className="text-[11px] uppercase tracking-wide text-gray-400">{month}</p>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-navy text-sm leading-snug group-hover:text-brand transition-colors line-clamp-2">
                    {event.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 truncate">{event.venueName}</p>
                  <p className="text-xs text-gray-400 truncate">
                    {event.city}, {event.state}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
