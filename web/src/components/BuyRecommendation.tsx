'use client';

interface BuyRecommendationProps {
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

// Buy/wait/hold advice is not status — DESIGN.md's Gate Green / Marquee Teal /
// Signal Muted triad means on-sale, presale and not-yet-open and nothing
// else. The verdict text stays text-bone regardless of action; only the
// icon glyph changes, so the distinction between actions is legible from
// the icon shape and the words, not from a colour code.
export default function BuyRecommendation({
  action,
  confidence,
  reason,
  stats
}: BuyRecommendationProps) {
  const actionConfig = {
    buy_now: {
      title: 'Good Time to Buy',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      ),
    },
    wait: {
      title: 'Consider Waiting',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    hold: {
      title: 'Monitor Prices',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    }
  };

  const config = actionConfig[action];

  return (
    <div className="rounded-[6px] bg-navy-raised p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-[6px] bg-brand/14 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {config.icon}
          </svg>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h4 className="font-bold text-lg text-bone">{config.title}</h4>
            <span className="text-xs px-2 py-0.5 rounded-[4px] font-medium bg-navy text-muted">
              {confidence.charAt(0).toUpperCase() + confidence.slice(1)} Confidence
            </span>
          </div>

          <p className="text-muted">{reason}</p>

          {stats && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-navy rounded-[6px] p-3">
                <span className="text-xs text-muted block">Current (with fees)</span>
                <p className="font-bold font-data tabular-nums text-bone">${stats.currentPrice.toFixed(0)}</p>
                {stats.currentPriceBase !== undefined && (
                  <p className="text-xs font-data tabular-nums text-muted">base ${stats.currentPriceBase.toFixed(0)}</p>
                )}
              </div>
              <div className="bg-navy rounded-[6px] p-3">
                <span className="text-xs text-muted block">Lowest (with fees)</span>
                <p className="font-bold font-data tabular-nums text-bone">${stats.lowestRecorded.toFixed(0)}</p>
                {stats.lowestRecordedBase !== undefined && (
                  <p className="text-xs font-data tabular-nums text-muted">base ${stats.lowestRecordedBase.toFixed(0)}</p>
                )}
              </div>
              <div className="bg-navy rounded-[6px] p-3">
                <span className="text-xs text-muted block">Highest (with fees)</span>
                <p className="font-bold font-data tabular-nums text-bone">${stats.highestRecorded.toFixed(0)}</p>
                {stats.highestRecordedBase !== undefined && (
                  <p className="text-xs font-data tabular-nums text-muted">base ${stats.highestRecordedBase.toFixed(0)}</p>
                )}
              </div>
              {stats.daysUntilEvent !== null && (
                <div className="bg-navy rounded-[6px] p-3">
                  <span className="text-xs text-muted block">Event In</span>
                  <p className="font-bold font-data tabular-nums text-bone">{stats.daysUntilEvent} days</p>
                </div>
              )}
            </div>
          )}

          {stats?.targetPrice && (
            <div className="mt-3 text-sm text-muted">
              Your target price:{' '}
              <span className="font-semibold font-data tabular-nums text-bone">${stats.targetPrice}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
