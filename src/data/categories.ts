export interface Category {
  slug: string;
  name: string;
  description: string;
  ticketmasterClassificationId?: string;
  keywords: string[];
  icon: string;
}

export const categories: Record<string, Category> = {
  'nba': {
    slug: 'nba',
    name: 'NBA Basketball',
    description: 'Compare ticket prices for NBA games across all teams. Track price trends and find the best deals on basketball tickets.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE', // Sports segment
    keywords: ['NBA tickets', 'basketball tickets', 'Lakers tickets', 'Knicks tickets', 'cheap NBA tickets'],
    icon: '🏀',
  },
  'nhl': {
    slug: 'nhl',
    name: 'NHL Hockey',
    description: 'Find the best prices on NHL hockey tickets. Compare prices across ticket sites for all teams and games.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['NHL tickets', 'hockey tickets', 'Rangers tickets', 'Blackhawks tickets', 'cheap hockey tickets'],
    icon: '🏒',
  },
  'concerts': {
    slug: 'concerts',
    name: 'Concerts',
    description: 'Track concert ticket prices and get alerts when prices drop. Compare prices across Ticketmaster, SeatGeek, and more.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nJ', // Music segment
    keywords: ['concert tickets', 'live music tickets', 'cheap concert tickets', 'tour tickets'],
    icon: '🎵',
  },
  'theater': {
    slug: 'theater',
    name: 'Theater & Broadway',
    description: 'Compare prices on Broadway shows, musicals, and theater performances. Find the best deals on theater tickets.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7na', // Arts & Theatre segment
    keywords: ['Broadway tickets', 'theater tickets', 'musical tickets', 'show tickets'],
    icon: '🎭',
  },
  'mlb': {
    slug: 'mlb',
    name: 'MLB Baseball',
    description: 'Find cheap MLB baseball tickets. Track prices and compare deals across all major league teams.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['MLB tickets', 'baseball tickets', 'Yankees tickets', 'Dodgers tickets'],
    icon: '⚾',
  },
  'nfl': {
    slug: 'nfl',
    name: 'NFL Football',
    description: 'Compare NFL ticket prices and find the best deals on football games. Track prices as game day approaches.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['NFL tickets', 'football tickets', 'Super Bowl tickets', 'cheap NFL tickets'],
    icon: '🏈',
  },
};

export function getCategoryBySlug(slug: string): Category | null {
  return categories[slug] || null;
}

export function getAllCategories(): Category[] {
  return Object.values(categories);
}
