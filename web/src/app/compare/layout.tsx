import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Event Listings — Ticketmaster vs SeatGeek Side-by-Side',
  description:
    'Compare event availability side-by-side from Ticketmaster and SeatGeek, then open the seller page to review current inventory and checkout details.',
  keywords:
    'compare event listings, Ticketmaster vs SeatGeek, event search, ticket comparison tool',
  alternates: {
    canonical: 'https://www.ticketscan.io/compare',
  },
  openGraph: {
    title: 'Compare Event Listings — Ticketmaster vs SeatGeek',
    description:
      'See Ticketmaster and SeatGeek event listings side-by-side and review current details on the seller site.',
    type: 'website',
    url: 'https://www.ticketscan.io/compare',
    siteName: 'Ticket Scan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Event Listings — Ticketmaster vs SeatGeek',
    description:
      'Side-by-side event listing comparison with links to current seller details.',
  },
};

const compareJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.ticketscan.io/compare#webapp',
      name: 'Ticket Scan Event Listing Comparison Tool',
      url: 'https://www.ticketscan.io/compare',
      description:
        'Interactive tool that fetches and matches live event listings from Ticketmaster and SeatGeek for the same event.',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Side-by-side event listing comparison across Ticketmaster and SeatGeek',
        'Current availability links for each seller',
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
          name: 'Compare Event Listings',
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
