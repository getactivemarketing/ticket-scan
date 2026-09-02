import { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/data/cities';
import { categories } from '@/data/categories';
import TicketNetworkLink from '@/components/TicketNetworkLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

export const metadata: Metadata = {
  title: 'Ticket Guides by City & Category - Compare Prices | TicketScan',
  description: 'Browse TicketScan ticket guides by city and by event type. Compare prices for NBA, NHL, concerts, and theater, or find events in New York, Los Angeles, Chicago, and more.',
  keywords: 'cheap tickets, compare ticket prices, NBA tickets, concert tickets, city event guides',
  alternates: {
    canonical: 'https://www.ticketscan.io/tickets',
  },
  openGraph: {
    title: 'Ticket Guides by City & Category - Compare Prices | TicketScan',
    description: 'Browse ticket guides by city and event type. Compare prices across all major platforms.',
    type: 'website',
    url: 'https://www.ticketscan.io/tickets',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ticket Guides by City & Category - Compare Prices | TicketScan',
    description: 'Browse ticket guides by city and event type. Compare prices across all major platforms.',
  },
};

const cityList = Object.values(cities).sort((a, b) => a.name.localeCompare(b.name));
const categoryList = Object.values(categories).sort((a, b) => a.name.localeCompare(b.name));

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.ticketscan.io/tickets',
  url: 'https://www.ticketscan.io/tickets',
  name: 'Ticket Guides by City & Category',
  description: 'Directory of city and event-category ticket guides on TicketScan.',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: cityList.length + categoryList.length,
    itemListElement: [...categoryList, ...cityList].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: `https://www.ticketscan.io/tickets/${item.slug}`,
    })),
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
    { '@type': 'ListItem', position: 2, name: 'Tickets', item: 'https://www.ticketscan.io/tickets' },
  ],
};

export default function TicketsIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Ticket Guides
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mt-4">
              Compare ticket prices across every major platform. Browse by event type or by city.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Resale CTA + FTC disclosure — on the body ground, not the gradient
              hero above, where the legacy surface colors fail contrast. */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <TicketNetworkLink category="concerts" sid="index-tickets" label="Browse resale tickets" />
            <AffiliateDisclosure />
          </div>

          {/* By category */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryList.map((c) => (
                <Link
                  key={c.slug}
                  href={`/tickets/${c.slug}`}
                  className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-brand transition-all"
                >
                  <span className="text-3xl">{c.icon}</span>
                  <span className="font-semibold text-gray-900">{c.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* By city */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Browse by City</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityList.map((c) => (
                <Link
                  key={c.slug}
                  href={`/tickets/${c.slug}`}
                  className="block bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-brand transition-all"
                >
                  <div className="font-semibold text-gray-900">{c.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{c.state}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Cross-links */}
          <div className="mt-12 border-t border-gray-200 pt-8 text-gray-600">
            Browsing a specific arena?{' '}
            <Link href="/venues" className="text-brand font-medium hover:text-brand-dark">
              See all venue guides
            </Link>{' '}
            or explore{' '}
            <Link href="/world-cup-2026" className="text-brand font-medium hover:text-brand-dark">
              World Cup 2026 tickets
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
