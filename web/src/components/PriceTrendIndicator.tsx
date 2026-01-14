'use client';

interface PriceTrendIndicatorProps {
  direction: 'up' | 'down' | 'stable';
  percentChange: number | null;
  size?: 'sm' | 'md' | 'lg';
}

export default function PriceTrendIndicator({
  direction,
  percentChange,
  size = 'md'
}: PriceTrendIndicatorProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  const config = {
    up: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      icon: (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      )
    },
    down: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      icon: (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )
    },
    stable: {
      bg: 'bg-gray-100',
      text: 'text-gray-600',
      icon: (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      )
    }
  };

  const { bg, text, icon } = config[direction];

  if (percentChange === null) {
    return (
      <span className={`inline-flex items-center gap-1 rounded-full font-medium bg-gray-100 text-gray-500 ${sizeClasses[size]}`}>
        <span>--</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium ${bg} ${text} ${sizeClasses[size]}`}>
      {icon}
      <span>{Math.abs(percentChange)}%</span>
    </span>
  );
}
