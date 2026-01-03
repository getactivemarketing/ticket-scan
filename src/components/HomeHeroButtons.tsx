'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function HomeHeroButtons() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center gap-4">
        <div className="bg-white/50 text-transparent px-8 py-4 rounded-xl font-bold text-lg animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex justify-center gap-4">
        <Link
          href="/dashboard"
          className="bg-white text-purple-600 hover:bg-purple-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
        >
          Search Events
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4">
      <Link
        href="/dashboard"
        className="bg-white text-purple-600 hover:bg-purple-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
      >
        Find Tickets
      </Link>
      <Link
        href="/login"
        className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
      >
        Login
      </Link>
    </div>
  );
}
