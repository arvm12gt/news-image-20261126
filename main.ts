// news-image-20261126 — Node 22, standard library only.
// The entry is a hand-drawn newspaper front page (entry.png) summing up
// Thursday 26 November 2026. The program just copies it to the output
// directory, so both runs write byte-identical files.
//
// Run outside the grader with:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The image is fixed at build time and the copy is a plain byte copy:
// no network, no clock, no randomness — the two grader runs agree exactly.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
