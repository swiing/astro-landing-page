// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-landing-page-template.vercel.app/",

  vite: {
      plugins: [tailwindcss()]
	},

  integrations: [react()],

  experimental: {
    svg: true
  },
});