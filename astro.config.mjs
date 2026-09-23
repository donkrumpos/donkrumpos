import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://donkrumpos.com',
  // /articles is an unlisted career-journey section; /lab is the noindex
  // prototype archive; /field-study is the Place & Story offer, unlisted
  // until 2027-01-01 — keep all three out of the sitemap.
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/articles') && !page.includes('/lab') && !page.includes('/field-study') })],
  output: 'static',
  // Static by default; individual routes opt into on-demand rendering with
  // `export const prerender = false` (the contact form endpoint uses this).
  adapter: cloudflare(),
});
