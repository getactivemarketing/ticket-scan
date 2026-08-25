export interface City {
  slug: string;
  name: string;
  state: string;
  description: string;
  venueIds: string[];
  keywords: string[];
}

export const cities: Record<string, City> = {
  'orlando': {
    slug: 'orlando',
    name: 'Orlando',
    state: 'FL',
    description: 'Find tickets to concerts, Orlando Magic games, and events at Kia Center and venues across Orlando.',
    venueIds: ['kia-center'],
    keywords: ['Orlando Magic tickets', 'Orlando concerts', 'Kia Center events', 'Orlando events'],
  },
  'miami': {
    slug: 'miami',
    name: 'Miami',
    state: 'FL',
    description: 'Find Miami Heat games, concerts, and events at Kaseya Center and Miami venues. Schedules, venue guides and onsale dates.',
    venueIds: ['kaseya-center'],
    keywords: ['Miami Heat tickets', 'Miami concerts', 'Kaseya Center events', 'Miami events'],
  },
  'new-york': {
    slug: 'new-york',
    name: 'New York',
    state: 'NY',
    description: 'Find Knicks, Rangers, concerts, and shows at Madison Square Garden and NYC venues. Schedules, venue guides and onsale dates.',
    venueIds: ['msg'],
    keywords: ['New York Knicks tickets', 'Rangers tickets', 'MSG events', 'Madison Square Garden tickets'],
  },
  'los-angeles': {
    slug: 'los-angeles',
    name: 'Los Angeles',
    state: 'CA',
    description: 'Find Lakers, Kings, Sparks, concerts, and events at Crypto.com Arena. Schedules, venue guides and onsale dates.',
    venueIds: ['crypto-arena'],
    keywords: ['Lakers tickets', 'Clippers tickets', 'LA Kings tickets', 'Crypto.com Arena events'],
  },
  'chicago': {
    slug: 'chicago',
    name: 'Chicago',
    state: 'IL',
    description: 'Find Bulls, Blackhawks, concerts, and events at United Center. Schedules, venue guides and onsale dates.',
    venueIds: ['united-center'],
    keywords: ['Chicago Bulls tickets', 'Blackhawks tickets', 'United Center events', 'Chicago concerts'],
  },
  'boston': {
    slug: 'boston',
    name: 'Boston',
    state: 'MA',
    description: 'Find Celtics, Bruins, concerts, and events at TD Garden in Boston. Schedules, venue guides and onsale dates.',
    venueIds: ['td-garden'],
    keywords: ['Celtics tickets', 'Bruins tickets', 'TD Garden events', 'Boston concerts'],
  },
  'philadelphia': {
    slug: 'philadelphia',
    name: 'Philadelphia',
    state: 'PA',
    description: 'Find tickets to 76ers, Flyers, concerts, and events at Wells Fargo Center.',
    venueIds: ['wells-fargo-center'],
    keywords: ['76ers tickets', 'Flyers tickets', 'Wells Fargo Center events', 'Philadelphia concerts'],
  },
  'dallas': {
    slug: 'dallas',
    name: 'Dallas',
    state: 'TX',
    description: 'Find Mavericks, Stars, concerts, and events at American Airlines Center. Schedules, venue guides and onsale dates.',
    venueIds: ['american-airlines-center'],
    keywords: ['Mavericks tickets', 'Dallas Stars tickets', 'American Airlines Center events', 'Dallas concerts'],
  },
  'houston': {
    slug: 'houston',
    name: 'Houston',
    state: 'TX',
    description: 'Find Rockets games, concerts, and events at Toyota Center. Schedules, venue guides and onsale dates.',
    venueIds: ['toyota-center'],
    keywords: ['Rockets tickets', 'Toyota Center events', 'Houston concerts', 'Houston events'],
  },
  'phoenix': {
    slug: 'phoenix',
    name: 'Phoenix',
    state: 'AZ',
    description: 'Find Suns games, concerts, and events at Mortgage Matchup Center in Phoenix. Schedules, venue guides and onsale dates.',
    venueIds: ['footprint-center'],
    keywords: ['Suns tickets', 'Mortgage Matchup Center events', 'Phoenix concerts', 'Phoenix Mercury tickets'],
  },
  'san-francisco': {
    slug: 'san-francisco',
    name: 'San Francisco',
    state: 'CA',
    description: 'Find tickets to Warriors games, concerts, and events at Chase Center in San Francisco.',
    venueIds: ['chase-center'],
    keywords: ['Warriors tickets', 'Chase Center events', 'San Francisco concerts', 'Golden State tickets'],
  },
  'denver': {
    slug: 'denver',
    name: 'Denver',
    state: 'CO',
    description: 'Find Nuggets, Avalanche, concerts, and events at Ball Arena in Denver. Schedules, venue guides and onsale dates.',
    venueIds: ['ball-arena'],
    keywords: ['Nuggets tickets', 'Avalanche tickets', 'Ball Arena events', 'Denver concerts'],
  },
  'atlanta': {
    slug: 'atlanta',
    name: 'Atlanta',
    state: 'GA',
    description: 'Find Hawks games, concerts, and events at State Farm Arena. Schedules, venue guides and onsale dates.',
    venueIds: ['state-farm-arena'],
    keywords: ['Hawks tickets', 'State Farm Arena events', 'Atlanta concerts', 'Atlanta events'],
  },
  'brooklyn': {
    slug: 'brooklyn',
    name: 'Brooklyn',
    state: 'NY',
    description: 'Find Nets games, Liberty matches, concerts, and events at Barclays Center in Brooklyn. Schedules, venue guides and onsale dates.',
    venueIds: ['barclays-center'],
    keywords: ['Brooklyn Nets tickets', 'Barclays Center events', 'Brooklyn concerts', 'NY Liberty tickets'],
  },
  'washington-dc': {
    slug: 'washington-dc',
    name: 'Washington DC',
    state: 'DC',
    description: 'Find tickets to Wizards, Capitals games, concerts, and events at Capital One Arena in Washington DC.',
    venueIds: ['capital-one-arena'],
    keywords: ['Wizards tickets', 'Capitals tickets', 'Capital One Arena events', 'DC concerts'],
  },
  'detroit': {
    slug: 'detroit',
    name: 'Detroit',
    state: 'MI',
    description: 'Find Pistons, Red Wings games, and concerts at Little Caesars Arena in Detroit. Schedules, venue guides and onsale dates.',
    venueIds: ['little-caesars-arena'],
    keywords: ['Pistons tickets', 'Red Wings tickets', 'Little Caesars Arena events', 'Detroit concerts'],
  },
  'milwaukee': {
    slug: 'milwaukee',
    name: 'Milwaukee',
    state: 'WI',
    description: 'Find Bucks games, concerts, and events at Fiserv Forum in Milwaukee. Schedules, venue guides and onsale dates.',
    venueIds: ['fiserv-forum'],
    keywords: ['Bucks tickets', 'Fiserv Forum events', 'Milwaukee concerts', 'Milwaukee events'],
  },
  'minneapolis': {
    slug: 'minneapolis',
    name: 'Minneapolis',
    state: 'MN',
    description: 'Find Timberwolves, Lynx games, and concerts at Target Center in Minneapolis. Schedules, venue guides and onsale dates.',
    venueIds: ['target-center'],
    keywords: ['Timberwolves tickets', 'Target Center events', 'Minneapolis concerts', 'Lynx tickets'],
  },
  'new-orleans': {
    slug: 'new-orleans',
    name: 'New Orleans',
    state: 'LA',
    description: 'Find Pelicans games, concerts, and events at Smoothie King Center in New Orleans. Schedules, venue guides and onsale dates.',
    venueIds: ['smoothie-king-center'],
    keywords: ['Pelicans tickets', 'Smoothie King Center events', 'New Orleans concerts', 'NOLA events'],
  },
  'toronto': {
    slug: 'toronto',
    name: 'Toronto',
    state: 'ON',
    description: 'Find Raptors, Maple Leafs games, and concerts at Scotiabank Arena in Toronto. Schedules, venue guides and onsale dates.',
    venueIds: ['scotiabank-arena'],
    keywords: ['Raptors tickets', 'Maple Leafs tickets', 'Scotiabank Arena events', 'Toronto concerts'],
  },
  'las-vegas': {
    slug: 'las-vegas',
    name: 'Las Vegas',
    state: 'NV',
    description: 'Find tickets to Golden Knights games, UFC fights, boxing, and concerts at T-Mobile Arena in Las Vegas.',
    venueIds: ['t-mobile-arena'],
    keywords: ['Golden Knights tickets', 'T-Mobile Arena events', 'Vegas concerts', 'UFC tickets', 'boxing tickets'],
  },
  'seattle': {
    slug: 'seattle',
    name: 'Seattle',
    state: 'WA',
    description: 'Find Kraken, Storm games, and concerts at Climate Pledge Arena in Seattle. Schedules, venue guides and onsale dates.',
    venueIds: ['climate-pledge-arena'],
    keywords: ['Kraken tickets', 'Climate Pledge Arena events', 'Seattle concerts', 'Storm tickets'],
  },
  'newark': {
    slug: 'newark',
    name: 'Newark',
    state: 'NJ',
    description: 'Find Devils games, concerts, and events at Prudential Center in Newark. Schedules, venue guides and onsale dates.',
    venueIds: ['prudential-center'],
    keywords: ['Devils tickets', 'Prudential Center events', 'Newark concerts', 'New Jersey events'],
  },
  'sacramento': {
    slug: 'sacramento',
    name: 'Sacramento',
    state: 'CA',
    description: 'Find Kings games, concerts, and events at Golden 1 Center in Sacramento. Schedules, venue guides and onsale dates.',
    venueIds: ['golden-1-center'],
    keywords: ['Kings tickets', 'Golden 1 Center events', 'Sacramento concerts', 'Sacramento events'],
  },
};

export function getCityBySlug(slug: string): City | null {
  return cities[slug] || null;
}

export function getAllCities(): City[] {
  return Object.values(cities);
}
