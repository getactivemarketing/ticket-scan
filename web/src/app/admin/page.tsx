'use client';

import { useState, useEffect } from 'react';

interface Stats {
  totalUsers: number;
  usersThisWeek: number;
  usersToday: number;
  totalWatchlistItems: number;
  activeAlerts: number;
  triggeredAlerts: number;
  totalSubscribers: number;
}

interface User {
  id: number;
  email: string;
  created_at: string;
  watchlist_count: number;
  alerts_count: number;
}

interface WatchlistItem {
  id: number;
  user_email: string;
  event_name: string;
  venue: string;
  city: string;
  event_date: string;
  target_price: string | null;
  created_at: string;
}

interface Subscriber {
  id: number;
  email: string;
  subscribed_at: string;
}

interface Activity {
  type: string;
  user_email?: string;
  detail: string;
  timestamp: string;
}

interface PopularEvent {
  event_id: string;
  event_name: string;
  venue_name: string;
  event_date: string;
  watch_count: number;
}

interface DripStat {
  email_number: number;
  sent_count: number;
  last_sent: string;
}

interface DripPendingUser {
  id: number;
  email: string;
  created_at: string;
  days_since_signup: string;
  last_email_sent: number;
}

interface DripSchedule {
  emailNumber: number;
  daysAfter: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';

export default function AdminDashboard() {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [stats, setStats] = useState<Stats | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [activity, setActivity] = useState<Activity[]>([]);
  const [popularEvents, setPopularEvents] = useState<PopularEvent[]>([]);
  const [dripStats, setDripStats] = useState<DripStat[]>([]);
  const [dripPendingUsers, setDripPendingUsers] = useState<DripPendingUser[]>([]);
  const [dripSchedule, setDripSchedule] = useState<DripSchedule[]>([]);
  const [isRunningDrip, setIsRunningDrip] = useState(false);

  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'watchlist' | 'subscribers' | 'activity' | 'drip'>('overview');

  const fetchData = async (key: string) => {
    setIsLoading(true);
    setError('');

    try {
      const headers = { 'x-admin-key': key };

      const [statsRes, usersRes, watchlistRes, subscribersRes, activityRes, popularRes, dripRes] = await Promise.all([
        fetch(`${API_URL}/api/admin/stats`, { headers }),
        fetch(`${API_URL}/api/admin/users`, { headers }),
        fetch(`${API_URL}/api/admin/watchlist`, { headers }),
        fetch(`${API_URL}/api/admin/newsletter`, { headers }),
        fetch(`${API_URL}/api/admin/activity`, { headers }),
        fetch(`${API_URL}/api/admin/popular-events`, { headers }),
        fetch(`${API_URL}/api/admin/drip-stats`, { headers }),
      ]);

      if (!statsRes.ok) {
        throw new Error('Invalid admin key');
      }

      const [statsData, usersData, watchlistData, subscribersData, activityData, popularData, dripData] = await Promise.all([
        statsRes.json(),
        usersRes.json(),
        watchlistRes.json(),
        subscribersRes.json(),
        activityRes.json(),
        popularRes.json(),
        dripRes.json(),
      ]);

      setStats(statsData.stats);
      setUsers(usersData.users || []);
      setWatchlist(watchlistData.watchlist || []);
      setSubscribers(subscribersData.subscribers || []);
      setActivity(activityData.activity || []);
      setPopularEvents(popularData.events || []);
      setDripStats(dripData.stats || []);
      setDripPendingUsers(dripData.pendingUsers || []);
      setDripSchedule(dripData.schedule || []);
      setIsAuthenticated(true);

      // Save key to session
      sessionStorage.setItem('adminKey', key);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to authenticate');
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check for saved key
    const savedKey = sessionStorage.getItem('adminKey');
    if (savedKey) {
      setAdminKey(savedKey);
      fetchData(savedKey);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(adminKey);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminKey');
    setIsAuthenticated(false);
    setAdminKey('');
    setStats(null);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Dashboard</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Admin Key</label>
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter admin key..."
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm mb-4">{error}</p>
            )}
            <button
              type="submit"
              disabled={isLoading || !adminKey}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Ticket Scan Admin</h1>
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-white text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Total Users</p>
              <p className="text-3xl font-bold text-white">{stats.totalUsers}</p>
              <p className="text-green-400 text-sm mt-1">+{stats.usersThisWeek} this week</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Watchlist Items</p>
              <p className="text-3xl font-bold text-white">{stats.totalWatchlistItems}</p>
              <p className="text-purple-400 text-sm mt-1">{stats.activeAlerts} alerts set</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Triggered Alerts</p>
              <p className="text-3xl font-bold text-white">{stats.triggeredAlerts}</p>
              <p className="text-blue-400 text-sm mt-1">Price drops found</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Newsletter</p>
              <p className="text-3xl font-bold text-white">{stats.totalSubscribers}</p>
              <p className="text-gray-500 text-sm mt-1">Subscribers</p>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {(['overview', 'users', 'watchlist', 'subscribers', 'activity', 'drip'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'drip' ? 'Email Drip' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          {activeTab === 'overview' && (
            <div className="p-6">
              <h2 className="text-lg font-bold text-white mb-4">Popular Events</h2>
              {popularEvents.length === 0 ? (
                <p className="text-gray-400">No watchlist data yet</p>
              ) : (
                <div className="space-y-3">
                  {popularEvents.map((event, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{event.event_name}</p>
                        <p className="text-gray-400 text-sm">{event.venue_name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-purple-400 font-bold">{event.watch_count} watching</p>
                        <p className="text-gray-500 text-sm">{formatDate(event.event_date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Email</th>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Joined</th>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Watchlist</th>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Alerts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-700/30">
                      <td className="px-6 py-4 text-white">{user.email}</td>
                      <td className="px-6 py-4 text-gray-400">{formatDate(user.created_at)}</td>
                      <td className="px-6 py-4 text-purple-400">{user.watchlist_count}</td>
                      <td className="px-6 py-4 text-blue-400">{user.alerts_count}</td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-gray-400">No users yet</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'watchlist' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">User</th>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Event</th>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Venue</th>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Target Price</th>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Added</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {watchlist.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-700/30">
                      <td className="px-6 py-4 text-gray-400">{item.user_email}</td>
                      <td className="px-6 py-4 text-white">{item.event_name}</td>
                      <td className="px-6 py-4 text-gray-400">{item.venue}</td>
                      <td className="px-6 py-4 text-green-400">
                        {item.target_price ? formatPrice(parseFloat(item.target_price)) : '-'}
                      </td>
                      <td className="px-6 py-4 text-gray-500">{formatDate(item.created_at)}</td>
                    </tr>
                  ))}
                  {watchlist.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-gray-400">No watchlist items yet</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'subscribers' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Email</th>
                    <th className="text-left text-gray-400 text-sm font-medium px-6 py-3">Subscribed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-700/30">
                      <td className="px-6 py-4 text-white">{sub.email}</td>
                      <td className="px-6 py-4 text-gray-400">{formatDate(sub.subscribed_at)}</td>
                    </tr>
                  ))}
                  {subscribers.length === 0 && (
                    <tr>
                      <td colSpan={2} className="px-6 py-8 text-center text-gray-400">No subscribers yet</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="p-6">
              <div className="space-y-4">
                {activity.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-lg">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                      item.type === 'signup' ? 'bg-green-600/20 text-green-400' :
                      item.type === 'watchlist' ? 'bg-purple-600/20 text-purple-400' :
                      item.type === 'alert' ? 'bg-blue-600/20 text-blue-400' :
                      'bg-gray-600/20 text-gray-400'
                    }`}>
                      {item.type === 'signup' ? '👤' :
                       item.type === 'watchlist' ? '📋' :
                       item.type === 'alert' ? '🔔' : '📧'}
                    </div>
                    <div className="flex-1">
                      <p className="text-white">{item.detail}</p>
                      <p className="text-gray-500 text-sm">{item.user_email || ''}</p>
                    </div>
                    <p className="text-gray-500 text-sm">{formatDate(item.timestamp)}</p>
                  </div>
                ))}
                {activity.length === 0 && (
                  <p className="text-gray-400 text-center py-8">No activity yet</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'drip' && (
            <div className="p-6">
              {/* Run Campaign Button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white">Email Drip Campaign</h2>
                <button
                  onClick={async () => {
                    setIsRunningDrip(true);
                    try {
                      const res = await fetch(`${API_URL}/api/admin/drip-run`, {
                        method: 'POST',
                        headers: { 'x-admin-key': adminKey },
                      });
                      const data = await res.json();
                      alert(data.message || 'Campaign complete');
                      fetchData(adminKey);
                    } catch {
                      alert('Failed to run campaign');
                    } finally {
                      setIsRunningDrip(false);
                    }
                  }}
                  disabled={isRunningDrip}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
                >
                  {isRunningDrip ? 'Running...' : 'Run Campaign Now'}
                </button>
              </div>

              {/* Schedule */}
              <div className="mb-8">
                <h3 className="text-white font-medium mb-3">Email Schedule</h3>
                <div className="grid grid-cols-5 gap-2">
                  {dripSchedule.map((item) => {
                    const stat = dripStats.find(s => s.email_number === item.emailNumber);
                    return (
                      <div key={item.emailNumber} className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <p className="text-purple-400 font-bold">Email {item.emailNumber}</p>
                        <p className="text-gray-400 text-sm">Day {item.daysAfter}</p>
                        <p className="text-green-400 text-xs mt-1">
                          {stat ? `${stat.sent_count} sent` : '0 sent'}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Email Stats */}
              {dripStats.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-white font-medium mb-3">Emails Sent</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-700/50">
                        <tr>
                          <th className="text-left text-gray-400 text-sm font-medium px-4 py-2">Email #</th>
                          <th className="text-left text-gray-400 text-sm font-medium px-4 py-2">Sent</th>
                          <th className="text-left text-gray-400 text-sm font-medium px-4 py-2">Last Sent</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {dripStats.map((stat) => (
                          <tr key={stat.email_number}>
                            <td className="px-4 py-3 text-white">Email {stat.email_number}</td>
                            <td className="px-4 py-3 text-green-400">{stat.sent_count}</td>
                            <td className="px-4 py-3 text-gray-400">{formatDate(stat.last_sent)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Pending Users */}
              <div>
                <h3 className="text-white font-medium mb-3">Users Pending Emails</h3>
                {dripPendingUsers.length === 0 ? (
                  <p className="text-gray-400">All users have completed the drip sequence</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-700/50">
                        <tr>
                          <th className="text-left text-gray-400 text-sm font-medium px-4 py-2">Email</th>
                          <th className="text-left text-gray-400 text-sm font-medium px-4 py-2">Days Since Signup</th>
                          <th className="text-left text-gray-400 text-sm font-medium px-4 py-2">Last Email</th>
                          <th className="text-left text-gray-400 text-sm font-medium px-4 py-2">Next Email</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {dripPendingUsers.map((user) => {
                          const nextEmail = dripSchedule.find(s => s.emailNumber === user.last_email_sent + 1);
                          const daysUntilNext = nextEmail ? nextEmail.daysAfter - parseInt(user.days_since_signup) : null;
                          return (
                            <tr key={user.id}>
                              <td className="px-4 py-3 text-white">{user.email}</td>
                              <td className="px-4 py-3 text-gray-400">{user.days_since_signup} days</td>
                              <td className="px-4 py-3 text-purple-400">
                                {user.last_email_sent === 0 ? 'None' : `Email ${user.last_email_sent}`}
                              </td>
                              <td className="px-4 py-3 text-blue-400">
                                {nextEmail ? (
                                  daysUntilNext && daysUntilNext > 0
                                    ? `Email ${nextEmail.emailNumber} in ${daysUntilNext} days`
                                    : `Email ${nextEmail.emailNumber} (ready)`
                                ) : 'Complete'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => fetchData(adminKey)}
            disabled={isLoading}
            className="text-gray-400 hover:text-white text-sm"
          >
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </button>
        </div>
      </div>
    </div>
  );
}
