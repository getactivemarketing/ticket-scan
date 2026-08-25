#!/usr/bin/env node
/**
 * TicketScan venue cleanup pass.
 *
 *   node venue-cleanup.js            # dry run — prints a report, writes nothing
 *   node venue-cleanup.js --apply    # rewrites src/data/venues.ts in place
 *
 * Removes claims the product cannot currently deliver (no working price source),
 * strips coupon/deal keyword phrasing, drops stale hardcoded event calendars,
 * and removes the "where can I compare prices" FAQ.
 *
 * Openers and closers are REGENERATED from each venue's own structured fields
 * rather than regex-edited, so the prose stays grammatical.
 * Anything ambiguous is FLAGGED for human review, never silently rewritten.
 */
const fs = require('fs');
const path = require('path');

const FILE = path.resolve('src/data/venues.ts');
const APPLY = process.argv.includes('--apply');

let src = fs.readFileSync(FILE, 'utf8');
const orig = src;

// ---------- helpers ----------
const unesc = s => s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
const esc   = s => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const MONTHS = /(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}/g;

// sentence classifiers
const isCalendar = s =>
  /official calendar currently lists|slate is loaded/i.test(s) ||
  (s.match(MONTHS) || []).length >= 2;

const isCloserPrice = s =>
  /use ticketscan to compare|compare the same (seat zone|section)|compare ticketmaster, seatgeek, and stubhub|track .{0,30}prices? and set|set (a )?free (ticketscan )?alerts?|let the alert do|instead of (overpaying|letting|rewarding)|before the first inflated/i.test(s) ||
  // short standalone price CTAs, e.g. "Track prices for concerts, sports, and special events."
  /^(track|compare|find|get)\b[^.]{0,80}\b(price|prices|deal|deals|cheap)\b[^.]{0,60}\.$/i.test(s.trim());

const isOpenerPrice = s =>
  /^(compare|find cheap|get the best prices|track prices)/i.test(s.trim());

const PRICEY = /(price|prices|pricing|cheap|deal|all-in total|inflated|fees? before)/i;

// ---------- parse venue blocks ----------
const blocks = [...src.matchAll(/^  '([a-z0-9-]+)': \{([\s\S]*?)^  \},?$/gm)];
if (!blocks.length) { console.error('No venue blocks matched — aborting.'); process.exit(1); }

const field = (body, name) => {
  const m = body.match(new RegExp(`${name}: '((?:[^'\\\\]|\\\\.)*)'`));
  return m ? unesc(m[1]) : null;
};
const num = (body, name) => {
  const m = body.match(new RegExp(`${name}: (\\d+)`));
  return m ? parseInt(m[1], 10) : null;
};

const report = { rewritten: [], flagged: [], kwStripped: [], faqRemoved: [], calendarRemoved: [] };

for (const b of blocks) {
  const slug = b[1];
  const body = b[2];

  const name = field(body, 'name');
  const city = field(body, 'city');
  const state = field(body, 'state');
  const cap = num(body, 'capacity');
  const type = field(body, 'type') || 'venue';
  const teamsM = body.match(/homeTeams: \[([^\]]*)\]/);
  const teams = teamsM ? [...teamsM[1].matchAll(/'([^']+)'/g)].map(m => m[1]) : [];

  // ----- description -----
  const dm = body.match(/description: '((?:[^'\\]|\\.)*)'/);
  if (dm) {
    const desc = unesc(dm[1]);
    const sents = desc.split(/(?<=\.)\s+/).filter(Boolean);

    const kept = [];
    let droppedCal = 0, droppedCloser = 0, droppedOpener = 0;
    const flags = [];

    sents.forEach((s, i) => {
      if (isCalendar(s))            { droppedCal++;    report.calendarRemoved.push(slug); return; }
      if (isCloserPrice(s))         { droppedCloser++; return; }
      if (i === 0 && isOpenerPrice(s)) { droppedOpener++; return; }
      if (PRICEY.test(s))           { flags.push(s.trim()); kept.push(s); return; } // keep, but flag
      kept.push(s);
    });

    // Only synthesise an opener when deleting left too little to lead with.
    // Prepending a generated sentence to prose that already covers the same
    // ground produces redundancy — deleting the price opener reads better.
    let opener = null;
    if (kept.length === 0) {
      const capStr = cap ? `${cap.toLocaleString()}-seat ` : '';
      // article must agree with how the NUMBER is spoken: 8, 11, 18 take 'an'
      const spokenVowel = n => /^(8|11|18)/.test(String(n));
      const article = capStr ? (spokenVowel(cap) ? 'an' : 'a')
                             : (/^[aeiou]/i.test(type) ? 'an' : 'a');
      const withThe = teams.map(t => /^(the )/i.test(t) ? t : `the ${t}`);
      const homeStr = withThe.length
        ? `, home to ${withThe.length === 2 ? withThe.join(' and ') : withThe.join(', ')}`
        : '';
      opener = `${name} is ${article} ${capStr}${type} in ${city}, ${state}${homeStr}.`;
    }

    // standard closer — describes only what the product can actually do today
    const closer = `TicketScan tracks when tickets for ${name} events go on sale, including presale windows that open before the public onsale.`;

    const rebuilt = [opener, ...kept.map(s => s.trim()), closer].filter(Boolean).join(' ');

    if (rebuilt !== desc) {
      src = src.replace(`description: '${dm[1]}'`, `description: '${esc(rebuilt)}'`);
      report.rewritten.push({ slug, droppedOpener, droppedCloser, droppedCal, flags });
    }
    if (flags.length) report.flagged.push({ slug, flags });
    const words = rebuilt.split(/\s+/).length;
    if (words < 45) (report.thin = report.thin || []).push({ slug, words });
  }

  // ----- keywords: strip coupon/deal phrasing -----
  const km = body.match(/keywords: \[([^\]]*)\]/);
  if (km) {
    const kws = [...km[1].matchAll(/'((?:[^'\\]|\\.)*)'/g)].map(m => m[1]);
    const clean = kws.filter(k => !/(cheap|discount|promo code|coupon|best price|deals?)/i.test(unesc(k)));
    if (clean.length !== kws.length) {
      const rebuilt = clean.map(k => `'${k}'`).join(', ');
      src = src.replace(km[0], `keywords: [${rebuilt}]`);
      report.kwStripped.push({ slug, removed: kws.filter(k => !clean.includes(k)).map(unesc) });
    }
  }
}

// ----- FAQs -----
// (a) remove "where can I compare prices" entries entirely
const faqRx = /\s*\{ question: '[^']*compare[^']*price[^']*'[^}]*\},?/gi;
const faqHits = src.match(faqRx) || [];
if (faqHits.length) {
  src = src.replace(faqRx, '');
  report.faqRemoved = faqHits.map(h => (h.match(/question: '([^']*)'/) || [])[1]);
}

// (b) remove "what events are coming up" FAQs — answered by a hardcoded calendar
//     that goes stale, and the page already renders live events from the API
const calFaqRx = /\s*\{ question: '[^']*(coming up|upcoming events)[^']*'[^}]*\},?/gi;
const calHits = src.match(calFaqRx) || [];
if (calHits.length) {
  src = src.replace(calFaqRx, '');
  report.faqRemoved.push(...calHits.map(h => (h.match(/question: '([^']*)'/) || [])[1]));
}

// (c) trim price-comparison sentences out of surviving FAQ answers, keeping the rest
let trimmed = 0;
src = src.replace(/answer: '((?:[^'\\]|\\.)*)'/g, (full, a) => {
  const kept = unesc(a).split(/(?<=\.)\s+/)
    .filter(sn => !isCloserPrice(sn) && !/all-in total|compare the same (section|seat)/i.test(sn));
  const out = kept.join(' ').trim();
  if (out === unesc(a) || !out) return full;
  trimmed++;
  return `answer: '${esc(out)}'`;
});
report.faqTrimmed = trimmed;

// ---------- report ----------
const line = '─'.repeat(72);
console.log(line);
console.log(APPLY ? 'VENUE CLEANUP — APPLYING' : 'VENUE CLEANUP — DRY RUN (nothing written)');
console.log(line);
console.log(`venues parsed            : ${blocks.length}`);
console.log(`descriptions rewritten   : ${report.rewritten.length}`);
console.log(`  price openers removed  : ${report.rewritten.reduce((a, r) => a + r.droppedOpener, 0)}`);
console.log(`  price closers removed  : ${report.rewritten.reduce((a, r) => a + r.droppedCloser, 0)}`);
console.log(`  stale calendars removed: ${report.rewritten.reduce((a, r) => a + r.droppedCal, 0)}`);
console.log(`keyword arrays cleaned   : ${report.kwStripped.length}`);
console.log(`FAQs removed             : ${report.faqRemoved.length}`);
console.log(`FAQ answers trimmed      : ${report.faqTrimmed || 0}`);
console.log(`bytes: ${orig.length} → ${src.length} (${src.length - orig.length})`);

if (report.kwStripped.length) {
  console.log('\nKEYWORDS REMOVED');
  report.kwStripped.forEach(k => console.log(`  ${k.slug.padEnd(24)} ${k.removed.join(' · ')}`));
}
if (report.faqRemoved.length) {
  console.log('\nFAQs REMOVED');
  report.faqRemoved.forEach(q => console.log(`  "${q}"`));
}
if (report.thin && report.thin.length) {
  console.log('\n📝 THIN AFTER CLEANUP — under 45 words. Hand these to the content agents');
  console.log('   to expand using the venue-guide template (facts only, no price claims):');
  report.thin.forEach(t => console.log(`  ${t.slug.padEnd(24)} ${t.words} words`));
}
if (report.flagged.length) {
  console.log('\n⚠  FLAGGED FOR HUMAN REVIEW — kept in place, contain price language,');
  console.log('   too context-dependent to rewrite automatically:');
  report.flagged.forEach(f => {
    console.log(`\n  [${f.slug}]`);
    f.flags.forEach(s => console.log(`    • ${s.slice(0, 150)}`));
  });
}

if (APPLY) {
  fs.writeFileSync(FILE + '.bak', orig);
  fs.writeFileSync(FILE, src);
  console.log(`\n✓ written. backup at ${path.basename(FILE)}.bak`);
  console.log('  next: npx tsc --noEmit   (or your build) to confirm it still compiles');
} else {
  console.log('\nRun with --apply to write. A .bak is created automatically.');
}
