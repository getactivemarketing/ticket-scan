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
        style={{ background: '#162D5A', border: '1px solid #1F3A6B', color: '#F7F9FC' }}
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
          <CartesianGrid strokeDasharray="3 3" stroke="#1F3A6B" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: '#8FA3C8' }}
            tickLine={{ stroke: '#1F3A6B' }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#8FA3C8' }}
            tickFormatter={(v) => `$${v}`}
            tickLine={{ stroke: '#1F3A6B' }}
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
            stroke="#1E63FF"
            strokeWidth={2}
            dot={{ fill: '#1E63FF', r: 4 }}
            activeDot={{ r: 6 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="seatgeek"
            stroke="#4A82FF"
            strokeWidth={2}
            dot={{ fill: '#4A82FF', r: 4 }}
            activeDot={{ r: 6 }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
