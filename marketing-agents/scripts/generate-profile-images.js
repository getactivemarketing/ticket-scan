#!/usr/bin/env node

/**
 * Generates platform-specific profile images from the master 1024x1024 source.
 * Usage: node marketing-agents/scripts/generate-profile-images.js
 */

import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '../..');

// Note: the logos directory has a trailing space in its name
const SOURCE = resolve(rootDir, 'logos /ticketscan_profile_1024_v2.png');
const OUT_DIR = resolve(rootDir, 'logos/social');

const SIZES = [
  { name: 'twitter_400x400.png', width: 400, height: 400 },
  { name: 'instagram_320x320.png', width: 320, height: 320 },
  { name: 'tiktok_200x200.png', width: 200, height: 200 },
];

async function generate() {
  if (!existsSync(SOURCE)) {
    console.error(`Source not found: ${SOURCE}`);
    process.exit(1);
  }

  if (!existsSync(OUT_DIR)) {
    mkdirSync(OUT_DIR, { recursive: true });
  }

  for (const size of SIZES) {
    const outPath = resolve(OUT_DIR, size.name);
    await sharp(SOURCE)
      .resize(size.width, size.height, { fit: 'cover' })
      .png()
      .toFile(outPath);
    console.log(`Created: ${size.name} (${size.width}x${size.height})`);
  }

  console.log(`\nAll images saved to ${OUT_DIR}`);
}

generate().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
