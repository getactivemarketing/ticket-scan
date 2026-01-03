'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';
import PriceTrendIndicator from '@/components/PriceTrendIndicator';

interface WatchlistItem {
  id: number;
  event_id: string;
  event_name: string;
  event_date: string;
  venue: string;
  city: string;
  target_price: string | null;
  created_at: string;
  current_min_price: string | null;
  current_max_price: string | null;
  source: string | null;
  last_checked: string | null;
  percent_change: number | null;
  trend_direction: 'up' | 'down' | 'stable';
}

export default function WatchlistPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && user) {
      fetchWatchlist();
    }
  }, [authLoading, user]);

  // Redirect if not logged in
  if (!authLoading && !user) {
    router.push('/login');
    return null;
  }

  const fetchWatchlist = async () => {
    try {
      const response = await api.getWatchlistWithPrices();
      setWatchlist(response.watchlist || []);
    } catch (err) {
      // Fallback to regular watchlist if with-prices endpoint fails
      try {
        const fallback = await api.getWatchlist();
        setWatchlist(fallback.watchlist.map(item => ({
          ...item,
          current_min_price: null,
          current_max_price: null,
          source: null,
          last_checked: null,
          percent_change: null,
          trend_direction: 'stable' as const
        })));
      } catch {
        setError(err instanceof Error ? err.message : 'Failed to load watchlist');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await api.removeFromWatchlist(id);
      setWatchlist(watchlist.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item');
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'TBA';
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTimeAgo = (dateStr: string | null) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 1) return 'Just now';
    if (diffHours === 1) return '1 hour ago';
    if (diffHours < 24) return `${diffHours} hours ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return '1 day ago';
    return `${diffDays} days ago`;
  };

  const isAtTarget = (item: WatchlistItem) => {
    if (!item.target_price || !item.current_min_price) return false;
    return parseFloat(item.current_min_price) <= parseFloat(item.target_price);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Watchlist</h1>
            <p className="text-gray-600 mt-1">Track prices and get recommendations</p>
          </div>
          <Link
            href="/dashboard"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            + Add Events
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {watchlist.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <span className="text-4xl mb-4 block">👁️</span>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Your watchlist is empty
            </h3>
            <p className="text-gray-600 mb-6">
              Start tracking events to get price alerts and recommendations
            </p>
            <Link
              href="/dashboard"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Search Events
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {watchlist.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-md p-6 border-2 ${
                  isAtTarget(item) ? 'border-green-400 bg-green-50' : 'border-transparent'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        {item.event_name}
                      </h3>
                      {isAtTarget(item) && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          AT TARGET!
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <span className="mr-1">📅</span>
                        {formatDate(item.event_date)}
                      </span>
                      {item.venue && (
                        <span className="flex items-center">
                          <span className="mr-1">📍</span>
                          {item.venue}
                        </span>
                      )}
                      {item.city && (
                        <span className="flex items-center">
                          <span className="mr-1">🏙️</span>
                          {item.city}
                        </span>
                      )}
                    </div>

                    {/* Price info row */}
                    <div className="flex flex-wrap items-center gap-4">
                      {item.current_min_price ? (
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ${parseFloat(item.current_min_price).toFixed(0)}
                          </span>
                          {item.current_max_price && (
                            <span className="text-gray-500">
                              - ${parseFloat(item.current_max_price).toFixed(0)}
                            </span>
                          )}
                          <PriceTrendIndicator
                            direction={item.trend_direction}
                            percentChange={item.percent_change}
                            size="sm"
                          />
                        </div>
                      ) : (
                        <span className="text-gray-500 text-sm">
                          Tracking started - prices coming soon
                        </span>
                      )}

                      {item.target_price && (
                        <span className="text-sm text-gray-600">
                          Target: <span className="font-semibold text-green-600">${item.target_price}</span>
                        </span>
                      )}

                      {item.last_checked && (
                        <span className="text-xs text-gray-400">
                          Updated {formatTimeAgo(item.last_checked)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/event/${item.event_id}`}
                      className="bg-purple-100 hover:bg-purple-200 text-purple-700 py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <h4 className="font-semibold text-blue-900">Price Tracking Active</h4>
              <p className="text-sm text-blue-700">
                We check prices every 4 hours and will show you trends and recommendations.
                Click &quot;View Details&quot; on any event to see the full price history and buy recommendation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
