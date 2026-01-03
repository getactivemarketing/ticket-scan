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
};

export function getCityBySlug(slug: string): City | null {
  return cities[slug] || null;
}

export function getAllCities(): City[] {
  return Object.values(cities);
}
