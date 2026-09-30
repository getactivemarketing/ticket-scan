// Home stadiums for three college football programs whose pages had none.
//
// Capacity comes from the school's own athletics or university site, never
// from Wikipedia, and all three cases involve a conflict between the two:
//
// - Albertsons Stadium: 32,423 is the capacity on Boise State's current
//   facilities page (broncosports.com/facilities/albertsons-stadium/1), a page
//   that has been updated to describe the North End Zone as completed for
//   2026. An older Broncosports page still says 36,387 (the 2012-2024
//   figure), Wikipedia says 36,200 for 2026, and local press says the school
//   has not announced a post-renovation number. The school's current page is
//   used, as the sourcing rule requires, and the FAQ says plainly that the
//   figure is unsettled. Treat it as the entry to recheck first.
// - Simmons Bank Liberty Stadium: 45,632 is the new official capacity after
//   the $226.5M renovation (gotigersgo.com, June and September 2026). The
//   school's own facilities page still says 58,325, the pre-renovation
//   number, and is stale.
// - Broadview Stadium (UB Stadium until the March 11, 2026 naming deal):
//   30,270 on both ubbulls.com and the university's naming-rights release.
//   Wikipedia's infobox says 29,013 and its body text says about 25,000.
//
// Section names come from each school's own announcements and fan guides.
// Memphis renumbered its bowl for 2026 (100s below the concourse, 200s
// above, rows restarting at 1), so pre-2026 section numbers are not used.
// Where no numbered breakdown could be sourced, the zone is named without
// numbers. `floor` is never used: there is no floor at a football game.
// No other team in teams.ts plays in any of these stadiums.

import type { Venue } from '../venue-types';

export const collegeVenues: Record<string, Venue> = {
  'albertsons-stadium': {
    id: 'albertsons-stadium',
    name: 'Albertsons Stadium',
    city: 'Boise',
    state: 'ID',
    capacity: 32423,
    type: 'stadium',
    homeTeams: ['Boise State Broncos Football'],
    description: 'Albertsons Stadium is home to Boise State Broncos football and the Famous Idaho Potato Bowl. It was dedicated on September 11, 1970, on Lyle Smith Field. Boise State installed blue turf in 1986, the first school to make an entire field a special color. The east side upper deck dates to 1975. The four-level Stueckle Sky Center, opened in 2008, holds 48 loge boxes, 832 club seats and 39 sky suites. The North End Zone, finished for 2026, replaced the old metal bleachers with about 1,600 premium seats in field-level suites, loge boxes and club seats. Outside the North End Zone, single-game tickets for 2026 started at $78. TicketScan tracks when tickets for Albertsons Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Albertsons Stadium tickets', 'Boise State Broncos tickets', 'Albertsons Stadium seating chart', 'Boise State football tickets', 'The Blue Boise', 'Boise football tickets'],
    faqs: [
      { question: 'What is Albertsons Stadium\'s capacity after the North End Zone project?', answer: 'Boise State\'s current facilities page lists 32,423. The school has not announced a new figure since the North End Zone opened in 2026, so other sources still quote the 36,387 capacity from 2012-2024. The rebuild replaced about 3,000 bleacher seats with about 1,600 premium seats, and the attendance record is 37,711, set against Washington State on September 28, 2024.' },
      { question: 'What is in the North End Zone at Albertsons Stadium?', answer: 'A two-story structure that replaced the old north end metal stands. It holds about 1,600 premium seats across field-level suites, loge boxes, ledge seats and club seats, plus a dining hall and team spaces for Boise State athletes. It also completed a concourse that runs all the way around the stadium.' },
    ],
    sections: [
      { name: 'West Sideline Lower', tier: 'lower' },
      { name: 'West Sideline Upper', tier: 'upper' },
      { name: 'East Sideline Lower', tier: 'lower' },
      { name: 'East Side Upper Deck', tier: 'upper' },
      { name: 'South End Zone', tier: 'lower' },
      { name: 'Stueckle Sky Center Club Seats', tier: 'club' },
      { name: 'Stueckle Sky Center Loge Boxes', tier: 'suite' },
      { name: 'Stueckle Sky Center Sky Suites', tier: 'suite' },
      { name: 'North End Zone Club & Ledge Seats', tier: 'club' },
      { name: 'North End Zone Loge Boxes', tier: 'suite' },
      { name: 'North End Zone Field-Level Suites', tier: 'suite' },
    ]
  },

  'simmons-bank-liberty-stadium': {
    id: 'simmons-bank-liberty-stadium',
    name: 'Simmons Bank Liberty Stadium',
    city: 'Memphis',
    state: 'TN',
    capacity: 45632,
    type: 'stadium',
    homeTeams: ['Memphis Tigers College Football'],
    description: 'Simmons Bank Liberty Stadium seats 45,632 for Memphis Tigers football after a $226.5 million renovation finished for the 2026 season, down from 58,325 before the work. The stadium opened in 1965 and is a memorial to veterans of World War I, World War II and the Korean War. The new four-level West Tower adds 26 luxury suites, 36 loge boxes and 370 club seats. Fans in the west side chairbacks, sections 101-109, 131 and 132, can use the new Landers Plaza. From 2026 the main concourse divides the bowl, with 100-level sections below it and 200-level sections above. A 47-by-114-foot south videoboard and a 284-foot ribbon board went in with the renovation. Season tickets for 2026 started at $99. TicketScan tracks Simmons Bank Liberty Stadium onsales and presale windows.',
    keywords: ['Simmons Bank Liberty Stadium tickets', 'Memphis Tigers football tickets', 'Simmons Bank Liberty Stadium seating chart', 'Liberty Stadium Memphis', 'Memphis football tickets', 'Liberty Stadium renovation'],
    faqs: [
      { question: 'Why did my Simmons Bank Liberty Stadium section and row change?', answer: 'Memphis renumbered the stadium for 2026. Seats below the main concourse keep 100-level numbers, seats above it are now in the 200s, and every section starts at Row 1. For example, the old Section 120, Row 40 is now Section 220, Row 12. Seat numbers did not change.' },
      { question: 'What is the capacity of Simmons Bank Liberty Stadium after the renovation?', answer: 'The official capacity is now 45,632. Older sources, including Memphis\'s own facilities page, still list 58,325 from before the renovation. The rebuild traded seats for the West Tower\'s suites, loge boxes and club seats, and a new North Tunnel took out part of Section 113.' },
    ],
    sections: [
      { name: 'West Side Chairbacks 101-109, 131-132', tier: 'lower' },
      { name: '100 Level Sideline', tier: 'lower' },
      { name: '100 Level End Zone', tier: 'lower' },
      { name: '901 Section (bleachers)', tier: 'lower' },
      { name: '200 Level Sideline', tier: 'upper' },
      { name: '200 Level End Zone', tier: 'upper' },
      { name: 'West Tower Club Seats', tier: 'club' },
      { name: 'West Tower Loge Boxes', tier: 'suite' },
      { name: 'West Tower Luxury Suites', tier: 'suite' },
    ]
  },
};
