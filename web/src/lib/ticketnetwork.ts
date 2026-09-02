import index from '@/data/ticketnetwork.generated.json';
import { resolveFromIndex } from './tn-slug.mjs';

export type TnKind = 'performers' | 'venues' | 'category' | 'top';
export interface TnTarget {
  kind: TnKind;
  slug: string;
}

/**
 * The whole feature is gated on the CJ credentials. Absent them nothing
 * resolves, so no affiliate link can render and the site is exactly as it
 * was — which is what lets this merge before the numbers arrive.
 */
export function tnEnabled(): boolean {
  return Boolean(process.env.CJ_PID && process.env.CJ_TN_AID);
}

export function resolveTicketNetwork(input: {
  name?: string;
  venue?: string;
  category?: string;
}): TnTarget | null {
  if (!tnEnabled()) return null;
  return resolveFromIndex(index, input) as TnTarget | null;
}

/** The first-party href. Credentials never appear in rendered HTML. */
export function tnHref(target: TnTarget, sid: string): string {
  return `/go/tn/${target.kind}/${target.slug}?sid=${encodeURIComponent(sid)}`;
}
