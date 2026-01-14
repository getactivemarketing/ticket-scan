'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { findVenue, tierPricing } from '@/data/venues';

interface CompareEvent {
  id: string;
  name: string;
  date: string;
  time?: string;
  venue: string;
  city?: string;
  minPrice?: number | null;
  maxPrice?: number | null;
  avgPrice?: number | null;
  priceRange?: string;
  listingCount?: number;
  url: string;
  image?: string;
  source?: string;
}

interface MatchedEvent {
  name: string;
  date: string;
  venue: string;
  city?: string;
  ticketmaster?: CompareEvent;
  seatgeek?: CompareEvent;
  bestSource?: 'ticketmaster' | 'seatgeek';
  savings?: number;
}

export default function ComparePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [city, setCity] = useState('Orlando');
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [matchedEvents, setMatchedEvents] = useState<MatchedEvent[]>([]);
  const [unmatchedTM, setUnmatchedTM] = useState<CompareEvent[]>([]);
  const [unmatchedSG, setUnmatchedSG] = useState<CompareEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');
  const [viewMode, setViewMode] = useState<'matched' | 'all'>('matched');

  // Redirect if not logged in
  if (!authLoading && !user) {
    router.push('/login');
    return null;
  }

  // Match events from different sources
  const matchEvents = (tmEvents: CompareEvent[], sgEvents: CompareEvent[]): void => {
    const matched: MatchedEvent[] = [];
    const usedSG = new Set<string>();

    tmEvents.forEach(tm => {
      // Try to find matching SeatGeek event
      const tmDate = tm.date;
      const tmVenue = tm.venue?.toLowerCase() || '';

      const match = sgEvents.find(sg => {
        if (usedSG.has(sg.id)) return false;
        const sgDate = sg.date;
        const sgVenue = sg.venue?.toLowerCase() || '';

        // Match by date and venue similarity
        const dateMatch = tmDate === sgDate;
        const venueMatch = tmVenue.includes(sgVenue.split(' ')[0]) ||
                          sgVenue.includes(tmVenue.split(' ')[0]) ||
                          tmVenue === sgVenue;

        return dateMatch && venueMatch;
      });

      if (match) {
        usedSG.add(match.id);

        // Determine best price
        const tmMin = parseMinPrice(tm.priceRange);
        const sgMin = match.minPrice || null;

        let bestSource: 'ticketmaster' | 'seatgeek' | undefined;
        let savings: number | undefined;

        if (tmMin && sgMin) {
          if (tmMin < sgMin) {
            bestSource = 'ticketmaster';
            savings = sgMin - tmMin;
          } else if (sgMin < tmMin) {
            bestSource = 'seatgeek';
            savings = tmMin - sgMin;
          }
        }

        matched.push({
          name: tm.name,
          date: tm.date,
          venue: tm.venue,
          city: tm.city,
          ticketmaster: tm,
          seatgeek: match,
          bestSource,
          savings
        });
      }
    });

    // Find unmatched events
    const matchedTMIds = new Set(matched.filter(m => m.ticketmaster).map(m => m.ticketmaster!.id));
    const matchedSGIds = usedSG;

    const unmatched_tm = tmEvents.filter(e => !matchedTMIds.has(e.id));
    const unmatched_sg = sgEvents.filter(e => !matchedSGIds.has(e.id));

    setMatchedEvents(matched);
    setUnmatchedTM(unmatched_tm);
    setUnmatchedSG(unmatched_sg);
  };

  const parseMinPrice = (priceRange?: string): number | null => {
    if (!priceRange) return null;
    const match = priceRange.match(/\$(\d+)/);
    return match ? parseInt(match[1]) : null;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSearched(true);

    try {
      const response = await api.compareEvents(city, keyword, startDate, endDate);
      const tmEvents = response.results.ticketmaster || [];
      const sgEvents = response.results.seatgeek || [];

      matchEvents(tmEvents, sgEvents);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setMatchedEvents([]);
      setUnmatchedTM([]);
      setUnmatchedSG([]);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'TBA';
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatPrice = (price: number | null | undefined) => {
    if (price === null || price === undefined) return 'N/A';
    return `$${price}`;
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  const totalEvents = matchedEvents.length + unmatchedTM.length + unmatchedSG.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">⚖️</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Compare Ticket Prices</h1>
              <p className="text-gray-600">Find the best deals across multiple ticket sites</p>
            </div>
          </div>

          <form onSubmit={handleSearch} className="mt-6 space-y-4">
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
                  placeholder="e.g., Magic, Taylor Swift"
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
                {loading ? 'Searching...' : 'Compare Prices'}
              </button>
            </div>
          </form>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Results */}
        {searched && !loading && (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-3xl font-bold text-purple-600">{totalEvents}</p>
                <p className="text-sm text-gray-600">Events Found</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-3xl font-bold text-green-600">{matchedEvents.length}</p>
                <p className="text-sm text-gray-600">Price Comparisons</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-600">{unmatchedTM.length}</p>
                <p className="text-sm text-gray-600">Ticketmaster Only</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-3xl font-bold text-emerald-600">{unmatchedSG.length}</p>
                <p className="text-sm text-gray-600">SeatGeek Only</p>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setViewMode('matched')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'matched'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Matched Events ({matchedEvents.length})
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Events
              </button>
            </div>

            {/* Matched Events - Side by Side Comparison */}
            {viewMode === 'matched' && (
              <div className="space-y-4">
                {matchedEvents.length === 0 ? (
                  <div className="bg-white rounded-xl p-8 text-center text-gray-500">
                    <p>No matching events found across sources.</p>
                    <p className="text-sm mt-2">Try a different search or check the All Events tab.</p>
                  </div>
                ) : (
                  matchedEvents.map((event, idx) => {
                    const venue = findVenue(event.venue);
                    const tmPrice = event.ticketmaster ? parseMinPrice(event.ticketmaster.priceRange) : null;
                    const sgPrice = event.seatgeek?.minPrice || null;

                    return (
                      <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                        {/* Event Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-lg">{event.name}</h3>
                              <div className="flex items-center gap-3 text-purple-100 text-sm mt-1">
                                <span>📅 {formatDate(event.date)}</span>
                                <span>📍 {event.venue}</span>
                                {event.city && <span>🏙️ {event.city}</span>}
                              </div>
                            </div>
                            {event.bestSource && event.savings && event.savings > 0 && (
                              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                Save ${event.savings}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Price Comparison */}
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                          {/* Ticketmaster */}
                          <div className={`p-4 ${event.bestSource === 'ticketmaster' ? 'bg-green-50' : ''}`}>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">🎫</span>
                                <span className="font-semibold text-blue-600">Ticketmaster</span>
                                {event.bestSource === 'ticketmaster' && (
                                  <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">BEST</span>
                                )}
                              </div>
                              <span className="text-xs text-gray-500">Primary</span>
                            </div>
                            {event.ticketmaster ? (
                              <>
                                <p className="text-2xl font-bold text-gray-900 mb-2">
                                  {event.ticketmaster.priceRange || 'Price N/A'}
                                </p>
                                {venue && tmPrice && (
                                  <div className="text-xs text-gray-500 space-y-1 mb-3">
                                    <p>Est. Upper: ${tmPrice}</p>
                                    <p>Est. Lower: ${Math.round(tmPrice * tierPricing.lower.multiplier)}</p>
                                    <p>Est. Floor: ${Math.round(tmPrice * tierPricing.floor.multiplier)}</p>
                                  </div>
                                )}
                                <a
                                  href={event.ticketmaster.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                                >
                                  Buy on Ticketmaster →
                                </a>
                              </>
                            ) : (
                              <p className="text-gray-400">Not available</p>
                            )}
                          </div>

                          {/* SeatGeek */}
                          <div className={`p-4 ${event.bestSource === 'seatgeek' ? 'bg-green-50' : ''}`}>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">🎟️</span>
                                <span className="font-semibold text-green-600">SeatGeek</span>
                                {event.bestSource === 'seatgeek' && (
                                  <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">BEST</span>
                                )}
                              </div>
                              <span className="text-xs text-gray-500">60+ Resale Sites</span>
                            </div>
                            {event.seatgeek ? (
                              <>
                                <p className="text-2xl font-bold text-gray-900 mb-1">
                                  {formatPrice(event.seatgeek.minPrice)}
                                  {event.seatgeek.maxPrice && (
                                    <span className="text-base font-normal text-gray-500">
                                      {' '}- {formatPrice(event.seatgeek.maxPrice)}
                                    </span>
                                  )}
                                </p>
                                {event.seatgeek.listingCount && (
                                  <p className="text-sm text-gray-500 mb-3">
                                    {event.seatgeek.listingCount} listings available
                                  </p>
                                )}
                                <a
                                  href={event.seatgeek.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                                >
                                  Buy on SeatGeek →
                                </a>
                              </>
                            ) : (
                              <p className="text-gray-400">Not available</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}

            {/* All Events View */}
            {viewMode === 'all' && (
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Ticketmaster Column */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="bg-blue-600 text-white p-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <span>🎫</span> Ticketmaster
                    </h2>
                    <p className="text-blue-100 text-sm">{unmatchedTM.length + matchedEvents.filter(e => e.ticketmaster).length} events</p>
                  </div>
                  <div className="divide-y max-h-[600px] overflow-y-auto">
                    {matchedEvents.filter(e => e.ticketmaster).map((event, idx) => (
                      <div key={`tm-matched-${idx}`} className="p-4 hover:bg-gray-50 bg-green-50/50">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 line-clamp-1">{event.name}</h3>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Matched</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {formatDate(event.date)} • {event.venue}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-600">{event.ticketmaster?.priceRange}</span>
                          <a href={event.ticketmaster?.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">View →</a>
                        </div>
                      </div>
                    ))}
                    {unmatchedTM.map((event) => (
                      <div key={event.id} className="p-4 hover:bg-gray-50">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{event.name}</h3>
                        <div className="text-sm text-gray-600 mb-2">
                          {formatDate(event.date)} • {event.venue}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-600">{event.priceRange || 'N/A'}</span>
                          <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">View →</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SeatGeek Column */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="bg-green-600 text-white p-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <span>🎟️</span> SeatGeek
                    </h2>
                    <p className="text-green-100 text-sm">{unmatchedSG.length + matchedEvents.filter(e => e.seatgeek).length} events</p>
                  </div>
                  <div className="divide-y max-h-[600px] overflow-y-auto">
                    {matchedEvents.filter(e => e.seatgeek).length === 0 && unmatchedSG.length === 0 && (
                      <div className="p-8 text-center text-gray-500">
                        <p>No events found on SeatGeek</p>
                        <p className="text-xs mt-2">(API may be pending approval)</p>
                      </div>
                    )}
                    {matchedEvents.filter(e => e.seatgeek).map((event, idx) => (
                      <div key={`sg-matched-${idx}`} className="p-4 hover:bg-gray-50 bg-green-50/50">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 line-clamp-1">{event.seatgeek?.name}</h3>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Matched</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {formatDate(event.date)} • {event.venue}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-600">{formatPrice(event.seatgeek?.minPrice)}</span>
                          <a href={event.seatgeek?.url} target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm">View →</a>
                        </div>
                      </div>
                    ))}
                    {unmatchedSG.map((event) => (
                      <div key={event.id} className="p-4 hover:bg-gray-50">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{event.name}</h3>
                        <div className="text-sm text-gray-600 mb-2">
                          {formatDate(event.date)} • {event.venue}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-600">{formatPrice(event.minPrice)}</span>
                          <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm">View →</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!searched && (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Find the Best Ticket Prices</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Compare prices from Ticketmaster and SeatGeek (which aggregates 60+ resale sites including StubHub & Vivid Seats)
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">🎫 Ticketmaster</span>
              <span className="flex items-center gap-1">🎟️ SeatGeek</span>
              <span className="flex items-center gap-1">🏪 StubHub</span>
              <span className="flex items-center gap-1">🎪 Vivid Seats</span>
              <span className="flex items-center gap-1">+ 60 more</span>
            </div>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <h4 className="font-semibold text-amber-900">Pro Tip</h4>
              <p className="text-sm text-amber-700">
                SeatGeek aggregates prices from 60+ resale sites. If you see a lower price there,
                click through to see options from StubHub, Vivid Seats, and more.
                Always check the final price at checkout as fees may apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
