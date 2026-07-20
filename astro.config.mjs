import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://donkrumpos.com',
  integrations: [mdx(), sitemap()],
  output: 'static',
  // Cloudflare Pages works great with static output
  // Switch to 'server' + adapter if you need SSR later
});
