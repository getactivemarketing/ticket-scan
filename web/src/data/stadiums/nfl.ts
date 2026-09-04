// The 30 NFL stadiums (32 teams: Giants/Jets share MetLife, Rams/Chargers share SoFi).
//
// Capacity comes from each stadium's own Wikipedia article or its official
// venue/team site, NOT from the aggregate "List of current NFL stadiums"
// table, which lags the dedicated articles. Where the two disagree the
// dedicated source wins; where a venue's own site disagrees with its article,
// the venue's site wins (Lucas Oil Stadium publishes 67,000 for football,
// against the 63,000 house-reduction base in its infobox).
//
// Two figures are deliberately configuration-specific: EverBank Stadium is
// 42,465, the reduced 2026 capacity published in the venue's official A-Z
// guide while the Stadium of the Future rebuild is under way, and Bank of
// America Stadium is 75,037, the current figure — its fan-facing seating
// work does not begin until 2027, so this is not a post-renovation number.
//
// Section names come from each venue's published seating chart. Where a
// sideline/corner/end-zone split could not be sourced to a specific set of
// section numbers, the zone is named without numbers rather than guessed.
// `floor` is deliberately never used: there is no floor at a football game.

import type { Venue } from '../venue-types';

export const nflStadiums: Record<string, Venue> = {
  'acrisure-stadium': {
    id: 'acrisure-stadium',
    name: 'Acrisure Stadium',
    city: 'Pittsburgh',
    state: 'PA',
    capacity: 68400,
    type: 'stadium',
    homeTeams: ['Pittsburgh Steelers', 'Pittsburgh Panthers College Football'],
    description: 'Acrisure Stadium seats 68,400 for Pittsburgh Steelers home games on the North Shore, an open-air natural-grass bowl that opened in 2001 and also hosts Pitt football. The 100 level wraps the field, and its sideline sections carry the highest prices in the building. The club ring is split into two named halves, the UPMC East Club in sections 205-216 and the West Club in 229-240, and a club ticket admits you to either lounge. The 500 level upper deck is where the value sits. TicketScan tracks when tickets for Acrisure Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Acrisure Stadium tickets', 'Pittsburgh Steelers tickets', 'Acrisure Stadium seating chart', 'Acrisure Stadium events 2026', 'Pittsburgh football tickets'],
    faqs: [
      { question: 'Which side of Acrisure Stadium is shadier?', answer: 'The west side, sections 229-240 on the club level and the 100 level sections below them, is the home side and gets shade earlier in an afternoon game. The east side takes the sun.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Field Club 1-5', tier: 'club' },
      { name: 'UPMC East Club 205-216', tier: 'club' },
      { name: 'West Club 229-240', tier: 'club' },
      { name: 'North Club 001-015', tier: 'club' },
      { name: '500 Level Upper Sideline', tier: 'upper' },
      { name: '500 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'allegiant-stadium': {
    id: 'allegiant-stadium',
    name: 'Allegiant Stadium',
    city: 'Paradise',
    state: 'NV',
    capacity: 65000,
    type: 'stadium',
    homeTeams: ['Las Vegas Raiders', 'UNLV Running Rebels Football'],
    description: 'Allegiant Stadium seats 65,000 for Las Vegas Raiders and UNLV Rebels football games and is fully enclosed and climate-controlled, with a translucent roof and the Al Davis Memorial Torch behind the north end zone. Sections marked with a C on the 100 level sideline are club seats served by the Modelo Cantina Club on the visitor side and the Twitch Lounge on the Raiders side. The 200 level carries general seating only in the corners and end zones because the sidelines there are suites and loge boxes. The 300 and 400 levels hold the least expensive seats. TicketScan tracks Allegiant Stadium onsales and presale windows.',
    keywords: ['Allegiant Stadium tickets', 'Las Vegas Raiders tickets', 'Allegiant Stadium seating chart', 'Allegiant Stadium events 2026', 'Las Vegas football tickets'],
    faqs: [
      { question: 'Why are there no 200 level sideline seats at Allegiant Stadium?', answer: 'Both 200 level sidelines are given over to suites and loge boxes, so general 200 level seating exists only in the corners and behind the end zones, in sections 201-208, 218-232 and 242-248.' },
    ],
    sections: [
      { name: '100 Level Sideline 106-108, 116-118, 128-130, 138-140', tier: 'lower' },
      { name: '100 Level Corner 104-105, 119-120, 126-127, 141-142', tier: 'lower' },
      { name: '100 Level End Zone 101-103, 121-125, 143-144', tier: 'lower' },
      { name: 'Club Sideline C109-C115, C131-C137', tier: 'club' },
      { name: '200 Level Corner & End Zone 201-208, 218-232, 242-248', tier: 'club' },
      { name: '300 Level Premium 310-314, 336-340', tier: 'club' },
      { name: '300 Level Sideline 306-309, 315-318, 332-335, 341-344', tier: 'upper' },
      { name: '300 Level Corner & End Zone 303-305, 319-331, 345-347', tier: 'upper' },
      { name: '400 Level Sideline 406-409, 415-418, 432-435, 441-444', tier: 'upper' },
      { name: '400 Level Corner & End Zone 419-421, 429-431', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'arrowhead-stadium': {
    id: 'arrowhead-stadium',
    name: 'Arrowhead Stadium',
    city: 'Kansas City',
    state: 'MO',
    capacity: 73426,
    type: 'stadium',
    homeTeams: ['Kansas City Chiefs'],
    description: 'Arrowhead Stadium, officially GEHA Field at Arrowhead Stadium, seats 73,426 for Kansas City Chiefs games and has been the team home since 1972. It is an open-air bowl on Bermuda grass in the Truman Sports Complex, sharing its parking with Kauffman Stadium next door. The 100 level runs unbroken around the field, the club mezzanine sits above it with the CommunityAmerica and Founders clubs at midfield, and the 300 level upper deck holds the cheapest seats. TicketScan tracks when tickets for Arrowhead Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Arrowhead Stadium tickets', 'Kansas City Chiefs tickets', 'Arrowhead Stadium seating chart', 'GEHA Field tickets', 'Arrowhead Stadium events 2026', 'Kansas City football tickets'],
    faqs: [
      { question: 'Is Arrowhead Stadium the same as GEHA Field?', answer: 'Yes. GEHA Field at Arrowhead Stadium is the full name after the 2021 naming-rights deal. Tickets, listings and directions still commonly say Arrowhead Stadium.' },
    ],
    sections: [
      { name: '100 Level Sideline 101-114, 130-143', tier: 'lower' },
      { name: '100 Level Corner 115-118, 126-129, 144-147', tier: 'lower' },
      { name: '100 Level End Zone 119-125, 148-150', tier: 'lower' },
      { name: 'CommunityAmerica Club / Founders Club', tier: 'club' },
      { name: 'Club Mezzanine Sideline', tier: 'club' },
      { name: 'Club Mezzanine Corner & End Zone', tier: 'club' },
      { name: '300 Level Upper Sideline', tier: 'upper' },
      { name: '300 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'att-stadium': {
    id: 'att-stadium',
    name: 'AT&T Stadium',
    city: 'Arlington',
    state: 'TX',
    capacity: 80000,
    type: 'stadium',
    homeTeams: ['Dallas Cowboys'],
    description: 'AT&T Stadium seats 80,000 for Dallas Cowboys home games and expands past 100,000 for a Super Bowl or a College Football Playoff final, under a retractable roof and the two end-zone video boards that hang over the field. The 100 level sideline is the premium view; the 200 club levels sit behind glass with indoor access; the 400 upper deck is where the value is, and the corners of it are the cheapest seats in the building. TicketScan tracks when tickets for AT&T Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['AT&T Stadium tickets', 'Dallas Cowboys tickets', 'AT&T Stadium seating chart', 'AT&T Stadium events 2026', 'Arlington football tickets'],
    faqs: [
      { question: 'What are the best value seats at AT&T Stadium?', answer: 'The 400 level sideline sections give you the full field at the lowest sideline price in the building. The end-zone corners of the 400 level are cheaper still, and the video board is visible from everywhere.' },
    ],
    sections: [
      { name: '100 Level Sideline 105-115, 137-147', tier: 'lower' },
      { name: '100 Level Corner 101-104, 116, 134, 148-150', tier: 'lower' },
      { name: '100 Level End Zone 117-118, 135-136', tier: 'lower' },
      { name: 'Hall of Fame Club', tier: 'club' },
      { name: 'Mezzanine Sideline (200 Level)', tier: 'club' },
      { name: 'Upper Sideline (300 Level)', tier: 'upper' },
      { name: 'Upper Corner & End Zone (400 Level)', tier: 'upper' },
      { name: 'Star Suites', tier: 'suite' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'bank-of-america-stadium': {
    id: 'bank-of-america-stadium',
    name: 'Bank of America Stadium',
    city: 'Charlotte',
    state: 'NC',
    capacity: 75037,
    type: 'stadium',
    homeTeams: ['Carolina Panthers'],
    description: 'Bank of America Stadium seats 75,037 for Carolina Panthers games in uptown Charlotte and also hosts Charlotte FC. Its numbering is unusual: the 200 sections are not a second deck but extra rows behind the 100 level in both end zones, so the building runs 100 level, a middle club ring in the 300s, and a 500 level upper deck. The Silver Club occupies the 300s sidelines and corners. The Panthers bench sits in front of sections 131-133, the visitors in front of 111-113. TicketScan tracks Bank of America Stadium onsales and presale windows.',
    keywords: ['Bank of America Stadium tickets', 'Carolina Panthers tickets', 'Bank of America Stadium seating chart', 'Charlotte FC tickets', 'Bank of America Stadium events 2026', 'Charlotte football tickets'],
    faqs: [
      { question: 'Are the 200 level sections at Bank of America Stadium an upper deck?', answer: 'No. Unlike most NFL stadiums, the 200 numbered sections here sit on the lower level, directly behind the 100 sections in both end zones. The real upper deck is the 500 level.' },
    ],
    sections: [
      { name: '100 Level Sideline 108-115, 128-135', tier: 'lower' },
      { name: '100 Level Corner 106-107, 116-117, 126-127, 136-137', tier: 'lower' },
      { name: '100 Level End Zone 101-105, 118-125, 138-140', tier: 'lower' },
      { name: 'Middle Level End Zone 201-206, 224-234, 252-256', tier: 'club' },
      { name: 'Silver Club Sideline 313-318, 341-346', tier: 'club' },
      { name: 'Silver Club Corner & End Zone 308-312, 319-323, 336-340, 347-351', tier: 'club' },
      { name: '500 Level Sideline 512-517, 539-544', tier: 'upper' },
      { name: '500 Level Corner 509-511, 518-521, 536-538, 545-548', tier: 'upper' },
      { name: '500 Level End Zone 501-508, 522-535, 549-554', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'caesars-superdome': {
    id: 'caesars-superdome',
    name: 'Caesars Superdome',
    city: 'New Orleans',
    state: 'LA',
    capacity: 73208,
    type: 'stadium',
    homeTeams: ['New Orleans Saints'],
    description: 'Caesars Superdome seats 73,208 for New Orleans Saints games and has been a fixed-roof dome downtown since 1975, reopening after a renovation that ran through 2024. Its levels carry names rather than plain numbers: Plaza is the 100s, the Loge ring is split across the 200s and 300s, the 300 and 400 levels are private suites, and the Terrace is the 500s and 600s. Four club lounges sit on the 200 Loge level. The 600 Terrace is the top deck and the cheapest way in. TicketScan tracks Caesars Superdome onsales and presale windows.',
    keywords: ['Caesars Superdome tickets', 'New Orleans Saints tickets', 'Caesars Superdome seating chart', 'Superdome events 2026', 'New Orleans football tickets'],
    faqs: [
      { question: 'What do the Superdome level names mean?', answer: 'Plaza is the 100 level closest to the field, Loge is the 200 and 300 seating rings above it, the 300 and 400 levels also hold private suites, and Terrace covers the 500 and 600 levels at the top.' },
    ],
    sections: [
      { name: 'Plaza Level Sideline (100 Level)', tier: 'lower' },
      { name: 'Plaza Level Corner (100 Level)', tier: 'lower' },
      { name: 'Plaza Level End Zone (100 Level)', tier: 'lower' },
      { name: '200 Loge Level 201-283', tier: 'club' },
      { name: '300 Loge Level 301-348', tier: 'club' },
      { name: 'Mercedes-Benz End Zone Club', tier: 'club' },
      { name: '500 Terrace Level 501-559', tier: 'upper' },
      { name: '600 Terrace Level 601-652', tier: 'upper' },
      { name: '300 & 400 Suite Levels', tier: 'suite' },
    ]
  },

  'empower-field-at-mile-high': {
    id: 'empower-field-at-mile-high',
    name: 'Empower Field at Mile High',
    city: 'Denver',
    state: 'CO',
    capacity: 76125,
    type: 'stadium',
    homeTeams: ['Denver Broncos'],
    description: 'Empower Field at Mile High seats 76,125 for Denver Broncos games, an open-air Kentucky bluegrass field that opened in 2001 a mile above sea level. The lower bowl sidelines are sections 102-108 and 120-126, with the Broncos bench in front of 104-106 and the visitors in front of 122-124. The 200 level club ring and the suites sit above them, and the seating then steps up through the 300 level and the 500 level at the top. TicketScan tracks when tickets for Empower Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Empower Field at Mile High tickets', 'Denver Broncos tickets', 'Empower Field seating chart', 'Mile High Stadium tickets', 'Empower Field events 2026', 'Denver football tickets'],
    faqs: [
      { question: 'Which sections are behind the Broncos bench?', answer: 'The Broncos sideline runs in front of lower-bowl sections 104, 105 and 106. The visiting team occupies the sideline in front of sections 122, 123 and 124.' },
    ],
    sections: [
      { name: '100 Level Sideline 102-108, 120-126', tier: 'lower' },
      { name: '100 Level Corner & End Zone 100-101, 109-119, 127-135', tier: 'lower' },
      { name: 'Club Level 228-236', tier: 'club' },
      { name: 'United Club Lounge / 5280 Room', tier: 'club' },
      { name: '300 Level Sideline 303-315, 331-343', tier: 'upper' },
      { name: '300 Level Corner & End Zone 300-302, 316-330, 344-346', tier: 'upper' },
      { name: '500 Level Sideline 503-514, 527-540', tier: 'upper' },
      { name: '500 Level Corner & End Zone 500-502, 515-526, 541-542', tier: 'upper' },
      { name: 'Suite Level (200 and 400 Levels)', tier: 'suite' },
    ]
  },

  'everbank-stadium': {
    id: 'everbank-stadium',
    name: 'EverBank Stadium',
    city: 'Jacksonville',
    state: 'FL',
    capacity: 42465,
    type: 'stadium',
    homeTeams: ['Jacksonville Jaguars'],
    description: 'EverBank Stadium is the Jacksonville Jaguars home, and for the 2026 season its capacity is cut to 42,465 while the Stadium of the Future rebuild proceeds. Most of the 27,308 seats taken offline are in the 400 level upper bowl, with further closures in the 200 level corners over the tunnels, parts of the north end zone and the lower south end zone. The Gallagher East and West Clubs straddle the 50-yard lines, and the Bud Light Party Zone sits on the main concourse in the south end. TicketScan tracks EverBank Stadium onsales and presale windows.',
    keywords: ['EverBank Stadium tickets', 'Jacksonville Jaguars tickets', 'EverBank Stadium seating chart', 'EverBank Stadium events 2026', 'Jacksonville football tickets'],
    faqs: [
      { question: 'Why is EverBank Stadium capacity so low in 2026?', answer: 'The Stadium of the Future construction takes 27,308 seats out of service for the season, most of them in the 400 level upper bowl, leaving a listed capacity of 42,465.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: '100 Level End Zone 121-125, 148', tier: 'lower' },
      { name: 'Bud Light Party Zone (south end zone)', tier: 'lower' },
      { name: 'Gallagher West Club 07-12, 107-112, 207-212', tier: 'club' },
      { name: 'Gallagher East Club 34-39, 134-139, 234-239', tier: 'club' },
      { name: 'Field VIP Club', tier: 'club' },
      { name: '200 Level Sideline 213-216, 230-233', tier: 'club' },
      { name: '200 Level Corner 201-206, 240-245', tier: 'club' },
      { name: '400 Level Upper Deck 403-416, 430-443', tier: 'upper' },
      { name: 'Terrace Suites', tier: 'suite' },
    ]
  },

  'ford-field': {
    id: 'ford-field',
    name: 'Ford Field',
    city: 'Detroit',
    state: 'MI',
    capacity: 65000,
    type: 'stadium',
    homeTeams: ['Detroit Lions'],
    description: 'Ford Field seats 65,000 for Detroit Lions games, a fixed-roof dome on FieldTurf that opened downtown in 2002 and is built partly into a converted warehouse along one side. Only part of the 200 level carries club access: sections 200-214 on the Lions sideline, 227-233 on the visitor sideline, and the first five rows of upper sections 330-332 at midfield. The visitor-side club sections are about eight rows deep against roughly sixteen on the Lions side. TicketScan tracks when tickets for Ford Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Ford Field tickets', 'Detroit Lions tickets', 'Ford Field seating chart', 'Ford Field events 2026', 'Detroit football tickets'],
    faqs: [
      { question: 'Do all 200 level seats at Ford Field include club access?', answer: 'No. Club access covers sections 200-214 on the Lions sideline and 227-233 on the visitor sideline, plus the first five rows of sections 330-332. Confirm the section before buying if the lounge matters to you.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Club Seats 200-214 (Lions sideline)', tier: 'club' },
      { name: 'Club Seats 227-233 (visitor sideline)', tier: 'club' },
      { name: '200 Level Mezzanine 215-226, 234-246', tier: 'club' },
      { name: '300 Level Sideline', tier: 'upper' },
      { name: '300 Level Corner & End Zone', tier: 'upper' },
      { name: 'North and South Suites', tier: 'suite' },
    ]
  },

  'gillette-stadium': {
    id: 'gillette-stadium',
    name: 'Gillette Stadium',
    city: 'Foxborough',
    state: 'MA',
    capacity: 64628,
    type: 'stadium',
    homeTeams: ['New England Patriots'],
    description: 'Gillette Stadium seats 64,628 for New England Patriots games in Foxborough, an open-air FieldTurf bowl that opened in 2002 and also hosts the New England Revolution. The 100 level sidelines are sections 101-114 and 130-143; The Fort, the standing supporters end, occupies the north end zone. The Putnam Club forms the premium 200 level ring, and the 300 level upper deck is the cheapest tier. The lighthouse and bridge at the north end were rebuilt in the 2023 renovation. TicketScan tracks when tickets for Gillette Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Gillette Stadium tickets', 'New England Patriots tickets', 'Gillette Stadium seating chart', 'New England Revolution tickets', 'Gillette Stadium events 2026', 'Foxborough football tickets'],
    faqs: [
      { question: 'What is The Fort at Gillette Stadium?', answer: 'The Fort is the north end zone supporters area behind sections 119-125, best known for Revolution matches but part of the same lower-bowl end at Patriots games.' },
    ],
    sections: [
      { name: '100 Level Sideline 101-114, 130-143', tier: 'lower' },
      { name: '100 Level Corner 115-118, 126-129, 144-147', tier: 'lower' },
      { name: 'The Fort / 100 Level End Zone 119-125, 148-150', tier: 'lower' },
      { name: 'Putnam Club (200 Level)', tier: 'club' },
      { name: 'Mezzanine Sideline (200 Level)', tier: 'club' },
      { name: 'Mezzanine Corner & End Zone (200 Level)', tier: 'club' },
      { name: '300 Level Upper Sideline', tier: 'upper' },
      { name: '300 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'hard-rock-stadium': {
    id: 'hard-rock-stadium',
    name: 'Hard Rock Stadium',
    city: 'Miami Gardens',
    state: 'FL',
    capacity: 64767,
    type: 'stadium',
    homeTeams: ['Miami Dolphins', 'Miami Hurricanes Football'],
    description: 'Hard Rock Stadium seats 64,767 for Miami Dolphins and Miami Hurricanes football games in Miami Gardens, an open-air Bermuda-grass field that opened in 1987 and gained a canopy roof over the seating bowl in the 2016 renovation. The canopy covers the stands but leaves the field open, so shade rather than rain is what the seat map buys you. The 100 level sidelines are sections 105-115 and 142-152, the Hyundai Club rings the 200 level, and the 400 level is the upper deck. TicketScan tracks Hard Rock Stadium onsales and presale windows.',
    keywords: ['Hard Rock Stadium tickets', 'Miami Dolphins tickets', 'Hard Rock Stadium seating chart', 'Hard Rock Stadium events 2026', 'Miami football tickets'],
    faqs: [
      { question: 'Does the Hard Rock Stadium canopy cover every seat?', answer: 'The canopy covers the seating bowl but not the field. Most seats are shaded, though low rows near the open field edge can still catch sun and blowing rain.' },
    ],
    sections: [
      { name: '100 Level Sideline 105-115, 142-152', tier: 'lower' },
      { name: '100 Level Corner 101-104, 116-118, 138-141, 153-156', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Living Room Cabanas (field level)', tier: 'club' },
      { name: 'Hyundai Club (200 Level)', tier: 'club' },
      { name: 'Mezzanine Sideline (300 Level)', tier: 'club' },
      { name: 'Mezzanine Corner & End Zone (300 Level)', tier: 'club' },
      { name: '400 Level Upper Sideline', tier: 'upper' },
      { name: '400 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'highmark-stadium': {
    id: 'highmark-stadium',
    name: 'Highmark Stadium',
    city: 'Orchard Park',
    state: 'NY',
    capacity: 60108,
    type: 'stadium',
    homeTeams: ['Buffalo Bills'],
    description: 'Highmark Stadium is the new Buffalo Bills home in Orchard Park, opened for the 2026 season with 60,108 seats, roughly 10,000 fewer than the 1973 stadium it replaced across the road. The bowl is stacked steeply so the upper deck sits closer to the field, a canopy covers more than 60 percent of the seats and a perforated facade cuts wind at field level. The Field Club sits below the 100 level with a view of the player tunnel. TicketScan tracks when tickets for Highmark Stadium events go on sale, including presale windows.',
    keywords: ['Highmark Stadium tickets', 'Buffalo Bills tickets', 'Highmark Stadium seating chart', 'new Bills stadium tickets', 'Highmark Stadium events 2026', 'Orchard Park football tickets'],
    faqs: [
      { question: 'Is this the same Highmark Stadium the Bills played in before?', answer: 'No. The Bills moved into a new Highmark Stadium across the street in Orchard Park for the 2026 season. It keeps the name but seats 60,108 rather than the old bowl’s 71,608.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Field Club', tier: 'club' },
      { name: 'Club Level 200-234', tier: 'club' },
      { name: '716 Club', tier: 'club' },
      { name: '300 Level Sideline', tier: 'upper' },
      { name: '300 Level Corner & End Zone', tier: 'upper' },
      { name: '400 Level Upper Deck', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'huntington-bank-field': {
    id: 'huntington-bank-field',
    name: 'Huntington Bank Field',
    city: 'Cleveland',
    state: 'OH',
    capacity: 67431,
    type: 'stadium',
    homeTeams: ['Cleveland Browns'],
    description: 'Huntington Bank Field seats 67,431 for Cleveland Browns games on the lakefront downtown, an open-air Kentucky bluegrass field that opened in 1999 and was renamed in 2024. The Dawg Pound, the bleacher end behind the east end zone, is the building’s signature section. Suites occupy the entire 200 and 400 levels, so the seating decks are the 100 level, the 300 level club ring between the two suite rings, and the 500 level upper deck. TicketScan tracks when tickets for Huntington Bank Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Huntington Bank Field tickets', 'Cleveland Browns tickets', 'Huntington Bank Field seating chart', 'Dawg Pound tickets', 'Huntington Bank Field events 2026', 'Cleveland football tickets'],
    faqs: [
      { question: 'Where is the Dawg Pound at Huntington Bank Field?', answer: 'The Dawg Pound is the bleacher seating behind the east end zone on the lower level. It has no seat backs and is the loudest part of the stadium.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: 'Dawg Pound (east end zone)', tier: 'lower' },
      { name: '300 Level Club Sideline', tier: 'club' },
      { name: '300 Level Club Corner & End Zone', tier: 'club' },
      { name: '500 Level Upper Sideline', tier: 'upper' },
      { name: '500 Level Upper Corner & End Zone', tier: 'upper' },
      { name: '200 Level Suites 201-235, 240-282', tier: 'suite' },
      { name: '400 Level Suites 418-435, 443-494', tier: 'suite' },
    ]
  },

  'lambeau-field': {
    id: 'lambeau-field',
    name: 'Lambeau Field',
    city: 'Green Bay',
    state: 'WI',
    capacity: 81441,
    type: 'stadium',
    homeTeams: ['Green Bay Packers'],
    description: 'Lambeau Field seats 81,441 for Green Bay Packers games and has been the team home since 1957, making it the oldest continuously used stadium in the NFL. There is no 200 level: the 100 and 300 sections are one continuous bench bowl, with the 300s simply the rows above row 60 and free movement between the two. Seating is aluminum bench without seat backs in that bowl. The 600 and 700 levels above the south end zone, added in 2013, have chair backs and cup holders. TicketScan tracks Lambeau Field onsales and presale windows.',
    keywords: ['Lambeau Field tickets', 'Green Bay Packers tickets', 'Lambeau Field seating chart', 'Lambeau Field events 2026', 'Green Bay football tickets'],
    faqs: [
      { question: 'Do Lambeau Field seats have backs?', answer: 'Not in the 100 and 300 level bowl, which is aluminum bench seating; seat backs can be rented at the gate. The 600 and 700 level south end zone sections and the club areas have individual seats with backs and cup holders.' },
    ],
    sections: [
      { name: 'Lower Level Sideline 109-130', tier: 'lower' },
      { name: 'Lower Level North End Zone 100-108', tier: 'lower' },
      { name: 'Lower Level South End Zone 131-138', tier: 'lower' },
      { name: '300 Level 300-354', tier: 'lower' },
      { name: 'Outdoor Club Seats 403-435 (east sideline)', tier: 'club' },
      { name: 'Indoor Club Seats 470-492, 670-694 (north end zone)', tier: 'club' },
      { name: 'Champions Club', tier: 'club' },
      { name: '600 Level South End Zone 630-648', tier: 'upper' },
      { name: '700 Level South End Zone 730-750', tier: 'upper' },
      { name: 'Private Suites', tier: 'suite' },
    ]
  },

  'levis-stadium': {
    id: 'levis-stadium',
    name: "Levi's Stadium",
    city: 'Santa Clara',
    state: 'CA',
    capacity: 68500,
    type: 'stadium',
    homeTeams: ['San Francisco 49ers'],
    description: "Levi's Stadium seats 68,500 for San Francisco 49ers games in Santa Clara, an open-air Bermuda-grass field that opened in 2014 about 40 miles south of San Francisco. The building is famously lopsided for sun: the east side sits in shade for most afternoon kickoffs while the west side takes direct sun into the fourth quarter. The 100 level rings the field, the club and suite tower rises on the west sideline, and the 300 and 400 levels sit above. TicketScan tracks when tickets for Levi's Stadium events go on sale, including presale windows.",
    keywords: ["Levi's Stadium tickets", 'San Francisco 49ers tickets', "Levi's Stadium seating chart", "Levi's Stadium events 2026", 'Santa Clara football tickets'],
    faqs: [
      { question: "Which side of Levi's Stadium is in the shade?", answer: 'The east side, where the lower-bowl sections face the suite tower, gets shade earliest for afternoon games. West-side seats stay in direct sun far longer, which matters for September and October kickoffs.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Owners / United / BNY Mellon Club (200 Level)', tier: 'club' },
      { name: 'Mezzanine Sideline (200 Level)', tier: 'club' },
      { name: 'Mezzanine Corner & End Zone (200 Level)', tier: 'club' },
      { name: '300 Level Upper Sideline', tier: 'upper' },
      { name: '400 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'lincoln-financial-field': {
    id: 'lincoln-financial-field',
    name: 'Lincoln Financial Field',
    city: 'Philadelphia',
    state: 'PA',
    capacity: 67594,
    type: 'stadium',
    homeTeams: ['Philadelphia Eagles', 'Temple University Owls Football'],
    description: 'Lincoln Financial Field seats 67,594 for Philadelphia Eagles and Temple Owls football games in the South Philadelphia sports complex, an open-air GrassMaster field that opened in 2003. The 100 level sidelines are sections 101-114 and 130-143, with the end zones at 119-125 and 148-150. The Touchdown Club and Hyundai Club form the 200 level premium ring, and the 300 level upper deck holds the least expensive seats. The stadium runs on rooftop solar and wind and shares its parking with the neighboring arena and ballpark. TicketScan tracks Lincoln Financial Field onsales and presale windows.',
    keywords: ['Lincoln Financial Field tickets', 'Philadelphia Eagles tickets', 'Lincoln Financial Field seating chart', 'Lincoln Financial Field events 2026', 'Philadelphia football tickets'],
    faqs: [
      { question: 'What are the club options at Lincoln Financial Field?', answer: 'The Touchdown Club and the Hyundai Club sit on the 200 level ring above the lower bowl, both with indoor lounge access. Everything else on that level is standard mezzanine seating.' },
    ],
    sections: [
      { name: '100 Level Sideline 101-114, 130-143', tier: 'lower' },
      { name: '100 Level Corner 115-118, 126-129, 144-147', tier: 'lower' },
      { name: '100 Level End Zone 119-125, 148-150', tier: 'lower' },
      { name: 'Touchdown Club / Hyundai Club (200 Level)', tier: 'club' },
      { name: 'Mezzanine Sideline (200 Level)', tier: 'club' },
      { name: 'Mezzanine Corner & End Zone (200 Level)', tier: 'club' },
      { name: '300 Level Upper Sideline', tier: 'upper' },
      { name: '300 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'lucas-oil-stadium': {
    id: 'lucas-oil-stadium',
    name: 'Lucas Oil Stadium',
    city: 'Indianapolis',
    state: 'IN',
    capacity: 67000,
    type: 'stadium',
    homeTeams: ['Indianapolis Colts'],
    description: 'Lucas Oil Stadium seats 67,000 for Indianapolis Colts games downtown, with a retractable roof and a retractable window wall that frames the skyline behind the north end zone. Levels are grouped by concourse rather than by number: Street Level holds the 100s and 200s, the Club and Loge concourse holds the 300s and 400s, and the Terrace holds both the 500s and the 600s. On the Terrace the 500s are the lower group despite the higher number. TicketScan tracks Lucas Oil Stadium onsales and presale windows.',
    keywords: ['Lucas Oil Stadium tickets', 'Indianapolis Colts tickets', 'Lucas Oil Stadium seating chart', 'Lucas Oil Stadium events 2026', 'Indianapolis football tickets'],
    faqs: [
      { question: 'Are 600 level seats higher than 500 level seats at Lucas Oil Stadium?', answer: 'Yes. The 500s and 600s share one Terrace concourse, but the 500 sections sit below it and the 600s above. A 507 seat is closer to the field than a 607 seat.' },
    ],
    sections: [
      { name: '100 Level Sideline 108-118, 135-145', tier: 'lower' },
      { name: '100 Level Corner 105, 121, 132, 148', tier: 'lower' },
      { name: '100 Level End Zone 101-103, 124-129, 151-153', tier: 'lower' },
      { name: 'East Club 111-115, 211-215, 311-315', tier: 'club' },
      { name: 'West Club 138-142, 238-242, 338-342', tier: 'club' },
      { name: '200 Level Sideline 208-218, 235-245', tier: 'club' },
      { name: 'Loge Sideline 307-319, 334-346, 407-419, 434-446', tier: 'club' },
      { name: '500 Level Terrace Sideline 507-519, 534-546', tier: 'upper' },
      { name: '500 Level Terrace Corner 504, 506, 520, 522, 531, 533, 547, 549', tier: 'upper' },
      { name: '600 Level Terrace Sideline 607-619, 634-646', tier: 'upper' },
      { name: '600 Level Terrace Corner 604-606, 631-633', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'lumen-field': {
    id: 'lumen-field',
    name: 'Lumen Field',
    city: 'Seattle',
    state: 'WA',
    capacity: 68740,
    type: 'stadium',
    homeTeams: ['Seattle Seahawks'],
    description: 'Lumen Field seats 68,740 for Seattle Seahawks games in SoDo and also hosts the Seattle Sounders. Partial roofs cover about 70 percent of the seats while leaving the field open, and the design deliberately traps and reflects crowd noise back onto the field. The Hawks Nest occupies the steep north end bleachers behind sections 120-131. The 100 level sidelines are 101-117 on the west and 134-148 on the east, with two named club levels above and the 300 level upper deck at the top. TicketScan tracks Lumen Field onsales and presale windows.',
    keywords: ['Lumen Field tickets', 'Seattle Seahawks tickets', 'Lumen Field seating chart', 'Seattle Sounders tickets', 'Lumen Field events 2026', 'Seattle football tickets'],
    faqs: [
      { question: 'What is the Hawks Nest at Lumen Field?', answer: 'The Hawks Nest is the steep bleacher seating at the north end of the lower bowl, behind sections 120-131. It is close to the field, loud, and among the cheaper lower-level options.' },
    ],
    sections: [
      { name: '100 Level Sideline 101-117, 134-148', tier: 'lower' },
      { name: '100 Level Corner 118-119, 132-133, 149-150', tier: 'lower' },
      { name: 'Hawks Nest / 100 Level End Zone 120-131', tier: 'lower' },
      { name: 'Club Level West (200 Level)', tier: 'club' },
      { name: 'Club Level East (200 Level)', tier: 'club' },
      { name: 'Mezzanine Sideline (200 Level)', tier: 'club' },
      { name: 'Mezzanine Corner & End Zone (200 Level)', tier: 'club' },
      { name: '300 Level Upper Sideline', tier: 'upper' },
      { name: '300 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'mt-bank-stadium': {
    id: 'mt-bank-stadium',
    name: 'M&T Bank Stadium',
    city: 'Baltimore',
    state: 'MD',
    capacity: 70745,
    type: 'stadium',
    homeTeams: ['Baltimore Ravens'],
    description: 'M&T Bank Stadium seats 70,745 for Baltimore Ravens games, an open-air field just south of downtown that opened in 1998 next door to Camden Yards. The bowl runs five rings: the 100 level, the renovated club level in the 200s, two suite levels in the 300s and 400s, and a continuous 500 level upper deck that circles the field. Lower-bowl sections run 35 to 42 rows and are split by a concourse tunnel around row 20. Two large end-zone video boards face each other. TicketScan tracks M&T Bank Stadium onsales and presale windows.',
    keywords: ['M&T Bank Stadium tickets', 'Baltimore Ravens tickets', 'M&T Bank Stadium seating chart', 'M&T Bank Stadium events 2026', 'Baltimore football tickets'],
    faqs: [
      { question: 'How many levels does M&T Bank Stadium have?', answer: 'Five: the 100 level lower bowl, the 200 level club ring, two suite levels in the 300s and 400s, and the 500 level upper deck, which runs continuously all the way around the field.' },
    ],
    sections: [
      { name: 'Lower Level Sideline (100 Level)', tier: 'lower' },
      { name: 'Lower Level Corner (100 Level)', tier: 'lower' },
      { name: 'Lower Level End Zone (100 Level)', tier: 'lower' },
      { name: 'Field Level Seats (North Field, South Field)', tier: 'lower' },
      { name: 'Club Level 200-210, 216-237, 243-253', tier: 'club' },
      { name: '500 Level Upper Sideline', tier: 'upper' },
      { name: '500 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Lower Suites (300 Level)', tier: 'suite' },
      { name: 'Upper Suites (400 Level)', tier: 'suite' },
    ]
  },

  'mercedes-benz-stadium': {
    id: 'mercedes-benz-stadium',
    name: 'Mercedes-Benz Stadium',
    city: 'Atlanta',
    state: 'GA',
    capacity: 71000,
    type: 'stadium',
    homeTeams: ['Atlanta Falcons'],
    description: 'Mercedes-Benz Stadium seats 71,000 for Atlanta Falcons games downtown and also hosts Atlanta United. It opened in 2017 with a retractable roof built from eight petals that pinwheel open, and a 360-degree halo video board ringing the underside of the roof. Concessions are priced on a published fan-friendly menu rather than typical stadium markups. The 100 level rings the field, the 200 level carries the club seating, and the 300 level is the upper deck. TicketScan tracks when tickets for Mercedes-Benz Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Mercedes-Benz Stadium tickets', 'Atlanta Falcons tickets', 'Mercedes-Benz Stadium seating chart', 'Atlanta United tickets', 'Mercedes-Benz Stadium events 2026', 'Atlanta football tickets'],
    faqs: [
      { question: 'What is the halo board at Mercedes-Benz Stadium?', answer: 'It is a continuous circular video board mounted around the inside of the roof opening, visible from every seat in the bowl rather than only from the ends like a traditional scoreboard.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Mercedes-Benz Stadium Club', tier: 'club' },
      { name: 'Mezzanine Sideline (200 Level)', tier: 'club' },
      { name: 'Mezzanine Corner & End Zone (200 Level)', tier: 'club' },
      { name: '300 Level Upper Sideline', tier: 'upper' },
      { name: '300 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'metlife-stadium': {
    id: 'metlife-stadium',
    name: 'MetLife Stadium',
    city: 'East Rutherford',
    state: 'NJ',
    capacity: 82500,
    type: 'stadium',
    homeTeams: ['New York Giants', 'New York Jets'],
    description: 'MetLife Stadium seats 82,500 and is the only NFL venue shared by two teams that each treat it as a home stadium, the New York Giants and the New York Jets. It sits in the Meadowlands Sports Complex in East Rutherford, roughly eight miles west of Manhattan, and is the largest stadium in the league by seated capacity. NJ Transit runs event trains from Secaucus Junction to Meadowlands Station, which is the practical way in given Route 3 traffic. TicketScan tracks MetLife Stadium onsales and presale windows.',
    keywords: ['MetLife Stadium tickets', 'New York Giants tickets', 'New York Jets tickets', 'MetLife Stadium seating chart', 'MetLife Stadium events 2026', 'New Jersey football tickets'],
    faqs: [
      { question: 'How do you get to MetLife Stadium without driving?', answer: 'NJ Transit runs event-day trains to Meadowlands Station from Secaucus Junction, reachable from Penn Station. The ride is about 15 minutes and avoids the Route 3 backups that build up hours before kickoff.' },
    ],
    sections: [
      { name: 'Lower Level Sideline (100 Level)', tier: 'lower' },
      { name: 'Lower Level End Zone (100 Level)', tier: 'lower' },
      { name: 'Coaches Club', tier: 'club' },
      { name: 'Mezzanine Sideline 201-217, 235-250', tier: 'club' },
      { name: 'Mezzanine Corner 218-220, 232-234', tier: 'club' },
      { name: 'Mezzanine End Zone 221-231', tier: 'club' },
      { name: 'Upper Level Sideline 301-317, 334-350', tier: 'upper' },
      { name: 'Upper Level Corner & End Zone 318-333', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'nissan-stadium': {
    id: 'nissan-stadium',
    name: 'Nissan Stadium',
    city: 'Nashville',
    state: 'TN',
    capacity: 69143,
    type: 'stadium',
    homeTeams: ['Tennessee Titans'],
    description: 'Nissan Stadium seats 69,143 for Tennessee Titans games on the east bank of the Cumberland River, directly across from downtown Nashville, and has been the team home since 1999. The 100 level sidelines are sections 109-115 and 132-138, with the Titans bench in front of 134-136 and the visitors in front of 111-113. The club ring occupies the 200 level and the 300 level is the upper deck. The pedestrian bridge from Broadway is the usual walk-in route. TicketScan tracks Nissan Stadium onsales and presale windows.',
    keywords: ['Nissan Stadium tickets', 'Tennessee Titans tickets', 'Nissan Stadium seating chart', 'Nissan Stadium events 2026', 'Nashville football tickets'],
    faqs: [
      { question: 'Which Nissan Stadium sections are behind the Titans bench?', answer: 'The Titans sideline runs in front of lower-level sections 134, 135 and 136. The visiting team occupies the sideline in front of sections 111, 112 and 113.' },
    ],
    sections: [
      { name: '100 Level Sideline 109-115, 132-138', tier: 'lower' },
      { name: '100 Level Corner & End Zone 101-108, 116-131, 139-146', tier: 'lower' },
      { name: 'Club Level Sideline 207-215, 232-238', tier: 'club' },
      { name: 'Club Level Corner 202-206, 216-222, 225-230, 240-245', tier: 'club' },
      { name: '300 Level Upper Sideline 310-316, 330-337', tier: 'upper' },
      { name: '300 Level Upper Corner 303-308, 317-321, 338-344', tier: 'upper' },
      { name: 'East and West Suites', tier: 'suite' },
    ]
  },

  'northwest-stadium': {
    id: 'northwest-stadium',
    name: 'Northwest Stadium',
    city: 'Landover',
    state: 'MD',
    capacity: 64000,
    type: 'stadium',
    homeTeams: ['Washington Commanders'],
    description: 'Northwest Stadium seats about 64,000 for Washington Commanders games in Landover, Maryland, an open-air Bermuda-grass field that opened in 1997 and was renamed in 2024. Capacity has been reduced repeatedly from its original 80,000-plus configuration. Dream Seats sit at field level in sections numbered 1-42 that correspond to the 100 level section above each one. The club level occupies the 300s in three lettered zones, and the Pete Rozelle Upper Level runs 401-454. TicketScan tracks when tickets for Northwest Stadium events go on sale, including presale windows.',
    keywords: ['Northwest Stadium tickets', 'Washington Commanders tickets', 'Northwest Stadium seating chart', 'FedExField tickets', 'Northwest Stadium events 2026', 'Landover football tickets'],
    faqs: [
      { question: 'What are Dream Seats at Northwest Stadium?', answer: 'They are field-level seats reached through the 100 level portals, numbered 1-42 so that Dream Seat section 2 sits below 100 level section 102. Dream Seat tickets also include club level access.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner & End Zone', tier: 'lower' },
      { name: 'Dream Seats 1-42 (field level)', tier: 'lower' },
      { name: '200 Level Main Concourse 201-242', tier: 'club' },
      { name: 'Club Level Zone A 301-303, 319-324, 340-342', tier: 'club' },
      { name: 'Club Level Zone B 304-305, 317-318, 325-326, 338-339', tier: 'club' },
      { name: 'Club Level Zone D 306-309, 313-316, 327-330, 334-337', tier: 'club' },
      { name: 'Pete Rozelle Upper Level 401-454', tier: 'upper' },
      { name: 'Loge Suites 318-354', tier: 'suite' },
      { name: 'Executive Suites', tier: 'suite' },
    ]
  },

  'nrg-stadium': {
    id: 'nrg-stadium',
    name: 'NRG Stadium',
    city: 'Houston',
    state: 'TX',
    capacity: 72220,
    type: 'stadium',
    homeTeams: ['Houston Texans'],
    description: 'NRG Stadium seats 72,220 for Houston Texans games and opened in 2002 as the first NFL stadium with a retractable roof. It sits in the NRG Park complex beside the Astrodome and hosts the Houston Livestock Show and Rodeo each spring, which is why the field is artificial turf. The 100 level sidelines are sections 101-115 and 130-144, the club ring occupies the 200 level, and the 300 level is the upper deck. TicketScan tracks when tickets for NRG Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['NRG Stadium tickets', 'Houston Texans tickets', 'NRG Stadium seating chart', 'NRG Stadium events 2026', 'Houston football tickets'],
    faqs: [
      { question: 'Does the NRG Stadium roof close for Texans games?', answer: 'The roof is retractable and the decision is made before each game. It is frequently closed in early-season Houston heat, which changes both the temperature and the noise level inside.' },
    ],
    sections: [
      { name: '100 Level Sideline 101-115, 130-144', tier: 'lower' },
      { name: '100 Level Corner 116-119, 126-129, 145-148', tier: 'lower' },
      { name: '100 Level End Zone 120-125, 149-150', tier: 'lower' },
      { name: 'Club Level (200 Level)', tier: 'club' },
      { name: 'Mezzanine Sideline (200 Level)', tier: 'club' },
      { name: 'Mezzanine Corner & End Zone (200 Level)', tier: 'club' },
      { name: '300 Level Upper Sideline', tier: 'upper' },
      { name: '300 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'paycor-stadium': {
    id: 'paycor-stadium',
    name: 'Paycor Stadium',
    city: 'Cincinnati',
    state: 'OH',
    capacity: 65515,
    type: 'stadium',
    homeTeams: ['Cincinnati Bengals'],
    description: 'Paycor Stadium seats 65,515 for Cincinnati Bengals games on the Ohio River bank downtown, an open-air stadium that opened in 2000 and was renamed in 2022. The 100 level sidelines are sections 102-118 and 132-148, with the Bengals bench in front of 109-111 and the visitors in front of 139-141. Premium club sideline seating covers 203-217 and 233-247 on the 200 level, and the 300 level upper deck has sideline sections at 305-315 and 335-345. TicketScan tracks Paycor Stadium onsales and presale windows.',
    keywords: ['Paycor Stadium tickets', 'Cincinnati Bengals tickets', 'Paycor Stadium seating chart', 'Paycor Stadium events 2026', 'Cincinnati football tickets'],
    faqs: [
      { question: 'Which Paycor Stadium sections are on the Bengals sideline?', answer: 'The Bengals bench sits in front of lower-level sections 109, 110 and 111. Section 110 is on the 50-yard line. The visiting bench is across the field in front of 139, 140 and 141.' },
    ],
    sections: [
      { name: '100 Level Sideline 102-118, 132-148', tier: 'lower' },
      { name: '100 Level End Zone 101, 119-131, 149-160', tier: 'lower' },
      { name: 'Club Sideline 203-217, 233-247', tier: 'club' },
      { name: '200 Level Corner 201-203, 217-221, 231-233, 247-249', tier: 'club' },
      { name: '200 Level End Zone 222-230', tier: 'club' },
      { name: '300 Level Upper Sideline 305-315, 335-345', tier: 'upper' },
      { name: '300 Level Upper Corner 303-304, 316-317, 333-334, 346-347', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'raymond-james-stadium': {
    id: 'raymond-james-stadium',
    name: 'Raymond James Stadium',
    city: 'Tampa',
    state: 'FL',
    capacity: 69218,
    type: 'stadium',
    homeTeams: ['Tampa Bay Buccaneers', 'South Florida Bulls Football'],
    description: 'Raymond James Stadium seats 69,218 for Tampa Bay Buccaneers and South Florida Bulls football games and is built around a full-size pirate ship in Buccaneer Cove above the north end zone, which fires its cannons after Tampa Bay scores. The upper deck runs sidelines and corners only, in sections 302-319 and 327-344, with no seating behind either end zone. Club seating occupies the 200 level sidelines, and the Krewe’s Nest sections 1-8 sit above the south end zone in shade from the video board. TicketScan tracks Raymond James Stadium onsales and presale windows.',
    keywords: ['Raymond James Stadium tickets', 'Tampa Bay Buccaneers tickets', 'Raymond James Stadium seating chart', 'Raymond James Stadium events 2026', 'Tampa football tickets'],
    faqs: [
      { question: 'Which seats at Raymond James Stadium are near the pirate ship?', answer: 'Buccaneer Cove sits above lower-level sections 145-151 in the north end zone. Seats in 146-150 put you directly below it, and the 200 level corner section 245 is close to it as well.' },
    ],
    sections: [
      { name: '100 Level Sideline 106-115, 131-140', tier: 'lower' },
      { name: '100 Level Corner 102-103, 116-119, 127-128, 141-143', tier: 'lower' },
      { name: '100 Level End Zone 120-126, 144-151', tier: 'lower' },
      { name: 'Club Sideline 205-216, 230-241', tier: 'club' },
      { name: '200 Level Corner 201-204, 217-220, 226-229, 242-245', tier: 'club' },
      { name: "Krewe's Nest 1-8 (south end zone)", tier: 'club' },
      { name: 'Lexus Club / 8am Club', tier: 'club' },
      { name: 'Hall of Fame Club', tier: 'club' },
      { name: '300 Level Upper Sideline 305-316, 330-341', tier: 'upper' },
      { name: '300 Level Upper Corner 302-304, 317-319, 327-329, 342-344', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'sofi-stadium': {
    id: 'sofi-stadium',
    name: 'SoFi Stadium',
    city: 'Inglewood',
    state: 'CA',
    capacity: 70000,
    type: 'stadium',
    homeTeams: ['Los Angeles Rams', 'Los Angeles Chargers'],
    description: 'SoFi Stadium seats 70,000 for Los Angeles Rams and Los Angeles Chargers games and expands past 100,000 for a Super Bowl or an Olympic ceremony. It opened in 2020 in the Hollywood Park district of Inglewood under a translucent ETFE canopy that is open along the sides, and the Infinity Screen video board hangs in a ring over the field. Lower-level sections carry a C prefix. The LA Metro K Line stops at Downtown Inglewood, about a ten-minute walk. TicketScan tracks SoFi Stadium onsales and presale windows.',
    keywords: ['SoFi Stadium tickets', 'Los Angeles Rams tickets', 'Los Angeles Chargers tickets', 'SoFi Stadium seating chart', 'SoFi Stadium events 2026', 'Inglewood football tickets'],
    faqs: [
      { question: 'Why do SoFi Stadium section numbers start with C?', answer: 'The lower bowl is labelled C-Level, so sections read C100 through C152. Above it the numbering switches to plain 200s for the club ring, 300s for the mezzanine and 500s for the upper bowl.' },
    ],
    sections: [
      { name: 'C-Level Sideline C100-C112, C140-C152', tier: 'lower' },
      { name: 'C-Level End Zone C113-C115, C137-C139', tier: 'lower' },
      { name: 'Hancock Club / Coyote Reserve (field level)', tier: 'club' },
      { name: 'Sideline Club (200 Level)', tier: 'club' },
      { name: 'Mezzanine Sideline 301-310, 340-349', tier: 'club' },
      { name: 'Mezzanine Corner 311-314, 336-339', tier: 'club' },
      { name: 'Upper Bowl Sideline 501-508, 540-548', tier: 'upper' },
      { name: 'Upper Bowl Corner & End Zone 509-539', tier: 'upper' },
      { name: 'Suite Level (400 Level)', tier: 'suite' },
    ]
  },

  'soldier-field': {
    id: 'soldier-field',
    name: 'Soldier Field',
    city: 'Chicago',
    state: 'IL',
    capacity: 62500,
    type: 'stadium',
    homeTeams: ['Chicago Bears'],
    description: 'Soldier Field seats 62,500 for Chicago Bears games, one of the smallest capacities in the NFL, on the lakefront just south of the Loop. The 1924 colonnades survive around a seating bowl rebuilt inside them in 2003, which is why the 400 level grandstand fills only the open north end in sections 427-447. The United Club spans the east side across sections 202-216 and 301-317. The Bears bench sits in front of sections 134-140. TicketScan tracks when tickets for Soldier Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Soldier Field tickets', 'Chicago Bears tickets', 'Soldier Field seating chart', 'Soldier Field events 2026', 'Chicago football tickets'],
    faqs: [
      { question: 'Why does Soldier Field only have a 400 level at one end?', answer: 'The 2003 rebuild dropped a modern bowl inside the 1924 colonnades. The steep 400 level grandstand, sections 427-447, was built into the open north end where the historic structure allowed the extra height.' },
    ],
    sections: [
      { name: '100 Level Sideline 105-115, 132-142', tier: 'lower' },
      { name: '100 Level Corner & End Zone 101-104, 116-131, 143-155', tier: 'lower' },
      { name: 'United Club 202-216 (200 Level)', tier: 'club' },
      { name: 'United Club 301-317 (300 Level)', tier: 'club' },
      { name: '200 Level Corner & End Zone 218-256', tier: 'club' },
      { name: '300 Level Upper Bowl 318-356', tier: 'upper' },
      { name: '400 Level Grandstand 427-447', tier: 'upper' },
      { name: 'Lofts 422-425', tier: 'suite' },
      { name: 'Skyline Suites', tier: 'suite' },
    ]
  },

  'state-farm-stadium': {
    id: 'state-farm-stadium',
    name: 'State Farm Stadium',
    city: 'Glendale',
    state: 'AZ',
    capacity: 63400,
    type: 'stadium',
    homeTeams: ['Arizona Cardinals'],
    description: 'State Farm Stadium seats 63,400 for Arizona Cardinals games in Glendale and has both a retractable roof and a roll-out natural grass field that sits outside the building between events. There is no 300 level: the bowl runs 100 level, a 200 level club ring split by sideline, and a 400 level terrace at the top. Red Zone seats occupy lower sections 138-144 with a patio behind them, and Ring of Honor seats are the front rows of each 400 level section. TicketScan tracks State Farm Stadium onsales and presale windows.',
    keywords: ['State Farm Stadium tickets', 'Arizona Cardinals tickets', 'State Farm Stadium seating chart', 'State Farm Stadium events 2026', 'Glendale football tickets'],
    faqs: [
      { question: 'Does State Farm Stadium really move its field outside?', answer: 'Yes. The natural grass playing surface sits on a tray that rolls out of the building through a bay in the end wall so the turf gets sunlight, then rolls back in for games.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Red Zone Seats 138-144', tier: 'lower' },
      { name: 'Club Level 201-222 (Cardinals sideline)', tier: 'club' },
      { name: 'Club Level 227-248 (visitor sideline)', tier: 'club' },
      { name: 'Casa Roja at the Fifty', tier: 'club' },
      { name: 'Ring of Honor (400 Level front rows)', tier: 'upper' },
      { name: 'Terrace Level 401-455', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'us-bank-stadium': {
    id: 'us-bank-stadium',
    name: 'U.S. Bank Stadium',
    city: 'Minneapolis',
    state: 'MN',
    capacity: 66202,
    type: 'stadium',
    homeTeams: ['Minnesota Vikings'],
    description: 'U.S. Bank Stadium seats 66,202 for Minnesota Vikings games in downtown Minneapolis, a fixed-roof building that opened in 2016 with a ridged asymmetric roof and a wall of glass pivoting doors facing the skyline. Much of the lower bowl is private club seating: the Delta Sky360 Club in the F sections, the Polaris Club in V1-V5 and the Medtronic Club in V6-V10. The Vikings bench sits in front of F2 to F4. The 300 level upper deck sections run up to 42 rows. TicketScan tracks U.S. Bank Stadium onsales and presale windows.',
    keywords: ['U.S. Bank Stadium tickets', 'Minnesota Vikings tickets', 'U.S. Bank Stadium seating chart', 'U.S. Bank Stadium events 2026', 'Minneapolis football tickets'],
    faqs: [
      { question: 'Are the lettered sections at U.S. Bank Stadium club seats?', answer: 'Yes. The F, V and C sections are private clubs rather than general seating: Delta Sky360 in F1-F5, Polaris in V1-V5, Medtronic in V6-V10, and the 200 level C1-C10 clubs at midfield.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Delta Sky360 Club F1-F5', tier: 'club' },
      { name: 'Polaris Club V1-V5 / Medtronic Club V6-V10', tier: 'club' },
      { name: '200 Level Club C1-C10', tier: 'club' },
      { name: '200 Level Sideline 204-242', tier: 'club' },
      { name: '300 Level Upper Sideline', tier: 'upper' },
      { name: '300 Level Upper Corner & End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },
};
