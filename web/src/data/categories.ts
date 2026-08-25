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
    description: 'Browse NBA games across every team. Team schedules, arena seating guides, and onsale and presale dates.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE', // Sports segment
    keywords: ['NBA tickets', 'basketball tickets', 'Lakers tickets', 'Knicks tickets'],
    icon: '🏀',
  },
  'nhl': {
    slug: 'nhl',
    name: 'NHL Hockey',
    description: 'Browse NHL games across every team. Schedules, arena guides, and onsale and presale dates for the season.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['NHL tickets', 'hockey tickets', 'Rangers tickets', 'Blackhawks tickets'],
    icon: '🏒',
  },
  'concerts': {
    slug: 'concerts',
    name: 'Concerts',
    description: 'Search concerts across Ticketmaster, SeatGeek and more from one place, and find out when tickets go on sale.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nJ', // Music segment
    keywords: ['concert tickets', 'live music tickets', 'tour tickets'],
    icon: '🎵',
  },
  'theater': {
    slug: 'theater',
    name: 'Theater & Broadway',
    description: 'Search Broadway shows, musicals and touring theater productions, with venue guides and onsale dates.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7na', // Arts & Theatre segment
    keywords: ['Broadway tickets', 'theater tickets', 'musical tickets', 'show tickets'],
    icon: '🎭',
  },
  'mlb': {
    slug: 'mlb',
    name: 'MLB Baseball',
    description: 'Browse MLB games across every team. Ballpark guides, home schedules, and onsale and presale dates.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['MLB tickets', 'baseball tickets', 'Yankees tickets', 'Dodgers tickets'],
    icon: '⚾',
  },
  'nfl': {
    slug: 'nfl',
    name: 'NFL Football',
    description: 'Browse NFL games across every team. Stadium guides, home schedules, and onsale and presale dates.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['NFL tickets', 'football tickets', 'Super Bowl tickets'],
    icon: '🏈',
  },
  'ufc': {
    slug: 'ufc',
    name: 'UFC & MMA',
    description: 'Find UFC fight nights and championship cards, with venue guides and onsale dates for each event.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['UFC tickets', 'MMA tickets', 'fight tickets', 'UFC fight night', 'championship fight tickets'],
    icon: '🥊',
  },
  'wwe': {
    slug: 'wwe',
    name: 'WWE Wrestling',
    description: 'Find WWE events including Raw, SmackDown and premium live events, with venue guides and onsale dates.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['WWE tickets', 'wrestling tickets', 'Raw tickets', 'SmackDown tickets', 'WrestleMania tickets'],
    icon: '🤼',
  },
  'comedy': {
    slug: 'comedy',
    name: 'Comedy Shows',
    description: 'Find stand-up comedy tours and live comedy dates, with venue guides and onsale dates.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7na',
    keywords: ['comedy tickets', 'stand-up tickets', 'comedian tickets', 'live comedy shows'],
    icon: '😂',
  },
  'festivals': {
    slug: 'festivals',
    name: 'Music Festivals',
    description: 'Find music festivals including Coachella, Lollapalooza and more, with lineup dates and onsale windows.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nJ',
    keywords: ['festival tickets', 'Coachella tickets', 'Lollapalooza tickets', 'music festival passes'],
    icon: '🎪',
  },
  'soccer': {
    slug: 'soccer',
    name: 'Soccer & MLS',
    description: 'Browse MLS and international soccer matches, with stadium guides and onsale and presale dates.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['MLS tickets', 'soccer tickets', 'football tickets', 'LAFC tickets', 'Inter Miami tickets'],
    icon: '⚽',
  },
  'tennis': {
    slug: 'tennis',
    name: 'Tennis',
    description: 'Find tennis tournaments including the US Open and ATP and WTA events, with venue guides and onsale dates.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7nE',
    keywords: ['tennis tickets', 'US Open tickets', 'Wimbledon tickets', 'ATP tickets'],
    icon: '🎾',
  },
  'family': {
    slug: 'family',
    name: 'Family Shows',
    description: 'Find tickets for Disney on Ice, Cirque du Soleil, and family-friendly entertainment events.',
    ticketmasterClassificationId: 'KZFzniwnSyZfZ7v7n1',
    keywords: ['family show tickets', 'Disney on Ice tickets', 'Cirque du Soleil tickets', 'kids events'],
    icon: '👨‍👩‍👧‍👦',
  },
};

export function getCategoryBySlug(slug: string): Category | null {
  return categories[slug] || null;
}

export function getAllCategories(): Category[] {
  return Object.values(categories);
}
