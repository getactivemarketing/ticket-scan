// Home ballparks for the second half of MLB (Marlins through Nationals), one
// venue per team, 15 in all.
//
// Capacity comes from the team's or ballpark's own site wherever it publishes
// a figure (mlb.com/<team>/ballpark facts and A-Z guide pages), and from
// MLB.com's per-ballpark "guide: capacity, seating chart" articles where the
// team page gives none. Wikipedia infoboxes were checked but never preferred,
// and each park where the official figure differs from Wikipedia gets an FAQ
// explaining the gap:
//   - American Family Field 40,100: the Brewers removed about 1,600 Terrace
//     seats for offices in 2025, and the team president gives 40,100. MLB.com's
//     guide and Wikipedia still say 41,900.
//   - PNC Park 38,362: the Pirates' facts page. MLB.com's guide and Wikipedia
//     (citing the 2018 media guide) say 38,747, which may be the newer
//     number. The team page was used under the team-site-wins rule.
//   - Oracle Park 40,260 (Giants guide), where Wikipedia has 41,331; T-Mobile
//     Park 47,943 (Mariners), where Wikipedia has 47,368; Busch Stadium 43,769
//     (Cardinals guide), where Wikipedia has 44,383.
//   - Tropicana Field 25,025: MLB.com's April 2026 guide, with the upper deck
//     tarped. The Rays returned from Steinbrenner Field (their 2025 home
//     after Hurricane Milton) for the first home game on April 6, 2026.
//   - Rogers Centre 39,150: the post-renovation figure reported by the Toronto
//     Star in 2024. No official exact figure exists; MLB.com's guide says only
//     "over 41,000", which likely counts Outfield District standing room.
//     This is the least firmly sourced capacity in this file.
//
// Section names and ranges come from each team's published 2026 seat map,
// ticket pages or accessibility guide. Where a zone's section numbers could
// not be read or sourced (Tropicana Field's map is browser-only, PNC Park's
// club level, Citizens Bank Park's Hall of Fame Club, Yankee Stadium's
// Grandstand and Bleachers), the zone is named without numbers rather than
// guessed. `floor` is deliberately never used: a ballpark has no floor.

import type { Venue } from '../venue-types';

export const mlbVenues2: Record<string, Venue> = {
  'loandepot-park': {
    id: 'loandepot-park',
    name: 'loanDepot park',
    city: 'Miami',
    state: 'FL',
    capacity: 37442,
    type: 'stadium',
    homeTeams: ['Miami Marlins'],
    description: 'loanDepot park opened in 2012 as Marlins Park in Little Havana, on the site of the old Miami Orange Bowl. It is one of seven MLB parks with a retractable roof, which takes about 13 to 15 minutes to open or close, and it has played on artificial turf since 2020. Sections are numbered clockwise from the right-field foul pole: the Promenade Level starts at 1, the Legends Level at 201 and the Vista Level at 302. Clubhouse Box seats sit in the first nine rows above the dugouts, and the Hall of Fame Club behind home plate is all-inclusive. For value, look to the Vista Level upper deck and the Home Run Porch in right-center. TicketScan tracks when tickets for loanDepot park events go on sale, including presale windows that open before the public onsale.',
    keywords: ['loanDepot park tickets', 'Miami Marlins tickets', 'loanDepot park seating chart', 'Marlins Park tickets', 'loanDepot park events 2026', 'Miami baseball tickets'],
    faqs: [
      { question: 'How are sections numbered at loanDepot park?', answer: 'Numbering runs clockwise starting at the right-field foul pole. The Promenade Level (field level) begins at section 1, the Legends Level at 201 and the Vista Level upper deck at 302, so a low number on any level is down the right-field line.' },
    ],
    sections: [
      { name: 'Clubhouse Box', tier: 'lower' },
      { name: 'Home Plate Box', tier: 'lower' },
      { name: 'Base Reserved', tier: 'lower' },
      { name: 'Baseline Reserved', tier: 'lower' },
      { name: 'Bullpen Zone', tier: 'lower' },
      { name: 'Home Run Porch', tier: 'lower' },
      { name: 'Dugout Clubs', tier: 'club' },
      { name: 'PNC Club', tier: 'club' },
      { name: 'Hall of Fame Club', tier: 'club' },
      { name: 'Legends Level 201+', tier: 'club' },
      { name: 'Vista Box', tier: 'upper' },
      { name: 'Vista Level 302+', tier: 'upper' },
      { name: 'Founders Level Suites', tier: 'suite' },
    ]
  },

  'american-family-field': {
    id: 'american-family-field',
    name: 'American Family Field',
    city: 'Milwaukee',
    state: 'WI',
    capacity: 40100,
    type: 'stadium',
    homeTeams: ['Milwaukee Brewers'],
    description: 'American Family Field opened on April 6, 2001 as Miller Park and took its current name in 2021. Its fan-shaped convertible roof, the only one of its kind in North America, opens or closes in under 10 minutes, so Brewers games are played regardless of Wisconsin weather. Bernie Brewer\'s slide and the Racing Sausages are fixtures, and Helfaer Field sits on the old County Stadium site next door. The four levels are the Field Level (100s), Loge Level (200s, including the Loge Bleachers), PNC Club Level (300s, with in-seat service in sections 314-343) and the Terrace Level (400s). The value seats are Terrace Reserved and the Uecker Seats in section 422. TicketScan tracks American Family Field onsales and presale windows so you can buy before the public sale.',
    keywords: ['American Family Field tickets', 'Milwaukee Brewers tickets', 'American Family Field seating chart', 'Miller Park tickets', 'Uecker Seats', 'Milwaukee baseball tickets'],
    faqs: [
      { question: 'What is the capacity of American Family Field?', answer: 'About 40,100. The Brewers built new offices on the Terrace Level before the 2025 season, removing roughly 1,600 seats, and team president Rick Schlesinger put capacity at 40,100 afterwards. Wikipedia and many ticket sites still list the older figure of 41,900.' },
      { question: 'What are the Uecker Seats?', answer: 'Partial-view seats in section 422, the last row of the upper deck, named for broadcaster Bob Uecker, whose statue sits up there. They go on sale for $5 on the day of the game when gates open, and are not sold for Opening Day or the postseason.' },
    ],
    sections: [
      { name: 'Field Level 100s', tier: 'lower' },
      { name: 'Toyota Territory', tier: 'lower' },
      { name: 'Loge Level 200s', tier: 'lower' },
      { name: 'Loge Bleachers', tier: 'lower' },
      { name: 'PNC Club Level 314-343', tier: 'club' },
      { name: 'Northwestern Mutual Legends Club', tier: 'club' },
      { name: 'Terrace Infield', tier: 'upper' },
      { name: 'Terrace Outfield', tier: 'upper' },
      { name: 'Terrace Reserved', tier: 'upper' },
      { name: 'Uecker Seats 422', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'target-field': {
    id: 'target-field',
    name: 'Target Field',
    city: 'Minneapolis',
    state: 'MN',
    capacity: 38544,
    type: 'stadium',
    homeTeams: ['Minnesota Twins'],
    description: 'Target Field opened in 2010 in the North Loop of downtown Minneapolis on an 8-acre lot, the smallest in MLB, so the ballpark stacks its decks steeply. It is clad in Minnesota limestone, the "Minnie and Paul" sign sits above the center-field upper deck, and both light rail lines and Northstar commuter rail stop at the gates. Sections run clockwise from the right-field foul pole. On the Main Level, Field Box covers 101-102 and 126-127, Diamond Box 103-104 and 124-125, and Infield Box 105-108 and 120-123. The Thrivent Club is lettered A-R and Legends Landing S-V. The Terrace (200s) and View (300s) levels are above, and Upper Deck and Home Run Deck View seats are the cheapest in the park. TicketScan tracks when tickets for Target Field events go on sale, including early presales.',
    keywords: ['Target Field tickets', 'Minnesota Twins tickets', 'Target Field seating chart', 'Target Field events 2026', 'Twins tickets Minneapolis', 'Minneapolis baseball tickets'],
    faqs: [
      { question: 'Which dugout is the Twins dugout at Target Field?', answer: 'The Twins use the first-base dugout. Infield Box sections 120-123 and Diamond Box 124-125 sit on that side, and 103-108 on the third-base side face the visitors.' },
    ],
    sections: [
      { name: 'Field Box 101-102, 126-127', tier: 'lower' },
      { name: 'Diamond Box 103-104, 124-125', tier: 'lower' },
      { name: 'Infield Box 105-108, 120-123', tier: 'lower' },
      { name: 'Home Plate Box', tier: 'lower' },
      { name: 'Left Field Bleachers', tier: 'lower' },
      { name: 'UnitedHealth Champions Club', tier: 'club' },
      { name: 'Thrivent Club A-R', tier: 'club' },
      { name: 'Legends Landing S-V', tier: 'club' },
      { name: 'Terrace Level 200s', tier: 'upper' },
      { name: 'Home Plate View 310-319', tier: 'upper' },
      { name: 'View Level 300s', tier: 'upper' },
      { name: 'Home Run Deck View', tier: 'upper' },
      { name: 'Premier Suite Level', tier: 'suite' },
    ]
  },

  'citi-field': {
    id: 'citi-field',
    name: 'Citi Field',
    city: 'New York',
    state: 'NY',
    capacity: 41922,
    type: 'stadium',
    homeTeams: ['New York Mets'],
    description: 'Citi Field opened in 2009 in Flushing, Queens, next to the site of Shea Stadium, and the Jackie Robinson Rotunda at the main entrance echoes Ebbets Field. The Home Run Apple, the orange foul poles carried over from Shea, the Shea Bridge in right-center and a new video board installed in 2023 are the landmarks, and the 7 train stops at Mets-Willets Point. Field Level seating runs 101-143, with Clover Level seats in 11-19 behind the plate and the Delta Sky360 Club seats in front of them. Empire Suites fill 201-239 and the Excelsior Level runs 301-339. The Promenade upper deck, sections 401-437 and 501-538, is where the lowest prices are. TicketScan tracks when tickets for Citi Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Citi Field tickets', 'New York Mets tickets', 'Citi Field seating chart', 'Mets tickets Queens', 'Citi Field events 2026', 'Citi Field Promenade seats'],
    faqs: [
      { question: 'How are rows and seats numbered at Citi Field?', answer: 'Citi Field has no box seats; every section is sold by row, and the lowest seat number in each row is the one closest to home plate. Field Level is 101-143, Excelsior 301-339 and Promenade 401-437 and 501-538.' },
    ],
    sections: [
      { name: 'Delta Sky360 Club', tier: 'club' },
      { name: 'Clover Level 11-19', tier: 'club' },
      { name: 'Field Level 101-143', tier: 'lower' },
      { name: 'Excelsior Level 301-339', tier: 'club' },
      { name: 'Coca-Cola Corner', tier: 'club' },
      { name: 'Promenade 401-437', tier: 'upper' },
      { name: 'Promenade 501-538', tier: 'upper' },
      { name: 'Clover Suites 1-10', tier: 'suite' },
      { name: 'Empire Suites 201-239', tier: 'suite' },
    ]
  },

  'yankee-stadium': {
    id: 'yankee-stadium',
    name: 'Yankee Stadium',
    city: 'New York',
    state: 'NY',
    capacity: 46543,
    type: 'stadium',
    homeTeams: ['New York Yankees'],
    description: 'Yankee Stadium opened on April 16, 2009 across 161st Street from the 1923 original, and it keeps the old park\'s traditions: Monument Park behind the center-field wall, the 31,000-square-foot Great Hall, a team museum near section 210, and the Bleacher Creatures\' first-inning Roll Call from section 203. The short porch in right field is 314 feet. The Legends Suite seats sit closest to the field behind home plate, the Field MVP Club covers sections 115-125, rows 1-10, and the Field Level 100s and Main Level 200s ring the bowl. About 2,100 seats, many of them obstructed bleacher seats, were removed in 2017. The Bleachers, Grandstand and Terrace Level 300s carry the lowest prices. TicketScan tracks Yankee Stadium onsales and presale windows.',
    keywords: ['Yankee Stadium tickets', 'New York Yankees tickets', 'Yankee Stadium seating chart', 'Yankees tickets Bronx', 'Yankee Stadium bleachers', 'Yankee Stadium events 2026'],
    faqs: [
      { question: 'Where do the Bleacher Creatures sit at Yankee Stadium?', answer: 'In section 203 in the right-field bleachers. They lead the Roll Call in the top of the first inning, chanting each Yankee fielder\'s name until he acknowledges them.' },
    ],
    sections: [
      { name: 'Legends Suite', tier: 'suite' },
      { name: 'Champions Suite', tier: 'club' },
      { name: 'Field MVP Club 115-125', tier: 'club' },
      { name: 'Jim Beam Suite', tier: 'club' },
      { name: 'Field Level 100s', tier: 'lower' },
      { name: 'Main Level 200s', tier: 'lower' },
      { name: 'Bleachers', tier: 'upper' },
      { name: 'Terrace Level 300s', tier: 'upper' },
      { name: 'Grandstand', tier: 'upper' },
      { name: 'Delta SKY360 Suite', tier: 'suite' },
      { name: 'Coupa Suite Level', tier: 'suite' },
    ]
  },

  'citizens-bank-park': {
    id: 'citizens-bank-park',
    name: 'Citizens Bank Park',
    city: 'Philadelphia',
    state: 'PA',
    capacity: 42901,
    type: 'stadium',
    homeTeams: ['Philadelphia Phillies'],
    description: 'Citizens Bank Park opened in April 2004 in the South Philadelphia Sports Complex, with the playing field set 23 feet below street level and a main concourse that is open all the way around. Ashburn Alley runs 625 feet behind the outfield, the Home Run Liberty Bell rings in right-center. The Field Level 100s wrap the infield, the Philadelphia Insurance Club behind home plate has 1,281 padded seats with in-seat service, and the Cadillac Hall of Fame Club holds about 2,500 seats on the 200 level. In right field, the Pavilion (201-211) and Pavilion Deck (301-305) sit over the bullpens, and the Terrace Deck 400s upstairs is the cheapest way in. TicketScan tracks when tickets for Citizens Bank Park events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Citizens Bank Park tickets', 'Philadelphia Phillies tickets', 'Citizens Bank Park seating chart', 'Phillies tickets', 'Citizens Bank Park events 2026', 'Philadelphia baseball tickets'],
    faqs: [
      { question: 'What is "The Break" at Citizens Bank Park?', answer: 'Near section 210 the right-field Pavilion deck drops about 20 feet, so the Pavilion sections 201-211 sit lower and closer to the field than the rest of the 200 level. Fans call the step down The Break.' },
      { question: 'Which Citizens Bank Park sections have no elevator access?', answer: 'According to the Phillies\' accessibility guide, sections 301-310 and the whole 400 level have no elevator access and no wheelchair seating. Fans who need those should pick seats on the Field Level or the 200 level.' },
    ],
    sections: [
      { name: 'Field Level 100s', tier: 'lower' },
      { name: 'PJ Fitzpatrick Rooftop', tier: 'lower' },
      { name: 'Philadelphia Insurance Club', tier: 'club' },
      { name: 'Cadillac Hall of Fame Club', tier: 'club' },
      { name: 'Pavilion 201-211', tier: 'upper' },
      { name: 'Arcade 233-237', tier: 'upper' },
      { name: '200 Level Left Field 241-245', tier: 'upper' },
      { name: 'Pavilion Deck 301-305', tier: 'upper' },
      { name: 'Terrace Level 306-333', tier: 'upper' },
      { name: 'Terrace Deck 412-434', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'pnc-park': {
    id: 'pnc-park',
    name: 'PNC Park',
    city: 'Pittsburgh',
    state: 'PA',
    capacity: 38362,
    type: 'stadium',
    homeTeams: ['Pittsburgh Pirates'],
    description: 'PNC Park opened in 2001 on Pittsburgh\'s North Shore. It was the first two-deck ballpark built in the US since 1953, so even the highest seat is only 88 feet from the field. The view across the outfield takes in the Roberto Clemente Bridge and the downtown skyline, and the right-field wall stands 21 feet high in honor of Clemente\'s number. Statues of Clemente, Stargell, Mazeroski and Wagner stand outside the gates, and a new left-field scoreboard went up in 2023. The Lower Bowl runs sections 101-132. Above it, the Pittsburgh Baseball Club Level has an indoor, climate-controlled concourse and wider cushioned seats, and the World Series Suites run down the left-field line. For value, look to the upper-level 300s and the left-field bleachers. TicketScan tracks PNC Park onsales and presale windows.',
    keywords: ['PNC Park tickets', 'Pittsburgh Pirates tickets', 'PNC Park seating chart', 'Pirates tickets', 'PNC Park events 2026', 'Pittsburgh baseball tickets'],
    faqs: [
      { question: 'What is the capacity of PNC Park?', answer: 'The Pirates\' own ballpark facts page lists 38,362. MLB.com\'s ballpark guide and Wikipedia give 38,747, a figure Wikipedia dates to 2018 from the Pirates media guide. The team page is used here; the two figures differ by under 400 seats.' },
      { question: 'Can you walk to PNC Park from downtown Pittsburgh?', answer: 'Yes. The Roberto Clemente Bridge closes to cars on game days, so fans can walk across the Allegheny River from downtown to the center-field gate.' },
    ],
    sections: [
      { name: 'Lower Bowl 101-132', tier: 'lower' },
      { name: 'Left Field Bleachers', tier: 'lower' },
      { name: 'Riverwalk', tier: 'lower' },
      { name: 'RE/MAX Select Realty Home Plate Club', tier: 'club' },
      { name: 'Pittsburgh Baseball Club Level', tier: 'club' },
      { name: 'Left Field Lounge', tier: 'club' },
      { name: 'The Porch', tier: 'club' },
      { name: 'Upper Level 300s', tier: 'upper' },
      { name: 'World Series Suites', tier: 'suite' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'petco-park': {
    id: 'petco-park',
    name: 'Petco Park',
    city: 'San Diego',
    state: 'CA',
    capacity: 39860,
    type: 'stadium',
    homeTeams: ['San Diego Padres'],
    description: 'Petco Park opened on April 8, 2004 in San Diego\'s East Village. The 1909 Western Metal Supply Co. Building stands in left field and doubles as the foul pole: a ball that hits its east wall is a home run. Gallagher Square, a grass park beyond center field, sells standing-room lawn tickets, and the Padres Hall of Fame opened in 2016. The seating capacity of 39,860 counts fixed seats only, before standing room and the lawn. The Lexus Club (lettered sections A-L) and the Field VIP seats sit behind home plate. The Terrace Level has in-seat service, from Terrace VIP 201-204 and Terrace Infield 205-210 out to the Terrace Pavilion 218-223. The Upper Deck 300s and Right Field Upper 227-235 are the budget options. TicketScan tracks when tickets for Petco Park events go on sale, including early presales.',
    keywords: ['Petco Park tickets', 'San Diego Padres tickets', 'Petco Park seating chart', 'Padres tickets', 'Petco Park events 2026', 'San Diego baseball tickets'],
    faqs: [
      { question: 'Is there a foul pole in left field at Petco Park?', answer: 'No. The Western Metal Supply Co. Building takes its place. A ball that strikes the building\'s east wall is a home run, and one that hits the south wall is foul.' },
      { question: 'What is a Gallagher Square ticket at Petco Park?', answer: 'Gallagher Square is the lawn beyond center field. Standing-room tickets there give you the grass and standing areas, and the Padres\' guide says they also get you into the Budweiser Loft and Craft Pier. They are the cheapest way into the ballpark.' },
    ],
    sections: [
      { name: 'Lexus Club A-L', tier: 'club' },
      { name: 'Field VIP', tier: 'lower' },
      { name: 'Field Infield', tier: 'lower' },
      { name: 'Field Box', tier: 'lower' },
      { name: 'Field Pavilion 121-127', tier: 'lower' },
      { name: 'Left Field Lower Box 126-134', tier: 'lower' },
      { name: 'Right Field Lower Box 129-137', tier: 'lower' },
      { name: 'Terrace VIP 201-204', tier: 'club' },
      { name: 'Terrace Infield 205-210', tier: 'club' },
      { name: 'Terrace Reserved 211-217', tier: 'upper' },
      { name: 'Terrace Pavilion 218-223', tier: 'upper' },
      { name: 'Right Field Upper 227-235', tier: 'upper' },
      { name: 'Upper Deck 300-328', tier: 'upper' },
      { name: 'Western Metal Supply Co. Suites', tier: 'suite' },
    ]
  },

  'oracle-park': {
    id: 'oracle-park',
    name: 'Oracle Park',
    city: 'San Francisco',
    state: 'CA',
    capacity: 40260,
    type: 'stadium',
    homeTeams: ['San Francisco Giants'],
    description: 'Oracle Park opened on April 11, 2000 on the China Basin waterfront, the first privately financed MLB ballpark since Dodger Stadium. Home runs to right field splash into McCovey Cove over a 25-foot wall, an 80-foot Coca-Cola bottle slide stands in left field, and a Willie Mays statue greets fans at the main gate. Lower Box seating runs 101-135, with the Blue Shield Field Club in the infield rows of 107-124. The Club Level covers 202-234, including the Diamond Seats in 213-218. The Arcade (145-152) is a narrow row of seats along the right-field wall, and the View Reserve outfield sections and Bleachers hold the lowest prices. TicketScan tracks when tickets for Oracle Park events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Oracle Park tickets', 'San Francisco Giants tickets', 'Oracle Park seating chart', 'Giants tickets', 'AT&T Park tickets', 'Oracle Park events 2026'],
    faqs: [
      { question: 'What is the capacity of Oracle Park?', answer: 'The Giants\' own ballpark guide gives about 40,260. Wikipedia lists 41,331 and MLB.com\'s general guide says roughly 42,300; the higher figures likely include standing room. The team figure is used here.' },
      { question: 'What are the Arcade seats at Oracle Park?', answer: 'Sections 145-152 run in a single narrow band right on top of the 25-foot right-field wall, just above McCovey Cove. They are close to the action and relatively inexpensive, but have a sharply angled view of home plate.' },
    ],
    sections: [
      { name: 'Batter\'s Box', tier: 'club' },
      { name: 'Dugout Club', tier: 'club' },
      { name: 'Blue Shield Field Club 107-124', tier: 'club' },
      { name: 'Lower Box 101-135', tier: 'lower' },
      { name: 'Bleachers 136-144', tier: 'lower' },
      { name: 'Arcade 145-152', tier: 'lower' },
      { name: 'Diamond Seats 213-218', tier: 'club' },
      { name: 'Club Infield 208-224', tier: 'club' },
      { name: 'Club Outfield 202-207, 225-228', tier: 'club' },
      { name: 'Club Left Field 229-234', tier: 'club' },
      { name: 'View Reserve Infield 308-323', tier: 'upper' },
      { name: 'View Reserve Outfield 302-307, 324-331', tier: 'upper' },
      { name: 'View Reserve Left Field 332-336', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  't-mobile-park': {
    id: 't-mobile-park',
    name: 'T-Mobile Park',
    city: 'Seattle',
    state: 'WA',
    capacity: 47943,
    type: 'stadium',
    homeTeams: ['Seattle Mariners'],
    description: 'T-Mobile Park opened on July 15, 1999 as Safeco Field and was renamed in 2019. Its three-panel retractable roof works like an umbrella: it covers the field and stands in about 15 minutes but never seals the park, so games feel close to outdoor temperature. The Main Level runs 102-150, and nearly 21,000 of the park\'s seats are on it. The Muckleshoot Diamond Club (sections 25-35) is behind home plate, and the Terrace Club covers 211-249. The T-Mobile \'Pen gathering area sits in left-center and the Hit It Here Café in right field. The View Level (306-347) and roughly 3,700 bleacher seats in sections 180-195 hold the lowest prices, and value-menu items under $5 are sold throughout the park. TicketScan tracks T-Mobile Park onsales and presale windows.',
    keywords: ['T-Mobile Park tickets', 'Seattle Mariners tickets', 'T-Mobile Park seating chart', 'Mariners tickets', 'Safeco Field tickets', 'Seattle baseball tickets'],
    faqs: [
      { question: 'What is the capacity of T-Mobile Park?', answer: 'The Mariners give the current seating capacity as 47,943, and MLB.com\'s 2026 ballpark guide gives the same number. Wikipedia lists 47,368. The team figure is used here.' },
      { question: 'Does the roof at T-Mobile Park close the stadium?', answer: 'No. The roof covers the field and seating like an umbrella but the sides stay open, so it keeps rain off without climate control. On a cool night, dress for the weather even with the roof closed.' },
    ],
    sections: [
      { name: 'Muckleshoot Diamond Club 25-35', tier: 'club' },
      { name: 'Microsoft Home Plate Club', tier: 'club' },
      { name: 'Premier Seats', tier: 'lower' },
      { name: 'Main Level 102-150', tier: 'lower' },
      { name: 'Bleachers 180-195', tier: 'lower' },
      { name: 'T-Mobile \'Pen', tier: 'lower' },
      { name: 'Hit It Here Café', tier: 'club' },
      { name: 'All-Star Club', tier: 'club' },
      { name: 'Terrace Club 211-249', tier: 'club' },
      { name: 'View Level 306-347', tier: 'upper' },
      { name: 'Suite Level S1-S69', tier: 'suite' },
    ]
  },

  'busch-stadium': {
    id: 'busch-stadium',
    name: 'Busch Stadium',
    city: 'St. Louis',
    state: 'MO',
    capacity: 43769,
    type: 'stadium',
    homeTeams: ['St. Louis Cardinals'],
    description: 'Busch Stadium opened on April 4, 2006 in downtown St. Louis, the third Cardinals ballpark to carry the Busch name, and the Cardinals won the World Series in its first season. The seating bowl looks out toward the Gateway Arch. Closest to the field are the CommunityAmerica Cardinals Club (sections 1-8) and the UMB Champions Club behind home plate. The Field Box ring runs from Cardinals Infield Box 141-144 through Home Plate Box 149-151 to Visitors Infield Box 156-159. Above that come the Loge (228-269), with the Redbird Club in 241-257 and Big Mac Land in 271-272, then the Pavilion 331-372 and the Terrace 431-454. The outfield bleachers (101-111 and 189-197) and the Terrace hold the value seats. TicketScan tracks when tickets for Busch Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Busch Stadium tickets', 'St. Louis Cardinals tickets', 'Busch Stadium seating chart', 'Cardinals tickets', 'Busch Stadium events 2026', 'St. Louis baseball tickets'],
    faqs: [
      { question: 'What is the capacity of Busch Stadium?', answer: 'The Cardinals\' own ballpark guide lists a total capacity of 43,769. Wikipedia gives 44,383 and an MLB.com guide article gives 44,494, both older figures from before seating changes. The team figure is used here.' },
      { question: 'Do you need a special ticket for the Budweiser Terrace at Busch Stadium?', answer: 'No. The Budweiser Terrace on Level 4 is open to every ticket holder, so fans in the upper deck can use it without buying anything extra.' },
    ],
    sections: [
      { name: 'CommunityAmerica Cardinals Club 1-8', tier: 'club' },
      { name: 'UMB Champions Club', tier: 'club' },
      { name: 'Cardinals Infield Box 141-144', tier: 'lower' },
      { name: 'Cardinals Home Box 145-148', tier: 'lower' },
      { name: 'Home Plate Box 149-151', tier: 'lower' },
      { name: 'Visitors Home Box 152-155', tier: 'lower' },
      { name: 'Visitors Infield Box 156-159', tier: 'lower' },
      { name: 'Field Box 135-140, 160-165', tier: 'lower' },
      { name: 'Bleachers 101-111, 189-197', tier: 'lower' },
      { name: 'Redbird Club 241-257', tier: 'club' },
      { name: 'Loge 228-269', tier: 'upper' },
      { name: 'Pavilion 331-372', tier: 'upper' },
      { name: 'Terrace 431-454', tier: 'upper' },
      { name: 'Party Suites & Legends Club', tier: 'suite' },
    ]
  },

  'tropicana-field': {
    id: 'tropicana-field',
    name: 'Tropicana Field',
    city: 'St. Petersburg',
    state: 'FL',
    capacity: 25025,
    type: 'stadium',
    homeTeams: ['Tampa Bay Rays'],
    description: 'Tropicana Field in St. Petersburg is home to the Tampa Bay Rays again in 2026. Hurricane Milton tore away the roof fabric in October 2024, so the Rays spent 2025 at Steinbrenner Field in Tampa. The rebuilt dome reopened on April 6, 2026, when the Rays hosted the Cubs. It is the world\'s largest cable-supported dome, which is why catwalk ground rules decide where fly balls that hit the roof land, and the Rays Touch Tank holds cownose rays behind the right-center wall. The upper deck stays tarped, which holds capacity to about 25,025. The premium seats are behind home plate: the DEX Home Plate Club, Two Rivers Home Plate Box, Chalk Box and The Baldwin Group Club. The lower-level outfield seats are where the cheapest tickets are. TicketScan tracks Tropicana Field onsales and presale windows.',
    keywords: ['Tropicana Field tickets', 'Tampa Bay Rays tickets', 'Tropicana Field seating chart', 'Rays tickets', 'Tropicana Field events 2026', 'St. Petersburg baseball tickets'],
    faqs: [
      { question: 'Where do the Tampa Bay Rays play in 2026?', answer: 'Back at Tropicana Field in St. Petersburg. After Hurricane Milton damaged the roof in October 2024, the Rays played the 2025 season at Steinbrenner Field in Tampa. The repaired dome hosted its first home game on April 6, 2026 against the Chicago Cubs.' },
      { question: 'Why is Tropicana Field capacity only about 25,000?', answer: 'The 300-level upper deck is tarped and not sold for Rays games, so MLB.com\'s 2026 guide lists capacity at 25,025. Opening the upper deck would add many thousands of seats, but the Rays keep it closed.' },
    ],
    sections: [
      { name: 'DEX Home Plate Club', tier: 'club' },
      { name: 'Two Rivers Home Plate Box', tier: 'club' },
      { name: 'Chalk Box', tier: 'club' },
      { name: 'Baseline Premier', tier: 'club' },
      { name: 'The Baldwin Group Club', tier: 'club' },
      { name: 'Fieldside Box', tier: 'lower' },
      { name: 'Lower Level Infield', tier: 'lower' },
      { name: 'Lower Level Outfield', tier: 'lower' },
      { name: 'Webull Suite Level Premier 203-206', tier: 'suite' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'globe-life-field': {
    id: 'globe-life-field',
    name: 'Globe Life Field',
    city: 'Arlington',
    state: 'TX',
    capacity: 40300,
    type: 'stadium',
    homeTeams: ['Texas Rangers'],
    description: 'Globe Life Field opened in 2020 in Arlington, across the street from the Rangers\' former home, Globe Life Park. Its retractable roof opens in about 12 minutes and keeps the Texas heat out of summer games. The Rangers list about 40,300 seats on seven levels. The Lexus Club and Shift4 Club sit behind home plate on the event level. Around them are Dugout Reserved (5-7 and 21-23), 3rd Base Box (8-12) and Corner Box, with the All You Can Eat seats in 27-33. The Mezzanine is split into Infield 107-121, Corner and Outfield zones, and the Pavilion (205-239) and Budweiser Sky Porch (201-204) are above it. The Upper Box 308-317 and Upper Reserved 300s are the cheapest way in. TicketScan tracks when tickets for Globe Life Field events go on sale, including early presales.',
    keywords: ['Globe Life Field tickets', 'Texas Rangers tickets', 'Globe Life Field seating chart', 'Rangers tickets Arlington', 'Globe Life Field events 2026', 'Dallas baseball tickets'],
    faqs: [
      { question: 'What are the All You Can Eat seats at Globe Life Field?', answer: 'Sections 27-33 on the event level in the outfield are sold as All You Can Eat seats, with ballpark staples included in the ticket price.' },
    ],
    sections: [
      { name: 'Lexus Club', tier: 'club' },
      { name: 'Shift4 Club', tier: 'club' },
      { name: 'Dugout Reserved 5-7, 21-23', tier: 'lower' },
      { name: '3rd Base Box 8-12', tier: 'lower' },
      { name: 'Corner Box 1-4, 22-26', tier: 'lower' },
      { name: 'All You Can Eat 27-33', tier: 'lower' },
      { name: 'Mezzanine Infield 107-121', tier: 'lower' },
      { name: 'Mezzanine Corner 101-106, 125-127', tier: 'lower' },
      { name: 'Mezzanine Outfield 128-142', tier: 'lower' },
      { name: 'Budweiser Sky Porch 201-204', tier: 'upper' },
      { name: 'Pavilion 205-239', tier: 'upper' },
      { name: 'Left Field Deck 240-244', tier: 'upper' },
      { name: 'Upper Box 308-317', tier: 'upper' },
      { name: 'Upper Reserved 301-307, 318-324', tier: 'upper' },
    ]
  },

  'nationals-park': {
    id: 'nationals-park',
    name: 'Nationals Park',
    city: 'Washington',
    state: 'DC',
    citySlug: 'washington-dc',
    capacity: 41373,
    type: 'stadium',
    homeTeams: ['Washington Nationals'],
    description: 'Nationals Park opened in March 2008 in the Navy Yard neighborhood along the Anacostia River. It was the first major professional stadium to earn LEED certification, it has 14 cherry trees, and the FIS Champions Club displays the 2019 World Series trophy. Premium seating starts at field level with the Terra Club (lettered A-E) and the PNC Diamond Club in 119-126, and the Dugout and Infield Boxes cover 114-118 and 127-131. The Baseline and Corner boxes run down both lines, and Outfield Reserved covers 100-107 and 138-143. On the 200 level, the FIS Champions Club (206-211 and 216-221) and the SI Tickets Club are behind the plate. The Gallery 300s and Upper Gallery 400s are the value seats. TicketScan tracks Nationals Park onsales and presale windows.',
    keywords: ['Nationals Park tickets', 'Washington Nationals tickets', 'Nationals Park seating chart', 'Nats tickets', 'Nationals Park events 2026', 'Washington DC baseball tickets'],
    faqs: [
      { question: 'Where are the cheapest seats at Nationals Park?', answer: 'The Upper Gallery (401-420) and the Gallery (301-321) upper decks, followed by Outfield Reserved in 100-107 and 138-143 at field level.' },
    ],
    sections: [
      { name: 'Terra Club A-E', tier: 'club' },
      { name: 'PNC Diamond Club 119-126', tier: 'club' },
      { name: 'Dugout & Infield Box 114-118, 127-131', tier: 'lower' },
      { name: 'Baseline Box 110-113, 132-134', tier: 'lower' },
      { name: 'Corner 108-110, 135-137', tier: 'lower' },
      { name: 'Outfield Reserved 100-107, 138-143', tier: 'lower' },
      { name: 'SI Tickets Club 201-205', tier: 'club' },
      { name: 'FIS Champions Club 206-211, 216-221', tier: 'club' },
      { name: 'FIS Champions Club MVP 212-215', tier: 'club' },
      { name: 'Mezzanine 222-229', tier: 'upper' },
      { name: 'Right Field Terrace 230-236', tier: 'upper' },
      { name: 'Scoreboard Pavilion 237-243', tier: 'upper' },
      { name: 'Gallery 301-321', tier: 'upper' },
      { name: 'Upper Gallery 401-420', tier: 'upper' },
    ]
  },
};
