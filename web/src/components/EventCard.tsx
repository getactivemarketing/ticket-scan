'use client';

import { useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';

interface Event {
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
}

interface EventCardProps {
  event: Event;
  isLoggedIn?: boolean;
  onAddedToWatchlist?: () => void;
}

export default function EventCard({ event, isLoggedIn = true, onAddedToWatchlist }: EventCardProps) {
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState('');
  const [showSignUpPrompt, setShowSignUpPrompt] = useState(false);

  const handleAddToWatchlist = async () => {
    // If not logged in, show sign up prompt
    if (!isLoggedIn) {
      setShowSignUpPrompt(true);
      return;
    }

    setAdding(true);
    setError('');
    try {
      await api.addToWatchlist({
        eventId: event.id,
        eventName: event.name,
        eventDate: event.date,
        venue: event.venue,
        city: event.city,
      });
      setAdded(true);
      onAddedToWatchlist?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add');
    } finally {
      setAdding(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (timeStr: string) => {
    if (!timeStr || timeStr === 'TBA') return 'TBA';
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
      {/* Sign up prompt overlay */}
      {showSignUpPrompt && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10 rounded-xl">
          <div className="bg-white rounded-lg p-6 m-4 text-center max-w-xs">
            <span className="text-3xl block mb-2">🔔</span>
            <h4 className="font-bold text-gray-900 mb-2">Track This Event</h4>
            <p className="text-gray-600 text-sm mb-4">
              Create a free account to track prices and get alerts when they drop.
            </p>
            <div className="space-y-2">
              <Link
                href="/register"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Sign Up Free
              </Link>
              <button
                onClick={() => setShowSignUpPrompt(false)}
                className="block w-full text-gray-500 hover:text-gray-700 py-2 text-sm"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {event.images && (
        <div className="h-48 overflow-hidden">
          <img
            src={event.images}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full mb-2">
              {event.type || 'Event'}
            </span>
            <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
              {event.name}
            </h3>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <span>{formatDate(event.date)}</span>
            <span className="mx-2">•</span>
            <span>{formatTime(event.time)}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📍</span>
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🏙️</span>
            <span>{event.city}, {event.state}</span>
          </div>
          {event.priceRanges && (
            <div className="flex items-center text-green-600 font-medium">
              <span className="mr-2">💰</span>
              <span>${event.priceRanges.min} - ${event.priceRanges.max}</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Buy Tickets
          </a>
          <button
            onClick={handleAddToWatchlist}
            disabled={adding || added}
            title={isLoggedIn ? (added ? 'Added to watchlist' : 'Track this event') : 'Sign up to track prices'}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              added
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {added ? '✓' : adding ? '...' : '👁️'}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}
