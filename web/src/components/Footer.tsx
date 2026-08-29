import Link from 'next/link';
import Logo from '@/components/Logo';
import NewsletterSignup from '@/components/NewsletterSignup';
import { FOCUS_RING_ON_NAVY as FOCUS_RING } from '@/lib/a11y';

// Focus + colour treatment shared by every link in the footer. DESIGN.md §4:
// Concourse Navy ground, text-muted links hovering to text-bone, no drop
// shadows on navy.
const TRANSITION = 'transition-colors duration-200 motion-reduce:transition-none';
const LINK = `text-muted hover:text-bone ${TRANSITION} ${FOCUS_RING}`;

export default function Footer() {
  return (
    <footer className="bg-navy text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter capture — present on every page. DESIGN.md §5: a 1px
            divider is a last resort and never a section boundary, so this
            separates from the columns below with space alone. */}
        <div className="pb-12 mb-10 max-w-xl">
          <NewsletterSignup source="site-footer" variant="footer" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className={`flex items-center space-x-2 mb-4 ${FOCUS_RING}`}>
              <Logo size={28} className="text-bone" />
              <span className="text-bone font-heading font-bold text-xl">TicketScan</span>
            </Link>
            <p className="text-muted text-sm max-w-md">
              Compare ticket prices across Ticketmaster, SeatGeek, StubHub, and more.
              Never overpay for concerts, sports, or events again.
            </p>
            {/* Social Links. Handles come from marketing-agents/blotato-accounts.json,
                which records the accounts the posting automation is actually connected
                to — Instagram and Threads are `ticketscanapp`, X is `ticketscan_io`.
                The homepage's old inline footer linked instagram.com/ticketscan and
                the shared footer linked instagram.com/ticketscan_io; neither matched a
                connected account. TikTok is not in Blotato, so it is left as-is. */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://x.com/ticketscan_io"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted hover:text-bone ${TRANSITION} ${FOCUS_RING}`}
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/ticketscanapp"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted hover:text-bone ${TRANSITION} ${FOCUS_RING}`}
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@ticketscan_io"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted hover:text-bone ${TRANSITION} ${FOCUS_RING}`}
                aria-label="Follow us on TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="https://threads.net/@ticketscanapp"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted hover:text-bone ${TRANSITION} ${FOCUS_RING}`}
                aria-label="Follow us on Threads"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.227-.017 4.074-.638 5.49-1.846 1.385-1.18 2.17-2.8 2.33-4.83h.003c.088-1.074-.057-2.118-.432-3.108a5.675 5.675 0 00-1.774-2.38c-.81-.63-1.79-1.042-2.876-1.2a8.536 8.536 0 00-.084-.003 5.39 5.39 0 00-1.7.262 4.127 4.127 0 00-1.47.82c-.41.375-.733.839-.948 1.362-.217.53-.328 1.114-.328 1.735 0 .616.11 1.186.328 1.693.214.497.535.936.944 1.298a4.03 4.03 0 001.45.826c.555.194 1.162.291 1.803.291.563 0 1.097-.076 1.588-.226a3.665 3.665 0 001.277-.672l1.327 1.572c-.56.474-1.235.842-2.01 1.095a7.793 7.793 0 01-2.182.31 7.37 7.37 0 01-2.703-.489 6.098 6.098 0 01-2.168-1.378 6.242 6.242 0 01-1.422-2.094 6.718 6.718 0 01-.506-2.601c0-.932.17-1.8.506-2.584a6.06 6.06 0 011.422-2.07 6.233 6.233 0 012.168-1.39 7.218 7.218 0 012.703-.503c.104 0 .21.002.315.007 1.525.065 2.883.473 4.041 1.21a7.673 7.673 0 012.726 3.135c.576 1.296.808 2.7.69 4.174l-.003.035c-.21 2.645-1.266 4.82-3.144 6.422C17.395 23.18 15.073 23.98 12.186 24z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-bone font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className={LINK}>
                  Search Events
                </Link>
              </li>
              <li>
                <Link href="/compare" className={LINK}>
                  Compare Prices
                </Link>
              </li>
              <li>
                <Link href="/venues" className={LINK}>
                  Venue Guides
                </Link>
              </li>
              <li>
                <Link href="/tickets" className={LINK}>
                  Ticket Guides
                </Link>
              </li>
              <li>
                <Link href="/onsales" className={LINK}>
                  Onsale Calendar
                </Link>
              </li>
              <li>
                <Link href="/blog" className={LINK}>
                  Tips & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-bone font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className={LINK}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={LINK}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className={LINK}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar — space, not a rule, separates it from the columns above. */}
        <div className="mt-12 pt-4 text-sm text-muted text-center">
          <p>&copy; {new Date().getFullYear()} TicketScan. All rights reserved.</p>
          <p className="mt-2 text-xs">
            TicketScan is not a ticket seller. We compare prices from third-party sites.
          </p>
        </div>
      </div>
    </footer>
  );
}
