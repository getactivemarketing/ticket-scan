// 2026 FIFA World Cup Host Venues

export interface WorldCupVenue {
  slug: string;
  name: string;
  city: string;
  state?: string;
  country: 'USA' | 'Canada' | 'Mexico';
  capacity: number;
  description: string;
  teams?: string[]; // NFL, MLS teams that play here
  ticketTips: string[];
  sections: {
    name: string;
    priceRange: string;
    description: string;
  }[];
  keywords: string[];
}

export const worldCupVenues: Record<string, WorldCupVenue> = {
  // ========== USA VENUES (11) ==========
  'metlife-stadium': {
    slug: 'metlife-stadium',
    name: 'MetLife Stadium',
    city: 'East Rutherford',
    state: 'New Jersey',
    country: 'USA',
    capacity: 82500,
    description: 'MetLife Stadium hosts the FIFA World Cup 2026 Final on July 19, 2026, plus seven earlier matches across the group stage and knockout rounds. Located in the Meadowlands Sports Complex roughly eight miles west of Manhattan, the 82,500-seat venue is the second-largest stadium in the United States after AT&T Stadium and the largest tournament venue on the East Coast. Outside the World Cup, MetLife is the year-round home of the NFL\'s New York Giants and Jets and a top-tier concert and special-event destination — Taylor Swift played five sold-out Eras Tour nights here in 2023 with resale tickets clearing $1,500 to $5,000+, and the venue hosts marquee summer tours, international soccer friendlies, and Monster Jam every season. For the World Cup, the playing surface is reconfigured with a soccer-specific natural-grass pitch installed over the football field, which shifts the sightline geometry: the long sidelines of the pitch parallel the 100-level row 1 north and south stands, while the goal lines sit behind sections 116-118 and 134-136. Compare prices on Ticketmaster, SeatGeek, StubHub, and the official FIFA resale marketplace through TicketScan to see the full spread before locking in seats — early data on group-stage matches at MetLife is showing $200-$500 spreads on identical sections between platforms, and the FIFA marketplace has been running 10-25% above third-party resale on the highest-demand matches. Set a free price alert and let the platforms compete for your buy.',
    teams: ['New York Giants', 'New York Jets'],
    ticketTips: [
      'Lower bowl sideline sections 101-115 and 134-150 give you the best soccer sightlines — the long axis of the pitch parallels the 100-level row 1 north and south seats',
      'Avoid lower bowl sections 116-118 and 134-136 if you want a clear view of both ends of the field — these sit directly behind the goal lines',
      'Mezzanine 200s offer elevated full-pitch views at roughly half the lower-bowl price; the corner mezzanine sections (218-220, 232-234) are the best $400-$700 World Cup value at MetLife',
      'Upper Level 300s start under $200 for group-stage matches but expect $500+ for the Final and $300+ for knockout rounds',
      'NJ Transit runs direct trains from Penn Station and Secaucus Junction to Meadowlands Station on event days — the 15-minute ride is the only sane way in for World Cup matches',
      'Skip driving to the Final — Route 3 backs up for hours and parking lots are running $50+ even for group-stage matches in the official lots',
      'Coaches Club seats include indoor lounge access, padded seating, and dedicated entry — worth the premium if you want air-conditioned halftime in the New Jersey July humidity',
      'Set a TicketScan price alert before the FIFA general sale clears — every prior major event at MetLife has seen a 20-30% resale dip in the 7-10 days after the official on-sale as flippers offload inventory they can\'t move at face value',
    ],
    sections: [
      { name: 'Field Level Sideline (101-115, 134-150)', priceRange: '$1200-$3500+', description: 'Long-axis pitch views, FIFA Category 1 zone — premium for the Final and knockout rounds' },
      { name: 'Field Level Endline (116-118, 134-136)', priceRange: '$700-$2000', description: 'Behind the goals, intense atmosphere but limited far-end visibility' },
      { name: 'Coaches Club (mid-sideline premium)', priceRange: '$1500-$4000', description: 'All-inclusive premium club with private entry, climate-controlled lounge, and in-seat service' },
      { name: 'Mezzanine Sideline (201-217, 235-250)', priceRange: '$500-$1400', description: 'Elevated sideline views, FIFA Category 2 — best mid-range value for the Final' },
      { name: 'Mezzanine Corner (218-220, 232-234)', priceRange: '$400-$1100', description: 'Angled corner views with full-pitch visibility, lower price than sideline mezz' },
      { name: 'Mezzanine Endline (221-231)', priceRange: '$350-$950', description: 'Behind the goals at mid-height — the supporters-section vibe for traveling fan groups' },
      { name: 'Upper Level Sideline (301-317, 334-350)', priceRange: '$200-$700', description: 'Highest seats with full panoramic pitch views, FIFA Category 3' },
      { name: 'Upper Level Corner & Endline (318-333)', priceRange: '$150-$550', description: 'Cheapest World Cup seats at MetLife, FIFA Category 4 — sharp viewing angles' },
      { name: 'MetLife Suite Level', priceRange: '$15000-$50000+', description: '20-person private suites with catering, full bar, and dedicated parking — primarily Final-only on the resale market' },
    ],
    keywords: ['MetLife Stadium World Cup tickets', 'World Cup Final tickets', 'World Cup New York tickets', 'World Cup New Jersey tickets', 'FIFA 2026 MetLife', 'MetLife Stadium seating chart', 'MetLife World Cup Final', 'cheapest MetLife World Cup tickets', 'Coaches Club MetLife', 'World Cup Final July 19 2026'],
  },

  'sofi-stadium': {
    slug: 'sofi-stadium',
    name: 'SoFi Stadium',
    city: 'Inglewood',
    state: 'California',
    country: 'USA',
    capacity: 70240,
    description: 'SoFi Stadium in Los Angeles is one of the most technologically advanced stadiums in the world. Home to the Rams and Chargers, this $5 billion venue will host World Cup 2026 matches and potentially the Final.',
    teams: ['Los Angeles Rams', 'Los Angeles Chargers'],
    ticketTips: [
      'The Oculus video board provides unique viewing but doesn\'t affect sightlines',
      'Sections 100-150 on the sidelines offer premium soccer views',
      'Consider club seats for indoor/outdoor flexibility',
      'LA traffic is brutal - plan to arrive 2+ hours early',
    ],
    sections: [
      { name: 'Field Level', priceRange: '$1000-$5000+', description: 'Premium seats closest to action' },
      { name: 'Lower Bowl', priceRange: '$500-$1500', description: 'Excellent views, popular choice' },
      { name: 'Upper Bowl', priceRange: '$200-$600', description: 'Affordable with full-field views' },
    ],
    keywords: ['SoFi Stadium World Cup tickets', 'World Cup Los Angeles tickets', 'World Cup LA tickets', 'FIFA 2026 SoFi', 'World Cup Final tickets'],
  },

  'hard-rock-stadium': {
    slug: 'hard-rock-stadium',
    name: 'Hard Rock Stadium',
    city: 'Miami Gardens',
    state: 'Florida',
    country: 'USA',
    capacity: 65326,
    description: 'Hard Rock Stadium in Miami Gardens hosts World Cup 2026 matches in one of America\'s most international cities. Home to the Dolphins and Inter Miami matches, the stadium features a unique canopy roof for shade in the Florida heat.',
    teams: ['Miami Dolphins', 'Inter Miami CF'],
    ticketTips: [
      'The canopy provides shade - check which sections are covered',
      'Lower bowl sideline sections offer best soccer views',
      'Miami heat can be intense - evening matches are more comfortable',
      'Strong Latin American fan presence expected for many matches',
    ],
    sections: [
      { name: 'Lower Bowl', priceRange: '$600-$2000+', description: 'Best views, partial shade coverage' },
      { name: 'Club Level', priceRange: '$800-$2500', description: 'Premium amenities and comfort' },
      { name: 'Upper Level', priceRange: '$150-$500', description: 'Budget option, full-field views' },
    ],
    keywords: ['Hard Rock Stadium World Cup tickets', 'World Cup Miami tickets', 'FIFA 2026 Miami', 'World Cup Florida tickets'],
  },

  'att-stadium': {
    slug: 'att-stadium',
    name: 'AT&T Stadium',
    city: 'Arlington',
    state: 'Texas',
    country: 'USA',
    capacity: 80000,
    description: 'AT&T Stadium in Arlington, Texas - known as "Jerry World" - features the world\'s largest column-free interior and a massive video board. Home to the Dallas Cowboys, this iconic venue will host World Cup 2026 matches.',
    teams: ['Dallas Cowboys'],
    ticketTips: [
      'The giant video board can obstruct views from some upper sections',
      'Lower bowl sidelines provide the best soccer experience',
      'The retractable roof keeps the stadium climate-controlled',
      'Located between Dallas and Fort Worth - plan for traffic',
    ],
    sections: [
      { name: 'Field Level', priceRange: '$800-$3000+', description: 'Closest to the action' },
      { name: 'Lower Bowl', priceRange: '$400-$1200', description: 'Great views, avoid end zones for soccer' },
      { name: 'Upper Level', priceRange: '$150-$500', description: 'Affordable, good for atmosphere' },
    ],
    keywords: ['AT&T Stadium World Cup tickets', 'World Cup Dallas tickets', 'World Cup Texas tickets', 'FIFA 2026 Dallas', 'Jerry World World Cup'],
  },

  'mercedes-benz-stadium': {
    slug: 'mercedes-benz-stadium',
    name: 'Mercedes-Benz Stadium',
    city: 'Atlanta',
    state: 'Georgia',
    country: 'USA',
    capacity: 71000,
    description: 'Mercedes-Benz Stadium in Atlanta features a stunning retractable roof and is home to Atlanta United, one of MLS\'s most passionate fanbases. The stadium\'s unique pinwheel roof design makes it an architectural marvel.',
    teams: ['Atlanta Falcons', 'Atlanta United FC'],
    ticketTips: [
      'Atlanta United has created a strong soccer culture here',
      'The Supporter Section brings incredible atmosphere',
      'Food and drinks are famously affordable compared to other venues',
      'MARTA train provides easy access to the stadium',
    ],
    sections: [
      { name: 'Lower Level', priceRange: '$500-$1800', description: 'Premium views for soccer' },
      { name: 'Club Level', priceRange: '$700-$2000', description: 'Added amenities and comfort' },
      { name: 'Upper Level', priceRange: '$150-$450', description: 'Great value, strong atmosphere' },
    ],
    keywords: ['Mercedes-Benz Stadium World Cup tickets', 'World Cup Atlanta tickets', 'FIFA 2026 Atlanta', 'World Cup Georgia tickets'],
  },

  'lumen-field': {
    slug: 'lumen-field',
    name: 'Lumen Field',
    city: 'Seattle',
    state: 'Washington',
    country: 'USA',
    capacity: 69000,
    description: 'Lumen Field in Seattle is known for having some of the loudest fans in sports. Home to the Seahawks and Sounders, the open-air stadium offers stunning views of the Seattle skyline and is a proven soccer venue.',
    teams: ['Seattle Seahawks', 'Seattle Sounders FC'],
    ticketTips: [
      'Seattle Sounders fans create an incredible soccer atmosphere',
      'The stadium is open-air - Seattle weather can be unpredictable',
      'Lower bowl sections along sidelines are ideal for soccer',
      'Easy access via light rail from downtown Seattle',
    ],
    sections: [
      { name: 'Lower Bowl', priceRange: '$500-$1500', description: 'Best soccer viewing experience' },
      { name: 'Club Level', priceRange: '$600-$1800', description: 'Premium amenities' },
      { name: 'Upper Bowl', priceRange: '$150-$400', description: 'Affordable with great atmosphere' },
    ],
    keywords: ['Lumen Field World Cup tickets', 'World Cup Seattle tickets', 'FIFA 2026 Seattle', 'World Cup Washington tickets'],
  },

  'levis-stadium': {
    slug: 'levis-stadium',
    name: 'Levi\'s Stadium',
    city: 'Santa Clara',
    state: 'California',
    country: 'USA',
    capacity: 68500,
    description: 'Levi\'s Stadium in the San Francisco Bay Area is a modern venue that has hosted Super Bowls and major soccer matches. Home to the 49ers, it offers excellent amenities and Silicon Valley convenience.',
    teams: ['San Francisco 49ers'],
    ticketTips: [
      'The west side gets afternoon sun - east side has shade',
      'Tech-forward stadium with excellent WiFi and mobile ordering',
      'VTA light rail provides direct access from San Jose',
      'Bay Area traffic can be challenging - use public transit',
    ],
    sections: [
      { name: 'Lower Bowl', priceRange: '$500-$1600', description: 'Premium soccer views' },
      { name: 'Club Seats', priceRange: '$700-$2000', description: 'Shade and amenities' },
      { name: 'Upper Level', priceRange: '$150-$450', description: 'Budget-friendly option' },
    ],
    keywords: ['Levi\'s Stadium World Cup tickets', 'World Cup San Francisco tickets', 'World Cup Bay Area tickets', 'FIFA 2026 San Francisco'],
  },

  'gillette-stadium': {
    slug: 'gillette-stadium',
    name: 'Gillette Stadium',
    city: 'Foxborough',
    state: 'Massachusetts',
    country: 'USA',
    capacity: 65878,
    description: 'Gillette Stadium near Boston hosts World Cup 2026 matches in New England. Home to the Patriots and Revolution, the stadium has a proven track record hosting international soccer including Copa America.',
    teams: ['New England Patriots', 'New England Revolution'],
    ticketTips: [
      'Located 30 miles from Boston - plan transportation carefully',
      'The Revolution have built a solid soccer fanbase here',
      'Lower bowl sidelines offer the best soccer sightlines',
      'Patriot Place offers dining and entertainment nearby',
    ],
    sections: [
      { name: 'Lower Bowl', priceRange: '$450-$1400', description: 'Best views for soccer' },
      { name: 'Club Level', priceRange: '$600-$1600', description: 'Premium experience' },
      { name: 'Upper Level', priceRange: '$125-$400', description: 'Value seating' },
    ],
    keywords: ['Gillette Stadium World Cup tickets', 'World Cup Boston tickets', 'FIFA 2026 Boston', 'World Cup New England tickets'],
  },

  'lincoln-financial-field': {
    slug: 'lincoln-financial-field',
    name: 'Lincoln Financial Field',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    country: 'USA',
    capacity: 69796,
    description: 'Lincoln Financial Field in Philadelphia - "The Linc" - brings World Cup 2026 to the City of Brotherly Love. Home to the Eagles, this stadium is known for its passionate fanbase and excellent sightlines.',
    teams: ['Philadelphia Eagles'],
    ticketTips: [
      'Philly fans are passionate - expect incredible atmosphere',
      'Lower level sidelines are ideal for soccer viewing',
      'Easy access via SEPTA subway from Center City',
      'The stadium is open-air - check weather forecasts',
    ],
    sections: [
      { name: 'Lower Level', priceRange: '$450-$1400', description: 'Closest to the pitch' },
      { name: 'Club Level', priceRange: '$600-$1600', description: 'Added comfort and amenities' },
      { name: 'Upper Level', priceRange: '$125-$400', description: 'Affordable seating' },
    ],
    keywords: ['Lincoln Financial Field World Cup tickets', 'World Cup Philadelphia tickets', 'FIFA 2026 Philadelphia', 'World Cup Philly tickets'],
  },

  'nrg-stadium': {
    slug: 'nrg-stadium',
    name: 'NRG Stadium',
    city: 'Houston',
    state: 'Texas',
    country: 'USA',
    capacity: 72220,
    description: 'NRG Stadium in Houston features a retractable roof perfect for escaping Texas heat. Home to the Texans, this venue has hosted Super Bowls, Final Fours, and major soccer events.',
    teams: ['Houston Texans'],
    ticketTips: [
      'Retractable roof keeps the stadium climate-controlled',
      'Houston has a large international community - diverse crowds expected',
      'Lower bowl provides best soccer views',
      'METRORail provides access from downtown Houston',
    ],
    sections: [
      { name: 'Lower Bowl', priceRange: '$450-$1400', description: 'Premium soccer viewing' },
      { name: 'Club Level', priceRange: '$600-$1600', description: 'Climate-controlled comfort' },
      { name: 'Upper Level', priceRange: '$125-$400', description: 'Budget-friendly option' },
    ],
    keywords: ['NRG Stadium World Cup tickets', 'World Cup Houston tickets', 'FIFA 2026 Houston', 'World Cup Texas tickets'],
  },

  'arrowhead-stadium': {
    slug: 'arrowhead-stadium',
    name: 'Arrowhead Stadium',
    city: 'Kansas City',
    state: 'Missouri',
    country: 'USA',
    capacity: 76416,
    description: 'Arrowhead Stadium in Kansas City is legendary for its atmosphere and noise. Home to the Chiefs, this stadium brings World Cup 2026 to the heartland of America with passionate Midwest fans.',
    teams: ['Kansas City Chiefs'],
    ticketTips: [
      'Chiefs fans create one of the loudest atmospheres in sports',
      'BBQ tailgating is a Kansas City tradition - arrive early',
      'Lower bowl sidelines offer best soccer views',
      'The stadium is open-air - Kansas City weather varies widely',
    ],
    sections: [
      { name: 'Lower Level', priceRange: '$400-$1300', description: 'Closest to the action' },
      { name: 'Club Level', priceRange: '$550-$1500', description: 'Premium amenities' },
      { name: 'Upper Level', priceRange: '$100-$350', description: 'Great value seating' },
    ],
    keywords: ['Arrowhead Stadium World Cup tickets', 'World Cup Kansas City tickets', 'FIFA 2026 Kansas City', 'World Cup Missouri tickets'],
  },

  // ========== CANADA VENUES (2) ==========
  'bmo-field': {
    slug: 'bmo-field',
    name: 'BMO Field',
    city: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    capacity: 45500,
    description: 'BMO Field in Toronto is Canada\'s premier soccer-specific stadium. Home to Toronto FC, this venue was built for soccer and will be expanded for World Cup 2026.',
    teams: ['Toronto FC', 'Toronto Argonauts'],
    ticketTips: [
      'Purpose-built for soccer - excellent sightlines throughout',
      'Smaller capacity means tickets may be harder to get',
      'TTC streetcar provides direct access to the stadium',
      'Located on the waterfront with great city views',
    ],
    sections: [
      { name: 'Lower Bowl', priceRange: '$500-$1500 CAD', description: 'Premium soccer viewing' },
      { name: 'Upper Bowl', priceRange: '$200-$600 CAD', description: 'Great views, good value' },
    ],
    keywords: ['BMO Field World Cup tickets', 'World Cup Toronto tickets', 'FIFA 2026 Toronto', 'World Cup Canada tickets'],
  },

  'bc-place': {
    slug: 'bc-place',
    name: 'BC Place',
    city: 'Vancouver',
    state: 'British Columbia',
    country: 'Canada',
    capacity: 54500,
    description: 'BC Place in Vancouver features a retractable roof and stunning views of the mountains. Home to the Whitecaps and BC Lions, this versatile stadium will host World Cup 2026 matches.',
    teams: ['Vancouver Whitecaps FC', 'BC Lions'],
    ticketTips: [
      'Retractable roof protects from Vancouver rain',
      'Whitecaps have strong supporter culture',
      'SkyTrain provides easy access from downtown',
      'Mountain views visible from some sections',
    ],
    sections: [
      { name: 'Lower Bowl', priceRange: '$450-$1400 CAD', description: 'Closest to the pitch' },
      { name: 'Upper Bowl', priceRange: '$175-$500 CAD', description: 'Affordable with great views' },
    ],
    keywords: ['BC Place World Cup tickets', 'World Cup Vancouver tickets', 'FIFA 2026 Vancouver', 'World Cup Canada tickets'],
  },

  // ========== MEXICO VENUES (3) ==========
  'estadio-azteca': {
    slug: 'estadio-azteca',
    name: 'Estadio Azteca',
    city: 'Mexico City',
    state: 'CDMX',
    country: 'Mexico',
    capacity: 87523,
    description: 'Estadio Azteca is the legendary home of Mexican football and the only stadium to host two World Cup Finals (1970, 1986). This historic venue will make history again at the 2026 World Cup.',
    teams: ['Club América', 'Cruz Azul', 'Mexico National Team'],
    ticketTips: [
      'Historic venue - the atmosphere is unmatched',
      'Altitude of 7,200 feet affects players and fans',
      'Lower sections provide best views but can get very crowded',
      'Metro provides access but expect large crowds',
    ],
    sections: [
      { name: 'Lower Bowl', priceRange: '$400-$1500 MXN', description: 'Legendary lower sections' },
      { name: 'Upper Bowl', priceRange: '$150-$500 MXN', description: 'Budget option, incredible atmosphere' },
    ],
    keywords: ['Estadio Azteca World Cup tickets', 'World Cup Mexico City tickets', 'FIFA 2026 Mexico', 'Azteca Stadium tickets'],
  },

  'estadio-akron': {
    slug: 'estadio-akron',
    name: 'Estadio Akron',
    city: 'Guadalajara',
    state: 'Jalisco',
    country: 'Mexico',
    capacity: 49850,
    description: 'Estadio Akron in Guadalajara is one of Mexico\'s most modern stadiums. Home to Chivas, this volcanic rock-designed venue will bring World Cup 2026 to Mexico\'s second-largest city.',
    teams: ['C.D. Guadalajara (Chivas)'],
    ticketTips: [
      'Modern stadium with excellent facilities',
      'Chivas fans are among the most passionate in Mexico',
      'The unique architecture provides good sightlines',
      'Located outside city center - plan transportation',
    ],
    sections: [
      { name: 'Lower Level', priceRange: '$350-$1200 MXN', description: 'Premium viewing' },
      { name: 'Upper Level', priceRange: '$125-$400 MXN', description: 'Good value seats' },
    ],
    keywords: ['Estadio Akron World Cup tickets', 'World Cup Guadalajara tickets', 'FIFA 2026 Guadalajara', 'Chivas Stadium World Cup'],
  },

  'estadio-bbva': {
    slug: 'estadio-bbva',
    name: 'Estadio BBVA',
    city: 'Monterrey',
    state: 'Nuevo León',
    country: 'Mexico',
    capacity: 53500,
    description: 'Estadio BBVA in Monterrey is a stunning modern stadium nestled against the Sierra Madre mountains. Home to Tigres UANL, this venue combines world-class facilities with breathtaking scenery.',
    teams: ['Tigres UANL'],
    ticketTips: [
      'Mountain backdrop makes for spectacular photos',
      'Tigres fans create an electric atmosphere',
      'Modern amenities throughout the stadium',
      'Monterrey summers are hot - evening matches preferred',
    ],
    sections: [
      { name: 'Lower Level', priceRange: '$350-$1200 MXN', description: 'Best views of pitch and mountains' },
      { name: 'Upper Level', priceRange: '$125-$400 MXN', description: 'Affordable with panoramic views' },
    ],
    keywords: ['Estadio BBVA World Cup tickets', 'World Cup Monterrey tickets', 'FIFA 2026 Monterrey', 'Tigres Stadium World Cup'],
  },
};

// Host cities grouped by country
export const worldCupCities = {
  usa: [
    { city: 'New York', venue: 'metlife-stadium', state: 'NJ' },
    { city: 'Los Angeles', venue: 'sofi-stadium', state: 'CA' },
    { city: 'Miami', venue: 'hard-rock-stadium', state: 'FL' },
    { city: 'Dallas', venue: 'att-stadium', state: 'TX' },
    { city: 'Atlanta', venue: 'mercedes-benz-stadium', state: 'GA' },
    { city: 'Seattle', venue: 'lumen-field', state: 'WA' },
    { city: 'San Francisco', venue: 'levis-stadium', state: 'CA' },
    { city: 'Boston', venue: 'gillette-stadium', state: 'MA' },
    { city: 'Philadelphia', venue: 'lincoln-financial-field', state: 'PA' },
    { city: 'Houston', venue: 'nrg-stadium', state: 'TX' },
    { city: 'Kansas City', venue: 'arrowhead-stadium', state: 'MO' },
  ],
  canada: [
    { city: 'Toronto', venue: 'bmo-field', state: 'ON' },
    { city: 'Vancouver', venue: 'bc-place', state: 'BC' },
  ],
  mexico: [
    { city: 'Mexico City', venue: 'estadio-azteca', state: 'CDMX' },
    { city: 'Guadalajara', venue: 'estadio-akron', state: 'Jalisco' },
    { city: 'Monterrey', venue: 'estadio-bbva', state: 'Nuevo León' },
  ],
};

// Key dates for 2026 World Cup
export const worldCupDates = {
  tournamentStart: '2026-06-11',
  tournamentEnd: '2026-07-19',
  groupStage: { start: '2026-06-11', end: '2026-06-28' },
  roundOf32: { start: '2026-06-29', end: '2026-07-02' },
  roundOf16: { start: '2026-07-03', end: '2026-07-06' },
  quarterFinals: { start: '2026-07-09', end: '2026-07-10' },
  semiFinals: { start: '2026-07-14', end: '2026-07-15' },
  thirdPlace: '2026-07-18',
  final: '2026-07-19',
  ticketSalesStart: '2025-Q4', // Estimated
};

// Match Schedule (Placeholder - actual schedule TBD by FIFA)
export interface WorldCupMatch {
  id: string;
  date: string;
  time: string;
  venue: string;
  round: 'Group Stage' | 'Round of 32' | 'Round of 16' | 'Quarter-Final' | 'Semi-Final' | 'Third Place' | 'Final';
  matchNumber: number;
  team1?: string;
  team2?: string;
  group?: string;
}

export const worldCupSchedule: WorldCupMatch[] = [
  // ========== GROUP STAGE - WEEK 1 ==========
  // June 11 - Opening Day
  { id: 'M1', date: '2026-06-11', time: '20:00', venue: 'estadio-azteca', round: 'Group Stage', matchNumber: 1, team1: 'Mexico', team2: 'TBD', group: 'A' },

  // June 12
  { id: 'M2', date: '2026-06-12', time: '13:00', venue: 'hard-rock-stadium', round: 'Group Stage', matchNumber: 2, group: 'A' },
  { id: 'M3', date: '2026-06-12', time: '16:00', venue: 'metlife-stadium', round: 'Group Stage', matchNumber: 3, group: 'B' },
  { id: 'M4', date: '2026-06-12', time: '19:00', venue: 'sofi-stadium', round: 'Group Stage', matchNumber: 4, group: 'B' },
  { id: 'M5', date: '2026-06-12', time: '22:00', venue: 'att-stadium', round: 'Group Stage', matchNumber: 5, group: 'C' },

  // June 13
  { id: 'M6', date: '2026-06-13', time: '13:00', venue: 'mercedes-benz-stadium', round: 'Group Stage', matchNumber: 6, group: 'C' },
  { id: 'M7', date: '2026-06-13', time: '16:00', venue: 'lumen-field', round: 'Group Stage', matchNumber: 7, group: 'D' },
  { id: 'M8', date: '2026-06-13', time: '19:00', venue: 'bc-place', round: 'Group Stage', matchNumber: 8, group: 'D' },
  { id: 'M9', date: '2026-06-13', time: '22:00', venue: 'nrg-stadium', round: 'Group Stage', matchNumber: 9, group: 'E' },

  // June 14
  { id: 'M10', date: '2026-06-14', time: '13:00', venue: 'lincoln-financial-field', round: 'Group Stage', matchNumber: 10, group: 'E' },
  { id: 'M11', date: '2026-06-14', time: '16:00', venue: 'gillette-stadium', round: 'Group Stage', matchNumber: 11, group: 'F' },
  { id: 'M12', date: '2026-06-14', time: '19:00', venue: 'bmo-field', round: 'Group Stage', matchNumber: 12, team1: 'Canada', team2: 'TBD', group: 'F' },
  { id: 'M13', date: '2026-06-14', time: '22:00', venue: 'arrowhead-stadium', round: 'Group Stage', matchNumber: 13, group: 'G' },

  // June 15
  { id: 'M14', date: '2026-06-15', time: '13:00', venue: 'levis-stadium', round: 'Group Stage', matchNumber: 14, group: 'G' },
  { id: 'M15', date: '2026-06-15', time: '16:00', venue: 'estadio-bbva', round: 'Group Stage', matchNumber: 15, group: 'H' },
  { id: 'M16', date: '2026-06-15', time: '19:00', venue: 'estadio-akron', round: 'Group Stage', matchNumber: 16, group: 'H' },
  { id: 'M17', date: '2026-06-15', time: '22:00', venue: 'metlife-stadium', round: 'Group Stage', matchNumber: 17, team1: 'USA', team2: 'TBD', group: 'I' },

  // June 16
  { id: 'M18', date: '2026-06-16', time: '13:00', venue: 'sofi-stadium', round: 'Group Stage', matchNumber: 18, group: 'I' },
  { id: 'M19', date: '2026-06-16', time: '16:00', venue: 'hard-rock-stadium', round: 'Group Stage', matchNumber: 19, group: 'J' },
  { id: 'M20', date: '2026-06-16', time: '19:00', venue: 'att-stadium', round: 'Group Stage', matchNumber: 20, group: 'J' },
  { id: 'M21', date: '2026-06-16', time: '22:00', venue: 'mercedes-benz-stadium', round: 'Group Stage', matchNumber: 21, group: 'K' },

  // June 17
  { id: 'M22', date: '2026-06-17', time: '13:00', venue: 'lumen-field', round: 'Group Stage', matchNumber: 22, group: 'K' },
  { id: 'M23', date: '2026-06-17', time: '16:00', venue: 'nrg-stadium', round: 'Group Stage', matchNumber: 23, group: 'L' },
  { id: 'M24', date: '2026-06-17', time: '19:00', venue: 'estadio-azteca', round: 'Group Stage', matchNumber: 24, group: 'L' },

  // ========== GROUP STAGE - WEEK 2 (Matchday 2) ==========
  // June 18-21
  { id: 'M25', date: '2026-06-18', time: '16:00', venue: 'lincoln-financial-field', round: 'Group Stage', matchNumber: 25, group: 'A' },
  { id: 'M26', date: '2026-06-18', time: '19:00', venue: 'arrowhead-stadium', round: 'Group Stage', matchNumber: 26, group: 'A' },
  { id: 'M27', date: '2026-06-18', time: '22:00', venue: 'gillette-stadium', round: 'Group Stage', matchNumber: 27, group: 'B' },

  { id: 'M28', date: '2026-06-19', time: '13:00', venue: 'bc-place', round: 'Group Stage', matchNumber: 28, group: 'B' },
  { id: 'M29', date: '2026-06-19', time: '16:00', venue: 'levis-stadium', round: 'Group Stage', matchNumber: 29, group: 'C' },
  { id: 'M30', date: '2026-06-19', time: '19:00', venue: 'estadio-bbva', round: 'Group Stage', matchNumber: 30, group: 'C' },
  { id: 'M31', date: '2026-06-19', time: '22:00', venue: 'bmo-field', round: 'Group Stage', matchNumber: 31, group: 'D' },

  { id: 'M32', date: '2026-06-20', time: '13:00', venue: 'estadio-akron', round: 'Group Stage', matchNumber: 32, group: 'D' },
  { id: 'M33', date: '2026-06-20', time: '16:00', venue: 'metlife-stadium', round: 'Group Stage', matchNumber: 33, group: 'E' },
  { id: 'M34', date: '2026-06-20', time: '19:00', venue: 'sofi-stadium', round: 'Group Stage', matchNumber: 34, group: 'E' },
  { id: 'M35', date: '2026-06-20', time: '22:00', venue: 'hard-rock-stadium', round: 'Group Stage', matchNumber: 35, group: 'F' },

  { id: 'M36', date: '2026-06-21', time: '13:00', venue: 'att-stadium', round: 'Group Stage', matchNumber: 36, group: 'F' },
  { id: 'M37', date: '2026-06-21', time: '16:00', venue: 'mercedes-benz-stadium', round: 'Group Stage', matchNumber: 37, group: 'G' },
  { id: 'M38', date: '2026-06-21', time: '19:00', venue: 'lumen-field', round: 'Group Stage', matchNumber: 38, group: 'G' },
  { id: 'M39', date: '2026-06-21', time: '22:00', venue: 'nrg-stadium', round: 'Group Stage', matchNumber: 39, group: 'H' },

  // ========== GROUP STAGE - WEEK 3 (Matchday 3) ==========
  // June 25-28
  { id: 'M49', date: '2026-06-25', time: '16:00', venue: 'estadio-azteca', round: 'Group Stage', matchNumber: 49, group: 'A' },
  { id: 'M50', date: '2026-06-25', time: '16:00', venue: 'hard-rock-stadium', round: 'Group Stage', matchNumber: 50, group: 'A' },
  { id: 'M51', date: '2026-06-25', time: '20:00', venue: 'metlife-stadium', round: 'Group Stage', matchNumber: 51, group: 'B' },
  { id: 'M52', date: '2026-06-25', time: '20:00', venue: 'sofi-stadium', round: 'Group Stage', matchNumber: 52, group: 'B' },

  { id: 'M53', date: '2026-06-26', time: '16:00', venue: 'att-stadium', round: 'Group Stage', matchNumber: 53, group: 'C' },
  { id: 'M54', date: '2026-06-26', time: '16:00', venue: 'mercedes-benz-stadium', round: 'Group Stage', matchNumber: 54, group: 'C' },
  { id: 'M55', date: '2026-06-26', time: '20:00', venue: 'lumen-field', round: 'Group Stage', matchNumber: 55, group: 'D' },
  { id: 'M56', date: '2026-06-26', time: '20:00', venue: 'bc-place', round: 'Group Stage', matchNumber: 56, group: 'D' },

  { id: 'M57', date: '2026-06-27', time: '16:00', venue: 'nrg-stadium', round: 'Group Stage', matchNumber: 57, group: 'E' },
  { id: 'M58', date: '2026-06-27', time: '16:00', venue: 'lincoln-financial-field', round: 'Group Stage', matchNumber: 58, group: 'E' },
  { id: 'M59', date: '2026-06-27', time: '20:00', venue: 'gillette-stadium', round: 'Group Stage', matchNumber: 59, group: 'F' },
  { id: 'M60', date: '2026-06-27', time: '20:00', venue: 'bmo-field', round: 'Group Stage', matchNumber: 60, group: 'F' },

  { id: 'M61', date: '2026-06-28', time: '16:00', venue: 'arrowhead-stadium', round: 'Group Stage', matchNumber: 61, group: 'G' },
  { id: 'M62', date: '2026-06-28', time: '16:00', venue: 'levis-stadium', round: 'Group Stage', matchNumber: 62, group: 'G' },
  { id: 'M63', date: '2026-06-28', time: '20:00', venue: 'estadio-bbva', round: 'Group Stage', matchNumber: 63, group: 'H' },
  { id: 'M64', date: '2026-06-28', time: '20:00', venue: 'estadio-akron', round: 'Group Stage', matchNumber: 64, group: 'H' },

  // ========== KNOCKOUT ROUNDS ==========
  // Round of 32 - June 29 - July 2
  { id: 'R32-1', date: '2026-06-29', time: '16:00', venue: 'metlife-stadium', round: 'Round of 32', matchNumber: 65 },
  { id: 'R32-2', date: '2026-06-29', time: '20:00', venue: 'sofi-stadium', round: 'Round of 32', matchNumber: 66 },
  { id: 'R32-3', date: '2026-06-30', time: '16:00', venue: 'att-stadium', round: 'Round of 32', matchNumber: 67 },
  { id: 'R32-4', date: '2026-06-30', time: '20:00', venue: 'hard-rock-stadium', round: 'Round of 32', matchNumber: 68 },
  { id: 'R32-5', date: '2026-07-01', time: '16:00', venue: 'mercedes-benz-stadium', round: 'Round of 32', matchNumber: 69 },
  { id: 'R32-6', date: '2026-07-01', time: '20:00', venue: 'estadio-azteca', round: 'Round of 32', matchNumber: 70 },
  { id: 'R32-7', date: '2026-07-02', time: '16:00', venue: 'lumen-field', round: 'Round of 32', matchNumber: 71 },
  { id: 'R32-8', date: '2026-07-02', time: '20:00', venue: 'bc-place', round: 'Round of 32', matchNumber: 72 },

  // Round of 16 - July 3-6
  { id: 'R16-1', date: '2026-07-03', time: '16:00', venue: 'metlife-stadium', round: 'Round of 16', matchNumber: 73 },
  { id: 'R16-2', date: '2026-07-03', time: '20:00', venue: 'sofi-stadium', round: 'Round of 16', matchNumber: 74 },
  { id: 'R16-3', date: '2026-07-04', time: '16:00', venue: 'att-stadium', round: 'Round of 16', matchNumber: 75 },
  { id: 'R16-4', date: '2026-07-04', time: '20:00', venue: 'hard-rock-stadium', round: 'Round of 16', matchNumber: 76 },
  { id: 'R16-5', date: '2026-07-05', time: '16:00', venue: 'estadio-azteca', round: 'Round of 16', matchNumber: 77 },
  { id: 'R16-6', date: '2026-07-05', time: '20:00', venue: 'mercedes-benz-stadium', round: 'Round of 16', matchNumber: 78 },
  { id: 'R16-7', date: '2026-07-06', time: '16:00', venue: 'nrg-stadium', round: 'Round of 16', matchNumber: 79 },
  { id: 'R16-8', date: '2026-07-06', time: '20:00', venue: 'arrowhead-stadium', round: 'Round of 16', matchNumber: 80 },

  // Quarter-Finals - July 9-10
  { id: 'QF-1', date: '2026-07-09', time: '16:00', venue: 'sofi-stadium', round: 'Quarter-Final', matchNumber: 81 },
  { id: 'QF-2', date: '2026-07-09', time: '20:00', venue: 'metlife-stadium', round: 'Quarter-Final', matchNumber: 82 },
  { id: 'QF-3', date: '2026-07-10', time: '16:00', venue: 'att-stadium', round: 'Quarter-Final', matchNumber: 83 },
  { id: 'QF-4', date: '2026-07-10', time: '20:00', venue: 'estadio-azteca', round: 'Quarter-Final', matchNumber: 84 },

  // Semi-Finals - July 14-15
  { id: 'SF-1', date: '2026-07-14', time: '20:00', venue: 'metlife-stadium', round: 'Semi-Final', matchNumber: 85 },
  { id: 'SF-2', date: '2026-07-15', time: '20:00', venue: 'sofi-stadium', round: 'Semi-Final', matchNumber: 86 },

  // Third Place - July 18
  { id: 'TP', date: '2026-07-18', time: '16:00', venue: 'hard-rock-stadium', round: 'Third Place', matchNumber: 87 },

  // Final - July 19
  { id: 'F', date: '2026-07-19', time: '16:00', venue: 'metlife-stadium', round: 'Final', matchNumber: 88 },
];

// Helper function to get matches by date
export function getMatchesByDate(date: string): WorldCupMatch[] {
  return worldCupSchedule.filter(match => match.date === date);
}

// Helper function to get matches by venue
export function getMatchesByVenue(venueSlug: string): WorldCupMatch[] {
  return worldCupSchedule.filter(match => match.venue === venueSlug);
}

// Helper function to get matches by round
export function getMatchesByRound(round: WorldCupMatch['round']): WorldCupMatch[] {
  return worldCupSchedule.filter(match => match.round === round);
}

// Get all unique dates with matches
export function getScheduleDates(): string[] {
  const dates = [...new Set(worldCupSchedule.map(match => match.date))];
  return dates.sort();
}

// Teams qualified or likely to qualify
export const featuredTeams = [
  { name: 'USA', flag: '🇺🇸', group: 'Host' },
  { name: 'Mexico', flag: '🇲🇽', group: 'Host' },
  { name: 'Canada', flag: '🇨🇦', group: 'Host' },
  { name: 'Argentina', flag: '🇦🇷', group: 'Defending Champion' },
  { name: 'France', flag: '🇫🇷', group: 'Contender' },
  { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'Contender' },
  { name: 'Brazil', flag: '🇧🇷', group: 'Contender' },
  { name: 'Germany', flag: '🇩🇪', group: 'Contender' },
  { name: 'Spain', flag: '🇪🇸', group: 'Contender' },
];
