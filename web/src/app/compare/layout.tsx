import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Ticket Prices — Ticketmaster vs SeatGeek Side-by-Side',
  description:
    'Compare ticket prices side-by-side from Ticketmaster and SeatGeek (which aggregates StubHub, Vivid Seats, and 60+ resale sites). All-in fee pricing, estimated section breakdowns, and savings highlighted.',
  keywords:
    'compare ticket prices, ticket price comparison, Ticketmaster vs SeatGeek, cheapest tickets, ticket comparison tool',
  alternates: {
    canonical: 'https://www.ticketscan.io/compare',
  },
  openGraph: {
    title: 'Compare Ticket Prices — Ticketmaster vs SeatGeek',
    description:
      'See side-by-side ticket prices from Ticketmaster and SeatGeek with all-in fee pricing and estimated section breakdowns.',
    type: 'website',
    url: 'https://www.ticketscan.io/compare',
    siteName: 'Ticket Scan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Ticket Prices — Ticketmaster vs SeatGeek',
    description:
      'Side-by-side ticket price comparison with all-in fees and section-level estimates.',
  },
};

const compareJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.ticketscan.io/compare#webapp',
      name: 'Ticket Scan Price Comparison Tool',
      url: 'https://www.ticketscan.io/compare',
      description:
        'Interactive tool that fetches and matches live ticket listings from Ticketmaster and SeatGeek for the same event, surfacing the lower all-in price.',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Side-by-side price comparison across Ticketmaster and SeatGeek',
        'All-in fee-inclusive pricing (Ticketmaster ~27%, SeatGeek ~20%)',
        'Estimated section breakdowns (upper/lower/club/floor) at 24 major venues',
        'Savings callouts showing dollar difference between platforms',
        'Filter by city, artist, team, and date range',
      ],
      provider: {
        '@type': 'Organization',
        '@id': 'https://www.ticketscan.io/#organization',
        name: 'Ticket Scan',
        url: 'https://www.ticketscan.io',
      },
      isPartOf: {
        '@id': 'https://www.ticketscan.io/#website',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.ticketscan.io/compare#breadcrumbs',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.ticketscan.io',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Compare Prices',
          item: 'https://www.ticketscan.io/compare',
        },
      ],
    },
  ],
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareJsonLd) }}
      />
      {children}
    </>
  );
}
