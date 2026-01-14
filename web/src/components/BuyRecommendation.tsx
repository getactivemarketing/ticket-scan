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
    daysUntilEvent: number | null;
    targetPrice: number | null;
  } | null;
}

export default function BuyRecommendation({
  action,
  confidence,
  reason,
  stats
}: BuyRecommendationProps) {
  const actionConfig = {
    buy_now: {
      bg: 'bg-green-50 border-green-200',
      iconBg: 'bg-green-500',
      title: 'Good Time to Buy',
      titleColor: 'text-green-700'
    },
    wait: {
      bg: 'bg-amber-50 border-amber-200',
      iconBg: 'bg-amber-500',
      title: 'Consider Waiting',
      titleColor: 'text-amber-700'
    },
    hold: {
      bg: 'bg-blue-50 border-blue-200',
      iconBg: 'bg-blue-500',
      title: 'Monitor Prices',
      titleColor: 'text-blue-700'
    }
  };

  const confidenceConfig = {
    high: { bg: 'bg-green-100', text: 'text-green-700' },
    medium: { bg: 'bg-amber-100', text: 'text-amber-700' },
    low: { bg: 'bg-gray-100', text: 'text-gray-700' }
  };

  const config = actionConfig[action];
  const confConfig = confidenceConfig[confidence];

  return (
    <div className={`rounded-xl border-2 p-6 ${config.bg}`}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center flex-shrink-0`}>
          {action === 'buy_now' && (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {action === 'wait' && (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {action === 'hold' && (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h4 className={`font-bold text-lg ${config.titleColor}`}>{config.title}</h4>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${confConfig.bg} ${confConfig.text}`}>
              {confidence.charAt(0).toUpperCase() + confidence.slice(1)} Confidence
            </span>
          </div>

          <p className="text-gray-600">{reason}</p>

          {stats && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/60 rounded-lg p-3">
                <span className="text-xs text-gray-500 block">Current</span>
                <p className="font-bold text-gray-900">${stats.currentPrice.toFixed(0)}</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <span className="text-xs text-gray-500 block">Lowest</span>
                <p className="font-bold text-green-600">${stats.lowestRecorded.toFixed(0)}</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <span className="text-xs text-gray-500 block">Highest</span>
                <p className="font-bold text-red-600">${stats.highestRecorded.toFixed(0)}</p>
              </div>
              {stats.daysUntilEvent !== null && (
                <div className="bg-white/60 rounded-lg p-3">
                  <span className="text-xs text-gray-500 block">Event In</span>
                  <p className="font-bold text-gray-900">{stats.daysUntilEvent} days</p>
                </div>
              )}
            </div>
          )}

          {stats?.targetPrice && (
            <div className="mt-3 text-sm text-gray-600">
              Your target price: <span className="font-semibold">${stats.targetPrice}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
