import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      fallbacks: ['serif'],
      weights: [200, 800],
    },
    {
      provider: fontProviders.google(),
      name: 'Libre Baskerville',
      cssVariable: '--font-baskerville',
      fallbacks: ['monospace'],
      weights: [400, 700],
    },
    {
      provider: fontProviders.google(),
      name: 'Chivo Mono',
      cssVariable: '--font-chivo',
      fallbacks: ['monospace'],
      weights: [200, 900],
    },
  ],
  server: {
    port: 3000,
  },
});
