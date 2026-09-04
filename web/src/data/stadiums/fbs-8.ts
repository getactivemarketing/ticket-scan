// FBS batch 8 — 14 programs. Capacity and naming facts come from each
// stadium's own Wikipedia article or its athletic department's official
// facilities page, cross-checked against news coverage of any 2025-2026
// renaming or renovation, never from an aggregate "list of stadiums" table.
//
// Two entries carry a name that is more current than the program's dedicated
// Wikipedia article title implies: UCF's venue is Acrisure Bounce House
// (renamed from FBC Mortgage Stadium, mid-2025) and Houston's is Space City
// Financial Stadium (renamed from TDECU Stadium for the 2026 season, per
// TDECU's 2024 corporate rebrand). Illinois's Memorial Stadium became Gies
// Memorial Stadium in September 2025 after a $100M gift; the playing surface
// keeps its own name, Zuppke Field. Buffalo's UB Stadium became Broadview
// Stadium in March 2026; its capacity carries a source conflict (official UB
// and Broadview Federal Credit Union materials say 30,270, a post-2017
// north-end-zone demolition estimate elsewhere says roughly 25,000) — the
// official athletic-department figure is used per the sourcing rule.
//
// UCLA's Rose Bowl is mid-renovation: a new South Field Club (converting
// roughly 5,000 south end zone bench seats) is under construction and
// targeted to open for the September 12, 2026 home opener — after this
// batch's 2026-09-04 as-of date. UCLA's own facilities page still states
// 91,136 with no reduced interim figure, so that is the number used here;
// expect it to change once the club opens.
//
// `floor` is never used: there is no floor at a football game.

import type { Venue } from '../venue-types';

export const fbsStadiums8: Record<string, Venue> = {
  'yulman-stadium': {
    id: 'yulman-stadium',
    name: 'Yulman Stadium',
    city: 'New Orleans',
    state: 'LA',
    capacity: 30000,
    type: 'stadium',
    homeTeams: ['Tulane University Football'],
    description: "Yulman Stadium seats 30,000 for Tulane Green Wave football on the university's uptown New Orleans campus, an open-air bowl that opened September 6, 2014, ending Tulane's 39 seasons at the Superdome. The west sideline carries the stadium's two premium clubs, the 3,000-seat Westfeldt Terrace and the smaller Jill H. and Avram A. Glazer Family Club, both chair-back seating. The north end zone holds the student section, section 126, beneath the Angry Wave sculpture that looms over the tunnel. Benson Field is the playing surface, named for the late Saints owner Tom Benson. TicketScan tracks Yulman Stadium onsales and presale windows.",
    keywords: ['Yulman Stadium tickets', 'Tulane Green Wave tickets', 'Yulman Stadium seating chart', 'Tulane football tickets', 'New Orleans college football tickets'],
    faqs: [
      { question: 'What is the Angry Wave at Yulman Stadium?', answer: 'It is a 3,353-pound fiberglass-and-steel sculpture installed above the north end zone student section in 2017, overlooking section 126 where Tulane students sit.' },
    ],
    sections: [
      { name: 'West Sideline Lower (Home)', tier: 'lower' },
      { name: 'East Sideline Lower (Visitor)', tier: 'lower' },
      { name: 'North End Zone / Student Section 126', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Westfeldt Terrace Club', tier: 'club' },
      { name: 'Glazer Family Club', tier: 'club' },
    ]
  },

  'skelly-field-chapman-stadium': {
    id: 'skelly-field-chapman-stadium',
    name: 'Skelly Field at H.A. Chapman Stadium',
    city: 'Tulsa',
    state: 'OK',
    capacity: 30000,
    type: 'stadium',
    homeTeams: ['Tulsa Golden Hurricane Football'],
    description: "Skelly Field at H.A. Chapman Stadium seats 30,000 for Tulsa Golden Hurricane football on the University of Tulsa campus, a bowl that dates to 1930 as Skelly Field and was rebuilt through a 2007-08 renovation funded by the H.A. and Mary K. Chapman Charitable Trust. The FieldTurf surface has hosted the NASL's Tulsa Roughnecks and the USFL's Oklahoma Outlaws alongside Golden Hurricane football. Loge and club seating were added in that same renovation. The stadium's attendance record, 47,350, was set in 1987 against top-ranked Oklahoma. TicketScan tracks Skelly Field onsales and presale windows.",
    keywords: ['Skelly Field tickets', 'Chapman Stadium tickets', 'Tulsa Golden Hurricane tickets', 'Tulsa football tickets', 'Skelly Field seating chart'],
    faqs: [
      { question: 'Why does the stadium name include both Skelly Field and Chapman Stadium?', answer: 'Skelly Field has been the playing surface name since 1930, honoring oilman William Skelly. The Chapman name was added in 2007 after the H.A. and Mary K. Chapman Charitable Trust funded a stadium renovation, and both names were kept.' },
    ],
    sections: [
      { name: 'Lower Sideline (Home)', tier: 'lower' },
      { name: 'Lower Sideline (Visitor)', tier: 'lower' },
      { name: 'Lower End Zone / Student Section', tier: 'lower' },
      { name: 'Club Level', tier: 'club' },
      { name: 'Loge Seating', tier: 'club' },
      { name: 'Upper Deck', tier: 'upper' },
    ]
  },

  'protective-stadium': {
    id: 'protective-stadium',
    name: 'Protective Stadium',
    city: 'Birmingham',
    state: 'AL',
    capacity: 47100,
    type: 'stadium',
    homeTeams: ['UAB Blazers Football'],
    description: "Protective Stadium seats 47,100 for UAB Blazers football in downtown Birmingham, next to the BJCC, and opened October 2, 2021. The west sideline bowl holds the largest single seating block, facing an east side split between a lower bowl and an upper deck. Center-field sections 106, 107, 111 and 112 sit closest to midfield on the lower level, in front of the Stadium Club premium seating on the midfield concourse. The venue also hosts Birmingham Legion FC of the USL and the UFL's Birmingham Stallions, and drew its attendance record, roughly 50,000, for a June 2022 Garth Brooks concert. TicketScan tracks Protective Stadium onsales.",
    keywords: ['Protective Stadium tickets', 'UAB Blazers tickets', 'Protective Stadium seating chart', 'Birmingham Legion tickets', 'Birmingham football tickets'],
    faqs: [
      { question: 'Which Protective Stadium sections are closest to midfield?', answer: 'Lower-level sections 106, 107, 111 and 112 sit on the west sideline nearest the 50-yard line, directly in front of the Stadium Club premium seating on the midfield concourse.' },
    ],
    sections: [
      { name: 'West Sideline Lower Bowl 106-112', tier: 'lower' },
      { name: 'East Sideline Lower Bowl', tier: 'lower' },
      { name: 'End Zone Lower Bowl', tier: 'lower' },
      { name: 'East Upper Deck', tier: 'upper' },
      { name: 'Stadium Club (Midfield)', tier: 'club' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'acrisure-bounce-house': {
    id: 'acrisure-bounce-house',
    name: 'Acrisure Bounce House',
    city: 'Orlando',
    state: 'FL',
    capacity: 45906,
    type: 'stadium',
    homeTeams: ['UCF Knights Football'],
    description: "Acrisure Bounce House seats 45,906 for UCF Knights football on the university's Orlando campus, up from 44,206 after the Roth Tower rebuild finished ahead of the 2026 season and added roughly 1,700 seats. The Roth Tower on the west side holds loge seating, 28 luxury suites and 34 outdoor sky suites. The Carl Black and Gold Cabana, a Florida-themed club on the east side, seats 2,921. The entire north end zone and the lower south end zone form the student section, nicknamed Knightmare. The venue has carried five different sponsor names since opening in 2007, and its 'Bounce House' nickname predates all of them.",
    keywords: ['Acrisure Bounce House tickets', 'UCF Knights tickets', 'Bounce House Stadium seating chart', 'UCF football tickets', 'Orlando college football tickets'],
    faqs: [
      { question: 'Is Acrisure Bounce House the same stadium as FBC Mortgage Stadium?', answer: 'Yes. The venue has carried five sponsor names since it opened in 2007, most recently FBC Mortgage Stadium until mid-2025, when the sponsor rebranded as Acrisure and the stadium became Acrisure Bounce House. Some listings still reference the older names.' },
    ],
    sections: [
      { name: 'Roth Tower Loge (West Sideline)', tier: 'club' },
      { name: 'Carl Black & Gold Cabana (East Sideline)', tier: 'club' },
      { name: 'Knightmare Student Section (End Zones)', tier: 'lower' },
      { name: 'Field Cabanas (End Zones)', tier: 'club' },
      { name: 'General Lower Bowl Sideline', tier: 'lower' },
      { name: 'Sky Suites', tier: 'suite' },
    ]
  },

  'rose-bowl': {
    id: 'rose-bowl',
    name: 'Rose Bowl',
    city: 'Pasadena',
    state: 'CA',
    capacity: 91136,
    type: 'stadium',
    homeTeams: ['UCLA Bruins Football'],
    description: "The Rose Bowl seats 91,136 for UCLA Bruins football in Pasadena, a horseshoe-shaped stadium designed by Myron Hunt that opened October 28, 1922 and was enclosed into a full bowl in 1928. It is the only venue to have hosted FIFA World Cup finals for both the men's and women's tournaments, in 1994 and 1999, and has held five Super Bowls. UCLA sits on the press-box, west side for its home games. A new South Field Club is under construction in the south end zone as part of a wider renovation, targeted to open for the September 12, 2026 home opener.",
    keywords: ['Rose Bowl tickets', 'UCLA Bruins tickets', 'Rose Bowl seating chart', 'Rose Bowl Pasadena tickets', 'UCLA football tickets'],
    faqs: [
      { question: 'Is the Rose Bowl capacity changing in 2026?', answer: "A new South Field Club, converting roughly 5,000 south end zone bench seats into a premium club, is under construction and targeted to open for the September 12, 2026 home opener. As of now the stadium's listed capacity remains 91,136." },
    ],
    sections: [
      { name: 'Lower Rim Sideline (Rows 1-27)', tier: 'lower' },
      { name: 'Lower Rim End Zone (Rows 1-27)', tier: 'lower' },
      { name: 'Upper Rim Sideline (Rows 28-77)', tier: 'upper' },
      { name: 'Upper Rim End Zone (Rows 28-77)', tier: 'upper' },
      { name: 'Press Box Side Premium (West)', tier: 'club' },
      { name: 'General Admission Horseshoe (North End)', tier: 'lower' },
    ]
  },

  'pratt-whitney-stadium-rentschler-field': {
    id: 'pratt-whitney-stadium-rentschler-field',
    name: 'Pratt & Whitney Stadium at Rentschler Field',
    city: 'East Hartford',
    state: 'CT',
    capacity: 36000,
    type: 'stadium',
    homeTeams: ['UConn Huskies College Football'],
    description: "Pratt & Whitney Stadium at Rentschler Field seats 36,000 for UConn Huskies football in East Hartford, built in 2003 on a former Pratt & Whitney airfield donated by United Technologies. Naming rights moved from Rentschler Field to Pratt & Whitney Stadium in 2015, though the Kentucky bluegrass playing surface is still called Rentschler Field. A U-shaped upper deck wraps the north, south and east sides above the lower bowl, and a south-side tower holds 38 luxury suites plus roughly 1,300 indoor and 4,000 outdoor club seats. CTfastrak buses serve the stadium on game days. TicketScan tracks Rentschler Field onsales and presale windows.",
    keywords: ['Rentschler Field tickets', 'UConn Huskies tickets', 'Pratt Whitney Stadium seating chart', 'UConn football tickets', 'East Hartford football tickets'],
    faqs: [
      { question: 'Is Rentschler Field the same as Pratt & Whitney Stadium?', answer: 'Yes. The venue was called Rentschler Field from its 2003 opening until United Technologies bought naming rights in 2015 and it became Pratt & Whitney Stadium at Rentschler Field. The playing surface itself is still referred to as Rentschler Field.' },
    ],
    sections: [
      { name: 'Lower Bowl Sideline (North)', tier: 'lower' },
      { name: 'Lower Bowl Sideline (South)', tier: 'lower' },
      { name: 'Lower Bowl End Zone', tier: 'lower' },
      { name: 'U-Shaped Upper Deck', tier: 'upper' },
      { name: 'Indoor Club Seats (South Tower)', tier: 'club' },
      { name: 'Outdoor Club Seats', tier: 'club' },
      { name: 'Suite Level (South Tower)', tier: 'suite' },
    ]
  },

  'mcguirk-alumni-stadium': {
    id: 'mcguirk-alumni-stadium',
    name: 'Warren P. McGuirk Alumni Stadium',
    city: 'Amherst',
    state: 'MA',
    capacity: 17000,
    type: 'stadium',
    homeTeams: ['UMass Football'],
    description: "Warren P. McGuirk Alumni Stadium seats 17,000, expandable to 21,430 for larger games, and has hosted UMass Minutemen football since opening September 25, 1965. Designed by Skidmore, Owings and Merrill, the stadium is nicknamed The Junkyard, and its lowest seats sit more than 12 feet above the field because of the original raised design. A $34.5 million renovation completed in 2014 brought it up to FBS standards after UMass moved its program up a division. UMass returned to playing its entire home schedule here in 2016 after several seasons hosting select games at Gillette Stadium. TicketScan tracks McGuirk Stadium onsales and presale windows.",
    keywords: ['McGuirk Stadium tickets', 'UMass Minutemen tickets', 'McGuirk Alumni Stadium seating chart', 'UMass football tickets', 'Amherst football tickets'],
    faqs: [
      { question: 'Does UMass still play any home games at Gillette Stadium?', answer: 'No. UMass played select home games at Gillette Stadium in Foxborough from 2012 through 2015 but returned to hosting its full schedule at McGuirk Alumni Stadium starting in 2016, and continues to play its entire home slate there.' },
    ],
    sections: [
      { name: 'Home Sideline', tier: 'lower' },
      { name: 'Visitor Sideline', tier: 'lower' },
      { name: 'North End Zone', tier: 'lower' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'General Admission Bleachers', tier: 'lower' },
      { name: 'Expanded Overflow Seating', tier: 'lower' },
    ]
  },

  'williams-brice-stadium': {
    id: 'williams-brice-stadium',
    name: 'Williams-Brice Stadium',
    city: 'Columbia',
    state: 'SC',
    capacity: 77559,
    type: 'stadium',
    homeTeams: ['Univ of South Carolina Gamecocks Football'],
    description: "Williams-Brice Stadium seats 77,559 for South Carolina Gamecocks football, down from 80,250 after a 2020 club-seat renovation, and has stood in Columbia since opening in 1934. The east upper deck, added in 1982, is the stadium's original swaying structure, memorialized in coach Joe Morrison's motto 'If it ain't swayin', we ain't playin''. The Cockaboose Railroad, 22 permanently parked cabooses in sections 11-13 behind the south end zone, has served as private tailgate suites since 1990. The team enters to Strauss's 'Also sprach Zarathustra.' A further renovation planned for 2027-28 would reduce capacity again, but has not started yet.",
    keywords: ['Williams-Brice Stadium tickets', 'South Carolina Gamecocks tickets', 'Williams-Brice seating chart', 'Gamecocks football tickets', 'Columbia SC football tickets'],
    faqs: [
      { question: 'Why does the east upper deck at Williams-Brice Stadium sway?', answer: "The section was added in 1982 without full structural rigidity, and shock absorbers were installed in 1987 to manage the motion rather than eliminate it. It gave rise to coach Joe Morrison's saying, \"If it ain't swayin', we ain't playin'.\"" },
    ],
    sections: [
      { name: 'Lower Level Sideline 1-34', tier: 'lower' },
      { name: 'Cockaboose Club 11-13 (South End Zone)', tier: 'club' },
      { name: 'Founders Zone Club 801-812 (South End Zone Upper)', tier: 'club' },
      { name: 'Traditions Club / 2001 Club (400 Level)', tier: 'club' },
      { name: 'Upper Deck Sideline 301-323', tier: 'upper' },
      { name: '500 Level Sideline 501-504, 551-554', tier: 'upper' },
      { name: 'Suite Level', tier: 'suite' },
    ]
  },

  'broadview-stadium': {
    id: 'broadview-stadium',
    name: 'Broadview Stadium',
    city: 'Amherst',
    state: 'NY',
    capacity: 30270,
    type: 'stadium',
    homeTeams: ['University at Buffalo Bulls Football'],
    description: "Broadview Stadium seats 30,270 for University at Buffalo Bulls football on UB's North Campus in Amherst, New York, and opened September 4, 1993 as UB Stadium before a 15-year naming-rights deal with Broadview Federal Credit Union renamed it in March 2026. Two double-decked sideline grandstands hold roughly 7,500 seats apiece, and a south bleacher section adds about 10,000 more. An eight-lane track surrounds the field, since the venue also hosts UB track and field. The student section is nicknamed The Bullpen. TicketScan tracks Broadview Stadium onsales and presale windows, including any change tied to the 2026 rename.",
    keywords: ['Broadview Stadium tickets', 'UB Bulls tickets', 'Broadview Stadium seating chart', 'Buffalo Bulls football tickets', 'Amherst NY football tickets'],
    faqs: [
      { question: 'Is Broadview Stadium the same building as UB Stadium?', answer: 'Yes. The venue opened in 1993 as UB Stadium and kept that name for 33 years until Broadview Federal Credit Union bought naming rights in March 2026, in the largest such deal in the MAC.' },
    ],
    sections: [
      { name: 'North Sideline Grandstand (Lower)', tier: 'lower' },
      { name: 'South Sideline Grandstand (Lower)', tier: 'lower' },
      { name: 'North Sideline Grandstand (Upper)', tier: 'upper' },
      { name: 'South Sideline Grandstand (Upper)', tier: 'upper' },
      { name: 'South Bleachers / The Bullpen (Student Section)', tier: 'lower' },
      { name: 'General Admission End Zone', tier: 'lower' },
    ]
  },

  'folsom-field': {
    id: 'folsom-field',
    name: 'Folsom Field',
    city: 'Boulder',
    state: 'CO',
    capacity: 50183,
    type: 'stadium',
    homeTeams: ['University of Colorado Buffaloes Football'],
    description: "Folsom Field seats 50,183 for Colorado Buffaloes football on the Boulder campus, an open horseshoe facing north toward the Flatirons that has hosted the team since opening October 11, 1924. At 5,360 feet of elevation it is the third-highest stadium in the FBS. A 2014 renovation added loge boxes and the Champions Club to the northeast end zone, and the lower bowl runs sections 101-121 while the upper deck covers sections 203-220. The playing surface returned to artificial turf for the 2025 season. TicketScan tracks when tickets for Folsom Field events go on sale, including presale windows.",
    keywords: ['Folsom Field tickets', 'Colorado Buffaloes tickets', 'Folsom Field seating chart', 'CU Boulder football tickets', 'Boulder football tickets'],
    faqs: [
      { question: 'What makes Folsom Field unusual among FBS stadiums?', answer: 'It sits at 5,360 feet of elevation, the third-highest of any FBS stadium, and its horseshoe design leaves the north end open toward the Flatirons mountains visible beyond the stands.' },
    ],
    sections: [
      { name: 'Lower Bowl 101-121', tier: 'lower' },
      { name: 'Upper Deck 203-213', tier: 'upper' },
      { name: 'Upper Deck 214-220', tier: 'upper' },
      { name: 'Touchdown Club / Loge Boxes', tier: 'club' },
      { name: 'Champions Club (Northeast End Zone)', tier: 'club' },
      { name: 'East Side Suites', tier: 'suite' },
    ]
  },

  'delaware-stadium': {
    id: 'delaware-stadium',
    name: 'Delaware Stadium',
    city: 'Newark',
    state: 'DE',
    capacity: 18500,
    type: 'stadium',
    homeTeams: ['University of Delaware Blue Hens Football'],
    description: "Delaware Stadium, known on the field as Tubby Raymond Field, seats 18,500 for Blue Hens football in Newark, Delaware, down from 22,000 after a 2019-2020 renovation replaced the west grandstand's bleachers with chair-back seating. The stadium opened November 15, 1952 with a 13-12 win over Lafayette and installed FieldTurf in 2009-10. Concrete grandstands run along the east and west sides, with permanent metal bleachers in both end zones. The south end zone bleachers hold the student section, nicknamed The Cockpit. The venue also hosts University of Delaware commencement ceremonies. TicketScan tracks Delaware Stadium onsales and presale windows.",
    keywords: ['Delaware Stadium tickets', 'Blue Hens football tickets', 'Delaware Stadium seating chart', 'Tubby Raymond Field tickets', 'Newark DE football tickets'],
    faqs: [
      { question: 'Why did Delaware Stadium capacity drop from 22,000 to 18,500?', answer: "A 2019-2020 renovation replaced the west grandstand's bleacher seating with individual chair-back seats, which reduced the total seat count even though the stadium footprint stayed the same." },
    ],
    sections: [
      { name: 'East Grandstand Lower', tier: 'lower' },
      { name: 'West Grandstand Chair-Back', tier: 'lower' },
      { name: 'North End Zone Bleachers', tier: 'lower' },
      { name: 'South End Zone Bleachers / The Cockpit (Student Section)', tier: 'lower' },
      { name: 'West Grandstand Upper (Press Box Level)', tier: 'upper' },
      { name: 'East Grandstand Upper', tier: 'upper' },
    ]
  },

  'sanford-stadium': {
    id: 'sanford-stadium',
    name: 'Sanford Stadium',
    city: 'Athens',
    state: 'GA',
    capacity: 93033,
    type: 'stadium',
    homeTeams: ['University of Georgia Bulldogs Football'],
    description: "Sanford Stadium, with the field named Dooley Field, seats 93,033 for Georgia Bulldogs football in Athens, having grown from its 1929 opening capacity through a series of expansions, most recently a 2022-2024 south-sideline and press-box project that added 287 seats. The privet hedges bordering the field, removed for the 1996 Olympics and replanted since, gave the stadium its nickname, Between the Hedges. Student sections occupy 109-114 and 138-143 in the lower bowl, while visitors sit in 101-103, 144 and the entire 600 level. SkyClub suites sit in sections around 327-335. TicketScan tracks Sanford Stadium onsales and presale windows.",
    keywords: ['Sanford Stadium tickets', 'Georgia Bulldogs tickets', 'Sanford Stadium seating chart', 'Between the Hedges tickets', 'Athens GA football tickets'],
    faqs: [
      { question: 'What does "Between the Hedges" refer to at Sanford Stadium?', answer: 'It refers to the privet hedges lining the edge of the playing field, a Sanford Stadium tradition since the 1920s. They were removed for the 1996 Atlanta Olympics soccer competition and replanted afterward, most recently refreshed in 2024.' },
    ],
    sections: [
      { name: 'Lower Bowl Student Sections 109-114, 138-143', tier: 'lower' },
      { name: 'Lower Bowl Visitor Sections 101-103, 144', tier: 'lower' },
      { name: '600 Level (Visitor)', tier: 'upper' },
      { name: '200 Level Club (wraps bowl)', tier: 'club' },
      { name: 'Upper Deck (300 Level)', tier: 'upper' },
      { name: 'SkyClub Suites 327-335', tier: 'suite' },
    ]
  },

  'space-city-financial-stadium': {
    id: 'space-city-financial-stadium',
    name: 'Space City Financial Stadium',
    city: 'Houston',
    state: 'TX',
    capacity: 39700,
    type: 'stadium',
    homeTeams: ['University of Houston Cougars Football'],
    description: "Space City Financial Stadium seats 39,700 plus standing room for Houston Cougars football on the university's campus, renamed for the 2026 season after TDECU's 2024 rebrand as Space City Financial, having opened in 2014 as TDECU Stadium. A complete lower bowl sits 25 feet below grade and holds 20,000 of the seats, with sideline sections 101-108 on the west and 121-128 on the east, and sections 104, 105, 124 and 125 forming the premium 50-yard-line block. A deliberate gap in the northwest upper deck frames the downtown Houston skyline. TicketScan tracks Space City Financial Stadium onsales and presale windows.",
    keywords: ['Space City Financial Stadium tickets', 'Houston Cougars tickets', 'TDECU Stadium seating chart', 'Houston football tickets', 'UH Cougars tickets'],
    faqs: [
      { question: 'Is Space City Financial Stadium the same as TDECU Stadium?', answer: 'Yes. The venue opened as TDECU Stadium in 2014. TDECU rebranded as Space City Financial in 2024, and the stadium took the new name for the 2026 season, though older listings may still reference TDECU Stadium.' },
    ],
    sections: [
      { name: 'West Sideline Lower 101-108', tier: 'lower' },
      { name: 'East Sideline Lower 121-128', tier: 'lower' },
      { name: 'Premium 50-Yard Line Block 104, 105, 124, 125', tier: 'lower' },
      { name: 'Club Level C-200 to C-207', tier: 'club' },
      { name: 'Loge/Suite Level P-317 to P-322', tier: 'suite' },
      { name: 'Northwest Upper Deck', tier: 'upper' },
    ]
  },

  'gies-memorial-stadium': {
    id: 'gies-memorial-stadium',
    name: 'Gies Memorial Stadium',
    city: 'Champaign',
    state: 'IL',
    capacity: 60670,
    type: 'stadium',
    homeTeams: ['University of Illinois Fighting Illini Football'],
    description: "Gies Memorial Stadium seats 60,670 for Illinois Fighting Illini football in Champaign, renamed from Memorial Stadium in September 2025 after alumnus Larry Gies gave the athletic department a $100 million gift honoring his father, a World War I veteran. The playing surface, Zuppke Field, still honors coach Bob Zuppke. Nearly 200 columns around the stadium's facade bear the names of roughly 183 University of Illinois students and alumni who died in World War I. The north bleachers hold the student section, Block I, which has performed card stunts since 1926. The horseshoe design was modeled partly on Harvard Stadium.",
    keywords: ['Gies Memorial Stadium tickets', 'Illinois Fighting Illini tickets', 'Memorial Stadium Illinois seating chart', 'Illinois football tickets', 'Champaign football tickets'],
    faqs: [
      { question: 'Why was Memorial Stadium renamed Gies Memorial Stadium?', answer: 'In September 2025, Illinois alumnus Larry Gies donated $100 million to the athletic department in honor of his father, a World War I veteran, and the Board of Trustees renamed the stadium Gies Memorial Stadium. The playing surface, Zuppke Field, kept its own name.' },
    ],
    sections: [
      { name: 'East Main Lower Bowl', tier: 'lower' },
      { name: 'West Main Lower Bowl (Colonnades Club)', tier: 'club' },
      { name: 'East Balcony (Upper)', tier: 'upper' },
      { name: 'West Balcony (Upper)', tier: 'upper' },
      { name: 'North Bleachers / Block I (Student Section)', tier: 'lower' },
      { name: 'South End Zone / The Horseshoe', tier: 'lower' },
      { name: '77 Club', tier: 'club' },
    ]
  },
};
