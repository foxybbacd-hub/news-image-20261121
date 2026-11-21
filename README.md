# World News, Saturday 21 November 2026

[![news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/foxybbacd-hub/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/foxybbacd-hub/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

One image summing up the world's news of **Saturday 21 November 2026**, drawn in code (HTML/CSS/SVG, set in the Inter typeface) and rendered to `entry.png` at 1024×1024.

## The six stories

1. **Russian missiles land in Poland** — one of the war's largest barrages hits Kyiv; two missiles and a drone come down in Poland, and Warsaw calls it a deliberate provocation.
2. **Markets tumble into correction** — the S&P 500 falls 3.7%; the Nasdaq wipes out its 2026 gains.
3. **UK and EU sign landmark deal** — three post-Brexit pacts on food, carbon and youth mobility.
4. **COP31 deadlocked on fossil fuels** — climate talks in Antalya run past their deadline.
5. **Cancer pill breakthrough** — tumours undetectable in 1 in 12 patients in a pancreatic cancer trial.
6. **GTA 6 takes $3.8bn on day one** — the biggest entertainment launch in history.

Also today: Gen Z protests spread across 25 European countries; Anthropic lists on Wall Street at a $2 trillion value; the FBI database is hacked in a wave of US outages.

## How it is built

`poster.html` is the poster, drawn entirely in code — no photographs, no downloaded images. `render-poster-20261121.mjs` (in `~/workspace/makefun/tools`) serves the repo locally and screenshots it at 1024×1024 with headless Chromium. `main.ts` copies `entry.png` to `/output/entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This entry is for the [make.fun bounty news-image-20261121](https://make.fun/bounty/news-image-20261121).
