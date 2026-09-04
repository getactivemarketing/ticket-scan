// Batch 7 of 10 FBS stadiums. Programs: SDSU, SMU, South Florida, Southern
// Mississippi, Stanford, Syracuse, TCU, Temple, Tennessee, Texas A&M, Texas
// State, Texas Tech, Toledo, Troy.
//
// South Florida Bulls Football and Temple University Owls Football are
// OMITTED from this file. Both already have verified entries in
// web/src/data/stadiums/nfl.ts: South Florida plays at Raymond James Stadium
// (slug `raymond-james-stadium`, shared with the Tampa Bay Buccaneers) and
// Temple plays at Lincoln Financial Field (slug `lincoln-financial-field`,
// shared with the Philadelphia Eagles). A second entry for the same physical
// building would duplicate an indexed page and resolve to the same
// Ticketmaster venue id, so per the controller's instruction those two
// programs are added to the existing NFL entries' `homeTeams` in a central
// step instead of here.
//
// Two of the remaining twelve carry a naming-rights rename that took effect
// during the 2026 season: Southern Miss's M. M. Roberts Stadium ("The Rock")
// became Renasant Stadium on August 21, 2026, and Texas Tech's Jones AT&T
// Stadium became Galaxy Stadium for the 2026 season after the AT&T deal
// expired. Both are used here as the current, verified names rather than the
// prior sponsor names.
//
// TCU's dedicated Wikipedia article lists Amon G. Carter Stadium at "46,000
// (2023-present)"; an aggregate search snippet suggested 47,000, but the
// dedicated article is the more specific and current source and is used here.
// Kyle Field, Neyland Stadium and Snapdragon Stadium capacities are confirmed
// directly against each program's own athletics site or dedicated article.
//
// Section names come from each venue's own facilities pages, seating guides
// or dedicated Wikipedia article. Where a specific numbering scheme could not
// be verified, the zone is named without invented numbers.

import type { Venue } from '../venue-types';

export const fbsStadiums7: Record<string, Venue> = {
  'snapdragon-stadium': {
    id: 'snapdragon-stadium',
    name: 'Snapdragon Stadium',
    city: 'San Diego',
    state: 'CA',
    capacity: 35000,
    type: 'stadium',
    homeTeams: ['SDSU Aztec Football'],
    description: 'Snapdragon Stadium is the 35,000-seat home of SDSU Aztec football, an open-air bowl in Mission Valley that opened in 2022 on the site of the demolished Qualcomm Stadium. San Diego State owns the building, which also hosts San Diego FC of MLS and San Diego Wave FC of the NWSL, giving it a busy year-round calendar beyond fall Saturdays. The 100 level lower bowl wraps the sidelines and end zones closest to the field, a club tier on the west side adds padded seats and concourse lounge access, and the 300 level upper bowl sits above it. TicketScan tracks Snapdragon Stadium onsales and presale windows.',
    keywords: ['Snapdragon Stadium tickets', 'SDSU Aztecs tickets', 'Snapdragon Stadium seating chart', 'San Diego FC tickets', 'Snapdragon Stadium events 2026', 'San Diego football tickets'],
    faqs: [
      { question: 'What stood on the Snapdragon Stadium site before it was built?', answer: 'Qualcomm Stadium, the longtime home of the Chargers and Aztecs, was demolished to make way for it. Snapdragon Stadium opened on the same Mission Valley site in 2022 with a reduced 35,000-seat capacity.' },
    ],
    sections: [
      { name: '100 Level Lower Bowl Sideline', tier: 'lower' },
      { name: '100 Level Lower Bowl End Zone', tier: 'lower' },
      { name: 'West Side Club Level', tier: 'club' },
      { name: '300 Level Upper Bowl Sideline', tier: 'upper' },
      { name: '300 Level Upper Bowl End Zone', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'gerald-j-ford-stadium': {
    id: 'gerald-j-ford-stadium',
    name: 'Gerald J. Ford Stadium',
    city: 'Dallas',
    state: 'TX',
    capacity: 33200,
    type: 'stadium',
    homeTeams: ['SMU Mustangs Football'],
    description: 'Gerald J. Ford Stadium seats 33,200 for SMU Mustangs football on the SMU campus, up from roughly 32,000 after the $100 million Garry Weber End Zone Complex opened in the south end in August 2024. The lower bowl rings the field on natural grass, about 2,100 club-level seats sit above it, and nearly 2,000 suite seats are split between loge boxes, a three-level tower with the press box, and the new end-zone complex. The stadium has hosted the Armed Forces Bowl and the First Responder Bowl. TicketScan tracks Gerald J. Ford Stadium onsales and presale windows.',
    keywords: ['Gerald J. Ford Stadium tickets', 'SMU Mustangs tickets', 'Ford Stadium seating chart', 'SMU football tickets', 'Ford Stadium events 2026', 'Dallas football tickets'],
    faqs: [
      { question: 'Did Gerald J. Ford Stadium get bigger recently?', answer: 'Yes. The Garry Weber End Zone Complex, a $100 million project in the south end zone funded partly by a $50 million gift from the Garry Weber Foundation, opened in August 2024 and pushed capacity from about 32,000 to 33,200.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Weber End Zone Club', tier: 'club' },
      { name: 'Loge Boxes', tier: 'suite' },
      { name: 'Tower Suites', tier: 'suite' },
    ]
  },

  'renasant-stadium': {
    id: 'renasant-stadium',
    name: 'Renasant Stadium',
    city: 'Hattiesburg',
    state: 'MS',
    capacity: 36000,
    type: 'stadium',
    homeTeams: ['Southern Mississippi Football'],
    description: 'Renasant Stadium seats 36,000 for Southern Mississippi Golden Eagles football on the USM campus in Hattiesburg. Known for decades as M. M. Roberts Stadium, or "The Rock," it took its current name on August 21, 2026 under a 10-year naming-rights agreement with Renasant Bank, its first name change in nearly 50 years. The Golden Eagles sideline runs in front of lettered sections M through O, the visitors sit across the field in front of sections D through F, and a 2008 expansion added an east-side club level and 33 specialty suites. TicketScan tracks Renasant Stadium onsales and presale windows.',
    keywords: ['Renasant Stadium tickets', 'Southern Miss Golden Eagles tickets', 'M.M. Roberts Stadium tickets', 'The Rock Hattiesburg tickets', 'Renasant Stadium events 2026', 'Hattiesburg football tickets'],
    faqs: [
      { question: 'Is Renasant Stadium the same building as M.M. Roberts Stadium?', answer: 'Yes. Southern Miss renamed its longtime home, known as "The Rock," to Renasant Stadium on August 21, 2026 as part of a 10-year, $13.7 million naming-rights deal with Renasant Bank. The seating and 36,000 capacity are unchanged.' },
    ],
    sections: [
      { name: 'Home Sideline Sections M-O', tier: 'lower' },
      { name: 'Visitor Sideline Sections D-F', tier: 'lower' },
      { name: 'North End Zone Sections Q-R', tier: 'lower' },
      { name: 'Upper Level Sections QQ-RR', tier: 'upper' },
      { name: 'East Side Club Level', tier: 'club' },
      { name: 'Specialty Suites', tier: 'suite' },
    ]
  },

  'stanford-stadium': {
    id: 'stanford-stadium',
    name: 'Stanford Stadium',
    city: 'Stanford',
    state: 'CA',
    capacity: 50424,
    type: 'stadium',
    homeTeams: ['Stanford Cardinal Football'],
    description: 'Stanford Stadium seats 50,424 for Stanford Cardinal football, a single continuous bowl on the Stanford campus that was rebuilt in 2006 in about a year, replacing the 85,000-seat stadium that had stood since 1921 and cutting capacity by nearly half. The open-air bowl has no upper deck, so most seating is one sideline-to-end-zone rake around the field. Club seats and a small number of loge boxes and private suites sit at the press box level. The stadium also hosted matches during the 1994 World Cup and the 2026 FIFA World Cup era of Bay Area soccer. TicketScan tracks Stanford Stadium onsales.',
    keywords: ['Stanford Stadium tickets', 'Stanford Cardinal tickets', 'Stanford Stadium seating chart', 'Stanford football tickets', 'Stanford Stadium events 2026', 'Palo Alto football tickets'],
    faqs: [
      { question: 'Why is Stanford Stadium so much smaller than it used to be?', answer: 'The original 1921 stadium held about 85,000. It was demolished and rebuilt in under a year for the 2006 season as a leaner, single-bowl venue seating 50,424, sized for realistic modern attendance rather than the old capacity.' },
    ],
    sections: [
      { name: 'West Sideline', tier: 'lower' },
      { name: 'East Sideline', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Club Seats', tier: 'club' },
      { name: 'Loge Boxes and Private Suites', tier: 'suite' },
    ]
  },

  'jma-wireless-dome': {
    id: 'jma-wireless-dome',
    name: 'JMA Wireless Dome',
    city: 'Syracuse',
    state: 'NY',
    capacity: 42784,
    type: 'stadium',
    homeTeams: ['Syracuse Orange Football'],
    description: 'The JMA Wireless Dome seats 42,784 for Syracuse Orange football, a fixed-roof, climate-controlled dome on the Syracuse campus that carried its current name after a 2024 naming-rights deal replaced the longtime Carrier Dome branding. It also hosts Syracuse basketball and lacrosse at reduced capacities, so seating is reconfigured by sport. Football seating runs from lower-level sideline and end-zone sections up through a loge tier, a club concourse and an upper level, with a single ring of suites near the roofline. TicketScan tracks when tickets for JMA Wireless Dome events go on sale, including presale windows.',
    keywords: ['JMA Wireless Dome tickets', 'Syracuse Orange tickets', 'Carrier Dome tickets', 'JMA Wireless Dome seating chart', 'JMA Wireless Dome events 2026', 'Syracuse football tickets'],
    faqs: [
      { question: 'Is the JMA Wireless Dome the same building as the Carrier Dome?', answer: 'Yes. It is the same Syracuse campus dome, renamed in a 2024 naming-rights agreement with JMA Wireless after decades as the Carrier Dome. Football capacity is 42,784.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Loge Level', tier: 'club' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Upper Level', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'amon-g-carter-stadium': {
    id: 'amon-g-carter-stadium',
    name: 'Amon G. Carter Stadium',
    city: 'Fort Worth',
    state: 'TX',
    capacity: 46000,
    type: 'stadium',
    homeTeams: ['TCU Horned Frogs Football'],
    description: 'Amon G. Carter Stadium seats 46,000 for TCU Horned Frogs football on the TCU campus, its current capacity since an east-side expansion project completed in 2020 rebuilt that side of the bowl. The lower bowl wraps the field on natural grass, and two indoor club sections, the Champions Club in sections 204-210 and the Legends Club, sit at the mezzanine level with lounge access, buffet dining and a full-service bar. New club seats and luxury suites were added in phases before the 2008 season and again in the 2020 rebuild. TicketScan tracks Amon G. Carter Stadium onsales and presale windows.',
    keywords: ['Amon G. Carter Stadium tickets', 'TCU Horned Frogs tickets', 'Amon Carter Stadium seating chart', 'TCU football tickets', 'Amon Carter Stadium events 2026', 'Fort Worth football tickets'],
    faqs: [
      { question: 'What is the Champions Club at Amon G. Carter Stadium?', answer: 'It is the indoor club section covering sections 204-210 at the mezzanine level, with elevated sideline views, lounge seating, private restrooms and buffet dining. A second club, the Legends Club, sits nearby at the same level.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Champions Club 204-210', tier: 'club' },
      { name: 'Legends Club', tier: 'club' },
      { name: 'Upper Level (East Side)', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'neyland-stadium': {
    id: 'neyland-stadium',
    name: 'Neyland Stadium',
    city: 'Knoxville',
    state: 'TN',
    capacity: 101915,
    type: 'stadium',
    homeTeams: ['Tennessee Volunteers Football'],
    description: 'Neyland Stadium seats 101,915 for Tennessee Volunteers football, one of the largest stadiums in the country, on the Knoxville campus overlooking the Tennessee River. The lower bowl rings the field, the Tennessee Terrace club runs sections T1-T7 on an enclosed indoor concourse, and the East Club and West Club sit above the upper level over the visitor and Volunteers sidelines respectively. Skyboxes sit at the very top of the east and west sides. Boats dock along "Volunteer Landing" on the river for a gameday tradition known as the Vol Navy. TicketScan tracks Neyland Stadium onsales and presale windows.',
    keywords: ['Neyland Stadium tickets', 'Tennessee Volunteers tickets', 'Neyland Stadium seating chart', 'Tennessee football tickets', 'Neyland Stadium events 2026', 'Knoxville football tickets'],
    faqs: [
      { question: 'What is the Tennessee Terrace at Neyland Stadium?', answer: 'It is the club-level seating in sections T1-T7, reached by an enclosed indoor concourse with expanded concessions. It sits below the East Club and West Club, which occupy the level above the upper bowl.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Tennessee Terrace T1-T7', tier: 'club' },
      { name: 'East Club', tier: 'club' },
      { name: 'West Club', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Upper Level End Zone', tier: 'upper' },
      { name: 'Skyboxes', tier: 'suite' },
    ]
  },

  'kyle-field': {
    id: 'kyle-field',
    name: 'Kyle Field',
    city: 'College Station',
    state: 'TX',
    capacity: 102733,
    type: 'stadium',
    homeTeams: ['Texas A&M Aggies Football'],
    description: 'Kyle Field seats 102,733 for Texas A&M Aggies football, known as the "Home of the 12th Man," on the College Station campus following a $485 million redevelopment completed in 2015 that made it one of the five largest stadiums in college football. The north end zone, the Bernard C. Richardson Zone, holds a large share of the seating. The west lower bowl carries Field Boxes, the All-American Club and the Legacy Club, and a second-tier Zone Club runs sections Z1-Z16. Private suites ring all four sides of the stadium. TicketScan tracks Kyle Field onsales and presale windows.',
    keywords: ['Kyle Field tickets', 'Texas A&M Aggies tickets', 'Kyle Field seating chart', '12th Man tickets', 'Kyle Field events 2026', 'College Station football tickets'],
    faqs: [
      { question: 'What is the Zone at Kyle Field?', answer: 'The Zone, officially the Bernard C. Richardson Zone, is the large north end zone seating addition completed in 1999. It holds a substantial share of Kyle Field\'s 102,733 capacity and includes the Zone Club sections Z1-Z16 on its second tier.' },
    ],
    sections: [
      { name: 'Lower Level Sideline 104-107, 141-144', tier: 'lower' },
      { name: 'North End Zone (The Zone)', tier: 'lower' },
      { name: 'Field Boxes', tier: 'club' },
      { name: 'All-American Club', tier: 'club' },
      { name: 'Legacy Club', tier: 'club' },
      { name: 'Zone Club Z1-Z16', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'ufcu-stadium': {
    id: 'ufcu-stadium',
    name: 'UFCU Stadium',
    city: 'San Marcos',
    state: 'TX',
    capacity: 28388,
    type: 'stadium',
    homeTeams: ['Texas State Bobcats Football'],
    description: 'UFCU Stadium seats 28,388 for Texas State Bobcats football on the San Marcos campus, renamed from Bobcat Stadium in May 2024 after a naming-rights deal with University Federal Credit Union. The west side is the home and premium side, home to the Jerry and Linda Fields West Side Complex, a three-tier structure with 15 Legacy Suites and the 450-seat Champions Club, plus the press box and a banquet room. Chairback seats were added on the east side in 2024, and a new south end zone club and seating opened in 2025. TicketScan tracks UFCU Stadium onsales and presale windows.',
    keywords: ['UFCU Stadium tickets', 'Texas State Bobcats tickets', 'Bobcat Stadium tickets', 'UFCU Stadium seating chart', 'UFCU Stadium events 2026', 'San Marcos football tickets'],
    faqs: [
      { question: 'What was UFCU Stadium called before 2024?', answer: 'It was Bobcat Stadium from 1981 until May 2024, when Texas State signed a naming-rights agreement with University Federal Credit Union. The 28,388-seat bowl and its west-side premium complex are unchanged by the rename.' },
    ],
    sections: [
      { name: 'Home Lower Sideline (West)', tier: 'lower' },
      { name: 'Visitor Lower Sideline (East)', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'South End Zone Club', tier: 'club' },
      { name: 'Champions Club', tier: 'club' },
      { name: 'Legacy Suites', tier: 'suite' },
    ]
  },

  'galaxy-stadium': {
    id: 'galaxy-stadium',
    name: 'Galaxy Stadium',
    city: 'Lubbock',
    state: 'TX',
    capacity: 60229,
    type: 'stadium',
    homeTeams: ['Texas Tech Red Raiders Football'],
    description: 'Galaxy Stadium seats 60,229 for Texas Tech Red Raiders football on the Lubbock campus, renamed for the 2026 season under a 15-year, $75 million agreement with the technology and digital-assets company Galaxy after the prior 20-year AT&T naming deal expired. East and west stadium buildings added over the years house 102 executive suites, the West Stadium Club, and loge boxes with personal televisions in sections 26, 27, 29 and 30. A premium loge tier was added in the north end zone before 2016, and student sections span 13,750 seats across 14 blocks. TicketScan tracks Galaxy Stadium onsales.',
    keywords: ['Galaxy Stadium tickets', 'Texas Tech Red Raiders tickets', 'Jones AT&T Stadium tickets', 'Galaxy Stadium seating chart', 'Galaxy Stadium events 2026', 'Lubbock football tickets'],
    faqs: [
      { question: 'Is Galaxy Stadium the same building as Jones AT&T Stadium?', answer: 'Yes. Texas Tech renamed its 60,229-seat football stadium to Galaxy Stadium for the 2026 season in a 15-year, $75 million deal after the 20-year AT&T naming agreement expired that June.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Student Sections', tier: 'lower' },
      { name: 'West Stadium Club', tier: 'club' },
      { name: 'Loge Boxes 26-27, 29-30', tier: 'club' },
      { name: 'North End Zone Premium Loge', tier: 'club' },
      { name: 'South End Zone Suites', tier: 'suite' },
      { name: 'Executive Suites', tier: 'suite' },
    ]
  },

  'glass-bowl': {
    id: 'glass-bowl',
    name: 'Glass Bowl',
    city: 'Toledo',
    state: 'OH',
    capacity: 26038,
    type: 'stadium',
    homeTeams: ['Toledo Rockets College Football'],
    description: 'The Glass Bowl seats 26,038 for Toledo Rockets football on the University of Toledo campus, built in 1937 as a Works Progress Administration project and expanded to its current size in a 2001 renovation. It is among the oldest stadiums still in use in the Football Bowl Subdivision. A three-level press tower between the 25-yard lines houses 45 private suites and the 300-seat Stadium Club, a theater-style club with chairback seating, a pregame buffet and a deluxe cash bar. TicketScan tracks when tickets for Glass Bowl events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Glass Bowl tickets', 'Toledo Rockets tickets', 'Glass Bowl seating chart', 'Toledo football tickets', 'Glass Bowl events 2026', 'Toledo Ohio football tickets'],
    faqs: [
      { question: 'How old is the Glass Bowl?', answer: 'It opened in 1937 as a Works Progress Administration project, making it one of the oldest stadiums in the FBS still hosting football. Its current 26,038-seat capacity dates to a 2001 renovation.' },
    ],
    sections: [
      { name: 'Home Sideline', tier: 'lower' },
      { name: 'Visitor Sideline', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Stadium Club', tier: 'club' },
      { name: 'Press Tower Suites', tier: 'suite' },
    ]
  },

  'veterans-memorial-stadium-troy': {
    id: 'veterans-memorial-stadium-troy',
    name: 'Veterans Memorial Stadium',
    city: 'Troy',
    state: 'AL',
    capacity: 30470,
    type: 'stadium',
    homeTeams: ['Troy University Trojans Football'],
    description: 'Veterans Memorial Stadium, also known as Larry Blakeney Field, seats 30,470 for Troy Trojans football on the Troy University campus, up from about 30,000 after a 2003 renovation that completed the program\'s move to Division I-A. A six-story tower holds the press box and 27 executive suites, and a club area accommodates more than 1,000 guests. A north end zone facility completed in 2018 added 402 club-level seats along with locker rooms and a recruiting lounge. TicketScan tracks when tickets for Veterans Memorial Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Veterans Memorial Stadium tickets', 'Troy Trojans tickets', 'Larry Blakeney Field tickets', 'Troy football tickets', 'Veterans Memorial Stadium events 2026', 'Troy Alabama football tickets'],
    faqs: [
      { question: 'What was added to Veterans Memorial Stadium in 2018?', answer: 'A north end zone facility opened that year with 402 club-level seats, locker rooms, strength and conditioning space, and a recruiting lounge, adding to the existing tower suites and general club seating.' },
    ],
    sections: [
      { name: 'Home Sideline', tier: 'lower' },
      { name: 'Visitor Sideline', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'North End Zone Club Seats', tier: 'club' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Executive Suites', tier: 'suite' },
    ]
  },
};
