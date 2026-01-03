'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import api from '@/lib/api';
import PriceChart from '@/components/PriceChart';
import BuyRecommendation from '@/components/BuyRecommendation';
import PriceTrendIndicator from '@/components/PriceTrendIndicator';

interface PriceHistoryItem {
  source: string;
  min_price: string;
  avg_price: string;
  max_price: string;
  checked_at: string;
}

interface ChartDataPoint {
  date: string;
  ticketmaster: number | null;
  seatgeek: number | null;
}

interface Recommendation {
  action: 'buy_now' | 'wait' | 'hold';
  confidence: 'high' | 'medium' | 'low';
  reason: string;
  stats: {
    currentPrice: number;
    lowestRecorded: number;
    highestRecorded: number;
    averagePrice: number;
    daysUntilEvent: number | null;
    targetPrice: number | null;
  } | null;
}

interface Trend {
  direction: 'up' | 'down' | 'stable';
  percentChange: number;
  currentMinPrice?: number;
  previousMinPrice?: number;
}

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const eventId = params.id as string;

  const [eventName, setEventName] = useState<string>('');
  const [priceHistory, setPriceHistory] = useState<PriceHistoryItem[]>([]);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [trend, setTrend] = useState<Trend | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && user && eventId) {
      loadEventData();
    }
  }, [authLoading, user, eventId]);

  // Redirect if not logged in
  if (!authLoading && !user) {
    router.push('/login');
    return null;
  }

  const loadEventData = async () => {
    try {
      setLoading(true);
      setError('');

      // Fetch all data in parallel
      const [historyRes, trendRes, recRes] = await Promise.all([
        api.getPriceHistory(eventId, 30),
        api.getPriceTrend(eventId),
        api.getBuyRecommendation(eventId)
      ]);

      setPriceHistory(historyRes.priceHistory || []);
      setTrend(trendRes.trend);
      setRecommendation(recRes.recommendation);
      if (recRes.eventName) {
        setEventName(recRes.eventName);
      }

      // Transform price history for chart
      const chartPoints = transformToChartData(historyRes.priceHistory || []);
      setChartData(chartPoints);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load event data');
    } finally {
      setLoading(false);
    }
  };

  const transformToChartData = (history: PriceHistoryItem[]): ChartDataPoint[] => {
    // Group by timestamp and source
    const groupedByTime: Record<string, { ticketmaster: number | null; seatgeek: number | null }> = {};

    history.forEach(item => {
      const dateKey = new Date(item.checked_at).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric'
      });

      if (!groupedByTime[dateKey]) {
        groupedByTime[dateKey] = { ticketmaster: null, seatgeek: null };
      }

      const price = parseFloat(item.min_price);
      if (item.source === 'ticketmaster') {
        groupedByTime[dateKey].ticketmaster = price;
      } else if (item.source === 'seatgeek') {
        groupedByTime[dateKey].seatgeek = price;
      }
    });

    return Object.entries(groupedByTime).map(([date, prices]) => ({
      date,
      ...prices
    }));
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading price data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/watchlist"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Watchlist
        </Link>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {eventName || 'Event Details'}
          </h1>

          {trend && (
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Current Trend:</span>
              <PriceTrendIndicator
                direction={trend.direction}
                percentChange={trend.percentChange}
                size="lg"
              />
              {trend.currentMinPrice && (
                <span className="text-2xl font-bold text-gray-900">
                  ${trend.currentMinPrice.toFixed(0)}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Buy Recommendation */}
        {recommendation && (
          <div className="mb-6">
            <BuyRecommendation
              action={recommendation.action}
              confidence={recommendation.confidence}
              reason={recommendation.reason}
              stats={recommendation.stats}
            />
          </div>
        )}

        {/* Price Chart */}
        <div className="mb-6">
          <PriceChart data={chartData} height={350} />
        </div>

        {/* Price History Table */}
        {priceHistory.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Price Checks</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Source</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-gray-600">Min</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-gray-600">Avg</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-gray-600">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {priceHistory.slice(-10).reverse().map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 text-sm text-gray-600">
                        {new Date(item.checked_at).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-3 px-2">
                        <span className={`text-sm font-medium px-2 py-1 rounded ${
                          item.source === 'ticketmaster'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {item.source === 'ticketmaster' ? 'Ticketmaster' : 'SeatGeek'}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right text-sm font-medium text-gray-900">
                        ${parseFloat(item.min_price).toFixed(0)}
                      </td>
                      <td className="py-3 px-2 text-right text-sm text-gray-600">
                        {item.avg_price ? `$${parseFloat(item.avg_price).toFixed(0)}` : '-'}
                      </td>
                      <td className="py-3 px-2 text-right text-sm text-gray-600">
                        {item.max_price ? `$${parseFloat(item.max_price).toFixed(0)}` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* No data state */}
        {priceHistory.length === 0 && !error && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Price tracking just started
            </h3>
            <p className="text-gray-600 mb-4">
              We check prices every 4 hours. Check back soon to see price trends and recommendations.
            </p>
            <p className="text-sm text-gray-500">
              First price check will happen within the next few hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
