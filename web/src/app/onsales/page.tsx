import { Metadata } from 'next';
import Link from 'next/link';
import OnsaleRow from '@/components/OnsaleRow';
import NewsletterSignup from '@/components/NewsletterSignup';
import { FeedEvent, cleanEvents, capPerVenue } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Ticket Onsale Calendar - What Goes On Sale This Week',
  description:
    'Every event going on sale in the next week, sorted by day. Public onsale times and presale windows for concerts, sports and theater across the US.',
  keywords:
    'ticket onsale calendar, when do tickets go on sale, presale calendar, ticket presale dates, upcoming onsales',
  alternates: { canonical: 'https://www.ticketscan.io/onsales' },
  openGraph: {
    title: 'Ticket Onsale Calendar - What Goes On Sale This Week',
    description: 'Every event going on sale in the next week, with presale windows, sorted by day.',
    type: 'website',
    url: 'https://www.ticketscan.io/onsales',
  },
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';

const DAYS = 7;
const PER_DAY = 8;

interface DayBucket {
  iso: string;
  weekday: string;
  dayNum: string;
  month: string;
  events: FeedEvent[];
}

function isoDay(d: Date) {
  // Build from parts rather than toISOString(): the latter converts to UTC and
  // would roll the date over for anyone west of Greenwich late in the day.
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

async function getOnsalesForDay(iso: string): Promise<FeedEvent[]> {
  try {
    const res = await fetch(`${API_URL}/api/public/events?onsaleDate=${iso}&country=US&sort=relevance&limit=50`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return capPerVenue(cleanEvents(data.events || []), 2).slice(0, PER_DAY);
  } catch (error) {
    console.error(`Failed to load onsales for ${iso}:`, error);
    return [];
  }
}

export default async function OnsalesPage() {
  const today = new Date();

  // Deliberately sequential. Ticketmaster enforces a spike arrest of 5
  // requests/second with a burst of 1, and `onsaleOnStartDate` is single-day
  // only, so a week needs seven separate calls. The page is cached for an
  // hour, so the cost is paid once per revalidation.
  const buckets: DayBucket[] = [];
  for (let i = 0; i < DAYS; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = isoDay(d);
    buckets.push({
      iso,
      weekday: d.toLocaleDateString('en-US', { weekday: 'long' }),
      dayNum: String(d.getDate()),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
      events: await getOnsalesForDay(iso),
    });
  }

  const withEvents = buckets.filter((b) => b.events.length > 0);
  const total = withEvents.reduce((n, b) => n + b.events.length, 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.ticketscan.io/onsales#page',
    name: 'Ticket Onsale Calendar',
    description: 'Events going on sale over the next seven days, with presale windows.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-navy text-white pt-24 pb-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Onsale calendar
            </p>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.1] mb-4">
              What goes on sale this week
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              Every event opening over the next seven days, sorted by day. Presale windows open
              before the public onsale &mdash; that is usually where the good seats go.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {total === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <p className="font-medium text-navy mb-1">No onsales listed for the next seven days.</p>
              <p className="text-gray-500 text-sm">
                This updates hourly. In the meantime, browse{' '}
                <Link href="/venues" className="text-brand hover:underline">
                  venue guides
                </Link>{' '}
                or{' '}
                <Link href="/tickets" className="text-brand hover:underline">
                  events by city
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {withEvents.map((bucket) => (
                <section key={bucket.iso}>
                  <div className="flex items-baseline gap-3 mb-4">
                    <h2 className="text-xl font-heading font-bold text-navy tracking-tight">
                      {bucket.weekday}
                    </h2>
                    <span className="text-sm text-gray-400 tabular-nums">
                      {bucket.month} {bucket.dayNum}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {bucket.events.map((event) => (
                      <OnsaleRow key={`${bucket.iso}-${event.id}`} event={event} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          <div className="mt-14 bg-navy rounded-xl p-8">
            <NewsletterSignup source="onsales" variant="card" />
          </div>

          <p className="text-xs text-gray-400 mt-8">
            Onsale times are shown in Eastern Time. Windows are set by the venue or promoter and can
            change; always confirm on the seller&apos;s listing before buying.
          </p>
        </div>
      </div>
    </>
  );
}
