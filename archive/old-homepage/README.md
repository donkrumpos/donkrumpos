# Old donkrumpos.com homepage — "Don's corner of the universe"

Recovered 2026-09-07 from the Wayback Machine. The original files were deleted from
themisto after the Sep 2025 host migration (`donkrumpos.tar.gz` was verified then removed;
`/var/www/donkrumpos` now holds only a Nov 2025 placeholder). Only the old WordPress
portfolio database survives on the server (dumped to `../donkrumpos_database.sql.gz`).

## Provenance

- `index.html` — snapshot 2025-02-15 (byte-identical to captures from 2018 and 2022,
  so this design was live roughly 2015–2025)
- `css/base.css`, `js/*`, `favicon/*`, `img/backgrounds/hi/today.jpg` — crawl of 2025-04-01
- `img/compass.png`, `img/dk-logo.png`, `img/map-tile.png`, `img/dark-denim-3.png` —
  crawls of 2017–2018 (not re-crawled later; same design, so same assets)

All files are original bytes (`id_` Wayback endpoint), unmodified.

## What the page does

Full-viewport **circular porthole** (a square div sized to the smaller viewport dimension,
`border-radius: 50%`) showing a hazy sepia wetland photo (`img/backgrounds/hi/today.jpg`,
2048×2048 — the filename suggests it was meant to rotate daily). Over it: a translucent
antique-map tile texture, CSS-gradient vignette on all four edges, dark denim texture on
the page body, the masking-tape **DK monogram** floating with mouse parallax (desktop) or
device-tilt (mobile), and a compass in the corner rotating once per 180s at 25% opacity.
A commented-out caption reads "Photo: Sutter's Mill, American River, Coloma, California."

Stack: jQuery 1.7.2 + a React 16 stub (`js/app.js` renders a "Product Customizer will go
herezz" placeholder — never finished).

## Not recovered (never archived)

- `img/backgrounds/low/frontenac.jpg` — the background the CSS actually loads into the
  porthole. Never archived, so the file at that path here is a **stand-in copy of
  `hi/today.jpg`** (added 2026-09-07 so the page renders as intended — without it the
  circle is just the dark map texture). Not original bytes.
- `fonts/` — icomoon, Mensch, Wisdom Script webfonts. No visible text on the homepage
  uses them, so the render is unaffected. Mensch and Wisdom Script are free fonts and
  re-downloadable if ever needed.

## Viewing locally

Relative asset paths work as-is; serve the folder statically:

```bash
python3 -m http.server 8642 -d .
```

jQuery/React load from CDNs (still live). The `http://cdnjs...gsap/latest/TweenMax.min.js`
URL is dead (cdnjs dropped `latest` aliases), but nothing in `script.js` calls TweenMax.
