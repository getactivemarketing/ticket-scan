// FBS batch 1 — 13 of 14 assigned programs (Boise State Broncos Football omitted; see report).
//
// Names, cities, capacities and section facts are sourced per-stadium from each school's own
// athletics facility page or that venue's dedicated Wikipedia article — never from the aggregate
// "List of NCAA Division I FBS football stadiums" table, which runs stale as schools renovate.
// Where a seating chart's exact section numbering could not be confirmed against an official or
// single-venue source, the zone is named without invented numbers (see Arizona and Arkansas
// State below), matching the convention set by MetLife Stadium in the NFL reference batch.
// `floor` is never used: there is no floor at a football game.

import type { Venue } from '../venue-types';

export const fbsStadiums1: Record<string, Venue> = {
  'falcon-stadium': {
    id: 'falcon-stadium',
    name: 'Falcon Stadium',
    city: 'Colorado Springs',
    state: 'CO',
    capacity: 39441,
    type: 'stadium',
    homeTeams: ['Air Force Academy Falcons Football'],
    description: 'Falcon Stadium seats 39,441 for Air Force Falcons home games at the U.S. Air Force Academy, opened in 1962 at a cost of $3.5 million. The bowl is intentionally asymmetric: the west side carries two large upper tiers, while the east side has one large tier and several smaller ones, giving the building its distinctive silhouette. Eighty-eight skybox seats sit above the sideline stands, and capacity was reduced from a peak above 52,000 during a mid-2000s renovation. TicketScan tracks Falcon Stadium onsales and presale windows for Air Force home games.',
    keywords: ['Falcon Stadium tickets', 'Air Force Falcons tickets', 'Falcon Stadium seating chart', 'Air Force football tickets 2026', 'Colorado Springs football tickets'],
    faqs: [
      { question: 'Why is Falcon Stadium shaped unevenly on each side?', answer: 'The west side was built with two large upper tiers while the east side has one large tier and several smaller ones, an asymmetric design that gives the stadium its distinctive look from outside.' },
    ],
    sections: [
      { name: 'Home Sideline', tier: 'lower' },
      { name: 'Visitor Sideline', tier: 'lower' },
      { name: 'End Zone', tier: 'lower' },
      { name: 'West Upper Deck', tier: 'upper' },
      { name: 'East Upper Deck', tier: 'upper' },
      { name: 'Skyboxes', tier: 'suite' },
    ]
  },

  'bryant-denny-stadium': {
    id: 'bryant-denny-stadium',
    name: 'Bryant-Denny Stadium',
    city: 'Tuscaloosa',
    state: 'AL',
    capacity: 100077,
    type: 'stadium',
    homeTeams: ['Alabama Crimson Tide Football'],
    description: 'Bryant-Denny Stadium seats 100,077 for Alabama Crimson Tide games on the Tuscaloosa campus, one of the largest football venues in the country. The lower bowl wraps the field in numbered sideline and end-zone sections, with the North Zone and South Zone forming the premium end-zone seating. The Stadium Club, Ivory Club and Scholarship Club form the building’s club tier, while the North Field Suites and South Field Suites sit above the sidelines. A second deck rings the upper level on both sides. TicketScan tracks Bryant-Denny Stadium onsales and presale windows.',
    keywords: ['Bryant-Denny Stadium tickets', 'Alabama Crimson Tide tickets', 'Bryant-Denny Stadium seating chart', 'Alabama football tickets 2026', 'Tuscaloosa football tickets'],
    faqs: [
      { question: 'What are the club options at Bryant-Denny Stadium?', answer: 'The Stadium Club, Ivory Club and Scholarship Club are Alabama’s three named club levels, each with indoor lounge access. The North Field Suites and South Field Suites are separate, higher-priced private suite tiers above the end zones.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'North Zone (end zone)', tier: 'lower' },
      { name: 'South Zone (end zone)', tier: 'lower' },
      { name: 'Upper Deck', tier: 'upper' },
      { name: 'Stadium Club', tier: 'club' },
      { name: 'Ivory Club', tier: 'club' },
      { name: 'Scholarship Club', tier: 'club' },
      { name: 'North Field Suites', tier: 'suite' },
      { name: 'South Field Suites', tier: 'suite' },
    ]
  },

  'kidd-brewer-stadium': {
    id: 'kidd-brewer-stadium',
    name: 'Kidd Brewer Stadium',
    city: 'Boone',
    state: 'NC',
    capacity: 30000,
    type: 'stadium',
    homeTeams: ['Appalachian State University Mountaineer Football'],
    description: 'Kidd Brewer Stadium, known to fans as "The Rock," seats 30,000 for Appalachian State Mountaineers games in Boone. The west side is the main stand, with student general-admission seating in the lower sections and reserved seating above; the east side mixes student, reserved and visiting-fan seating, including a dedicated visitor and band area. A named North Endzone Club provides premium seating behind the north end zone. Seating maps split each sideline into a 100-series lower tier and a 200-series upper tier. TicketScan tracks Kidd Brewer Stadium onsales and presale windows.',
    keywords: ['Kidd Brewer Stadium tickets', 'Appalachian State Mountaineers tickets', 'The Rock stadium tickets', 'App State football tickets 2026', 'Boone NC football tickets'],
    faqs: [
      { question: 'Where do visiting fans sit at Kidd Brewer Stadium?', answer: 'The visiting-team and visiting-band section is on the east side of the lower bowl. Some seating guides also list additional east-side upper sections as visitor overflow depending on the game.' },
    ],
    sections: [
      { name: 'West Side Student Section (lower)', tier: 'lower' },
      { name: 'West Side Reserved (upper)', tier: 'upper' },
      { name: 'East Side Student Section (lower)', tier: 'lower' },
      { name: 'East Side Visitor & Band Section', tier: 'lower' },
      { name: 'East Side Reserved (upper)', tier: 'upper' },
      { name: 'North Endzone Club', tier: 'club' },
    ]
  },

  'mountain-america-stadium': {
    id: 'mountain-america-stadium',
    name: 'Mountain America Stadium',
    city: 'Tempe',
    state: 'AZ',
    capacity: 53599,
    type: 'stadium',
    homeTeams: ['Arizona State Sun Devils Football'],
    description: 'Mountain America Stadium, home of the Arizona State Sun Devils and known on the field as Frank Kush Field, seats 53,599 in Tempe. It was renamed from Sun Devil Stadium in 2023 under a 15-year naming-rights deal. The 100-level lower bowl rings the field, three named club tiers, the North Terrace Club, San Tan Ford Club and MidFirst Loge, sit above it, and the 200- and 300-level sections form the upper deck. TicketScan tracks when tickets for Mountain America Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Mountain America Stadium tickets', 'Arizona State Sun Devils tickets', 'Sun Devil Stadium tickets', 'ASU football tickets 2026', 'Tempe football tickets'],
    faqs: [
      { question: 'Is Mountain America Stadium the same building as Sun Devil Stadium?', answer: 'Yes. Arizona State renamed Sun Devil Stadium to Mountain America Stadium in 2023 after a naming-rights agreement with Mountain America Credit Union. The playing surface is still called Frank Kush Field.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline (100 Level)', tier: 'lower' },
      { name: 'Lower Bowl End Zone (100 Level)', tier: 'lower' },
      { name: 'North Terrace Club', tier: 'club' },
      { name: 'San Tan Ford Club', tier: 'club' },
      { name: 'MidFirst Loge', tier: 'club' },
      { name: 'Upper Deck (200/300 Level)', tier: 'upper' },
    ]
  },

  'casino-del-sol-stadium': {
    id: 'casino-del-sol-stadium',
    name: 'Casino Del Sol Stadium',
    city: 'Tucson',
    state: 'AZ',
    capacity: 50800,
    type: 'stadium',
    homeTeams: ['Arizona Wildcats Football'],
    description: 'Casino Del Sol Stadium, the University of Arizona Wildcats’ home in Tucson, seats 50,800 and was known as Arizona Stadium for 97 years before a 2025 naming-rights deal with the Pascua Yaqui Tribe’s Casino Del Sol. The west side is the traditional home grandstand, with the press box, loge and club seating; the east side’s taller grandstand holds ZonaZoo, Arizona’s student section. The north end is enclosed by the Lowell-Stevens Football Facility, which houses premium club space, while the south end remains an open bowl. TicketScan tracks Casino Del Sol Stadium onsales and presale windows.',
    keywords: ['Casino Del Sol Stadium tickets', 'Arizona Wildcats tickets', 'Arizona Stadium seating chart', 'Arizona football tickets 2026', 'Tucson football tickets'],
    faqs: [
      { question: 'Is Casino Del Sol Stadium the same as Arizona Stadium?', answer: 'Yes. The University of Arizona renamed Arizona Stadium to Casino Del Sol Stadium in November 2025 under a 20-year naming-rights deal. Many tickets, maps and directions still use the Arizona Stadium name.' },
    ],
    sections: [
      { name: 'West Side Lower Bowl (Home)', tier: 'lower' },
      { name: 'ZonaZoo Student Section (East Side)', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'North End Zone (Lowell-Stevens Football Facility)', tier: 'club' },
      { name: 'Loge Premium (Scholarship Suites)', tier: 'club' },
      { name: 'Skybox Club', tier: 'suite' },
      { name: 'Private Skyboxes', tier: 'suite' },
    ]
  },

  'razorback-stadium': {
    id: 'razorback-stadium',
    name: 'Donald W. Reynolds Razorback Stadium',
    city: 'Fayetteville',
    state: 'AR',
    capacity: 76212,
    type: 'stadium',
    homeTeams: ['Arkansas Razorbacks Football'],
    description: 'Donald W. Reynolds Razorback Stadium seats 76,212 for Arkansas Razorbacks games in Fayetteville, its capacity since the north end was mostly enclosed before the 2018 season. The 100-level lower bowl includes numbered south end-zone sections 121-128, with wheelchair seating behind them. The 200-level club ring runs sections 201-249 and includes the Capital Club and SEC Club lounges, and the 500-level upper deck runs sections 501-550. The stadium also holds 132 skyboxes and luxury suites. TicketScan tracks Razorback Stadium onsales and presale windows.',
    keywords: ['Razorback Stadium tickets', 'Arkansas Razorbacks tickets', 'Donald W. Reynolds Razorback Stadium seating chart', 'Arkansas football tickets 2026', 'Fayetteville football tickets'],
    faqs: [
      { question: 'What sections are in the south end zone at Razorback Stadium?', answer: 'The south end-zone lower bowl runs sections 121 through 128, with accessible wheelchair seating located directly behind that block.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level South End Zone 121-128', tier: 'lower' },
      { name: '100 Level North End Zone', tier: 'lower' },
      { name: 'Club Level 201-249 (Capital Club / SEC Club)', tier: 'club' },
      { name: '500 Level Upper Deck 501-550', tier: 'upper' },
      { name: 'Skyboxes & Luxury Suites', tier: 'suite' },
    ]
  },

  'centennial-bank-stadium': {
    id: 'centennial-bank-stadium',
    name: 'Centennial Bank Stadium',
    city: 'Jonesboro',
    state: 'AR',
    capacity: 30406,
    type: 'stadium',
    homeTeams: ['Arkansas State Red Wolves Football'],
    description: 'Centennial Bank Stadium seats 30,406 for Arkansas State Red Wolves games in Jonesboro, formerly known as ASU Stadium before its naming-rights sale. The bowl has grandstands on three sides: the west side carries the press box and shorter sideline sections, the east side is the longer sideline grandstand, and the north end forms a third stand, while the south end is occupied by the Red Wolves’ football facility rather than seating. A dedicated visiting-fans section sits on the east side, and chairback seating is available in select reserved rows. TicketScan tracks Centennial Bank Stadium onsales and presale windows.',
    keywords: ['Centennial Bank Stadium tickets', 'Arkansas State Red Wolves tickets', 'Centennial Bank Stadium seating chart', 'Arkansas State football tickets 2026', 'Jonesboro football tickets'],
    faqs: [
      { question: 'Why does Centennial Bank Stadium not have seating on all four sides?', answer: 'The south end zone is occupied by the Arkansas State football program’s training facility rather than a grandstand, so the seating bowl is effectively open on three sides: west, east and north.' },
    ],
    sections: [
      { name: 'West Sideline (Press-Box Side)', tier: 'lower' },
      { name: 'East Sideline', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'Visiting Fans Section', tier: 'lower' },
      { name: 'General Admission Seating', tier: 'lower' },
      { name: 'Chairback Reserved Seating', tier: 'club' },
    ]
  },

  'michie-stadium': {
    id: 'michie-stadium',
    name: 'Michie Stadium',
    city: 'West Point',
    state: 'NY',
    capacity: 36000,
    type: 'stadium',
    homeTeams: ['Army Black Knights Football'],
    description: 'Michie Stadium seats approximately 36,000 for Army Black Knights games at the United States Military Academy in West Point, its capacity for the 2026 season after a two-year, $170 million project rebuilt the East Stands with 8,000 new seats. During construction, capacity had been capped at 30,000; the standard pre-renovation figure was 38,000. The Army sideline runs sections 11-14 and the visitor sideline sections 28-29. The Hoffman Club Level offers indoor seating between the 50-yard lines, and the rebuilt East Stands add new premium club areas alongside a dedicated section for the Corps of Cadets. TicketScan tracks Michie Stadium onsales and presale windows.',
    keywords: ['Michie Stadium tickets', 'Army Black Knights tickets', 'Michie Stadium seating chart', 'Army football tickets 2026', 'West Point football tickets'],
    faqs: [
      { question: 'What changed at Michie Stadium for the 2026 season?', answer: 'A two-year Preservation Project replaced the 1962 East Stands with a new 160,000-square-foot structure holding 8,000 additional seats, premium club areas and a dedicated Corps of Cadets section, raising capacity to about 36,000.' },
    ],
    sections: [
      { name: 'Army Sideline 11-14', tier: 'lower' },
      { name: 'Visitor Sideline 28-29', tier: 'lower' },
      { name: 'Corps of Cadets Section (East Stands)', tier: 'lower' },
      { name: 'Hoffman Club Level', tier: 'club' },
      { name: 'East Stands Premium Club', tier: 'club' },
      { name: 'West Upper Deck', tier: 'upper' },
    ]
  },

  'jordan-hare-stadium': {
    id: 'jordan-hare-stadium',
    name: 'Jordan-Hare Stadium',
    city: 'Auburn',
    state: 'AL',
    capacity: 88043,
    type: 'stadium',
    homeTeams: ['Auburn University Tigers Football'],
    description: 'Jordan-Hare Stadium, with the field named Pat Dye Field, seats 88,043 for Auburn Tigers games, a capacity reached after a 2023 premium-seating addition raised it from 87,451. The lower bowl wraps the field in sections 1-46, with the student section concentrated around sections 17-27. The west upper deck runs sections 47-62 and the east upper deck runs sections 99-114, so sideline numbering is not continuous around the building. Club and suite seating sits between the lower bowl and upper deck along the sidelines. TicketScan tracks Jordan-Hare Stadium onsales and presale windows.',
    keywords: ['Jordan-Hare Stadium tickets', 'Auburn Tigers tickets', 'Jordan-Hare Stadium seating chart', 'Auburn football tickets 2026', 'Auburn football tickets'],
    faqs: [
      { question: 'Why do the upper deck section numbers at Jordan-Hare Stadium jump from 62 to 99?', answer: 'The lower bowl uses sections 1-46. The west upper deck continues at 47-62, and the east upper deck is numbered separately starting at 99, so the section numbers are not continuous around the stadium.' },
    ],
    sections: [
      { name: 'Lower Bowl 1-46', tier: 'lower' },
      { name: 'Student Section 17-27', tier: 'lower' },
      { name: 'West Upper Deck 47-62', tier: 'upper' },
      { name: 'East Upper Deck 99-114', tier: 'upper' },
      { name: 'Club Level (Sideline)', tier: 'club' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'scheumann-stadium': {
    id: 'scheumann-stadium',
    name: 'Scheumann Stadium',
    city: 'Muncie',
    state: 'IN',
    capacity: 22500,
    type: 'stadium',
    homeTeams: ['Ball State University Cardinals Football'],
    description: 'Scheumann Stadium seats 22,500 for Ball State Cardinals games in Muncie. The west side is the home and premium side, built around the Kozel Communications Center, which holds the press box, club seats and private suites; the east side is the visitor and student grandstand, with student seating concentrated on its southern half. A dedicated one-tier grandstand closes the south end zone, while the north end is an open grass hill used as general-admission, family-style seating. The club level offers 184 seats on the second floor of the west structure. TicketScan tracks Scheumann Stadium onsales and presale windows.',
    keywords: ['Scheumann Stadium tickets', 'Ball State Cardinals tickets', 'Scheumann Stadium seating chart', 'Ball State football tickets 2026', 'Muncie football tickets'],
    faqs: [
      { question: 'Is there general-admission lawn seating at Scheumann Stadium?', answer: 'Yes. The north end zone is an open grass hill rather than a fixed grandstand, offering a relaxed, family-oriented general-admission area separate from the reserved sideline seating.' },
    ],
    sections: [
      { name: 'West Sideline (Home)', tier: 'lower' },
      { name: 'East Sideline (Visitor/Student)', tier: 'lower' },
      { name: 'South End Zone Grandstand', tier: 'lower' },
      { name: 'North End Zone Grass Hill', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'mclane-stadium': {
    id: 'mclane-stadium',
    name: 'McLane Stadium',
    city: 'Waco',
    state: 'TX',
    capacity: 45140,
    type: 'stadium',
    homeTeams: ['Baylor University Bears Football'],
    description: 'McLane Stadium seats 45,140 for Baylor Bears games on the Brazos River in Waco, opened in 2014 and designed with room to expand toward roughly 55,000. Reserved lower-bowl seating runs the sidelines and end zones, with a grassy berm area near the videoboard for general-admission seating. Premium options include about 1,200 outdoor club seats, 39 suites and 74 loge boxes. TicketScan tracks when tickets for McLane Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['McLane Stadium tickets', 'Baylor Bears tickets', 'McLane Stadium seating chart', 'Baylor football tickets 2026', 'Waco football tickets'],
    faqs: [
      { question: 'Is there lawn seating at McLane Stadium?', answer: 'Yes. Baylor sells general-admission berm seating on the grass in front of the videoboard, a lower-cost alternative to the reserved sideline and end-zone sections.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Berm (General Admission)', tier: 'lower' },
      { name: 'Outdoor Club Seats', tier: 'club' },
      { name: 'Loge Boxes', tier: 'club' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'alumni-stadium-boston-college': {
    id: 'alumni-stadium-boston-college',
    name: 'Alumni Stadium',
    city: 'Chestnut Hill',
    state: 'MA',
    capacity: 44500,
    type: 'stadium',
    homeTeams: ['Boston College'],
    description: 'Alumni Stadium seats 44,500 for Boston College Eagles football games in Chestnut Hill. The official venue map orients the bowl by campus landmark rather than compass sideline names: the east end sits by Fish Field House, the west end by Conte Forum, the south end toward Beacon Street and Merkert House, and the north end toward the Lower Campus Lawn. Student seating is assigned by school, with the College of Arts and Sciences seated at midfield. A dedicated accessible seating mezzanine and a reserved visitor section round out the chart. TicketScan tracks Alumni Stadium onsales and presale windows.',
    keywords: ['Alumni Stadium tickets', 'Boston College Eagles tickets', 'Alumni Stadium seating chart', 'Boston College football tickets 2026', 'Chestnut Hill football tickets'],
    faqs: [
      { question: 'How is student seating organized at Alumni Stadium?', answer: 'Boston College assigns student seats by school rather than by class year. Morrissey College of Arts and Sciences students sit at midfield, with other schools assigned nearby sections toward the Merkert and Lower Campus Lawn ends.' },
    ],
    sections: [
      { name: 'Visitor Section', tier: 'lower' },
      { name: 'MCAS Student Section (midfield)', tier: 'lower' },
      { name: 'Fish Field House End (East End)', tier: 'lower' },
      { name: 'Conte Forum End (West End)', tier: 'lower' },
      { name: 'Beacon Street / Merkert South End', tier: 'lower' },
      { name: 'Accessible Seating Mezzanine', tier: 'upper' },
    ]
  },

  'doyt-perry-stadium': {
    id: 'doyt-perry-stadium',
    name: 'Doyt L. Perry Stadium',
    city: 'Bowling Green',
    state: 'OH',
    capacity: 24000,
    type: 'stadium',
    homeTeams: ['Bowling Green Falcons Football'],
    description: 'Doyt L. Perry Stadium, known to fans as "The Doyt," seats 24,000 for Bowling Green Falcons games. The venue is a single-tier bowl rather than a multi-level stadium: even-numbered sections 8 through 22 sit on the east side, and odd-numbered sections 7 through 21 sit on the west, press-box side, with several west sections sold as unreserved general admission. The Sebo Athletic Center encloses the north end, including a first-floor stadium club overlooking the field, while the south end holds booster suites and the main scoreboard. TicketScan tracks Doyt Perry Stadium onsales and presale windows.',
    keywords: ['Doyt Perry Stadium tickets', 'Bowling Green Falcons tickets', 'The Doyt seating chart', 'Bowling Green football tickets 2026', 'Bowling Green Ohio football tickets'],
    faqs: [
      { question: 'Does Doyt Perry Stadium have an upper deck?', answer: 'No. The stadium is built as a single-tier bowl on the east and west sidelines. The Sebo Athletic Center at the north end and the President’s Box atop the east stand are the closest things to elevated premium seating.' },
    ],
    sections: [
      { name: 'East Stands 8-22 (Reserved)', tier: 'lower' },
      { name: 'West Stands 7-21 (Press-Box Side)', tier: 'lower' },
      { name: 'North End (Sebo Athletic Center)', tier: 'club' },
      { name: 'South End (Booster Suites & Scoreboard)', tier: 'suite' },
      { name: 'Stadium Club (West Press Box)', tier: 'club' },
      { name: "President's Box (East Side)", tier: 'suite' },
    ]
  },
};
