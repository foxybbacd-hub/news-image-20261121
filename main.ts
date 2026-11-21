// A news-image-daily entry for Saturday 21 November 2026 (Node 22, standard library only).
// Its image is the entry.png beside this file: a news poster I drew in code
// (poster.html, rendered with headless Chromium) summing up the day's news —
// Russian missiles landing in Poland, the AI stock sell-off, the UK-EU landmark
// deal, the COP31 fossil-fuel deadlock, the pancreatic cancer pill trial and
// GTA 6's $3.8bn first day — and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
