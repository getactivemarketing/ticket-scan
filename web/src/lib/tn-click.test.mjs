import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidKind, isValidSlug, destinationUrl, sanitizeSid, buildClickUrl } from './tn-click.mjs';

test('only the four known kinds are valid', () => {
  for (const k of ['performers', 'venues', 'category', 'top']) assert.equal(isValidKind(k), true);
  for (const k of ['', 'Performers', '../etc', 'events', undefined]) assert.equal(isValidKind(k), false);
});

test('slugs are lowercase, hyphenated and bounded', () => {
  assert.equal(isValidSlug('bruno-mars-tickets'), true);
  assert.equal(isValidSlug('nba-tickets'), true);
  for (const s of ['', '-leading', 'Upper-Case', 'has space', 'has/slash', 'has.dot', 'a'.repeat(121), undefined]) {
    assert.equal(isValidSlug(s), false, `expected ${JSON.stringify(s)} to be rejected`);
  }
});

test('destinationUrl builds ticketnetwork.com paths and nothing else', () => {
  assert.equal(destinationUrl('performers', 'bruno-mars-tickets'), 'https://www.ticketnetwork.com/performers/bruno-mars-tickets');
  assert.equal(destinationUrl('venues', 'msg-tickets'), 'https://www.ticketnetwork.com/venues/msg-tickets');
  assert.equal(destinationUrl('category', 'comedy-tickets'), 'https://www.ticketnetwork.com/category/comedy-tickets');
  assert.equal(destinationUrl('top', 'concert-tickets'), 'https://www.ticketnetwork.com/concert-tickets');
});

test('destinationUrl cannot be steered off ticketnetwork.com', () => {
  for (const [kind, slug] of [
    ['performers', '../../evil.com'],
    ['performers', 'evil.com'],
    ['https://evil.com', 'x'],
    ['top', '//evil.com'],
    ['performers', 'a/b'],
  ]) {
    assert.equal(destinationUrl(kind, slug), null, `${kind}/${slug} should not resolve`);
  }
});

test('sanitizeSid strips everything CJ disallows and caps at 64 characters', () => {
  assert.equal(sanitizeSid('combo-atlanta-comedy'), 'combo-atlanta-comedy');
  assert.equal(sanitizeSid('venue/madison sq. garden'), 'venuemadisonsqgarden');
  assert.equal(sanitizeSid('a'.repeat(80)).length, 64);
  assert.equal(sanitizeSid(undefined), '');
});

test('buildClickUrl wraps the destination with the PID, AID and sid', () => {
  const url = buildClickUrl({ pid: '1234567', aid: '98765432', kind: 'performers', slug: 'bruno-mars-tickets', sid: 'city-chicago' });
  assert.ok(url.startsWith('https://www.anrdoezrs.net/click-1234567-98765432?'));
  assert.ok(url.includes('url=https%3A%2F%2Fwww.ticketnetwork.com%2Fperformers%2Fbruno-mars-tickets'));
  assert.ok(url.includes('sid=city-chicago'));
});

test('buildClickUrl returns null when credentials or the target are missing', () => {
  const ok = { pid: '1', aid: '2', kind: 'performers', slug: 'x-tickets', sid: 's' };
  assert.equal(buildClickUrl({ ...ok, pid: undefined }), null);
  assert.equal(buildClickUrl({ ...ok, aid: '' }), null);
  assert.equal(buildClickUrl({ ...ok, kind: 'nope' }), null);
  assert.equal(buildClickUrl({ ...ok, slug: 'NOPE' }), null);
});

test('the click domain is overridable, since CJ rotates them', () => {
  const url = buildClickUrl({ pid: '1', aid: '2', domain: 'tkqlhce.com', kind: 'top', slug: 'concert-tickets' });
  assert.ok(url.startsWith('https://www.tkqlhce.com/click-1-2?'));
});
