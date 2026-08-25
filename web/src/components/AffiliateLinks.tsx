'use client';

import {
  buildAffiliateUrl,
  getPrograms,
  type LinkClass,
  type Placement,
} from '@/lib/affiliates';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

interface AffiliateLinksProps {
  linkClass: LinkClass;
  placement: Placement;
  /** Heading above the block. */
  title?: string;
  /**
   * Per-program deep links, keyed by program key. Anything omitted falls back
   * to the program's default destination.
   */
  deepLinks?: Record<string, string>;
  className?: string;
}

const DEFAULT_TITLE: Record<LinkClass, string> = {
  'ticket-resale': 'Compare ticket prices',
  'travel-adjacency': 'Plan the rest of the trip',
};

/**
 * Renders outbound CJ affiliate links for one link class.
 *
 * Returns null when no program in the class is fully configured, so the block
 * is invisible until CJ approves us and the env vars land. That keeps this
 * safe to deploy while applications are pending.
 */
export default function AffiliateLinks({
  linkClass,
  placement,
  title,
  deepLinks,
  className = '',
}: AffiliateLinksProps) {
  const programs = getPrograms(linkClass);
  if (programs.length === 0) return null;

  const links = programs
    .map((program) => ({
      program,
      url: buildAffiliateUrl(program, {
        placement,
        deepLink: deepLinks?.[program.key],
      }),
    }))
    .filter((l): l is { program: (typeof programs)[number]; url: string } =>
      l.url !== null
    );

  if (links.length === 0) return null;

  const handleClick = (programKey: string) => {
    window.dataLayer?.push({
      event: 'affiliate_click',
      affiliate_program: programKey,
      affiliate_class: linkClass,
      affiliate_placement: placement,
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900">
        {title || DEFAULT_TITLE[linkClass]}
      </h3>

      {/* FTC disclosure — must sit above the links, not in the footer. */}
      <p className="mt-1 text-xs text-gray-500">
        We may earn a commission if you buy through these links. This
        doesn&apos;t change what you pay.
      </p>

      <ul className="mt-4 space-y-3">
        {links.map(({ program, url }) => (
          <li key={program.key}>
            <a
              href={url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              onClick={() => handleClick(program.key)}
              data-affiliate-program={program.key}
              data-affiliate-class={linkClass}
              className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:border-brand hover:bg-blue-50"
            >
              <span className="min-w-0">
                <span className="block font-medium text-gray-900">
                  {program.name}
                </span>
                <span className="block text-sm text-gray-500">
                  {program.blurb}
                </span>
              </span>
              <span className="shrink-0 text-sm font-medium text-brand">
                {program.cta} &rarr;
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
