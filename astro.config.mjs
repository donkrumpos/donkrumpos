import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// Read a flag from each content file's frontmatter, so the sitemap can follow
// what the content says instead of a hand-kept list of URLs.
const entries = (dir) =>
  readdirSync(new URL(`./src/content/${dir}/`, import.meta.url))
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith('_'))
    .map((f) => {
      const text = readFileSync(new URL(`./src/content/${dir}/${f}`, import.meta.url), 'utf8');
      const front = text.split(/^---\s*$/m)[1] ?? '';
      const flag = (name) => front.match(new RegExp(`^${name}:\\s*(true|false)`, 'm'))?.[1];
      return { slug: f.replace(/\.mdx?$/, ''), flag };
    });

// Unlisted case studies are built but stay out of the sitemap.
const unlistedWork = entries('projects')
  .filter((e) => e.flag('unlisted') === 'true')
  .map((e) => `/work/${e.slug}/`);
// A section index with nothing published is noindexed, so leave it out too.
// (Blog posts publish by default; notes are drafts by default.)
const blogEmpty = !entries('blog').some((e) => e.flag('draft') !== 'true');
const notesEmpty = !entries('notes').some((e) => e.flag('draft') === 'false');

// /articles is an unlisted career-journey section; /lab is the noindex
// prototype archive; /field-study is the Place & Story offer, unlisted
// until 2027-01-01. Keep all three out of the sitemap.
const hidden = [
  '/articles',
  '/lab',
  '/field-study',
  ...unlistedWork,
  ...(blogEmpty ? ['/blog/'] : []),
  ...(notesEmpty ? ['/field-notes/'] : []),
];

export default defineConfig({
  // The bare domain redirects to www, so www is the canonical host.
  site: 'https://www.donkrumpos.com',
  integrations: [mdx(), sitemap({ filter: (page) => !hidden.some((path) => page.includes(path)) })],
  // The personal-work page came off the site 2026-11-11; Yonder carries it.
  redirects: { '/worlds': '/about/',
    '/work/oshkosh-mill-madonnas': '/work/' },
  output: 'static',
  // Static by default; individual routes opt into on-demand rendering with
  // `export const prerender = false` (the contact form endpoint uses this).
  adapter: cloudflare(),
});
