// FBS batch 5 — 14 programs (Mississippi State through Ohio University).
//
// Every stadium is sourced from its own dedicated Wikipedia article (or, where
// noted, a direct news/athletics-department follow-up search), never from the
// aggregate "List of NCAA Division I FBS football stadiums" table. Two
// entries required special care under the batch contract's "current
// configuration, not future" rule:
//
// - Memorial Stadium (Nebraska): the Board of Regents approved a $600M South
//   Stadium rebuild in April 2026, but it is not scheduled to finish until
//   2028. This entry keeps the current 85,458 capacity rather than any future
//   figure.
// - Northwestern: the new $862M Ryan Field does not open until October 2,
//   2026 (confirmed against Wikipedia's live "Ryan Field (2026)" article and
//   Northwestern's 2026 schedule, both checked against today's date of
//   September 4, 2026). Northwestern is still playing at the temporary
//   Northwestern Medicine Field at Martin Stadium as of this writing, so this
//   batch sources Martin Stadium — the venue actually in use today — rather
//   than describing the unopened Ryan Field as current.
//
// `floor` is deliberately never used as a tier: these are football seating
// bowls, not arena floor configurations.

import type { Venue } from '../venue-types';

export const fbsStadiums5: Record<string, Venue> = {
  'davis-wade-stadium': {
    id: 'davis-wade-stadium',
    name: 'Davis Wade Stadium at Scott Field',
    city: 'Starkville',
    state: 'MS',
    capacity: 60311,
    type: 'stadium',
    homeTeams: ['Mississippi State Bulldogs Football'],
    description: "Davis Wade Stadium at Scott Field has hosted Mississippi State Bulldogs football since 1914, making it the second-oldest stadium in the FBS behind only Georgia Tech's Bobby Dodd Stadium. The bowl holds 60,311 fans on Latitude 36 Bermudagrass, split between a lower deck, a 1,700-seat club level, 50 skyboxes, and upper-deck sections on both sidelines. The west upper deck was rebuilt in 2022 into the open-air tiered seating known as the Balconies at Davis Wade Stadium. Mississippi State's cowbell tradition, permitted under a specific SEC exception, dates back to 1977 and gives the stadium one of college football's most distinctive soundtracks.",
    keywords: ['Davis Wade Stadium tickets', 'Mississippi State Bulldogs tickets', 'Davis Wade Stadium seating chart', 'Davis Wade Stadium events 2026', 'Starkville football tickets'],
    faqs: [
      { question: 'What are the Balconies at Davis Wade Stadium?', answer: 'The Balconies are the open-air tiered boxes that replaced bleacher seating on the west upper deck in a 2022 renovation, built for a more social game-day experience.' },
    ],
    sections: [
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'The Balconies (West Upper Deck)', tier: 'upper' },
      { name: 'East Upper Deck', tier: 'upper' },
      { name: 'Skyboxes', tier: 'suite' },
    ]
  },

  'robert-w-plaster-stadium': {
    id: 'robert-w-plaster-stadium',
    name: 'Robert W. Plaster Stadium',
    city: 'Springfield',
    state: 'MO',
    capacity: 17500,
    type: 'stadium',
    homeTeams: ['Missouri State Football'],
    description: "Robert W. Plaster Stadium has been the Missouri State Bears' home since it opened as a WPA project in 1941, first as Briggs Stadium before its 1991 renaming for Evergreen Investments chairman Robert W. Plaster. The 17,500-seat venue plays on Sport Turf and rebuilt its east side and removed the surrounding track in a 2014 renovation. Missouri State joined Conference USA in 2025 as it transitions to full FBS membership in 2026, bringing a new level of competition to a stadium that has changed names twice but never left its original Springfield site. Suites hold groups of ten across 24 boxes plus one 40-seat luxury box.",
    keywords: ['Robert W. Plaster Stadium tickets', 'Missouri State Bears tickets', 'Plaster Stadium seating chart', 'Missouri State football tickets', 'Springfield Missouri football tickets'],
    faqs: [
      { question: 'Why did Robert W. Plaster Stadium change names?', answer: 'It opened in 1941 as Briggs Stadium, honoring longtime coach Arthur Briggs, then was renamed in 1991 for Robert W. Plaster, chairman of Evergreen Investments, following a major renovation.' },
    ],
    sections: [
      { name: 'West Sideline Reserved', tier: 'lower' },
      { name: 'East Sideline (Student Section)', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Luxury Suites', tier: 'suite' },
      { name: '40-Seat Luxury Box', tier: 'suite' },
    ]
  },

  'faurot-field': {
    id: 'faurot-field',
    name: 'Faurot Field at Memorial Stadium',
    city: 'Columbia',
    state: 'MO',
    capacity: 63609,
    type: 'stadium',
    homeTeams: ['Mizzou Tigers Football'],
    description: "Faurot Field at Memorial Stadium has hosted Missouri Tigers football since October 1926, and the building marked its centennial by completing the $250 million Memorial Stadium Centennial Project, which enclosed the north end zone and turned the horseshoe into a full bowl. Capacity rose from 62,821 to 63,609 with the addition, which includes the Rock M Club, field-level luxury boxes and new premium suites behind the north end zone. AstroTurf has covered the field since 2021. The white Rock M, Mizzou's signature north-end landmark, was reinstalled in its new home on August 31, 2026, days before the season opener.",
    keywords: ['Faurot Field tickets', 'Missouri Tigers tickets', 'Memorial Stadium Columbia seating chart', 'Faurot Field events 2026', 'Missouri football tickets'],
    faqs: [
      { question: 'What changed in the 2026 Faurot Field renovation?', answer: 'The Memorial Stadium Centennial Project enclosed the north end zone, turning the stadium into a full bowl and adding roughly 4,000 seats including the Rock M Club and new premium suites, finished just before the 2026 season.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Rock M Club (North End Zone)', tier: 'club' },
      { name: 'Touchdown Terrace (South End Zone)', tier: 'club' },
      { name: 'Field-Level Luxury Boxes', tier: 'suite' },
      { name: 'Premium Suites', tier: 'suite' },
    ]
  },

  'navy-marine-corps-memorial-stadium': {
    id: 'navy-marine-corps-memorial-stadium',
    name: 'Navy–Marine Corps Memorial Stadium',
    city: 'Annapolis',
    state: 'MD',
    capacity: 34000,
    type: 'stadium',
    homeTeams: ['Navy Midshipmen Football'],
    description: "Navy–Marine Corps Memorial Stadium has been the Navy Midshipmen's home since it opened in 1959 on Jack Stephens Field, seating 34,000 for football and lacrosse. Ongoing renovations since 2005 have lowered the field, added club-level seating and lounges, private suites, and upgraded restrooms and concession areas at both end zones. FieldTurf replaced the original natural grass before the 2005 season. The stadium sits on the Naval Academy's Annapolis campus and is jointly named for Navy and Marine Corps veterans of both World Wars, a dedication carried in its full title since the day it opened.",
    keywords: ['Navy Midshipmen tickets', 'Navy-Marine Corps Memorial Stadium tickets', 'Navy football seating chart', 'Annapolis football tickets', 'Navy Midshipmen football 2026'],
    faqs: [
      { question: 'What does the Navy-Marine Corps Memorial Stadium name honor?', answer: 'It memorializes U.S. Navy and Marine Corps personnel who served in World War I and World War II, a dedication built into the stadium since it opened in 1959.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Club Lounges', tier: 'club' },
      { name: 'Private Suites', tier: 'suite' },
    ]
  },

  'memorial-stadium-nebraska': {
    id: 'memorial-stadium-nebraska',
    name: 'Tom Osborne Field at Memorial Stadium',
    city: 'Lincoln',
    state: 'NE',
    capacity: 85458,
    type: 'stadium',
    homeTeams: ['Nebraska Cornhusker Football'],
    description: "Tom Osborne Field at Memorial Stadium has hosted Nebraska Cornhusker football since October 1923 and seats 85,458 across the East, West, North and South Stadium sections that ring FieldTurf laid in 1999. Nebraska's sellout streak, long the longest in major college sports, made the stadium famous for holding more fans on a Saturday than the state's third-largest city. In April 2026 the Board of Regents approved a $600 million South Stadium rebuild, but that project is not scheduled to finish until 2028, so today's bowl remains the same configuration fans have known since the last stadium-wide renovation.",
    keywords: ['Memorial Stadium Lincoln tickets', 'Nebraska Cornhuskers tickets', 'Nebraska football seating chart', 'Memorial Stadium Nebraska events 2026', 'Lincoln Nebraska football tickets'],
    faqs: [
      { question: 'Is the Nebraska Memorial Stadium renovation finished?', answer: 'No. The Board of Regents approved a $600 million South Stadium rebuild in April 2026, but it is not scheduled for completion until 2028, so the current 85,458 capacity remains in place for now.' },
    ],
    sections: [
      { name: 'East Stadium Lower Bowl', tier: 'lower' },
      { name: 'West Stadium Lower Bowl', tier: 'lower' },
      { name: 'North Stadium', tier: 'lower' },
      { name: 'South Stadium', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Luxury Suites', tier: 'suite' },
    ]
  },

  'mackay-stadium': {
    id: 'mackay-stadium',
    name: 'Mackay Stadium',
    city: 'Reno',
    state: 'NV',
    capacity: 30000,
    type: 'stadium',
    homeTeams: ['Nevada Wolf Pack Football'],
    description: "Mackay Stadium has hosted Nevada Wolf Pack football since October 1966 on Chris Ault Field, named for the coach and athletic director who spent parts of five decades at Nevada. A 2016-season renovation, funded by an $11.5 million bond, swapped bleacher seats for a stadium club, loge boxes and chairback sections, trimming the bowl to 27,000 for a better fan experience; capacity has since been listed back at 30,000 from the 2024 season. FieldTurf, installed in 2000, was most recently replaced in 2022 through a sponsorship with ITS Logistics. The stadium sits on the northern edge of the Reno campus, with the Sierra Nevada foothills visible beyond the north end zone on clear days.",
    keywords: ['Mackay Stadium tickets', 'Nevada Wolf Pack tickets', 'Mackay Stadium seating chart', 'Reno football tickets', 'Nevada Wolf Pack football 2026'],
    faqs: [
      { question: 'Who is Chris Ault Field at Mackay Stadium named for?', answer: 'The playing surface honors Chris Ault, the longtime Nevada head coach and athletic director whose career at the school spanned parts of five decades.' },
    ],
    sections: [
      { name: 'East Sideline', tier: 'lower' },
      { name: 'West Sideline', tier: 'lower' },
      { name: 'North End Zone (Student Section)', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'aggie-memorial-stadium': {
    id: 'aggie-memorial-stadium',
    name: 'Joey Mullen Field at Aggie Memorial Stadium',
    city: 'Las Cruces',
    state: 'NM',
    capacity: 28853,
    type: 'stadium',
    homeTeams: ['New Mexico State Univ (NMSU) Aggies Football'],
    description: "Joey Mullen Field at Aggie Memorial Stadium has been the New Mexico State Aggies' home since September 1978, an oval bowl whose lower level wraps the field except for two 100-foot gaps behind each end zone, with a second level running the length of both sidelines above it. Capacity sits at 28,853 after the 2015 addition of Club 27, a premium 92-seat area built for $1.1 million. UBU Sports Speed S5-M synthetic turf has covered the field since 2014. The stadium sits on the New Mexico State campus in Las Cruces, in view of the Organ Mountains to the east.",
    keywords: ['Aggie Memorial Stadium tickets', 'New Mexico State Aggies tickets', 'Aggie Memorial Stadium seating chart', 'Las Cruces football tickets', 'NMSU football 2026'],
    faqs: [
      { question: 'What is Club 27 at Aggie Memorial Stadium?', answer: "Club 27 is a 92-seat premium club level added in 2015 for $1.1 million, part of the stadium's second-level seating that runs the length of the field on both sidelines." },
    ],
    sections: [
      { name: 'Level One East Sideline', tier: 'lower' },
      { name: 'Level One West Sideline', tier: 'lower' },
      { name: 'Level One End Zone', tier: 'lower' },
      { name: 'Level Two Sideline', tier: 'upper' },
      { name: 'Club 27', tier: 'club' },
      { name: 'Press Box Suites', tier: 'suite' },
    ]
  },

  'carter-finley-stadium': {
    id: 'carter-finley-stadium',
    name: 'Wayne Day Family Field at Carter–Finley Stadium',
    city: 'Raleigh',
    state: 'NC',
    capacity: 56919,
    type: 'stadium',
    homeTeams: ['North Carolina State University Wolfpack Football'],
    description: "Wayne Day Family Field at Carter–Finley Stadium has hosted NC State Wolfpack football since October 1966 and seats 56,919 on a Tifway 419 Bermuda grass field with artificial turf sidelines. The bowl mixes chairback, bench and accessible seating across a lower level, club seats and luxury boxes, with an upper deck on both sidelines and end zones. A 2023 upgrade, finished around the stadium hosting an NHL Stadium Series game, replaced the north end videoboard with a screen more than double its previous size and updated the sound system. The stadium sits in the Carter–Finley complex west of downtown Raleigh.",
    keywords: ['Carter-Finley Stadium tickets', 'NC State Wolfpack tickets', 'Carter-Finley Stadium seating chart', 'Raleigh football tickets', 'NC State football 2026'],
    faqs: [
      { question: 'What changed at Carter-Finley Stadium in the 2023 upgrade?', answer: 'The north end videoboard was replaced with a screen more than double the size of the previous one, alongside a new sound system, finished around the stadium hosting the 2023 NHL Stadium Series game.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Club Seats', tier: 'club' },
      { name: 'Luxury Boxes', tier: 'suite' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Upper Level End Zone', tier: 'upper' },
    ]
  },

  'fargodome': {
    id: 'fargodome',
    name: 'Gate City Bank Field at the Fargodome',
    city: 'Fargo',
    state: 'ND',
    capacity: 18700,
    type: 'stadium',
    homeTeams: ['North Dakota State Bison'],
    description: "Gate City Bank Field at the Fargodome has hosted North Dakota State Bison football since December 1992, an indoor multipurpose dome that seats 18,700 for football on artificial turf replaced most recently in July 2022. The dome's flexible design lets it reconfigure for concerts up to a 26,700-capacity center-stage layout, but the football bowl stays fixed with lower and upper seating on both sidelines plus club and suite levels. Voters twice rejected a proposed $131-140 million expansion and renovation, in 2023 and 2024, so the dome remains in its original configuration on the NDSU campus in Fargo.",
    keywords: ['Fargodome tickets', 'North Dakota State Bison tickets', 'Fargodome seating chart', 'Fargo football tickets', 'NDSU football 2026'],
    faqs: [
      { question: 'Is the Fargodome getting a renovation?', answer: 'Not yet. A proposed $131-140 million expansion was rejected by voters twice, in 2023 and 2024, so the dome remains in its original 1992 configuration.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Upper Bowl Sideline', tier: 'upper' },
      { name: 'Upper Bowl End Zone', tier: 'upper' },
      { name: 'Club Seating', tier: 'club' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'huskie-stadium': {
    id: 'huskie-stadium',
    name: 'Brigham Field at Huskie Stadium',
    city: 'DeKalb',
    state: 'IL',
    capacity: 23595,
    type: 'stadium',
    homeTeams: ['Northern Illinois Huskies Football'],
    description: "Brigham Field at Huskie Stadium has hosted Northern Illinois football since November 1965 and seats 23,595 across concrete West Stands and steel East Stands rebuilt in a 1995 renovation. A South End Zone Berm added in 2002 gives fans grass seating behind the goal line, while the Terrace Club overlooks the field from the north end near the Yordon Athletic Center, which opened in 2007 and reduced total capacity when it was added. The West grandstand also holds the Coaches Club, and the Sky Box sits above with adjoining Sky Club seating. AstroTurf replaced the previous playing surface in 2024.",
    keywords: ['Huskie Stadium tickets', 'Northern Illinois Huskies tickets', 'Huskie Stadium seating chart', 'DeKalb football tickets', 'NIU football 2026'],
    faqs: [
      { question: 'What is the South End Zone Berm at Huskie Stadium?', answer: 'It is a grass-seating area added in 2002 behind the south goal line, giving fans a lower-cost general admission option close to the field.' },
    ],
    sections: [
      { name: 'West Stands', tier: 'lower' },
      { name: 'East Stands', tier: 'lower' },
      { name: 'South End Zone Berm', tier: 'lower' },
      { name: 'Terrace Club (North End Zone)', tier: 'club' },
      { name: 'Coaches Club (West Grandstand)', tier: 'club' },
      { name: 'Sky Box', tier: 'suite' },
    ]
  },

  'martin-stadium-northwestern': {
    id: 'martin-stadium-northwestern',
    name: 'Northwestern Medicine Field at Martin Stadium',
    city: 'Evanston',
    state: 'IL',
    capacity: 12023,
    type: 'stadium',
    homeTeams: ['Northwestern Wildcats Football'],
    description: "Northwestern Medicine Field at Martin Stadium is the temporary home of Northwestern Wildcats football while the new $862 million Ryan Field is completed on its Evanston lakefront site. The 12,023-seat venue opened for football in 2024 with 2,500 West Sideline bleacher seats, 1,200 on the East Sideline, and 5,000 in the North End Zone for students and the marching band. The South End Zone holds sixteen open-air suites, club seating and a loge section of four-seat tables. Northwestern plays its first two home games of the 2026 season here before moving into the new Ryan Field on October 2, 2026.",
    keywords: ['Martin Stadium tickets', 'Northwestern Wildcats tickets', 'Northwestern Medicine Field seating chart', 'Evanston football tickets', 'Northwestern football 2026'],
    faqs: [
      { question: 'Is Northwestern still playing at Martin Stadium?', answer: 'Yes, through the first two home games of the 2026 season. The Wildcats then move into the new Ryan Field for their October 2, 2026 Big Ten opener against Penn State.' },
    ],
    sections: [
      { name: 'West Sideline Bleachers', tier: 'lower' },
      { name: 'East Sideline Bleachers', tier: 'lower' },
      { name: 'North End Zone (Student & Band)', tier: 'lower' },
      { name: 'Loft Level', tier: 'club' },
      { name: 'South End Zone Club & Loge', tier: 'club' },
      { name: 'South End Zone Suites', tier: 'suite' },
    ]
  },

  'notre-dame-stadium': {
    id: 'notre-dame-stadium',
    name: 'Notre Dame Stadium',
    city: 'South Bend',
    state: 'IN',
    capacity: 77622,
    type: 'stadium',
    homeTeams: ['Notre Dame Fighting Irish Football'],
    description: "Notre Dame Stadium has hosted Fighting Irish football since October 1930 and seats 77,622 on the South Bend campus in view of the Word of Life mural known as Touchdown Jesus. A 1997 renovation added an upper deck around the bowl, and the 2014-2017 Campus Crossroads project wrapped the stadium in three new buildings, Duncan Student Center, O'Neill Hall and Corbett Family Hall, which house premium seating, suites and academic space and brought total capacity to its current figure. Artificial turf has covered the field since 2014, replacing the natural grass used from the stadium's opening through 2013.",
    keywords: ['Notre Dame Stadium tickets', 'Notre Dame Fighting Irish tickets', 'Notre Dame Stadium seating chart', 'South Bend football tickets', 'Notre Dame football 2026'],
    faqs: [
      { question: 'What is Campus Crossroads at Notre Dame Stadium?', answer: "It is the 2014-2017, $400 million project that wrapped the stadium in three new buildings, Duncan Student Center, O'Neill Hall and Corbett Family Hall, adding premium seating and academic space while setting capacity at 77,622." },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Duncan Student Center Premium Seating', tier: 'club' },
      { name: "O'Neill Hall Premium Seating", tier: 'club' },
      { name: 'Corbett Family Hall Suites', tier: 'suite' },
      { name: 'Upper Deck', tier: 'upper' },
    ]
  },

  'ohio-stadium': {
    id: 'ohio-stadium',
    name: 'Ohio Stadium',
    city: 'Columbus',
    state: 'OH',
    capacity: 102780,
    type: 'stadium',
    homeTeams: ['Ohio State Buckeyes Football'],
    description: "Ohio Stadium, known as the Horseshoe, has hosted Ohio State Buckeyes football since October 1922 and seats 102,780 across the A, B and C decks that ring the bowl. A 1998-2001 renovation enclosed the south end and added 81 luxury suites along with 2,500 club seats, moving the building from its original horseshoe shape toward a more complete bowl. Shaw Sports Momentum Pro turf has covered the field since 2022. Ohio State has continued phasing in additional luxury suites since 2017, part of an ongoing effort to modernize premium seating inside one of the largest stadiums in the country.",
    keywords: ['Ohio Stadium tickets', 'Ohio State Buckeyes tickets', 'Ohio Stadium seating chart', 'Columbus football tickets', 'Ohio State football 2026', 'The Horseshoe tickets'],
    faqs: [
      { question: 'Why is Ohio Stadium called the Horseshoe?', answer: 'The original 1922 design left the south end open in a horseshoe shape. A 1998-2001 renovation enclosed that end with luxury suites and club seating, though the nickname has stuck.' },
    ],
    sections: [
      { name: 'A Deck', tier: 'lower' },
      { name: 'South Stands', tier: 'lower' },
      { name: 'B Deck', tier: 'upper' },
      { name: 'C Deck', tier: 'upper' },
      { name: 'Club Seats', tier: 'club' },
      { name: 'Luxury Suites', tier: 'suite' },
    ]
  },

  'peden-stadium': {
    id: 'peden-stadium',
    name: 'Frank Solich Field at Peden Stadium',
    city: 'Athens',
    state: 'OH',
    capacity: 24000,
    type: 'stadium',
    homeTeams: ['Ohio University Bobcats Football'],
    description: "Frank Solich Field at Peden Stadium has hosted Ohio Bobcats football since October 1929 and seats 24,000 on FieldTurf installed in 2002, when a $2.8 million project also removed the surrounding track and lowered the playing surface. The bleacher-back Phillips Club runs along the lower sideline, the Touchdown Club offers donor seating, the marching band occupies the north end zone, and Victory Hill is the grass berm at the south end for overflow crowds. The field was renamed for former head coach Frank Solich in August 2022, honoring his sixteen seasons leading the Bobcats.",
    keywords: ['Peden Stadium tickets', 'Ohio Bobcats tickets', 'Peden Stadium seating chart', 'Athens Ohio football tickets', 'Ohio University football 2026'],
    faqs: [
      { question: 'Who is Frank Solich Field at Peden Stadium named for?', answer: "It honors Frank Solich, Ohio's head coach from 2005 to 2021, renamed in August 2022 to recognize his sixteen seasons leading the Bobcats." },
    ],
    sections: [
      { name: 'General Admission Sideline', tier: 'lower' },
      { name: 'Reserved Sideline', tier: 'lower' },
      { name: 'North End Zone (Marching Band)', tier: 'lower' },
      { name: 'Victory Hill (South End Zone Berm)', tier: 'lower' },
      { name: 'Phillips Club', tier: 'club' },
      { name: 'Touchdown Club', tier: 'club' },
    ]
  },
};
