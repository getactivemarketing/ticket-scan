'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import api from '@/lib/api';
import { FOCUS_RING_ON_DEEP_VOID } from '@/lib/a11y';

function EventDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
      <div className="h-5 w-32 animate-pulse rounded-[6px] bg-navy-raised mb-6 motion-reduce:animate-none" />
      <div className="bg-navy-raised rounded-[6px] p-6 mb-6 space-y-3">
        <div className="h-7 w-2/3 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
        <div className="h-5 w-1/3 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
      </div>
      <div className="bg-navy-raised rounded-[6px] p-6">
        <div className="h-5 w-1/4 animate-pulse rounded-[6px] bg-navy mb-4 motion-reduce:animate-none" />
        <div className="h-24 animate-pulse rounded-[6px] bg-navy motion-reduce:animate-none" />
      </div>
    </div>
  );
}

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const eventId = params.id as string;
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadEventData = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.getWatchlist();
      const event = response.watchlist.find((item) => item.event_id === eventId);
      if (!event) throw new Error('This event is no longer in your watchlist.');
      setEventName(event.event_name);
      setEventDate(event.event_date);
      setVenue(event.venue);
      setCity(event.city);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load event data');
    } finally {
      setLoading(false);
    }
  }, [eventId]);

  useEffect(() => {
    if (!authLoading && user && eventId) loadEventData();
  }, [authLoading, user, eventId, loadEventData]);

  if (!authLoading && !user) {
    router.push('/login');
    return null;
  }

  if (authLoading || loading) {
    return <div className="min-h-screen bg-deep-void py-8" aria-busy="true"><EventDetailSkeleton /></div>;
  }

  return (
    <div className="min-h-screen bg-deep-void py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/watchlist" className={`inline-flex items-center text-beacon hover:text-bone transition-colors mb-6 rounded-sm ${FOCUS_RING_ON_DEEP_VOID}`}>
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Watchlist
        </Link>

        {error && <div role="alert" className="bg-alert/10 text-alert p-4 rounded-[6px] mb-6">{error}</div>}

        <div className="bg-navy-raised rounded-[6px] p-6 mb-6">
          <h1 className="text-[26px] font-bold leading-[1.2] tracking-[-0.025em] font-heading text-bone mb-2">{eventName || 'Event Details'}</h1>
          <div className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-3">
            {eventDate && <span>{eventDate}</span>}
            {venue && <span>{venue}</span>}
            {city && <span>{city}</span>}
          </div>
        </div>

        <div className="bg-navy-raised rounded-[6px] p-6">
          <h2 className="text-lg font-bold font-heading text-bone mb-2">Event details</h2>
          <p className="text-muted">Use the seller link from the event page to review current availability, fees, and checkout details.</p>
        </div>
      </div>
    </div>
  );
}
