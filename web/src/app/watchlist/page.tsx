'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';
import PriceTrendIndicator from '@/components/PriceTrendIndicator';
import { formatEventDayParts } from '@/lib/events';

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

const PRIMARY_BUTTON =
  'inline-flex items-center gap-1.5 bg-brand text-bone py-2 px-4 rounded-[6px] font-medium ' +
  'transition-colors hover:shadow-[0_0_24px_var(--color-blue-glow)] active:translate-y-px ' +
  'motion-reduce:transition-none';

const SECONDARY_BUTTON =
  'inline-flex items-center justify-center border border-navy-hairline text-bone py-2 px-4 ' +
  'rounded-[6px] font-medium text-sm transition-colors hover:border-brand motion-reduce:transition-none';

const REMOVE_BUTTON =
  'text-alert hover:bg-alert/10 py-2 px-4 rounded-[6px] font-medium text-sm transition-colors ' +
  'motion-reduce:transition-none';

// Skeleton row shaped like a real watchlist row — date block, title, meta
// lines and an action slot — not a bare spinner.
function WatchlistRowSkeleton() {
  return (
    <div className="flex items-center gap-5 rounded-[6px] bg-navy-raised px-5 py-4" aria-hidden="true">
      <div className="w-14 flex-none space-y-2">
        <div className="mx-auto h-5 w-8 animate-pulse rounded-[4px] bg-navy motion-reduce:animate-none" />
        <div className="mx-auto h-2.5 w-6 animate-pulse rounded-[4px] bg-navy motion-reduce:animate-none" />
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <div className="h-4 w-2/3 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
        <div className="h-3 w-1/3 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
        <div className="h-3 w-1/4 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
      </div>
      <div className="h-9 w-24 flex-none animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
    </div>
  );
}

export default function WatchlistPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [removeErrorId, setRemoveErrorId] = useState<number | null>(null);
  const [removeErrorMsg, setRemoveErrorMsg] = useState('');

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
    setRemoveErrorId(null);
    try {
      await api.removeFromWatchlist(id);
      setWatchlist((prev) => prev.filter((item) => item.id !== id));
    } catch {
      setRemoveErrorId(id);
      setRemoveErrorMsg("Couldn't remove that event. Try again.");
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

  const showLoading = authLoading || loading;

  return (
    <div className="min-h-screen bg-deep-void py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold font-heading text-bone">My Watchlist</h1>
            <p className="text-muted mt-1">Track prices and get recommendations</p>
          </div>
          <Link href="/dashboard" className={PRIMARY_BUTTON}>
            + Add Events
          </Link>
        </div>

        {error && (
          <div className="bg-alert/10 text-alert p-4 rounded-[6px] mb-6">
            {error}
          </div>
        )}

        {showLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <WatchlistRowSkeleton key={i} />
            ))}
          </div>
        ) : watchlist.length === 0 ? (
          <div className="bg-navy-raised rounded-[6px] p-12 text-center">
            <span className="text-4xl mb-4 block" aria-hidden="true">👁️</span>
            <h3 className="text-xl font-semibold font-heading text-bone mb-2">
              Your watchlist is empty
            </h3>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Track any event&rsquo;s price and we&rsquo;ll tell you the moment it drops.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8 text-left">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-beacon mb-1">
                  Step 1
                </p>
                <p className="text-[13px] text-muted">Search for an event on the dashboard</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-beacon mb-1">
                  Step 2
                </p>
                <p className="text-[13px] text-muted">Add it here and set a target price</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-beacon mb-1">
                  Step 3
                </p>
                <p className="text-[13px] text-muted">Get notified the moment it drops</p>
              </div>
            </div>

            <Link href="/dashboard" className={SECONDARY_BUTTON}>
              Search Events
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {watchlist.map((item) => {
              const when = formatEventDayParts(item.event_date);
              const place = [item.venue, item.city].filter(Boolean).join(' · ');
              const atTarget = isAtTarget(item);

              return (
                <div
                  key={item.id}
                  className={`flex flex-col lg:flex-row lg:items-center gap-5 rounded-[6px] px-5 py-4 transition-colors motion-reduce:transition-none ${
                    atTarget ? 'bg-blue-wash' : 'bg-navy-raised hover:bg-blue-wash'
                  }`}
                >
                  {/* Date block — matches OnsaleRow's mono day-numeral-over-month. */}
                  <div className="w-14 flex-none text-center font-data">
                    <p className="text-[21px] leading-[1.2] font-semibold tracking-[0.02em] tabular-nums text-bone">
                      {when ? when.day : '—'}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted">
                      {when ? when.month : ''}
                    </p>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.015em] text-bone">
                        {item.event_name}
                      </h3>
                      {atTarget && (
                        <span className="flex-none rounded-[4px] bg-brand/14 px-2.5 py-[5px] text-[11px] font-semibold uppercase leading-none tracking-[0.16em] text-brand">
                          Target met
                        </span>
                      )}
                    </div>

                    {place && <p className="text-[13px] text-muted">{place}</p>}
                    <p className="mt-0.5 font-data text-[13px] tracking-[0.02em] tabular-nums text-deep-muted">
                      {formatDate(item.event_date)}
                    </p>

                    {/* Price info row */}
                    <div className="mt-3 flex flex-wrap items-center gap-4">
                      {item.current_min_price ? (
                        <div className="flex items-center gap-2">
                          <span className="font-data text-[21px] font-semibold tracking-[0.02em] tabular-nums text-bone">
                            ${parseFloat(item.current_min_price).toFixed(0)}
                          </span>
                          {item.current_max_price && (
                            <span className="font-data text-[15px] tracking-[0.02em] tabular-nums text-muted">
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
                        <span className="text-muted text-[13px]">
                          Tracking started - prices coming soon
                        </span>
                      )}

                      {item.target_price && (
                        <span className="text-[13px] text-muted">
                          Target:{' '}
                          <span className="font-data font-semibold tabular-nums text-brand">
                            ${item.target_price}
                          </span>
                        </span>
                      )}

                      {item.last_checked && (
                        <span className="font-data text-[13px] tabular-nums text-deep-muted">
                          Updated {formatTimeAgo(item.last_checked)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 flex-none">
                    <div className="flex items-center gap-2">
                      <Link href={`/event/${item.event_id}`} className={SECONDARY_BUTTON}>
                        View Details
                      </Link>
                      <button onClick={() => handleRemove(item.id)} className={REMOVE_BUTTON}>
                        Remove
                      </button>
                    </div>
                    {removeErrorId === item.id && (
                      <p className="text-alert text-[13px]">{removeErrorMsg}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Info box */}
        {!showLoading && (
          <div className="mt-8 bg-navy rounded-[6px] p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl" aria-hidden="true">💡</span>
              <div>
                <h4 className="font-semibold text-beacon">Price Tracking Active</h4>
                <p className="text-[13px] text-muted mt-1">
                  We check prices every 4 hours and will show you trends and recommendations.
                  Click &quot;View Details&quot; on any event to see the full price history and buy recommendation.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
