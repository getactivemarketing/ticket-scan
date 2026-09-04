// Shared venue shape. Split out of venues.ts so src/data/stadiums/* can import
// the type without importing the 25-entry arena record, and so composing
// stadiums back into `venues` forms no import cycle.

export interface VenueSection {
  name: string;
  tier: 'floor' | 'lower' | 'club' | 'upper' | 'suite';
  rows?: string;
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  state: string;
  // Override for city slug when it doesn't match `city.toLowerCase().replace(/\s+/g, '-')` (e.g. Washington → washington-dc).
  citySlug?: string;
  capacity: number;
  type: 'arena' | 'stadium' | 'theater';
  sections: VenueSection[];
  homeTeams?: string[];
  description?: string;
  keywords?: string[];
  faqs?: { question: string; answer: string }[];
}
