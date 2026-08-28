import Link from 'next/link';
import { FeedEvent, saleStatus, formatEtTime, formatEventDayParts } from '@/lib/events';
import { FOCUS_RING_ON_DEEP_VOID } from '@/lib/a11y';

// The workhorse component from DESIGN.md §4. It is the single most important
// component on the site and must be recognisable in all five places it
// appears — the onsale calendar, the homepage, venue guides, the watchlist
// and the weekly email.
//
// Colour follows the DESIGN.md status triad — green on sale, teal presale,
// muted not yet open — and is always paired with a word, never used alone.
//
// Deliberately no transform on hover. This is a dense list and jumping rows
// are nauseating; the row lifts one tonal step instead.

const STATUS_CLASS: Record<string, string> = {
  // On-sale and presale keep full-strength status text (4.75:1 / 4.69:1 on
  // Raised Navy — the figures this task's own audit measured), but the pill
  // background is now an opaque value pre-composited from the DESIGN.md
  // formula (status colour at 14% over Raised Navy: #164360 / #184269)
  // instead of the live translucent bg-success/14 / bg-teal/14 utility. A
  // translucent background composites with whatever is directly behind it,
  // and the row itself now lifts to navy-raised-hover on hover (the C2
  // fix) — a live /14 utility would brighten right along with it and drop
  // to 4.29:1 / 4.22:1, under AA. Freezing the pill's own background
  // decouples its contrast from the row's hover state, so it renders at
  // 4.75:1 / 4.69:1 in every row state, not just at rest.
  onsale: 'bg-[#164360] text-success',
  presale: 'bg-[#184269] text-teal',
  // Signal Muted text on its own 14% wash measures 4.16:1 on Raised Navy —
  // fails WCAG AA (4.5:1). The wash stays (it's still the "not yet open"
  // signal colour behind the pill); the text lifts to Bone, which clears
  // AA regardless of the row's hover state (8.4:1 / 7.6:1), so this one
  // doesn't need the same opaque-freeze treatment.
  upcoming: 'bg-muted/14 text-bone',
  unknown: 'bg-muted/14 text-bone',
};

export default function OnsaleRow({ event }: { event: FeedEvent }) {
  const status = saleStatus(event);
  const when = formatEventDayParts(event.date);
  const time = event.onsaleStart ? formatEtTime(event.onsaleStart) : '';
  const place = [event.venue, event.city && event.state ? `${event.city}, ${event.state}` : event.city]
    .filter(Boolean)
    .join(' · ');

  const body = (
    <>
      {/* Date block — day numeral over uppercase month, monospaced and
          tabular so the column aligns down a list of twenty. */}
      <div className="w-14 flex-none text-center font-data">
        <p className="text-[21px] leading-[1.2] font-semibold tracking-[0.02em] tabular-nums text-bone">
          {when ? when.day : '—'}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted">
          {when ? when.month : ''}
        </p>
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[17px] font-semibold leading-[1.3] tracking-[-0.015em] text-bone line-clamp-2">
          {event.name}
        </p>
        {place && <p className="mt-0.5 truncate text-[13px] text-muted">{place}</p>}
        {time && (
          <p className="mt-0.5 font-data text-[13px] tracking-[0.02em] tabular-nums text-muted">
            On sale {time}
          </p>
        )}
      </div>

      {/* Status pill — colour at 15% behind colour at full strength, so it
          reads illuminated rather than painted. Colour plus word, always. */}
      <span
        className={`flex-none rounded-[4px] px-2.5 py-[5px] text-[11px] font-semibold uppercase leading-none tracking-[0.16em] transition-shadow group-hover:shadow-[0_0_12px_currentColor] ${
          STATUS_CLASS[status.kind]
        }`}
      >
        {status.label}
      </span>
    </>
  );

  const shell =
    'flex items-center gap-5 rounded-[6px] bg-navy-raised px-5 py-4 transition-colors ' +
    'motion-reduce:transition-none';

  // Only link when there is somewhere real to go.
  return event.id ? (
    <Link
      href={`/event/${event.id}`}
      className={`${shell} group hover:bg-navy-raised-hover ${FOCUS_RING_ON_DEEP_VOID}`}
    >
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
}
