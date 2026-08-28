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

  // Price direction is not status — it is resolved outside DESIGN.md's
  // status triad. A drop is good news, carried by Signal Blue (the site's
  // own accent); a rise uses the alert system colour, which sits outside
  // the on-sale/presale/not-yet-open triad. Gate Green is never used here.
  // Every state also renders an arrow and the percentage as text so
  // direction never depends on colour alone.
  const config = {
    up: {
      text: 'text-alert',
      icon: (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      )
    },
    down: {
      // DESIGN.md's Signal Blue (text-brand) measures 2.75:1 on Raised Navy
      // as a foreground — fails WCAG AA. Beacon (#6192FF) exists precisely
      // for this: 4.54:1 on Raised Navy. The watchlist renders this
      // component directly on a row's own background (no pill behind it),
      // and that row's background lightens to navy-raised-hover on hover —
      // against which Beacon drops to 4.03:1, under AA. group-hover:text-bone
      // covers that one case: the watchlist row carries `group`, so this
      // only fires while an ancestor row is actually hovered; everywhere
      // else (e.g. the static bg-navy-raised header on the event detail
      // page) there is no hovering `group` ancestor and it never applies.
      text: 'text-beacon group-hover:text-bone',
      icon: (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )
    },
    stable: {
      text: 'text-muted',
      icon: (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      )
    }
  };

  const { text, icon } = config[direction];

  if (percentChange === null) {
    return (
      <span className={`inline-flex items-center gap-1 font-medium font-data tabular-nums text-muted ${sizeClasses[size]}`}>
        <span>--</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1 font-medium font-data tabular-nums ${text} ${sizeClasses[size]}`}>
      {icon}
      <span>{Math.abs(percentChange)}%</span>
    </span>
  );
}
