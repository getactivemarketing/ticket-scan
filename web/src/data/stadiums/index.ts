// Football stadiums, split into batch files purely so they can be authored
// and reviewed independently. Composed into `venues` by ../venues.ts.
import type { Venue } from '../venue-types';
import { nflStadiums } from './nfl.ts';

// Registered by batch so a test can compare them pairwise. The composed record
// cannot reveal a collision: object keys are unique, so two batches defining
// the same slug silently lose one of them.
export const batches: Record<string, Record<string, Venue>> = {
  nfl: nflStadiums,
};

export const stadiums: Record<string, Venue> = Object.assign({}, ...Object.values(batches));
