import { z } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

// Define schemas for our content collections
export const letsOpenItSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  category: z.enum(['models', 'frameworks', 'applications']),
});

// Blog schema has been removed as it's no longer needed

// Export type inferred from the schema
export type LetsOpenItSchema = z.infer<typeof letsOpenItSchema>;

// These are the full types returned by getCollection() and getEntry()
// Note: We're not using this approach because it causes TypeScript errors
// Instead, we're using type assertions in the individual files
/*
declare module 'astro:content' {
  interface Collections {
    'letsOpenIt': LetsOpenItCollection,
    'blog': BlogCollection
  }
}
*/

// Define collection type
type LetsOpenItCollection = z.infer<typeof letsOpenItSchema>;

// Export entry type for use in templates
export type LetsOpenItEntry = CollectionEntry<'letsOpenIt'>;
