'use client';

import { Venue, tierPricing } from '@/data/venues';

interface PriceByTier {
  floor?: number;
  lower?: number;
  club?: number;
  upper?: number;
}

interface VenuePriceDisplayProps {
  venue: Venue;
  basePrice: number | null;
  source: string;
}

export default function VenuePriceDisplay({ venue, basePrice, source }: VenuePriceDisplayProps) {
  // Estimate prices by tier based on the base (usually upper bowl) price
  const estimatePrices = (): PriceByTier => {
    if (!basePrice) return {};

    return {
      floor: Math.round(basePrice * tierPricing.floor.multiplier),
      lower: Math.round(basePrice * tierPricing.lower.multiplier),
      club: Math.round(basePrice * tierPricing.club.multiplier),
      upper: Math.round(basePrice * tierPricing.upper.multiplier)
    };
  };

  const prices = estimatePrices();

  const tiers = [
    { key: 'floor', label: 'Floor/Courtside', color: 'bg-purple-500', textColor: 'text-purple-700', bgLight: 'bg-purple-50' },
    { key: 'club', label: 'Club Level', color: 'bg-amber-500', textColor: 'text-amber-700', bgLight: 'bg-amber-50' },
    { key: 'lower', label: 'Lower Bowl', color: 'bg-blue-500', textColor: 'text-blue-700', bgLight: 'bg-blue-50' },
    { key: 'upper', label: 'Upper Bowl', color: 'bg-green-500', textColor: 'text-green-700', bgLight: 'bg-green-50' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{venue.name}</h3>
          <p className="text-sm text-gray-500">{venue.city}, {venue.state}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
          source === 'ticketmaster' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
        }`}>
          {source === 'ticketmaster' ? 'Ticketmaster' : 'SeatGeek'}
        </span>
      </div>

      {/* Visual venue representation */}
      <div className="relative mb-6">
        {/* Simple arena visualization */}
        <div className="flex flex-col items-center gap-2">
          {/* Court/Stage */}
          <div className="w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-medium">
            {venue.type === 'arena' ? 'Court' : 'Stage'}
          </div>

          {/* Floor seats */}
          <div className="w-48 h-8 bg-purple-200 rounded flex items-center justify-center text-purple-800 text-xs font-medium border-2 border-purple-400">
            Floor ${prices.floor || '---'}
          </div>

          {/* Lower bowl */}
          <div className="w-64 h-10 bg-blue-200 rounded flex items-center justify-center text-blue-800 text-xs font-medium border-2 border-blue-400">
            Lower Bowl ${prices.lower || '---'}
          </div>

          {/* Club level */}
          <div className="w-72 h-8 bg-amber-200 rounded flex items-center justify-center text-amber-800 text-xs font-medium border-2 border-amber-400">
            Club ${prices.club || '---'}
          </div>

          {/* Upper bowl */}
          <div className="w-80 h-10 bg-green-200 rounded flex items-center justify-center text-green-800 text-xs font-medium border-2 border-green-400">
            Upper Bowl ${prices.upper || '---'}
          </div>
        </div>
      </div>

      {/* Price breakdown */}
      <div className="space-y-2">
        <p className="text-xs text-gray-500 mb-3">Estimated prices by section:</p>
        {tiers.map((tier) => {
          const price = prices[tier.key as keyof PriceByTier];
          return (
            <div
              key={tier.key}
              className={`flex items-center justify-between p-3 rounded-lg ${tier.bgLight}`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${tier.color}`}></div>
                <span className={`font-medium ${tier.textColor}`}>{tier.label}</span>
              </div>
              <span className="font-bold text-gray-900">
                {price ? `$${price}+` : 'N/A'}
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        * Estimates based on available pricing. Actual prices may vary.
      </p>
    </div>
  );
}
