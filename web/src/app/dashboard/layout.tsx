import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Events & Track Ticket Prices — Dashboard',
  description:
    'Search concerts, sports, and theater events across Ticketmaster and SeatGeek. Filter by city, date, or keyword; track prices with one click; get alerts when tickets drop.',
  keywords:
    'search events, find tickets, track ticket prices, event search, concert search, sports tickets search, ticket alerts',
  alternates: {
    canonical: 'https://www.ticketscan.io/dashboard',
  },
  openGraph: {
    title: 'Search Events & Track Ticket Prices — Ticket Scan',
    description:
      'Find concerts, sports, and theater events across Ticketmaster and SeatGeek. Track prices and get alerts when tickets drop.',
    type: 'website',
    url: 'https://www.ticketscan.io/dashboard',
    siteName: 'Ticket Scan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Events & Track Ticket Prices — Ticket Scan',
    description:
      'Search live events from Ticketmaster and SeatGeek. Track prices and get drop alerts.',
  },
};

const dashboardJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.ticketscan.io/dashboard#webapp',
      name: 'Ticket Scan Event Search',
      url: 'https://www.ticketscan.io/dashboard',
      description:
        'Search live events across Ticketmaster and SeatGeek by city, keyword, or date range, with one-click price tracking and drop alerts.',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Multi-source event search across Ticketmaster and SeatGeek',
        'Filter by city, keyword, and date range',
        'One-click add to watchlist with target price',
        'Price-drop email alerts when tickets hit your target',
        'Buy / wait / hold recommendations powered by price history',
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
      '@id': 'https://www.ticketscan.io/dashboard#breadcrumbs',
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
          name: 'Search Events',
          item: 'https://www.ticketscan.io/dashboard',
        },
      ],
    },
  ],
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dashboardJsonLd) }}
      />
      {children}
    </>
  );
}
