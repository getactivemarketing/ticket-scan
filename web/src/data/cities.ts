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
    description: 'Compare ticket prices for Miami Heat games, concerts, and events at Kaseya Center and Miami venues.',
    venueIds: ['kaseya-center'],
    keywords: ['Miami Heat tickets', 'Miami concerts', 'Kaseya Center events', 'Miami events'],
  },
  'new-york': {
    slug: 'new-york',
    name: 'New York',
    state: 'NY',
    description: 'Get the best deals on Knicks, Rangers, concerts, and shows at Madison Square Garden and NYC venues.',
    venueIds: ['msg'],
    keywords: ['New York Knicks tickets', 'Rangers tickets', 'MSG events', 'Madison Square Garden tickets'],
  },
  'los-angeles': {
    slug: 'los-angeles',
    name: 'Los Angeles',
    state: 'CA',
    description: 'Track prices for Lakers, Clippers, Kings, concerts, and events at Crypto.com Arena.',
    venueIds: ['crypto-arena'],
    keywords: ['Lakers tickets', 'Clippers tickets', 'LA Kings tickets', 'Crypto.com Arena events'],
  },
  'chicago': {
    slug: 'chicago',
    name: 'Chicago',
    state: 'IL',
    description: 'Find cheap tickets to Bulls, Blackhawks, concerts, and events at United Center.',
    venueIds: ['united-center'],
    keywords: ['Chicago Bulls tickets', 'Blackhawks tickets', 'United Center events', 'Chicago concerts'],
  },
  'boston': {
    slug: 'boston',
    name: 'Boston',
    state: 'MA',
    description: 'Compare prices for Celtics, Bruins, concerts, and events at TD Garden in Boston.',
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
    description: 'Get the best prices on Mavericks, Stars, concerts, and events at American Airlines Center.',
    venueIds: ['american-airlines-center'],
    keywords: ['Mavericks tickets', 'Dallas Stars tickets', 'American Airlines Center events', 'Dallas concerts'],
  },
  'houston': {
    slug: 'houston',
    name: 'Houston',
    state: 'TX',
    description: 'Compare ticket prices for Rockets games, concerts, and events at Toyota Center.',
    venueIds: ['toyota-center'],
    keywords: ['Rockets tickets', 'Toyota Center events', 'Houston concerts', 'Houston events'],
  },
  'phoenix': {
    slug: 'phoenix',
    name: 'Phoenix',
    state: 'AZ',
    description: 'Track prices for Suns games, concerts, and events at Footprint Center in Phoenix.',
    venueIds: ['footprint-center'],
    keywords: ['Suns tickets', 'Footprint Center events', 'Phoenix concerts', 'Phoenix Mercury tickets'],
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
    description: 'Compare prices for Nuggets, Avalanche, concerts, and events at Ball Arena in Denver.',
    venueIds: ['ball-arena'],
    keywords: ['Nuggets tickets', 'Avalanche tickets', 'Ball Arena events', 'Denver concerts'],
  },
  'atlanta': {
    slug: 'atlanta',
    name: 'Atlanta',
    state: 'GA',
    description: 'Find cheap tickets to Hawks games, concerts, and events at State Farm Arena.',
    venueIds: ['state-farm-arena'],
    keywords: ['Hawks tickets', 'State Farm Arena events', 'Atlanta concerts', 'Atlanta events'],
  },
  'brooklyn': {
    slug: 'brooklyn',
    name: 'Brooklyn',
    state: 'NY',
    description: 'Compare ticket prices for Nets games, Liberty matches, concerts, and events at Barclays Center in Brooklyn.',
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
    description: 'Get the best prices on Pistons, Red Wings games, and concerts at Little Caesars Arena in Detroit.',
    venueIds: ['little-caesars-arena'],
    keywords: ['Pistons tickets', 'Red Wings tickets', 'Little Caesars Arena events', 'Detroit concerts'],
  },
  'milwaukee': {
    slug: 'milwaukee',
    name: 'Milwaukee',
    state: 'WI',
    description: 'Compare prices for Bucks games, concerts, and events at Fiserv Forum in Milwaukee.',
    venueIds: ['fiserv-forum'],
    keywords: ['Bucks tickets', 'Fiserv Forum events', 'Milwaukee concerts', 'Milwaukee events'],
  },
  'minneapolis': {
    slug: 'minneapolis',
    name: 'Minneapolis',
    state: 'MN',
    description: 'Find cheap tickets to Timberwolves, Lynx games, and concerts at Target Center in Minneapolis.',
    venueIds: ['target-center'],
    keywords: ['Timberwolves tickets', 'Target Center events', 'Minneapolis concerts', 'Lynx tickets'],
  },
  'new-orleans': {
    slug: 'new-orleans',
    name: 'New Orleans',
    state: 'LA',
    description: 'Track prices for Pelicans games, concerts, and events at Smoothie King Center in New Orleans.',
    venueIds: ['smoothie-king-center'],
    keywords: ['Pelicans tickets', 'Smoothie King Center events', 'New Orleans concerts', 'NOLA events'],
  },
  'toronto': {
    slug: 'toronto',
    name: 'Toronto',
    state: 'ON',
    description: 'Compare ticket prices for Raptors, Maple Leafs games, and concerts at Scotiabank Arena in Toronto.',
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
    description: 'Get the best prices on Kraken, Storm games, and concerts at Climate Pledge Arena in Seattle.',
    venueIds: ['climate-pledge-arena'],
    keywords: ['Kraken tickets', 'Climate Pledge Arena events', 'Seattle concerts', 'Storm tickets'],
  },
  'newark': {
    slug: 'newark',
    name: 'Newark',
    state: 'NJ',
    description: 'Compare prices for Devils games, concerts, and events at Prudential Center in Newark.',
    venueIds: ['prudential-center'],
    keywords: ['Devils tickets', 'Prudential Center events', 'Newark concerts', 'New Jersey events'],
  },
  'sacramento': {
    slug: 'sacramento',
    name: 'Sacramento',
    state: 'CA',
    description: 'Find cheap tickets to Kings games, concerts, and events at Golden 1 Center in Sacramento.',
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
