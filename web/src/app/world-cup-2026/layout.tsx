import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026 FIFA World Cup Tickets - Compare Prices Across All Venues',
  description: 'Find the best deals on 2026 FIFA World Cup tickets. Compare prices from Ticketmaster, StubHub, SeatGeek and more for all 16 host stadiums in USA, Canada, and Mexico.',
  keywords: 'World Cup 2026 tickets, FIFA World Cup tickets, World Cup USA tickets, World Cup Canada tickets, World Cup Mexico tickets, buy World Cup tickets, World Cup schedule',
  openGraph: {
    title: '2026 FIFA World Cup Tickets - Compare Prices',
    description: 'Compare World Cup ticket prices across all platforms. Find deals for matches in USA, Canada, and Mexico.',
  },
};

export default function WorldCupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
