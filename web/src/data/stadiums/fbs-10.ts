// FBS batch 10 of 10 — 11 programs, all with their own dedicated stadium (none
// share an NFL building already defined in nfl.ts; the shared-stadium cases in
// this batch would have been UTSA/Alamodome and Wyoming's War Memorial, and
// neither is an NFL venue, so all 11 are included here).
//
// Capacity comes from each stadium's own dedicated Wikipedia article or its
// athletics department's own facilities page, never from an aggregate list.
// Two figures are configuration- or renovation-specific as of 2026-09-04:
//
// - Vanderbilt's FirstBank Stadium is 35,000, the post-renovation figure
//   (down from 40,350) after the 2022-2025 rebuild that finished in summer
//   2025 — Wikipedia's infobox and multiple 2026-season sources agree.
// - Wyoming's Jonah Field at War Memorial Stadium is 25,500, the figure the
//   university's own facilities page states in its capacity stat line for
//   the stadium as renovated from after the 2023 season through the start of
//   the 2025 campaign. The stadium's dedicated Wikipedia article still
//   carries the pre-renovation 29,181, and the same gowyo.com page's older
//   prose also still says 29,181 — both are stale next to the page's own
//   current capacity field, so the official site's own stat line wins.
// - UTSA's football capacity at the Alamodome is 36,582, not the building's
//   full 64,000-65,000 dome capacity: for Roadrunner games the upper level is
//   curtained off and only the lower bowl is sold, which is the actual,
//   verifiable football figure (parallel to EverBank Stadium's reduced 2026
//   figure in nfl.ts).
// - Wisconsin's Camp Randall Stadium is 76,030 per the athletics department's
//   own current facilities page ("The current capacity (76,030) ranks among
//   the nation's largest school-owned stadiums"); a stale cached copy of the
//   same page and the Wikipedia infobox both carry 76,057.
//
// Washington State's stadium is also named "Martin Stadium" — the same name
// Northwestern's temporary venue carries in fbs-5.ts (martin-stadium-northwestern).
// This entry uses the full official name, Gesa Field at Martin Stadium, and the
// slug 'gesa-field-at-martin-stadium', to avoid any collision.
//
// Section names come from each program's published facilities pages. Where a
// sideline/corner/end-zone split could not be sourced to specific section
// numbers, the zone is named without numbers rather than guessed. `floor` is
// never used — there is no floor at a football game.

import type { Venue } from '../venue-types';

export const fbsStadiums10: Record<string, Venue> = {
  'sun-bowl-stadium': {
    id: 'sun-bowl-stadium',
    name: 'Sun Bowl Stadium',
    city: 'El Paso',
    state: 'TX',
    capacity: 45971,
    type: 'stadium',
    homeTeams: ['UTEP Miner Football'],
    description: "Sun Bowl Stadium seats 45,971 for UTEP Miner football, built into the base of the Franklin Mountains on the UTEP campus and also hosting the annual Sun Bowl postseason game each December. The bowl's nominal capacity once ran past 51,000 before seating changes and a 2020 addition of club seats and loge boxes on the west side reduced the current figure. The rock face behind the north end zone is the stadium's signature backdrop. TicketScan tracks when tickets for Sun Bowl Stadium events go on sale, including presale windows that open before the public onsale.",
    keywords: ['Sun Bowl Stadium tickets', 'UTEP Miners football tickets', 'Sun Bowl Stadium seating chart', 'El Paso football tickets', 'UTEP football tickets 2026'],
    faqs: [
      { question: 'Why is Sun Bowl Stadium capacity lower than its historic figure?', answer: 'A 2020 renovation added club seats and loge boxes along the west side, taking general seating out of service and settling the current capacity at 45,971, down from the roughly 51,500 the bowl held earlier in its history.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'West Side Club Seats', tier: 'club' },
      { name: 'West Side Loge Boxes', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Upper Level Corner & End Zone', tier: 'upper' },
    ]
  },

  'alamodome': {
    id: 'alamodome',
    name: 'Alamodome',
    city: 'San Antonio',
    state: 'TX',
    capacity: 36582,
    type: 'stadium',
    homeTeams: ['UTSA Roadrunners Football'],
    description: 'The Alamodome seats 36,582 for UTSA Roadrunners football, a downtown five-level dome that can expand past 64,000 for other events but is configured with its upper level curtained off for Roadrunner games, so tickets are sold only in the lower bowl. UTSA has played every home game here since the program launched in 2011. The building also holds 4 video screens and ribbon boards wrapping its fifth level from a 2016 modernization, and club-level seating rings the field at midlevel. TicketScan tracks Alamodome onsales and presale windows for UTSA football.',
    keywords: ['Alamodome tickets', 'UTSA Roadrunners tickets', 'Alamodome seating chart', 'San Antonio football tickets', 'UTSA football tickets 2026'],
    faqs: [
      { question: 'Why is the Alamodome capacity for UTSA games so much lower than the building total?', answer: 'The Alamodome can hold roughly 64,000 for football, but for Roadrunner games the upper level is curtained off and not sold, leaving a working capacity of 36,582 in the lower bowl and club level.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl Corner', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Club Level Sideline', tier: 'club' },
      { name: 'Club Level End Zone', tier: 'club' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'firstbank-stadium': {
    id: 'firstbank-stadium',
    name: 'FirstBank Stadium',
    city: 'Nashville',
    state: 'TN',
    capacity: 35000,
    type: 'stadium',
    homeTeams: ['Vanderbilt Commodores Football'],
    description: "FirstBank Stadium seats 35,000 for Vanderbilt Commodores football, a single-decked horseshoe on campus that reopened for the 2026 season after a multi-year rebuild of the south and north end zones cut capacity from its former 40,350. The south end zone carries the bulk of the venue's premium inventory: the Commodore Club and Field Club, loge boxes, Living Room Boxes, and the South Suites and Commodore Suites stacked above them. The Bridge, covered seating under the press box on the west sideline, is the traditional home-side gathering spot. TicketScan tracks FirstBank Stadium onsales and presale windows.",
    keywords: ['FirstBank Stadium tickets', 'Vanderbilt Commodores tickets', 'FirstBank Stadium seating chart', 'Nashville football tickets', 'Vanderbilt football tickets 2026'],
    faqs: [
      { question: 'Why did FirstBank Stadium capacity drop from over 40,000?', answer: 'A rebuild of the south end zone and surrounding seating, completed for the 2026 season, replaced older general seating with premium clubs, suites and loge boxes, settling capacity at 35,000, down from the prior 40,350.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone Bleachers', tier: 'lower' },
      { name: 'Commodore Club (South End Zone)', tier: 'club' },
      { name: 'Field Club (South End Zone)', tier: 'club' },
      { name: 'Loge Boxes', tier: 'club' },
      { name: 'The Bridge (West Sideline)', tier: 'club' },
      { name: 'Terrace Seating (North End Zone)', tier: 'club' },
      { name: 'South Suites', tier: 'suite' },
      { name: 'Commodore Suites', tier: 'suite' },
      { name: 'West Stadium Suites', tier: 'suite' },
    ]
  },

  'lane-stadium': {
    id: 'lane-stadium',
    name: 'Lane Stadium/Worsham Field',
    city: 'Blacksburg',
    state: 'VA',
    capacity: 65632,
    type: 'stadium',
    homeTeams: ['Virginia Tech Hokies College Football'],
    description: "Lane Stadium/Worsham Field seats 65,632 for Virginia Tech Hokies football on the Blacksburg campus, famous for the team's entrance to Metallica's \"Enter Sandman\" and for a crowd noise level that has registered among the loudest in the sport. The West Side Club runs chairback club seating under the press box, with luxury suites above it from the 2004-2005 renovation. The South End Zone is a double-deck structure mixing bleacher, bench-back and club seating, while the North End Zone holds the student section on open bleachers. TicketScan tracks Lane Stadium onsales and presale windows.",
    keywords: ['Lane Stadium tickets', 'Virginia Tech Hokies tickets', 'Lane Stadium seating chart', 'Blacksburg football tickets', 'Virginia Tech football tickets 2026'],
    faqs: [
      { question: 'Where is the student section at Lane Stadium?', answer: 'Virginia Tech students sit in the North End Zone bleacher sections, the same end where the team enters the field to "Enter Sandman" before kickoff.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'North End Zone Bleachers (Student Section)', tier: 'lower' },
      { name: 'South End Zone Bleachers', tier: 'lower' },
      { name: 'West Side Club Seats', tier: 'club' },
      { name: 'South End Zone Club Seats', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Luxury Suites', tier: 'suite' },
    ]
  },

  'allegacy-federal-credit-union-stadium': {
    id: 'allegacy-federal-credit-union-stadium',
    name: 'Allegacy Federal Credit Union Stadium',
    city: 'Winston-Salem',
    state: 'NC',
    capacity: 31500,
    type: 'stadium',
    homeTeams: ['Wake Forest Demon Deacons Football'],
    description: "Allegacy Federal Credit Union Stadium seats 31,500 for Wake Forest Demon Deacons football on campus, built as two bowed grandstands facing each other along the sidelines. The stadium has carried three sponsor names since opening as Groves Stadium in 1968 — BB&T Field from 2007 and Truist Field from 2020 before the 2023 rebrand. Deacon Hill, a grass berm behind the southeast end zone, is the building's informal general-admission overflow area, and the Bridger Field House sits behind the opposite end. TicketScan tracks when tickets for Allegacy Federal Credit Union Stadium events go on sale, including presale windows.",
    keywords: ['Allegacy Federal Credit Union Stadium tickets', 'Wake Forest Demon Deacons tickets', 'Allegacy Stadium seating chart', 'Winston-Salem football tickets', 'Wake Forest football tickets 2026'],
    faqs: [
      { question: 'What is Deacon Hill at Allegacy Federal Credit Union Stadium?', answer: 'Deacon Hill is the grass berm behind the southeast end zone, used as informal lawn seating separate from the two main grandstands along the sidelines.' },
    ],
    sections: [
      { name: 'East Grandstand Sideline', tier: 'lower' },
      { name: 'West Grandstand Sideline', tier: 'lower' },
      { name: 'Deacon Hill (Southeast End Zone Berm)', tier: 'lower' },
      { name: 'Northwest End Zone', tier: 'lower' },
      { name: 'Club Seating', tier: 'club' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'gesa-field-at-martin-stadium': {
    id: 'gesa-field-at-martin-stadium',
    name: 'Gesa Field at Martin Stadium',
    city: 'Pullman',
    state: 'WA',
    capacity: 32952,
    type: 'stadium',
    homeTeams: ['Washington State Cougars Football'],
    description: "Gesa Field at Martin Stadium seats 32,952 for Washington State Cougars football in Pullman, one of the smallest stadium capacities among major-conference programs and named for former Washington governor Clarence D. Martin. The playing surface carries the Gesa Credit Union name under a 2021 sponsorship deal. Premium inventory added in recent renovations includes 21 luxury suites, 42 loge boxes, and roughly 1,300 club seats split between an outdoor deck and an indoor club, concentrated on the south side of the bowl. TicketScan tracks Martin Stadium onsales and presale windows.",
    keywords: ['Martin Stadium tickets', 'Washington State Cougars tickets', 'Gesa Field seating chart', 'Pullman football tickets', 'Washington State football tickets 2026'],
    faqs: [
      { question: 'Is this the same Martin Stadium as Northwestern\'s temporary football venue?', answer: 'No. Washington State\'s Gesa Field at Martin Stadium in Pullman is an entirely separate, permanent on-campus stadium named for a former Washington governor. Northwestern\'s temporary Ryan Field replacement carries an unrelated Martin Stadium name in Evanston, Illinois.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'South Side Outdoor Club Seats', tier: 'club' },
      { name: 'South Side Indoor Club', tier: 'club' },
      { name: 'Loge Boxes', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Luxury Suites', tier: 'suite' },
    ]
  },

  'mountaineer-field-at-milan-puskar-stadium': {
    id: 'mountaineer-field-at-milan-puskar-stadium',
    name: 'Mountaineer Field at Milan Puskar Stadium',
    city: 'Morgantown',
    state: 'WV',
    capacity: 60000,
    type: 'stadium',
    homeTeams: ['West Virginia Mountaineers'],
    description: 'Mountaineer Field at Milan Puskar Stadium seats 60,000 for West Virginia Mountaineers football on the Evansdale campus, an open horseshoe bowl that has held that capacity since a 2004 expansion. Touchdown Terrace, a 648-seat club in the north end zone, is the building\'s primary premium club area, and the press box level carries a small run of luxury seats along with 18 more in the north end zone. Cannon fire from "The Puskar Cannon" follows every Mountaineer score. TicketScan tracks when tickets for Mountaineer Field events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Mountaineer Field tickets', 'Milan Puskar Stadium tickets', 'West Virginia Mountaineers tickets', 'Morgantown football tickets', 'WVU football tickets 2026'],
    faqs: [
      { question: 'What is Touchdown Terrace at Mountaineer Field?', answer: 'Touchdown Terrace is the 648-seat club level in the north end zone, West Virginia\'s primary premium club section separate from the general sideline seating.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Touchdown Terrace (North End Zone Club)', tier: 'club' },
      { name: 'Press Box Level Club Seats', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Upper Level End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'houchens-industries-lt-smith-stadium': {
    id: 'houchens-industries-lt-smith-stadium',
    name: 'Houchens Industries-L.T. Smith Stadium',
    city: 'Bowling Green',
    state: 'KY',
    capacity: 22113,
    type: 'stadium',
    homeTeams: ['Western Kentucky University Hilltopper Football'],
    description: "Houchens Industries-L.T. Smith Stadium seats 22,113 for Western Kentucky Hilltoppers football at Jimmy Feix Field on the WKU campus. The bowl opened in 1968 at 19,250 seats, was trimmed to 17,500 in a 1989 reconfiguration, and reached its current capacity with a 2008 expansion. Seating runs in a horseshoe around the field with sideline grandstands facing each other and an open end. TicketScan tracks when tickets for Houchens Industries-L.T. Smith Stadium events go on sale, including presale windows that open before the public onsale.",
    keywords: ['Houchens Industries-L.T. Smith Stadium tickets', 'WKU Hilltoppers tickets', 'Western Kentucky football tickets', 'Bowling Green football tickets', 'WKU football tickets 2026'],
    faqs: [
      { question: 'How did Houchens Industries-L.T. Smith Stadium reach its current capacity?', answer: 'The stadium opened in 1968 at 19,250 seats, was reduced to 17,500 in a 1989 reconfiguration, then expanded to the current 22,113 in a 2008 project.' },
    ],
    sections: [
      { name: 'East Grandstand Sideline', tier: 'lower' },
      { name: 'West Grandstand Sideline', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Club Seating', tier: 'club' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'stafford-smith-field-at-waldo-stadium': {
    id: 'stafford-smith-field-at-waldo-stadium',
    name: 'Stafford-Smith Field at Waldo Stadium',
    city: 'Kalamazoo',
    state: 'MI',
    capacity: 30200,
    type: 'stadium',
    homeTeams: ['Western Michigan University Football'],
    description: "Stafford-Smith Field at Waldo Stadium seats 30,200 for Western Michigan Broncos football, a capacity the stadium has held since 1989. Built in 1939 and dedicated to WMU president emeritus Dwight B. Waldo, the playing surface took the Stafford-Smith name after a 2024 donation that also funded upgrades to the Stadium Club, renovated that September. The Donald J. Seelye Athletic Center encloses the stadium's east end. TicketScan tracks Waldo Stadium onsales and presale windows.",
    keywords: ['Waldo Stadium tickets', 'Western Michigan Broncos tickets', 'Stafford-Smith Field seating chart', 'Kalamazoo football tickets', 'Western Michigan football tickets 2026'],
    faqs: [
      { question: 'Why does Waldo Stadium now say Stafford-Smith Field?', answer: 'A 2024 donation from the Stafford-Smith family funded stadium upgrades in exchange for naming rights to the playing field; the stadium itself keeps the original Waldo Stadium name for the building.' },
    ],
    sections: [
      { name: 'East Side Lower Level', tier: 'lower' },
      { name: 'West Side Lower Level', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Stadium Club', tier: 'club' },
      { name: 'Press Box Club Seats', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
    ]
  },

  'camp-randall-stadium': {
    id: 'camp-randall-stadium',
    name: 'Camp Randall Stadium',
    city: 'Madison',
    state: 'WI',
    capacity: 76030,
    type: 'stadium',
    homeTeams: ['Wisconsin Badgers Football'],
    description: 'Camp Randall Stadium seats 76,030 for Wisconsin Badgers football on the Madison campus, ranking among the largest school-owned stadiums in the country and, having opened in 1917, one of the oldest still hosting major college football. The bowl forms a horseshoe opening to the south, built up over decades of expansions from its original Civil War-era training-ground site. "Jump Around" between the third and fourth quarters is the building\'s signature tradition, shaking the structure enough that engineers have studied its effect. TicketScan tracks Camp Randall Stadium onsales and presale windows.',
    keywords: ['Camp Randall Stadium tickets', 'Wisconsin Badgers tickets', 'Camp Randall seating chart', 'Madison football tickets', 'Wisconsin football tickets 2026'],
    faqs: [
      { question: 'Why do Camp Randall Stadium capacity figures vary between 76,030 and 76,057?', answer: 'Wisconsin Athletics\' own current facilities page lists 76,030 as the stadium\'s capacity; some older cached pages and secondary sources still carry the prior 76,057 figure.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Student Section', tier: 'lower' },
      { name: 'Club Seating', tier: 'club' },
      { name: 'Upper Bowl Sideline', tier: 'upper' },
      { name: 'Upper Bowl End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'jonah-field-at-war-memorial-stadium': {
    id: 'jonah-field-at-war-memorial-stadium',
    name: 'Jonah Field at War Memorial Stadium',
    city: 'Laramie',
    state: 'WY',
    capacity: 25500,
    type: 'stadium',
    homeTeams: ['Wyoming Cowboys Football'],
    description: 'Jonah Field at War Memorial Stadium seats 25,500 for Wyoming Cowboys football in Laramie, the highest-elevation NCAA Division I football stadium in the country at 7,220 feet above sea level. A renovation that ran from after the 2023 season through the start of the 2025 campaign rebuilt the east side, adding the WYO Sports Ranch Club and loge seating alongside the existing Wildcatter Stadium Club and Suites, a 12-suite, 256-seat indoor club dating to 2010. Grandstands run along the east and west sides of a field angled roughly 10 degrees off true north-south. TicketScan tracks War Memorial Stadium onsales and presale windows.',
    keywords: ['War Memorial Stadium tickets', 'Wyoming Cowboys tickets', 'Jonah Field seating chart', 'Laramie football tickets', 'Wyoming football tickets 2026'],
    faqs: [
      { question: 'Why did War Memorial Stadium capacity drop after its 2023-2025 renovation?', answer: 'The rebuild replaced general seating on the east side with the new WYO Sports Ranch Club and loge boxes, settling the stadium\'s current capacity at 25,500 per the athletics department\'s own facilities page, down from the pre-renovation 29,181.' },
    ],
    sections: [
      { name: 'East Grandstand Sideline', tier: 'lower' },
      { name: 'West Grandstand Sideline', tier: 'lower' },
      { name: 'End Zone Seating', tier: 'lower' },
      { name: 'WYO Sports Ranch Club', tier: 'club' },
      { name: 'WYO Sports Ranch Loge Seating', tier: 'club' },
      { name: 'Wildcatter Stadium Club', tier: 'club' },
      { name: 'Wildcatter Suites', tier: 'suite' },
    ]
  },
};
