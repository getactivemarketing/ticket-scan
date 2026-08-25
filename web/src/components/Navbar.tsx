'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Only use transparent navbar on homepage
  const isHomepage = pathname === '/';

  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const navClass = isHomepage && !scrolled ? 'navbar-transparent' : 'navbar-solid';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Logo size={28} className="text-white" />
              <span className="text-white font-heading font-bold text-xl tracking-tight">TicketScan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {user ? (
              <>
                <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors text-sm">
                  Search
                </Link>
                <Link href="/tickets" className="text-white/80 hover:text-white transition-colors text-sm">
                  Events
                </Link>
                <Link href="/venues" className="text-white/80 hover:text-white transition-colors text-sm">
                  Venues
                </Link>
                <Link href="/watchlist" className="text-white/80 hover:text-white transition-colors text-sm">
                  Watchlist
                </Link>
                <Link href="/favorites" className="text-white/80 hover:text-white transition-colors text-sm">
                  Favorites
                </Link>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
                  Tips
                </Link>
                <span className="text-white/50 text-xs hidden lg:inline">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg transition-colors text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors text-sm">
                  Search
                </Link>
                <Link href="/tickets" className="text-white/80 hover:text-white transition-colors text-sm">
                  Events
                </Link>
                <Link href="/venues" className="text-white/80 hover:text-white transition-colors text-sm">
                  Venues
                </Link>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
                <Link href="/login" className="text-white/80 hover:text-white transition-colors text-sm">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-white text-navy hover:bg-gray-100 px-4 py-1.5 rounded-lg font-medium transition-colors text-sm"
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
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-navy shadow-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {user ? (
              <>
                <div className="text-white/50 text-sm pb-2 border-b border-white/10">
                  {user.email}
                </div>
                <Link href="/dashboard" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Search Events
                </Link>
                <Link href="/tickets" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Events
                </Link>
                <Link href="/venues" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Venues
                </Link>
                <Link href="/watchlist" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  My Watchlist
                </Link>
                <Link href="/favorites" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Favorites
                </Link>
                <Link href="/blog" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Tips & Guides
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg transition-colors text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Search Events
                </Link>
                <Link href="/tickets" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Events
                </Link>
                <Link href="/venues" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Venues
                </Link>
                <Link href="/blog" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Blog & Tips
                </Link>
                <Link href="/login" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block bg-white text-navy hover:bg-gray-100 py-3 rounded-lg font-medium transition-colors text-center mt-2"
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
