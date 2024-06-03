import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin'
import manifest from './public/manifest.json'

const viteManifestHackIssue846: Plugin & { renderCrxManifest: (manifest: any, bundle: any) => void } = {
    name: 'manifestHackIssue846',
    renderCrxManifest(_manifest, bundle) {
        bundle['manifest.json'] = bundle['.vite/manifest.json']
        bundle['manifest.json'].fileName = 'manifest.json'
        delete bundle['.vite/manifest.json']
    },
}

export default defineConfig({
  plugins: [
    react(),
    viteManifestHackIssue846,
    crx({
      manifest: manifest,
      
    })
  ],
  build: {
    rollupOptions: {
      input: {
        overlay: 'src/OverlayEntry.tsx',
        popup: 'src/main.tsx'
      },
      output: {
        entryFileNames: '[name].js',
        format: 'es', // Changed from 'iife' to 'es' to support code-splitting
        inlineDynamicImports: false,
      },
    },
    outDir: 'dist',
  },
});