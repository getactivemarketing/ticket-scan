// Home venues for the teams whose pages had none: MLB ballparks, NBA and NHL
// arenas, and three college stadiums. Split into batch files so they can be
// authored and reviewed independently, the same as ../stadiums/. Composed
// into `venues` by ../venues.ts.
import type { Venue } from '../venue-types';
import { mlbVenues1 } from './mlb-1.ts';
import { mlbVenues2 } from './mlb-2.ts';
import { nbaVenues } from './nba.ts';
import { nhlVenues } from './nhl.ts';
import { collegeVenues } from './college.ts';

// Registered by batch so a test can compare them pairwise; see ../stadiums/index.ts.
export const teamVenueBatches: Record<string, Record<string, Venue>> = {
  'mlb-1': mlbVenues1,
  'mlb-2': mlbVenues2,
  nba: nbaVenues,
  nhl: nhlVenues,
  college: collegeVenues,
};

export const teamVenues: Record<string, Venue> = Object.assign({}, ...Object.values(teamVenueBatches));
