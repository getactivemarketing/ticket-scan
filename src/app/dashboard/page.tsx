'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';
import EventCard from '@/components/EventCard';
import Link from 'next/link';

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sign up banner for non-logged in users */}
        {!authLoading && !user && (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4 mb-6 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-medium">Track prices and get alerts when they drop!</p>
                <p className="text-purple-200 text-sm">Create a free account to save events to your watchlist.</p>
              </div>
              <Link
                href="/register"
                className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors whitespace-nowrap"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        )}

        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Search Events</h1>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-900"
                  placeholder="e.g., Orlando, Miami"
                />
              </div>
              <div>
                <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                  Event / Artist / Team
                </label>
                <input
                  id="keyword"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-900"
                  placeholder="e.g., Taylor Swift"
                />
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                  From Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={startDate}
                  min={today}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                  To Date
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  min={startDate || today}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-900"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {loading ? 'Searching...' : 'Search Events'}
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {searched && !loading && events.length === 0 && !error && (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try a different city, keyword, or date range</p>
          </div>
        )}

        {events.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {events.length} events found
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
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <span className="text-4xl mb-4 block">🎫</span>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Find your next event</h3>
            <p className="text-gray-600">Search for concerts, sports, theater, and more</p>
          </div>
        )}
      </div>
    </div>
  );
}
