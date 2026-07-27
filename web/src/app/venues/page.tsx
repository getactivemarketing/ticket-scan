import { Metadata } from 'next';
import Link from 'next/link';
import { venues } from '@/data/venues';

export const metadata: Metadata = {
  title: 'Venue Ticket Guides - Compare Prices at Top US Arenas & Stadiums',
  description: 'Browse TicketScan venue guides for major US arenas and stadiums. Compare ticket prices, see seating tiers, and track upcoming events at MSG, Crypto.com Arena, Chase Center, and more.',
  keywords: 'venue ticket guides, arena tickets, stadium tickets, compare venue prices, seating charts',
  alternates: {
    canonical: 'https://www.ticketscan.io/venues',
  },
  openGraph: {
    title: 'Venue Ticket Guides - Compare Prices at Top US Arenas & Stadiums',
    description: 'Browse venue guides for major US arenas and stadiums. Compare ticket prices and track upcoming events.',
    type: 'website',
    url: 'https://www.ticketscan.io/venues',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venue Ticket Guides - Compare Prices at Top US Arenas & Stadiums',
    description: 'Browse venue guides for major US arenas and stadiums. Compare ticket prices and track upcoming events.',
  },
};

const venueList = Object.entries(venues).map(([slug, v]) => ({ slug, ...v }));

// Group venues by state, states alphabetical, venues alphabetical within state.
const byState = venueList.reduce<Record<string, typeof venueList>>((acc, v) => {
  (acc[v.state] ||= []).push(v);
  return acc;
}, {});
const sortedStates = Object.keys(byState).sort();
for (const s of sortedStates) byState[s].sort((a, b) => a.name.localeCompare(b.name));

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.ticketscan.io/venues',
  url: 'https://www.ticketscan.io/venues',
  name: 'Venue Ticket Guides',
  description: 'Directory of US arena and stadium ticket guides on TicketScan.',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: venueList.length,
    itemListElement: venueList.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: v.name,
      url: `https://www.ticketscan.io/venues/${v.slug}`,
    })),
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
    { '@type': 'ListItem', position: 2, name: 'Venues', item: 'https://www.ticketscan.io/venues' },
  ],
};

export default function VenuesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Venue Ticket Guides
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Compare ticket prices, explore seating tiers, and track upcoming events at
              {' '}{venueList.length} major US arenas and stadiums.
            </p>
          </div>
        </div>

        {/* Venue directory */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {sortedStates.map((state) => (
            <div key={state} className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">{state}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {byState[state].map((v) => (
                  <Link
                    key={v.slug}
                    href={`/venues/${v.slug}`}
                    className="block bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-brand transition-all"
                  >
                    <div className="font-semibold text-gray-900">{v.name}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {v.city}, {v.state} · {v.type}
                    </div>
                    {v.homeTeams && v.homeTeams.length > 0 && (
                      <div className="text-xs text-gray-400 mt-2 truncate">
                        {v.homeTeams.join(', ')}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Cross-links */}
          <div className="mt-8 border-t border-gray-200 pt-8 text-gray-600">
            Looking for events by city or category?{' '}
            <Link href="/tickets" className="text-brand font-medium hover:text-brand-dark">
              Browse all ticket guides
            </Link>{' '}
            or check{' '}
            <Link href="/world-cup-2026" className="text-brand font-medium hover:text-brand-dark">
              World Cup 2026 stadiums
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
