import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Events — Dashboard',
  description:
    'Search concerts, sports, and theater events across Ticketmaster and SeatGeek. Filter by city, date, or keyword and open listings from supported sellers.',
  keywords:
    'search events, find tickets, event search, concert search, sports tickets search, onsale dates',
  alternates: {
    canonical: 'https://www.ticketscan.io/dashboard',
  },
  openGraph: {
    title: 'Search Events — Ticket Scan',
    description:
      'Find concerts, sports, and theater events across Ticketmaster and SeatGeek, then open available listings.',
    type: 'website',
    url: 'https://www.ticketscan.io/dashboard',
    siteName: 'Ticket Scan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Events — Ticket Scan',
    description:
      'Search live events from Ticketmaster and SeatGeek and check onsale details.',
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
        'One-click add to a personal watchlist',
        'Onsale and presale date details where available',
        'Links to supported ticket sellers',
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
