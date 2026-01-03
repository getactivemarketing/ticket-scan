'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🎫</span>
              <span className="text-white font-bold text-xl">Ticket Scan</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-white hover:text-purple-200 transition-colors"
                >
                  Search
                </Link>
                <Link
                  href="/compare"
                  className="text-white hover:text-purple-200 transition-colors"
                >
                  Compare
                </Link>
                <Link
                  href="/watchlist"
                  className="text-white hover:text-purple-200 transition-colors"
                >
                  Watchlist
                </Link>
                <Link
                  href="/favorites"
                  className="text-white hover:text-purple-200 transition-colors"
                >
                  Favorites
                </Link>
                <span className="text-purple-200 text-sm">{user.email}</span>
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
                  href="/login"
                  className="text-white hover:text-purple-200 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-white text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
