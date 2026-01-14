import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { venues, getVenueBySlug, tierPricing } from '@/data/venues';

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

  const title = `${venue.name} Tickets - Compare Prices | Ticket Scan`;
  const description = venue.description || `Find cheap tickets for events at ${venue.name} in ${venue.city}, ${venue.state}. Compare prices across Ticketmaster, SeatGeek and more.`;

  return {
    title,
    description,
    keywords: venue.keywords?.join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://ticketscan.io/venues/${slug}`,
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

  const events = await getVenueEvents(slug);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: venue.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: venue.city,
      addressRegion: venue.state,
      addressCountry: 'US',
    },
    maximumAttendeeCapacity: venue.capacity,
  };

  // Seating tier info
  const tiers = [
    { key: 'floor', ...tierPricing.floor, color: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-700' },
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
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-purple-200 hover:text-white">Home</Link>
              <span className="mx-2 text-purple-300">/</span>
              <Link href={`/tickets/${venue.city.toLowerCase().replace(' ', '-')}`} className="text-purple-200 hover:text-white">
                {venue.city}
              </Link>
              <span className="mx-2 text-purple-300">/</span>
              <span>{venue.name}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {venue.name} Tickets
            </h1>
            <p className="text-xl text-purple-100 mb-6">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
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
                          <h3 className="font-bold text-lg text-gray-900 mb-2">
                            {event.name}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>{formatDate(event.date)}</span>
                            <span>{event.time}</span>
                            <span className="text-purple-600 font-medium">{event.type}</span>
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
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Sign up to get notified when events are announced
                  </Link>
                </div>
              )}

              {/* SEO Content */}
              <div className="mt-12 bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  About {venue.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {venue.description || `${venue.name} is a premier ${venue.type} venue located in ${venue.city}, ${venue.state}. With a capacity of ${venue.capacity.toLocaleString()}, it hosts a variety of events including ${venue.homeTeams ? venue.homeTeams.join(', ') + ' games, ' : ''}concerts, and special events. Use Ticket Scan to compare prices across multiple ticket sites and find the best deals.`}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Seating Guide */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
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
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-lg font-bold mb-2">
                  Track Ticket Prices
                </h3>
                <p className="text-purple-100 text-sm mb-4">
                  Get alerts when prices drop and find the best time to buy.
                </p>
                <Link
                  href="/register"
                  className="block bg-white text-purple-600 text-center py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors"
                >
                  Start Free
                </Link>
              </div>

              {/* Related Links */}
              <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  More in {venue.city}
                </h3>
                <Link
                  href={`/tickets/${venue.city.toLowerCase().replace(' ', '-')}`}
                  className="block text-purple-600 hover:text-purple-700 font-medium"
                >
                  All {venue.city} Events &rarr;
                </Link>
              </div>

              {/* Blog Tips */}
              <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Ticket Buying Tips
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog/best-time-to-buy-concert-tickets" className="text-purple-600 hover:text-purple-700">
                      Best Time to Buy Tickets
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ticket-buying-mistakes-to-avoid" className="text-purple-600 hover:text-purple-700">
                      7 Mistakes to Avoid
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
                      View All Tips &rarr;
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
