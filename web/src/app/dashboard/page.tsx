'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';
import Logo from '@/components/Logo';
import EventCard from '@/components/EventCard';
import Link from 'next/link';
import { FOCUS_RING_ON_DEEP_VOID } from '@/lib/a11y';

interface Event {
  id: string;
  name: string;
  type: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  priceRanges: { min: number; max: number } | null;
  url: string;
  images: string;
  source?: string;
}

// Skeleton card shaped like a real EventCard: image band, category chip,
// title, two meta lines and a button row — not a generic grey block.
function EventCardSkeleton() {
  return (
    <div className="rounded-[6px] bg-navy-raised overflow-hidden" aria-hidden="true">
      <div className="h-48 animate-pulse bg-navy motion-reduce:animate-none" />
      <div className="p-5">
        <div className="h-5 w-20 animate-pulse rounded-[4px] bg-navy motion-reduce:animate-none" />
        <div className="mt-3 h-5 w-3/4 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
        <div className="mt-4 space-y-2">
          <div className="h-3 w-1/2 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
          <div className="h-3 w-2/3 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
          <div className="h-3 w-1/3 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
        </div>
        <div className="mt-4 flex gap-2">
          <div className="h-9 flex-1 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
          <div className="h-9 w-10 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const [city, setCity] = useState('Orlando');
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSearched(true);

    try {
      const response = await api.searchEvents(city, keyword, startDate, endDate);
      setEvents(response.events || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  const inputClass =
    'w-full px-4 py-3 bg-deep-void border border-navy-hairline rounded-[6px] text-bone outline-none ' +
    'transition-colors placeholder:font-data placeholder:text-[13px] placeholder:text-muted ' +
    'focus:border-brand focus:ring-[3px] focus:ring-blue-glow motion-reduce:transition-none';

  return (
    <div className="min-h-screen bg-deep-void py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sign up banner for non-logged in users */}
        {!authLoading && !user && (
          <div className="bg-navy-raised rounded-[6px] p-4 mb-6 text-bone">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-medium">Track prices and get alerts when they drop!</p>
                <p className="text-beacon text-sm">Create a free account to save events to your watchlist.</p>
              </div>
              <Link
                href="/register"
                className={`bg-bone text-brand px-6 py-2 rounded-[6px] font-medium transition-opacity hover:opacity-90 whitespace-nowrap ${FOCUS_RING_ON_DEEP_VOID}`}
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        )}

        {/* Search Header */}
        <div className="bg-navy-raised rounded-[6px] p-6 mb-8">
          <h1 className="text-[26px] font-bold leading-[1.2] tracking-[-0.025em] font-heading text-bone mb-6">Search Events</h1>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-muted mb-2">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={inputClass}
                  placeholder="e.g., Orlando, Miami"
                />
              </div>
              <div>
                <label htmlFor="keyword" className="block text-sm font-medium text-muted mb-2">
                  Event / Artist / Team
                </label>
                <input
                  id="keyword"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className={inputClass}
                  placeholder="e.g., Taylor Swift"
                />
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-muted mb-2">
                  From Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={startDate}
                  min={today}
                  onChange={(e) => setStartDate(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-muted mb-2">
                  To Date
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  min={startDate || today}
                  onChange={(e) => setEndDate(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`bg-brand text-bone py-3.5 px-6 rounded-[6px] font-medium transition-colors hover:shadow-[0_0_24px_var(--color-blue-glow)] active:translate-y-px motion-reduce:transition-none disabled:opacity-50 ${FOCUS_RING_ON_DEEP_VOID}`}
              >
                {loading ? 'Searching...' : 'Search Events'}
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {error && (
          <div role="alert" className="bg-alert/10 text-alert p-4 rounded-[6px] mb-6">
            {error}
          </div>
        )}

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <EventCardSkeleton key={i} />
            ))}
          </div>
        )}

        {searched && !loading && events.length === 0 && !error && (
          <div className="bg-navy-raised rounded-[6px] p-12 text-center">
            <span className="text-4xl mb-4 block" aria-hidden="true">🔍</span>
            <h3 className="text-xl font-medium font-heading text-bone mb-2">No events found</h3>
            <p className="text-muted">
              Try a different city, keyword, or date range — or{' '}
              <Link href="/blog" className={`text-beacon hover:text-bone transition-colors ${FOCUS_RING_ON_DEEP_VOID}`}>
                browse our ticket buying tips
              </Link>
              .
            </p>
          </div>
        )}

        {!loading && events.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-heading text-bone">
                <span className="font-data tabular-nums">{events.length}</span> events found
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} isLoggedIn={!!user} />
              ))}
            </div>
          </>
        )}

        {!searched && (
          <>
            <div className="bg-navy-raised rounded-[6px] p-12 text-center mb-8">
              <span className="mb-4 block text-brand"><Logo size={48} /></span>
              <h3 className="text-xl font-medium font-heading text-bone mb-2">Find your next event</h3>
              <p className="text-muted">Search for concerts, sports, theater, and more</p>
            </div>

            {/* Tips Section */}
            <div className="bg-navy rounded-[6px] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-heading text-bone">Ticket Buying Tips</h3>
                <Link href="/blog" className={`text-beacon hover:text-bone text-sm font-medium transition-colors ${FOCUS_RING_ON_DEEP_VOID}`}>
                  View All &rarr;
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/blog/best-time-to-buy-concert-tickets" className={`bg-navy-raised rounded-[6px] p-4 hover:bg-navy-raised-hover transition-colors ${FOCUS_RING_ON_DEEP_VOID}`}>
                  <h4 className="font-semibold text-bone mb-1">Best Time to Buy</h4>
                  <p className="text-muted text-sm">Learn when ticket prices drop</p>
                </Link>
                <Link href="/blog/how-to-find-cheap-nba-tickets" className={`bg-navy-raised rounded-[6px] p-4 hover:bg-navy-raised-hover transition-colors ${FOCUS_RING_ON_DEEP_VOID}`}>
                  <h4 className="font-semibold text-bone mb-1">Cheap NBA Tickets</h4>
                  <p className="text-muted text-sm">10 strategies that work</p>
                </Link>
                <Link href="/blog/ticket-buying-mistakes-to-avoid" className={`bg-navy-raised rounded-[6px] p-4 hover:bg-navy-raised-hover transition-colors ${FOCUS_RING_ON_DEEP_VOID}`}>
                  <h4 className="font-semibold text-bone mb-1">Avoid These Mistakes</h4>
                  <p className="text-muted text-sm">Save money on every purchase</p>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
