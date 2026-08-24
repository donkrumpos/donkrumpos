import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
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
    // Display control
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
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

export const collections = { projects, blog, recommendations };
