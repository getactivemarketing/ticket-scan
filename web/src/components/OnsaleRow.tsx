import Link from 'next/link';
import { FeedEvent, saleStatus, formatEtTime } from '@/lib/events';

// The workhorse component from DESIGN.md. It appears on the onsale calendar,
// and is intended for the homepage, venue guides, watchlist and the weekly
// email too, so that all five render status identically.
//
// Colour follows the DESIGN.md status triad — green on sale, teal presale,
// muted not yet open — and is always paired with a word, never used alone.

const STATUS_CLASS: Record<string, string> = {
  onsale: 'bg-success/10 text-success',
  presale: 'bg-teal/10 text-teal',
  upcoming: 'bg-gray-100 text-gray-500',
  unknown: 'bg-gray-100 text-gray-500',
};

export default function OnsaleRow({ event }: { event: FeedEvent }) {
  const status = saleStatus(event);
  const time = event.onsaleStart ? formatEtTime(event.onsaleStart) : '';
  const place = [event.venue, event.city && event.state ? `${event.city}, ${event.state}` : event.city]
    .filter(Boolean)
    .join(' · ');

  const body = (
    <>
      <div className="w-20 flex-none">
        <p className="text-xs font-medium text-gray-500 tabular-nums">{time || '—'}</p>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-navy text-sm leading-snug line-clamp-2 group-hover:text-brand transition-colors">
          {event.name}
        </p>
        {place && <p className="text-xs text-gray-400 mt-0.5 truncate">{place}</p>}
      </div>
      <span
        className={`flex-none text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded ${
          STATUS_CLASS[status.kind]
        }`}
      >
        {status.label}
      </span>
    </>
  );

  const shell = 'flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-xl transition-colors';

  // Only link when there is somewhere real to go.
  return event.id ? (
    <Link href={`/event/${event.id}`} className={`${shell} hover:border-brand/40 group`}>
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
}
