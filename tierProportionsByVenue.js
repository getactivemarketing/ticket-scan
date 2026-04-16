// Per-venue tier multipliers, mirrored from web/src/data/venues.ts.
// Used by index.js's estimateTierPrices() to interpolate per-tier prices
// from each platform's aggregate min/max.
//
// IMPORTANT: Keep this file in sync with web/src/data/venues.ts.
// When adding venues or changing tier coverage there, regenerate this file
// using the script in docs/superpowers/plans/2026-04-16-tier-estimates.md Task 1.

module.exports = {
  "kia-center": {
    "upper": 1,
    "lower": 1.5,
    "club": 2,
    "floor": 3
  },
  "kaseya-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "msg": {
    "upper": 1,
    "lower": 1.5,
    "club": 2,
    "floor": 3
  },
  "crypto-arena": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "united-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "td-garden": {
    "upper": 1,
    "lower": 1.5,
    "club": 2,
    "floor": 3
  },
  "wells-fargo-center": {
    "upper": 1,
    "lower": 1.5,
    "club": 2,
    "floor": 3
  },
  "american-airlines-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "toyota-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "footprint-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "chase-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "ball-arena": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "state-farm-arena": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "barclays-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "capital-one-arena": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "little-caesars-arena": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "fiserv-forum": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "target-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "smoothie-king-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "scotiabank-arena": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "t-mobile-arena": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "climate-pledge-arena": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "prudential-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  },
  "golden-1-center": {
    "upper": 1,
    "lower": 1.5,
    "floor": 3
  }
};
