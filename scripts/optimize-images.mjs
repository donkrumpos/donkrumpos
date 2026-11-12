// Slims the case-study images and records every image's size.
//   node scripts/optimize-images.mjs
// Run it after adding images to public/images/projects/. It is safe to re-run.
//
// 1. Images used in src/ under /images/projects/ are capped at 1600px wide.
//    Thumbnails keep their format (link previews need JPG or PNG) and are
//    recompressed in place. Every other JPG or PNG becomes a WebP, the
//    original is removed, and the references in src/ are rewritten.
// 2. src/data/image-sizes.json is rewritten with the width and height of
//    every image in public/images/, so pages can set them and not jump as
//    images load.
import { readdirSync, readFileSync, writeFileSync, statSync, unlinkSync, existsSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const MAX_W = 1600;
const kb = (n) => `${Math.round(n / 1024)} KB`;

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]);

const srcFiles = walk(join(root, 'src')).filter((f) => /\.(md|mdx|astro|ts)$/.test(f));
const text = new Map(srcFiles.map((f) => [f, readFileSync(f, 'utf8')]));
const all = [...text.values()].join('\n');

const used = new Set(all.match(/\/images\/projects\/[\w.-]+\.(?:jpe?g|png)/g) ?? []);
const thumbs = new Set([...all.matchAll(/^thumbnail:\s*"([^"]+)"/gm)].map((m) => m[1]));

let before = 0, after = 0;
for (const ref of [...used].sort()) {
  const file = join(root, 'public', ref);
  if (!existsSync(file)) continue;
  const size = statSync(file).size;
  const isPng = extname(file) === '.png';
  const img = sharp(file).resize({ width: MAX_W, withoutEnlargement: true });

  if (thumbs.has(ref)) {
    // An indexed PNG has already been through here; quantizing it again
    // would only cost quality.
    if (isPng && (await sharp(file).metadata()).paletteBitDepth) continue;
    const buf = isPng
      ? await img.png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer()
      : await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    // Only keep a result that is clearly smaller, so re-runs change nothing.
    if (buf.length < size * 0.9) {
      writeFileSync(file, buf);
      console.log(`${ref}: ${kb(size)} -> ${kb(buf.length)}`);
      before += size; after += buf.length;
    }
    continue;
  }

  const webpRef = ref.replace(/\.(?:jpe?g|png)$/, '.webp');
  const buf = await img.webp({ quality: isPng ? 86 : 80 }).toBuffer();
  writeFileSync(join(root, 'public', webpRef), buf);
  unlinkSync(file);
  for (const [f, t] of text) {
    if (t.includes(ref)) text.set(f, t.split(ref).join(webpRef));
  }
  console.log(`${ref}: ${kb(size)} -> ${kb(buf.length)} (webp)`);
  before += size; after += buf.length;
}
for (const f of srcFiles) {
  if (text.get(f) !== readFileSync(f, 'utf8')) writeFileSync(f, text.get(f));
}
if (before) console.log(`total: ${kb(before)} -> ${kb(after)}`);

// The size manifest.
const sizes = {};
const imagesDir = join(root, 'public', 'images');
for (const file of walk(imagesDir).sort()) {
  if (!/\.(jpe?g|png|webp|svg|avif|gif)$/.test(file)) continue;
  try {
    const { width, height } = await sharp(file).metadata();
    if (width && height) sizes[`/images/${relative(imagesDir, file)}`] = [width, height];
  } catch { /* not an image sharp can read; leave it out */ }
}
writeFileSync(join(root, 'src/data/image-sizes.json'), JSON.stringify(sizes, null, 1) + '\n');
console.log(`image-sizes.json: ${Object.keys(sizes).length} images`);
