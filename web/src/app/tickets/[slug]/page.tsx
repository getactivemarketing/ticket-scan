import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, getAllCities, City } from '@/data/cities';
import { getCategoryBySlug, getAllCategories, Category } from '@/data/categories';
import { venues } from '@/data/venues';

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  minPrice: number | null;
  maxPrice: number | null;
  type: string;
  url?: string;
  image?: string;
  state?: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

type PageData =
  | { type: 'city'; data: City }
  | { type: 'category'; data: Category };

function getPageData(slug: string): PageData | null {
  const city = getCityBySlug(slug);
  if (city) return { type: 'city', data: city };

  const category = getCategoryBySlug(slug);
  if (category) return { type: 'category', data: category };

  return null;
}

// Generate static params for all cities and categories
export async function generateStaticParams() {
  const cityParams = getAllCities().map((city) => ({ slug: city.slug }));
  const categoryParams = getAllCategories().map((cat) => ({ slug: cat.slug }));
  return [...cityParams, ...categoryParams];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getPageData(slug);

  if (!pageData) {
    return { title: 'Page Not Found' };
  }

  let title: string;
  let description: string;
  let keywords: string[];

  if (pageData.type === 'city') {
    const city = pageData.data;
    title = `${city.name} Event Tickets - Venues, Schedules and Onsales`;
    description = city.description;
    keywords = city.keywords;
  } else {
    const category = pageData.data;
    title = `${category.name} Tickets - Best Prices`;
    description = category.description;
    keywords = category.keywords;
  }

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `https://www.ticketscan.io/tickets/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.ticketscan.io/tickets/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// Fetch events from public API
async function getEvents(slug: string, type: 'city' | 'category'): Promise<Event[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';
    const queryParam = type === 'city' ? `city=${slug}` : `category=${slug}`;
    const response = await fetch(`${apiUrl}/api/public/events?${queryParam}&limit=12`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) return [];

    const data = await response.json();
    return data.events || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function formatPrice(price: number | null) {
  if (price === null) return 'TBA';
  return `$${price.toFixed(0)}`;
}

export default async function TicketsPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getPageData(slug);

  if (!pageData) {
    notFound();
  }

  const rawEvents = await getEvents(slug, pageData.type);

  // Deduplicate events by (name + venue + date) so recurring same-day showtimes
  // collapse to one entry in both the rendered list and the ItemList JSON-LD.
  // Google's structured-data guidance requires distinct ListItem entries, and
  // the public events API can return multiple showtimes of the same event.
  const seenEventKeys = new Set<string>();
  const events = rawEvents.filter((event) => {
    const key = `${event.name}|${event.venue}|${event.date}`;
    if (seenEventKeys.has(key)) return false;
    seenEventKeys.add(key);
    return true;
  });

  const isCity = pageData.type === 'city';
  const pageTitle = isCity
    ? `${pageData.data.name} Events`
    : (pageData.data as Category).name;
  const pageSubtitle = isCity
    ? `Find tickets for concerts, sports, and shows in ${pageData.data.name}, ${(pageData.data as City).state}`
    : (pageData.data as Category).description;

  // Get related venues for city pages
  const relatedVenues = isCity
    ? (pageData.data as City).venueIds
        .map((id) => venues[id])
        .filter(Boolean)
    : [];

  // Get related categories for city pages, or other categories for category pages
  const relatedLinks = isCity
    ? getAllCategories().slice(0, 4)
    : getAllCities().slice(0, 4);

  // JSON-LD structured data — shared between city and category branches
  const itemListElement = events.slice(0, 5).map((event, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Event',
      name: event.name,
      startDate: event.date,
      // Constant-string fields Google recommends for Event rich results — no data
      // lookup required; every listed event is a scheduled, in-person event.
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      // image + url are returned by /api/public/events for every event; include
      // them so the per-event node is eligible for the richer SERP treatment.
      ...(event.image ? { image: event.image } : {}),
      ...(event.url ? { url: event.url } : {}),
      location: {
        '@type': 'Place',
        name: event.venue,
        address: {
          '@type': 'PostalAddress',
          addressLocality: event.city,
          ...(event.state ? { addressRegion: event.state } : {}),
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

  const itemListName = isCity
    ? `Events in ${pageData.data.name}`
    : `${pageTitle} Events`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `https://www.ticketscan.io/tickets/${slug}#itemlist`,
        name: itemListName,
        description: isCity ? pageData.data.description : pageSubtitle,
        numberOfItems: itemListElement.length,
        itemListElement,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.ticketscan.io/tickets/${slug}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
          { '@type': 'ListItem', position: 2, name: 'Tickets', item: 'https://www.ticketscan.io/tickets' },
          { '@type': 'ListItem', position: 3, name: pageTitle, item: `https://www.ticketscan.io/tickets/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-blue-200 hover:text-white">Home</Link>
              <span className="mx-2 text-blue-300">/</span>
              <Link href="/tickets" className="text-blue-200 hover:text-white">Tickets</Link>
              <span className="mx-2 text-blue-300">/</span>
              <span>{pageTitle}</span>
            </nav>

            <div className="flex items-center gap-4 mb-4">
              {!isCity && (
                <span className="text-4xl">{(pageData.data as Category).icon}</span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold font-heading">
                {pageTitle} Tickets
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-2xl">
              {pageSubtitle}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Events */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
                {isCity ? `Upcoming Events in ${pageData.data.name}` : `Upcoming ${pageTitle} Events`}
              </h2>

              {events.length > 0 ? (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold font-heading text-lg text-gray-900 mb-2">
                            {event.name}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>{formatDate(event.date)}</span>
                            <span>{event.time}</span>
                            {event.venue && <span>{event.venue}</span>}
                            <span className="text-brand font-medium">{event.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {event.minPrice ? (
                            <div className="text-right">
                              <span className="text-sm text-gray-500">From</span>
                              <p className="text-2xl font-bold text-green-600">
                                {formatPrice(event.minPrice)}
                              </p>
                            </div>
                          ) : (
                            <span className="text-gray-500">Price TBA</span>
                          )}
                          <Link
                            href="/register"
                            className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
                          >
                            Track Price
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-md p-12 text-center">
                  <p className="text-gray-600 mb-4">No upcoming events found.</p>
                  <Link
                    href="/register"
                    className="text-brand hover:text-brand-dark font-medium"
                  >
                    Sign up to get notified when events are announced
                  </Link>
                </div>
              )}

              {/* More Events CTA */}
              <div className="mt-8 text-center">
                <Link
                  href="/register"
                  className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  View All Events & Track Prices
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Venues (for city pages) */}
              {isCity && relatedVenues.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
                    Popular Venues in {pageData.data.name}
                  </h3>
                  <div className="space-y-3">
                    {relatedVenues.map((venue) => (
                      <Link
                        key={venue.id}
                        href={`/venues/${venue.id}`}
                        className="block p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                      >
                        <p className="font-medium text-gray-900">{venue.name}</p>
                        <p className="text-sm text-gray-500">
                          {venue.homeTeams?.join(', ') || venue.type}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-brand to-navy rounded-xl shadow-md p-6 text-white mb-6">
                <h3 className="text-lg font-bold font-heading mb-2">
                  Never Miss a Deal
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Track prices across multiple ticket sites and get alerts when prices drop.
                </p>
                <Link
                  href="/register"
                  className="block bg-white text-brand text-center py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Start Free
                </Link>
              </div>

              {/* Related Categories/Cities */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
                  {isCity ? 'Browse by Category' : 'Browse by City'}
                </h3>
                <div className="space-y-2">
                  {relatedLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/tickets/${item.slug}`}
                      className="block text-brand hover:text-brand-dark font-medium"
                    >
                      {'icon' in item && <span className="mr-2">{item.icon}</span>}
                      {item.name} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

              {/* Blog Tips */}
              <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
                  Buying Guides
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog/best-time-to-buy-concert-tickets" className="text-brand hover:text-brand-dark">
                      Best Time to Buy Tickets
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/last-minute-ticket-deals-guide" className="text-brand hover:text-brand-dark">
                      Last Minute Deals Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ticketmaster-vs-seatgeek-comparison" className="text-brand hover:text-brand-dark">
                      Ticketmaster vs SeatGeek
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-brand hover:text-brand-dark font-medium">
                      All Guides &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-bold font-heading text-gray-900 mb-4">
              {isCity
                ? `Find the Best Ticket Prices in ${pageData.data.name}`
                : `Compare ${pageTitle} Ticket Prices`}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {pageData.data.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ticket Scan searches Ticketmaster, SeatGeek and other major ticket sites from one place, publishes venue guides covering seating and access, and tells you when tickets go on sale - including presale windows that open before the public onsale.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
