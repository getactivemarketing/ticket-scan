import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug } from '@/data/cities';
import { getCategoryBySlug } from '@/data/categories';
import { findVenue, Venue } from '@/data/venues';
import { getComboList, isCombo, combosForCity } from '@/data/combos';
import { FeedEvent, formatEtDate } from '@/lib/events';
import OnsaleRow from '@/components/OnsaleRow';

// Six hours, not one. ~200 combo pages on a 1-hour window would push daily
// Ticketmaster calls to ~6,300 against a 5,000 limit. Combo listings change
// slowly; hourly freshness buys nothing here.
export const revalidate = 21600;

interface PageProps {
  params: Promise<{ city: string; category: string }>;
}

export async function generateStaticParams() {
  return getComboList().map((c) => ({ city: c.city, category: c.category }));
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';

async function getEvents(city: string, category: string): Promise<FeedEvent[]> {
  try {
    const res = await fetch(
      `${API_URL}/api/public/events?city=${city}&category=${category}&limit=24`,
      { next: { revalidate: 21600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.events || []) as FeedEvent[];
  } catch {
    return [];
  }
}

interface DerivedVenue {
  name: string;
  guide: Venue | null;
  count: number;
}

/**
 * Which venues host this category in this city — read off the events the feed
 * actually returned, never inferred from a venue's roster of home teams.
 * Mapping a team to an arena encodes an assumption that breaks when a venue
 * is renamed, which has already happened twice in this dataset.
 */
function derivedVenues(events: FeedEvent[]): DerivedVenue[] {
  const byName = new Map<string, DerivedVenue>();
  for (const e of events) {
    if (!e.venue) continue;
    const key = e.venue.toLowerCase();
    const seen = byName.get(key);
    if (seen) {
      seen.count++;
      continue;
    }
    byName.set(key, { name: e.venue, guide: findVenue(e.venue), count: 1 });
  }
  return [...byName.values()].sort((a, b) => b.count - a.count);
}

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
  const { city: citySlug, category: categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const category = getCategoryBySlug(categorySlug);
  if (!city || !category || !isCombo(citySlug, categorySlug)) {
    return { title: 'Page Not Found' };
  }
  const title = `${category.name} in ${city.name} — Schedules and Onsale Dates`;
  const description = `Upcoming ${category.name} events in ${city.name}, ${city.state}, with venue guides and the dates tickets go on sale, including presales.`;
  return {
    title,
    description,
    keywords: [...category.keywords, ...city.keywords].join(', '),
    alternates: { canonical: `https://www.ticketscan.io/tickets/${citySlug}/${categorySlug}` },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function ComboPage({ params }: PageProps) {
  const { city: citySlug, category: categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const category = getCategoryBySlug(categorySlug);

  // Only combos in the committed index exist. Everything else is a 404.
  if (!city || !category || !isCombo(citySlug, categorySlug)) notFound();

  const events = await getEvents(citySlug, categorySlug);
  const venuesHere = derivedVenues(events);
  const upcoming = nextOnsale(events);
  const otherCategories = combosForCity(citySlug).filter((c) => c.category !== categorySlug);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Tickets', item: 'https://www.ticketscan.io/tickets' },
      { '@type': 'ListItem', position: 2, name: city.name, item: `https://www.ticketscan.io/tickets/${citySlug}` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `https://www.ticketscan.io/tickets/${citySlug}/${categorySlug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/tickets" className="hover:text-brand">Tickets</Link>
          <span className="mx-2">/</span>
          <Link href={`/tickets/${citySlug}`} className="hover:text-brand">{city.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{category.name}</span>
        </nav>

        <h1 className="text-3xl font-bold font-heading text-gray-900">
          {category.name} in {city.name}
        </h1>

        {/* Every clause below is derived. Nothing is asserted. */}
        <p className="mt-3 text-gray-600 max-w-2xl">
          {venuesHere.length > 0 ? (
            <>
              {events.length} upcoming {category.name.toLowerCase()} {events.length === 1 ? 'event' : 'events'} in{' '}
              {city.name}, at {venuesHere.slice(0, 3).map((v) => v.name).join(', ')}
              {venuesHere.length > 3 ? ` and ${venuesHere.length - 3} more` : ''}.
            </>
          ) : (
            <>No {category.name.toLowerCase()} events are currently listed in {city.name}. Check back — this page updates as the feed does.</>
          )}
          {upcoming?.onsaleStart && (
            <> The next public onsale is {formatEtDate(upcoming.onsaleStart)}.</>
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
              Where {category.name.toLowerCase()} happens in {city.name}
            </h2>
            <ul className="space-y-3">
              {venuesHere.map((v) => (
                <li key={v.name} className="bg-white rounded-lg p-4">
                  {v.guide ? (
                    <Link href={`/venues/${v.guide.id}`} className="font-medium text-brand hover:underline">
                      {v.guide.name}
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
                      {[...new Set(v.guide.sections.map((s) => s.tier))].join(', ')} seating
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
      </div>
    </div>
  );
}
