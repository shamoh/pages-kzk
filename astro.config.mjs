import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kacka.kramolis.cz',
  output: 'static',
  integrations: [sitemap()],
});
