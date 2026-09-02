// Builds CJ click URLs. Pure and dependency-free so `node --test` can run it,
// and so the route handler stays a thin adapter with no logic to get wrong.

const KINDS = new Set(['performers', 'venues', 'category', 'top']);
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,119}$/;

export function isValidKind(kind) {
  return KINDS.has(kind);
}

export function isValidSlug(slug) {
  return typeof slug === 'string' && SLUG_RE.test(slug);
}

/**
 * The destination is CONSTRUCTED from a kind and a slug, never accepted as a
 * URL. There is deliberately no code path here that can emit a host supplied
 * by the caller — that is what makes /go/tn/ safe from being turned into an
 * open redirect on a domain that ranks.
 */
export function destinationUrl(kind, slug) {
  if (!isValidKind(kind) || !isValidSlug(slug)) return null;
  const path = kind === 'top' ? `/${slug}` : `/${kind}/${slug}`;
  return `https://www.ticketnetwork.com${path}`;
}

/** CJ truncates sid at 64 characters and forbids PII. Pages only, never users. */
export function sanitizeSid(sid) {
  return String(sid ?? '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64);
}

export function buildClickUrl({ pid, aid, domain = 'anrdoezrs.net', kind, slug, sid }) {
  const destination = destinationUrl(kind, slug);
  if (!destination || !pid || !aid) return null;

  const params = new URLSearchParams({ url: destination });
  const cleanSid = sanitizeSid(sid);
  if (cleanSid) params.set('sid', cleanSid);

  return `https://www.${domain}/click-${pid}-${aid}?${params.toString()}`;
}
