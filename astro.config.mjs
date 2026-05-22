// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://deft-haupia-a28748.netlify.app/',
  integrations: [preact()]
});