import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { venues, getVenueBySlug, tierPricing } from '@/data/venues';

// Venue guides had no links to each other, so each one was an SEO island. Relate
// them same-state first, then same-type, so the 25 guides form a crawlable
// cluster. Ordering is deterministic for stable static output.
function getRelatedVenues(current: typeof venues[string], limit = 6) {
  const others = Object.values(venues).filter((v) => v.id !== current.id);
  const score = (v: typeof current) =>
    (v.state === current.state ? 0 : 1) * 2 + (v.type === current.type ? 0 : 1);
  return [...others]
    .sort((a, b) => score(a) - score(b) || a.name.localeCompare(b.name))
    .slice(0, limit);
}


interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  minPrice: number | null;
  maxPrice: number | null;
  type: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all venues
export async function generateStaticParams() {
  return Object.keys(venues).map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    return { title: 'Venue Not Found' };
  }

  const title = `${venue.name} Tickets - Seating Guide and Onsale Dates`;
  const description = venue.description || `Events at ${venue.name} in ${venue.city}, ${venue.state} - seating guide, getting there, and when tickets go on sale.`;

  return {
    title,
    description,
    keywords: venue.keywords?.join(', '),
    alternates: {
      canonical: `https://www.ticketscan.io/venues/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.ticketscan.io/venues/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// Fetch events from public API
async function getVenueEvents(slug: string): Promise<Event[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';
    const response = await fetch(`${apiUrl}/api/public/events?venue=${slug}&limit=10`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) return [];

    const data = await response.json();
    return data.events || [];
  } catch (error) {
    console.error('Error fetching venue events:', error);
    return [];
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatPrice(price: number | null) {
  if (price === null) return 'TBA';
  return `$${price.toFixed(0)}`;
}

export default async function VenuePage({ params }: PageProps) {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    notFound();
  }

  // Keep stale cached/API responses from publishing past events in the page
  // or its Event JSON-LD. The API requests future events, but this boundary
  // protects SEO output when an upstream/CDN response is older than its TTL.
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const events = (await getVenueEvents(slug)).filter((event) => {
    const eventDate = new Date(`${event.date}T00:00:00`);
    return !Number.isNaN(eventDate.getTime()) && eventDate >= today;
  });

  // JSON-LD structured data
  const citySlug = venue.citySlug || venue.city.toLowerCase().replace(/\s+/g, '-');
  const venueCountry = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'].includes(venue.state) ? 'CA' : 'US';

  // Per-event nodes from the already-fetched `events` list (same null-safe
  // pattern proven on /tickets/[slug]): emit an `offers` block only when
  // minPrice exists, so we never declare a price we don't have. Each event
  // references the venue's Place node by @id rather than duplicating the address.
  const eventListElement = events.slice(0, 5).map((event, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Event',
      name: event.name,
      startDate: event.date,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@id': `https://www.ticketscan.io/venues/${slug}#place` },
      ...(event.minPrice
        ? {
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: event.minPrice,
              ...(event.maxPrice ? { highPrice: event.maxPrice } : {}),
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: `https://www.ticketscan.io/venues/${slug}`,
            },
          }
        : {}),
    },
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': venue.type === 'stadium' ? 'StadiumOrArena' : venue.type === 'arena' ? 'StadiumOrArena' : 'PerformingArtsTheater',
        '@id': `https://www.ticketscan.io/venues/${slug}#place`,
        name: venue.name,
        description: venue.description,
        url: `https://www.ticketscan.io/venues/${slug}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: venue.city,
          addressRegion: venue.state,
          addressCountry: venueCountry,
        },
        maximumAttendeeCapacity: venue.capacity,
      },
      // Only surface the event list when the venue actually has upcoming events,
      // mirroring the rendered "Upcoming Events" section below.
      ...(eventListElement.length > 0
        ? [
            {
              '@type': 'ItemList',
              '@id': `https://www.ticketscan.io/venues/${slug}#events`,
              name: `Upcoming Events at ${venue.name}`,
              numberOfItems: eventListElement.length,
              itemListElement: eventListElement,
            },
          ]
        : []),
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.ticketscan.io/venues/${slug}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
          { '@type': 'ListItem', position: 2, name: `${venue.city} Events`, item: `https://www.ticketscan.io/tickets/${citySlug}` },
          { '@type': 'ListItem', position: 3, name: venue.name, item: `https://www.ticketscan.io/venues/${slug}` },
        ],
      },
      ...(venue.faqs && venue.faqs.length > 0
        ? [{
            '@type': 'FAQPage',
            '@id': `https://www.ticketscan.io/venues/${slug}#faq`,
            mainEntity: venue.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }]
        : []),
    ],
  };

  // Seating tier info
  const tiers = [
    { key: 'floor', ...tierPricing.floor, color: 'bg-brand', light: 'bg-brand/10', text: 'text-brand-dark' },
    { key: 'club', ...tierPricing.club, color: 'bg-amber-500', light: 'bg-amber-100', text: 'text-amber-700' },
    { key: 'lower', ...tierPricing.lower, color: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-700' },
    { key: 'upper', ...tierPricing.upper, color: 'bg-green-500', light: 'bg-green-100', text: 'text-green-700' },
  ];

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
              <Link href={`/tickets/${citySlug}`} className="text-blue-200 hover:text-white">
                {venue.city}
              </Link>
              <span className="mx-2 text-blue-300">/</span>
              <span>{venue.name}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              {venue.name} Tickets
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              {venue.city}, {venue.state} - Capacity: {venue.capacity.toLocaleString()}
            </p>

            {venue.homeTeams && venue.homeTeams.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {venue.homeTeams.map((team) => (
                  <span key={team} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Home of {team}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Events */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
                Upcoming Events at {venue.name}
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

              {/* SEO Content */}
              <div className="mt-12 bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-bold font-heading text-gray-900 mb-4">
                  About {venue.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {venue.description || `${venue.name} is a ${venue.type} in ${venue.city}, ${venue.state} with a capacity of ${venue.capacity.toLocaleString()}, hosting ${venue.homeTeams ? venue.homeTeams.join(', ') + ' games, ' : ''}concerts, and special events. TicketScan tracks when tickets for ${venue.name} events go on sale, including presale windows that open before the public onsale.`}
                </p>
              </div>

              {venue.faqs && venue.faqs.length > 0 && (
                <div className="mt-8 bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-xl font-bold font-heading text-gray-900 mb-4">
                    United Center Ticket FAQs
                  </h2>
                  <div className="space-y-5">
                    {venue.faqs.map((faq) => (
                      <div key={faq.question}>
                        <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed mt-1">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Seating Guide */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
                  Seating Sections
                </h3>
                <div className="space-y-3">
                  {tiers.map((tier) => (
                    <div
                      key={tier.key}
                      className={`flex items-center justify-between p-3 rounded-lg ${tier.light}`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${tier.color}`}></div>
                        <span className={`font-medium ${tier.text}`}>{tier.label}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        ~{tier.multiplier}x base
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  * Prices vary by event and availability
                </p>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-brand to-navy rounded-xl shadow-md p-6 text-white">
                <h3 className="text-lg font-bold font-heading mb-2">
                  Track Ticket Prices
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get alerts when prices drop and find the best time to buy.
                </p>
                <Link
                  href="/register"
                  className="block bg-white text-brand text-center py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Start Free
                </Link>
              </div>

              {/* Related Links */}
              <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
                  More in {venue.city}
                </h3>
                <Link
                  href={`/tickets/${citySlug}`}
                  className="block text-brand hover:text-brand-dark font-medium"
                >
                  All {venue.city} Events &rarr;
                </Link>
              </div>

              {/* Blog Tips */}
              <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
                  Ticket Buying Tips
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog/best-time-to-buy-concert-tickets" className="text-brand hover:text-brand-dark">
                      Best Time to Buy Tickets
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ticket-buying-mistakes-to-avoid" className="text-brand hover:text-brand-dark">
                      7 Mistakes to Avoid
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-brand hover:text-brand-dark font-medium">
                      View All Tips &rarr;
                    </Link>
                  </li>
                </ul>
              </div>

              {/* More Venues — builds the internal link cluster across all guides */}
              <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
                  More Venue Guides
                </h3>
                <ul className="space-y-2 text-sm">
                  {getRelatedVenues(venue).map((related) => (
                    <li key={related.id}>
                      <Link href={`/venues/${related.id}`} className="text-brand hover:text-brand-dark">
                        {related.name}
                      </Link>
                      <span className="text-gray-400"> &middot; {related.city}, {related.state}</span>
                    </li>
                  ))}
                  <li className="pt-1">
                    <Link href="/venues" className="text-brand hover:text-brand-dark font-medium">
                      All Venue Guides &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
