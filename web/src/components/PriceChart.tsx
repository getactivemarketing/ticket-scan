'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from 'recharts';

interface PriceDataPoint {
  date: string;
  ticketmaster: number | null;
  seatgeek: number | null;
}

interface PriceChartProps {
  data: PriceDataPoint[];
  height?: number;
}

// The two data-series colours. CustomTooltip renders these directly as
// tooltip TEXT (style={{ color: entry.color }}), not just as strokes, so
// each has to clear WCAG AA (4.5:1) as text on the tooltip's own
// background (#162D5A / --color-navy-raised) — a bar a stroke alone
// wouldn't have to clear. Both must also stay within the fixed Signal Blue
// hue family: DESIGN.md reserves Marquee Teal and Gate Green for the status
// triad and nothing else, so neither is available here even though a
// teal/blue pairing would separate more easily.
//
//   Ticketmaster -> --color-beacon #6192FF, hue 221° (same hue as Signal
//     Blue, just lighter). Measured 4.54:1 on Raised Navy. Already an
//     existing DESIGN.md token, added in an earlier task for exactly this
//     kind of AA failure.
//   SeatGeek -> #7FBFFF, hue 210° — a cooler, more cyan-leaning tint of the
//     same blue family, kept clear of Marquee Teal's 181° hue by a 30°
//     margin so it still reads as "blue," not "teal." Measured 6.94:1 on
//     Raised Navy.
//
// The rejected 1.0 value, brand-light #4A82FF (hue 222°, 3.81:1 on Raised
// Navy), is NOT used for either series — that was the value this task was
// filed to remove.
const SERIES_COLOR = {
  ticketmaster: 'var(--color-beacon)', // #6192FF, 4.54:1 on Raised Navy
  seatgeek: '#7FBFFF', // 6.94:1 on Raised Navy
} as const;

// Hoisted out of PriceChart's render so it isn't recreated on every render —
// a component declared inline resets its own state each time its parent
// re-renders.
function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string; color: string }>;
  label?: string;
}) {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-[6px] p-3"
        style={{
          background: 'var(--color-navy-raised)',
          border: '1px solid var(--color-navy-hairline)',
          color: 'var(--color-bone)',
        }}
      >
        <p className="text-sm font-medium mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm font-data tabular-nums" style={{ color: entry.color }}>
            {entry.dataKey === 'ticketmaster' ? 'Ticketmaster' : 'SeatGeek'}:{' '}
            <span className="font-bold">${entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function PriceChart({ data, height = 300 }: PriceChartProps) {
  if (data.length === 0) {
    return (
      <div className="bg-navy-raised rounded-[6px] p-6">
        <h3 className="text-lg font-bold font-heading text-bone mb-4">Price History</h3>
        <div className="flex items-center justify-center h-48 text-muted">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2 text-deep-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p>Price tracking started.</p>
            <p className="text-sm">Check back in a few hours for trend data.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy-raised rounded-[6px] p-6">
      <h3 className="text-lg font-bold font-heading text-bone mb-4">Price History</h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-navy-hairline)" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: 'var(--color-muted)' }}
            tickLine={{ stroke: 'var(--color-navy-hairline)' }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: 'var(--color-muted)' }}
            tickFormatter={(v) => `$${v}`}
            tickLine={{ stroke: 'var(--color-navy-hairline)' }}
            width={60}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => (
              <span className="text-sm text-muted">
                {value === 'ticketmaster' ? 'Ticketmaster' : 'SeatGeek'}
              </span>
            )}
          />
          <Line
            type="monotone"
            dataKey="ticketmaster"
            stroke={SERIES_COLOR.ticketmaster}
            strokeWidth={2}
            dot={{ fill: SERIES_COLOR.ticketmaster, r: 4 }}
            activeDot={{ r: 6 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="seatgeek"
            stroke={SERIES_COLOR.seatgeek}
            strokeWidth={2}
            dot={{ fill: SERIES_COLOR.seatgeek, r: 4 }}
            activeDot={{ r: 6 }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
