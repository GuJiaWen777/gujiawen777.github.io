import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().default('未分类'),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { notes };
