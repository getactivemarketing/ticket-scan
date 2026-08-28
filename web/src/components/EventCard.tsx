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
    <div className="bg-navy-raised rounded-[6px] overflow-hidden hover:bg-blue-wash transition-colors relative motion-reduce:transition-none">
      {/* Sign up prompt overlay */}
      {showSignUpPrompt && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10 rounded-[6px]">
          <div className="bg-navy-raised rounded-[6px] p-6 m-4 text-center max-w-xs">
            <span className="text-3xl block mb-2">🔔</span>
            <h4 className="font-bold text-bone mb-2">Track This Event</h4>
            <p className="text-muted text-sm mb-4">
              Create a free account to track prices and get alerts when they drop.
            </p>
            <div className="space-y-2">
              <Link
                href="/register"
                className="block w-full border border-navy-hairline text-beacon hover:bg-blue-wash hover:border-brand py-2 px-4 rounded-[6px] font-medium transition-colors motion-reduce:transition-none"
              >
                Sign Up Free
              </Link>
              <button
                onClick={() => setShowSignUpPrompt(false)}
                className="block w-full text-muted hover:text-bone py-2 text-sm transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {event.images && (
        // Pre-existing lint warning (no-img-element): next.config.ts has no
        // images.remotePatterns configured for the Ticketmaster/SeatGeek/StubHub
        // image hosts, so next/image would fail at request time. Left as <img>
        // until those remote hosts are allow-listed.
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
            <span className="inline-block px-2 py-1 text-xs font-medium bg-brand/10 text-beacon rounded-[4px] mb-2">
              {event.type || 'Event'}
            </span>
            <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.015em] text-bone mb-2 line-clamp-2">
              {event.name}
            </h3>
          </div>
        </div>

        <div className="space-y-2 text-[13px] text-muted">
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <span className="font-data tabular-nums">{formatDate(event.date)}</span>
            <span className="mx-2">•</span>
            <span className="font-data tabular-nums">{formatTime(event.time)}</span>
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
            <div className="flex items-center font-data tabular-nums font-semibold text-bone">
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
            className="flex-1 text-center border border-navy-hairline text-beacon hover:bg-blue-wash hover:border-brand py-2 px-4 rounded-[6px] font-medium transition-colors motion-reduce:transition-none"
          >
            Buy Tickets
          </a>
          <button
            onClick={handleAddToWatchlist}
            disabled={adding || added}
            title={isLoggedIn ? (added ? 'Added to watchlist' : 'Track this event') : 'Sign up to track prices'}
            className={`px-4 py-2 rounded-[6px] font-medium transition-colors motion-reduce:transition-none ${
              added
                ? 'bg-blue-wash text-beacon'
                : 'bg-navy hover:bg-navy-hairline text-muted hover:text-bone'
            }`}
          >
            {added ? '✓' : adding ? '...' : '👁️'}
          </button>
        </div>
        {error && <p className="text-alert text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}
