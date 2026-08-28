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
  min_price_with_fees?: number | null;
  avg_price_with_fees?: number | null;
  max_price_with_fees?: number | null;
  tier_estimates?: { upper?: number; lower?: number; club?: number; floor?: number; suite?: number } | null;
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
    currentPriceBase?: number;
    lowestRecordedBase?: number;
    highestRecordedBase?: number;
    averagePriceBase?: number;
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

const TIER_LABELS: Record<string, string> = {
  upper: 'Upper bowl',
  lower: 'Lower bowl',
  club: 'Club',
  floor: 'Floor',
  suite: 'Suite',
};

function TierBreakdown({ tiers, source }: {
  tiers: { upper?: number; lower?: number; club?: number; floor?: number; suite?: number } | null | undefined;
  source?: string;
}) {
  if (!tiers) return null;
  const ordered = ['upper', 'lower', 'club', 'floor', 'suite'].filter(t => tiers[t as keyof typeof tiers] != null);
  if (ordered.length === 0) return null;

  return (
    <div className="mt-3 p-3 bg-navy rounded-[6px]">
      <div className="text-xs text-muted mb-2">
        Estimated by section{source ? ` (${source})` : ''}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
        {ordered.map(t => (
          <div key={t} className="flex flex-col">
            <span className="text-xs text-muted">{TIER_LABELS[t]}</span>
            <span className="font-medium font-data tabular-nums text-bone">~${tiers[t as keyof typeof tiers]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Skeleton shaped like the loaded page: header card, chart and detail rows —
// not a bare spinner.
function EventDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
      <div className="h-5 w-32 animate-pulse rounded-[6px] bg-navy-raised mb-6 motion-reduce:animate-none" />

      <div className="bg-navy-raised rounded-[6px] p-6 mb-6 space-y-3">
        <div className="h-7 w-2/3 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
        <div className="h-5 w-1/3 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
      </div>

      <div className="bg-navy-raised rounded-[6px] p-6 mb-6">
        <div className="h-16 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
      </div>

      <div className="bg-navy-raised rounded-[6px] p-6">
        <div className="h-5 w-1/4 animate-pulse rounded-[6px] bg-navy mb-4 motion-reduce:animate-none" />
        <div className="h-[350px] animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
      </div>
    </div>
  );
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

      const price = item.min_price_with_fees ?? parseFloat(item.min_price);
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
      <div className="min-h-screen bg-deep-void py-8">
        <EventDetailSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-void py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link — tertiary, no chrome */}
        <Link
          href="/watchlist"
          className="inline-flex items-center text-beacon hover:text-bone transition-colors mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Watchlist
        </Link>

        {error && (
          <div className="bg-alert/10 text-alert p-4 rounded-[6px] mb-6">
            {error}
          </div>
        )}

        {/* Header */}
        <div className="bg-navy-raised rounded-[6px] p-6 mb-6">
          <h1 className="text-2xl font-bold font-heading text-bone mb-2">
            {eventName || 'Event Details'}
          </h1>

          {trend && (
            <div className="flex items-center gap-4">
              <span className="text-muted">Current Trend:</span>
              <PriceTrendIndicator
                direction={trend.direction}
                percentChange={trend.percentChange}
                size="lg"
              />
              {trend.currentMinPrice && (
                <span className="text-2xl font-bold font-data tabular-nums text-bone">
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

        {/* Tier Breakdown */}
        {(() => {
          // Find the most recent row per source that has tier_estimates
          const latestBySource = new Map<string, PriceHistoryItem>();
          for (const item of [...priceHistory].reverse()) {
            if (item.tier_estimates && !latestBySource.has(item.source)) {
              latestBySource.set(item.source, item);
            }
          }
          if (latestBySource.size === 0) return null;
          return (
            <div className="mb-6">
              <h3 className="text-lg font-semibold font-heading text-bone mb-2">Estimated section pricing</h3>
              <p className="text-xs text-muted mb-3">
                Inferred from this venue&apos;s typical pricing pattern. Not live per-section data.
              </p>
              {Array.from(latestBySource.entries()).map(([source, item]) => (
                <div key={source}>
                  <TierBreakdown tiers={item.tier_estimates} source={source} />
                </div>
              ))}
            </div>
          );
        })()}

        {/* Price Chart */}
        <div className="mb-6">
          <PriceChart data={chartData} height={350} />
          <p className="text-xs text-muted mt-2 text-center">
            Prices include estimated platform fees.
          </p>
        </div>

        {/* Price History Table */}
        {priceHistory.length > 0 && (
          <div className="bg-navy-raised rounded-[6px] p-6">
            <h3 className="text-lg font-bold font-heading text-bone mb-4">Recent Price Checks</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-navy-hairline">
                    <th className="text-left py-3 px-2 text-sm font-medium text-muted">Date</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-muted">Source</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted">Min</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted">Avg</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {priceHistory.slice(-10).reverse().map((item, index) => (
                    <tr key={index} className="border-b border-navy-hairline">
                      <td className="py-3 px-2 text-sm font-data tabular-nums text-muted">
                        {new Date(item.checked_at).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-sm font-medium px-2 py-1 rounded-[4px] bg-brand/10 text-beacon">
                          {item.source === 'ticketmaster' ? 'Ticketmaster' : 'SeatGeek'}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right text-sm font-medium text-bone">
                        <div className="flex flex-col items-end">
                          <span className="font-medium font-data tabular-nums">${(item.min_price_with_fees ?? parseFloat(item.min_price)).toFixed(0)}</span>
                          <span className="text-xs font-data tabular-nums text-muted">base ${parseFloat(item.min_price).toFixed(0)}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right text-sm text-muted">
                        {item.avg_price ? (
                          <div className="flex flex-col items-end">
                            <span className="font-data tabular-nums">${(item.avg_price_with_fees ?? parseFloat(item.avg_price)).toFixed(0)}</span>
                            <span className="text-xs font-data tabular-nums text-muted">base ${parseFloat(item.avg_price).toFixed(0)}</span>
                          </div>
                        ) : '-'}
                      </td>
                      <td className="py-3 px-2 text-right text-sm text-muted">
                        {item.max_price ? (
                          <div className="flex flex-col items-end">
                            <span className="font-data tabular-nums">${(item.max_price_with_fees ?? parseFloat(item.max_price)).toFixed(0)}</span>
                            <span className="text-xs font-data tabular-nums text-muted">base ${parseFloat(item.max_price).toFixed(0)}</span>
                          </div>
                        ) : '-'}
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
          <div className="bg-navy-raised rounded-[6px] p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-deep-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h3 className="text-xl font-medium font-heading text-bone mb-2">
              Price tracking just started
            </h3>
            <p className="text-muted mb-4">
              We check prices every 4 hours. Check back soon to see price trends and recommendations.
            </p>
            <p className="text-sm text-muted">
              First price check will happen within the next few hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
