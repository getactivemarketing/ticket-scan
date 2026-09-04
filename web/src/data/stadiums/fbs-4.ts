// FBS batch 4 — 12 of 14 assigned programs (Memphis Tigers and Miami Hurricanes
// omitted, see notes below).
//
// Each stadium is sourced from its own dedicated Wikipedia article or its athletics
// department's official facilities page — never from the aggregate "List of NCAA
// Division I FBS football stadiums" table, per the batch contract. One remaining
// entry diverged from a stale aggregate/dedicated source and is called out here:
//
// - University of Louisiana Monroe: Wikipedia's dedicated article is still titled
//   "Malone Stadium" / "JPS Field at Malone Stadium". The school renamed the
//   building FMOL Health | St. Francis Stadium in an August 2026 partnership
//   announcement (ulmwarhawks.com, KNOE). Capacity is unchanged (27,617); only the
//   name was stale. The current official name is used here.
//
// Miami Hurricanes (Hard Rock Stadium) is deliberately NOT an entry in this file.
// Miami and the Dolphins play in the same physical building, which nfl.ts already
// defines as `hard-rock-stadium`; a second entry here would publish a duplicate
// indexed page for one stadium and both would resolve to the same Ticketmaster
// venue id. A central step adds "Miami Hurricanes Football" to that existing
// entry's homeTeams instead. For the record: Hard Rock Stadium's infobox says
// 65,326 while its own dated capacity-history row gives 64,767 for 2015-present —
// the NFL batch independently landed on 64,767 and a reviewer confirmed it against
// the same history table, so the shared entry is already correct.
//
// Memphis Tigers (Simmons Bank Liberty Stadium) is omitted. As of this batch's
// research date (Sept 4, 2026, the day before Memphis's 2026 home opener),
// sources conflict and none of them describe a settled current number: Wikipedia's
// infobox still shows the pre-renovation-complete "50,000 (2024-present)" estimate,
// Memphis's own athletic director is quoted at "42,000-44,000", and a dedicated
// gameday preview (fox13memphis.com, published for the actual 2026 opener) reports
// sections 101-109 and 129-132 still closed with "capacity this season will still
// sit under 34,000." No source gives a single verified current integer, so per the
// contract this program is omitted rather than approximated. Its team page keeps
// working; it only loses the venue panel.
//
// `floor` is deliberately never used: there is no floor at a football game.

import type { Venue } from '../venue-types';

export const fbsStadiums4: Record<string, Venue> = {
  'dix-stadium': {
    id: 'dix-stadium',
    name: 'Dix Stadium',
    city: 'Kent',
    state: 'OH',
    capacity: 25319,
    type: 'stadium',
    homeTeams: ['Kent State University Golden Flashes Football'],
    description: "Dix Stadium seats 25,319 for Kent State Golden Flashes games and is built from three grandstands rather than a full bowl. The west stand is the largest, with locker rooms underneath and the press box and suites on top; the east stand is the student section; the north end zone keeps the stadium's original bleacher grandstand. The south end zone lost about 5,000 seats in a 2008 renovation and is now a plaza with concessions instead of stands. TicketScan tracks when tickets for Dix Stadium events go on sale, including presale windows.",
    keywords: ['Dix Stadium tickets', 'Kent State Golden Flashes tickets', 'Dix Stadium seating chart', 'Dix Stadium events 2026', 'Kent Ohio football tickets'],
    faqs: [
      { question: 'Why does Dix Stadium not have seating in the south end zone?', answer: 'A 2008 renovation removed roughly 5,000 seats from the south end zone, replacing them with a plaza and concession area. Seating is now concentrated in the west, east and north stands.' },
    ],
    sections: [
      { name: 'West Grandstand Lower Sideline', tier: 'lower' },
      { name: 'Chairback Section 4', tier: 'lower' },
      { name: 'East Grandstand Student Section', tier: 'lower' },
      { name: 'North End Zone Bleachers', tier: 'lower' },
      { name: 'Press Box Level Suites', tier: 'suite' },
      { name: 'Jim and Carolyn Phelan Lounge', tier: 'club' },
    ]
  },

  'kroger-field': {
    id: 'kroger-field',
    name: 'Kroger Field',
    city: 'Lexington',
    state: 'KY',
    capacity: 61000,
    type: 'stadium',
    homeTeams: ['Kentucky Wildcats Football'],
    description: "Kroger Field seats 61,000 for Kentucky Wildcats games on a field named C. M. Newton Grounds, and was known as Commonwealth Stadium until Kroger bought the naming rights in 2017, the first such deal in the SEC. A $110 million renovation completed in 2015 rebuilt the press box and added loge boxes, club seats and suites. The Central Bank and Longship Clubs sit in sections 25-27, and the Lexus Loge covers sections 21-22, 30-31 and 222-223, 229-230. TicketScan tracks Kroger Field onsales and presale windows.",
    keywords: ['Kroger Field tickets', 'Kentucky Wildcats tickets', 'Kroger Field seating chart', 'Commonwealth Stadium tickets', 'Kroger Field events 2026', 'Lexington football tickets'],
    faqs: [
      { question: 'Is Kroger Field the same stadium as Commonwealth Stadium?', answer: 'Yes. It opened as Commonwealth Stadium in 1973 and was renamed Kroger Field in 2017 when Kroger bought the naming rights, the first corporate stadium naming deal in the SEC.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Central Bank Club & Longship Club 25-27', tier: 'club' },
      { name: 'Lexus Loge 21-22, 30-31, 222-223, 229-230', tier: 'suite' },
      { name: 'North Upper Deck 202-210', tier: 'upper' },
      { name: 'South Upper Deck 222-230', tier: 'upper' },
    ]
  },

  'williams-stadium-liberty': {
    id: 'williams-stadium-liberty',
    name: 'Williams Stadium',
    city: 'Lynchburg',
    state: 'VA',
    capacity: 25000,
    type: 'stadium',
    homeTeams: ['Liberty University Flames Football'],
    description: "Williams Stadium, formally Arthur L. Williams Stadium and known on campus as \"The Bill,\" seats 25,000 for Liberty Flames games. A phase-two expansion completed in 2018 added a second deck on the student side, taking capacity from 19,200 to its current size. The Carter Tower's fourth floor holds 18 luxury suites with kitchens and lounge furniture, the climate-controlled Club Pavilion serves club-seat holders, and 23 roofed cabanas sit above a berm in the south end zone. TicketScan tracks Williams Stadium onsales and presale windows.",
    keywords: ['Williams Stadium tickets', 'Liberty Flames tickets', 'Williams Stadium seating chart', 'Williams Stadium events 2026', 'Lynchburg football tickets'],
    faqs: [
      { question: 'When did Williams Stadium reach its current 25,000 capacity?', answer: "A phase-two expansion for the 2018 season added a second deck to the student side, raising capacity from 19,200 to 25,000. A planned phase three would eventually close the south end zone into a horseshoe." },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Premium Member Seats', tier: 'club' },
      { name: 'Club Pavilion', tier: 'club' },
      { name: 'South End Zone Cabanas', tier: 'club' },
      { name: 'Carter Tower Luxury Suites', tier: 'suite' },
    ]
  },

  'fmol-health-st-francis-stadium': {
    id: 'fmol-health-st-francis-stadium',
    name: 'FMOL Health | St. Francis Stadium',
    city: 'Monroe',
    state: 'LA',
    capacity: 27617,
    type: 'stadium',
    homeTeams: ['Louisiana Monroe Warhawks Football'],
    description: "FMOL Health | St. Francis Stadium seats 27,617 for Louisiana Monroe Warhawks games on the banks of Bayou Desiard. Built in 1978 and long known as Malone Stadium for former head coach James Malone, it took its current name in an August 2026 partnership with FMOL Health | St. Francis. The larger west grandstand carries a two-level skybox with the press box and luxury boxes above sections 101-107, with chairback seating in 103-104; the smaller east grandstand's 114-117 include the visiting-fan sections. TicketScan tracks onsales and presale windows.",
    keywords: ['FMOL Health St. Francis Stadium tickets', 'Louisiana Monroe Warhawks tickets', 'Malone Stadium tickets', 'ULM football tickets', 'FMOL Health St Francis Stadium events 2026', 'Monroe Louisiana football tickets'],
    faqs: [
      { question: 'Is FMOL Health | St. Francis Stadium the same building as Malone Stadium?', answer: 'Yes. The stadium opened in 1978 as Malone Stadium, honoring former head coach James Malone, and later carried the JPS Field naming-rights tag before ULM renamed it FMOL Health | St. Francis Stadium in August 2026. Capacity is unchanged at 27,617.' },
    ],
    sections: [
      { name: 'West Grandstand Lower Sideline 101-107', tier: 'lower' },
      { name: 'West Grandstand Chairback Seating 103-104', tier: 'lower' },
      { name: 'East Grandstand 114-117', tier: 'lower' },
      { name: 'Open Air Boxes & Tailgate Terrace', tier: 'club' },
      { name: 'Stadium Grove / Pecan Grove Premium Seating', tier: 'club' },
      { name: 'Skybox & Press Box Suites', tier: 'suite' },
    ]
  },

  'cajun-field': {
    id: 'cajun-field',
    name: 'Cajun Field',
    city: 'Lafayette',
    state: 'LA',
    capacity: 30392,
    type: 'stadium',
    homeTeams: ["Louisiana Ragin' Cajuns Football"],
    description: "Cajun Field, officially Cajun Field at Our Lady of Lourdes Stadium, seats 30,392 for Louisiana Ragin' Cajuns games after a $65 million rebuild of the west side was completed for the 2025 season, the biggest change to the stadium since it opened in 1971. The new west side holds 34 suites, 40 loge boxes, 524 club seats, an indoor club and five new chairback sections in the lower bowl. The east side keeps its original sideline bowl, and a second deck runs above the west sideline. TicketScan tracks Cajun Field onsales and presale windows.",
    keywords: ['Cajun Field tickets', "Louisiana Ragin' Cajuns tickets", 'Cajun Field seating chart', 'Our Lady of Lourdes Stadium tickets', 'Cajun Field events 2026', 'Lafayette football tickets'],
    faqs: [
      { question: 'What changed at Cajun Field for the 2025 season?', answer: 'A $65 million renovation rebuilt the entire west side, adding 34 suites, 40 loge boxes, 524 club seats and an indoor club, and brought the total capacity to 30,392, down from the 41,264-seat configuration used from 2016 to 2023.' },
    ],
    sections: [
      { name: 'West Lower Bowl Chairback Sections', tier: 'lower' },
      { name: 'East Sideline Lower Bowl', tier: 'lower' },
      { name: 'End Zone Seating', tier: 'lower' },
      { name: 'Indoor Club Seats', tier: 'club' },
      { name: 'Loge Boxes (West Side)', tier: 'suite' },
      { name: 'Suites (West Side)', tier: 'suite' },
    ]
  },

  'tiger-stadium-lsu': {
    id: 'tiger-stadium-lsu',
    name: 'Tiger Stadium',
    city: 'Baton Rouge',
    state: 'LA',
    capacity: 102321,
    type: 'stadium',
    homeTeams: ['Louisiana State University Football'],
    description: "Tiger Stadium, known as Death Valley, seats 102,321 for LSU Tigers games and is one of the loudest venues in college football thanks to a steep horseshoe bowl. The 2014 south end-zone expansion added 70 Tiger Den suites and an upper deck topped by the Skyline Club, an open-air 1,500-seat beer garden, with The Chute below serving another 1,500 fans. The Stadium Club on the west side holds more than 3,200 seats, and an 11,600-seat east upper deck was completed in 2000. TicketScan tracks Tiger Stadium onsales and presale windows.",
    keywords: ['Tiger Stadium tickets', 'LSU Tigers tickets', 'Death Valley tickets', 'Tiger Stadium seating chart', 'Tiger Stadium events 2026', 'Baton Rouge football tickets'],
    faqs: [
      { question: 'What is the Skyline Club at Tiger Stadium?', answer: 'The Skyline Club is an open-air 1,500-seat beer garden atop the south end-zone upper deck, added in the 2014 expansion that also brought 70 Tiger Den suites to that end of the stadium.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Tiger Den Suites (South End Zone)', tier: 'suite' },
      { name: 'Stadium Club (West Side)', tier: 'club' },
      { name: 'East Upper Deck', tier: 'upper' },
      { name: 'South End Zone Upper Deck', tier: 'upper' },
      { name: 'Skyline Club (South End Zone)', tier: 'club' },
    ]
  },

  'joe-aillet-stadium': {
    id: 'joe-aillet-stadium',
    name: 'Origin Bank Field at Joe Aillet Stadium',
    city: 'Ruston',
    state: 'LA',
    capacity: 28562,
    type: 'stadium',
    homeTeams: ['Louisiana Tech Bulldogs Football'],
    description: "Origin Bank Field at Joe Aillet Stadium seats 28,562 for Louisiana Tech Bulldogs games, named for the coach and athletic director who led the program for two decades. A 2017 upgrade rebuilt the west-side press box with luxury suites, including 13 suites holding 20 guests each plus a Presidential Suite. Both sidelines run metal bench grandstands, and donor and VIP seating sits atop the Davison Athletics Complex behind the south end zone. TicketScan tracks when tickets for Joe Aillet Stadium events go on sale, including presale windows.",
    keywords: ['Joe Aillet Stadium tickets', 'Louisiana Tech Bulldogs tickets', 'Joe Aillet Stadium seating chart', 'Origin Bank Field tickets', 'Joe Aillet Stadium events 2026', 'Ruston football tickets'],
    faqs: [
      { question: 'What suites are available at Joe Aillet Stadium?', answer: 'The 2017 west-side press box upgrade added 13 luxury suites that each hold 20 guests with indoor lounge seating and a kitchenette, plus a larger Presidential Suite, all on the first floor below the press level.' },
    ],
    sections: [
      { name: 'West Sideline Grandstand', tier: 'lower' },
      { name: 'East Sideline Grandstand', tier: 'lower' },
      { name: 'End Zone Seating', tier: 'lower' },
      { name: 'Donor Seating (Davison Athletics Complex)', tier: 'club' },
      { name: 'West Side Luxury Suites', tier: 'suite' },
      { name: 'Presidential Suite', tier: 'suite' },
    ]
  },

  'ln-federal-credit-union-stadium': {
    id: 'ln-federal-credit-union-stadium',
    name: 'L&N Federal Credit Union Stadium',
    city: 'Louisville',
    state: 'KY',
    capacity: 60800,
    type: 'stadium',
    homeTeams: ['Louisville Cardinals Football'],
    description: "L&N Federal Credit Union Stadium seats 60,800 for Louisville Cardinals games on the south end of campus. It opened in 1998 at 42,000 seats, expanded to 55,000 in 2010, and reached its current size in a 2019 project that closed the open end of its horseshoe and added 10 field-level suites, 65 club boxes and 1,000 club seats. The Brown and Williamson Club sits behind the press box on the west side, mirrored by the 100-yard PNC Club on the east, and the Norton Healthcare Terrace holds 2,500 standing fans in the south end. TicketScan tracks onsales and presale windows.",
    keywords: ['L&N Federal Credit Union Stadium tickets', 'Louisville Cardinals tickets', 'Cardinal Stadium tickets', 'L&N Stadium seating chart', 'Louisville football tickets', 'L&N Federal Credit Union Stadium events 2026'],
    faqs: [
      { question: 'Is L&N Federal Credit Union Stadium the same as Cardinal Stadium?', answer: 'Yes. The building opened in 1998 as Papa John\'s Cardinal Stadium, dropped the Papa John\'s name to become Cardinal Stadium in 2018, and was renamed L&N Federal Credit Union Stadium in January 2023. Capacity has held at 60,800 since the 2019 expansion.' },
    ],
    sections: [
      { name: 'Lower Level Sideline', tier: 'lower' },
      { name: 'Lower Level End Zone', tier: 'lower' },
      { name: 'Brown and Williamson Club (West Side)', tier: 'club' },
      { name: 'PNC Club (East Side)', tier: 'club' },
      { name: 'Norton Healthcare Terrace (South End Zone)', tier: 'club' },
      { name: 'Field-Level Suites', tier: 'suite' },
    ]
  },

  'joan-c-edwards-stadium': {
    id: 'joan-c-edwards-stadium',
    name: 'Joan C. Edwards Stadium',
    city: 'Huntington',
    state: 'WV',
    capacity: 38000,
    type: 'stadium',
    homeTeams: ['Marshall University Thundering Herd'],
    description: 'Joan C. Edwards Stadium seats 38,000 for Marshall Thundering Herd games, up from the 28,000-seat bowl that opened in 1991 through several later expansions. West-side chairback seats in sections 108-118 include access to the Big Green Room, a premium event space on the BG level with private restrooms and upgraded concessions; cheaper chairback seating without those amenities sits across the field in east-side sections 109 and 111. Twenty deluxe indoor suites and a set of Sky Suites sit above, reached through the west concourse near Gate B. TicketScan tracks Joan C. Edwards Stadium onsales and presale windows.',
    keywords: ['Joan C. Edwards Stadium tickets', 'Marshall Thundering Herd tickets', 'Joan C. Edwards Stadium seating chart', 'Marshall football tickets', 'Joan C. Edwards Stadium events 2026', 'Huntington football tickets'],
    faqs: [
      { question: 'What is the Big Green Room at Joan C. Edwards Stadium?', answer: 'It is a premium event space on the BG (200) level, open to fans holding west-side chairback seats in sections 108-118, with private restrooms and upgraded concessions not available to the cheaper east-side chairback sections 109 and 111.' },
    ],
    sections: [
      { name: 'West Chairback Sections 108-118', tier: 'lower' },
      { name: 'East Chairback Sections 109, 111', tier: 'lower' },
      { name: 'General Bowl Seating', tier: 'lower' },
      { name: 'Big Green Room (BG Level)', tier: 'club' },
      { name: 'Sky Suites', tier: 'suite' },
      { name: 'Deluxe Indoor Suites', tier: 'suite' },
    ]
  },

  'yager-stadium': {
    id: 'yager-stadium',
    name: 'Yager Stadium',
    city: 'Oxford',
    state: 'OH',
    capacity: 24286,
    type: 'stadium',
    homeTeams: ['Miami University of Ohio Red Hawks Football'],
    description: "Yager Stadium seats 24,286 for Miami RedHawks games after the south end zone stands were removed in a 2005 renovation. The west stand is taller and holds most of the seats along with the press box; the east stand is the student section and catches earlier shade; the north end has the cheapest bleacher seating. Sections 3-5 sit closest to the team benches, and a climate-controlled suite level and loge level were added between 2015 and 2019 atop the west stand. TicketScan tracks when tickets for Yager Stadium events go on sale, including presale windows.",
    keywords: ['Yager Stadium tickets', 'Miami RedHawks tickets', 'Yager Stadium seating chart', 'Miami Ohio football tickets', 'Yager Stadium events 2026', 'Oxford Ohio football tickets'],
    faqs: [
      { question: 'Why is there no south end zone seating at Yager Stadium?', answer: 'A 2005 renovation removed the south end zone stands entirely, bringing capacity down to its current 24,286. Seating is now concentrated in the west and east sidelines and the north end zone.' },
    ],
    sections: [
      { name: 'West Stand Sideline', tier: 'lower' },
      { name: 'Sections 3-5 (behind team benches)', tier: 'lower' },
      { name: 'East Stand Student Section', tier: 'lower' },
      { name: 'North End Zone Bleachers', tier: 'lower' },
      { name: 'Visitor Section N-O', tier: 'lower' },
      { name: 'Loge Level (West Stand)', tier: 'club' },
      { name: 'Climate-Controlled Suites', tier: 'suite' },
    ]
  },

  'spartan-stadium-michigan-state': {
    id: 'spartan-stadium-michigan-state',
    name: 'Spartan Stadium',
    city: 'East Lansing',
    state: 'MI',
    capacity: 74866,
    type: 'stadium',
    homeTeams: ['Michigan State University Football'],
    description: 'Spartan Stadium seats 74,866 for Michigan State Spartans games, down slightly from the 75,005-seat configuration built in a 2004-2005 expansion that added luxury boxes and club seating. The Sideline Club fills chairback rows 4-10 of sections 7-10 and 22-25. Standard sideline sections run all the way to row 66, with rows 57-66 sitting under the upper deck overhang. The MSUFCU Club and Suites and the Varsity S Club are both reached through Gate E. TicketScan tracks Spartan Stadium onsales and presale windows.',
    keywords: ['Spartan Stadium tickets', 'Michigan State Spartans tickets', 'Spartan Stadium seating chart', 'MSU football tickets', 'Spartan Stadium events 2026', 'East Lansing football tickets'],
    faqs: [
      { question: 'What is the Sideline Club at Spartan Stadium?', answer: 'It is chairback club seating in rows 4-10 of sections 7-10 and 22-25, reached through the same Gate E entrance used for the MSUFCU Club and Suites and the Varsity S Club.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline (Rows 1-56)', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'Sideline Club 7-10, 22-25', tier: 'club' },
      { name: 'Varsity S Club', tier: 'club' },
      { name: 'MSUFCU Club and Suites', tier: 'suite' },
      { name: 'West Upper Deck (Rows 57-66)', tier: 'upper' },
    ]
  },

  'johnny-red-floyd-stadium': {
    id: 'johnny-red-floyd-stadium',
    name: 'Johnny "Red" Floyd Stadium',
    city: 'Murfreesboro',
    state: 'TN',
    capacity: 27303,
    type: 'stadium',
    homeTeams: ['Middle Tennessee Blue Raiders Football'],
    description: 'Johnny "Red" Floyd Stadium, with its playing surface named Horace Jones Field, seats 27,303 for Middle Tennessee Blue Raiders games, down from the 30,788-seat capacity reached after a 1997-1998 renovation. A five-story tower holds luxury suites on the third level and additional suites on the fourth, with 16 indoor and 26 outdoor suites in total. The Jeff Hendrix Stadium Club serves club-level ticket holders, and a Family Fun Zone occupies the south end zone. TicketScan tracks Johnny "Red" Floyd Stadium onsales and presale windows.',
    keywords: ['Johnny Red Floyd Stadium tickets', 'Middle Tennessee Blue Raiders tickets', 'Floyd Stadium seating chart', 'MTSU football tickets', 'Floyd Stadium events 2026', 'Murfreesboro football tickets'],
    faqs: [
      { question: 'Why is current capacity lower than the 30,788 figure sometimes cited for Floyd Stadium?', answer: 'The 30,788 number reflects the stadium as it stood right after its 1997-1998 renovation. Seating has been reconfigured since then, and the current listed capacity is 27,303.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline', tier: 'lower' },
      { name: 'Student Section', tier: 'lower' },
      { name: 'Family Fun Zone (South End Zone)', tier: 'lower' },
      { name: 'Chairback Sections', tier: 'lower' },
      { name: 'Jeff Hendrix Stadium Club', tier: 'club' },
      { name: 'Sky Suites (Tower, Third Level)', tier: 'suite' },
      { name: 'Outdoor Suites', tier: 'suite' },
    ]
  },
};
