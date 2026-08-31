import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug } from '@/data/cities';
import { getCategoryBySlug } from '@/data/categories';
import { findVenue, Venue } from '@/data/venues';
import { getComboList, isCombo, combosForCity, combosForCategory } from '@/data/combos';
import { FeedEvent, formatEtDate, cleanEvents } from '@/lib/events';
import OnsaleRow from '@/components/OnsaleRow';

// Six hours, not one. 160 combo pages on a 1-hour window would push daily
// Ticketmaster calls to ~6,300 against a 5,000 limit. Combo listings change
// slowly; hourly freshness buys nothing here.
export const revalidate = 21600;

interface PageProps {
  params: Promise<{ slug: string; category: string }>;
}

export async function generateStaticParams() {
  return getComboList().map((c) => ({ slug: c.city, category: c.category }));
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';

// Prerendering 160 pages hammers a feed with a 5 req/s spike arrest. Serialise
// the fetches and space them, the same way UpcomingEvents does, so a deploy
// cannot rate-limit itself into a failed build.
let gate: Promise<void> = Promise.resolve();
function paced<T>(fn: () => Promise<T>): Promise<T> {
  const run = gate.then(fn);
  const cool = () => new Promise<void>((r) => setTimeout(r, 220));
  gate = run.then(cool, cool);
  return run;
}

async function getEvents(city: string, category: string): Promise<FeedEvent[]> {
  const url = `${API_URL}/api/public/events?city=${city}&category=${category}&limit=24`;
  let lastError: unknown;
  for (let attempt = 0; attempt < 4; attempt++) {
    if (attempt > 0) {
      // 500ms, 1s, 2s, plus jitter so retries across the 160 prerenders don't
      // resynchronize and hit the spike arrest together.
      const wait = 500 * 2 ** (attempt - 1) + Math.random() * 250;
      await new Promise((r) => setTimeout(r, wait));
    }
    try {
      const res = await paced(() => fetch(url, { next: { revalidate: 21600 } }));
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${city}/${category}`);
      const data = await res.json();
      if (!Array.isArray(data.events)) {
        throw new Error(`malformed body for ${city}/${category}`);
      }
      return data.events as FeedEvent[];
    } catch (err) {
      lastError = err;
    }
  }
  // Rethrow rather than returning []. Swallowing this would cache a page
  // claiming no events exist for a combo the index says has at least five —
  // and ISR would serve that for six hours. Throwing lets Next keep the last
  // good page instead.
  throw lastError;
}

interface DerivedVenue {
  name: string;
  guide: Venue | null;
  count: number;
}

const squash = (v: string) => v.toLowerCase().replace(/[^a-z0-9]/g, '');

/**
 * findVenue does a loose bidirectional substring search, which is fine for
 * discovering a candidate but wrong for confirming one: "The Theater at
 * Madison Square Garden" is a genuine substring match for the msg guide even
 * though it is a distinct, ~5,600-seat room inside the same complex. Only
 * attach a guide when the feed's venue string and the guide's name are the
 * same string, modulo case and punctuation — anything looser risks printing
 * the wrong capacity and tier list under the right link. See
 * UpcomingEvents.tsx's venueMatches for the same squash-and-compare idea,
 * tightened to equality here because the candidate is already the product of
 * a loose search.
 */
function matchingGuide(feedVenueName: string): Venue | null {
  const candidate = findVenue(feedVenueName);
  if (!candidate) return null;
  return squash(candidate.name) === squash(feedVenueName) ? candidate : null;
}

/**
 * Which venues host this category in this city — read off the events the feed
 * actually returned, never inferred from a venue's roster of home teams.
 * Mapping a team to an arena encodes an assumption that breaks when a venue
 * is renamed, which has already happened twice in this dataset.
 */
function derivedVenues(events: FeedEvent[]): DerivedVenue[] {
  const byKey = new Map<string, DerivedVenue>();
  for (const e of events) {
    if (!e.venue) continue;
    const guide = matchingGuide(e.venue);
    // Group by guide id when a guide matched, so two feed-name variants of
    // the same physical venue collapse into one row instead of splitting the
    // count across duplicate list items with the same link.
    const key = guide ? `guide:${guide.id}` : `name:${e.venue.toLowerCase()}`;
    const seen = byKey.get(key);
    if (seen) {
      seen.count++;
      continue;
    }
    byKey.set(key, { name: e.venue, guide, count: 1 });
  }
  return [...byKey.values()].sort((a, b) => b.count - a.count);
}

// Fixed display order and label for each seating tier, independent of enum
// declaration order — the feed/venue data has no natural ordering.
const TIER_ORDER: Venue['sections'][number]['tier'][] = ['floor', 'lower', 'club', 'upper', 'suite'];
const TIER_LABELS: Record<Venue['sections'][number]['tier'], string> = {
  floor: 'floor',
  lower: 'lower bowl',
  club: 'club',
  upper: 'upper bowl',
  suite: 'suite',
};

/** The next event whose public onsale has not opened yet, if any. */
function nextOnsale(events: FeedEvent[]): FeedEvent | null {
  const now = Date.now();
  return (
    events
      .filter((e) => e.onsaleStart && new Date(e.onsaleStart).getTime() > now)
      .sort((a, b) => new Date(a.onsaleStart as string).getTime() - new Date(b.onsaleStart as string).getTime())[0] || null
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: citySlug, category: categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const category = getCategoryBySlug(categorySlug);
  if (!city || !category || !isCombo(citySlug, categorySlug)) {
    return { title: 'Page Not Found' };
  }
  const title = `${category.name} in ${city.name} — Schedules and Onsale Dates`;
  const description = `Upcoming ${category.name} events in ${city.name}, ${city.state}, with venues and the dates tickets go on sale, including presales.`;
  return {
    title,
    description,
    keywords: [...category.keywords, ...city.keywords].join(', '),
    alternates: { canonical: `https://www.ticketscan.io/tickets/${citySlug}/${categorySlug}` },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function ComboPage({ params }: PageProps) {
  const { slug: citySlug, category: categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const category = getCategoryBySlug(categorySlug);

  // Only combos in the committed index exist. Everything else is a 404.
  if (!city || !category || !isCombo(citySlug, categorySlug)) notFound();

  const events = cleanEvents(await getEvents(citySlug, categorySlug));
  const venuesHere = derivedVenues(events);
  const upcoming = nextOnsale(events);
  const otherCategories = combosForCity(citySlug).filter((c) => c.category !== categorySlug);
  const otherCities = combosForCategory(categorySlug).filter((c) => c.city !== citySlug);

  const pageUrl = `https://www.ticketscan.io/tickets/${citySlug}/${categorySlug}`;

  // Mirrors the @graph structure the parent city/category page emits
  // (web/src/app/tickets/[slug]/page.tsx) so these 160 pages carry the same
  // ItemList event structured data, plus the breadcrumb.
  const itemListElement = events.slice(0, 5).map((event, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Event',
      name: event.name as string,
      startDate: event.date,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      ...(event.image ? { image: event.image } : {}),
      ...(event.url ? { url: event.url } : {}),
      location: {
        '@type': 'Place',
        name: event.venue,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          addressRegion: city.state,
        },
      },
      offers: event.minPrice
        ? {
            '@type': 'AggregateOffer',
            lowPrice: event.minPrice,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            ...(event.url ? { url: event.url } : {}),
          }
        : undefined,
    },
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#itemlist`,
        name: `${category.name} in ${city.name}`,
        description: `Upcoming ${category.name} events in ${city.name}, ${city.state}`,
        numberOfItems: itemListElement.length,
        itemListElement,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
          { '@type': 'ListItem', position: 2, name: 'Tickets', item: 'https://www.ticketscan.io/tickets' },
          { '@type': 'ListItem', position: 3, name: city.name, item: `https://www.ticketscan.io/tickets/${citySlug}` },
          { '@type': 'ListItem', position: 4, name: category.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/tickets" className="hover:text-brand">Tickets</Link>
          <span className="mx-2">/</span>
          <Link href={`/tickets/${citySlug}`} className="hover:text-brand">{city.name}</Link>
          <span className="mx-2">/</span>
          <Link href={`/tickets/${categorySlug}`} className="hover:text-brand">{category.name}</Link>
        </nav>

        <h1 className="text-3xl font-bold font-heading text-gray-900">
          {category.name} in {city.name}
        </h1>

        {/* Every clause below is derived. Nothing is asserted. */}
        <p className="mt-3 text-gray-600 max-w-2xl">
          {events.length > 0 ? (
            <>
              Showing the next {events.length} {category.noun} in {city.name}
              {venuesHere.length > 0 && (
                <>
                  , at {venuesHere.slice(0, 3).map((v) => v.name).join(', ')}
                  {venuesHere.length > 3 ? ` and ${venuesHere.length - 3} more` : ''}
                </>
              )}
              .
            </>
          ) : (
            <>No {category.noun} are currently listed in {city.name}. Check back — this page updates as the feed does.</>
          )}
          {upcoming?.onsaleStart && (
            <> One of these opens {formatEtDate(upcoming.onsaleStart)}.</>
          )}
        </p>

        {events.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold font-heading text-gray-900 mb-4">Upcoming events</h2>
            <div className="space-y-2">
              {events.map((event) => (
                <OnsaleRow key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {venuesHere.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold font-heading text-gray-900 mb-4">
              Where {category.noun} happen in {city.name}
            </h2>
            <ul className="space-y-3">
              {venuesHere.map((v) => (
                <li key={v.name} className="bg-white rounded-lg p-4">
                  {v.guide ? (
                    <Link href={`/venues/${v.guide.id}`} className="font-medium text-brand hover:underline">
                      {v.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-gray-900">{v.name}</span>
                  )}
                  <span className="text-sm text-gray-500 ml-2">
                    {v.count} upcoming {v.count === 1 ? 'event' : 'events'}
                  </span>
                  {v.guide && (
                    <p className="text-sm text-gray-600 mt-1">
                      {v.guide.capacity.toLocaleString()} capacity ·{' '}
                      {TIER_ORDER.filter((t) => v.guide!.sections.some((s) => s.tier === t))
                        .map((t) => TIER_LABELS[t])
                        .join(', ')}{' '}
                      seating
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {otherCategories.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold font-heading text-gray-900 mb-4">
              More in {city.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherCategories.map((c) => {
                const cat = getCategoryBySlug(c.category);
                if (!cat) return null;
                return (
                  <Link
                    key={c.category}
                    href={`/tickets/${citySlug}/${c.category}`}
                    className="bg-white rounded-lg px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors"
                  >
                    <span aria-hidden="true">{cat.icon}</span> {cat.name}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {otherCities.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold font-heading text-gray-900 mb-4">
              {category.name} in other cities
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherCities.map((c) => {
                const cty = getCityBySlug(c.city);
                if (!cty) return null;
                return (
                  <Link
                    key={c.city}
                    href={`/tickets/${c.city}/${categorySlug}`}
                    className="bg-white rounded-lg px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors"
                  >
                    {cty.name}
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
