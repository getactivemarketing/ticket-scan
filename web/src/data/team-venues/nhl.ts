// Home arenas for the 18 NHL teams whose pages had no venue. The Utah Mammoth
// are not here: Delta Center is shared with the Utah Jazz and is written in
// the NBA batch.
//
// Researched 2026-09-30. Capacity is the HOCKEY figure. The team's or arena's
// own site wins over Wikipedia; Wikipedia is used only where the official
// site publishes no hockey number. Official figures: KeyBank Center 19,070
// (Sabres attendance history), Nationwide Arena 18,500 (arena-info), Rogers
// Place 18,500 (arena fun facts; Wikipedia says 18,347, see its FAQ),
// Amerant Bank Arena 19,250 (Panthers arena FAQ), PPG Paints Arena 18,187
// (arena FAQ), Benchmark International Arena 19,092 (Lightning naming-rights
// release). Wikipedia only: Honda Center 17,174, Grand Casino Arena 17,954,
// Bridgestone Arena 17,159, UBS Arena 17,255, SAP Center 17,435, Enterprise
// Center 18,096 (Ticketmaster agrees), Canada Life Centre 15,225, Canadian
// Tire Centre 17,010 (the 2026 figure after the 300-level Fan Deck replaced
// upper-row seats between sections 328 and 301).
//
// Judgment calls:
// - Scotiabank Saddledome: 2026-27 is the Flames' final season there; Scotia
//   Place opens fall 2027. The Saddledome's own site says only "over 19,000",
//   consistent with Wikipedia's 19,289, which is used.
// - Bell Centre: the arena says "over 21,000"; Wikipedia's exact 2025 figure
//   is 20,962, which is used because "over 21,000" is not a count. See FAQ.
// - Lenovo Center: the summer 2026 rebuild added seats and no official hockey
//   number is published (the arena says "up to 20,000"). Wikipedia lists
//   18,547 for 2026 onward; WRAL projected "approximately 19,606". 18,547 is
//   used and flagged in an FAQ. ABC11 reports sections were renumbered in
//   2026, so this entry names Lenovo Center zones without section numbers.
// - Rogers Arena: rogersarena.com and the Canucks media guide block automated
//   fetches. 18,910 is from Ticketmaster's venue guide (Nov 2024); Wikipedia
//   lists 18,871 with no citation. Needs an official confirmation.
// - Amerant Bank Arena: the Panthers say renovations are coming for 2026-27,
//   and a 2025 report said an upper-deck viewing deck could slightly reduce
//   capacity. Not confirmed, so the official 19,250 stands.
//
// Section names and ranges come from each arena's published seating chart or
// premium-seating pages. "Shoots twice" facts are only stated where the
// official chart or team marks them (Panthers, Islanders, Senators; the
// Canadiens' VIP Space page names the end they defend twice). Where a range
// could not be sourced, the zone is named without numbers.

import type { Venue } from '../venue-types';

export const nhlVenues: Record<string, Venue> = {
  'honda-center': {
    id: 'honda-center',
    name: 'Honda Center',
    city: 'Anaheim',
    state: 'CA',
    capacity: 17174,
    type: 'arena',
    homeTeams: ['Anaheim Ducks'],
    description: 'Honda Center seats 17,174 for Anaheim Ducks games and opened in 1993 as the Arrowhead Pond. The arena is in the middle of Honda Center Encore, a renovation running through 2027. It adds a five-story south addition, a new all-inclusive club on the east end of the Columbia Bank Club Level and opera box suites on the Plaza Level. The bowl has three rings. The Plaza Level 200s sit closest to the ice. The Club Level 300s include All-Event Club Seats in sections 302-309 and 318-325. The Terrace Level 400s are where the lowest prices usually are. TicketScan tracks when tickets for Honda Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Honda Center tickets', 'Anaheim Ducks tickets', 'Honda Center seating chart', 'Honda Center events 2026', 'Anaheim concert tickets', 'Ducks game tickets'],
    faqs: [
      { question: 'Which Honda Center entrances are open during the renovation?', answer: 'The South and West entrances are closed while Honda Center Encore construction continues, and the Ducks Team Store has moved to ARTIC station. Check the Ducks gameday guide before you go for the current entry points.' },
      { question: 'Why do Honda Center section numbers start at 200?', answer: 'The lower bowl is the Plaza Level and is numbered in the 200s. The Club Level uses the 300s and the Terrace Level uses the 400s. Rows start at A and skip I and O.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: 'Plaza Level 200s', tier: 'lower' },
      { name: 'Club Level 300s', tier: 'club' },
      { name: 'All-Event Club Seats 302-309, 318-325', tier: 'club' },
      { name: 'Splitero Club Opera Box & Loge', tier: 'club' },
      { name: 'Terrace Level 400s', tier: 'upper' },
      { name: 'Plaza Level Opera Box Suites', tier: 'suite' },
      { name: 'Annual Suites', tier: 'suite' },
      { name: 'West Side Rental Suites', tier: 'suite' },
    ]
  },

  'keybank-center': {
    id: 'keybank-center',
    name: 'KeyBank Center',
    city: 'Buffalo',
    state: 'NY',
    capacity: 19070,
    type: 'arena',
    homeTeams: ['Buffalo Sabres'],
    description: 'KeyBank Center has been home to the Buffalo Sabres since it opened in 1996, and it seats 19,070 for hockey. A new roof and a 27 by 43 foot center-hung videoboard, roughly double the old one, went in for 2024-25. A new audio system followed for 2025-26. For 2026-27 the old Aud Club on the 100 Level is now the Michelob Ultra Lounge, and the 1970 Club is an all-inclusive space for Signature Seat members. The bowl has three levels. The 200 Level is the KeyBank Club level, and the 300 Level is where Sabres fans find the cheapest tickets. TicketScan tracks KeyBank Center onsales, including presale windows that open before the public onsale.',
    keywords: ['KeyBank Center tickets', 'Buffalo Sabres tickets', 'KeyBank Center seating chart', 'KeyBank Center events 2026', 'Buffalo concert tickets', 'Sabres game tickets'],
    faqs: [
      { question: 'What comes with a Signature Seat at KeyBank Center?', answer: 'From 2026-27, Signature Seat members get all-inclusive access to the 1970 Club, a 400-seat dining club on the 100 level. Signature Seat memberships are sold out for the 2026-27 season.' },
      { question: 'How many seats does KeyBank Center have for Sabres games?', answer: '19,070. The Sabres raised capacity from 18,690 to 19,070 at the start of the 2012-13 season.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: '100 Level', tier: 'lower' },
      { name: 'Signature Seats', tier: 'club' },
      { name: '1970 Club (100 Level)', tier: 'club' },
      { name: 'Michelob Ultra Lounge (100 Level)', tier: 'club' },
      { name: '200 Level KeyBank Club', tier: 'club' },
      { name: '300 Level', tier: 'upper' },
      { name: 'Executive Suites', tier: 'suite' },
    ]
  },

  'scotiabank-saddledome': {
    id: 'scotiabank-saddledome',
    name: 'Scotiabank Saddledome',
    city: 'Calgary',
    state: 'AB',
    capacity: 19289,
    type: 'arena',
    homeTeams: ['Calgary Flames'],
    description: 'Scotiabank Saddledome opened in 1983 and is named for its saddle-shaped roof. The 2026-27 season is the Flames\' 43rd and final one here before they move to Scotia Place in fall 2027. It seats 19,289 for hockey. A 1994-95 renovation added 41 suites and a club, and a new scoreboard with four 30-foot displays and a 40-foot halo ring arrived in 2024. The lower bowl runs from section 101 to 114. The TELUS Club Level covers 115-122. The 200s are the upper sections and the most affordable seats. The Ultra Club sits at section 212. TicketScan tracks when tickets for Saddledome events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Scotiabank Saddledome tickets', 'Calgary Flames tickets', 'Saddledome seating chart', 'Saddledome events 2026', 'Calgary concert tickets', 'Flames final Saddledome season'],
    faqs: [
      { question: 'Is 2026-27 the last Flames season at the Saddledome?', answer: 'Yes. The 2026-27 season is the Flames\' 43rd and final season at Scotiabank Saddledome. The team moves to Scotia Place, which is scheduled to open in fall 2027 for the 2027-28 season.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: 'Lower Bowl 101-114', tier: 'lower' },
      { name: 'TELUS Club Level 115-122', tier: 'club' },
      { name: 'Upper 201-203, 208-216, 221-228', tier: 'upper' },
      { name: 'Ultra Club (Section 212)', tier: 'upper' },
      { name: 'Press Level', tier: 'upper' },
      { name: 'TELUS Club Suites 4101-4140', tier: 'suite' },
      { name: 'Super Suites', tier: 'suite' },
    ]
  },

  'lenovo-center': {
    id: 'lenovo-center',
    name: 'Lenovo Center',
    city: 'Raleigh',
    state: 'NC',
    capacity: 18547,
    type: 'arena',
    homeTeams: ['Carolina Hurricanes'],
    description: 'Lenovo Center opened in 1999 and took its current name, replacing PNC Arena, in 2024. It seats 18,547 for Carolina Hurricanes games after a summer 2026 rebuild. That work replaced every lower-bowl seat, removed some aisles, shrank the press box to add seats, and added event-level Bunker Suites. The arena reopened on September 15, 2026, and the renovation continues through 2028. The Lenovo Legends Club pairs glass seats with an all-inclusive club at the south end. The PNC Victory Club sits at the north end. The View Bar is on the 300 level, near sections 317-319, and that level holds the lowest prices. TicketScan tracks Lenovo Center onsales and presale windows that open before the public onsale.',
    keywords: ['Lenovo Center tickets', 'Carolina Hurricanes tickets', 'Lenovo Center seating chart', 'Lenovo Center events 2026', 'Raleigh concert tickets', 'Hurricanes game tickets', 'PNC Arena tickets'],
    faqs: [
      { question: 'How many seats does Lenovo Center have after the 2026 renovation?', answer: 'The arena publishes only "up to 20,000" and has not released an official hockey figure. Reports put the added seats at about 700, mostly in the lower bowl. TicketScan uses 18,547, the published 2026 figure, until the arena confirms a number. Sections were renumbered in 2026, so check the current map when you buy.' },
      { question: 'What is the Lenovo Legends Club?', answer: 'It pairs glass seats and the rows just behind them at the south end with access to an all-inclusive club.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: 'Lenovo Legends Club Glass Seats', tier: 'floor' },
      { name: '100 Level', tier: 'lower' },
      { name: 'PNC Victory Club (North End)', tier: 'club' },
      { name: 'Loge Boxes', tier: 'club' },
      { name: '300 Level', tier: 'upper' },
      { name: 'The View Bar (300 Level)', tier: 'upper' },
      { name: 'Bunker Suites', tier: 'suite' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'nationwide-arena': {
    id: 'nationwide-arena',
    name: 'Nationwide Arena',
    city: 'Columbus',
    state: 'OH',
    capacity: 18500,
    type: 'arena',
    homeTeams: ['Columbus Blue Jackets'],
    description: 'Nationwide Arena seats 18,500 for Columbus Blue Jackets games. The team played its first game there against Chicago on October 7, 2000. It was the first NHL arena with an attached practice rink, the OhioHealth Ice Haus. The Center Ice Club opened on the Club Level in 2024-25, in Club sections C1-C6 on the north side. The Lexus Lounge sits at center ice behind the penalty box. The Club Level also holds Loge Boxes and Terrace Tables, and Party Towers host groups of 24 to 48. The 200 Level upper bowl is the value play. TicketScan tracks when tickets for Nationwide Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Nationwide Arena tickets', 'Columbus Blue Jackets tickets', 'Nationwide Arena seating chart', 'Nationwide Arena events 2026', 'Columbus concert tickets', 'Blue Jackets game tickets'],
    faqs: [
      { question: 'Where is the Blue Jackets cannon at Nationwide Arena?', answer: 'The replica 1857 Napoleon cannon sits above section 111. It fires when the Blue Jackets take the ice and after every home goal, so expect it to be loud in the sections nearby.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: '100 Level', tier: 'lower' },
      { name: 'Club Level C1-C6', tier: 'club' },
      { name: 'Center Ice Club', tier: 'club' },
      { name: 'Lexus Lounge', tier: 'club' },
      { name: 'Diamond Cellar Club', tier: 'club' },
      { name: 'Loge Boxes & Terrace Tables', tier: 'club' },
      { name: '200 Level', tier: 'upper' },
      { name: 'Party Towers', tier: 'suite' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'rogers-place': {
    id: 'rogers-place',
    name: 'Rogers Place',
    city: 'Edmonton',
    state: 'AB',
    capacity: 18500,
    type: 'arena',
    homeTeams: ['Edmonton Oilers'],
    description: 'Rogers Place opened in downtown Edmonton on September 8, 2016, and seats 18,500 for Oilers games. It has what the arena calls the largest true high-definition center-hung scoreboard in the NHL. Fans enter through Ford Hall, the atrium that houses the Molson Hockey House. The premium inventory is large: 3,100 club seats, 57 CIBC Suites directly above the lower bowl, 24 Theatre Boxes, and the three-tier PCL Loge with its Loge Ledge seats and Loge Tables. The CIBC Chairman\'s Club adds lower-bowl seats with a private club. The 200 Level upper bowl holds the most affordable Oilers tickets. TicketScan tracks when tickets for Rogers Place events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Rogers Place tickets', 'Edmonton Oilers tickets', 'Rogers Place seating chart', 'Rogers Place events 2026', 'Edmonton concert tickets', 'Oilers game tickets'],
    faqs: [
      { question: 'How many seats does Rogers Place have for Oilers games?', answer: 'Rogers Place publishes 18,500 seats for NHL games, and TicketScan uses that figure. Wikipedia lists 18,347. The difference is between the arena\'s own number and a count published elsewhere.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: '100 Level', tier: 'lower' },
      { name: 'CIBC Chairman\'s Club', tier: 'club' },
      { name: 'PCL Loge Ledge', tier: 'club' },
      { name: 'PCL Loge Tables', tier: 'club' },
      { name: 'Sportsnet Club', tier: 'club' },
      { name: '200 Level', tier: 'upper' },
      { name: 'Sky Lounge', tier: 'upper' },
      { name: 'CIBC Suites', tier: 'suite' },
      { name: 'Theatre Boxes', tier: 'suite' },
    ]
  },

  'amerant-bank-arena': {
    id: 'amerant-bank-arena',
    name: 'Amerant Bank Arena',
    city: 'Sunrise',
    state: 'FL',
    capacity: 19250,
    type: 'arena',
    homeTeams: ['Florida Panthers'],
    description: 'Amerant Bank Arena opened in 1998 and seats up to 19,250 for Florida Panthers games. For 2025-26 it got a 360-degree center-hung scoreboard: four 38 by 31 foot screens, 180 percent larger than the old board. The 100 Level runs from section 101 to 134, with the Panthers bench in front of 101-102. A ring of suites sits above it, then the Dialpad Club Level with its club boxes, then the 300 Level (sections 301-334), where the best-value seats are. Premium options include glass seats, the ice-level House with player-tunnel access, the center-ice Amerant Vault and the Corona Beach House lounge. TicketScan tracks Amerant Bank Arena onsales and presale windows that open before the public onsale.',
    keywords: ['Amerant Bank Arena tickets', 'Florida Panthers tickets', 'Amerant Bank Arena seating chart', 'Amerant Bank Arena events 2026', 'Sunrise FL concert tickets', 'Panthers game tickets'],
    faqs: [
      { question: 'Which end do the Panthers shoot twice at Amerant Bank Arena?', answer: 'The arena\'s hockey seating chart marks the end in front of sections 124-129 as where the Panthers shoot twice. Sections at that end, in both the 100 and 300 levels, see the most Panthers offense.' },
    ],
    sections: [
      { name: 'Glass Seats', tier: 'floor' },
      { name: 'The House (Ice Level)', tier: 'floor' },
      { name: '100 Level 101-134', tier: 'lower' },
      { name: 'Panthers Shoot-Twice End 124-129', tier: 'lower' },
      { name: 'Amerant Vault', tier: 'club' },
      { name: 'Dialpad Club Level', tier: 'club' },
      { name: 'Corona Beach House', tier: 'club' },
      { name: '300 Level 301-334', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'grand-casino-arena': {
    id: 'grand-casino-arena',
    name: 'Grand Casino Arena',
    city: 'St. Paul',
    state: 'MN',
    capacity: 17954,
    type: 'arena',
    homeTeams: ['Minnesota Wild'],
    description: 'Grand Casino Arena, called Xcel Energy Center until September 2025, opened in 2000 and seats 17,954 for Minnesota Wild games. Jerseys from every Minnesota high school hang on its concourse walls. Sections are numbered clockwise: the 100 Level runs 101-126, the RBC Wealth Management Club Level runs C1-C40, and the 200 Level runs 201-230. The On The Glass Club takes the first row of the 100 level. The Bud Light Top Shelf Lounge sits at the 200-level end behind sections 211-212. Loge Boxes and the Old National Bank Suite Level complete the premium options. The 200 Level is the best value. TicketScan tracks when tickets for Grand Casino Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Grand Casino Arena tickets', 'Minnesota Wild tickets', 'Grand Casino Arena seating chart', 'Xcel Energy Center tickets', 'Grand Casino Arena events 2026', 'St. Paul concert tickets'],
    faqs: [
      { question: 'Is Grand Casino Arena the same as Xcel Energy Center?', answer: 'Yes. The Wild\'s arena in St. Paul was renamed Grand Casino Arena on September 3, 2025, under a 14-year naming deal with the Mille Lacs Band of Ojibwe. The building and its section numbers are unchanged.' },
    ],
    sections: [
      { name: 'Event Floor (concerts)', tier: 'floor' },
      { name: 'On The Glass Club', tier: 'floor' },
      { name: '100 Level 101-126', tier: 'lower' },
      { name: 'RBC Wealth Management Club Level C1-C40', tier: 'club' },
      { name: 'Loge Boxes', tier: 'club' },
      { name: '200 Level 201-230', tier: 'upper' },
      { name: 'Bud Light Top Shelf Lounge 211-212', tier: 'upper' },
      { name: 'Old National Bank Suite Level', tier: 'suite' },
    ]
  },

  'bell-centre': {
    id: 'bell-centre',
    name: 'Bell Centre',
    city: 'Montreal',
    state: 'QC',
    capacity: 20962,
    type: 'arena',
    homeTeams: ['Montreal Canadiens'],
    description: 'The Bell Centre (Centre Bell) opened in 1996 as the Molson Centre. At 20,962 seats for hockey, it is one of the largest arenas in the NHL. It has 120 luxury boxes on two levels. A 42 by 36 foot, 360-degree UHD scoreboard went up for 2024-25. The lower 100s are known as "the reds" for their red seats. The 200s are the Club Desjardins, set between the two rings of boxes, with larger seats and free food and non-alcoholic drinks. The upper 300s hold the most affordable Canadiens tickets, with the Ford Zone and Family Zone at the ends. The VIP Space overlooks the end where the Canadiens defend twice. TicketScan tracks Bell Centre onsales and presale windows that open before the public onsale.',
    keywords: ['Bell Centre tickets', 'Centre Bell tickets', 'Montreal Canadiens tickets', 'Bell Centre seating chart', 'Bell Centre events 2026', 'Montreal concert tickets', 'Canadiens game tickets'],
    faqs: [
      { question: 'Can you see the scoreboard from sections 318-320 at the Bell Centre?', answer: 'The press gondola blocks the main scoreboard from sections 318, 319 and 320. Those seats have their own scoreboards on the back of the gondola.' },
      { question: 'How many seats does the Bell Centre have for Canadiens games?', answer: 'The Bell Centre says it seats "over 21,000" for Canadiens games. The more precise figure since 2025 is 20,962, which TicketScan uses, down from 21,105 in 2021-25.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: '100 Level (The Reds)', tier: 'lower' },
      { name: 'Club Desjardins 200 Level', tier: 'club' },
      { name: 'VIP Space', tier: 'club' },
      { name: '300 Level', tier: 'upper' },
      { name: '300 Level 318-320 (Behind Press Gondola)', tier: 'upper' },
      { name: 'Ford Zone', tier: 'upper' },
      { name: 'Family Zone', tier: 'upper' },
      { name: 'Luxury Boxes', tier: 'suite' },
    ]
  },

  'bridgestone-arena': {
    id: 'bridgestone-arena',
    name: 'Bridgestone Arena',
    city: 'Nashville',
    state: 'TN',
    capacity: 17159,
    type: 'arena',
    homeTeams: ['Nashville Predators'],
    description: 'Bridgestone Arena sits on Broadway in downtown Nashville, opened in 1996, and seats 17,159 for Predators games. It has only one suite level, so the upper deck sits closer to the ice than in most NHL arenas. The 100 Level runs 101-120. The 200s (201-224) are the Gary Force Acura Club Level. The Bud Light Upper Level runs 301-333 and holds the most affordable seats. Premium spaces include the event-level Lexus Lounge, the 80-member 501 Club, the Flight Deck, Opera and Loge Boxes, and the Corner Pub bench seats. The Broadway 2030 renovation runs through 2030. TicketScan tracks when tickets for Bridgestone Arena events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Bridgestone Arena tickets', 'Nashville Predators tickets', 'Bridgestone Arena seating chart', 'Bridgestone Arena events 2026', 'Nashville concert tickets', 'Predators game tickets'],
    faqs: [
      { question: 'What is changing at Bridgestone Arena under Broadway 2030?', answer: 'The first phase adds south-entrance escalators to all four public levels and redoes the Club Level and Upper Level concourses. A new ice plant follows in summer 2027 and a full new ice floor in 2028. Major work continues each summer through 2029, and the project finishes in 2030.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: '100 Level 101-120', tier: 'lower' },
      { name: 'Corner Pub Bench Seats', tier: 'lower' },
      { name: 'Gary Force Acura Club Level 201-224', tier: 'club' },
      { name: 'Lexus Lounge (Event Level)', tier: 'club' },
      { name: '501 Club', tier: 'club' },
      { name: 'Flight Deck', tier: 'club' },
      { name: 'Bud Light Upper Level 301-333', tier: 'upper' },
      { name: 'Opera & Loge Boxes', tier: 'suite' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'ubs-arena': {
    id: 'ubs-arena',
    name: 'UBS Arena',
    city: 'Elmont',
    state: 'NY',
    capacity: 17255,
    type: 'arena',
    homeTeams: ['New York Islanders'],
    description: 'UBS Arena opened in November 2021 at Belmont Park, and seats 17,255 for New York Islanders games. Fans call it "The Stable". The Oracle Main Concourse wraps the lower bowl, sections 101-121, with suites MS 1-18 ringing it and the JetBlue Mosaic Lounge at center ice. The DIME Club sits behind sections 113-116. Upstairs, the 200s (201-231) and 300s (301-326 and 329) are where the best-value tickets sit. The Islanders shoot twice toward the east end, in front of sections 108-110. The opposite end, 119-121, is the stage end for concerts. Belmont Hall and two terraces round out the concourses. TicketScan tracks UBS Arena onsales and presale windows that open before the public onsale.',
    keywords: ['UBS Arena tickets', 'New York Islanders tickets', 'UBS Arena seating chart', 'UBS Arena events 2026', 'Long Island concert tickets', 'Islanders game tickets'],
    faqs: [
      { question: 'Which end do the Islanders shoot twice at UBS Arena?', answer: 'The east end, in front of sections 108-110. The arena\'s own concourse maps mark it "NYI Shoot 2X." The opposite end, sections 119-121, is the stage end for concerts.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: 'Lower Bowl 101-121', tier: 'lower' },
      { name: 'Islanders Shoot-Twice End 108-110', tier: 'lower' },
      { name: 'DIME Club (Behind 113-116)', tier: 'club' },
      { name: 'JetBlue Mosaic Lounge', tier: 'club' },
      { name: 'Hyundai Club', tier: 'club' },
      { name: '200 Level 201-231', tier: 'upper' },
      { name: '300 Level 301-326, 329', tier: 'upper' },
      { name: 'Main Concourse Suites MS 1-18', tier: 'suite' },
    ]
  },

  'canadian-tire-centre': {
    id: 'canadian-tire-centre',
    name: 'Canadian Tire Centre',
    city: 'Ottawa',
    state: 'ON',
    capacity: 17010,
    type: 'arena',
    homeTeams: ['Ottawa Senators'],
    description: 'Canadian Tire Centre opened in Kanata in 1996 as the Palladium and seats 17,010 for Ottawa Senators games. New for 2026-27 is a 350-person Fan Deck, built in the upper rows of the 300 level between sections 328 and 301. It has a bar, food and standing-room tickets, and any ticket holder can use it. The 100 Level runs 101-120, with Club Seats at center ice behind the benches and penalty boxes and Club Bell boxes near 110-112. The 200 Level runs 201-228 and the 300 Level 301-328, where the cheapest seats are. The Milk Zone covers 313-317 at the end the Senators shoot twice. TicketScan tracks Canadian Tire Centre onsales and presale windows.',
    keywords: ['Canadian Tire Centre tickets', 'Ottawa Senators tickets', 'Canadian Tire Centre seating chart', 'Canadian Tire Centre events 2026', 'Ottawa concert tickets', 'Senators game tickets'],
    faqs: [
      { question: 'Which end do the Senators shoot twice at Canadian Tire Centre?', answer: 'The west end: sections 109-113, 212-218 and the Milk Zone in 313-317. The arena map marks it "Shoot twice." The Senators shoot once toward the 101/201/301 end.' },
      { question: 'Why did Canadian Tire Centre capacity drop?', answer: 'New, slightly larger 100-level seats went in during 2025, then the 2026 Fan Deck replaced upper rows of the 300 level. Together they brought the seated hockey capacity down to 17,010.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: '100 Level 101-120', tier: 'lower' },
      { name: 'Club Seats (Center Ice)', tier: 'club' },
      { name: 'Club Bell (Near 110-112)', tier: 'club' },
      { name: '200 Level 201-228', tier: 'upper' },
      { name: '300 Level 301-328', tier: 'upper' },
      { name: 'Milk Zone 313-317', tier: 'upper' },
      { name: 'Fan Deck (300 Level, 328-301)', tier: 'upper' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'ppg-paints-arena': {
    id: 'ppg-paints-arena',
    name: 'PPG Paints Arena',
    city: 'Pittsburgh',
    state: 'PA',
    capacity: 18187,
    type: 'arena',
    homeTeams: ['Pittsburgh Penguins'],
    description: 'PPG Paints Arena opened in 2010 as Consol Energy Center and seats 18,187 for Pittsburgh Penguins games. It has two 360-degree LED rings around the bowl, seats up to 24 inches wide, and LEED Gold certification. The 1,950 club seats sit off the lower concourse, no more than 23 rows from the ice. The F.N.B. Club and Michelob ULTRA Club take sections 101-103 and 111-113, and the NJM Club at section 109 has an ice-level lounge. Ice-Level Suite 66 is on the glass beside the Penguins bench. The Double Attack Loge sits at the end the Penguins attack twice. The 200 Level upper bowl is the value play. TicketScan tracks PPG Paints Arena onsales and presale windows that open before the public onsale.',
    keywords: ['PPG Paints Arena tickets', 'Pittsburgh Penguins tickets', 'PPG Paints Arena seating chart', 'PPG Paints Arena events 2026', 'Pittsburgh concert tickets', 'Penguins game tickets'],
    faqs: [
      { question: 'Which end do the Penguins attack twice at PPG Paints Arena?', answer: 'The Penguins call it the "double attack" end. The 140-seat Double Attack Loge presented by Lexus and the media deck sit there, and section 211 is behind the net at that end. The PPG Party Suites are at the single-attack end.' },
      { question: 'Is PPG Paints Arena capacity 18,387 or 18,187?', answer: 'It is 18,187 for hockey, the figure the arena publishes today. It was 18,387 before a 2023 reduction, and some older seating sites still show that number.' },
    ],
    sections: [
      { name: '100 Level', tier: 'lower' },
      { name: 'F.N.B. Club & Michelob ULTRA Club 101-103, 111-113', tier: 'club' },
      { name: 'NJM Club (Section 109)', tier: 'club' },
      { name: 'Double Attack Loge', tier: 'club' },
      { name: 'Club Loge', tier: 'club' },
      { name: '200 Level', tier: 'upper' },
      { name: 'BetRivers Ledge', tier: 'upper' },
      { name: 'Ice-Level Suite 66', tier: 'suite' },
      { name: 'PPG Party Suites', tier: 'suite' },
      { name: 'Executive Suites', tier: 'suite' },
    ]
  },

  'sap-center': {
    id: 'sap-center',
    name: 'SAP Center',
    city: 'San Jose',
    state: 'CA',
    capacity: 17435,
    type: 'arena',
    homeTeams: ['San Jose Sharks'],
    description: 'SAP Center at San Jose opened in September 1993 and seats 17,435 for San Jose Sharks games. That count has held since the 2023 premium seating work, which added the 10,000-square-foot Penthouse Lounge and its theater boxes for four or six. A Daktronics center-hung board installed in 2022 doubled the old display area. A further $425 million in upgrades was announced in August 2025. Seating is a two-level bowl: the 100 Level lower bowl and the 200 Level upper bowl, where Sharks tickets are cheapest. Premium options include the Legends Level lounges, the Rinkside Room, the NetApp Celly Lounge and suites on the Premium Concourse and Penthouse levels. TicketScan tracks SAP Center onsales, including presale windows.',
    keywords: ['SAP Center tickets', 'San Jose Sharks tickets', 'SAP Center seating chart', 'SAP Center events 2026', 'San Jose concert tickets', 'Sharks game tickets'],
    faqs: [
      { question: 'What is the Penthouse Lounge at SAP Center?', answer: 'A 10,000-square-foot premium space that opened in April 2023. It has theater boxes for four or six people, plus suites on the Penthouse level. Its Plaza and Terraces look out on the Shark Head.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: '100 Level', tier: 'lower' },
      { name: 'Rinkside Room', tier: 'club' },
      { name: 'Legends Level (The Cove, Captain\'s Lounge, First Line Lounge)', tier: 'club' },
      { name: 'NetApp Celly Lounge', tier: 'club' },
      { name: '200 Level', tier: 'upper' },
      { name: 'Penthouse Lounge Theater Boxes', tier: 'suite' },
      { name: 'Premium Concourse Suites', tier: 'suite' },
      { name: 'Penthouse Suites', tier: 'suite' },
    ]
  },

  'enterprise-center': {
    id: 'enterprise-center',
    name: 'Enterprise Center',
    city: 'St. Louis',
    state: 'MO',
    capacity: 18096,
    type: 'arena',
    homeTeams: ['St. Louis Blues'],
    description: 'Enterprise Center opened in downtown St. Louis in 1994 and seats 18,096 for Blues games. A three-phase renovation from 2017 to 2019 brought new lighting, sound, a new scoreboard and ice plant, theater boxes at both ends, and new lower-bowl seats. The arena hosted the 2020 NHL All-Star Game. The bowl has two levels and no 200 seating level. The Plaza Level runs 101-126, with the sides in 101-105 and 114-118. The Mezzanine Level runs 301-334, with its sides in 301-305 and 318-322. Mezzanine end sections are the cheapest way into a Blues game. TicketScan tracks when tickets for Enterprise Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Enterprise Center tickets', 'St. Louis Blues tickets', 'Enterprise Center seating chart', 'Enterprise Center events 2026', 'St. Louis concert tickets', 'Blues game tickets'],
    faqs: [
      { question: 'Why are there no 200 sections at Enterprise Center?', answer: 'The seating bowl has two levels, the Plaza Level (101-126) and the Mezzanine Level (301-334), and the arena\'s seating guide lists no 200 level. Plaza rows run A-W and then double letters; Mezzanine rows run A-R.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: 'Plaza Sides 101-105, 114-118', tier: 'lower' },
      { name: 'Plaza Ends 106-113, 119-126', tier: 'lower' },
      { name: 'Scott Credit Union Rinkside Club', tier: 'club' },
      { name: 'Bommarito Automotive Group Lounge', tier: 'club' },
      { name: 'Jameson Club at Clark Avenue', tier: 'club' },
      { name: 'First Community Terrace Seats', tier: 'club' },
      { name: 'Mezzanine Sides 301-305, 318-322', tier: 'upper' },
      { name: 'Mezzanine Ends 306-317, 323-334', tier: 'upper' },
      { name: 'Theater Boxes', tier: 'suite' },
      { name: 'Studio Suites at Bommarito Lounge', tier: 'suite' },
    ]
  },

  'benchmark-international-arena': {
    id: 'benchmark-international-arena',
    name: 'Benchmark International Arena',
    city: 'Tampa',
    state: 'FL',
    capacity: 19092,
    type: 'arena',
    homeTeams: ['Tampa Bay Lightning'],
    description: 'Benchmark International Arena, known as Amalie Arena until August 2025, opened in 1996 and seats 19,092 for Tampa Bay Lightning games. The arena is known for its Tesla coils, which throw lightning bolts over the ice, and for a five-manual, 105-rank digital pipe organ. It also has the 11,000-square-foot Mich Ultra Sky Deck. A $35 million renovation was completed in 2012. Seating runs over the 100, 200 and 300 levels. The premium tier is now the Benchmark International Club Level, and The Mark is its signature all-inclusive space. The 300 Level has the most affordable Lightning tickets. TicketScan tracks Benchmark International Arena onsales and presale windows that open before the public onsale.',
    keywords: ['Benchmark International Arena tickets', 'Tampa Bay Lightning tickets', 'Benchmark International Arena seating chart', 'Amalie Arena tickets', 'Benchmark International Arena events 2026', 'Tampa concert tickets'],
    faqs: [
      { question: 'Is Benchmark International Arena the same as Amalie Arena?', answer: 'Yes. The Lightning\'s arena in downtown Tampa was renamed Benchmark International Arena on August 13, 2025, ending the Amalie Arena name (2014-2025). The premium club level was renamed the Benchmark International Club Level.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: '100 Level', tier: 'lower' },
      { name: 'Benchmark International Club Level', tier: 'club' },
      { name: 'The Mark', tier: 'club' },
      { name: 'UPEXI Loge', tier: 'club' },
      { name: '300 Level', tier: 'upper' },
      { name: 'Executive Suites', tier: 'suite' },
      { name: 'Super Suites', tier: 'suite' },
      { name: 'RSM Lofts & Heritage Insurance Lofts', tier: 'suite' },
    ]
  },

  'rogers-arena': {
    id: 'rogers-arena',
    name: 'Rogers Arena',
    city: 'Vancouver',
    state: 'BC',
    capacity: 18910,
    type: 'arena',
    homeTeams: ['Vancouver Canucks'],
    description: 'Rogers Arena opened in 1995 as General Motors Place and seats 18,910 for Vancouver Canucks games. Every seat in the lower and upper bowls was replaced for 2025-26 with custom black seats that have cupholders. The same project added more than 725 new TVs and built the Molson Hockey House near section 119. It also turned the old Club 500 into the Madrí Excepcional Lounge. A new center-hung scoreboard arrived in 2023-24. Premium options include the RBC Signature Level 200, the Loge Club, the Konica Minolta Champions Club, the WELL Health President\'s Club and Encore Suites. The upper bowl is where Canucks fans find the lowest prices. TicketScan tracks Rogers Arena onsales, including presale windows.',
    keywords: ['Rogers Arena tickets', 'Vancouver Canucks tickets', 'Rogers Arena seating chart', 'Rogers Arena events 2026', 'Vancouver concert tickets', 'Canucks game tickets'],
    faqs: [
      { question: 'Is Rogers Arena the old GM Place?', answer: 'Yes. The arena opened on September 21, 1995, as General Motors Place. The building is the same; the Rogers naming deal now runs through the 2032-33 season.' },
    ],
    sections: [
      { name: 'Floor (concerts)', tier: 'floor' },
      { name: 'Lower Bowl', tier: 'lower' },
      { name: 'RBC Signature Level 200', tier: 'club' },
      { name: 'Loge Club', tier: 'club' },
      { name: 'Konica Minolta Champions Club', tier: 'club' },
      { name: 'WELL Health President\'s Club', tier: 'club' },
      { name: 'Madrí Excepcional Lounge', tier: 'club' },
      { name: 'Upper Bowl', tier: 'upper' },
      { name: 'Encore Suites', tier: 'suite' },
    ]
  },

  'canada-life-centre': {
    id: 'canada-life-centre',
    name: 'Canada Life Centre',
    city: 'Winnipeg',
    state: 'MB',
    capacity: 15225,
    type: 'arena',
    homeTeams: ['Winnipeg Jets'],
    description: 'Canada Life Centre opened in downtown Winnipeg in 2004 as the MTS Centre. At 15,225 seats it is the smallest arena in the NHL. It has a custom center-hung scoreboard with four large screens and a 920-foot power ring display. Clear plexiglass replaced the metal railings in 2015 to remove obstructed views. The Jets price the building in 100, 200 and 300 levels, each split into blue line and corner or end zones for the attack and defend ends. Premium options include On the Glass seats in row 1, Loge seats in row A and the Ticketmaster Lounge. TicketScan tracks Canada Life Centre onsales and presale windows that open before the public onsale.',
    keywords: ['Canada Life Centre tickets', 'Winnipeg Jets tickets', 'Canada Life Centre seating chart', 'Canada Life Centre events 2026', 'Winnipeg concert tickets', 'Jets game tickets'],
    faqs: [
      { question: 'Where are the glass and loge seats at Canada Life Centre?', answer: 'The Jets sell row 1 of the lower bowl as On the Glass seats. Row A loge seats are priced separately as Loge Sides and Loge Corners/Ends. The Jets pricing map also splits the blue line and the corners/ends into Attack and Defend zones, so the two ends of the rink are priced differently.' },
    ],
    sections: [
      { name: 'On the Glass (Row 1)', tier: 'floor' },
      { name: '100 Level Blueline Attack & Defend', tier: 'lower' },
      { name: '100 Level Corners & Ends', tier: 'lower' },
      { name: 'Ticketmaster Lounge', tier: 'club' },
      { name: 'Loge Sides (Row A)', tier: 'club' },
      { name: 'Loge Corners & Ends (Row A)', tier: 'club' },
      { name: '200 Level', tier: 'upper' },
      { name: '300 Level', tier: 'upper' },
      { name: 'Scotiabank Premium Suites', tier: 'suite' },
    ]
  },
};
