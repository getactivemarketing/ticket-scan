// FBS batch 2 (14 programs): BYU through Florida International.
//
// Capacity, city, state and current stadium name are sourced from each
// venue's own Wikipedia article (never the aggregate "List of NCAA Division
// I FBS football stadiums" table, which runs stale against individual pages)
// or the school's athletics site, cross-checked against a second source
// where the dedicated article and a secondary listing disagreed. Two current
// figures came from resolving an internal conflict on the dedicated
// Wikipedia page itself: Rynearson Stadium's infobox still shows a
// 2008-era 26,188 while the article prose and Eastern Michigan's own site
// list 30,200, the number used here. Two schools renamed their stadiums for
// the 2026 season (Florida Atlantic to Flagler Credit Union Stadium; FIU to
// Pitbull Stadium) and both are captured under their current names.
//
// Jerry Richardson Stadium's press-and-suite tower is under construction
// and not open, so no suite tier is listed for it -- only premium seating
// that exists today. Clemson's Memorial Stadium is qualified in its slug
// (memorial-stadium-clemson) because "Memorial Stadium" is also the name of
// stadiums at Nebraska, Illinois, Indiana and Kansas in other batches.
//
// Section names come from each program's official facilities page or
// published seating chart. Where a specific numbered range could not be
// confirmed against an official source, the zone is named without numbers
// rather than guessed. `floor` is deliberately never used.

import type { Venue } from '../venue-types';

export const fbsStadiums2: Record<string, Venue> = {
  'lavell-edwards-stadium': {
    id: 'lavell-edwards-stadium',
    name: 'LaVell Edwards Stadium',
    city: 'Provo',
    state: 'UT',
    capacity: 62073,
    type: 'stadium',
    homeTeams: ['BYU Cougars Football'],
    description: 'LaVell Edwards Stadium seats 62,073 for BYU Cougars games on a bench above the Provo campus, renamed in 2000 for the coach who led the program for 29 seasons. Two-tiered stands run both sidelines while the end zones carry a single deck, and the student section was consolidated into one area in 2013. A block of blue and white seats added in 2003 spells out BYU in giant letters facing the field. The lone press-and-suite tower rises on the west side, and a 2024 renovation added table seating and improved accessible seating throughout the bowl. TicketScan tracks LaVell Edwards Stadium onsales and presale windows.',
    keywords: ['LaVell Edwards Stadium tickets', 'BYU Cougars football tickets', 'LaVell Edwards Stadium seating chart', 'BYU football tickets 2026', 'Provo Utah football tickets'],
    faqs: [
      { question: 'What is the BYU letters seating section at LaVell Edwards Stadium?', answer: 'A block of blue and white seats added in 2003 spells out "BYU" in large block letters, visible from the stands and in television broadcasts of games.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Student Section', tier: 'lower' },
      { name: 'BYU Letters Luxury Seating', tier: 'club' },
      { name: 'Center Sideline Club Level', tier: 'club' },
      { name: '200 Level Upper Sideline', tier: 'upper' },
      { name: 'Table Seating (2024 Renovation)', tier: 'club' },
      { name: 'West Tower Suites', tier: 'suite' },
    ]
  },

  'california-memorial-stadium': {
    id: 'california-memorial-stadium',
    name: 'California Memorial Stadium',
    city: 'Berkeley',
    state: 'CA',
    capacity: 52428,
    type: 'stadium',
    homeTeams: ['California Golden Bears Football'],
    description: 'California Memorial Stadium seats 52,428 for California Golden Bears games in the Berkeley hills, an open-air bowl built in 1923 as a memorial to Californians who died in World War I. A 2012 seismic retrofit rebuilt the west side with a new club level, a Field Club and loge boxes, while reducing permanent seating from its earlier configuration. Several upper-bowl sections have been tarped off since 2022, which is reflected in the current listed capacity. The stadium sits below Tightwad Hill, where fans have long watched games for free from the hillside above the rim. TicketScan tracks California Memorial Stadium onsales and presale windows.',
    keywords: ['California Memorial Stadium tickets', 'Cal Golden Bears football tickets', 'California Memorial Stadium seating chart', 'Berkeley football tickets 2026', 'Cal football tickets 2026'],
    faqs: [
      { question: 'Why is California Memorial Stadium capacity below 60,000?', answer: "The 2012 seismic retrofit reduced permanent seating from the stadium's earlier configuration, and several upper-bowl sections have been tarped off since 2022, bringing the current listed capacity to 52,428." },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'West Club Level', tier: 'club' },
      { name: 'Field Club', tier: 'club' },
      { name: 'Loge Boxes', tier: 'club' },
      { name: 'Upper Bowl', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'kelly-shorts-stadium': {
    id: 'kelly-shorts-stadium',
    name: 'Kelly/Shorts Stadium',
    city: 'Mount Pleasant',
    state: 'MI',
    capacity: 35127,
    type: 'stadium',
    homeTeams: ['Central Michigan University Chippewas Football'],
    description: "Kelly/Shorts Stadium seats 35,127 for Central Michigan Chippewas games in Mount Pleasant, the largest on-campus stadium in the Mid-American Conference, with a playing surface named Kramer/Deromedi Field for two of the program's longtime coaches. Sections E, F and G on the home sideline between the 30-yard lines make up the Chippewa Club, the closest general seating to the field. Nine luxury suites sit behind the press box and include chairback seating, a club lounge and VIP parking. The videoboard, 32 feet tall and 100 feet wide, is the largest in the conference. TicketScan tracks Kelly/Shorts Stadium onsales and presale windows.",
    keywords: ['Kelly/Shorts Stadium tickets', 'Central Michigan Chippewas football tickets', 'Kelly Shorts Stadium seating chart', 'Mount Pleasant Michigan football tickets', 'CMU football tickets 2026'],
    faqs: [
      { question: 'What is the Chippewa Club at Kelly/Shorts Stadium?', answer: 'Sections E, F and G on the home sideline between the 30-yard lines, the closest general-admission seating to the field and considered among the best seats in the stadium.' },
    ],
    sections: [
      { name: 'Chippewa Club Sideline (Sections E, F, G)', tier: 'club' },
      { name: 'Home Sideline General Seating', tier: 'lower' },
      { name: 'Visitor Sideline General Seating', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Luxury Suite Level (Nine Suites)', tier: 'suite' },
    ]
  },

  'jerry-richardson-stadium': {
    id: 'jerry-richardson-stadium',
    name: 'Jerry Richardson Stadium',
    city: 'Charlotte',
    state: 'NC',
    capacity: 15314,
    type: 'stadium',
    homeTeams: ['Charlotte 49ers Football'],
    description: "Jerry Richardson Stadium, officially McColl–Richardson Field at Jerry Richardson Stadium, seats 15,314 for Charlotte 49ers games in a horseshoe-shaped bowl open at one end. Most of the home sideline is sold through personal seat licenses, with the priciest tier running between the 30-yard lines at midfield and a lower tier covering the 30s out to the end zones. About 200 corporate seats make up the White Gold Tier, and the north end zone holds the student stands. A press-and-suite tower is under construction on the west side and is expected to open in early 2027. TicketScan tracks Jerry Richardson Stadium onsales and presale windows.",
    keywords: ['Jerry Richardson Stadium tickets', 'Charlotte 49ers football tickets', 'Jerry Richardson Stadium seating chart', 'Charlotte football tickets 2026', '49ers football tickets'],
    faqs: [
      { question: 'Does Jerry Richardson Stadium have suites yet?', answer: 'Not currently. A press-and-suite tower is under construction on the west side and is expected to open in early 2027; premium seating today is limited to the roughly 200-seat White Gold Tier.' },
    ],
    sections: [
      { name: 'Home Sideline Midfield (Between the 30s)', tier: 'club' },
      { name: 'Home Sideline (30s to End Zone)', tier: 'lower' },
      { name: 'White Gold Tier (Corporate Seating)', tier: 'club' },
      { name: 'North End Zone Student Stands', tier: 'lower' },
      { name: 'Visitor Sideline Bleachers', tier: 'lower' },
      { name: 'General Bleacher Seating', tier: 'lower' },
    ]
  },

  'nippert-stadium': {
    id: 'nippert-stadium',
    name: 'Nippert Stadium',
    city: 'Cincinnati',
    state: 'OH',
    capacity: 38088,
    type: 'stadium',
    homeTeams: ['Cincinnati Bearcats College Football'],
    description: "Nippert Stadium, formally James Gamble Nippert Memorial Stadium, seats 38,088 for Cincinnati Bearcats games on campus and is one of the oldest college football venues still in use, dating to 1915. The east sideline's Herschede-Shank Pavilion carries an upper deck expanded in 1992, while the West Pavilion added in the 2014-2015 renovation holds club seats and loge boxes. Field-level suites were installed in 2022. The pitch was widened for professional soccer use in 2017, which cut back corner seating and lowered capacity from the roughly 40,000 figure still quoted from the 2015 rebuild. TicketScan tracks Nippert Stadium onsales and presale windows.",
    keywords: ['Nippert Stadium tickets', 'Cincinnati Bearcats football tickets', 'Nippert Stadium seating chart', 'Cincinnati football tickets 2026', 'UC Bearcats tickets'],
    faqs: [
      { question: 'Why do some sources list Nippert Stadium capacity near 40,000?', answer: 'That figure reflects the 2015 rebuild before the field was widened for professional soccer in 2017, which cut back corner seating. The current capacity is 38,088.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Herschede-Shank Pavilion (East Upper Deck)', tier: 'upper' },
      { name: 'West Pavilion Club Seats', tier: 'club' },
      { name: 'West Pavilion Loge Boxes', tier: 'club' },
      { name: 'UCATS Seating', tier: 'lower' },
      { name: 'Field-Level Suites', tier: 'suite' },
    ]
  },

  'memorial-stadium-clemson': {
    id: 'memorial-stadium-clemson',
    name: 'Memorial Stadium',
    city: 'Clemson',
    state: 'SC',
    capacity: 81500,
    type: 'stadium',
    homeTeams: ['Clemson University Tigers Football'],
    description: "Memorial Stadium, known as Death Valley and centered on Frank Howard Field, seats 81,500 for Clemson Tigers games on a hill overlooking Lake Hartwell, with room for more than 86,000 including standing areas. The South and North Upper Decks, added in 1978 and 1983, sit above the original lower bowl. The WestZone project, finished in 2015, added the Masters Club, luxury suites and a four-level football museum, and an EastZone renovation completed in 2022 added club seating and a new video board above the east end. TicketScan tracks Memorial Stadium onsales and presale windows.",
    keywords: ['Memorial Stadium tickets', 'Clemson Tigers football tickets', 'Death Valley Clemson tickets', 'Memorial Stadium Clemson seating chart', 'Clemson football tickets 2026'],
    faqs: [
      { question: "Why is Clemson's Memorial Stadium called Death Valley?", answer: "The nickname predates the current stadium and has stuck through the venue's expansions; the field itself is named Frank Howard Field for the coach who built the program." },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'South Upper Deck', tier: 'upper' },
      { name: 'North Upper Deck', tier: 'upper' },
      { name: 'WestZone Masters Club', tier: 'club' },
      { name: 'WestZone Suites', tier: 'suite' },
      { name: 'EastZone Club Seating', tier: 'club' },
    ]
  },

  'brooks-stadium': {
    id: 'brooks-stadium',
    name: 'Brooks Stadium',
    city: 'Conway',
    state: 'SC',
    capacity: 21000,
    type: 'stadium',
    homeTeams: ['Coastal Carolina Chanticleers Football'],
    description: "Brooks Stadium seats 21,000 for Coastal Carolina Chanticleers games in Conway, expanded in phases from an original capacity near 9,000 when it opened in 2003. A 2017-2019 expansion added premium seating and an upper deck on the west side, along with suites for the growing program. The stadium sits on the same footprint as the university's earlier on-campus facility and remains one of the newer venues in the Sun Belt Conference. Coastal Carolina has sold the stadium out repeatedly since joining the FBS ranks in 2017. TicketScan tracks Brooks Stadium onsales and presale windows.",
    keywords: ['Brooks Stadium tickets', 'Coastal Carolina Chanticleers football tickets', 'Brooks Stadium seating chart', 'Conway South Carolina football tickets', 'CCU football tickets 2026'],
    faqs: [
      { question: 'When was the upper deck added at Brooks Stadium?', answer: 'A 2017-2019 expansion added premium seating and an upper deck to the west side of the stadium, part of a series of expansions since Brooks Stadium opened in 2003.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'West Upper Deck', tier: 'upper' },
      { name: 'West Side Premium Seating', tier: 'club' },
      { name: 'Suite Level', tier: 'suite' },
      { name: 'End Zone Bleachers', tier: 'lower' },
    ]
  },

  'canvas-stadium': {
    id: 'canvas-stadium',
    name: 'Canvas Stadium',
    city: 'Fort Collins',
    state: 'CO',
    capacity: 36500,
    type: 'stadium',
    homeTeams: ['Colorado State Rams Football'],
    description: "Canvas Stadium, officially Sonny Lubick Field at Canvas Stadium, seats 36,500 for Colorado State Rams games on campus in Fort Collins, having opened in 2017 with standing-room capacity expandable to about 41,000. The building carries 23 private suites, 884 club seats and 224 loge boxes across premium areas that include the Orthopedic & Spine Center of the Rockies Field Club and the Stadium Club. The New Belgium Porch, a bar area funded by the Fort Collins brewery, anchors the north end zone party deck. TicketScan tracks Canvas Stadium onsales and presale windows.",
    keywords: ['Canvas Stadium tickets', 'Colorado State Rams football tickets', 'Canvas Stadium seating chart', 'Fort Collins football tickets 2026', 'CSU Rams tickets'],
    faqs: [
      { question: 'What is the New Belgium Porch at Canvas Stadium?', answer: 'A bar area on the north end zone party deck, funded by a $4.3 million donation from Fort Collins-based New Belgium Brewing Company.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Field Club', tier: 'club' },
      { name: 'Stadium Club', tier: 'club' },
      { name: 'Loge Boxes', tier: 'club' },
      { name: 'New Belgium Porch (North End Zone)', tier: 'club' },
      { name: 'Suite Level (23 Private Suites)', tier: 'suite' },
    ]
  },

  'wallace-wade-stadium': {
    id: 'wallace-wade-stadium',
    name: 'Wallace Wade Stadium',
    city: 'Durham',
    state: 'NC',
    capacity: 35018,
    type: 'stadium',
    homeTeams: ['Duke University Blue Devils Football'],
    description: "Wallace Wade Stadium, officially Brooks Field at Wallace Wade Stadium, seats 35,018 for Duke Blue Devils games on campus in Durham. Capacity dropped from 40,004 in 2024 when the north end was rebuilt as the Devils Deck, a terraced standing-room area with a tailgate-style atmosphere. The five-story Blue Devil Tower on the west side, opened in 2016, holds 516 club seats and 21 luxury suites above the sideline. The stadium has been Duke's home since 1929 and carries the name of the coach who led the program for two decades. TicketScan tracks Wallace Wade Stadium onsales and presale windows.",
    keywords: ['Wallace Wade Stadium tickets', 'Duke Blue Devils football tickets', 'Wallace Wade Stadium seating chart', 'Durham North Carolina football tickets', 'Duke football tickets 2026'],
    faqs: [
      { question: 'What is the Devils Deck at Wallace Wade Stadium?', answer: 'A terraced, standing-room area added to the north end in 2024 when Duke rebuilt that end of the stadium, replacing traditional seating with a tailgate-style atmosphere and lowering total capacity to 35,018.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'South End Zone General Seating', tier: 'lower' },
      { name: 'Devils Deck (North End Zone Standing Room)', tier: 'lower' },
      { name: 'Blue Devil Tower Club Seats', tier: 'club' },
      { name: 'Blue Devil Tower Suites', tier: 'suite' },
    ]
  },

  'dowdy-ficklen-stadium': {
    id: 'dowdy-ficklen-stadium',
    name: 'Dowdy–Ficklen Stadium',
    city: 'Greenville',
    state: 'NC',
    capacity: 50000,
    type: 'stadium',
    homeTeams: ['East Carolina Pirates College Football'],
    description: "Dowdy–Ficklen Stadium seats 50,000 for East Carolina Pirates games in Greenville, part of the Grady-White Boats Athletic Campus. The south side's TowneBank Tower, finished in a 2018-2019 renovation, added a club level, loge boxes, standard and founder's suites, and more than 100 media seats, all reached through the affiliated Pirate Club membership program. The north side carries chair-back seating installed in the 2009-2010 expansion plus an upper deck completed in 1998. The stadium sits along the Tar River on the East Carolina University campus. TicketScan tracks Dowdy–Ficklen Stadium onsales and presale windows.",
    keywords: ['Dowdy-Ficklen Stadium tickets', 'East Carolina Pirates football tickets', 'Dowdy Ficklen Stadium seating chart', 'Greenville North Carolina football tickets', 'ECU football tickets 2026'],
    faqs: [
      { question: 'What is the TowneBank Tower at Dowdy-Ficklen Stadium?', answer: "A south-side structure from the 2018-2019 renovation holding a club level, loge boxes, and both standard and founder's suites, all accessed through the East Carolina Pirate Club membership program." },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'North Upper Deck', tier: 'upper' },
      { name: 'TowneBank Tower Club Level', tier: 'club' },
      { name: 'TowneBank Tower Loge Boxes', tier: 'club' },
      { name: 'TowneBank Tower Suites', tier: 'suite' },
      { name: 'Pirate Club Seating', tier: 'club' },
    ]
  },

  'rynearson-stadium': {
    id: 'rynearson-stadium',
    name: 'Rynearson Stadium',
    city: 'Ypsilanti',
    state: 'MI',
    capacity: 30200,
    type: 'stadium',
    homeTeams: ['Eastern Michigan University Eagles Football'],
    description: "Rynearson Stadium, nicknamed The Factory, seats 30,200 for Eastern Michigan Eagles games in Ypsilanti and has been the team's home since 1969. Grandstands run along the west (home) and east (visitor) sidelines, with a 1992 addition that extended seating but was built as a separate structure, giving the bowl the look of an unfinished horseshoe rather than a fully enclosed stadium. The venue also hosts Eastern Michigan's marching band and community events on its artificial turf field. TicketScan tracks Rynearson Stadium onsales and presale windows.",
    keywords: ['Rynearson Stadium tickets', 'Eastern Michigan Eagles football tickets', 'Rynearson Stadium seating chart', 'Ypsilanti Michigan football tickets', 'EMU football tickets 2026'],
    faqs: [
      { question: 'Why is Rynearson Stadium shaped like an unfinished horseshoe?', answer: "A 1992 grandstand addition was built as a separate structure from the original stands rather than a connected bowl, leaving a visible gap that gives the stadium its horseshoe look." },
    ],
    sections: [
      { name: 'West Grandstand (Home Sideline)', tier: 'lower' },
      { name: 'East Grandstand (Visitor Sideline)', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Upper Grandstand (1992 Addition)', tier: 'upper' },
      { name: 'General Admission Seating', tier: 'lower' },
    ]
  },

  'flagler-credit-union-stadium': {
    id: 'flagler-credit-union-stadium',
    name: 'Flagler Credit Union Stadium',
    city: 'Boca Raton',
    state: 'FL',
    capacity: 30000,
    type: 'stadium',
    homeTeams: ['Florida Atlantic University Owls Football'],
    description: "Flagler Credit Union Stadium, formerly FAU Stadium, seats 30,000 for Florida Atlantic Owls games on campus in Boca Raton, where the field itself carries the name Howard Schnellenberger Field for the coach who founded the program. It opened in 2011 as the newest on-campus stadium among Florida's FBS programs. Premium options in the west tower include 24 executive suites, field-level cabana seating, an indoor club lounge and an open-air luxury deck. The naming-rights deal announced in 2024 is worth $22.5 million over 15 years, among the largest in the Group of Five. TicketScan tracks Flagler Credit Union Stadium onsales and presale windows.",
    keywords: ['Flagler Credit Union Stadium tickets', 'FAU Owls football tickets', 'FAU Stadium seating chart', 'Boca Raton football tickets 2026', 'Florida Atlantic football tickets'],
    faqs: [
      { question: 'Is Flagler Credit Union Stadium the same as FAU Stadium?', answer: 'Yes. The venue opened in 2011 as FAU Stadium and was renamed under a 15-year, $22.5 million naming-rights deal announced in 2024; the playing surface is separately named Howard Schnellenberger Field.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Field-Level Cabana Seating', tier: 'club' },
      { name: 'Indoor Club Lounge', tier: 'club' },
      { name: 'Open-Air Luxury Deck', tier: 'club' },
      { name: 'West Tower Suites (24 Executive Suites)', tier: 'suite' },
    ]
  },

  'ben-hill-griffin-stadium': {
    id: 'ben-hill-griffin-stadium',
    name: 'Ben Hill Griffin Stadium',
    city: 'Gainesville',
    state: 'FL',
    capacity: 88548,
    type: 'stadium',
    homeTeams: ['Florida Gators Football'],
    description: "Ben Hill Griffin Stadium, known as The Swamp and officially Steve Spurrier–Florida Field at Ben Hill Griffin Stadium, seats 88,548 for Florida Gators games in Gainesville, the largest stadium in the state. Club options include the field-level Bull Gator Deck near the Florida sideline, the air-conditioned Touchdown Terrace and the Champions Club at the top of the bowl in the 500 level, added or expanded in the stadium's 1991 and 2003 renovations. The 200 and 300 levels form the upper deck around the north end. TicketScan tracks Ben Hill Griffin Stadium onsales and presale windows.",
    keywords: ['Ben Hill Griffin Stadium tickets', 'Florida Gators football tickets', 'The Swamp seating chart', 'Gainesville football tickets 2026', 'Florida Gators tickets 2026'],
    faqs: [
      { question: 'Why is Ben Hill Griffin Stadium called The Swamp?', answer: "The nickname was popularized by former coach Steve Spurrier, and the stadium's official name now credits him alongside longtime benefactor Ben Hill Griffin Jr., whose donations funded its 1980s expansion." },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner & End Zone', tier: 'lower' },
      { name: 'Bull Gator Deck (Field Level)', tier: 'club' },
      { name: 'Touchdown Terrace', tier: 'club' },
      { name: 'Champions Club (500 Level Center)', tier: 'club' },
      { name: '200 Level Upper Corner', tier: 'upper' },
      { name: '300 Level Upper End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'pitbull-stadium': {
    id: 'pitbull-stadium',
    name: 'Pitbull Stadium',
    city: 'Miami',
    state: 'FL',
    capacity: 20000,
    type: 'stadium',
    homeTeams: ['Florida International University Football'],
    description: "Pitbull Stadium seats 20,000 for Florida International Panthers games in Miami, renamed in 2024 under a naming-rights deal with recording artist Pitbull, a former FIU marketing student, effective for the 2026 season. It opened in 1995 as FIU Stadium and was known as Riccardo Silva Stadium from 2017 through 2024. The venue includes a 6,500-square-foot Panther Club on the ground level and 19 luxury suites, plus an upper concourse with additional fan seating and concessions. TicketScan tracks Pitbull Stadium onsales and presale windows.",
    keywords: ['Pitbull Stadium tickets', 'FIU Panthers football tickets', 'Pitbull Stadium seating chart', 'Miami football tickets 2026', 'FIU football tickets'],
    faqs: [
      { question: "Why is FIU's stadium called Pitbull Stadium?", answer: 'A 2024 naming-rights deal with recording artist Pitbull, a former FIU marketing student, renamed the venue effective for the 2026 season; it was previously known as Riccardo Silva Stadium from 2017 to 2024 and FIU Stadium before that.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'General Admission Seating', tier: 'lower' },
      { name: 'Panther Club (Ground Level)', tier: 'club' },
      { name: 'Upper Concourse Seating', tier: 'upper' },
      { name: 'Suite Level (19 Luxury Suites)', tier: 'suite' },
    ]
  },
};
