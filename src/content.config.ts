import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A work = a Markdown file in src/content/portfolio/ with its picture next to it (see _vzor.md there).
// Files starting with "_" are templates, not works.
const portfolio = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** the picture next to the file, e.g. ./moje-kresba.jpg */
      obrazek: image(),
      /** kresba, grafika, foto, … : the filter buttons on the page are made of these */
      obor: z.string(),
      rok: z.number().int().optional(),
      /** e.g. "tužka", "akvarel", "Photoshop" */
      technika: z.string().optional(),
      /** a sample from the start of the site: shown with a "ukázka" badge until it is deleted */
      ukazka: z.boolean().default(false),
    }),
});

export const collections = { portfolio };
