// Builds the link-preview images in public/images/og/.
//   node scripts/build-og.mjs
// default.jpg  : scripts/og-card.html, rendered by a headless Chromium
//                (set CHROME to the binary if it is not in /Applications).
// <slug>.jpg   : for case studies whose thumbnail is an SVG (link previews
//                cannot show one) or a very tall full-page capture. The case
//                study uses this card whenever the file exists.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const out = (name) => fileURLToPath(new URL(`public/images/og/${name}`, root));
const W = 1200, H = 630, PAPER = '#fbf8f1';

const chrome = process.env.CHROME ?? '/Applications/Chromium.app/Contents/MacOS/Chromium';
const png = out('default.png');
execFileSync(chrome, [
  '--headless', '--hide-scrollbars', `--window-size=${W},${H + 300}`,
  '--virtual-time-budget=8000', `--screenshot=${png}`,
  new URL('scripts/og-card.html', root).href,
], { stdio: 'ignore' });
// The window is taller than the card (headless Chromium's viewport runs
// short of its window size); keep the top 1200 x 630.
await sharp(png).extract({ left: 0, top: 0, width: W, height: H }).jpeg({ quality: 86 }).toFile(out('default.jpg'));
execFileSync('rm', [png]);

// SVG thumbnails -> a raster card. Add a line here for each new one.
const svgCards = { 'dclt-donor-pipeline': 'public/images/projects/dclt-pipeline-thumb.svg' };
for (const [slug, src] of Object.entries(svgCards)) {
  const art = await sharp(fileURLToPath(new URL(src, root)), { density: 200 })
    .resize(W - 120, H - 80, { fit: 'inside' })
    .toBuffer();
  await sharp({ create: { width: W, height: H, channels: 3, background: PAPER } })
    .composite([{ input: art, gravity: 'centre' }])
    .jpeg({ quality: 88 })
    .toFile(out(`${slug}.jpg`));
}
// Very tall thumbnails (full-page captures) -> the top of the page, cropped.
const tallCards = { pattersondental: 'public/images/projects/pattersondental.jpg' };
for (const [slug, src] of Object.entries(tallCards)) {
  await sharp(fileURLToPath(new URL(src, root)))
    .resize(W, H, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 84 })
    .toFile(out(`${slug}.jpg`));
}
console.log('og images written to public/images/og/');
