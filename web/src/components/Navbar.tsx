'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-brand to-navy-light shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Logo size={28} className="text-white" />
              <span className="text-white font-heading font-bold text-xl">TicketScan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Search
                </Link>
                <Link
                  href="/compare"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Compare
                </Link>
                <Link
                  href="/watchlist"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Watchlist
                </Link>
                <Link
                  href="/favorites"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Favorites
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Tips
                </Link>
                <Link
                  href="/world-cup-2026"
                  className="bg-green-500 hover:bg-green-400 text-white px-3 py-1.5 rounded-lg font-medium transition-colors text-sm"
                >
                  World Cup 2026
                </Link>
                <span className="text-blue-200 text-sm hidden lg:inline">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Search
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/world-cup-2026"
                  className="bg-green-500 hover:bg-green-400 text-white px-3 py-1.5 rounded-lg font-medium transition-colors text-sm"
                >
                  World Cup 2026
                </Link>
                <Link
                  href="/login"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-white text-brand hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition-colors"
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-navy shadow-lg border-t border-brand/30">
          <div className="px-4 py-4 space-y-3">
            {user ? (
              <>
                <div className="text-blue-200 text-sm pb-2 border-b border-brand/30">
                  {user.email}
                </div>
                <Link
                  href="/dashboard"
                  className="block text-white hover:text-blue-200 py-2 transition-colors"
                  onClick={closeMenu}
                >
                  Search Events
                </Link>
                <Link
                  href="/compare"
                  className="block text-white hover:text-blue-200 py-2 transition-colors"
                  onClick={closeMenu}
                >
                  Compare Prices
                </Link>
                <Link
                  href="/watchlist"
                  className="block text-white hover:text-blue-200 py-2 transition-colors"
                  onClick={closeMenu}
                >
                  My Watchlist
                </Link>
                <Link
                  href="/favorites"
                  className="block text-white hover:text-blue-200 py-2 transition-colors"
                  onClick={closeMenu}
                >
                  Favorites
                </Link>
                <Link
                  href="/blog"
                  className="block text-white hover:text-blue-200 py-2 transition-colors"
                  onClick={closeMenu}
                >
                  Tips & Guides
                </Link>
                <Link
                  href="/world-cup-2026"
                  className="block bg-green-500 text-white py-2 px-3 rounded-lg font-medium transition-colors text-center mt-2"
                  onClick={closeMenu}
                >
                  World Cup 2026
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full mt-2 bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg transition-colors text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="block text-white hover:text-blue-200 py-2 transition-colors"
                  onClick={closeMenu}
                >
                  Search Events
                </Link>
                <Link
                  href="/blog"
                  className="block text-white hover:text-blue-200 py-2 transition-colors"
                  onClick={closeMenu}
                >
                  Blog & Tips
                </Link>
                <Link
                  href="/world-cup-2026"
                  className="block bg-green-500 text-white py-2 px-3 rounded-lg font-medium transition-colors text-center"
                  onClick={closeMenu}
                >
                  World Cup 2026
                </Link>
                <Link
                  href="/login"
                  className="block text-white hover:text-blue-200 py-2 transition-colors"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block bg-white text-brand hover:bg-blue-100 py-3 rounded-lg font-medium transition-colors text-center mt-2"
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
