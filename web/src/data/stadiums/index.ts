// Football stadiums, split into batch files purely so they can be authored
// and reviewed independently. Composed into `venues` by ../venues.ts.
import type { Venue } from '../venue-types';
import { nflStadiums } from './nfl.ts';
import { fbsStadiums1 } from './fbs-1.ts';
import { fbsStadiums2 } from './fbs-2.ts';
import { fbsStadiums3 } from './fbs-3.ts';
import { fbsStadiums4 } from './fbs-4.ts';
import { fbsStadiums5 } from './fbs-5.ts';
import { fbsStadiums6 } from './fbs-6.ts';
import { fbsStadiums7 } from './fbs-7.ts';
import { fbsStadiums8 } from './fbs-8.ts';
import { fbsStadiums9 } from './fbs-9.ts';
import { fbsStadiums10 } from './fbs-10.ts';

// Registered by batch so a test can compare them pairwise. The composed record
// cannot reveal a collision: object keys are unique, so two batches defining
// the same slug silently lose one of them.
export const batches: Record<string, Record<string, Venue>> = {
  nfl: nflStadiums,
  'fbs-1': fbsStadiums1,
  'fbs-2': fbsStadiums2,
  'fbs-3': fbsStadiums3,
  'fbs-4': fbsStadiums4,
  'fbs-5': fbsStadiums5,
  'fbs-6': fbsStadiums6,
  'fbs-7': fbsStadiums7,
  'fbs-8': fbsStadiums8,
  'fbs-9': fbsStadiums9,
  'fbs-10': fbsStadiums10,
};

export const stadiums: Record<string, Venue> = Object.assign({}, ...Object.values(batches));
