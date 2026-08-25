import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://donkrumpos.com',
  // /articles is an unlisted career-journey section — keep it out of the sitemap while private.
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/articles') })],
  output: 'static',
  // Static by default; individual routes opt into on-demand rendering with
  // `export const prerender = false` (the contact form endpoint uses this).
  adapter: cloudflare(),
});
