import { buildClickUrl } from '@/lib/tn-click.mjs';

// A click is a side effect, never a cached page.
export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ kind: string; slug: string }> },
) {
  const { kind, slug } = await params;
  const sid = new URL(request.url).searchParams.get('sid') ?? '';

  const target = buildClickUrl({
    pid: process.env.CJ_PID,
    aid: process.env.CJ_TN_AID,
    domain: process.env.CJ_CLICK_DOMAIN || 'anrdoezrs.net',
    kind,
    slug,
    sid,
  });

  // No credentials, or an unrecognised kind or slug. 404 rather than falling
  // back to ticketnetwork.com unattributed: an unattributed click earns
  // nothing and would hide a broken configuration behind working links.
  if (!target) return new Response('Not found', { status: 404 });

  return new Response(null, {
    status: 302,
    headers: { location: target, 'cache-control': 'no-store' },
  });
}
