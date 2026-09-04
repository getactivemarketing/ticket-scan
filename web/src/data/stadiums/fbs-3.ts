// FBS batch 3 of 10 — 14 programs (Florida State through Kennesaw State).
//
// Every capacity and section fact below was pulled from that stadium's own
// Wikipedia article or its athletics department's official facilities page —
// never from the aggregate "List of NCAA Division I FBS football stadiums"
// table, which goes stale as individual schools renovate. Two entries carry
// an explicit construction-status note because they are mid-renovation as of
// the 2026 season: Bobby Dodd Stadium (Fanning Center, opened after 2025;
// a further chairback renovation is planned to start after 2026, not yet
// underway) and David Booth Kansas Memorial Stadium, whose capacity is
// reduced to 32,000 for 2026 while its east stand is demolished and rebuilt,
// well below both the pre-renovation figure and the 43,000 planned for 2027.
//
// Section names come from each venue's own facilities pages, premium-seating
// announcements or published seating charts. Where a specific numbered
// breakdown could not be sourced, the zone is named without invented numbers
// rather than guessed. `floor` is deliberately never used.

import type { Venue } from '../venue-types';

export const fbsStadiums3: Record<string, Venue> = {
  'doak-campbell-stadium': {
    id: 'doak-campbell-stadium',
    name: 'Bobby Bowden Field at Doak S. Campbell Stadium',
    city: 'Tallahassee',
    state: 'FL',
    capacity: 67277,
    type: 'stadium',
    homeTeams: ['Florida State Seminoles Football'],
    description: 'Bobby Bowden Field at Doak S. Campbell Stadium seats 67,277 for Florida State Seminoles games in Tallahassee and completed a two-year 75th-anniversary renovation before the 2025 opener against Alabama, which added expanded seating and new chairback seating on the east side. The Dunlap Champions Club, formerly the University Center Club, sits in the south end zone with an indoor lounge. Skyboxes and a press box run along the west sideline above the upper deck. TicketScan tracks when tickets for Doak Campbell Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Doak Campbell Stadium tickets', 'Florida State Seminoles tickets', 'Doak Campbell Stadium seating chart', 'FSU football tickets', 'Tallahassee football tickets'],
    faqs: [
      { question: 'What changed at Doak Campbell Stadium for the 2025-26 seasons?', answer: 'A two-year 75th-anniversary renovation added new chairback seating on the east side along with expanded seating options and updated concourses, unveiled ahead of the 2025 season opener against Alabama.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'East Side Chairback Seating', tier: 'lower' },
      { name: 'Dunlap Champions Club (south end zone)', tier: 'club' },
      { name: 'Upper Deck Sideline', tier: 'upper' },
      { name: 'Upper Deck End Zone', tier: 'upper' },
      { name: 'Skybox Suites', tier: 'suite' },
    ]
  },

  'valley-childrens-stadium': {
    id: 'valley-childrens-stadium',
    name: "Valley Children's Stadium",
    city: 'Fresno',
    state: 'CA',
    capacity: 40727,
    type: 'stadium',
    homeTeams: ['Fresno State Bulldogs Football'],
    description: "Valley Children's Stadium seats 40,727 for Fresno State Bulldogs games and was known as Bulldog Stadium from 1980 until its 2021 naming-rights renaming. The west sideline between the eighteen-yard lines carries more than 5,000 individual reserved seats, while the east side holds 4,240 backed chairback seats. Twenty-two sky suites were added along the upper concourse during a 1991-92 expansion and remain the stadium's only suite level. TicketScan tracks when tickets for Valley Children's Stadium events go on sale, including presale windows that open before the public onsale.",
    keywords: ["Valley Children's Stadium tickets", 'Fresno State Bulldogs tickets', "Valley Children's Stadium seating chart", 'Bulldog Stadium tickets', 'Fresno football tickets'],
    faqs: [
      { question: "Was Valley Children's Stadium always called that?", answer: 'No. It was known as Bulldog Stadium from 1980 until a 2021 naming-rights deal renamed it Valley Children\'s Stadium; the playing surface still carries the separate Jim Sweeney Field name.' },
    ],
    sections: [
      { name: 'West Sideline Reserved Seating (between the 18-yard lines)', tier: 'lower' },
      { name: 'East Sideline Chairback Seating', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'General Bench Seating', tier: 'lower' },
      { name: 'Sky Suites', tier: 'suite' },
    ]
  },

  'allen-e-paulson-stadium': {
    id: 'allen-e-paulson-stadium',
    name: 'Evans Family Field at Allen E. Paulson Stadium',
    city: 'Statesboro',
    state: 'GA',
    capacity: 25000,
    type: 'stadium',
    homeTeams: ['Georgia Southern Eagles Football'],
    description: 'Evans Family Field at Allen E. Paulson Stadium seats 25,000 for Georgia Southern Eagles games in Statesboro. The building carries 26 climate-controlled private boxes along with separate Eagle Club and President\'s Luxury Sky Suites seating, served by a 50-seat press box and film deck on the south side. The Gene Bishop Fieldhouse, completed in 2006 beyond the north end zone, houses team facilities on its ground floor and club-level seating on its second level overlooking the field. TicketScan tracks Allen E. Paulson Stadium onsales and presale windows.',
    keywords: ['Allen E. Paulson Stadium tickets', 'Georgia Southern Eagles tickets', 'Allen E. Paulson Stadium seating chart', 'Statesboro football tickets', 'Georgia Southern football tickets'],
    faqs: [
      { question: 'What is the Gene Bishop Fieldhouse at Allen E. Paulson Stadium?', answer: 'It is a facility beyond the north end zone, completed in 2006, that houses Georgia Southern team facilities on its ground floor and club-level seating overlooking the field on its second level.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Eagle Club', tier: 'club' },
      { name: "Gene Bishop Fieldhouse Club Level", tier: 'club' },
      { name: "President's Luxury Sky Suites", tier: 'suite' },
      { name: 'Private Boxes', tier: 'suite' },
    ]
  },

  'center-parc-stadium': {
    id: 'center-parc-stadium',
    name: 'Center Parc Stadium',
    city: 'Atlanta',
    state: 'GA',
    capacity: 24333,
    type: 'stadium',
    homeTeams: ['Georgia State Panthers Football'],
    description: 'Center Parc Stadium seats 24,333 for Georgia State Panthers games on the site of the 1996 Olympics\' Centennial Olympic Stadium, which became the Atlanta Braves\' Turner Field in 1997 before Georgia State converted it for football and opened it in 2017. A naming-rights deal with Atlanta Postal Credit Union runs through 2035. The 300 level forms the club tier, with sections 314-321 giving the best covered sideline views on the Georgia State side and direct access to an indoor club lounge. TicketScan tracks Center Parc Stadium onsales and presale windows.',
    keywords: ['Center Parc Stadium tickets', 'Georgia State Panthers tickets', 'Center Parc Stadium seating chart', 'Atlanta football tickets', 'Georgia State football tickets'],
    faqs: [
      { question: 'What was Center Parc Stadium before it was a football venue?', answer: 'It opened in 1996 as Centennial Olympic Stadium, then became the Atlanta Braves\' Turner Field from 1997 to 2016 before Georgia State reconfigured it for football and opened it as Center Parc Stadium in 2017.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Club Level Sideline 314-321', tier: 'club' },
      { name: 'Club Level (remaining 300 sections)', tier: 'club' },
      { name: 'Suites', tier: 'suite' },
      { name: 'Family & General Admission Sections', tier: 'lower' },
    ]
  },

  'bobby-dodd-stadium': {
    id: 'bobby-dodd-stadium',
    name: 'Bobby Dodd Stadium at Hyundai Field',
    city: 'Atlanta',
    state: 'GA',
    capacity: 51913,
    type: 'stadium',
    homeTeams: ['Georgia Tech Yellow Jackets Football'],
    description: 'Bobby Dodd Stadium at Hyundai Field seats 51,913 for Georgia Tech Yellow Jackets games at Historic Grant Field on campus, and Georgia Tech has confirmed it will play every 2026 home game there. The club level, added during a 2002-2003 renovation, carries chairback seating and an air-conditioned lounge. Most of the bowl is bleacher seating across upper and lower decks on the east and west sides. The Thomas A. Fanning Student-Athlete Performance Center, under construction in the northeast corner, is scheduled to open after the 2025 season and has trimmed capacity in that corner. TicketScan tracks Bobby Dodd Stadium onsales and presale windows.',
    keywords: ['Bobby Dodd Stadium tickets', 'Georgia Tech Yellow Jackets tickets', 'Bobby Dodd Stadium seating chart', 'Atlanta football tickets', 'Georgia Tech football tickets'],
    faqs: [
      { question: 'Why is Bobby Dodd Stadium capacity lower than in past seasons?', answer: 'Construction of the Thomas A. Fanning Student-Athlete Performance Center in the northeast corner has removed some seating, bringing capacity to 51,913 as of the 2024 season and unchanged into 2026.' },
    ],
    sections: [
      { name: 'Lower Deck Sideline', tier: 'lower' },
      { name: 'Lower Deck End Zone', tier: 'lower' },
      { name: 'North Stands', tier: 'lower' },
      { name: 'Club Level (chairback, air-conditioned lounge)', tier: 'club' },
      { name: 'Upper Deck East', tier: 'upper' },
      { name: 'Upper Deck West', tier: 'upper' },
    ]
  },

  'clarence-tc-ching-athletics-complex': {
    id: 'clarence-tc-ching-athletics-complex',
    name: 'Clarence T. C. Ching Athletics Complex',
    city: 'Honolulu',
    state: 'HI',
    capacity: 15194,
    type: 'stadium',
    homeTeams: ['Hawaii Warriors'],
    description: 'Clarence T. C. Ching Athletics Complex seats 15,194 for Hawaii Rainbow Warriors games on campus at Manoa, becoming the football team\'s home in 2021 after the closure of the much larger Aloha Stadium. Expansion work since then has grown capacity from an initial 9,346 to the current 15,194, with standing room pushing it to about 16,000. Seating is organized into the Hawaii sideline, the visitor sideline and separate end zone stands, alongside a dedicated student section and boxes overlooking the field. TicketScan tracks when tickets for Clarence T.C. Ching Athletics Complex events go on sale.',
    keywords: ['Ching Complex tickets', 'Hawaii Rainbow Warriors tickets', 'Ching Athletics Complex seating chart', 'Hawaii football tickets', 'Honolulu football tickets'],
    faqs: [
      { question: 'Why is the Ching Complex so much smaller than Hawaii\'s old stadium?', answer: 'It was built as an on-campus complex, not a full replacement for the roughly 50,000-seat Aloha Stadium the Warriors left behind in 2021. Its capacity has since grown from 9,346 seats to 15,194 through phased expansion.' },
    ],
    sections: [
      { name: 'Hawaii Sideline', tier: 'lower' },
      { name: 'Visitor Sideline', tier: 'lower' },
      { name: 'Student Section', tier: 'lower' },
      { name: 'Visitor Section', tier: 'lower' },
      { name: 'End Zone Stands', tier: 'lower' },
      { name: 'Boxes', tier: 'suite' },
    ]
  },

  'memorial-stadium-indiana': {
    id: 'memorial-stadium-indiana',
    name: 'Merchants Bank Field at Memorial Stadium',
    city: 'Bloomington',
    state: 'IN',
    capacity: 53524,
    type: 'stadium',
    homeTeams: ['Indiana Hoosiers Football'],
    description: 'Merchants Bank Field at Memorial Stadium seats 53,524 for Indiana Hoosiers games in Bloomington. Nine field-level suites sit behind the south end zone, with eight more added to Sample Terrace overlooking that end and eight individual suites on the sixth floor of the press box. The IU Stadium Club offers 300 theater-style cushioned seats in a climate-controlled setting, and the North End Zone Facility adds 415 outdoor club seats with access to the Hall of Champions lounge. TicketScan tracks when tickets for Memorial Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Indiana Memorial Stadium tickets', 'Indiana Hoosiers tickets', 'Memorial Stadium Bloomington seating chart', 'Bloomington football tickets', 'Indiana football tickets'],
    faqs: [
      { question: 'What is the Hall of Champions at Memorial Stadium?', answer: 'It is the indoor club lounge tied to the North End Zone Facility\'s 415 outdoor club seats, offering catered food and beverages for those ticket holders behind the north end zone.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'IU Stadium Club', tier: 'club' },
      { name: 'North End Zone / Hall of Champions Club Seats', tier: 'club' },
      { name: 'Field Level Suites (south end zone)', tier: 'suite' },
      { name: 'Sample Terrace Suites', tier: 'suite' },
      { name: 'Press Box Suites', tier: 'suite' },
    ]
  },

  'kinnick-stadium': {
    id: 'kinnick-stadium',
    name: 'Duke Slater Field at Kinnick Stadium',
    city: 'Iowa City',
    state: 'IA',
    capacity: 69250,
    type: 'stadium',
    homeTeams: ['Iowa Hawkeyes Football'],
    description: 'Duke Slater Field at Kinnick Stadium seats 69,250 for Iowa Hawkeyes games in Iowa City, its capacity since a 2018 expansion. The playing surface was named for Hall of Fame lineman and Iowa alumnus Duke Slater in 2021. A 2016-2019 renovation rebuilt the north end zone with box seating and outdoor club seating, replacing the old bleacher end. The visiting locker room is famously painted pink, a tradition credited to emeritus coach Hayden Fry. TicketScan tracks when tickets for Kinnick Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Kinnick Stadium tickets', 'Iowa Hawkeyes tickets', 'Kinnick Stadium seating chart', 'Iowa City football tickets', 'Iowa football tickets'],
    faqs: [
      { question: 'Who is Duke Slater, and why is the field named for him?', answer: 'Duke Slater was a Pro Football Hall of Fame lineman and Iowa alumnus. The University of Iowa named the Kinnick Stadium playing surface Duke Slater Field in his honor in 2021.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Upper Deck Sideline', tier: 'upper' },
      { name: 'North End Zone Box Seating', tier: 'suite' },
      { name: 'North End Zone Outdoor Club Seating', tier: 'club' },
      { name: 'Press Box Suites', tier: 'suite' },
    ]
  },

  'jack-trice-stadium': {
    id: 'jack-trice-stadium',
    name: 'Jack Trice Stadium',
    city: 'Ames',
    state: 'IA',
    capacity: 61500,
    type: 'stadium',
    homeTeams: ['Iowa State Cyclones Football'],
    description: 'Jack Trice Stadium seats 61,500 for Iowa State Cyclones games in Ames, its capacity since a 2015 expansion that added an upper deck above the south end zone. Double-decked grandstands run along both sidelines, and hillside seating fills the corners as part of the listed capacity. A roughly 40,000-square-foot premium club section in the lower bowl seats more than 3,000, and nine sky boxes sit in the 1997 press tower addition. The north end zone houses the Richard O. Jacobson Athletic Building. TicketScan tracks Jack Trice Stadium onsales and presale windows.',
    keywords: ['Jack Trice Stadium tickets', 'Iowa State Cyclones tickets', 'Jack Trice Stadium seating chart', 'Ames football tickets', 'Iowa State football tickets'],
    faqs: [
      { question: 'When did the south end zone at Jack Trice Stadium get an upper deck?', answer: 'A 2015 expansion added upper and lower decks to the south end zone, part of the project that brought total capacity to its current 61,500.' },
    ],
    sections: [
      { name: 'Sideline Grandstand Lower Deck', tier: 'lower' },
      { name: 'Sideline Grandstand Upper Deck', tier: 'upper' },
      { name: 'South End Zone Lower Deck', tier: 'lower' },
      { name: 'South End Zone Upper Deck', tier: 'upper' },
      { name: 'North End Zone (Jacobson Athletic Building)', tier: 'lower' },
      { name: 'Hillside Corner Seats', tier: 'lower' },
      { name: 'Premium Club Section (lower bowl)', tier: 'club' },
      { name: 'Sky Box Suites (press tower)', tier: 'suite' },
    ]
  },

  'amfirst-stadium': {
    id: 'amfirst-stadium',
    name: 'Burgess-Snow Field at AmFirst Stadium',
    city: 'Jacksonville',
    state: 'AL',
    capacity: 22500,
    type: 'stadium',
    homeTeams: ['Jacksonville State Gamecocks Football'],
    description: 'Burgess-Snow Field at AmFirst Stadium seats 22,500 for Jacksonville State Gamecocks games, taking its current naming-rights name from a July 2024 five-year deal with America\'s First Federal Credit Union; the venue was previously Paul Snow Stadium and then Burgess-Snow Field at JSU Stadium. A seven-story tower, renamed William A. Meehan Hall in 2015, holds residential floors and skybox seating above the field. Thirty-three suites seat up to 20 guests each, and a student section has occupied part of the bowl since 1978. TicketScan tracks AmFirst Stadium onsales and presale windows.',
    keywords: ['AmFirst Stadium tickets', 'Jacksonville State Gamecocks tickets', 'AmFirst Stadium seating chart', 'JSU Stadium tickets', 'Jacksonville Alabama football tickets'],
    faqs: [
      { question: 'What was AmFirst Stadium called before its current name?', answer: 'The venue was Paul Snow Stadium from 1961 to 2009, then Burgess-Snow Field at JSU Stadium from 2010 to 2023, before America\'s First Federal Credit Union took the naming rights in July 2024.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Student Section', tier: 'lower' },
      { name: 'General Admission Bleachers', tier: 'lower' },
      { name: 'Suites', tier: 'suite' },
      { name: 'William A. Meehan Hall Skyboxes', tier: 'suite' },
    ]
  },

  'bridgeforth-stadium': {
    id: 'bridgeforth-stadium',
    name: 'Bridgeforth Stadium',
    city: 'Harrisonburg',
    state: 'VA',
    capacity: 24877,
    type: 'stadium',
    homeTeams: ['James Madison Dukes College Football'],
    description: 'Bridgeforth Stadium, playing on Zane Showker Field, seats 24,877 for James Madison Dukes games and has been capacity since a 2011 expansion that added 17 suites and a club lounge with chairback seating on the west side. Only the west side has an upper deck; the east side is backless bleachers on a single level. East side sections 1-8 and the entire north end zone are student and general admission, while a 2025-introduced East Side Premium area in sections 4-5 adds 564 mesh-chair seats with a bar rail on the visiting sideline. TicketScan tracks Bridgeforth Stadium onsales and presale windows.',
    keywords: ['Bridgeforth Stadium tickets', 'James Madison Dukes tickets', 'Bridgeforth Stadium seating chart', 'Zane Showker Field tickets', 'Harrisonburg football tickets'],
    faqs: [
      { question: 'Does Bridgeforth Stadium have an upper deck on both sides?', answer: 'No. Only the west side has an upper deck, added in the 2011 expansion. The east side remains a single level of backless bleachers, home to the student sections and a newer East Side Premium area.' },
    ],
    sections: [
      { name: 'West Side Lower Deck', tier: 'lower' },
      { name: 'West Side Upper Deck', tier: 'upper' },
      { name: 'East Side Bleachers 1-8 (Student & General Admission)', tier: 'lower' },
      { name: 'East Side Premium (sections 4-5)', tier: 'club' },
      { name: 'North End Zone (Student & General Admission)', tier: 'lower' },
      { name: 'Club Lounge (west side, chairback)', tier: 'club' },
      { name: 'Suites (17, west side)', tier: 'suite' },
    ]
  },

  'david-booth-kansas-memorial-stadium': {
    id: 'david-booth-kansas-memorial-stadium',
    name: 'David Booth Kansas Memorial Stadium',
    city: 'Lawrence',
    state: 'KS',
    capacity: 32000,
    type: 'stadium',
    homeTeams: ['Kansas Jayhawks Football'],
    description: 'David Booth Kansas Memorial Stadium is mid-renovation for the Kansas Jayhawks, with capacity reduced to about 32,000 for the 2026 season while the project continues. Phase one, rebuilding the west and north stands with club seating, loge boxes and suites, ran from 2023 to 2025. Phase two began in December 2025 with demolition of the old east stand; for 2026, the new west stand\'s lower tier and a new south end zone stand, which becomes the student section, are expected ready. Full capacity of 43,000 is planned once the east stand reopens in 2027. TicketScan tracks Kansas Memorial Stadium onsales and presale windows.',
    keywords: ['Kansas Memorial Stadium tickets', 'Kansas Jayhawks tickets', 'David Booth Stadium seating chart', 'Lawrence football tickets', 'Kansas football tickets'],
    faqs: [
      { question: 'Why is David Booth Kansas Memorial Stadium capacity so much lower in 2026?', answer: 'The stadium is in the middle of a phased rebuild. The old east stand was demolished in December 2025 and will not reopen until 2027, cutting 2026 capacity to about 32,000 versus the eventual planned 43,000.' },
    ],
    sections: [
      { name: 'West Stand Lower Tier', tier: 'lower' },
      { name: 'West Stand Club Seating', tier: 'club' },
      { name: 'West Stand Loge Boxes', tier: 'club' },
      { name: 'West Stand Suites', tier: 'suite' },
      { name: 'North Stand', tier: 'lower' },
      { name: 'South End Zone Stand (Student Section)', tier: 'lower' },
    ]
  },

  'bill-snyder-family-stadium': {
    id: 'bill-snyder-family-stadium',
    name: 'Bill Snyder Family Football Stadium',
    city: 'Manhattan',
    state: 'KS',
    capacity: 50000,
    type: 'stadium',
    homeTeams: ['Kansas State Football'],
    description: 'Bill Snyder Family Football Stadium, playing on Wagner Field, seats 50,000 for Kansas State Wildcats games in Manhattan, up from 35,000 when it opened in 1968. The $90 million West Side Stadium Center, completed in 2013, added premium suites, club seats and loge boxes above the west sideline. The Shamrock Zone at the south end holds 318 club seats, 10 loge boxes and 10 suites. Powercat Porch, a 400-person beer garden, sits in the southeast corner, with the Vanier Football Complex behind the north end zone. TicketScan tracks Bill Snyder Family Stadium onsales and presale windows.',
    keywords: ['Bill Snyder Family Stadium tickets', 'Kansas State Wildcats tickets', 'Bill Snyder Stadium seating chart', 'Manhattan Kansas football tickets', 'K-State football tickets'],
    faqs: [
      { question: 'What is the Shamrock Zone at Bill Snyder Family Stadium?', answer: 'It is the south end zone premium seating area, holding 318 club seats, 10 loge boxes and 10 suites, distinct from the larger West Side Stadium Center along the sideline.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Powercat Porch (southeast corner)', tier: 'lower' },
      { name: 'West Side Stadium Center Upper Deck', tier: 'upper' },
      { name: 'West Side Stadium Center Club Seats & Loge Boxes', tier: 'club' },
      { name: 'West Side Stadium Center Suites', tier: 'suite' },
      { name: 'Shamrock Zone Club Seats', tier: 'club' },
      { name: 'Shamrock Zone Suites', tier: 'suite' },
    ]
  },

  'fifth-third-stadium-kennesaw': {
    id: 'fifth-third-stadium-kennesaw',
    name: 'Walens Family Field at Fifth Third Stadium',
    city: 'Kennesaw',
    state: 'GA',
    capacity: 10200,
    type: 'stadium',
    homeTeams: ['Kennesaw State University Owls Football'],
    description: 'Walens Family Field at Fifth Third Stadium seats 10,200 for Kennesaw State Owls games, expanding to a standing capacity of 16,316 for concerts on a stage at one end. The playing field took its current name in 2025 after a $4 million gift from Dave and Donna Walens. The building holds 14 indoor premium suites for up to 272 guests combined, 12 indoor luxury suites seating up to 16 each, two Super Suites for groups up to 40, and seven outdoor suites. The 2015 Club, a newer buffet lounge on the north end zone stage, opened in 2026. TicketScan tracks Fifth Third Stadium onsales and presale windows.',
    keywords: ['Fifth Third Stadium tickets', 'Kennesaw State Owls tickets', 'Fifth Third Bank Stadium seating chart', 'Kennesaw football tickets', 'Kennesaw State football tickets'],
    faqs: [
      { question: 'What is the 2015 Club at Fifth Third Stadium?', answer: 'It is a premium buffet club opened on the north end zone stage in 2026, offering an all-you-can-eat spread and two drink tickets per game, sold separately from the stadium\'s indoor and outdoor suites.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: '2015 Club (north end zone stage)', tier: 'club' },
      { name: 'Indoor Premium Suites', tier: 'suite' },
      { name: 'Indoor Luxury Suites', tier: 'suite' },
      { name: 'Super Suites', tier: 'suite' },
      { name: 'Outdoor Suites', tier: 'suite' },
    ]
  },
};
