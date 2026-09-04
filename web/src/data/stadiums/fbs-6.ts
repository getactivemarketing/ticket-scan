// FBS batch 6 — 13 programs (Oklahoma Sooners through San Jose State Spartans).
//
// Pittsburgh Panthers College Football is omitted from this batch: Pitt
// plays at Acrisure Stadium, already defined in nfl.ts as `acrisure-stadium`
// for the Pittsburgh Steelers. A central step adds "Pittsburgh Panthers
// College Football" to that entry's homeTeams rather than publishing a
// second indexed page for the same building.
//
// Every stadium is sourced from its own dedicated Wikipedia article (infobox
// cross-checked against that same page's prose/history section) or, where
// noted, the athletics department's own site. Aggregate "list of stadiums"
// tables were never used. Disagreements found between a page's infobox and
// its own prose, or between sources, are documented in
// task-5-batch-6-report.md — see that file for the full source list.
//
// Beaver Stadium (Penn State) is mid a 2024-2027 renovation; the capacity
// used reflects the current construction-era configuration, not a projected
// post-renovation number.
//
// `floor` is never used: there is no floor at a football game. Where a
// section's numbering could not be sourced, the zone is named without
// numbers rather than guessed.

import type { Venue } from '../venue-types';

export const fbsStadiums6: Record<string, Venue> = {
  'gaylord-family-oklahoma-memorial-stadium': {
    id: 'gaylord-family-oklahoma-memorial-stadium',
    name: 'Gaylord Family Oklahoma Memorial Stadium',
    city: 'Norman',
    state: 'OK',
    capacity: 80126,
    type: 'stadium',
    homeTeams: ['Oklahoma Sooners Football'],
    description: "Gaylord Family Oklahoma Memorial Stadium seats 80,126 for Oklahoma Sooners games in Norman. It opened in 1923 as Owen Field and reached its current bowl through renovations in 1980, 1997, 2003 and a 2015-2016 south end zone project completed before the 2016 season. The Pride of Oklahoma marching band anchors the east stands around section 29, between the 20-yard lines, while visiting fans sit in the south end zone and southern east-side sections. A 2003-2004 expansion added roughly 2,500 club seats and 27 suites to the east side above the sideline bowl. TicketScan tracks Gaylord Family Oklahoma Memorial Stadium onsales and presale windows.",
    keywords: ['Oklahoma Sooners tickets', 'Gaylord Family Oklahoma Memorial Stadium tickets', 'Owen Field tickets', 'Oklahoma football seating chart', 'Norman football tickets', 'Oklahoma Memorial Stadium events 2026'],
    faqs: [
      { question: 'Where does the Pride of Oklahoma band sit at Gaylord Family Oklahoma Memorial Stadium?', answer: 'The band sits in the east stands around section 29, roughly between the 20-yard lines, one of the stadium’s longest-standing seating traditions.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner', tier: 'lower' },
      { name: 'South End Zone (Visitor Section)', tier: 'lower' },
      { name: 'East Stands Student Section (Section 29)', tier: 'lower' },
      { name: 'East Side Club Seats', tier: 'club' },
      { name: 'East Upper Deck', tier: 'upper' },
      { name: 'West Upper Deck', tier: 'upper' },
      { name: 'East Side Suites', tier: 'suite' },
    ]
  },

  'boone-pickens-stadium': {
    id: 'boone-pickens-stadium',
    name: 'Boone Pickens Stadium',
    city: 'Stillwater',
    state: 'OK',
    capacity: 52168,
    type: 'stadium',
    homeTeams: ['Oklahoma State Cowboys Football'],
    description: 'Boone Pickens Stadium seats 52,168 for Oklahoma State Cowboys games on the field known as Lewis Field, the oldest playing surface in the Big 12, first used in 1920. A $286 million rebuild between 2003 and 2009 replaced most of the original grandstands, and a 2023-2024 reseating project widened rows, trimming capacity from its earlier configuration. FieldTurf Vertex CORE was installed in 2022. The stadium runs east-west rather than north-south, giving defenders in the west end zone a sun advantage late in afternoon games. Its record attendance of 60,218 came against Baylor in 2013. TicketScan tracks Boone Pickens Stadium onsales and presale windows.',
    keywords: ['Oklahoma State Cowboys tickets', 'Boone Pickens Stadium tickets', 'Lewis Field tickets', 'Oklahoma State football seating chart', 'Stillwater football tickets'],
    faqs: [
      { question: 'Why is Boone Pickens Stadium oriented east-west instead of north-south?', answer: 'The original 1920 Lewis Field grandstand set that orientation and it was kept through the 2003-2009 rebuild, giving the west end zone seats a sun advantage in afternoon games.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Club Level Seating', tier: 'club' },
      { name: 'Upper Deck Sideline', tier: 'upper' },
      { name: 'Upper Deck End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'sb-ballard-stadium': {
    id: 'sb-ballard-stadium',
    name: 'Kornblau Field at S.B. Ballard Stadium',
    city: 'Norfolk',
    state: 'VA',
    capacity: 21944,
    type: 'stadium',
    homeTeams: ['Old Dominion Monarchs Football'],
    description: 'S.B. Ballard Stadium seats 21,944 for Old Dominion Monarchs games on Kornblau Field, on the site of Foreman Field, which opened in 1936 and hosted the Oyster Bowl for decades. The old grandstands were demolished in November 2018 and a new stadium was built on the same footprint in nine months, reopening for the 2019 season with the Ainslie Football Complex along one sideline holding 24 suites and 400 lodge seats. The playing surface is AstroTurf GameDay Grass 3D. TicketScan tracks S.B. Ballard Stadium onsales and presale windows.',
    keywords: ['Old Dominion Monarchs tickets', 'S.B. Ballard Stadium tickets', 'Foreman Field tickets', 'Old Dominion football seating chart', 'Norfolk football tickets'],
    faqs: [
      { question: 'Is S.B. Ballard Stadium the same building as the old Foreman Field?', answer: 'It sits on the same footprint, but the original 1936 grandstand was demolished in November 2018 and entirely rebuilt in nine months, reopening for the 2019 season with a reduced capacity of 21,944.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Ainslie Football Complex Lodge Seats', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Upper Level End Zone', tier: 'upper' },
      { name: 'Ainslie Football Complex Suites', tier: 'suite' },
    ]
  },

  'vaught-hemingway-stadium': {
    id: 'vaught-hemingway-stadium',
    name: 'Vaught-Hemingway Stadium',
    city: 'Oxford',
    state: 'MS',
    capacity: 64038,
    type: 'stadium',
    homeTeams: ['Ole Miss Rebels Football'],
    description: 'Vaught-Hemingway Stadium seats 64,038 for Ole Miss Rebels games on Hollingsworth Field, which opened in 1915 and has been rebuilt in stages in 1941, 1980, 2002 and 2016. The 2002 project added luxury boxes and covered club seating on an upper deck, and a 2015-2016 north end zone expansion closed the bowl and added a bell tower that rings after every Ole Miss win. The field has cycled through grass, AstroTurf, AstroPlay and FieldTurf since 1970 before returning to natural grass in 2016. The Grove, the campus tailgating grounds nearby, is central to Ole Miss game days. TicketScan tracks Vaught-Hemingway Stadium onsales and presale windows.',
    keywords: ['Ole Miss Rebels tickets', 'Vaught-Hemingway Stadium tickets', 'Ole Miss football seating chart', 'The Grove tailgating', 'Oxford football tickets', 'Vaught-Hemingway Stadium events 2026'],
    faqs: [
      { question: 'What is the bell tower at Vaught-Hemingway Stadium?', answer: 'It was added in the north end zone during the 2015-2016 expansion and is rung after every Ole Miss victory, a tradition that has become part of the stadium’s identity.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'Covered Club Seating (Upper Deck)', tier: 'club' },
      { name: 'Upper Deck Sideline', tier: 'upper' },
      { name: 'Luxury Boxes', tier: 'suite' },
    ]
  },

  'autzen-stadium': {
    id: 'autzen-stadium',
    name: 'Autzen Stadium',
    city: 'Eugene',
    state: 'OR',
    capacity: 54000,
    type: 'stadium',
    homeTeams: ['Oregon Ducks Football'],
    description: 'Autzen Stadium seats 54,000 for Oregon Ducks games, with standing room pushing attendance closer to 60,000 on big Saturdays. It opened in 1967 and has been expanded and upgraded repeatedly, most recently in 2020, adding luxury boxes and meeting facilities along the way. The bowl’s compact, sunken design traps crowd noise unusually well; a 2007 game against USC measured 127.2 decibels on the field, among the loudest readings ever recorded at a college stadium. FieldTurf has covered the field since a 2012 replacement. TicketScan tracks Autzen Stadium onsales and presale windows.',
    keywords: ['Oregon Ducks tickets', 'Autzen Stadium tickets', 'Autzen Stadium seating chart', 'Eugene football tickets', 'Oregon football events 2026'],
    faqs: [
      { question: 'Why is Autzen Stadium considered so loud?', answer: 'Its compact, sunken bowl design traps crowd noise close to the field. A 2007 game against USC was measured at 127.2 decibels, among the loudest readings ever recorded at a college football stadium.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Luxury Box Level', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Upper Level End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'reser-stadium': {
    id: 'reser-stadium',
    name: 'Reser Stadium',
    city: 'Corvallis',
    state: 'OR',
    capacity: 35548,
    type: 'stadium',
    homeTeams: ['Oregon State Football'],
    description: 'Reser Stadium seats 35,548 for Oregon State Beavers games after a southwest grandstand rebuild finished in time for the 2023 season, its capacity down from the venue’s earlier configuration. It opened in 1953 as Parker Stadium and was renamed in 1999 for donors Al and Pat Reser. The new grandstand rises 12 to 13 stories, the tallest structure in Corvallis, and Reser’s Terrace occupies the north end zone above Parker Plaza. FieldTurf has covered the field since 2005. TicketScan tracks Reser Stadium onsales and presale windows.',
    keywords: ['Oregon State Beavers tickets', 'Reser Stadium tickets', 'Reser Stadium seating chart', 'Corvallis football tickets', 'Oregon State football events 2026'],
    faqs: [
      { question: 'Is the Reser Stadium renovation finished?', answer: 'Yes. The southwest grandstand rebuild that lowered capacity to 35,548 was completed before the 2023 season, and the stadium has played at that configuration since.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: "Reser's Terrace (North End Zone)", tier: 'lower' },
      { name: 'Club Level Seating', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'beaver-stadium': {
    id: 'beaver-stadium',
    name: 'Beaver Stadium',
    city: 'University Park',
    state: 'PA',
    capacity: 108000,
    type: 'stadium',
    homeTeams: ['Penn State Nittany Lions'],
    description: 'Beaver Stadium seats north of 108,000 for Penn State Nittany Lions games entering the 2026 season, among the largest capacities of any stadium in the country. It opened in 1960 and has been expanded several times, most notably in 2001. A renovation running 2024 through 2027 is underway, with new video boards installed in 2024 and the press box demolished January 2025; West Tower bleacher sections are opening in stages through 2026, with athletic director Pat Kraft targeting roughly 109,000 by year’s end, not yet reached. The S-Zone student section anchors one end zone, and "White Out" games, when fans wear all white, are the signature tradition. TicketScan tracks onsales.',
    keywords: ['Penn State Nittany Lions tickets', 'Beaver Stadium tickets', 'White Out game tickets', 'Beaver Stadium seating chart', 'University Park football tickets', 'Penn State football events 2026'],
    faqs: [
      { question: 'Is the Beaver Stadium renovation finished?', answer: 'No. A comprehensive renovation is underway from 2024 through 2027. New West Tower bleacher sections are opening in stages through the 2026 season, pushing capacity toward an announced target near 109,000 later in the year — a figure the stadium has not yet reached.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'S-Zone Student Section', tier: 'lower' },
      { name: 'SLU Section', tier: 'lower' },
      { name: 'Upper Deck Sideline', tier: 'upper' },
      { name: 'Upper Deck End Zone', tier: 'upper' },
      { name: 'Executive Suites', tier: 'suite' },
    ]
  },

  'ross-ade-stadium': {
    id: 'ross-ade-stadium',
    name: 'Ross-Ade Stadium',
    city: 'West Lafayette',
    state: 'IN',
    capacity: 61441,
    type: 'stadium',
    homeTeams: ['Purdue Boilermakers Football'],
    description: 'Ross-Ade Stadium seats 61,441 for Purdue Boilermakers games on Rohrman Field, named for benefactors David E. Ross and George Ade when it replaced Stuart Field in 1924. A 2023 renovation relocated the student section to the south end zone and added club seating, 34 suites in a new pavilion, and safe-standing rail seating and a patio deck. The Tiller Tunnel, also added in 2023, connects the Kozuch Football Performance Center to the stadium’s northeast corner. Permanent lights were installed in 2017. TicketScan tracks Ross-Ade Stadium onsales and presale windows.',
    keywords: ['Purdue Boilermakers tickets', 'Ross-Ade Stadium tickets', 'Ross-Ade Stadium seating chart', 'West Lafayette football tickets', 'Purdue football events 2026'],
    faqs: [
      { question: 'Where is the student section at Ross-Ade Stadium?', answer: 'The student section moved to the south end zone in the 2023 renovation, which also added rail seating, a patio and deck area in that end of the stadium.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'South End Zone Student Section', tier: 'lower' },
      { name: 'Outdoor Club Seating', tier: 'club' },
      { name: 'Indoor Club Seating', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Pavilion Suites', tier: 'suite' },
    ]
  },

  'rice-stadium': {
    id: 'rice-stadium',
    name: 'Rice Stadium',
    city: 'Houston',
    state: 'TX',
    capacity: 47000,
    type: 'stadium',
    homeTeams: ['Rice Owls Football'],
    description: 'Rice Stadium seats 47,000 for Rice Owls games, reduced from its original 70,000 by a 2006 renovation that covered the upper end zone seats and added FieldTurf and a modern scoreboard. It opened in 1950 and hosted Super Bowl VIII in January 1974, when the Miami Dolphins beat the Minnesota Vikings 24-7 in front of 68,142 fans, the first Super Bowl played in Texas. President Kennedy delivered his "We choose to go to the Moon" speech at the stadium in September 1962. The field has played on AstroTurf GameDay Grass 3D60H since 2014. TicketScan tracks Rice Stadium onsales and presale windows.',
    keywords: ['Rice Owls tickets', 'Rice Stadium tickets', 'Rice Stadium seating chart', 'Houston college football tickets', 'Rice football events 2026'],
    faqs: [
      { question: 'Did Rice Stadium really host a Super Bowl?', answer: 'Yes. Super Bowl VIII was played there in January 1974, with the Miami Dolphins defeating the Minnesota Vikings 24-7 in front of 68,142 fans, the first Super Bowl held in Texas.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Club Seating', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'shi-stadium': {
    id: 'shi-stadium',
    name: 'SHI Stadium',
    city: 'Piscataway',
    state: 'NJ',
    capacity: 52454,
    type: 'stadium',
    homeTeams: ['Rutgers Scarlet Knights College Football'],
    description: 'SHI Stadium seats 52,454 for Rutgers Scarlet Knights games overlooking the Raritan River, its current capacity dating to a 2008-2009 expansion that added roughly 11,500 seats in the south end zone and 5,000-seat upper decks on both sides. The stadium opened in 1994 as Rutgers Stadium on natural grass, switching to FieldTurf in 2004, and was renamed for IT distributor SHI International in 2019. The east mezzanine carries 968 club and loge seats. Rutgers, home to the sport’s first game in 1869, calls the venue "The Birthplace of College Football." TicketScan tracks SHI Stadium onsales and presale windows.',
    keywords: ['Rutgers Scarlet Knights tickets', 'SHI Stadium tickets', 'Rutgers Stadium tickets', 'SHI Stadium seating chart', 'Piscataway football tickets', 'Rutgers football events 2026'],
    faqs: [
      { question: 'Why is SHI Stadium called "The Birthplace of College Football"?', answer: 'Rutgers hosted the first intercollegiate football game against Princeton in 1869. The nickname refers to that history rather than the current stadium, which opened in 1994.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'East Mezzanine Club/Loge Seats', tier: 'club' },
      { name: 'East Upper Deck', tier: 'upper' },
      { name: 'West Upper Deck', tier: 'upper' },
    ]
  },

  'hornet-stadium-sacramento-state': {
    id: 'hornet-stadium-sacramento-state',
    name: 'Hornet Stadium',
    city: 'Sacramento',
    state: 'CA',
    capacity: 21195,
    type: 'stadium',
    homeTeams: ['Sacramento State Football'],
    description: 'Hornet Stadium seats 21,195 for Sacramento State Hornets games on Fred Anderson Field, which has hosted the team since the stadium opened in 1969. It has hosted U.S. Olympic Track and Field Trials in both 2000 and 2004. Permanent chairback seating was added at section 213, on the 50-yard line, in 1998, and FieldTurf Duraspine Pro has covered the field since 2010, when the concession area known as "The Well" also opened. Sacramento State moved its football program into the Mid-American Conference as an FBS member starting with the 2026 season. TicketScan tracks Hornet Stadium onsales and presale windows.',
    keywords: ['Sacramento State Hornets tickets', 'Hornet Stadium tickets', 'Hornet Stadium seating chart', 'Sacramento football tickets', 'Sacramento State football events 2026'],
    faqs: [
      { question: 'What is section 213 at Hornet Stadium?', answer: 'It sits on the 50-yard line and was the first section fitted with permanent chairback seating, added in 1998, rather than the bench seating used elsewhere in the lower bowl.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'Section 213 (50-Yard Line)', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Upper Level End Zone', tier: 'upper' },
    ]
  },

  'bowers-stadium': {
    id: 'bowers-stadium',
    name: 'Elliott T. Bowers Stadium',
    city: 'Huntsville',
    state: 'TX',
    capacity: 14000,
    type: 'stadium',
    homeTeams: ['Sam Houston State Football'],
    description: 'Elliott T. Bowers Stadium seats about 14,000 for Sam Houston Bearkats games and reopened for the 2026 season after a $60 million renovation that kept its overall capacity close to its prior mark while adding a new five-story press box, suite-level seating in the upper levels, widened concourses and a new sound system. The stadium opened in 1986 and had already been upgraded in 2012, 2013 and 2021 before the latest project closed it for the entire 2025 season, when the Bearkats played home games at Shell Energy Stadium in Houston instead. TicketScan tracks Bowers Stadium onsales and presale windows.',
    keywords: ['Sam Houston Bearkats tickets', 'Bowers Stadium tickets', 'Bowers Stadium seating chart', 'Huntsville Texas football tickets', 'Sam Houston football events 2026'],
    faqs: [
      { question: 'Is Bowers Stadium open for the 2026 season?', answer: 'Yes. The $60 million renovation that closed the stadium for the entire 2025 season, during which the Bearkats played at Shell Energy Stadium in Houston, was completed and the team returned to Bowers Stadium for 2026.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Bearkat Lounge', tier: 'club' },
      { name: "President's Box", tier: 'suite' },
      { name: 'Press Box Level Suites', tier: 'suite' },
    ]
  },

  'cefcu-stadium': {
    id: 'cefcu-stadium',
    name: 'CEFCU Stadium',
    city: 'San Jose',
    state: 'CA',
    capacity: 18265,
    type: 'stadium',
    homeTeams: ['San Jose State Spartans Football'],
    description: 'CEFCU Stadium seats 18,265 for San Jose State Spartans games, reduced from a pre-2019 capacity of 30,456 after an east-side renovation. It opened in 1933 as Spartan Stadium and was renamed in 2016 under a 15-year, $8.7 million naming-rights deal with CEFCU. The stadium also hosted matches at the 1999 FIFA Women’s World Cup and was home to MLS’s San Jose Earthquakes and Clash from 1996 to 2005. AstroTurf Rhino Blend has covered the field since 2017, and the Spartan Athletics Center opened alongside the venue in 2023. TicketScan tracks CEFCU Stadium onsales and presale windows.',
    keywords: ['San Jose State Spartans tickets', 'CEFCU Stadium tickets', 'Spartan Stadium tickets', 'CEFCU Stadium seating chart', 'San Jose football tickets', 'San Jose State football events 2026'],
    faqs: [
      { question: 'Why did CEFCU Stadium’s capacity drop from over 30,000?', answer: 'An east-side renovation completed before the 2019 season reduced the seating bowl, cutting capacity from 30,456 to the current 18,265.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level Corner', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'West Side Seating', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
    ]
  },
};
