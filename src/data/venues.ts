// Major US Venue Data
// Sections organized by tier (lower bowl, upper bowl, floor, etc.)

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
  capacity: number;
  type: 'arena' | 'stadium' | 'theater';
  sections: VenueSection[];
  homeTeams?: string[];
  description?: string;
  keywords?: string[];
}

export const venues: Record<string, Venue> = {
  // Orlando
  'kia-center': {
    id: 'kia-center',
    name: 'Kia Center',
    city: 'Orlando',
    state: 'FL',
    capacity: 20000,
    type: 'arena',
    homeTeams: ['Orlando Magic'],
    description: 'Compare ticket prices for events at Kia Center in Orlando. Home of the Orlando Magic, hosting NBA games, concerts, and special events. Find cheap tickets and track price trends.',
    keywords: ['Kia Center tickets', 'Orlando Magic tickets', 'Kia Center seating chart', 'Kia Center events', 'Orlando arena tickets'],
    sections: [
      // Floor
      { name: 'Floor', tier: 'floor' },
      // Lower Bowl
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      // Club Level
      { name: 'Club A', tier: 'club' }, { name: 'Club B', tier: 'club' },
      { name: 'Club C', tier: 'club' }, { name: 'Club D', tier: 'club' },
      // Upper Bowl
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
      { name: '204', tier: 'upper' }, { name: '205', tier: 'upper' }, { name: '206', tier: 'upper' },
      { name: '207', tier: 'upper' }, { name: '208', tier: 'upper' }, { name: '209', tier: 'upper' },
      { name: '210', tier: 'upper' }, { name: '211', tier: 'upper' }, { name: '212', tier: 'upper' },
      { name: '213', tier: 'upper' }, { name: '214', tier: 'upper' }, { name: '215', tier: 'upper' },
      { name: '216', tier: 'upper' }, { name: '217', tier: 'upper' }, { name: '218', tier: 'upper' },
    ]
  },
  // Miami
  'kaseya-center': {
    id: 'kaseya-center',
    name: 'Kaseya Center',
    city: 'Miami',
    state: 'FL',
    capacity: 19600,
    type: 'arena',
    homeTeams: ['Miami Heat'],
    description: 'Find the best deals on tickets at Kaseya Center in Miami. Home of the Miami Heat, featuring NBA games, concerts, and entertainment events. Compare prices across multiple ticket sites.',
    keywords: ['Kaseya Center tickets', 'Miami Heat tickets', 'Kaseya Center seating', 'Miami arena events', 'FTX Arena tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' }, { name: '303', tier: 'upper' },
      { name: '304', tier: 'upper' }, { name: '305', tier: 'upper' }, { name: '306', tier: 'upper' },
      { name: '307', tier: 'upper' }, { name: '308', tier: 'upper' }, { name: '309', tier: 'upper' },
      { name: '310', tier: 'upper' }, { name: '311', tier: 'upper' }, { name: '312', tier: 'upper' },
      { name: '313', tier: 'upper' }, { name: '314', tier: 'upper' }, { name: '315', tier: 'upper' },
      { name: '316', tier: 'upper' }, { name: '317', tier: 'upper' }, { name: '318', tier: 'upper' },
    ]
  },
  // New York
  'msg': {
    id: 'msg',
    name: 'Madison Square Garden',
    city: 'New York',
    state: 'NY',
    capacity: 20789,
    type: 'arena',
    homeTeams: ['New York Knicks', 'New York Rangers'],
    description: 'Compare ticket prices for events at Madison Square Garden in NYC. The world\'s most famous arena, home to the Knicks and Rangers. Track prices for concerts, sports, and special events.',
    keywords: ['MSG tickets', 'Madison Square Garden tickets', 'Knicks tickets', 'Rangers tickets', 'MSG seating chart', 'NYC concert tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '1', tier: 'lower' }, { name: '2', tier: 'lower' }, { name: '3', tier: 'lower' },
      { name: '4', tier: 'lower' }, { name: '5', tier: 'lower' }, { name: '6', tier: 'lower' },
      { name: '7', tier: 'lower' }, { name: '8', tier: 'lower' }, { name: '9', tier: 'lower' },
      { name: '10', tier: 'lower' }, { name: '11', tier: 'lower' }, { name: '12', tier: 'lower' },
      { name: '101', tier: 'club' }, { name: '102', tier: 'club' }, { name: '103', tier: 'club' },
      { name: '104', tier: 'club' }, { name: '105', tier: 'club' }, { name: '106', tier: 'club' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
      { name: '204', tier: 'upper' }, { name: '205', tier: 'upper' }, { name: '206', tier: 'upper' },
      { name: '207', tier: 'upper' }, { name: '208', tier: 'upper' }, { name: '209', tier: 'upper' },
      { name: '210', tier: 'upper' }, { name: '211', tier: 'upper' }, { name: '212', tier: 'upper' },
    ]
  },
  // Los Angeles
  'crypto-arena': {
    id: 'crypto-arena',
    name: 'Crypto.com Arena',
    city: 'Los Angeles',
    state: 'CA',
    capacity: 20000,
    type: 'arena',
    homeTeams: ['Los Angeles Lakers', 'LA Clippers', 'LA Kings'],
    description: 'Get the best prices on tickets at Crypto.com Arena in Los Angeles. Home of the Lakers, Clippers, and Kings. Compare prices for NBA, NHL, concerts, and award shows.',
    keywords: ['Crypto.com Arena tickets', 'Lakers tickets', 'Clippers tickets', 'LA Kings tickets', 'Staples Center tickets', 'LA concert tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' }, { name: '303', tier: 'upper' },
      { name: '304', tier: 'upper' }, { name: '305', tier: 'upper' }, { name: '306', tier: 'upper' },
      { name: '307', tier: 'upper' }, { name: '308', tier: 'upper' }, { name: '309', tier: 'upper' },
      { name: '310', tier: 'upper' }, { name: '311', tier: 'upper' }, { name: '312', tier: 'upper' },
      { name: '313', tier: 'upper' }, { name: '314', tier: 'upper' }, { name: '315', tier: 'upper' },
      { name: '316', tier: 'upper' }, { name: '317', tier: 'upper' }, { name: '318', tier: 'upper' },
    ]
  },
  // Chicago
  'united-center': {
    id: 'united-center',
    name: 'United Center',
    city: 'Chicago',
    state: 'IL',
    capacity: 20917,
    type: 'arena',
    homeTeams: ['Chicago Bulls', 'Chicago Blackhawks'],
    description: 'Find cheap tickets at United Center in Chicago. Home of the Bulls and Blackhawks. Compare prices across ticket sites for NBA, NHL, concerts, and events.',
    keywords: ['United Center tickets', 'Bulls tickets', 'Blackhawks tickets', 'United Center seating', 'Chicago arena tickets', 'Chicago concert tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '119', tier: 'lower' }, { name: '120', tier: 'lower' }, { name: '121', tier: 'lower' },
      { name: '122', tier: 'lower' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' }, { name: '303', tier: 'upper' },
      { name: '304', tier: 'upper' }, { name: '305', tier: 'upper' }, { name: '306', tier: 'upper' },
      { name: '307', tier: 'upper' }, { name: '308', tier: 'upper' }, { name: '309', tier: 'upper' },
      { name: '310', tier: 'upper' }, { name: '311', tier: 'upper' }, { name: '312', tier: 'upper' },
      { name: '313', tier: 'upper' }, { name: '314', tier: 'upper' }, { name: '315', tier: 'upper' },
      { name: '316', tier: 'upper' }, { name: '317', tier: 'upper' }, { name: '318', tier: 'upper' },
      { name: '319', tier: 'upper' }, { name: '320', tier: 'upper' }, { name: '321', tier: 'upper' },
      { name: '322', tier: 'upper' }, { name: '323', tier: 'upper' }, { name: '324', tier: 'upper' },
      { name: '325', tier: 'upper' }, { name: '326', tier: 'upper' }, { name: '327', tier: 'upper' },
      { name: '328', tier: 'upper' }, { name: '329', tier: 'upper' }, { name: '330', tier: 'upper' },
    ]
  },
  // Boston
  'td-garden': {
    id: 'td-garden',
    name: 'TD Garden',
    city: 'Boston',
    state: 'MA',
    capacity: 19580,
    type: 'arena',
    homeTeams: ['Boston Celtics', 'Boston Bruins'],
    description: 'Compare ticket prices for events at TD Garden in Boston. Home of the Celtics and Bruins, hosting NBA, NHL, concerts, and entertainment.',
    keywords: ['TD Garden tickets', 'Celtics tickets', 'Bruins tickets', 'Boston arena tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' }, { name: '303', tier: 'upper' },
    ]
  },
  // Philadelphia
  'wells-fargo-center': {
    id: 'wells-fargo-center',
    name: 'Wells Fargo Center',
    city: 'Philadelphia',
    state: 'PA',
    capacity: 20478,
    type: 'arena',
    homeTeams: ['Philadelphia 76ers', 'Philadelphia Flyers'],
    description: 'Find cheap tickets at Wells Fargo Center in Philadelphia. Home of the 76ers and Flyers. Compare prices for NBA, NHL, and concerts.',
    keywords: ['Wells Fargo Center tickets', '76ers tickets', 'Flyers tickets', 'Philadelphia arena tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' },
    ]
  },
  // Dallas
  'american-airlines-center': {
    id: 'american-airlines-center',
    name: 'American Airlines Center',
    city: 'Dallas',
    state: 'TX',
    capacity: 19200,
    type: 'arena',
    homeTeams: ['Dallas Mavericks', 'Dallas Stars'],
    description: 'Get the best prices on tickets at American Airlines Center in Dallas. Home of the Mavericks and Stars.',
    keywords: ['American Airlines Center tickets', 'Mavericks tickets', 'Dallas Stars tickets', 'Dallas arena'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' },
    ]
  },
  // Houston
  'toyota-center': {
    id: 'toyota-center',
    name: 'Toyota Center',
    city: 'Houston',
    state: 'TX',
    capacity: 18055,
    type: 'arena',
    homeTeams: ['Houston Rockets'],
    description: 'Compare ticket prices at Toyota Center in Houston. Home of the Rockets, featuring NBA games and major concerts.',
    keywords: ['Toyota Center tickets', 'Rockets tickets', 'Houston arena tickets', 'Houston concerts'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '401', tier: 'upper' }, { name: '402', tier: 'upper' },
    ]
  },
  // Phoenix
  'footprint-center': {
    id: 'footprint-center',
    name: 'Footprint Center',
    city: 'Phoenix',
    state: 'AZ',
    capacity: 17071,
    type: 'arena',
    homeTeams: ['Phoenix Suns', 'Phoenix Mercury'],
    description: 'Find tickets at Footprint Center in Phoenix. Home of the Suns, hosting NBA games, WNBA, and events.',
    keywords: ['Footprint Center tickets', 'Suns tickets', 'Phoenix arena tickets', 'Phoenix Suns'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' },
    ]
  },
  // San Francisco
  'chase-center': {
    id: 'chase-center',
    name: 'Chase Center',
    city: 'San Francisco',
    state: 'CA',
    capacity: 18064,
    type: 'arena',
    homeTeams: ['Golden State Warriors'],
    description: 'Compare prices at Chase Center in San Francisco. Home of the Warriors, featuring NBA games and world-class concerts.',
    keywords: ['Chase Center tickets', 'Warriors tickets', 'Golden State tickets', 'San Francisco arena'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' },
    ]
  },
  // Denver
  'ball-arena': {
    id: 'ball-arena',
    name: 'Ball Arena',
    city: 'Denver',
    state: 'CO',
    capacity: 19520,
    type: 'arena',
    homeTeams: ['Denver Nuggets', 'Colorado Avalanche'],
    description: 'Get tickets at Ball Arena in Denver. Home of the Nuggets and Avalanche, hosting NBA, NHL, and concerts.',
    keywords: ['Ball Arena tickets', 'Nuggets tickets', 'Avalanche tickets', 'Denver arena tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' },
    ]
  },
  // Atlanta
  'state-farm-arena': {
    id: 'state-farm-arena',
    name: 'State Farm Arena',
    city: 'Atlanta',
    state: 'GA',
    capacity: 18118,
    type: 'arena',
    homeTeams: ['Atlanta Hawks'],
    description: 'Find cheap tickets at State Farm Arena in Atlanta. Home of the Hawks, featuring NBA games and top concerts.',
    keywords: ['State Farm Arena tickets', 'Hawks tickets', 'Atlanta arena tickets', 'Atlanta concerts'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' },
    ]
  }
};

// Get venue by name (fuzzy match)
export function findVenue(venueName: string): Venue | null {
  const normalized = venueName.toLowerCase();

  for (const venue of Object.values(venues)) {
    if (normalized.includes(venue.name.toLowerCase()) ||
        venue.name.toLowerCase().includes(normalized)) {
      return venue;
    }
  }

  // Check for alternate names
  if (normalized.includes('amway') || normalized.includes('kia center')) {
    return venues['kia-center'];
  }
  if (normalized.includes('ftx') || normalized.includes('american airlines') || normalized.includes('kaseya')) {
    return venues['kaseya-center'];
  }
  if (normalized.includes('madison square') || normalized.includes('msg')) {
    return venues['msg'];
  }
  if (normalized.includes('staples') || normalized.includes('crypto')) {
    return venues['crypto-arena'];
  }

  return null;
}

// Tier pricing estimates (for display purposes when we don't have section-level data)
export const tierPricing = {
  floor: { label: 'Floor/Courtside', multiplier: 3.0 },
  lower: { label: 'Lower Bowl', multiplier: 1.5 },
  club: { label: 'Club Level', multiplier: 2.0 },
  upper: { label: 'Upper Bowl', multiplier: 1.0 },
  suite: { label: 'Suite', multiplier: 4.0 }
};

// Get venue by slug
export function getVenueBySlug(slug: string): Venue | null {
  return venues[slug] || null;
}

// Get all venues
export function getAllVenues(): Venue[] {
  return Object.values(venues);
}
