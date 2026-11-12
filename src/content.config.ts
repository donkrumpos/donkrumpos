import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // Files starting with an underscore (the template) are never loaded.
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Case study fields
    client: z.string().optional(),
    role: z.string().optional(),
    category: z.enum(['Web & Systems', 'Public Art', 'UI/UX', 'Branding', 'Design Systems', 'Print']),
    tools: z.array(z.string()).optional(),
    // Images
    thumbnail: z.string(),
    images: z.array(z.string()).optional(),
    // A full-page capture, shown after the write-up in a frame the reader
    // scrolls, so a very tall image never has to shrink to fit the screen.
    fullPage: z.string().optional(),
    // Live product — when set, the hero image links out to it
    liveUrl: z.string().url().optional(),
    // Display control
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Unlisted: the page is built and reachable by direct link, but stays off
    // the Work page, out of the sitemap, and noindexed.
    unlisted: z.boolean().default(false),
    // The piece to suggest at the end of this one (a project file name without
    // .md). Left out, it is the next job in the Work page's order.
    next: z.string().optional(),
    order: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const recommendations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recommendations' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    relationship: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

// Career-journey articles — the "enterprise-grade web for small orgs" series.
// Private by default (draft: true) and noindexed/unlisted until launch.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    order: z.number().optional(), // sequence within the career-journey arc
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(true), // NOTE: defaults to private, unlike blog
  }),
});

// Field Notes: the Place & Story practice shown, not declared. Each note
// starts with something noticed in a real place (Place → Notice → Imagine →
// Make). Foggy's voice and hand only. Drafts build in dev for preview and
// never reach production.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    number: z.number(), // "No. 01"; the order the notes were made
    place: z.string(), // e.g. "Fox River, Green Bay"
    coords: z.string().optional(), // e.g. "44.52° N · 88.01° W"
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, blog, recommendations, articles, notes };
