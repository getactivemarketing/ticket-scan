'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';

interface Favorite {
  id: number;
  user_id: number;
  favorite_type: 'team' | 'artist' | 'venue';
  favorite_name: string;
  created_at: string;
}

interface FavoriteEvent {
  id: string;
  name: string;
  type: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  priceRanges: { min: number; max: number } | null;
  url: string;
  images: string;
  matchedFavorite: string;
}

const FAVORITE_TYPES = [
  { value: 'team', label: 'Team', icon: '🏀', placeholder: 'e.g. Lakers, Yankees, Patriots' },
  { value: 'artist', label: 'Artist', icon: '🎤', placeholder: 'e.g. Taylor Swift, Drake, Coldplay' },
  { value: 'venue', label: 'Venue', icon: '🏟️', placeholder: 'e.g. Madison Square Garden, Staples Center' },
] as const;

export default function FavoritesPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [events, setEvents] = useState<FavoriteEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form state
  const [newType, setNewType] = useState<'team' | 'artist' | 'venue'>('team');
  const [newName, setNewName] = useState('');
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (!authLoading && user) {
      fetchFavorites();
    }
  }, [authLoading, user]);

  // Redirect if not logged in
  if (!authLoading && !user) {
    router.push('/login');
    return null;
  }

  const fetchFavorites = async () => {
    try {
      const response = await api.getFavorites();
      setFavorites(response.favorites || []);

      // Also fetch events for favorites
      if (response.favorites && response.favorites.length > 0) {
        fetchFavoriteEvents();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load favorites');
    } finally {
      setLoading(false);
    }
  };

  const fetchFavoriteEvents = async () => {
    setEventsLoading(true);
    try {
      const response = await api.getFavoriteEvents();
      setEvents(response.events || []);
    } catch (err) {
      console.error('Failed to load favorite events:', err);
    } finally {
      setEventsLoading(false);
    }
  };

  const handleAddFavorite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    setAdding(true);
    setError('');
    setSuccess('');

    try {
      const response = await api.addFavorite(newType, newName.trim());
      if (response.message) {
        setSuccess(response.message);
      } else {
        setSuccess(`Added "${newName}" to your favorites!`);
        setFavorites([...favorites, response.favorite as Favorite]);
        setNewName('');
        // Refresh events
        fetchFavoriteEvents();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add favorite');
    } finally {
      setAdding(false);
    }
  };

  const handleRemove = async (id: number, name: string) => {
    try {
      await api.removeFavorite(id);
      setFavorites(favorites.filter((f) => f.id !== id));
      setSuccess(`Removed "${name}" from favorites`);
      // Refresh events if we have remaining favorites
      if (favorites.length > 1) {
        fetchFavoriteEvents();
      } else {
        setEvents([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove favorite');
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'TBA';
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const groupedFavorites = FAVORITE_TYPES.map((type) => ({
    ...type,
    items: favorites.filter((f) => f.favorite_type === type.value),
  }));

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
          <p className="text-gray-600 mt-1">
            Save your favorite teams, artists, and venues to get personalized event recommendations
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
            <button onClick={() => setError('')} className="ml-2 text-red-800 font-bold">×</button>
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-600 p-4 rounded-lg mb-6">
            {success}
            <button onClick={() => setSuccess('')} className="ml-2 text-green-800 font-bold">×</button>
          </div>
        )}

        {/* Add Favorite Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add a Favorite</h2>
          <form onSubmit={handleAddFavorite} className="flex flex-col sm:flex-row gap-4">
            <select
              value={newType}
              onChange={(e) => setNewType(e.target.value as 'team' | 'artist' | 'venue')}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {FAVORITE_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.icon} {type.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder={FAVORITE_TYPES.find((t) => t.value === newType)?.placeholder}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={adding || !newName.trim()}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {adding ? 'Adding...' : 'Add'}
            </button>
          </form>
        </div>

        {/* Favorites List */}
        <div className="grid gap-6 mb-8">
          {groupedFavorites.map((group) => (
            <div key={group.value} className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>{group.icon}</span>
                {group.label}s
                <span className="text-sm font-normal text-gray-500">({group.items.length})</span>
              </h3>

              {group.items.length === 0 ? (
                <p className="text-gray-500 text-sm">No favorite {group.label.toLowerCase()}s yet</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {group.items.map((favorite) => (
                    <div
                      key={favorite.id}
                      className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full"
                    >
                      <span className="font-medium">{favorite.favorite_name}</span>
                      <button
                        onClick={() => handleRemove(favorite.id, favorite.favorite_name)}
                        className="text-purple-400 hover:text-purple-700 font-bold"
                        title="Remove"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Personalized Events */}
        {favorites.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Events For You</h2>
              {eventsLoading && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
              )}
            </div>

            {events.length === 0 ? (
              <div className="text-center py-8">
                <span className="text-4xl mb-4 block">🔍</span>
                <p className="text-gray-600">
                  {eventsLoading
                    ? 'Finding events for your favorites...'
                    : 'No upcoming events found for your favorites. Try adding more!'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {events.slice(0, 10).map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                          {event.matchedFavorite}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900">{event.name}</h4>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-1">
                        <span>📅 {formatDate(event.date)}</span>
                        <span>📍 {event.venue}</span>
                        <span>🏙️ {event.city}, {event.state}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {event.priceRanges && (
                        <span className="text-lg font-bold text-gray-900">
                          ${event.priceRanges.min}+
                        </span>
                      )}
                      <Link
                        href={`/dashboard?keyword=${encodeURIComponent(event.matchedFavorite)}`}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Find Tickets
                      </Link>
                    </div>
                  </div>
                ))}

                {events.length > 10 && (
                  <p className="text-center text-gray-500 text-sm pt-2">
                    Showing 10 of {events.length} events
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {favorites.length === 0 && (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <span className="text-4xl mb-4 block">⭐</span>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Start building your favorites
            </h3>
            <p className="text-gray-600 mb-6">
              Add your favorite teams, artists, or venues above to get personalized event recommendations
            </p>
          </div>
        )}

        {/* Info box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <h4 className="font-semibold text-blue-900">How Favorites Work</h4>
              <p className="text-sm text-blue-700">
                When you add a favorite, we&apos;ll search for upcoming events matching that team, artist, or venue.
                You&apos;ll also receive email alerts when tickets for your favorites go on sale or drop in price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
