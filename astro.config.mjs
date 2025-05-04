// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://sprightly-medovik-4d9ecb.netlify.app/',
  integrations: [preact()],
});
