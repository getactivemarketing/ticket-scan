// MLB ballparks, batch 1 of 2: 14 teams, Arizona through the Los Angeles Dodgers.
//
// Capacity sourcing, in order of preference:
//   1. The team's own ballpark page on mlb.com/<team> (facts-figures, history).
//      Used for Chase Field (48,633), Fenway Park (37,755 night), Great
//      American Ball Park (45,814), Kauffman Stadium (37,903) and Angel
//      Stadium (45,603).
//   2. MLB.com's per-park "Guide: Capacity, Seating Chart, Parking" feature
//      (mlb.com/news/featured/<park>-guide-...), for the parks whose team
//      pages print no capacity at all.
// Wikipedia was checked for every park and never overrides either source. It
// disagrees with the official figure at 11 of the 14 parks, usually because
// it cites a particular season's media guide. Where the gap matters, the
// entry carries an FAQ saying which number we publish and why. Two gaps are
// worth flagging: Wikipedia gives Camden Yards 42,455 for 2026 (MLB.com:
// 44,970) and Kauffman 38,053 after the 2026 fence move (team page: 37,903,
// last updated before about 150-230 seats were added in 2026). We publish
// the official number in both cases, but the official number may be the
// stale one.
//
// The MLB.com guide has two apparent typos next to team pages that disagree:
// Chase Field 48,263 (team: 48,633) and Fenway 37,775 (team: 37,755). The
// team figure is used for both.
//
// Section names and ranges come from each team's published seating map or
// A-Z guide. Where a zone's section numbers were not printed legibly, or
// the team names the zone without numbering it, the zone is named without
// numbers rather than guessed. That applies to all of Progressive Field and
// to most of Camden Yards and Dodger Stadium. `floor` is never used: there
// is no floor at a ballgame, and the tier renders as "Floor/Courtside".
//
// The Athletics play 2025-2027 at Sutter Health Park in West Sacramento, a
// Triple-A park they share with the River Cats, while their Las Vegas
// ballpark is built.

import type { Venue } from '../venue-types';

export const mlbVenues1: Record<string, Venue> = {
  'chase-field': {
    id: 'chase-field',
    name: 'Chase Field',
    city: 'Phoenix',
    state: 'AZ',
    capacity: 48633,
    type: 'stadium',
    homeTeams: ['Arizona Diamondbacks'],
    description: 'Chase Field seats 48,633 for Arizona Diamondbacks games in downtown Phoenix. It opened on March 31, 1998 as Bank One Ballpark and was renamed in 2005. Its retractable roof opens or closes in about four and a half minutes, and the air conditioning lets the D-backs play through the desert summer. It was the first MLB ballpark with a swimming pool, which sits 415 feet from home plate in right-center. On the field level, the Infield Box runs from section 118 to 126 and the Bleachers from 101 to 105 and 139 to 144. The 300 level, from Outfield Reserve 300-304 to Baseline View 305-309, is where the value is. TicketScan tracks when tickets for Chase Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Chase Field tickets', 'Arizona Diamondbacks tickets', 'Chase Field seating chart', 'D-backs tickets', 'Chase Field pool suite', 'Phoenix baseball tickets'],
    faqs: [
      { question: 'Is the roof closed at Chase Field?', answer: 'Chase Field has a retractable roof that opens or closes in about four and a half minutes, and the ballpark is air-conditioned by the Northwinds district cooling system. The roof is usually closed on hot summer days, so you will not be sitting in the Phoenix sun.' },
      { question: 'Why do sources list different capacities for Chase Field?', answer: 'The Diamondbacks\' ballpark facts page lists 48,633, which is the figure we use. Wikipedia lists 48,330, taken from recent team media guides, and the capacity has moved by a few hundred seats most seasons since 1998.' },
    ],
    sections: [
      { name: 'Field Boxes A-S (Clubhouse, Home Plate, Dugout, 1st & 3rd Base Box)', tier: 'club' },
      { name: 'Infield Box 118-126', tier: 'lower' },
      { name: 'Dugout Reserve 115-117, 127-129', tier: 'lower' },
      { name: 'Baseline Box 112-114, 130-132', tier: 'lower' },
      { name: 'Baseline Reserve 109-111, 133-135', tier: 'lower' },
      { name: 'Bullpen Reserve 106-108, 136-138', tier: 'lower' },
      { name: 'Bleachers 101-105, 139-144', tier: 'lower' },
      { name: 'Club Box 206-209, 211-214', tier: 'club' },
      { name: 'Club Reserve 200-205, 215-220', tier: 'club' },
      { name: 'All-You-Can-Eat Seats 221-223', tier: 'club' },
      { name: 'Infield Reserve 310-322', tier: 'upper' },
      { name: 'Baseline View 305-309, 323-327', tier: 'upper' },
      { name: 'Outfield Reserve 300-304, 328-332', tier: 'upper' },
      { name: 'Suites 210A-210I', tier: 'suite' },
    ]
  },

  'sutter-health-park': {
    id: 'sutter-health-park',
    name: 'Sutter Health Park',
    city: 'West Sacramento',
    state: 'CA',
    capacity: 14014,
    type: 'stadium',
    homeTeams: ['Athletics'],
    description: 'Sutter Health Park is the temporary home of the Athletics from 2025 through 2027, while their Las Vegas ballpark is built. The A\'s share it with the Triple-A Sacramento River Cats. It opened in 2000 as Raley Field and holds 14,014 including its lawn berm. Past the right-field fence you can see the gold Tower Bridge. The fixed seats form a single lower bowl: sections 101-111 on the first-base side, 111-113 behind home plate and 113-123 on the third-base side, with the 201-206 deck beside the Solon Club in right. Home Run Hill, the general-admission berm in right field, is the cheapest way in. TicketScan tracks Sutter Health Park onsales, including presale windows that open before the public onsale.',
    keywords: ['Sutter Health Park tickets', 'Athletics tickets', "A's tickets Sacramento", 'Sutter Health Park seating chart', 'Home Run Hill tickets', 'West Sacramento baseball tickets'],
    faqs: [
      { question: 'Which seats at Sutter Health Park are out of the sun?', answer: 'The ballpark faces east-northeast, so the sun sets beyond the third-base side and home plate. Fans on the first-base and right-field side look toward the sunset, so third-base-side seats are the better choice if you want the sun behind you. The Solon and Gilt-Edge clubs are both shaded.' },
      { question: 'What is Home Run Hill?', answer: 'Home Run Hill is the general-admission grass berm beyond the right-field fence. You can buy a berm ticket by itself, and any fixed-seat ticket also gets you onto the hill. The 14,014 capacity includes the berm; there are 10,624 fixed seats.' },
    ],
    sections: [
      { name: 'Lower Level 1B Side 101-111', tier: 'lower' },
      { name: 'Lower Level Behind Home Plate 111-113', tier: 'lower' },
      { name: 'Lower Level 3B Side 113-123', tier: 'lower' },
      { name: 'Right Field Deck 201-206', tier: 'upper' },
      { name: 'Home Run Hill (GA berm)', tier: 'upper' },
      { name: 'Governor\'s Club', tier: 'club' },
      { name: 'Legacy Club', tier: 'club' },
      { name: 'Solon Club', tier: 'club' },
      { name: 'Gilt-Edge Club', tier: 'club' },
      { name: 'Luxury Suites', tier: 'suite' },
    ]
  },

  'truist-park': {
    id: 'truist-park',
    name: 'Truist Park',
    city: 'Atlanta',
    state: 'GA',
    capacity: 41147,
    type: 'stadium',
    homeTeams: ['Atlanta Braves'],
    description: 'Truist Park seats 41,147 for Atlanta Braves games. It opened in 2017 as SunTrust Park and anchors The Battery Atlanta, a mixed-use district outside the Interstate 75 and 285 interchange. Monument Garden, on the first-level concourse behind home plate, holds the statue of Hank Aaron\'s 715th home run and is free to anyone inside the gates. The seating bowl is numbered by level: 100 Lower, 200 Lexus, 300 Vista and 400 Grandstand. The Home Run Porch covers sections 144-151 and the Coors Light Chop House 152-160 in right field. The Grandstand, sections 410-444, is the cheapest level, and general admission sits at its left-field end. TicketScan tracks when tickets for Truist Park events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Truist Park tickets', 'Atlanta Braves tickets', 'Truist Park seating chart', 'Braves tickets', 'Chop House Truist Park', 'The Battery Atlanta'],
    faqs: [
      { question: 'Where can I cool off at Truist Park?', answer: 'Truist Park has no roof, but the Braves list several air-conditioned spaces. General ticket holders can use the Chop House, Home Depot Clubhouse and Chipper\'s Corner. The Xfinity Club, Truist Club, Hank Aaron Terrace, Delta Sky360 Club and Champions Suites are air-conditioned for premium ticket holders.' },
      { question: 'Why do sources list different capacities for Truist Park?', answer: 'MLB.com\'s Truist Park guide lists 41,147, which is the figure we use. Wikipedia lists 41,108, taken from recent Braves media guides. The two are within 40 seats of each other.' },
    ],
    sections: [
      { name: 'Truist Club 1-9, 22-30', tier: 'club' },
      { name: 'Dugout Seats', tier: 'lower' },
      { name: '100 Level Infield', tier: 'lower' },
      { name: 'Home Run Porch 144-151', tier: 'lower' },
      { name: 'Coors Light Chop House 152-160', tier: 'lower' },
      { name: 'Lexus Level 1B 210-218', tier: 'club' },
      { name: 'Xfinity Club Seats 220-231', tier: 'club' },
      { name: 'Lexus Level 3B 233-244', tier: 'club' },
      { name: 'Hank Aaron Terrace 244-246', tier: 'club' },
      { name: 'Vista Level 1B 311-323', tier: 'upper' },
      { name: 'Vista Home Plate 324-328', tier: 'upper' },
      { name: 'Vista Level 3B 329-347', tier: 'upper' },
      { name: 'Grandstand 410-444', tier: 'upper' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'oriole-park-at-camden-yards': {
    id: 'oriole-park-at-camden-yards',
    name: 'Oriole Park at Camden Yards',
    city: 'Baltimore',
    state: 'MD',
    capacity: 44970,
    type: 'stadium',
    homeTeams: ['Baltimore Orioles'],
    description: 'Oriole Park at Camden Yards opened in 1992. It was the first of the retro ballparks and is the home of the Baltimore Orioles. Beyond the right-field wall runs the B&O Warehouse, built between 1899 and 1905, and between the warehouse and the park is Eutaw Street. Home runs that land on Eutaw Street are marked with bronze plaques. The left-field wall was pushed back for 2022 and partly brought back in for 2025. The lower bowl uses sections 1-98, with the Bleachers in 90-98. The Left Field Club Box runs from 272 to 288, and the 300-level upper deck is the cheapest place to sit. TicketScan tracks when tickets for Camden Yards events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Camden Yards tickets', 'Baltimore Orioles tickets', 'Oriole Park seating chart', 'Orioles tickets', 'Eutaw Street', 'Camden Yards bleachers'],
    faqs: [
      { question: 'Can I watch batting practice at Camden Yards?', answer: 'Yes. Every ticket holder can watch batting practice from Eutaw Street, Legends Park, the Flag Court and the Bleachers in sections 90-98. Eutaw Street stays open through the game.' },
      { question: 'What is the capacity of Camden Yards?', answer: 'MLB.com\'s Camden Yards guide lists 44,970, which is the figure we use. Wikipedia lists 42,455 for 2026, taken from the Orioles media guide, and 44,487 for 2022-2025. The park has lost seats in several renovations since it opened with 48,876 in 1992.' },
    ],
    sections: [
      { name: 'Lower Box', tier: 'lower' },
      { name: 'Lower Level Infield', tier: 'lower' },
      { name: 'Bird Bath Splash Zone 84, 86', tier: 'lower' },
      { name: 'Bleachers 90-98', tier: 'lower' },
      { name: 'Coors Light Roof Deck', tier: 'lower' },
      { name: 'The Home Plate Club', tier: 'club' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Right Field Porch 206-210', tier: 'club' },
      { name: 'Left Field Club Box 272-288', tier: 'club' },
      { name: 'Upper Deck 300s', tier: 'upper' },
      { name: 'Suites & Party Suites', tier: 'suite' },
    ]
  },

  'fenway-park': {
    id: 'fenway-park',
    name: 'Fenway Park',
    city: 'Boston',
    state: 'MA',
    capacity: 37755,
    type: 'stadium',
    homeTeams: ['Boston Red Sox'],
    description: 'Fenway Park, home of the Boston Red Sox, is the oldest ballpark in the majors. Its first game was played on April 20, 1912, and it was rebuilt in 1934. The left-field wall, the Green Monster, stands 37 feet high, and seats on top of it were added in 2003 (Monster sections 1-10). Field Box seats wrap the infield in sections 9-82, with Loge Box behind them in 98-165. Behind the Loge Box, the covered wooden Grandstand runs from section 1 to 33. The Bleachers, sections 34-43, sit out by the bullpens and are usually the cheapest way in. The Aura Pavilion covers the fourth and fifth levels. TicketScan tracks Fenway Park onsales, including presale windows that open before the public onsale.',
    keywords: ['Fenway Park tickets', 'Boston Red Sox tickets', 'Fenway Park seating chart', 'Green Monster seats', 'Fenway bleachers tickets', 'Red Sox tickets'],
    faqs: [
      { question: 'Which Fenway Park seats are covered if it rains?', answer: 'The infield Grandstand seats, sections 1-33, sit under the roof of the upper levels, so they stay dry in light rain. The Field Box, Loge Box and Bleachers are open to the sky. Some Grandstand seats are behind support posts, so check the view before you buy.' },
      { question: 'Why does Fenway have two capacities?', answer: 'The Red Sox publish 37,755 for night games and 37,305 for day games, and we list the night figure. Wikipedia uses the same pair. The MLB.com guide\'s 37,775 appears to be a typo.' },
    ],
    sections: [
      { name: 'Dugout Box', tier: 'club' },
      { name: 'Field Box Club', tier: 'club' },
      { name: 'Field Box 9-82', tier: 'lower' },
      { name: 'Right Field Box 1-8, 87-97', tier: 'lower' },
      { name: 'Loge Box 98-165', tier: 'lower' },
      { name: 'Grandstand 1-33', tier: 'lower' },
      { name: 'Bleachers 34-43', tier: 'lower' },
      { name: 'Green Monster 1-10', tier: 'club' },
      { name: 'Right Field Roof Box 23-43', tier: 'upper' },
      { name: 'Dell Technologies Club 1-6', tier: 'club' },
      { name: 'Aura Pavilion 1-14', tier: 'club' },
      { name: 'Aura Pavilion Box 1-10', tier: 'club' },
      { name: 'Aura Club 1-5', tier: 'club' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'rate-field': {
    id: 'rate-field',
    name: 'Rate Field',
    city: 'Chicago',
    state: 'IL',
    capacity: 40615,
    type: 'stadium',
    homeTeams: ['Chicago White Sox'],
    description: 'Rate Field seats 40,615 for Chicago White Sox games on the South Side. It opened in 1991 as the new Comiskey Park and is two blocks from the Red Line\'s Sox-35th station. Near section 161, the Old Comiskey fan shower carries on a tradition from the old park. Two blue seats in the outfield mark the 2005 World Series home runs by Paul Konerko and Scott Podsednik. The 100 level infield runs from section 108 to 156. The 300 Club Level, sections 311-357, comes with in-seat service and a climate-controlled lounge. The 500 level upper deck, sections 506-558, has the cheapest seats. TicketScan tracks when tickets for Rate Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Rate Field tickets', 'Chicago White Sox tickets', 'Rate Field seating chart', 'White Sox tickets', 'Guaranteed Rate Field', 'South Side baseball tickets'],
    faqs: [
      { question: 'What is the Rate Club at Rate Field?', answer: 'The Rate Club sits behind home plate on the lower suite level, in what used to be the press box. The ticket is all-inclusive, with a pregame buffet and in-seat waitstaff.' },
      { question: 'Is there somewhere to cool off at Rate Field?', answer: 'Yes. The Old Comiskey fan shower near section 161 carries on a tradition from the old park, and fans use it to cool off on hot summer afternoons.' },
    ],
    sections: [
      { name: '100 Level Infield 108-156', tier: 'lower' },
      { name: '100 Level Outfield 100-107, 157-164', tier: 'lower' },
      { name: 'Fan Deck', tier: 'lower' },
      { name: 'Miller Lite Landing', tier: 'lower' },
      { name: 'CIBC Scout Club', tier: 'club' },
      { name: 'Rate Club', tier: 'club' },
      { name: '300 Club Level 311-357', tier: 'club' },
      { name: 'Stadium Club', tier: 'club' },
      { name: '500 Level Upper Deck 506-558', tier: 'upper' },
      { name: 'Suite Levels (200 & 400)', tier: 'suite' },
    ]
  },

  'great-american-ball-park': {
    id: 'great-american-ball-park',
    name: 'Great American Ball Park',
    city: 'Cincinnati',
    state: 'OH',
    capacity: 45814,
    type: 'stadium',
    homeTeams: ['Cincinnati Reds'],
    description: 'Great American Ball Park has been the home of the Cincinnati Reds since March 31, 2003. It sits on the Ohio River, and its upper deck looks across the water to Kentucky. The Reds list its seating capacity at 45,814. The Diamond Seats, sections 1-5, fill the first eight rows behind home plate and include the Lexus Diamond Club. The Infield Box covers sections 113-121 and 127-133, and in right field the Sun/Moon Deck (140-146) recalls old Crosley Field. The Bleachers (401-406) and the View Level (509-537) are the cheapest seats. All-you-can-eat seats are sold behind sections 144 and 428. TicketScan tracks Great American Ball Park onsales, including presale windows that open before the public onsale.',
    keywords: ['Great American Ball Park tickets', 'Cincinnati Reds tickets', 'Great American Ball Park seating chart', 'Reds tickets', 'GABP tickets', 'Cincinnati baseball tickets'],
    faqs: [
      { question: 'Where should I sit for Reds fireworks nights?', answer: 'The fireworks go off over the right-field side. The Reds suggest that fans in the Sun/Moon Deck, sections 140-146, move to the concourse or the Fan Zone for a better view once the show starts.' },
      { question: 'Why do sources list different capacities for Great American Ball Park?', answer: 'The Reds\' ballpark facts page lists 45,814 (up from 42,271 when it opened), which is the figure we use. Wikipedia lists 43,500 for 2021 on, so it will look different on other sites.' },
    ],
    sections: [
      { name: 'Diamond Seats 1-5', tier: 'club' },
      { name: 'Scout Box 22-25', tier: 'club' },
      { name: 'Scout 122-126', tier: 'club' },
      { name: 'Infield Box 113-121, 127-133', tier: 'lower' },
      { name: 'Field Box 109-112, 134-137', tier: 'lower' },
      { name: 'Terrace Line 107-108, 138-139', tier: 'lower' },
      { name: 'Terrace Outfield 101-106', tier: 'lower' },
      { name: 'Sun/Moon Deck 140-146', tier: 'lower' },
      { name: 'Club Home 221-228', tier: 'club' },
      { name: 'Club Seating 301-307', tier: 'club' },
      { name: 'Bleachers 401-406', tier: 'upper' },
      { name: 'Mezzanine 411-419', tier: 'upper' },
      { name: 'View Level Box 420-437', tier: 'upper' },
      { name: 'View Level 509-537', tier: 'upper' },
    ]
  },

  'progressive-field': {
    id: 'progressive-field',
    name: 'Progressive Field',
    city: 'Cleveland',
    state: 'OH',
    capacity: 33530,
    type: 'stadium',
    homeTeams: ['Cleveland Guardians'],
    description: 'Progressive Field opened on April 4, 1994 as Jacobs Field and is the home of the Cleveland Guardians. The left-field wall stands 19 feet high, and Heritage Park, in center field since 2007, honors the franchise\'s history. A 2023-2025 renovation rebuilt the upper deck, added the Terrace District in left field and the Carnegie Club behind home plate, and began replacing the green seats with blue ones. The lower bowl runs from section 103 to 185 and is sold as Field Box, Lower Box and Lower Reserved, with the John Adams Bleachers in left field. The cheapest seats are Upper Reserved and Upper Bleachers in the 500 level. TicketScan tracks when tickets for Progressive Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Progressive Field tickets', 'Cleveland Guardians tickets', 'Progressive Field seating chart', 'Guardians tickets', 'Progressive Field bleachers', 'Cleveland baseball tickets'],
    faqs: [
      { question: 'Can I buy standing room at Progressive Field?', answer: 'Yes. The District Ticket is a standing-room ticket that includes a first drink. Standing spots include the Corner Bar, the left- and right-field drink rails, the Miller Lite Home Run Porch, Heritage Plaza, the Blue Moon Terrace Garden and Terrace Hall.' },
      { question: 'Why do sources list different capacities for Progressive Field?', answer: 'MLB.com\'s Progressive Field guide lists 33,530, which is the figure we use. Wikipedia lists 34,820, taken from the Guardians\' 2025 media guide. The number has moved several times as renovations removed seats and replaced them with social spaces.' },
    ],
    sections: [
      { name: 'Field Box', tier: 'lower' },
      { name: 'Lower Box', tier: 'lower' },
      { name: 'Lower Reserved', tier: 'lower' },
      { name: 'Bullpen Seats', tier: 'lower' },
      { name: 'John Adams Bleachers', tier: 'lower' },
      { name: 'Carnegie Club', tier: 'club' },
      { name: 'Discount Drug Mart Club', tier: 'club' },
      { name: 'Terrace Club', tier: 'club' },
      { name: 'View Box', tier: 'club' },
      { name: 'Family Deck', tier: 'upper' },
      { name: 'Upper Box', tier: 'upper' },
      { name: 'Upper Reserved', tier: 'upper' },
      { name: 'Upper Bleachers', tier: 'upper' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'coors-field': {
    id: 'coors-field',
    name: 'Coors Field',
    city: 'Denver',
    state: 'CO',
    capacity: 46891,
    type: 'stadium',
    homeTeams: ['Colorado Rockies'],
    description: 'Coors Field opened in 1995 in Denver\'s LoDo district and seats 46,891 for Colorado Rockies games, or 50,144 with standing room. It has been one of the best parks for hitters in baseball since it opened. The SandLot, which also opened in 1995, was the first brewery inside a major league park. A single row of purple seats in the upper deck marks exactly 5,280 feet above sea level. The Infield Box runs from section 120 to 141, and the Pavilion (151-160) sits below the scoreboard in left-center. The Rockpile, sections 401-403 in center field, is one of the cheapest tickets in baseball, and the Rooftop in right field is standing room. TicketScan tracks Coors Field onsales, including presale windows that open before the public onsale.',
    keywords: ['Coors Field tickets', 'Colorado Rockies tickets', 'Coors Field seating chart', 'Rockpile tickets', 'Coors Field Rooftop', 'Denver baseball tickets'],
    faqs: [
      { question: 'How do Rockpile tickets work at Coors Field?', answer: 'The Rockpile, sections 401-403 in center field, is the Rockies\' cheapest seating. Some tickets go on sale in advance. On game day, seats are sold from two hours before first pitch at the Rockpile ticket office near Gate A, with a $1 price for fans 12 and under or 55 and over.' },
      { question: 'Where is the mile-high row at Coors Field?', answer: 'In the upper deck, one row of seats is painted purple because it sits exactly one mile, 5,280 feet, above sea level. It rings the 300 level, so any upper reserved ticket gets you close to it.' },
    ],
    sections: [
      { name: 'Infield Box 120-141', tier: 'lower' },
      { name: 'Midfield Box 118-119, 142-143', tier: 'lower' },
      { name: 'Outfield Box 116-117, 144-145', tier: 'lower' },
      { name: 'Corner Outfield Box 110-115, 146-150', tier: 'lower' },
      { name: 'Right Field Box 105-109', tier: 'lower' },
      { name: 'Pavilion 151-160', tier: 'lower' },
      { name: 'Club Level Infield 221-227, 234-241', tier: 'club' },
      { name: 'Club Level Outfield 214-219, 242-247', tier: 'club' },
      { name: 'Right Field Mezzanine 201-209', tier: 'upper' },
      { name: 'Reserved Infield 321-340', tier: 'upper' },
      { name: 'Reserved Outfield 310-319, 341-347', tier: 'upper' },
      { name: 'The Rooftop 301-309, 311-313', tier: 'upper' },
      { name: 'The Rockpile 401-403', tier: 'upper' },
      { name: 'Suites 1-62', tier: 'suite' },
    ]
  },

  'comerica-park': {
    id: 'comerica-park',
    name: 'Comerica Park',
    city: 'Detroit',
    state: 'MI',
    capacity: 40988,
    type: 'stadium',
    homeTeams: ['Detroit Tigers'],
    description: 'Comerica Park opened in 2000 and seats 40,988 for Detroit Tigers games. The ballpark was laid out to frame the downtown skyline, and the Tigers point out that with no upper-deck seats in the outfield, no park has a better view of a downtown. The center-field fountain is called Liquid Fireworks. There is a Ferris wheel behind section 131 and a carousel in the Big Cat Court. The Priority Club sits behind home plate in sections 1-5, and the Infield Box covers 118-137. Kaline\'s Corner fills the right-field corner (107-111) and the Pavilion sits in left (144-151). The Upper Grandstand, sections 338-343, is where the value is. TicketScan tracks when tickets for Comerica Park events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Comerica Park tickets', 'Detroit Tigers tickets', 'Comerica Park seating chart', 'Tigers tickets', 'Kaline\'s Corner', 'Detroit baseball tickets'],
    faqs: [
      { question: 'Why does the right-field upper deck at Comerica Park feel closer to the field?', answer: 'From past first base to the right-field line, the Mezzanine (sections 210-219) has no suite level beneath it. That leaves it about 15 feet lower than the main upper deck, so those roughly 4,000 seats sit closer to the field.' },
    ],
    sections: [
      { name: 'Priority Club 1-5', tier: 'club' },
      { name: 'On-Deck Circle', tier: 'club' },
      { name: 'Infield Box 118-137', tier: 'lower' },
      { name: 'Lower Baseline Box 112-114', tier: 'lower' },
      { name: 'Outfield Box 116-117, 138-140', tier: 'lower' },
      { name: 'Left Field Baseline Box 141-143', tier: 'lower' },
      { name: 'Pavilion 144-151', tier: 'lower' },
      { name: 'Kaline\'s Corner 107-111', tier: 'lower' },
      { name: 'Bleachers & Right Field Grandstand 101-106', tier: 'lower' },
      { name: 'Tiger Club', tier: 'club' },
      { name: 'Mezzanine 210-219', tier: 'upper' },
      { name: 'Upper Box Infield 321-337', tier: 'upper' },
      { name: 'Upper Grandstand 338-343', tier: 'upper' },
      { name: 'Champions Club & Suites', tier: 'suite' },
    ]
  },

  'daikin-park': {
    id: 'daikin-park',
    name: 'Daikin Park',
    city: 'Houston',
    state: 'TX',
    capacity: 41592,
    type: 'stadium',
    homeTeams: ['Houston Astros'],
    description: 'Daikin Park seats 41,592 for Houston Astros games. It opened in 2000 as Enron Field, was Minute Maid Park from 2002 to 2024, and incorporates the 1911 Union Station building. A replica 1860s locomotive runs along an 800-foot track above left field. Below it, the Landry\'s Crawford Boxes (sections 100-103) sit just 315 feet from home plate, the shortest left-field line in the majors. The Dugout Boxes cover sections 112-126, and the Honda Club Level runs 205-236. The View Deck (409-431) and the Outfield Deck (405-408 and 432-434) have the cheapest tickets. TicketScan tracks Daikin Park onsales, including presale windows that open before the public onsale.',
    keywords: ['Daikin Park tickets', 'Houston Astros tickets', 'Daikin Park seating chart', 'Minute Maid Park tickets', 'Crawford Boxes tickets', 'Astros tickets'],
    faqs: [
      { question: 'Is the roof closed at Daikin Park?', answer: 'Daikin Park has a three-panel retractable roof that covers more than six acres and opens or closes in 12 to 20 minutes. The park is air-conditioned when the roof is closed, which is most of the Houston summer.' },
      { question: 'Why do sources list different capacities for Daikin Park?', answer: 'MLB.com\'s Daikin Park guide lists 41,592, which is the figure we use. Wikipedia lists 41,168, taken from the Astros\' 2017 media guide.' },
    ],
    sections: [
      { name: 'Phillips 66 Diamond Club', tier: 'club' },
      { name: 'Insperity Club 70-75', tier: 'club' },
      { name: 'Dugout Boxes 112-126', tier: 'lower' },
      { name: 'Field Box 104-111, 127-134', tier: 'lower' },
      { name: 'Landry\'s Crawford Boxes 100-103', tier: 'lower' },
      { name: 'Bullpen Boxes 150-156', tier: 'lower' },
      { name: 'Honda Club Level 205-236', tier: 'club' },
      { name: 'Mezzanine 250-255', tier: 'upper' },
      { name: 'Terrace Deck 305-334', tier: 'upper' },
      { name: 'View Deck 409-431', tier: 'upper' },
      { name: 'Outfield Deck 405-408, 432-434', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'kauffman-stadium': {
    id: 'kauffman-stadium',
    name: 'Kauffman Stadium',
    city: 'Kansas City',
    state: 'MO',
    capacity: 37903,
    type: 'stadium',
    homeTeams: ['Kansas City Royals'],
    description: 'Kauffman Stadium opened in 1973 as Royals Stadium and took the name of Royals founder Ewing Kauffman in 1993. Its best-known feature is the 322-foot-wide water spectacular that runs from left-center to right-center. A 2007-2009 renovation added a 360-degree concourse, the Outfield Experience and the Royals Hall of Fame. For 2026 the Royals moved the outfield fences in and lowered the wall to 8 1/2 feet. The CommunityAmerica Crown Club (sections 1-6) and the UMB Diamond Club (126-130) are behind home plate. The Fountain Seats (201-203) put you right beside the water. The View Level, sections 401-439, has the lowest prices. TicketScan tracks when tickets for Kauffman Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Kauffman Stadium tickets', 'Kansas City Royals tickets', 'Kauffman Stadium seating chart', 'Royals tickets', 'Kauffman fountain seats', 'Kansas City baseball tickets'],
    faqs: [
      { question: 'Will I get wet in the Fountain Seats at Kauffman Stadium?', answer: 'You might. The Fountain Seats (sections 201-203) and the Fountain Deck sit right behind the outfield fountains, and on a windy day the spray can reach them. You cannot enter the fountains.' },
      { question: 'What is the capacity of Kauffman Stadium in 2026?', answer: 'The Royals\' ballpark history page lists 37,903, which is the figure we use. For 2026 the fences were moved in and about 150 seats were added in left field and 80 drink-rail seats in right, so Wikipedia now shows 38,053.' },
    ],
    sections: [
      { name: 'CommunityAmerica Crown Club 1-6', tier: 'club' },
      { name: 'UMB Diamond Club 126-130', tier: 'club' },
      { name: 'Field Level Box 106-148', tier: 'lower' },
      { name: 'Home Run Box 101-105, 150-152', tier: 'lower' },
      { name: 'Fountain Seats 201-203', tier: 'lower' },
      { name: 'Plaza Level 204-249', tier: 'lower' },
      { name: 'Home Run Plaza 250-252', tier: 'lower' },
      { name: 'Loge Infield 305-318', tier: 'club' },
      { name: 'Loge Outfield 301-304, 319-325', tier: 'club' },
      { name: 'View Level 401-439', tier: 'upper' },
      { name: 'Brew & View 401-402', tier: 'upper' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'angel-stadium': {
    id: 'angel-stadium',
    name: 'Angel Stadium',
    city: 'Anaheim',
    state: 'CA',
    capacity: 45603,
    type: 'stadium',
    homeTeams: ['Los Angeles Angels'],
    description: 'Angel Stadium opened in 1966 and is the home of the Los Angeles Angels. It was enlarged for the NFL Rams in 1980, then renovated back into a ballpark in 1997-98, and it hosted the 2002 World Series. The 230-foot Big A sign in the parking lot lights up after every Angels win. The rock-pile California Spectacular in left-center shoots off fireworks after home runs. The Lexus Diamond Club covers field sections 114-122. The Terrace Level runs 201-233, and the Right Field Pavilion (241-249) and Left Field Pavilion (256-260) are in the outfield. The cheapest seats are in the View Level, sections 401-436 and 501-540. TicketScan tracks Angel Stadium onsales, including presale windows that open before the public onsale.',
    keywords: ['Angel Stadium tickets', 'Los Angeles Angels tickets', 'Angel Stadium seating chart', 'Angels tickets', 'Anaheim baseball tickets', 'Big A tickets'],
    faqs: [
      { question: 'Why do sources list different capacities for Angel Stadium?', answer: 'The Angels\' ballpark history pages list 45,603, which is the figure we use. MLB.com\'s stadium guide and Wikipedia both list 45,517.' },
      { question: 'Which Angel Stadium seats are behind the netting?', answer: 'The protective netting covers the field-level sections 109 to 127, dugout to dugout. That includes all of the Lexus Diamond Club (114-122) and the Field and Dugout MVP sections on either side.' },
    ],
    sections: [
      { name: 'Lexus Diamond Club 114-122', tier: 'club' },
      { name: 'Field & Dugout MVP 109-113, 123-127', tier: 'lower' },
      { name: 'Field Box 101-108, 128-133', tier: 'lower' },
      { name: 'Field Reserved 134-135', tier: 'lower' },
      { name: 'Right Field MVP 236-240', tier: 'lower' },
      { name: 'Right Field Pavilion 241-249', tier: 'lower' },
      { name: 'Left Field Pavilion 256-260', tier: 'lower' },
      { name: 'Terrace Level 201-233', tier: 'upper' },
      { name: 'Don Julio Club', tier: 'club' },
      { name: 'Club Level 301-351', tier: 'club' },
      { name: 'Lower View 401-436', tier: 'upper' },
      { name: 'View Level 501-540', tier: 'upper' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'dodger-stadium': {
    id: 'dodger-stadium',
    name: 'Dodger Stadium',
    city: 'Los Angeles',
    state: 'CA',
    capacity: 56000,
    type: 'stadium',
    homeTeams: ['Los Angeles Dodgers'],
    description: 'Dodger Stadium opened on April 10, 1962. It seats 56,000, the most of any ballpark in the majors, and the Dodgers now brand it UNIQLO Field at Dodger Stadium. It has hosted the 1980 and 2022 All-Star Games and two World Baseball Classic finals, and it is set to host Olympic baseball in 2028. Statues of Jackie Robinson and Sandy Koufax stand in Centerfield Plaza. The Yaamava\' Dugout Club sits behind home plate. The Lexus Baseline Club takes sections 26BL-44BL on the first-base side and 27BL-45BL on the third-base side. Above them rise the Field, Loge, Reserve and Top Deck levels; the Top Deck and outfield Pavilions are cheapest. TicketScan tracks when tickets for Dodger Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Dodger Stadium tickets', 'Los Angeles Dodgers tickets', 'Dodger Stadium seating chart', 'Dodgers tickets', 'Dodger Stadium Top Deck', 'UNIQLO Field at Dodger Stadium'],
    faqs: [
      { question: 'Can I bring food into Dodger Stadium?', answer: 'Yes. The Dodgers allow outside food as long as it is in a clear bag no larger than 12 by 12 by 6 inches.' },
    ],
    sections: [
      { name: 'Yaamava\' Dugout Club', tier: 'club' },
      { name: 'Lexus Baseline Club 26BL-45BL', tier: 'club' },
      { name: 'Field Level', tier: 'lower' },
      { name: 'Loge Level', tier: 'lower' },
      { name: 'Left Pavilion', tier: 'lower' },
      { name: 'Right Pavilion', tier: 'lower' },
      { name: 'Stadium Club', tier: 'club' },
      { name: 'Reserve Level', tier: 'upper' },
      { name: 'Top Deck', tier: 'upper' },
      { name: 'Club Level Suites', tier: 'suite' },
    ]
  },
};
