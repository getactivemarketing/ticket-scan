// CJ (Commission Junction) affiliate link configuration.
//
// Ships DARK: every program stays unlinked until BOTH the publisher PID and that
// program's ad ID are present in the environment. With no env vars set, the
// helpers below return null and the UI renders nothing — so this is safe to
// deploy while CJ applications are still under manual review.
//
// Env vars must be referenced as literals (process.env.NEXT_PUBLIC_X). Next.js
// only inlines literal references into the client bundle; process.env[key] with a
// computed key silently resolves to undefined in the browser.

export type LinkClass = 'ticket-resale' | 'travel-adjacency';

/** Short codes used in the CJ sid= param. Keep under 64 chars total. */
const LINK_CLASS_CODE: Record<LinkClass, string> = {
  'ticket-resale': 'tix',
  'travel-adjacency': 'trv',
};

/** Where the link was rendered. Combined with LinkClass to form the sid. */
export type Placement = 'event' | 'venue' | 'city' | 'category';

export interface AffiliateProgram {
  /** Stable internal key. Also used in analytics events. */
  key: string;
  /** Advertiser name as shown to the user. */
  name: string;
  linkClass: LinkClass;
  /** CJ advertiser ID from the catalog — informational, not used in the URL. */
  advertiserId: string;
  /** Per-link CJ ad ID. Populated from env once the program approves us. */
  adId: string | undefined;
  /** Human-readable call to action. */
  cta: string;
  /** One-line explanation of what the user gets. */
  blurb: string;
  /**
   * Landing page to deep-link to. CJ appends this via the url= param on
   * programs that support deep linking; harmless where they don't.
   */
  destination: string;
}

/**
 * CJ publisher (website) ID. Single value across every program.
 * Not a secret — it appears in every outbound link — hence NEXT_PUBLIC_.
 */
export const CJ_PID: string | undefined = process.env.NEXT_PUBLIC_CJ_PID;

/**
 * CJ rotates several equivalent tracking domains. Configurable so a domain
 * that gets blocklisted by an ad blocker can be swapped without a code change.
 */
export const CJ_TRACKING_DOMAIN: string =
  process.env.NEXT_PUBLIC_CJ_TRACKING_DOMAIN || 'www.anrdoezrs.net';

export const PROGRAMS: AffiliateProgram[] = [
  // ---- Ticket resale -----------------------------------------------------
  {
    key: 'ticketnetwork',
    name: 'TicketNetwork',
    linkClass: 'ticket-resale',
    advertiserId: '2288710',
    adId: process.env.NEXT_PUBLIC_CJ_AD_TICKETNETWORK,
    cta: 'Check TicketNetwork',
    blurb: 'Resale marketplace with a large concert and sports inventory.',
    destination: 'https://www.ticketnetwork.com',
  },
  {
    key: 'ticketliquidator',
    name: 'Ticket Liquidator',
    linkClass: 'ticket-resale',
    advertiserId: '2916100',
    adId: process.env.NEXT_PUBLIC_CJ_AD_TICKETLIQUIDATOR,
    cta: 'Check Ticket Liquidator',
    blurb: 'Resale marketplace covering most major US events.',
    destination: 'https://www.ticketliquidator.com',
  },
  {
    key: 'ticketsmarter',
    name: 'TicketSmarter',
    linkClass: 'ticket-resale',
    advertiserId: '5346842',
    adId: process.env.NEXT_PUBLIC_CJ_AD_TICKETSMARTER,
    cta: 'Check TicketSmarter',
    blurb: 'Resale marketplace listing 100,000+ live events.',
    destination: 'https://www.ticketsmarter.com',
  },

  // ---- Travel adjacency --------------------------------------------------
  {
    key: 'booking',
    name: 'Booking.com',
    linkClass: 'travel-adjacency',
    advertiserId: '7864295',
    adId: process.env.NEXT_PUBLIC_CJ_AD_BOOKING,
    cta: 'Find hotels nearby',
    blurb: 'Hotels within walking distance of the venue.',
    destination: 'https://www.booking.com',
  },
  {
    key: 'priceline',
    name: 'Priceline',
    linkClass: 'travel-adjacency',
    advertiserId: '1464653',
    adId: process.env.NEXT_PUBLIC_CJ_AD_PRICELINE,
    cta: 'Compare hotel rates',
    blurb: 'Compare last-minute rates for event nights.',
    destination: 'https://www.priceline.com',
  },
  {
    key: 'getyourguide',
    name: 'GetYourGuide',
    linkClass: 'travel-adjacency',
    advertiserId: '6774658',
    adId: process.env.NEXT_PUBLIC_CJ_AD_GETYOURGUIDE,
    cta: 'Things to do nearby',
    blurb: 'Tours and attractions to fill the rest of the trip.',
    destination: 'https://www.getyourguide.com',
  },
  {
    key: 'discovercars',
    name: 'Discover Cars',
    linkClass: 'travel-adjacency',
    advertiserId: '5341335',
    adId: process.env.NEXT_PUBLIC_CJ_AD_DISCOVERCARS,
    cta: 'Compare rental cars',
    blurb: 'Compare rental car rates across suppliers.',
    destination: 'https://www.discovercars.com',
  },
  {
    key: 'parksleepfly',
    name: 'ParkSleepFly',
    linkClass: 'travel-adjacency',
    advertiserId: '3909103',
    adId: process.env.NEXT_PUBLIC_CJ_AD_PARKSLEEPFLY,
    cta: 'Park and stay',
    blurb: 'Airport hotel plus parking for out-of-town trips.',
    destination: 'https://www.parksleepfly.com',
  },
];

/** True when at least one program is fully configured and can render. */
export function hasLiveProgram(linkClass?: LinkClass): boolean {
  return PROGRAMS.some(
    (p) => isLive(p) && (linkClass ? p.linkClass === linkClass : true)
  );
}

export function isLive(program: AffiliateProgram): boolean {
  return Boolean(CJ_PID && program.adId);
}

export function getPrograms(linkClass: LinkClass): AffiliateProgram[] {
  return PROGRAMS.filter((p) => p.linkClass === linkClass && isLive(p));
}

export interface BuildUrlOptions {
  placement: Placement;
  /**
   * Optional deep link, e.g. a specific event or a hotel search scoped to the
   * venue's city. Falls back to the program's destination.
   */
  deepLink?: string;
}

/**
 * Build a CJ tracking URL, or null when the program isn't fully configured.
 *
 * The sid= param carries our own sub-tracking so CJ's click report can be split
 * by link class and placement — that split is the entire point of the first
 * two weeks of data.
 */
export function buildAffiliateUrl(
  program: AffiliateProgram,
  { placement, deepLink }: BuildUrlOptions
): string | null {
  if (!CJ_PID || !program.adId) return null;

  const sid = `${placement}_${LINK_CLASS_CODE[program.linkClass]}`;
  const target = deepLink || program.destination;

  const params = new URLSearchParams({ sid });
  if (target) params.set('url', target);

  return `https://${CJ_TRACKING_DOMAIN}/click-${CJ_PID}-${program.adId}?${params.toString()}`;
}
