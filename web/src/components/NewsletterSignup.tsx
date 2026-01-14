'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  source?: string;
  variant?: 'inline' | 'card' | 'footer';
}

export default function NewsletterSignup({ source = 'website', variant = 'card' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';
      const response = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  if (variant === 'footer') {
    return (
      <div className="w-full">
        <h4 className="text-white font-semibold mb-3">Get Ticket Deals</h4>
        <p className="text-gray-400 text-sm mb-4">
          Subscribe for exclusive deals and price drop alerts.
        </p>
        {status === 'success' ? (
          <p className="text-green-400 text-sm">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-2">{message}</p>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="w-full">
        {status === 'success' ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for deals"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Get Deals'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-2">{message}</p>
        )}
      </div>
    );
  }

  // Card variant (default)
  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
      <div className="max-w-xl mx-auto text-center">
        <span className="text-4xl mb-4 block">📬</span>
        <h3 className="text-2xl font-bold mb-2">Never Miss a Deal</h3>
        <p className="text-purple-100 mb-6">
          Get exclusive ticket deals, price drop alerts, and tips on finding cheap tickets delivered to your inbox.
        </p>

        {status === 'success' ? (
          <div className="bg-white/20 rounded-lg p-4">
            <p className="font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-purple-600 hover:bg-purple-50 disabled:bg-gray-200 px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-200 text-sm mt-3">{message}</p>
        )}

        <p className="text-purple-200 text-xs mt-4">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
