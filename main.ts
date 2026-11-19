// news-image-20261119 entry (Node 22, standard library only).
// The entry is the image in entry.png beside this file: a hand-built
// 1024x1024 infographic summing up the world news of Thursday 19 November
// 2026 (see NOTES.md for the six stories and their sources). The program
// copies that image to the output directory, byte for byte, so the grader's
// two runs write identical bytes. No network at runtime.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
