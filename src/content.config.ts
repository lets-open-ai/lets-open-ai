import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { letsOpenItSchema } from './content-types';

const letsOpenIt = defineCollection({
    // Load Markdown and MDX files in the `src/content/lets-open-it/` directory.
    loader: glob({ base: './src/content/lets-open-it', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using our defined schema
    schema: letsOpenItSchema,
});

export const collections = { letsOpenIt };