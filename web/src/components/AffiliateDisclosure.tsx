import { tnEnabled } from '@/lib/ticketnetwork';

// The TicketNetwork affiliate agreement requires FTC compliance, and the FTC
// standard is clear and conspicuous — next to the links, not in the footer.
const SURFACE_CLASS = {
  legacy: 'text-sm text-gray-500',
  navy: 'text-[13px] text-muted',
} as const;

export default function AffiliateDisclosure({
  surface = 'legacy',
}: {
  surface?: keyof typeof SURFACE_CLASS;
}) {
  if (!tnEnabled()) return null;

  return (
    <p className={SURFACE_CLASS[surface]}>
      Resale links are affiliate links — we may earn a commission if you buy, at no extra cost to you.
    </p>
  );
}
