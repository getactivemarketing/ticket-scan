import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 — Venues, Schedule & Results',
  description: 'The 2026 FIFA World Cup wrapped on 19 July. Browse all 16 host stadiums, the full match schedule and results across the USA, Canada and Mexico.',
  keywords: 'World Cup 2026 tickets, FIFA World Cup tickets, World Cup USA tickets, World Cup Canada tickets, World Cup Mexico tickets, buy World Cup tickets, World Cup schedule',
  openGraph: {
    title: 'FIFA World Cup 2026 — Venues, Schedule & Results',
    description: 'The 2026 FIFA World Cup wrapped on 19 July. Browse all 16 host stadiums, the full match schedule and results across the USA, Canada and Mexico.',
  },
};

export default function WorldCupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
