// FBS batch 9 — 14 programs assigned, 13 entries written.
//
// UNLV Running Rebels Football is OMITTED: UNLV plays at Allegiant Stadium,
// already defined in nfl.ts as 'allegiant-stadium' for the Las Vegas Raiders.
// A central step adds "UNLV Running Rebels Football" to that entry's
// homeTeams rather than creating a duplicate venue for the same building.
//
// Capacity for each stadium comes from its own dedicated Wikipedia article or
// its athletics department's official site, never from an aggregate stadium
// list. Two figures are configuration-specific as of 2026-09-04:
// - SECU Stadium (Maryland) is 46,185, down from 51,802 after the 1950 lower
//   horseshoe was widened in 2025.
// - DATCU Stadium (North Texas) is 30,100, down from 30,850 after 2024
//   chairback installations on the west side.
// University Stadium (Albuquerque, New Mexico) is a genuine source conflict:
// the program's own site (golobos.com) and the New Mexico Lobos football
// Wikipedia article both give 37,440, while the separate "University Stadium
// (Albuquerque)" Wikipedia infobox article carries a stale 39,224 last
// updated for the 2010–2014 configuration. The venue's own site and the
// program article win per the sourcing rule; 37,440 is used here.
//
// Section names come from each program's own facilities pages or dedicated
// Wikipedia articles. Where a specific numbered range could not be sourced,
// the zone is named without invented numbers rather than guessed — most
// entries in this batch use verified zone names for that reason. `floor` is
// never used: there is no floor at a football game.

import type { Venue } from '../venue-types';

export const fbsStadiums9: Record<string, Venue> = {
  'secu-stadium': {
    id: 'secu-stadium',
    name: 'SECU Stadium',
    city: 'College Park',
    state: 'MD',
    capacity: 46185,
    type: 'stadium',
    homeTeams: ['University of Maryland Terrapins Football'],
    description: 'SECU Stadium seats 46,185 for University of Maryland Terrapins football in College Park, a capacity reduced from 51,802 after the 1950 lower horseshoe was widened in 2025 for wider seats and better sightlines. The building has carried four names since 1950 — Chevy Chase Bank Field, Capital One Field, Maryland Stadium, and SECU Stadium since 2022 — and mixes construction from 1950, 1991, 1995, and 2009, so seats at the same nominal level can sit at noticeably different heights. Tyser Tower on the south side holds the press box, suites, and mezzanine club; the only upper deck runs along the north side. TicketScan tracks SECU Stadium onsales and presale windows.',
    keywords: ['SECU Stadium tickets', 'Maryland Terrapins football tickets', 'SECU Stadium seating chart', 'College Park football tickets', 'SECU Stadium events 2026'],
    faqs: [
      { question: 'Why did SECU Stadium capacity drop in 2025?', answer: 'The 1950 lower horseshoe was widened that year to give seats more room and improve sightlines, which cut capacity from 51,802 to 46,185 without removing the horseshoe itself.' },
    ],
    sections: [
      { name: 'Lower Horseshoe Sideline (East)', tier: 'lower' },
      { name: 'Lower Horseshoe Sideline (West)', tier: 'lower' },
      { name: 'Lower Horseshoe End Zone', tier: 'lower' },
      { name: 'Tyser Tower Mezzanine Club', tier: 'club' },
      { name: 'North Upper Deck', tier: 'upper' },
      { name: 'Tyser Tower Suites', tier: 'suite' },
    ]
  },

  'michigan-stadium': {
    id: 'michigan-stadium',
    name: 'Michigan Stadium',
    city: 'Ann Arbor',
    state: 'MI',
    capacity: 107601,
    type: 'stadium',
    homeTeams: ['University of Michigan Wolverines Football'],
    description: 'Michigan Stadium, known everywhere as the Big House, seats 107,601 for University of Michigan Wolverines football in Ann Arbor, the largest stadium in the United States and the third-largest in the world. Most of the bowl below field level is aluminum bench seating without individual seat backs, a layout dating to the original 1927 construction. A 2010 renovation added 83 luxury suites and 3,200 chairback club seats along with the Jack Roth Stadium Club, the building\'s first premium hospitality space. Attendance has topped 115,000 for marquee games, including a 115,109 record set against Notre Dame in 2013. TicketScan tracks Michigan Stadium onsales and presale windows.',
    keywords: ['Michigan Stadium tickets', 'Big House tickets', 'Michigan Wolverines football tickets', 'Michigan Stadium seating chart', 'Ann Arbor football tickets', 'Michigan Stadium events 2026'],
    faqs: [
      { question: 'Why are most Michigan Stadium seats bench seating?', answer: 'The bowl dates to the 1927 construction, built with aluminum bench rows rather than individual seats. The 2010 renovation added chairback club seating and suites but left the historic bowl itself as bench seating.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline (Bench)', tier: 'lower' },
      { name: 'Lower Bowl End Zone (Bench)', tier: 'lower' },
      { name: 'Preferred Seating Chairback Sideline', tier: 'club' },
      { name: 'Jack Roth Stadium Club', tier: 'club' },
      { name: 'Upper Bowl Sideline (Bench)', tier: 'upper' },
      { name: 'Upper Bowl End Zone (Bench)', tier: 'upper' },
      { name: 'Luxury Suites', tier: 'suite' },
    ]
  },

  'huntington-bank-stadium': {
    id: 'huntington-bank-stadium',
    name: 'Huntington Bank Stadium',
    city: 'Minneapolis',
    state: 'MN',
    capacity: 50805,
    type: 'stadium',
    homeTeams: ['University of Minnesota Golden Gophers Football'],
    description: 'Huntington Bank Stadium seats 50,805 for University of Minnesota Golden Gophers football, an open-air horseshoe on campus that opened in 2009 as TCF Bank Stadium before a 2021 naming-rights change. Most of the bowl is aluminum bench seating, though roughly 20,000 seats between the goal lines on both decks carry individual chairbacks. The 10,000-seat student section fills the open east end, next to the area reserved for the marching band. Premium options include 37 private suites, 50 loge boxes, 250 indoor club seats in the climate-controlled DQ Club Room, and 1,250 outdoor club seats. TicketScan tracks Huntington Bank Stadium onsales and presale windows.',
    keywords: ['Huntington Bank Stadium tickets', 'Minnesota Golden Gophers football tickets', 'Huntington Bank Stadium seating chart', 'Minneapolis football tickets', 'TCF Bank Stadium tickets', 'Huntington Bank Stadium events 2026'],
    faqs: [
      { question: 'Was Huntington Bank Stadium previously named something else?', answer: 'Yes. It opened in 2009 as TCF Bank Stadium and was renamed Huntington Bank Stadium in 2021 after a new naming-rights deal; the building and seating layout are unchanged.' },
    ],
    sections: [
      { name: 'Lower Deck Sideline Chairback', tier: 'lower' },
      { name: 'Lower Deck General Admission (Bench)', tier: 'lower' },
      { name: 'East End Zone Student Section', tier: 'lower' },
      { name: 'Outdoor Club Seats', tier: 'club' },
      { name: 'DQ Club Room (Indoor Club)', tier: 'club' },
      { name: 'Upper Deck Sideline Chairback', tier: 'upper' },
      { name: 'Upper Deck General Admission (Bench)', tier: 'upper' },
      { name: 'Private Suites', tier: 'suite' },
      { name: 'Loge Boxes', tier: 'suite' },
    ]
  },

  'university-stadium-new-mexico': {
    id: 'university-stadium-new-mexico',
    name: 'University Stadium',
    city: 'Albuquerque',
    state: 'NM',
    capacity: 37440,
    type: 'stadium',
    homeTeams: ['University of New Mexico Lobos Football'],
    description: 'University Stadium seats 37,440 for University of New Mexico Lobos football, an unusual venue built in an arroyo where the seating bowl was formed by piling excavated fill into earthen embankments rather than conventional bowl construction. Grandstands run along the east and west sidelines, with the press box above the west side, and stands added beyond the north end zone in 2001 carry the LoboVision video screen. The L.F. "Tow" Diehm Athletic Facility sits just beyond the open south end. The stadium reverted to its original name in 2020 after a naming-rights deal lapsed, and Section 26 is the designated student section. TicketScan tracks University Stadium onsales and presale windows.',
    keywords: ['University Stadium tickets', 'New Mexico Lobos football tickets', 'University Stadium seating chart', 'Albuquerque football tickets', 'University Stadium events 2026'],
    faqs: [
      { question: 'Is University Stadium a conventional bowl?', answer: 'No. It was built in an arroyo, with the seating bowl formed by piling excavated fill into earthen embankments rather than a poured bowl structure, so the field sits below the surrounding natural grade.' },
    ],
    sections: [
      { name: 'East Grandstand', tier: 'lower' },
      { name: 'West Grandstand (Press Box Side)', tier: 'lower' },
      { name: 'North End Zone (LoboVision End)', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Section 26 (Student Section)', tier: 'lower' },
      { name: 'Embankment Berm Seating', tier: 'lower' },
    ]
  },

  'kenan-memorial-stadium': {
    id: 'kenan-memorial-stadium',
    name: 'Kenan Memorial Stadium',
    city: 'Chapel Hill',
    state: 'NC',
    capacity: 50500,
    type: 'stadium',
    homeTeams: ['University of North Carolina Tar Heels Football'],
    description: 'Kenan Memorial Stadium seats 50,500 for University of North Carolina Tar Heels football, down from a peak of 63,000 in 2011 after the metal bleachers installed decades earlier were replaced with individual chairback seats in 2018. The original 1927 bowl held only sideline grandstands with no end zone seating; a 1963 expansion double-decked the sidelines, and a 1995-1998 project closed the horseshoe by adding 8,000 seats in the west end zone, nicknamed the Tar Pit and reserved largely for students. The east end zone Blue Zone, opened in 2011, holds club and suite seating across four levels. TicketScan tracks Kenan Memorial Stadium onsales and presale windows.',
    keywords: ['Kenan Memorial Stadium tickets', 'UNC Tar Heels football tickets', 'Kenan Stadium seating chart', 'Blue Zone tickets', 'Chapel Hill football tickets'],
    faqs: [
      { question: 'What is the Blue Zone at Kenan Stadium?', answer: 'The Blue Zone is the east end zone structure that closed the horseshoe in 2011, holding 1,836 Concourse Club seats near the field, 824 Upper Club/Loge seats on the fourth floor, and 320 seats across 20 suites.' },
    ],
    sections: [
      { name: 'West End Zone Student Section (Tar Pit)', tier: 'lower' },
      { name: 'South Stands Lower Level', tier: 'lower' },
      { name: 'North Stands Lower Level', tier: 'lower' },
      { name: 'Sideline Upper Deck (1963 Addition)', tier: 'upper' },
      { name: 'Blue Zone Concourse Club', tier: 'club' },
      { name: 'Blue Zone Upper Club/Loge', tier: 'club' },
      { name: 'Blue Zone Suites', tier: 'suite' },
    ]
  },

  'datcu-stadium': {
    id: 'datcu-stadium',
    name: 'DATCU Stadium',
    city: 'Denton',
    state: 'TX',
    capacity: 30100,
    type: 'stadium',
    homeTeams: ['University of North Texas Mean Green Football'],
    description: 'DATCU Stadium seats 30,100 for University of North Texas Mean Green football in a horseshoe with stands on the north, east and west sides and no seating behind the south end zone. Capacity dropped from 30,850 in 2024 when new chairbacks were installed on the west side. The west stands hold the home sideline\'s 21 luxury suites, 754 club seats and the Bill Mercer Press Club; the east stands are reserved mostly for students, with a tailgating area called The Hill behind them. The north end zone rises in a V-shaped design meant to evoke an eagle\'s wings. TicketScan tracks DATCU Stadium onsales and presale windows.',
    keywords: ['DATCU Stadium tickets', 'North Texas Mean Green football tickets', 'DATCU Stadium seating chart', 'Denton football tickets', 'Apogee Stadium tickets', 'DATCU Stadium events 2026'],
    faqs: [
      { question: 'Why did DATCU Stadium capacity drop in 2024?', answer: 'New chairback seats replaced sections of the west side seating that year, cutting capacity from 30,850 to 30,100 while improving comfort on the stadium\'s premium sideline.' },
    ],
    sections: [
      { name: 'West Sideline Lower Level', tier: 'lower' },
      { name: 'East Sideline Student Section', tier: 'lower' },
      { name: 'North End Zone East Wing', tier: 'upper' },
      { name: 'North End Zone West Wing', tier: 'upper' },
      { name: 'West Side Club Seats', tier: 'club' },
      { name: 'West Side Luxury Suites', tier: 'suite' },
    ]
  },

  'hancock-whitney-stadium': {
    id: 'hancock-whitney-stadium',
    name: 'Hancock Whitney Stadium',
    city: 'Mobile',
    state: 'AL',
    capacity: 25450,
    type: 'stadium',
    homeTeams: ['University of South Alabama Jaguar Football'],
    description: 'Hancock Whitney Stadium seats 25,450 for University of South Alabama Jaguars football, an octagonal on-campus venue that opened in September 2020 with the field running north-south. The main entrance and team store sit behind the south end zone, where the Michelob Ultra Terrace offers drink-rail rows with field-level views. The Hargrove Club, beneath the press box on the west side, serves a full buffet with an executive chef and extended bar service. West and east side lower-level season tickets typically sell out before kickoff, leaving single-game buyers to the upper decks on both sides. TicketScan tracks Hancock Whitney Stadium onsales and presale windows.',
    keywords: ['Hancock Whitney Stadium tickets', 'South Alabama Jaguars football tickets', 'Hancock Whitney Stadium seating chart', 'Mobile Alabama football tickets', 'Hancock Whitney Stadium events 2026'],
    faqs: [
      { question: 'What is the Michelob Ultra Terrace at Hancock Whitney Stadium?', answer: 'It is the party-deck area behind the south end zone, near the main entrance and team store, with several rows of drink-rail seating offering field-level views.' },
    ],
    sections: [
      { name: 'West Sideline Lower Level', tier: 'lower' },
      { name: 'East Sideline Lower Level', tier: 'lower' },
      { name: 'South End Zone Terrace (Michelob Ultra Terrace)', tier: 'lower' },
      { name: 'Hargrove Club (West Side)', tier: 'club' },
      { name: 'West Sideline Upper Deck', tier: 'upper' },
      { name: 'East Sideline Upper Deck', tier: 'upper' },
    ]
  },

  'dkr-texas-memorial-stadium': {
    id: 'dkr-texas-memorial-stadium',
    name: 'Darrell K Royal–Texas Memorial Stadium',
    city: 'Austin',
    state: 'TX',
    capacity: 100119,
    type: 'stadium',
    homeTeams: ['University of Texas Longhorns Football'],
    description: 'Darrell K Royal–Texas Memorial Stadium seats 100,119 for University of Texas Longhorns football, a capacity that has held since the north end zone expansion completed its multi-year build-out in 2021. That project enclosed the north end zone and added 52 new suites along with club space and athletic offices, joining the earlier south end zone upper deck that pushed the building past 100,000 seats for the first time. The stadium carries the name of the coach who led the Longhorns from 1957 to 1976 alongside the university\'s war memorial designation. TicketScan tracks Darrell K Royal-Texas Memorial Stadium onsales and presale windows.',
    keywords: ['Darrell K Royal Stadium tickets', 'Texas Longhorns football tickets', 'DKR Stadium seating chart', 'Texas Memorial Stadium tickets', 'Austin football tickets', 'DKR-Texas Memorial Stadium events 2026'],
    faqs: [
      { question: 'How many suites did the north end zone expansion add at DKR-Texas Memorial Stadium?', answer: 'The project, completed in 2021, added 52 new suites along with club space and athletic offices, on top of the suites already built into the stadium\'s earlier expansions.' },
    ],
    sections: [
      { name: 'Lower Deck Sideline', tier: 'lower' },
      { name: 'Lower Deck End Zone', tier: 'lower' },
      { name: 'Upper Deck Sideline', tier: 'upper' },
      { name: 'Upper Deck End Zone', tier: 'upper' },
      { name: 'North End Zone Club Level', tier: 'club' },
      { name: 'North End Zone Suites', tier: 'suite' },
    ]
  },

  'scott-stadium-virginia': {
    id: 'scott-stadium-virginia',
    name: 'Scott Stadium',
    city: 'Charlottesville',
    state: 'VA',
    capacity: 61500,
    type: 'stadium',
    homeTeams: ['University of Virginia Cavaliers Football'],
    description: 'Scott Stadium seats 61,500 for University of Virginia Cavaliers football, a figure reached in a 2000 renovation that filled in the upper deck and south end and added luxury suites. The north end features hillside berm seating, moved 30 feet closer to the field when the \'Hoo Vision video board was installed, giving roughly 5,000 fans a grass-terrace view rather than fixed seats. The press box, named for longtime athletic director Norton Pritchett, and a President\'s box were added in 1980. The stadium has carried the Scott family name since a gift funded its original 1931 construction. TicketScan tracks Scott Stadium onsales and presale windows.',
    keywords: ['Scott Stadium tickets', 'Virginia Cavaliers football tickets', 'Scott Stadium seating chart', 'Charlottesville football tickets', 'Scott Stadium events 2026'],
    faqs: [
      { question: 'What is the hillside seating at Scott Stadium?', answer: 'The north end berm gives about 5,000 fans a grass-terrace view rather than fixed seats. It was moved 30 feet closer to the field when the \'Hoo Vision video board was installed.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'South End Zone Lower Level', tier: 'lower' },
      { name: 'North End Hillside (Berm Seating)', tier: 'lower' },
      { name: 'Upper Deck Sideline', tier: 'upper' },
      { name: 'Upper Deck South End', tier: 'upper' },
      { name: 'Luxury Suites', tier: 'suite' },
    ]
  },

  'husky-stadium': {
    id: 'husky-stadium',
    name: 'Alaska Airlines Field at Husky Stadium',
    city: 'Seattle',
    state: 'WA',
    capacity: 70083,
    type: 'stadium',
    homeTeams: ['University of Washington Huskies Football'],
    description: 'Alaska Airlines Field at Husky Stadium seats 70,083 for University of Washington Huskies football on the shore of Union Bay, the largest stadium in the Pacific Northwest. The 2013 renovation lowered the field four feet, removed the surrounding track, moved the student section from the north sideline to the west end zone, and replaced temporary east end zone bleachers with a permanent structure carrying field-level suites. Cantilevered metal roofs cover nearly 70 percent of the seats between the end zones and trap crowd noise over the field. Alaska Airlines has held the naming rights since 2015. TicketScan tracks Husky Stadium onsales and presale windows.',
    keywords: ['Husky Stadium tickets', 'Washington Huskies football tickets', 'Alaska Airlines Field tickets', 'Husky Stadium seating chart', 'Seattle football tickets', 'Husky Stadium events 2026'],
    faqs: [
      { question: 'Where did the Husky Stadium student section move to?', answer: 'The 2013 renovation relocated the student section from the north sideline to the west end zone, while the east end zone got a permanent structure with field-level suites in place of temporary bleachers.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'West End Zone Student Section', tier: 'lower' },
      { name: 'East End Zone Field-Level Concourse', tier: 'club' },
      { name: 'Upper Bowl Sideline', tier: 'upper' },
      { name: 'Upper Bowl Corner', tier: 'upper' },
      { name: 'East End Zone Suites', tier: 'suite' },
    ]
  },

  'la-memorial-coliseum': {
    id: 'la-memorial-coliseum',
    name: 'United Airlines Field at Los Angeles Memorial Coliseum',
    city: 'Los Angeles',
    state: 'CA',
    capacity: 77500,
    type: 'stadium',
    homeTeams: ['USC Trojans Football'],
    description: 'United Airlines Field at Los Angeles Memorial Coliseum seats 77,500 for USC Trojans football, down from 93,607 after a 2018-2019 renovation replaced every seat, widened aisles, and added premium inventory: 42 suites, 1,100 club seats, 24 loge boxes, and a 500-person rooftop terrace. The historic peristyle end, home to the Olympic cauldron and rings from the 1932 and 1984 Games, was restored and renamed the Julia and George Argyros Plaza with new video boards. The Coliseum will become the first stadium to host the Summer Olympics three times when the Games return to Los Angeles in 2028. TicketScan tracks Coliseum onsales and presale windows.',
    keywords: ['LA Memorial Coliseum tickets', 'USC Trojans football tickets', 'Coliseum seating chart', 'Los Angeles football tickets', 'United Airlines Field tickets', 'LA Coliseum events 2026'],
    faqs: [
      { question: 'How much did the Coliseum capacity change in the 2018-2019 renovation?', answer: 'Capacity dropped from 93,607 to 77,500 as the project replaced every seat with wider ones and added 42 suites, 1,100 club seats and 24 loge boxes in a new structure on the south side.' },
    ],
    sections: [
      { name: 'Field Level Sideline', tier: 'lower' },
      { name: 'Peristyle End (Argyros Plaza)', tier: 'lower' },
      { name: 'Club Seats', tier: 'club' },
      { name: 'Loge Boxes', tier: 'club' },
      { name: 'Upper Deck Sideline', tier: 'upper' },
      { name: 'Upper Deck Corner', tier: 'upper' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'rice-eccles-stadium': {
    id: 'rice-eccles-stadium',
    name: 'Rice-Eccles Stadium',
    city: 'Salt Lake City',
    state: 'UT',
    capacity: 51444,
    type: 'stadium',
    homeTeams: ['Utah Football'],
    description: 'Rice-Eccles Stadium seats 51,444 for Utah football, up from 45,807 after the Ken Garff Red Zone expansion enclosed the south end zone in August 2021, adding suites, loge boxes, ledge seating and club seating along with more bleacher rows. The stadium has 25 executive suites and hosted the 2002 Winter Olympics opening and closing ceremonies, whose cauldron still stands above the north end. Standing-room bleachers were added along the east, west and north sections in 2014 to handle overflow crowds beyond the fixed-seat capacity. TicketScan tracks Rice-Eccles Stadium onsales and presale windows.',
    keywords: ['Rice-Eccles Stadium tickets', 'Utah Utes football tickets', 'Rice-Eccles Stadium seating chart', 'Salt Lake City football tickets', 'Rice-Eccles Stadium events 2026'],
    faqs: [
      { question: 'What is the Ken Garff Red Zone at Rice-Eccles Stadium?', answer: 'It is the south end zone expansion completed in August 2021, adding suites, loge boxes, ledge and club seating along with extra bleacher rows and raising capacity from 45,807 to 51,444.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'North End Zone (Olympic Cauldron End)', tier: 'lower' },
      { name: 'Ken Garff Red Zone Club', tier: 'club' },
      { name: 'Ken Garff Red Zone Ledge Seating', tier: 'club' },
      { name: 'Upper Bowl Sideline', tier: 'upper' },
      { name: 'Standing-Room Bleachers', tier: 'upper' },
      { name: 'Ken Garff Red Zone Suites & Loge Boxes', tier: 'suite' },
    ]
  },

  'maverik-stadium': {
    id: 'maverik-stadium',
    name: 'Merlin Olsen Field at Maverik Stadium',
    city: 'Logan',
    state: 'UT',
    capacity: 25513,
    type: 'stadium',
    homeTeams: ['Utah State University Aggies Football'],
    description: 'Merlin Olsen Field at Maverik Stadium seats 25,513 for Utah State Aggies football, a figure built up from an original 20,000 in 1968 through a 1980 expansion to 30,257 and later reductions as bleachers gave way to individual seats. Roughly 4,000 chairback seats replaced wooden bleachers on the west side before the 1997 season, and the 2016 West Stadium Center project added more than 700 covered club seats, 24 luxury suites and 24 loge boxes. The north end zone houses the Laub Athletics-Academics Complex, with locker rooms and coaches\' offices beneath its stands. TicketScan tracks Maverik Stadium onsales and presale windows.',
    keywords: ['Maverik Stadium tickets', 'Utah State Aggies football tickets', 'Maverik Stadium seating chart', 'Logan Utah football tickets', 'Maverik Stadium events 2026'],
    faqs: [
      { question: 'What changed at Maverik Stadium in the 2016 West Stadium Center project?', answer: 'The project added more than 700 covered club seats, 24 luxury suites and 24 loge boxes on the west side, the stadium\'s first major premium-seating expansion.' },
    ],
    sections: [
      { name: 'East Sideline Bleachers', tier: 'lower' },
      { name: 'West Sideline Chairback (Lower)', tier: 'lower' },
      { name: 'North End Zone (Laub Athletics-Academics Complex)', tier: 'lower' },
      { name: 'West Stadium Center Club Seats', tier: 'club' },
      { name: 'West Stadium Center Luxury Suites', tier: 'suite' },
      { name: 'West Stadium Center Loge Boxes', tier: 'suite' },
    ]
  },
};
