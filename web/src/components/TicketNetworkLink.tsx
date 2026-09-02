import { resolveTicketNetwork, tnHref } from '@/lib/ticketnetwork';

// Two visual treatments, because this component lands on both design
// generations at once: the city pages and venue guides are still 1.0
// (bg-white cards, bg-brand buttons) and the combo pages are 2.0 (navy
// grounds, Bone text). Migrating those pages is the Design 2.0 content
// pass, not this task.
const SURFACE_CLASS = {
  legacy:
    'inline-flex items-center border border-brand text-brand hover:bg-brand hover:text-white ' +
    'px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap',
  navy:
    'inline-flex items-center border border-navy-hairline text-beacon hover:border-brand ' +
    'px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors motion-reduce:transition-none',
} as const;

export default function TicketNetworkLink({
  name,
  venue,
  category,
  sid,
  surface = 'legacy',
  label = 'Resale tickets',
}: {
  name?: string;
  venue?: string;
  category?: string;
  sid: string;
  surface?: keyof typeof SURFACE_CLASS;
  label?: string;
}) {
  const target = resolveTicketNetwork({ name, venue, category });
  // No match, or no credentials. Render nothing rather than a link to a page
  // TicketNetwork may not have.
  if (!target) return null;

  return (
    <a
      href={tnHref(target, sid)}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={SURFACE_CLASS[surface]}
    >
      {label}
    </a>
  );
}
