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
    description: 'Compare ticket prices for events at TD Garden in Boston. Home of the Celtics and Bruins, TD Garden hosts over 200 events per year including NBA and NHL games, major concert tours, UFC fights, and Disney on Ice. The arena sits above North Station in downtown Boston, making it one of the most transit-accessible venues in the country. Loge and balcony sections offer strong sightlines, while club seats include lounge access. Use TicketScan to compare prices across Ticketmaster, SeatGeek, and StubHub before you buy.',
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
    description: 'Compare ticket prices for events at Wells Fargo Center in South Philadelphia. Home of both the 76ers and Flyers, the arena hosts over 250 NBA games, NHL games, concerts, and family shows each year in the heart of the South Philly Sports Complex alongside Citizens Bank Park and Lincoln Financial Field. Lower-level sections wrap the bowl from 101 to 124, while the mezzanine club level offers padded seating with in-seat service. Upper-level sections 201 through 224 are among the best value seats in the NBA and NHL. Use TicketScan to compare prices across Ticketmaster, SeatGeek, and StubHub before you buy.',
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
    description: 'Compare ticket prices for events at American Airlines Center in Dallas. Home of both the Mavericks (NBA) and Stars (NHL), the arena hosts over 200 events per year across basketball, hockey, concerts, UFC, and family shows in the Victory Park neighborhood just north of downtown. The lower-bowl 100-level sections wrap the ice and court from 101 through 124, while the Platinum Club level offers premium box seating with private lounges and in-seat service. Upper Mezzanine sections 301 through 330 are consistently among the most affordable playoff-atmosphere seats in either league. Use TicketScan to compare prices across Ticketmaster, SeatGeek, and StubHub before you buy.',
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
    homeTeams: ['Golden State Warriors', 'Golden State Valkyries'],
    description: 'Compare ticket prices for Chase Center in San Francisco\'s Mission Bay, the dual-tenant home of the Golden State Warriors and the Golden State Valkyries WNBA franchise. Roughly 200 events run through the building every year — NBA playoff games, Valkyries home slates, headline tours, boxing and UFC cards, and one-off spectacles. The Lower Bowl uses single-digit sections 1-24 that wrap tight around the court; Theatre Level boxes sit midway up with private lounge access and in-seat service; the Upper Bowl 200-level is where Bay Area fans find the biggest value gap between StubHub, SeatGeek, and Ticketmaster. Track prices and set free alerts before Warriors playoff games or Valkyries tip-offs on TicketScan.',
    keywords: ['Chase Center tickets', 'Warriors tickets', 'Golden State tickets', 'San Francisco arena', 'Chase Center seating chart', 'Warriors playoff tickets', 'Valkyries tickets', 'Chase Center events', 'San Francisco concert tickets'],
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
    description: 'Compare ticket prices for Ball Arena in Denver, the dual-tenant home of the NBA champion Nuggets and Stanley Cup winner Avalanche. Nearly 200 events a year run through this Ballpark-neighborhood arena, from NBA and NHL playoff games to Colorado Mammoth lacrosse, UFC cards, WWE, and headline tours. Lower Bowl 100-level seats wrap tight around the ice and court; mid-level Club Boxes add private entrances and in-seat service; Upper Bowl 300-level is where Denver fans find the best value against StubHub, SeatGeek, and Ticketmaster markups. Track prices and set free alerts before Nuggets and Avalanche playoff games on TicketScan.',
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
    description: 'Find cheap tickets at State Farm Arena in Atlanta. Home of the Hawks, featuring NBA games and top concerts.',
    keywords: ['State Farm Arena tickets', 'Hawks tickets', 'Atlanta arena tickets', 'Atlanta concerts'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' },
      { name: '201', tier: 'upper' }, { name: '202', tier: 'upper' },
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
    description: 'Compare ticket prices at Barclays Center in Brooklyn. Home of the Nets and Liberty, hosting NBA, WNBA, concerts, and boxing.',
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
    capacity: 20356,
    type: 'arena',
    homeTeams: ['Washington Wizards', 'Washington Capitals'],
    description: 'Find tickets at Capital One Arena in Washington DC. Home of the Wizards and Capitals, featuring NBA, NHL, and concerts.',
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
    description: 'Compare prices at Little Caesars Arena in Detroit. Home of the Pistons and Red Wings, hosting NBA, NHL, and major concerts.',
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
    description: 'Get tickets at Fiserv Forum in Milwaukee. Home of the NBA champion Bucks, featuring basketball and world-class entertainment.',
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
    description: 'Find cheap tickets at Target Center in Minneapolis. Home of the Timberwolves and Lynx, hosting NBA, WNBA, and concerts.',
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
    description: 'Compare ticket prices at Smoothie King Center in New Orleans. Home of the Pelicans, featuring NBA games and major events.',
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
    description: 'Find tickets at Scotiabank Arena in Toronto. Home of the Raptors and Maple Leafs, hosting NBA, NHL, and major concerts.',
    keywords: ['Scotiabank Arena tickets', 'Raptors tickets', 'Maple Leafs tickets', 'Toronto arena tickets'],
    sections: [
      { name: 'Floor', tier: 'floor' },
      { name: '101', tier: 'lower' }, { name: '102', tier: 'lower' }, { name: '103', tier: 'lower' },
      { name: '301', tier: 'upper' }, { name: '302', tier: 'upper' }, { name: '303', tier: 'upper' },
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
    description: 'Compare prices at T-Mobile Arena in Las Vegas. Home of the Golden Knights, featuring NHL, UFC, boxing, and superstar concerts.',
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
    description: 'Get tickets at Climate Pledge Arena in Seattle. Home of the Kraken and Storm, featuring NHL, WNBA, and world tours.',
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
    description: 'Find cheap tickets at Prudential Center in Newark. Home of the Devils, hosting NHL games, concerts, and major events.',
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
    description: 'Compare ticket prices for Chicago Cubs games and concerts at Wrigley Field, the second-oldest active ballpark in Major League Baseball. Built in 1914 at the corner of Clark and Addison in the Lakeview neighborhood, Wrigley is known for its ivy-covered outfield walls (planted 1937), the hand-turned center field scoreboard (also 1937), and a daytime-baseball heritage that lasted until lights were finally installed for the first night game on August 8, 1988. The 2014 to 2019 1060 Project renovation modernized concourses, suites, and player facilities while preserving the brick-and-ivy character. Field Box and Bullpen Box seats run the infield, the bleachers wrap the outfield as their own general-admission ecosystem, and the rooftop clubs across Sheffield and Waddell sell separately ticketed seats with Wrigley views. Day games typically carry a 15 to 25 percent premium for tourist demand; rivalry games against the Cardinals, Brewers, and Dodgers see bleacher prices double versus baseline. Use TicketScan to compare Cubs ticket prices across Ticketmaster, SeatGeek, and StubHub before you buy, and set a price alert on any home stand to catch the typical 20 to 30 percent post-on-sale resale dip on weekday non-marquee games.',
    keywords: ['Wrigley Field tickets', 'Cubs tickets', 'Chicago Cubs tickets', 'Wrigley Field seating chart', 'cheapest Cubs tickets', 'Cubs vs Cardinals tickets', 'Cubs vs Reds tickets', 'Wrigley Field bleachers tickets', 'Wrigley rooftop seats', 'Cubs day game tickets', 'best seats Wrigley Field', 'Wrigley Field standing room', 'Cubs schedule tickets', 'Cubs ticket prices'],
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
    description: 'Compare prices at Golden 1 Center in Sacramento. Home of the Kings, featuring NBA games and major concert tours.',
    keywords: ['Golden 1 Center tickets', 'Kings tickets', 'Sacramento arena tickets', 'Sacramento concerts'],
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
