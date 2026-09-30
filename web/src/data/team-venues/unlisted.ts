// Researched venue guides that are NOT published, because Ticketmaster's
// Discovery API lists none of their home events, so each page would list no
// events forever (the stadium spec's rule: omit rather than publish an empty
// page). Checked 2026-09-30:
//
// - Rogers Centre: Blue Jays home games sell through Ticketmaster Canada. The
//   Discovery venue KovZpa3Bbe has 0 events, and the Jays' attraction
//   (K8vZ91718W0) lists only road games.
// - Broadview Stadium: the UB Stadium venue KovZpZAatJJA has 0 events, and
//   the Bulls' attraction (K8vZ917G2uV) lists only road games.
//
// Nothing imports this file. To publish one, move it into its batch
// (mlb-2.ts / college.ts), pin its id in scripts/build-venue-ids.mjs, and set
// the team's homeVenueSlug in teams.ts. Sources are in those batches' headers.
import type { Venue } from '../venue-types';

export const unlistedVenues: Record<string, Venue> = {
  'rogers-centre': {
    id: 'rogers-centre',
    name: 'Rogers Centre',
    city: 'Toronto',
    state: 'ON',
    capacity: 39150,
    type: 'stadium',
    homeTeams: ['Toronto Blue Jays'],
    description: 'Rogers Centre opened in 1989 as SkyDome, the first stadium with a fully retractable motorized roof, and sits at the foot of the CN Tower in downtown Toronto. A renovation of nearly C$400 million over 2023 and 2024 rebuilt the outfield into the Outfield District, with mostly general-admission spaces such as the WestJet Flight Deck, Corona Rooftop Patio and TD Park Social, and then redid the 100 level. Home Plate Reserved covers sections 120-127, with Dugout Reserved, Baseline Reserved and Corner Reserved running out from there. Premium areas include the KPMG Blueprint Club, TD Lounge and Rogers Terrace (221-227). The 500 Level, from Home Plate 521-527 to Outfield 508-511 and 537-540, holds the lowest prices. TicketScan tracks when tickets for Rogers Centre events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Rogers Centre tickets', 'Toronto Blue Jays tickets', 'Rogers Centre seating chart', 'Blue Jays tickets', 'SkyDome tickets', 'Rogers Centre events 2026'],
    faqs: [
      { question: 'What is the capacity of Rogers Centre for baseball?', answer: 'About 39,150 seats after the 2023-24 renovation, as reported by the Toronto Star in 2024. MLB.com\'s 2026 ballpark guide says only "over 41,000" and gives no exact number; that figure likely includes the standing and general-admission spaces in the Outfield District.' },
      { question: 'What is the Outfield District at Rogers Centre?', answer: 'The rebuilt outfield from the 2023 renovation: social spaces including the WestJet Flight Deck, Corona Rooftop Patio, TD Park Social, The Catch Bar and The Stop. Most of it is general admission, open to fans with the matching ticket.' },
    ],
    sections: [
      { name: 'Home Plate Reserved 120-127', tier: 'lower' },
      { name: 'Dugout Reserved 116-119, 128-132', tier: 'lower' },
      { name: 'Baseline Reserved 113-115, 133-137', tier: 'lower' },
      { name: 'Corner Reserved 108-112, 138-141', tier: 'lower' },
      { name: '100 Level Outfield 101-103, 142-148', tier: 'lower' },
      { name: 'KPMG Blueprint Club', tier: 'club' },
      { name: 'TD Lounge', tier: 'club' },
      { name: 'Rogers Terrace 221-227', tier: 'club' },
      { name: '200 Level Infield 217-220, 228-231', tier: 'upper' },
      { name: '200 Level Outfield 204-211, 237-244', tier: 'upper' },
      { name: '500 Level Home Plate 521-527', tier: 'upper' },
      { name: '500 Level Infield 516-520, 528-532', tier: 'upper' },
      { name: '500 Level Outfield 508-511, 537-540', tier: 'upper' },
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
    description: 'Broadview Stadium seats 30,270 for University at Buffalo Bulls football on the UB campus in Amherst. It was called UB Stadium until March 11, 2026, when a 15-year naming deal with Broadview Federal Credit Union, valued at $31.75 million, renamed it. The stadium was completed in the summer of 1993 and hosted track and field and the closing ceremonies of that year\'s World University Games. It is also home to UB women\'s soccer and track and field. There are 12 luxury suites and a 45-seat press box. The Champions Club Plus seats, sections 205 and 207 in rows A-E, are the best chairbacks between the 40-yard lines. The bleachers are where the value is. TicketScan tracks when tickets for Broadview Stadium events go on sale, including presale windows that open before the public onsale.',
    keywords: ['Broadview Stadium tickets', 'UB Stadium tickets', 'Buffalo Bulls football tickets', 'Broadview Stadium seating chart', 'University at Buffalo football tickets', 'Amherst NY football tickets'],
    faqs: [
      { question: 'Is Broadview Stadium the same as UB Stadium?', answer: 'Yes. UB Stadium was renamed Broadview Stadium on March 11, 2026, under a naming-rights deal with Broadview Federal Credit Union. Alumni Arena became Broadview Arena under the same deal. Older tickets, maps and directions may still use the UB Stadium name.' },
      { question: 'How many seats does Broadview Stadium have?', answer: 'The University at Buffalo lists 30,270. Some third-party sources give 29,013 or about 25,000, but the school\'s own figure is the one used here.' },
    ],
    sections: [
      { name: 'Champions Club Plus 205 & 207 (rows A-E)', tier: 'club' },
      { name: 'Champions Club (concourse)', tier: 'club' },
      { name: 'Champions Club (on-field)', tier: 'club' },
      { name: 'Sideline Chairbacks', tier: 'lower' },
      { name: 'West Sideline', tier: 'lower' },
      { name: 'East Sideline', tier: 'lower' },
      { name: 'End Zone Bleachers', tier: 'upper' },
      { name: 'Luxury Suites', tier: 'suite' },
    ]
  },
};
