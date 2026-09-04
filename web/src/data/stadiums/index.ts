// Football stadiums, split into batch files purely so they can be authored
// and reviewed independently. Composed into `venues` by ../venues.ts.
import type { Venue } from '../venue-types';
import { nflStadiums } from './nfl.ts';

export const stadiums: Record<string, Venue> = {
  ...nflStadiums,
};
