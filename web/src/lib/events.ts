// Shared event-feed helpers.
//
// The Ticketmaster feed mixes genuine ticketed events with hospitality add-ons,
// venue tours and premium-seating upsells. index.js filters these server-side
// for /api/events/search but the public events endpoint does not, so anything
// rendering that feed has to filter for itself. This lived inline in
// UpcomingEvents; the onsale calendar needs exactly the same rules, so it moved
// here rather than being copied.

export interface FeedEvent {
  id: string;
  name?: string;
  date?: string;
  time?: string;
  type?: string;
  venue?: string;
  city?: string;
  state?: string;
  url?: string;
  onsaleStart?: string | null;
  onsaleEnd?: string | null;
  presales?: { name: string | null; start: string | null; end: string | null }[];
  minPrice?: number | null;
  image?: string;
}

const EXCLUDE = [
  /hospitality/i,
  /vip package/i,
  /\bsuite\b/i,
  /\b(arena|stadium|venue)s? tours?\b/i,
  /tour experience/i,
  /guided tours?/i,
  /red carpet/i,
  /club (access|experience|level|seats?|seating)/i,
  /(premium|preferred|priority) seating/i,
  /\blounge\b/i,
  /parking/i,
  /meet (&|and) greet/i,
];

/** A few feed rows arrive with a missing or blank name and render as an empty card. */
export const isRealEvent = (name?: string): boolean =>
  !!name && name.trim().length > 1 && !EXCLUDE.some((rx) => rx.test(name));

export const normalizeName = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/**
 * Filter out non-events and collapse repeats of the same title. Multi-night
 * residencies and tours list the same name many times; without this a single
 * run crowds out everything else on the page.
 */
export function cleanEvents(events: FeedEvent[]): FeedEvent[] {
  const seen = new Set<string>();
  return events.filter((e) => {
    if (!isRealEvent(e.name)) return false;
    const key = normalizeName(e.name as string);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export type SaleStatus =
  | { kind: 'onsale'; label: string }
  | { kind: 'presale'; label: string }
  | { kind: 'upcoming'; label: string }
  | { kind: 'unknown'; label: string };

const ET = 'America/New_York';

/** Onsale times come back as UTC. Label them explicitly — a bare "10:00" would
 *  read as the viewer's own timezone and be wrong for most of the country. */
export function formatEtTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d
    .toLocaleTimeString('en-US', {
      timeZone: ET,
      hour: 'numeric',
      minute: '2-digit',
    })
    .replace(' ', '')
    .toLowerCase() + ' ET';
}

export function formatEtDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { timeZone: ET, weekday: 'short', month: 'short', day: 'numeric' });
}

/**
 * Resolve an event to one of the three status signals. The colour triad in
 * DESIGN.md maps to `kind`; the label always carries the meaning in words too,
 * so status survives greyscale, colour blindness and email clients.
 */
export function saleStatus(e: FeedEvent, now: Date = new Date()): SaleStatus {
  const t = now.getTime();
  const start = e.onsaleStart ? new Date(e.onsaleStart).getTime() : NaN;
  const end = e.onsaleEnd ? new Date(e.onsaleEnd).getTime() : NaN;

  if (!Number.isNaN(start) && t >= start && (Number.isNaN(end) || t < end)) {
    return { kind: 'onsale', label: 'On sale' };
  }

  const upcomingPresale = (e.presales || [])
    .filter((p) => p.start && new Date(p.start).getTime() > t)
    .sort((a, b) => new Date(a.start as string).getTime() - new Date(b.start as string).getTime())[0];

  const livePresale = (e.presales || []).find((p) => {
    const ps = p.start ? new Date(p.start).getTime() : NaN;
    const pe = p.end ? new Date(p.end).getTime() : NaN;
    return !Number.isNaN(ps) && t >= ps && (Number.isNaN(pe) || t < pe);
  });

  if (livePresale) return { kind: 'presale', label: 'Presale open' };
  if (upcomingPresale?.start) {
    return { kind: 'presale', label: `Presale ${formatEtDate(upcomingPresale.start)}` };
  }
  if (!Number.isNaN(start) && t < start) {
    return { kind: 'upcoming', label: `Opens ${formatEtDate(e.onsaleStart as string)}` };
  }
  return { kind: 'unknown', label: 'Check listing' };
}

/**
 * Cap how many events one venue may contribute. When a team puts a whole
 * season on sale at once the day becomes six near-identical rows and every
 * other venue is pushed off the page. These are genuinely distinct events, so
 * name-dedup correctly keeps them — this is a presentation limit, not a
 * correctness one.
 */
export function capPerVenue<T extends FeedEvent>(events: T[], max = 2): T[] {
  const count = new Map<string, number>();
  return events.filter((e) => {
    const key = (e.venue || 'unknown').toLowerCase();
    const n = count.get(key) || 0;
    if (n >= max) return false;
    count.set(key, n + 1);
    return true;
  });
}

/**
 * Split an ISO date into the two pieces the OnsaleRow date block renders —
 * a large day numeral above a small uppercase month. Eastern time, to match
 * formatEtDate and formatEtTime; a date rendered in the viewer's own zone
 * would be wrong for most of the country.
 */
export function formatEventDayParts(iso?: string | null): { day: string; month: string } | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const day = d.toLocaleDateString('en-US', { timeZone: ET, day: 'numeric' });
  const month = d.toLocaleDateString('en-US', { timeZone: ET, month: 'short' }).toUpperCase();
  return { day, month };
}
