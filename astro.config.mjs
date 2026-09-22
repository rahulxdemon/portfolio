import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import { SITE } from '@/features/shared/data/site';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      fallbacks: ['serif'],
      weights: [400, 500, 600, 800],
    },
    {
      provider: fontProviders.google(),
      name: 'Libre Baskerville',
      cssVariable: '--font-baskerville',
      fallbacks: ['monospace'],
      weights: [400, 500],
    },
    {
      provider: fontProviders.google(),
      name: 'Chivo Mono',
      cssVariable: '--font-chivo',
      fallbacks: ['monospace'],
      weights: [500],
    },
  ],

  server: {
    port: 3000,
  },

  integrations: [sitemap()],
});
