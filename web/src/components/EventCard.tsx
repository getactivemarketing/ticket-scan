'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { FOCUS_RING_ON_DEEP_VOID } from '@/lib/a11y';

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
  const signUpPromptTitleId = useId();
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState('');
  const [showSignUpPrompt, setShowSignUpPrompt] = useState(false);

  // Escape dismisses the sign-up prompt. Full focus-trapping (moving focus
  // into the dialog on open and restoring it on close) is not done here —
  // the card behind stays focusable — but role="dialog"/aria-modal plus
  // Escape gets a screen-reader user out of it.
  useEffect(() => {
    if (!showSignUpPrompt) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowSignUpPrompt(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showSignUpPrompt]);

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
    <div className="bg-navy-raised rounded-[6px] overflow-hidden hover:bg-navy-raised-hover transition-colors relative motion-reduce:transition-none">
      {/* Sign up prompt overlay */}
      {showSignUpPrompt && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={signUpPromptTitleId}
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-10 rounded-[6px]"
        >
          <div className="bg-navy-raised rounded-[6px] p-6 m-4 text-center max-w-xs">
            <span className="text-3xl block mb-2" aria-hidden="true">🔔</span>
            <h4 id={signUpPromptTitleId} className="font-bold text-bone mb-2">Track This Event</h4>
            <p className="text-muted text-sm mb-4">
              Create a free account to track prices and get alerts when they drop.
            </p>
            <div className="space-y-2">
              <Link
                href="/register"
                className={`block w-full border border-navy-hairline text-bone hover:border-brand py-2 px-4 rounded-[6px] font-medium transition-colors motion-reduce:transition-none ${FOCUS_RING_ON_DEEP_VOID}`}
              >
                Sign Up Free
              </Link>
              <button
                onClick={() => setShowSignUpPrompt(false)}
                className={`block w-full text-muted hover:text-bone py-2 text-sm transition-colors rounded-sm ${FOCUS_RING_ON_DEEP_VOID}`}
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
            <span className="mr-2" aria-hidden="true">📅</span>
            <span className="font-data tabular-nums">{formatDate(event.date)}</span>
            <span className="mx-2">•</span>
            <span className="font-data tabular-nums">{formatTime(event.time)}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2" aria-hidden="true">📍</span>
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2" aria-hidden="true">🏙️</span>
            <span>{event.city}, {event.state}</span>
          </div>
          {event.priceRanges && (
            <div className="flex items-center font-data tabular-nums font-semibold text-bone">
              <span className="mr-2" aria-hidden="true">💰</span>
              <span>${event.priceRanges.min} - ${event.priceRanges.max}</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center border border-navy-hairline text-bone hover:border-brand py-2 px-4 rounded-[6px] font-medium transition-colors motion-reduce:transition-none ${FOCUS_RING_ON_DEEP_VOID}`}
          >
            Buy Tickets
          </a>
          <button
            onClick={handleAddToWatchlist}
            disabled={adding || added}
            title={isLoggedIn ? (added ? 'Added to watchlist' : 'Track this event') : 'Sign up to track prices'}
            aria-label={isLoggedIn ? (added ? 'Added to watchlist' : adding ? 'Adding to watchlist' : 'Add to watchlist') : 'Sign up to track prices'}
            className={`px-4 py-2 rounded-[6px] font-medium transition-colors motion-reduce:transition-none ${FOCUS_RING_ON_DEEP_VOID} ${
              added
                ? 'bg-blue-wash text-beacon'
                : 'bg-navy hover:bg-navy-hairline text-muted hover:text-bone'
            }`}
          >
            <span aria-hidden="true">{added ? '✓' : adding ? '...' : '👁️'}</span>
          </button>
        </div>
        {error && <p role="alert" className="text-alert text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}
