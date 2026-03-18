import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Cascades Pub Meal Order',
        short_name: 'Cascades Pub',
        description: 'Collect meal orders at Cascades Pub',
        theme_color: '#1e40af',
        background_color: '#f3f4f6',
        display: 'standalone',
        scope: '/CursorCascadePubMealOrderer/',
        start_url: '/CursorCascadePubMealOrderer/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/CursorCascadePubMealOrderer/', // Set to your repo name
}); 