// lib/sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'h5bhg9k1', // از sanity.io بگیر
  dataset: 'production',
  apiVersion: '2025-10-31',
  useCdn: true, // برای کش بهتر
});