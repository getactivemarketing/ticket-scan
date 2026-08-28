'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

// Focus + colour treatment shared by every plain-text nav link (desktop and
// mobile). Active state (DESIGN.md §4 Navigation): Concourse Bone text with a
// 2px Signal Blue underline and a faint Blue Glow beneath it.
const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-sm';
const ACTIVE_LINK =
  'relative text-bone after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-brand after:shadow-[0_0_8px_var(--color-blue-glow)]';
const INACTIVE_LINK = 'text-muted hover:text-bone';
const TRANSITION = 'transition-colors duration-200 motion-reduce:transition-none';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Only use transparent navbar on homepage
  const isHomepage = pathname === '/';

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Tracks real scroll position on every route, not just the homepage. This
  // is simpler than branching on isHomepage inside the effect (the previous
  // version force-called setScrolled(true) synchronously in the effect body
  // when off the homepage, which is exactly what react-hooks/set-state-in-effect
  // flags) and behaves the same in practice: navClass below already ignores
  // `scrolled` entirely whenever isHomepage is false, and Next.js resets
  // scroll position on navigation, so `scrolled` self-corrects on arrival.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const navClass = isHomepage && !scrolled ? 'navbar-transparent' : 'navbar-solid';

  const linkClass = (href: string) =>
    `text-sm ${TRANSITION} ${FOCUS_RING} ${isActive(href) ? ACTIVE_LINK : INACTIVE_LINK}`;

  const mobileLinkClass = (href: string) =>
    `block py-2 ${TRANSITION} ${FOCUS_RING} ${isActive(href) ? ACTIVE_LINK : 'text-bone hover:text-muted'}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className={`flex items-center space-x-2 ${FOCUS_RING}`} onClick={closeMenu}>
              <Logo size={28} className="text-bone" />
              <span className="text-bone font-heading font-bold text-xl tracking-tight">TicketScan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {user ? (
              <>
                <Link href="/dashboard" className={linkClass('/dashboard')}>
                  Search
                </Link>
                <Link href="/tickets" className={linkClass('/tickets')}>
                  Events
                </Link>
                <Link href="/onsales" className={linkClass('/onsales')}>
                  Onsales
                </Link>
                <Link href="/venues" className={linkClass('/venues')}>
                  Venues
                </Link>
                <Link href="/watchlist" className={linkClass('/watchlist')}>
                  Watchlist
                </Link>
                <Link href="/favorites" className={linkClass('/favorites')}>
                  Favorites
                </Link>
                <Link href="/blog" className={linkClass('/blog')}>
                  Tips
                </Link>
                <span className="text-muted text-xs hidden lg:inline">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className={`border border-navy-hairline hover:border-brand text-bone px-4 py-1.5 rounded-[6px] text-sm ${TRANSITION} ${FOCUS_RING}`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/dashboard" className={linkClass('/dashboard')}>
                  Search
                </Link>
                <Link href="/tickets" className={linkClass('/tickets')}>
                  Events
                </Link>
                <Link href="/onsales" className={linkClass('/onsales')}>
                  Onsales
                </Link>
                <Link href="/venues" className={linkClass('/venues')}>
                  Venues
                </Link>
                <Link href="/blog" className={linkClass('/blog')}>
                  Blog
                </Link>
                <Link href="/login" className={linkClass('/login')}>
                  Login
                </Link>
                <Link
                  href="/register"
                  className={`border border-navy-hairline bg-transparent text-bone hover:border-brand px-4 py-1.5 rounded-[6px] font-medium text-sm ${TRANSITION} ${FOCUS_RING}`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-bone p-2 rounded-[6px] hover:bg-navy-raised ${TRANSITION} ${FOCUS_RING}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-navy-raised border-t border-navy-hairline">
          <div className="px-4 py-4 space-y-3">
            {user ? (
              <>
                <div className="text-muted text-sm pb-3">
                  {user.email}
                </div>
                <Link href="/dashboard" className={mobileLinkClass('/dashboard')} onClick={closeMenu}>
                  Search Events
                </Link>
                <Link href="/tickets" className={mobileLinkClass('/tickets')} onClick={closeMenu}>
                  Events
                </Link>
                <Link href="/onsales" className={mobileLinkClass('/onsales')} onClick={closeMenu}>
                  Onsales
                </Link>
                <Link href="/venues" className={mobileLinkClass('/venues')} onClick={closeMenu}>
                  Venues
                </Link>
                <Link href="/watchlist" className={mobileLinkClass('/watchlist')} onClick={closeMenu}>
                  My Watchlist
                </Link>
                <Link href="/favorites" className={mobileLinkClass('/favorites')} onClick={closeMenu}>
                  Favorites
                </Link>
                <Link href="/blog" className={mobileLinkClass('/blog')} onClick={closeMenu}>
                  Tips & Guides
                </Link>
                <button
                  onClick={handleLogout}
                  className={`w-full mt-2 border border-navy-hairline hover:border-brand text-bone py-3 rounded-[6px] text-center ${TRANSITION} ${FOCUS_RING}`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/dashboard" className={mobileLinkClass('/dashboard')} onClick={closeMenu}>
                  Search Events
                </Link>
                <Link href="/tickets" className={mobileLinkClass('/tickets')} onClick={closeMenu}>
                  Events
                </Link>
                <Link href="/onsales" className={mobileLinkClass('/onsales')} onClick={closeMenu}>
                  Onsales
                </Link>
                <Link href="/venues" className={mobileLinkClass('/venues')} onClick={closeMenu}>
                  Venues
                </Link>
                <Link href="/blog" className={mobileLinkClass('/blog')} onClick={closeMenu}>
                  Blog & Tips
                </Link>
                <Link href="/login" className={mobileLinkClass('/login')} onClick={closeMenu}>
                  Login
                </Link>
                <Link
                  href="/register"
                  className={`block border border-navy-hairline bg-transparent text-bone hover:border-brand py-3 rounded-[6px] font-medium text-center mt-2 ${TRANSITION} ${FOCUS_RING}`}
                  onClick={closeMenu}
                >
                  Sign Up Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
