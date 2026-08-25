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
    description: 'The 20,000-seat home of the Orlando Magic also hosts a busy mix of arena concerts, family shows, combat sports, and special events. For Magic games, the 100 level brings you close to the court while the 200 level is usually the practical value tier; concert layouts can change the map. TicketScan tracks when tickets for Kia Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Kia Center tickets', 'Orlando Magic tickets', 'Kia Center seating chart', 'Kia Center events 2026', 'Orlando concert tickets', 'Ricardo Montaner Orlando tickets', 'Rosalia Orlando tickets', 'Grupo Frontera Orlando tickets', 'Gorillaz Orlando tickets', 'Omar Courtz Orlando tickets', 'Disney On Ice Orlando tickets'],
    faqs: [
      { question: 'What are the best value seats at Kia Center?', answer: 'For many Orlando Magic games, the 200 level offers a useful full-court view at a lower price than the 100 level. For concerts and family shows, the event-specific map matters because the floor and stage layout can change.' },
    ],
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
    description: 'The 19,600-seat arena is home to the Miami HEAT and a busy stop for Latin music, pop, and hip-hop tours. For HEAT games, the 100 level puts you close to the court while the 300 level is usually the practical value tier; concert floor plans can change the section map. TicketScan tracks when tickets for Kaseya Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Kaseya Center tickets', 'Miami Heat tickets', 'Kaseya Center seating chart', 'Kaseya Center events 2026', 'Kaseya Center concerts', 'Don Toliver Miami tickets', 'Rosalia Miami tickets', 'Gorillaz Miami tickets', 'FTX Arena tickets'],
    faqs: [
      { question: 'What are the best value seats at Kaseya Center?', answer: 'For many Miami HEAT games, the 300 level offers the most practical budget view, while 100-level seats put you closer to the court.' },
    ],
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
    description: 'Madison Square Garden sits directly above Pennsylvania Station in Midtown Manhattan, on the site of the original station that was demolished to build it, and has been home to the Knicks and Rangers since it opened in February 1968. The building is essentially circular, with a roof suspended on steel cables from a perimeter compression ring, and the arena floor sits several stories above street level - you ride escalators up from the Seventh Avenue entrance rather than walking in at court level. Seating runs from the lower bowl through suite and club levels to the upper bowl, and a renovation completed in 2013 added the bridge-level walkways suspended over the seating bowl. Because the Garden is built on top of Penn Station, it is one of the easiest arenas in the country to reach without a car: Long Island Rail Road, NJ Transit, Amtrak and several subway lines all arrive underneath it. TicketScan tracks when tickets for Madison Square Garden events go on sale, including presale windows that open before the public onsale.',
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
    homeTeams: ['Los Angeles Lakers', 'LA Kings', 'Los Angeles Sparks'],
    description: 'Crypto.com Arena opened in downtown Los Angeles in October 1999 as Staples Center, the name many Angelenos still use, and was renamed in 2021. Designed by NBBJ, it anchors the L.A. Live complex next to the Los Angeles Convention Center on Figueroa Street. The Lakers, Kings and Sparks all play here; the Clippers shared the building from 1999 until moving to their own arena in 2024, so older seating guides and listings may still describe it as a three-team arena. About two-thirds of the seating is in the lower level, which makes the bowl feel closer to the floor than its capacity suggests. Seating is arranged as a lower level, premium and suite levels, and an upper level. A multi-phase renovation begun in 2022 replaced the video and ribbon displays and reworked the concourses. Downtown parking fills early on event nights, and Metro rail stops within a short walk of the arena. TicketScan tracks when tickets for Crypto.com Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Crypto.com Arena tickets', 'Lakers tickets', 'LA Kings tickets', 'LA Sparks tickets', 'Staples Center tickets', 'Crypto.com Arena seating chart', 'LA concert tickets'],
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
    description: 'The 100-level lower bowl (sections 101 to 122) wraps around the court and ice, while the 300-level upper bowl (sections 301 to 330) is often the practical value tier. TicketScan tracks when tickets for United Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['United Center tickets', 'Bulls tickets', 'Blackhawks tickets', 'United Center seating chart', 'United Center concerts 2026', 'United Center events', 'United Center upper level seats', 'Chicago arena tickets', 'Chicago concert tickets', 'Blackhawks tickets Chicago', 'Kacey Musgraves Chicago tickets', 'Bulls Fest 2026 tickets', 'Omar Courtz Chicago tickets', 'Jungle Chicago tickets', 'Eric Clapton Chicago tickets'],
    faqs: [
      { question: 'What is the best value seating section at United Center?', answer: 'For many basketball games, the 300-level sections offer the widest view for the money.' },
      { question: 'Does United Center have Bulls and Blackhawks tickets?', answer: 'Yes. United Center is home to both the Chicago Bulls and Chicago Blackhawks, in addition to concerts, WNBA games, and other major events.' },
    ],
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
    description: 'Home of the Celtics and Bruins, TD Garden hosts over 200 events per year including NBA and NHL games, major concert tours, UFC fights, and Disney on Ice. The arena sits above North Station in downtown Boston, making it one of the most transit-accessible venues in the country. Loge and balcony sections offer strong sightlines, while club seats include lounge access. TicketScan tracks when tickets for TD Garden events go on sale, including presale windows that open before the public onsale.',
    keywords: ['TD Garden tickets', 'Celtics tickets', 'Bruins tickets', 'Boston arena tickets', 'TD Garden seating chart', 'Boston concert tickets', 'Celtics playoff tickets', 'Bruins playoff tickets', 'TD Garden events'],
    sections: [
      // Floor / Courtside (Loge 1)
      { name: 'Floor', tier: 'floor' },
      // Loge (Lower Bowl)
      { name: 'Loge 1', tier: 'lower' }, { name: 'Loge 2', tier: 'lower' }, { name: 'Loge 3', tier: 'lower' },
      { name: 'Loge 4', tier: 'lower' }, { name: 'Loge 5', tier: 'lower' }, { name: 'Loge 6', tier: 'lower' },
      { name: 'Loge 7', tier: 'lower' }, { name: 'Loge 8', tier: 'lower' }, { name: 'Loge 9', tier: 'lower' },
      { name: 'Loge 10', tier: 'lower' }, { name: 'Loge 11', tier: 'lower' }, { name: 'Loge 12', tier: 'lower' },
      { name: 'Loge 13', tier: 'lower' }, { name: 'Loge 14', tier: 'lower' }, { name: 'Loge 15', tier: 'lower' },
      { name: 'Loge 16', tier: 'lower' }, { name: 'Loge 17', tier: 'lower' }, { name: 'Loge 18', tier: 'lower' },
      { name: 'Loge 19', tier: 'lower' }, { name: 'Loge 20', tier: 'lower' }, { name: 'Loge 21', tier: 'lower' },
      { name: 'Loge 22', tier: 'lower' },
      // Club Level
      { name: 'Club 101', tier: 'club' }, { name: 'Club 102', tier: 'club' }, { name: 'Club 103', tier: 'club' },
      { name: 'Club 104', tier: 'club' }, { name: 'Club 105', tier: 'club' }, { name: 'Club 106', tier: 'club' },
      { name: 'Club 107', tier: 'club' }, { name: 'Club 108', tier: 'club' }, { name: 'Club 109', tier: 'club' },
      { name: 'Club 110', tier: 'club' },
      // Balcony (Upper Bowl)
      { name: 'BAL 301', tier: 'upper' }, { name: 'BAL 302', tier: 'upper' }, { name: 'BAL 303', tier: 'upper' },
      { name: 'BAL 304', tier: 'upper' }, { name: 'BAL 305', tier: 'upper' }, { name: 'BAL 306', tier: 'upper' },
      { name: 'BAL 307', tier: 'upper' }, { name: 'BAL 308', tier: 'upper' }, { name: 'BAL 309', tier: 'upper' },
      { name: 'BAL 310', tier: 'upper' }, { name: 'BAL 311', tier: 'upper' }, { name: 'BAL 312', tier: 'upper' },
      { name: 'BAL 313', tier: 'upper' }, { name: 'BAL 314', tier: 'upper' }, { name: 'BAL 315', tier: 'upper' },
      { name: 'BAL 316', tier: 'upper' }, { name: 'BAL 317', tier: 'upper' }, { name: 'BAL 318', tier: 'upper' },
      { name: 'BAL 319', tier: 'upper' }, { name: 'BAL 320', tier: 'upper' }, { name: 'BAL 321', tier: 'upper' },
      { name: 'BAL 322', tier: 'upper' }, { name: 'BAL 323', tier: 'upper' }, { name: 'BAL 324', tier: 'upper' },
      { name: 'BAL 325', tier: 'upper' }, { name: 'BAL 326', tier: 'upper' }, { name: 'BAL 327', tier: 'upper' },
      { name: 'BAL 328', tier: 'upper' }, { name: 'BAL 329', tier: 'upper' }, { name: 'BAL 330', tier: 'upper' },
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
    description: 'Home of both the 76ers and Flyers, the arena hosts over 250 NBA games, NHL games, concerts, and family shows each year in the heart of the South Philly Sports Complex alongside Citizens Bank Park and Lincoln Financial Field. Lower-level sections wrap the bowl from 101 to 124, while the mezzanine club level offers padded seating with in-seat service. Upper-level sections 201 through 224 are among the best value seats in the NBA and NHL. TicketScan tracks when tickets for Wells Fargo Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Wells Fargo Center tickets', '76ers tickets', 'Flyers tickets', 'Philadelphia arena tickets', 'Wells Fargo Center seating chart', 'Philadelphia concert tickets', '76ers playoff tickets', 'Flyers playoff tickets', 'Wells Fargo Center events'],
    sections: [
      // Floor / Courtside
      { name: 'Floor', tier: 'floor' },
      // Lower Bowl (100 level)
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '119', tier: 'lower' }, { name: '120', tier: 'lower' }, { name: '121', tier: 'lower' },
      { name: '122', tier: 'lower' }, { name: '123', tier: 'lower' }, { name: '124', tier: 'lower' },
      // Club Level (Mezzanine)
      { name: 'Club 1', tier: 'club' }, { name: 'Club 2', tier: 'club' }, { name: 'Club 3', tier: 'club' },
      { name: 'Club 4', tier: 'club' }, { name: 'Club 5', tier: 'club' }, { name: 'Club 6', tier: 'club' },
      { name: 'Club 7', tier: 'club' }, { name: 'Club 8', tier: 'club' }, { name: 'Club 9', tier: 'club' },
      { name: 'Club 10', tier: 'club' }, { name: 'Club 11', tier: 'club' }, { name: 'Club 12', tier: 'club' },
      // Upper Bowl (200 level)
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
      { name: '204', tier: 'upper' }, { name: '205', tier: 'upper' }, { name: '206', tier: 'upper' },
      { name: '207', tier: 'upper' }, { name: '208', tier: 'upper' }, { name: '209', tier: 'upper' },
      { name: '210', tier: 'upper' }, { name: '211', tier: 'upper' }, { name: '212', tier: 'upper' },
      { name: '213', tier: 'upper' }, { name: '214', tier: 'upper' }, { name: '215', tier: 'upper' },
      { name: '216', tier: 'upper' }, { name: '217', tier: 'upper' }, { name: '218', tier: 'upper' },
      { name: '219', tier: 'upper' }, { name: '220', tier: 'upper' }, { name: '221', tier: 'upper' },
      { name: '222', tier: 'upper' }, { name: '223', tier: 'upper' }, { name: '224', tier: 'upper' },
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
    description: 'Home of both the Mavericks (NBA) and Stars (NHL), the arena hosts over 200 events per year across basketball, hockey, concerts, UFC, and family shows in the Victory Park neighborhood just north of downtown. The lower-bowl 100-level sections wrap the ice and court from 101 through 124, while the Platinum Club level offers premium box seating with private lounges and in-seat service. Upper Mezzanine sections 301 through 330 are consistently among the most affordable playoff-atmosphere seats in either league. TicketScan tracks when tickets for American Airlines Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['American Airlines Center tickets', 'Mavericks tickets', 'Dallas Stars tickets', 'Dallas arena tickets', 'American Airlines Center seating chart', 'Dallas concert tickets', 'Mavericks playoff tickets', 'Stars playoff tickets', 'American Airlines Center events', 'Victory Park Dallas tickets'],
    sections: [
      // Floor / Courtside / Ice Level
      { name: 'Floor', tier: 'floor' },
      // Lower Bowl (100 level)
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '119', tier: 'lower' }, { name: '120', tier: 'lower' }, { name: '121', tier: 'lower' },
      { name: '122', tier: 'lower' }, { name: '123', tier: 'lower' }, { name: '124', tier: 'lower' },
      // Platinum Club Level
      { name: 'Platinum P1', tier: 'club' }, { name: 'Platinum P2', tier: 'club' },
      { name: 'Platinum P3', tier: 'club' }, { name: 'Platinum P4', tier: 'club' },
      { name: 'Platinum P5', tier: 'club' }, { name: 'Platinum P6', tier: 'club' },
      { name: 'Platinum P7', tier: 'club' }, { name: 'Platinum P8', tier: 'club' },
      { name: 'Platinum P9', tier: 'club' }, { name: 'Platinum P10', tier: 'club' },
      { name: 'Platinum P11', tier: 'club' }, { name: 'Platinum P12', tier: 'club' },
      { name: 'Platinum P13', tier: 'club' }, { name: 'Platinum P14', tier: 'club' },
      { name: 'Platinum P15', tier: 'club' }, { name: 'Platinum P16', tier: 'club' },
      { name: 'Platinum P17', tier: 'club' }, { name: 'Platinum P18', tier: 'club' },
      { name: 'Platinum P19', tier: 'club' }, { name: 'Platinum P20', tier: 'club' },
      // Upper Mezzanine (300 level)
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
  // Houston
  'toyota-center': {
    id: 'toyota-center',
    name: 'Toyota Center',
    city: 'Houston',
    state: 'TX',
    capacity: 18055,
    type: 'arena',
    homeTeams: ['Houston Rockets'],
    description: 'The 100-level Lower Bowl (sections 101-122) wraps tight around the floor and is the premium tier for hoops and floor-seat concerts; the Lexus Level suites sit mid-building with private lounge access and in-seat service; and the 400-level Upper Bowl (sections 401-434) is where Houston fans find the widest value gap between StubHub, SeatGeek, and Ticketmaster. TicketScan tracks when tickets for Toyota Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Toyota Center tickets', 'Rockets tickets', 'Houston Rockets tickets', 'Houston arena tickets', 'Houston concerts', 'Houston concert tickets', 'Toyota Center seating chart', 'Toyota Center events', 'Rockets game tickets'],
    sections: [
      // Floor / Courtside (basketball) and GA/seated floor (concerts)
      { name: 'Floor', tier: 'floor' },
      // Lower Bowl (100 Level, wraps around the floor)
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '119', tier: 'lower' }, { name: '120', tier: 'lower' }, { name: '121', tier: 'lower' },
      { name: '122', tier: 'lower' },
      // Lexus Level (mid-building suite tier — private lounge access, in-seat service)
      { name: 'Lexus Level Suites', tier: 'suite' },
      // Upper Bowl (400 Level, wraps around)
      { name: '401', tier: 'upper' }, { name: '402', tier: 'upper' }, { name: '403', tier: 'upper' },
      { name: '404', tier: 'upper' }, { name: '405', tier: 'upper' }, { name: '406', tier: 'upper' },
      { name: '407', tier: 'upper' }, { name: '408', tier: 'upper' }, { name: '409', tier: 'upper' },
      { name: '410', tier: 'upper' }, { name: '411', tier: 'upper' }, { name: '412', tier: 'upper' },
      { name: '413', tier: 'upper' }, { name: '414', tier: 'upper' }, { name: '415', tier: 'upper' },
      { name: '416', tier: 'upper' }, { name: '417', tier: 'upper' }, { name: '418', tier: 'upper' },
      { name: '419', tier: 'upper' }, { name: '420', tier: 'upper' }, { name: '421', tier: 'upper' },
      { name: '422', tier: 'upper' }, { name: '423', tier: 'upper' }, { name: '424', tier: 'upper' },
      { name: '425', tier: 'upper' }, { name: '426', tier: 'upper' }, { name: '427', tier: 'upper' },
      { name: '428', tier: 'upper' }, { name: '429', tier: 'upper' }, { name: '430', tier: 'upper' },
      { name: '431', tier: 'upper' }, { name: '432', tier: 'upper' }, { name: '433', tier: 'upper' },
      { name: '434', tier: 'upper' },
    ]
  },
  // Phoenix
  'footprint-center': {
    id: 'footprint-center',
    name: 'Mortgage Matchup Center',
    city: 'Phoenix',
    state: 'AZ',
    capacity: 17071,
    type: 'arena',
    homeTeams: ['Phoenix Suns', 'Phoenix Mercury'],
    description: 'The downtown Phoenix arena that opened in 1992 as America West Arena has changed names more than almost any building in the NBA: US Airways Center, Talking Stick Resort Arena, Phoenix Suns Arena, Footprint Center, PHX Arena, and since October 2025 the Mortgage Matchup Center, under a naming agreement with United Wholesale Mortgage. Tickets and listings still surface under several of those names, so it is worth searching the older ones too. The Suns and the Mercury both play here, and a renovation completed in 2020 substantially rebuilt the concourses, entrances and seating areas of what had become one of the league\'s older arenas. Seating runs from the lower bowl through club and suite levels to the upper bowl. The arena sits in the middle of downtown Phoenix within walking distance of Chase Field, and Valley Metro light rail stops a block away on Jefferson and Washington streets. TicketScan tracks when tickets for Mortgage Matchup Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Mortgage Matchup Center tickets', 'Footprint Center tickets', 'PHX Arena tickets', 'Phoenix Suns tickets', 'Phoenix Mercury tickets', 'Talking Stick Resort Arena tickets', 'Phoenix arena seating chart', 'when do Suns tickets go on sale'],
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
    homeTeams: ['Golden State Warriors', 'Golden State Valkyries'],
    description: 'Ticket details for the All-Star events are still pending, so fans should track the official calendar rather than trust mystery resale listings. The Lower Bowl uses single-digit sections 1-24; Theatre Level boxes sit midway up with premium amenities; and the Upper Bowl 200-level is often the practical value tier. TicketScan tracks when tickets for Chase Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Chase Center tickets', 'Warriors tickets', 'Golden State tickets', 'San Francisco arena', 'Chase Center seating chart', 'Warriors playoff tickets', 'Valkyries tickets', 'Valkyries WNBA All-Star tickets', '2027 WNBA All-Star tickets', 'Chase Center events', 'San Francisco concert tickets'],
    faqs: [
      { question: 'When is the 2027 WNBA All-Star Game at Chase Center?', answer: 'The 2027 AT&T WNBA All-Star Game is scheduled for Saturday, July 31, 2027, at Chase Center. The Kia WNBA Shooting Stars and State Farm WNBA 3-Point Contest are scheduled for Friday, July 30, at the same venue.' },
      { question: 'Are 2027 WNBA All-Star tickets on sale?', answer: 'The official Chase Center announcement says ticket information and the complete event schedule will be announced in the coming months. Check the official event page and compare any later resale listings carefully once inventory appears.' },
    ],
    sections: [
      // Floor / Courtside
      { name: 'Floor', tier: 'floor' },
      // Lower Bowl (100-level, single-digit sections 1-24, wraps around)
      { name: '1', tier: 'lower' }, { name: '2', tier: 'lower' }, { name: '3', tier: 'lower' },
      { name: '4', tier: 'lower' }, { name: '5', tier: 'lower' }, { name: '6', tier: 'lower' },
      { name: '7', tier: 'lower' }, { name: '8', tier: 'lower' }, { name: '9', tier: 'lower' },
      { name: '10', tier: 'lower' }, { name: '11', tier: 'lower' }, { name: '12', tier: 'lower' },
      { name: '13', tier: 'lower' }, { name: '14', tier: 'lower' }, { name: '15', tier: 'lower' },
      { name: '16', tier: 'lower' }, { name: '17', tier: 'lower' }, { name: '18', tier: 'lower' },
      { name: '19', tier: 'lower' }, { name: '20', tier: 'lower' }, { name: '21', tier: 'lower' },
      { name: '22', tier: 'lower' }, { name: '23', tier: 'lower' }, { name: '24', tier: 'lower' },
      // Theatre Level (mid-level premium tier with private lounge access, in-seat service)
      { name: 'Theatre Box 1', tier: 'club' }, { name: 'Theatre Box 2', tier: 'club' },
      { name: 'Theatre Box 3', tier: 'club' }, { name: 'Theatre Box 4', tier: 'club' },
      { name: 'Theatre Box 5', tier: 'club' }, { name: 'Theatre Box 6', tier: 'club' },
      { name: 'Theatre Box 7', tier: 'club' }, { name: 'Theatre Box 8', tier: 'club' },
      { name: 'Theatre Box 9', tier: 'club' }, { name: 'Theatre Box 10', tier: 'club' },
      { name: 'Theatre Box 11', tier: 'club' }, { name: 'Theatre Box 12', tier: 'club' },
      { name: 'Theatre Box 13', tier: 'club' }, { name: 'Theatre Box 14', tier: 'club' },
      { name: 'Theatre Box 15', tier: 'club' }, { name: 'Theatre Box 16', tier: 'club' },
      { name: 'Theatre Box 17', tier: 'club' }, { name: 'Theatre Box 18', tier: 'club' },
      { name: 'Theatre Box 19', tier: 'club' }, { name: 'Theatre Box 20', tier: 'club' },
      // Upper Bowl (200-level, wraps around)
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
      { name: '204', tier: 'upper' }, { name: '205', tier: 'upper' }, { name: '206', tier: 'upper' },
      { name: '207', tier: 'upper' }, { name: '208', tier: 'upper' }, { name: '209', tier: 'upper' },
      { name: '210', tier: 'upper' }, { name: '211', tier: 'upper' }, { name: '212', tier: 'upper' },
      { name: '213', tier: 'upper' }, { name: '214', tier: 'upper' }, { name: '215', tier: 'upper' },
      { name: '216', tier: 'upper' }, { name: '217', tier: 'upper' }, { name: '218', tier: 'upper' },
      { name: '219', tier: 'upper' }, { name: '220', tier: 'upper' }, { name: '221', tier: 'upper' },
      { name: '222', tier: 'upper' }, { name: '223', tier: 'upper' }, { name: '224', tier: 'upper' },
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
    description: 'Nearly 200 events a year run through this Ballpark-neighborhood arena, from NBA and NHL playoff games to Colorado Mammoth lacrosse, UFC cards, WWE, and headline tours. Lower Bowl 100-level seats wrap tight around the ice and court; mid-level Club Boxes add private entrances and in-seat service; Upper Bowl 300-level is where Denver fans find the best value against StubHub, SeatGeek, and Ticketmaster markups. TicketScan tracks when tickets for Ball Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Ball Arena tickets', 'Nuggets tickets', 'Avalanche tickets', 'Denver arena tickets', 'Ball Arena seating chart', 'Denver concert tickets', 'Nuggets playoff tickets', 'Avalanche playoff tickets', 'Ball Arena events'],
    sections: [
      // Floor / Courtside (Nuggets) / Ice Level (Avalanche)
      { name: 'Floor', tier: 'floor' },
      // Lower Bowl (100 level, wraps around)
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '119', tier: 'lower' }, { name: '120', tier: 'lower' }, { name: '121', tier: 'lower' },
      { name: '122', tier: 'lower' }, { name: '123', tier: 'lower' }, { name: '124', tier: 'lower' },
      // Club Box mid-level (200s) — private entrance, in-seat service
      { name: 'Club Box 201', tier: 'club' }, { name: 'Club Box 202', tier: 'club' },
      { name: 'Club Box 203', tier: 'club' }, { name: 'Club Box 204', tier: 'club' },
      { name: 'Club Box 205', tier: 'club' }, { name: 'Club Box 206', tier: 'club' },
      { name: 'Club Box 207', tier: 'club' }, { name: 'Club Box 208', tier: 'club' },
      { name: 'Club Box 209', tier: 'club' }, { name: 'Club Box 210', tier: 'club' },
      { name: 'Club Box 211', tier: 'club' }, { name: 'Club Box 212', tier: 'club' },
      { name: 'Club Box 213', tier: 'club' }, { name: 'Club Box 214', tier: 'club' },
      { name: 'Club Box 215', tier: 'club' }, { name: 'Club Box 216', tier: 'club' },
      { name: 'Club Box 217', tier: 'club' }, { name: 'Club Box 218', tier: 'club' },
      { name: 'Club Box 219', tier: 'club' }, { name: 'Club Box 220', tier: 'club' },
      // Upper Bowl (300 level, wraps around)
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' }, { name: '303', tier: 'upper' },
      { name: '304', tier: 'upper' }, { name: '305', tier: 'upper' }, { name: '306', tier: 'upper' },
      { name: '307', tier: 'upper' }, { name: '308', tier: 'upper' }, { name: '309', tier: 'upper' },
      { name: '310', tier: 'upper' }, { name: '311', tier: 'upper' }, { name: '312', tier: 'upper' },
      { name: '313', tier: 'upper' }, { name: '314', tier: 'upper' }, { name: '315', tier: 'upper' },
      { name: '316', tier: 'upper' }, { name: '317', tier: 'upper' }, { name: '318', tier: 'upper' },
      { name: '319', tier: 'upper' }, { name: '320', tier: 'upper' }, { name: '321', tier: 'upper' },
      { name: '322', tier: 'upper' }, { name: '323', tier: 'upper' }, { name: '324', tier: 'upper' },
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
    description: 'Roughly 150 events run through the building every year. The 100-Level lower bowl (sections 101-126) wraps tight around the court, the renovated courtside and club areas add in-seat service and lounge access, and the 200-Level upper bowl runs sections 201-226. The arena sits a few blocks from Mercedes-Benz Stadium, so a downtown event here can be paired with whatever is on at the stadium. TicketScan tracks when tickets for State Farm Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['State Farm Arena tickets', 'Hawks tickets', 'Atlanta arena tickets', 'Atlanta concerts', 'State Farm Arena seating chart', 'Atlanta Hawks tickets', 'State Farm Arena events', 'Atlanta concert tickets', 'downtown Atlanta events'],
    sections: [
      // Floor / Courtside
      { name: 'Floor', tier: 'floor' },
      // Lower Bowl (100-Level, wraps around the court)
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '119', tier: 'lower' }, { name: '120', tier: 'lower' }, { name: '121', tier: 'lower' },
      { name: '122', tier: 'lower' }, { name: '123', tier: 'lower' }, { name: '124', tier: 'lower' },
      { name: '125', tier: 'lower' }, { name: '126', tier: 'lower' },
      // Club / Premium (renovated courtside and sideline clubs with lounge access, in-seat service)
      { name: 'Courtside Club', tier: 'club' }, { name: 'Hawks Club East', tier: 'club' },
      { name: 'Hawks Club West', tier: 'club' }, { name: 'Topgolf Suite', tier: 'club' },
      // Upper Bowl (200-Level, wraps around)
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
      { name: '204', tier: 'upper' }, { name: '205', tier: 'upper' }, { name: '206', tier: 'upper' },
      { name: '207', tier: 'upper' }, { name: '208', tier: 'upper' }, { name: '209', tier: 'upper' },
      { name: '210', tier: 'upper' }, { name: '211', tier: 'upper' }, { name: '212', tier: 'upper' },
      { name: '213', tier: 'upper' }, { name: '214', tier: 'upper' }, { name: '215', tier: 'upper' },
      { name: '216', tier: 'upper' }, { name: '217', tier: 'upper' }, { name: '218', tier: 'upper' },
      { name: '219', tier: 'upper' }, { name: '220', tier: 'upper' }, { name: '221', tier: 'upper' },
      { name: '222', tier: 'upper' }, { name: '223', tier: 'upper' }, { name: '224', tier: 'upper' },
      { name: '225', tier: 'upper' }, { name: '226', tier: 'upper' },
    ]
  },
  // Brooklyn
  'barclays-center': {
    id: 'barclays-center',
    name: 'Barclays Center',
    city: 'Brooklyn',
    state: 'NY',
    capacity: 17732,
    type: 'arena',
    homeTeams: ['Brooklyn Nets', 'New York Liberty'],
    description: 'Barclays Center opened in 2012 where Atlantic and Flatbush avenues meet in Brooklyn, built above the Long Island Rail Road\'s Atlantic Terminal as the first piece of the Pacific Park development. SHoP Architects wrapped it in pre-weathered steel panels that have rusted to a deep brown and cantilevered the facade out over the entrance plaza to form a canopy, which gives the building a silhouette unlike any other arena in the league. The Nets and the Liberty both play here, and it carries a heavy concert and boxing calendar alongside them. Seating runs from the lower bowl through suite and club levels to the upper bowl; as at most arenas, sideline seats give the most complete view of play while baseline and corner seats trade that angle for being closer in. Transit is the building\'s real advantage - the Atlantic Avenue-Barclays Center station complex underneath it is among the largest in the subway system. TicketScan tracks when tickets for Barclays Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Barclays Center tickets', 'Brooklyn Nets tickets', 'Barclays concerts', 'Brooklyn arena tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '1', tier: 'lower' }, { name: '2', tier: 'lower' }, { name: '3', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
    ]
  },
  // Washington DC
  'capital-one-arena': {
    id: 'capital-one-arena',
    name: 'Capital One Arena',
    city: 'Washington',
    state: 'DC',
    citySlug: 'washington-dc',
    capacity: 20356,
    type: 'arena',
    homeTeams: ['Washington Wizards', 'Washington Capitals'],
    description: 'Capital One Arena opened in December 1997 in Washington\'s Penn Quarter, and is built directly on top of the Gallery Place Metro station. It has carried three names: MCI Center until 2006, Verizon Center until 2017, and Capital One Arena since, so older listings and seating charts circulate under all three. The Wizards and the Capitals share it, which gives it one of the fuller event calendars in either league. Seating runs from the lower bowl through club and suite levels to the upper bowl. The arena is partway through a multi-year renovation that began at the end of 2024 and is scheduled to finish before the 2027-28 seasons, so entrances, concourse layouts and some seating areas change between visits - check the venue\'s own guest information before an event rather than relying on an older map. Arriving by Metro puts you at the door; the surrounding streets are dense and parking is limited. TicketScan tracks when tickets for Capital One Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Capital One Arena tickets', 'Wizards tickets', 'Capitals tickets', 'DC arena tickets', 'Washington DC concerts'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '100', tier: 'lower' }, { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '400', tier: 'upper' }, { name: '401', tier: 'upper' }, { name: '402', tier: 'upper' },
    ]
  },
  // Detroit
  'little-caesars-arena': {
    id: 'little-caesars-arena',
    name: 'Little Caesars Arena',
    city: 'Detroit',
    state: 'MI',
    capacity: 20332,
    type: 'arena',
    homeTeams: ['Detroit Pistons', 'Detroit Red Wings'],
    description: 'Little Caesars Arena opened in September 2017 on Woodward Avenue as the centerpiece of The District Detroit, and is shared by the Pistons and the Red Wings. Architects HOK sank the seating bowl below street level and wrapped the surrounding concourse in a glass-roofed via - a covered public street lined with shops and restaurants that stays open on days with no event. Because the bowl is sunk, most entrances put you on an upper concourse and you walk down toward the lower seats rather than climbing up from the floor, which is the opposite of what people expect at an arena of this size. Seating runs from the lower bowl through club and suite levels to the upper bowl, and the building is configured differently for basketball and hockey, so the same section can sit at a noticeably different distance depending on the event. The QLINE streetcar runs along Woodward directly outside. TicketScan tracks when tickets for Little Caesars Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Little Caesars Arena tickets', 'Pistons tickets', 'Red Wings tickets', 'Detroit arena tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
    ]
  },
  // Milwaukee
  'fiserv-forum': {
    id: 'fiserv-forum',
    name: 'Fiserv Forum',
    city: 'Milwaukee',
    state: 'WI',
    capacity: 17341,
    type: 'arena',
    homeTeams: ['Milwaukee Bucks'],
    description: 'Fiserv Forum opened in downtown Milwaukee in August 2018 and is home to the Bucks, who won the NBA title in 2021, and to Marquette University\'s men\'s basketball team. Its most recognizable feature is the roof: a curved, arcing profile clad in zinc that weathers over time, designed by Populous with HNTB and Eppstein Uhen. Seating runs from the lower bowl through club and suite levels to the upper bowl. As at most arenas, sideline seats give the clearest read on play developing across the floor, while baseline and corner seats trade that angle for proximity. The arena opens onto the Deer District, the plaza outside that fills with people on big game nights whether or not they hold tickets - worth knowing when you plan how early to arrive. The Hop streetcar and several high-frequency bus routes serve the immediate area, and downtown Milwaukee is compact enough that most nearby parking is a short walk away. TicketScan tracks when tickets for Fiserv Forum events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Fiserv Forum tickets', 'Bucks tickets', 'Milwaukee arena tickets', 'Milwaukee concerts'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' },
    ]
  },
  // Minneapolis
  'target-center': {
    id: 'target-center',
    name: 'Target Center',
    city: 'Minneapolis',
    state: 'MN',
    capacity: 18798,
    type: 'arena',
    homeTeams: ['Minnesota Timberwolves', 'Minnesota Lynx'],
    description: 'Target Center opened on First Avenue North in downtown Minneapolis in October 1990 and is home to the Timberwolves and the Lynx. It is owned by the City of Minneapolis rather than by either team, and a major renovation during the 2010s rebuilt the main entrance and concourses and tied the building more directly into the surrounding downtown. Its most practical feature in a Minnesota winter is the skyway: Target Center connects to the city\'s enclosed second-level walkway network, so you can reach it from a parking ramp or a nearby hotel without going outside - which matters for a building that hosts events through January and February. Seating runs from the lower bowl through suite and club levels to the upper bowl. Sideline seats give the most complete view of play; baseline and corner seats trade that angle for being closer to the basket. Metro Transit light rail and bus routes stop within a couple of blocks. TicketScan tracks when tickets for Target Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Target Center tickets', 'Timberwolves tickets', 'Minneapolis arena tickets', 'Minnesota basketball tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' },
    ]
  },
  // New Orleans
  'smoothie-king-center': {
    id: 'smoothie-king-center',
    name: 'Smoothie King Center',
    city: 'New Orleans',
    state: 'LA',
    capacity: 16867,
    type: 'arena',
    homeTeams: ['New Orleans Pelicans'],
    description: 'The Smoothie King Center opened in October 1999 as New Orleans Arena and took its current name in 2014; locally it is still often called the Blender. It stands directly beside the Caesars Superdome on the same state-owned campus, and the two buildings share the surrounding lots and approaches - which means event traffic here is shaped as much by whatever is happening next door as by what is happening in the arena, something worth checking before a Saturday or Sunday event. The Pelicans play here alongside concerts and touring shows. Seating runs from the lower bowl through club and suite levels to the upper bowl, and the building is compact enough that there is no genuinely distant seat in it. It is a walk from the New Orleans Union Passenger Terminal and from the Central Business District, and streetcar and bus routes run along Poydras Street nearby. TicketScan tracks when tickets for Smoothie King Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Smoothie King Center tickets', 'Pelicans tickets', 'New Orleans arena tickets', 'NOLA concerts'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' },
    ]
  },
  // Toronto
  'scotiabank-arena': {
    id: 'scotiabank-arena',
    name: 'Scotiabank Arena',
    city: 'Toronto',
    state: 'ON',
    capacity: 19800,
    type: 'arena',
    homeTeams: ['Toronto Raptors', 'Toronto Maple Leafs'],
    description: 'Floor and 100-level seats put you closest to the action, while the 300 level is usually the practical value play for basketball and hockey; concert layouts can move the floor and rename sections, so check the event-specific map. TicketScan tracks when tickets for Scotiabank Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Scotiabank Arena tickets', 'Raptors tickets', 'Maple Leafs tickets', 'Toronto arena tickets', 'Scotiabank Arena seating chart', 'Scotiabank Arena concerts 2026', 'RUSH Toronto tickets', 'Nate Bargatze Toronto tickets', 'Toronto Tempo tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '119', tier: 'lower' }, { name: '120', tier: 'lower' }, { name: '121', tier: 'lower' },
      { name: '122', tier: 'lower' }, { name: '123', tier: 'lower' }, { name: '124', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' }, { name: '303', tier: 'upper' },
      { name: '304', tier: 'upper' }, { name: '305', tier: 'upper' }, { name: '306', tier: 'upper' },
      { name: '307', tier: 'upper' }, { name: '308', tier: 'upper' }, { name: '309', tier: 'upper' },
      { name: '310', tier: 'upper' }, { name: '311', tier: 'upper' }, { name: '312', tier: 'upper' },
      { name: '313', tier: 'upper' }, { name: '314', tier: 'upper' }, { name: '315', tier: 'upper' },
      { name: '316', tier: 'upper' }, { name: '317', tier: 'upper' }, { name: '318', tier: 'upper' },
    ]
  },
  // Las Vegas
  't-mobile-arena': {
    id: 't-mobile-arena',
    name: 'T-Mobile Arena',
    city: 'Las Vegas',
    state: 'NV',
    capacity: 20000,
    type: 'arena',
    homeTeams: ['Vegas Golden Knights'],
    description: 'T-Mobile Arena opened in April 2016 on the Las Vegas Strip, set back behind the New York-New York and Park MGM resorts and reached through the Park, an open-air plaza of restaurants and bars that funnels the crowd toward the doors. Built as a joint venture between MGM Resorts and AEG and designed by Populous, it is home to the Golden Knights and carries a heavy schedule of boxing, UFC and touring concerts alongside the hockey season. Seating runs from the lower bowl through club and suite levels to the upper bowl. Configurations change substantially between hockey, an end-stage concert and a boxing card, so the same section can be a very different seat depending on the event - check the chart for the specific event rather than the venue in general. The Las Vegas Monorail stops at MGM Grand nearby, and the arena is walkable from much of the central Strip. TicketScan tracks when tickets for T-Mobile Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['T-Mobile Arena tickets', 'Golden Knights tickets', 'Las Vegas arena tickets', 'Vegas concerts', 'UFC tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '1', tier: 'lower' }, { name: '2', tier: 'lower' }, { name: '3', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
    ]
  },
  // Seattle
  'climate-pledge-arena': {
    id: 'climate-pledge-arena',
    name: 'Climate Pledge Arena',
    city: 'Seattle',
    state: 'WA',
    capacity: 17100,
    type: 'arena',
    homeTeams: ['Seattle Kraken', 'Seattle Storm'],
    description: 'Climate Pledge Arena is one of the newest buildings in the NHL underneath one of the oldest roofs. The original arena opened at Seattle Center in 1962 as a pavilion for the World\'s Fair, and when the site was rebuilt between 2018 and 2021 the 1962 roof and its glass curtain walls - landmarked by the city in 2017 - were held in place on temporary supports while everything beneath them was demolished and the site excavated deeper. The arena that reopened in October 2021 is therefore a modern building sunk well below a historic roofline. The Kraken and the Storm play here. Seating runs from the lower bowl through club and suite levels to the upper bowl, and because the bowl was dug down rather than built up, main entrances lead onto an upper concourse. The Seattle Center Monorail runs from downtown to the arena\'s doorstep, and parking on the campus is limited. TicketScan tracks when tickets for Climate Pledge Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Climate Pledge Arena tickets', 'Kraken tickets', 'Seattle arena tickets', 'Seattle concerts'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' },
    ]
  },
  // Newark/New Jersey
  'prudential-center': {
    id: 'prudential-center',
    name: 'Prudential Center',
    city: 'Newark',
    state: 'NJ',
    capacity: 16514,
    type: 'arena',
    homeTeams: ['New Jersey Devils'],
    description: 'Prudential Center opened in downtown Newark in October 2007 and is home to the Devils, to Seton Hall\'s men\'s basketball team and to the PWHL\'s New York Sirens. Despite being one of the smaller arenas in the NHL, it ranks among the busiest concert venues in the world, and in most months the touring calendar outnumbers the hockey one. The exterior, by Morris Adjmi, is clad in patterned brick and metal that references Newark\'s industrial architecture rather than the glass curtain wall typical of arenas of its generation. Seating runs from the lower bowl through club and suite levels to the upper bowl, and the compact footprint keeps the upper deck closer to the ice than at most NHL buildings. Newark Penn Station is a short walk away and is served by NJ Transit, PATH, Amtrak and the Newark Light Rail, which makes the arena straightforward to reach from Manhattan without driving. TicketScan tracks when tickets for Prudential Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Prudential Center tickets', 'Devils tickets', 'Newark arena tickets', 'New Jersey concerts'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '1', tier: 'lower' }, { name: '2', tier: 'lower' }, { name: '3', tier: 'lower' },
      { name: '101', tier: 'upper' }, { name: '102', tier: 'upper' }, { name: '103', tier: 'upper' },
    ]
  },
  // Chicago (Wrigley Field - MLB)
  'wrigley-field': {
    id: 'wrigley-field',
    name: 'Wrigley Field',
    city: 'Chicago',
    state: 'IL',
    capacity: 41649,
    type: 'stadium',
    homeTeams: ['Chicago Cubs'],
    description: 'Built in 1914 at the corner of Clark and Addison in the Lakeview neighborhood, Wrigley is known for its ivy-covered outfield walls (planted 1937), the hand-turned center field scoreboard (also 1937), and a daytime-baseball heritage that lasted until lights were finally installed for the first night game on August 8, 1988. The 2014 to 2019 1060 Project renovation modernized concourses, suites, and player facilities while preserving the brick-and-ivy character. Field Box and Bullpen Box seats run the infield, the bleachers wrap the outfield as their own general-admission ecosystem, and the rooftop clubs across Sheffield and Waddell sell separately ticketed seats with Wrigley views. TicketScan tracks when tickets for Wrigley Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Wrigley Field tickets', 'Cubs tickets', 'Chicago Cubs tickets', 'Wrigley Field seating chart', 'Cubs vs Cardinals tickets', 'Cubs vs Reds tickets', 'Wrigley Field bleachers tickets', 'Wrigley rooftop seats', 'Cubs day game tickets', 'best seats Wrigley Field', 'Wrigley Field standing room', 'Cubs schedule tickets', 'Cubs ticket prices'],
    sections: [
      // Premium / Floor-equivalent (behind home plate)
      { name: 'Marquee Box', tier: 'floor' },
      // Lower Bowl - Infield
      { name: 'Field Box Infield', tier: 'lower' },
      { name: 'Field Box Outfield', tier: 'lower' },
      // Lower Bowl - Outfield Bleachers
      { name: 'Bleachers LF', tier: 'lower' },
      { name: 'Bleachers RF', tier: 'lower' },
      { name: 'Bleacher Box', tier: 'lower' },
      // Club / Premium
      { name: 'Bullpen Box', tier: 'club' },
      { name: 'Catalina Club', tier: 'club' },
      { name: '1914 Club', tier: 'club' },
      // Mid / Upper (Wrigley has no true mezzanine; 200s map to lower upper rows)
      { name: 'Terrace Box 200s', tier: 'upper' },
      { name: 'Terrace Reserved 200s', tier: 'upper' },
      // Upper Deck
      { name: 'Upper Deck Box 300s', tier: 'upper' },
      { name: 'Upper Deck Reserved 400s', tier: 'upper' },
      // Suites
      { name: 'Suite Level', tier: 'suite' },
    ]
  },
  // Sacramento
  'golden-1-center': {
    id: 'golden-1-center',
    name: 'Golden 1 Center',
    city: 'Sacramento',
    state: 'CA',
    capacity: 17608,
    type: 'arena',
    homeTeams: ['Sacramento Kings'],
    description: 'The home of the Sacramento Kings has a two-deck seating bowl plus floor, club, and suite configurations that change by event. For Kings games, the 100 Level (sections 101-126) puts you closest to the court, while the 200 Level (sections 201-222) usually gives budget-minded fans the widest view for the money. Concert layouts can remove or rename sections, so check the event-specific map rather than trusting a generic seating chart. TicketScan tracks when tickets for Golden 1 Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Golden 1 Center tickets', 'Golden 1 Center seating chart', 'Golden 1 Center seat views', 'Sacramento Kings tickets', 'Sacramento concerts', 'Don Toliver Sacramento tickets', 'Megan Moroney Sacramento tickets', 'Benson Boone Sacramento tickets', 'Grupo Frontera Sacramento tickets', 'Monster Jam Sacramento tickets', 'UFC Sacramento tickets', 'J Cole Sacramento tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '104', tier: 'lower' }, { name: '105', tier: 'lower' }, { name: '106', tier: 'lower' },
      { name: '107', tier: 'lower' }, { name: '108', tier: 'lower' }, { name: '109', tier: 'lower' },
      { name: '110', tier: 'lower' }, { name: '111', tier: 'lower' }, { name: '112', tier: 'lower' },
      { name: '113', tier: 'lower' }, { name: '114', tier: 'lower' }, { name: '115', tier: 'lower' },
      { name: '116', tier: 'lower' }, { name: '117', tier: 'lower' }, { name: '118', tier: 'lower' },
      { name: '119', tier: 'lower' }, { name: '120', tier: 'lower' }, { name: '121', tier: 'lower' },
      { name: '122', tier: 'lower' }, { name: '123', tier: 'lower' }, { name: '124', tier: 'lower' },
      { name: '125', tier: 'lower' }, { name: '126', tier: 'lower' },
      { name: 'Michelob Ultra Club', tier: 'club' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' }, { name: '203', tier: 'upper' },
      { name: '204', tier: 'upper' }, { name: '205', tier: 'upper' }, { name: '206', tier: 'upper' },
      { name: '207', tier: 'upper' }, { name: '208', tier: 'upper' }, { name: '209', tier: 'upper' },
      { name: '210', tier: 'upper' }, { name: '211', tier: 'upper' }, { name: '212', tier: 'upper' },
      { name: '213', tier: 'upper' }, { name: '214', tier: 'upper' }, { name: '215', tier: 'upper' },
      { name: '216', tier: 'upper' }, { name: '217', tier: 'upper' }, { name: '218', tier: 'upper' },
      { name: '219', tier: 'upper' }, { name: '220', tier: 'upper' }, { name: '221', tier: 'upper' },
      { name: '222', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
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
