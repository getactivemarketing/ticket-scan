const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';

interface ApiResponse<T> {
  success: boolean;
  error?: string;
  [key: string]: T | boolean | string | undefined;
}

class ApiClient {
  private token: string | null = null;

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    if (this.token) return this.token;
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getToken();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API request failed');
    }

    return data;
  }

  // Auth endpoints
  async register(email: string, password: string) {
    return this.request<{
      success: boolean;
      user: { id: number; email: string; createdAt: string };
      token: string;
    }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async login(email: string, password: string) {
    return this.request<{
      success: boolean;
      user: { id: number; email: string; createdAt: string };
      token: string;
    }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async getMe() {
    return this.request<{
      success: boolean;
      user: { id: number; email: string; createdAt: string };
    }>('/api/auth/me');
  }

  // Event search with date filtering
  async searchEvents(city: string, keyword: string, startDate?: string, endDate?: string) {
    const params = new URLSearchParams({ city, keyword });
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);

    return this.request<{
      success: boolean;
      source: string;
      count: number;
      events: Array<{
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
        source?: string;
      }>;
    }>(`/api/events/search?${params}`);
  }

  // Compare prices across sources
  async compareEvents(city: string, keyword: string, startDate?: string, endDate?: string) {
    const params = new URLSearchParams({ city, keyword });
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);

    return this.request<{
      success: boolean;
      results: {
        ticketmaster: Array<{
          id: string;
          name: string;
          date: string;
          venue: string;
          priceRange: string;
          url: string;
        }>;
        seatgeek: Array<{
          id: string;
          name: string;
          date: string;
          venue: string;
          minPrice: number;
          listingCount?: number;
          url: string;
        }>;
      };
    }>(`/api/events/compare?${params}`);
  }

  // Watchlist endpoints
  async getWatchlist() {
    return this.request<{
      success: boolean;
      count: number;
      watchlist: Array<{
        id: number;
        event_id: string;
        event_name: string;
        event_date: string;
        venue: string;
        city: string;
        target_price: string;
        created_at: string;
      }>;
    }>('/api/watchlist');
  }

  async addToWatchlist(event: {
    eventId: string;
    eventName: string;
    eventDate?: string;
    venue?: string;
    city?: string;
    targetPrice?: number;
  }) {
    return this.request<{
      success: boolean;
      item: {
        id: number;
        event_id: string;
        event_name: string;
      };
    }>('/api/watchlist', {
      method: 'POST',
      body: JSON.stringify(event),
    });
  }

  async removeFromWatchlist(id: number) {
    return this.request<{ success: boolean }>(`/api/watchlist/${id}`, {
      method: 'DELETE',
    });
  }

  // Price tracking endpoints
  async getPriceHistory(eventId: string, days?: number) {
    const params = new URLSearchParams();
    if (days) params.append('days', days.toString());

    return this.request<{
      success: boolean;
      eventId: string;
      count: number;
      priceHistory: Array<{
        source: string;
        min_price: string;
        avg_price: string;
        max_price: string;
        checked_at: string;
      }>;
    }>(`/api/prices/history/${eventId}${params.toString() ? `?${params}` : ''}`);
  }

  async getPriceTrend(eventId: string) {
    return this.request<{
      success: boolean;
      eventId: string;
      trend: {
        direction: 'up' | 'down' | 'stable';
        percentChange: number;
        currentMinPrice?: number;
        previousMinPrice?: number;
      };
      sources: Array<{
        source: string;
        current_min: string;
        current_avg: string;
      }>;
    }>(`/api/prices/trend/${eventId}`);
  }

  async getBuyRecommendation(eventId: string) {
    return this.request<{
      success: boolean;
      eventId: string;
      eventName?: string;
      recommendation: {
        action: 'buy_now' | 'wait' | 'hold';
        confidence: 'high' | 'medium' | 'low';
        reason: string;
        stats: {
          currentPrice: number;
          lowestRecorded: number;
          highestRecorded: number;
          averagePrice: number;
          daysUntilEvent: number | null;
          targetPrice: number | null;
        } | null;
      };
    }>(`/api/prices/recommendation/${eventId}`);
  }

  async getWatchlistWithPrices() {
    return this.request<{
      success: boolean;
      count: number;
      watchlist: Array<{
        id: number;
        event_id: string;
        event_name: string;
        event_date: string;
        venue: string;
        city: string;
        target_price: string | null;
        created_at: string;
        current_min_price: string | null;
        current_max_price: string | null;
        source: string | null;
        last_checked: string | null;
        percent_change: number | null;
        trend_direction: 'up' | 'down' | 'stable';
      }>;
    }>('/api/watchlist/with-prices');
  }

  async triggerPriceTracking() {
    return this.request<{
      success: boolean;
      message: string;
    }>('/api/prices/track', {
      method: 'POST',
    });
  }

  // Favorites endpoints
  async getFavorites() {
    return this.request<{
      success: boolean;
      favorites: Array<{
        id: number;
        user_id: number;
        favorite_type: 'team' | 'artist' | 'venue';
        favorite_name: string;
        created_at: string;
      }>;
    }>('/api/favorites');
  }

  async addFavorite(type: 'team' | 'artist' | 'venue', name: string) {
    return this.request<{
      success: boolean;
      favorite?: {
        id: number;
        favorite_type: string;
        favorite_name: string;
      };
      message?: string;
    }>('/api/favorites', {
      method: 'POST',
      body: JSON.stringify({ type, name }),
    });
  }

  async removeFavorite(id: number) {
    return this.request<{ success: boolean }>(`/api/favorites/${id}`, {
      method: 'DELETE',
    });
  }

  async getFavoriteEvents() {
    return this.request<{
      success: boolean;
      events: Array<{
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
      }>;
      message?: string;
    }>('/api/favorites/events');
  }
}

export const api = new ApiClient();
export default api;
