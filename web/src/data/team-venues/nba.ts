// NBA arenas for the nine teams whose pages had no venue guide (2026-27 homes).
//
// Capacity: the arena's own site where it publishes an exact basketball
// figure (Paycom Center's Fast Facts page: 18,203; Intuit Dome's About page:
// 18,000). Most of these venues' own sites publish no number at all, so the
// rest come from the league's own list, nba.com/news/all-30-nba-arenas-by-team
// (Aug 2024), not from Wikipedia infoboxes. Moda Center's 19,411 is consistent
// with the City of Portland's (the owner's) "over 19,000".
//
// Delta Center is the judgment call. It is mid-way through a three-summer
// dual-sport rebuild. The venue's own site still publishes only the
// finished-project targets ("nearly 19,000" basketball, "approximately 17,000"
// hockey). The figure used here, 17,867, is the official Jazz capacity for
// 2026-27 as reported by the Deseret News (2026-09-28) and Yahoo Sports
// (2026-09-26) after SEG completed phase two. Basketball is used for
// `capacity` because Delta Center was built as a basketball arena and the
// basketball configuration is its largest. The Mammoth's 2026-27 full-view
// hockey figure is 14,111 (Deseret News, 2026-09-25), and it excludes the
// obstructed-view seats still in the building. Both numbers, and why they
// differ from the venue's own site, are explained in the entry's FAQ.
//
// Section ranges come from published seating charts (the venue's own chart
// pages, cross-checked against rateyourseats.com section listings). Where the
// listings disagree, as they do for Spectrum Center's 100 level and Delta
// Center's rebuilt bowl, the zone is named without numbers rather than
// guessed. Premium club names come from each venue's own premium or A-Z page.

import type { Venue } from '../venue-types';

export const nbaVenues: Record<string, Venue> = {
  'spectrum-center': {
    id: 'spectrum-center',
    name: 'Spectrum Center',
    city: 'Charlotte',
    state: 'NC',
    capacity: 19077,
    type: 'arena',
    homeTeams: ['Charlotte Hornets'],
    description: 'Spectrum Center seats 19,077 for Charlotte Hornets games on East Trade Street in uptown Charlotte and opened in 2005. The Honeywell Event Level is the ground-level concourse and holds three premium spaces: the HondaJet Courtside Club, the Bank of America Hardwood Club and the Inner Circle Club. The 100 level main bowl sits above the court, and the Novant Health Suite Level carries standard, mini and party suites plus the Super Suite. The upper level runs sections 201-233, and sections 208, 209, 225 and 226 are the closest to midcourt up there. Those upper sideline seats are where the value sits. TicketScan tracks when tickets for Spectrum Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Spectrum Center tickets', 'Charlotte Hornets tickets', 'Spectrum Center seating chart', 'Spectrum Center events 2026', 'Charlotte concerts', 'Hornets courtside seats'],
    faqs: [
      { question: 'What are the best-value seats at Spectrum Center for a Hornets game?', answer: 'The upper level, sections 201-233. Sections 208, 209, 225 and 226 sit closest to midcourt, so they give the best sideline view at upper-level prices.' },
    ],
    sections: [
      { name: 'Courtside', tier: 'floor' },
      { name: 'HondaJet Courtside Club', tier: 'club' },
      { name: 'Bank of America Hardwood Club', tier: 'club' },
      { name: 'Inner Circle Club', tier: 'club' },
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level Corner & Baseline', tier: 'lower' },
      { name: 'Upper Level Midcourt 208-209 & 225-226', tier: 'upper' },
      { name: 'Upper Level 201-233', tier: 'upper' },
      { name: 'Theater Box', tier: 'suite' },
      { name: 'Novant Health Suite Level', tier: 'suite' },
    ]
  },

  'rocket-arena': {
    id: 'rocket-arena',
    name: 'Rocket Arena',
    city: 'Cleveland',
    state: 'OH',
    capacity: 19432,
    type: 'arena',
    homeTeams: ['Cleveland Cavaliers'],
    description: 'Rocket Arena seats 19,432 for Cleveland Cavaliers games and also hosts the AHL Cleveland Monsters. It opened in 1994 as Gund Arena, was Quicken Loans Arena and then Rocket Mortgage FieldHouse after a two-year, $185 million transformation that added a glass-front atrium in 2019, and took its current name in 2025. The courtside level holds the Comcast Business Chairman\'s Club and the NJM Court Club. The lower bowl runs sections 101-126, with club seats in 106-109 and 119-122. The Huntington Legends Club sits on the north end and the Litehouse Champions Club looks in from the south end. The 200 level upper bowl holds the least expensive seats. TicketScan tracks Rocket Arena onsales and presale windows.',
    keywords: ['Rocket Arena tickets', 'Cleveland Cavaliers tickets', 'Rocket Arena seating chart', 'Rocket Mortgage FieldHouse tickets', 'Rocket Arena events 2026', 'Cleveland concerts'],
    faqs: [
      { question: 'Is Rocket Arena the same building as Rocket Mortgage FieldHouse?', answer: 'Yes. The arena at 1 Center Court was Gund Arena from 1994, then Quicken Loans Arena, then Rocket Mortgage FieldHouse from 2019, and was renamed Rocket Arena in 2025. Older tickets and maps may use any of those names.' },
    ],
    sections: [
      { name: 'Floor / Courtside', tier: 'floor' },
      { name: 'Comcast Business Chairman\'s Club', tier: 'club' },
      { name: 'NJM Court Club', tier: 'club' },
      { name: 'Lower Bowl 101-126', tier: 'lower' },
      { name: 'Club Seats 106-109 & 119-122', tier: 'club' },
      { name: 'Huntington Legends Club (north end)', tier: 'club' },
      { name: 'Litehouse Champions Club (south end)', tier: 'club' },
      { name: 'Caesars Rewards Club (northwest corner)', tier: 'club' },
      { name: 'Upper Bowl 200 Level', tier: 'upper' },
      { name: 'Lexus Signature Lounge', tier: 'suite' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'gainbridge-fieldhouse': {
    id: 'gainbridge-fieldhouse',
    name: 'Gainbridge Fieldhouse',
    city: 'Indianapolis',
    state: 'IN',
    capacity: 17923,
    type: 'arena',
    homeTeams: ['Indiana Pacers'],
    description: 'Gainbridge Fieldhouse seats 17,923 for Indiana Pacers games in downtown Indianapolis and opened in 1999. Its Fieldhouse of the Future renovation raised the court to street level, replaced the original green lower-bowl seats with dark gray ones, and added the Hardwood Club and the \'67 Club. Rows 1-5 around the court belong to the CareSource Courtside Club. The lower bowl runs sections 1-20, the mezzanine sits in the 100s on the Krieg DeVault Level, with the Lexus Loft at its south end, and the balcony runs sections 201-232. The balcony holds the cheapest tickets. TicketScan tracks when tickets for Gainbridge Fieldhouse events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Gainbridge Fieldhouse tickets', 'Indiana Pacers tickets', 'Gainbridge Fieldhouse seating chart', 'Gainbridge Fieldhouse events 2026', 'Indianapolis concerts', 'Pacers courtside seats'],
    faqs: [
      { question: 'How are sections numbered at Gainbridge Fieldhouse?', answer: 'The lower bowl uses single and double digits (sections 1-20), the mezzanine uses the 100s and the balcony uses 201-232. A low section number means you are closer to the court, not farther away.' },
    ],
    sections: [
      { name: 'CareSource Courtside Club (rows 1-5)', tier: 'floor' },
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl 1-20', tier: 'lower' },
      { name: 'Hardwood Club', tier: 'club' },
      { name: '\'67 Club', tier: 'club' },
      { name: 'Mezzanine 100s (Krieg DeVault Level)', tier: 'club' },
      { name: 'Lexus Loft Loge & Theater Boxes', tier: 'suite' },
      { name: 'Balcony 201-232', tier: 'upper' },
      { name: 'Terrace Seats', tier: 'upper' },
      { name: 'East & West Verandas (KeyBank Suite Level)', tier: 'suite' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'intuit-dome': {
    id: 'intuit-dome',
    name: 'Intuit Dome',
    city: 'Inglewood',
    state: 'CA',
    capacity: 18000,
    type: 'arena',
    homeTeams: ['LA Clippers'],
    description: 'Intuit Dome seats 18,000 for LA Clippers games in Inglewood and opened for the 2024-25 season, with a halo scoreboard ringing the bowl. Its signature is The Wall, a 51-row, roughly 4,500-seat home-fan section behind the basket the opponent attacks in the second half, with Wall sections 14-20 below and Terrace Wall 13-21 above. Sections are labeled by level rather than by 100s and 200s: Courtside, Floor, Main, Club and Terrace. Courtside Cabanas pair baseline courtside seats with a private space beneath the bowl. Backstage Bungalows put main-level sideline seats in front of a private suite. The Terrace sections hold the cheapest tickets. TicketScan tracks when tickets for Intuit Dome events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Intuit Dome tickets', 'LA Clippers tickets', 'Intuit Dome seating chart', 'Intuit Dome The Wall', 'Intuit Dome events 2026', 'Inglewood concerts'],
    faqs: [
      { question: 'Can anyone buy tickets in The Wall at Intuit Dome?', answer: 'The Wall is the Clippers home-fan section, about 4,500 seats over 51 rows behind one basket, and it is meant for Clippers fans only. Resale and transfer rules there are stricter than elsewhere in the building, so check the listing terms before you buy.' },
      { question: 'Why don\'t Intuit Dome sections use 100 and 200 numbers?', answer: 'Sections are labeled by level (Courtside, Floor, Main, Club, Terrace, Wall) followed by a number, and the number roughly marks the same spot around the bowl on every level. Check the level name on the ticket as well as the number.' },
    ],
    sections: [
      { name: 'Courtside', tier: 'floor' },
      { name: 'Floor Sections', tier: 'floor' },
      { name: 'Courtside Cabanas', tier: 'suite' },
      { name: 'Main Level Sideline', tier: 'lower' },
      { name: 'Main Level Baseline & Corner', tier: 'lower' },
      { name: 'The Wall 14-20', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Terrace Level', tier: 'upper' },
      { name: 'Terrace Wall 13-21', tier: 'upper' },
      { name: 'Backstage Bungalows', tier: 'suite' },
      { name: 'Neat Suites', tier: 'suite' },
      { name: 'Teradata Halo Lofts', tier: 'suite' },
    ]
  },

  'fedexforum': {
    id: 'fedexforum',
    name: 'FedExForum',
    city: 'Memphis',
    state: 'TN',
    capacity: 17794,
    type: 'arena',
    homeTeams: ['Memphis Grizzlies'],
    description: 'FedExForum seats 17,794 for Memphis Grizzlies games just off Beale Street and opened for the 2004-05 season. The venue splits seating into the Event Level, Courtside Suite Level, Plaza Level, Pinnacle Level and Big River Steel Terrace Level. The HHM Courtside Club sits near the Grizzlies tunnel, and Sissy\'s Floor Seat Lounge serves floor-seat holders. The Plaza Level lower bowl runs sections 101-118, the Pinnacle Level holds P1-P14, and the Big River Steel Terrace upper level runs sections 201-232, where the least expensive seats are. A center-hung videoboard 145.5 feet in diameter hangs over the court. TicketScan tracks when tickets for FedExForum events go on sale, including presale windows that open before the public onsale.',
    keywords: ['FedExForum tickets', 'Memphis Grizzlies tickets', 'FedExForum seating chart', 'FedExForum events 2026', 'Memphis concerts', 'Grizzlies courtside seats'],
    faqs: [
      { question: 'Is FedExForum being renovated?', answer: 'Yes, in phases. The Memphis City Council approved $80 million for initial work in March 2025 as part of a renovation projected to reach about $550 million over the coming years. The Grizzlies are still playing there while the work goes on, so check the event map for any temporarily closed areas.' },
    ],
    sections: [
      { name: 'Floor Seats', tier: 'floor' },
      { name: 'HHM Courtside Club', tier: 'club' },
      { name: 'Courtside Suite Level', tier: 'suite' },
      { name: 'Plaza Level Sideline', tier: 'lower' },
      { name: 'Plaza Level 101-118', tier: 'lower' },
      { name: 'Club Boxes', tier: 'club' },
      { name: 'Pinnacle Level P1-P14', tier: 'club' },
      { name: 'Big River Steel Terrace 201-232', tier: 'upper' },
      { name: 'Big River Steel Edge', tier: 'upper' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'paycom-center': {
    id: 'paycom-center',
    name: 'Paycom Center',
    city: 'Oklahoma City',
    state: 'OK',
    capacity: 18203,
    type: 'arena',
    homeTeams: ['Oklahoma City Thunder'],
    description: 'Paycom Center seats 18,203 for Oklahoma City Thunder games downtown and opened on June 8, 2002. The Thunder have played there since the 2008-09 season. The floor sits 22 feet below street level. Courtside seat holders get the Courtside Club, which has three full-service bars. The Club Level, entered from the east side, has a carpeted concourse and larger seats. The lower bowl runs sections 101-120 and the upper level runs 301-330, which is where the best-value tickets are. The building also has 48 Terrace Suites, including the Riverwind Terrace Suites, plus 29 private suites and bunker suites at event and entry level. TicketScan tracks when tickets for Paycom Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Paycom Center tickets', 'Oklahoma City Thunder tickets', 'Paycom Center seating chart', 'Paycom Center events 2026', 'OKC concerts', 'Thunder courtside seats'],
    faqs: [
      { question: 'Will the Thunder keep playing at Paycom Center?', answer: 'Until their new downtown arena opens. The City of Oklahoma City is targeting late summer 2028 for completion, with a contractual deadline to open by June 2029, and the Thunder play at Paycom Center until then.' },
    ],
    sections: [
      { name: 'Courtside', tier: 'floor' },
      { name: 'Floor Seats', tier: 'floor' },
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl 101-120', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Upper Level Sideline', tier: 'upper' },
      { name: 'Upper Level 301-330', tier: 'upper' },
      { name: 'Riverwind Terrace Suites', tier: 'suite' },
      { name: 'Private Suites', tier: 'suite' },
      { name: 'Bunker Suites', tier: 'suite' },
    ]
  },

  'moda-center': {
    id: 'moda-center',
    name: 'Moda Center',
    city: 'Portland',
    state: 'OR',
    capacity: 19411,
    type: 'arena',
    homeTeams: ['Portland Trail Blazers'],
    description: 'Moda Center seats 19,411 for Portland Trail Blazers games in the Rose Quarter and opened on October 12, 1995 as the Rose Garden. It took its current name in 2013, and the City of Portland has owned it since 2024. The Blazers recently paid for new scoreboards, widened bowl seating and a new roof. The seating bowl has three rings: the 100 level runs sections 101-122, the 200 Club Level runs 201-230 with its own concourse and two full bars, and the 300 level runs 301-334. The 300 level upper deck is where the value seats are. TicketScan tracks when tickets for Moda Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Moda Center tickets', 'Portland Trail Blazers tickets', 'Moda Center seating chart', 'Moda Center events 2026', 'Portland concerts', 'Rose Quarter tickets'],
    faqs: [
      { question: 'What does a Club Level ticket at Moda Center include?', answer: 'Club Level seats are in the 200s. They include access to the Club Level concourse, with its own concessions, two full bars and wider seats with extra legroom. Club season tickets have also included parking and a private entrance.' },
    ],
    sections: [
      { name: 'Courtside', tier: 'floor' },
      { name: 'Floor', tier: 'floor' },
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level 101-122', tier: 'lower' },
      { name: 'Club Level 201-230', tier: 'club' },
      { name: 'Rose Room', tier: 'club' },
      { name: '300 Level Sideline', tier: 'upper' },
      { name: '300 Level 301-334', tier: 'upper' },
      { name: 'Suites', tier: 'suite' },
    ]
  },

  'frost-bank-center': {
    id: 'frost-bank-center',
    name: 'Frost Bank Center',
    city: 'San Antonio',
    state: 'TX',
    capacity: 18354,
    type: 'arena',
    homeTeams: ['San Antonio Spurs'],
    description: 'Frost Bank Center seats 18,354 for San Antonio Spurs games. It opened in 2002, had a renovation of more than $110 million in 2015, and is also home to the San Antonio Stock Show and Rodeo. The Courtside Club, on the Event Level, has a VIP entrance behind the visiting bench. Courtside Boxes are the only lower-level boxes that hold up to 12 guests. The Plaza Level lower bowl rings the court, and the Terrace Level above it, starting at section 101, holds the Terrace Suites, the Theater Boxes, the Ledge Boxes next to the Terrace Restaurant, and the Agave Club in the west end zone. The upper 200 level holds the cheapest seats. TicketScan tracks Frost Bank Center onsales and presale windows.',
    keywords: ['Frost Bank Center tickets', 'San Antonio Spurs tickets', 'Frost Bank Center seating chart', 'Frost Bank Center events 2026', 'San Antonio concerts', 'Spurs courtside seats'],
    faqs: [
      { question: 'What is the Terrace Level at Frost Bank Center?', answer: 'It is the middle ring of the arena, numbered in the 100s. It holds most of the premium spaces: Terrace Suites, Theater Boxes, the Terrace Ledge Boxes beside the Terrace Restaurant, and the Agave Club in the west end zone. The lower bowl below it is the Plaza Level.' },
    ],
    sections: [
      { name: 'Courtside Club (Event Level)', tier: 'floor' },
      { name: 'Floor Seats', tier: 'floor' },
      { name: 'Courtside Boxes', tier: 'suite' },
      { name: 'Plaza Level Sideline', tier: 'lower' },
      { name: 'Plaza Level Baseline & Corner', tier: 'lower' },
      { name: 'Terrace Level 100s', tier: 'club' },
      { name: 'Agave Club (west end zone)', tier: 'club' },
      { name: 'Terrace Ledge Boxes', tier: 'club' },
      { name: 'Upper Level 200s', tier: 'upper' },
      { name: 'Theater Boxes', tier: 'suite' },
      { name: 'Terrace Suites', tier: 'suite' },
    ]
  },

  'delta-center': {
    id: 'delta-center',
    name: 'Delta Center',
    city: 'Salt Lake City',
    state: 'UT',
    // Basketball figure: the arena's larger configuration and its original
    // purpose. Hockey (Utah Mammoth) is 14,111 full-view for 2026-27; see the
    // header comment and the FAQ below.
    capacity: 17867,
    type: 'arena',
    homeTeams: ['Utah Jazz', 'Utah Mammoth'],
    description: 'Delta Center opened in 1991 and is home to both the Utah Jazz and the NHL\'s Utah Mammoth. It is in the middle of a three-summer rebuild into a dual-sport arena. For 2026-27 it seats 17,867 for Jazz games and 14,111 full-view seats for Mammoth games. In 2025 the floor was raised two feet, the bowl was lengthened 12 feet at each end, and retractable risers were installed that extend 29 rows to the baseline for basketball. For 2026 the upper north end was rebuilt with terrace-style seating, and new Sky Lounges with 200 seats each went in above both sidelines. Clubs include the Delta Sky360 Club, Entrata Club and Interform Club. TicketScan tracks when tickets for Delta Center events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Delta Center tickets', 'Utah Jazz tickets', 'Utah Mammoth tickets', 'Delta Center seating chart', 'Delta Center events 2026', 'Salt Lake City concerts', 'Delta Center renovation'],
    faqs: [
      { question: 'What is Delta Center\'s capacity?', answer: 'For 2026-27 the official figures are 17,867 for Jazz games and 14,111 full-view seats for Mammoth games, as reported after the second renovation phase. The arena\'s own site quotes the targets for when the rebuild is finished in 2027: nearly 19,000 for basketball and about 17,000 for hockey. Before the rebuild, basketball capacity was 18,206.' },
      { question: 'Are there obstructed-view seats at Delta Center for hockey?', answer: 'Some, for now. The 14,111 hockey figure does not count obstructed seats, and part of the upper bowl at the southwest end of the rink is still obstructed for 2026-27. The final phase is meant to give every seat a full view of the ice by the 2027-28 season. Basketball sightlines are not affected.' },
    ],
    sections: [
      { name: 'Courtside', tier: 'floor' },
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Lower Bowl Baseline (retractable risers)', tier: 'lower' },
      { name: 'Delta Sky360 Club', tier: 'club' },
      { name: 'Entrata Club', tier: 'club' },
      { name: 'Interform Club (Level 4)', tier: 'club' },
      { name: 'Sky Lounges (above each sideline)', tier: 'club' },
      { name: 'Upper Bowl Sideline', tier: 'upper' },
      { name: 'Upper Bowl North End Terrace', tier: 'upper' },
      { name: 'Aptive Lofts', tier: 'suite' },
      { name: 'Level 4 Suites', tier: 'suite' },
    ]
  },
};
