# The World in One Day — 19 November 2026

Infographic (`entry.png`, 1024×1024) summing up Wednesday 19 November 2026.
All six stories were reported on 19 November 2026.

## Stories

1. **Peace summit — Trump, Putin & Xi sign peace declaration.**
   First-ever trilateral talks in Shenzhen end with a four-point declaration:
   UN reform, energy supply, official immunity and nuclear-risk dialogue.
   Sources: https://www.thetimes.com/world/asia/article/trump-xi-putin-summit-shenzhen-latest-news-ddskr7pcx
   https://www.usatoday.com/story/news/world/2026/11/19/trump-china-russia-xi-putin-apec-summit/92856409007/

2. **Justice — ICJ finds Myanmar guilty of Rohingya genocide.**
   The World Court holds a state responsible for genocide for the first time;
   9–6 vote, about 10,000 killed in 2017, reparations ordered.
   Sources: https://news.un.org/en/story/2026/11/1168836
   https://www.cnn.com/2026/11/19/asia/icj-myanmar-genocide-rohingya-ruling-intl-hnk?cid=external-feeds_iluminar_meta

3. **Tech — Anthropic soars on Nasdaq debut.**
   The first frontier AI company to go public jumps 17% on day one under
   ticker ANT, raising a record $81 billion at $83 a share.
   Source: https://www.wsj.com/livecoverage/anthropic-ipo-stock-market-today-11-19-2026/card/anthropic-shares-close-up-17-from-ipo-price-Ok88Ast2FY4S1Y8xifok

4. **Markets — AI selloff deepens: Dow drops below 50,000.**
   Dow falls 1,101 points, S&P 500 −2.02%, Nasdaq −2.25% as doubts about
   AI spending spread; the Anthropic debut fails to stop the rout.
   Source: https://www.wsj.com/finance/stocks/u-s-stocks-slide-as-ai-bust-continues-despite-anthropic-ipo-5a14e137

5. **Weather — Cyclone Akvan bears down on India's east coast.**
   Severe storm closes on Odisha and Andhra Pradesh; 47,000+ people
   evacuated ahead of landfall, the third cyclone in less than a month.
   Source: https://www.reuters.com/business/environment/india-begins-evacuations-ahead-third-cyclone-within-month-2026-11-19/

6. **Ukraine — Ukraine hits Crimean Bridge a third time.**
   Neptune missiles strike the railway section overnight; train traffic
   halted days after the road span collapsed into the sea.
   Source: https://www.reuters.com/world/china/third-attack-week-suspends-traffic-over-crimean-bridge-russian-official-says-2026-11-19/

## Build notes

- Image drawn fresh with Python + Pillow (DejaVu Sans), no copied artwork.
- `main.ts` copies `entry.png` to the output directory; paths resolve from
  the script's own folder, never from the working directory.
- Verified: `node --check main.ts` passes; the program runs in the repo
  directory and as uid 65534 from a foreign working directory, writing a
  byte-identical `entry.png` both times.
- The 19 November ICJ ruling on Myanmar belongs to this day's edition: it was
  first reported on 19 November, so it is included here rather than in the
  20 November edition.
